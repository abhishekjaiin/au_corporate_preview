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

const PAGE_URL = "https://www.theaucorp.com/new-labour-codes-india-50-percent-wage-rule-gratuity"

const toc = [
  { id: "four-codes", label: "The four labour codes" },
  { id: "wage-rule", label: "The 50% wage rule" },
  { id: "gratuity", label: "Gratuity under the codes" },
  { id: "pay-and-hours", label: "Wage payment, working hours and leave" },
  { id: "ir", label: "Fixed-term employment, layoffs and closure" },
  { id: "social", label: "Social security changes" },
  { id: "checklist", label: "An employer's checklist" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "When did India's new labour codes come into force?", a: "On 21 November 2025, with central and state rules following." },
  { q: "What is the 50% wage rule?", a: "If allowances excluded from wages exceed 50% of total remuneration, the excess is added back to wages for calculations such as gratuity." },
  { q: "Do fixed-term employees get gratuity?", a: "Yes, after one year of service under the codes." },
  { q: "When must wages be paid?", a: "By the 7th of the following month for monthly wages." },
  { q: "How quickly must a final settlement be paid?", a: "Within two working days of the employee leaving." },
  { q: "When is government approval needed for layoffs?", a: "For establishments with 300 or more workers." },
  { q: "Do the labour codes apply to foreign-owned companies?", a: "Yes. Every labour code applies to establishments in India regardless of who owns them, alongside the state rules made under each labour code." },
]

const relatedCards = [
  { title: "Payroll and expat services", desc: "Payroll, provident fund, ESI and expat tax.", href: "/payroll-expat-services" },
  { title: "Cost of hiring employees in India", desc: "What an employee costs on top of salary.", href: "/cost-of-hiring-employees-in-india" },
  { title: "Labour codes for US employers", desc: "Comparison with US practice.", href: "/usa-to-india/indian-labour-codes-for-us-employers" },
]

