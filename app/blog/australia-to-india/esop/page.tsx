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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/esop"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "plan-types", label: "Australian plan types and Indian treatment" },
  { id: "conversion", label: "Valuing ASX shares for Indian tax" },
  { id: "withholding", label: "Withholding through Indian payroll" },
  { id: "recharge", label: "Recharging the cost to India" },
  { id: "offer", label: "Making the offer in India" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "When are Indian employees taxed on Australian share rights?", a: "At vesting or exercise, on the value less any amount paid, as salary income." },
  { q: "How are ASX share values converted for Indian tax?", a: "At the SBI telegraphic transfer buying rate prescribed by the Indian rules." },
  { q: "Who withholds the Indian tax?", a: "The Indian employer, through payroll." },
  { q: "Do Indian employees report Australian shares?", a: "Yes, in Schedule FA of the Indian income tax return." },
  { q: "Can the parent recharge award costs to India?", a: "Yes, under a written arm's length agreement, with Withholding Tax reviewed." },
  { q: "What tax applies when the shares are sold?", a: "Capital gains; 12.5% for shares held more than 24 months, plus surcharge and cess." },
  { q: "Do Australian disclosure rules apply to offers in India?", a: "They mainly cover offers in Australia; Australian counsel should confirm the position." },
  { q: "Can Indian residents hold shares of an Australian parent?", a: "Yes, under an employee plan within FEMA's overseas investment rules." },
]

const relatedCards = [
  { title: "Hiring and Payroll from Australia", desc: "Contracts, PF and gratuity.", href: "/australia-to-india/hiring-and-payroll" },
  { title: "Transfer Pricing", desc: "Supporting the recharge.", href: "/australia-to-india/transfer-pricing" },
  { title: "Share Valuation", desc: "Valuing Indian shares for a local plan.", href: "/australia-to-india/share-valuation" },
  { title: "Australian Parent Obligations", desc: "The Australian side of the plan.", href: "/australia-to-india/australian-parent-obligations" },
]

export default function EsopPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="ESOPs for Indian Employees of an Australian Parent: FEMA, Tax and Cost Recharge"
        description="How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for an Australian parent."
        datePublished="2026-10-15"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "ESOPs for Indian Employees of an Australian Parent Company" },
        ]}
      />

      <GuideHero
        eyebrow="Scale: equity for employees"
        title="ESOPs for Indian Employees of an Australian Parent: FEMA, Tax and Cost Recharge"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Indian employees of an Australian group usually participate in the parent&apos;s employee share scheme. India taxes the benefit as salary at exercise of an option, or at vesting of a right or RSU, converting the Australian dollar value to rupees at the SBI telegraphic transfer buying rate, and the Indian employer withholds the tax. The parent&apos;s securities-law position on offering shares to Indian staff should be confirmed by Australian counsel.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="esop" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Taxable event", "Exercise of options; vesting of rights or RSUs"],
                ["Value", "Fair market value less amount paid, converted at the SBI telegraphic transfer buying rate"],
                ["Withholding", "Indian employer deducts through payroll"],
                ["Later sale", "Capital gains; 12.5% long-term rate after 24 months"],
                ["Employee reporting", "Schedule FA in the Indian return"],
                ["Recharge", "Written agreement, arm's length support and Withholding Tax review"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="plan-types" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Australian plan types and Indian treatment</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Australian award</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian tax point</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Options</th>
                <td className="border border-gray-300 p-3">Exercise</td>
                <td className="border border-gray-300 p-3">Value at exercise less exercise price</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Performance or share rights</th>
                <td className="border border-gray-300 p-3">Vesting or exercise</td>
                <td className="border border-gray-300 p-3">Often nil exercise price, so the full value is taxed</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Restricted shares</th>
                <td className="border border-gray-300 p-3">When the employee becomes entitled</td>
                <td className="border border-gray-300 p-3">Depends on the plan terms</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Employee share purchase plan</th>
                <td className="border border-gray-300 p-3">Purchase at a discount</td>
                <td className="border border-gray-300 p-3">Discount taxed as salary</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="conversion" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Valuing ASX shares for Indian tax</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          For shares listed on the ASX, the fair market value is taken from the market price on the tax date and converted into rupees at the State Bank of India telegraphic transfer buying rate prescribed by the Indian rules. Unlisted Australian shares need a valuation by a merchant banker. Keep the conversion rate and date with each award record.
        </p>
        <h2 id="withholding" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Withholding through Indian payroll</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Receive the monthly vesting and exercise report from the Australian plan administrator.</li>
          <li>Convert and add the benefit to the employee&apos;s salary.</li>
          <li>Deduct tax and deposit it by the 7th of the following month.</li>
          <li>Report it in the quarterly TDS return and Form 16.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-10">
          Where the tax exceeds the month&apos;s cash salary, agree with the plan administrator to sell enough shares to cover it or to recover it over several months, within the rules.
        </p>
        <h2 id="recharge" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Recharging the cost to India</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          If the Australian parent charges the Indian company for awards to its staff, sign the recharge agreement before the awards, base it on an arm&apos;s length method, and check Withholding Tax on the payment to Australia. Without these, the Indian deduction can be denied, while the ATO will also look at the cost allocation from the Australian side.
        </p>
        <h2 id="offer" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Making the offer in India</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The Corporations Act disclosure rules mainly cover offers in Australia, so Australian counsel should confirm the position for Indian employees.</li>
          <li>Indian residents may acquire shares of a foreign parent under an employee plan within FEMA&apos;s overseas investment rules.</li>
          <li>Employees report the shares and any dividends in Schedule FA of their Indian return.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We set up the payroll treatment for Australian plan awards, support the recharge agreement and help Indian employees with their reporting.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/payroll-expat-services" className="text-blue-800 font-semibold hover:underline">payroll and expat services</Link> and <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/esop" />
        <GuideCTA
          title="Extending your Australian share plan to India?"
          description="Tell us the plan type, and we will map the payroll and tax steps."
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
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "Australian Securities and Investments Commission", href: "https://asic.gov.au" },
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
        title="Rolling Out ESOPs in India?"
        description="Tell us your parent company's ESOP plan and headcount — we'll map the FEMA reporting and tax treatment for your Indian employees."
      />
    </main>
  )
}
