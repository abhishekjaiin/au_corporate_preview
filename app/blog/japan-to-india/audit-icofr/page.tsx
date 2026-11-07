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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/audit-icofr"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "audits", label: "The audits a Japanese-owned subsidiary faces" },
  { id: "statutory", label: "How the statutory audit runs" },
  { id: "jsox", label: "J-SOX and the Indian subsidiary" },
  { id: "gaap", label: "Ind AS, Indian GAAP and the group pack" },
  { id: "ready", label: "Being audit-ready" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does every Indian subsidiary need an audit?", a: "Yes. Every company must have its financial statements audited each year by a Chartered Accountant, whatever its size." },
  { q: "When is the first auditor appointed?", a: "By the board within 30 days of incorporation; shareholders then appoint the auditor for a five-year term." },
  { q: "Is an Indian subsidiary within J-SOX scope?", a: "It can be, if it is significant to the listed Japanese parent's financial reporting, in which case its controls are documented and tested." },
  { q: "Which accounting standards apply in India?", a: "Indian GAAP for most private companies, or Ind AS where thresholds or group requirements apply." },
  { q: "How do the Indian accounts reach the Japanese parent?", a: "Through a group reporting pack prepared under J-GAAP or IFRS, with adjustments from the Indian statutory accounts." },
  { q: "Is a tax audit always required?", a: "Only once turnover crosses the threshold in the Income-tax Act." },
  { q: "What is Form 48?", a: "The accountant's report on international transactions with associated enterprises, previously Form 3CEB." },
  { q: "Does the same year end make the audit easier?", a: "It aligns the timetables, but the parent usually needs Indian figures within weeks of 31 March, so the close must be fast." },
]

const relatedCards = [
  { title: "Compliance Calendar", desc: "Annual audit and filing dates.", href: "/japan-to-india/compliance-calendar" },
  { title: "Transfer Pricing", desc: "The accountant's report on dealings with Japan.", href: "/japan-to-india/transfer-pricing" },
  { title: "Japan Parent Obligations", desc: "Group consolidation and reporting.", href: "/japan-to-india/japan-parent-obligations" },
  { title: "Tax Notices and Disputes", desc: "What happens after filing.", href: "/japan-to-india/tax-notices-and-litigation" },
]

export default function AuditIcofrPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Audit and Internal Controls for an Indian Subsidiary of a Japanese Group"
        description="Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of a Japanese group. What to expect and how to prepare."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "Audit and ICOFR for Indian Subsidiaries of Japanese Companies" },
        ]}
      />

      <GuideHero
        eyebrow="Assure: audit and controls"
        title="Audit and Internal Controls for an Indian Subsidiary of a Japanese Group"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Every Indian subsidiary needs a statutory audit each year under the Companies Act, a tax audit once turnover crosses the threshold, and a transfer pricing certification for its dealings with Japan. For a listed Japanese parent, a material Indian subsidiary can also fall within J-SOX internal control reporting, so the Indian controls that the parent&apos;s auditor will test should be documented in the same way as in Japan.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="audit-icofr" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Statutory audit", "Every company, every year, by a Chartered Accountant appointed by shareholders"],
                ["First auditor", "Appointed by the board within 30 days of incorporation"],
                ["Tax audit", "Required once turnover crosses the Income-tax Act threshold"],
                ["Transfer pricing certificate", "Form 48 (previously Form 3CEB) for international transactions"],
                ["Group reporting", "J-GAAP or IFRS group pack, converted from Indian accounts"],
                ["Internal control reporting", "J-SOX for a listed Japanese parent where the subsidiary is in scope"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="audits" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The audits a Japanese-owned subsidiary faces</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Audit</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Purpose</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Timing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Statutory audit</th>
                <td className="border border-gray-300 p-3">Opinion on the Indian financial statements</td>
                <td className="border border-gray-300 p-3">After the 31 March year end, before the AGM by 30 September</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Tax audit</th>
                <td className="border border-gray-300 p-3">Report on tax compliance once turnover crosses the threshold</td>
                <td className="border border-gray-300 p-3">Before the tax return due date</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Transfer pricing certification</th>
                <td className="border border-gray-300 p-3">Accountant&apos;s report on dealings with Japan and other group companies</td>
                <td className="border border-gray-300 p-3">With the tax return</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Group audit instructions</th>
                <td className="border border-gray-300 p-3">Work for the Japanese parent&apos;s auditor</td>
                <td className="border border-gray-300 p-3">On the group&apos;s timetable, often by May</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Internal audit</th>
                <td className="border border-gray-300 p-3">Optional for most private companies; useful for J-SOX</td>
                <td className="border border-gray-300 p-3">As the group decides</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="statutory" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the statutory audit runs</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>The board appoints the first auditor within 30 days of incorporation; shareholders then appoint the auditor for a five-year term.</li>
          <li>The company closes its books for the year to 31 March.</li>
          <li>The auditor tests balances, transactions and controls, including intercompany balances with Japan.</li>
          <li>The board approves the financial statements and the auditor signs the report.</li>
          <li>The accounts are adopted at the AGM and filed in Form AOC-4.</li>
        </ol>
        <h2 id="jsox" className="text-2xl font-bold text-gray-900 mt-12 mb-4">J-SOX and the Indian subsidiary</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A listed Japanese parent assesses its internal control over financial reporting under J-SOX, and a significant overseas subsidiary can be included in the scope. In practice this means documenting the Indian processes for sales, purchases, payroll, inventory and the financial close, with risk and control matrices that the parent&apos;s auditor can test. Indian private companies are also required to report on internal financial controls in some cases, so one set of documentation can serve both purposes.
        </p>
        <h2 id="gaap" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Ind AS, Indian GAAP and the group pack</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Most Japanese-owned subsidiaries prepare their statutory accounts under Indian GAAP, or Ind AS if they cross the thresholds or belong to a listed group that requires it. The parent consolidates under J-GAAP or IFRS, so the subsidiary prepares a group reporting pack with adjustments for differences in revenue, leases, provisions and employee benefits. Because most Japanese parents also close on 31 March, the timetable is usually tight: the parent needs the Indian pack within weeks of the year end.
        </p>
        <h2 id="ready" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Being audit-ready</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Reconcile intercompany balances with Japan every month, in rupees and yen.</li>
          <li>Keep signed agreements and evidence for every charge to or from the parent.</li>
          <li>Document the financial close and authorisation limits for J-SOX.</li>
          <li>Agree the group pack timetable and the Indian audit timetable at the start of the year.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We prepare the Indian accounts and group reporting packs, coordinate the statutory, tax and transfer pricing audits, and document controls in the form J-SOX reviews expect.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">accounting, reporting and audit support</Link> and <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/audit-icofr" />
        <GuideCTA
          title="Preparing for your first Indian audit?"
          description="Tell us your group timetable, and we will plan the Indian close and audit around it."
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
            { label: "Institute of Chartered Accountants of India", href: "https://www.icai.org" },
            { label: "Financial Services Agency, Japan", href: "https://www.fsa.go.jp/en/" },
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
        title="Aligning the Indian Audit with J-SOX?"
        description="Tell us your group's year-end and reporting standard, and we'll map the Indian statutory audit, ICFR documentation and the timeline for your Japanese consolidation."
      />
    </main>
  )
}
