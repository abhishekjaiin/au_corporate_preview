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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/hiring-and-payroll"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "translation", label: "Translating Australian employment concepts" },
  { id: "setup", label: "Payroll set-up" },
  { id: "contracts", label: "Contract essentials" },
  { id: "cycle", label: "Each month" },
  { id: "retention", label: "Retention in the Indian market" },
  { id: "ctc", label: "Reading an Indian offer: cost to company (CTC)" },
  { id: "leave-holidays", label: "Leave, holidays and working hours" },
  { id: "gratuity", label: "Gratuity: India's long service payment" },
  { id: "onboarding", label: "Onboarding checklist for a new Indian hire" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does superannuation apply to Indian employees?", a: "No. Indian employees join the provident fund instead." },
  { q: "Do modern awards apply in India?", a: "No. The labour codes and state rules set minimum terms." },
  { q: "When is gratuity payable?", a: "After five years of continuous service, or one year for fixed-term staff under the codes." },
  { q: "Is there payroll tax in India?", a: "There is no state payroll tax, but some states levy a small professional tax." },
  { q: "What is ESI?", a: "A medical and social security scheme for employees earning up to ₹21,000 a month." },
  { q: "When must provident fund be paid?", a: "By the 15th of the following month." },
  { q: "Can Indian staff join the Australian share plan?", a: "Yes, subject to Indian tax and FEMA rules and Australian securities law." },
  { q: "Are non-competes enforceable in India?", a: "Post-employment restraints are narrowly enforced, so confidentiality terms matter more." },
  { q: "What does CTC mean?", a: "Cost to company: the employer's total annual cost, including employer provident fund, gratuity provision and benefits." },
  { q: "What documents does a new Indian employee provide?", a: "PAN, Aadhaar, bank details, any existing provident fund account number and details of income from a previous employer in the year." },
  { q: "When must salaries be paid in India?", a: "Under the labour codes, wages are generally paid by the 7th of the following month, or earlier where the contract or state rules say so." },
  { q: "Is a probation period allowed?", a: "Yes. Indian contracts commonly set three to six months of probation, with a shorter notice period during it." },
]

const relatedCards = [
  { title: "EOR or Subsidiary", desc: "Hiring before your entity.", href: "/australia-to-india/eor-vs-subsidiary" },
  { title: "ESOPs for Indian Employees", desc: "Australian plan awards.", href: "/australia-to-india/esop" },
  { title: "Sending Australian Staff to India", desc: "Payroll for secondees.", href: "/australia-to-india/expat-visa" },
  { title: "Compliance Calendar", desc: "Payroll deadlines.", href: "/australia-to-india/compliance-calendar" },
]

