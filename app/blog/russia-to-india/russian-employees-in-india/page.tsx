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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/russian-employees-in-india"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "tax", label: "Indian tax on Russian employees" },
  { id: "treaty", label: "The treaty day count" },
  { id: "pf", label: "Provident fund with no agreement" },
  { id: "russian-side", label: "Russian tax and contributions" },
  { id: "policy", label: "Writing the assignment policy" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is there an India-Russia social security agreement?", a: "No, so Russian employees on Indian payroll generally contribute to provident fund as international workers." },
  { q: "On what amount is provident fund paid for international workers?", a: "On full salary, with no wage ceiling." },
  { q: "When does a Russian employee become Indian tax resident?", a: "Usually after 182 days in the Indian financial year." },
  { q: "Can a short assignment be exempt from Indian tax?", a: "Only if the treaty's day count and employer conditions are met." },
  { q: "Does a cost recharge to India affect the treaty exemption?", a: "Yes. If the Indian company bears the cost, the exemption is not available." },
  { q: "Are housing allowances taxable in India?", a: "Generally yes, as perquisites." },
  { q: "Do Russian contributions continue?", a: "They may, for employees kept on Russian contracts; confirm with a Russian adviser." },
  { q: "Who deducts Indian tax?", a: "The Indian employer, through payroll." },
]

const relatedCards = [
  { title: "Relocating Russian Staff", desc: "Visas and registration.", href: "/russia-to-india/relocate-russian-staff" },
  { title: "Hiring in India", desc: "Payroll for local staff.", href: "/russia-to-india/hiring-in-india" },
  { title: "India-Russia DTAA", desc: "The employment article.", href: "/russia-to-india/india-russia-dtaa" },
  { title: "Compliance Calendar", desc: "Payroll dates.", href: "/russia-to-india/compliance-calendar" },
]

export default function RussianEmployeesInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Russian Employees in India: Salary Tax, the Treaty Day Count, EPF for International Workers and Russian Social Insurance"
        description="What a Russian employer must plan for staff in India: Indian salary tax and the treaty test, EPF for international workers, no social security agreement, Russian insurance contributions and secondment contracts."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Russian Employees in India: Income Tax, Provident Fund and Russian Social Contributions" },
        ]}
      />

      <GuideHero
        eyebrow="People: tax and social security"
        title="Russian Employees in India: Salary Tax, the Treaty Day Count, EPF for International Workers and Russian Social Insurance"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Russian employees working in India pay Indian tax on salary for their Indian work, usually become Indian tax resident after 182 days in an Indian financial year, and generally contribute to the Indian provident fund as international workers, on full salary, because India and Russia have no social security agreement. Russian social contributions may also continue under Russian law, so employers should budget for both systems.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="foreign-employee-treaty-ssa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Indian salary tax", "Salary for work in India is taxable in India; employer deducts under Section 392"],
                ["Residence", "Usually from 182 days in the Indian financial year"],
                ["Short-stay relief", "Treaty employment article, only if the day count and employer conditions are met"],
                ["Social security agreement", "None between India and Russia"],
                ["Indian provident fund", "International worker rules: contributions on full wages"],
                ["Russian side", "Residents taxed on worldwide income with credit; contributions may continue"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian tax on Russian employees</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Salary for work performed in India is taxed in India from the first day, whoever pays it. The Indian subsidiary deducts tax through payroll and deposits it by the 7th of the next month. Allowances for housing, schooling and travel are generally taxable perquisites. Once the employee stays 182 days or more in an Indian financial year, he or she is usually resident in India and taxed there on wider income.
        </p>
        <h2 id="treaty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The treaty day count</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The India-Russia treaty can exempt a short assignment from Indian tax only if the employee is in India for no more than 183 days in the relevant period, the salary is paid by an employer not resident in India, and the cost is not borne by an Indian permanent establishment. A secondee whose cost is recharged to the Indian subsidiary does not qualify.
        </p>
        <h2 id="pf" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Provident fund with no agreement</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Situation</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian provident fund</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Russian employee on the Indian payroll</th>
                <td className="border border-gray-300 p-3">Covered as an international worker on full salary</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Russian employee paid from Russia while working for the Indian company</th>
                <td className="border border-gray-300 p-3">Usually still covered if employed by the Indian establishment</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Short business visitor employed only in Russia</th>
                <td className="border border-gray-300 p-3">Generally not covered</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          Because there is no India-Russia social security agreement, no certificate of coverage is available. Contributions on full salary are a real cost, and withdrawal rules for international workers are restrictive.
        </p>
        <h2 id="russian-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Russian tax and contributions</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Russian tax residents are taxed on worldwide income, with credit for foreign tax; an employee who spends most of the year in India may lose Russian tax residence. Russian social contributions may continue for employees kept on a Russian contract. Confirm both positions with a Russian adviser before the assignment starts.
        </p>
        <h2 id="policy" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Writing the assignment policy</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>State who employs the employee and who bears the Indian cost.</li>
          <li>Decide whether the company equalises tax or the employee bears the difference.</li>
          <li>Budget for Indian provident fund on full salary.</li>
          <li>Keep a day-count log for treaty and residence tests.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We run Indian payroll and provident fund for Russian staff, review the treaty position, and file their Indian tax returns.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/payroll-expat-services" className="text-blue-800 font-semibold hover:underline">payroll and expat services</Link> and <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link>.
        </p>

        <GuideServiceBox path="/russia-to-india/russian-employees-in-india" />
        <GuideCTA
          title="Employing Russian staff in India?"
          description="Tell us who is moving and for how long, and we will map tax and provident fund."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/russia-to-india/faq"
          seeAllLabel="See all Russian FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Russian parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Employing Russian Staff in India?"
        description="Tell us who is moving and for how long, and we'll map income tax, Russian contributions and the Indian provident fund position."
      />
    </main>
  )
}
