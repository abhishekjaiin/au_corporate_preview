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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/share-valuation"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "floor", label: "The FEMA floor and ceiling" },
  { id: "approach", label: "How valuers approach an Australian-owned subsidiary" },
  { id: "triggers", label: "When a fresh certificate is needed" },
  { id: "aud", label: "Rupee price, Australian dollar books" },
  { id: "errors", label: "Errors to avoid" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Who values shares issued to an Australian parent?", a: "A Chartered Accountant or a SEBI-registered merchant banker." },
  { q: "Can the first shares be issued at face value?", a: "Usually yes at incorporation, because face value equals fair value for a new company." },
  { q: "Is a new valuation needed for each capital increase?", a: "Yes. Each issue to a non-resident needs a valuation supporting the price." },
  { q: "Is the valuation in rupees or Australian dollars?", a: "In rupees; the Australian dollar amount only decides how many shares are bought." },
  { q: "Does the Australian auditor rely on the FEMA certificate?", a: "Not necessarily. Australian Accounting Standards may require a separate fair value or impairment analysis." },
  { q: "What limit applies when the parent sells to an Indian buyer?", a: "The price cannot exceed fair value." },
  { q: "What happens if shares are issued below fair value?", a: "The issue breaches FEMA pricing and needs correction, often through compounding." },
  { q: "Which method is used for a captive centre?", a: "Often discounted cash flow or net assets, reflecting its cost-plus remuneration." },
]

const relatedCards = [
  { title: "Funding and FC-GPR", desc: "Capital remittance and reporting.", href: "/australia-to-india/funding-fema-fc-gpr" },
  { title: "ESOPs for Indian Employees", desc: "Valuation for share plans.", href: "/australia-to-india/esop" },
  { title: "Restructuring and Exit", desc: "Pricing on a sale.", href: "/australia-to-india/restructuring-and-exit" },
  { title: "Australian Parent Obligations", desc: "Accounting for the investment.", href: "/australia-to-india/australian-parent-obligations" },
]

export default function ShareValuationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Share Valuation for Foreign Investment: Pricing Rules and Certificates"
        description="Why shares issued to an Australian parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation."
        datePublished="2026-10-15"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "Share Valuation for Foreign Investment in India" },
        ]}
      />

      <GuideHero
        eyebrow="Fund: valuation"
        title="Share Valuation for Foreign Investment: Pricing Rules and Certificates"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Shares issued by an Indian company to its Australian parent must be priced at no less than their rupee fair value, certified by a Chartered Accountant or a SEBI-registered merchant banker. That certificate is separate from any fair value measurement the parent needs under Australian Accounting Standards, and each later share issue or transfer needs its own valuation.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="share-valuation" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Issue to Australian parent", "At or above rupee fair value"],
                ["Transfer from Australian parent to Indian resident", "At or below fair value"],
                ["Who certifies", "Chartered Accountant or SEBI-registered merchant banker"],
                ["Method", "Internationally accepted pricing method: often net asset value at start, discounted cash flow later"],
                ["Australian accounting", "Fair value or impairment under Australian Accounting Standards is a separate exercise"],
                ["Reporting", "FC-GPR for issues; FC-TRS for transfers"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="floor" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The FEMA floor and ceiling</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          FEMA sets a minimum price when shares go to a non-resident and a maximum when they come back to a resident. For an Australian parent subscribing to new shares, the issue price cannot be below fair value. For an Australian parent selling to an Indian buyer, the price cannot exceed fair value.
        </p>
        <h2 id="approach" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How valuers approach an Australian-owned subsidiary</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Stage of the subsidiary</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical method</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Main inputs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Newly incorporated</th>
                <td className="border border-gray-300 p-3">Net asset value; face value is usually fair value</td>
                <td className="border border-gray-300 p-3">Opening balance sheet</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Captive centre on cost plus</th>
                <td className="border border-gray-300 p-3">Discounted cash flow or net assets</td>
                <td className="border border-gray-300 p-3">Mark-up, cost base and growth plan</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Distributor or operating business</th>
                <td className="border border-gray-300 p-3">Discounted cash flow, cross-checked to multiples</td>
                <td className="border border-gray-300 p-3">Approved budget, margins, discount rate</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="triggers" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When a fresh certificate is needed</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Each additional issue of shares to the Australian parent.</li>
          <li>Conversion of preference shares or debentures, against the price fixed at issue.</li>
          <li>A transfer between the parent and an Indian resident.</li>
          <li>A buyback or capital reduction involving the parent.</li>
        </ul>
        <h2 id="aud" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Rupee price, Australian dollar books</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The issue price is fixed in rupees. The parent records its investment at the Australian dollar amount it paid, and later tests it for impairment under Australian Accounting Standards. The two numbers diverge as the exchange rate moves and as the business develops, and the Australian auditor may need its own fair value analysis that differs from the FEMA certificate.
        </p>
        <h2 id="errors" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Errors to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Calculating the number of shares from the Australian dollar amount rather than the rupee credit.</li>
          <li>Using a valuation certificate from an earlier round for a new issue.</li>
          <li>Assuming the group&apos;s impairment model satisfies FEMA pricing.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We arrange the valuation certificate, check the price against FEMA limits, and file the FC-GPR or FC-TRS for each issue or transfer.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link> and <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/share-valuation" />
        <GuideCTA
          title="Issuing more shares to your Australian parent?"
          description="Tell us the amount and timing, and we will arrange the valuation."
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
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "Securities and Exchange Board of India", href: "https://www.sebi.gov.in" },
            { label: "Australian Accounting Standards Board", href: "https://www.aasb.gov.au" },
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
        title="Need a Share Valuation for Your Indian Entity?"
        description="Tell us the purpose of your valuation — funding round, transfer pricing or exit — and we'll map the applicable method and timeline."
      />
    </main>
  )
}
