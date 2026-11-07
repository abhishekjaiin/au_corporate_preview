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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/hiring-in-india"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "compare", label: "China and India side by side" },
  { id: "pay", label: "Pay structure and cost" },
  { id: "mixed", label: "Managing a mixed Indian and Chinese team" },
  { id: "compliance", label: "The payroll compliance cycle" },
  { id: "codes", label: "The labour codes" },
  { id: "eor", label: "Employer of Record as a first step" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the difference between Chinese social insurance and India's provident fund?", a: "China has mandatory social insurance and housing fund contributions. India's EPF is a retirement and pension scheme for covered employees, with ESI for health cover below a wage ceiling and gratuity on exit." },
  { q: "Do I need a written employment contract in India?", a: "Yes. Issue a written appointment letter covering role, pay structure, notice, confidentiality and termination, and check state shops and establishment rules." },
  { q: "What is gratuity?", a: "A lump sum paid on exit after a minimum period of continuous service, calculated from the last drawn basic pay and years of service." },
  { q: "When did the labour codes come into force?", a: "The four labour codes were reported to have come into force on 21 November 2025. Rules and state implementation are still developing, so confirm the current position." },
  { q: "Do Indian employees have a trade union?", a: "Trade unions exist and may be recognised in larger establishments. There is no statutory structure like a Chinese employee congress, but grievance processes and inspections apply." },
  { q: "Is an Employer of Record a long-term solution?", a: "Not usually. It suits a pilot. For a stable team a subsidiary gives control, brand and a clean legal position." },
  { q: "Should a Chinese-owned employer expect extra scrutiny?", a: "Often yes. Keep full records of wages, hours, provident fund and ESI, and written policies, because inspectors and customers look closely at foreign-owned firms." },
]

const relatedCards = [
  { title: "Chinese Employees in India: Tax Under the Treaty, Provident Fund as an International Worker and Cost Planning", desc: "What a Chinese employer must plan for staff in India: the 183-day treaty test, Section 392 salary tax, residence rules, EPF contributions for international workers, the lack of a social security agreement and secondment contracts.", href: "/china-to-india/chinese-employees-in-india" },
  { title: "Relocating Chinese Staff to India: Employment Visa, Business Visa, Clearance and Registration", desc: "What a Chinese company must plan when sending staff to India: business visa limits, employment visa rules and salary floor, security clearance, the reported 2025 visa facilitation, FRRO registration, family visas and directors.", href: "/china-to-india/relocate-chinese-staff" },
  { title: "Moving Personal Data Between China and India: PIPL Cross-Border Routes, Important Data and the DPDP Act", desc: "How China's PIPL, Data Security Law and cross-border data rules apply to a Chinese company with an Indian subsidiary, and how India's Digital Personal Data Protection Act and data restrictions affect the Indian side.", href: "/china-to-india/data-protection-pipl-dpdp" },
  { title: "Compliance Calendar: Indian Deadlines and the Chinese Filings They Feed", desc: "A month-by-month compliance calendar for an Indian subsidiary of a Chinese parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return, approval conditions and the Chinese-side reports.", href: "/china-to-india/compliance-calendar" },
]

