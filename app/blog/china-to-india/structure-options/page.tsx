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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/structure-options"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "compare", label: "Structures compared" },
  { id: "jv", label: "Joint ventures with an Indian partner" },
  { id: "third", label: "Why a third-country holding company is not a shortcut" },
  { id: "pick", label: "A quick way to choose" },
  { id: "cost", label: "Cost and time" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Which structure suits a Chinese company entering India?", a: "A private limited company, wholly owned or as a joint venture with an Indian partner, is the most common. All routes need government approval where the investor is Chinese." },
  { q: "Can a Chinese company open a branch office in India?", a: "Yes, with RBI approval, a net worth of USD 100,000 and a five-year profit record, plus a security review for land-border-country applicants." },
  { q: "What can a liaison office do?", a: "Liaison and market research only, with no income or invoicing. It needs RBI approval and USD 50,000 net worth with a three-year record." },
  { q: "Is an Employer of Record a way around Press Note 3?", a: "No. It is a hiring vehicle for a pilot. If the real business is in a restricted sector or Chinese-controlled, the approval requirement still applies." },
  { q: "Does a joint venture with an Indian partner avoid Press Note 3?", a: "No. The Chinese stake still needs approval. A structure with Indian majority ownership and control may help in the fast-track sectors." },
  { q: "Can I use a Hong Kong or Singapore holding company?", a: "It does not avoid Press Note 3 where Chinese beneficial ownership or control exists, and mis-describing the structure is a FEMA risk." },
]

const relatedCards = [
  { title: "Press Note 3 for Chinese Companies: When Government Approval Is Needed and What the 2026 Easing Changes", desc: "How India's Press Note 3 (2020) applies to a Chinese parent: prior government approval for investors incorporated in China, the 2026 easing for passive minority land-border ownership, the control test, the 60-day sectors, director clearance and planning.", href: "/china-to-india/india-press-note-3-and-chinese-investors" },
  { title: "Manufacturing in India with a Chinese Partner: Approval, Joint Venture Terms, Technology Licences and Local Content", desc: "How Chinese manufacturers approach India: joint ventures with Indian partners, the 60-day fast-track sectors under the amended Press Note 3, incentive schemes, technology licences, supply chains, customs and the practical limits.", href: "/china-to-india/manufacturing-and-jv-for-chinese-companies" },
  { title: "Setting Up the Indian Subsidiary After Approval: Step-by-Step Plan for a Chinese Parent", desc: "The step-by-step plan for incorporating an Indian private limited company owned by a Chinese parent: Press Note 3 approval, documents, director clearance, SPICe+, bank account, funding, RBI reporting and the first 180 days.", href: "/china-to-india/incorporation-steps" },
  { title: "Funding an Indian Subsidiary from China: Equity, Convertible Instruments, ECB Loans, SAFE Remittance and FC-GPR", desc: "How a Chinese parent funds an Indian subsidiary: equity pricing and valuation, compulsorily convertible instruments, external commercial borrowing, the Chinese SAFE step, inward remittance, FC-GPR and the 60-day and 30-day clocks.", href: "/china-to-india/funding-and-fema" },
]

