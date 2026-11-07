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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/hong-kong-employees-in-india"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "tax", label: "Income tax in India" },
  { id: "pf", label: "Provident funds: EPF and MPF" },
  { id: "models", label: "Secondment, local contract or business trip" },
  { id: "contract", label: "The secondment letter" },
  { id: "visa", label: "Immigration" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is there a social security agreement between India and Hong Kong?", a: "No. A certificate of coverage is not available, so Hong Kong staff in India fall under the Indian provident fund rules for international workers as generally applied." },
  { q: "Does a Hong Kong secondee still pay MPF?", a: "Employees employed in Hong Kong generally remain within MPF, subject to its exemptions. Confirm the position for your assignment with the MPF Authority or a Hong Kong adviser." },
  { q: "How much is the mandatory MPF contribution?", a: "5% of relevant income each for employer and employee, with a ceiling of HK$30,000 of monthly income, so at most HK$1,500 each. The income limits change from time to time." },
  { q: "Is salary for work in India taxable in India?", a: "Yes, unless the treaty's employment article conditions are met. A secondee whose cost is borne by the Indian subsidiary normally does not meet them." },
  { q: "Who deducts Indian tax on the salary?", a: "The Indian employer, under Section 392 of the Income-tax Act, 2025, by the 7th of the following month." },
  { q: "Can I avoid double contributions?", a: "Not through an agreement. Structure the assignment, for example as a local contract or a short trip, only where the facts support it, and budget for both schemes where they apply." },
]

const relatedCards = [
  { title: "India-Hong Kong Double Taxation Agreement Explained: 5% Dividends, 10% Royalties and Fees, PE Rules and the Principal Purpose Test", desc: "The India-Hong Kong tax treaty explained for a Hong Kong parent: 5% dividend rate, 10% interest, royalties and fees for technical services, permanent establishment rules, share gains, anti-abuse tests and how to claim treaty rates.", href: "/hong-kong-to-india/india-hong-kong-dtaa" },
  { title: "Moving Hong Kong Employees to India: Employment Visa, Registration with FRRO, Dependants and Clearance", desc: "How to relocate Hong Kong staff to an Indian subsidiary: employment and business visa categories, the salary floor, FRRO registration within 14 days for stays over 180 days, dependants, security clearance for land-border nationals, tax and exit.", href: "/hong-kong-to-india/relocate-hong-kong-staff" },
  { title: "Hiring Staff in India as a Hong Kong-Owned Company: Employment Contracts, Provident Fund, ESI, Gratuity and Labour Codes", desc: "How a Hong Kong-owned Indian subsidiary hires locally: offer and employment contracts, payroll taxes, provident fund, ESI, gratuity, labour codes, shops and establishments law, notice periods, POSH and differences from Hong Kong practice.", href: "/hong-kong-to-india/hiring-in-india" },
  { title: "Twelve Common Mistakes Hong Kong Companies Make in India and How to Avoid Them", desc: "The most common mistakes of Hong Kong companies entering India: skipping Press Note 3, thin hub structures, late FEMA filings, weak treaty paperwork, secondment tax errors, stale apostilles, unstamped contracts and ignoring the Indian calendar.", href: "/hong-kong-to-india/common-mistakes" },
]

