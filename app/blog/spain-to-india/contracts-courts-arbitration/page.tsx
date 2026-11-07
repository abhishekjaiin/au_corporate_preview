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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/contracts-courts-arbitration"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "law", label: "Governing law and jurisdiction" },
  { id: "arb", label: "Arbitration clauses that work" },
  { id: "enforce", label: "Enforcing an award or a judgment in India" },
  { id: "interim", label: "Interim relief and delay" },
  { id: "stamp", label: "Stamping and signing" },
  { id: "treaty", label: "Investment treaty protection" },
  { id: "checklist", label: "Contract checklist for Spanish groups" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Should I choose arbitration or court for an Indian contract?", a: "Arbitration is usually more reliable, because awards are enforceable under the New York Convention while foreign court judgments are hard to enforce." },
  { q: "Which seat is common for Spanish groups?", a: "Madrid, Singapore, London and Paris." },
  { q: "Is Spain a party to the New York Convention?", a: "Yes. India applies Part II of its Arbitration Act to awards from countries it has notified, so confirm the notification at the time." },
  { q: "Can I enforce a Spanish court judgment in India?", a: "Directly only if Spain is a reciprocating territory under Section 44A, which to our knowledge it is not. A fresh suit may be needed." },
  { q: "Which law should govern the contract?", a: "Indian or Spanish law, stated expressly, with the dispute clause matched to it. Indian law is practical where the assets are in India." },
  { q: "Do Indian courts support arbitration?", a: "Generally yes, including interim measures in some cases, but delays are common." },
  { q: "Does an unstamped contract have value?", a: "It cannot be relied on as evidence until stamped. Plan the stamping." },
  { q: "Is there a bilateral investment treaty with Spain?", a: "A treaty was signed in 1997, but India terminated many treaties. Confirm the status from an official source." },
  { q: "How do I protect payment?", a: "Use advance payment, bank guarantees or escrow, and clear termination rights." },
]

const relatedCards = [
  { title: "Personal Data Between Spain and India: GDPR Transfer Rules, Standard Contractual Clauses, the DPDP Act and Rules, Employee Data and Penalties", desc: "How a Spanish group lawfully moves employee and customer data to and from India: the GDPR transfer regime and the lack of an EU adequacy decision for India, standard contractual clauses and transfer assessments, the Spanish AEPD and LOPDGDD, and the DPDP Act duties that start in May 2027.", href: "/spain-to-india/data-protection-gdpr-dpdp" },
  { title: "EU-India Free Trade Agreement for Spanish Companies: Status After the January 2026 Conclusion, Services and Investment, Rules of Origin and How to Plan Before It Is in Force", desc: "The EU-India trade agreement as it affects a Spanish company exporting to or investing in India: the 27 January 2026 conclusion, the signature and ratification steps reported for December 2026 and early 2027, what it is expected to cover, the separate investment protection agreement, and a planning checklist.", href: "/spain-to-india/eu-india-fta-and-spanish-exporters" },
  { title: "Exiting an Indian Subsidiary: Sale of Shares, Buyback, Voluntary Liquidation, Strike-Off and Merger, with the 10% Treaty Rule, FEMA Pricing and Spanish Declarations", desc: "How a Spanish parent can sell, wind up or restructure an Indian subsidiary: the tax on share gains under the India-Spain treaty, FEMA pricing, buyback and capital reduction, liquidation and strike-off, mergers and conversions, repatriating the proceeds and the Spanish filings that close the loop.", href: "/spain-to-india/exit-and-restructuring" },
  { title: "Which Structure Should a Spanish Company Use in India? Private Limited, LLP, Branch, Liaison Office, Project Office or Joint Venture, with Sector Notes", desc: "Compare the ways a Spanish group can enter India: a wholly owned private limited company, a joint venture, a limited liability partnership, a branch, a liaison office or a project office. Includes the RBI net worth tests, tax differences and notes for renewables, auto components, ceramics, retail and infrastructure.", href: "/spain-to-india/structure-options" },
]

