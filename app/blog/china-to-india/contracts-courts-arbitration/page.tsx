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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/contracts-courts-arbitration"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "choices", label: "Choosing law and seat" },
  { id: "awards", label: "Enforcing an arbitral award in India" },
  { id: "judgments", label: "Court judgments between India and China" },
  { id: "stamp", label: "Stamp duty and signing" },
  { id: "protection", label: "Investment protection" },
  { id: "drafting", label: "Drafting points for Chinese parents" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a Hong Kong or Singapore arbitral award be enforced in India?", a: "A foreign award from a notified New York Convention territory can be enforced in India under Part II of the Arbitration and Conciliation Act, 1996, on narrow grounds. Awards made in China, Hong Kong and Macao are covered by a 19 March 2012 notification." },
  { q: "Can a Chinese court judgment be enforced directly in India?", a: "As far as we can confirm, no. Mainland China is not on India's list of reciprocating territories, so a Chinese judgment would be evidence in a fresh suit. Confirm with counsel." },
  { q: "Can an Indian judgment be enforced in China?", a: "Recognition depends on Chinese procedure rules and reciprocity, which has been hard to show in practice. Arbitration avoids the problem." },
  { q: "Is an unstamped contract valid in India?", a: "It is not void, but it cannot be used as evidence until stamped and any penalty is paid." },
  { q: "Does Indian law still apply if my contract is governed by Chinese law?", a: "Mandatory Indian laws such as FEMA, the Companies Act and the Press Note 3 conditions still apply to the Indian subsidiary and the investment." },
  { q: "Is there an investment treaty protecting Chinese investors in India?", a: "It must be checked on the facts. India terminated many older treaties from 2016 and 2017, so do not assume protection." },
]

const relatedCards = [
  { title: "What a Chinese Parent Must Do at Home: Outbound Investment Filings, SAFE Registration and Tax Credit for Indian Tax", desc: "The Chinese-side steps for a parent investing in India: NDRC and MOFCOM outbound investment approval or filing, SAFE foreign exchange registration through the bank, state-owned enterprise approvals, export controls on technology and tax credit.", href: "/china-to-india/chinese-parent-obligations" },
  { title: "Choosing the Structure in India as a Chinese Investor: Wholly Owned Subsidiary, Joint Venture, Branch or Employer of Record", desc: "A comparison of ways for a Chinese company to operate in India: wholly owned subsidiary, joint venture with an Indian partner, branch or liaison office, LLP and Employer of Record, with Press Note 3 and approval consequences for each.", href: "/china-to-india/structure-options" },
  { title: "Exit and Restructuring: Share Sale, Buyback, Liquidation and Closing a Subsidiary Owned by a Chinese Parent", desc: "How a Chinese parent exits an Indian subsidiary: share sale and FEMA pricing, capital gains and the treaty, approval for a land-border buyer, buyback, voluntary liquidation, Chinese approvals and employee rules.", href: "/china-to-india/exit-and-restructuring" },
  { title: "Common Mistakes Chinese Companies Make in India and How to Avoid Them", desc: "The most frequent mistakes Chinese companies make when setting up in India: investing before Press Note 3 approval, assuming an apostille works, hidden ownership, late FEMA filings, visa mismatches and weak records.", href: "/china-to-india/common-mistakes" },
]

