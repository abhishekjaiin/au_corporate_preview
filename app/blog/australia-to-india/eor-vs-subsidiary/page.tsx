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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/eor-vs-subsidiary"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "compare", label: "Side by side for an Australian company" },
  { id: "overlap", label: "Working hours and the time difference" },
  { id: "risk", label: "Permanent establishment and the 183-day test" },
  { id: "tipping", label: "The tipping point" },
  { id: "move", label: "Moving staff into your own entity" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is an EOR a good way for an Australian company to start in India?", a: "Yes for a small first team; it allows hiring within days without an entity." },
  { q: "Does Fair Work apply to staff employed through an Indian EOR?", a: "No. Indian labour law applies." },
  { q: "Can EOR staff create a PE for the Australian company?", a: "Possibly, for example if services are furnished in India for more than 183 days in a 12-month period." },
  { q: "When does a subsidiary become cheaper?", a: "Usually once the team passes about 10 to 15 people." },
  { q: "Do Indian staff need to work night shifts for Australia?", a: "Generally not; standard Indian hours overlap with the Australian afternoon." },
  { q: "Who owns IP created by EOR staff?", a: "It depends on the EOR contract, so assign IP to the right group company in writing." },
  { q: "How long does a subsidiary take to set up?", a: "About 4 to 6 weeks from receipt of apostilled documents." },
  { q: "Can staff move from the EOR to the subsidiary?", a: "Yes, through new contracts and an agreed treatment of benefits." },
]

const relatedCards = [
  { title: "Subsidiary, Branch or Liaison Office", desc: "Choosing the entity.", href: "/australia-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" },
  { title: "Hiring and Payroll from Australia", desc: "Payroll in your own entity.", href: "/australia-to-india/hiring-and-payroll" },
  { title: "Tax Treaty and PE Risk", desc: "The 183-day service PE.", href: "/australia-to-india/dtaa-pe-risk" },
  { title: "Incorporation Process from Australia", desc: "Setting up the subsidiary.", href: "/australia-to-india/incorporation-process" },
]

export default function EorVsSubsidiaryPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Employer of Record vs. Subsidiary in India: When to Use Each"
        description="Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for Australian companies."
        datePublished="2026-10-15"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "EOR vs Subsidiary in India: Which Is Right for an Australian Company?" },
        ]}
      />

      <GuideHero
        eyebrow="Launch: EOR or entity"
        title="Employer of Record vs. Subsidiary in India: When to Use Each"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Australian companies often start in India with an employer of record because it lets them hire within days, and India&apos;s working day overlaps well with Australian afternoons. The EOR employs the staff under Indian law for a monthly fee. A subsidiary becomes the better choice once the team passes about a dozen people, the work is core, or the team must contract or invoice in India, and it removes the permanent establishment risk an EOR team can create.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="eor-vs-subsidiary" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["EOR", "Indian employer of record hires the staff; the Australian company directs the work and pays a fee"],
                ["Fair Work", "Does not apply; Indian labour codes and state rules apply in both models"],
                ["Time overlap", "Indian standard hours cover most of the Australian afternoon"],
                ["PE test to watch", "Services in India for more than 183 days in any 12 months under the treaty"],
                ["Subsidiary timeline", "About 4 to 6 weeks from receipt of apostilled documents"],
                ["Secondees", "An ATO certificate of coverage keeps Australians in superannuation"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Side by side for an Australian company</h2>
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
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">First hire</th>
                <td className="border border-gray-300 p-3">Within days</td>
                <td className="border border-gray-300 p-3">After incorporation and registrations</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Monthly cost at small scale</th>
                <td className="border border-gray-300 p-3">Usually lower</td>
                <td className="border border-gray-300 p-3">Fixed compliance costs dominate</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Monthly cost at 15 or more staff</th>
                <td className="border border-gray-300 p-3">Fees add up</td>
                <td className="border border-gray-300 p-3">Usually lower per person</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Contracts and invoices in India</th>
                <td className="border border-gray-300 p-3">Not possible</td>
                <td className="border border-gray-300 p-3">Yes</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">IP created by staff</th>
                <td className="border border-gray-300 p-3">Depends on the EOR contract</td>
                <td className="border border-gray-300 p-3">Owned by the subsidiary, assignable to the group</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Seconding Australian managers</th>
                <td className="border border-gray-300 p-3">Awkward</td>
                <td className="border border-gray-300 p-3">Straightforward</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="overlap" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Working hours and the time difference</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India is 4.5 to 5.5 hours behind the Australian east coast. A team working standard Indian hours starting at 9:30 am is online from about 2 pm to 3 pm Sydney time, which covers the Australian afternoon without night shifts or shift allowances in most roles.
        </p>
        <h2 id="risk" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Permanent establishment and the 183-day test</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Under the India-Australia treaty, services furnished in India through employees or other personnel for more than 183 days in any 12-month period can create a permanent establishment of the Australian company. EOR staff who work for an Australian company over a long period, especially in core roles, can raise this question. A subsidiary that employs the staff and is paid at arm&apos;s length for its services avoids it.
        </p>
        <h2 id="tipping" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The tipping point</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The team is heading past 10 to 15 people.</li>
          <li>The Indian staff will sell to or support Indian customers.</li>
          <li>Australian managers will be seconded to run the team.</li>
          <li>The group wants to own the IP and the team as a long-term asset.</li>
        </ul>
        <h2 id="move" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Moving staff into your own entity</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Incorporate the subsidiary and complete registrations.</li>
          <li>Agree the transfer date with the EOR and the staff.</li>
          <li>Issue new contracts, recognising prior service where agreed.</li>
          <li>Settle or transfer gratuity and leave balances.</li>
          <li>Move payroll, provident fund and ESI to the subsidiary.</li>
        </ol>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We compare EOR and entity costs for your hiring plan, set up the subsidiary and move staff and payroll across when you are ready.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and <Link href="/payroll-expat-services" className="text-blue-800 font-semibold hover:underline">payroll and expat services</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/eor-vs-subsidiary" />
        <GuideCTA
          title="Hiring in India from Australia?"
          description="Tell us the roles and timeline, and we will compare an EOR with your own entity."
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
            { label: "Ministry of Labour and Employment", href: "https://labour.gov.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Australian Taxation Office", href: "https://www.ato.gov.au" },
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
        title="EOR or Subsidiary — Which Fits Your Plan?"
        description="Tell us your headcount and timeline in India — we'll compare the cost, control and compliance trade-offs for your case."
      />
    </main>
  )
}
