import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideFaqList } from "@/components/guide/GuideFaqList"
import { GuideRelatedCards } from "@/components/guide/GuideRelatedCards"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideServiceBox } from "@/components/guide/GuideServiceBox"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideSources } from "@/components/guide/GuideSources"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"
import { GuideCountryContext } from "@/components/guide/GuideCountryContext"

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/compliance-calendar"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "monthly", label: "Monthly and quarterly rhythm" },
  { id: "annual", label: "Annual cycle" },
  { id: "events", label: "Event-driven filings" },
  { id: "hk", label: "The Hong Kong side of the calendar" },
  { id: "tips", label: "Practical tips" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "When is the AGM of an Indian subsidiary due?", a: "Within six months of the 31 March year end, which is by 30 September in most cases." },
  { q: "What is due after the AGM?", a: "AOC-4 (financial statements) within 30 days and MGT-7 (annual return) within 60 days of the AGM." },
  { q: "When is the FLA return due?", a: "By 15 July each year." },
  { q: "When must TDS be deposited?", a: "By the 7th of the month following the deduction, with returns filed quarterly." },
  { q: "What are the advance tax dates?", a: "15 June, 15 September, 15 December and 15 March." },
  { q: "What is the filing deadline for FC-GPR?", a: "Within 30 days of allotting shares to the foreign investor." },
  { q: "Do approval conditions need tracking?", a: "Yes. If the Press Note 3 approval attached conditions, such as reporting or shareholding terms, track them on the same calendar as statutory filings." },
]

const relatedCards = [
  { title: "How to Incorporate a Private Limited Company in India as a Hong Kong Parent: Approval, SPICe+, Bank Account and Post-Incorporation Filings", desc: "Step-by-step route for a Hong Kong parent to set up an Indian private limited company: Press Note 3 approval, name, SPICe+, DIN and DSC, resident director, PAN and TAN, bank account, capital inflow, FC-GPR and first filings.", href: "/hong-kong-to-india/incorporation-steps" },
  { title: "Hiring Staff in India as a Hong Kong-Owned Company: Employment Contracts, Provident Fund, ESI, Gratuity and Labour Codes", desc: "How a Hong Kong-owned Indian subsidiary hires locally: offer and employment contracts, payroll taxes, provident fund, ESI, gratuity, labour codes, shops and establishments law, notice periods, POSH and differences from Hong Kong practice.", href: "/hong-kong-to-india/hiring-in-india" },
  { title: "What a Hong Kong Parent Must Do at Home: Registers, Annual Filings, Profits Tax Position and Foreign-Sourced Income Rules", desc: "The Hong Kong-side steps for a parent investing in India: no outbound approval or exchange controls, company secretary and registers, significant controllers register, annual return and audit, profits tax on Indian dividends and the FSIE regime.", href: "/hong-kong-to-india/hong-kong-parent-obligations" },
  { title: "Twelve Common Mistakes Hong Kong Companies Make in India and How to Avoid Them", desc: "The most common mistakes of Hong Kong companies entering India: skipping Press Note 3, thin hub structures, late FEMA filings, weak treaty paperwork, secondment tax errors, stale apostilles, unstamped contracts and ignoring the Indian calendar.", href: "/hong-kong-to-india/common-mistakes" },
]

