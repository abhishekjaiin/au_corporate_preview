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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/esop"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "choices", label: "Parent plan or Indian plan" },
  { id: "tax-events", label: "When Indian employees are taxed" },
  { id: "payroll", label: "What the Indian payroll must do" },
  { id: "recharge", label: "Recharging the cost from Japan" },
  { id: "employee-filings", label: "What employees file" },
  { id: "indian-plan", label: "If the Indian company runs its own plan" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can Indian employees join a Japanese parent's stock option plan?", a: "Yes. Indian residents can acquire shares of a foreign parent under an employee plan, subject to FEMA conditions and reporting." },
  { q: "When are Indian employees taxed on parent-plan awards?", a: "At exercise of an option or vesting of an RSU, on the fair market value less the price paid, as salary; and again on sale, as capital gains." },
  { q: "Who withholds the tax on exercise?", a: "The Indian employer, through payroll, in the month of the taxable event." },
  { q: "How is the value of Japanese-listed shares set for Indian tax?", a: "From the market price on the exercise or vesting date, converted into rupees at the prescribed exchange rate." },
  { q: "Can the Japanese parent recharge the cost to the Indian subsidiary?", a: "Yes, under a written agreement priced at arm's length, with Withholding Tax reviewed." },
  { q: "Do employees need to report Japanese shares in India?", a: "Yes, in Schedule FA of the Indian income tax return, along with any dividends." },
  { q: "What is the long-term capital gains rate on the shares?", a: "12.5% for shares held more than 24 months, plus surcharge and cess." },
  { q: "What does an Indian ESOP need under company law?", a: "A shareholders' special resolution filed in Form MGT-14 and a minimum one-year gap between grant and vesting." },
]

const relatedCards = [
  { title: "Hiring and Payroll from Japan", desc: "Contracts, PF, ESI and gratuity.", href: "/japan-to-india/hiring-and-payroll" },
  { title: "Transfer Pricing", desc: "Supporting the recharge of award costs.", href: "/japan-to-india/transfer-pricing" },
  { title: "Share Valuation", desc: "Valuing shares for an Indian plan.", href: "/japan-to-india/share-valuation" },
  { title: "Japan Parent Obligations", desc: "Group accounting for share awards.", href: "/japan-to-india/japan-parent-obligations" },
]

export default function EsopPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="ESOPs for Indian Employees of a Japanese Parent: FEMA, Tax and Cost Recharge"
        description="How ESOPs and RSUs work for employees of an Indian subsidiary: FEMA reporting, employee tax, valuation, cost recharge and transfer pricing for a Japanese parent."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "ESOPs for Indian Employees of a Japanese Parent Company" },
        ]}
      />

      <GuideHero
        eyebrow="Scale: equity for employees"
        title="ESOPs for Indian Employees of a Japanese Parent: FEMA, Tax and Cost Recharge"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Indian employees of a Japanese group usually receive equity through the parent&apos;s own plan, such as stock options or restricted stock units, rather than a separate Indian scheme. India taxes the benefit as salary when the employee exercises an option or an RSU vests, and the Indian employer must withhold that tax even though the shares come from Japan. If the parent recharges the cost to the subsidiary, the recharge needs a written agreement and transfer pricing support.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="esop" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Usual route for Japanese groups", "Employees join the Japanese parent's plan (stock options, restricted stock or RSUs)"],
                ["First tax event", "Exercise of an option, or vesting of an RSU: fair market value less the price paid is salary income"],
                ["Withholding", "The Indian employer deducts tax through payroll in the month of the taxable event"],
                ["Second tax event", "Sale of the shares: capital gains, 12.5% long-term rate for shares held more than 24 months"],
                ["Employee disclosure", "Foreign shares in Schedule FA of the Indian return; foreign tax credit through Form 67 where relevant"],
                ["Cost recharge", "Agreement with the parent, arm's length support and Withholding Tax review"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="choices" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Parent plan or Indian plan</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left"></th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Japanese parent&apos;s plan</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian company&apos;s own ESOP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">What employees receive</th>
                <td className="border border-gray-300 p-3">Shares of the Japanese listed or private parent</td>
                <td className="border border-gray-300 p-3">Shares of the Indian subsidiary</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Who sets the terms</th>
                <td className="border border-gray-300 p-3">Parent&apos;s board and plan rules</td>
                <td className="border border-gray-300 p-3">Indian board, under the Companies Act</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Exit for the employee</th>
                <td className="border border-gray-300 p-3">Sale on the Japanese market or under the plan</td>
                <td className="border border-gray-300 p-3">Buyback or sale, often limited for a private company</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Typical use</th>
                <td className="border border-gray-300 p-3">Most Japanese groups, especially listed ones</td>
                <td className="border border-gray-300 p-3">Joint ventures or start-ups planning their own exit</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="tax-events" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When Indian employees are taxed</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Tax arises twice. When the employee exercises an option, or an RSU vests, the difference between the fair market value on that date and any amount paid is taxed as salary. When the shares are later sold, the gain over that fair market value is a capital gain, taxed at 12.5% if the shares were held for more than 24 months. For shares listed in Japan, the value is taken from the Japanese market price converted into rupees.
        </p>
        <h2 id="payroll" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the Indian payroll must do</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Get exercise and vesting reports from the parent&apos;s plan administrator each month.</li>
          <li>Convert the benefit into rupees at the prescribed rate.</li>
          <li>Add it to salary, deduct tax and deposit it by the 7th of the next month.</li>
          <li>Show it in the employee&apos;s Form 16 and the quarterly TDS return.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-10">
          Because the shares are delivered in Japan, payroll often has to recover the tax from cash salary. Agree in advance whether shares are sold to cover tax, so the employee is not left with a large deduction in one month.
        </p>
        <h2 id="recharge" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Recharging the cost from Japan</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Many Japanese parents charge the Indian subsidiary for the cost of awards to its staff. A recharge supports the subsidiary&apos;s deduction and the group&apos;s cost allocation, but it needs a written agreement before the awards are made, an arm&apos;s length basis, and a check on whether Withholding Tax applies to the payment to Japan. Without these, the Indian tax officer may disallow the cost.
        </p>
        <h2 id="employee-filings" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What employees file</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Report the Japanese shares and any dividends in Schedule FA of the Indian tax return.</li>
          <li>Claim credit for any Japanese tax withheld on dividends through Form 67.</li>
          <li>Keep records of the exercise or vesting value, which becomes the cost for capital gains.</li>
        </ul>
        <h2 id="indian-plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">If the Indian company runs its own plan</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          An Indian ESOP needs a shareholders&apos; special resolution, filed in Form MGT-14 within 30 days, and at least one year between grant and vesting. Shares issued to resident employees are not foreign investment, but a later transfer to the Japanese parent is, and follows FEMA pricing.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We set up the Indian payroll treatment for parent-plan awards, draft and support the cost recharge agreement, and help employees with Schedule FA and foreign tax credit.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/payroll-expat-services" className="text-blue-800 font-semibold hover:underline">payroll and expat services</Link> and <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/esop" />
        <GuideCTA
          title="Extending your group share plan to India?"
          description="Tell us the plan type, and we will map the payroll, tax and recharge steps."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/japan-to-india/faq"
          seeAllLabel="See all Japanese FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Japanese parents."
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
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
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
        title="Extending Your Group's Equity Plan to India?"
        description="Tell us about the Japanese parent's plan and the employees involved, and we'll map the FEMA reporting and Indian tax treatment."
      />
    </main>
  )
}
