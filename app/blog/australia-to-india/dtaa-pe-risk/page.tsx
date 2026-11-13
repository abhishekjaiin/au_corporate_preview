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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/dtaa-pe-risk"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "rates", label: "What the treaty caps" },
  { id: "pe-ways", label: "Ways an Australian company can have a PE in India" },
  { id: "days", label: "Tracking the 183 days" },
  { id: "claim", label: "Claiming the treaty" },
  { id: "structure", label: "Structuring to stay clear" },
  { id: "pe-types", label: "The four permanent establishment triggers in practice" },
  { id: "secondment", label: "Secondments without a permanent establishment" },
  { id: "pe-checklist", label: "An annual permanent establishment review" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the service PE test in the India-Australia treaty?", a: "Services furnished in India by personnel for more than 183 days in any 12-month period." },
  { q: "What rate applies to dividends paid to Australia?", a: "Up to 15% under the treaty." },
  { q: "Are technical service fees taxed in India?", a: "Many are treated as royalties under the treaty and taxed at up to 15%." },
  { q: "What is the rate for equipment royalties?", a: "10% under the treaty." },
  { q: "Which document proves Australian residence?", a: "An ATO certificate of residency, with Form 41." },
  { q: "Does the 183-day count follow the financial year?", a: "No. It is counted over any 12-month period." },
  { q: "Can a dependent agent create a PE?", a: "Yes, if a person in India habitually concludes contracts for the Australian company." },
  { q: "How are treaty disputes resolved?", a: "Through the Mutual Agreement Procedure under Article 25." },
  { q: "What creates a permanent establishment for an Australian company in India?", a: "A fixed place used for its business, services by its staff in India for more than 183 days in any 12 months, a dependent agent concluding contracts, or a long construction or installation project." },
  { q: "How can an Australian company show it has no permanent establishment in India?", a: "Keep day counts, contracts signed outside India, secondment agreements and an annual review memo." },
  { q: "Does a permanent establishment change the Indian company's own tax?", a: "No. The Indian company is taxed on its own profits regardless; a permanent establishment adds a separate Indian tax liability for the Australian company itself." },
]

const relatedCards = [
  { title: "India-Australia DTAA", desc: "The treaty article by article.", href: "/australia-to-india/india-australia-dtaa" },
  { title: "Repatriating Profits to Australia", desc: "Treaty rates in practice.", href: "/australia-to-india/repatriating-profits" },
  { title: "Sending Australian Staff to India", desc: "Secondments and tax.", href: "/australia-to-india/expat-visa" },
  { title: "Transfer Pricing", desc: "Paying the subsidiary at arm's length.", href: "/australia-to-india/transfer-pricing" },
]

