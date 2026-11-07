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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/india-press-note-3-and-hong-kong-entities"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "why", label: "Why Hong Kong companies are caught" },
  { id: "who", label: "Who is in which position" },
  { id: "route", label: "The approval route in practice" },
  { id: "structure", label: "Structuring points for Hong Kong groups" },
  { id: "timeline", label: "Timeline and risk" },
  { id: "related-rules", label: "Related rules" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does a Hong Kong company need government approval to invest in India?", a: "Treat it as yes. India has treated Hong Kong with China for Press Note 3, and after the March 2026 Cabinet decision a DPIIT official was reported to say that firms registered in China and Hong Kong still need prior approval." },
  { q: "Does the 2026 easing help a Hong Kong parent?", a: "No, as reported. The 10% passive-ownership route is for entities from non-land-border countries with minority land-border beneficial owners." },
  { q: "My Hong Kong company is owned by non-Chinese shareholders. Do I still need approval?", a: "The reported government position is that Hong Kong-registered firms need approval. Take written advice from Indian counsel on your facts before assuming otherwise." },
  { q: "Can I invest through a non-Hong Kong group company instead?", a: "That can change the analysis if the entity is genuine, non-land-border and has no controlling land-border ownership. The structure must be commercial and disclosed." },
  { q: "How long does Press Note 3 approval take?", a: "Historically months. A 60-day target is reported for specified manufacturing sectors." },
  { q: "Do Chinese or Hong Kong directors need clearance?", a: "A citizen of a land-border country proposed as a director needs Ministry of Home Affairs security clearance." },
  { q: "What happens if I invest without approval?", a: "It is a FEMA contravention, with penalties and the possibility of compounding or unwinding. Obtain approval first." },
]

const relatedCards = [
  { title: "Hong Kong as a Regional Headquarters for India: Holding Company, Trading Hub, Treasury and the Principal Purpose Test", desc: "How groups use a Hong Kong company as a regional holding, trading or treasury hub for India, the substance Indian and Hong Kong tax authorities expect, the treaty principal purpose test, Press Note 3 limits and alternatives.", href: "/hong-kong-to-india/hong-kong-as-regional-hub-for-india" },
  { title: "How to Incorporate a Private Limited Company in India as a Hong Kong Parent: Approval, SPICe+, Bank Account and Post-Incorporation Filings", desc: "Step-by-step route for a Hong Kong parent to set up an Indian private limited company: Press Note 3 approval, name, SPICe+, DIN and DSC, resident director, PAN and TAN, bank account, capital inflow, FC-GPR and first filings.", href: "/hong-kong-to-india/incorporation-steps" },
  { title: "Shipping Goods Through Hong Kong to India: Country of Origin, Customs Valuation, Anti-Dumping and Government Procurement Rules", desc: "What Hong Kong traders must know when goods go to India: origin versus port of shipment, no India-Hong Kong trade agreement, customs value on related-party sales, anti-dumping duty on Chinese-origin goods, BIS standards and public procurement limits.", href: "/hong-kong-to-india/goods-via-hong-kong-origin-customs-and-procurement" },
  { title: "Twelve Common Mistakes Hong Kong Companies Make in India and How to Avoid Them", desc: "The most common mistakes of Hong Kong companies entering India: skipping Press Note 3, thin hub structures, late FEMA filings, weak treaty paperwork, secondment tax errors, stale apostilles, unstamped contracts and ignoring the Indian calendar.", href: "/hong-kong-to-india/common-mistakes" },
]

