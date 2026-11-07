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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/eor-vs-subsidiary"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "side-by-side", label: "EOR and subsidiary side by side" },
  { id: "eor-fit", label: "When an EOR fits a Japanese company" },
  { id: "subsidiary-fit", label: "When to form the subsidiary" },
  { id: "pe", label: "The permanent establishment question" },
  { id: "switch", label: "Moving staff from the EOR to the subsidiary" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is an employer of record in India?", a: "An Indian company that legally employs staff on behalf of a foreign business, which directs the work and pays a service fee." },
  { q: "Is an EOR cheaper than a subsidiary for a Japanese company?", a: "For a few employees, usually yes. As the team grows, the per-employee fees usually make a subsidiary cheaper." },
  { q: "Can an EOR create tax risk for the Japanese company?", a: "Yes. If the staff work as the Japanese company's fixed place of business or dependent agent, it may have a permanent establishment in India." },
  { q: "Can chuzaiin be employed through an EOR?", a: "It is not a good fit. Posted managers are normally employed or seconded through the group's own subsidiary, which can sponsor visas." },
  { q: "Do Indian labour laws apply to EOR staff?", a: "Yes. The staff are Indian employees, with Indian contracts, provident fund, ESI and gratuity." },
  { q: "How long does it take to form a subsidiary instead?", a: "About 4 to 6 weeks from receiving the apostilled Japanese documents." },
  { q: "Can staff move from the EOR to the subsidiary later?", a: "Yes, through new contracts with the subsidiary and an agreed settlement or transfer of benefits." },
  { q: "Who owns IP created by EOR staff?", a: "It depends on the EOR contract, so the agreement should assign IP to the Japanese company or the group entity that needs it." },
]

const relatedCards = [
  { title: "Subsidiary, Branch or Liaison Office", desc: "Choosing the entity for a Japanese company.", href: "/japan-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" },
  { title: "Hiring and Payroll from Japan", desc: "Running payroll in your own entity.", href: "/japan-to-india/hiring-and-payroll" },
  { title: "Tax Treaty and PE Risk", desc: "When the Japanese company becomes taxable in India.", href: "/japan-to-india/dtaa-pe-risk" },
  { title: "Incorporation Process from Japan", desc: "Setting up the subsidiary.", href: "/japan-to-india/incorporation-process" },
]

export default function EorVsSubsidiaryPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Employer of Record vs. Subsidiary in India: When to Use Each"
        description="Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for Japanese companies."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "EOR vs Subsidiary in India: Right for a Japanese Company?" },
        ]}
      />

      <GuideHero
        eyebrow="Launch: EOR or entity"
        title="Employer of Record vs. Subsidiary in India: When to Use Each"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An employer of record lets a Japanese company hire a small team in India quickly without its own entity: the EOR employs the staff and the Japanese company pays a monthly fee. It suits pilots and the first few hires. Once the team grows, the work becomes core, or chuzaiin are posted to manage it, a subsidiary is usually cheaper, gives the group direct control and avoids permanent establishment questions.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="eor-vs-subsidiary" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["EOR model", "A third-party Indian employer hires the staff; the Japanese company directs the work and pays a fee"],
                ["Speed", "Hiring through an EOR can start within days"],
                ["Typical fee", "A monthly fee per employee on top of salary and statutory costs"],
                ["Subsidiary setup", "About 4 to 6 weeks from receipt of apostilled documents"],
                ["Employment law", "Indian contracts, labour codes and state rules apply in both models"],
                ["Main risk with an EOR", "Permanent establishment for the Japanese company if staff conclude contracts or the activity is core"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="side-by-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">EOR and subsidiary side by side</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left"></th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Employer of record</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Own subsidiary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Time to first hire</th>
                <td className="border border-gray-300 p-3">Days</td>
                <td className="border border-gray-300 p-3">Weeks, after incorporation and registrations</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Cost at 1 to 5 staff</th>
                <td className="border border-gray-300 p-3">Usually lower overall</td>
                <td className="border border-gray-300 p-3">Fixed compliance cost is high per head</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Cost at 15 staff or more</th>
                <td className="border border-gray-300 p-3">Fees add up</td>
                <td className="border border-gray-300 p-3">Usually lower per head</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Control of the team</th>
                <td className="border border-gray-300 p-3">Indirect, through the EOR</td>
                <td className="border border-gray-300 p-3">Direct</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Can sign contracts and invoice in India</th>
                <td className="border border-gray-300 p-3">No</td>
                <td className="border border-gray-300 p-3">Yes</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Chuzaiin posting</th>
                <td className="border border-gray-300 p-3">Not suitable</td>
                <td className="border border-gray-300 p-3">Natural vehicle, with visa sponsorship</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="eor-fit" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When an EOR fits a Japanese company</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Testing India with a small engineering or sales support team before a full ringi for an entity.</li>
          <li>Hiring one or two people while the subsidiary is being incorporated.</li>
          <li>Short projects where the activity is preparatory or auxiliary to the Japanese business.</li>
        </ul>
        <h2 id="subsidiary-fit" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When to form the subsidiary</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The team will grow beyond a handful of people.</li>
          <li>The Indian staff will serve Indian customers, sign contracts or invoice locally.</li>
          <li>The group wants to post chuzaiin to India.</li>
          <li>The work is core to the group, such as product development, and the IP should sit in a group company.</li>
        </ul>
        <h2 id="pe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The permanent establishment question</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Under the India-Japan treaty, a Japanese company can have a permanent establishment in India through a fixed place of business or a dependent agent. If staff hired through an EOR work from a dedicated office, negotiate deals or carry out the core business of the Japanese company, the Indian tax authority may argue the Japanese company itself is taxable in India. Keeping the EOR team&apos;s role preparatory and moving to a subsidiary as the role grows reduces this risk.
        </p>
        <h2 id="switch" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Moving staff from the EOR to the subsidiary</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Incorporate the subsidiary and complete its registrations.</li>
          <li>Agree the transfer date with the EOR and the employees.</li>
          <li>Issue new employment contracts from the subsidiary, recognising past service where agreed.</li>
          <li>Settle or transfer gratuity and leave balances as agreed with the EOR.</li>
          <li>Move payroll, provident fund and ESI registrations to the subsidiary.</li>
        </ol>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We compare the cost of an EOR and a subsidiary for your hiring plan, set up the subsidiary when the time comes, and handle the transfer of staff and payroll.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and <Link href="/payroll-expat-services" className="text-blue-800 font-semibold hover:underline">payroll and expat services</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/eor-vs-subsidiary" />
        <GuideCTA
          title="Hiring your first people in India?"
          description="Tell us the roles and timeline, and we will compare an EOR with your own entity."
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
            { label: "Ministry of Labour and Employment", href: "https://labour.gov.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
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
        title="EOR or a Subsidiary for Your First Hires?"
        description="Tell us your planned headcount and timeline in India, and we'll compare cost, control and compliance for a Japanese parent."
      />
    </main>
  )
}
