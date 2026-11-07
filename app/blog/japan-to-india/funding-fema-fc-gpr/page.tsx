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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/funding-fema-fc-gpr"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "yen-to-rupees", label: "From yen to rupee shares" },
  { id: "clocks", label: "The three FEMA clocks" },
  { id: "instruments", label: "Equity, convertibles or a parent loan" },
  { id: "ringi", label: "Sizing the capital for the ringi" },
  { id: "japan-side", label: "Filings on the Japanese side" },
  { id: "slips", label: "Where Japanese parents slip" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a Japanese parent remit in yen?", a: "Yes. The parent can send yen or US dollars. The Indian authorised dealer bank converts the money into rupees on arrival and issues a foreign inward remittance certificate (FIRC), which supports the later RBI filing." },
  { q: "When must the Indian company allot shares to the Japanese parent?", a: "Within 60 days of the money reaching the Indian bank account. If shares are not allotted in time, the amount has to be returned to the parent within the following 15 days unless the RBI allows otherwise." },
  { q: "What is Form FC-GPR?", a: "FC-GPR is the RBI report of shares issued to a foreign investor. The Indian company files it on the FIRMS portal within 30 days of allotment, with a valuation certificate and a Company Secretary's certificate." },
  { q: "Does the exchange rate affect the number of shares?", a: "Yes. Shares are priced in rupees, so the number allotted depends on the rupee amount actually credited after conversion. Fix the share count after the FIRC arrives, not from the yen amount sent." },
  { q: "Does Press Note 3 apply to a Japanese investor?", a: "No. Press Note 3 covers investors from countries that share a land border with India. A Japanese company uses the Automatic Route in most sectors, unless a beneficial owner in its chain is from a land-border country." },
  { q: "Can the Japanese parent lend instead of investing equity?", a: "Yes, through an external commercial borrowing that meets the RBI's conditions on the lender, average maturity, cost and end use. The interest is subject to Indian Withholding Tax (10% under the India-Japan treaty) and transfer pricing." },
  { q: "Is there a Japanese filing for the investment?", a: "Japan's Foreign Exchange and Foreign Trade Act can require a report on an outward direct investment. The parent's Japanese adviser confirms whether one is due and the deadline." },
  { q: "What does a late FC-GPR cost?", a: "A Late Submission Fee of ₹7,500 plus 0.025% of the amount involved for each year of delay, for delays of up to three years. Longer or more complex cases go to compounding with the RBI." },
  { q: "How much capital do Japanese subsidiaries usually start with?", a: "There is no legal minimum. Japanese groups usually fund 12 to 18 months of planned costs, so the subsidiary can hire and operate without coming back to Japan for a second approval too soon." },
  { q: "What is the FLA return?", a: "An annual return of foreign liabilities and assets that every Indian company with foreign investment files with the RBI by 15 July." },
]

const relatedCards = [
  { title: "Share Valuation for Foreign Investment", desc: "Who certifies the price of shares issued to a Japanese parent, and when a fresh valuation is needed.", href: "/japan-to-india/share-valuation" },
  { title: "Repatriating Profits to Japan", desc: "Dividends, fees, royalties and loan repayments, with the 10% treaty rate and the paperwork.", href: "/japan-to-india/repatriating-profits" },
  { title: "Incorporation Process from Japan", desc: "The steps and documents to incorporate a Japanese-owned subsidiary in India.", href: "/japan-to-india/incorporation-process" },
  { title: "Japan Parent Obligations", desc: "Japanese-side reporting, tax and consolidation for a parent with an Indian subsidiary.", href: "/japan-to-india/japan-parent-obligations" },
]

