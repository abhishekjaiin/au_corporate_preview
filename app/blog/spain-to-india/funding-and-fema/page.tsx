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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/funding-and-fema"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "equity", label: "Equity: the normal route" },
  { id: "instruments", label: "Which instruments are available" },
  { id: "deadlines", label: "The deadlines that cannot slip" },
  { id: "pricing", label: "The pricing rule in both directions" },
  { id: "loans", label: "Loans from the Spanish group" },
  { id: "spain", label: "Matching the Spanish declarations" },
  { id: "mistakes", label: "Common funding mistakes" },
  { id: "amount", label: "How much to send and when" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How should a Spanish parent fund an Indian subsidiary?", a: "Usually with equity shares under the Automatic Route, issued at or above fair value, with the money sent through an authorised dealer bank." },
  { q: "By when must shares be allotted after the money arrives?", a: "Within 60 days. After that the money may have to be refunded or regularised." },
  { q: "What is Form FC-GPR?", a: "The filing that reports the allotment of shares to a foreign investor, due within 30 days of allotment." },
  { q: "What is Form FC-TRS?", a: "The filing for a transfer of shares between a resident and a non-resident, due within 60 days." },
  { q: "What is the pricing rule?", a: "A non-resident cannot buy or subscribe below fair value, and cannot sell above it. Fair value is supported by a valuation." },
  { q: "Can the parent lend instead of investing?", a: "Yes, under the external commercial borrowing rules, with limits on lender, cost, maturity and use. Interest bears 15% withholding under the treaty." },
  { q: "Are convertible instruments equity?", a: "Only if fully and mandatorily convertible. Optionally convertible or redeemable instruments are treated as debt." },
  { q: "What is the FLA return?", a: "An annual return of foreign liabilities and assets to the Reserve Bank, due by 15 July." },
  { q: "Does Spain need to be told?", a: "Yes. A Spanish investor declares an acquisition of 10% or more within one month on form D-5A, and intra-group loans above EUR 1 million over a year." },
  { q: "What if the filing is late?", a: "A late submission fee applies and, for larger delays, compounding with the Reserve Bank. Avoid it by diarising each date." },
]

const relatedCards = [
  { title: "What a Spanish Parent Must Do at Home: Registro de Inversiones Exteriores Filings, Participation Exemption, CFC Rules and Corporate Records", desc: "The Spanish-side steps for a parent investing in India: declarations to the Registro de Inversiones Exteriores (forms D-5A and D-8), board and notarial formalities, the participation exemption, CFC rules, related-party documentation and the beneficial ownership register.", href: "/spain-to-india/spanish-parent-obligations" },
  { title: "Taking Money Out of India to Spain: Dividend, Management Fee, Royalty, Interest and Capital Reduction Routes Compared, with the Treaty Rate and Spanish Relief", desc: "A comparison of the five routes a Spanish parent can use to take cash from an Indian subsidiary, with the Indian withholding tax, Indian conditions, Spanish tax treatment, documents, timing and the traps in each route.", href: "/spain-to-india/repatriating-profits" },
  { title: "Exiting an Indian Subsidiary: Sale of Shares, Buyback, Voluntary Liquidation, Strike-Off and Merger, with the 10% Treaty Rule, FEMA Pricing and Spanish Declarations", desc: "How a Spanish parent can sell, wind up or restructure an Indian subsidiary: the tax on share gains under the India-Spain treaty, FEMA pricing, buyback and capital reduction, liquidation and strike-off, mergers and conversions, repatriating the proceeds and the Spanish filings that close the loop.", href: "/spain-to-india/exit-and-restructuring" },
  { title: "Step-by-Step Incorporation of an Indian Private Limited Company by a Spanish Parent: From Name Approval to the Foreign Investment Filing", desc: "The exact steps to incorporate an Indian private limited company when the shareholder is Spanish: name, DIN and DSC, the SPICe+ form with AGILE-PRO-S, charter documents, PAN and TAN, bank account, share allotment, FC-GPR, first auditor and commencement of business.", href: "/spain-to-india/incorporation-steps" },
]