export default function HongKongEmployeesInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Hong Kong Employees in India: Salary Tax, the MPF Position and EPF for International Workers"
        description="What a Hong Kong employer must plan for staff in India: Indian salary tax and the treaty day-count test, Hong Kong salaries tax, MPF, EPF for international workers because there is no social security agreement, and secondment contracts."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Hong Kong Employees in India: Income Tax, MPF and Indian Provident Fund" },
        ]}
      />

      <GuideHero
        eyebrow="People: tax and social security"
        title="Hong Kong Employees in India: Salary Tax, the MPF Position and EPF for International Workers"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          There is no social security agreement between India and Hong Kong, so a Hong Kong employee working in
          India cannot obtain a certificate of coverage. As the EPF rules for international workers are
          generally applied, a foreign national from a country without an agreement is covered from the first
          day, with contributions on full wages. Hong Kong&apos;s own Mandatory Provident Fund continues to
          apply to employees employed in Hong Kong, subject to its exemptions, so a secondee can face
          contributions in both places. For income tax, the treaty&apos;s day-count test rarely helps a secondee
          whose cost is borne by the Indian subsidiary, so the Indian employer withholds tax on salary under
          Section 392 of the Income-tax Act, 2025.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="foreign-employee-treaty-ssa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Social security agreement", "None between India and Hong Kong"],
                ["Indian provident fund", "International worker rules as generally applied: contributions on full wages without the usual ceiling; the rule has been litigated, so confirm the position"],
                ["Hong Kong MPF", "Employer and employee each pay 5% of relevant income up to HK$30,000 a month (maximum HK$1,500 each); exemptions exist, including for some foreign employees in their first 13 months or with an overseas scheme"],
                ["Indian income tax", "Tax on salary for work done in India under Section 392; treaty relief only if the day-count and employer conditions are met"],
                ["Hong Kong salaries tax", "Territorial; a Hong Kong employment with services partly abroad has special rules (the 60-day visit rule for non-Hong Kong employments); confirm with a Hong Kong adviser"],
                ["Equalisation", "Plan a tax equalisation or gross-up policy"],
                ["Cost", "Budget for double contributions where MPF and EPF both apply"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Income tax in India</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Salary for work done in India is taxable in India. The treaty can protect a short stay only if the conditions in the employment article are met, including that the employer is not an Indian resident and the cost is not borne by an Indian entity. Confirm the exact test in the treaty text.</li>
          <li>The Indian employer deducts tax on salary under Section 392 of the Income-tax Act, 2025, and deposits it by the 7th of the following month.</li>
          <li>A person who stays long enough becomes resident in India and may be taxed on world income, subject to the not ordinarily resident rules.</li>
          <li>Allowances for housing, school fees and travel are taxed as perquisites unless exempt, so negotiate the package with the tax effect in mind.</li>
        </ul>

        <h2 id="pf" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Provident funds: EPF and MPF</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">India (EPF)</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Hong Kong (MPF)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Rate", "Employer and employee contributions on wages; international workers on full wages as generally applied", "5% each of relevant income up to HK$30,000 a month, so at most HK$1,500 each"],
                ["Who is covered", "Employees of covered establishments; international workers from countries without an agreement", "Employees aged 18 to 65, with exemptions for some foreign employees and members of exempt schemes"],
                ["Overseas secondees", "Covered once working in India for an Indian establishment", "Employees employed in Hong Kong generally remain covered; confirm with the MPF Authority"],
                ["Agreement relief", "None for Hong Kong", "None"],
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
                <th scope="col" className="border border-gray-300 p-3 text-left">Employer for Indian tax</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Points to watch</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Short trip for meetings", "Hong Kong employer", "Visa category and day count; PE risk if staff conclude contracts"],
                ["Secondment to the Indian subsidiary", "Indian subsidiary directs the work and bears the cost", "Salary taxed in India; EPF; recharge priced under transfer pricing; Withholding Tax on the reimbursement"],
                ["Local Indian contract", "Indian subsidiary", "Cleaner for Indian law; Hong Kong employment status, MPF and salaries tax on exit need planning"],
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

        <h2 id="contract" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The secondment letter</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>State the employer of record, the reporting line, the term, the pay split and who bears Indian tax and provident fund.</li>
          <li>Add confidentiality, intellectual property assignment and return-to-Hong Kong terms.</li>
          <li>Make sure the Indian subsidiary controls the work, or the person may be seen as working for the parent and create PE risk.</li>
        </ul>

        <h2 id="visa" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Immigration</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Visa categories, registration and clearance are covered in{" "}
          <Link href="/hong-kong-to-india/relocate-hong-kong-staff" className="text-blue-800 font-semibold hover:underline">relocating Hong Kong staff</Link>.
          Align the tax and immigration plans so that the visa matches the real work.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.ird.gov.hk/eng/welcome.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Inland Revenue Department (Hong Kong)</a>,{" "}
          <a href="https://www.cr.gov.hk/en/home/index.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Companies Registry (Hong Kong)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/hong-kong-to-india/hong-kong-employees-in-india" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/hong-kong-to-india/faq"
          seeAllLabel="See all 157 FAQs"
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
            { label: "Mandatory Provident Fund Schemes Authority (Hong Kong)", href: "https://www.mpfa.org.hk/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Hong Kong
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Employing Hong Kong Staff in India?"
        description="Tell us who is moving and for how long, and we'll map income tax, MPF and the Indian provident fund position and payroll."
      />
    </main>
  )
}
