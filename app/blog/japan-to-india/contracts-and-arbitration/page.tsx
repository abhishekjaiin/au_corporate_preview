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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/contracts-and-arbitration"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "templates", label: "Adapting Japanese templates for India" },
  { id: "intercompany", label: "The intercompany agreement with the parent" },
  { id: "disputes", label: "Courts or arbitration" },
  { id: "clause", label: "Drafting the arbitration clause" },
  { id: "enforcement", label: "Enforcing in India" },
  { id: "checklist", label: "Signing checklist" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a Japanese court judgment be enforced in India?", a: "Not directly. Japan is not a reciprocating territory under Section 44A of the Code of Civil Procedure, so the winning party must file a fresh suit in India, using the Japanese judgment as evidence." },
  { q: "Is a JCAA arbitration award enforceable in India?", a: "Yes. Japan and India are both parties to the New York Convention, so an award seated in Japan can be enforced in India under Part II of the Arbitration and Conciliation Act, 1996, on limited grounds of refusal." },
  { q: "Can Japanese law govern a contract with an Indian customer?", a: "Usually yes for commercial terms, but Indian mandatory rules still apply, including stamp duty, employment law, data protection and competition law." },
  { q: "Does stamp duty apply to an intercompany agreement?", a: "Yes, in most states. Rates depend on the state and the type of document, and an unstamped agreement can be impounded or rejected as evidence until duty and penalty are paid." },
  { q: "Which seat do Japanese groups usually choose?", a: "Tokyo under JCAA rules when the Japanese side wants a familiar forum, Singapore under SIAC rules as a neutral seat, and an Indian seat when the counterparty's assets are in India." },
  { q: "Do intercompany agreements need to be signed before services start?", a: "Yes. A signed agreement before the first invoice supports the transfer pricing method, the Withholding Tax position and the deduction of the expense in India." },
  { q: "Can a liquidated damages clause be enforced as written in India?", a: "An Indian court awards reasonable compensation up to the agreed amount, not the agreed amount automatically, so draft the figure as a genuine pre-estimate." },
  { q: "Is there a time limit for an arbitration in India?", a: "A domestic award must be made within 12 months of the completion of pleadings, extendable by six months by consent. International commercial arbitration is outside this limit." },
]

const relatedCards = [
  { title: "Transfer Pricing for Japanese Parents", desc: "Pricing and documenting the flows your intercompany agreement covers.", href: "/japan-to-india/transfer-pricing" },
  { title: "Tax Notices and Disputes", desc: "What to do when an Indian tax or transfer pricing notice arrives.", href: "/japan-to-india/tax-notices-and-litigation" },
  { title: "Hiring and Payroll from Japan", desc: "Employment contracts and Indian labour law for your team.", href: "/japan-to-india/hiring-and-payroll" },
  { title: "Restructuring and Exit", desc: "Selling, merging or closing the Indian subsidiary.", href: "/japan-to-india/restructuring-and-exit" },
]

