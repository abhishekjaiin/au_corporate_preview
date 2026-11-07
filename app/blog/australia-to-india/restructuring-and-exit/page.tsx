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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/restructuring-and-exit"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "drivers", label: "What usually drives an Australian exit" },
  { id: "options", label: "Options and their tax on each side" },
  { id: "sale", label: "Selling the shares" },
  { id: "wind-down", label: "Winding down" },
  { id: "timing", label: "Timing across two financial years" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is a sale of Indian shares by an Australian company taxed in India?", a: "Generally yes. Long-term gains on unlisted shares held over 24 months are taxed at 12.5% plus surcharge and cess, subject to the treaty." },
  { q: "Can Australian tax on the gain be reduced?", a: "Possibly, under the active foreign business asset reduction in Subdivision 768-G, if the Indian company is an active foreign company." },
  { q: "Which form reports a share sale to an Indian buyer?", a: "Form FC-TRS, within 60 days, through the authorised dealer bank." },
  { q: "Can two Indian subsidiaries of an Australian group merge?", a: "Yes, through a tribunal scheme or the fast-track route for a holding company and its wholly owned subsidiary." },
  { q: "How is a dormant Indian company closed?", a: "By strike-off under Section 248 using Form STK-2, once it has had no business for two financial years and has no liabilities." },
  { q: "How long does strike-off take?", a: "Usually three to six months after filing." },
  { q: "How does surplus cash reach Australia on closure?", a: "Through the bank with Forms 145 and 146 after taxes and creditors are paid." },
  { q: "Does the different year end matter for an exit?", a: "Yes. The Indian 31 March and Australian 30 June years affect when gains are recognised and returns lodged." },
]

const relatedCards = [
  { title: "Repatriating Profits to Australia", desc: "Moving surplus cash back.", href: "/australia-to-india/repatriating-profits" },
  { title: "Share Valuation", desc: "FEMA pricing on a transfer.", href: "/australia-to-india/share-valuation" },
  { title: "Australian Parent Obligations", desc: "Australian tax on Indian income and gains.", href: "/australia-to-india/australian-parent-obligations" },
  { title: "Compliance Calendar", desc: "Keeping filings current for a clean exit.", href: "/australia-to-india/compliance-calendar" },
]

export default function RestructuringAndExitPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Restructuring, Mergers and Exit: Your Options for an Indian Subsidiary"
        description="Options for an Australian parent to restructure, sell, merge or close its Indian subsidiary: share sale, slump sale, merger, buyback, strike-off and liquidation."
        datePublished="2026-10-15"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "Restructuring, Mergers and Exit for an Indian Subsidiary" },
        ]}
      />

      <GuideHero
        eyebrow="Scale and exit"
        title="Restructuring, Mergers and Exit: Your Options for an Indian Subsidiary"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Australian parent can sell, merge or close its Indian subsidiary, and the choice usually turns on tax on both sides. India generally taxes a sale of the Indian shares, while in Australia the active foreign business asset reduction can reduce or remove the gain on selling shares in an active foreign company. Closing a dormant company is done by strike-off; one that traded needs voluntary liquidation. Every share transfer with an Indian resident is reported in Form FC-TRS.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="restructuring-and-exit" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Share sale tax in India", "Long-term capital gains on unlisted shares held over 24 months taxed at 12.5% plus surcharge and cess, subject to the treaty"],
                ["Australian relief", "Active foreign business asset reduction (Subdivision 768-G) can reduce the capital gain on active foreign company shares"],
                ["Reporting", "Form FC-TRS within 60 days for transfers between residents and non-residents"],
                ["Group merger", "Tribunal scheme, or fast track under Section 233 for a holding company and its wholly owned subsidiary"],
                ["Dormant company", "Strike-off under Section 248, Form STK-2, ₹10,000 fee, usually three to six months"],
                ["Trading company", "Voluntary liquidation under the Insolvency and Bankruptcy Code"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="drivers" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What usually drives an Australian exit</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>An acquirer, often Australian or global, buys the Australian group and wants the Indian entity folded into its own Indian company.</li>
          <li>The Australian parent sells the Indian business to a local buyer and keeps a supply or licence relationship.</li>
          <li>A delivery centre is consolidated with another group entity in India.</li>
          <li>A sales or liaison presence is no longer needed.</li>
        </ul>
        <h2 id="options" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Options and their tax on each side</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Option</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">India</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Australia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Share sale by the Australian parent</th>
                <td className="border border-gray-300 p-3">Capital gains tax in India, subject to the treaty; buyer usually withholds</td>
                <td className="border border-gray-300 p-3">Capital gain, potentially reduced under Subdivision 768-G</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Slump sale by the Indian company</th>
                <td className="border border-gray-300 p-3">Gain on net worth taxed in the Indian company</td>
                <td className="border border-gray-300 p-3">Proceeds come back later as dividends or on liquidation</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Merger into another Indian group company</th>
                <td className="border border-gray-300 p-3">Tax-neutral if conditions are met</td>
                <td className="border border-gray-300 p-3">Generally no immediate event if the parent&apos;s holding continues</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Strike-off or liquidation</th>
                <td className="border border-gray-300 p-3">Final tax returns and dues settled in India</td>
                <td className="border border-gray-300 p-3">Liquidation distributions taxed according to their character</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="sale" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Selling the shares</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          If the buyer is an Indian resident, FEMA sets the maximum price the Australian seller can receive; if the buyer is another non-resident, the transfer is between two foreign parties. Either way the Indian capital gains position must be settled, and Form FC-TRS is filed within 60 days where an Indian resident is involved. A buyer will expect clean ROC, tax and FEMA records, so regularise any gaps before the data room opens.
        </p>
        <h2 id="wind-down" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Winding down</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Confirm the route: strike-off for a company with no business for two financial years, voluntary liquidation otherwise.</li>
          <li>Pay staff, including gratuity, and settle GST, TDS and income tax.</li>
          <li>Complete all overdue ROC, tax and FEMA filings.</li>
          <li>Distribute the surplus to Australia through the bank with Forms 145 and 146.</li>
          <li>Report the closure to the RBI and close bank accounts.</li>
        </ol>
        <h2 id="timing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Timing across two financial years</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The Indian year ends on 31 March and the Australian year on 30 June. A sale signed in April closes in the Indian year that has just started but in the Australian year about to end, which affects when each side recognises the gain and lodges returns. Plan the signing and completion dates with both tax years in view.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We model the Indian side of each exit route, prepare valuations and FEMA filings, run mergers and closures, and coordinate with your Australian tax adviser on the Australian result.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link> and <Link href="/secretarial-roc-compliance" className="text-blue-800 font-semibold hover:underline">secretarial and ROC compliance</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/restructuring-and-exit" />
        <GuideCTA
          title="Planning a sale or wind-down of your Indian entity?"
          description="Tell us the goal, and we will compare the routes and timing on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/australia-to-india/faq"
          seeAllLabel="See all Australian FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Australian parents."
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
            { label: "Australian Taxation Office", href: "https://www.ato.gov.au" },
            { label: "Insolvency and Bankruptcy Board of India", href: "https://ibbi.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Planning to Restructure or Exit Your India Entity?"
        description="Tell us your current structure and goal — we'll map the ROC, tax and FEMA steps for a clean restructuring or exit."
      />
    </main>
  )
}
