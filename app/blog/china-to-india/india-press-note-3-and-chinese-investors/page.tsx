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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/india-press-note-3-and-chinese-investors"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "who", label: "Who is caught" },
  { id: "route", label: "The approval route in practice" },
  { id: "easing", label: "What the 2026 easing does, and does not do" },
  { id: "sectors", label: "Sectors and structures that need extra care" },
  { id: "not", label: "What not to do" },
  { id: "plan", label: "A realistic timeline" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does a Chinese company need government approval to set up an Indian subsidiary?", a: "Yes. Under Press Note 3 (2020), an entity of a country sharing a land border with India, including China, needs the Government of India's prior approval to invest, in every sector." },
  { q: "What changed in Press Note 3 in 2026?", a: "Cabinet approved amendments on 10 March 2026. A non-land-border investor with passive, non-controlling land-border beneficial ownership of up to 10% can use the Automatic Route with reporting. An investor incorporated in China is not helped by this." },
  { q: "Can a Hong Kong or Singapore vehicle avoid the approval?", a: "No. The policy looks at beneficial ownership and control, so a vehicle owned or controlled by Chinese citizens or entities above the threshold is still caught. Get written advice for Hong Kong vehicles." },
  { q: "How long does Press Note 3 approval take?", a: "Historically several months. A 60-day target is reported for specified manufacturing sectors such as capital goods and electronic components, subject to the final procedure." },
  { q: "Do Chinese directors need clearance?", a: "Yes. A citizen of a land-border country proposed as a director needs security clearance from the Ministry of Home Affairs." },
  { q: "Does the 10% threshold apply to a Chinese-incorporated parent?", a: "No. The 10% test applies to land-border ownership of a non-land-border investor. An investor incorporated in China needs approval whatever the amount." },
  { q: "What happens if I invest without approval?", a: "The investment is a FEMA contravention, with penalties and the possibility of compounding or unwinding. Always get the approval first." },
]

const relatedCards = [
  { title: "Setting Up the Indian Subsidiary After Approval: Step-by-Step Plan for a Chinese Parent", desc: "The step-by-step plan for incorporating an Indian private limited company owned by a Chinese parent: Press Note 3 approval, documents, director clearance, SPICe+, bank account, funding, RBI reporting and the first 180 days.", href: "/china-to-india/incorporation-steps" },
  { title: "What Else Applies to Chinese-Linked Companies in India: Sector Limits, Government Contracts, App Blocks, Customs and Trade Remedies", desc: "Beyond Press Note 3: sector limits, the registration rule for land-border-country bidders in government procurement, blocked apps and security reviews, customs duty, anti-dumping duties and enforcement scrutiny for a Chinese-owned company in India.", href: "/china-to-india/restricted-sectors-procurement-and-trade" },
  { title: "Manufacturing in India with a Chinese Partner: Approval, Joint Venture Terms, Technology Licences and Local Content", desc: "How Chinese manufacturers approach India: joint ventures with Indian partners, the 60-day fast-track sectors under the amended Press Note 3, incentive schemes, technology licences, supply chains, customs and the practical limits.", href: "/china-to-india/manufacturing-and-jv-for-chinese-companies" },
  { title: "Common Mistakes Chinese Companies Make in India and How to Avoid Them", desc: "The most frequent mistakes Chinese companies make when setting up in India: investing before Press Note 3 approval, assuming an apostille works, hidden ownership, late FEMA filings, visa mismatches and weak records.", href: "/china-to-india/common-mistakes" },
]

