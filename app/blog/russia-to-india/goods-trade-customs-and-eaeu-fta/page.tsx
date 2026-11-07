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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/goods-trade-customs-and-eaeu-fta"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "trade", label: "The trade framework" },
  { id: "customs", label: "Customs value and related-party sales" },
  { id: "sectors", label: "Sensitive sectors" },
  { id: "procurement", label: "Public procurement" },
  { id: "compliance", label: "Other compliance" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is there a free trade agreement between India and Russia?", a: "No agreement is in force. India and the Eurasian Economic Union have begun free trade negotiations, with reports of advanced-stage talks." },
  { q: "Do Russian goods get lower customs duty in India?", a: "Not at present. Normal customs duties and IGST apply unless and until an agreement is notified." },
  { q: "How does customs treat related-party sales?", a: "Customs may test whether the relationship influenced the price. Keep the transfer pricing and customs files consistent." },
  { q: "Can a Russian company bid in Indian public procurement?", a: "The land-border bidder restrictions do not apply by nationality, but a land-border beneficial owner can change that. Check tender terms." },
  { q: "Do sanctions limit supply to or from an Indian subsidiary?", a: "They can, through dual-use, technology, finance, insurance and shipping restrictions. Screen goods, counterparties and routes." },
  { q: "What is the India-EAEU trade target?", a: "Reports describe a bilateral trade target of USD 100 billion by 2030." },
  { q: "What is the penalty for false origin or value?", a: "Penalties, seizure of goods, possible prosecution and loss of import privileges." },
]

const relatedCards = [
  { title: "Transfer Pricing between India and Russia: Arm's Length Pricing, Goods and Services Flows, Documentation and Safe Harbours", desc: "Transfer pricing for a Russian group with an Indian subsidiary: arm's length rules, accountant's report, master file and local file, supply of equipment and components, management fees, royalties, advance pricing agreements and safe harbours.", href: "/russia-to-india/transfer-pricing" },
  { title: "Sanctions, Banking and Payment Channels for a Russian Parent and Its Indian Subsidiary: Screening, Special Rupee Accounts and Bank Due Diligence", desc: "The practical gate for Russian investors in India: US, EU and UK sanctions screening, the 50% ownership rule, Indian bank due diligence, settlement channels including rupee vostro accounts, why non-dollar payments are not a safe harbour and a compliance checklist.", href: "/russia-to-india/sanctions-and-payments-for-russian-companies" },
  { title: "Can a Russian Company Invest in India? Automatic Route, Sector Caps, Defence and Sensitive Sectors, and the Real Obstacles", desc: "How India's FDI rules apply to a Russian parent: Press Note 3 covers land-border countries and Russia is not one, the Automatic Route and sector caps, defence and nuclear limits, beneficial ownership checks and why sanctions and payments are the practical hurdles.", href: "/russia-to-india/india-fdi-rules-for-russian-companies" },
  { title: "Twelve Common Mistakes Russian Companies Make in India and How to Avoid Them", desc: "The most common mistakes of Russian companies entering India: ignoring banking and sanctions, skipping Russian clearance, late FEMA filings, weak treaty paperwork, secondment tax errors, unauthenticated documents, unstamped contracts and ignoring the Indian calendar.", href: "/russia-to-india/common-mistakes" },
]

