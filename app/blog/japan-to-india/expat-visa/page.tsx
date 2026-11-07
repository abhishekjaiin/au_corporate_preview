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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/expat-visa"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "assignment", label: "Choosing how the chuzaiin is employed" },
  { id: "visa", label: "Visa and registration" },
  { id: "social-security", label: "Pension and provident fund" },
  { id: "tax", label: "Income tax on both sides" },
  { id: "settling", label: "Settling in" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What visa does a Japanese chuzaiin need for India?", a: "An Employment Visa sponsored by the Indian company, with family members on dependant visas." },
  { q: "When must a chuzaiin register with the FRRO?", a: "Within 14 days of arrival, if the stay will exceed 180 days." },
  { q: "Does a chuzaiin pay into the Indian provident fund?", a: "Not if the Japan Pension Service has issued a Certificate of Coverage under the India-Japan Social Security Agreement, which keeps the employee in Japanese pension insurance for up to five years." },
  { q: "When does a chuzaiin become tax resident in India?", a: "Usually after staying 182 days or more in the Indian financial year." },
  { q: "Is salary paid in Japan taxed in India?", a: "Yes, to the extent it relates to work done in India." },
  { q: "Can a chuzaiin create tax risk for the Japanese parent?", a: "Yes, if he or she concludes contracts for the parent in India; the role should be with the Indian company." },
  { q: "Are housing allowances taxable in India?", a: "Generally yes, as perquisites, under the valuation rules for employer-provided accommodation." },
  { q: "Can a chuzaiin be the resident director?", a: "Yes, once he or she meets the 182-day test in the financial year." },
]

const relatedCards = [
  { title: "India-Japan Social Security Agreement", desc: "How the Certificate of Coverage works.", href: "/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" },
  { title: "Resident Director Rules", desc: "Chuzaiin as the resident director.", href: "/japan-to-india/resident-director" },
  { title: "Hiring and Payroll from Japan", desc: "Payroll for local and posted staff.", href: "/japan-to-india/hiring-and-payroll" },
  { title: "Expat Tax Residency", desc: "When a chuzaiin becomes tax resident.", href: "/japan-to-india/tax-and-social-security-treaties/expat-tax-residency-india-japan" },
]

export default function ExpatVisaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Sending a Japanese Executive to India: Visa, Housing, Banking and Tax"
        description="How to relocate a Japanese executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "Sending a Japanese Executive to India: Visa, Housing and Tax" },
        ]}
      />

      <GuideHero
        eyebrow="Mobilize: expats"
        title="Sending a Japanese Executive to India: Visa, Housing, Banking and Tax"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Japanese chuzaiin moving to India usually needs an Employment Visa sponsored by the Indian subsidiary, registration with the FRRO within 14 days of arrival for stays over 180 days, and a decision on payroll before the move. With a Certificate of Coverage under the India-Japan Social Security Agreement, the employee stays in Japanese pension insurance for up to five years and is exempt from Indian provident fund. Salary for work in India is taxed in India from the start.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="expat-visa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Visa", "Employment Visa, sponsored by the Indian company; minimum salary threshold applies"],
                ["Registration", "FRRO registration within 14 days of arrival for stays over 180 days"],
                ["Social security", "Certificate of Coverage under the India-Japan Social Security Agreement (in force since 1 October 2016), up to five years"],
                ["Indian tax", "Salary for work done in India is taxable in India; tax residence usually from 182 days in a year"],
                ["Japanese tax", "A chuzaiin leaving Japan for a year or more usually becomes non-resident in Japan"],
                ["PE risk", "Chuzaiin should act for the Indian company, not conclude contracts for the parent"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="assignment" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing how the chuzaiin is employed</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Model</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">How it works</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Points to plan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Secondment</th>
                <td className="border border-gray-300 p-3">Employee stays on the Japanese payroll; the Indian company reimburses the cost</td>
                <td className="border border-gray-300 p-3">Indian tax withheld on the salary; cost recharge reviewed for Withholding Tax and PE</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Local employment</th>
                <td className="border border-gray-300 p-3">Indian company employs and pays the chuzaiin directly</td>
                <td className="border border-gray-300 p-3">Simplest for Indian tax; Japanese pension continued under the Certificate of Coverage</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Split payroll</th>
                <td className="border border-gray-300 p-3">Part paid in Japan, part in India</td>
                <td className="border border-gray-300 p-3">Both parts taxed in India for Indian work; careful reporting needed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="visa" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Visa and registration</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>The Indian subsidiary issues an appointment or secondment letter and supporting company documents.</li>
          <li>The employee applies for an Employment Visa through the Indian Embassy in Tokyo or the Consulate in Osaka-Kobe, or online where available.</li>
          <li>On arrival, the employee registers with the FRRO within 14 days if the stay exceeds 180 days.</li>
          <li>Family members apply for dependant visas linked to the employment visa.</li>
        </ol>
        <h2 id="social-security" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Pension and provident fund</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Without a Certificate of Coverage, a chuzaiin on the Indian payroll would join the Indian provident fund as an international worker while also contributing to Japanese pension insurance. The India-Japan Social Security Agreement avoids this double contribution: the Japan Pension Service issues a Certificate of Coverage, and the employee remains in the Japanese system for up to five years. Apply before the move and keep the certificate on file for the Indian payroll.
        </p>
        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Income tax on both sides</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India taxes salary for work done in India from the first day. Once the chuzaiin stays 182 days or more in an Indian financial year, he or she is usually resident in India for tax. On the Japanese side, a person who leaves for an assignment of a year or more is generally treated as non-resident. Allowances such as housing and school fees are usually taxable in India, so the assignment policy should state who bears the tax.
        </p>
        <h2 id="settling" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Settling in</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Housing in a city with Japanese community support, such as Gurugram, Bengaluru or Chennai, often near Japanese schools.</li>
          <li>An Indian bank account opened with the visa, FRRO registration and PAN.</li>
          <li>A PAN obtained early for the tax return and banking.</li>
          <li>A clear handover of who in Japan approves expenses, so local decisions are not slowed.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We prepare the visa and FRRO documents, set up payroll and tax withholding for chuzaiin, coordinate the Certificate of Coverage, and file their Indian tax returns.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/payroll-expat-services" className="text-blue-800 font-semibold hover:underline">payroll and expat services</Link> and <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/expat-visa" />
        <GuideCTA
          title="Posting a chuzaiin to India?"
          description="Tell us who is moving and when, and we will map the visa, payroll and tax steps."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/japan-to-india/faq"
          seeAllLabel="See all Japanese FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Japanese parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Bureau of Immigration, India", href: "https://boi.gov.in" },
            { label: "Japan Pension Service", href: "https://www.nenkin.go.jp/international/" },
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Sending a Chuzaiin to India?"
        description="Tell us who is relocating and for how long, and we'll map the employment visa, FRRO registration, housing and payroll steps."
      />
    </main>
  )
}
