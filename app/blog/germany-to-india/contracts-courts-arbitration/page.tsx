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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/contracts-courts-arbitration"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "clause", label: "Choosing law and seat" },
  { id: "awards", label: "Enforcing an arbitral award in India" },
  { id: "judgments", label: "Court judgments: why arbitration travels better" },
  { id: "stamp", label: "Stamp duty and signing" },
  { id: "protection", label: "The investment protection gap" },
  { id: "drafting", label: "Drafting points for German parents" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a German arbitral award be enforced in India?", a: "Generally yes, as a foreign award under Part II of the Arbitration and Conciliation Act, 1996, on narrow grounds, if Germany is a notified New York Convention territory. Have Indian counsel confirm the current notification." },
  { q: "Can I enforce a German court judgment in India?", a: "Not directly. Germany is not among India's reciprocating territories, so the judgment is the basis for a fresh suit in an Indian court, normally within three years." },
  { q: "Can an Indian court judgment be enforced in Germany?", a: "Recognition depends on reciprocity under German procedure law, which has been difficult to show for India. Arbitration avoids the problem." },
  { q: "Does an unstamped contract hold in Indian courts?", a: "It is not void, but it cannot be used as evidence until stamped and any penalty is paid." },
  { q: "Is Indian law excluded if my contract is governed by German law?", a: "No. FEMA, the Companies Act and other mandatory Indian laws still apply to the Indian subsidiary and its contracts." },
  { q: "Is there an investment treaty protecting German investors in India?", a: "None is in force today. The EU-India free trade agreement has no investment chapter, and a separate agreement is under negotiation." },
]

const relatedCards = [
  { title: "The India-EU Free Trade Agreement: What It Changes, and What It Leaves Alone, for a German Company Setting Up in India", desc: "Status and content of the India-EU free trade agreement for German companies: services access, staff mobility, tariffs on components, the investment protection gap and what stays under the 1995 tax treaty.", href: "/germany-to-india/india-eu-fta-and-germany" },
  { title: "Moving Personal Data Between Germany and India: GDPR Transfer Rules, Works Councils and the DPDP Act", desc: "How the GDPR and India's Digital Personal Data Protection Act apply when a German company has an Indian subsidiary: standard contractual clauses, transfer impact assessments, employee data, works council rights, breach notice and penalties.", href: "/germany-to-india/data-protection-gdpr-dpdp" },
  { title: "Exit and Restructuring: Share Sale, Buyback, Liquidation and Closing a Subsidiary Owned by a German Parent", desc: "How a German parent exits an Indian subsidiary: share sale and FEMA pricing, capital gains and the treaty, buyback, voluntary liquidation, strike off, German effect and employee rules.", href: "/germany-to-india/exit-and-restructuring" },
  { title: "Common Mistakes German Companies Make in India and How to Avoid Them", desc: "The most frequent mistakes German companies make when setting up in India: late FEMA filings, missing forms for treaty relief, works council surprises, apostille errors, PE creation and transfer pricing gaps.", href: "/germany-to-india/common-mistakes" },
]