export default function IndiaPressNote3AndChineseInvestorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Press Note 3 for Chinese Companies: When Government Approval Is Needed and What the 2026 Easing Changes"
        description="How India's Press Note 3 (2020) applies to a Chinese parent: prior government approval for investors incorporated in China, the 2026 easing for passive minority land-border ownership, the control test, the 60-day sectors, director clearance and planning."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Press Note 3 and Chinese Investors: Government Approval for an Indian Subsidiary" },
        ]}
      />

      <GuideHero
        eyebrow="Approval: Press Note 3"
        title="Press Note 3 for Chinese Companies: When Government Approval Is Needed and What the 2026 Easing Changes"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A company incorporated in China, or owned or controlled by Chinese citizens or entities above the
          thresholds, needs the Government of India&apos;s prior approval before it invests in an Indian
          company, in every sector, even those that are otherwise on the Automatic Route. The 2026 amendments to
          Press Note 3 lets a non-land-border investor with passive land-border beneficial ownership of up to
          10% invest under the Automatic Route with a report to the RBI. It does not help an investor that is
          itself incorporated in China. Plan for a government approval step before you incorporate or fund an
          Indian subsidiary.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="press-note-3" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Rule", "Press Note 3 (2020): investment by an entity of a country sharing a land border with India, or where the beneficial owner is situated in or a citizen of such a country, needs prior Government approval"],
                ["Countries", "China, Pakistan, Bangladesh, Nepal, Myanmar, Bhutan and Afghanistan"],
                ["2026 easing", "Cabinet approved on 10 March 2026; Press Note 2 (2026 series) amends the policy, and the FEMA rules were reported as amended on 1 May 2026; confirm the notification text"],
                ["Passive minority", "Non-land-border investor with up to 10% non-controlling land-border beneficial ownership: Automatic Route, with reporting to the RBI"],
                ["Chinese-incorporated investor", "Still needs prior approval, whatever the amount"],
                ["Fast track", "60-day target for specified manufacturing sectors (reported as capital goods, electronic capital goods, electronic components, polysilicon and ingot-wafer); Indian majority ownership and control reportedly required there"],
                ["Directors", "Chinese citizens proposed as directors need security clearance from the Ministry of Home Affairs"],
                ["Planning", "Allow months, not weeks, unless you fall in a fast-track sector"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="who" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who is caught</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Investor</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Position under Press Note 3 (as amended in 2026)</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What to do</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Company incorporated in mainland China", "Prior Government approval required for any investment amount", "Apply through the government route before incorporation or funding"],
                ["Company incorporated in Hong Kong or Macao", "Treat as caught unless your Indian counsel confirms otherwise, because the policy looks at the beneficial owner as well as the place of incorporation", "Get written advice before relying on a Hong Kong vehicle"],
                ["Chinese citizen investing personally", "Prior approval required", "Apply through the government route"],
                ["Non-Chinese company with Chinese beneficial owners above 10%, or with control", "Prior approval required", "Map the cap table and control rights first"],
                ["Non-Chinese company with passive Chinese ownership of up to 10%", "Automatic Route, with a report to the RBI", "Confirm there are no governance rights that amount to control"],
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
          <li>Check that the sector allows foreign investment at all, and the cap for it, in the FDI Policy. Press Note 3 adds approval; it does not lift sector bans.</li>
          <li>Prepare the file: ownership chart to the ultimate owners, audited financials, business plan, product and technology details, and the proposed shareholding in the Indian company.</li>
          <li>Apply on the Foreign Investment Facilitation Portal of the DPIIT. The proposal is referred to the concerned ministry and the Ministry of Home Affairs, and may go to an inter-ministerial committee.</li>
          <li>Answer queries promptly. Delays usually come from unclear ownership or sensitive technology.</li>
          <li>After approval, incorporate and fund within the approved terms, and report to the RBI. Any change to the approved structure or shareholding may need a fresh approval.</li>
        </ol>

        <h2 id="easing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the 2026 easing does, and does not do</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Does:</strong> it adds a definition of beneficial owner by reference to the Prevention of Money-laundering Act and its Rule 9(3), with a 10% starting point, and lets passive land-border ownership of up to 10% in a non-land-border investor use the Automatic Route with a report. Funds and widely held listed companies are the intended users.</li>
          <li><strong>Does not:</strong> change the position of an investor that is itself incorporated in a land-border country. Such an investor needs prior approval whatever the percentage.</li>
          <li><strong>Control test:</strong> even at 10% or less, board seats, veto rights, observer rights, side letters or other governance rights can amount to control and send the case back to the approval route.</li>
          <li><strong>Later changes:</strong> a transfer or restructuring that lifts land-border beneficial ownership over the threshold can need fresh approval.</li>
          <li><strong>Fast track:</strong> a 60-day target is reported for specified manufacturing sectors. The sector list can be revised by the Committee of Secretaries, so check the current list.</li>
          <li><strong>Open items:</strong> the RBI reporting format and the DPIIT procedure for the fast track were reported as still being finalised. Confirm the current position with the official notification.</li>
        </ul>

        <h2 id="sectors" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sectors and structures that need extra care</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Area</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Why it matters</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Defence, space, atomic energy</th>
                  <td className="border border-gray-300 p-3">Remain on the government route and are sensitive for any foreign investor</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Telecom, electronic components and equipment</th>
                  <td className="border border-gray-300 p-3">Chinese-linked supply chains are scrutinised for security; the fast track covers some manufacturing</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Digital platforms, apps and data</th>
                  <td className="border border-gray-300 p-3">India has blocked many Chinese apps under Section 69A of the IT Act; data and security reviews are strict</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Public procurement</th>
                  <td className="border border-gray-300 p-3">Bidders from land-border countries must register with a competent authority before bidding for government contracts. See <Link href="/china-to-india/restricted-sectors-procurement-and-trade" className="text-blue-800 font-semibold hover:underline">restricted sectors, procurement and trade</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Joint ventures with an Indian partner</th>
                  <td className="border border-gray-300 p-3">The approval covers the Chinese stake; the JV agreement must match what was approved. See <Link href="/china-to-india/manufacturing-and-jv-for-chinese-companies" className="text-blue-800 font-semibold hover:underline">manufacturing and joint ventures</Link></td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="not" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What not to do</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Do not route the investment through a Singapore, Hong Kong or other vehicle to avoid approval. The policy looks through to the beneficial owner, and a mis-described structure can lead to penalties under FEMA.</li>
          <li>Do not appoint a Chinese national as director before the clearance is in hand.</li>
          <li>Do not start operations through an Employer of Record that is really a disguised Chinese-controlled business in a restricted sector.</li>
          <li>Do not assume an earlier approval for another company covers yours. Each proposal is decided on its own facts.</li>
        </ul>

        <h2 id="plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A realistic timeline</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Before 2026, approvals commonly took several months and sometimes close to a year, with several
          hundred proposals reported as pending. The 60-day target helps only the specified manufacturing
          sectors. For everything else, build the approval into the project plan, keep the application
          consistent with the later incorporation documents, and agree the funding date only after approval. See{" "}
          <Link href="/china-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">incorporation steps</Link>{" "}
          and{" "}
          <Link href="/china-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.
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

        <GuideServiceBox path="/china-to-india/india-press-note-3-and-chinese-investors" />
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
            { label: "BDO India: easing of Press Note 3 with a 10 per cent cap", href: "https://www.bdo.in/en-gb/news/2026/india-eases-fdi-rules-under-press-note-3-with-10-per-cent-cap-for-border-country-investors" },
            { label: "Carnegie Endowment: India's Press Note 3 gamble", href: "https://carnegieendowment.org/research/2026/04/indias-press-note-3-gamble-opening-the-fdi-door-to-china" },
            { label: "DPIIT: Department for Promotion of Industry and Internal Trade", href: "https://dpiit.gov.in/" },
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
        title="Need Press Note 3 Approval?"
        description="Tell us the investment, the sector and the ownership chain, and we'll map the approval application, the documents and a realistic timeline."
      />
    </main>
  )
}
