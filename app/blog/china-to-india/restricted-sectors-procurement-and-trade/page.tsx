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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/restricted-sectors-procurement-and-trade"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "layers", label: "The layers of rules" },
  { id: "procurement", label: "Government procurement" },
  { id: "apps", label: "Apps, data and security reviews" },
  { id: "trade", label: "Customs and trade remedies" },
  { id: "enforcement", label: "Scrutiny and records" },
  { id: "plan", label: "Before you commit" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does a Chinese-owned Indian company face restrictions on government contracts?", a: "Bidders from land-border countries must register with a competent authority before bidding for central government contracts under the 2020 procurement rules. Check the current rule and any state conditions." },
  { q: "Are Chinese apps blocked in India?", a: "Many Chinese-linked apps have been blocked under Section 69A of the IT Act since 2020. A new product is not automatically blocked but may face security and data questions." },
  { q: "Do anti-dumping duties apply to imports from China?", a: "Many products from China face anti-dumping or safeguard duties notified by the customs authority. Check the list for your inputs." },
  { q: "Is there a free trade agreement between India and China?", a: "No. No preference applies, so normal customs duty and any trade remedies apply." },
  { q: "Are Chinese-linked companies scrutinised by Indian agencies?", a: "Press reports describe investigations into several such companies. Keep full records and respond to notices promptly." },
  { q: "Where should I start?", a: "With the sector, Press Note 3 and procurement checks, then the structure and partner." },
]

const relatedCards = [
  { title: "Press Note 3 for Chinese Companies: When Government Approval Is Needed and What the 2026 Easing Changes", desc: "How India's Press Note 3 (2020) applies to a Chinese parent: prior government approval for investors incorporated in China, the 2026 easing for passive minority land-border ownership, the control test, the 60-day sectors, director clearance and planning.", href: "/china-to-india/india-press-note-3-and-chinese-investors" },
  { title: "Manufacturing in India with a Chinese Partner: Approval, Joint Venture Terms, Technology Licences and Local Content", desc: "How Chinese manufacturers approach India: joint ventures with Indian partners, the 60-day fast-track sectors under the amended Press Note 3, incentive schemes, technology licences, supply chains, customs and the practical limits.", href: "/china-to-india/manufacturing-and-jv-for-chinese-companies" },
  { title: "Moving Personal Data Between China and India: PIPL Cross-Border Routes, Important Data and the DPDP Act", desc: "How China's PIPL, Data Security Law and cross-border data rules apply to a Chinese company with an Indian subsidiary, and how India's Digital Personal Data Protection Act and data restrictions affect the Indian side.", href: "/china-to-india/data-protection-pipl-dpdp" },
  { title: "Common Mistakes Chinese Companies Make in India and How to Avoid Them", desc: "The most frequent mistakes Chinese companies make when setting up in India: investing before Press Note 3 approval, assuming an apostille works, hidden ownership, late FEMA filings, visa mismatches and weak records.", href: "/china-to-india/common-mistakes" },
]

