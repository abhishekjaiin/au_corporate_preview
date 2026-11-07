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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/exit-and-restructuring"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "routes", label: "Exit routes" },
  { id: "money", label: "Getting the proceeds to Russia" },
  { id: "buyers", label: "What buyers will check" },
  { id: "tax", label: "Tax on the exit" },
  { id: "close", label: "Closing instead of selling" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Are gains on Indian shares taxed in India for a Russian seller?", a: "Yes. The treaty allows India to tax gains on shares of an Indian company." },
  { q: "What is the long-term rate?", a: "12.5% plus surcharge and cess for unlisted shares held over 24 months." },
  { q: "Which form reports a sale to an Indian buyer?", a: "Form FC-TRS, within 60 days." },
  { q: "Why plan the payment route first?", a: "Because proceeds must pass both banks' sanctions screening." },
  { q: "Will buyers screen the Russian seller?", a: "Yes, along with the company's records and dependencies." },
  { q: "Can the subsidiary be merged into another Indian company?", a: "Yes, through a tribunal scheme or the fast-track route." },
  { q: "How is a dormant company closed?", a: "By strike-off under Section 248." },
  { q: "How does the surplus reach Russia on closure?", a: "Through an accepted bank route with Forms 145 and 146." },
]

const relatedCards = [
  { title: "Repatriating Profits", desc: "Payment routes to Russia.", href: "/russia-to-india/repatriating-profits" },
  { title: "Sanctions and Payments", desc: "Screening and settlement.", href: "/russia-to-india/sanctions-and-payments-for-russian-companies" },
  { title: "India-Russia DTAA", desc: "Capital gains under the treaty.", href: "/russia-to-india/india-russia-dtaa" },
  { title: "Compliance Calendar", desc: "Keeping records clean.", href: "/russia-to-india/compliance-calendar" },
]

export default function ExitAndRestructuringPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Exiting an Indian Subsidiary from Russia: Share Sale, Buy-Back, Merger, Voluntary Liquidation and Tax on the Exit"
        description="How a Russian parent exits or restructures an Indian business: sale of shares, buyer sanctions checks, FEMA pricing, FC-TRS, capital gains tax, buy-back, merger, voluntary liquidation, strike-off, the treaty position and bringing proceeds home."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Exit and Restructuring in India for a Russian Parent: Share Sale, Buy-Back, Liquidation and Strike-Off" },
        ]}
      />

      <GuideHero
        eyebrow="Exit: sale and closure"
        title="Exiting an Indian Subsidiary from Russia: Share Sale, Buy-Back, Merger, Voluntary Liquidation and Tax on the Exit"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Russian parent can exit through a share sale, buy-back, merger, voluntary liquidation or strike-off, using the same Indian legal routes as any foreign owner. The hard part is usually the money: sale proceeds or surplus must reach Russia through a channel both banks accept, the buyer will screen the Russian seller, and gains on Indian shares are taxable in India under the treaty. Plan the payment route before signing.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="restructuring-and-exit" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Share sale", "FEMA pricing; Form FC-TRS within 60 days with an Indian resident party"],
                ["Indian tax", "Gains on Indian company shares taxable in India under the treaty"],
                ["Long-term rate", "12.5% plus surcharge and cess for unlisted shares held over 24 months"],
                ["Payment", "Through a bank and route both sides accept"],
                ["Closure", "Strike-off if dormant; voluntary liquidation if it traded"],
                ["Russian side", "Currency control on repatriation of proceeds"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Exit routes</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Best when</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Watch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Sale of shares to an Indian buyer</th>
                <td className="border border-gray-300 p-3">A local strategic or partner buys</td>
                <td className="border border-gray-300 p-3">FEMA price ceiling; FC-TRS; buyer screening</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Sale to another non-resident</th>
                <td className="border border-gray-300 p-3">A third-country group buys</td>
                <td className="border border-gray-300 p-3">Indian capital gains still apply</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Buy-back</th>
                <td className="border border-gray-300 p-3">Partial return of capital</td>
                <td className="border border-gray-300 p-3">Company-law limits and current tax treatment</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Merger into an Indian group company</th>
                <td className="border border-gray-300 p-3">Group reorganisation</td>
                <td className="border border-gray-300 p-3">Tribunal process</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Voluntary liquidation or strike-off</th>
                <td className="border border-gray-300 p-3">Business no longer needed</td>
                <td className="border border-gray-300 p-3">Settle all dues first</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="money" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Getting the proceeds to Russia</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Agree the payment route in the term sheet. The buyer&apos;s bank and the Russian seller&apos;s bank must both accept the transaction, and the remitting route must pass sanctions screening. Escrow arrangements, staged payments and the currency of payment should be settled before signing, with specialist sanctions counsel involved.
        </p>
        <h2 id="buyers" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What buyers will check</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Sanctions status of the Russian seller and its owners.</li>
          <li>Clean FEMA, ROC and tax records in the Indian company.</li>
          <li>Any dependence on Russian supply, technology or financing that could be cut off.</li>
          <li>Change-of-control clauses with Indian customers and banks.</li>
        </ul>
        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax on the exit</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Under the India-Russia treaty, gains on shares of an Indian company are taxable in India. Long-term gains on unlisted shares held more than 24 months are taxed at 12.5% plus surcharge and cess, and the buyer usually withholds. In Russia, the gain is taxed with credit for Indian tax, subject to Russian rules and any participation exemption; confirm with a Russian adviser.
        </p>
        <h2 id="close" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Closing instead of selling</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Settle employee dues, including gratuity, and all taxes.</li>
          <li>Complete overdue filings.</li>
          <li>Choose strike-off (Section 248) or voluntary liquidation.</li>
          <li>Remit the surplus through an accepted route with Forms 145 and 146.</li>
          <li>Report to the RBI and close accounts.</li>
        </ol>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We map exit routes, prepare valuations and FEMA filings, run closures, and work with your sanctions and Russian advisers on the payment route.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link> and <Link href="/secretarial-roc-compliance" className="text-blue-800 font-semibold hover:underline">secretarial and ROC compliance</Link>.
        </p>

        <GuideServiceBox path="/russia-to-india/exit-and-restructuring" />
        <GuideCTA
          title="Planning to exit India?"
          description="Tell us the goal, and we will compare routes and the payment path."
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
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
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
        title="Restructuring or Exiting from Russia?"
        description="Tell us the current structure and your goal, and we'll map the ROC, tax and FEMA steps for a clean sale, buy-back or closure."
      />
    </main>
  )
}
