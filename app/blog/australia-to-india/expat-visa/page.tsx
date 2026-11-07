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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/expat-visa"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "plan", label: "Planning the move" },
  { id: "visa", label: "Visa and FRRO" },
  { id: "super", label: "Superannuation and provident fund" },
  { id: "tax", label: "Tax in India and Australia" },
  { id: "life", label: "Living in India" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What visa does an Australian executive need?", a: "An Employment Visa sponsored by the Indian company." },
  { q: "When is FRRO registration required?", a: "Within 14 days of arrival, for stays longer than 180 days." },
  { q: "Does an Australian secondee pay into the Indian provident fund?", a: "Not with an ATO certificate of coverage under the India-Australia Social Security Agreement, for up to five years." },
  { q: "When does the executive become tax resident in India?", a: "Usually after 182 days in the Indian financial year." },
  { q: "Can the executive stay Australian resident?", a: "Possibly, under the domicile test; the treaty's Article 4 then decides residence." },
  { q: "How is double tax avoided?", a: "The executive claims a foreign income tax offset in Australia for Indian tax on Indian salary." },
  { q: "Are allowances taxable in India?", a: "Housing and school allowances are generally taxable." },
  { q: "Can the executive create a PE for the Australian parent?", a: "Yes, if he or she concludes contracts for the parent; the role should sit with the Indian company." },
]

const relatedCards = [
  { title: "Resident Director Rules", desc: "Executives as resident directors.", href: "/australia-to-india/resident-director" },
  { title: "Hiring and Payroll from Australia", desc: "Payroll set-up.", href: "/australia-to-india/hiring-and-payroll" },
  { title: "Tax Treaty and PE Risk", desc: "Residence and PE.", href: "/australia-to-india/dtaa-pe-risk" },
  { title: "Foreign Employees and the Social Security Agreement", desc: "How the agreement works.", href: "/australia-to-india/foreign-employee-treaty-ssa" },
]

export default function ExpatVisaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Sending an Australian Executive to India: Visa, Housing, Banking and Tax"
        description="How to relocate an Australian executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent."
        datePublished="2026-10-15"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "Sending an Australian Executive to India: Visa, Housing and Tax" },
        ]}
      />

      <GuideHero
        eyebrow="Mobilize: expats"
        title="Sending an Australian Executive to India: Visa, Housing, Banking and Tax"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Australian executive moving to India needs an Employment Visa sponsored by the Indian company and FRRO registration within 14 days of arrival if staying over 180 days. An ATO certificate of coverage under the India-Australia Social Security Agreement keeps the executive in superannuation and out of Indian provident fund for up to five years. Indian salary is taxed in India, and an executive who stays Australian resident under the domicile test claims the Indian tax back as a foreign income tax offset.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="expat-visa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Visa", "Employment Visa sponsored by the Indian company; salary threshold applies"],
                ["Registration", "FRRO within 14 days of arrival for stays over 180 days"],
                ["Social security", "ATO certificate of coverage, India-Australia Social Security Agreement in force since 1 January 2016, up to five years"],
                ["Indian tax", "Salary for work in India taxed in India; residence usually from 182 days"],
                ["Australian tax", "May remain resident under the domicile test; foreign income tax offset for Indian tax"],
                ["PE watch", "Executive should act for the Indian company, not conclude contracts for the parent"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Planning the move</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Decision</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Options</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Consequence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Employer</th>
                <td className="border border-gray-300 p-3">Secondment from Australia or local Indian employment</td>
                <td className="border border-gray-300 p-3">Who withholds tax and how costs are recharged</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Duration</th>
                <td className="border border-gray-300 p-3">Short assignment or a year or more</td>
                <td className="border border-gray-300 p-3">Indian tax residence and treaty position</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Pension</th>
                <td className="border border-gray-300 p-3">Certificate of coverage or Indian provident fund</td>
                <td className="border border-gray-300 p-3">Avoids double social security cost</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Role</th>
                <td className="border border-gray-300 p-3">Running the Indian company or representing the parent</td>
                <td className="border border-gray-300 p-3">Permanent establishment risk</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="visa" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Visa and FRRO</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>The Indian company issues the appointment or secondment letter.</li>
          <li>The executive applies for an Employment Visa through the Indian High Commission in Canberra or a consulate in Sydney, Melbourne or Perth, or online where available.</li>
          <li>Family members apply for dependant visas.</li>
          <li>Within 14 days of arrival, register with the FRRO if the stay will exceed 180 days.</li>
        </ol>
        <h2 id="super" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Superannuation and provident fund</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Without a certificate of coverage, an Australian on the Indian payroll would contribute to the Indian provident fund as an international worker, on full salary, while also keeping superannuation. The ATO issues a certificate of coverage for employees sent from Australia, keeping them in the Australian system for up to five years and exempt from Indian provident fund. Apply before the move.
        </p>
        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax in India and Australia</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India taxes salary for work done in India from the first day, and the executive usually becomes Indian tax resident after 182 days in an Indian financial year. Australia may still treat the executive as resident under the domicile test. Article 4 of the India-Australia treaty then decides residence for treaty purposes, and Indian tax on Indian salary is claimed in Australia as a foreign income tax offset. Housing and school allowances are generally taxable in India.
        </p>
        <h2 id="life" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Living in India</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Bank account opened after the visa, FRRO registration and PAN.</li>
          <li>A PAN obtained early for the Indian return.</li>
          <li>Housing and schools in cities such as Bengaluru, Mumbai, Gurugram or Chennai.</li>
          <li>A clear policy on who in Australia approves local spending.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We handle visa and FRRO documents, set up payroll and tax withholding for Australian secondees, coordinate the certificate of coverage and file their Indian tax returns.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/payroll-expat-services" className="text-blue-800 font-semibold hover:underline">payroll and expat services</Link> and <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/expat-visa" />
        <GuideCTA
          title="Sending an Australian executive to India?"
          description="Tell us who is moving and when, and we will map visa, payroll and tax."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/australia-to-india/faq"
          seeAllLabel="See all Australian FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Australian parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Bureau of Immigration, India", href: "https://boi.gov.in" },
            { label: "Australian Taxation Office: certificate of coverage", href: "https://www.ato.gov.au" },
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Sending Australian Staff to India?"
        description="Tell us who's relocating and for how long — we'll map the visa, FRRO registration and payroll steps needed."
      />
    </main>
  )
}
