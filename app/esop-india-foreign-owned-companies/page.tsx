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

const PAGE_URL = "https://www.theaucorp.com/esop-india-foreign-owned-companies"

const toc = [
  { id: "choice", label: "Parent plan or Indian company plan" },
  { id: "tax", label: "How ESOPs are taxed in India" },
  { id: "indian-plan", label: "Rules for an Indian company ESOP" },
  { id: "valuation", label: "ESOP valuation in India" },
  { id: "fema", label: "FEMA: Indian employees holding foreign shares" },
  { id: "recharge", label: "Recharging the cost to the Indian company" },
  { id: "design", label: "Designing the plan for Indian employees" },
  { id: "employer-steps", label: "What the Indian employer must do each year" },
  { id: "exit", label: "What happens to ESOPs on an exit or restructuring" },
  { id: "example-tax", label: "A worked example of the employee tax" },
  { id: "communication", label: "Explaining equity to Indian employees" },
  { id: "accounting", label: "Accounting for share-based payments in India" },
  { id: "checklist-esop", label: "Checklist before the first grant to Indian staff" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How are ESOPs taxed in India?", a: "At exercise or allotment as a salary perquisite on fair market value minus the price paid; later gains are capital gains." },
  { q: "Who values unlisted shares for ESOP tax?", a: "A SEBI-registered merchant banker." },
  { q: "Can an Indian company run its own ESOP?", a: "Yes, with shareholder approval by special resolution and a minimum one-year vesting period." },
  { q: "Can Indian employees receive foreign parent shares?", a: "Yes, under the overseas investment rules for employee benefit schemes." },
  { q: "Can the parent recharge ESOP costs to India?", a: "Yes, with an agreement and transfer pricing support; deductibility depends on the facts." },
  { q: "Do RSUs work differently from options in India?", a: "RSUs have no exercise price; tax arises when the shares are delivered, on their full fair market value." },
  { q: "What if the Indian employer misses the withholding?", a: "The employer can be treated as in default for the tax it should have deducted, with interest; correct it as soon as the error is found." },
  { q: "Do Indian employees need to report foreign shares?", a: "Yes. Foreign shares and income are disclosed in the Indian income tax return each year." },
]

const relatedCards = [
  { title: "Share valuation in India", desc: "FEMA, registered valuer and tax rules.", href: "/share-valuation-india-registered-valuer-fema" },
  { title: "ESOPs for US companies", desc: "Detailed US perspective.", href: "/usa-to-india/esop" },
  { title: "Payroll and expat services", desc: "Perquisite tax through payroll.", href: "/payroll-expat-services" },
]

export default function EsopIndiaForeignOwnedCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"ESOPs for Employees of Foreign-Owned Indian Companies: Parent Plans, Indian Plans, Valuation and Tax"}
        description={"How foreign groups give equity to Indian employees: parent ESOP and RSU plans, an Indian company ESOP, ESOP valuation, perquisite tax, FEMA and recharges."}
        datePublished="2026-11-07"
        dateModified="2026-11-07"
        inLanguage="en"
      />

      <Breadcrumb items={[{ label: "ESOPs in India" }]} />

      <GuideHero eyebrow={"Guide: ESOPs"} title={"ESOPs for Employees of Foreign-Owned Indian Companies: Parent Plans, Indian Plans, Valuation and Tax"} updated="7 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Most foreign-owned Indian companies give employees equity through the foreign parent&apos;s own ESOP or RSU plan rather than an Indian plan, because parent shares are more valuable and liquid. India taxes the benefit as a salary perquisite when an option is exercised or shares are allotted, on the fair market value less the price paid, and the Indian employer withholds that tax. If the Indian company runs its own ESOP instead, it needs shareholder approval under the Companies Act, a minimum one-year vesting period, and a merchant banker&apos;s ESOP valuation of its unlisted shares for perquisite tax. Recharges by the parent need an agreement and transfer pricing support.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="choice" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Parent plan or Indian company plan</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Point</th><th scope="col" className="border border-gray-300 p-3 text-left">Parent ESOP or RSU plan</th><th scope="col" className="border border-gray-300 p-3 text-left">Indian company ESOP</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Shares</th><td className="border border-gray-300 p-3">Of the foreign parent</td><td className="border border-gray-300 p-3">Of the Indian company</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Value to employees</th><td className="border border-gray-300 p-3">Usually higher and more liquid</td><td className="border border-gray-300 p-3">Illiquid until an exit</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Indian approvals</th><td className="border border-gray-300 p-3">None at the Indian company for the plan itself; overseas investment rules for employees</td><td className="border border-gray-300 p-3">Special resolution of shareholders and board approval</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Valuation</th><td className="border border-gray-300 p-3">Market price, or a valuation of the parent</td><td className="border border-gray-300 p-3">ESOP valuation of unlisted Indian shares by a merchant banker for perquisite tax</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Typical use</th><td className="border border-gray-300 p-3">Most foreign groups</td><td className="border border-gray-300 p-3">Indian companies with Indian investors, or where parent equity cannot be offered</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How ESOPs are taxed in India</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Stage</th><th scope="col" className="border border-gray-300 p-3 text-left">Tax for the Indian employee</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Grant</th><td className="border border-gray-300 p-3">None</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Vesting</th><td className="border border-gray-300 p-3">None for options; RSUs are taxed when shares are delivered</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Exercise or allotment</th><td className="border border-gray-300 p-3">Perquisite tax as salary on fair market value minus the amount paid, withheld by the Indian employer</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Sale</th><td className="border border-gray-300 p-3">Capital gains on the increase after exercise</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          For unlisted shares, fair market value for perquisite tax is determined by a SEBI-registered merchant banker. For listed parent shares, the market price on the exercise date is used. Employees often sell some shares at once to pay the tax.
        </p>

        <h2 id="indian-plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Rules for an Indian company ESOP</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Approval by special resolution of the shareholders, with disclosures set out in the Companies Act rules.</li>
          <li>A minimum vesting period of one year between grant and vesting.</li>
          <li>Options generally cannot be granted to promoters or to directors holding more than 10% of the shares, with relaxations for recognised start-ups.</li>
          <li>Options are not transferable and lapse as set out in the plan if the employee leaves.</li>
          <li>Shares issued on exercise to non-resident employees follow FEMA pricing and reporting rules.</li>
        </ul>

        <h2 id="valuation" className="text-2xl font-bold text-gray-900 mt-12 mb-4">ESOP valuation in India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Two valuations matter for an Indian ESOP. The merchant banker&apos;s valuation sets fair market value for employee perquisite tax at exercise. Separately, accounting standards require the company to recognise the fair value of options granted as an employee cost, often using an option pricing model. Plan both when the plan is launched, and refresh the merchant banker valuation for each exercise window.
        </p>

        <h2 id="fema" className="text-2xl font-bold text-gray-900 mt-12 mb-4">FEMA: Indian employees holding foreign shares</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Indian resident employees can acquire shares of the foreign parent under an employee benefit scheme under the overseas investment rules, with the Indian company reporting through its AD bank as required. Employees declare foreign shares and income in their Indian tax return each year.
        </p>

        <h2 id="recharge" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Recharging the cost to the Indian company</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Many parents recharge the cost of awards to the Indian company. A recharge needs a written agreement, a consistent basis such as the value at vesting or exercise, and transfer pricing support. The Indian company then remits the recharge abroad with Forms 145 and 146. Whether the recharge is deductible in India depends on the facts and is often examined by tax officers, so document the business purpose.
        </p>
        <h2 id="design" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Designing the plan for Indian employees</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Vesting schedules that work with Indian notice periods and retention, commonly four years with a one-year cliff.</li>
          <li>Clear treatment of leavers, including good and bad leavers, so that unvested awards lapse as intended.</li>
          <li>A cash or share settlement choice, because cash-settled share appreciation rights are simpler for some groups.</li>
          <li>Tax withholding mechanics agreed with the plan administrator, such as selling shares to cover tax.</li>
          <li>Communication in plain English to Indian employees about tax timing, which surprises many first-time participants.</li>
        </ul>

        <h2 id="employer-steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the Indian employer must do each year</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Collect exercise and vesting data from the plan administrator every month.</li>
          <li>Value the perquisite at fair market value on the exercise or allotment date.</li>
          <li>Withhold tax through payroll and deposit it by the 7th of the following month.</li>
          <li>Report the perquisite in the employee&apos;s annual salary certificate.</li>
          <li>Record any recharge from the parent and the related transfer pricing.</li>
          <li>Keep records of foreign currency conversion rates used.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          Missing the withholding on an exercise is the most common ESOP error in India, and the employer is liable for tax it should have deducted.
        </p>

        <h2 id="exit" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What happens to ESOPs on an exit or restructuring</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          When the Indian company or the parent is sold, merged or listed, plans usually accelerate vesting, convert awards into the buyer&apos;s shares or pay cash. Each outcome has its own Indian tax point for employees and may need FEMA reporting where shares change hands across borders. Plan this in the transaction documents, not afterwards.
        </p>
        <h2 id="example-tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A worked example of the employee tax</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          An Indian employee exercises 1,000 options over parent shares at an exercise price of USD 5 when the market price is USD 25. The perquisite is 1,000 × USD 20 = USD 20,000, converted into rupees at the prescribed rate on the exercise date and added to salary for that month. The Indian employer withholds income tax on it at the employee&apos;s slab rate. When the employee later sells the shares at USD 30, the further gain of USD 5 a share is a capital gain, taxed in India and declared in the return, with the cost taken as the value already taxed at exercise.
        </p>

        <h2 id="communication" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Explaining equity to Indian employees</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Equity is a valued part of pay in India&apos;s technology and finance sectors, but many employees are unfamiliar with foreign plans. A short guide for employees should explain the vesting schedule, what happens on leaving, when tax is due, how shares can be sold to cover it, and that foreign shares and income must be disclosed in the Indian return. Holding a session with the payroll team at the first vesting date avoids most questions later.
        </p>

        <h2 id="accounting" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Accounting for share-based payments in India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Indian company recognises an expense for awards to its employees over the vesting period under Indian accounting standards, based on the fair value at grant, whether the shares are its own or the parent&apos;s. Where the parent recharges the cost, the recharge is recorded against that expense. The auditors will ask for the plan rules, the grant data and the fair value calculation, so obtain these from the plan administrator before the year end.
        </p>
        <h2 id="checklist-esop" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Checklist before the first grant to Indian staff</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Confirm that the plan rules allow awards to employees of the Indian company, agree how and when exercise data reaches the Indian payroll, decide whether the parent will recharge the cost, prepare an employee guide on Indian tax, and set up the monthly withholding process. Doing this before the first grant avoids most problems at the first vesting date.
        </p>




        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate identifies which valuation rules apply to each transaction, coordinates the valuation with the appropriate professional, a Chartered Accountant, a SEBI-registered merchant banker or an IBBI registered valuer as the law requires, and handles the related FEMA, company-law and tax filings.
        </p>
        <GuideCTA title={"Planning Equity for Your Indian Team?"} description={"Tell us about the plan and the team, and we will set out the tax, valuation and filing steps."} />

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
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 7 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Planning Equity for Your Indian Team?"} description={"Tell us about the plan and the team, and we will set out the tax, valuation and filing steps."} />
    </main>
  )
}
