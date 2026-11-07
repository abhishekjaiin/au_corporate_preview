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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/transfer-pricing"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "rules", label: "The Indian rules in short" },
  { id: "flows", label: "Common China–India flows" },
  { id: "customs", label: "Customs value and transfer price" },
  { id: "china-rules", label: "The Chinese rules in short" },
  { id: "safe", label: "Safe harbour, APAs and disputes" },
  { id: "cycle", label: "A practical annual cycle" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does India have a small-company exemption from transfer pricing?", a: "No. Form 48 is needed for any international transaction with an associated enterprise, whatever the value. Detailed documentation applies above prescribed thresholds that your adviser should confirm each year." },
  { q: "What is Form 48?", a: "The accountant's report on international transactions, previously Form 3CEB, filed with the tax return under the Income-tax Act, 2025." },
  { q: "How are components bought from a Chinese parent priced?", a: "At arm's length, usually with the resale price, cost plus or comparable price method, with documents that also support the customs value." },
  { q: "Can customs value and transfer price differ?", a: "They can, but the authorities may test both. Keep the same documents and explain differences." },
  { q: "Can a Chinese parent charge a royalty to its Indian subsidiary?", a: "Yes, at arm's length, under a written licence and within the 10% treaty rate for withholding. The payment must be supported by a benchmark and by evidence that the technology is used." },
  { q: "What happens if India adjusts the price?", a: "Indian income rises, penalty may apply, and the Chinese side may seek relief under the mutual agreement procedure of the treaty." },
]

const relatedCards = [
  { title: "India-China Double Taxation Avoidance Agreement Explained: Rates, Permanent Establishment and Relief for a Chinese Parent", desc: "The India-China DTAA explained for a Chinese parent: 10% rates on dividends, interest, royalties and technical fees, permanent establishment rules, business profits, share gains, employment income, relief from double tax and how to claim treaty rates.", href: "/china-to-india/india-china-dtaa" },
  { title: "Getting Money Out of India to a Chinese Parent: Dividends, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a Chinese parent receives money from an Indian subsidiary: 10% treaty withholding, Section 393, Forms 41, 145 and 146, Chinese tax credit, scrutiny of related-party payments and the documents banks ask for.", href: "/china-to-india/repatriating-profits" },
  { title: "Manufacturing in India with a Chinese Partner: Approval, Joint Venture Terms, Technology Licences and Local Content", desc: "How Chinese manufacturers approach India: joint ventures with Indian partners, the 60-day fast-track sectors under the amended Press Note 3, incentive schemes, technology licences, supply chains, customs and the practical limits.", href: "/china-to-india/manufacturing-and-jv-for-chinese-companies" },
  { title: "What Else Applies to Chinese-Linked Companies in India: Sector Limits, Government Contracts, App Blocks, Customs and Trade Remedies", desc: "Beyond Press Note 3: sector limits, the registration rule for land-border-country bidders in government procurement, blocked apps and security reviews, customs duty, anti-dumping duties and enforcement scrutiny for a Chinese-owned company in India.", href: "/china-to-india/restricted-sectors-procurement-and-trade" },
]

