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
        dateModified="2026-11-02"
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
        updated="2 November 2026"
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
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
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
