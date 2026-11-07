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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/contracts-courts-arbitration"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "draft", label: "Drafting the contract" },
  { id: "arb", label: "Arbitration with a Hong Kong seat" },
  { id: "courts", label: "Court judgments" },
  { id: "practical", label: "Practical points" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a Hong Kong arbitral award be enforced in India?", a: "Yes. India has notified Hong Kong for the New York Convention route, so an award with a Hong Kong seat is enforced as a foreign award, subject to the limited grounds for refusal." },
  { q: "Is Hong Kong a reciprocating territory under Section 44A?", a: "Yes. A decree from a superior Hong Kong court can be filed for execution in India as if it were an Indian decree, subject to the exceptions in Section 13." },
  { q: "How do I enforce an Indian judgment in Hong Kong?", a: "Usually by a common law action on the judgment. Confirm the current route with Hong Kong counsel." },
  { q: "Should I choose HKIAC or SIAC?", a: "Both are respected. Choose on cost, familiarity, the counterparty's acceptance and the enforcement path, and name the rules and seat clearly." },
  { q: "Does stamp duty matter?", a: "Yes. Unstamped or under-stamped agreements are not admissible in evidence in India until the duty and penalty are paid." },
  { q: "Can I choose Hong Kong law?", a: "For commercial terms, yes, but local assets, security and regulatory points are governed by Indian law." },
  { q: "Can Indian courts help a Hong Kong-seated arbitration?", a: "Yes for interim measures in aid of arbitration unless the parties excluded it." },
]

const relatedCards = [
  { title: "Hong Kong as a Regional Headquarters for India: Holding Company, Trading Hub, Treasury and the Principal Purpose Test", desc: "How groups use a Hong Kong company as a regional holding, trading or treasury hub for India, the substance Indian and Hong Kong tax authorities expect, the treaty principal purpose test, Press Note 3 limits and alternatives.", href: "/hong-kong-to-india/hong-kong-as-regional-hub-for-india" },
  { title: "Funding Your Indian Subsidiary from Hong Kong: Equity, Preference Shares, External Borrowing and FEMA Reporting", desc: "How a Hong Kong parent can fund an Indian company: equity share and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return, Press Note 3 and reporting through the authorised dealer bank.", href: "/hong-kong-to-india/funding-and-fema" },
  { title: "Hong Kong Documents for an Indian Subsidiary: Notary, Apostille or Consular Legalisation and Translation", desc: "How to prepare Hong Kong company and director documents for Indian filings: certified copies, notary public, Hong Kong apostille, when consular legalisation applies, translation and a checklist of documents.", href: "/hong-kong-to-india/documents-hong-kong-apostille" },
  { title: "Exiting an Indian Subsidiary from Hong Kong: Share Sale, Buy-Back, Merger, Voluntary Liquidation and Tax on the Exit", desc: "How a Hong Kong parent exits or restructures an Indian business: sale of shares, FEMA pricing, FC-TRS, capital gains tax, buy-back, merger, voluntary liquidation, strike-off and the treaty position.", href: "/hong-kong-to-india/exit-and-restructuring" },
]

