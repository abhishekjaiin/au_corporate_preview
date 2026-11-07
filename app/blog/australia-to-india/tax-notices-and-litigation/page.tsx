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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/tax-notices-and-litigation"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "approval", label: "Agree the approval path before a notice arrives" },
  { id: "common", label: "Notices Australian-owned companies receive" },
  { id: "routes", label: "Appeal routes in India" },
  { id: "map", label: "MAP under the India-Australia treaty" },
  { id: "records", label: "Records that answer most notices" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How long is there to reply to an Indian tax notice?", a: "Often between 7 and 30 days, depending on the notice." },
  { q: "Why do queries arise on royalties paid to Australia?", a: "Usually because the treaty rate was applied without an ATO certificate of residency and Form 41." },
  { q: "Can double tax with Australia be resolved?", a: "Yes, through the Mutual Agreement Procedure under Article 25 of the India-Australia treaty." },
  { q: "Why should Australian documentation match the Indian file?", a: "Because the competent authorities compare both in a MAP case." },
  { q: "What is the Dispute Resolution Panel?", a: "A panel that hears objections to draft assessments of foreign-owned companies before the final order." },
  { q: "Where does a first income tax appeal go?", a: "To the Commissioner (Appeals), generally within 30 days of the order." },
  { q: "Do GST notices follow the same route?", a: "No. GST has its own adjudication and appellate stages." },
  { q: "How can notices be reduced?", a: "Keep treaty documents current, sign intercompany agreements and reconcile tax credits each quarter." },
]

const relatedCards = [
  { title: "Transfer Pricing", desc: "Documentation that answers references.", href: "/australia-to-india/transfer-pricing" },
  { title: "Repatriating Profits to Australia", desc: "Treaty documents for payments.", href: "/australia-to-india/repatriating-profits" },
  { title: "Tax Treaty and PE Risk", desc: "The India-Australia treaty in practice.", href: "/australia-to-india/dtaa-pe-risk" },
  { title: "Compliance Calendar", desc: "Deadlines that prevent notices.", href: "/australia-to-india/compliance-calendar" },
]

export default function TaxNoticesAndLitigationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Tax Notices and Disputes in India: What Australian Companies Should Do"
        description="What an Australian-owned Indian subsidiary should do on receiving an income tax, GST or transfer pricing notice: first steps, DRP, ITAT, treaty MAP and APAs."
        datePublished="2026-10-15"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "Handling Indian Tax Notices and Disputes for an Australian-Owned Subsidiary" },
        ]}
      />

      <GuideHero
        eyebrow="Defend: notices and litigation"
        title="Tax Notices and Disputes in India: What Australian Companies Should Do"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Indian tax notices often allow only 7 to 30 days for a reply, so an Australian-owned subsidiary should agree in advance who in Australia approves a response. Most notices are routine mismatches or queries on payments to Australia. Transfer pricing adjustments that cause double tax can be taken to the Mutual Agreement Procedure under Article 25 of the India-Australia treaty, where the ATO and the Indian authority negotiate.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="tax-notices-and-litigation" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Reply windows", "Often 7 to 30 days"],
                ["First income tax appeal", "Commissioner (Appeals), generally within 30 days of the order"],
                ["Transfer pricing route", "Dispute Resolution Panel, then Income Tax Appellate Tribunal"],
                ["Treaty dispute route", "Mutual Agreement Procedure, Article 25 of the India-Australia treaty"],
                ["Australian file", "Division 815 documentation should match the Indian transfer pricing file"],
                ["GST disputes", "Show cause notice, adjudication and appeal"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="approval" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Agree the approval path before a notice arrives</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A notice can land during the Australian June year end, when the people who must approve a reply are busiest. Agree a standing rule: the Indian adviser drafts within a set number of days, the Australian finance lead approves routine replies, and anything involving transfer pricing or payments to Australia goes to the group tax lead.
        </p>
        <h2 id="common" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Notices Australian-owned companies receive</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notice</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Common reason</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Mismatch intimation</th>
                <td className="border border-gray-300 p-3">Return figures differ from tax credit statements</td>
                <td className="border border-gray-300 p-3">Reconcile and correct</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Withholding Tax query</th>
                <td className="border border-gray-300 p-3">Treaty rate on royalties or fees without an ATO certificate of residency and Form 41</td>
                <td className="border border-gray-300 p-3">Produce the documents for the period</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Transfer pricing reference</th>
                <td className="border border-gray-300 p-3">Fees or royalties to Australia, or services to the parent</td>
                <td className="border border-gray-300 p-3">Benchmarking and evidence of services</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Scrutiny assessment</th>
                <td className="border border-gray-300 p-3">Return selected for review</td>
                <td className="border border-gray-300 p-3">Written submissions with records</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">GST notice</th>
                <td className="border border-gray-300 p-3">Export of services, reverse charge on parent charges</td>
                <td className="border border-gray-300 p-3">Invoices, contracts and remittance proof</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Appeal routes in India</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Most orders go first to the Commissioner (Appeals). A foreign-owned company facing a transfer pricing adjustment can choose the Dispute Resolution Panel instead, filing objections within 30 days of the draft order, then appeal to the Income Tax Appellate Tribunal. Points of law can go further to the High Court and Supreme Court.
        </p>
        <h2 id="map" className="text-2xl font-bold text-gray-900 mt-12 mb-4">MAP under the India-Australia treaty</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          If India adjusts a transaction with the Australian parent and the ATO does not make a matching adjustment, the profit is taxed twice. Article 25 of the treaty lets the taxpayer ask both competent authorities to resolve the case. They compare the Indian file with the Australian Division 815 documentation, so consistent margins and descriptions on both sides strengthen the case.
        </p>
        <h2 id="records" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Records that answer most notices</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Current ATO certificate of residency and Form 41 for each treaty-rate payment.</li>
          <li>Signed intercompany agreements and evidence that services were received.</li>
          <li>Quarterly reconciliation of tax credit statements to the books.</li>
          <li>Transfer pricing documentation ready by the report date.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We respond to Indian tax and GST notices, represent the subsidiary before the authorities and appellate forums, and support MAP cases with your Australian tax team.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link> and <Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">accounting, reporting and audit support</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/tax-notices-and-litigation" />
        <GuideCTA
          title="Received an Indian tax notice?"
          description="Send it to us, and we will explain it and the reply date."
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
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "GST portal", href: "https://www.gst.gov.in" },
            { label: "Australian Taxation Office: mutual agreement procedure", href: "https://www.ato.gov.au" },
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
        title="Received an Indian Tax Notice?"
        description="Tell us which notice you've received and the amount involved — we'll map your response options and appeal timeline."
      />
    </main>
  )
}
