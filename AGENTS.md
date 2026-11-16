<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Vercel Fast Origin Transfer rules (do not break)

This site's Vercel project once exhausted its Fast Origin Transfer quota. The build now runs
`scripts/check-transfer-budget.mjs` (see `vercel.json` buildCommand), which fails the deploy if
any of these come back:

- Never enable `experimental.inlineCss` (or put stylesheets/`@font-face` in a layout's JSX).
- Public pages must be prerendered or ISR-cached. No `force-dynamic`, `cookies()`, `headers()`
  or `searchParams` in public pages. DB-backed pages (e.g. `/insights`) use `revalidate` +
  `revalidatePath()` on publish, never `force-dynamic`. Only `/admin/*`, `/api/auth` and `/og`
  may render per request.
- Any route handler that reads the request must send `s-maxage` or `CDN-Cache-Control`;
  `max-age` alone is browser-only and Vercel's CDN will not cache it.
- Navbar/footer links use `prefetch={false}`; don't add default-prefetch links in site-wide
  components.
- Page size budgets are in the script. Split very long pages (the country FAQ pages are the
  largest) rather than raising them.
- Self-host images in `public/`; don't add `images.remotePatterns` or hotlink large media.