export default function GoodsTradeCustomsAndEaeuFtaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Trade with Russia from India: Customs Duties, Origin, the India-EAEU Free Trade Talks, Defence and Energy Procurement and Export Controls"
        description="What Russian companies and their Indian subsidiaries must know about goods: no India-Russia preferential agreement in force, EAEU free trade negotiations, customs value and origin, anti-dumping duties, BIS standards, defence and energy procurement and export controls."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Goods, Trade and Procurement for Russian Companies in India: Customs, EAEU Talks and Sensitive Sectors" },
        ]}
      />

      <GuideHero
        eyebrow="Trade: goods and procurement"
        title="Trade with Russia from India: Customs Duties, Origin, the India-EAEU Free Trade Talks, Defence and Energy Procurement and Export Controls"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          India and Russia have no preferential trade agreement in force, so Russian-origin goods pay normal
          customs duties. India and the Russia-led Eurasian Economic Union (EAEU) began formal free trade
          negotiations, with reports of advanced-stage talks and a bilateral trade target of USD 100 billion by
          2030, but any agreement must be finalised and notified before it gives tariff relief. Customs value
          and origin evidence should match the transfer price. Defence, nuclear, energy and fertiliser trade
          follow sector rules, and sanctions and export controls affect what can be supplied, insured, shipped
          and paid for. Russia is not a land-border country, so the Indian public procurement restrictions on
          land-border bidders do not apply to Russian bidders by nationality.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="trade-agreement" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Trade agreement", "None in force; India-EAEU free trade negotiations under way"],
                ["Customs", "Basic customs duty, IGST and other levies on imports; classification and valuation decide the cost"],
                ["Origin", "Where goods are wholly obtained or last substantially transformed; evidence needed for any preference once an agreement exists"],
                ["Trade remedies", "Anti-dumping and safeguard duties apply by product and origin"],
                ["Standards", "BIS certification and other product rules apply to the goods"],
                ["Procurement", "Land-border bidder restrictions do not apply to Russia by nationality; sector rules for defence and strategic buying apply"],
                ["Sanctions", "Dual-use, technology and financing restrictions can bar a supply even if Indian law allows it"],
                ["Evidence", "Invoices, packing lists, transport documents and certificates that agree"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="trade" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The trade framework</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Position in outline</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Practical point</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Preferential tariffs", "None in force with Russia or the EAEU", "Plan for full duty until an agreement is notified"],
                ["India-EAEU FTA", "Formal negotiations started; reported at an advanced stage; some reports of a limited interim deal", "Watch for notification; do not price in relief yet"],
                ["Customs value", "Transaction value, adjusted for freight, insurance and some fees", "Related-party prices are tested; keep transfer pricing consistent"],
                ["Origin", "Wholly obtained or last substantial transformation", "Document production and shipment"],
                ["Payment", "Must be routed through acceptable banks and channels", "See the sanctions and payments guide"],
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
          <li>Keep the transfer pricing file and the customs declarations consistent. See <Link href="/russia-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li>Royalties and licence fees connected to the goods can be added to the customs value.</li>
        </ul>

        <h2 id="sectors" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sensitive sectors</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Defence:</strong> licences, security clearance, offsets and the 74% automatic limit. Procurement by the Ministry of Defence follows its own manual.</li>
          <li><strong>Energy and fertilisers:</strong> long-term supply and investment arrangements are often government-to-government, with sanctions exposure.</li>
          <li><strong>Pharmaceuticals and engineering:</strong> regulatory approvals and BIS marks.</li>
          <li><strong>Nuclear:</strong> reserved for the State; suppliers work through government programmes.</li>
        </ul>

        <h2 id="procurement" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Public procurement</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India&apos;s restrictions on bidders from land-border countries in central government procurement do
          not apply to Russian entities by reason of nationality, but a land-border beneficial owner can change
          that. Check tender conditions, local content preferences and the ownership chain before bidding.
        </p>

        <h2 id="compliance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Other compliance</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Importer-exporter code and GST registration are needed for the Indian importer.</li>
          <li>Sanctions, export control and dual-use rules in Russia, India and third countries can restrict supplies and re-exports.</li>
          <li>Shipping and insurance providers may decline Russia-linked cargoes. Confirm cover before committing.</li>
          <li>A false origin or value declaration can lead to penalties, seizure and prosecution.</li>
        </ul>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.nalog.gov.ru/eng/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Federal Tax Service (Russia)</a>,{" "}
          <a href="https://www.cbr.ru/eng/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Bank of Russia</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/russia-to-india/goods-trade-customs-and-eaeu-fta" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/russia-to-india/faq"
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
            { label: "Angel One: India targets USD 100 billion Russia trade as EAEU FTA talks reach advanced stage", href: "https://www.angelone.in/news/economy/india-targets-100-billion-russia-trade-as-eaeu-fta-talks-reach-advanced-stage" },
            { label: "CBIC (customs and indirect tax)", href: "https://www.cbic.gov.in/" },
            { label: "Ministry of Commerce and Industry (India)", href: "https://commerce.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Russian
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Trading Goods Between Russia and India?"
        description="Tell us the products and customers, and we'll map customs duty, origin, standards and any sector or sanctions limits that apply."
      />
    </main>
  )
}
