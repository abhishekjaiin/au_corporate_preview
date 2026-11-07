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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/compliance-calendar"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "approval-conditions", label: "Press Note 3 approval conditions" },
  { id: "cycle", label: "The Indian filing cycle" },
  { id: "chinese-year", label: "Feeding the Chinese year" },
  { id: "reviews", label: "Being ready for reviews" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Which year does the Indian subsidiary use?", a: "1 April to 31 March." },
  { q: "Do Press Note 3 approvals carry conditions?", a: "Often, such as reporting or limits on later shareholding changes." },
  { q: "How does the Chinese parent get calendar-year figures?", a: "From Indian management accounts to 31 December." },
  { q: "When is the FLA return due?", a: "By 15 July." },
  { q: "When is the AGM due?", a: "By 30 September." },
  { q: "When is FC-GPR filed?", a: "Within 30 days of allotment." },
  { q: "Why keep records especially complete?", a: "Because Chinese-owned companies can face closer reviews." },
  { q: "When is the tax return due?", a: "By 31 October, or 30 November with transfer pricing." },
]

const relatedCards = [
  { title: "Press Note 3 and Chinese Investors", desc: "The approval and its conditions.", href: "/china-to-india/india-press-note-3-and-chinese-investors" },
  { title: "Chinese Parent Obligations", desc: "ODI and SAFE reporting.", href: "/china-to-india/chinese-parent-obligations" },
  { title: "Transfer Pricing", desc: "Aligning the files.", href: "/china-to-india/transfer-pricing" },
  { title: "Funding and FEMA", desc: "Event-based filings.", href: "/china-to-india/funding-and-fema" },
]

export default function ComplianceCalendarPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Compliance Calendar: Indian Deadlines and the Chinese Filings They Feed"
        description="A month-by-month compliance calendar for an Indian subsidiary of a Chinese parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return, approval conditions and the Chinese-side reports."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Compliance Calendar for an Indian Subsidiary of a Chinese Company" },
        ]}
      />

      <GuideHero
        eyebrow="Calendar: compliance"
        title="Compliance Calendar: Indian Deadlines and the Chinese Filings They Feed"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Chinese-owned Indian subsidiary runs on India&apos;s 1 April to 31 March year, while most Chinese parents close on 31 December. On top of the usual Indian monthly, quarterly and annual filings, it must track the conditions attached to its Press Note 3 approval, which often include reporting and restrictions on changes in shareholding, and keep evidence ready for the closer review Chinese-owned companies face.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="compliance-calendar" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Indian year", "1 April to 31 March"],
                ["Chinese parent", "Usually 31 December"],
                ["Approval conditions", "As stated in the Press Note 3 approval letter; track them alongside statutory dates"],
                ["Monthly", "TDS by the 7th; GST on the 11th and 20th; PF and ESI by the 15th"],
                ["Annual", "AGM by 30 September; FLA by 15 July; tax return by 31 October or 30 November"],
                ["Chinese side", "ODI and SAFE-related reporting through the parent's bank"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="approval-conditions" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Press Note 3 approval conditions</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Government approval for a Chinese-linked investment can carry conditions, for example on later changes in shareholding, reporting, or the activities the company may carry on. List each condition with an owner and a review date, because a breach can affect future approvals and the company&apos;s standing with regulators and banks.
        </p>
        <h2 id="cycle" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Indian filing cycle</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Frequency</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Filings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Monthly</th>
                <td className="border border-gray-300 p-3">TDS by the 7th, GSTR-1 by the 11th, GSTR-3B by the 20th, provident fund and ESI by the 15th</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Quarterly</th>
                <td className="border border-gray-300 p-3">Advance tax and TDS returns</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Annual</th>
                <td className="border border-gray-300 p-3">Audit, AGM by 30 September, AOC-4 and MGT-7, FLA by 15 July, tax return and Form 48</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Event-based</th>
                <td className="border border-gray-300 p-3">FC-GPR within 30 days of allotment; FC-TRS within 60 days of transfers</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="chinese-year" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Feeding the Chinese year</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Calendar-year figures for the parent&apos;s consolidation, from Indian management accounts.</li>
          <li>Information for the parent&apos;s outbound investment and foreign exchange reporting.</li>
          <li>Transfer pricing data consistent with the Chinese side of the same transactions.</li>
        </ul>
        <h2 id="reviews" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Being ready for reviews</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Chinese-owned companies in India can face closer checks from tax, customs, labour and other authorities. Keep payroll, contract-labour, customs and related-party records complete and reconciled each month, so a review can be answered from records rather than reconstructed.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We run the Indian filing calendar, track Press Note 3 approval conditions and prepare calendar-year figures for the Chinese parent.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">accounting, reporting and audit support</Link> and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>.
        </p>

        <GuideServiceBox path="/china-to-india/compliance-calendar" />
        <GuideCTA
          title="Running compliance for a Chinese-owned subsidiary?"
          description="Tell us your approval conditions, and we will build them into the calendar."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/china-to-india/faq"
          seeAllLabel="See all Chinese FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Chinese parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "DPIIT", href: "https://dpiit.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Keeping India's Calendar Next to China's?"
        description="Tell us your incorporation date and the parent's year-end, and we'll map every ROC, tax and FEMA deadline for the subsidiary."
      />
    </main>
  )
}
