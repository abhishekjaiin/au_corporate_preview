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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/transfer-pricing"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "methods", label: "Methods and typical benchmarks" },
  { id: "hub", label: "Hong Kong hubs, trading and re-invoicing" },
  { id: "docs", label: "Documentation and deadlines" },
  { id: "tools", label: "Safe harbour and advance pricing" },
  { id: "disputes", label: "Disputes" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does India apply transfer pricing to Hong Kong related parties?", a: "Yes. International transactions with associated enterprises, including Hong Kong affiliates, must be at arm's length and documented." },
  { q: "Can I use a Hong Kong re-invoicing company?", a: "Only with real functions and risk control in Hong Kong. A thin re-invoicing layer can be disallowed or recharacterised." },
  { q: "Are management fees to Hong Kong deductible?", a: "Yes if they are for services actually received at an arm's length price, with Withholding Tax and evidence of benefit." },
  { q: "What report must be filed?", a: "An accountant's report on international transactions in the prescribed form, by the due date. Check the form number and date under the 2025 Act." },
  { q: "Do I need a master file?", a: "Only if the group meets the revenue and transaction thresholds in the rules. Confirm against your numbers." },
  { q: "Can I get certainty in advance?", a: "An advance pricing agreement or a safe harbour for eligible transactions can reduce disputes." },
  { q: "What if both India and Hong Kong tax the same profit?", a: "The treaty's mutual agreement procedure and credit mechanisms can relieve it. Align the documentation on both sides." },
]

const relatedCards = [
  { title: "India-Hong Kong Double Taxation Agreement Explained: 5% Dividends, 10% Royalties and Fees, PE Rules and the Principal Purpose Test", desc: "The India-Hong Kong tax treaty explained for a Hong Kong parent: 5% dividend rate, 10% interest, royalties and fees for technical services, permanent establishment rules, share gains, anti-abuse tests and how to claim treaty rates.", href: "/hong-kong-to-india/india-hong-kong-dtaa" },
  { title: "Getting Money Out of India to a Hong Kong Parent: Dividends at 5%, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a Hong Kong parent receives money from an Indian subsidiary: 5% treaty withholding on dividends, 10% on interest, royalties and fees, Section 393, Forms 41, 145 and 146, Hong Kong tax treatment and the documents banks ask for.", href: "/hong-kong-to-india/repatriating-profits" },
  { title: "Hong Kong as a Regional Headquarters for India: Holding Company, Trading Hub, Treasury and the Principal Purpose Test", desc: "How groups use a Hong Kong company as a regional holding, trading or treasury hub for India, the substance Indian and Hong Kong tax authorities expect, the treaty principal purpose test, Press Note 3 limits and alternatives.", href: "/hong-kong-to-india/hong-kong-as-regional-hub-for-india" },
  { title: "Compliance Calendar: Indian Deadlines and the Hong Kong Filings They Feed", desc: "A month-by-month compliance calendar for an Indian subsidiary of a Hong Kong parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return, approval conditions and the Hong Kong-side annual return and profits tax filings.", href: "/hong-kong-to-india/compliance-calendar" },
]