export default function RestrictedSectorsProcurementAndTradePage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="What Else Applies to Chinese-Linked Companies in India: Sector Limits, Government Contracts, App Blocks, Customs and Trade Remedies"
        description="Beyond Press Note 3: sector limits, the registration rule for land-border-country bidders in government procurement, blocked apps and security reviews, customs duty, anti-dumping duties and enforcement scrutiny for a Chinese-owned company in India."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Restricted Sectors, Public Procurement and Trade Rules for Chinese-Linked Companies in India" },
        ]}
      />

      <GuideHero
        eyebrow="Compliance: sectors, procurement and trade"
        title="What Else Applies to Chinese-Linked Companies in India: Sector Limits, Government Contracts, App Blocks, Customs and Trade Remedies"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Press Note 3 is only the first rule a Chinese-linked company meets in India. Sector caps and bans
          apply to every foreign investor. Government procurement rules require bidders from land-border
          countries to register with a competent authority before they can bid. India has blocked many
          Chinese-linked apps under Section 69A of the IT Act and reviews telecom and infrastructure suppliers
          on security grounds. Imports from China face customs duty and, for many products, anti-dumping or
          safeguard duties. Check each layer for your business before you commit capital.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="restricted-sectors" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Sector caps", "Defence, insurance, multi-brand retail, some media and financial services have caps or conditions for all foreign investors"],
                ["Procurement", "Bidders from land-border countries must be registered with a competent authority before bidding for central government contracts, under the General Financial Rules as amended in 2020; check the current rule and state rules"],
                ["Apps and platforms", "Many Chinese-linked apps have been blocked under Section 69A of the IT Act; new products face security scrutiny"],
                ["Telecom and critical sectors", "Trusted-source rules and security review for telecom equipment and infrastructure suppliers"],
                ["Customs", "Customs duty and GST on imports; anti-dumping and safeguard duties on many products from China"],
                ["Enforcement", "FEMA, tax and customs agencies scrutinise Chinese-linked companies; keep clean records"],
                ["Banks", "Enhanced due diligence on ownership and sources of funds"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="layers" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The layers of rules</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Layer</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Applies to</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What to check</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Sector caps and conditions", "All foreign investors", "The FDI Policy entry for your activity"],
                ["Press Note 3 approval", "Investors from land-border countries and their beneficial owners", "See the Press Note 3 guide"],
                ["Government procurement registration", "Bidders from land-border countries for public contracts", "Registration with the competent authority; local content and security conditions"],
                ["IT and app blocking", "Digital services and apps with Chinese links", "Section 69A notices; data location and access"],
                ["Telecom and critical infrastructure", "Equipment and software vendors", "Trusted-source requirements and security audits"],
                ["Trade remedies", "Imported goods from China", "Anti-dumping, countervailing and safeguard duties notified by the customs authority"],
                ["Customs value", "Related-party imports", "Consistency with transfer pricing"],
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

        <h2 id="procurement" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Government procurement</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Central government procurement rules, as amended in 2020, require a bidder from a country sharing a land border with India to register with a competent authority before bidding. Registration involves political and security clearance.</li>
          <li>The rule applies to bidders from such countries and to Indian companies with such ownership in some cases; read the current text for the ownership test.</li>
          <li>Public sector companies and some state governments apply similar conditions.</li>
          <li>If government and public sector customers are important to your plan, include the registration and the likelihood of clearance in the business case.</li>
        </ul>

        <h2 id="apps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Apps, data and security reviews</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Section 69A of the Information Technology Act allows the government to block access to apps and websites in the interest of security and public order. Many Chinese-linked apps were blocked from 2020.</li>
          <li>A new company is not blocked automatically, but a product with Chinese links can face data localisation and access questions from customers and regulators.</li>
          <li>See <Link href="/china-to-india/data-protection-pipl-dpdp" className="text-blue-800 font-semibold hover:underline">data protection</Link> for the cross-border data rules in both countries.</li>
        </ul>

        <h2 id="trade" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Customs and trade remedies</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Imported inputs pay basic customs duty, IGST and, for many products, anti-dumping or safeguard duty. The list is notified by the customs authority and changes.</li>
          <li>Check duty and the remedy list for each input before you set the transfer price or the bid price.</li>
          <li>Customs valuation of related-party imports is tested; keep the same documents for transfer pricing. See <Link href="/china-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li>A free trade agreement does not apply between India and China, so no preference is available.</li>
        </ul>

        <h2 id="enforcement" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Scrutiny and records</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Press reports describe tax, customs and foreign exchange investigations into several Chinese-linked companies in India. Treat the point as a reason to keep records, not as a prediction about any company.</li>
          <li>Keep ownership charts, board minutes, invoices, wage records and import documents ready for inspection.</li>
          <li>Respond to notices promptly with the help of Indian counsel, and keep the Chinese parent informed.</li>
          <li>Consider a periodic internal compliance review once the operation has started.</li>
        </ul>

        <h2 id="plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Before you commit</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>List every government and regulated customer you expect to serve.</li>
          <li>Check sector caps, the Press Note 3 route and the procurement rule for each.</li>
          <li>Check import duty and trade remedies for key inputs.</li>
          <li>Map data and security questions for the product.</li>
          <li>Decide the structure and partner accordingly. See <Link href="/china-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">structure options</Link>.</li>
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

        <GuideServiceBox path="/china-to-india/restricted-sectors-procurement-and-trade" />
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
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in/" },
            { label: "Department of Expenditure: procurement rules", href: "https://doe.gov.in/" },
            { label: "CBIC: customs", href: "https://www.cbic.gov.in/" },
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
        title="Checking Sector, Procurement and Trade Limits?"
        description="Tell us your sector and customers, and we'll flag the approval, public procurement and trade rules that apply to a Chinese-linked company."
      />
    </main>
  )
}
