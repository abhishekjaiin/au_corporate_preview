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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/repatriating-profits"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "routes", label: "Routes and treaty rates" },
  { id: "payment", label: "The payment route comes first" },
  { id: "documents", label: "Documents for the treaty rate" },
  { id: "dividend", label: "Paying a dividend" },
  { id: "russian-tax", label: "How Russia taxes what arrives" },
  { id: "route-choice", label: "Choosing a repatriation route: dividend, buy-back or fees" },
  { id: "remittance-forms", label: "The repatriation paperwork: Forms 145 and 146" },
  { id: "blocked-route", label: "If the repatriation route fails after a dividend is declared" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the Indian tax on dividends to Russia?", a: "10% under the India-Russia treaty, with a Russian tax residency certificate and Form 41." },
  { q: "What rate applies to royalties and technical fees?", a: "10% under the treaty." },
  { q: "What is the domestic rate without the treaty?", a: "About 20% plus surcharge and cess on dividends." },
  { q: "Why plan the payment route before declaring a dividend?", a: "Because the receiving bank and currency must pass the Indian bank's sanctions screening." },
  { q: "Who issues the Russian residency certificate?", a: "The Russian Federal Tax Service." },
  { q: "Can a new subsidiary pay dividends?", a: "Only from audited distributable profits." },
  { q: "How does Russia tax foreign dividends?", a: "Possibly at 0% for qualifying holdings, subject to conditions; confirm with a Russian adviser." },
  { q: "When is the Indian tax deposited?", a: "By the 7th of the following month." },
  { q: "Is a share buy-back still a tax-efficient way to repatriate cash to Russia?", a: "Less than before. Since 1 October 2024 the buy-back amount is taxed as a dividend in the shareholder's hands, so it is taxed much like a dividend under the treaty." },
  { q: "What are Forms 145 and 146?", a: "The online declaration of a payment abroad and the Chartered Accountant's certificate behind it, previously Forms 15CA and 15CB." },
  { q: "What happens if a declared dividend cannot be paid to Russia?", a: "It must be paid within 30 days; any unpaid amount goes to an unpaid dividend account, so confirm the payment route before declaring it." },
  { q: "How long does repatriation to Russia take?", a: "Allow several weeks: the treaty documents, Forms 145 and 146, and the bank's review of the route all come before the money leaves. Repatriation is faster when the route is agreed in advance and used regularly." },
]

const relatedCards = [
  { title: "Sanctions and Payments", desc: "Banking and settlement channels.", href: "/russia-to-india/sanctions-and-payments-for-russian-companies" },
  { title: "India-Russia DTAA", desc: "The treaty rates.", href: "/russia-to-india/india-russia-dtaa" },
  { title: "Transfer Pricing", desc: "Pricing fees and royalties.", href: "/russia-to-india/transfer-pricing" },
  { title: "Russian Parent Obligations", desc: "Russian tax on receipts.", href: "/russia-to-india/russian-parent-obligations" },
]

