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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/german-employees-in-india-ssa"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "tax", label: "Income tax on pay: the 183-day test in practice" },
  { id: "german-side", label: "The German side: residence and payroll" },
  { id: "ssa", label: "The social security agreement" },
  { id: "epf", label: "Without a certificate: the international worker rules" },
  { id: "setup", label: "Setting up an assignment: a short checklist" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does the India-Germany social security agreement apply to my employee in India?", a: "It applies to workers posted from a German employer to an Indian branch or subsidiary for up to 48 months, extendable by 12, if the certificate of coverage is obtained before the posting begins." },
  { q: "Who issues the German certificate of coverage?", a: "The implementing body in Germany is the DVKA, and the employer applies through the social insurer. In India the EPFO receives the certificate to grant exemption." },
  { q: "What happens if a German employee has no certificate of coverage?", a: "The employee is an international worker and must contribute to the Employees' Provident Fund from the first day, with no wage ceiling." },
  { q: "How many days can a German employee stay in India without Indian tax?", a: "Up to 183 days in the fiscal year, but only if the employer is not Indian and the cost is not borne by an Indian PE. A recharge to the Indian subsidiary can defeat the exemption." },
  { q: "Does a German employee stay German tax resident while working in India?", a: "Usually, if they keep a home in Germany. The treaty tie-breaker decides if both countries claim them as resident." },
  { q: "What is the minimum salary for an Indian employment visa?", a: "Generally USD 25,000 a year, with limited exceptions." },
  { q: "Does India tax the fees of a German managing director of the Indian subsidiary?", a: "Directors' fees are taxable in the state where the paying company is resident, which is India for an Indian subsidiary, even if the director never visits." },
]

const relatedCards = [
  { title: "Relocating German Staff to India: Employment Visa, Indian Tax, Certificate of Coverage and PE Risk", desc: "What a German company must plan when sending staff to India: employment visa rules, FRRO registration, 183-day tax test, Section 392 salary tax, the Social Security Agreement, secondment contracts and PE risk.", href: "/germany-to-india/relocate-german-staff" },
  { title: "Hiring in India as a German Employer: What Changes from German Practice", desc: "A comparison for German HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and dismissal, no works council, payroll tax and share plans, set against German practice.", href: "/germany-to-india/hiring-in-india" },
  { title: "The India-EU Free Trade Agreement: What It Changes, and What It Leaves Alone, for a German Company Setting Up in India", desc: "Status and content of the India-EU free trade agreement for German companies: services access, staff mobility, tariffs on components, the investment protection gap and what stays under the 1995 tax treaty.", href: "/germany-to-india/india-eu-fta-and-germany" },
  { title: "The India-Germany Tax Treaty (DTAA), Article by Article: India as Source State, Germany as Residence State", desc: "The India-Germany double taxation agreement explained article by article from the German parent's point of view: the flat 10% rates table, permanent establishment, share gains, relief and how to claim.", href: "/germany-to-india/india-germany-dtaa" },
]

export default function GermanEmployeesInIndiaSsaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="German Employees Working in India: What the Tax Treaty and the Social Security Agreement Mean"
        description="How income tax and social security apply to German staff in India: the 183-day treaty test, the 2009 social security agreement, the 48-month detachment rule, certificates of coverage and German tax residence."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "German Employees in India: Treaty, Social Security Agreement and Certificate of Coverage" },
        ]}
      />

      <GuideHero
        eyebrow="People: tax and social security for assignees"
        title="German Employees Working in India: What the Tax Treaty and the Social Security Agreement Mean"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A German employee working in India owes Indian tax on pay for work done there unless the treaty&apos;s
          short-stay exemption applies: 183 days or fewer in the fiscal year, an employer outside India, and no
          cost borne by an Indian PE. For social security, the India-Germany agreement, in force since 1 October
          2009, lets a posted worker stay in the German scheme for up to 48 months (extendable by 12) and avoid
          Indian provident fund, but only with a certificate of coverage in hand before the posting begins. A
          German who keeps a home in Germany usually stays German tax resident as well.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="foreign-employee-treaty-ssa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Treaty rule", "Pay for work done in India is taxable in India unless the person is in India for 183 days or fewer in the fiscal year, the employer is not Indian, and the cost is not borne by an Indian PE"],
                ["Social security agreement", "Signed 8 October 2008; in force 1 October 2009; implementing bodies DVKA in Germany and the EPFO in India"],
                ["Detachment", "Up to 48 months, extendable by 12 months"],
                ["Certificate of coverage", "Needed before the posting; the Indian employer gives it to the EPFO to claim exemption from provident fund"],
                ["Without a certificate", "The German employee is an international worker and must contribute to the EPF"],
                ["Indian residence test", "182 days in the financial year, or 60 days plus 365 days in the preceding four years (different thresholds for Indian citizens and persons of Indian origin visiting)"],
                ["German tax residence", "A home (Wohnsitz) or habitual abode in Germany keeps worldwide taxation in Germany; the treaty tie-breaker decides if both states claim residence"],
                ["Indian visa", "Employment visa for staff on the Indian payroll (salary floor generally USD 25,000); e-Business visa for short visits"],
                ["Registration", "FRRO registration within 14 days of arrival for stays above 180 days"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Income tax on pay: the 183-day test in practice</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India taxes an employee on salary for work done in India. The treaty exempts it only if three
          conditions are all met: the person is present in India for 183 days or fewer in the fiscal year (1
          April to 31 March), the pay is made by an employer that is not an Indian resident, and the cost is not
          borne by an Indian permanent establishment.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Condition</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What it means</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Where German groups fail it</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Days", "Present in India for 183 days or fewer in the fiscal year", "Long projects that straddle two fiscal years"],
                ["Employer", "Pay is made by, or on behalf of, an employer who is not resident in India", "The Indian subsidiary pays the salary or is charged for it"],
                ["Cost", "Pay is not borne by a PE of the employer in India", "Recharge of the person's time to the Indian entity"],
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
          If the Indian subsidiary bears the cost, plan to tax the employee in India from day one and run
          payroll Withholding Tax on salary under Section 392 of the Income-tax Act, 2025. Germany generally
          gives relief for Indian tax on the same pay; your German payroll adviser should confirm the method.
        </p>

        <h2 id="german-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The German side: residence and payroll</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Worldwide taxation:</strong> a person with a home in Germany, or an habitual abode there, is taxed in Germany on worldwide income, even while working in India.</li>
          <li><strong>Tie-breaker:</strong> if India also treats the person as resident, the treaty decides by permanent home and centre of vital interests.</li>
          <li><strong>German wage tax:</strong> the German employer may need to keep or stop wage tax withholding depending on the relief claimed. Ask the German payroll provider before the first month abroad.</li>
          <li><strong>Records:</strong> keep a daily log of days in India and Germany for every assignee.</li>
        </ul>

        <h2 id="ssa" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The social security agreement</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The India-Germany Social Security Agreement was signed on 8 October 2008 and applied from 1 October
          2009. It covers workers posted temporarily to a branch or subsidiary in the other country for up to 48
          months, with an option to extend by 12 months. During the posting the worker is subject to the home
          country&apos;s social security rules only, so a German posted to India stays in the German scheme and
          does not pay into India&apos;s Employees&apos; Provident Fund.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Who issues the certificate:</strong> the implementing bodies are the DVKA in Germany and the EPFO in India. The German employer applies through its social insurer for the certificate of coverage.</li>
          <li><strong>When:</strong> before the posting starts. A certificate obtained afterwards invites a claim for back contributions.</li>
          <li><strong>What the Indian employer does:</strong> give the certificate to the EPFO and record the exemption in the payroll file.</li>
          <li><strong>What is covered:</strong> the agreement is built around pension insurance. Check the text for other branches of social insurance, such as health and unemployment, which may need separate arrangements.</li>
          <li><strong>Beyond the limit:</strong> after the detachment period, the worker joins the host scheme unless an exceptional extension is agreed by the authorities.</li>
        </ul>

        <h2 id="epf" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Without a certificate: the international worker rules</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A foreign national who works in a covered Indian establishment and has no certificate of coverage is
          an international worker and must contribute to the Employees&apos; Provident Fund from the first day,
          with no wage ceiling. This is the position of a German who is hired directly by the Indian subsidiary
          on a local contract, or whose posting passes the agreement&apos;s limits.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Review each assignment before the visa application and decide: posting under the agreement, or local hire with EPF.</li>
          <li>Record the decision in the assignment letter, with the party who bears the cost of any double contribution.</li>
          <li>Keep the certificate on file; the EPFO can ask for it during an inspection.</li>
        </ul>

        <h2 id="setup" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Setting up an assignment: a short checklist</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Fix the legal employer and the payroll country before the person travels.</li>
          <li>Apply for the certificate of coverage through the German social insurer.</li>
          <li>Choose the visa category and apply: employment visa for those on the Indian payroll, e-Business visa for meetings.</li>
          <li>Register with the FRRO within 14 days of arrival if the visa is for longer than 180 days.</li>
          <li>Decide tax equalisation and write it into the assignment letter.</li>
          <li>Track days in India per person with a calendar, not passport stamps.</li>
          <li>Review the PE risk in <Link href="/germany-to-india/india-germany-dtaa" className="text-blue-800 font-semibold hover:underline">the tax treaty guide</Link> when more than one person works on the same project.</li>
          <li>On return, close out the Indian payroll position and file exit forms.</li>
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

        <GuideServiceBox path="/germany-to-india/german-employees-in-india-ssa" />
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
            { label: "German Embassy New Delhi: India-Germany Social Security Agreement", href: "https://india.diplo.de/in-en/themen/social-security-agreement/1991408" },
            { label: "Ministry of External Affairs: India-Germany Social Security Agreement text", href: "https://www.mea.gov.in/images/pdf/ssa-germany.pdf" },
            { label: "EPFO India", href: "https://www.epfindia.gov.in/" },
            { label: "DVKA Germany", href: "https://www.dvka.de/" },
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
        title="Seconding German Employees to India?"
        description="Tell us who is moving and for how long, and we'll map treaty relief, the certificate of coverage and the Indian provident fund position."
      />
    </main>
  )
}
