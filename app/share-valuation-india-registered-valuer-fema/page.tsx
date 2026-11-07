import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideFaqList } from "@/components/guide/GuideFaqList"
import { GuideRelatedCards } from "@/components/guide/GuideRelatedCards"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideSources } from "@/components/guide/GuideSources"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/share-valuation-india-registered-valuer-fema"

const toc = [
  { id: "three-regimes", label: "Three sets of valuation rules" },
  { id: "when", label: "Transactions that need a valuation" },
  { id: "methods", label: "Valuation methods" },
  { id: "registered-valuer", label: "What a registered valuer's report covers" },
  { id: "timing", label: "How recent the valuation must be" },
  { id: "mistakes", label: "Common valuation mistakes" },
  { id: "fema-detail", label: "FEMA pricing in more detail" },
  { id: "tax-detail", label: "Income tax points on share transfers" },
  { id: "process", label: "How a valuation engagement runs" },
  { id: "information", label: "Information the valuer will ask for" },
  { id: "example", label: "A worked example" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Who can value shares issued to a foreign investor?", a: "A Chartered Accountant, a SEBI-registered merchant banker or a practising cost accountant, under the FEMA pricing guidelines." },
  { q: "When is a registered valuer needed?", a: "For transactions where the Companies Act or its rules require a valuation, such as preferential allotments by unlisted companies and sweat equity." },
  { q: "Is angel tax still applicable?", a: "No. It was abolished from the 2024-25 financial year, but other income tax rules on shares below fair market value still apply." },
  { q: "Which method is used for FEMA valuation?", a: "An internationally accepted pricing method, most often discounted cash flow." },
  { q: "Does a share transfer between group companies need a valuation?", a: "Yes, for FEMA pricing and income tax purposes, even within the group." },
  { q: "How long does a FEMA certificate take?", a: "Usually one to two weeks once the accounts, plan and capital details are complete." },
  { q: "Can the parent subscribe at face value after incorporation?", a: "Only if face value is not below fair value; once the company has grown, the certified fair value usually exceeds face value." },
]

const relatedCards = [
  { title: "Funding instruments", desc: "CCDs, CCPS and convertible notes.", href: "/funding-instruments-india-ccd-ccps-convertible-notes" },
  { title: "ESOPs in India", desc: "Plans for foreign-owned companies.", href: "/esop-india-foreign-owned-companies" },
  { title: "FEMA and RBI compliance", desc: "FC-GPR, FC-TRS and FLA.", href: "/fema-rbi-compliance" },
]

export default function ShareValuationIndiaRegisteredValuerFemaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"Share Valuation in India for Foreign-Owned Companies: Registered Valuer Reports, FEMA Pricing and Income Tax"}
        description={"When an Indian company needs a share valuation, who may sign it and which rules apply: FEMA pricing, Companies Act registered valuer reports and income tax."}
        datePublished="2026-11-07"
        dateModified="2026-11-07"
        inLanguage="en"
      />

      <Breadcrumb items={[{ label: "Share Valuation in India" }]} />

      <GuideHero eyebrow={"Guide: share valuation"} title={"Share Valuation in India for Foreign-Owned Companies: Registered Valuer Reports, FEMA Pricing and Income Tax"} updated="7 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Indian company owned by a foreign parent may need a share valuation under three separate sets of rules. FEMA requires shares issued to a non-resident to be priced at no less than fair value, certified by a Chartered Accountant, a SEBI-registered merchant banker or a practising cost accountant. The Companies Act requires a registered valuer&apos;s report for some transactions, such as a preferential allotment by an unlisted company. Income tax rules set how fair market value is computed for tax on shares issued or transferred below that value. One transaction can trigger all three, so the valuation report should be prepared with each set of rules in mind.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="three-regimes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Three sets of valuation rules</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Rule</th><th scope="col" className="border border-gray-300 p-3 text-left">When it applies</th><th scope="col" className="border border-gray-300 p-3 text-left">Who may value</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">FEMA pricing guidelines</th><td className="border border-gray-300 p-3">Issue of shares to, or transfer between, residents and non-residents</td><td className="border border-gray-300 p-3">Chartered Accountant, SEBI-registered merchant banker or practising cost accountant</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Companies Act, 2013</th><td className="border border-gray-300 p-3">Preferential allotments and private placements by unlisted companies, sweat equity, and other transactions where the Act or its rules require a valuation</td><td className="border border-gray-300 p-3">Registered valuer registered with the Insolvency and Bankruptcy Board of India</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Income tax (Rule 11UA)</th><td className="border border-gray-300 p-3">Shares received or transferred at less than fair market value, including transfers by the foreign parent</td><td className="border border-gray-300 p-3">As prescribed for the method used; a merchant banker for some methods</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          The angel tax on share premiums received by unlisted companies was abolished from the 2024-25 financial year, but the income tax rules on shares acquired or transferred below fair market value still apply.
        </p>

        <h2 id="when" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Transactions that need a valuation</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Further share issues</strong> to the foreign parent after incorporation; shares at incorporation are usually issued at face value.</li>
          <li><strong>Conversion</strong> of compulsorily convertible preference shares or debentures, where the formula must be fixed at issue.</li>
          <li><strong>Transfers</strong> of shares between the parent and another shareholder, including a resident buyer on exit.</li>
          <li><strong>Buy-backs</strong> and capital reductions.</li>
          <li><strong>Mergers and demergers</strong>, where a valuation supports the share exchange ratio.</li>
          <li><strong>ESOPs</strong>, where the fair market value of unlisted shares is needed for employee tax on exercise.</li>
          <li><strong>Sweat equity</strong> issues.</li>
        </ul>

        <h2 id="methods" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Valuation methods</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Method</th><th scope="col" className="border border-gray-300 p-3 text-left">Typical use</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Discounted cash flow</th><td className="border border-gray-300 p-3">Operating companies with a business plan; the most common method for FEMA purposes</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Net asset value</th><td className="border border-gray-300 p-3">New companies, holding companies and asset-heavy businesses</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Market multiples</th><td className="border border-gray-300 p-3">Cross-check where listed comparables exist</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Recent transaction price</th><td className="border border-gray-300 p-3">Where an arm&apos;s length transaction with an unrelated investor took place recently</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          FEMA requires an internationally accepted pricing method on an arm&apos;s length basis. Use projections the board has approved, and keep them consistent with the transfer pricing model and the parent&apos;s own accounting valuation, because tax officers compare all three.
        </p>

        <h2 id="registered-valuer" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What a registered valuer&apos;s report covers</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A registered valuer&apos;s report under the Companies Act identifies the valuer and their registration, the purpose and valuation date, the information relied on, the methods considered and chosen, the key assumptions, the conclusion and its limitations. The board and, where required, the shareholders rely on it when approving the transaction, and the Registrar may ask for it. For a foreign-owned company it often sits alongside a separate FEMA pricing certificate for the same issue.
        </p>

        <h2 id="timing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How recent the valuation must be</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A valuation should be dated close to the transaction it supports. Banks processing FC-GPR and FC-TRS, and tax officers reviewing a transfer, routinely question certificates that are months old or based on outdated accounts. Plan the valuation once the commercial terms are agreed and the latest accounts are available, and refresh it if the transaction is delayed.
        </p>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common valuation mistakes</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Using one certificate for FEMA, company law and tax when the rules differ.</li>
          <li>Relying on an old valuation for a later share issue.</li>
          <li>Projections that do not match the transfer pricing model.</li>
          <li>Converting instruments without having fixed the conversion formula at issue.</li>
          <li>Missing the valuation altogether for a transfer at face value between group companies.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          See <Link href="/funding-instruments-india-ccd-ccps-convertible-notes" className="text-blue-800 font-semibold hover:underline">funding instruments: CCDs, CCPS and convertible notes</Link> and <Link href="/esop-india-foreign-owned-companies" className="text-blue-800 font-semibold hover:underline">ESOPs for foreign-owned Indian companies</Link>.
        </p>
        <h2 id="fema-detail" className="text-2xl font-bold text-gray-900 mt-12 mb-4">FEMA pricing in more detail</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Transaction</th><th scope="col" className="border border-gray-300 p-3 text-left">FEMA price rule</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Issue of shares to a non-resident</th><td className="border border-gray-300 p-3">Not less than fair value</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Transfer from a resident to a non-resident</th><td className="border border-gray-300 p-3">Not less than fair value</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Transfer from a non-resident to a resident</th><td className="border border-gray-300 p-3">Not more than fair value</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Conversion of CCPS or CCDs</th><td className="border border-gray-300 p-3">Formula fixed at issue; price not less than fair value at issue</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Shares issued on a rights basis to an existing non-resident shareholder</th><td className="border border-gray-300 p-3">Not less than the price offered to resident shareholders</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          The FEMA certificate is attached to the FC-GPR or FC-TRS filing, and the AD bank checks it before the RBI acknowledges the filing.
        </p>

        <h2 id="tax-detail" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Income tax points on share transfers</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          When a non-resident sells Indian shares, the buyer withholds tax on the capital gain before paying, using the seller&apos;s PAN and treaty documents. A transfer below fair market value can lead to tax for the buyer on the shortfall and to the fair market value being used as the sale price for the seller. Group reorganisations at face value are therefore not tax-neutral unless a specific exemption applies, which is why a valuation is needed even for internal transfers.
        </p>

        <h2 id="process" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How a valuation engagement runs</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Define the transaction, the valuation date and the rules that apply.</li>
          <li>Share the latest audited and management accounts, the business plan and the capital structure.</li>
          <li>The valuer reviews the information, discusses key assumptions with management and selects methods.</li>
          <li>A draft report is reviewed for consistency with transfer pricing and accounting positions.</li>
          <li>The final report or certificate is signed and used for the board approval and filings.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          A typical FEMA valuation for a small company takes about one to two weeks once information is complete.
        </p>
        <h2 id="information" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Information the valuer will ask for</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Audited accounts for the last two or three years and the latest management accounts.</li>
          <li>The board-approved business plan with revenue, cost and capital expenditure projections.</li>
          <li>The current shareholding, including any convertible instruments and options outstanding.</li>
          <li>Material contracts, especially with the foreign parent, and the transfer pricing policy.</li>
          <li>Details of any recent share transactions or offers from unrelated parties.</li>
          <li>Information on debt, contingent liabilities and pending tax or legal disputes.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Projections are the most debated input. Keep a short note explaining the main assumptions, such as growth rates and margins, and how they relate to the group&apos;s budget.
        </p>

        <h2 id="example" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A worked example</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A foreign parent wants to subscribe for further shares in its Indian company, which has net assets of ₹4 crore and a five-year plan showing growing profits. The discounted cash flow method gives an equity value of ₹12 crore, or ₹1,200 per share on 1,00,000 shares. Under FEMA the new shares must be issued at not less than ₹1,200 per share. If the parent instead subscribed at face value of ₹10, the issue would breach the pricing rules, the FC-GPR would be rejected, and the shortfall could be questioned for tax. Issuing at or above the certified figure, with the certificate dated close to the allotment, avoids both problems.
        </p>



        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate identifies which valuation rules apply to each transaction, coordinates the valuation with the appropriate professional, a Chartered Accountant, a SEBI-registered merchant banker or an IBBI registered valuer as the law requires, and handles the related FEMA, company-law and tax filings.
        </p>
        <GuideCTA title={"Need a Valuation for a Share Issue or Transfer?"} description={"Tell us about the transaction and we will confirm which valuations are needed, coordinate them and handle the filings."} />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Insolvency and Bankruptcy Board of India (registered valuers)", href: "https://ibbi.gov.in/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 7 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Need a Valuation for a Share Issue or Transfer?"} description={"Tell us about the transaction and we will confirm which valuations are needed, coordinate them and handle the filings."} />
    </main>
  )
}
