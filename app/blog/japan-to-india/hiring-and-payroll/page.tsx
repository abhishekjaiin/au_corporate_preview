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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/hiring-and-payroll"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "registrations", label: "Registrations before the first salary" },
  { id: "contracts", label: "Writing Indian employment contracts" },
  { id: "statutory", label: "Statutory contributions" },
  { id: "cycle", label: "The monthly payroll cycle" },
  { id: "japanese-practice", label: "Japanese practices that need rethinking" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does every Indian employee need a written contract?", a: "Yes. A written contract or appointment letter setting out pay, hours, leave and notice is expected under the labour codes." },
  { q: "When does provident fund become compulsory?", a: "From 20 employees, though many Japanese-owned companies register earlier voluntarily." },
  { q: "What is ESI?", a: "Employees' State Insurance, a medical and social security scheme for employees earning up to ₹21,000 a month." },
  { q: "When is gratuity payable?", a: "After five years of continuous service, or one year for fixed-term employees under the labour codes." },
  { q: "Can Japanese retirement allowances be offered in India?", a: "They can be added, but Indian gratuity and provident fund already apply by law, so most groups do not duplicate them." },
  { q: "Is at-will employment possible in India?", a: "No. Termination follows the contract, notice and the procedures in the labour codes." },
  { q: "When is tax on salaries deposited?", a: "By the 7th of the following month, with quarterly TDS returns." },
  { q: "Do the labour codes change salary structures?", a: "Yes. Wages must be at least 50% of total pay for provident fund and gratuity, so allowance-heavy structures may need changing." },
]

const relatedCards = [
  { title: "EOR or Subsidiary", desc: "Hiring before your entity exists.", href: "/japan-to-india/eor-vs-subsidiary" },
  { title: "ESOPs for Indian Employees", desc: "Equity awards from the Japanese parent.", href: "/japan-to-india/esop" },
  { title: "Sending a Japanese Executive to India", desc: "Payroll for chuzaiin.", href: "/japan-to-india/expat-visa" },
  { title: "Compliance Calendar", desc: "Monthly payroll deadlines.", href: "/japan-to-india/compliance-calendar" },
]

export default function HiringAndPayrollPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Hiring and Payroll in India for Japanese Companies: Contracts, PF, ESI and Gratuity"
        description="How Japanese companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "Hiring in India: Contracts, Payroll and Statutory Compliance" },
        ]}
      />

      <GuideHero
        eyebrow="Launch: people and payroll"
        title="Hiring and Payroll in India for Japanese Companies: Contracts, PF, ESI and Gratuity"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Hiring in India means Indian contracts, Indian payroll and Indian statutory benefits, whatever the group&apos;s practice in Japan. Every employee needs a written contract; payroll deducts tax and pays provident fund, and ESI where wages are low enough; gratuity becomes payable after five years; and the four labour codes now set the rules on wages and working conditions. Japanese seniority pay and lifetime employment do not carry over.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="hiring-and-payroll" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Provident fund", "Employer and employee contributions on basic wages; covered from 20 employees, often joined voluntarily earlier"],
                ["ESI", "For employees earning up to ₹21,000 a month"],
                ["Gratuity", "Payable after five years of continuous service (one year for fixed-term staff under the labour codes)"],
                ["Tax on salary", "Deducted by the employer each month and deposited by the 7th of the next month"],
                ["Labour codes", "Four codes on wages, industrial relations, social security and working conditions, reported in force from 21 November 2025"],
                ["Wage definition", "Wages should be at least 50% of total remuneration, which affects provident fund and gratuity"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="registrations" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Registrations before the first salary</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>TAN for deducting tax on salaries, obtained at incorporation.</li>
          <li>Provident fund and ESI registrations as headcount and wage levels require.</li>
          <li>Professional tax registration in states that levy it, such as Karnataka and Maharashtra.</li>
          <li>Shops and establishments registration for the office under state law.</li>
          <li>A payroll bank account and salary structure approved by the board.</li>
        </ul>
        <h2 id="contracts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Writing Indian employment contracts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Clause</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian position</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Note for Japanese groups</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Probation and notice</th>
                <td className="border border-gray-300 p-3">Agreed in the contract, within labour code limits</td>
                <td className="border border-gray-300 p-3">Notice is usually one to three months for staff</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Working hours and overtime</th>
                <td className="border border-gray-300 p-3">Daily and weekly limits; overtime paid at twice the wage rate</td>
                <td className="border border-gray-300 p-3">Long-hours expectations need care</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Leave</th>
                <td className="border border-gray-300 p-3">Earned, sick and casual leave under state rules and the codes</td>
                <td className="border border-gray-300 p-3">Japanese paid-leave rules do not apply</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Termination</th>
                <td className="border border-gray-300 p-3">Notice or pay in lieu, with cause and procedure as required</td>
                <td className="border border-gray-300 p-3">No at-will employment</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">IP and confidentiality</th>
                <td className="border border-gray-300 p-3">Assignment of work product to the employer</td>
                <td className="border border-gray-300 p-3">Assign to the Indian company and onward to the group as needed</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Post-employment restraint</th>
                <td className="border border-gray-300 p-3">Narrowly enforced in India</td>
                <td className="border border-gray-300 p-3">Rely on confidentiality rather than non-competes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="statutory" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Statutory contributions</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Provident fund is the main deduction: employer and employee each contribute on basic wages, and the employer share partly funds the pension scheme. ESI covers medical insurance for lower-paid staff. Gratuity is a lump sum on leaving after five years of service, usually funded through an insurer. Under the labour codes, allowances above half of total pay are added back to wages for these calculations, so salary structures copied from Japan often need adjusting.
        </p>
        <h2 id="cycle" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The monthly payroll cycle</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Collect attendance, leave and any variable pay by the cut-off date.</li>
          <li>Calculate gross pay, tax, provident fund, ESI and professional tax.</li>
          <li>Pay salaries and issue payslips.</li>
          <li>Deposit tax by the 7th and provident fund and ESI by the 15th of the next month.</li>
          <li>File quarterly TDS returns and issue Form 16 after the year end.</li>
        </ol>
        <h2 id="japanese-practice" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Japanese practices that need rethinking</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Seniority-based pay rises: Indian talent markets reward role and performance, and attrition is higher.</li>
          <li>Retirement allowances (taishokukin): Indian gratuity and provident fund already cover this ground by law.</li>
          <li>Twice-yearly bonuses: possible, but statutory bonus rules and the wage definition affect how they are structured.</li>
          <li>Lifetime employment expectations: Indian employees change jobs more often, so retention plans matter early.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We register the subsidiary for payroll, draft employment contracts for Indian law, and run the monthly payroll with tax, provident fund, ESI and gratuity, reporting in the format your Japanese HR team uses.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/payroll-expat-services" className="text-blue-800 font-semibold hover:underline">payroll and expat services</Link> and <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/hiring-and-payroll" />
        <GuideCTA
          title="Building your India team?"
          description="Tell us the roles and headcount, and we will set up payroll and contracts."
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
            { label: "Ministry of Labour and Employment", href: "https://labour.gov.in" },
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
            { label: "Employees' State Insurance Corporation", href: "https://www.esic.gov.in" },
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
        title="Building Your Team in India?"
        description="Tell us your planned roles and headcount, and we'll set up payroll, PF and ESI registration and employment contracts for the subsidiary."
      />
    </main>
  )
}
