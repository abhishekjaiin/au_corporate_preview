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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/hiring-in-india"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "route", label: "Choosing the hiring route" },
  { id: "contract", label: "Contracts and policies" },
  { id: "salary", label: "Salary structure and deductions" },
  { id: "codes", label: "The four labour codes" },
  { id: "termination", label: "Notice and termination" },
  { id: "equity", label: "Share awards from the Spanish parent" },
  { id: "eor", label: "Employer of record as a bridge" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a Spanish company hire in India without a subsidiary?", a: "Yes, through an employer of record or as contractors, but the employer-of-record fee and the permanent establishment risk need to be managed." },
  { q: "What deductions does an Indian employer make?", a: "Tax on salary, provident fund, state insurance for lower wages and professional tax in some states." },
  { q: "When are the labour codes in force?", a: "They were reported in force from 21 November 2025, with rules and state implementation still developing. Confirm the current position." },
  { q: "When is payroll tax due?", a: "By the 7th of the next month. Provident fund and state insurance are due by the 15th." },
  { q: "Is a non-compete enforceable in India?", a: "Post-employment non-competes are narrowly enforced. Confidentiality and intellectual property clauses are enforceable." },
  { q: "Do I need an employee handbook?", a: "Policies on conduct, anti-bribery and harassment are required or advisable, and an internal committee is needed above a size threshold." },
  { q: "How long is a typical notice period?", a: "It depends on the contract and the role. One to three months is common for professionals." },
  { q: "Are share awards from the parent taxable in India?", a: "Yes, as a perquisite when they vest or are exercised, and the Indian company must withhold tax." },
  { q: "Is gratuity compulsory?", a: "It is payable after five years of service where the law applies, and the employer should provide for it." },
]

const relatedCards = [
  { title: "Spanish Employees Working in India: Indian Salary Tax, Spain's Exemption for Work Abroad, EPF for International Workers and Double Contributions", desc: "What a Spanish employer must plan when staff work in India: Indian salary tax and the treaty test, the Spanish IRPF exemption for work abroad, Indian provident fund rules for international workers, Spanish social security for posted staff, and secondment contracts.", href: "/spain-to-india/spanish-employees-in-india" },
  { title: "Two-Country Compliance Calendar: Indian Company Filings, Tax, Payroll and RBI Returns, Plus the Spanish Parent's D-8, Tax and Documentation Dates", desc: "One calendar for the whole year showing what the Indian subsidiary files with Indian authorities and what the Spanish parent files in Spain, with the Indian financial year of April to March set against the Spanish calendar year and the points where they collide.", href: "/spain-to-india/compliance-calendar" },
  { title: "Moving Spanish Employees to India: Employment Visa, the USD 25,000 Salary Floor, FRRO Registration, 182-Day Residence, Dependants, Health Cover and Return", desc: "A step-by-step relocation guide for a Spanish employee posted to an Indian subsidiary: the employment visa and its conditions, FRRO registration within 14 days for stays over 180 days, Indian tax residency, the Spanish tax and social security position, dependants, housing, health cover and the return.", href: "/spain-to-india/relocate-spanish-staff" },
  { title: "Personal Data Between Spain and India: GDPR Transfer Rules, Standard Contractual Clauses, the DPDP Act and Rules, Employee Data and Penalties", desc: "How a Spanish group lawfully moves employee and customer data to and from India: the GDPR transfer regime and the lack of an EU adequacy decision for India, standard contractual clauses and transfer assessments, the Spanish AEPD and LOPDGDD, and the DPDP Act duties that start in May 2027.", href: "/spain-to-india/data-protection-gdpr-dpdp" },
]

