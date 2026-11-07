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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/relocate-german-staff"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "options", label: "Three ways to send staff" },
  { id: "visa", label: "Visa and registration" },
  { id: "tax", label: "Income tax for the employee" },
  { id: "ssa", label: "Social security" },
  { id: "pe", label: "Permanent establishment checks" },
  { id: "checklist", label: "Pre-departure checklist" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What visa does a German employee need to work in India?", a: "An employment visa for a skilled role with a contract and a salary floor of USD 25,000 a year, with exceptions. A business visa is for meetings, not for productive work." },
  { q: "Is FRRO registration needed?", a: "Yes, within 14 days of arrival for stays of more than 180 days." },
  { q: "Is a German employee in India taxed in India?", a: "Possibly. The treaty's 183-day rule can leave salary taxable only in Germany for short stays, but a secondment to the Indian subsidiary at its cost usually fails that test and the employer must withhold under Section 392." },
  { q: "Can a seconded German employee stay in the German social insurance system?", a: "Yes, under the Social Security Agreement with a certificate of coverage, normally for up to 48 months plus a 12-month extension." },
  { q: "Does a secondment create a permanent establishment?", a: "It can, for example if the person concludes contracts for the German company or works from a fixed place at its disposal. Review each assignment." },
  { q: "Is a local Indian contract better than a secondment?", a: "It is cleaner for Indian tax and labour law but changes the person's German status, so plan the return as well." },
]

const relatedCards = [
  { title: "German Employees Working in India: What the Tax Treaty and the Social Security Agreement Mean", desc: "How income tax and social security apply to German staff in India: the 183-day treaty test, the 2009 social security agreement, the 48-month detachment rule, certificates of coverage and German tax residence.", href: "/germany-to-india/german-employees-in-india-ssa" },
  { title: "The India-Germany Tax Treaty (DTAA), Article by Article: India as Source State, Germany as Residence State", desc: "The India-Germany double taxation agreement explained article by article from the German parent's point of view: the flat 10% rates table, permanent establishment, share gains, relief and how to claim.", href: "/germany-to-india/india-germany-dtaa" },
  { title: "Hiring in India as a German Employer: What Changes from German Practice", desc: "A comparison for German HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and dismissal, no works council, payroll tax and share plans, set against German practice.", href: "/germany-to-india/hiring-in-india" },
  { title: "Common Mistakes German Companies Make in India and How to Avoid Them", desc: "The most frequent mistakes German companies make when setting up in India: late FEMA filings, missing forms for treaty relief, works council surprises, apostille errors, PE creation and transfer pricing gaps.", href: "/germany-to-india/common-mistakes" },
]