export default function ContractsCourtsArbitrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Contracts and Disputes in India for Spanish Companies: Governing Law, Arbitration Seat, the New York Convention, Enforcing Spanish Judgments and Investment Protection"
        description="How to draft and enforce contracts with Indian counterparties from Spain: governing law, the choice of arbitration seat (Madrid, Singapore, London or Paris), enforcement of awards under the New York Convention, why Spanish court judgments are hard to enforce in India, interim relief, mediation, stamping and the status of investment treaty protection."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "Contracts, Courts and Arbitration in India for Spanish Companies" },
        ]}
      />

      <GuideHero
        eyebrow="Disputes: contracts and arbitration"
        title="Contracts and Disputes in India for Spanish Companies: Governing Law, Arbitration Seat, the New York Convention, Enforcing Spanish Judgments and Investment Protection"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          For contracts with Indian parties, arbitration is usually more reliable than going to court, because
          an arbitral award can be enforced in India under the New York Convention, while a Spanish court
          judgment is unlikely to be enforced directly because Spain is not, to our knowledge, a reciprocating
          territory under Section 44A of the Code of Civil Procedure. Spanish groups often choose Madrid,
          Singapore, London or Paris as the seat, with Indian law or Spanish law as the governing law, and a
          clause naming an institution and the number of arbitrators. Indian courts support arbitration but
          apply the law on stamping, public policy and interim relief with care. A contract that works in
          practice needs a clear scope, payment terms that fit exchange control, and a plan for the first
          dispute before it arises. Investment treaty protection is uncertain, because India terminated many
          bilateral investment treaties; confirm the status of the India-Spain treaty.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="contracts-and-arbitration" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Preferred route", "Arbitration with an institutional clause"],
                ["Seats Spanish groups use", "Madrid, Singapore, London, Paris"],
                ["Enforcement of awards", "New York Convention; Spain is a party; India applies it to notified reciprocating countries"],
                ["Spanish court judgments", "Not directly enforceable if Spain is not a reciprocating territory; a fresh suit may be needed; confirm the current notification"],
                ["Interim relief", "Indian courts can grant support to foreign-seated arbitrations in some cases; check the clause"],
                ["Commercial suits", "Pre-institution mediation applies to most commercial suits"],
                ["Stamping", "Unstamped contracts are not admissible until stamped"],
                ["Investment treaty", "India-Spain bilateral investment treaty of 1997; status uncertain after India terminated many treaties"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="law" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Governing law and jurisdiction</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Parties can choose the governing law of a contract, and Indian courts generally respect the choice of
          a foreign law if it is not contrary to Indian public policy. Spanish law is a familiar choice for a
          Spanish group; Indian law is a practical choice where the subject matter, the assets and the
          counterparty are in India, because it avoids a debate about foreign law in Indian proceedings. English
          law is common in cross-border finance. Whatever you choose, make sure that the dispute resolution
          clause matches: an Indian-law contract with an exclusive Spanish court clause invites a fight over
          enforcement.
        </p>

        <h2 id="arb" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Arbitration clauses that work</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Clause element</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Recommended approach</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Why</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Institution and rules", "Name a recognised institution, for example the Madrid arbitration court, the Singapore International Arbitration Centre or the ICC", "Avoids a debate about appointing arbitrators"],
                ["Seat", "Madrid, Singapore, London or Paris", "Neutral seats with strong courts; Spain is a convention state"],
                ["Number of arbitrators", "Three for large disputes, one for small", "Cost against quality"],
                ["Language", "English", "Indian counterparties and evidence"],
                ["Governing law of the contract", "Indian or Spanish law, stated expressly", "Avoids a conflict-of-law debate"],
                ["Emergency and interim relief", "Provide for emergency arbitrator and court support", "Speed"],
                ["Multi-tier steps", "A short negotiation or mediation step before arbitration", "Many Indian courts expect it"],
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

        <h2 id="enforce" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Enforcing an award or a judgment in India</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India is a party to the New York Convention and applies Part II of the Arbitration and Conciliation
          Act, 1996 to awards made in countries it has notified as reciprocating. An award from a notified
          country is enforced as if it were a decree of the Indian court once the court is satisfied that the
          conditions are met, and the grounds for refusal are narrow and include public policy. Spain is a party
          to the Convention, but check that India&apos;s notification covers it at the time of enforcement. A
          judgment of a Spanish court is different: Section 44A of the Code of Civil Procedure allows direct
          execution of judgments only of courts in notified reciprocating territories, and Spain, to our
          knowledge, is not one, so the judgment would have to be sued on afresh in India as evidence of the
          debt. That adds years. For this reason arbitration is the safer choice.
        </p>

        <h2 id="interim" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Interim relief and delay</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian courts can grant interim measures in support of arbitration, including for foreign-seated
          arbitrations unless the parties have excluded it, and an emergency arbitrator&apos;s order may be
          recognised in some circumstances. A counterparty with assets in India can be restrained from dealing
          with them while the arbitration proceeds. Plan for delay: court proceedings in India are slow, so make
          the contract payments secure through advance payments, bank guarantees or escrow, and use clear
          termination rights for non-payment. Commercial suits require pre-institution mediation unless urgent
          relief is sought.
        </p>

        <h2 id="stamp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Stamping and signing</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Under Indian stamp law an unstamped or insufficiently stamped agreement cannot be relied on as
          evidence until the duty and any penalty are paid. A contract signed in Spain and brought to India must
          be stamped within a set period after it arrives. The Spanish side should keep wet-ink or properly
          authenticated electronic signatures and the Indian side should plan the stamping. For powers of
          attorney, see{" "}
          <Link href="/spain-to-india/documents-apostille-and-sworn-translation" className="text-blue-800 font-semibold hover:underline">the documents guide</Link>.
        </p>

        <h2 id="treaty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Investment treaty protection</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Spain and India signed a bilateral investment treaty in 1997, and India terminated a large number of
          such treaties from 2016 onward and replaced them with a model text. Whether the Spain treaty remains
          in force, and on what terms, should be confirmed from an official source before you rely on it.
          Investment protection is also being negotiated as a separate agreement alongside the EU-India trade
          agreement. For planning, assume that contractual protections and a well-drafted arbitration clause
          matter more than a treaty claim. See{" "}
          <Link href="/spain-to-india/eu-india-fta-and-spanish-exporters" className="text-blue-800 font-semibold hover:underline">the EU-India trade agreement guide</Link>.
        </p>

        <h2 id="checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contract checklist for Spanish groups</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Define the scope, deliverables and acceptance tests in detail.</li>
          <li>State prices in a single currency and say who bears exchange rate and tax changes.</li>
          <li>Make the payment terms work with the Indian remittance rules and tax withholding.</li>
          <li>Include intellectual property ownership and a licence that is enforceable in India.</li>
          <li>Add anti-bribery, sanctions and data protection clauses.</li>
          <li>Choose governing law, institution, seat and language together.</li>
          <li>Plan stamping and registration on the Indian side.</li>
          <li>Keep a record of notices and communications to prove performance.</li>
        </ol>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://sede.agenciatributaria.gob.es/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Agencia Tributaria (Spain)</a>,{" "}
          <a href="https://comercio.gob.es/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Spanish Ministry of Economy, Trade and Business</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/spain-to-india/contracts-courts-arbitration" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/spain-to-india/faq"
          seeAllLabel="See all 179 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
            { label: "New York Convention: contracting states", href: "https://www.newyorkconvention.org/countries" },
            { label: "Legislative Department (India)", href: "https://legislative.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and Spanish
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Drafting Contracts Between Spain and India?"
        description="Tell us the counterparties and contract types, and we'll outline governing law, seat and enforcement options for India."
      />
    </main>
  )
}
