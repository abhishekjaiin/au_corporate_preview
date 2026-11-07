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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/chinese-employees-in-india"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "tax", label: "Income tax" },
  { id: "pf", label: "Provident fund and the missing agreement" },
  { id: "models", label: "Secondment, local contract or business trip" },
  { id: "contracts", label: "The secondment letter" },
  { id: "visa", label: "Immigration and registration" },
  { id: "cost", label: "Costing the assignment" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is there a social security agreement between India and China?", a: "No. There is none, so a certificate of coverage is not available for Chinese staff." },
  { q: "Does a Chinese employee in India have to join the provident fund?", a: "As the EPF rules for international workers are generally applied, a foreign national from a country without a social security agreement is covered and contributions are on full wages. Confirm the current position, as the rule has been litigated." },
  { q: "Is a Chinese employee's salary taxable in India?", a: "Salary for work done in India is taxable in India unless the three Article 15 conditions are met, including that the cost is not borne by the Indian subsidiary. A secondee usually fails this." },
  { q: "Who deducts tax on the salary?", a: "The Indian employer, under Section 392 of the Income-tax Act, 2025, by the 7th of the following month." },
  { q: "Does China give credit for Indian tax?", a: "China gives a credit for Indian tax paid on income taxable in India under the treaty, subject to Chinese rules. A Chinese adviser must confirm the mechanics." },
  { q: "Can I keep my Chinese employee on the Chinese payroll while working in India?", a: "It is possible for short trips. For a long assignment, the work is done for the Indian subsidiary and Indian tax and provident fund normally apply." },
]

const relatedCards = [
  { title: "India-China Double Taxation Avoidance Agreement Explained: Rates, Permanent Establishment and Relief for a Chinese Parent", desc: "The India-China DTAA explained for a Chinese parent: 10% rates on dividends, interest, royalties and technical fees, permanent establishment rules, business profits, share gains, employment income, relief from double tax and how to claim treaty rates.", href: "/china-to-india/india-china-dtaa" },
  { title: "Relocating Chinese Staff to India: Employment Visa, Business Visa, Clearance and Registration", desc: "What a Chinese company must plan when sending staff to India: business visa limits, employment visa rules and salary floor, security clearance, the reported 2025 visa facilitation, FRRO registration, family visas and directors.", href: "/china-to-india/relocate-chinese-staff" },
  { title: "Hiring in India as a Chinese Employer: Local Contracts, Statutory Benefits and Managing Mixed Teams", desc: "A guide for Chinese HR teams hiring in India: written contracts, provident fund, ESI, gratuity, labour codes, notice and termination, working hours, grievance rules and the practical issues of managing a mixed Indian and Chinese team.", href: "/china-to-india/hiring-in-india" },
  { title: "Common Mistakes Chinese Companies Make in India and How to Avoid Them", desc: "The most frequent mistakes Chinese companies make when setting up in India: investing before Press Note 3 approval, assuming an apostille works, hidden ownership, late FEMA filings, visa mismatches and weak records.", href: "/china-to-india/common-mistakes" },
]

