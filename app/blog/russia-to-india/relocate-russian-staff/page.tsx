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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/relocate-russian-staff"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "visa", label: "Choosing the visa" },
  { id: "steps", label: "From job offer to arrival" },
  { id: "family", label: "Family and dependants" },
  { id: "money", label: "Banking and personal money" },
  { id: "leaving", label: "Leaving India" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What visa does a Russian employee need?", a: "An Employment Visa sponsored by the Indian company." },
  { q: "Is there a minimum salary for the Employment Visa?", a: "Yes, USD 25,000 a year, with limited exceptions." },
  { q: "Do Russian nationals need security clearance?", a: "Not by nationality; Russia does not share a land border with India." },
  { q: "When is FRRO registration required?", a: "Within 14 days of arrival, for stays over 180 days." },
  { q: "Can a Russian employee work on a business visa?", a: "No. Business visas cover meetings and negotiations, not productive work." },
  { q: "Do Russian bank cards work in India?", a: "Often not, so the employer should plan initial expenses in India." },
  { q: "Can families join?", a: "Yes, on dependant visas linked to the employment visa." },
  { q: "Is Indian tax due from the first day?", a: "Yes, on salary for work done in India." },
]

const relatedCards = [
  { title: "Russian Employees in India", desc: "Tax and provident fund.", href: "/russia-to-india/russian-employees-in-india" },
  { title: "Hiring in India", desc: "Payroll set-up.", href: "/russia-to-india/hiring-in-india" },
  { title: "Sanctions and Payments", desc: "Banking for Russian nationals and companies.", href: "/russia-to-india/sanctions-and-payments-for-russian-companies" },
  { title: "Incorporation Steps", desc: "The company that sponsors the visa.", href: "/russia-to-india/incorporation-steps" },
]

export default function RelocateRussianStaffPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Moving Russian Employees to India: Employment Visa, FRRO Registration, Dependants and Practicalities"
        description="How to relocate Russian staff to an Indian subsidiary: e-visa and business visa limits, employment visa and the salary floor, FRRO registration within 14 days for stays over 180 days, dependants, tax and exit."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Relocating Russian Staff to India: Visas, Registration and Family" },
        ]}
      />

      <GuideHero
        eyebrow="People: relocation"
        title="Moving Russian Employees to India: Employment Visa, FRRO Registration, Dependants and Practicalities"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Russian employee moving to India for work needs an Employment Visa sponsored by the Indian company, with a minimum salary of USD 25,000 a year, and FRRO registration within 14 days of arrival for stays over 180 days. No land-border security clearance is needed by nationality. Practical issues often matter more: opening an Indian bank account, paying rent and school fees, and moving personal funds from Russia.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="expat-visa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Employment Visa", "For skilled work with an Indian company; minimum salary USD 25,000 a year"],
                ["Business visa or e-visa", "Meetings and negotiations, not productive work"],
                ["Registration", "FRRO within 14 days for stays over 180 days"],
                ["Security clearance", "Not required by nationality; Russia has no land border with India"],
                ["Dependants", "Dependant visas linked to the employment visa"],
                ["Tax", "Indian tax on Indian salary; residence usually from 182 days"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="visa" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing the visa</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Purpose</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Visa</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Working for the Indian subsidiary</th>
                <td className="border border-gray-300 p-3">Employment Visa</td>
                <td className="border border-gray-300 p-3">Salary floor and appointment letter</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Meetings, negotiations, audits</th>
                <td className="border border-gray-300 p-3">Business visa or e-visa where eligible</td>
                <td className="border border-gray-300 p-3">No productive work</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Short installation or commissioning</th>
                <td className="border border-gray-300 p-3">Business or employment, depending on the work</td>
                <td className="border border-gray-300 p-3">Check the category before travel</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Family joining</th>
                <td className="border border-gray-300 p-3">Dependant visa</td>
                <td className="border border-gray-300 p-3">Linked to the main visa</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">From job offer to arrival</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>The Indian company issues the appointment or secondment letter and company documents.</li>
          <li>The employee applies through the Indian Embassy in Moscow or consulates in St Petersburg or Vladivostok, or online where eligible.</li>
          <li>On arrival, the employee registers with the FRRO within 14 days if staying over 180 days.</li>
          <li>The Indian company obtains a PAN for the employee and adds him or her to payroll.</li>
        </ol>
        <h2 id="family" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Family and dependants</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Spouses and children apply for dependant visas. International schools in Delhi NCR, Mumbai, Bengaluru and Chennai take Russian-speaking children, and some cities have Russian community schools or associations. Health insurance should cover the whole family from arrival.
        </p>
        <h2 id="money" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Banking and personal money</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Russian bank cards often do not work in India, so plan the first weeks&apos; expenses. An Indian bank account can be opened with the visa, FRRO registration and PAN, but banks apply enhanced checks to Russian nationals. Personal transfers from Russia need a route that clears both sides, so the employer may need to advance part of the first salary or allowances in India.
        </p>
        <h2 id="leaving" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Leaving India</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>File the final Indian tax return and obtain any tax clearance needed.</li>
          <li>Close the FRRO registration.</li>
          <li>Settle provident fund withdrawal or transfer as the rules allow.</li>
          <li>Close Indian bank accounts or convert them to non-resident accounts.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We prepare visa and FRRO documents, add Russian staff to payroll with the right tax and provident fund treatment, and help with the practical banking steps.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/payroll-expat-services" className="text-blue-800 font-semibold hover:underline">payroll and expat services</Link> and <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link>.
        </p>

        <GuideServiceBox path="/russia-to-india/relocate-russian-staff" />
        <GuideCTA
          title="Moving Russian staff to India?"
          description="Tell us who is relocating, and we will plan the visa, payroll and banking."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/russia-to-india/faq"
          seeAllLabel="See all Russian FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Russian parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Bureau of Immigration, India", href: "https://boi.gov.in" },
            { label: "Embassy of India, Moscow", href: "https://indianembassy-moscow.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Sending Russian Staff to India?"
        description="Tell us who is relocating and for how long, and we'll map the visa, FRRO registration, family arrangements and PE risk."
      />
    </main>
  )
}
