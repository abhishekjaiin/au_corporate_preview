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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/restructuring-and-exit"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "situations", label: "Typical situations for Japanese groups" },
  { id: "routes", label: "Choosing the route" },
  { id: "group-moves", label: "Moving the subsidiary within the group" },
  { id: "selling", label: "Selling to an outside buyer" },
  { id: "closing", label: "Closing the Indian company" },
  { id: "japan-side", label: "The Japanese side of an exit" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a Japanese parent move its Indian subsidiary under a Singapore regional headquarters?", a: "Yes, by transferring the shares to the regional company. It is a sale between two non-residents, so FEMA pricing is not tested the same way as a sale to a resident, but Indian capital gains tax and the treaty position of both the seller and the new holder must be checked first." },
  { q: "How are two Indian subsidiaries of the same Japanese group combined?", a: "Through a merger scheme approved by the National Company Law Tribunal, or the fast-track route under Section 233 of the Companies Act, 2013 where one is the wholly owned subsidiary of the other." },
  { q: "What tax applies when the Japanese parent sells the Indian shares?", a: "Long-term capital gains on unlisted Indian shares held for more than 24 months are taxed at 12.5% plus surcharge and cess under Indian law, subject to the India-Japan treaty. The buyer usually withholds tax from the price." },
  { q: "Which form reports a share sale to the RBI?", a: "Form FC-TRS, filed within 60 days of the transfer or the receipt of the consideration, whichever is earlier, when shares move between a resident and a non-resident." },
  { q: "How long does a strike-off take?", a: "Usually three to six months after Form STK-2 is filed. The company must have had no business for the two previous financial years, or never started, and must have cleared its liabilities." },
  { q: "When is voluntary liquidation used instead of strike-off?", a: "When the company has traded, holds assets or has employees, contracts or tax matters to settle. A liquidator realises the assets, pays creditors and distributes the surplus under the Insolvency and Bankruptcy Code." },
  { q: "How is the final surplus sent to Japan?", a: "After taxes and creditors are paid and the accounts are final, the bank remits the surplus with Forms 145 and 146 (previously 15CA and 15CB), and the change is reported to the RBI." },
  { q: "Does selling the Japanese parent create Indian tax?", a: "It can. India's indirect transfer rules can tax a sale of a foreign company whose value comes substantially from Indian assets, so a group-level transaction needs an Indian review." },
]

const relatedCards = [
  { title: "Repatriating Profits to Japan", desc: "Dividends, fees and surplus funds back to the parent, with the treaty rate and forms.", href: "/japan-to-india/repatriating-profits" },
  { title: "Share Valuation for Foreign Investment", desc: "Pricing rules that apply when shares change hands between residents and non-residents.", href: "/japan-to-india/share-valuation" },
  { title: "Japan Parent Obligations", desc: "Japanese reporting and tax for a parent with an Indian subsidiary.", href: "/japan-to-india/japan-parent-obligations" },
  { title: "Compliance Calendar from Japan", desc: "Keeping filings current so a later sale or closure is clean.", href: "/japan-to-india/compliance-calendar" },
]

