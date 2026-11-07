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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/compliance-calendar"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "monthly", label: "Monthly and quarterly Indian dates" },
  { id: "annual", label: "The Indian annual cycle" },
  { id: "spain", label: "The Spanish parent's dates" },
  { id: "collide", label: "Where the two calendars collide" },
  { id: "owners", label: "Assigning owners" },
  { id: "penalty", label: "What happens if a date is missed" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the Indian financial year?", a: "1 April to 31 March." },
  { q: "When is the annual general meeting due?", a: "Within six months of the year end, so by 30 September for a March year end." },
  { q: "When must AOC-4 and MGT-7 be filed?", a: "AOC-4 within 30 days and MGT-7 within 60 days of the annual general meeting." },
  { q: "When is tax deducted at source due?", a: "By the 7th of the following month, with a quarterly return." },
  { q: "When is the income tax return due?", a: "31 October for a company that needs an audit, extended to 30 November where transfer pricing applies. Confirm the date each year." },
  { q: "What is the FLA return?", a: "The annual Foreign Liabilities and Assets return to the Reserve Bank, due by 15 July." },
  { q: "What does the Spanish parent file each year?", a: "The D-8 report within seven months of the Indian year end where it applies, its corporate tax return and related-party documentation." },
  { q: "Can due dates change?", a: "Yes, by notification. Confirm each date before it falls." },
  { q: "How do I deal with the different year ends?", a: "Prepare a management account to the Spanish year end for consolidation and agree an audit timetable that allows it." },
]

const relatedCards = [
  { title: "Resident Director for an Indian Subsidiary of a Spanish Company: The 182-Day Rule, Who Can Fill the Role, Duties, Liability and Alternatives", desc: "Every Indian company needs a director who has lived in India for 182 days. This guide explains the rule, the four ways a Spanish group can meet it, the duties and personal liability that come with the seat, what a professional or nominee arrangement must and must not do, and a checklist for appointing one.", href: "/spain-to-india/resident-director-service-for-spanish-companies" },
  { title: "What a Spanish Parent Must Do at Home: Registro de Inversiones Exteriores Filings, Participation Exemption, CFC Rules and Corporate Records", desc: "The Spanish-side steps for a parent investing in India: declarations to the Registro de Inversiones Exteriores (forms D-5A and D-8), board and notarial formalities, the participation exemption, CFC rules, related-party documentation and the beneficial ownership register.", href: "/spain-to-india/spanish-parent-obligations" },
  { title: "Hiring Staff in India from Spain: Employment Contracts, Provident Fund, State Insurance, the Four Labour Codes, Notice Periods and the Employer-of-Record Option", desc: "How a Spanish company hires in India: the entity or employer-of-record choice, offer letters and contracts, salary structure, payroll deductions, the labour codes reported in force from 21 November 2025, notice and termination, share awards and the differences that surprise Spanish managers.", href: "/spain-to-india/hiring-in-india" },
  { title: "Transfer Pricing for an Indian Subsidiary of a Spanish Group: Arm's Length Rules, Form 3CEB, Local File, Services, Royalties and Loans, and Spain's Own Documentation", desc: "How India and Spain test related-party prices: methods, thresholds, Form 3CEB, the master and local files, intra-group services and royalties, loans, safe harbours, advance pricing agreements, audits and the match between Indian and Spanish files.", href: "/spain-to-india/transfer-pricing" },
]

