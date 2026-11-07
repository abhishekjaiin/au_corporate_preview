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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/compliance-calendar"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "bridge", label: "Bridging 31 December and 31 March" },
  { id: "rhythm", label: "The Indian monthly rhythm" },
  { id: "annual", label: "The Indian annual cycle" },
  { id: "german", label: "German filings that need Indian numbers" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can the Indian subsidiary use a 31 December year end?", a: "No. Indian companies generally use the year to 31 March." },
  { q: "How does a German parent consolidate the Indian company?", a: "From Indian management accounts to 31 December." },
  { q: "When is the FLA return due?", a: "By 15 July." },
  { q: "When is the Indian AGM due?", a: "By 30 September." },
  { q: "When is the Indian tax return due?", a: "By 31 October, or 30 November with transfer pricing." },
  { q: "When is Withholding Tax on payments to Germany deposited?", a: "By the 7th of the next month." },
  { q: "Does Pillar Two affect the Indian company?", a: "For groups above EUR 750 million revenue, its effective tax rate feeds the group calculation." },
  { q: "Who files director KYC?", a: "Every director, by 30 September." },
]

const relatedCards = [
  { title: "German Parent Obligations", desc: "German-side reporting.", href: "/germany-to-india/german-parent-obligations" },
  { title: "Transfer Pricing", desc: "Aligning the two files.", href: "/germany-to-india/transfer-pricing" },
  { title: "Funding and FEMA", desc: "Event-based filings.", href: "/germany-to-india/funding-and-fema" },
  { title: "Hiring in India", desc: "Payroll dates.", href: "/germany-to-india/hiring-in-india" },
]

export default function ComplianceCalendarPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Compliance Calendar: Indian Deadlines and the German Filings They Feed"
        description="A month-by-month compliance calendar for an Indian subsidiary of a German parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return and the German-side reports."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "Compliance Calendar for an Indian Subsidiary of a German Company" },
        ]}
      />

      <GuideHero
        eyebrow="Calendar: compliance"
        title="Compliance Calendar: Indian Deadlines and the German Filings They Feed"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The Indian subsidiary of a German group files on India&apos;s 1 April to 31 March year, while most German parents close on 31 December. That means the Indian audit runs in spring and summer, after the German annual accounts are done, and the RBI&apos;s FLA return falls on 15 July, during the German half-year close. Plan the German consolidation from Indian management accounts and keep a bridge between the two years.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="compliance-calendar" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Indian year", "1 April to 31 March"],
                ["German parent", "Usually 31 December"],
                ["Monthly", "TDS by the 7th; GST on the 11th and 20th; PF and ESI by the 15th"],
                ["Annual", "AGM by 30 September; AOC-4 and MGT-7 after; tax return by 31 October or 30 November"],
                ["RBI", "FLA return by 15 July"],
                ["German link", "Consolidation, participation reporting and transfer pricing documentation"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="bridge" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Bridging 31 December and 31 March</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">German calendar</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian subsidiary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">January to March: German year-end close</th>
                <td className="border border-gray-300 p-3">Indian Q4; management accounts to 31 December for consolidation</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">April to June: German annual accounts adopted</th>
                <td className="border border-gray-300 p-3">Indian audit of the year to 31 March</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">July: German half-year close</th>
                <td className="border border-gray-300 p-3">FLA return by 15 July</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">September to October</th>
                <td className="border border-gray-300 p-3">Indian AGM by 30 September; tax return by 31 October or 30 November</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="rhythm" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Indian monthly rhythm</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>7th: TDS deposit, including Withholding Tax on payments to Germany.</li>
          <li>11th: GSTR-1.</li>
          <li>15th: provident fund and ESI.</li>
          <li>20th: GSTR-3B.</li>
          <li>Quarterly: advance tax and TDS returns.</li>
        </ul>
        <h2 id="annual" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Indian annual cycle</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Close the books after 31 March.</li>
          <li>Statutory audit and, where required, tax audit.</li>
          <li>FLA return by 15 July.</li>
          <li>AGM by 30 September and director KYC.</li>
          <li>AOC-4 and MGT-7 after the AGM.</li>
          <li>Income tax return and Form 48.</li>
        </ol>
        <h2 id="german" className="text-2xl font-bold text-gray-900 mt-12 mb-4">German filings that need Indian numbers</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Group consolidation under HGB or IFRS for the calendar year.</li>
          <li>Participation reporting and the Section 8b treatment of dividends.</li>
          <li>Transfer pricing documentation consistent with the Indian file.</li>
          <li>Pillar Two information for groups above EUR 750 million revenue.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We run the Indian calendar and deliver calendar-year figures and transfer pricing data for your German reporting.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">accounting, reporting and audit support</Link> and <Link href="/secretarial-roc-compliance" className="text-blue-800 font-semibold hover:underline">secretarial and ROC compliance</Link>.
        </p>

        <GuideServiceBox path="/germany-to-india/compliance-calendar" />
        <GuideCTA
          title="Aligning India with a 31 December group year?"
          description="Tell us your reporting dates, and we will map the Indian deadlines."
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
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
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
        title="Keeping India's Calendar Next to Germany's?"
        description="Tell us your incorporation date and the parent's year-end, and we'll map every ROC, tax and FEMA deadline for the subsidiary."
      />
    </main>
  )
}
