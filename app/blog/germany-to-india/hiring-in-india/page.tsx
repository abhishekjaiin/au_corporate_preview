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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/hiring-in-india"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "differences", label: "What changes from German practice" },
  { id: "registrations", label: "Registrations and payroll" },
  { id: "contracts", label: "Contracts that work in India" },
  { id: "people", label: "Attrition, pay and benefits" },
  { id: "secondees", label: "German staff in India" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is there a works council requirement in India?", a: "No German-style works council; larger establishments have standing order and grievance rules." },
  { q: "What replaces German social insurance?", a: "Provident fund, ESI for lower wages and employer health cover." },
  { q: "When is gratuity payable?", a: "After five years of service, or one year for fixed-term staff." },
  { q: "Are German non-competes enforceable in India?", a: "Post-employment restraints are narrowly enforced; rely on confidentiality." },
  { q: "How long are notice periods?", a: "Usually one to three months, by contract." },
  { q: "Can German secondees avoid Indian provident fund?", a: "Yes, with a certificate of coverage, for up to 48 months plus 12." },
  { q: "When is salary tax deposited?", a: "By the 7th of the following month." },
  { q: "Do the labour codes affect salary structures?", a: "Yes. Wages must be at least half of total pay." },
]

const relatedCards = [
  { title: "German Employees in India", desc: "Social security agreement in detail.", href: "/germany-to-india/german-employees-in-india-ssa" },
  { title: "Relocating German Staff", desc: "Visas and registration.", href: "/germany-to-india/relocate-german-staff" },
  { title: "Compliance Calendar", desc: "Payroll deadlines.", href: "/germany-to-india/compliance-calendar" },
  { title: "Structure Options", desc: "Choosing the employer entity.", href: "/germany-to-india/structure-options" },
]

export default function HiringInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Hiring in India as a German Employer: What Changes from German Practice"
        description="A comparison for German HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and dismissal, no works council, payroll tax and share plans, set against German practice."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "Hiring in India for a German Company: Contracts, Provident Fund, Labour Codes and Share Plans" },
        ]}
      />

      <GuideHero
        eyebrow="People: hiring in India"
        title="Hiring in India as a German Employer: What Changes from German Practice"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          German employers hiring in India meet a different system: no works council, no collective agreements for most office staff, provident fund instead of German social insurance, gratuity after five years, and Indian labour codes with state rules. Notice periods are shorter and job changes more frequent, while documentation for contracts, payroll and statutory registrations is just as important as in Germany.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="hiring-and-payroll" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Works councils", "No German-style co-determination; industrial relations under the labour codes"],
                ["Social security", "Provident fund and ESI instead of German statutory insurance"],
                ["Gratuity", "After five years of service"],
                ["Notice", "Usually one to three months by contract"],
                ["Labour codes", "In force from 21 November 2025; wages at least 50% of total pay"],
                ["German secondees", "Certificate of coverage under the India-Germany agreement, up to 48 months plus 12"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="differences" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What changes from German practice</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">German practice</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Works council and co-determination</th>
                <td className="border border-gray-300 p-3">No equivalent for most offices; grievance and standing order rules for larger establishments</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Statutory health, pension and unemployment insurance</th>
                <td className="border border-gray-300 p-3">Provident fund, ESI for lower wages, and employer health cover by choice</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Long notice periods and protection against dismissal</th>
                <td className="border border-gray-300 p-3">Notice by contract; retrenchment rules for larger establishments</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">13th-month salary</th>
                <td className="border border-gray-300 p-3">Statutory bonus applies to some wage levels; other bonuses by contract</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">30 days&apos; leave common</th>
                <td className="border border-gray-300 p-3">Leave set by state rules and the codes, usually less</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="registrations" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Registrations and payroll</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>TAN for salary tax, issued at incorporation.</li>
          <li>Provident fund and ESI as headcount and wages require.</li>
          <li>Professional tax in states that levy it.</li>
          <li>Shops and establishments registration.</li>
          <li>Monthly tax deposit by the 7th; provident fund and ESI by the 15th.</li>
        </ul>
        <h2 id="contracts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contracts that work in India</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Use Indian contracts setting out pay, hours, overtime at twice the wage rate, leave, notice and IP assignment. German-style post-employment non-competes are narrowly enforced in India, so confidentiality and assignment clauses matter more. Keep the English text controlling.
        </p>
        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Attrition, pay and benefits</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian technology and engineering markets have higher attrition than Germany, and annual salary reviews are expected. Group health insurance, learning budgets and clear career paths help retention. Budget for salary increases each year rather than relying on long-term retention as in Germany.
        </p>
        <h2 id="secondees" className="text-2xl font-bold text-gray-900 mt-12 mb-4">German staff in India</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Germans posted to India can stay in German social insurance with a certificate of coverage under the India-Germany Social Security Agreement, for up to 48 months with a possible 12-month extension, and are then exempt from Indian provident fund. Salary for work in India is taxed in India.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We register the subsidiary for payroll, draft Indian contracts for German employers and run monthly payroll with provident fund, ESI and gratuity.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/payroll-expat-services" className="text-blue-800 font-semibold hover:underline">payroll and expat services</Link> and <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link>.
        </p>

        <GuideServiceBox path="/germany-to-india/hiring-in-india" />
        <GuideCTA
          title="Hiring in India as a German company?"
          description="Tell us the roles, and we will set up contracts and payroll."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/germany-to-india/faq"
          seeAllLabel="See all German FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for German parents."
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
            { label: "Deutsche Verbindungsstelle Krankenversicherung - Ausland", href: "https://www.dvka.de" },
          ]}
        />

        <p className="mt-6">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Building Your India Team?"
        description="Tell us the roles and headcount, and we'll set up payroll, PF and ESI registration and employment contracts for the subsidiary."
      />
    </main>
  )
}
