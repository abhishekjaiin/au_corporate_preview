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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/exit-and-restructuring"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "routes", label: "The exit routes compared" },
  { id: "sale", label: "Selling the shares" },
  { id: "winding", label: "Winding up" },
  { id: "german", label: "The German side" },
  { id: "plan", label: "Planning an exit" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How can a German parent exit an Indian subsidiary?", a: "By selling the shares, buyback, voluntary liquidation or, for a dormant company, strike off. The sale route is the most common." },
  { q: "What pricing rules apply to a share sale?", a: "A transfer from a non-resident to a resident must be at or above fair value; a transfer from a resident to a non-resident at or below it, supported by a valuation." },
  { q: "How is the gain taxed in India?", a: "Long-term gains on unlisted shares held more than 24 months are taxed at 12.5%. Check the treaty position on share gains with your adviser." },
  { q: "How is the gain taxed in Germany?", a: "Gains on shares in a foreign subsidiary are generally 95% exempt for a corporation, subject to the conditions. Confirm with your German adviser." },
  { q: "Is strike off available for an active subsidiary?", a: "No. It is for dormant companies with no assets or liabilities." },
  { q: "What happens to employees on a closure?", a: "Notice, retrenchment compensation and gratuity rules apply, and state rules may add requirements. Plan these costs before deciding to close." },
]

const relatedCards = [
  { title: "Funding an Indian Subsidiary from Germany: Equity, Convertible Instruments, ECB Loans and RBI Reporting", desc: "How a German parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, euro remittance, public-lender loans, FC-GPR and the annual FLA return.", href: "/germany-to-india/funding-and-fema" },
  { title: "Getting Money Out of India to Germany: Dividends, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a German parent receives money from an Indian subsidiary: the flat 10% treaty rate, Section 393 withholding, Forms 41, 145 and 146, German 95% exemption, VAT on service fees and Indian GST reverse charge.", href: "/germany-to-india/repatriating-profits" },
  { title: "Contracts, Courts and Arbitration: Choosing Law and Seat, and Enforcing in India and Germany", desc: "How a German parent protects its Indian subsidiary contracts: choice of law, DIS and other arbitration, why German court judgments need a fresh suit in India, enforcing awards, stamping and the investment protection gap.", href: "/germany-to-india/contracts-courts-arbitration" },
  { title: "Common Mistakes German Companies Make in India and How to Avoid Them", desc: "The most frequent mistakes German companies make when setting up in India: late FEMA filings, missing forms for treaty relief, works council surprises, apostille errors, PE creation and transfer pricing gaps.", href: "/germany-to-india/common-mistakes" },
]

