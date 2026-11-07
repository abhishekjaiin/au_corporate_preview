"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Breadcrumb } from "@/components/Breadcrumb"
import { Reveal } from "@/components/Reveal"

export type CountryGuideGroup = {
  key: string
  /** "USA", "Australia" ... for the tab. */
  label: string
  /** "US", "Australian" ... as in "{adjective} companies". */
  adjective: string
  hub: { href: string; title: string; desc: string }
  pages: { href: string; title: string; desc: string }[]
}

const NAVY = "#081a42"
const GOLD = "#facc15"

/** The /blog index: every country guide, grouped by country. */
export function BlogIndex({ guides }: { guides: CountryGuideGroup[] }) {
  const [country, setCountry] = useState(guides[0]?.key)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* BREADCRUMB — light strip above the dark masthead */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Blog" }]} />
        </div>
      </div>

      {/* ================= MASTHEAD ================= */}
      <section
        className="relative overflow-hidden py-20 sm:py-24"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0d2a5c 100%)` }}
      >
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: GOLD }}
        />
        <div
          aria-hidden="true"
          className="absolute -left-20 bottom-0 h-72 w-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "#3b82f6" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <Reveal className="max-w-2xl">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", border: `1px solid ${GOLD}` }}
            >
              <Sparkles size={12} style={{ color: GOLD }} /> Insights &amp; Updates
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-white">Our Blog</h1>
            <p className="mt-3 text-white/70 text-lg">
              Guides for foreign companies setting up and running a subsidiary in India, country by country.
            </p>
            <a
              href="#country-guides"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: GOLD }}
            >
              India entry guides for US, Australian, UK, Singapore, Japanese, German, Chinese, Hong Kong, Russian and Spanish companies <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 relative z-10 pb-24">
        {/* ================= COUNTRY GUIDES ================= */}
        <section id="country-guides" className="pt-16 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue">India Entry Guides by Country</h2>
          <p className="mt-2 mb-6 text-gray-600 max-w-3xl">
            Complete guide series for setting up and running an Indian subsidiary from your home country: incorporation,
            FEMA, tax treaties, payroll, compliance and exit, with a full FAQ for each country.
          </p>

          <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Choose a country">
            {guides.map((g) => (
              <button
                key={g.key}
                type="button"
                role="tab"
                aria-selected={country === g.key}
                aria-controls={`guides-${g.key}`}
                onClick={() => setCountry(g.key)}
                className="rounded-full px-4 py-2 text-sm font-semibold transition-all"
                style={
                  country === g.key
                    ? { backgroundColor: NAVY, color: "white" }
                    : { backgroundColor: "white", color: "#4b5563", border: "1px solid #e5e7eb" }
                }
              >
                {g.label} <span className="opacity-60">({g.pages.length + 1})</span>
              </button>
            ))}
          </div>

          {/* Every country's list stays in the HTML (only hidden), so all guides are crawlable. */}
          {guides.map((g) => (
            <div key={g.key} id={`guides-${g.key}`} role="tabpanel" hidden={country !== g.key}>
              <Link
                href={g.hub.href}
                className="group mb-6 flex flex-col gap-2 rounded-2xl p-6 sm:p-8 text-white transition-shadow hover:shadow-2xl"
                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0d2a5c 100%)` }}
              >
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: GOLD }}>
                  Start here · Guide for {g.adjective} companies
                </span>
                <span className="text-xl sm:text-2xl font-bold group-hover:underline underline-offset-4">{g.hub.title}</span>
                <span className="text-white/75 max-w-3xl">{g.hub.desc}</span>
              </Link>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.pages.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="group flex h-full flex-col rounded-xl bg-white border border-gray-100 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    <h3 className="font-semibold mb-1.5 text-gray-900 group-hover:text-[#081a42] line-clamp-2">{p.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2 flex-1">{p.desc}</p>
                    <span className="mt-3 text-yellow-500 text-sm flex items-center gap-1">
                      Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
