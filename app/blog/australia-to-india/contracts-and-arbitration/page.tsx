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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/contracts-and-arbitration"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "set", label: "The contract set for an Australian-owned subsidiary" },
  { id: "judgments", label: "Why Australian judgments are not enough" },
  { id: "arbitration", label: "Setting up arbitration" },
  { id: "stamp", label: "Stamp duty and execution" },
  { id: "templates", label: "Changing Australian templates" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can an Australian court judgment be enforced in India?", a: "Not directly. Australia is not a reciprocating territory under Section 44A, so a fresh suit is needed in India." },
  { q: "Are arbitration awards from Australia enforceable in India?", a: "Yes, if the seat country is notified by India under the New York Convention framework; confirm the notification for your seat." },
  { q: "Which arbitration seat do Australian groups use with Indian parties?", a: "Often Singapore under SIAC rules, Sydney under ACICA rules, or an Indian seat when assets are in India." },
  { q: "Is stamp duty payable on an agreement signed in Australia?", a: "Yes, when the agreement is brought into India and relied on there, at the relevant state rate." },
  { q: "Does Fair Work apply to staff in India?", a: "No. Indian employees are covered by the labour codes and state shops and establishments rules." },
  { q: "What royalty rate applies under the treaty?", a: "Up to 15% on royalties, or 10% for equipment royalties, under the India-Australia treaty." },
  { q: "Will an Indian court enforce a liquidated damages clause?", a: "It awards reasonable compensation up to the agreed amount, so the figure should be a genuine pre-estimate of loss." },
  { q: "Should the intercompany agreement be signed before services start?", a: "Yes, to support transfer pricing, Withholding Tax and the deduction of the expense." },
]

const relatedCards = [
  { title: "Transfer Pricing", desc: "Pricing what the intercompany agreement covers.", href: "/australia-to-india/transfer-pricing" },
  { title: "Tax Notices and Disputes", desc: "When an Indian notice arrives.", href: "/australia-to-india/tax-notices-and-litigation" },
  { title: "Hiring and Payroll from Australia", desc: "Employment contracts under Indian law.", href: "/australia-to-india/hiring-and-payroll" },
  { title: "Restructuring and Exit", desc: "Selling or closing the subsidiary.", href: "/australia-to-india/restructuring-and-exit" },
]

export default function ContractsAndArbitrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Contracts and Arbitration in India: A Guide for Australian Companies"
        description="Contracts between an Australian parent and its Indian subsidiary: governing law, arbitration clauses, the New York Convention and enforcing awards in India."
        datePublished="2026-10-15"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "Contracts and Arbitration in India for Australian Companies" },
        ]}
      />

      <GuideHero
        eyebrow="Defend: contracts and arbitration"
        title="Contracts and Arbitration in India: A Guide for Australian Companies"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Contracts between an Australian parent, its Indian subsidiary and Indian customers should be written for Indian enforcement. Australia is not a reciprocating territory under Section 44A, so an Australian court judgment cannot be executed directly in India; arbitration, for example seated in Singapore or Sydney under ACICA or SIAC rules, is the practical choice. Indian stamp duty applies to agreements brought into India, wherever they are signed.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="contracts-and-arbitration" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Australian court judgments", "Not executable directly; Australia is not notified under Section 44A of the Code of Civil Procedure"],
                ["Arbitration awards", "Enforceable in India under Part II of the Arbitration and Conciliation Act, 1996, if the seat country is notified by India"],
                ["Common seats", "Singapore (SIAC), Sydney (ACICA) or an Indian seat"],
                ["Stamp duty", "Payable on agreements executed in India or brought into India later, at state rates"],
                ["Contract law", "Indian Contract Act: compensation for breach is reasonable compensation up to any agreed amount"],
                ["Employment terms", "Indian labour codes and state rules, not Fair Work"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="set" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The contract set for an Australian-owned subsidiary</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Agreement</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Parties</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What to get right</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Intercompany services or distribution agreement</th>
                <td className="border border-gray-300 p-3">Australian parent and Indian subsidiary</td>
                <td className="border border-gray-300 p-3">Pricing method, invoicing, IP and the PE position</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Technology or brand licence</th>
                <td className="border border-gray-300 p-3">Australian parent and Indian subsidiary</td>
                <td className="border border-gray-300 p-3">Royalty rate, treaty rate of up to 15%, benefit evidence</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Customer agreements</th>
                <td className="border border-gray-300 p-3">Indian subsidiary and Indian customers</td>
                <td className="border border-gray-300 p-3">Governing law, dispute clause, data and liability</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Employment contracts</th>
                <td className="border border-gray-300 p-3">Indian subsidiary and staff</td>
                <td className="border border-gray-300 p-3">Labour codes, IP assignment, confidentiality</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Office lease</th>
                <td className="border border-gray-300 p-3">Indian subsidiary and landlord</td>
                <td className="border border-gray-300 p-3">Registration and stamp duty</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="judgments" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why Australian judgments are not enough</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India executes foreign judgments directly only from reciprocating territories notified under Section 44A of the Code of Civil Procedure. Australia is not one of them, so a judgment from an Australian court has to be used as the basis of a fresh suit in India, which takes time. For contracts where the counterparty and its assets are in India, an arbitration clause is usually the stronger choice.
        </p>
        <h2 id="arbitration" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Setting up arbitration</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Choose the seat: Singapore is neutral and familiar to Indian parties; Sydney under ACICA rules suits Australian-led disputes; an Indian seat helps when assets are local.</li>
          <li>Confirm that the seat country is notified by India for enforcement under Part II of the Arbitration and Conciliation Act, 1996.</li>
          <li>Name the institution, the number of arbitrators and English as the language.</li>
          <li>Keep the governing law of the contract and the law of the arbitration agreement explicit.</li>
          <li>Add an executive negotiation step with a fixed period before arbitration starts.</li>
        </ul>
        <h2 id="stamp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Stamp duty and execution</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian stamp duty applies when an agreement is signed in India or later brought into India, at the rate of the relevant state. An intercompany agreement signed in Australia and emailed to India is still dutiable when it is relied on there. Plan where the agreement is executed and pay the duty, usually by e-stamp, so the document can be used without impounding.
        </p>
        <h2 id="templates" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Changing Australian templates</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Replace Australian Consumer Law references with the Indian Consumer Protection Act where consumers are involved.</li>
          <li>Replace Fair Work and award references in employment documents with Indian labour code terms.</li>
          <li>Draft liquidated damages as a genuine pre-estimate, because Indian courts award reasonable compensation up to the amount.</li>
          <li>Add Indian data protection terms under the Digital Personal Data Protection Act.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We review Australian templates for Indian law, draft intercompany agreements aligned with transfer pricing, and coordinate with counsel on dispute clauses and enforcement.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link> and <Link href="/secretarial-roc-compliance" className="text-blue-800 font-semibold hover:underline">secretarial and ROC compliance</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/contracts-and-arbitration" />
        <GuideCTA
          title="Adapting your contracts for India?"
          description="Send us the template, and we will mark the Indian changes."
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
            { label: "Arbitration and Conciliation Act, 1996 (India Code)", href: "https://www.indiacode.nic.in" },
            { label: "Australian Centre for International Commercial Arbitration", href: "https://acica.org.au" },
            { label: "Singapore International Arbitration Centre", href: "https://siac.org.sg" },
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
        title="Drafting Contracts for Your India Entity?"
        description="Tell us the counterparties and contract types involved — we'll outline the enforceability and arbitration clauses that hold up in Indian courts."
      />
    </main>
  )
}
