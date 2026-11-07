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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/spanish-employees-in-india"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "two-tax", label: "Two tax systems, one salary" },
  { id: "india-tax", label: "Indian tax mechanics for a secondee" },
  { id: "social", label: "Provident fund and Spanish social security" },
  { id: "table", label: "Comparison of the two systems for a secondee" },
  { id: "models", label: "Secondment, local contract or business trip" },
  { id: "letter", label: "What the secondment letter should say" },
  { id: "exec", label: "Directors and senior managers" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is there a social security agreement between India and Spain?", a: "Not in the 2022 list of operating Indian agreements, so a certificate of coverage is not available. Spanish staff in India are generally covered by the Indian provident fund rules for international workers from the first day." },
  { q: "Is a Spanish employee's salary for work in India taxable in India?", a: "Yes, unless the treaty's employment article conditions are met, which a secondee whose cost is borne by the Indian subsidiary normally does not meet." },
  { q: "What is the Spanish exemption for work abroad?", a: "Spanish personal income tax law exempts income from work effectively performed abroad for a non-resident entity, up to EUR 60,100 a year, if the conditions are met. A Spanish adviser must confirm eligibility for each person." },
  { q: "Does a secondee pay Spanish social security as well as Indian provident fund?", a: "Possibly. Without an agreement both systems can apply, depending on the posting terms and Spanish rules. Decide and write it into the contract." },
  { q: "Who deducts Indian tax on the salary?", a: "The Indian employer, under Section 392 of the Income-tax Act, 2025, by the 7th of the following month." },
  { q: "Do share awards from the Spanish parent create Indian tax?", a: "Yes for the portion earned while working in India. The Indian employer should be told about the awards so that it can withhold tax." },
  { q: "Can a short business trip avoid Indian tax?", a: "Only if the employee stays below the treaty day count, the employer is Spanish and bears the cost, and no productive work is done for the Indian company. Keep a travel record." },
  { q: "How do I avoid paying twice?", a: "Not through an agreement. Use the Spanish exemption where it applies, structure the posting carefully and budget for both systems where they overlap." },
]

const relatedCards = [
  { title: "India-Spain Double Taxation Agreement Explained: 15% Dividends, 10% Royalties and Technical Fees, the 6-Month Site PE, the 10% Share-Gain Rule and the MLI", desc: "The India-Spain tax treaty explained for a Spanish parent with India as source state and Spain as residence state: dividend, interest, royalty and technical fee rates, permanent establishment, capital gains on Indian shares, credit and participation exemption, limitation of benefits, the MLI principal purpose test and how to claim relief.", href: "/spain-to-india/india-spain-dtaa" },
  { title: "Moving Spanish Employees to India: Employment Visa, the USD 25,000 Salary Floor, FRRO Registration, 182-Day Residence, Dependants, Health Cover and Return", desc: "A step-by-step relocation guide for a Spanish employee posted to an Indian subsidiary: the employment visa and its conditions, FRRO registration within 14 days for stays over 180 days, Indian tax residency, the Spanish tax and social security position, dependants, housing, health cover and the return.", href: "/spain-to-india/relocate-spanish-staff" },
  { title: "Hiring Staff in India from Spain: Employment Contracts, Provident Fund, State Insurance, the Four Labour Codes, Notice Periods and the Employer-of-Record Option", desc: "How a Spanish company hires in India: the entity or employer-of-record choice, offer letters and contracts, salary structure, payroll deductions, the labour codes reported in force from 21 November 2025, notice and termination, share awards and the differences that surprise Spanish managers.", href: "/spain-to-india/hiring-in-india" },
  { title: "Resident Director for an Indian Subsidiary of a Spanish Company: The 182-Day Rule, Who Can Fill the Role, Duties, Liability and Alternatives", desc: "Every Indian company needs a director who has lived in India for 182 days. This guide explains the rule, the four ways a Spanish group can meet it, the duties and personal liability that come with the seat, what a professional or nominee arrangement must and must not do, and a checklist for appointing one.", href: "/spain-to-india/resident-director-service-for-spanish-companies" },
]

