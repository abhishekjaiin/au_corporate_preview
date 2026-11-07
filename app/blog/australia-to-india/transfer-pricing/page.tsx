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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/transfer-pricing"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "flows", label: "Australia-India flows and methods" },
  { id: "indian-file", label: "The Indian documentation" },
  { id: "ato-side", label: "The ATO side" },
  { id: "years", label: "True-ups across 31 March and 30 June" },
  { id: "certainty", label: "Safe harbour, APAs and MAP" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Which Australian rules apply to transfer pricing?", a: "Division 815 of the Income Tax Assessment Act 1997." },
  { q: "What is the Indian transfer pricing report?", a: "Form 48, previously Form 3CEB, certified by a Chartered Accountant." },
  { q: "When is Indian documentation required?", a: "When international transactions exceed ₹1 crore in the year." },
  { q: "How are Indian service centres for Australian groups priced?", a: "Usually at cost plus a mark-up." },
  { q: "When should a year-end true-up be booked?", a: "Before the Indian books close on 31 March." },
  { q: "What is a significant global entity?", a: "A group with global income of A$1 billion or more, which has extra ATO obligations." },
  { q: "Can India and Australia agree a method in advance?", a: "Yes, through a bilateral Advance Pricing Agreement." },
  { q: "What happens if both countries tax the same profit?", a: "The taxpayer can request the Mutual Agreement Procedure under Article 25 of the treaty." },
]

const relatedCards = [
  { title: "Tax Notices and Disputes", desc: "Responding to transfer pricing references.", href: "/australia-to-india/tax-notices-and-litigation" },
  { title: "Tax Treaty and PE Risk", desc: "Treaty rules on fees and royalties.", href: "/australia-to-india/dtaa-pe-risk" },
  { title: "Repatriating Profits to Australia", desc: "Fees and royalties in practice.", href: "/australia-to-india/repatriating-profits" },
  { title: "Compliance Calendar", desc: "Report and return dates.", href: "/australia-to-india/compliance-calendar" },
]

export default function TransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Transfer Pricing in India: A Guide for Australian Parents and Their Indian Subsidiaries"
        description="How transfer pricing works for an Indian subsidiary of an Australian company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits."
        datePublished="2026-10-15"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "Transfer Pricing in India for Australian-Owned Subsidiaries" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: transfer pricing"
        title="Transfer Pricing in India: A Guide for Australian Parents and Their Indian Subsidiaries"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Transactions between the Indian subsidiary and its Australian parent are tested on both sides: by India under its arm&apos;s length rules and by the ATO under Division 815 of the Income Tax Assessment Act 1997. Use the same method and margin in both files. Because India closes on 31 March and Australia on 30 June, year-end true-ups have to be planned across two reporting years.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="transfer-pricing" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Indian law", "Sections 161 to 172 of the Income-tax Act, 2025 (previously Sections 92 to 92F)"],
                ["Indian report", "Form 48 (previously Form 3CEB) by the tax return due date"],
                ["Australian law", "Division 815 of the Income Tax Assessment Act 1997"],
                ["Documentation threshold in India", "International transactions above ₹1 crore in the year"],
                ["Significant global entities", "Global income of A$1 billion or more: extra ATO obligations including country-by-country reporting"],
                ["Year ends", "India 31 March; Australia 30 June"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="flows" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Australia-India flows and methods</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Flow</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Usual method</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Points for both files</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Development or support centre services to Australia</th>
                <td className="border border-gray-300 p-3">Cost plus mark-up</td>
                <td className="border border-gray-300 p-3">Same cost base and mark-up in both files</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Distribution of Australian products in India</th>
                <td className="border border-gray-300 p-3">Transactional net margin on the distributor</td>
                <td className="border border-gray-300 p-3">Customs value consistent with the transfer price</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Royalty for Australian IP or brand</th>
                <td className="border border-gray-300 p-3">Comparable royalty rates</td>
                <td className="border border-gray-300 p-3">Treaty rate of up to 15% and benefit evidence</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Management or head office charges</th>
                <td className="border border-gray-300 p-3">Cost-based with benefit test</td>
                <td className="border border-gray-300 p-3">Evidence the Indian company received the service</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Parent loan</th>
                <td className="border border-gray-300 p-3">Market interest rate</td>
                <td className="border border-gray-300 p-3">Indian 30% of EBITDA cap and Australian thin capitalisation</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="indian-file" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Indian documentation</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Annual documentation once international transactions exceed ₹1 crore.</li>
          <li>Accountant&apos;s report in Form 48 by the due date of the return.</li>
          <li>Master file where group thresholds are met, and support for the parent&apos;s country-by-country report.</li>
          <li>Benchmarking refreshed each year.</li>
        </ul>
        <h2 id="ato-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The ATO side</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The parent documents the same dealings under Division 815 and reports them in the International Dealings Schedule. Significant global entities have further obligations, including country-by-country reporting. When the Indian file shows a 15% mark-up and the Australian file a lower one, one tax authority will usually challenge it, so agree the numbers once.
        </p>
        <h2 id="years" className="text-2xl font-bold text-gray-900 mt-12 mb-4">True-ups across 31 March and 30 June</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A true-up to bring the Indian margin into range should be booked before the Indian books close on 31 March. For the Australian parent, that falls in the third quarter of its year, so the adjustment is visible before the 30 June close. Leaving it to June means the Indian year has already closed, complicating GST, Withholding Tax and the Indian return.
        </p>
        <h2 id="certainty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Safe harbour, APAs and MAP</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India&apos;s safe harbour rules give fixed margins for some services. For larger flows, an Advance Pricing Agreement, unilateral with India or bilateral with India and the ATO, fixes the method for future years. Disputes that still lead to double tax can go to the Mutual Agreement Procedure under Article 25 of the treaty.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We prepare the Indian transfer pricing study and Form 48, align them with your Division 815 documentation and plan year-end true-ups.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link> and <Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">accounting, reporting and audit support</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/transfer-pricing" />
        <GuideCTA
          title="Setting transfer prices with your Australian parent?"
          description="Tell us the flows, and we will propose the method and margins."
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
            { label: "Australian Taxation Office: transfer pricing", href: "https://www.ato.gov.au" },
            { label: "Central Board of Direct Taxes", href: "https://incometaxindia.gov.in" },
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
        title="Need a Transfer Pricing Study for India?"
        description="Tell us your intercompany transactions with the Australian parent — we'll map your transfer pricing documentation and filing obligations."
      />
    </main>
  )
}
