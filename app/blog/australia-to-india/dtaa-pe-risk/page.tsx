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
        dateModified="2026-11-02"
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
        updated="2 November 2026"
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
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
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
