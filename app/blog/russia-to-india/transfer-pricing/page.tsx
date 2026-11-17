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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/transfer-pricing"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "flows", label: "Russia-India flows" },
  { id: "methods", label: "Methods that fit" },
  { id: "sanctions-effects", label: "When sanctions change the flow" },
  { id: "files", label: "Indian and Russian documentation" },
  { id: "certainty", label: "Safe harbour and disputes" },
  { id: "benchmarking", label: "How the arm's length range is tested in India" },
  { id: "apa", label: "Advance pricing agreements for Russia-India flows" },
  { id: "master-file", label: "Master file and country-by-country reporting" },
  { id: "penalties", label: "What happens if the file is missing or late" },
  { id: "agreements", label: "What the intercompany agreements should say" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Which transactions with the Russian parent need transfer pricing?", a: "Services, goods, royalties, loans, guarantees and cost allocations with any group company abroad." },
  { q: "What is Form 48?", a: "The accountant's report on international transactions, previously Form 3CEB." },
  { q: "When is documentation required?", a: "When international transactions exceed ₹1 crore in the year." },
  { q: "How are Indian service subsidiaries priced?", a: "Usually at cost plus a mark-up." },
  { q: "Do sanctions affect transfer pricing?", a: "They can change routes, currencies and counterparties, which must be documented and priced consistently." },
  { q: "What royalty rate applies under the treaty?", a: "Indian tax on royalties paid to Russia is capped at 10%." },
  { q: "How are double tax disputes resolved?", a: "Through the Mutual Agreement Procedure under the treaty." },
  { q: "Do the year ends match?", a: "No. India uses 31 March and Russia the calendar year." },
  { q: "Can a Russian group get an advance pricing agreement in India?", a: "Yes. A unilateral APA with the Indian tax authority is the practical route today; a bilateral APA needs both tax authorities to negotiate under the treaty." },
  { q: "How long does an Indian APA last?", a: "Up to five future years, with a rollback of up to four earlier years." },
  { q: "Which transfer pricing method suits an Indian engineering centre for a Russian group?", a: "Usually the transactional net margin method, rewarding the Indian company at cost plus a mark-up tested against independent service companies." },
  { q: "What is a year-end true-up?", a: "An adjustment invoice, issued before the accounts close, that brings the year's margin into the arm's length range so the tax officer does not have to make an adjustment." },
]

const relatedCards = [
  { title: "Goods, Trade and Customs", desc: "Customs value and origin.", href: "/russia-to-india/goods-trade-customs-and-eaeu-fta" },
  { title: "Repatriating Profits", desc: "Paying fees and royalties.", href: "/russia-to-india/repatriating-profits" },
  { title: "India-Russia DTAA", desc: "Treaty rates and MAP.", href: "/russia-to-india/india-russia-dtaa" },
  { title: "Compliance Calendar", desc: "Report dates.", href: "/russia-to-india/compliance-calendar" },
]

