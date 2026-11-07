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

const PAGE_URL = "https://www.theaucorp.com/usa-to-india/how-long-it-takes-to-set-up-from-the-us"
const PARENT_URL = "https://www.theaucorp.com/usa-to-india"

const toc = [
  { id: "country-specific", label: "What's different for US companies" },
  { id: "plan", label: "The schedule" },
  { id: "week", label: "Week by week" },
  { id: "tz", label: "Working across the time difference" },
  { id: "delays", label: "What delays a US project" },
  { id: "after", label: "Deadlines that start the clock after incorporation" },
  { id: "urgent", label: "If a customer date forces speed" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How long does it take a US company to set up in India?", a: "About two to three months from board decision to a company that can invoice. Incorporation takes two to three weeks from a complete file." },
  { q: "What is the slowest step?", a: "Usually the bank account and the first remittance, followed by the US notary and apostille." },
  { q: "How long does a US apostille take?", a: "It varies by state, from days to a few weeks. Ask the notary which route is fastest." },
  { q: "When must shares be allotted?", a: "Within 60 days of receiving the money." },
  { q: "When is FC-GPR due?", a: "Within 30 days of allotting the shares." },
  { q: "When is INC-20A due?", a: "Within 180 days of incorporation." },
  { q: "How does the time difference affect the project?", a: "India is 9.5 to 12.5 hours ahead, so a query can lose a day. Name owners on both sides and use one weekly call." },
  { q: "Can some steps run in parallel?", a: "Yes. US documents, Indian director credentials and name, and the bank discussion can all start in week one." },
  { q: "What if I need the company by a fixed date?", a: "Tell us at the start so that the long steps start first and an interim arrangement can be considered." },
]

const relatedCards = [
  { title: "What It Costs a US Company to Set Up a Subsidiary in India: One-Time Charges, Annual Running Costs, Capital and the Costs Teams Forget", desc: "A budgeting guide for US companies: what the one-time set-up costs, what the subsidiary costs every year to keep compliant, how to size the capital you invest, and a template and question list for comparing quotes. The AU Corporate set-up fee is stated; other lines are framed so you can build your own estimate.", href: "/usa-to-india/cost-of-setting-up-a-subsidiary-in-india-from-the-us" },
  { title: "Incorporation process", desc: "The online steps from name approval to the certificate.", href: "/usa-to-india/incorporation-process" },
  { title: "Documents and apostille", desc: "Preparing Delaware and other US documents for India.", href: "/usa-to-india/documents-and-apostille" },
  { title: "Resident director", desc: "The 182-day rule and who can fill it.", href: "/usa-to-india/resident-director" },
]

export default function HowLongItTakesToSetUpFromTheUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How Long Does a US Company Take to Set Up in India? A Realistic Timeline from Decision to First Invoice, with Delaware Documents and US Time Zones"
        description="A schedule for a US parent: US documents and apostille, Indian incorporation, bank onboarding across a 9.5 to 12.5 hour time difference, remittance and the 60-day and 30-day deadlines, plus what to do when a customer deadline forces speed."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-US"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/usa-to-india" },
          { label: "How Long It Takes to Set Up an Indian Subsidiary from the US: Timeline and Time Zones" },
        ]}
      />

      <GuideHero
        eyebrow="Timeline: planning"
        title="How Long Does a US Company Take to Set Up in India? A Realistic Timeline from Decision to First Invoice, with Delaware Documents and US Time Zones"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          From a board decision to a company that can invoice usually takes about two to three months. US
          documents, with notary and apostille, take one to three weeks. Incorporation in India takes two to
          three weeks from a complete file, and the bank account takes one to four weeks, often the longest
          step. After the money arrives, shares must be allotted within 60 days, the foreign investment filing
          is due within 30 days of allotment, and the declaration of commencement of business is due within 180
          days of incorporation. India is between 9.5 and 12.5 hours ahead of US time zones, so a decision made
          in the US morning is read in India the next day, and queries and signatures can lose a day each time.
          Plan for that rhythm and run the US documents, the Indian name and director steps and the bank
          discussion in parallel.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the US
          </Link>
        </p>

        <GuideCountryContext country="usa" topic="setup-timeline" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["US documents", "1 to 3 weeks with notary and state apostille, depending on the state"],
                ["Director credentials and name", "Days; run in parallel"],
                ["Incorporation", "2 to 3 weeks from a complete file"],
                ["Bank account", "1 to 4 weeks"],
                ["Allot shares", "Within 60 days of receiving the money"],
                ["FC-GPR", "Within 30 days of allotment"],
                ["INC-20A", "Within 180 days of incorporation"],
                ["Time difference", "India is 9.5 to 12.5 hours ahead of US time zones, depending on the zone and daylight saving"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The schedule</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Phase</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Duration</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Depends on</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Parallel with</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Board approval and structure", "1 to 2 weeks", "Board calendar and investor consents", "None"],
                ["US documents: certificate of good standing, resolutions, power of attorney, notary, apostille", "1 to 3 weeks", "State office and notary", "Name, DIN and bank steps"],
                ["DIN, DSC and name reservation", "Several days", "Passport copies and video verification", "US documents"],
                ["Bank pre-discussion", "1 to 2 weeks to start", "Beneficial ownership papers", "US documents"],
                ["Incorporation and PAN, TAN", "2 to 3 weeks", "Registrar queries", "Bank discussion"],
                ["Bank account opening", "1 to 4 weeks", "Bank checks", "Preparation of remittance"],
                ["Remittance, allotment and FC-GPR", "1 to 3 weeks; then up to 30 days to file", "US bank speed and Indian certificates", "First hires"],
                ["Commencement and registrations", "Within 180 days; earlier is better", "Capital received and shares allotted", "Hiring"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                  <td className="border border-gray-300 p-3">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="week" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Week by week</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Week 1:</strong> approvals; decide the Resident Director; start the US documents and the director credentials.</li>
          <li><strong>Weeks 2 to 3:</strong> notarise and apostille; name reserved; bank pre-discussion; draft charter documents.</li>
          <li><strong>Weeks 3 to 5:</strong> file SPICe+ with AGILE-PRO-S; answer queries; receive the certificate, PAN and TAN; hold the first board meeting.</li>
          <li><strong>Weeks 5 to 8:</strong> bank account opened; first auditor appointed within 30 days of incorporation; capital remitted from the US.</li>
          <li><strong>Weeks 8 to 10:</strong> shares allotted within 60 days of receipt; FC-GPR filed within 30 days of allotment.</li>
          <li><strong>By day 180:</strong> INC-20A filed; GST, payroll and other registrations completed as needed.</li>
        </ol>

        <h2 id="tz" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Working across the time difference</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Agree one weekly call at a time that works for both, for example early morning in the US and evening in India.</li>
          <li>Send signature packets by the end of the US day so that Indian staff can act on them at the start of the next.</li>
          <li>Use electronic signatures where Indian rules accept them and keep wet-ink for documents that must go to the apostille.</li>
          <li>Name an Indian owner and a US owner for each step, so that queries are answered within one working day.</li>
          <li>Remember US holidays and the Indian public holidays, which fall on different dates, when planning notary and filing dates.</li>
        </ul>

        <h2 id="delays" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What delays a US project</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>State-specific apostille times.</strong> Some state offices take days and some take weeks. Ask the notary which route is fastest.</li>
          <li><strong>Mismatched names.</strong> A name that differs between passport, certificate of good standing and power of attorney stops filings. See <Link href="/usa-to-india/documents-and-apostille" className="text-blue-800 font-semibold hover:underline">documents and apostille</Link>.</li>
          <li><strong>Bank onboarding.</strong> Indian banks ask for ownership to individuals and for source of funds, and some need a director to verify identity.</li>
          <li><strong>Investor consents.</strong> Venture-backed parents may need consent from investors for an overseas subsidiary.</li>
          <li><strong>Late registrations.</strong> Hiring before payroll registrations are in place leads to penalties.</li>
        </ul>

        <h2 id="after" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Deadlines that start the clock after incorporation</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Event</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Deadline</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Incorporation", "Within 30 days", "First auditor appointed (Form ADT-1)"],
                ["Money received from the US parent", "Within 60 days", "Allot shares"],
                ["Shares allotted", "Within 30 days", "FC-GPR filed"],
                ["Incorporation", "Within 180 days", "INC-20A filed"],
                ["Financial year end of 31 March", "By 30 September", "Annual general meeting; director KYC"],
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

        <h2 id="urgent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">If a customer date forces speed</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          If a contract needs an Indian entity by a fixed date, tell us on day one. We will sequence the steps
          with the longest fixed durations first, say honestly whether the date is realistic and, if not,
          discuss interim arrangements such as an employer of record or a local partner while the company is
          formed. See{" "}
          <Link href="/usa-to-india/eor-vs-subsidiary" className="text-blue-800 font-semibold hover:underline">employer of record or subsidiary</Link>{" "}
          and{" "}
          <Link href="/usa-to-india/incorporation-process" className="text-blue-800 font-semibold hover:underline">the incorporation process</Link>.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.irs.gov/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Internal Revenue Service (US)</a>,{" "}
          <a href="https://www.bis.gov/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Bureau of Industry and Security (US)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/usa-to-india/how-long-it-takes-to-set-up-from-the-us" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/usa-to-india/faq"
          seeAllLabel="See all the FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and US rules
          change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Working to a Launch Date?"
        description="Tell us when you need the Indian company running, and we'll build a week-by-week plan from apostille to bank account."
      />
    </main>
  )
}
