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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/structure-options"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "compare", label: "The options side by side" },
  { id: "sub", label: "The wholly owned subsidiary" },
  { id: "jv", label: "Joint ventures" },
  { id: "branch", label: "Branch, liaison and project offices" },
  { id: "sector", label: "Sector notes for Spanish investors" },
  { id: "decide", label: "A short way to decide" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Which structure do most Spanish companies use in India?", a: "A private limited company, wholly owned or in a joint venture. It limits liability and allows the full range of activity." },
  { q: "Can a Spanish company own 100% of an Indian company?", a: "Yes in sectors under the Automatic Route. Caps and conditions apply in retail, insurance, defence, media and some other sectors." },
  { q: "Does Press Note 3 apply to Spanish investors?", a: "Not by nationality. Spain has no land border with India, so the approval requirement for land-border countries does not apply unless a beneficial owner is from such a country." },
  { q: "What are the conditions for a branch office?", a: "A net worth of USD 100,000 and profits in the five preceding years, with a limited list of permitted activities." },
  { q: "What are the conditions for a liaison office?", a: "A net worth of USD 50,000 and profits in the three preceding years; it cannot earn income." },
  { q: "Is an LLP better than a company?", a: "Only for services in sectors with no FDI conditions. Many banks and investors prefer a company." },
  { q: "Is a subsidiary a permanent establishment of the parent?", a: "Not by itself. The risk arises if the parent runs it as a department or if its people conclude contracts in India for the parent." },
  { q: "What tax does a branch pay?", a: "Indian tax at the higher foreign company rate on its profits, plus remittance of the profits without dividend withholding tax." },
  { q: "Can I change structure later?", a: "Yes, by converting, transferring the business or merging, but each route has tax and FEMA consequences. Plan the end state at the start." },
]

const relatedCards = [
  { title: "Step-by-Step Incorporation of an Indian Private Limited Company by a Spanish Parent: From Name Approval to the Foreign Investment Filing", desc: "The exact steps to incorporate an Indian private limited company when the shareholder is Spanish: name, DIN and DSC, the SPICe+ form with AGILE-PRO-S, charter documents, PAN and TAN, bank account, share allotment, FC-GPR, first auditor and commencement of business.", href: "/spain-to-india/incorporation-steps" },
  { title: "Funding an Indian Subsidiary from Spain: Share Capital, Shareholder Loans, Fair Value Pricing Rules, FC-GPR, FC-TRS and the Annual FLA Return", desc: "How a Spanish parent can put money into an Indian company: equity under the Automatic Route, convertible instruments, external commercial borrowing, intra-group financing, the FEMA pricing rule, the 60-day and 30-day deadlines, the FLA return and the Spanish declarations that match.", href: "/spain-to-india/funding-and-fema" },
  { title: "India-Spain Double Taxation Agreement Explained: 15% Dividends, 10% Royalties and Technical Fees, the 6-Month Site PE, the 10% Share-Gain Rule and the MLI", desc: "The India-Spain tax treaty explained for a Spanish parent with India as source state and Spain as residence state: dividend, interest, royalty and technical fee rates, permanent establishment, capital gains on Indian shares, credit and participation exemption, limitation of benefits, the MLI principal purpose test and how to claim relief.", href: "/spain-to-india/india-spain-dtaa" },
  { title: "EU-India Free Trade Agreement for Spanish Companies: Status After the January 2026 Conclusion, Services and Investment, Rules of Origin and How to Plan Before It Is in Force", desc: "The EU-India trade agreement as it affects a Spanish company exporting to or investing in India: the 27 January 2026 conclusion, the signature and ratification steps reported for December 2026 and early 2027, what it is expected to cover, the separate investment protection agreement, and a planning checklist.", href: "/spain-to-india/eu-india-fta-and-spanish-exporters" },
]

