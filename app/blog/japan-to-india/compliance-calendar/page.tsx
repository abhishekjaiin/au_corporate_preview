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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/compliance-calendar"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "rhythm", label: "The monthly rhythm" },
  { id: "quarters", label: "Quarter by quarter" },
  { id: "year", label: "The annual cycle against a Japanese year end" },
  { id: "events", label: "Event-driven filings" },
  { id: "parent-dates", label: "Dates the Japanese parent should hold" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does a Japanese parent with a 31 March year end avoid a reporting bridge?", a: "Mostly, because both years end on 31 March. The Indian accounts still follow Indian standards, so the group pack maps them to J-GAAP or IFRS." },
  { q: "When must the Indian AGM be held?", a: "Within six months of the year end, so by 30 September for a 31 March year." },
  { q: "When is the Indian income tax return due?", a: "By 31 October, or 30 November where the company must file a transfer pricing report." },
  { q: "What is the FLA return?", a: "An annual RBI return of foreign liabilities and assets, due by 15 July from every Indian company with foreign investment." },
  { q: "When is Withholding Tax on payments to Japan deposited?", a: "By the 7th of the following month, with the treaty rate supported by a Certificate of Residence and Form 41." },
  { q: "How many board meetings are needed?", a: "Four a year with no more than 120 days between two meetings, with relaxations for small companies." },
  { q: "What is INC-20A?", a: "A declaration that the subscribers have paid for their shares, filed within 180 days of incorporation before the company starts business." },
  { q: "Who files DIR-3 KYC?", a: "Every director with a DIN, including directors living in Japan, by 30 September each year." },
]

const relatedCards = [
  { title: "Audit and Internal Controls", desc: "The statutory audit and J-SOX scope for Japanese groups.", href: "/japan-to-india/audit-icofr" },
  { title: "Transfer Pricing", desc: "Year-end true-ups and the transfer pricing report.", href: "/japan-to-india/transfer-pricing" },
  { title: "Funding and FC-GPR", desc: "Event-based FEMA filings for new capital.", href: "/japan-to-india/funding-fema-fc-gpr" },
  { title: "Japan Parent Obligations", desc: "Japanese-side reporting dates.", href: "/japan-to-india/japan-parent-obligations" },
]

