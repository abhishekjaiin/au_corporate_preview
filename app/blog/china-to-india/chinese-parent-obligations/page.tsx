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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/chinese-parent-obligations"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "chinese-steps", label: "The Chinese approval steps in order" },
  { id: "india-link", label: "How the Chinese and Indian steps fit together" },
  { id: "technology", label: "Technology, equipment and people" },
  { id: "tax", label: "Chinese tax on the investment (for your Chinese adviser)" },
  { id: "governance", label: "Governance and reporting" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does a Chinese company need approval in China to invest in India?", a: "Generally yes. Outbound investment needs an NDRC approval or filing, a MOFCOM approval or filing and SAFE foreign exchange registration through the bank, depending on the project. Confirm the current rules with Chinese counsel." },
  { q: "What are the new Chinese outbound investment regulations?", a: "State Council regulations (Order 837) on overseas investment were reported to take effect on 1 July 2026. They sit above the existing departmental rules, which continue to apply." },
  { q: "Which approval comes first, the Chinese or the Indian?", a: "Prepare both in parallel, but do not remit funds or incorporate until the Indian Press Note 3 approval is received and the Chinese filings allow the transfer." },
  { q: "Can I send technology or engineers to India freely?", a: "Not always. Controlled technology and some equipment transfers may need authorisation in China, and some manufacturers have reported difficulties. Check before planning delivery." },
  { q: "How is the Indian subsidiary's dividend taxed in China?", a: "Generally taxable, with credit for Indian Withholding Tax and, for qualifying holdings, indirect credit for underlying Indian tax. Your Chinese adviser must confirm the position." },
  { q: "Do state-owned enterprises face extra steps?", a: "Usually yes. The controlling shareholder or SASAC may need to approve overseas investments." },
]

const relatedCards = [
  { title: "Press Note 3 for Chinese Companies: When Government Approval Is Needed and What the 2026 Easing Changes", desc: "How India's Press Note 3 (2020) applies to a Chinese parent: prior government approval for investors incorporated in China, the 2026 easing for passive minority land-border ownership, the control test, the 60-day sectors, director clearance and planning.", href: "/china-to-india/india-press-note-3-and-chinese-investors" },
  { title: "Preparing Chinese Documents for India: Why There Is No Apostille Between China and India and What to Do Instead", desc: "How to prepare Chinese company documents for an Indian subsidiary: notarisation in China, authentication by the Chinese foreign affairs authority, attestation by the Indian Embassy or Consulate, certified translations and why the Apostille Convention does not apply between China and India.", href: "/china-to-india/documents-notarisation-legalisation" },
  { title: "Funding an Indian Subsidiary from China: Equity, Convertible Instruments, ECB Loans, SAFE Remittance and FC-GPR", desc: "How a Chinese parent funds an Indian subsidiary: equity pricing and valuation, compulsorily convertible instruments, external commercial borrowing, the Chinese SAFE step, inward remittance, FC-GPR and the 60-day and 30-day clocks.", href: "/china-to-india/funding-and-fema" },
  { title: "India-China Double Taxation Avoidance Agreement Explained: Rates, Permanent Establishment and Relief for a Chinese Parent", desc: "The India-China DTAA explained for a Chinese parent: 10% rates on dividends, interest, royalties and technical fees, permanent establishment rules, business profits, share gains, employment income, relief from double tax and how to claim treaty rates.", href: "/china-to-india/india-china-dtaa" },
]