export default function HiringAndPayrollPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Hiring and Payroll in India for Australian Companies: Contracts, PF, ESI and Gratuity"
        description="How Australian companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes."
        datePublished="2026-10-15"
        dateModified="2026-11-13"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "Hiring in India: Contracts, Payroll and Statutory Compliance" },
        ]}
      />

      <GuideHero
        eyebrow="Launch: people and payroll"
        title="Hiring and Payroll in India for Australian Companies: Contracts, PF, ESI and Gratuity"
        updated="13 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Indian staff of an Australian-owned subsidiary are employed under Indian law, not Fair Work or modern awards. Payroll deducts income tax monthly, pays provident fund in place of superannuation, adds ESI for lower-paid staff, and accrues gratuity, payable after five years of service. The four labour codes set wage, hours and termination rules, and state shops and establishments laws add local requirements.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="hiring-and-payroll" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Instead of superannuation", "Employees' provident fund, with employer and employee contributions"],
                ["Instead of workers' compensation", "ESI for employees earning up to ₹21,000 a month; employer liability rules otherwise"],
                ["Long service", "Gratuity after five years of continuous service"],
                ["Leave", "Under state shops and establishments rules and the labour codes"],
                ["Labour codes", "Four codes reported in force from 21 November 2025; wages at least 50% of total pay"],
                ["Tax deposit", "By the 7th of the following month"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="translation" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Translating Australian employment concepts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Australian concept</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian equivalent</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Superannuation guarantee</th>
                <td className="border border-gray-300 p-3">Provident fund</td>
                <td className="border border-gray-300 p-3">Calculated on basic wages; covered from 20 employees, often joined voluntarily earlier</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Long service leave</th>
                <td className="border border-gray-300 p-3">Gratuity</td>
                <td className="border border-gray-300 p-3">Lump sum after five years; one year for fixed-term staff under the codes</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Modern awards and NES</th>
                <td className="border border-gray-300 p-3">Labour codes and state rules</td>
                <td className="border border-gray-300 p-3">Minimum wages vary by state and skill</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">PAYG withholding</th>
                <td className="border border-gray-300 p-3">TDS on salary</td>
                <td className="border border-gray-300 p-3">Monthly deduction and quarterly returns</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Payroll tax</th>
                <td className="border border-gray-300 p-3">No state payroll tax; professional tax in some states</td>
                <td className="border border-gray-300 p-3">Small monthly amount per employee</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="setup" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Payroll set-up</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>TAN, issued at incorporation.</li>
          <li>Provident fund and ESI registrations as headcount and wages require.</li>
          <li>Professional tax registration in states such as Karnataka and Maharashtra.</li>
          <li>Shops and establishments registration for the office.</li>
          <li>A salary structure that meets the 50% wage rule.</li>
        </ol>
        <h2 id="contracts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contract essentials</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Probation, notice and termination in line with the labour codes.</li>
          <li>Hours, overtime at twice the wage rate, and leave under state rules.</li>
          <li>IP assignment and confidentiality, with onward assignment to the Australian parent where needed.</li>
          <li>Restraints after employment are narrowly enforced, so rely on confidentiality.</li>
        </ul>
        <h2 id="cycle" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Each month</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Lock attendance and variable pay.</li>
          <li>Calculate tax, provident fund, ESI and professional tax.</li>
          <li>Pay salaries and issue payslips.</li>
          <li>Deposit tax by the 7th and provident fund and ESI by the 15th.</li>
          <li>File quarterly TDS returns and issue annual Form 16.</li>
        </ol>
        <h2 id="retention" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Retention in the Indian market</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian technology and finance markets move quickly, and annual increments, variable pay and career paths matter more than in many Australian teams. Budget for annual salary reviews and plan a retention approach, such as participation in the Australian share plan, from the first year.
        </p>
        <h2 id="ctc" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Reading an Indian offer: cost to company (CTC)</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Indian salaries are quoted as an annual cost to company (CTC), not as an hourly or base salary plus super. CTC includes everything the employer spends:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Component</th><th scope="col" className="border border-gray-300 p-3 text-left">Note</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Basic salary</th><td className="border border-gray-300 p-3">Wages must be at least 50% of total remuneration under the labour codes</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">House rent allowance and other allowances</th><td className="border border-gray-300 p-3">Partly tax-free depending on the employee&apos;s situation</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Employer provident fund</th><td className="border border-gray-300 p-3">12% of basic wages, often capped by policy</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Gratuity provision</th><td className="border border-gray-300 p-3">Accrued yearly, paid after five years of service</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Insurance</th><td className="border border-gray-300 p-3">Group health cover is expected in most offers</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Variable pay</th><td className="border border-gray-300 p-3">Annual bonus or incentive</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Take-home pay is noticeably lower than CTC divided by twelve, because employee provident fund, professional tax and income tax are deducted. Candidates compare offers on CTC, so quote it the same way.
        </p>

        <h2 id="leave-holidays" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Leave, holidays and working hours</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Three national holidays plus state festival holidays, which vary by state.</li>
          <li>Earned and sick leave minimums under the state shops and establishments law; most employers offer more.</li>
          <li>26 weeks of paid maternity leave for eligible employees.</li>
          <li>Working hours and overtime limits set by state law and the labour codes; overtime is paid at twice the wage rate.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Indian teams supporting Australia often work shifted hours to overlap with Sydney or Melbourne. Agree the shift pattern, any shift allowance and transport for late shifts in the contract.
        </p>

        <h2 id="gratuity" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Gratuity: India&apos;s long service payment</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Gratuity is 15 days&apos; wages for each completed year of service, calculated on 26 working days a month and capped at ₹20 lakh. It is payable after five years of continuous service, or after one year for fixed-term staff under the codes. Many Australian-owned companies fund it through a group gratuity policy with an insurer so the cost is spread over time.
        </p>
        <h2 id="onboarding" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Onboarding checklist for a new Indian hire</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Signed offer letter and appointment letter showing CTC, role, notice period and confidentiality terms.</li>
          <li>Copies of PAN, Aadhaar and bank details for salary and tax.</li>
          <li>Provident fund nomination and the universal account number, if the employee already has one.</li>
          <li>Declaration of the previous employer&apos;s income for the year, so tax is deducted correctly.</li>
          <li>Background and education checks where the role needs them.</li>
          <li>Acceptance of the IT, data and code-of-conduct policies of the Australian group, adapted to Indian law.</li>
        </ol>



        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We register the subsidiary for payroll, draft Indian employment contracts and run monthly payroll with tax, provident fund, ESI and gratuity, reporting in the format your Australian team uses.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/payroll-expat-services" className="text-blue-800 font-semibold hover:underline">payroll and expat services</Link> and <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/hiring-and-payroll" />
        <GuideCTA
          title="Building your India team?"
          description="Tell us the roles and headcount, and we will set up payroll and contracts."
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
            { label: "Ministry of Labour and Employment", href: "https://labour.gov.in" },
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
            { label: "Employees' State Insurance Corporation", href: "https://www.esic.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Hiring Your First Employees in India?"
        description="Tell us your planned headcount and roles — we'll map payroll, PF/ESI registration and employment contracts for your subsidiary."
      />
    </main>
  )
}
