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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/tax-notices-and-litigation"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "triage", label: "Triage on the day it arrives" },
  { id: "kinds", label: "Notices a Japanese-owned subsidiary sees most" },
  { id: "appeals", label: "Where a dispute goes next" },
  { id: "double-tax", label: "Double tax between India and Japan" },
  { id: "prevention", label: "Keeping notices routine" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What should a Japanese-owned subsidiary do first on receiving a notice?", a: "Note the section, the tax year and the response date, collect the documents asked for, and inform the parent's tax team if payments to Japan are involved." },
  { q: "Why do Withholding Tax queries arise on payments to Japan?", a: "Usually because the 10% treaty rate was applied without a Japanese Certificate of Residence and Form 41 on file for that period." },
  { q: "What is the Dispute Resolution Panel?", a: "A panel that hears objections to a draft assessment for foreign-owned companies, often in transfer pricing cases, before the final order." },
  { q: "Can India and Japan resolve double taxation?", a: "Yes, through the Mutual Agreement Procedure in the India-Japan treaty, where the two tax authorities negotiate a solution." },
  { q: "What is a bilateral Advance Pricing Agreement?", a: "An agreement with both the Indian and Japanese tax authorities that fixes the transfer pricing method for future years." },
  { q: "How long is there to file a first income tax appeal?", a: "Generally 30 days from the order, before the Commissioner (Appeals)." },
  { q: "Do GST notices follow the same route?", a: "No. GST disputes have their own show cause, adjudication and appellate stages." },
  { q: "How can notices be reduced?", a: "Reconcile tax data each quarter, keep treaty documents current and keep intercompany agreements and evidence ready." },
]

const relatedCards = [
  { title: "Transfer Pricing", desc: "Documentation that answers transfer pricing references.", href: "/japan-to-india/transfer-pricing" },
  { title: "Repatriating Profits to Japan", desc: "Treaty documents for payments to Japan.", href: "/japan-to-india/repatriating-profits" },
  { title: "Treaty Benefits Documents", desc: "Certificate of Residence and Form 41.", href: "/japan-to-india/tax-and-social-security-treaties/treaty-benefits-documents" },
  { title: "Compliance Calendar", desc: "Filing dates that prevent notices.", href: "/japan-to-india/compliance-calendar" },
]

export default function TaxNoticesAndLitigationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Tax Notices and Disputes in India: What Japanese Companies Should Do"
        description="How a Japanese-owned Indian subsidiary should handle Indian income tax, GST and transfer pricing notices: deadlines, replies, appeals and the India-Japan MAP."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "Handling Indian Tax Notices for a Japanese-Owned Subsidiary" },
        ]}
      />

      <GuideHero
        eyebrow="Defend: notices and litigation"
        title="Tax Notices and Disputes in India: What Japanese Companies Should Do"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Indian tax notice to a Japanese-owned subsidiary is usually routine: a mismatch between the return and tax data, a Withholding Tax query, a scrutiny selection or a transfer pricing reference. The key is to read it the day it arrives, note the response date and reply with documents, because deadlines are short. For transfer pricing disputes that lead to double tax, the India-Japan treaty&apos;s Mutual Agreement Procedure lets both tax authorities resolve the case.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="tax-notices-and-litigation" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Where notices arrive", "Income tax e-filing portal, GST portal, email and post"],
                ["First appeal (income tax)", "Commissioner (Appeals), generally within 30 days of the order"],
                ["Transfer pricing route", "Dispute Resolution Panel objections within 30 days of the draft order, then the Income Tax Appellate Tribunal"],
                ["Treaty relief", "Mutual Agreement Procedure under the India-Japan tax treaty"],
                ["Future certainty", "Unilateral or bilateral Advance Pricing Agreement"],
                ["GST disputes", "Reply to the show cause notice, then appeal to the appellate authority"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="triage" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Triage on the day it arrives</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Identify the law and section, the tax year and the response date.</li>
          <li>Check whether the notice is an automated intimation or a human-issued enquiry.</li>
          <li>Collect the documents it asks for, and nothing beyond what is asked unless it helps.</li>
          <li>Inform the Japanese parent&apos;s tax team, especially if the issue touches transfer pricing or payments to Japan.</li>
          <li>File the reply on the portal before the date, or request more time in writing.</li>
        </ol>
        <h2 id="kinds" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Notices a Japanese-owned subsidiary sees most</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notice</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Usual trigger</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Mismatch intimation</th>
                <td className="border border-gray-300 p-3">Return figures differ from tax credit statements</td>
                <td className="border border-gray-300 p-3">Reconcile and file a rectification or revised return</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Withholding Tax query</th>
                <td className="border border-gray-300 p-3">Treaty rate applied without a Certificate of Residence or Form 41</td>
                <td className="border border-gray-300 p-3">Produce the Japanese Certificate of Residence and Form 41 for the period</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Scrutiny assessment</th>
                <td className="border border-gray-300 p-3">Return selected for detailed examination</td>
                <td className="border border-gray-300 p-3">Written submissions with ledgers and agreements</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Transfer pricing reference</th>
                <td className="border border-gray-300 p-3">Intercompany payments to Japan or services to the parent</td>
                <td className="border border-gray-300 p-3">Benchmarking study, agreements and evidence of services</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">GST show cause notice</th>
                <td className="border border-gray-300 p-3">Input credit, export of services or reverse charge on parent charges</td>
                <td className="border border-gray-300 p-3">Reply with invoices, contracts and foreign exchange evidence</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="appeals" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where a dispute goes next</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Most income tax disputes go first to the Commissioner (Appeals). Transfer pricing cases involving a foreign group can choose the Dispute Resolution Panel route instead, with objections filed within 30 days of the draft assessment order, before an appeal to the Income Tax Appellate Tribunal. Questions of law can then go to the High Court and the Supreme Court. GST disputes follow their own appellate route.
        </p>
        <h2 id="double-tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Double tax between India and Japan</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          If India raises the price of services to the Japanese parent and Japan does not make a matching adjustment, the same profit is taxed twice. The India-Japan treaty&apos;s Mutual Agreement Procedure lets the Indian and Japanese competent authorities negotiate a solution. For recurring flows, a bilateral Advance Pricing Agreement agreed with both countries fixes the method for future years and is a common choice for larger Japanese groups.
        </p>
        <h2 id="prevention" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Keeping notices routine</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Hold a current Certificate of Residence and Form 41 before every treaty-rate payment to Japan.</li>
          <li>Sign intercompany agreements before services start and keep evidence that the services were received.</li>
          <li>Reconcile tax credit statements with the books every quarter.</li>
          <li>Keep the transfer pricing documentation ready by the due date of the report.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We read and answer Indian tax and GST notices, represent the subsidiary before the authorities and appellate forums, and coordinate Mutual Agreement Procedure and Advance Pricing Agreement work with your Japanese tax advisers.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link> and <Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">accounting, reporting and audit support</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/tax-notices-and-litigation" />
        <GuideCTA
          title="Received an Indian tax notice?"
          description="Send it to us, and we will tell you what it means and the response date."
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
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "GST portal", href: "https://www.gst.gov.in" },
            { label: "National Tax Agency, Japan: Mutual Agreement Procedure", href: "https://www.nta.go.jp/english/" },
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
        title="Responding to an Indian Tax Notice?"
        description="Tell us which notice arrived and the amount involved, and we'll map the response and appeal options for the subsidiary."
      />
    </main>
  )
}
