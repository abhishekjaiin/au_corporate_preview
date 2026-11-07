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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/contracts-courts-arbitration"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "draft", label: "Drafting the contract" },
  { id: "arb", label: "Arbitration" },
  { id: "courts", label: "Court judgments" },
  { id: "sanctions", label: "Sanctions and institutions" },
  { id: "practical", label: "Practical points" },
  { id: "investment", label: "Investment protection" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a Russian arbitral award be enforced in India?", a: "A foreign award from a convention seat can be enforced under Part II of the Arbitration and Conciliation Act, 1996 if the seat country is notified. Check the notification for your seat." },
  { q: "Can an Indian award be enforced in Russia?", a: "Russia is a party to the New York Convention and recognises awards subject to limited grounds, including public policy. Confirm with Russian counsel." },
  { q: "Can I enforce a Russian court judgment in India?", a: "As far as we know Russia is not a reciprocating territory under Section 44A, so a fresh suit in India is needed." },
  { q: "Do Russian courts take jurisdiction over sanctions disputes?", a: "Russian rules give Russian courts jurisdiction over many sanctions-related disputes and can restrain foreign proceedings. Take advice on clause design." },
  { q: "Which arbitration seat is best?", a: "Choose a convention seat and an institution acceptable to both sides and able to operate with the parties' banks. Indian and neutral institutions are common." },
  { q: "Does stamp duty matter?", a: "Yes. Unstamped or under-stamped agreements are not admissible in evidence in India until the duty and penalty are paid." },
  { q: "Is there an investment treaty between India and Russia?", a: "A 1994 treaty is listed, but its current status needs checking, and a new agreement has been discussed." },
]

const relatedCards = [
  { title: "Sanctions, Banking and Payment Channels for a Russian Parent and Its Indian Subsidiary: Screening, Special Rupee Accounts and Bank Due Diligence", desc: "The practical gate for Russian investors in India: US, EU and UK sanctions screening, the 50% ownership rule, Indian bank due diligence, settlement channels including rupee vostro accounts, why non-dollar payments are not a safe harbour and a compliance checklist.", href: "/russia-to-india/sanctions-and-payments-for-russian-companies" },
  { title: "Funding Your Indian Subsidiary from Russia: Equity, Preference Shares, External Borrowing, FEMA Reporting and the Remittance Route", desc: "How a Russian parent can fund an Indian company: equity and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return, the remittance route through banks acceptable to India and Russian clearance.", href: "/russia-to-india/funding-and-fema" },
  { title: "Russian Documents for an Indian Subsidiary: Notary, Apostille, Certified English Translation and Delivery to India", desc: "How to prepare Russian company and director documents for Indian filings: both countries are parties to the Apostille Convention, which authority issues the apostille, notarised English translations, validity, checklist and common pitfalls.", href: "/russia-to-india/documents-apostille-and-translation" },
  { title: "Exiting an Indian Subsidiary from Russia: Share Sale, Buy-Back, Merger, Voluntary Liquidation and Tax on the Exit", desc: "How a Russian parent exits or restructures an Indian business: sale of shares, buyer sanctions checks, FEMA pricing, FC-TRS, capital gains tax, buy-back, merger, voluntary liquidation, strike-off, the treaty position and bringing proceeds home.", href: "/russia-to-india/exit-and-restructuring" },
]

