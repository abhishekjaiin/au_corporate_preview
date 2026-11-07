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

const PAGE_URL = "https://www.theaucorp.com/usa-to-india/indian-labour-codes-for-us-employers"
const PARENT_URL = "https://www.theaucorp.com/usa-to-india"

const toc = [
  { id: "country-specific", label: "What's different for US companies" },
  { id: "why", label: "Why the codes matter to a US employer" },
  { id: "wages", label: "The wage definition and the 50% rule" },
  { id: "fixed", label: "Fixed-term employment" },
  { id: "terminate", label: "Termination, retrenchment and notice" },
  { id: "hours", label: "Working hours, overtime and leave" },
  { id: "social", label: "Social security: provident fund, state insurance and gratuity" },
  { id: "checklist", label: "Checklist for a US employer" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is there at-will employment in India?", a: "No. Notice, cause and, for larger establishments, formal procedure apply, depending on the contract, the role and the state." },
  { q: "When did the labour codes come into force?", a: "They were reported in force from 21 November 2025, with central and state rules still developing. Confirm the current position." },
  { q: "What is the 50% wage rule?", a: "Excluded allowances are capped so that wages make up at least half of total remuneration, which raises the base for provident fund, gratuity and bonus." },
  { q: "Can I hire staff on fixed-term contracts?", a: "Yes, with wages and benefits equal to permanent staff and gratuity after one year. Do not use them to avoid permanent status for ongoing roles." },
  { q: "What is the retrenchment threshold?", a: "The industrial relations code, as reported, requires prior government permission for lay-off, retrenchment and closure in establishments with 300 or more workers." },
  { q: "How much overtime is paid?", a: "Twice the ordinary wage rate in the code as reported." },
  { q: "Is a notice period standard?", a: "No. It comes from the contract and state law. One to three months is common for professionals." },
  { q: "Do managers have the same protection as workers?", a: "Not in the same way. Managers and supervisors are generally governed by contract and state law, but the classification depends on duties." },
  { q: "Are gig workers covered?", a: "The social security code extends coverage to gig and platform workers through a fund. Confirm the rules if you use them." },
]

const relatedCards = [
  { title: "Hiring and payroll in India", desc: "Contracts, statutory benefits and the monthly payroll cycle.", href: "/usa-to-india/hiring-and-payroll" },
  { title: "Employer of record or subsidiary", desc: "When an employer of record is enough and when to incorporate.", href: "/usa-to-india/eor-vs-subsidiary" },
  { title: "Expat visa", desc: "Employment visas and registration for US staff.", href: "/usa-to-india/expat-visa" },
  { title: "Compliance calendar", desc: "Annual and monthly filings for an Indian subsidiary.", href: "/usa-to-india/compliance-calendar" },
]

export default function IndianLabourCodesForUsEmployersPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="India's Four Labour Codes Explained for a US Employer: The 50% Wage Rule, Fixed-Term Staff, Retrenchment Thresholds, Overtime and How India Differs from At-Will Employment"
        description="What a US company used to at-will employment needs to know about India's consolidated labour codes: the wage definition and its effect on provident fund and gratuity, fixed-term contracts, the 300-worker threshold for retrenchment permission, working hours, overtime, social security and a practical checklist."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-US"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/usa-to-india" },
          { label: "India's Labour Codes for US Employers: Wages, Notice, Termination and Working Hours" },
        ]}
      />

      <GuideHero
        eyebrow="People: labour law"
        title="India's Four Labour Codes Explained for a US Employer: The 50% Wage Rule, Fixed-Term Staff, Retrenchment Thresholds, Overtime and How India Differs from At-Will Employment"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          India replaced 29 central labour laws with four codes on wages, industrial relations, social security
          and occupational safety, reported in force from 21 November 2025, with rules and state-level
          implementation still being finalised. For a US employer, three differences matter most. There is no
          at-will employment: notice, cause and, for larger establishments, formal procedure apply to
          termination. The definition of wages now requires that wages make up at least half of total
          remuneration, which raises the base for provident fund, gratuity and bonus calculations unless
          allowances are restructured. And fixed-term employment is recognised on terms equal to permanent
          staff, with gratuity after one year. Treat the numbers on this page as a summary from secondary
          reports and check the current rules and your state&apos;s notification before you issue contracts.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the US
          </Link>
        </p>

        <GuideCountryContext country="usa" topic="labour-codes" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Status", "Four codes reported in force from 21 November 2025; central and state rules still developing"],
                ["At-will employment", "Not available; notice, cause and procedure depend on the contract, the establishment size and the role"],
                ["Wage definition", "Wages should be at least 50% of total remuneration; excluded allowances are capped; affects provident fund, gratuity and bonus"],
                ["Fixed-term", "Allowed with benefits equal to permanent staff; gratuity after one year of service"],
                ["Retrenchment", "Government permission thresholds raised to 300 workers in the industrial relations code; notice and compensation apply below"],
                ["Hours", "Daily and weekly limits with overtime at twice the wage rate; state rules vary"],
                ["Social security", "Wider coverage including gig and platform workers; provident fund and state insurance"],
                ["Action", "Review contracts, salary structure and policies against the codes and your state rules"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why the codes matter to a US employer</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          US companies often enter India with an offer letter modelled on a US template, a salary in two or
          three heads and a clause that either side may end employment on notice. Under the labour codes, and
          the older laws that they replaced, that template leaves gaps. The salary structure can cause
          under-payment of provident fund and gratuity if the new wage definition is not applied. The
          termination clause may not give the procedural protection that Indian law requires. And an offer
          letter that is silent on working hours, leave and overtime leaves the company exposed to claims. A
          one-time review at the start, repeated when rules change, costs far less than a claim.
        </p>

        <h2 id="wages" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The wage definition and the 50% rule</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The code on wages defines wages to include basic pay, dearness allowance and retaining allowance, and
          excludes a list of items such as bonus, house rent allowance, overtime, conveyance and employer
          contributions, but caps the excluded part: if excluded items exceed half of total remuneration, the
          excess is added back to wages. The result is that a package with a small basic and large allowances
          has a larger wage base for provident fund, gratuity and bonus than before. For employers, the cost is
          higher contributions; for employees, higher retirement benefits and lower take-home. Salary structures
          that were built to keep the basic low need to be re-cut, and the changes should be explained to staff.
          Confirm the current definitions and any state variation in the rules.
        </p>

        <h2 id="fixed" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Fixed-term employment</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The code on industrial relations recognises fixed-term employment, which lets a company hire staff for
          a defined period without conversion to permanent status, provided they receive wages, hours and
          benefits equal to permanent colleagues, and gratuity if they serve for one year. A US company can use
          fixed-term contracts for projects and for tests of a new market, but it should not use them to avoid
          permanent status for long-running roles, because inspectors and courts will look at substance. Keep
          each contract in writing with a start and end date and a clear scope.
        </p>

        <h2 id="terminate" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Termination, retrenchment and notice</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Situation</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Rule in broad terms</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Practical step</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Resignation by an employee", "Notice under the contract; commonly one to three months for professionals", "Set notice by grade in the contract"],
                ["Termination of a manager or supervisor", "Contract and state law govern; termination for misconduct needs an inquiry", "Document performance issues; follow the policy"],
                ["Retrenchment of a worker in a smaller establishment", "Notice and compensation under the industrial relations code", "Calculate compensation; keep records"],
                ["Retrenchment, lay-off or closure in an establishment at or above 300 workers", "Prior government permission in the code as reported", "Plan well ahead; consult counsel"],
                ["Termination for misconduct", "Show cause, inquiry and a reasoned order", "Keep minutes; apply the policy consistently"],
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

        <p className="text-gray-600 leading-relaxed mb-10">
          Most professional and technology employees in a small Indian subsidiary are managers or supervisors
          and not workers under the industrial relations definition, so contract and common law govern their
          termination, with state shops and establishments law as a backstop. The distinction is a legal
          question, not a title, so confirm it for each role. See{" "}
          <Link href="/usa-to-india/hiring-and-payroll" className="text-blue-800 font-semibold hover:underline">hiring and payroll</Link>{" "}
          for the contract basics.
        </p>

        <h2 id="hours" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Working hours, overtime and leave</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The codes set daily and weekly limits, commonly eight hours a day and forty-eight hours a week, with state rules that allow flexible patterns within the weekly limit.</li>
          <li>Overtime is paid at twice the ordinary wage rate in the code as reported.</li>
          <li>Annual leave, casual and sick leave and public holidays follow the central code and the state shops and establishments act.</li>
          <li>Women may work night shifts subject to consent and safety conditions in the rules.</li>
          <li>Maternity benefit and creche rules apply above stated sizes.</li>
          <li>Keep attendance and overtime records; inspectors ask for them.</li>
        </ul>

        <h2 id="social" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Social security: provident fund, state insurance and gratuity</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The social security code consolidates the provident fund, state insurance, gratuity and maternity
          benefit laws, and extends coverage to gig and platform workers through a social security fund. For a
          typical subsidiary the practical rules are a registration with the provident fund organisation and, if
          wages are below the threshold, the state insurance corporation, contributions by the 15th of the
          month, and gratuity after five years of service, or one year for fixed-term staff. International
          workers from countries without an agreement may be covered from the first day on full wages. See{" "}
          <Link href="/usa-to-india/expat-visa" className="text-blue-800 font-semibold hover:underline">the expat guide</Link>.
        </p>

        <h2 id="checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Checklist for a US employer</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Re-cut the salary structure against the wage definition and model the cost.</li>
          <li>Replace the US offer template with an Indian employment agreement.</li>
          <li>Set notice periods by grade and make probation terms explicit.</li>
          <li>Write an employee handbook covering hours, leave, conduct, anti-harassment and grievance.</li>
          <li>Constitute the internal committee for sexual harassment if the headcount requires it.</li>
          <li>Register for provident fund and state insurance before the first hire where required.</li>
          <li>Keep wage, attendance and overtime registers in the form the state requires.</li>
          <li>Review the setup against the rules of the state where the office is located.</li>
        </ol>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Assuming that at-will language in a US template works in India.</li>
          <li>Keeping a low basic salary and ignoring the 50% wage rule.</li>
          <li>Using successive fixed-term contracts to disguise a permanent role.</li>
          <li>Treating managers and workers the same, or the reverse.</li>
          <li>Terminating a long-serving employee without legal advice.</li>
          <li>Relying on a press summary of the codes instead of the current rules.</li>
        </ul>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.irs.gov/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Internal Revenue Service (US)</a>,{" "}
          <a href="https://www.bis.gov/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Bureau of Industry and Security (US)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/usa-to-india/indian-labour-codes-for-us-employers" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/usa-to-india/faq"
          seeAllLabel="See all the FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Labour and Employment (India)", href: "https://labour.gov.in/" },
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in/" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and US rules
          change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Hiring Under India's Labour Codes?"
        description="Tell us the roles and locations, and we'll set up compliant contracts, payroll, PF and ESI for the subsidiary."
      />
    </main>
  )
}