export default function ChineseParentObligationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="What a Chinese Parent Must Do at Home: Outbound Investment Filings, SAFE Registration and Tax Credit for Indian Tax"
        description="The Chinese-side steps for a parent investing in India: NDRC and MOFCOM outbound investment approval or filing, SAFE foreign exchange registration through the bank, state-owned enterprise approvals, export controls on technology and tax credit."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Chinese Parent Obligations: ODI Filings, Foreign Exchange Registration and Tax Reporting" },
        ]}
      />

      <GuideHero
        eyebrow="Chinese side: parent duties"
        title="What a Chinese Parent Must Do at Home: Outbound Investment Filings, SAFE Registration and Tax Credit for Indian Tax"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Before a Chinese company sends money to India it normally has to clear its own outbound investment
          process: an NDRC approval or filing, a MOFCOM approval or filing for the overseas enterprise, and
          foreign exchange registration through its bank under SAFE rules. New State Council regulations on
          overseas investment were reported to take effect on 1 July 2026 and sit above the older departmental
          rules. These Chinese steps, the Indian Press Note 3 approval and the Indian incorporation must be
          sequenced, because each depends on the others. Your Chinese counsel must confirm the current Chinese
          requirements for your company type.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="parent-obligations" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Chinese approvals", "NDRC project approval or filing; MOFCOM approval or filing for the overseas enterprise; SAFE registration through the bank"],
                ["New regulations", "State Council regulations on outbound investment reported effective 1 July 2026 (State Council Order 837); older NDRC, MOFCOM and SAFE rules continue to apply alongside"],
                ["Sensitive vs non-sensitive", "Sensitive projects need approval; others generally a filing. Thresholds are set in the departmental rules; confirm them"],
                ["State-owned groups", "Extra supervision by the controlling shareholder or SASAC for central and local state enterprises"],
                ["Technology", "Transfer of controlled technology or staff may need export-control authorisation; China has reportedly tightened some transfers to India"],
                ["Annual reporting", "Overseas investment reporting through the MOFCOM system, and tax reporting of foreign income"],
                ["Tax", "Chinese enterprise income tax at 25% on worldwide income with credit for foreign tax; confirm with a Chinese adviser"],
                ["Sequence", "Plan Chinese approvals, the Indian Press Note 3 approval and the incorporation together"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="chinese-steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Chinese approval steps in order</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Step</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Authority</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical content</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Project approval or filing", "NDRC or its local office", "Project details, investor, amount, sector, use of funds", "Sensitive sectors or countries need approval; others a filing"],
                ["Overseas enterprise approval or filing", "MOFCOM or its local office", "Overseas enterprise, shareholding, business scope", "Gives the overseas investment certificate"],
                ["Foreign exchange registration", "SAFE through the bank", "Registration of the overseas direct investment", "Needed before funds go out; later changes need updates"],
                ["Funds transfer", "Bank", "Purchase of foreign exchange and remittance to India", "The Indian bank issues an inward remittance certificate"],
                ["Changes and exit", "NDRC, MOFCOM, SAFE", "Further investment, transfer, disposal", "Fresh filing or approval may be needed"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                  <td className="border border-gray-300 p-3">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="india-link" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the Chinese and Indian steps fit together</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Decide the sector and structure, and check the Indian cap and Press Note 3 position. See <Link href="/china-to-india/india-press-note-3-and-chinese-investors" className="text-blue-800 font-semibold hover:underline">Press Note 3</Link>.</li>
          <li>Prepare the Chinese filing in parallel with the Indian government application, because both ask for the same ownership and project details.</li>
          <li>Do not incorporate the Indian company or remit funds until the Indian approval is in hand and the Chinese filings allow the transfer.</li>
          <li>Keep the Chinese certificate and the Indian approval consistent in the investor name, amount and shareholding.</li>
          <li>File the Indian incorporation and funding steps. See <Link href="/china-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">incorporation steps</Link> and <Link href="/china-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
        </ol>

        <h2 id="technology" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Technology, equipment and people</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Chinese rules on export of controlled technology can apply when engineers, designs or machinery go to India. Press reports in 2025 described difficulties for some manufacturers moving equipment and Chinese engineers to India; treat the position as case-specific and ask Chinese counsel before committing a delivery schedule.</li>
          <li>Intellectual property transferred to the Indian subsidiary should be licensed under a written agreement priced at arm&apos;s length. See <Link href="/china-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li>Data and personal information leaving China is subject to a separate regime. See <Link href="/china-to-india/data-protection-pipl-dpdp" className="text-blue-800 font-semibold hover:underline">data protection</Link>.</li>
        </ul>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Chinese tax on the investment (for your Chinese adviser)</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Chinese resident enterprises are generally taxed on worldwide income at 25% with a credit for foreign tax paid, within limits.</li>
          <li>Dividends from a foreign subsidiary are generally taxable in China, with direct credit for Indian Withholding Tax and, for qualifying holdings, indirect credit for the underlying Indian tax.</li>
          <li>Controlled foreign company rules can attribute low-taxed foreign profits to the Chinese parent.</li>
          <li>Transfer pricing documentation requirements apply in China for related-party dealings, and the Chinese file must match the Indian file.</li>
          <li>Keep Indian Withholding Tax certificates and the Indian return to support the credit.</li>
        </ul>

        <h2 id="governance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Governance and reporting</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Board approval and, for state-owned groups, the approval of the controlling shareholder.</li>
          <li>Anti-corruption and compliance policies must reach the Indian team; Indian anti-bribery law applies there.</li>
          <li>Annual reporting of the overseas investment to MOFCOM and tax authorities.</li>
          <li>Prepare for questions on beneficial ownership from Indian banks and regulators.</li>
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

        <GuideServiceBox path="/china-to-india/chinese-parent-obligations" />
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
            { label: "Charltons: China's 2026 outbound investment regulations", href: "https://www.charltonslaw.com/chinas-2026-outbound-investment-regulations/" },
            { label: "MOFCOM (China)", href: "https://www.mofcom.gov.cn/" },
            { label: "SAFE (China)", href: "https://www.safe.gov.cn/en/" },
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
        title="Reporting on the Indian Subsidiary in China?"
        description="Tell us how the group reports, and we'll supply the Indian figures your ODI, foreign exchange and tax filings in China need."
      />
    </main>
  )
}