export default function ContractsAndArbitrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Contracts and Arbitration in India: A Guide for Japanese Companies"
        description="Contracts for a Japanese-owned Indian subsidiary: intercompany agreements, adapting Japanese templates, JCAA or SIAC arbitration, enforcing awards and why Japanese court judgments need a fresh suit."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "Contracts and Arbitration in India for Japanese Companies" },
        ]}
      />

      <GuideHero
        eyebrow="Defend: contracts and arbitration"
        title="Contracts and Arbitration in India: A Guide for Japanese Companies"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Japanese groups usually arrive with careful contract templates, but they need adapting for India: stamp duty, Indian employment law and data rules apply whatever the governing law says. For disputes, arbitration is the practical choice, because Japan is not a reciprocating territory under Section 44A, so a Japanese court judgment cannot be executed directly in India, while an award seated in Japan or Singapore can be enforced here under the New York Convention.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="contracts-and-arbitration" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Japanese court judgments", "Not directly executable: Japan is not notified under Section 44A of the Code of Civil Procedure, so a fresh suit is needed in India"],
                ["Arbitration awards", "Enforceable in India under Part II of the Arbitration and Conciliation Act, 1996; India and Japan are both New York Convention parties"],
                ["Seats Japanese groups use", "Tokyo (JCAA), Singapore (SIAC), or an Indian seat when assets are local"],
                ["Stamp duty", "Payable on many Indian agreements at state rates; unstamped documents face problems in evidence"],
                ["Language", "English is the working language of Indian courts and most arbitrations; keep the English version controlling"],
                ["Domestic award time limit", "12 months from completion of pleadings, extendable by 6 months (Section 29A); not applied to international commercial arbitration"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="templates" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Adapting Japanese templates for India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A Japanese master agreement translated into English is a good start, but four areas almost always change. Stamp duty must be paid in the right state before or at signing. Indian employment terms follow the labour codes and state rules, not Japanese practice on lifetime employment or retirement allowances. Personal data clauses must reflect India&apos;s Digital Personal Data Protection Act. And limitation-of-liability and penalty clauses are read under the Indian Contract Act, which awards reasonable compensation rather than any agreed sum.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Keep one controlling language. Where a Japanese version is also signed, state that the English text prevails, because that is the text an Indian court or tribunal will read.
        </p>
        <h2 id="intercompany" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The intercompany agreement with the parent</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Every flow between the Japanese parent and the Indian subsidiary needs a written agreement signed before the work starts: engineering or software services, sales support, royalties for technology or the brand, secondment of chuzaiin, and any loan. The agreement supports the transfer pricing position, the Withholding Tax treatment at the 10% treaty rate for fees and royalties, and the permanent establishment analysis. Its invoicing terms should match what the parent&apos;s accounting team actually books.
        </p>
        <h2 id="disputes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Courts or arbitration</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Option</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Works well when</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Watch out for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Indian courts</th>
                <td className="border border-gray-300 p-3">The counterparty and its assets are in India and the amount is modest</td>
                <td className="border border-gray-300 p-3">Time to judgment; commercial courts and pre-institution mediation apply</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Japanese courts</th>
                <td className="border border-gray-300 p-3">Rarely suitable against an Indian party</td>
                <td className="border border-gray-300 p-3">Japan is not a Section 44A reciprocating territory, so the judgment must be sued on again in India</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Arbitration seated in Tokyo (JCAA)</th>
                <td className="border border-gray-300 p-3">The Japanese side wants a familiar forum</td>
                <td className="border border-gray-300 p-3">Award enforced in India under the New York Convention; costs of travel and translation</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Arbitration seated in Singapore (SIAC)</th>
                <td className="border border-gray-300 p-3">Both sides want a neutral Asian seat</td>
                <td className="border border-gray-300 p-3">Widely used by Indian parties; enforcement in India is routine</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Arbitration seated in India</th>
                <td className="border border-gray-300 p-3">Assets are in India and speed of enforcement matters</td>
                <td className="border border-gray-300 p-3">Indian courts supervise; Section 34 challenges on limited grounds</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="clause" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Drafting the arbitration clause</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Name the seat, not just the venue; the seat decides which courts supervise the arbitration.</li>
          <li>Pick institutional rules, such as JCAA, SIAC or ICC, instead of an ad hoc process.</li>
          <li>Fix the number of arbitrators and English as the language.</li>
          <li>State the governing law of the contract separately from the law of the arbitration agreement.</li>
          <li>Add a short negotiation step between senior managers if the group prefers to settle first, with a firm time limit.</li>
          <li>Have the agreement stamped so the clause can be relied on without delay.</li>
        </ul>
        <h2 id="enforcement" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Enforcing in India</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A foreign award from a New York Convention country notified by India is enforced through the Indian court with jurisdiction over the assets. The grounds for refusing enforcement are narrow, mainly lack of proper notice, excess of jurisdiction and public policy. An award made in an Indian-seated arbitration can be challenged only under Section 34 and, once the challenge period passes, is enforced like a court decree under Section 36.
        </p>
        <h2 id="checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Signing checklist</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Confirm the signatory&apos;s authority on both sides, using a board resolution or power of attorney.</li>
          <li>Pay stamp duty in the state where the agreement is signed or first brought.</li>
          <li>Sign the English text as controlling.</li>
          <li>Store the executed originals with the stamp paper or e-stamp certificate.</li>
          <li>Update the transfer pricing file when an intercompany agreement changes.</li>
        </ol>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We review Japanese templates for Indian law, prepare intercompany agreements that match your transfer pricing, and coordinate with Indian and Japanese counsel on dispute clauses and enforcement.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link> and <Link href="/secretarial-roc-compliance" className="text-blue-800 font-semibold hover:underline">secretarial and ROC compliance</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/contracts-and-arbitration" />
        <GuideCTA
          title="Adapting group contracts for India?"
          description="Send us your template, and we will mark the changes Indian law requires."
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
            { label: "Arbitration and Conciliation Act, 1996 (India Code)", href: "https://www.indiacode.nic.in" },
            { label: "Japan Commercial Arbitration Association", href: "https://www.jcaa.or.jp/en/" },
            { label: "Singapore International Arbitration Centre", href: "https://siac.org.sg" },
            { label: "Ministry of Law and Justice, India", href: "https://lawmin.gov.in" },
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
        title="Contracts Between Japan and India?"
        description="Tell us the counterparties and contract types, and we'll outline the governing law, seat and arbitration clauses that work for a Japanese group."
      />
    </main>
  )
}