export default function TransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Transfer Pricing Between a Chinese Parent and an Indian Subsidiary: Pricing Components, Equipment and Technology"
        description="How transfer pricing works between China and India: Indian arm's length rules and Form 48, pricing of components, equipment and technology, customs value, Chinese documentation, advance pricing agreements and disputes."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Transfer Pricing Between China and India: Form 48, Documentation and Technology Charges" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: transfer pricing"
        title="Transfer Pricing Between a Chinese Parent and an Indian Subsidiary: Pricing Components, Equipment and Technology"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Every transaction between a Chinese parent and its Indian subsidiary must be priced at arm&apos;s
          length for Indian tax. India has no small-company exemption: any international transaction with an
          associated enterprise needs an accountant&apos;s report in Form 48 (previously Form 3CEB), and
          detailed documentation is required above prescribed value thresholds. In a China–India group the
          commonest flows are components and equipment bought from the parent, technology licences, and finished
          goods sold back, so customs value, royalties and margins have to be consistent. China has its own
          related-party documentation rules, and the two files must agree.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="transfer-pricing" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Arm's length rule", "Prices between related parties must match what independent parties would agree"],
                ["Form 48", "Accountant's report (previously Form 3CEB) for any international transaction with an associated enterprise, whatever the value"],
                ["Local documentation", "Required above prescribed value thresholds; confirm current figures with your Indian adviser"],
                ["Typical flows", "Components, machinery and technology from China; contract manufacturing and sales in India; services and loans"],
                ["Customs link", "The transfer price of imported goods should be consistent with the customs value declared at the border"],
                ["Chinese side", "Related-party reporting and contemporaneous documentation under Chinese rules; confirm with a Chinese adviser"],
                ["Disputes", "Mutual agreement procedure under the treaty; advance pricing agreements are available"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="rules" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Indian rules in short</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Methods:</strong> comparable uncontrolled price, resale price, cost plus, profit split and the transactional net margin method, which is the most used for manufacturers and service entities.</li>
          <li><strong>Benchmarking:</strong> a search of independent comparables supports the margin earned by the Indian entity, updated each year.</li>
          <li><strong>Form 48:</strong> the accountant&apos;s report on international transactions, filed with the tax return. Under the Income-tax Act, 2025, form names and sections are new.</li>
          <li><strong>Penalties:</strong> failure to keep documents or report transactions attracts a percentage of the transaction value, and adjustments attract penalty on under-reported income.</li>
          <li><strong>Secondary adjustment:</strong> an upward adjustment may require the excess money to be brought back or treated as a deemed loan.</li>
        </ul>

        <h2 id="flows" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common China–India flows</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Flow</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical pricing</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What India checks</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Indian subsidiary buys components or kits from the Chinese parent", "Resale price, cost plus or comparable price", "Prices charged to independent buyers; customs value consistency; margin left in India"],
                ["Indian subsidiary buys machinery and tooling from the parent", "Cost plus or market price from quotations", "Evidence of market price; capitalisation and depreciation"],
                ["Technology licence or know-how from the parent", "Royalty as a percentage of sales or lump sum", "Whether the technology adds value; benchmarks; treaty rate; Press Note 3 conditions"],
                ["Contract manufacturing for the group", "Cost plus a mark-up from benchmarking", "Margin in line with comparables; capacity and risk allocation"],
                ["Chinese parent provides management or IT services", "Cost allocation or cost plus", "Actual benefit; duplication; shareholder activity exclusion"],
                ["Intercompany loan", "Interest rate in line with credit rating and currency", "Arm's length rate; ECB ceiling; interest limitation"],
                ["Secondment of Chinese staff", "Reimbursement with or without mark-up", "PE risk and Withholding Tax on reimbursements"],
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

        <h2 id="customs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Customs value and transfer price</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>India levies customs duty on the transaction value of imports. Where buyer and seller are related, the customs authorities can test whether the price was influenced by the relationship.</li>
          <li>A transfer price accepted for income tax may still be challenged for customs value, and the reverse. Keep the same documents for both.</li>
          <li>Royalty and licence fees linked to the imported goods can be added to the customs value in some cases. Ask your customs adviser before fixing the royalty.</li>
          <li>Imports from China are also subject to trade remedies such as anti-dumping duties on certain products; check the product list before pricing. See <Link href="/china-to-india/restricted-sectors-procurement-and-trade" className="text-blue-800 font-semibold hover:underline">restricted sectors, procurement and trade</Link>.</li>
        </ul>

        <h2 id="china-rules" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Chinese rules in short</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>China requires reporting of related-party transactions with the annual return and contemporaneous documentation above thresholds set in its rules.</li>
          <li>Chinese authorities can adjust prices charged to foreign related parties, and double tax may follow if India adjusts the other side.</li>
          <li>Technology exports and intercompany licences may also require Chinese filings or approvals.</li>
          <li>Your Chinese adviser should confirm thresholds and deadlines. The Indian and Chinese files should describe the same functions, assets and risks.</li>
        </ul>

        <h2 id="safe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Safe harbour, APAs and disputes</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>India&apos;s safe harbour rules offer defined margins for certain transactions and sectors, but the conditions and rates have changed over time. Check the current rules before relying on them.</li>
          <li>An advance pricing agreement fixes the method for several years. A bilateral agreement involves both competent authorities.</li>
          <li>If an adjustment leads to double tax, a case can be filed under the mutual agreement procedure of the treaty within the time limit in the treaty text.</li>
        </ul>

        <h2 id="cycle" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A practical annual cycle</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Fix the intercompany agreements before the year starts.</li>
          <li>Review actual margins at half-year and adjust billing to stay within the range.</li>
          <li>Run the benchmarking study and update the file after year end.</li>
          <li>Prepare Form 48 and local documentation before the filing date.</li>
          <li>Align the Chinese file and the customs values with the Indian numbers.</li>
          <li>Keep invoices, time records and emails that show who did what.</li>
        </ol>

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

        <GuideServiceBox path="/china-to-india/transfer-pricing" />
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
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "CBIC: Central Board of Indirect Taxes and Customs", href: "https://www.cbic.gov.in/" },
            { label: "State Taxation Administration of China", href: "https://www.chinatax.gov.cn/eng/" },
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
        title="Transfer Pricing Between China and India?"
        description="Tell us the intercompany transactions, and we'll map the Indian documentation, Form 48 and how it lines up with your Chinese file."
      />
    </main>
  )
}