export default function ExitAndRestructuringPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Exit and Restructuring: Share Sale, Buyback, Liquidation and Closing a Subsidiary Owned by a German Parent"
        description="How a German parent exits an Indian subsidiary: share sale and FEMA pricing, capital gains and the treaty, buyback, voluntary liquidation, strike off, German effect and employee rules."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "Exit and Restructuring: Selling, Winding Up or Reorganising an Indian Subsidiary" },
        ]}
      />

      <GuideHero
        eyebrow="Lifecycle: exit"
        title="Exit and Restructuring: Share Sale, Buyback, Liquidation and Closing a Subsidiary Owned by a German Parent"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A German parent can leave India by selling the shares, having the company buy them back, winding the
          company up, or having it struck off if it is dormant. The sale route is the most common: the price
          must follow FEMA pricing rules, the Indian capital gains tax depends on the holding period (12.5% for
          unlisted shares held more than 24 months) and the treaty position, and the German parent&apos;s gain
          is generally 95% exempt if it is a qualifying corporation. Closing a company is slower and needs
          clearance of tax, labour and company law dues.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="restructuring-and-exit" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Share sale", "Price must meet FEMA pricing rules; Indian buyer; Form FC-TRS where required"],
                ["Capital gains (India)", "12.5% on long-term gains on unlisted shares (held more than 24 months); short-term gains at the normal rate; check the treaty"],
                ["German side", "Gain on shares in a foreign company generally 95% exempt for a corporation; hedged for a German adviser"],
                ["Buyback", "Companies Act limits and procedure; tax effect differs from a sale"],
                ["Liquidation", "Voluntary winding up under the Insolvency and Bankruptcy Code route or company law; takes time"],
                ["Strike off", "Quick route for a dormant company with no assets or liabilities"],
                ["Employees", "Retrenchment compensation, gratuity and notice rules apply on a closure"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The exit routes compared</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Speed</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Tax result in India</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Sale of shares to an Indian or foreign buyer", "Weeks to months", "Capital gains tax on the seller", "FEMA pricing, valuation report, reporting forms"],
                ["Buyback of shares by the company", "Months", "Taxed under the rules for buybacks", "Limits on size, solvency declaration and procedure"],
                ["Voluntary liquidation", "Months to years", "Distributions after dues; gain or loss on capital reduction", "Creditors, tax clearance, employees"],
                ["Strike off (dormant)", "Months", "Only if no assets or liabilities", "Not suitable if there is any activity or dues"],
                ["Sale of the German parent's shares (indirect transfer)", "Months", "Possible Indian tax on indirect transfer if substantial Indian value", "Review before any group restructuring"],
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

        <h2 id="sale" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Selling the shares</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Pricing:</strong> a transfer from a non-resident to a resident must be at or above fair value; a transfer from a resident to a non-resident must be at or below it. A valuation by a registered valuer or merchant banker supports the price.</li>
          <li><strong>Capital gains:</strong> India taxes the gain; the treaty position on share gains has been described differently in different sources, so confirm the current text with your adviser. See <Link href="/germany-to-india/india-germany-dtaa" className="text-blue-800 font-semibold hover:underline">the DTAA guide</Link>.</li>
          <li><strong>Reporting:</strong> report the transfer on the prescribed form through the dealer bank, within the stated deadline.</li>
          <li><strong>Warranties and escrow:</strong> price retention, indemnity caps and escrow are standard; align the governing law and arbitration choices. See <Link href="/germany-to-india/contracts-courts-arbitration" className="text-blue-800 font-semibold hover:underline">contracts and arbitration</Link>.</li>
          <li><strong>Withholding Tax by the buyer:</strong> an Indian buyer must deduct tax on the gain; get a certificate of lower deduction if justified.</li>
        </ul>

        <h2 id="winding" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Winding up</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Board and shareholders resolve to wind up, appoint a liquidator and declare solvency where applicable.</li>
          <li>Notify creditors, the Registrar and the tax authority.</li>
          <li>Clear tax, GST, provident fund, gratuity and other statutory dues. Obtain clearance where required.</li>
          <li>Settle employees under the relevant notice, retrenchment and gratuity rules.</li>
          <li>Sell or distribute assets. Repatriate remaining funds through the bank with the right forms.</li>
          <li>File final accounts and obtain the dissolution order.</li>
        </ol>

        <h2 id="german" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The German side</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A sale of shares in a foreign subsidiary by a German corporation is generally 95% exempt, with the 5% treated as non-deductible expense; confirm the conditions.</li>
          <li>Losses on the shares and on loans to the subsidiary may not be deductible in the same way as domestic losses. Ask your German adviser before choosing between sale and liquidation.</li>
          <li>Closing a subsidiary after a restructuring can trigger consultation duties in Germany if German jobs are affected. See <Link href="/germany-to-india/gcc-for-german-companies" className="text-blue-800 font-semibold hover:underline">the capability centre guide</Link>.</li>
        </ul>

        <h2 id="plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Planning an exit</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Keep the FEMA file (FC-GPR, FLA returns and bank certificates) in order. An incomplete file slows a sale.</li>
          <li>Settle intercompany balances and transfer pricing positions before the sale.</li>
          <li>Consider tax in both countries before choosing between selling and closing.</li>
          <li>Keep a data room: statutory registers, tax returns, contracts and employment records.</li>
        </ul>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.bzst.de/EN/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Federal Central Tax Office (BZSt)</a>,{" "}
          <a href="https://www.handelsregister.de/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Handelsregister</a>{" "}
          and the{" "}
          <a href="https://www.bundesbank.de/en" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Deutsche Bundesbank</a>.
        </p>

        <GuideServiceBox path="/germany-to-india/exit-and-restructuring" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/germany-to-india/faq"
          seeAllLabel="See all 146 FAQs"
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
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and German
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Restructuring or Exiting from Germany?"
        description="Tell us the current structure and your goal, and we'll map the ROC, tax and FEMA steps for a clean sale, merger or closure."
      />
    </main>
  )
}
