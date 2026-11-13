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

const PAGE_URL = "https://www.theaucorp.com/employee-benefits-in-india-for-foreign-companies"

const toc = [
  { id: "statutory", label: "Statutory employee benefits" },
  { id: "insurance", label: "Group health, life and accident insurance" },
  { id: "how-insure", label: "How foreign companies insure employees in India" },
  { id: "extras", label: "Benefits candidates often expect" },
  { id: "by-country", label: "Notes for Singapore, UK, German and US employers" },
  { id: "budget", label: "Budgeting for benefits" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What employee benefits are mandatory in India?", a: "Provident fund, ESI for employees earning up to ₹21,000 a month, gratuity, maternity benefit, statutory bonus for eligible employees, and paid leave and holidays." },
  { q: "Is health insurance mandatory for employees in India?", a: "Not above the ESI level, but group health insurance is standard for foreign-owned and technology employers." },
  { q: "How do Singapore companies insure employees in India?", a: "Through a group policy from an Indian insurer issued to their Indian company or an employer of record, because CPF and MediSave do not cover staff in India." },
  { q: "Can a foreign group's global health plan cover Indian employees?", a: "Usually through a local Indian policy linked to the global programme, or an international plan that includes India." },
  { q: "Does a UK pension cover staff hired in India?", a: "No. Staff hired in India join Indian provident fund; UK pensions continue only for UK employees on assignment under the applicable rules." },
  { q: "Is gratuity part of employee benefits?", a: "Yes. It is a statutory benefit paid after five years of service, or one year for fixed-term staff." },
]

const relatedCards = [
  { title: "Cost of hiring employees in India", desc: "Employer costs with worked examples.", href: "/cost-of-hiring-employees-in-india" },
  { title: "Payroll and expat services", desc: "Payroll and statutory registrations.", href: "/payroll-expat-services" },
  { title: "New labour codes", desc: "The 50% wage rule and gratuity.", href: "/new-labour-codes-india-50-percent-wage-rule-gratuity" },
]

export default function EmployeeBenefitsInIndiaForForeignCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"Employee Benefits in India for Foreign Companies: Statutory Benefits, Group Insurance and What Candidates Expect"}
        description={"Employee benefits in India for Singapore, UK, German, US and other foreign companies: provident fund, ESI, gratuity, leave, group health insurance and typical extras."}
        datePublished="2026-11-07"
        dateModified="2026-11-07"
        inLanguage="en"
      />

      <Breadcrumb items={[{ label: "Employee Benefits in India" }]} />

      <GuideHero eyebrow={"Guide: employee benefits"} title={"Employee Benefits in India for Foreign Companies: Statutory Benefits, Group Insurance and What Candidates Expect"} updated="7 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Employee benefits in India have two layers. Statutory benefits are required by law: provident fund, Employees&apos; State Insurance for lower-paid staff, gratuity after five years (one year for fixed-term staff), maternity benefit, statutory bonus for eligible employees, and paid leave and holidays under state law. On top, foreign-owned employers almost always add group health insurance for the employee and family, group term life and accident cover, because skilled candidates expect them. Home-country plans such as a 401(k), CPF, UK pension or German statutory insurance do not cover staff hired in India, and Indian group policies are issued by Indian insurers to an Indian employer, so benefits are normally set up through the Indian company or an employer of record.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="statutory" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Statutory employee benefits</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Benefit</th><th scope="col" className="border border-gray-300 p-3 text-left">Who is covered</th><th scope="col" className="border border-gray-300 p-3 text-left">Employer contribution or cost</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Provident fund (EPF)</th><td className="border border-gray-300 p-3">Establishments with 20 or more employees, and many smaller employers voluntarily</td><td className="border border-gray-300 p-3">12% of basic wages, plus small administration and insurance charges</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Employees&apos; State Insurance (ESI)</th><td className="border border-gray-300 p-3">Employees earning up to ₹21,000 a month in covered areas</td><td className="border border-gray-300 p-3">3.25% of wages; provides medical care and cash benefits</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Gratuity</th><td className="border border-gray-300 p-3">After five years of service, or one year for fixed-term staff</td><td className="border border-gray-300 p-3">15 days&apos; wages for each year of service, capped at ₹20 lakh</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Maternity benefit</th><td className="border border-gray-300 p-3">Eligible women employees</td><td className="border border-gray-300 p-3">26 weeks of paid leave, plus related facilities in larger establishments</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Statutory bonus</th><td className="border border-gray-300 p-3">Employees earning up to the threshold in the bonus law</td><td className="border border-gray-300 p-3">At least 8.33% of the bonus-calculation wage</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Leave and holidays</th><td className="border border-gray-300 p-3">All employees</td><td className="border border-gray-300 p-3">National and state holidays, earned and sick leave under state law</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Under the labour codes in force since 21 November 2025, wages for these calculations must be at least 50% of total remuneration, which raises gratuity and possibly provident fund costs for salary structures with high allowances. See <Link href="/new-labour-codes-india-50-percent-wage-rule-gratuity" className="text-blue-800 font-semibold hover:underline">India&apos;s new labour codes</Link>.
        </p>

        <h2 id="insurance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Group health, life and accident insurance</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Group health insurance is not a legal requirement above the ESI level, but it is standard for multinational and technology employers, and candidates compare it when choosing between offers. A typical package includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Group medical cover</strong> for the employee, spouse, children and often parents, with a sum insured per family and cashless treatment at network hospitals.</li>
          <li><strong>Group term life insurance</strong>, often a multiple of annual salary.</li>
          <li><strong>Group personal accident cover</strong> for death or disability from accidents.</li>
          <li><strong>Optional top-ups</strong> that employees can buy for parents or higher cover.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Indian group policies are issued by insurers registered with the Insurance Regulatory and Development Authority of India to an Indian employer, usually through a broker. A group policy can usually be placed within one to two weeks once the Indian company and payroll are in place. A foreign company without an Indian entity normally covers India-based staff through an employer of record&apos;s group policy, or through an international health plan that includes India.
        </p>

        <h2 id="how-insure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How foreign companies insure employees in India</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Set up the employing entity: your own Indian company, or an employer of record.</li>
          <li>Choose a broker or insurer and define the cover: sum insured, family members, parents, maternity, waiting periods.</li>
          <li>Decide the employer&apos;s share of the premium and any employee top-ups.</li>
          <li>Enrol employees and dependants, and issue health cards.</li>
          <li>Renew annually, reviewing claims experience and the market.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          Global benefits programmes run by the parent usually connect to India through this local policy, with reporting to the group&apos;s benefits team.
        </p>

        <h2 id="extras" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Benefits candidates often expect</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Benefit</th><th scope="col" className="border border-gray-300 p-3 text-left">Notes</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Meal allowance or cards</th><td className="border border-gray-300 p-3">Common in technology and services companies</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Employer contribution to the National Pension System</th><td className="border border-gray-300 p-3">Tax-efficient for employees within the limits set in the tax law</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Mobile, internet and work-from-home allowances</th><td className="border border-gray-300 p-3">Common for hybrid teams</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Wellness, gym and learning budgets</th><td className="border border-gray-300 p-3">Used to support retention</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Transport for late shifts</th><td className="border border-gray-300 p-3">Expected where teams support time zones in Europe or the Americas</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Equity awards</th><td className="border border-gray-300 p-3">Parent ESOP or RSU plans; see <Link href="/esop-india-foreign-owned-companies" className="text-blue-800 font-semibold hover:underline">ESOPs for foreign-owned companies</Link></td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="by-country" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Notes for Singapore, UK, German and US employers</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Parent country</th><th scope="col" className="border border-gray-300 p-3 text-left">What does not carry over</th><th scope="col" className="border border-gray-300 p-3 text-left">Point to note</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Singapore</th><td className="border border-gray-300 p-3">CPF and MediSave</td><td className="border border-gray-300 p-3">Singapore citizens are exempt from Indian provident fund under the CECA; other staff contribute as international workers</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">UK</th><td className="border border-gray-300 p-3">Workplace pension and UK health cover</td><td className="border border-gray-300 p-3">UK staff on covered temporary assignments with a certificate of coverage stay in UK National Insurance under the Double Contributions Convention</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Germany</th><td className="border border-gray-300 p-3">Statutory health, pension and unemployment insurance for local Indian hires</td><td className="border border-gray-300 p-3">Posted German staff can stay in German social insurance for up to 48 months (plus 12) with a certificate of coverage</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">USA</th><td className="border border-gray-300 p-3">401(k) and US health plans</td><td className="border border-gray-300 p-3">Locally hired staff join Indian provident fund; US expatriates contribute as international workers unless an agreement applies</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Country guides: <Link href="/singapore-to-india/singapore-employees-in-india-epf-cpf" className="text-blue-800 font-semibold hover:underline">Singapore employees in India</Link>, <Link href="/uk-to-india/uk-employees-in-india-dcc" className="text-blue-800 font-semibold hover:underline">UK employees in India</Link>, <Link href="/germany-to-india/german-employees-in-india-ssa" className="text-blue-800 font-semibold hover:underline">German employees in India</Link> and <Link href="/usa-to-india/hiring-and-payroll" className="text-blue-800 font-semibold hover:underline">hiring and payroll for US companies</Link>.
        </p>

        <h2 id="budget" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Budgeting for benefits</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Most Indian offers are quoted as cost to company (CTC), which normally includes the employer&apos;s provident fund contribution and the gratuity provision. Group insurance may be inside or outside CTC; state which in the offer letter. For a full employer-cost view with worked examples, see <Link href="/cost-of-hiring-employees-in-india" className="text-blue-800 font-semibold hover:underline">the cost of hiring employees in India</Link>.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate sets up payroll and statutory registrations for foreign-owned Indian companies, runs provident fund, ESI and gratuity calculations, and coordinates group insurance with Indian brokers and insurers. We offer the best pricing with better work support, and the first consultation is free.
        </p>
        <GuideCTA title={"Setting Up Benefits for Your Indian Team?"} description={"Tell us your team size, cities and the benefits you offer at home, and we will propose an Indian package in a free consultation."} />

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
            { label: "IRDAI", href: "https://irdai.gov.in/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 7 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Setting Up Benefits for Your Indian Team?"} description={"Tell us your team size, cities and the benefits you offer at home, and we will propose an Indian package in a free consultation."} />
    </main>
  )
}