export default function FundingFemaFcGprPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Funding the Indian Subsidiary: FEMA Rules, Share Allotment and Form FC-GPR"
        description="How a Japanese parent capitalises an Indian subsidiary: yen remittance, rupee pricing, the 60-day allotment rule, FC-GPR on FIRMS, ECB loans and the Japanese-side report."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "Funding an Indian Subsidiary: FEMA and Form FC-GPR" },
        ]}
      />

      <GuideHero
        eyebrow="Fund: capital infusion"
        title="Funding the Indian Subsidiary: FEMA Rules, Share Allotment and Form FC-GPR"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Japanese parent usually capitalises its Indian subsidiary with equity shares paid in yen or US
          dollars. Once the rupees land, the company has 60 days to allot the shares at no less than fair
          value and a further 30 days to report the issue to the Reserve Bank of India in Form FC-GPR. Press
          Note 3 does not apply to Japan, so most sectors need no prior approval.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="funding-fema-fc-gpr" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Currency sent", "Yen or US dollars; converted to rupees by the Indian bank, which issues the FIRC"],
                ["Route for a Japanese investor", "Automatic Route in most sectors; Press Note 3 does not apply"],
                ["Usual instrument", "Equity shares; compulsorily convertible preference shares or debentures where staged funding is needed"],
                ["Price floor", "Fair value certified by a Chartered Accountant or SEBI-registered merchant banker"],
                ["Allotment window", "60 days from receipt, or refund within the next 15 days"],
                ["RBI report", "FC-GPR on the FIRMS portal within 30 days of allotment"],
                ["Late reporting", "₹7,500 plus 0.025% of the amount per year of delay (up to three years), otherwise compounding"],
                ["Annual RBI return", "Foreign liabilities and assets (FLA) return by 15 July"],
                ["Japanese side", "Possible report under the Foreign Exchange and Foreign Trade Act; confirm with the parent's adviser"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="yen-to-rupees" className="text-2xl font-bold text-gray-900 mt-12 mb-4">From yen to rupee shares</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The money moves only after the subsidiary exists and its Indian bank account is open. Head office
          treasury sends the subscription amount from the parent&apos;s own account, quoting the Indian
          company&apos;s name and account exactly as the bank holds them. The Indian bank converts the yen or
          dollars at its rate on the day, credits rupees, and issues the FIRC with a KYC report on the remitter.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Because the share price is fixed in rupees, the number of shares cannot be calculated until the rupee
          credit is known. Agree the price per share in advance, then let the final count follow the FIRC. A
          small cushion in the amount sent avoids a shortfall if the yen weakens between approval and payment.
        </p>

        <h2 id="clocks" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The three FEMA clocks</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Clock</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Starts</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Report the money received on FIRMS", "Date the rupees are credited", "30 days"],
                ["Allot the shares", "Date the rupees are credited", "60 days, else refund within 15 more days"],
                ["File FC-GPR", "Date of allotment", "30 days"],
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
        <p className="text-gray-600 leading-relaxed mb-10">
          FC-GPR goes in through the Single Master Form on the RBI&apos;s FIRMS portal. It needs the FIRC and
          KYC report, the valuation certificate and a Company Secretary&apos;s certificate. The authorised dealer
          bank checks the form before the RBI acknowledges it, so the remitter name and amount must match the
          bank&apos;s records exactly.
        </p>

        <h2 id="instruments" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Equity, convertibles or a parent loan</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Equity shares</strong> suit almost every first round. They carry no repayment date, are the
          simplest to report, and leave room for dividends later.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Compulsorily convertible preference shares or debentures</strong> help when funding is
          released in tranches against milestones. The conversion price or formula must be fixed when they are
          issued and cannot fall below the fair value at that time.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          <strong>A loan from the Japanese parent</strong> is an external commercial borrowing. It must meet
          the RBI&apos;s rules on the lender, average maturity, cost ceiling and end use, and be reported through
          the bank. Interest paid to Japan bears Indian Withholding Tax, capped at 10% by the India-Japan treaty,
          and India limits interest deductions on related-party debt to 30% of EBITDA.
        </p>

        <h2 id="ringi" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sizing the capital for the ringi</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Japanese groups usually approve overseas capital through a ringi, which takes time to reopen. It is
          therefore worth asking for enough in the first round to cover 12 to 18 months of salaries, rent,
          set-up costs and working capital. There is no statutory minimum for a private limited company, but a
          thin first round often forces a second approval and a second FC-GPR within months.
        </p>

        <h2 id="japan-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Filings on the Japanese side</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The parent&apos;s board or authorised officer approves the investment, and the approval is recorded for the Indian valuation and allotment file.</li>
          <li>A report on the outward direct investment may be due under the Foreign Exchange and Foreign Trade Act; the parent&apos;s adviser confirms the requirement.</li>
          <li>The investment is recorded in the parent&apos;s J-GAAP or IFRS accounts at the yen cost, which will differ from the rupee share value as the exchange rate moves.</li>
        </ul>

        <h2 id="slips" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where Japanese parents slip</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Remitting from a group treasury company instead of the shareholder named in the incorporation documents.</li>
          <li>Fixing the share count from the yen amount, then finding the rupee credit falls short of the subscription.</li>
          <li>Letting the 60-day allotment window run past a Japanese holiday period such as Golden Week or Obon.</li>
          <li>Issuing shares on a valuation certificate that is out of date.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We prepare the remittance instructions for head office, arrange the valuation, draft the board
          approvals and allotment, and file the FIRMS reports and FC-GPR within the deadlines. We also provide
          the figures the parent needs for its Japanese filings and accounts.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link>{" "}
          and{" "}
          <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the current rules at the{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://dpiit.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">DPIIT</a>{" "}
          and the{" "}
          <a href="https://www.mof.go.jp/english/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Finance, Japan</a>.
        </p>

        <GuideServiceBox path="/japan-to-india/funding-fema-fc-gpr" />
        <GuideCTA
          title="Sending the first capital from Japan?"
          description="Tell us the amount and timing, and we will plan the remittance, allotment and RBI filings."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/japan-to-india/faq"
          seeAllLabel="See all Japan FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Japanese parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Reserve Bank of India (FEMA and FIRMS)", href: "https://www.rbi.org.in" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Ministry of Finance, Japan: Foreign Exchange and Foreign Trade Act", href: "https://www.mof.go.jp/english/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Capitalising an Indian Subsidiary from Japan?"
        description="Tell us the investment amount and structure, and we'll map the valuation, the FC-GPR filing and the FEMA reporting timeline."
      />
    </main>
  )
}
