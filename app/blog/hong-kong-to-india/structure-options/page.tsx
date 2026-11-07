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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/structure-options"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "compare", label: "Comparison" },
  { id: "subsidiary", label: "Wholly owned subsidiary" },
  { id: "branch", label: "Branch, liaison and project offices" },
  { id: "jv", label: "Joint venture" },
  { id: "choose", label: "How to choose" },
  { id: "tax-rate-table", label: "Indian tax rate by structure" },
  { id: "pn3-hk", label: "Press Note 3 and Hong Kong ownership" },
  { id: "hk-tax", label: "Trading groups: company or office?" },
  { id: "hk-next", label: "Next step" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the best structure for a Hong Kong company in India?", a: "For most, a wholly owned private limited company, because it limits liability and is easy to fund and exit." },
  { q: "Can I use an LLP?", a: "In sectors with 100% automatic FDI and no performance-linked conditions, subject to the Press Note 3 approval for Hong Kong investors." },
  { q: "What do I need for a branch office?", a: "A net worth of USD 100,000 and a profit record for the preceding five years, with RBI approval." },
  { q: "What do I need for a liaison office?", a: "A net worth of USD 50,000 and a profit record for three years, with RBI approval. It cannot earn income." },
  { q: "Can a liaison office sell products?", a: "No. It can only represent the parent, promote exports and imports and communicate." },
  { q: "Is a joint venture easier?", a: "It can open access to a partner and market, but it needs strong governance terms and pricing compliance." },
  { q: "How are branches taxed?", a: "As foreign companies on Indian profits at the higher foreign company rate, with surcharge and cess; check the current rates." },
  { q: "Does a Hong Kong company need approval to open a branch in India?", a: "Yes. It goes through the RBI route with security review." },
  { q: "Can a Hong Kong group use an LLP in India?", a: "Only in sectors open to 100% automatic foreign investment, and Press Note 3 approval is still needed where it applies." },
]

const relatedCards = [
  { title: "How to Incorporate a Private Limited Company in India as a Hong Kong Parent: Approval, SPICe+, Bank Account and Post-Incorporation Filings", desc: "Step-by-step route for a Hong Kong parent to set up an Indian private limited company: Press Note 3 approval, name, SPICe+, DIN and DSC, resident director, PAN and TAN, bank account, capital inflow, FC-GPR and first filings.", href: "/hong-kong-to-india/incorporation-steps" },
  { title: "Funding Your Indian Subsidiary from Hong Kong: Equity, Preference Shares, External Borrowing and FEMA Reporting", desc: "How a Hong Kong parent can fund an Indian company: equity share and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return, Press Note 3 and reporting through the authorised dealer bank.", href: "/hong-kong-to-india/funding-and-fema" },
  { title: "Getting Money Out of India to a Hong Kong Parent: Dividends at 5%, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a Hong Kong parent receives money from an Indian subsidiary: 5% treaty withholding on dividends, 10% on interest, royalties and fees, Section 393, Forms 41, 145 and 146, Hong Kong tax treatment and the documents banks ask for.", href: "/hong-kong-to-india/repatriating-profits" },
  { title: "Exiting an Indian Subsidiary from Hong Kong: Share Sale, Buy-Back, Merger, Voluntary Liquidation and Tax on the Exit", desc: "How a Hong Kong parent exits or restructures an Indian business: sale of shares, FEMA pricing, FC-TRS, capital gains tax, buy-back, merger, voluntary liquidation, strike-off and the treaty position.", href: "/hong-kong-to-india/exit-and-restructuring" },
]

