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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/goods-via-hong-kong-origin-customs-and-procurement"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "origin", label: "Origin versus place of shipment" },
  { id: "customs", label: "Customs value and related-party sales" },
  { id: "procurement", label: "Public procurement" },
  { id: "compliance", label: "Other compliance" },
  { id: "risk", label: "Risk of misdeclaration" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does shipping through Hong Kong change the origin of goods?", a: "No. Origin is where the goods were wholly obtained or last substantially transformed, not where they were shipped from or invoiced." },
  { q: "Is there a trade agreement between India and Hong Kong?", a: "No. Normal customs duties apply." },
  { q: "Do anti-dumping duties apply to goods routed via Hong Kong?", a: "Yes if the goods are of Chinese origin. Duties follow the origin of the goods." },
  { q: "How does customs treat related-party sales?", a: "Customs may test whether the relationship influenced the price. Keep the transfer pricing and customs files consistent." },
  { q: "Can a Hong Kong company bid in Indian public procurement?", a: "Land-border country restrictions apply to bidders with ties to those countries. Hong Kong's treatment should be confirmed in writing before bidding." },
  { q: "Is a certificate of origin enough?", a: "It helps but customs can verify the origin. Keep production and shipping records." },
  { q: "What is the penalty for false origin?", a: "Penalties, seizure of goods, possible prosecution and loss of import privileges." },
]

const relatedCards = [
  { title: "Transfer Pricing between India and Hong Kong: Arm's Length Pricing, Hub and Re-Invoicing Models, Documentation and Safe Harbours", desc: "Transfer pricing for a Hong Kong group with an Indian subsidiary: arm's length rules, Form 3CEB, master file and local file, Hong Kong trading and re-invoicing hubs, services and management fees, advance pricing agreements and safe harbours.", href: "/hong-kong-to-india/transfer-pricing" },
  { title: "Press Note 3 for Hong Kong Companies: Approval for Hong Kong-Registered Investors and What the 2026 Easing Does Not Change", desc: "How India's Press Note 3 applies to a Hong Kong parent: the March 2026 government statement that Hong Kong-registered firms still need prior approval, the 10% passive-ownership easing for other investors, the approval route, and planning for regional headquarters.", href: "/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" },
  { title: "Hong Kong as a Regional Headquarters for India: Holding Company, Trading Hub, Treasury and the Principal Purpose Test", desc: "How groups use a Hong Kong company as a regional holding, trading or treasury hub for India, the substance Indian and Hong Kong tax authorities expect, the treaty principal purpose test, Press Note 3 limits and alternatives.", href: "/hong-kong-to-india/hong-kong-as-regional-hub-for-india" },
  { title: "Twelve Common Mistakes Hong Kong Companies Make in India and How to Avoid Them", desc: "The most common mistakes of Hong Kong companies entering India: skipping Press Note 3, thin hub structures, late FEMA filings, weak treaty paperwork, secondment tax errors, stale apostilles, unstamped contracts and ignoring the Indian calendar.", href: "/hong-kong-to-india/common-mistakes" },
]