export default function NewLabourCodesIndia50PercentWageRuleGratuityPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"India's New Labour Codes for Employers: The 50% Wage Rule, Gratuity and What Changed"}
        description={"What India's four labour codes, in force since 21 November 2025, mean for employers: the 50% wage rule, gratuity for fixed-term staff, wage payment deadlines, working hours and retrenchment thresholds."}
        datePublished="2026-11-07"
        dateModified="2026-11-13"
        inLanguage="en"
      />

      <Breadcrumb items={[{ label: "New Labour Codes" }]} />

      <GuideHero eyebrow={"Employment law update"} title={"India's New Labour Codes for Employers: The 50% Wage Rule, Gratuity and What Changed"} updated="13 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          India&apos;s four labour codes, on wages, industrial relations, social security, and occupational safety and working conditions, replaced 29 older labour laws and have been in force since 21 November 2025, with central and state rules following. The change most employers notice first is the 50% wage rule: if allowances excluded from wages exceed half of total remuneration, the excess counts as wages, which raises provident fund and gratuity costs for many salary structures. Fixed-term employees now earn gratuity after one year, wages must be paid by set deadlines, final settlements are due within two working days of exit, and the threshold for prior approval of layoffs and closures rises to establishments with 300 workers.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="four-codes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The four labour codes</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Code</th><th scope="col" className="border border-gray-300 p-3 text-left">Main subjects</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Code on Wages, 2019</th><td className="border border-gray-300 p-3">Minimum wages, the definition of wages, payment deadlines, bonus, equal remuneration</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Industrial Relations Code, 2020</th><td className="border border-gray-300 p-3">Standing orders, fixed-term employment, layoffs, retrenchment and closure, trade unions, disputes</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Code on Social Security, 2020</th><td className="border border-gray-300 p-3">Provident fund, ESI, gratuity, maternity benefit, gig and platform workers</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Occupational Safety, Health and Working Conditions Code, 2020</th><td className="border border-gray-300 p-3">Working hours, overtime, leave, safety, registration of establishments, women&apos;s night work with safeguards</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          States issue their own rules under the codes for many points, such as working hours, leave and shops and establishments, so the position can differ by state. Check the rules for each state where you employ people.
        </p>

        <h2 id="wage-rule" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The 50% wage rule</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The codes define wages to include basic pay, dearness allowance and retaining allowance, and exclude items such as house rent allowance, conveyance, overtime, bonus, commission and employer contributions to provident fund. The key rule: if the excluded items together exceed 50% of total remuneration, the amount above 50% is added back to wages.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Example.</strong> An employee earns ₹1,00,000 a month: basic pay of ₹35,000 and allowances of ₹65,000. Excluded items are 65% of remuneration, 15 points above the 50% limit, so ₹15,000 is added back and wages become ₹50,000 for the purposes of the codes. Calculations that use wages, such as gratuity and, depending on how provident fund contributions are set, provident fund, rise accordingly.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Many Indian salary structures were designed with a low basic pay and high allowances. Review structures so that wages are at least 50% of remuneration, and budget for the higher gratuity provision. The take-home pay of employees may fall slightly where provident fund contributions rise.
        </p>

        <h2 id="gratuity" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Gratuity under the codes</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Gratuity remains 15 days&apos; wages for each completed year of service, using the codes&apos; definition of wages, so the 50% rule can increase it.</li>
          <li>Permanent employees qualify after five years of continuous service.</li>
          <li>Fixed-term employees qualify after one year of service.</li>
          <li>The statutory ceiling remains in place; many employers fund the liability through a group gratuity policy.</li>
        </ul>

        <h2 id="pay-and-hours" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Wage payment, working hours and leave</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Topic</th><th scope="col" className="border border-gray-300 p-3 text-left">Position under the codes</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Monthly wages</th><td className="border border-gray-300 p-3">Paid by the 7th day of the following month</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Final settlement on exit</th><td className="border border-gray-300 p-3">Within two working days of resignation, removal, dismissal or retrenchment</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Working hours</th><td className="border border-gray-300 p-3">Up to 8 hours a day and 48 hours a week, subject to state rules</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Overtime</th><td className="border border-gray-300 p-3">Paid at twice the ordinary rate</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Annual leave</th><td className="border border-gray-300 p-3">Earned leave after the qualifying period, with state rules for details</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Women&apos;s night work</th><td className="border border-gray-300 p-3">Allowed with consent and safety measures</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="ir" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Fixed-term employment, layoffs and closure</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Fixed-term employment is recognised for all sectors, with the same hours, wages and benefits as permanent staff doing the same work.</li>
          <li>Prior government approval for layoffs, retrenchment and closure applies to establishments with 300 or more workers, up from 100 under the old law.</li>
          <li>Retrenched workers receive notice and compensation, and contribute to a reskilling fund through the employer.</li>
          <li>Standing orders are required for establishments above the threshold set in the code.</li>
        </ul>

        <h2 id="social" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Social security changes</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Code on Social Security brings gig and platform workers into a social security framework funded partly by aggregators, extends ESI coverage, and consolidates provident fund, ESI, gratuity and maternity benefit rules in one code. For most foreign-owned companies the main day-to-day effect is the wage definition, which feeds into these calculations.
        </p>

        <h2 id="checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">An employer&apos;s checklist</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Recalculate wages for every salary structure against the 50% rule.</li>
          <li>Update offer letters and appointment letters to the codes&apos; terms.</li>
          <li>Re-estimate gratuity liabilities, including for fixed-term staff.</li>
          <li>Set payroll to pay by the 7th and settle exits within two working days.</li>
          <li>Check state rules for working hours, leave and registration.</li>
          <li>Review policies for overtime, night work and fixed-term contracts.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our <Link href="/payroll-expat-services" className="text-blue-800 font-semibold hover:underline">payroll and expat services</Link> cover the payroll side, and country guides such as <Link href="/usa-to-india/indian-labour-codes-for-us-employers" className="text-blue-800 font-semibold hover:underline">the labour codes for US employers</Link> explain how they compare with home-country practice.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India firm of Chartered Accountants and Company Secretaries, serving foreign companies since 2016. We handle the Indian side end to end, with the best pricing, better work support and a free first consultation.
        </p>
        <GuideCTA title={"Updating Your Payroll for the Labour Codes?"} description={"Send us your salary structures and we will check them against the 50% wage rule and estimate the effect on gratuity and provident fund."} />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Labour and Employment", href: "https://labour.gov.in/" },
            { label: "EPFO", href: "https://www.epfindia.gov.in/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Updating Your Payroll for the Labour Codes?"} description={"Send us your salary structures and we will check them against the 50% wage rule and estimate the effect on gratuity and provident fund."} />
    </main>
  )
}
