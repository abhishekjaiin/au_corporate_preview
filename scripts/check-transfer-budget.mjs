#!/usr/bin/env node
/**
 * Fast Origin Transfer guard. Runs after `next build` and FAILS THE BUILD
 * (so Vercel never deploys it) if a change would bring back the problems that
 * exhausted our Vercel Fast Origin Transfer quota in Nov 2026:
 *
 *  1. experimental.inlineCss enabled (copies the whole stylesheet into every
 *     page and every RSC/prefetch payload).
 *  2. Stylesheets or @font-face rules embedded in RSC payloads (same symptom,
 *     whatever the cause).
 *  3. A page's HTML or RSC payload over the size budget.
 *  4. A server-rendered route (force-dynamic, cookies(), headers(), etc.) that
 *     isn't on the allowlist below.
 *  5. A route handler that runs on every request without a CDN cache header
 *     (s-maxage / CDN-Cache-Control / Vercel-CDN-Cache-Control) and isn't
 *     force-static.
 *
 * To raise a budget or allow a dynamic route, edit the constants below in the
 * same PR and say why: the point is that it never happens by accident.
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs"
import { join, relative, sep } from "node:path"
import { gzipSync } from "node:zlib"

// ---- Budgets (gzip bytes, what actually crosses the network) ----
// Set just above the largest page at the time this guard was added
// (blog/usa-to-india/faq: 160 KB HTML / 82 KB RSC gzipped) so no page can
// grow past today's worst case. Lower these as big pages get split up.
const MAX_HTML_GZ = 170 * 1024
const MAX_RSC_GZ = 90 * 1024
// Route handlers / pages allowed to render per request. Each one MUST send a
// CDN cache header (checked below for route handlers).
const ALLOWED_DYNAMIC = new Set(["/og", "/api/auth/[...nextauth]"])
// Login-only dashboard: low traffic, must render per request.
const ALLOWED_DYNAMIC_PREFIXES = ["/admin"]

const root = process.cwd()
const errors = []
const fail = (msg) => errors.push(msg)

function walk(dir, out = []) {
  if (!existsSync(dir)) return out
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".")) continue
    const p = join(dir, name)
    statSync(p).isDirectory() ? walk(p, out) : out.push(p)
  }
  return out
}

// 1. next.config must not enable inlineCss
for (const f of ["next.config.mjs", "next.config.js", "next.config.ts", "next.config.cjs"]) {
  const p = join(root, f)
  if (!existsSync(p)) continue
  const src = readFileSync(p, "utf8").replace(/\/\/.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, "")
  if (/inlineCss\s*:\s*true/.test(src)) fail(`${f}: experimental.inlineCss is enabled. Remove it.`)
}

// 2 + 3. Inspect the prerendered output
const appOut = join(root, ".next/server/app")
const built = walk(appOut).filter((p) => p.endsWith(".html") || p.endsWith(".rsc"))
if (built.length === 0) {
  console.warn("[transfer-budget] no prerendered output in .next/server/app; skipping size checks")
}
for (const p of built) {
  const buf = readFileSync(p)
  const gz = gzipSync(buf).length
  const rel = relative(appOut, p)
  if (p.endsWith(".rsc")) {
    const s = buf.toString("utf8")
    if (/@font-face\s*\{|@layer\s+(properties|theme|base|utilities)/.test(s)) {
      fail(`${rel}: CSS is embedded in the RSC payload (inlineCss or a <style> in a layout?).`)
    }
    if (gz > MAX_RSC_GZ) fail(`${rel}: RSC payload ${(gz / 1024).toFixed(1)} KB gz > ${MAX_RSC_GZ / 1024} KB budget.`)
  } else if (gz > MAX_HTML_GZ) {
    fail(`${rel}: HTML ${(gz / 1024).toFixed(1)} KB gz > ${MAX_HTML_GZ / 1024} KB budget.`)
  }
}

// 4. Every route must be prerendered unless allowlisted
let prerenderedRoutes = new Set()
const appPathsManifest = join(root, ".next/app-path-routes-manifest.json")
const prerenderManifest = join(root, ".next/prerender-manifest.json")
if (existsSync(appPathsManifest) && existsSync(prerenderManifest)) {
  const routes = Object.values(JSON.parse(readFileSync(appPathsManifest, "utf8")))
  const pm = JSON.parse(readFileSync(prerenderManifest, "utf8"))
  const prerendered = new Set([...Object.keys(pm.routes || {}), ...Object.keys(pm.dynamicRoutes || {})])
  prerenderedRoutes = prerendered
  for (const r of new Set(routes)) {
    if (r.startsWith("/_") || prerendered.has(r) || ALLOWED_DYNAMIC.has(r)) continue
    if (ALLOWED_DYNAMIC_PREFIXES.some((p) => r === p || r.startsWith(p + "/"))) continue
    // metadata files (icon, robots, sitemap) are listed under their file path
    if (prerendered.has(r.replace(/\/route$/, ""))) continue
    fail(`${r}: renders on every request (not prerendered). Make it static, or add it to ALLOWED_DYNAMIC with a CDN cache header.`)
  }
}

// 5. Route handlers that run per request need a CDN cache header
const appDir = existsSync(join(root, "app")) ? join(root, "app") : join(root, "src/app")
for (const p of walk(appDir).filter((f) => /[\\/]route\.(t|j)sx?$/.test(f))) {
  const src = readFileSync(p, "utf8")
  if (/dynamic\s*=\s*["']force-static["']/.test(src)) continue
  if (/export\s+const\s+revalidate\s*=\s*[1-9]/.test(src)) continue // ISR-cached
  if (!/export\s+(async\s+)?function\s+GET|export\s+const\s+GET/.test(src)) continue
  if (/s-maxage|CDN-Cache-Control/i.test(src)) continue
  const route = "/" + relative(appDir, p).split(sep).slice(0, -1).filter((s) => !/^\(.*\)$/.test(s)).join("/")
  if (prerenderedRoutes.has(route)) continue

  // statically prerendered handlers (no request access) are fine
  if (!/request|searchParams|headers\(|cookies\(/.test(src)) continue
  fail(`${route}: GET handler reads the request but sends no s-maxage / CDN-Cache-Control header, so every hit reaches the function.`)
}

if (errors.length) {
  console.error("\n[transfer-budget] FAILED: this build would raise Vercel Fast Origin Transfer:\n")
  for (const e of errors.slice(0, 25)) console.error("  - " + e)
  if (errors.length > 25) console.error(`  ... and ${errors.length - 25} more`)
  console.error("\nSee scripts/check-transfer-budget.mjs for the rules and how to change a budget.\n")
  process.exit(1)
}
console.log(`[transfer-budget] OK: ${built.length} prerendered files within budget.`)