export default function FundingAndFemaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Funding an Indian Subsidiary from Spain: Share Capital, Shareholder Loans, Fair Value Pricing Rules, FC-GPR, FC-TRS and the Annual FLA Return"
        description="How a Spanish parent can put money into an Indian company: equity under the Automatic Route, convertible instruments, external commercial borrowing, intra-group financing, the FEMA pricing rule, the 60-day and 30-day deadlines, the FLA return and the Spanish declarations that match."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "Funding an Indian Subsidiary from Spain: Equity, Loans, FEMA Pricing and Filings" },
        ]}
      />

      <GuideHero
        eyebrow="Money: funding and FEMA"
        title="Funding an Indian Subsidiary from Spain: Share Capital, Shareholder Loans, Fair Value Pricing Rules, FC-GPR, FC-TRS and the Annual FLA Return"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Spanish parent normally funds an Indian subsidiary with equity, because equity is the simplest route
          under the Foreign Exchange Management Act. The shares must be issued at or above fair value, allotted
          within 60 days of receiving the money and reported on Form FC-GPR within 30 days of allotment. A later
          transfer of shares between a resident and a non-resident is reported on FC-TRS within 60 days, and the
          company files the Foreign Liabilities and Assets return by 15 July each year. Loans are possible but
          carry rules on the lender, the cost, the minimum maturity and the use of funds, so they are harder
          than equity. On the Spanish side, an investment of 10% or more and an intra-group loan above EUR 1
          million over a year are declared to the Registro de Inversiones Exteriores. A late or wrong filing is
          easy to avoid and expensive to correct.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="funding-fema-fc-gpr" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Equity", "Shares issued at or above fair value under the Automatic Route in permitted sectors"],
                ["Allotment deadline", "Within 60 days of receiving the money; otherwise refund rules apply"],
                ["FC-GPR", "Within 30 days of allotment"],
                ["FC-TRS", "Within 60 days of a transfer between resident and non-resident"],
                ["Annual return", "Foreign Liabilities and Assets return by 15 July"],
                ["Pricing rule", "Issue to a non-resident at or above fair value; sale by a non-resident at or below fair value; purchase from a non-resident not above it"],
                ["Loans", "External commercial borrowing rules on lender, cost, maturity and end use"],
                ["Spanish declarations", "Form D-5A within one month for 10% or more; intra-group loans above EUR 1 million and over one year"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="equity" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Equity: the normal route</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Under the FDI Policy and the Non-Debt Instruments Rules, a non-resident may subscribe to equity shares
          of an Indian company in a sector under the Automatic Route without prior permission, provided the
          pricing and reporting rules are followed. Funds come through an authorised dealer bank from the
          Spanish parent&apos;s account, with the purpose stated as capital contribution. The bank issues a
          foreign inward remittance certificate and a know-your-customer report on the remitter, and the company
          needs both to file FC-GPR.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Pricing is the key legal point. A new issue to a non-resident cannot be below fair value, which for an
          unlisted company is determined by a valuation from a Chartered Accountant or merchant banker under
          internationally accepted methods. At incorporation, shares are usually issued at face value, because
          the face value is the fair value of a company with no history. For a later round the valuation is
          needed before the board resolves to issue.
        </p>

        <h2 id="instruments" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Which instruments are available</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Instrument</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treatment</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes for a Spanish parent</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Equity shares", "Capital account; Automatic Route in most sectors", "Simplest; no repayment; dividend tax of 15% under the treaty"],
                ["Compulsorily convertible preference shares and debentures", "Treated as equity if fully and mandatorily convertible", "Pricing set at issue; conversion formula must comply with the pricing rule"],
                ["Optionally convertible or redeemable instruments", "Treated as debt", "Fall under external commercial borrowing rules"],
                ["Shareholder loan", "External commercial borrowing", "Eligible lender, minimum average maturity, cost ceiling and end-use limits; loan registration number"],
                ["Trade credit", "Import payables with limits on amount and tenor", "Suits supplies of equipment and materials from Spain"],
                ["Guarantees", "Subject to FEMA rules on guarantees", "Check before a Spanish bank gives a guarantee for an Indian borrowing"],
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

        <h2 id="deadlines" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The deadlines that cannot slip</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Event</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Deadline</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Form or action</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Who acts</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Receive the money from Spain", "Allot within 60 days", "Board resolution and allotment", "Company"],
                ["Allot shares", "File within 30 days of allotment", "FC-GPR on the Reserve Bank portal", "Company with a Chartered Accountant certificate"],
                ["Transfer of shares between resident and non-resident", "Within 60 days of the transfer or receipt of the money, whichever is earlier", "FC-TRS", "Resident party or its bank"],
                ["Each financial year", "By 15 July", "Foreign Liabilities and Assets return", "Company"],
                ["Loan drawn", "As per ECB process", "Loan registration number and monthly returns", "Company and bank"],
                ["Spanish investment", "Within one month", "D-5A declaration in Spain", "Spanish parent"],
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

        <h2 id="pricing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The pricing rule in both directions</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The pricing rule works in opposite directions depending on who is buying. When a non-resident buys or
          subscribes for shares, the price must not be below fair value. When a non-resident sells to a
          resident, the price must not be above fair value. In other words, the foreign investor cannot bring
          money in cheaply or take it out expensively. The rule is why valuations are needed for new issues, for
          transfers within the group and for exits. Where the parties want a different price, for example an
          earn-out or a deferred payment, the structure should be agreed with the authorised dealer bank in
          advance. See{" "}
          <Link href="/spain-to-india/exit-and-restructuring" className="text-blue-800 font-semibold hover:underline">exit and restructuring</Link>.
        </p>

        <h2 id="loans" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Loans from the Spanish group</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A Spanish company can lend to its Indian subsidiary under the external commercial borrowing framework,
          but the loan must come from an eligible lender, meet a minimum average maturity, stay within the
          all-in cost ceiling and be used for permitted purposes. The loan is registered with the Reserve Bank,
          interest is subject to Indian withholding tax at the treaty rate of 15%, and each repayment needs the
          right documents. Interest is deductible in India only within limits set by the interest limitation
          rule and by transfer pricing. Loans therefore suit bridging needs, not permanent funding, and many
          groups use convertible preference shares instead. On the Spanish side, a loan above EUR 1 million with
          a term over a year is declared.
        </p>

        <h2 id="spain" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Matching the Spanish declarations</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The Spanish parent declares the acquisition of 10% or more of the Indian company to the Registro de
          Inversiones Exteriores within one month, through form D-5A, and later reports the annual position on
          form D-8 where the thresholds apply. The dates and amounts in the Spanish declaration should agree
          with the Indian FC-GPR filing, because the two will be read together if either authority asks a
          question. See{" "}
          <Link href="/spain-to-india/spanish-parent-obligations" className="text-blue-800 font-semibold hover:underline">Spanish parent obligations</Link>.
        </p>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common funding mistakes</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Remitting before the bank account has the right purpose code.</li>
          <li>Allotting after 60 days because the board did not meet.</li>
          <li>Issuing shares below fair value in a later round without a valuation.</li>
          <li>Using an optionally convertible instrument and discovering that it is debt.</li>
          <li>Paying a founder or employee in shares of the parent without Indian reporting. See <Link href="/spain-to-india/hiring-in-india" className="text-blue-800 font-semibold hover:underline">hiring in India</Link>.</li>
          <li>Filing FC-GPR without the bank&apos;s inward remittance certificate.</li>
        </ul>

        <h2 id="amount" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How much to send and when</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Send enough to cover the first period in one remittance if you can, because each remittance generates
          its own paperwork and exchange-rate risk. If you phase the funding, plan the tranches against the cash
          plan and make each one a separate allotment with its own 60-day clock. ₹10 lakh is about EUR 9,400 at
          an indicative ₹106 per euro (2 November 2026 market rate; check the live rate before remitting). See{" "}
          <Link href="/spain-to-india/cost-of-setting-up-a-subsidiary-in-india-from-spain" className="text-blue-800 font-semibold hover:underline">the cost guide</Link>.
        </p>

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

        <GuideServiceBox path="/spain-to-india/funding-and-fema" />
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
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
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
        title="Funding an Indian Subsidiary from Spain?"
        description="Tell us the amount and whether it is equity or a loan, and we'll map the valuation, FC-GPR or ECB filing and the timeline."
      />
    </main>
  )
}