export default function ComplianceCalendarPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Compliance Calendar: Indian Deadlines and the Hong Kong Filings They Feed"
        description="A month-by-month compliance calendar for an Indian subsidiary of a Hong Kong parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return, approval conditions and the Hong Kong-side annual return and profits tax filings."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Compliance Calendar for an Indian Subsidiary of a Hong Kong Company" },
        ]}
      />

      <GuideHero
        eyebrow="Calendar: compliance"
        title="Compliance Calendar: Indian Deadlines and the Hong Kong Filings They Feed"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Indian subsidiary runs on a fixed rhythm: TDS by the 7th, PF and ESI by the 15th, GST on the 11th
          and 20th, advance tax on 15 June, 15 September, 15 December and 15 March, then the AGM within six
          months of the 31 March year end, AOC-4 within 30 days and MGT-7 within 60 days of the AGM, and the FLA
          return by 15 July. A Hong Kong-owned company has extra items: any conditions attached to the Press
          Note 3 approval and the parent&apos;s own Hong Kong annual return, audited accounts and profits tax
          return. Put them on one calendar so the Indian numbers reach Hong Kong in time. Hong Kong&apos;s year
          end is often 31 December or 31 March, so check alignment.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="compliance-calendar" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Monthly", "TDS by the 7th; PF and ESI by the 15th; GSTR-1 by the 11th and GSTR-3B by the 20th"],
                ["Quarterly", "TDS returns; advance tax instalments 15 June, 15 September, 15 December, 15 March"],
                ["Annual (company)", "AGM within 6 months of year end; AOC-4 within 30 days and MGT-7 within 60 days of the AGM"],
                ["Annual (FEMA)", "FLA return by 15 July"],
                ["Event-based", "FC-GPR within 30 days of allotment; Form 41 before each treaty payment"],
                ["Approval conditions", "Track any reporting or shareholding conditions in the Press Note 3 approval letter"],
                ["Year end", "31 March for the Indian subsidiary"],
                ["Hong Kong side", "Annual return, audited accounts and profits tax return of the parent on the Hong Kong calendar"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="monthly" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Monthly and quarterly rhythm</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">When</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Who</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["7th of each month", "Deposit TDS, including Withholding Tax on payments abroad", "Finance"],
                ["11th", "GSTR-1 outward supplies", "Finance"],
                ["15th", "PF and ESI contributions", "Payroll"],
                ["20th", "GSTR-3B summary return and tax payment", "Finance"],
                ["Quarterly", "TDS returns for salary and non-salary payments", "Finance"],
                ["15 Jun, 15 Sep, 15 Dec, 15 Mar", "Advance tax instalments", "Finance and tax adviser"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="annual" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Annual cycle</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Period</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Note</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["31 March", "Financial year end", "Fixed for most companies with a foreign parent; a Hong Kong parent may use a different year end"],
                ["April to June", "Closing accounts and audit", "Statutory auditor appointed for five years at the first AGM"],
                ["15 July", "FLA return", "Annual return on foreign liabilities and assets"],
                ["By 30 September", "AGM within six months of year end", "Extension possible only with the Registrar"],
                ["AGM + 30 days", "AOC-4 financial statements", "File with the Registrar"],
                ["AGM + 60 days", "MGT-7 annual return", "File with the Registrar"],
                ["Tax return", "Income tax return and Form 48 where applicable", "Check the current due date under the Income-tax Act, 2025"],
                ["Before year end", "Director KYC and board meetings", "At least four board meetings a year, no more than 120 days apart"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="events" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Event-driven filings</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>New share allotment:</strong> allot within 60 days of receipt of funds; file FC-GPR within 30 days of allotment. See <Link href="/hong-kong-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
          <li><strong>Payments abroad:</strong> Form 41 and the residence certificate on file; Form 145 and, if required, Form 146 with the bank.</li>
          <li><strong>Directors and officers:</strong> DIR-12 within 30 days of a change; directors who are land-border country citizens need clearance before appointment.</li>
          <li><strong>Beneficial owner changes:</strong> BEN-2 where a significant beneficial owner (10%) is declared; changes to the approved ownership can need fresh approval. See <Link href="/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" className="text-blue-800 font-semibold hover:underline">Press Note 3</Link>.</li>
          <li><strong>Registered office change:</strong> within the same city and across cities follow different forms and approvals.</li>
        </ul>

        <h2 id="hk" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Hong Kong side of the calendar</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The Hong Kong parent consolidates its Indian subsidiary, so Indian closing dates must fit the group
          reporting timetable. The annual return to the Companies Registry, audited accounts, the profits tax
          return and any group reporting belong to the Hong Kong calendar. The Hong Kong items here are
          indicative; your Hong Kong adviser keeps the authoritative list. Agree a fixed hand-over date for the
          Indian numbers each quarter. See{" "}
          <Link href="/hong-kong-to-india/hong-kong-parent-obligations" className="text-blue-800 font-semibold hover:underline">Hong Kong parent obligations</Link>.
        </p>

        <h2 id="tips" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Practical tips</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Name an owner and a deputy for every line.</li>
          <li>File early: government portals slow down on deadline days.</li>
          <li>Keep a single shared folder for challans, returns, approvals and acknowledgements, so an audit in either place finds the same file.</li>
          <li>Check each date against the official portal at the start of the year; due dates are sometimes extended or moved.</li>
        </ul>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.ird.gov.hk/eng/welcome.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Inland Revenue Department (Hong Kong)</a>,{" "}
          <a href="https://www.cr.gov.hk/en/home/index.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Companies Registry (Hong Kong)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/hong-kong-to-india/compliance-calendar" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/hong-kong-to-india/faq"
          seeAllLabel="See all 157 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "GST Portal", href: "https://www.gst.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Hong Kong
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Keeping India's Calendar Next to Hong Kong's?"
        description="Tell us your incorporation date and the parent's year-end, and we'll map every ROC, tax and FEMA deadline for the subsidiary."
      />
    </main>
  )
}