export default function TransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Transfer Pricing between India and Hong Kong: Arm's Length Pricing, Hub and Re-Invoicing Models, Documentation and Safe Harbours"
        description="Transfer pricing for a Hong Kong group with an Indian subsidiary: arm's length rules, Form 3CEB, master file and local file, Hong Kong trading and re-invoicing hubs, services and management fees, advance pricing agreements and safe harbours."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Transfer Pricing for Hong Kong Groups in India: Trading Hubs, Re-Invoicing and Services" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: transfer pricing"
        title="Transfer Pricing between India and Hong Kong: Arm's Length Pricing, Hub and Re-Invoicing Models, Documentation and Safe Harbours"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Transactions between an Indian subsidiary and its Hong Kong parent or affiliates must be priced at
          arm&apos;s length. Hong Kong groups often route trading, sourcing, treasury or IP through a Hong Kong
          company, which makes the Hong Kong entity&apos;s functions, people and risks central. Indian officers
          look hard at re-invoicing structures with little substance, management fees without evidence, and IP
          royalties. Keep a contemporaneous study, the accountant&apos;s report in the prescribed form, and
          agreements that match the real conduct. Consider an advance pricing agreement or safe harbour for
          recurring transactions.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="transfer-pricing" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Rule", "Chapter X-type transfer pricing rules: international transactions and specified domestic transactions at arm's length"],
                ["Report", "Accountant's report on international transactions (Form 3CEB under the earlier law; check the equivalent under the 2025 Act) before the prescribed due date"],
                ["Documentation", "Local file kept contemporaneously; master file and country-by-country reporting for large groups"],
                ["Hub models", "Hong Kong trading and re-invoicing entities need people, decision-making and risk control in Hong Kong"],
                ["Services", "Management and technical fees need evidence of benefit and a cost allocation basis"],
                ["IP", "Royalties and licence fees need a valuation and agreement; DEMPE functions matter"],
                ["Tools", "Advance pricing agreements and safe harbour rules for specified sectors"],
                ["Penalties", "Penalties for failing to maintain documents or report transactions"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="methods" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Methods and typical benchmarks</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Transaction</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Method often used</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Evidence to keep</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Contract services (IT, back office)", "Transactional net margin method on cost plus", "Cost base, benchmarking set, service description"],
                ["Distribution of goods bought from Hong Kong", "Resale price or transactional net margin method", "Functional analysis, comparable distributors, price lists"],
                ["Procurement or sourcing commission", "Cost plus or comparable uncontrolled price", "Agreement, evidence of service, commission rates"],
                ["Management fee", "Cost allocation with mark-up; benefit test", "Activity logs, allocation keys, evidence of benefit"],
                ["Royalty or licence fee", "Comparable uncontrolled transaction or profit split", "Licence agreement, valuation, DEMPE analysis"],
                ["Intercompany loan", "Comparable uncontrolled price on interest", "Credit rating analysis, loan agreement, RBI registration"],
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

        <h2 id="hub" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Hong Kong hubs, trading and re-invoicing</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Trading hub:</strong> a Hong Kong company buys from third-party factories and sells to India. India will test whether the Hong Kong entity has the people, premises and risk control to earn the profit it books.</li>
          <li><strong>Re-invoicing centre:</strong> interposing a Hong Kong company between group entities with little function invites recharacterisation and disallowance.</li>
          <li><strong>Permanent establishment:</strong> Hong Kong staff negotiating or concluding contracts in India can create a PE. See <Link href="/hong-kong-to-india/india-hong-kong-dtaa" className="text-blue-800 font-semibold hover:underline">the DTAA guide</Link>.</li>
          <li><strong>Hong Kong tax:</strong> profits sourced from Hong Kong trading are taxed in Hong Kong. The offshore claim and Hong Kong transfer pricing rules are for your Hong Kong adviser.</li>
        </ul>

        <h2 id="docs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documentation and deadlines</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Prepare a contemporaneous local file each year with a functional analysis and benchmarking study.</li>
          <li>Obtain the accountant&apos;s report on international transactions and file it by the prescribed due date.</li>
          <li>Master file and country-by-country reporting apply to larger groups above the thresholds in the rules; confirm whether your group is in scope.</li>
          <li>Reconcile the Indian and Hong Kong documentation so that margins and functions agree.</li>
          <li>See the <Link href="/hong-kong-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar</Link> for the annual rhythm.</li>
        </ul>

        <h2 id="tools" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Safe harbour and advance pricing</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Safe harbour rules prescribe accepted margins for some services, and an advance pricing agreement can
          fix the method for several years with the tax department. Both reduce disputes but need an application
          and disclosure.
        </p>

        <h2 id="disputes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Disputes</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A transfer pricing adjustment in India can be taken to the Dispute Resolution Panel and the Appellate
          Tribunal. The treaty&apos;s mutual agreement procedure may relieve double taxation. See{" "}
          <Link href="/hong-kong-to-india/india-hong-kong-dtaa" className="text-blue-800 font-semibold hover:underline">the DTAA guide</Link>.
        </p>

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

        <GuideServiceBox path="/hong-kong-to-india/transfer-pricing" />
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
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "Inland Revenue Department: transfer pricing (Hong Kong)", href: "https://www.ird.gov.hk/eng/tax/bus_tp.htm" },
            { label: "CBIC (indirect tax)", href: "https://www.cbic.gov.in/" },
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
        title="Transfer Pricing Between Hong Kong and India?"
        description="Tell us the trading, service and financing flows, and we'll map the Indian documentation, Form 48 and how it lines up with your Hong Kong file."
      />
    </main>
  )
}