export default function StructureOptionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Which Structure Should a Spanish Company Use in India? Private Limited, LLP, Branch, Liaison Office, Project Office or Joint Venture, with Sector Notes"
        description="Compare the ways a Spanish group can enter India: a wholly owned private limited company, a joint venture, a limited liability partnership, a branch, a liaison office or a project office. Includes the RBI net worth tests, tax differences and notes for renewables, auto components, ceramics, retail and infrastructure."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "Structure Options for Spanish Companies in India: Subsidiary, LLP, Branch, Liaison or JV" },
        ]}
      />

      <GuideHero
        eyebrow="Structure: choose"
        title="Which Structure Should a Spanish Company Use in India? Private Limited, LLP, Branch, Liaison Office, Project Office or Joint Venture, with Sector Notes"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Most Spanish groups enter India through a private limited company owned wholly by the parent or in a
          joint venture, because it limits liability, gives a clear tax position and allows the full range of
          commercial activity. A branch office is possible for a company with a net worth of USD 100,000 and a
          five-year profit record, and a liaison office for one with USD 50,000 and a three-year record, but
          both are limited in what they can do and a branch is taxed at the higher foreign company rate. A
          limited liability partnership suits services in sectors with no FDI conditions. A project office
          serves a contract. For a Spanish company, the sector often decides the answer, because caps and
          conditions apply to retail, insurance, defence and some media regardless of nationality.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="subsidiary-vs-branch-vs-liaison-office-vs-llp" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Wholly owned subsidiary", "Private limited company with 100% Spanish ownership in sectors under the Automatic Route"],
                ["Joint venture", "Private limited company with an Indian partner; shareholder agreement; sector caps apply"],
                ["LLP", "Allowed for sectors under the Automatic Route with no FDI-linked conditions; partners instead of shareholders"],
                ["Branch office", "Net worth USD 100,000 and a five-year profit record; limited activities; taxed as a foreign company"],
                ["Liaison office", "Net worth USD 50,000 and a three-year profit record; no income-earning activity"],
                ["Project office", "For a specific contract; conditions on funding and the contract"],
                ["Press Note 3", "Does not apply by nationality to a Spanish investor; Spain has no land border with India"],
                ["Sector caps", "Retail, insurance, defence, media and some others have conditions for any foreign investor"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The options side by side</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Option</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What it is</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Best for</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Main limit</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Wholly owned private limited company", "A separate Indian legal person owned by the Spanish parent", "Manufacturing, services, trading and long-term operations", "Full compliance, audit and filings; dividend tax of 15% under the treaty"],
                ["Joint venture company", "A private limited company with an Indian partner", "Sectors where local distribution or licensing matters", "Partner conflicts; sector caps; exit"],
                ["LLP", "A partnership with limited liability", "Consulting and professional services", "Not allowed where FDI conditions exist; less familiar to banks and investors"],
                ["Branch office", "An extension of the Spanish company", "Spanish companies with a long track record that need to trade as themselves", "Limited activity; foreign company tax rate; net worth and profit tests; permanent establishment"],
                ["Liaison office", "A communication office with no income", "Market research and liaison", "Cannot trade or earn; three-year renewable approval"],
                ["Project office", "A temporary office for a contract", "Construction, power and engineering projects", "Needs a contract and funding conditions; taxed as a permanent establishment"],
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

        <h2 id="sub" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The wholly owned subsidiary</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          For most Spanish groups the subsidiary is the default. It has its own legal personality, protects the
          parent from the subsidiary&apos;s liabilities, and can raise local finance, hold licences and employ
          people. Under the India-Spain treaty its dividends bear a flat 15% withholding tax and the Spanish
          parent usually benefits from the participation exemption at home. A subsidiary is not by itself a
          permanent establishment of the parent, though the parent should avoid managing it as a department. See{" "}
          <Link href="/spain-to-india/india-spain-dtaa" className="text-blue-800 font-semibold hover:underline">the treaty guide</Link>.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          A subsidiary needs at least two directors, a Resident Director, a registered office, an auditor and an
          annual cycle of filings. The cost of this is small beside the protection, but it is not zero. See{" "}
          <Link href="/spain-to-india/cost-of-setting-up-a-subsidiary-in-india-from-spain" className="text-blue-800 font-semibold hover:underline">the cost guide</Link>.
        </p>

        <h2 id="jv" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Joint ventures</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A joint venture company is the usual way into sectors where local partners bring licences, land,
          distribution or customers. The shareholders&apos; agreement should say how the board is formed, which
          decisions need both partners, how deadlock is resolved, how shares may be transferred, what happens on
          a change of control and how the venture ends. Because foreign investment must be priced at or above
          fair value on entry and at or below it on exit, the agreement should avoid guaranteed returns, which
          Indian rules treat with caution for foreign investors. See{" "}
          <Link href="/spain-to-india/contracts-courts-arbitration" className="text-blue-800 font-semibold hover:underline">contracts and arbitration</Link>.
        </p>

        <h2 id="branch" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Branch, liaison and project offices</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A Spanish company can open a branch office in India only for specified activities, such as export and
          import, professional or consultancy services, research, technical or financial collaborations and
          acting as a buying or selling agent, and it must show a net worth of USD 100,000 and a profit-making
          record for the five preceding years. A liaison office requires USD 50,000 and three years of profit,
          cannot earn income and may only promote the company and gather information. A project office is for a
          specific contract with the conditions the Reserve Bank sets. All three are extensions of the Spanish
          company, so Spanish and Indian tax both apply and the profits of a branch or project office are taxed
          in India at the higher foreign company rate. For most operating businesses a subsidiary is simpler.
        </p>

        <h2 id="sector" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sector notes for Spanish investors</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Sector</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical Spanish angle</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What to check</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Renewable energy and infrastructure", "Developers, EPC contractors and equipment makers", "Project-level special purpose companies; the six-month site rule for permanent establishment; licences from state and central bodies"],
                ["Auto components and industrial engineering", "Tier-one and tier-two suppliers following customers to India", "Land and factory approvals; import duties on machinery; production-linked incentives"],
                ["Ceramics and building products", "Manufacturers and exporters", "Raw material sourcing; state incentives; competition from local clusters"],
                ["Fashion and retail", "Single-brand retailers and franchise partners", "FDI conditions on single-brand retail, including local sourcing rules above a threshold; lease and store model"],
                ["Information technology and services", "Software, systems and support centres", "Transfer pricing; data protection; the visa route for staff"],
                ["Financial services and insurance", "Banks, insurers and advisers", "Caps and licences from the sector regulator; not a normal Automatic Route case"],
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

        <h2 id="decide" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A short way to decide</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>If you want to trade, hire and own assets in India for years, choose a private limited company.</li>
          <li>If a local partner brings licences or customers, choose a joint venture company and negotiate the agreement carefully.</li>
          <li>If you only provide services and the sector has no FDI conditions, consider an LLP, but check the bank and investor view.</li>
          <li>If you need to test the market without income, a liaison office may work, but a small subsidiary often costs little more.</li>
          <li>If you have a single contract, consider a project office or a project company.</li>
          <li>In every case confirm the sector route and caps before you file.</li>
        </ol>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://sede.agenciatributaria.gob.es/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Agencia Tributaria (Spain)</a>,{" "}
          <a href="https://comercio.gob.es/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Spanish Ministry of Economy, Trade and Business</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/spain-to-india/structure-options" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/spain-to-india/faq"
          seeAllLabel="See all 179 FAQs"
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
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and Spanish
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Subsidiary, LLP, Branch or Joint Venture?"
        description="Tell us what the India operation will do, and we'll recommend the structure that suits a Spanish company."
      />
    </main>
  )
}