export default function TransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Transfer Pricing between India and Russia: Arm's Length Pricing, Goods and Services Flows, Documentation and Safe Harbours"
        description="Transfer pricing for a Russian group with an Indian subsidiary: arm's length rules, accountant's report, master file and local file, supply of equipment and components, management fees, royalties, advance pricing agreements and safe harbours."
        datePublished="2026-10-26"
        dateModified="2026-11-13"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Transfer Pricing for Russian Groups in India: Services, Supply Chains and Documentation" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: transfer pricing"
        title="Transfer Pricing between India and Russia: Arm's Length Pricing, Goods and Services Flows, Documentation and Safe Harbours"
        updated="13 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Every transaction between the Indian subsidiary and its Russian parent or group companies must be priced at arm&apos;s length and documented, with Form 48 certified by a Chartered Accountant. Russian groups often have engineering, supply-chain and services flows with India, and sanctions can change how those flows are invoiced and paid, so the transfer pricing file should explain any change in route, currency or counterparty.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="transfer-pricing" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Indian law", "Sections 161 to 172 of the Income-tax Act, 2025"],
                ["Indian report", "Form 48 (previously Form 3CEB)"],
                ["Documentation threshold", "International transactions above ₹1 crore"],
                ["Russian side", "Russian transfer pricing rules apply to the parent's side of controlled transactions"],
                ["Treaty", "Mutual Agreement Procedure under the India-Russia treaty"],
                ["Year ends", "India 31 March; Russia 31 December"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="flows" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Russia-India flows</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Flow</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical method</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Point to document</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Engineering or design services to the Russian group</th>
                <td className="border border-gray-300 p-3">Cost plus mark-up</td>
                <td className="border border-gray-300 p-3">Cost base and deliverables</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Equipment and spares supplied from Russia</th>
                <td className="border border-gray-300 p-3">Resale price or transactional net margin</td>
                <td className="border border-gray-300 p-3">Customs value consistency</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Licence of Russian technology</th>
                <td className="border border-gray-300 p-3">Comparable royalty</td>
                <td className="border border-gray-300 p-3">Benefit and 10% treaty rate</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Commodity or trading flows through a group company</th>
                <td className="border border-gray-300 p-3">Comparable uncontrolled price where data exists</td>
                <td className="border border-gray-300 p-3">Functions of the trading entity</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Parent loans</th>
                <td className="border border-gray-300 p-3">Market interest benchmark</td>
                <td className="border border-gray-300 p-3">ECB terms and interest cap</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="methods" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Methods that fit</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Service subsidiaries are usually rewarded at cost plus a mark-up tested against independent service companies. Indian distributors of Russian equipment are tested on operating margin. Where a group trading company outside Russia sits in the flow, the Indian file must show what that company does and why its margin is justified.
        </p>
        <h2 id="sanctions-effects" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When sanctions change the flow</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          If a supply chain is re-routed through a third country, invoiced in a different currency or paid through a different entity because of sanctions, the economic substance may stay the same while the legal form changes. Document the reason, keep pricing consistent with the functions actually performed, and make sure the change does not shift profit away from the Indian company without justification.
        </p>
        <h2 id="files" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian and Russian documentation</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Prepare the Indian documentation and Form 48 by the return due date.</li>
          <li>Align margins with the Russian parent&apos;s documentation of the same transactions.</li>
          <li>Bridge the Indian 31 March year and the Russian calendar year for year-end adjustments.</li>
          <li>Keep intercompany agreements signed and up to date.</li>
        </ul>
        <h2 id="certainty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Safe harbour and disputes</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India&apos;s safe harbour rules give fixed margins for some services. Where India and Russia both tax the same profit after an adjustment, the treaty&apos;s Mutual Agreement Procedure lets the two authorities resolve it, although practical engagement can be slower in the current environment.
        </p>
        <h2 id="benchmarking" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the arm&apos;s length range is tested in India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Indian transfer pricing does not accept a single comparable figure. The Indian company&apos;s result is compared with a set of independent companies doing similar work, and the rules decide which part of that set counts as arm&apos;s length:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Six or more comparables:</strong> the arm&apos;s length range runs from the 35th to the 65th percentile of the comparables&apos; results. If the Indian company falls inside the range, no adjustment is made; if it falls outside, the price is moved to the median.</li>
          <li><strong>Fewer than six comparables:</strong> the arithmetic mean is used, with a tolerance band of 3% (1% for wholesale traders).</li>
          <li><strong>Multiple-year data:</strong> current-year data is used where available, with up to two earlier years allowed in some cases.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Worked example.</strong> An Indian engineering company spends ₹10 crore delivering design work to the Russian group and charges cost plus 12%, so it earns ₹1.2 crore. Its comparables earn a mark-up between 14% and 19% in the 35th to 65th percentile range, with a median of 16%. Because 12% is below the range, the tax officer would move it to the median: ₹1.6 crore, an adjustment of ₹40 lakh, taxed with interest. A year-end true-up invoice to the Russian parent, made before the accounts are closed, avoids this. With payments to Russia often slow, agree the true-up mechanism in the intercompany agreement in advance.
        </p>

        <h2 id="apa" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Advance pricing agreements for Russia-India flows</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          An advance pricing agreement (APA) fixes the transfer pricing method, and sometimes the margin, in advance with the Indian tax authority. India offers three kinds:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Type</th><th scope="col" className="border border-gray-300 p-3 text-left">Who agrees</th><th scope="col" className="border border-gray-300 p-3 text-left">Practical position for a Russian group</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Unilateral APA</th><td className="border border-gray-300 p-3">The Indian company and the Central Board of Direct Taxes</td><td className="border border-gray-300 p-3">The realistic choice today: certainty in India without waiting for Russian engagement</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Bilateral APA</th><td className="border border-gray-300 p-3">Indian and Russian competent authorities, under the treaty</td><td className="border border-gray-300 p-3">Gives certainty in both countries, but depends on both authorities negotiating, which is slower in the current environment</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Multilateral APA</th><td className="border border-gray-300 p-3">Three or more tax authorities</td><td className="border border-gray-300 p-3">Relevant only where a third-country trading or service company sits in the flow</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          An Indian APA can cover up to five future years and can be rolled back to up to four earlier years, which also settles open audits for those years. It suits a Russian group with a large, stable flow such as an engineering centre or a long-term supply contract. Smaller flows are usually better served by the safe harbour margins or by a strong annual file.
        </p>

        <h2 id="master-file" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Master file and country-by-country reporting</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Beyond the local documentation and Form 48, larger groups have two more Indian filings. A master file is needed where the group&apos;s revenue exceeds ₹500 crore and the Indian company&apos;s international transactions exceed ₹50 crore. Country-by-country reporting applies where the consolidated group revenue is ₹6,400 crore or more. If India cannot obtain the Russian parent&apos;s report through exchange between the two tax authorities, the Indian company can be required to file it locally, so confirm the position before the first year end.
        </p>

        <h2 id="penalties" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What happens if the file is missing or late</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>An adjustment is added to taxable income and taxed at the normal rate, with interest.</li>
          <li>Missing documentation, or not producing it when asked, attracts a penalty linked to the value of the transactions.</li>
          <li>A late or missing Form 48 attracts a separate fixed penalty.</li>
          <li>Under-reported income from an adjustment can lead to a further penalty on the tax involved.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Most of these are avoided by preparing the file before the return due date and keeping the intercompany agreements signed. See also <Link href="/russia-to-india/india-russia-dtaa" className="text-blue-800 font-semibold hover:underline">the Russia-India tax treaty guide</Link> for the treaty rates that apply to royalties and fees.
        </p>
        <h2 id="agreements" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the intercompany agreements should say</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>The services, goods or rights supplied, described specifically enough to show the benefit to the Indian company.</li>
          <li>The pricing method, the mark-up or royalty rate, and how year-end adjustments are made.</li>
          <li>Invoicing frequency, the currency and the payment route, with a fallback if that route stops working.</li>
          <li>Who bears the cost of delays, bank charges and exchange differences.</li>
          <li>Ownership of intellectual property created in India.</li>
          <li>Termination and what happens to unpaid amounts.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Indian tax officers ask for the agreement first. A signed, stamped agreement that matches the invoices and the transfer pricing study is the strongest evidence that a price is at arm&apos;s length.
        </p>



        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We benchmark Russia-India flows, prepare the Indian documentation and Form 48, and document changes in route or currency caused by sanctions.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link> and <Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">accounting, reporting and audit support</Link>.
        </p>

        <GuideServiceBox path="/russia-to-india/transfer-pricing" />
        <GuideCTA
          title="Pricing flows between India and Russia?"
          description="Tell us the transactions, and we will propose the method and file."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/russia-to-india/faq"
          seeAllLabel="See all Russian FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Russian parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Federal Tax Service of Russia", href: "https://www.nalog.gov.ru/eng/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Transfer Pricing Between Russia and India?"
        description="Tell us the intercompany transactions, and we'll map the Indian documentation, Form 48 and how it lines up with your Russian file."
      />
    </main>
  )
}