export default function StructureOptionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Choosing the Structure in India as a Chinese Investor: Wholly Owned Subsidiary, Joint Venture, Branch or Employer of Record"
        description="A comparison of ways for a Chinese company to operate in India: wholly owned subsidiary, joint venture with an Indian partner, branch or liaison office, LLP and Employer of Record, with Press Note 3 and approval consequences for each."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Subsidiary, Joint Venture, Branch or EOR: Choosing the Structure for a Chinese Investor" },
        ]}
      />

      <GuideHero
        eyebrow="Structure: options"
        title="Choosing the Structure in India as a Chinese Investor: Wholly Owned Subsidiary, Joint Venture, Branch or Employer of Record"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          For a Chinese investor, the choice of structure is partly a choice of how the Press Note 3 approval
          will look. A wholly owned subsidiary needs approval for 100% Chinese ownership. A joint venture with
          an Indian partner may be easier to approve and, in the fast-track manufacturing sectors, a structure
          with Indian majority ownership and control is reportedly expected. A branch or liaison office needs
          RBI approval and clears the land-border check in a separate way. An Employer of Record can be a first
          step for hiring, but not a way to avoid the rules.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="subsidiary-vs-branch-vs-liaison-office-vs-llp" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Wholly owned subsidiary", "Full control; needs government approval for a 100% Chinese stake; sector caps apply"],
                ["Joint venture", "Shared ownership with an Indian partner; approval covers the Chinese stake; shareholder agreement must match the approval"],
                ["Branch office", "Parent's own activities; RBI approval with land-border-country security review; net worth USD 100,000 and a five-year profit record"],
                ["Liaison office", "Liaison only, no income; RBI approval; net worth USD 50,000 and three years of record"],
                ["LLP", "Allowed in eligible sectors; FEMA conditions; approval still applies for Chinese partners"],
                ["Employer of Record", "A third party employs staff on its entity; not a way to avoid the rules"],
                ["Via a third-country vehicle", "Does not avoid Press Note 3 where Chinese beneficial ownership or control exists"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Structures compared</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Structure</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Best for</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Press Note 3 and approval</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Main limits</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Wholly owned private limited company", "Sales, development, assembly, captive teams", "Government approval required for the Chinese stake", "Two directors (one resident); audit and ROC compliance; sector caps"],
                ["Joint venture company with an Indian partner", "Manufacturing, distribution, access to local relationships", "Approval required for the Chinese stake; fast-track manufacturing sectors reportedly look for Indian majority ownership and control", "Shareholder agreement, deadlock and exit terms; FEMA pricing for transfers"],
                ["Branch office", "The parent's own services or trading in permitted activities", "RBI approval and security review for land-border-country applicants", "Profit record test; taxed as a foreign company at higher rates; parent directly liable"],
                ["Liaison office", "Liaison and market research", "RBI approval and security review", "No income or invoicing; costs funded from China"],
                ["LLP", "Professional or service partnerships in eligible sectors", "Approval applies to Chinese partners", "Tax and FEMA review; limited use for manufacturing"],
                ["Employer of Record", "A first hire or a short pilot", "Not a route around approval for operating a business", "The EOR is the legal employer; control and PE risk"],
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

        <h2 id="jv" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Joint ventures with an Indian partner</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Many Chinese manufacturers look at joint ventures with Indian companies, particularly in electronics and components. The approval application should describe the JV, the Chinese stake and the technology or supply arrangements.</li>
          <li>The shareholder agreement should match what was approved: shareholding, board seats, vetoes and transfer restrictions. Changes that increase Chinese control may need fresh approval.</li>
          <li>Agree the technology licence, supply and brand terms at arm&apos;s length. See <Link href="/china-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li>Plan the exit before the entry: call and put options, drag and tag rights, and valuation, within FEMA pricing rules. See <Link href="/china-to-india/exit-and-restructuring" className="text-blue-800 font-semibold hover:underline">exit and restructuring</Link>.</li>
          <li>More on manufacturing models: <Link href="/china-to-india/manufacturing-and-jv-for-chinese-companies" className="text-blue-800 font-semibold hover:underline">manufacturing and joint ventures</Link>.</li>
        </ul>

        <h2 id="third" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why a third-country holding company is not a shortcut</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The amended policy looks at beneficial ownership and control. A Singapore or Hong Kong holding company
          owned by a Chinese parent leaves the Chinese beneficial owner above the threshold, so the approval
          requirement remains. Using such a vehicle without disclosing the Chinese ownership risks a FEMA
          contravention and trouble with the bank and the Registrar.
        </p>

        <h2 id="pick" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A quick way to choose</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Operate with your own team and full control, in a sector open to foreign investment: wholly owned subsidiary.</li>
          <li>Need local partner, land, licences or customer access: joint venture.</li>
          <li>Only market research and liaison: liaison office, if you meet the tests.</li>
          <li>One or two hires for a pilot: Employer of Record, then convert.</li>
        </ul>

        <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Cost and time</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A subsidiary has the highest setup cost but the cleanest long-term position. A joint venture adds
          legal and valuation costs for the partner agreement. Branch and liaison offices need RBI approval,
          which can take months. Plan the approval time into the project calendar. See{" "}
          <Link href="/china-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">incorporation steps</Link>.
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

        <GuideServiceBox path="/china-to-india/structure-options" />
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
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in/" },
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in/" },
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
        title="Subsidiary, Joint Venture, Branch or EOR?"
        description="Tell us what the India operation will do, and we'll recommend the structure that suits a Chinese investor under Press Note 3."
      />
    </main>
  )
}
