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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/exit-and-restructuring"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "routes", label: "Exit routes compared" },
  { id: "tax", label: "Tax on the exit" },
  { id: "fema", label: "FEMA pricing and reporting" },
  { id: "closure", label: "Closing the company" },
  { id: "restructure", label: "Restructuring within the group" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How is a share sale by a Hong Kong parent taxed in India?", a: "The gain is taxed in India. For unlisted shares held more than 24 months the long-term rate is 12.5%; a shorter holding is taxed at the normal rate." },
  { q: "Does Hong Kong tax the gain?", a: "Generally not, but group disposal gains can be caught by the foreign-sourced income exemption rules without economic substance." },
  { q: "What is the FEMA pricing rule on exit?", a: "A sale to an Indian resident cannot be above fair value for a purchase from a non-resident, and a sale to another non-resident cannot be below it." },
  { q: "Which form reports the transfer?", a: "Form FC-TRS within 60 days of the transfer." },
  { q: "Can I do a buy-back?", a: "Yes, within Companies Act limits. The tax treatment has changed in recent budgets, so confirm the current rule." },
  { q: "How long does voluntary liquidation take?", a: "Usually several months, depending on tax clearances and the creditor process." },
  { q: "Can I strike off an operating company?", a: "Strike-off is for dormant companies without liabilities and is not a substitute for a proper liquidation." },
]

const relatedCards = [
  { title: "Funding Your Indian Subsidiary from Hong Kong: Equity, Preference Shares, External Borrowing and FEMA Reporting", desc: "How a Hong Kong parent can fund an Indian company: equity share and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return, Press Note 3 and reporting through the authorised dealer bank.", href: "/hong-kong-to-india/funding-and-fema" },
  { title: "India-Hong Kong Double Taxation Agreement Explained: 5% Dividends, 10% Royalties and Fees, PE Rules and the Principal Purpose Test", desc: "The India-Hong Kong tax treaty explained for a Hong Kong parent: 5% dividend rate, 10% interest, royalties and fees for technical services, permanent establishment rules, share gains, anti-abuse tests and how to claim treaty rates.", href: "/hong-kong-to-india/india-hong-kong-dtaa" },
  { title: "Getting Money Out of India to a Hong Kong Parent: Dividends at 5%, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a Hong Kong parent receives money from an Indian subsidiary: 5% treaty withholding on dividends, 10% on interest, royalties and fees, Section 393, Forms 41, 145 and 146, Hong Kong tax treatment and the documents banks ask for.", href: "/hong-kong-to-india/repatriating-profits" },
  { title: "Twelve Common Mistakes Hong Kong Companies Make in India and How to Avoid Them", desc: "The most common mistakes of Hong Kong companies entering India: skipping Press Note 3, thin hub structures, late FEMA filings, weak treaty paperwork, secondment tax errors, stale apostilles, unstamped contracts and ignoring the Indian calendar.", href: "/hong-kong-to-india/common-mistakes" },
]