export default function ContractsCourtsArbitrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Contracts and Dispute Resolution for Russian Companies in India: Governing Law, Arbitration Seats, Enforcing Awards and Court Judgments"
        description="How to draft and enforce contracts between a Russian company and Indian counterparties: governing law, arbitration seat and institution, enforcing awards under the New York Convention, the position on court judgments, Russian courts' jurisdiction over sanctions disputes, stamp duty and interim relief."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Contracts, Courts and Arbitration between India and Russia: Seats, Awards and Judgments" },
        ]}
      />

      <GuideHero
        eyebrow="Disputes: contracts and enforcement"
        title="Contracts and Dispute Resolution for Russian Companies in India: Governing Law, Arbitration Seats, Enforcing Awards and Court Judgments"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Disputes between Russian and Indian parties are best placed in arbitration. Both countries are parties
          to the New York Convention, so an award from a convention seat should be enforceable in each, subject
          to the limited grounds for refusal and to the reciprocity notification India has made for the seat
          country. Court judgments are harder: as far as we know Russia is not a reciprocating territory under
          Section 44A of the Indian Code of Civil Procedure, so a Russian court judgment needs a fresh suit in
          India, and Russian courts recognise foreign judgments only on treaty or reciprocity grounds. Russian
          law also gives Russian courts jurisdiction over many disputes involving sanctions and may restrain
          foreign proceedings, which affects clause design. Draft carefully and pay stamp duty.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="contracts-and-arbitration" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Seat options", "Neutral convention seat with a respected institution, India (MCIA, ICC, DIAC) or a Russian institution; choose one and name the rules"],
                ["Award in India", "Foreign award under the Arbitration and Conciliation Act, 1996, Part II, if the seat country is notified; confirm the notification for your seat"],
                ["Award in Russia", "Recognised under the New York Convention by Russian courts, with limited grounds including public policy"],
                ["Court judgments", "Russia as far as we know is not a Section 44A reciprocating territory; fresh suit in India on the judgment or the underlying claim"],
                ["Sanctions disputes", "Russian rules give Russian courts exclusive jurisdiction over certain sanctions-related disputes and can restrain foreign proceedings; take advice on clause design"],
                ["Governing law", "Indian law often needed for local assets and regulatory points; foreign law is permitted for commercial terms"],
                ["Stamp duty", "Agreements executed or brought to India attract state stamp duty; unstamped documents are not admissible until stamped"],
                ["Limitation", "Three years for most contract claims in India"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="draft" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Drafting the contract</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Name the parties exactly, with Indian PAN and CIN details and the Russian registration numbers.</li>
          <li>Choose governing law and the arbitration institution, seat, number of arbitrators and language. A model clause avoids pathological clauses.</li>
          <li>State the currency, the payment route and the tax allocation, including gross-up if wanted.</li>
          <li>Add sanctions, export control and compliance clauses: representations, suspension and termination rights.</li>
          <li>Include confidentiality, intellectual property and data protection terms. See <Link href="/russia-to-india/data-protection-152fz-dpdp" className="text-blue-800 font-semibold hover:underline">data protection</Link>.</li>
          <li>Add termination, notice and force majeure terms, and say who bears stamp duty.</li>
        </ul>

        <h2 id="arb" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Arbitration</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Step</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Point</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Enforcement</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Clause", "Name institution, rules, seat, language, number of arbitrators", "A clear clause avoids a challenge at the start"],
                ["Interim measures", "Tribunal or the court at the seat; Indian courts may assist foreign-seated arbitrations unless excluded", "Plan for assets in India"],
                ["Award", "Final and binding; challenge at the seat only on limited grounds", "File in the High Court with the award and agreement; the court tests the limited grounds for refusal"],
                ["Execution", "Execute as a decree against Indian assets", "Attachment of bank accounts and shares"],
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

        <h2 id="courts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Court judgments</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Russia to India:</strong> a Russian judgment cannot be filed for direct execution under Section 44A on the usual understanding, so you would sue in India on the judgment or the underlying claim.</li>
          <li><strong>India to Russia:</strong> recognition by Russian courts requires a treaty or reciprocity basis; confirm with Russian counsel before relying on an Indian judgment.</li>
          <li>Where the amount is large, prefer arbitration for the clearer enforcement path.</li>
        </ul>

        <h2 id="sanctions" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sanctions and institutions</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Arbitral institutions, banks and tribunal members apply their own sanctions policies, which can affect
          fee payments, the choice of seat and the ability to enforce. Choose an institution that will accept
          the parties, and check payment arrangements for fees before the dispute arises.
        </p>

        <h2 id="practical" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Practical points</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Stamp the agreement in the correct state before using it as evidence.</li>
          <li>Keep the authentication of any power of attorney. See <Link href="/russia-to-india/documents-apostille-and-translation" className="text-blue-800 font-semibold hover:underline">documents and apostille</Link>.</li>
          <li>Use Indian counsel for local enforcement planning.</li>
          <li>Check payment terms against FEMA and the payment route before agreeing the price currency. See <Link href="/russia-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
        </ol>

        <h2 id="investment" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Investment protection</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A 1994 India-Russia investment promotion treaty appears in the UNCTAD database, but India has
          terminated many older investment treaties and the two governments have discussed a new agreement.
          Whether any treaty protects a particular investment must be checked on the facts and the current
          status.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.nalog.gov.ru/eng/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Federal Tax Service (Russia)</a>,{" "}
          <a href="https://www.cbr.ru/eng/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Bank of Russia</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/russia-to-india/contracts-courts-arbitration" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/russia-to-india/faq"
          seeAllLabel="See all 157 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "UNCTAD: India-Russian Federation BIT (1994)", href: "https://investmentpolicy.unctad.org/international-investment-agreements/treaties/bilateral-investment-treaties/1947/india---russian-federation-bit-1994-" },
            { label: "Ministry of Law and Justice (India)", href: "https://lawmin.gov.in/" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Russian
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Drafting Contracts Between Russia and India?"
        description="Tell us the counterparties and contract types, and we'll outline governing law, seat and enforcement options for India."
      />
    </main>
  )
}