export default function StructureOptionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Choosing an Indian Structure for a Hong Kong Parent: Private Limited, LLP, Branch, Liaison Office, Project Office and Joint Venture"
        description="Compare Indian structures for a Hong Kong company: wholly owned private limited company, LLP, branch, liaison and project office, and joint venture, with tax, approval, liability and exit points."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Structure Options in India for a Hong Kong Company: Subsidiary, LLP, Branch, Liaison, Project Office or JV" },
        ]}
      />

      <GuideHero
        eyebrow="Setup: structure"
        title="Choosing an Indian Structure for a Hong Kong Parent: Private Limited, LLP, Branch, Liaison Office, Project Office and Joint Venture"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          For most Hong Kong companies the wholly owned private limited company is the practical choice:
          separate legal entity, limited liability, flexible funding and a clean exit. A liaison or branch
          office can suit a narrow purpose, but the RBI conditions are strict (a branch needs a USD 100,000 net
          worth and a five-year profit record; a liaison office USD 50,000 and three years), and the Press Note
          3 approval route applies whichever structure you pick. A joint venture adds a partner and governance
          terms. Choose on liability, tax, approval, funding and exit, not on set-up speed.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="subsidiary-vs-branch-vs-liaison-office-vs-llp" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Private limited company", "Separate entity, limited liability; default choice"],
                ["LLP", "Allowed in sectors with 100% automatic FDI and no performance-linked conditions; approval still applies for Hong Kong investors"],
                ["Branch office", "Net worth USD 100,000 and 5-year profit record; limited activities; RBI approval"],
                ["Liaison office", "Net worth USD 50,000 and 3-year profit record; no commercial activity; RBI approval"],
                ["Project office", "For a specific contract; conditions on funding and approval"],
                ["Joint venture", "Shareholders' agreement with an Indian partner; sector cap and pricing rules apply"],
                ["Press Note 3", "Applies to any structure with Hong Kong or land-border ownership"],
                ["Tax difference", "Branch taxed as a foreign company at a higher rate than a domestic company (confirm the current rate); subsidiary at the domestic company rate"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Comparison</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Option</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Liability</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Activities</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Tax outline</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Main drawback</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Private limited company", "Limited to share capital", "Any permitted business", "Domestic company rate; dividends taxed on distribution", "Compliance burden; two directors and shareholders"],
                ["LLP", "Limited to contribution", "Services and permitted sectors", "Taxed as a firm; no dividend distribution tax", "Less familiar to investors; FDI conditions; limited exit via shares"],
                ["Branch office", "Parent liable", "Narrow, permitted activities", "Foreign company rate on profits", "Strict RBI eligibility; Hong Kong parent exposed"],
                ["Liaison office", "Parent liable", "Representation and communication only; no income", "No Indian income; costs funded by parent", "No revenue allowed; PE risk if it exceeds its remit"],
                ["Project office", "Parent liable", "A specific contract", "Taxed as a foreign company", "Limited life; conditions on use"],
                ["Joint venture company", "Limited to share capital", "Agreed scope", "Domestic company rate", "Partner disputes; exit and deadlock terms"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                  <td className="border border-gray-300 p-3">{row[3]}</td>
                  <td className="border border-gray-300 p-3">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="subsidiary" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Wholly owned subsidiary</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Suited to sales, services, manufacturing, GCC and trading models.</li>
          <li>Funding by equity, preference shares or compliant external commercial borrowing. See <Link href="/hong-kong-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
          <li>Profits can be repatriated as dividends after tax, subject to the treaty. See <Link href="/hong-kong-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">repatriating profits</Link>.</li>
          <li>Exit by share sale or buy-back. See <Link href="/hong-kong-to-india/exit-and-restructuring" className="text-blue-800 font-semibold hover:underline">exit and restructuring</Link>.</li>
        </ul>

        <h2 id="branch" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Branch, liaison and project offices</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A branch can carry out specified activities such as export and import, professional services, research, and representing the parent, but not manufacturing.</li>
          <li>A liaison office cannot earn income. All costs are met from inward remittance.</li>
          <li>A branch office is a PE of the parent, and profits are taxed in India as a foreign company.</li>
          <li>The conditions and the Press Note 3 approval make these routes slower than they look.</li>
        </ul>

        <h2 id="jv" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Joint venture</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Agree reserved matters, deadlock, transfer restrictions, non-compete and exit terms before signing.</li>
          <li>Pricing rules apply to share transfers between a Hong Kong investor and an Indian resident. See <Link href="/hong-kong-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
          <li>Consider governing law and arbitration seat early. See <Link href="/hong-kong-to-india/contracts-courts-arbitration" className="text-blue-800 font-semibold hover:underline">contracts, courts and arbitration</Link>.</li>
        </ul>

        <h2 id="choose" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to choose</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Start with the business model: contracts and revenue in India point to a subsidiary.</li>
          <li>Check the sector cap and the Press Note 3 route.</li>
          <li>Compare liability: a branch exposes the Hong Kong parent.</li>
          <li>Plan the exit and the repatriation route from day one.</li>
        </ol>
        <h2 id="tax-rate-table" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian tax rate by structure</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Structure</th><th scope="col" className="border border-gray-300 p-3 text-left">Indian tax on profits</th><th scope="col" className="border border-gray-300 p-3 text-left">When profits go home</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Private limited company</th><td className="border border-gray-300 p-3">About 25.17% under the concessional regime</td><td className="border border-gray-300 p-3">Dividend withholding of 5% under the DTAA</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">LLP</th><td className="border border-gray-300 p-3">30% plus surcharge and cess, up to about 34.94%</td><td className="border border-gray-300 p-3">No further Indian tax on the profit share</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Branch or project office</th><td className="border border-gray-300 p-3">35% plus surcharge and cess, about 36.4% to 38.22%</td><td className="border border-gray-300 p-3">No Indian tax on remitting net profit</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Liaison office</th><td className="border border-gray-300 p-3">No income allowed</td><td className="border border-gray-300 p-3">Not applicable</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          On ₹1 crore of profit the company route saves roughly ₹11 to 13 lakh a year in Indian corporate tax compared with a branch, which is why most Hong Kong groups choose an Indian company for any revenue-earning business. A branch or liaison office also needs AD bank approval of the Hong Kong parent itself, which takes longer than incorporating a company.
        </p>
        <h2 id="pn3-hk" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Press Note 3 and Hong Kong ownership</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Indian authorities treat Hong Kong as part of China for Press Note 3, so a Hong Kong investor, or any investor whose beneficial owner is in China or Hong Kong, needs government approval before investing in an Indian company. A branch or liaison office goes through the RBI with security review. Plan the approval time before choosing the structure, and disclose the full ownership chain, including any Chinese mainland shareholders.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>A wholly owned Indian company is still the usual choice once approval is obtained.</li>
          <li>A joint venture with an Indian majority partner can reduce, but not remove, the approval question if a Hong Kong or Chinese owner holds any beneficial interest.</li>
          <li>Later capital rounds also need approval.</li>
        </ul>
        <h2 id="hk-tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Trading groups: company or office?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Hong Kong trading groups sometimes consider a liaison office to support sourcing from India without earning income there. It works while the office only liaises with suppliers; as soon as it negotiates contracts, inspects for customers for a fee or invoices, it needs to become a company. Because the Indian company pays tax at the domestic rate and dividends to Hong Kong are taxed at 5% under the DTAA, a company is usually the better long-term vehicle for any trading business.
        </p>
        <h2 id="hk-next" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Next step</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Once the structure is chosen, see the incorporation steps and the funding guide for the approval and capital sequence that applies to Hong Kong investors.
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

        <GuideServiceBox path="/hong-kong-to-india/structure-options" />
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
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
            { label: "DPIIT", href: "https://dpiit.gov.in/" },
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
        title="Subsidiary, LLP, Branch or Joint Venture?"
        description="Tell us what the India operation will do, and we'll recommend the structure that suits a Hong Kong company and its owners."
      />
    </main>
  )
}