export default function ContractsCourtsArbitrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Contracts, Courts and Arbitration: Choosing Law and Seat and Enforcing Awards and Judgments Between China and India"
        description="How a Chinese parent protects its Indian subsidiary contracts: choice of law and seat, CIETAC, HKIAC and SIAC arbitration, enforcement of awards under the New York Convention, judgments, stamping and the investment protection position."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Contracts, Courts and Arbitration: Protecting a Chinese Parent and Enforcing in India" },
        ]}
      />

      <GuideHero
        eyebrow="Disputes: contracts and arbitration"
        title="Contracts, Courts and Arbitration: Choosing Law and Seat and Enforcing Awards and Judgments Between China and India"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Chinese parent can choose Chinese or Indian law and a neutral arbitration seat, such as Hong Kong or
          Singapore, for shareholder, supply and licence agreements. India notified China, Hong Kong and Macao
          as New York Convention territories on 19 March 2012, so a qualifying award made there can be enforced
          in India as a foreign award, on narrow grounds. Court judgments travel less well: mainland China is
          not among the territories whose decrees Indian courts execute directly, and Chinese courts recognise
          foreign judgments only on reciprocity, so arbitration is the safer route.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="contracts-and-arbitration" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Enforcement of awards in India", "Foreign awards under Part II of the Arbitration and Conciliation Act, 1996; India notified China, Hong Kong and Macao for the New York Convention on 19 March 2012, for awards made from that date"],
                ["Enforcement of Indian awards in China", "China is a New York Convention state; awards made in India are enforced through the Chinese courts under the Convention, with limited grounds for refusal"],
                ["Judgments", "Mainland China is not on the list of reciprocating territories under Section 44A of the Code of Civil Procedure, as far as we can confirm; a Chinese judgment would need a fresh suit in India. Confirm the current list with counsel"],
                ["Seat", "Neutral seats such as Singapore and Hong Kong are common; CIETAC, HKIAC, SIAC and ICC rules are used"],
                ["Stamp duty", "An unstamped agreement cannot be used as evidence until stamped and any penalty is paid"],
                ["Mandatory law", "FEMA, the Companies Act, Press Note 3 conditions and sector rules apply whatever the governing law"],
                ["Investment protection", "Check whether any investment treaty covers your investment; India terminated many older treaties from 2016 and 2017"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="choices" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing law and seat</h2>
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
                ["Governing law of the shareholder agreement", "Indian law for local enforcement; a neutral law is possible", "FEMA pricing, the Companies Act and Press Note 3 conditions apply anyway; some options and restrictions need care under Indian law"],
                ["Supply and licence agreements", "Chinese law is common for China-side supply; Indian law for local sales", "Customs value, transfer pricing and stamp duty"],
                ["Seat", "Singapore or Hong Kong; sometimes India", "The seat decides the supervisory courts; Indian courts can still grant interim relief where the Act allows"],
                ["Rules", "CIETAC, HKIAC, SIAC or ICC", "Name the institution exactly; state the number of arbitrators and the language"],
                ["Government approvals", "Make approval-related covenants explicit", "Conditions attached to the Press Note 3 approval should be reflected in the agreement"],
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
          <li>File an enforcement petition before the High Court with jurisdiction over the debtor&apos;s assets.</li>
          <li>The court checks the formal requirements and the narrow grounds in Section 48 of the Act, which include public policy.</li>
          <li>If satisfied, the award is deemed a decree of the court and is executed as a decree.</li>
          <li>Plan for payment: remittance of proceeds needs the right route through an authorised dealer bank.</li>
        </ol>

        <h2 id="judgments" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Court judgments between India and China</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian courts can execute decrees of listed reciprocating territories directly under Section 44A of
          the Code of Civil Procedure. As far as we can confirm, mainland China is not on that list, so a
          Chinese judgment would be evidence in a fresh Indian suit, subject to the tests in Section 13 of the
          Code and the limitation period. Recognition of an Indian judgment in China depends on the Chinese
          rules and on proof of reciprocity, which has been difficult in practice. This is why most joint
          venture and shareholder agreements choose arbitration. Check the current list and the Chinese position
          with counsel before relying on any court route.
        </p>

        <h2 id="stamp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Stamp duty and signing</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Stamp duty is state-based and depends on the instrument and the amount.</li>
          <li>An unstamped agreement is not void, but it cannot be used as evidence until stamped and any penalty is paid. Stamp before signing where possible.</li>
          <li>Use e-stamping where available.</li>
          <li>Authorise signatories by board resolution of the Indian subsidiary and keep a record of the date and place of signing.</li>
          <li>For Chinese signatories, use the company seal and the legal representative&apos;s signature as Chinese practice requires, and keep both in the signing record.</li>
        </ul>

        <h2 id="protection" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Investment protection</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India terminated many older bilateral investment treaties in 2016 and 2017. Whether any treaty still
          protects a particular Chinese investment in India must be checked on the facts, and the answer should
          not be assumed. A well-drafted shareholder agreement with a neutral seat, clear covenants on approvals
          and clean FEMA reporting is the practical protection.
        </p>

        <h2 id="drafting" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Drafting points for Chinese parents</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Name the institution and the seat precisely; ambiguity invites litigation about the clause.</li>
          <li>Use a tiered clause with negotiation first, then arbitration, with a short fuse.</li>
          <li>State the governing law of the arbitration agreement itself.</li>
          <li>Say who bears costs, the language, the number of arbitrators and the confidentiality terms.</li>
          <li>Add an Indian address for service on the subsidiary and a process agent.</li>
          <li>Describe the Chinese party exactly as in the business licence and the approval.</li>
        </ul>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.mofcom.gov.cn/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">MOFCOM (China)</a>,{" "}
          <a href="https://www.safe.gov.cn/en/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">SAFE (China)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/china-to-india/contracts-courts-arbitration" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/china-to-india/faq"
          seeAllLabel="See all 147 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Clifford Chance: India adds China, Hong Kong and Macao to its New York Convention list", href: "https://www.cliffordchance.com/briefings/2012/04/enter_the_dragonindiaaddschinahongkongan.html" },
            { label: "Ministry of Law and Justice (India)", href: "https://lawmin.gov.in/" },
            { label: "Hong Kong International Arbitration Centre", href: "https://www.hkiac.org/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Chinese
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Drafting Contracts Between China and India?"
        description="Tell us the counterparties and contract types, and we'll outline governing law, seat and enforcement options for India."
      />
    </main>
  )
}
