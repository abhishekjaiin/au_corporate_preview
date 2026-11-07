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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/hong-kong-as-regional-hub-for-india"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "models", label: "Hub models compared" },
  { id: "substance", label: "What substance looks like" },
  { id: "ppt", label: "Principal purpose test and anti-avoidance" },
  { id: "approval", label: "Press Note 3 and the hub" },
  { id: "steps", label: "Design steps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is Hong Kong a good holding location for India?", a: "It offers a 5% treaty dividend rate and a territorial tax system, but a Hong Kong holding company needs prior approval under Press Note 3, as reported, and real substance to keep treaty benefits." },
  { q: "Can I use Hong Kong as a trading hub for India?", a: "Yes, if the Hong Kong entity has the people, premises and risk control to earn the profit and transfer pricing is documented." },
  { q: "What is the principal purpose test?", a: "A treaty rule that denies a benefit when obtaining it was a principal purpose of the arrangement and granting it would be contrary to the treaty's object." },
  { q: "Does Hong Kong tax Indian dividends?", a: "Generally not as Hong Kong-sourced, but foreign-sourced income exemption rules can tax certain foreign dividends received by group members without substance." },
  { q: "What substance is needed in Hong Kong?", a: "Directors and staff in Hong Kong who make the decisions and carry out the functions, with premises and spend that match the activity." },
  { q: "Does Pillar Two apply?", a: "The Hong Kong Minimum Top-up Tax applies to groups with consolidated revenue of at least EUR 750 million." },
  { q: "Are there alternatives to a Hong Kong hub?", a: "Yes. Another genuine holding jurisdiction or direct holding by the ultimate parent. Compare treaty, approval and substance for each." },
]

const relatedCards = [
  { title: "India-Hong Kong Double Taxation Agreement Explained: 5% Dividends, 10% Royalties and Fees, PE Rules and the Principal Purpose Test", desc: "The India-Hong Kong tax treaty explained for a Hong Kong parent: 5% dividend rate, 10% interest, royalties and fees for technical services, permanent establishment rules, share gains, anti-abuse tests and how to claim treaty rates.", href: "/hong-kong-to-india/india-hong-kong-dtaa" },
  { title: "Press Note 3 for Hong Kong Companies: Approval for Hong Kong-Registered Investors and What the 2026 Easing Does Not Change", desc: "How India's Press Note 3 applies to a Hong Kong parent: the March 2026 government statement that Hong Kong-registered firms still need prior approval, the 10% passive-ownership easing for other investors, the approval route, and planning for regional headquarters.", href: "/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" },
  { title: "Transfer Pricing between India and Hong Kong: Arm's Length Pricing, Hub and Re-Invoicing Models, Documentation and Safe Harbours", desc: "Transfer pricing for a Hong Kong group with an Indian subsidiary: arm's length rules, Form 3CEB, master file and local file, Hong Kong trading and re-invoicing hubs, services and management fees, advance pricing agreements and safe harbours.", href: "/hong-kong-to-india/transfer-pricing" },
  { title: "Getting Money Out of India to a Hong Kong Parent: Dividends at 5%, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a Hong Kong parent receives money from an Indian subsidiary: 5% treaty withholding on dividends, 10% on interest, royalties and fees, Section 393, Forms 41, 145 and 146, Hong Kong tax treatment and the documents banks ask for.", href: "/hong-kong-to-india/repatriating-profits" },
]

export default function HongKongAsRegionalHubForIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Hong Kong as a Regional Headquarters for India: Holding Company, Trading Hub, Treasury and the Principal Purpose Test"
        description="How groups use a Hong Kong company as a regional holding, trading or treasury hub for India, the substance Indian and Hong Kong tax authorities expect, the treaty principal purpose test, Press Note 3 limits and alternatives."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Using Hong Kong as a Regional Hub for India: Holding, Trading and Treasury Structures" },
        ]}
      />

      <GuideHero
        eyebrow="Strategy: regional hub"
        title="Hong Kong as a Regional Headquarters for India: Holding Company, Trading Hub, Treasury and the Principal Purpose Test"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Many groups run Asia from Hong Kong: simple company law, a territorial tax system, no exchange
          controls, deep banking and shipping links, and a treaty with India that caps dividends at 5%. A Hong
          Kong hub can hold the Indian subsidiary, sell goods or services to it, or manage treasury. Three
          limits matter: Press Note 3 treats Hong Kong-registered investors as needing prior approval, the
          treaty&apos;s principal purpose test and India&apos;s anti-avoidance rules deny benefits to shell
          companies, and Hong Kong&apos;s foreign-sourced income rules tax passive income received without
          substance. Build real people, decisions and premises in Hong Kong, or choose another holding route.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="holdco" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Why Hong Kong", "Territorial tax, no exchange controls, strong banking, treaty at 5% on dividends, English-language law and arbitration"],
                ["Limits", "Press Note 3 approval for Hong Kong entities; principal purpose test; FSIE regime; Indian GAAR"],
                ["Holding hub", "Substance: directors who decide, premises, staff and spend in Hong Kong"],
                ["Trading hub", "Functions and risks must match the profit booked; see transfer pricing"],
                ["Treasury hub", "Group lending subject to ECB rules, Withholding Tax at 10% on interest and arm's length pricing"],
                ["Pillar Two", "Hong Kong Minimum Top-up Tax for groups above EUR 750 million revenue"],
                ["Alternatives", "Another genuine holding jurisdiction, or direct holding by the ultimate parent; each has its own treaty and approval position"],
                ["Test", "Would the structure exist without the Indian tax benefit?"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="models" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Hub models compared</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Model</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Purpose</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">India tax and approval points</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Substance needed</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Holding company", "Owns the Indian subsidiary and other Asian entities", "Press Note 3 approval; 5% dividends under the treaty; share gains taxable in India", "Board that decides, bank accounts, staff, premises"],
                ["Trading or sourcing hub", "Buys from factories and sells to India", "Transfer pricing and PE risk; customs value and origin", "Procurement team, contract negotiation and risk control in Hong Kong"],
                ["Regional headquarters and services", "Management, finance, HR, IT for the region", "Management fees at arm's length; Withholding Tax at 10%; GST on reverse charge", "Qualified staff and cost allocation"],
                ["Treasury centre", "Group loans and cash pooling", "ECB rules, interest limits and Withholding Tax at 10%", "Treasury function and credit decisions"],
                ["IP holding", "Owns brands and technology licensed to India", "Royalty Withholding Tax at 10%; DEMPE and transfer pricing", "People who develop and control the IP"],
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

        <h2 id="substance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What substance looks like</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Directors resident in Hong Kong who actually take the decisions about the Indian investment.</li>
          <li>Employees with the skills to carry out the functions booked there.</li>
          <li>Premises, bank accounts and spend that fit the revenue and assets.</li>
          <li>Contemporaneous board minutes, contracts and evidence of control over risk.</li>
          <li>Commercial reasons beyond the 5% dividend rate.</li>
        </ul>

        <h2 id="ppt" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Principal purpose test and anti-avoidance</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A treaty benefit can be refused if one of the principal purposes of an arrangement is to obtain it and
          granting it would be contrary to the treaty&apos;s object and purpose. India&apos;s General
          Anti-Avoidance Rule applies to arrangements whose main purpose is a tax benefit above its threshold.
          Hong Kong&apos;s FSIE regime separately targets passive foreign income without substance. See{" "}
          <Link href="/hong-kong-to-india/india-hong-kong-dtaa" className="text-blue-800 font-semibold hover:underline">the DTAA guide</Link>.
        </p>

        <h2 id="approval" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Press Note 3 and the hub</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Where the Hong Kong company will hold the Indian subsidiary, the investment is expected to need prior
          approval, as reported. Plan the approval timeline into the hub project, and avoid structuring only to
          avoid the note. See{" "}
          <Link href="/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" className="text-blue-800 font-semibold hover:underline">Press Note 3 and Hong Kong entities</Link>.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Design steps</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>List the functions, people and assets for each Hong Kong entity.</li>
          <li>Model the Indian tax cost with and without the Hong Kong layer.</li>
          <li>Take Hong Kong advice on profits tax, FSIE and Pillar Two, and Indian advice on approval, treaty and GAAR.</li>
          <li>Document the commercial reasons and board decisions.</li>
          <li>Review annually as rules change.</li>
        </ol>

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

        <GuideServiceBox path="/hong-kong-to-india/hong-kong-as-regional-hub-for-india" />
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
            { label: "Inland Revenue Department: profits tax (Hong Kong)", href: "https://www.ird.gov.hk/eng/tax/bus_pft.htm" },
            { label: "Beacon Filing: India-Hong Kong DTAA", href: "https://beaconfiling.com/dtaa/india-hong-kong-dtaa" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
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
        title="Using Hong Kong as Your India Hub?"
        description="Tell us how the group holds, trades and funds its Asian business, and we'll test the Hong Kong structure for India tax, treaty and approval risk."
      />
    </main>
  )
}
