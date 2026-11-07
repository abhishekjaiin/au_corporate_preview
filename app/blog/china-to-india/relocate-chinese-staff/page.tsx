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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/relocate-chinese-staff"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "categories", label: "Which visa for which job" },
  { id: "clearance", label: "Security clearance and timing" },
  { id: "arrival", label: "On arrival" },
  { id: "directors", label: "Chinese directors" },
  { id: "pe", label: "Permanent establishment checks" },
  { id: "checklist", label: "Pre-departure checklist" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can Chinese engineers work on a business visa in India?", a: "No. A business visa is for meetings and talks. Hands-on installation or production work needs an employment or project visa." },
  { q: "What is the salary floor for an Indian employment visa?", a: "USD 25,000 a year for skilled roles, with exceptions for some categories." },
  { q: "Has India made visas easier for Chinese professionals?", a: "Press reports in December 2025 described business visas for Chinese professionals being processed in about four weeks and wider e-visa access for company-sponsored staff, but the scope appears limited. Confirm the current procedure." },
  { q: "Do Chinese nationals need security clearance?", a: "Applications from Chinese nationals typically receive additional security review, and a Chinese citizen appointed as a director needs Ministry of Home Affairs clearance." },
  { q: "Is FRRO registration needed?", a: "Yes, within 14 days of arrival for visas of more than 180 days." },
  { q: "Does a long secondment create a permanent establishment?", a: "It can, for example if the person concludes contracts for the Chinese company or the services last more than 183 days in a year. Review each assignment." },
]

const relatedCards = [
  { title: "Chinese Employees in India: Tax Under the Treaty, Provident Fund as an International Worker and Cost Planning", desc: "What a Chinese employer must plan for staff in India: the 183-day treaty test, Section 392 salary tax, residence rules, EPF contributions for international workers, the lack of a social security agreement and secondment contracts.", href: "/china-to-india/chinese-employees-in-india" },
  { title: "India-China Double Taxation Avoidance Agreement Explained: Rates, Permanent Establishment and Relief for a Chinese Parent", desc: "The India-China DTAA explained for a Chinese parent: 10% rates on dividends, interest, royalties and technical fees, permanent establishment rules, business profits, share gains, employment income, relief from double tax and how to claim treaty rates.", href: "/china-to-india/india-china-dtaa" },
  { title: "Hiring in India as a Chinese Employer: Local Contracts, Statutory Benefits and Managing Mixed Teams", desc: "A guide for Chinese HR teams hiring in India: written contracts, provident fund, ESI, gratuity, labour codes, notice and termination, working hours, grievance rules and the practical issues of managing a mixed Indian and Chinese team.", href: "/china-to-india/hiring-in-india" },
  { title: "Common Mistakes Chinese Companies Make in India and How to Avoid Them", desc: "The most frequent mistakes Chinese companies make when setting up in India: investing before Press Note 3 approval, assuming an apostille works, hidden ownership, late FEMA filings, visa mismatches and weak records.", href: "/china-to-india/common-mistakes" },
]

