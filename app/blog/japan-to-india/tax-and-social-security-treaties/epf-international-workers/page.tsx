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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/tax-and-social-security-treaties/epf-international-workers"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "who", label: "Who is an international worker" },
  { id: "japanese-staff", label: "How it works for Japanese staff" },
  { id: "without-coc", label: "If there is no Certificate of Coverage" },
  { id: "courts", label: "The court challenges" },
  { id: "payroll", label: "Payroll steps for a Japanese-owned employer" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Do Japanese employees in India have to join the Indian provident fund?", a: "Not if they hold a Certificate of Coverage under the India-Japan Social Security Agreement; without one, they contribute as international workers." },
  { q: "Is there a salary cap for international worker contributions?", a: "No. International workers contribute on their full monthly salary." },
  { q: "Who issues the Certificate of Coverage?", a: "The Japan Pension Service, on application by the Japanese employer before the employee starts work in India." },
  { q: "How long does the exemption last?", a: "For an employee sent from Japan, generally up to five years under the agreement." },
  { q: "What if a chuzaiin is hired by the Indian company directly?", a: "The agreement still applies if the employee meets its conditions for being sent from Japan; otherwise Indian contributions apply." },
  { q: "Were the international worker rules struck down?", a: "The Karnataka High Court struck them down in 2024, but the Delhi High Court upheld them in November 2025, so most employers still comply." },
  { q: "What happens if contributions were missed?", a: "Arrears can be claimed with interest and damages, so take advice before regularising." },
  { q: "When are contributions deposited?", a: "By the 15th of the following month, with the monthly return." },
]

const relatedCards = [
  { title: "India-Japan Social Security Agreement", desc: "How the Certificate of Coverage works.", href: "/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" },
  { title: "Japanese social insurance for employees in India", desc: "What continues in Japan during the posting.", href: "/japan-to-india/tax-and-social-security-treaties/japan-social-insurance-for-expats-in-india" },
  { title: "Sending a Japanese Executive to India", desc: "Visa, payroll and tax for chuzaiin.", href: "/japan-to-india/expat-visa" },
  { title: "Hiring and Payroll from Japan", desc: "Provident fund for local staff.", href: "/japan-to-india/hiring-and-payroll" },
]

export default function EpfInternationalWorkersPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="EPF for International Workers in India: What Japanese Expats and Their Employers Must Know"
        description="How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, the Japan agreement exclusion and the 2026 EPF Scheme."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "Tax and Social Security Treaties", href: "/japan-to-india/tax-and-social-security-treaties" },
          { label: "EPF for International Workers: Rules for Japanese Expats" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: Indian provident fund"
        title="EPF for International Workers in India: What Japanese Expats and Their Employers Must Know"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Foreign nationals on an Indian payroll are &apos;international workers&apos; for provident fund purposes and generally contribute on their full salary, with no wage ceiling. A Japanese employee is the main exception: with a Certificate of Coverage issued by the Japan Pension Service under the India-Japan Social Security Agreement, he or she is an excluded employee and stays in Japanese pension insurance instead, for up to five years. Without the certificate, Indian contributions start from the first salary.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["International worker", "A foreign national working for an establishment covered by the provident fund law, and certain Indians working in non-agreement countries"],
                ["Wage ceiling", "None for international workers; contributions on full monthly pay"],
                ["Japanese exception", "Excluded employee status with a Certificate of Coverage under the India-Japan Social Security Agreement, in force since 1 October 2016"],
                ["Coverage period", "Up to five years for an employee sent from Japan, subject to the agreement's terms"],
                ["Courts", "Karnataka High Court struck the provisions down in 2024; Delhi High Court upheld them on 4 November 2025"],
                ["Current scheme", "Employees' Provident Funds Scheme, 2026, reported effective 1 July 2026"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="who" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who is an international worker</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The provident fund rules apply a separate set of provisions to foreign nationals who work for an Indian establishment covered by the law. Unlike Indian employees, who are compulsorily covered only up to a wage ceiling, international workers are covered whatever they earn, and contributions are calculated on their whole salary. This makes the rules expensive for senior expatriates unless a social security agreement applies.
        </p>
        <h2 id="japanese-staff" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How it works for Japanese staff</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Situation</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian provident fund</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Japanese pension</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Sent by a Japanese employer, with a Certificate of Coverage</th>
                <td className="border border-gray-300 p-3">Not required (excluded employee)</td>
                <td className="border border-gray-300 p-3">Continues</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Sent by a Japanese employer, no certificate yet</th>
                <td className="border border-gray-300 p-3">Required from the first salary</td>
                <td className="border border-gray-300 p-3">Continues, so contributions are doubled</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Hired locally in India with no Japanese employer</th>
                <td className="border border-gray-300 p-3">Required as an international worker</td>
                <td className="border border-gray-300 p-3">Depends on the employee&apos;s own arrangements</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Assignment extended beyond the agreement period</th>
                <td className="border border-gray-300 p-3">Required unless the authorities agree an extension</td>
                <td className="border border-gray-300 p-3">As agreed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          The certificate is applied for in Japan through the Japan Pension Service before the move, and a copy is kept by the Indian employer as evidence for each payroll month.
        </p>
        <h2 id="without-coc" className="text-2xl font-bold text-gray-900 mt-12 mb-4">If there is no Certificate of Coverage</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The employer and the employee each contribute the prescribed percentage of the full salary, and the employer also pays administrative charges. Withdrawal rules for international workers are stricter than for Indian employees, so contributions can be locked in for years. If contributions were missed for a past period, arrears with interest and damages can be claimed, so take advice before correcting them.
        </p>
        <h2 id="courts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The court challenges</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          In 2024 the Karnataka High Court, in Stone Hill Education Foundation v Union of India, held the international worker provisions unconstitutional. On 4 November 2025 the Delhi High Court, in cases brought by SpiceJet Limited and LG Electronics India, upheld them. With conflicting High Court decisions and no final Supreme Court ruling we are aware of, most employers continue to comply, and the position should be checked before any change.
        </p>
        <h2 id="payroll" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Payroll steps for a Japanese-owned employer</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Collect the Certificate of Coverage before the chuzaiin&apos;s first Indian salary.</li>
          <li>Classify each foreign employee as covered or excluded in the payroll system.</li>
          <li>For covered staff, calculate contributions on full pay and deposit by the 15th of the next month.</li>
          <li>Diarise the certificate&apos;s expiry and plan the position if the assignment is extended.</li>
          <li>Keep evidence of classification for provident fund inspections.</li>
        </ol>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We classify foreign employees, collect and track Certificates of Coverage, and run provident fund contributions for international workers through our payroll service.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/payroll-expat-services" className="text-blue-800 font-semibold hover:underline">payroll and expat services</Link> and <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/tax-and-social-security-treaties/epf-international-workers" />
        <GuideCTA
          title="Posting Japanese staff to India?"
          description="Tell us who is moving, and we will confirm the provident fund position."
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
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
            { label: "Japan Pension Service: social security agreements", href: "https://www.nenkin.go.jp/international/" },
            { label: "Ministry of Labour and Employment", href: "https://labour.gov.in" },
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
        title="Employing Japanese Nationals in India?"
        description="Tell us who you employ and on what terms, and we'll map provident fund, the Certificate of Coverage and withdrawal rules."
      />
    </main>
  )
}