export default function ExitAndRestructuringPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Exiting an Indian Subsidiary from Hong Kong: Share Sale, Buy-Back, Merger, Voluntary Liquidation and Tax on the Exit"
        description="How a Hong Kong parent exits or restructures an Indian business: sale of shares, FEMA pricing, FC-TRS, capital gains tax, buy-back, merger, voluntary liquidation, strike-off and the treaty position."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Exit and Restructuring in India for a Hong Kong Parent: Share Sale, Buy-Back, Liquidation and Strike-Off" },
        ]}
      />

      <GuideHero
        eyebrow="Exit: sale and closure"
        title="Exiting an Indian Subsidiary from Hong Kong: Share Sale, Buy-Back, Merger, Voluntary Liquidation and Tax on the Exit"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Hong Kong parent can exit by selling the Indian shares, by a buy-back, by a merger, or by closing
          the company through voluntary liquidation or strike-off. Gains on Indian shares are taxed in India
          under the treaty, and Hong Kong generally does not tax capital gains, so the Indian tax is the main
          cost. A long-term gain on unlisted shares held more than 24 months is taxed at 12.5%. Under FEMA, a
          purchase from a non-resident cannot be above fair value, and a sale to a non-resident cannot be below
          it. Report the transfer on Form FC-TRS within 60 days and obtain tax clearances before the money
          leaves.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="restructuring-and-exit" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Share sale", "Gain taxed in India; 12.5% on unlisted shares held more than 24 months, normal rates for shorter holdings"],
                ["FEMA pricing", "Purchase from a non-resident cannot be above fair value; sale to a non-resident cannot be below fair value"],
                ["Reporting", "FC-TRS within 60 days of the transfer"],
                ["Buy-back", "Company buys its own shares; check the current tax treatment, which has changed in recent budgets"],
                ["Closure", "Voluntary liquidation or strike-off; clear tax, labour and GST first"],
                ["Treaty", "Gains on Indian shares taxable in India; check the principal purpose test"],
                ["Remittance", "Form 145 and, where needed, Form 146; no tax clearance gaps"],
                ["Hong Kong side", "Capital gains generally not taxed; FSIE for group disposal gains without substance"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Exit routes compared</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">India tax</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">FEMA and filings</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Sale of shares to an Indian buyer", "Capital gains on the Hong Kong seller; withholding on the price", "Price not above fair value; FC-TRS within 60 days", "Negotiate escrow and deferred consideration within RBI limits"],
                ["Sale to another non-resident", "Capital gains if Indian shares are transferred; indirect transfer rules may apply", "Price not below fair value; FC-TRS", "Check Press Note 3 for the buyer"],
                ["Buy-back by the company", "Tax on the shareholder depends on current law; confirm", "Pricing and sources of funds under the Companies Act", "Limits on size and timing"],
                ["Merger or demerger", "Tax-neutral only if the conditions are met", "FEMA compliance on shares issued; NCLT process", "Longer and more complex"],
                ["Voluntary liquidation", "Distributions taxed; liquidator process", "Remittance of surplus through the bank", "Months to complete"],
                ["Strike-off", "Only for dormant companies without liabilities", "Registrar process", "Not a way to avoid unpaid tax"],
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

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax on the exit</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A long-term gain on unlisted Indian shares held more than 24 months is taxed at 12.5% for a non-resident; a shorter holding is taxed at the normal rate. See <Link href="/hong-kong-to-india/india-hong-kong-dtaa" className="text-blue-800 font-semibold hover:underline">the DTAA guide</Link>.</li>
          <li>The buyer deducts Withholding Tax on the payment to a non-resident seller; a lower deduction certificate can fix the rate in advance.</li>
          <li>Hong Kong does not generally tax capital gains, but group disposal gains can fall under the FSIE rules without economic substance.</li>
          <li>Indirect transfers of shares of a foreign company that derives its value from Indian assets can be taxed in India.</li>
        </ul>

        <h2 id="fema" className="text-2xl font-bold text-gray-900 mt-12 mb-4">FEMA pricing and reporting</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>On a sale by the Hong Kong parent to an Indian resident, the price cannot be higher than fair value.</li>
          <li>On a sale to another non-resident, the price cannot be lower than fair value.</li>
          <li>Report the transfer on Form FC-TRS within 60 days with the valuation and bank certificates.</li>
          <li>Use the authorised dealer bank for the remittance. See <Link href="/hong-kong-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
        </ul>

        <h2 id="closure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Closing the company</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Settle employees, provident fund, gratuity and notice obligations.</li>
          <li>File final returns and clear GST, income tax and transfer pricing matters.</li>
          <li>Hold the shareholder resolution, appoint a liquidator and complete the declaration and process, or apply for strike-off if eligible.</li>
          <li>Close bank accounts and remit surplus with proper tax forms.</li>
          <li>Deregister from labour, tax and customs systems.</li>
        </ol>

        <h2 id="restructure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Restructuring within the group</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Moving the Indian shares to another group company, for example from Hong Kong to another holding
          entity, can trigger Indian tax, FEMA pricing and Press Note 3 approvals. Take advice before moving.
          See{" "}
          <Link href="/hong-kong-to-india/hong-kong-as-regional-hub-for-india" className="text-blue-800 font-semibold hover:underline">the regional hub guide</Link>.
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

        <GuideServiceBox path="/hong-kong-to-india/exit-and-restructuring" />
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
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in/" },
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
        title="Restructuring or Exiting from Hong Kong?"
        description="Tell us the current structure and your goal, and we'll map the ROC, tax and FEMA steps for a clean sale, buy-back or closure."
      />
    </main>
  )
}