export default function RelocateChineseStaffPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Relocating Chinese Staff to India: Employment Visa, Business Visa, Clearance and Registration"
        description="What a Chinese company must plan when sending staff to India: business visa limits, employment visa rules and salary floor, security clearance, the reported 2025 visa facilitation, FRRO registration, family visas and directors."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Sending Chinese Employees to India: Visas, Security Clearance, FRRO and Practical Planning" },
        ]}
      />

      <GuideHero
        eyebrow="People: relocation and visas"
        title="Relocating Chinese Staff to India: Employment Visa, Business Visa, Clearance and Registration"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Visas are the practical bottleneck for sending Chinese staff to India. A business visa is for meetings
          and talks, not for productive work on site. An employment visa needs a skilled role, a contract and a
          salary above a floor of USD 25,000 a year, and applications from Chinese nationals receive additional
          security scrutiny. In December 2025 the press reported that India had cut processing of business visas
          for Chinese professionals to about four weeks and widened e-visa access for company-sponsored
          professionals, but the scope of the change appears limited. Plan for delay, and match the visa
          category to the real work.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="expat-visa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Business visa", "For meetings, negotiations and similar visits; not for productive work or installation on site"],
                ["Employment visa", "Skilled role, written contract, salary above USD 25,000 a year, with exceptions"],
                ["Project visa", "For staff of foreign companies working on specified projects, with conditions; confirm eligibility"],
                ["Security clearance", "Chinese nationals typically need additional security review by the Indian authorities; plan for delay"],
                ["Reported facilitation", "December 2025 press reports of about four weeks for business visas for Chinese professionals and e-visas for company-sponsored staff; scope appears limited; confirm the current procedure"],
                ["Registration", "FRRO registration within 14 days of arrival for stays over 180 days"],
                ["Directors", "Ministry of Home Affairs clearance before a Chinese citizen is appointed director"],
                ["Family", "Dependent visas follow the main visa"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="categories" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Which visa for which job</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Purpose</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical visa</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Cautions</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Meetings, negotiations, vendor audits", "Business visa", "No installation or hands-on production work"],
                ["Installing or commissioning machinery", "Employment or project visa as appropriate", "Using a business visa for hands-on work risks refusal, deportation and trouble for the Indian host"],
                ["Long assignment as plant or finance manager", "Employment visa", "Salary floor, contract with the Indian subsidiary, registration"],
                ["Attending a conference or training", "Business or conference visa", "Match the stated purpose"],
                ["Board member of the Indian subsidiary", "Business visa for meetings; employment visa if executive", "Clearance is also needed to be appointed director"],
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

        <h2 id="clearance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Security clearance and timing</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Indian authorities review visa applications from Chinese nationals more closely than most. Allow weeks to months, depending on the case, the sector and the host company.</li>
          <li>The Indian sponsor should provide a detailed invitation letter: company registration, the role, the project, the approval for the investment and the salary.</li>
          <li>Reports from December 2025 said business visa processing for Chinese professionals had been shortened to about four weeks. Treat this as a target, not a guarantee, and confirm the current procedure with the Indian mission.</li>
          <li>A visa refusal in one case does not necessarily predict another, but repeated mismatched applications can harm future ones.</li>
        </ul>

        <h2 id="arrival" className="text-2xl font-bold text-gray-900 mt-12 mb-4">On arrival</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Register with the Foreigners Regional Registration Office within 14 days if the visa is for more than 180 days.</li>
          <li>Open a salary account and set up payroll under Section 392 of the Income-tax Act, 2025.</li>
          <li>Address the provident fund rules for international workers. See <Link href="/china-to-india/chinese-employees-in-india" className="text-blue-800 font-semibold hover:underline">Chinese employees in India</Link>.</li>
          <li>Keep copies of the visa, the contract and the registration. Inspections of foreign-owned factories often ask for them.</li>
          <li>Record the dates of each stay to manage the treaty day count and any permanent establishment risk.</li>
        </ol>

        <h2 id="directors" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Chinese directors</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A Chinese citizen proposed as a director of the Indian subsidiary needs security clearance from the
          Ministry of Home Affairs before appointment. Name an Indian resident director first, add the Chinese
          director when clearance is received, and avoid acting as a shadow director in the meantime. See{" "}
          <Link href="/china-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">incorporation steps</Link>.
        </p>

        <h2 id="pe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Permanent establishment checks</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Staff who conclude contracts for the Chinese company in India can create a dependent agent PE.</li>
          <li>A fixed place such as an office or a site used by Chinese staff can create a fixed-place PE.</li>
          <li>Services through personnel in India for more than 183 days in a year, according to the treaty summaries, can create a services PE. See <Link href="/china-to-india/india-china-dtaa" className="text-blue-800 font-semibold hover:underline">the DTAA guide</Link>.</li>
        </ul>

        <h2 id="checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Pre-departure checklist</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Decide the model and write the secondment or local contract.</li>
          <li>Choose the visa category that matches the real work, and start early.</li>
          <li>Prepare the invitation letter and supporting documents from the Indian subsidiary.</li>
          <li>Plan the tax and provident fund position and budget it.</li>
          <li>Brief the person on registration, banking and local compliance.</li>
          <li>Plan the return: Chinese payroll, social insurance and tax.</li>
        </ol>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.mofcom.gov.cn/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">MOFCOM (China)</a>,{" "}
          <a href="https://www.safe.gov.cn/en/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">SAFE (China)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/china-to-india/relocate-chinese-staff" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/china-to-india/faq"
          seeAllLabel="See all 147 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "India Briefing: business visa approval for Chinese professionals", href: "https://www.india-briefing.com/news/india-business-visa-chinese-professionals-reduced-processing-time-41400.html/" },
            { label: "Indian Visa Online", href: "https://indianvisaonline.gov.in/" },
            { label: "Bureau of Immigration India (FRRO)", href: "https://boi.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Chinese
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Sending Chinese Staff to India?"
        description="Tell us who is relocating and for how long, and we'll map the visa, security clearance, FRRO registration and PE risk."
      />
    </main>
  )
}