export default function HiringInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Hiring Staff in India from Spain: Employment Contracts, Provident Fund, State Insurance, the Four Labour Codes, Notice Periods and the Employer-of-Record Option"
        description="How a Spanish company hires in India: the entity or employer-of-record choice, offer letters and contracts, salary structure, payroll deductions, the labour codes reported in force from 21 November 2025, notice and termination, share awards and the differences that surprise Spanish managers."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "Hiring in India for Spanish Companies: Contracts, Payroll, Labour Codes and Employer of Record" },
        ]}
      />

      <GuideHero
        eyebrow="People: hiring"
        title="Hiring Staff in India from Spain: Employment Contracts, Provident Fund, State Insurance, the Four Labour Codes, Notice Periods and the Employer-of-Record Option"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Spanish company can hire in India through its own Indian company or through an employer of record
          that employs the staff on its behalf. With a subsidiary, the company is the employer, deducts tax from
          salary, contributes to the provident fund and, above the wage limit, to state insurance, and follows
          state shops and establishment rules. India has consolidated its labour laws into four codes, reported
          in force from 21 November 2025, and some rules and state implementation are still being finalised, so
          confirm the current position. Spanish managers should expect differences in notice, probation, bonus,
          working hours and termination. Hiring before the subsidiary is registered for payroll is a common
          cause of penalties.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="hiring-and-payroll" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Hiring routes", "Own Indian company or an employer of record"],
                ["Employer deductions", "Tax on salary (Section 392), provident fund, state insurance above the wage limit, professional tax in some states"],
                ["Labour codes", "Wages, Industrial Relations, Social Security and Occupational Safety codes, reported in force 21 November 2025"],
                ["Payroll dates", "TDS by the 7th; provident fund and state insurance by the 15th"],
                ["Contract basics", "Offer letter, employment agreement, confidentiality, intellectual property assignment, notice and probation"],
                ["Termination", "Notice and, for larger establishments, retrenchment rules"],
                ["Share awards", "Parent share awards need Indian tax and FEMA treatment"],
                ["Who to ask first", "The payroll team before the first offer letter is issued"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="route" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing the hiring route</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Who is the employer</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Good for</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Watch out for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Indian subsidiary", "The subsidiary", "Teams of any size with a plan to stay", "Setting up payroll registrations; compliance cost"],
                ["Employer of record", "The provider, on your behalf", "Testing the market, a few hires, or a delay in incorporation", "Fee on top of cost; control of staff; permanent establishment risk if the Spanish company directs the work"],
                ["Contractor", "Neither; an independent contractor", "Short projects with defined deliverables", "Misclassification risk; Indian tax and tax withholding"],
                ["Secondee from Spain", "Spanish company or subsidiary", "Senior or technical staff", "See the employees guide"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                  <td className="border border-gray-300 p-3">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="contract" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contracts and policies</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          An Indian employment contract should state the role, place of work, salary components, probation,
          notice period, working hours, leave, confidentiality, intellectual property assignment,
          non-solicitation and termination. Restrictive covenants after employment are enforced narrowly in
          India, so a long post-employment non-compete is unlikely to be upheld, while confidentiality and
          intellectual property clauses are enforceable. Policies on conduct, anti-bribery and prevention of
          sexual harassment are required for many employers, and an internal committee must be constituted above
          a size threshold.
        </p>

        <h2 id="salary" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Salary structure and deductions</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Basic pay, house rent allowance, special allowance and bonus are the usual components; the split affects tax, provident fund and gratuity.</li>
          <li>Under the wages code the definition of wages affects provident fund, gratuity and bonus calculations; confirm the current rules with your payroll provider.</li>
          <li>The Indian company deducts tax from salary under Section 392 of the Income-tax Act, 2025, and deposits it by the 7th of the next month.</li>
          <li>Provident fund contributions are due by the 15th for employees who fall within the scheme; state insurance applies at lower wage levels.</li>
          <li>Gratuity is payable after five years of service, and employers need to provide for it.</li>
          <li>Professional tax is a state tax and applies in some states only.</li>
        </ul>

        <h2 id="codes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The four labour codes</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India&apos;s 29 central labour laws have been combined into four codes: wages, industrial relations,
          social security and occupational safety and working conditions. They were reported in force from 21
          November 2025, with rules and state-level rules following. The codes change the definition of wages,
          introduce fixed-term employment on equal terms, expand social security to gig and platform workers and
          change thresholds for retrenchment and standing orders. For a small foreign-owned company the
          practical points are the wage definition, the registration requirements, the inspection model and the
          termination thresholds. Because implementation is still evolving, rely on a current check each time
          you issue contracts.
        </p>

        <h2 id="termination" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Notice and termination</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian employment law is more protective of employees than many Spanish managers expect in some
          respects and less in others. Notice periods are set by the contract or by state rules; in many
          professional roles they run for one to three months. Where the establishment is large enough,
          retrenchment of workers requires notice and compensation, and sometimes government permission.
          Managerial and supervisory staff are treated differently from workers. A termination for cause needs
          an inquiry that follows natural justice, and an unfair dismissal can lead to reinstatement or
          compensation. Take advice before any termination of a long-serving employee.
        </p>

        <h2 id="equity" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Share awards from the Spanish parent</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Employees in India who receive shares or options of the Spanish parent are taxed in India when the
          benefit vests or is exercised, and the Indian company must withhold tax on the perquisite. The Indian
          employee may also need to report foreign assets, and the parent may need to follow Indian foreign
          exchange rules for the transfer of shares to a resident. Plan the award before it is granted, tell the
          Indian payroll team and keep valuation records.
        </p>

        <h2 id="eor" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Employer of record as a bridge</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          An employer of record can employ staff in India before your subsidiary is ready, which is useful if a
          customer needs a presence quickly. The provider takes the employment risk, runs payroll and gives you
          a fee-based service. Three cautions apply. The fee is on top of the cost, so long-term use is more
          expensive than a subsidiary. The Spanish company must avoid directing the staff in a way that creates
          a permanent establishment. And the transfer of staff to the subsidiary later needs a plan for service
          continuity and benefits. See{" "}
          <Link href="/spain-to-india/how-long-it-takes-to-set-up-from-spain" className="text-blue-800 font-semibold hover:underline">the timeline guide</Link>.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://sede.agenciatributaria.gob.es/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Agencia Tributaria (Spain)</a>,{" "}
          <a href="https://comercio.gob.es/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Spanish Ministry of Economy, Trade and Business</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/spain-to-india/hiring-in-india" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/spain-to-india/faq"
          seeAllLabel="See all 179 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and Spanish
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Building Your India Team?"
        description="Tell us the roles and headcount, and we'll set up payroll, PF and ESI registration and employment contracts for the subsidiary."
      />
    </main>
  )
}
