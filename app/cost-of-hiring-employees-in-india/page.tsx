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

const PAGE_URL = "https://www.theaucorp.com/cost-of-hiring-employees-in-india"

const toc = [
  { id: "ctc", label: "Start with CTC: what Indian salaries include" },
  { id: "statutory", label: "Statutory employer contributions" },
  { id: "examples", label: "Worked examples at three salary levels" },
  { id: "one-off", label: "One-off costs of hiring" },
  { id: "entity", label: "Your own company or an employer of record" },
  { id: "labour-codes", label: "How the labour codes affect cost" },
  { id: "city", label: "Salary differences by city" },
  { id: "payroll-setup", label: "Payroll registrations before the first salary" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How much does it cost to hire an employee in India?", a: "The agreed CTC plus insurance, recruitment, equipment and office costs; in our examples the first year costs about 18% to 48% above CTC, depending mainly on the salary level, and later years less." },
  { q: "Does CTC include provident fund?", a: "Usually yes: the employer's 12% contribution is normally part of CTC." },
  { q: "What statutory contributions does an employer pay in India?", a: "Provident fund, ESI for employees earning up to ₹21,000 a month, gratuity, statutory bonus for lower-paid staff and labour welfare fund in some states." },
  { q: "What is the gratuity cost?", a: "About 4.81% of basic wages a year as a provision, paid out after five years of service, or one year for fixed-term staff." },
  { q: "Is it cheaper to use an employer of record?", a: "For a small team, often yes; above about 15 to 20 people your own company is usually cheaper." },
]

const relatedCards = [
  { title: "Payroll and expat services", desc: "Payroll, provident fund, ESI and expat tax.", href: "/payroll-expat-services" },
  { title: "New labour codes", desc: "The 50% wage rule and gratuity.", href: "/new-labour-codes-india-50-percent-wage-rule-gratuity" },
  { title: "Cost of setting up a subsidiary", desc: "The entity you hire through.", href: "/cost-of-setting-up-a-subsidiary-in-india" },
]

export default function CostOfHiringEmployeesInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"Cost of Hiring Employees in India: Salary, Statutory Contributions and the True Employer Cost"}
        description={"What an employee really costs in India: CTC, employer provident fund, ESI, gratuity, bonus, insurance, recruitment and office costs, with worked examples at three salary levels."}
        datePublished="2026-11-07"
        dateModified="2026-11-07"
        inLanguage="en"
      />

      <Breadcrumb items={[{ label: "Cost of Hiring Employees" }]} />

      <GuideHero eyebrow={"Hiring and payroll costs"} title={"Cost of Hiring Employees in India: Salary, Statutory Contributions and the True Employer Cost"} updated="7 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The cost of hiring employees in India starts with the cost to company (CTC), the annual package quoted to the candidate, which usually already includes the employer&apos;s provident fund contribution and the gratuity provision. On top of CTC, budget for group health insurance if not built in, recruitment fees, equipment and office space, payroll processing and, for lower-paid staff, ESI and statutory bonus where not already included. In our worked examples, the first-year employer cost is about 18% above CTC for a senior manager and up to about 48% above for a junior role, because office space, equipment and recruitment weigh more heavily on lower salaries; later years cost less once the one-off hiring costs fall away.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="ctc" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Start with CTC: what Indian salaries include</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">CTC component</th><th scope="col" className="border border-gray-300 p-3 text-left">Typical treatment</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Basic salary</th><td className="border border-gray-300 p-3">At least 50% of total remuneration under the labour codes&apos; wage rule</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">House rent allowance and other allowances</th><td className="border border-gray-300 p-3">Part of CTC; partly tax-free for the employee</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Employer provident fund</th><td className="border border-gray-300 p-3">12% of basic wages; often limited to 12% of ₹15,000 a month by policy, or paid on full basic</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Gratuity provision</th><td className="border border-gray-300 p-3">About 4.81% of basic wages (15 days&apos; wages for every 12 months, on 26 working days a month)</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Variable pay</th><td className="border border-gray-300 p-3">Annual bonus or incentive, often 10% to 20% of CTC for professionals</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Insurance</th><td className="border border-gray-300 p-3">Group health cover is sometimes built into CTC, sometimes paid on top</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Because CTC includes employer contributions, take-home pay is lower than CTC divided by twelve: employee provident fund, professional tax and income tax are deducted from the gross salary.
        </p>

        <h2 id="statutory" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Statutory employer contributions</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Contribution</th><th scope="col" className="border border-gray-300 p-3 text-left">Who it applies to</th><th scope="col" className="border border-gray-300 p-3 text-left">Employer cost</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Provident fund (EPF)</th><td className="border border-gray-300 p-3">Establishments with 20 or more employees, and many smaller employers voluntarily</td><td className="border border-gray-300 p-3">12% of basic wages, plus small administration and insurance charges</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Employees&apos; State Insurance (ESI)</th><td className="border border-gray-300 p-3">Employees earning up to ₹21,000 a month, in covered areas</td><td className="border border-gray-300 p-3">3.25% of wages (employee contributes 0.75%)</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Gratuity</th><td className="border border-gray-300 p-3">After five years of service, or one year for fixed-term staff</td><td className="border border-gray-300 p-3">15 days&apos; wages per year of service, capped at ₹20 lakh</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Statutory bonus</th><td className="border border-gray-300 p-3">Employees earning up to the bonus threshold under the bonus law</td><td className="border border-gray-300 p-3">At least 8.33% of the bonus-calculation wage</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Labour welfare fund</th><td className="border border-gray-300 p-3">In states that levy it</td><td className="border border-gray-300 p-3">A small fixed amount</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Professional tax</th><td className="border border-gray-300 p-3">Deducted from the employee in states that levy it</td><td className="border border-gray-300 p-3">No employer cost beyond administration</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          For most professionals earning well above ₹21,000 a month, ESI and statutory bonus do not apply, and the main statutory costs are provident fund and gratuity.
        </p>

        <h2 id="examples" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Worked examples at three salary levels</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Item (annual, ₹)</th><th scope="col" className="border border-gray-300 p-3 text-left">Support executive</th><th scope="col" className="border border-gray-300 p-3 text-left">Software engineer</th><th scope="col" className="border border-gray-300 p-3 text-left">Engineering manager</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Agreed CTC</th><td className="border border-gray-300 p-3">4,00,000</td><td className="border border-gray-300 p-3">12,00,000</td><td className="border border-gray-300 p-3">35,00,000</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Of which basic salary (50%)</th><td className="border border-gray-300 p-3">2,00,000</td><td className="border border-gray-300 p-3">6,00,000</td><td className="border border-gray-300 p-3">17,50,000</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Employer provident fund inside CTC (on basic capped at ₹15,000 a month)</th><td className="border border-gray-300 p-3">21,600</td><td className="border border-gray-300 p-3">21,600</td><td className="border border-gray-300 p-3">21,600</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Gratuity provision inside CTC (about 4.81% of basic)</th><td className="border border-gray-300 p-3">9,620</td><td className="border border-gray-300 p-3">28,860</td><td className="border border-gray-300 p-3">84,175</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Group health insurance on top (illustrative)</th><td className="border border-gray-300 p-3">10,000</td><td className="border border-gray-300 p-3">15,000</td><td className="border border-gray-300 p-3">25,000</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Equipment and software, first year (illustrative)</th><td className="border border-gray-300 p-3">60,000</td><td className="border border-gray-300 p-3">1,20,000</td><td className="border border-gray-300 p-3">1,50,000</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Recruitment fee, first year only (illustrative 8.33% of CTC)</th><td className="border border-gray-300 p-3">33,320</td><td className="border border-gray-300 p-3">99,960</td><td className="border border-gray-300 p-3">2,91,550</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Office seat for a year (illustrative)</th><td className="border border-gray-300 p-3">90,000</td><td className="border border-gray-300 p-3">1,20,000</td><td className="border border-gray-300 p-3">1,50,000</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Indicative first-year employer cost</th><td className="border border-gray-300 p-3">5,93,320</td><td className="border border-gray-300 p-3">15,54,960</td><td className="border border-gray-300 p-3">41,16,550</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          The figures for insurance, equipment, recruitment and office seats are illustrative and vary widely by city, role and supplier. Salaries vary even more by city and skill; Bengaluru, the National Capital Region, Mumbai and Hyderabad are generally the most expensive. Ask us for a costing using your own roles and cities.
        </p>

        <h2 id="one-off" className="text-2xl font-bold text-gray-900 mt-12 mb-4">One-off costs of hiring</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Recruitment:</strong> agency fees commonly range from about 8% to 15% of annual CTC; job boards and in-house recruiters cost less per hire.</li>
          <li><strong>Notice period buy-outs:</strong> many candidates have one to three months&apos; notice; buying out the notice adds cost.</li>
          <li><strong>Joining bonus:</strong> common for experienced or scarce skills.</li>
          <li><strong>Background checks and onboarding.</strong></li>
          <li><strong>Equipment:</strong> laptop, software licences and access.</li>
        </ul>

        <h2 id="entity" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Your own company or an employer of record</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          To hire in India you need an employing entity. You can hire through your own Indian company, which has fixed set-up and compliance costs but no per-head fee, or through an employer of record (EOR), which employs staff on its own contracts for a monthly fee per employee. For a small team, an EOR avoids the set-up cost; above roughly 15 to 20 people, your own company is usually cheaper. See <Link href="/cost-of-setting-up-a-subsidiary-in-india" className="text-blue-800 font-semibold hover:underline">the cost of setting up a subsidiary</Link> for the entity side, and <Link href="/employee-benefits-in-india-for-foreign-companies" className="text-blue-800 font-semibold hover:underline">employee benefits in India</Link> for insurance and other benefits.
        </p>

        <h2 id="labour-codes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the labour codes affect cost</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Under the labour codes in force since 21 November 2025, wages must be at least 50% of total remuneration for calculations such as gratuity. Salary structures with a low basic pay and high allowances now produce higher gratuity provisions, and possibly higher provident fund. Fixed-term staff earn gratuity after one year. See <Link href="/new-labour-codes-india-50-percent-wage-rule-gratuity" className="text-blue-800 font-semibold hover:underline">India&apos;s new labour codes</Link> for detail.
        </p>
        <h2 id="city" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Salary differences by city</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Salaries for the same role vary noticeably between Indian cities. Bengaluru, Mumbai, the National Capital Region and Hyderabad usually pay the most for technology and finance roles, Pune and Chennai slightly less, and smaller cities such as Coimbatore, Kochi, Jaipur or Ahmedabad less again, with a smaller but growing talent pool. Office rents follow a similar pattern. Many groups place a first team in a large city for access to experienced people, then open a second site in a smaller city as they grow.
        </p>
        <h2 id="payroll-setup" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Payroll registrations before the first salary</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Before paying the first salary, the employer registers for provident fund and, where applicable, ESI and professional tax, and under the state shops and establishments law. Payroll then runs monthly: income tax deducted and deposited by the 7th, provident fund and ESI by the 15th, and quarterly tax returns. See our <Link href="/payroll-expat-services" className="text-blue-800 font-semibold hover:underline">payroll and expat services</Link>.
        </p>



        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India firm of Chartered Accountants and Company Secretaries, serving foreign companies since 2016. We handle the Indian side end to end, with the best pricing, better work support and a free first consultation.
        </p>
        <GuideCTA title={"Want a Costing for Your Indian Team?"} description={"Send us the roles, cities and start dates, and we will prepare an employer cost estimate and a payroll plan."} />

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
            { label: "ESIC", href: "https://www.esic.gov.in/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 7 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Want a Costing for Your Indian Team?"} description={"Send us the roles, cities and start dates, and we will prepare an employer cost estimate and a payroll plan."} />
    </main>
  )
}