export default function IndiaPressNote3AndHongKongEntitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Press Note 3 for Hong Kong Companies: Approval for Hong Kong-Registered Investors and What the 2026 Easing Does Not Change"
        description="How India's Press Note 3 applies to a Hong Kong parent: the March 2026 government statement that Hong Kong-registered firms still need prior approval, the 10% passive-ownership easing for other investors, the approval route, and planning for regional headquarters."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Press Note 3 and Hong Kong Companies: Why a Hong Kong Parent Still Needs Government Approval" },
        ]}
      />

      <GuideHero
        eyebrow="Approval: Press Note 3"
        title="Press Note 3 for Hong Kong Companies: Approval for Hong Kong-Registered Investors and What the 2026 Easing Does Not Change"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Hong Kong is a Special Administrative Region of China, and India has treated Hong Kong together with
          China for Press Note 3 (2020). When the Cabinet approved the 2026 easing on 10 March 2026, a DPIIT
          official was reported to have said that firms registered in China and Hong Kong still need prior
          government approval, and that the 10% passive-ownership relief is only for entities from
          non-land-border countries. A Hong Kong-incorporated company that invests in India should therefore
          plan on the government route, whoever owns it, and take written Indian advice before assuming
          otherwise.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="press-note-3" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Rule", "Press Note 3 (2020): investment by an entity of a country sharing a land border with India, or where the beneficial owner is a citizen of such a country, needs prior Government approval"],
                ["Hong Kong", "Treated with China in the policy; commentary says Hong Kong vehicles are not exempt or grandfathered. Confirm with Indian counsel"],
                ["2026 easing", "Cabinet approved on 10 March 2026; Press Note 2 (2026 series); FEMA rules reported as amended on 1 May 2026"],
                ["Who the easing helps", "Entities from non-land-border countries with up to 10% passive, non-controlling land-border beneficial ownership"],
                ["Government statement (reported)", "Firms registered in China and Hong Kong still need prior approval; no relaxation for entities or investors in land-border countries"],
                ["Fast track", "60-day target for specified manufacturing sectors (reported as capital goods, electronic capital goods, electronic components, polysilicon, ingot-wafer)"],
                ["Directors", "Citizens of land-border countries need Ministry of Home Affairs clearance before appointment"],
                ["Practical rule", "Plan for months of approval time unless your sector is in the fast track"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why Hong Kong companies are caught</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Press Note 3 was written for countries sharing a land border with India. Commentary on the 2020 and
          2026 notes treats Hong Kong-incorporated entities as grouped with China, and the government&apos;s
          public statement after the March 2026 Cabinet decision, as reported, named both China and Hong Kong. A
          Hong Kong holding or regional company owned by Western, Japanese, Indian or other non-Chinese
          shareholders is therefore not automatically on the Automatic Route. Obtain a written view from Indian
          counsel on your exact facts, because the beneficial-owner test in the 2026 amendments and the
          place-of-incorporation test work differently.
        </p>

        <h2 id="who" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who is in which position</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Investor</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Position</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What to do</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Hong Kong-incorporated company, any ownership", "Treat as requiring prior approval, based on the reported government statement and commentary", "Apply on the government route, or restructure with advice"],
                ["Non-Hong Kong group company with up to 10% passive Chinese or Hong Kong beneficial ownership", "Automatic Route with reporting, if no control rights", "Confirm the cap table and governance rights"],
                ["Non-Hong Kong group company with Chinese or Hong Kong beneficial owners above 10%, or with control", "Prior approval required", "Map the ownership chain"],
                ["Hong Kong company owned by Indian residents or NRIs", "Check separately: place-of-incorporation analysis and the overseas investment rules both matter", "Take Indian advice before investing back into India"],
                ["Listed company or multilateral institution", "Excluded from the beneficial-owner look-through, as reported", "Confirm the exemption wording"],
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

        <h2 id="route" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The approval route in practice</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Confirm the sector cap in the FDI Policy; Press Note 3 adds approval and does not lift sector bans.</li>
          <li>Prepare the file: ownership chart to the ultimate natural persons, audited financials, business plan, product and technology details and the proposed Indian shareholding.</li>
          <li>Apply on the DPIIT Foreign Investment Facilitation Portal. The proposal goes to the relevant ministry and the Ministry of Home Affairs.</li>
          <li>Answer queries quickly; delays usually come from unclear ownership or sensitive technology.</li>
          <li>Incorporate and fund within the approved terms, then report to the RBI. A change to the approved structure may need fresh approval.</li>
        </ol>

        <h2 id="structure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Structuring points for Hong Kong groups</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Regional headquarters:</strong> many groups use a Hong Kong company as the Asian holding or trading entity. If it will hold the Indian subsidiary, build approval time into the plan.</li>
          <li><strong>Holding through another entity:</strong> where a group has a genuine non-Hong Kong, non-land-border entity that can own the Indian subsidiary, that can change the analysis. The reason must be commercial and the ownership must be disclosed. Do not contrive a structure only to avoid the note.</li>
          <li><strong>Existing Indian investments held via Hong Kong:</strong> later transfers, restructurings and new capital may need approval. Check before moving shares.</li>
          <li><strong>Beneficial owner disclosure:</strong> Indian banks, the Registrar and the RBI forms ask for ultimate owners. Keep the ownership chart and identity papers ready.</li>
          <li><strong>Control rights:</strong> board seats, vetoes, observer rights and side letters can amount to control even where the percentage is small.</li>
        </ul>

        <h2 id="timeline" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Timeline and risk</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Approvals have taken months, and several hundred proposals were reported as pending before the 2026
          change. A 60-day target is reported for specified manufacturing sectors. Investing before approval is
          a FEMA contravention that can lead to penalties, compounding or unwinding. Sequence the approval
          before incorporation and funding. See{" "}
          <Link href="/hong-kong-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">incorporation steps</Link>{" "}
          and{" "}
          <Link href="/hong-kong-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.
        </p>

        <h2 id="related-rules" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related rules</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Procurement, customs and origin rules for goods routed through Hong Kong: <Link href="/hong-kong-to-india/goods-via-hong-kong-origin-customs-and-procurement" className="text-blue-800 font-semibold hover:underline">goods via Hong Kong</Link></li>
          <li>The tax treaty has its own anti-abuse test: <Link href="/hong-kong-to-india/india-hong-kong-dtaa" className="text-blue-800 font-semibold hover:underline">India-Hong Kong DTAA</Link></li>
          <li>Using Hong Kong as a regional hub: <Link href="/hong-kong-to-india/hong-kong-as-regional-hub-for-india" className="text-blue-800 font-semibold hover:underline">regional hub guide</Link></li>
        </ul>

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

        <GuideServiceBox path="/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" />
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
            { label: "CAalley: easing not meant for Chinese firms, clarifies government", href: "https://www.caalley.com/news-updates/indian-news/fdi-easing-under-press-note-3-not-meant-for-chinese-firms-clarifies-govt" },
            { label: "Legal 500: guide to Press Note 2 (2026) and the FEMA NDI amendments", href: "https://www.legal500.com/developments/thought-leadership/india-opens-the-door-to-chinese-investment-a-complete-guide-to-press-note-2-2026-and-the-fema-ndi-amendments/" },
            { label: "DPIIT: Department for Promotion of Industry and Internal Trade", href: "https://dpiit.gov.in/" },
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
        title="Does Press Note 3 Apply to You?"
        description="Tell us the investment and the full ownership chain behind the Hong Kong company, and we'll confirm whether approval is needed and map the application."
      />
    </main>
  )
}
