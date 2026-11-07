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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/manufacturing-and-jv-for-chinese-companies"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "why", label: "Why joint ventures dominate" },
  { id: "terms", label: "Key JV terms for a Chinese partner" },
  { id: "process", label: "A typical path" },
  { id: "incentives", label: "Incentives and subsidies" },
  { id: "risks", label: "Practical risks" },
  { id: "transfer", label: "Moving toward Indian control" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Which sectors have the 60-day fast track under the amended Press Note 3?", a: "Reports name capital goods, electronic capital goods, electronic components, polysilicon and ingot-wafer, and the list can be revised by a committee of secretaries. Check the current notification." },
  { q: "Does a Chinese manufacturer need an Indian partner?", a: "Not legally in every sector, but reports say Indian majority ownership and control is expected in the fast-track sectors, so a joint venture is the usual model." },
  { q: "Can a Chinese company license technology to an Indian JV?", a: "Yes, under a written agreement priced at arm's length, subject to Chinese export controls, Indian customs and tax rules, and the Press Note 3 approval conditions." },
  { q: "Do production-linked incentive schemes accept Chinese-linked applicants?", a: "Each scheme has its own conditions and may scrutinise or restrict land-border-country ownership. Read the scheme notice before budgeting." },
  { q: "How should the exit be planned?", a: "Agree call and put options, valuation and the arbitration seat before entry, and keep within FEMA pricing rules. See the exit guide." },
  { q: "Can Chinese engineers be sent to a JV plant?", a: "Yes, with the right visa and, for Chinese nationals, security clearance. Some manufacturers have reported delays, so plan buffers." },
]

const relatedCards = [
  { title: "Press Note 3 for Chinese Companies: When Government Approval Is Needed and What the 2026 Easing Changes", desc: "How India's Press Note 3 (2020) applies to a Chinese parent: prior government approval for investors incorporated in China, the 2026 easing for passive minority land-border ownership, the control test, the 60-day sectors, director clearance and planning.", href: "/china-to-india/india-press-note-3-and-chinese-investors" },
  { title: "Choosing the Structure in India as a Chinese Investor: Wholly Owned Subsidiary, Joint Venture, Branch or Employer of Record", desc: "A comparison of ways for a Chinese company to operate in India: wholly owned subsidiary, joint venture with an Indian partner, branch or liaison office, LLP and Employer of Record, with Press Note 3 and approval consequences for each.", href: "/china-to-india/structure-options" },
  { title: "Transfer Pricing Between a Chinese Parent and an Indian Subsidiary: Pricing Components, Equipment and Technology", desc: "How transfer pricing works between China and India: Indian arm's length rules and Form 48, pricing of components, equipment and technology, customs value, Chinese documentation, advance pricing agreements and disputes.", href: "/china-to-india/transfer-pricing" },
  { title: "Relocating Chinese Staff to India: Employment Visa, Business Visa, Clearance and Registration", desc: "What a Chinese company must plan when sending staff to India: business visa limits, employment visa rules and salary floor, security clearance, the reported 2025 visa facilitation, FRRO registration, family visas and directors.", href: "/china-to-india/relocate-chinese-staff" },
]

export default function ManufacturingAndJvForChineseCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Manufacturing in India with a Chinese Partner: Approval, Joint Venture Terms, Technology Licences and Local Content"
        description="How Chinese manufacturers approach India: joint ventures with Indian partners, the 60-day fast-track sectors under the amended Press Note 3, incentive schemes, technology licences, supply chains, customs and the practical limits."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Manufacturing and Joint Ventures in India for Chinese Companies: Electronics, Components and Capital Goods" },
        ]}
      />

      <GuideHero
        eyebrow="Model: manufacturing and JV"
        title="Manufacturing in India with a Chinese Partner: Approval, Joint Venture Terms, Technology Licences and Local Content"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Manufacturing is where most Chinese investment interest in India sits, especially electronics,
          electronic components, capital goods and solar inputs. The amended Press Note 3 reportedly sets a
          60-day target for approvals in specified manufacturing sectors, and reports say Indian majority
          ownership and control is expected there, which points to joint ventures with an Indian partner rather
          than wholly owned Chinese plants. Success depends on the approval, the JV agreement, the technology
          licence and the supply chain being consistent with each other.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="manufacturing-jv" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Fast-track sectors (reported)", "Capital goods, electronic capital goods, electronic components, polysilicon and ingot-wafer; the list can be revised"],
                ["Ownership expectation", "Indian citizens or Indian-owned and controlled entities to keep majority shareholding and control, as reported"],
                ["Approval", "Press Note 3 approval for the Chinese stake; the JV agreement must match it"],
                ["Technology", "Licence from the Chinese partner at arm's length; Chinese export-control and Indian customs rules apply"],
                ["Incentives", "Production-linked and component manufacturing schemes have their own eligibility and may restrict or scrutinise Chinese-linked applicants; check each scheme"],
                ["Supply chain", "Imports of components from China are subject to customs duty and trade remedies"],
                ["People", "Chinese engineers need the right visa and security clearance; see the relocation guide"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why joint ventures dominate</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Indian partners bring land, licences, distribution and customer relationships.</li>
          <li>An Indian-controlled structure fits the direction of the amended Press Note 3 for manufacturing.</li>
          <li>The Chinese partner brings technology, equipment and process know-how.</li>
          <li>A JV spreads the capital and the regulatory risk, but it needs a clear exit plan.</li>
        </ul>

        <h2 id="terms" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key JV terms for a Chinese partner</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Term</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Why it matters</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Point to check</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Shareholding and control", "Must match the Press Note 3 approval; control rights can change the analysis", "Board seats, vetoes, reserved matters and side letters"],
                ["Technology licence", "Defines what the JV may use and pay", "Scope, term, royalty and improvements; Chinese export-control clearance"],
                ["Supply agreement", "Components and equipment from the Chinese partner", "Pricing, customs value and transfer pricing; see the transfer pricing guide"],
                ["Local content and sourcing", "Incentive schemes and customers may require it", "Plan for Indian suppliers"],
                ["Deadlock and exit", "Joint ventures break down", "Call and put options within FEMA pricing; arbitration seat"],
                ["Non-compete", "Limits on competing activity", "Enforceability under Indian law is limited after exit; take advice"],
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

        <h2 id="process" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A typical path</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Choose the product, location and partner; check the sector cap and the fast-track list.</li>
          <li>Sign a term sheet and a confidentiality agreement; begin due diligence on the partner and its owners.</li>
          <li>File the Press Note 3 application describing the JV, and the Chinese outbound filings.</li>
          <li>On approval, sign the shareholder agreement and the technology and supply agreements, matching the approved terms.</li>
          <li>Incorporate or subscribe to the JV company; remit funds; file FC-GPR. See <Link href="/china-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
          <li>Secure land, power, environmental and factory licences; hire and train the team.</li>
          <li>Start production, with documents ready for customs and tax audits.</li>
        </ol>

        <h2 id="incentives" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Incentives and subsidies</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>India runs production-linked and component manufacturing schemes for electronics and other sectors. Press reports describe a scheme for electronic components with a large outlay launched in 2025; check the current scheme notices for eligibility and for any conditions on foreign or land-border-country ownership.</li>
          <li>State governments offer land, power and capital subsidies. Terms differ by state and change often.</li>
          <li>Duty concessions on capital goods, and special economic zone or export-oriented unit status, have their own conditions.</li>
          <li>Do not budget for an incentive until the scheme approval is in hand.</li>
        </ul>

        <h2 id="risks" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Practical risks</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Approvals can take longer than the 60-day target in a case that raises security questions.</li>
          <li>Reports in 2025 described difficulties for some manufacturers moving equipment and Chinese engineers to India. Treat the schedule for machinery and staff as uncertain.</li>
          <li>Trade remedies such as anti-dumping duties can change the cost of imported inputs. See <Link href="/china-to-india/restricted-sectors-procurement-and-trade" className="text-blue-800 font-semibold hover:underline">restricted sectors, procurement and trade</Link>.</li>
          <li>Indian partners may face their own scrutiny when they work with Chinese-linked firms. Choose a partner with a clean record.</li>
          <li>Intellectual property protection needs contract terms and enforcement planning. See <Link href="/china-to-india/contracts-courts-arbitration" className="text-blue-800 font-semibold hover:underline">contracts and arbitration</Link>.</li>
        </ul>

        <h2 id="transfer" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Moving toward Indian control</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Some Chinese manufacturers plan an Indian-majority structure from the start, with the Chinese partner
          as technology provider and minority investor. Others start with a licence and supply model and add
          equity later with approval. Whichever model you choose, document the technology, pricing and exit
          terms in advance and keep them consistent with the approval letter.
        </p>

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

        <GuideServiceBox path="/china-to-india/manufacturing-and-jv-for-chinese-companies" />
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
            { label: "BDO India: Press Note 3 easing", href: "https://www.bdo.in/en-gb/news/2026/india-eases-fdi-rules-under-press-note-3-with-10-per-cent-cap-for-border-country-investors" },
            { label: "DPIIT", href: "https://dpiit.gov.in/" },
            { label: "TrendForce: reported Chinese restrictions on technology and engineer transfers", href: "https://www.trendforce.com/news/2025/02/18/news-beijing-reportedly-tightens-tech-exports-amid-trade-tensions-impacting-foxconn/" },
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
        title="Planning Manufacturing or a Joint Venture in India?"
        description="Tell us the product, the partner and the ownership split, and we'll map the approval, incentives and the JV structure."
      />
    </main>
  )
}