export default function DtaaPeRiskPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="The India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk for Australian Companies"
        description="How the India-Australia tax treaty (DTAA) applies to payments to your Australian parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk."
        datePublished="2026-10-15"
        dateModified="2026-11-13"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: treaty and PE"
        title="The India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk for Australian Companies"
        updated="13 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The India-Australia treaty limits Indian tax on payments to an Australian company, at up to 15% on dividends, interest and royalties (10% for equipment royalties), and treats many technical service fees as royalties. It also decides when an Australian company becomes taxable in India through a permanent establishment, most often through services furnished in India by its personnel for more than 183 days in any 12-month period, or through a fixed place or dependent agent.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="dtaa-pe-risk" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Dividends, interest and royalties", "Indian tax capped at 15%; 10% for equipment royalties"],
                ["Technical service fees", "Many are treated as royalties under the treaty"],
                ["Service PE", "Services in India by personnel for more than 183 days in any 12-month period"],
                ["Other PE routes", "Fixed place of business; dependent agent concluding contracts; construction projects"],
                ["Treaty documents", "ATO certificate of residency and Form 41"],
                ["Disputes", "Mutual Agreement Procedure under Article 25"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="rates" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the treaty caps</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Payment from India</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treaty cap</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Australian side</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividends</th>
                <td className="border border-gray-300 p-3">15%</td>
                <td className="border border-gray-300 p-3">Generally non-assessable non-exempt for a 10% voting interest</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Interest</th>
                <td className="border border-gray-300 p-3">15%</td>
                <td className="border border-gray-300 p-3">Assessable, with a foreign income tax offset</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Royalties, including many technical fees</th>
                <td className="border border-gray-300 p-3">15%</td>
                <td className="border border-gray-300 p-3">Assessable, with an offset</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Equipment royalties</th>
                <td className="border border-gray-300 p-3">10%</td>
                <td className="border border-gray-300 p-3">Assessable, with an offset</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="pe-ways" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Ways an Australian company can have a PE in India</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Service PE:</strong> employees or other personnel furnishing services in India for more than 183 days in any 12-month period.</li>
          <li><strong>Fixed place:</strong> an office, site or project premises at the Australian company&apos;s disposal.</li>
          <li><strong>Dependent agent:</strong> someone in India who habitually concludes contracts for the Australian company.</li>
          <li><strong>Construction or installation:</strong> projects that run past the treaty&apos;s time limit, common for mining services and engineering groups.</li>
        </ul>
        <h2 id="days" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tracking the 183 days</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Count days of Australian personnel in India serving Indian customers across any rolling 12-month window, not the Indian or Australian financial year. Short visits by different people add up when they relate to the same or connected projects. A simple travel log kept by the Indian subsidiary, with the purpose of each visit, is the best defence.
        </p>
        <h2 id="claim" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Claiming the treaty</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Obtain an ATO certificate of residency covering the payment period.</li>
          <li>File or give Form 41 to the Indian payer.</li>
          <li>Provide beneficial ownership and no-PE declarations where asked.</li>
          <li>Keep the contract that shows what the payment is for.</li>
        </ol>
        <h2 id="structure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Structuring to stay clear</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Let the Indian subsidiary employ the local team, sign Indian contracts and charge the Australian parent at arm&apos;s length for services. Australian staff who visit should support the subsidiary rather than serve Indian customers directly for long periods, and any secondee should work under the subsidiary&apos;s control and cost.
        </p>
        <h2 id="pe-types" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The four permanent establishment triggers in practice</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Trigger</th><th scope="col" className="border border-gray-300 p-3 text-left">Example for an Australian company</th><th scope="col" className="border border-gray-300 p-3 text-left">How to manage it</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Fixed place</th><td className="border border-gray-300 p-3">Australian staff use desks in the Indian office for the parent&apos;s own business</td><td className="border border-gray-300 p-3">Keep the parent&apos;s work out of Indian premises, or charge for it at arm&apos;s length</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Service permanent establishment</th><td className="border border-gray-300 p-3">Australian engineers deliver services in India for more than 183 days in any 12 months</td><td className="border border-gray-300 p-3">Track days per person across the group; second staff to the Indian company</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dependent agent</th><td className="border border-gray-300 p-3">An Indian employee habitually concludes or negotiates contracts for the parent</td><td className="border border-gray-300 p-3">Keep contracting authority with the Australian company outside India</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Construction or installation</th><td className="border border-gray-300 p-3">A project site in India lasting beyond the treaty period</td><td className="border border-gray-300 p-3">Plan the project timeline and register for Indian tax if needed</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Once a permanent establishment exists, the Australian company must file an Indian tax return and pay Indian tax on the profits attributable to it, at the foreign company rate. Australia then usually gives relief, but the compliance burden and the higher rate make it worth avoiding.
        </p>

        <h2 id="secondment" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Secondments without a permanent establishment</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A secondment is the usual way to send Australian staff to work in India without creating a permanent establishment for the parent. The key is that the Indian company directs the work and bears the cost:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>A written secondment agreement placing the employee under the Indian company&apos;s control.</li>
          <li>Salary costs recharged to the Indian company at cost, or paid by it directly.</li>
          <li>Indian payroll tax withheld on the salary for work done in India.</li>
          <li>An ATO certificate of coverage so the employee stays in superannuation and out of Indian provident fund.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          See <Link href="/australia-to-india/foreign-employee-treaty-ssa" className="text-blue-800 font-semibold hover:underline">how Australian employees in India are taxed</Link>.
        </p>
        <h2 id="pe-checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">An annual permanent establishment review</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>List every Australian employee who spent time in India and add up days per project.</li>
          <li>Check who signed customer contracts and from where.</li>
          <li>Confirm that the Indian company invoices for its own work and that the parent&apos;s role is documented.</li>
          <li>Review secondment agreements and recharges.</li>
          <li>Record the outcome in a short memo for the auditors and the ATO file.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Doing this every year takes a few hours and is the best defence if the Indian tax department later alleges a permanent establishment.
        </p>



        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We review the PE position of your Australian staff and projects, set up treaty documentation for payments to Australia and support MAP cases.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link> and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/dtaa-pe-risk" />
        <GuideCTA
          title="Sending Australian staff to Indian projects?"
          description="Tell us the plan, and we will check the PE position."
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
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Australian Taxation Office", href: "https://www.ato.gov.au" },
            { label: "Department of Foreign Affairs and Trade: tax treaties", href: "https://www.dfat.gov.au" },
          ]}
        />

        <p className="mt-6">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Worried About Permanent Establishment Risk?"
        description="Tell us how your Australian team engages with India — we'll assess your PE exposure under the India-Australia DTAA."
      />
    </main>
  )
}