export default function ContractsCourtsArbitrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Contracts and Dispute Resolution for Hong Kong Companies in India: Governing Law, HKIAC Arbitration, Enforcing Hong Kong Judgments and Awards"
        description="How to draft and enforce contracts between a Hong Kong company and Indian counterparties: governing law, HKIAC or SIAC seats, Hong Kong as a reciprocating territory under Section 44A, enforcing awards under the New York Convention, stamp duty and limits on interim relief."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Contracts, Courts and Arbitration between India and Hong Kong: HKIAC, Section 44A and the New York Convention" },
        ]}
      />

      <GuideHero
        eyebrow="Disputes: contracts and enforcement"
        title="Contracts and Dispute Resolution for Hong Kong Companies in India: Governing Law, HKIAC Arbitration, Enforcing Hong Kong Judgments and Awards"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Hong Kong is a favoured arbitration seat for Indian cross-border contracts. A Hong Kong-seated
          arbitration award is enforceable in India under the New York Convention, because India has notified
          Hong Kong as a territory to which the Convention applies. Hong Kong is also notified as a
          reciprocating territory under Section 44A of the Code of Civil Procedure, so a decree from a superior
          Hong Kong court can be executed in India as if it were an Indian decree, subject to the statutory
          exceptions. Indian judgments are enforced in Hong Kong by a common law action on the judgment unless a
          reciprocal arrangement applies; confirm with Hong Kong counsel. Draft the clause carefully, pay stamp
          duty and plan evidence early.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="contracts-and-arbitration" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Seat options", "Hong Kong (HKIAC), Singapore (SIAC), India (ICC, MCIA, DIAC) or London; choose one and name the rules"],
                ["Award in India", "Hong Kong awards enforceable under the New York Convention route; India notified China, Hong Kong and Macao on 19 March 2012"],
                ["Court judgments", "Hong Kong is a reciprocating territory under Section 44A; a decree of a superior court is executable in India"],
                ["Indian judgments in Hong Kong", "Common law action on the judgment; no statutory registration for India as far as commonly reported; confirm"],
                ["Governing law", "Indian law is often needed for local assets and regulatory points; foreign law is permitted for commercial terms"],
                ["Stamp duty", "Agreements executed or brought to India attract state stamp duty; unstamped documents are not admissible until stamped"],
                ["Interim relief", "Indian courts can grant interim measures for foreign-seated arbitrations unless excluded; Hong Kong courts can also assist"],
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
          <li>Name the parties exactly, with Indian PAN and CIN details and the Hong Kong company number.</li>
          <li>Choose governing law and the arbitration institution, seat, number of arbitrators and language. A model clause avoids pathological clauses.</li>
          <li>State the currency and pricing, and the tax and Withholding Tax allocation, including gross-up if wanted.</li>
          <li>Include confidentiality, intellectual property and data protection terms. See <Link href="/hong-kong-to-india/data-protection-pdpo-dpdp" className="text-blue-800 font-semibold hover:underline">data protection</Link>.</li>
          <li>Add termination, notice and force majeure terms, and say who bears stamp duty.</li>
        </ul>

        <h2 id="arb" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Arbitration with a Hong Kong seat</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Step</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Hong Kong seat</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Enforcement in India</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Clause", "HKIAC Administered Arbitration Rules or UNCITRAL rules; seat Hong Kong", "Award is a foreign award under the Arbitration and Conciliation Act, 1996, Part II"],
                ["Interim measures", "Tribunal or Hong Kong court", "Indian courts may give interim relief in aid unless excluded"],
                ["Award", "Final and binding; challenge at the seat only on limited grounds", "File in the High Court with the award and agreement; the court tests the limited grounds for refusal"],
                ["Execution", "Hong Kong enforcement of Indian awards under the Arbitration Ordinance and the Convention", "Execute against Indian assets as a decree"],
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
          <li><strong>Hong Kong to India:</strong> a decree from a superior Hong Kong court can be filed for execution in an Indian district court under Section 44A, with a certified copy and a certificate of the extent of satisfaction. Exceptions in Section 13, such as lack of jurisdiction or fraud, still apply.</li>
          <li><strong>India to Hong Kong:</strong> start an action on the Indian judgment at common law, and expect the Hong Kong court to apply its own rules on finality and jurisdiction. Confirm with Hong Kong counsel.</li>
          <li>Where the amount is large, prefer arbitration for the clearer enforcement path.</li>
        </ul>

        <h2 id="practical" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Practical points</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Stamp the agreement in the correct state before using it as evidence.</li>
          <li>Keep the Hong Kong authentication of any power of attorney. See <Link href="/hong-kong-to-india/documents-hong-kong-apostille" className="text-blue-800 font-semibold hover:underline">Hong Kong documents</Link>.</li>
          <li>Use Indian counsel for local enforcement planning, including attachment of bank accounts and shares.</li>
          <li>Check payment terms for foreign exchange rules before agreeing on price in Hong Kong dollars. See <Link href="/hong-kong-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
        </ol>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A vague arbitration clause that names no institution or seat.</li>
          <li>Assuming an Indian judgment is automatically enforceable in Hong Kong.</li>
          <li>Leaving stamp duty unpaid.</li>
          <li>Agreeing a price without allocating Indian tax on payments.</li>
        </ul>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.ird.gov.hk/eng/welcome.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Inland Revenue Department (Hong Kong)</a>,{" "}
          <a href="https://www.cr.gov.hk/en/home/index.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Companies Registry (Hong Kong)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/hong-kong-to-india/contracts-courts-arbitration" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/hong-kong-to-india/faq"
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
            { label: "Hong Kong International Arbitration Centre", href: "https://www.hkiac.org/" },
            { label: "Section 44A, Code of Civil Procedure (Indian Kanoon)", href: "https://indiankanoon.org/doc/1163541/" },
            { label: "Ministry of Law and Justice (India)", href: "https://lawmin.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Hong Kong
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Drafting Contracts Between Hong Kong and India?"
        description="Tell us the counterparties and contract types, and we'll outline governing law, seat and enforcement options for India."
      />
    </main>
  )
}