export default function RestructuringAndExitPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Restructuring, Mergers and Exit: Your Options for an Indian Subsidiary"
        description="How a Japanese group restructures, sells, merges or closes its Indian subsidiary: regional holding moves, share sales, slump sales, mergers, strike-off and liquidation."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "Restructuring, Mergers and Exit for an Indian Subsidiary" },
        ]}
      />

      <GuideHero
        eyebrow="Scale and exit"
        title="Restructuring, Mergers and Exit: Your Options for an Indian Subsidiary"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Japanese groups most often restructure an Indian subsidiary for one of three reasons: to bring it under
          a regional holding company, to combine two Indian entities after an acquisition, or to wind down a unit
          that no longer fits. The tools are a share transfer, a merger scheme, a slump sale, strike-off or
          voluntary liquidation, and each carries its own Indian tax and FEMA steps and a separate Japanese result.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="restructuring-and-exit" />

        <h2 id="situations" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Typical situations for Japanese groups</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Situation</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Usual tool</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">First thing to check</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Regional headquarters in Singapore or elsewhere takes over Asian subsidiaries", "Share transfer from the Japanese parent", "Indian capital gains, treaty access of the new holder, and Japanese approvals"],
                ["Two Indian entities after a Japanese group merger or acquisition", "Merger scheme (fast track if wholly owned)", "Tax-neutrality conditions and employee transfer"],
                ["A product line is sold to an Indian or global buyer", "Slump sale of the undertaking or share sale", "Which assets, contracts and staff move, and stamp duty"],
                ["A liaison or sales entity is no longer needed", "Strike-off if dormant; voluntary liquidation if it traded", "Pending filings, tax assessments and employee dues"],
                ["A joint venture partner exits", "Share purchase by the Japanese side or the partner", "FEMA pricing direction and the shareholders' agreement"],
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

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing the route</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Start from what the group wants to keep. If the people, licences and contracts should stay together,
          a share transfer or a merger moves the company as a whole. If only part of the business is being
          sold, a slump sale carves out the undertaking for a lump sum, with gains computed on the net worth
          transferred. If nothing is worth keeping, closure is the answer, and the only question is whether the
          company qualifies for strike-off or needs a liquidator.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          A buyback or capital reduction is a partial step: it returns surplus cash to the Japanese parent
          while the company continues. Both are limited by company law, and the tax treatment of buybacks has
          changed in recent years, so model the cost before choosing it over a dividend.
        </p>

        <h2 id="group-moves" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Moving the subsidiary within the group</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>To a regional holding company:</strong> a transfer between two non-residents. Indian capital gains tax still applies to the Japanese seller, and the new holder&apos;s treaty position decides future dividend and exit taxation in India.</li>
          <li><strong>Merging two Indian companies:</strong> a scheme before the National Company Law Tribunal, or the shorter Section 233 route between a holding company and its wholly owned subsidiary. Employees, registrations and contracts move by operation of the scheme.</li>
          <li><strong>Cross-border mergers:</strong> permitted under FEMA and company-law rules with specific conditions, but rarely used by Japanese groups because the Japanese side needs its own reorganisation rules to apply.</li>
        </ul>

        <h2 id="selling" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Selling to an outside buyer</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          When the buyer is Indian resident, FEMA sets the minimum price the Japanese seller must receive, and
          Form FC-TRS reports the transfer within 60 days. Long-term gains on unlisted shares held for more than
          24 months are taxed in India at 12.5% plus surcharge and cess, subject to the India-Japan treaty, and
          the buyer normally withholds the tax. Japanese buyers&apos; diligence habits work in reverse too: an
          Indian buyer will ask for clean ROC, tax and FEMA records, so gaps found late reduce the price.
        </p>

        <h2 id="closing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Closing the Indian company</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Confirm the route: strike-off (Section 248, Form STK-2, ₹10,000 fee) for a company with no business for two years, or voluntary liquidation for one that traded.</li>
          <li>Pay employee dues, including gratuity, and settle GST, TDS and income tax positions.</li>
          <li>Bring every ROC and FEMA filing up to date, because pending returns block closure.</li>
          <li>Close bank accounts after the final payments, and keep the books for the statutory period.</li>
          <li>Remit the surplus to Japan with Forms 145 and 146 and report the closure to the RBI.</li>
        </ol>

        <h2 id="japan-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Japanese side of an exit</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>How a sale gain, a liquidation distribution or a buyback receipt is taxed in Japan depends on how Japanese law characterises it; your Japanese tax adviser confirms the result and any foreign tax credit.</li>
          <li>Japanese reporting on the disposal of an overseas subsidiary may be required under the Foreign Exchange and Foreign Trade Act.</li>
          <li>For the parent&apos;s wider obligations, see <Link href="/japan-to-india/japan-parent-obligations" className="text-blue-800 font-semibold hover:underline">Japan parent obligations</Link>.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We map the routes against your group plan, prepare valuations, run the merger or closure filings, and
          handle the FEMA reporting and final remittance, working with your Japanese advisers on their side.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>{" "}
          and{" "}
          <Link href="/secretarial-roc-compliance" className="text-blue-800 font-semibold hover:underline">secretarial and ROC compliance</Link>.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the current rules at the{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>{" "}
          and the{" "}
          <a href="https://ibbi.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Insolvency and Bankruptcy Board of India</a>.
        </p>

        <GuideServiceBox path="/japan-to-india/restructuring-and-exit" />
        <GuideCTA
          title="Reorganising your India footprint?"
          description="Tell us the group plan, and we will compare the routes and timelines on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/japan-to-india/faq"
          seeAllLabel="See all Japan FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Japanese parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India (FEMA and FIRMS)", href: "https://www.rbi.org.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Insolvency and Bankruptcy Board of India", href: "https://ibbi.gov.in" },
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
        title="Restructuring or Exiting the Indian Entity?"
        description="Tell us the current structure and your goal, and we'll map the ROC, tax and FEMA steps for a clean restructuring or exit."
      />
    </main>
  )
}
