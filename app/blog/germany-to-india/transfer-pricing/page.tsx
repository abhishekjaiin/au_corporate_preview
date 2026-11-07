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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/transfer-pricing"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "flows", label: "German-Indian flows" },
  { id: "function", label: "Function transfers from Germany" },
  { id: "india", label: "What India requires" },
  { id: "years", label: "31 December and 31 March" },
  { id: "certainty", label: "APAs and MAP" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is a function transfer?", a: "A German rule under which moving a function and its profit potential abroad can trigger an exit charge in Germany." },
  { q: "How is an Indian service centre for a German group priced?", a: "Usually at cost plus a mark-up." },
  { q: "What is Form 48?", a: "The accountant's report on international transactions, previously Form 3CEB." },
  { q: "When is documentation needed in India?", a: "When international transactions exceed ₹1 crore." },
  { q: "When should true-ups be booked?", a: "Before the Indian year ends on 31 March." },
  { q: "What royalty rate applies to Germany?", a: "10% under the treaty." },
  { q: "Can India and Germany agree methods in advance?", a: "Yes, through a bilateral Advance Pricing Agreement." },
  { q: "How is double tax resolved?", a: "Through the Mutual Agreement Procedure under the treaty." },
]

const relatedCards = [
  { title: "German Parent Obligations", desc: "German-side tax and reporting.", href: "/germany-to-india/german-parent-obligations" },
  { title: "India-Germany DTAA", desc: "Treaty rates.", href: "/germany-to-india/india-germany-dtaa" },
  { title: "Repatriating Profits", desc: "Fees and royalties.", href: "/germany-to-india/repatriating-profits" },
  { title: "Compliance Calendar", desc: "Report dates.", href: "/germany-to-india/compliance-calendar" },
]

export default function TransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Transfer Pricing Between a German Parent and an Indian Subsidiary: What India Requires and Where Germany Differs"
        description="How transfer pricing works between Germany and India: Indian arm's length rules and Form 48, German documentation duties, the function transfer rules, APAs and the mutual agreement route."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "Transfer Pricing Between Germany and India: Form 48, Documentation and Function Transfers" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: transfer pricing"
        title="Transfer Pricing Between a German Parent and an Indian Subsidiary: What India Requires and Where Germany Differs"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          India requires arm&apos;s length pricing and Form 48 for dealings between the Indian subsidiary and its German parent. Germany adds a rule many groups underestimate: moving a function with its profit potential from Germany to India can be a function transfer (Funktionsverlagerung) that triggers an exit charge in Germany. Because German parents usually close on 31 December and India on 31 March, year-end adjustments need a bridge.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="transfer-pricing" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Indian law", "Sections 161 to 172 of the Income-tax Act, 2025"],
                ["Indian report", "Form 48 (previously Form 3CEB)"],
                ["German rule", "Function transfer (Funktionsverlagerung) can trigger an exit charge"],
                ["Year ends", "Germany usually 31 December; India 31 March"],
                ["Treaty", "Mutual Agreement Procedure under the India-Germany treaty"],
                ["Documentation threshold", "International transactions above ₹1 crore"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="flows" className="text-2xl font-bold text-gray-900 mt-12 mb-4">German-Indian flows</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Flow</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Method</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Germany-specific point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Engineering and R&amp;D services to Germany</th>
                <td className="border border-gray-300 p-3">Cost plus mark-up</td>
                <td className="border border-gray-300 p-3">Is a function or its profit potential moving?</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Shared service centre</th>
                <td className="border border-gray-300 p-3">Cost plus</td>
                <td className="border border-gray-300 p-3">Allocation keys aligned with the German file</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Distribution of German machinery</th>
                <td className="border border-gray-300 p-3">Transactional net margin</td>
                <td className="border border-gray-300 p-3">Customs value consistency</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Licence of German technology</th>
                <td className="border border-gray-300 p-3">Royalty benchmark</td>
                <td className="border border-gray-300 p-3">10% treaty rate</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Group financing</th>
                <td className="border border-gray-300 p-3">Market interest</td>
                <td className="border border-gray-300 p-3">German interest barrier on the parent side</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="function" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Function transfers from Germany</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          When a German group moves an activity, such as an engineering line or a back-office process, to India, German law asks whether a function has been transferred with its profit potential. If so, Germany may tax a hypothetical exit price. Document whether the Indian entity is a routine service provider on cost plus, which usually limits the exposure, and agree the analysis with the German tax team before the move.
        </p>
        <h2 id="india" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What India requires</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Annual documentation once international transactions exceed ₹1 crore.</li>
          <li>Form 48 certified by a Chartered Accountant by the return due date.</li>
          <li>Master file where group thresholds are met.</li>
          <li>Annual refresh of benchmarking.</li>
        </ul>
        <h2 id="years" className="text-2xl font-bold text-gray-900 mt-12 mb-4">31 December and 31 March</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Book true-ups before the Indian year closes on 31 March, which falls in the first quarter of the German year. That keeps GST, Withholding Tax and customs consistent and lets the German side reflect the adjustment in its own year.
        </p>
        <h2 id="certainty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">APAs and MAP</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India&apos;s Advance Pricing Agreement programme, unilateral or bilateral with Germany, fixes methods for future years. Double tax after an adjustment can go to the Mutual Agreement Procedure under the India-Germany treaty.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We prepare the Indian transfer pricing study and Form 48, align it with the German documentation and support function-transfer analysis with your German advisers.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link> and <Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">accounting, reporting and audit support</Link>.
        </p>

        <GuideServiceBox path="/germany-to-india/transfer-pricing" />
        <GuideCTA
          title="Moving work from Germany to India?"
          description="Tell us the activity, and we will set up the transfer pricing on both sides."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/germany-to-india/faq"
          seeAllLabel="See all German FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for German parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Federal Central Tax Office, Germany", href: "https://www.bzst.de/EN" },
            { label: "Central Board of Direct Taxes", href: "https://incometaxindia.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Transfer Pricing Between Germany and India?"
        description="Tell us the intercompany transactions, and we'll map the Indian documentation, Form 48 and how it lines up with your German file."
      />
    </main>
  )
}