export default function HiringInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Hiring in India as a Chinese Employer: Local Contracts, Statutory Benefits and Managing Mixed Teams"
        description="A guide for Chinese HR teams hiring in India: written contracts, provident fund, ESI, gratuity, labour codes, notice and termination, working hours, grievance rules and the practical issues of managing a mixed Indian and Chinese team."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Hiring in India for a Chinese-Owned Company: Contracts, Provident Fund, Labour Codes and Local Management" },
        ]}
      />

      <GuideHero
        eyebrow="People: hiring in India"
        title="Hiring in India as a Chinese Employer: Local Contracts, Statutory Benefits and Managing Mixed Teams"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Hiring in India works differently from China: the contract is regulated by statute and state rules,
          provident fund and ESI are mandatory for most employees, gratuity builds after service, and notice and
          termination follow the labour codes, shops and establishment laws and the contract. Chinese-owned
          employers face the same laws as any other employer, but they also face closer public and regulator
          attention, so clean records matter more. Cost for local management, written policies in English and a
          grievance process from day one.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="hiring-and-payroll" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Employer", "The Indian subsidiary (or an Employer of Record) is the legal employer"],
                ["Contract", "Written appointment letter with role, pay structure, notice and confidentiality; state shops and establishments law applies"],
                ["Provident fund", "Employer and employee contributions through the EPFO for covered establishments"],
                ["ESI", "Health insurance scheme for employees below the wage ceiling in covered areas"],
                ["Gratuity", "Lump sum after continuous service, paid on exit with a minimum service period"],
                ["Labour codes", "The four labour codes were reported in force from 21 November 2025; state rules continue to develop"],
                ["Payroll tax", "Withholding Tax on salary under Section 392 of the Income-tax Act, 2025, deposited by the 7th"],
                ["Grievance and POSH", "Internal Committee required for ten or more employees under the POSH Act"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">China and India side by side</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Chinese practice (indicative)</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian practice</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Contract", "Written labour contract; fixed term or open-ended", "Appointment letter; probation and notice per contract and state law; fixed-term employment recognised under the codes"],
                ["Social insurance", "Mandatory social insurance and housing fund contributions", "EPF for covered employees; ESI below the wage ceiling; gratuity on exit"],
                ["Working time", "Statutory hours and overtime rules", "State shops and establishment hours, overtime premium and weekly rest; 48-hour week is typical"],
                ["Dismissal", "Statutory grounds and severance rules", "Notice per contract and state law; retrenchment compensation for covered workers; limits in larger establishments"],
                ["Employee voice", "Trade union (all-China federation) and employee congress", "Trade unions and state inspectors; grievance processes in larger firms"],
                ["Bonus", "Contractual; often a year-end payment", "A statutory bonus applies to eligible employees below a wage ceiling, plus any contractual bonus"],
                ["Harassment", "Employer duties under civil and labour law", "Internal Committee under the POSH Act at ten or more employees"],
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

        <h2 id="pay" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Pay structure and cost</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Indian pay is split into basic pay, allowances, employer provident fund, gratuity accrual and benefits. The basic component drives provident fund and gratuity.</li>
          <li>The annual cost to the employer is higher than the headline salary because of contributions, gratuity, insurance and bonus.</li>
          <li>Variable pay is usually paid in cash and taxed as salary.</li>
          <li>Attrition, notice periods and market rates vary by city and sector.</li>
        </ul>

        <h2 id="mixed" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Managing a mixed Indian and Chinese team</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Language:</strong> use English for contracts, policies and formal communication. Provide translations for Chinese staff where needed, and avoid managers giving instructions in a language the Indian team cannot follow.</li>
          <li><strong>Written policies:</strong> adopt an employee handbook, code of conduct, anti-bribery and grievance policies at incorporation. Regulators and customers ask for them.</li>
          <li><strong>Local leadership:</strong> hire an Indian head of HR or country manager who knows state rules and local practice.</li>
          <li><strong>Records:</strong> keep attendance, wage registers, provident fund and ESI challans for inspection. Indian inspectors look closely at foreign-owned firms.</li>
          <li><strong>Overtime and working hours:</strong> do not carry over Chinese schedules without checking the state law and the contracts.</li>
          <li><strong>Visas for Chinese managers:</strong> see <Link href="/china-to-india/relocate-chinese-staff" className="text-blue-800 font-semibold hover:underline">relocating Chinese staff</Link>.</li>
        </ul>

        <h2 id="compliance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The payroll compliance cycle</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Monthly:</strong> deposit Withholding Tax on salary by the 7th; provident fund and ESI by the 15th; state professional tax where applicable.</li>
          <li><strong>Quarterly:</strong> TDS returns for salary.</li>
          <li><strong>Annual:</strong> employee tax statements, provident fund and ESI returns, bonus and gratuity checks, shops and establishment renewals.</li>
          <li><strong>Registration:</strong> EPFO, ESIC, professional tax and shops and establishment registrations as you cross headcount thresholds.</li>
        </ul>

        <h2 id="codes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The labour codes</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India has consolidated twenty-nine central labour laws into four codes on wages, industrial relations,
          social security and occupational safety. They were reported to come into force on 21 November 2025,
          with rules and state implementation still developing. Ask the payroll provider for a short list of
          changes each quarter, and confirm the current position before drafting contracts.
        </p>

        <h2 id="eor" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Employer of Record as a first step</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          An Employer of Record employs your people on its Indian entity and charges a fee. It suits a pilot of
          a few people. Because the EOR, not you, is the employer, you have less control, and if your staff
          start concluding contracts for the Chinese company a permanent establishment may arise. Move to a
          subsidiary, with the approval needed for Chinese investment, once headcount is stable. See{" "}
          <Link href="/china-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">structure options</Link>.
        </p>

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

        <GuideServiceBox path="/china-to-india/hiring-in-india" />
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
            { label: "EPFO India", href: "https://www.epfindia.gov.in/" },
            { label: "Ministry of Labour and Employment (India)", href: "https://labour.gov.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
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
        title="Building Your India Team?"
        description="Tell us the roles and headcount, and we'll set up payroll, PF and ESI registration and employment contracts for the subsidiary."
      />
    </main>
  )
}