export default function ChineseEmployeesInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Chinese Employees in India: Tax Under the Treaty, Provident Fund as an International Worker and Cost Planning"
        description="What a Chinese employer must plan for staff in India: the 183-day treaty test, Section 392 salary tax, residence rules, EPF contributions for international workers, the lack of a social security agreement and secondment contracts."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Chinese Employees in India: Income Tax, Provident Fund and the Missing Social Security Agreement" },
        ]}
      />

      <GuideHero
        eyebrow="People: tax and social security"
        title="Chinese Employees in India: Tax Under the Treaty, Provident Fund as an International Worker and Cost Planning"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          India and China have no social security agreement. A Chinese employee working for an Indian company is
          therefore not exempt from Indian provident fund by a certificate of coverage, and, as the EPF rules
          are generally applied, a foreign national from a country without such an agreement is treated as an
          international worker with contributions on full salary. For income tax, the treaty&apos;s 183-day test
          rarely helps a secondee whose cost is borne by the Indian subsidiary, so the employer should withhold
          tax on salary under Section 392 of the Income-tax Act, 2025. Cost the assignment on both counts before
          the person travels.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="foreign-employee-treaty-ssa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Social security agreement", "None between India and China"],
                ["Provident fund", "International worker rules: contributions on full wages, without the usual wage ceiling, as generally applied; the rule has been litigated, so confirm the current position"],
                ["Income tax", "Indian tax on salary for work done in India, under Section 392; treaty relief only if the three Article 15 conditions are met"],
                ["Residence", "Resident if 182 days or more in the year, or 60 days plus 365 days in the four preceding years (with exceptions); resident taxpayers are taxed on world income, subject to special rules"],
                ["Chinese side", "Chinese individual income tax and social insurance rules for those who stay on the Chinese payroll; confirm with a Chinese adviser"],
                ["Equalisation", "Plan a tax equalisation policy and budget for gross-up"],
                ["Data", "Employee data moves between countries; see the data protection guide"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Income tax</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Treaty test:</strong> under Article 15, salary of a Chinese resident for work in India is taxable only in China if the person is in India for 183 days or less in the period, the employer is not an Indian resident, and the cost is not borne by a PE in India. A secondee at the cost of the Indian subsidiary fails the last two.</li>
          <li><strong>Withholding:</strong> the Indian employer deducts tax on salary under Section 392 of the Income-tax Act, 2025, and deposits it by the 7th of the following month.</li>
          <li><strong>Residence:</strong> a person who stays long enough becomes resident in India and may be taxed on world income, subject to the not ordinarily resident rules. A tax adviser should model the case before travel.</li>
          <li><strong>Allowances:</strong> housing, school fees and travel are taxed as perquisites unless exempt, so negotiate the pay package net of tax or with a clear gross-up.</li>
          <li><strong>Chinese side:</strong> leaving the Chinese payroll, the tax residence consequences in China and the credit for Indian tax need Chinese advice.</li>
        </ul>

        <h2 id="pf" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Provident fund and the missing agreement</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>India has social security agreements with a number of countries, which let detached workers stay in their home system on a certificate of coverage. There is none with China.</li>
          <li>Under the EPF scheme rules for international workers, a foreign national working in a covered establishment who is not from an agreement country is generally treated as a member from the start. Contributions are normally on the full wage, and the employer&apos;s share also applies.</li>
          <li>Withdrawal rules for international workers differ from those for domestic members, and the rules have been challenged in the courts, so confirm the position when you set the pay structure.</li>
          <li>Include the employer&apos;s contribution in the cost of the assignment budget.</li>
          <li>Do not treat the Chinese social insurance contribution as a substitute. India does not give credit for it.</li>
        </ul>

        <h2 id="models" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Secondment, local contract or business trip</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Model</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Employer for Indian tax</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Points to watch</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Short business trip (meetings, no productive work)", "Chinese employer", "Visa category, 183-day count, PE risk if staff conclude contracts"],
                ["Secondment to the Indian subsidiary", "Indian subsidiary directs the work and bears the cost", "Salary taxed in India, EPF, recharge priced under transfer pricing and Withholding Tax on the reimbursement"],
                ["Local Indian contract", "Indian subsidiary", "Cleaner for Indian law; Chinese employment status and social insurance on exit need planning"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="contracts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The secondment letter</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>State the employer of record, the reporting line, the term, the pay split and the tax treatment.</li>
          <li>Say who bears Indian tax and provident fund, and how gross-up works.</li>
          <li>Add confidentiality, intellectual property assignment and return-to-China terms.</li>
          <li>Make sure the Indian subsidiary controls the work, or the employee may be seen as working for the parent and create PE risk.</li>
        </ul>

        <h2 id="visa" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Immigration and registration</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Visa, registration and security clearance steps are covered in{" "}
          <Link href="/china-to-india/relocate-chinese-staff" className="text-blue-800 font-semibold hover:underline">relocating Chinese staff</Link>.
          Align the tax and immigration plans so that the visa category matches the real work.
        </p>

        <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Costing the assignment</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Salary and allowances, Indian tax and any gross-up.</li>
          <li>Employer provident fund and other statutory costs.</li>
          <li>Housing, school, medical cover and travel.</li>
          <li>Advisory and immigration fees.</li>
          <li>Transfer pricing mark-up on the recharge.</li>
        </ul>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.mofcom.gov.cn/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">MOFCOM (China)</a>,{" "}
          <a href="https://www.safe.gov.cn/en/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">SAFE (China)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/china-to-india/chinese-employees-in-india" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/china-to-india/faq"
          seeAllLabel="See all 147 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "EPFO India", href: "https://www.epfindia.gov.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "State Taxation Administration of China", href: "https://www.chinatax.gov.cn/eng/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Chinese
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Employing Chinese Nationals in India?"
        description="Tell us who is moving and for how long, and we'll map income tax, the Indian provident fund position and payroll."
      />
    </main>
  )
}