export default function SpanishEmployeesInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Spanish Employees Working in India: Indian Salary Tax, Spain's Exemption for Work Abroad, EPF for International Workers and Double Contributions"
        description="What a Spanish employer must plan when staff work in India: Indian salary tax and the treaty test, the Spanish IRPF exemption for work abroad, Indian provident fund rules for international workers, Spanish social security for posted staff, and secondment contracts."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "Spanish Employees in India: Income Tax, the Spanish Foreign-Work Exemption and Provident Fund" },
        ]}
      />

      <GuideHero
        eyebrow="People: tax and social security"
        title="Spanish Employees Working in India: Indian Salary Tax, Spain's Exemption for Work Abroad, EPF for International Workers and Double Contributions"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Spanish employee who works in India meets two tax systems and two pension systems. In India the
          salary for work done there is taxed, and the Indian employer deducts tax under Section 392 of the
          Income-tax Act, 2025. Spain taxes residents on worldwide income, but its personal income tax law has
          an exemption for qualifying work performed abroad, up to EUR 60,100 a year, which can neutralise much
          of the double tax if the conditions are met. On social security, the 2022 list of India&apos;s
          operating agreements published by the provident fund organisation does not include Spain, so no
          certificate of coverage is available and the Indian provident fund rules for international workers are
          generally applied from the first day. The result for most secondees is a possible double contribution
          that should be budgeted before the assignment starts.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="foreign-employee-treaty-ssa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Indian salary tax", "Salary for work done in India is taxable in India; the employer deducts under Section 392; treaty relief only if the day-count and employer conditions are met"],
                ["Spanish exemption", "Spanish personal income tax law exempts income from work performed abroad for a non-resident entity, up to EUR 60,100 a year, if conditions on destination tax and the beneficiary entity are met; confirm with a Spanish adviser"],
                ["Social security agreement", "None listed between India and Spain in the 2022 list of operating agreements"],
                ["Indian provident fund", "International workers from countries without an agreement are generally covered from day one on full wages; confirm the current position"],
                ["Spanish social security", "Posted workers outside agreements may remain covered or need a special arrangement; confirm with a Spanish adviser"],
                ["Equalisation", "Plan a tax equalisation or net-pay policy before the assignment"],
                ["Visa and registration", "Employment visa and registration within 14 days for stays over 180 days; see the relocation guide"],
                ["Cost", "Budget for contributions in both systems"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="two-tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Two tax systems, one salary</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India taxes salary for work performed in India, whoever the employer is and wherever the pay lands,
          unless the treaty&apos;s dependent personal services article protects a short visit. That article
          generally requires that the employee stays below a day-count threshold, that the employer is not a
          resident of India and that the cost is not borne by an Indian entity or permanent establishment. Those
          conditions are rarely met by a secondee who works under the direction of the Indian subsidiary and
          whose cost is recharged to it, so the safe assumption is that the salary is taxable in India from the
          first day of the assignment.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Spain taxes its resident employees on worldwide income. To prevent the same salary being taxed twice,
          Spanish law offers an exemption for work done abroad for a non-resident entity, capped at EUR 60,100 a
          year. The conditions include that the work is effectively performed abroad, that the entity abroad
          benefits from it and that the country taxes the income under a similar tax and is not a tax haven. The
          cap and conditions have been amended over time and are applied case by case, so a Spanish adviser must
          confirm that the exemption works for a given employee. Where the exemption is only partial, Spain
          gives a credit for Indian tax, up to the Spanish tax on the same income.
        </p>

        <h2 id="india-tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian tax mechanics for a secondee</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The Indian employer deducts tax on salary under Section 392 of the Income-tax Act, 2025, and deposits it by the 7th of the following month, with a quarterly return and an annual salary certificate.</li>
          <li>Housing, school fees, home leave and relocation allowances are taxed as perquisites unless a specific exemption applies, so a package negotiated on a net basis may cost the employer more in India than in Spain.</li>
          <li>A stay of 182 days or more in a year, or 60 days plus 365 in the previous four years, can make the employee a resident of India, and Indian residents are taxed on worldwide income, subject to the &apos;not ordinarily resident&apos; status that limits this in the first years.</li>
          <li>Equity-based pay granted by the Spanish parent and vesting during the assignment is taxable in India for the period worked there, and the Indian employer must collect the tax, so tell the payroll team about share awards before they vest.</li>
          <li>Spanish staff leaving India should obtain a tax position statement and settle the final return before departure.</li>
        </ul>

        <h2 id="social" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Provident fund and Spanish social security</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India has signed social security agreements with many countries, and for those countries a certificate
          of coverage lets a posted employee stay in the home scheme for a fixed period. The provident fund
          organisation&apos;s list of operating agreements dated August 2022 names nineteen operating
          agreements, and Spain is not among them. For an employee of a country without an agreement, the rules
          for international workers are generally applied so that contributions are due on full wages from the
          first day, without the usual wage ceiling, and the benefit is payable on retirement or on leaving
          India only in limited cases. The rule has been litigated, and positions can change, so confirm it with
          an adviser at the start of each assignment.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          On the Spanish side, social security for an employee sent outside the European Union, and outside any
          agreement, depends on the terms of the posting and on special arrangements for workers abroad. Some
          employers keep the employee in the Spanish system voluntarily or by special agreement, which leads to
          contributions in both countries. Others let Spanish cover end and rely on the Indian scheme and
          private insurance. Neither choice is free, and an employment contract should state which applies.
        </p>

        <h2 id="table" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Comparison of the two systems for a secondee</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">India</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Spain</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Income tax on salary", "On work done in India; employer deducts under Section 392", "Worldwide income; exemption up to EUR 60,100 for qualifying work abroad; credit for Indian tax"],
                ["Pension and social security", "Provident fund for international workers on full wages, as generally applied", "Depends on the posting terms; may continue or need a special arrangement"],
                ["Health cover", "Private insurance needed for the assignment", "Public cover for residents may lapse on long postings; private cover advised"],
                ["Reporting", "Quarterly salary tax return; annual certificate", "Annual personal income tax return; foreign asset declaration where thresholds are met"],
                ["Cost to the employer", "Employer share of provident fund; payroll administration", "Possible continuing employer contributions; adviser fees"],
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

        <h2 id="models" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Secondment, local contract or business trip</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Model</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Who is the employer for tax</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What to watch</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Short business trip", "Spanish employer", "Visa category; stay below the treaty day count; keep a travel log; no contract negotiation in India"],
                ["Secondment to the Indian subsidiary", "Indian subsidiary directs the work and bears the cost", "Salary taxed in India; provident fund; recharge priced as a service fee with Withholding Tax and transfer pricing"],
                ["Local Indian contract", "Indian subsidiary", "Cleaner for Indian law; Spanish employment status, leave of absence and return rights need planning"],
                ["Dual contract", "Both", "High scrutiny; only if each contract reflects real duties"],
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

        <h2 id="letter" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the secondment letter should say</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Who the employer of record is during the assignment, who gives instructions and who pays the salary.</li>
          <li>The term, the extension rules and the return arrangements to Spain.</li>
          <li>How tax is handled: net pay, gross-up or hypothetical Spanish tax, and who bears Indian tax and provident fund.</li>
          <li>Confidentiality, intellectual property assignment and non-solicitation terms that work under Indian and Spanish law.</li>
          <li>Conduct, anti-bribery and data protection rules for the Indian role.</li>
        </ul>

        <h2 id="exec" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Directors and senior managers</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A Spanish executive who sits on the board of the Indian company and travels to India for board
          meetings does not by that alone create tax in India, but fees paid for board service can be taxable in
          India, and prolonged presence can raise the permanent establishment and residence questions above.
          Keep a calendar of days spent in India for each senior person, and discuss it with the Spanish adviser
          at least once a year. See{" "}
          <Link href="/spain-to-india/resident-director-service-for-spanish-companies" className="text-blue-800 font-semibold hover:underline">the resident director guide</Link>{" "}
          for the director who must live in India.
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

        <GuideServiceBox path="/spain-to-india/spanish-employees-in-india" />
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
            { label: "EPFO: Brochure on international workers (August 2022)", href: "https://www.epfindia.gov.in:443/site_docs/PDFs/Updates/Brochure_on_International_Workers_17082022.pdf" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "Agencia Tributaria (Spain)", href: "https://sede.agenciatributaria.gob.es/" },
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
        title="Employing Spanish Staff in India?"
        description="Tell us who is moving and for how long, and we'll map Indian income tax, the Spanish position and the provident fund."
      />
    </main>
  )
}
