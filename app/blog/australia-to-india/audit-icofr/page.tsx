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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/audit-icofr"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "layers", label: "Two audits, two year ends" },
  { id: "group", label: "Group audit instructions" },
  { id: "controls", label: "Controls the Australian parent relies on" },
  { id: "standards", label: "Indian accounts and the group pack" },
  { id: "prepare", label: "Preparing the Indian close" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can the Australian group auditor sign the Indian statutory audit?", a: "Only through an Indian Chartered Accountant; the Indian report must be signed by one." },
  { q: "What is ASA 600?", a: "The Australian auditing standard on group audits, under which the group auditor directs component auditors." },
  { q: "Why does an ASX parent care about Indian controls?", a: "Because the CEO and CFO declaration under section 295A relies on controls of material subsidiaries." },
  { q: "Which period does the Indian statutory audit cover?", a: "The Indian financial year to 31 March." },
  { q: "How are Indian figures reported to Australia?", a: "Through a group reporting pack mapped to Australian Accounting Standards." },
  { q: "When is the first Indian auditor appointed?", a: "By the board within 30 days of incorporation." },
  { q: "Is a tax audit always needed?", a: "Only when turnover crosses the threshold in the Income-tax Act." },
  { q: "What is Form 48?", a: "The accountant's report on international transactions, previously Form 3CEB." },
]

const relatedCards = [
  { title: "Compliance Calendar", desc: "Indian dates against a 30 June year.", href: "/australia-to-india/compliance-calendar" },
  { title: "Transfer Pricing", desc: "The Form 48 certification.", href: "/australia-to-india/transfer-pricing" },
  { title: "Australian Parent Obligations", desc: "Group reporting duties.", href: "/australia-to-india/australian-parent-obligations" },
  { title: "Tax Notices and Disputes", desc: "After the returns are filed.", href: "/australia-to-india/tax-notices-and-litigation" },
]

export default function AuditIcofrPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Audit and Internal Controls for an Indian Subsidiary of an Australian Group"
        description="Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of an Australian group. What to expect and how to prepare."
        datePublished="2026-10-15"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "Audit and Internal Controls (ICOFR) for Indian Subsidiaries of Australian Companies" },
        ]}
      />

      <GuideHero
        eyebrow="Assure: audit and controls"
        title="Audit and Internal Controls for an Indian Subsidiary of an Australian Group"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Every Indian subsidiary is audited each year by an Indian Chartered Accountant, whatever firm audits the Australian group. For an ASX-listed parent, the CEO and CFO declaration under section 295A of the Corporations Act relies on the controls of material subsidiaries, and the group auditor directs component auditors under ASA 600, so the Indian audit often runs alongside group audit instructions on a 30 June timetable.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="audit-icofr" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Statutory audit", "Every year, signed by an Indian Chartered Accountant"],
                ["First auditor", "Appointed by the board within 30 days of incorporation"],
                ["Group audit", "Component work under ASA 600 for the Australian group auditor"],
                ["ASX parent", "CEO and CFO declaration under section 295A of the Corporations Act"],
                ["Year ends", "Indian statutory year to 31 March; Australian group year usually to 30 June"],
                ["Transfer pricing certificate", "Form 48 (previously Form 3CEB)"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="layers" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Two audits, two year ends</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Audit</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Period</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Signed by</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Indian statutory audit</th>
                <td className="border border-gray-300 p-3">Year to 31 March</td>
                <td className="border border-gray-300 p-3">Indian Chartered Accountant</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Group component work</th>
                <td className="border border-gray-300 p-3">Australian year, usually to 30 June</td>
                <td className="border border-gray-300 p-3">Component auditor, under group instructions</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Tax audit (if turnover crosses the threshold)</th>
                <td className="border border-gray-300 p-3">Year to 31 March</td>
                <td className="border border-gray-300 p-3">Indian Chartered Accountant</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Transfer pricing certification</th>
                <td className="border border-gray-300 p-3">Year to 31 March</td>
                <td className="border border-gray-300 p-3">Indian Chartered Accountant</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="group" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Group audit instructions</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The Australian group auditor sends instructions to the component auditor in India under ASA 600, with materiality, reporting deadlines and specific procedures. Because the group year ends on 30 June, component work often covers a period different from the Indian statutory year, so the Indian team prepares two sets of closing figures.
        </p>
        <h2 id="controls" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Controls the Australian parent relies on</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          For an ASX-listed parent, the CEO and CFO declare that the financial records are properly maintained and the statements give a true and fair view, relying on the controls of material subsidiaries. Document the Indian processes for revenue, payroll, procurement and the financial close, with clear approval limits, so the declaration can be supported.
        </p>
        <h2 id="standards" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian accounts and the group pack</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian statutory accounts follow Indian GAAP or Ind AS. The group consolidates under Australian Accounting Standards, so the Indian team prepares a reporting pack mapping Indian figures to group policies, for example for leases, revenue recognition and employee benefits.
        </p>
        <h2 id="prepare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Preparing the Indian close</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Close the Indian books in April for the 31 March statutory audit.</li>
          <li>Reconcile intercompany balances with Australia monthly, in rupees and Australian dollars.</li>
          <li>Keep agreements and evidence for every charge to or from the parent.</li>
          <li>Agree with the group auditor which period the component work covers.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We prepare Indian statutory accounts and group packs, coordinate the Indian and component audits, and document controls for the parent&apos;s declarations.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">accounting, reporting and audit support</Link> and <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/audit-icofr" />
        <GuideCTA
          title="Preparing for the Indian audit and group year end?"
          description="Tell us your group timetable, and we will plan both closes."
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
            { label: "Auditing and Assurance Standards Board", href: "https://www.auasb.gov.au" },
            { label: "Institute of Chartered Accountants of India", href: "https://www.icai.org" },
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
        title="Need Help With Your Statutory Audit or ICOFR?"
        description="Tell us your financial year-end and group reporting standard — we'll map the audit, ICOFR documentation and filing timeline for your subsidiary."
      />
    </main>
  )
}
