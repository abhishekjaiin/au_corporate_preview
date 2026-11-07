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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/compliance-calendar"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "two-years", label: "How the two financial years overlap" },
  { id: "monthly", label: "Monthly and quarterly filings" },
  { id: "annual", label: "The annual Indian cycle" },
  { id: "australian-links", label: "Filings in Australia that use Indian numbers" },
  { id: "owners", label: "Who owns each deadline" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can the Indian subsidiary use a 30 June year end?", a: "No. Indian companies generally use the 1 April to 31 March financial year." },
  { q: "When is the Indian AGM due?", a: "By 30 September for a 31 March year end." },
  { q: "When is the Indian income tax return due?", a: "By 31 October, or 30 November where a transfer pricing report is required." },
  { q: "What is the FLA return?", a: "An annual RBI return of foreign liabilities and assets, due by 15 July." },
  { q: "How does the group consolidate an Indian company with a different year?", a: "Using management accounts to 30 June or audited 31 March accounts adjusted for April to June, applied consistently." },
  { q: "Which Australian filing uses Indian figures?", a: "The International Dealings Schedule with the parent's company tax return, and Division 815 documentation." },
  { q: "When is Withholding Tax on payments to Australia deposited?", a: "By the 7th of the following month." },
  { q: "How many board meetings are needed?", a: "At least four a year, with no more than 120 days between them, subject to small company relaxations." },
]

const relatedCards = [
  { title: "Audit and Internal Controls", desc: "The Indian audit and group instructions.", href: "/australia-to-india/audit-icofr" },
  { title: "Transfer Pricing", desc: "Aligning Indian and ATO documentation.", href: "/australia-to-india/transfer-pricing" },
  { title: "Australian Parent Obligations", desc: "Australian-side filings.", href: "/australia-to-india/australian-parent-obligations" },
  { title: "Common Mistakes", desc: "Using the wrong year end and other traps.", href: "/australia-to-india/common-mistakes" },
]

export default function ComplianceCalendarPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Compliance Calendar for an Indian Subsidiary: What Is Due and When"
        description="The recurring compliance of an Australian-owned Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law."
        datePublished="2026-10-15"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "India Subsidiary Compliance Calendar for Australian Companies" },
        ]}
      />

      <GuideHero
        eyebrow="Operate: compliance"
        title="Compliance Calendar for an Indian Subsidiary: What Is Due and When"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Every Indian deadline runs from the Indian financial year ending 31 March, not the Australian 30 June. The subsidiary files tax deducted at source monthly, GST returns on the 11th and 20th, provident fund by the 15th and advance tax quarterly, then completes its audit, AGM by 30 September, ROC returns and income tax return. The Indian year therefore spans two Australian years, and the group needs a reporting bridge between them.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="compliance-calendar" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Indian year", "1 April to 31 March"],
                ["Australian year", "1 July to 30 June for most companies"],
                ["Monthly", "TDS by the 7th; GSTR-1 by the 11th; GSTR-3B by the 20th; PF and ESI by the 15th"],
                ["Annual company law", "AGM by 30 September; AOC-4 within 30 days and MGT-7 within 60 days of the AGM"],
                ["Annual tax", "Return by 31 October, or 30 November with a transfer pricing report"],
                ["RBI", "FLA return by 15 July"],
                ["Australian link", "International Dealings Schedule with the parent's company tax return"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="two-years" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the two financial years overlap</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian quarter</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Months</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Australian position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Q1</th>
                <td className="border border-gray-300 p-3">April to June</td>
                <td className="border border-gray-300 p-3">Last quarter of the Australian year</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Q2</th>
                <td className="border border-gray-300 p-3">July to September</td>
                <td className="border border-gray-300 p-3">First quarter of the next Australian year</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Q3</th>
                <td className="border border-gray-300 p-3">October to December</td>
                <td className="border border-gray-300 p-3">Second quarter</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Q4</th>
                <td className="border border-gray-300 p-3">January to March</td>
                <td className="border border-gray-300 p-3">Third quarter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          For consolidation, the group either uses the Indian management accounts to 30 June, or the audited 31 March accounts adjusted for April to June. Decide the method once and use it every year.
        </p>
        <h2 id="monthly" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Monthly and quarterly filings</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>7th: deposit tax deducted at source, including Withholding Tax on payments to Australia.</li>
          <li>11th: GSTR-1 for outward supplies, including exports of services to the parent.</li>
          <li>15th: provident fund and ESI.</li>
          <li>20th: GSTR-3B summary return and payment.</li>
          <li>15 June, 15 September, 15 December and 15 March: advance tax instalments.</li>
          <li>After each quarter: TDS returns and certificates.</li>
        </ul>
        <h2 id="annual" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The annual Indian cycle</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">When</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">April to May</th>
                <td className="border border-gray-300 p-3">Close the books for the year to 31 March</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">May to August</th>
                <td className="border border-gray-300 p-3">Statutory audit, tax audit where required, transfer pricing documentation</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">By 15 July</th>
                <td className="border border-gray-300 p-3">FLA return to the RBI</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">By 30 September</th>
                <td className="border border-gray-300 p-3">Board approves accounts; AGM; director KYC</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Within 30 and 60 days of the AGM</th>
                <td className="border border-gray-300 p-3">AOC-4 and MGT-7</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">By 31 October or 30 November</th>
                <td className="border border-gray-300 p-3">Income tax return, with Form 48 where required</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="australian-links" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Filings in Australia that use Indian numbers</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The International Dealings Schedule lodged with the parent&apos;s company tax return reports dealings with the Indian subsidiary.</li>
          <li>Australian transfer pricing documentation under Division 815 should use the same margins as the Indian file.</li>
          <li>Country-by-country reporting applies to significant global entities with global income of A$1 billion or more.</li>
        </ul>
        <h2 id="owners" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who owns each deadline</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Assign an owner in India for each monthly filing and an approver in Australia for anything that needs parent sign-off, such as the accounts, dividends and intercompany pricing. Most missed Indian deadlines happen when the approval sits in an Australian inbox during the June year-end rush.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We run the Indian monthly and annual filings and supply the numbers your Australian team needs for consolidation, the International Dealings Schedule and transfer pricing.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">accounting, reporting and audit support</Link> and <Link href="/secretarial-roc-compliance" className="text-blue-800 font-semibold hover:underline">secretarial and ROC compliance</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/compliance-calendar" />
        <GuideCTA
          title="Bridging the 31 March and 30 June years?"
          description="Tell us your group calendar, and we will map every Indian deadline against it."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/australia-to-india/faq"
          seeAllLabel="See all Australian FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Australian parents."
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
            { label: "Australian Taxation Office: International Dealings Schedule", href: "https://www.ato.gov.au" },
          ]}
        />

        <p className="mt-6">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Stay Ahead of India's Compliance Calendar"
        description="Tell us your incorporation date and financial year-end — we'll map every ROC, tax and FEMA deadline your subsidiary must hit."
      />
    </main>
  )
}