export default function RelocateGermanStaffPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Relocating German Staff to India: Employment Visa, Indian Tax, Certificate of Coverage and PE Risk"
        description="What a German company must plan when sending staff to India: employment visa rules, FRRO registration, 183-day tax test, Section 392 salary tax, the Social Security Agreement, secondment contracts and PE risk."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "Sending German Employees to India: Visas, Tax, Social Security and Permanent Establishment" },
        ]}
      />

      <GuideHero
        eyebrow="People: relocation"
        title="Relocating German Staff to India: Employment Visa, Indian Tax, Certificate of Coverage and PE Risk"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Sending a German employee to India triggers four separate questions: immigration (employment visa and
          registration), personal income tax (the 183-day test and who pays), social security (stay in the
          German system under the agreement or join the Indian provident fund) and corporate tax (whether the
          secondment creates a permanent establishment). Settle all four before the person travels. A German
          employee who works on the Indian company&apos;s payroll and under its control is normally an employee
          of the Indian entity for Indian tax.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="expat-visa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Visa", "Employment visa with a minimum salary floor of USD 25,000 a year, for skilled roles, with exceptions"],
                ["Registration", "FRRO registration within 14 days of arrival for stays over 180 days"],
                ["Income tax", "Residence test and the treaty's 183-day rule for short stays; Indian salary tax is withheld under Section 392"],
                ["Social security", "Social Security Agreement of 2008: certificate of coverage from the German side keeps the employee in German schemes for up to 48 months, with a 12-month extension"],
                ["Contract", "Secondment letter or local contract; who is the employer, who pays, who directs the work"],
                ["PE risk", "Dependent agents and long secondments can create a PE; see the DTAA guide"],
                ["Exit", "Return planning: German tax, social insurance and residence status"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="options" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Three ways to send staff</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Option</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Employer in India</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Pros</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Cons</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Business trip", "None (stays German employee)", "Simple for short visits", "Visa category matters; the treaty 183-day test and PE watch"],
                ["Secondment to the Indian subsidiary", "Subsidiary directs the work; German parent may still pay salary and recharge", "Keeps the German contract; transfers know-how", "Salary may still be taxable in India; recharge and Withholding Tax issues"],
                ["Local contract in India", "Indian subsidiary employs the person", "Clean for Indian tax and labour law", "German employment and social insurance status must be handled on exit and return"],
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

        <h2 id="visa" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Visa and registration</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>An employment visa generally requires a skilled role, a signed contract and a salary above a floor of USD 25,000 a year; the floor does not apply to every category.</li>
          <li>Register with the Foreigners Regional Registration Office within 14 days of arrival if the visa is for more than 180 days.</li>
          <li>Family members need dependent visas.</li>
          <li>Short business visits on a business visa are for meetings and talks, not for productive work in India. If your engineers will commission or maintain equipment on site, check the right visa category.</li>
        </ul>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Income tax for the employee</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Under the treaty, salary of a German resident working in India for up to 183 days in the fiscal year is taxable only in Germany if the employer is not in India and does not bear the cost. A secondment to the Indian subsidiary, where the subsidiary bears the cost, usually fails that test.</li>
          <li>Where the person is employed by or seconded to the Indian company, the employer must deduct tax on salary under Section 392 of the Income-tax Act, 2025, and deposit it by the 7th of the following month.</li>
          <li>A person who stays long enough becomes resident in India and is taxed on world income, subject to the rules for residents who are not ordinarily resident. A tax adviser should model the case before travel.</li>
          <li>Germany taxes residents on world income; moving residence out of Germany and the German tax consequences should be reviewed with a German adviser.</li>
          <li>Tax equalisation or hypothetical tax policies need to be priced into the assignment budget.</li>
        </ul>

        <h2 id="ssa" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Social security</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India and Germany have a Social Security Agreement, in force since 1 October 2009. A detached employee
          who stays in the German system can obtain a certificate of coverage from the German implementing body
          (the DVKA), which the Indian employer gives to the EPFO to be exempted from provident fund
          contributions. Coverage is for up to 48 months, with a 12-month extension possible. See{" "}
          <Link href="/germany-to-india/german-employees-in-india-ssa" className="text-blue-800 font-semibold hover:underline">German employees and the Social Security Agreement</Link>{" "}
          for the full process.
        </p>

        <h2 id="pe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Permanent establishment checks</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Staff who conclude contracts for the German company in India can create a dependent agent PE.</li>
          <li>A fixed place, such as an office or a site used by German staff, can create a fixed-place PE.</li>
          <li>The India-Germany treaty contains a construction and installation clause at six months. Check the current text for services clauses before assuming any exposure either way. See <Link href="/germany-to-india/india-germany-dtaa" className="text-blue-800 font-semibold hover:underline">the India-Germany DTAA</Link>.</li>
          <li>Keep a record of the days, tasks and decision-makers for each seconded person.</li>
        </ul>

        <h2 id="checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Pre-departure checklist</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Decide the model and write the secondment or local contract.</li>
          <li>Apply for the visa category that matches the real work.</li>
          <li>Request the certificate of coverage from the German side before departure, if staying in the German system.</li>
          <li>Register with the tax and payroll systems and decide how salary and recharges flow.</li>
          <li>Brief the person on registration (FRRO), banking and tax filing.</li>
          <li>Plan the return: German registration, insurance and tax.</li>
        </ol>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.bzst.de/EN/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Federal Central Tax Office (BZSt)</a>,{" "}
          <a href="https://www.handelsregister.de/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Handelsregister</a>{" "}
          and the{" "}
          <a href="https://www.bundesbank.de/en" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Deutsche Bundesbank</a>.
        </p>

        <GuideServiceBox path="/germany-to-india/relocate-german-staff" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/germany-to-india/faq"
          seeAllLabel="See all 146 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Indian Visa Online", href: "https://indianvisaonline.gov.in/" },
            { label: "Bureau of Immigration India (FRRO)", href: "https://boi.gov.in/" },
            { label: "EPFO India", href: "https://www.epfindia.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and German
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Sending German Staff to India?"
        description="Tell us who is relocating and for how long, and we'll map the visa, the certificate of coverage, FRRO registration and PE risk."
      />
    </main>
  )
}