export default function ContractsCourtsArbitrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Contracts, Courts and Arbitration: Choosing Law and Seat, and Enforcing in India and Germany"
        description="How a German parent protects its Indian subsidiary contracts: choice of law, DIS and other arbitration, why German court judgments need a fresh suit in India, enforcing awards, stamping and the investment protection gap."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "Contracts, Courts and Arbitration: Protecting a German Parent and Enforcing in India" },
        ]}
      />

      <GuideHero
        eyebrow="Disputes: contracts and arbitration"
        title="Contracts, Courts and Arbitration: Choosing Law and Seat, and Enforcing in India and Germany"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A German parent can choose German law and a German-seated arbitration, for example under the DIS
          rules, for shareholder, services and licence agreements. An arbitral award from a New York Convention
          country can be enforced in India as a foreign award under Part II of the Arbitration and Conciliation
          Act, 1996. A German court judgment cannot be executed directly, because Germany is not on India&apos;s
          list of reciprocating territories, so the winner must bring a fresh suit in India within three years.
          Indian mandatory law, FEMA and stamp duty still apply, and there is no investment protection treaty
          today.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="contracts-and-arbitration" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Seat", "Germany is a well-developed arbitration seat under the German Code of Civil Procedure (Book 10), which follows the UNCITRAL Model Law; DIS, ICC and others are common"],
                ["Enforcement of awards", "Part II of the Arbitration and Conciliation Act, 1996 for New York Convention awards; confirm the current Indian notification for Germany with counsel"],
                ["Enforcement of judgments", "Germany is not among the notified reciprocating territories; a German judgment is a cause of action for a fresh suit in India, normally within three years"],
                ["Indian judgments in Germany", "Recognition depends on reciprocity under Section 328 of the German Code of Civil Procedure, which has been hard to establish for India; arbitration avoids the question"],
                ["Stamp duty", "An unstamped agreement is not void but cannot be used as evidence in India until stamped and any penalty is paid"],
                ["Investment protection", "No treaty in force protecting German investors in India; an EU-India agreement is under negotiation"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="clause" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing law and seat</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Choice</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical position</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Points to check</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Governing law of the shareholder agreement", "German law is common for a German parent; Indian law for local contracts", "FEMA and the Companies Act apply regardless; some clauses (certain put options, non-competes) need care under Indian law"],
                ["Standard terms with Indian customers", "German law brings the German rules on standard terms, which also apply between businesses", "Many German clauses fail the German test; use neutral or Indian law for local customers where sensible"],
                ["Seat", "Germany, or a neutral seat such as Singapore or London", "Seat decides the supervisory courts; Indian courts can still grant interim help where the Act allows"],
                ["Rules", "DIS or ICC rules, with an expedited option for smaller claims", "Name the institution exactly; state the number of arbitrators and language"],
                ["Intercompany agreements", "Indian law where the Indian subsidiary needs to enforce locally", "Align with the transfer pricing documentation"],
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

        <h2 id="awards" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Enforcing an arbitral award in India</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Obtain the award and a certified copy of the arbitration agreement, with certified English translations if needed.</li>
          <li>File an enforcement petition before the High Court with jurisdiction over the assets of the debtor.</li>
          <li>The court checks the formal requirements and the narrow grounds in Section 48 of the Act, which include public policy.</li>
          <li>If satisfied, the award is deemed a decree of the court and is executed as a decree.</li>
          <li>Plan for payment: remittance of the proceeds needs the right route through an authorised dealer bank.</li>
        </ol>

        <h2 id="judgments" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Court judgments: why arbitration travels better</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India lists the countries whose courts it treats as reciprocating territories under Section 44A of the
          Code of Civil Procedure, and a decree from one of them can be executed directly. The list includes the
          United Kingdom, Singapore, the UAE and a handful of others, but not Germany. A German judgment
          therefore serves as evidence and as the cause of action in a new suit in an Indian court, the claim
          must still pass the tests in Section 13 of the Code, and the time limit for the new suit is generally
          three years from the judgment. That costs time and money, which is why most parent-subsidiary and
          joint venture agreements choose arbitration.
        </p>

        <h2 id="stamp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Stamp duty and signing</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Stamp duty is state-based and depends on the instrument and the amount.</li>
          <li>An unstamped agreement is not void, but it cannot be used as evidence until stamped and any penalty is paid. Stamp before signing where possible.</li>
          <li>Use electronic stamping or the state&apos;s e-stamp system where available.</li>
          <li>Authorise signatories by board resolution of the Indian subsidiary, and record the signing date and place.</li>
        </ul>

        <h2 id="protection" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The investment protection gap</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India wound down many older bilateral investment treaties from 2016 and 2017, and the EU-India free
          trade agreement does not contain an investment protection chapter. A separate investment protection
          agreement is under negotiation. Until it applies, a German investor should rely on its contracts, a
          neutral arbitration clause, a well-drafted shareholder agreement and clean FEMA reporting. See{" "}
          <Link href="/germany-to-india/india-eu-fta-and-germany" className="text-blue-800 font-semibold hover:underline">the India-EU free trade agreement</Link>.
        </p>

        <h2 id="drafting" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Drafting points for German parents</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Name the institution and the seat precisely; ambiguity invites litigation about the clause.</li>
          <li>Include a tiered clause with negotiation first, then arbitration, with a short fuse.</li>
          <li>State the governing law of the arbitration agreement itself.</li>
          <li>Say who bears costs, the language, the number of arbitrators and the confidentiality terms.</li>
          <li>Add an Indian address for service on the subsidiary and a process agent.</li>
          <li>Avoid copying a German limited-liability company agreement into an Indian shareholder agreement without checking FEMA and Indian company law.</li>
        </ul>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.bzst.de/EN/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Federal Central Tax Office (BZSt)</a>,{" "}
          <a href="https://www.handelsregister.de/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Handelsregister</a>{" "}
          and the{" "}
          <a href="https://www.bundesbank.de/en" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Deutsche Bundesbank</a>.
        </p>

        <GuideServiceBox path="/germany-to-india/contracts-courts-arbitration" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/germany-to-india/faq"
          seeAllLabel="See all 146 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Mondaq: enforcement of foreign judgments and decrees in India", href: "https://www.mondaq.com/india/civil-law/1462136/enforcement-of-foreign-judgmentdecree-in-india" },
            { label: "German Arbitration Institute (DIS)", href: "https://www.disarb.org/en" },
            { label: "Ministry of Law and Justice (India)", href: "https://lawmin.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and German
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Drafting Contracts Between Germany and India?"
        description="Tell us the counterparties and contract types, and we'll outline governing law, seat and enforcement options for India."
      />
    </main>
  )
}