export default function GoodsViaHongKongOriginCustomsAndProcurementPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Shipping Goods Through Hong Kong to India: Country of Origin, Customs Valuation, Anti-Dumping and Government Procurement Rules"
        description="What Hong Kong traders must know when goods go to India: origin versus port of shipment, no India-Hong Kong trade agreement, customs value on related-party sales, anti-dumping duty on Chinese-origin goods, BIS standards and public procurement limits."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Goods via Hong Kong: Rules of Origin, Customs Value and Procurement Restrictions for India" },
        ]}
      />

      <GuideHero
        eyebrow="Trade: goods and procurement"
        title="Shipping Goods Through Hong Kong to India: Country of Origin, Customs Valuation, Anti-Dumping and Government Procurement Rules"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Routing goods through Hong Kong does not change where they come from. Indian customs looks at the
          country of origin, which is where the goods were wholly obtained or last substantially transformed,
          not where they were shipped from. India has no free trade agreement with Hong Kong, so goods pay the
          normal customs duties, and anti-dumping or other trade-remedy duties on Chinese-origin goods follow
          the origin wherever they are re-exported. A false origin declaration is a serious customs offence.
          Related-party sales are checked against customs valuation rules, and public procurement rules restrict
          bidders with land-border country links.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="trade-origin" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Origin", "Where goods are wholly obtained or last substantially transformed; transhipment or re-invoicing through Hong Kong does not change it"],
                ["Trade agreement", "No India-Hong Kong free trade agreement; normal duties apply"],
                ["Trade remedies", "Anti-dumping and safeguard duties follow the country of origin of the goods"],
                ["Valuation", "Transaction value; related-party sales are tested; transfer pricing and customs value should be consistent"],
                ["Standards", "BIS certification and other product rules apply to the goods regardless of route"],
                ["Procurement", "Bidders from land-border countries must register with the competent committee under the public procurement restrictions; confirm how Hong Kong entities are treated"],
                ["GST", "IGST on imports; input credit for the Indian importer"],
                ["Evidence", "Certificate of origin, invoices, packing lists and transport documents that tie together"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="origin" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Origin versus place of shipment</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Question</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Answer in outline</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Practical point</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Goods made in China and shipped from Hong Kong", "Country of origin remains China", "Anti-dumping and other duties on Chinese-origin goods apply"],
                ["Goods made in Hong Kong", "Origin is Hong Kong if wholly obtained or last substantially transformed there", "Keep production records; assembly alone may not suffice"],
                ["Goods re-invoiced through a Hong Kong company", "Origin does not change", "The invoice country is not the origin country"],
                ["Goods substantially transformed in Hong Kong", "May acquire Hong Kong origin if the rules are met", "Document the transformation"],
                ["Certificate of origin", "Issued by accredited bodies in Hong Kong", "Not conclusive; customs may verify"],
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

        <h2 id="customs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Customs value and related-party sales</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Value is normally the transaction value, adjusted for freight, insurance and certain fees.</li>
          <li>Where buyer and seller are related, customs may test whether the price is influenced by the relationship.</li>
          <li>Keep the transfer pricing file and the customs declarations consistent. A low customs value and a high transfer price tell different stories. See <Link href="/hong-kong-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li>Royalties and licence fees connected to the goods can be added to the customs value.</li>
        </ul>

        <h2 id="procurement" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Public procurement</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>India restricts bids from entities of countries sharing a land border with India. Such bidders must register with the designated committee before bidding in central government procurement.</li>
          <li>Hong Kong is part of China, so check whether a Hong Kong bidder or one with Hong Kong ownership is caught. Confirm in writing with counsel before bidding.</li>
          <li>State and public sector procurement can carry their own rules and local content preferences.</li>
        </ul>

        <h2 id="compliance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Other compliance</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>BIS, labelling, e-waste and sector approvals apply to many product categories.</li>
          <li>Importer-exporter code and GST registration are needed for the Indian importer.</li>
          <li>Sanctions, export control and dual-use rules in Hong Kong and elsewhere can restrict re-exports.</li>
        </ul>

        <h2 id="risk" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Risk of misdeclaration</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Declaring a false origin to avoid duty or trade restrictions can lead to penalties, seizure,
          prosecution and loss of import privileges. Build a clean evidence chain from the factory to the Indian
          port and take customs advice before using Hong Kong as a transit or trading point.
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

        <GuideServiceBox path="/hong-kong-to-india/goods-via-hong-kong-origin-customs-and-procurement" />
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
            { label: "CBIC (customs and indirect tax)", href: "https://www.cbic.gov.in/" },
            { label: "Ministry of Commerce and Industry (India)", href: "https://commerce.gov.in/" },
            { label: "Trade and Industry Department (Hong Kong)", href: "https://www.tid.gov.hk/" },
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
        title="Moving Goods to India via Hong Kong?"
        description="Tell us the products, origin and customers, and we'll map the origin rules, customs value and any procurement limits that apply."
      />
    </main>
  )
}