export default function RepatriatingProfitsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Getting Money Out of India to a Russian Parent: Dividends at 10%, Service Fees, Royalties, Interest and Loan Repayments"
        description="How a Russian parent receives money from an Indian subsidiary: 10% treaty withholding, Section 393, Forms 41, 145 and 146, Russian tax treatment, payment routes acceptable to banks and the documents banks ask for."
        datePublished="2026-10-26"
        dateModified="2026-11-13"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Repatriating Profits from India to Russia: Dividends, Fees, Royalties and Loans" },
        ]}
      />

      <GuideHero
        eyebrow="Money out: repatriation"
        title="Getting Money Out of India to a Russian Parent: Dividends at 10%, Service Fees, Royalties, Interest and Loan Repayments"
        updated="13 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Money returns to a Russian parent as dividends, fees, royalties, interest or loan repayments, with Indian tax capped at 10% under the India-Russia treaty for dividends, interest, royalties and technical fees. The tax is the easy part. The difficult part is the payment: the receiving bank and currency must pass the Indian bank&apos;s sanctions screening, so agree the route before declaring a dividend or invoicing a fee.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="repatriating-profits" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Dividends", "10% under the treaty; beneficial owner must be taxable in Russia"],
                ["Interest", "10%; 0% for certain government and central bank lenders"],
                ["Royalties and technical fees", "10%"],
                ["Domestic rate without treaty", "About 20% plus surcharge and cess on dividends"],
                ["Treaty documents", "Russian tax residency certificate, Form 41 and a no-PE declaration"],
                ["Payment", "Receiving bank and currency must pass the Indian bank's screening"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Routes and treaty rates</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian tax</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividend</th>
                <td className="border border-gray-300 p-3">10%</td>
                <td className="border border-gray-300 p-3">From audited distributable profits</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Service fee</th>
                <td className="border border-gray-300 p-3">10% if technical; nil if business profit without a PE</td>
                <td className="border border-gray-300 p-3">Evidence of services and GST reverse charge</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Royalty</th>
                <td className="border border-gray-300 p-3">10%</td>
                <td className="border border-gray-300 p-3">Licence agreement and benchmarked rate</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Interest</th>
                <td className="border border-gray-300 p-3">10%</td>
                <td className="border border-gray-300 p-3">ECB rules and the 30% of EBITDA interest cap</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Loan principal</th>
                <td className="border border-gray-300 p-3">None</td>
                <td className="border border-gray-300 p-3">Follows the ECB schedule</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="payment" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The payment route comes first</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Before the board approves a dividend or the parent issues an invoice, confirm with the Indian bank that it will pay to the intended Russian bank, in the intended currency, through the intended correspondent. If the route fails after the dividend is declared, the company holds a liability it cannot settle. Specialist sanctions advice is part of planning any regular flow to Russia.
        </p>
        <h2 id="documents" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documents for the treaty rate</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>A tax residency certificate from the Russian Federal Tax Service for the year of payment.</li>
          <li>Form 41 (previously Form 10F).</li>
          <li>A beneficial ownership and no-PE declaration.</li>
          <li>The agreement or board resolution behind the payment.</li>
          <li>Forms 145 and 146 for the remittance.</li>
        </ol>
        <h2 id="dividend" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Paying a dividend</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Dividends need audited accounts and distributable profits, a board recommendation and shareholder approval. The Indian company deducts 10% under the treaty if the documents are on file, deposits it by the 7th of the next month and remits the balance through the agreed route.
        </p>
        <h2 id="russian-tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Russia taxes what arrives</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Foreign dividends can be taxed at 0% in Russia for qualifying holdings, generally 50% held for 365 days, subject to conditions; other income is taxed with credit for the Indian tax. Russian currency control rules on receiving funds also apply. Confirm the position with a Russian adviser.
        </p>
        <h2 id="route-choice" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing a repatriation route: dividend, buy-back or fees</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Profit repatriation to Russia can take several legal forms. The right one depends on how much cash is surplus, whether the Indian company has distributable profits, and how the Russian parent is taxed on each type of receipt.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Route</th><th scope="col" className="border border-gray-300 p-3 text-left">How it works</th><th scope="col" className="border border-gray-300 p-3 text-left">Indian tax position</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividend</th><td className="border border-gray-300 p-3">Paid from audited distributable profits after the AGM, or as an interim dividend by the board</td><td className="border border-gray-300 p-3">10% under the DTAA with the treaty documents; about 20% plus surcharge and cess without them</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Share buy-back</th><td className="border border-gray-300 p-3">The Indian company buys back part of the parent&apos;s shares, within Companies Act limits and FEMA pricing rules</td><td className="border border-gray-300 p-3">Since 1 October 2024 the buy-back amount is taxed as a dividend in the parent&apos;s hands, so the 10% treaty rate is the usual reference; the cost of the shares becomes a capital loss</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Capital reduction</th><td className="border border-gray-300 p-3">Court or tribunal-approved reduction of share capital, returning surplus cash</td><td className="border border-gray-300 p-3">Treated as a dividend to the extent of accumulated profits; the rest reduces the cost of the shares</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Service fees and royalties</th><td className="border border-gray-300 p-3">Paid during the year for real services or a licence, under a signed agreement</td><td className="border border-gray-300 p-3">10% on technical fees and royalties under the DTAA; deductible for the Indian company if priced at arm&apos;s length</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Loan repayment</th><td className="border border-gray-300 p-3">Repays principal and interest under an external commercial borrowing</td><td className="border border-gray-300 p-3">No tax on principal; 10% on interest under the DTAA</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          For most Russian parents a regular dividend is the simplest repatriation route. A buy-back used to be attractive because the tax fell on the company; since the 2024 change it no longer has that advantage, but it remains useful where a group wants to return capital rather than profit. See <Link href="/russia-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing between India and Russia</Link> before using fees or royalties as a repatriation channel.
        </p>

        <h2 id="remittance-forms" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The repatriation paperwork: Forms 145 and 146</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Every repatriation payment to the Russian parent is reported before the money leaves India. Form 145 (previously Form 15CA) is the payer&apos;s online declaration of the payment and the tax withheld. Form 146 (previously Form 15CB) is a Chartered Accountant&apos;s certificate confirming the nature of the payment, the DTAA article relied on and the rate applied. The Indian bank will not release the remittance without them, so we prepare both once the treaty documents are on file.
        </p>

        <h2 id="blocked-route" className="text-2xl font-bold text-gray-900 mt-12 mb-4">If the repatriation route fails after a dividend is declared</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Under the Companies Act, a declared dividend must be paid within 30 days. Any amount still unpaid is moved to a separate unpaid dividend account within the next seven days, and directors can face penalties for a failure to pay that is not covered by one of the Act&apos;s limited exceptions. For a Russian shareholder whose bank route is uncertain, that creates a real risk.
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Confirm the receiving bank, currency and correspondent with the Indian bank in writing before the board meeting.</li>
          <li>Declare the dividend only once the route is confirmed, or declare a smaller amount that can be paid at once.</li>
          <li>If a route fails after declaration, record why in the board minutes, move the amount to the unpaid dividend account on time and take legal advice on the exceptions.</li>
          <li>Hold surplus cash in India in fixed deposits or use it for the Indian business until a repatriation route is available; retained profits are not taxed again.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          Repatriation planning for Russian groups is mostly about sequence: route first, then the board decision, then the treaty documents, then the payment. Our <Link href="/russia-to-india/sanctions-and-payments-for-russian-companies" className="text-blue-800 font-semibold hover:underline">sanctions and payments guide</Link> explains how Indian banks screen these payments.
        </p>


        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We check the treaty rate, prepare the documents and remittance forms, and work with the Indian bank and your sanctions advisers on a payment route that will clear.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link> and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>.
        </p>

        <GuideServiceBox path="/russia-to-india/repatriating-profits" />
        <GuideCTA
          title="Sending money from India to Russia?"
          description="Tell us the payment type and receiving bank, and we will map the route and tax."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/russia-to-india/faq"
          seeAllLabel="See all Russian FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Russian parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Federal Tax Service of Russia", href: "https://www.nalog.gov.ru/eng/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Sending Profits Back to Russia?"
        description="Tell us the dividend, fee, royalty or interest you plan to pay, and we'll map the treaty rate, the residence certificate and the remittance route."
      />
    </main>
  )
}