export default function ComplianceCalendarPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Two-Country Compliance Calendar: Indian Company Filings, Tax, Payroll and RBI Returns, Plus the Spanish Parent's D-8, Tax and Documentation Dates"
        description="One calendar for the whole year showing what the Indian subsidiary files with Indian authorities and what the Spanish parent files in Spain, with the Indian financial year of April to March set against the Spanish calendar year and the points where they collide."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "Compliance Calendar for a Spanish-Owned Indian Company: Indian and Spanish Deadlines Side by Side" },
        ]}
      />

      <GuideHero
        eyebrow="Compliance: calendar"
        title="Two-Country Compliance Calendar: Indian Company Filings, Tax, Payroll and RBI Returns, Plus the Spanish Parent's D-8, Tax and Documentation Dates"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Indian subsidiary of a Spanish group works to two calendars. The Indian financial year runs from 1
          April to 31 March, so its annual meeting is due by 30 September, its company filings follow within 30
          and 60 days, its tax return is due on 31 October (30 November if transfer pricing applies), and its
          Foreign Liabilities and Assets return is due by 15 July. Monthly deadlines fall on the 7th for tax
          deducted at source, the 11th and 20th for goods and services tax, and the 15th for provident fund and
          state insurance. The Spanish parent, with a calendar year, has its own tax return and foreign
          investment reports: the D-8 report is due within seven months of the Indian year end, which is 31
          October. Put both calendars in one file with an owner against every line.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="compliance-calendar" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Indian financial year", "1 April to 31 March"],
                ["Monthly", "TDS by the 7th; GSTR-1 by the 11th; GSTR-3B by the 20th; provident fund and state insurance by the 15th"],
                ["Quarterly", "Advance tax on 15 June, 15 September, 15 December and 15 March; TDS returns after each quarter"],
                ["Annual", "AGM by 30 September; AOC-4 within 30 days and MGT-7 within 60 days of the AGM; tax return by 31 October"],
                ["Reserve Bank", "FC-GPR within 30 days of allotment; FLA return by 15 July"],
                ["Spanish parent", "D-8 report within seven months of the Indian year end; corporate tax return in Spain; related-party files"],
                ["Directors", "Annual director KYC by 30 September"],
                ["Note", "Dates can be extended by notification; confirm before the date"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="monthly" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Monthly and quarterly Indian dates</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">When</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Who acts</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["By the 7th of each month", "Deposit tax deducted at source from salary, contractors, rent and cross-border payments", "Company"],
                ["By the 11th", "GSTR-1: outward supplies", "Company"],
                ["By the 15th", "Provident fund and state insurance contributions", "Company"],
                ["By the 20th", "GSTR-3B: summary return and tax payment", "Company"],
                ["15 June, 15 September, 15 December, 15 March", "Advance tax instalments once there is taxable profit", "Company"],
                ["After each quarter (31 July, 31 October, 31 January, 31 May)", "Quarterly TDS returns; confirm the dates each year", "Company"],
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

        <h2 id="annual" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Indian annual cycle</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">When</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["31 March", "Financial year ends", "Books closed for audit"],
                ["15 July", "Foreign Liabilities and Assets return to the Reserve Bank", "Covers the year to 31 March"],
                ["By 30 September", "Annual general meeting; director KYC", "Six months from year end"],
                ["Within 30 days of the AGM", "AOC-4 financial statements", "Includes the auditor report"],
                ["Within 60 days of the AGM", "MGT-7 annual return", "Shareholders and directors list"],
                ["31 October", "Income tax return and audit report; accountant report", "Extended for transfer pricing cases to 30 November"],
                ["30 November", "Form 3CEB where transfer pricing applies", "Follows the return date"],
                ["31 October", "Spanish D-8 report on the Indian company", "Seven months from 31 March"],
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

        <h2 id="spain" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Spanish parent&apos;s dates</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Timing</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Declaration of the investment (D-5A)", "Within one month of acquiring 10% or more", "Once, then on changes"],
                ["Annual report on the foreign company (D-8)", "Within seven months of the investee's year end", "For holdings of 10% or more where capital or net equity is above EUR 1.5 million, or holding companies"],
                ["Corporate income tax return", "Typically July for a calendar-year company; confirm", "Include Indian dividends and credits"],
                ["Transfer pricing documentation", "With the tax return or on request", "Align with the Indian file"],
                ["Country-by-country reporting", "Within twelve months of the group year end for large groups", "Confirm thresholds"],
                ["Tax residency certificate for India", "Each year before the first payment", "From the Agencia Tributaria"],
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

        <h2 id="collide" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where the two calendars collide</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The Indian year end of 31 March does not match the Spanish year end of 31 December, so the group needs a bridge for consolidation, usually a management account to December.</li>
          <li>Indian dividend approvals follow the Indian audit and AGM, so cash arrives after September, not in the Spanish year of the profit.</li>
          <li>The Spanish D-8 date of 31 October is the same day as the Indian tax return, so one person should not own both.</li>
          <li>Withholding certificates from India arrive after the quarterly return, which affects the Spanish credit claim.</li>
          <li>Transfer pricing files must agree in both countries and take time, so start in the autumn.</li>
        </ul>

        <h2 id="owners" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Assigning owners</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A calendar helps only if each line has a named owner, a backup, a lead time and a place where the
          evidence is kept. For a small subsidiary the owner is usually the finance manager or the external
          accountant, with the Resident Director responsible for company law filings and the Spanish group
          controller responsible for the Spanish items. Review the calendar every quarter, and add the dates of
          any new registrations. See{" "}
          <Link href="/spain-to-india/resident-director-service-for-spanish-companies" className="text-blue-800 font-semibold hover:underline">the resident director guide</Link>.
        </p>

        <h2 id="penalty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What happens if a date is missed</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian companies pay additional fees for each day of delay on the annual company filings, interest and
          penalties on late tax, and late fees on goods and services tax returns. A late foreign investment
          filing needs a late submission fee and, for larger delays, compounding with the Reserve Bank. A
          continuing default can lead to disqualification of directors under the Companies Act. Penalties are
          far larger than the cost of filing on time, so a monthly review is worthwhile.
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

        <GuideServiceBox path="/spain-to-india/compliance-calendar" />
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
        title="Keeping India's Calendar Next to Spain's?"
        description="Tell us your incorporation date and the parent's year-end, and we'll map every ROC, tax and FEMA deadline for the subsidiary."
      />
    </main>
  )
}
