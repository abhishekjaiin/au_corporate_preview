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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/compliance-calendar"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "year-map", label: "Indian year against the Russian calendar year" },
  { id: "monthly", label: "Monthly and quarterly" },
  { id: "annual", label: "Annual Indian filings" },
  { id: "screening", label: "Screening and KYC dates" },
  { id: "moscow", label: "Figures the Russian parent needs" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Which year does the Indian subsidiary use?", a: "1 April to 31 March." },
  { q: "How does the Russian parent get calendar-year figures?", a: "From Indian monthly management accounts re-cut to January to December." },
  { q: "When is the Indian AGM due?", a: "By 30 September." },
  { q: "When is the FLA return due?", a: "By 15 July each year." },
  { q: "When is the income tax return due?", a: "By 31 October, or 30 November with a transfer pricing report." },
  { q: "Why is sanctions screening in the calendar?", a: "Because bank KYC and counterparty checks for Russian-owned companies need regular refreshing." },
  { q: "When is Withholding Tax on payments to Russia deposited?", a: "By the 7th of the following month." },
  { q: "Who files director KYC?", a: "Every director, by 30 September." },
]

const relatedCards = [
  { title: "Sanctions and Payments", desc: "Screening and banking.", href: "/russia-to-india/sanctions-and-payments-for-russian-companies" },
  { title: "Russian Parent Obligations", desc: "Russian-side reporting.", href: "/russia-to-india/russian-parent-obligations" },
  { title: "Transfer Pricing", desc: "Report dates.", href: "/russia-to-india/transfer-pricing" },
  { title: "Funding and FEMA", desc: "Event-based filings.", href: "/russia-to-india/funding-and-fema" },
]

export default function ComplianceCalendarPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Compliance Calendar: Indian Deadlines and the Russian Filings They Feed"
        description="A month-by-month compliance calendar for an Indian subsidiary of a Russian parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return, sanctions reviews and the Russian-side reporting that depends on Indian numbers."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Compliance Calendar for an Indian Subsidiary of a Russian Company" },
        ]}
      />

      <GuideHero
        eyebrow="Calendar: compliance"
        title="Compliance Calendar: Indian Deadlines and the Russian Filings They Feed"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The Indian subsidiary of a Russian parent follows India&apos;s 1 April to 31 March year: monthly TDS, GST and payroll filings, quarterly advance tax, and an annual cycle of audit, AGM by 30 September, ROC returns, the tax return and the RBI&apos;s FLA return by 15 July. Russian parents report on the calendar year, so Indian figures must be re-cut for Moscow, and sanctions re-screening and bank KYC refreshes should sit in the same calendar.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="compliance-calendar" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Indian year", "1 April to 31 March"],
                ["Russian parent", "Calendar year reporting"],
                ["Monthly", "TDS by the 7th; GSTR-1 by the 11th; GSTR-3B by the 20th; PF and ESI by the 15th"],
                ["Annual", "AGM by 30 September; AOC-4 and MGT-7 after the AGM; tax return by 31 October or 30 November"],
                ["RBI", "FLA return by 15 July; FC-GPR within 30 days of allotment"],
                ["Screening", "Re-screen owners and counterparties at least quarterly and on list changes"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="year-map" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian year against the Russian calendar year</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Period</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian subsidiary</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Russian parent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">January to March</th>
                <td className="border border-gray-300 p-3">Last quarter of the Indian year</td>
                <td className="border border-gray-300 p-3">First quarter of the Russian year</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">April to June</th>
                <td className="border border-gray-300 p-3">Close and audit of the previous Indian year</td>
                <td className="border border-gray-300 p-3">Second quarter</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">July to September</th>
                <td className="border border-gray-300 p-3">AGM by 30 September</td>
                <td className="border border-gray-300 p-3">Third quarter</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">October to December</th>
                <td className="border border-gray-300 p-3">Tax return; half-year review</td>
                <td className="border border-gray-300 p-3">Year end on 31 December</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          For the Russian annual accounts and currency control reports, the Indian results for January to December are built from monthly management accounts, not the audited 31 March statements.
        </p>
        <h2 id="monthly" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Monthly and quarterly</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>7th: TDS deposit, including Withholding Tax on payments to Russia.</li>
          <li>11th and 20th: GSTR-1 and GSTR-3B.</li>
          <li>15th: provident fund and ESI.</li>
          <li>15 June, 15 September, 15 December, 15 March: advance tax.</li>
          <li>After each quarter: TDS returns.</li>
        </ul>
        <h2 id="annual" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Annual Indian filings</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Close the books after 31 March and complete the statutory audit.</li>
          <li>File the FLA return with the RBI by 15 July.</li>
          <li>Hold the AGM by 30 September and file AOC-4 and MGT-7.</li>
          <li>File the income tax return, with Form 48 where required.</li>
          <li>Complete director KYC by 30 September.</li>
        </ol>
        <h2 id="screening" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Screening and KYC dates</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          For a Russian-owned company the compliance calendar has an extra line: sanctions screening. Re-screen shareholders, beneficial owners, banks and major counterparties at least quarterly and whenever US, EU or UK lists change, and refresh bank KYC when the bank asks. A lapsed KYC can freeze the account just before a statutory payment is due.
        </p>
        <h2 id="moscow" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Figures the Russian parent needs</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Calendar-year results for the parent&apos;s accounts and controlled foreign company review.</li>
          <li>Information for foreign participation and account notifications to the Russian tax authority.</li>
          <li>Records for currency control on capital, dividends and repayments.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We run the Indian filing calendar, prepare calendar-year figures for the Russian parent, and keep screening and KYC dates alongside the statutory ones.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">accounting, reporting and audit support</Link> and <Link href="/secretarial-roc-compliance" className="text-blue-800 font-semibold hover:underline">secretarial and ROC compliance</Link>.
        </p>

        <GuideServiceBox path="/russia-to-india/compliance-calendar" />
        <GuideCTA
          title="Running India and Russia on different years?"
          description="Tell us your reporting dates, and we will map every Indian deadline."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/russia-to-india/faq"
          seeAllLabel="See all Russian FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Russian parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Keeping India's Calendar Next to Russia's?"
        description="Tell us your incorporation date, and we'll map every ROC, tax, FEMA and screening deadline for the subsidiary."
      />
    </main>
  )
}