export default function ComplianceCalendarPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Compliance Calendar for an Indian Subsidiary: What Is Due and When"
        description="The yearly compliance calendar of an Indian subsidiary owned by a Japanese company: monthly, quarterly and annual filings, mapped to a 31 March parent year-end."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "India Subsidiary Compliance Calendar for Japanese Companies" },
        ]}
      />

      <GuideHero
        eyebrow="Operate: compliance"
        title="Compliance Calendar for an Indian Subsidiary: What Is Due and When"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Indian subsidiary runs on a fixed calendar: tax deducted at source by the 7th of each month, GST returns on the 11th and 20th, provident fund by the 15th, quarterly advance tax, and an annual cycle that ends with the audit, the AGM by 30 September and the tax return. Because most Japanese parents also close on 31 March, the Indian annual cycle can sit inside the group&apos;s own year-end timetable, with Indian numbers needed early for the parent&apos;s May results.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="compliance-calendar" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Indian financial year", "1 April to 31 March, the same as most Japanese parents"],
                ["Monthly", "TDS deposit by the 7th; GSTR-1 by the 11th; GSTR-3B by the 20th; provident fund and ESI by the 15th"],
                ["Quarterly", "Advance tax on 15 June, 15 September, 15 December and 15 March; TDS returns after each quarter"],
                ["Annual company law", "AGM by 30 September; AOC-4 within 30 days and MGT-7 within 60 days of the AGM"],
                ["Annual tax", "Income tax return by 31 October, and 30 November where a transfer pricing report is required"],
                ["Annual RBI", "Foreign liabilities and assets (FLA) return by 15 July"],
                ["Directors", "DIR-3 KYC by 30 September"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="rhythm" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The monthly rhythm</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Date</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What is due</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Prepared from</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">7th</th>
                <td className="border border-gray-300 p-3">Deposit of tax deducted at source, including Withholding Tax on payments to Japan</td>
                <td className="border border-gray-300 p-3">Payroll and vendor payments of the previous month</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">11th</th>
                <td className="border border-gray-300 p-3">GSTR-1: outward supplies, including exports of services to the parent</td>
                <td className="border border-gray-300 p-3">Sales invoices</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">15th</th>
                <td className="border border-gray-300 p-3">Provident fund and ESI contributions</td>
                <td className="border border-gray-300 p-3">Payroll</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">20th</th>
                <td className="border border-gray-300 p-3">GSTR-3B: summary return and payment</td>
                <td className="border border-gray-300 p-3">Sales and purchase records</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Monthly</th>
                <td className="border border-gray-300 p-3">Professional tax in states that levy it</td>
                <td className="border border-gray-300 p-3">Payroll</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="quarters" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Quarter by quarter</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Advance tax is paid in four instalments on 15 June, 15 September, 15 December and 15 March, so the subsidiary needs a profit estimate early in the year. TDS returns follow each quarter, and the TDS certificates issued from them support the Japanese side if the parent ever has tax deducted on fees or royalties.
        </p>
        <h2 id="year" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The annual cycle against a Japanese year end</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Month</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian subsidiary</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Japanese parent (31 March year end)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">April</th>
                <td className="border border-gray-300 p-3">Close the books for the year to 31 March</td>
                <td className="border border-gray-300 p-3">Consolidation begins</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">May</th>
                <td className="border border-gray-300 p-3">Audit fieldwork; group reporting pack</td>
                <td className="border border-gray-300 p-3">Annual results (kessan tanshin) usually announced</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">June to July</th>
                <td className="border border-gray-300 p-3">FLA return by 15 July</td>
                <td className="border border-gray-300 p-3">Shareholders&apos; meeting and annual securities report</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">September</th>
                <td className="border border-gray-300 p-3">Board approves accounts; AGM by 30 September; director KYC</td>
                <td className="border border-gray-300 p-3">First-half closing</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">October to November</th>
                <td className="border border-gray-300 p-3">Income tax return by 31 October, or 30 November with transfer pricing</td>
                <td className="border border-gray-300 p-3">Interim reporting</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          A parent that closes on 31 December still follows the Indian year for every Indian filing; it simply needs a nine-month and three-month bridge for consolidation.
        </p>
        <h2 id="events" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Event-driven filings</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>FC-GPR within 30 days of allotting shares to the Japanese parent.</li>
          <li>FC-TRS within 60 days of a share transfer between a resident and a non-resident.</li>
          <li>Changes in directors, auditors or registered office reported to the Registrar within the prescribed time.</li>
          <li>Form 41 (previously 10F) and a Certificate of Residence before treaty-rate payments to Japan.</li>
          <li>Commencement of business declaration (INC-20A) within 180 days of incorporation.</li>
        </ul>
        <h2 id="parent-dates" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Dates the Japanese parent should hold</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The date the Indian trial balance is needed for consolidation.</li>
          <li>The board date for approving the Indian accounts, so the AGM falls by 30 September.</li>
          <li>Transfer pricing true-up dates, so year-end adjustments are invoiced before the books close.</li>
          <li>The renewal dates of Certificates of Coverage for seconded staff.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We run the monthly, quarterly and annual Indian filings and align them with your group reporting calendar, so the Indian numbers reach Japan when consolidation needs them.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">accounting, reporting and audit support</Link> and <Link href="/secretarial-roc-compliance" className="text-blue-800 font-semibold hover:underline">secretarial and ROC compliance</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/compliance-calendar" />
        <GuideCTA
          title="Aligning India with your group calendar?"
          description="Tell us your reporting dates, and we will map every Indian deadline against them."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/japan-to-india/faq"
          seeAllLabel="See all Japanese FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Japanese parents."
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
            { label: "GST portal", href: "https://www.gst.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Keeping the Indian Calendar Next to Your March Year-End?"
        description="Tell us your incorporation date and the parent's reporting dates, and we'll map every ROC, tax and FEMA deadline for the Indian subsidiary."
      />
    </main>
  )
}
