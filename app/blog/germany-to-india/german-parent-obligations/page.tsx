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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/german-parent-obligations"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "tax", label: "German tax on income from the Indian subsidiary" },
  { id: "reporting", label: "Notifications and reports in Germany" },
  { id: "cfc", label: "CFC rules and intermediate holdings" },
  { id: "law", label: "Criminal law, whistleblowing and trade controls" },
  { id: "pillar", label: "Transfer pricing and minimum tax" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is a dividend from an Indian subsidiary taxable in Germany?", a: "For a corporation holding at least 10% at the start of the calendar year, 95% of the dividend is exempt and 5% is treated as non-deductible expense, which comes to roughly 1.5% effective tax. Confirm with your German adviser." },
  { q: "Does a German parent have to notify the tax office of an Indian subsidiary?", a: "Yes. Acquiring a foreign participation of the stated size must be notified under Section 138 of the Fiscal Code. Confirm the form and timing for your year." },
  { q: "Does the Indian subsidiary have to be consolidated in the German accounts?", a: "Above the size thresholds, a parent consolidates controlled subsidiaries under German commercial law or IFRS. The Indian year end of 31 March needs a bridge to the German reporting date." },
  { q: "Do the German CFC rules apply to an Indian operating subsidiary?", a: "Generally not for active income taxed at Indian rates above 15%, but passive income, incentives and special regimes can change the result." },
  { q: "Does Germany tax the sale of the Indian subsidiary?", a: "A corporation's gain on shares is 95% exempt under Section 8b, so the German cost is small. The Indian tax position under the treaty is the main question." },
  { q: "Does Pillar Two affect a German parent with an Indian subsidiary?", a: "Only if the group has consolidated revenue of EUR 750 million or more. The Indian rate is usually above 15%, but incentives can lower the effective rate." },
]

const relatedCards = [
  { title: "Getting Money Out of India to Germany: Dividends, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a German parent receives money from an Indian subsidiary: the flat 10% treaty rate, Section 393 withholding, Forms 41, 145 and 146, German 95% exemption, VAT on service fees and Indian GST reverse charge.", href: "/germany-to-india/repatriating-profits" },
  { title: "Transfer Pricing Between a German Parent and an Indian Subsidiary: What India Requires and Where Germany Differs", desc: "How transfer pricing works between Germany and India: Indian arm's length rules and Form 48, German documentation duties, the function transfer rules, APAs and the mutual agreement route.", href: "/germany-to-india/transfer-pricing" },
  { title: "Compliance Calendar: Indian Deadlines and the German Filings They Feed", desc: "A month-by-month compliance calendar for an Indian subsidiary of a German parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return and the German-side reports.", href: "/germany-to-india/compliance-calendar" },
  { title: "Exit and Restructuring: Share Sale, Buyback, Liquidation and Closing a Subsidiary Owned by a German Parent", desc: "How a German parent exits an Indian subsidiary: share sale and FEMA pricing, capital gains and the treaty, buyback, voluntary liquidation, strike off, German effect and employee rules.", href: "/germany-to-india/exit-and-restructuring" },
]

export default function GermanParentObligationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="What a German Parent Company Owes at Home When It Owns an Indian Subsidiary"
        description="German-side duties for a parent with an Indian subsidiary: corporation and trade tax, the 95% participation exemption, notification of foreign holdings, Bundesbank reports, CFC rules, HGB consolidation, anti-bribery law and Pillar Two."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "German Parent Obligations: Tax, Reporting and Law for a Company with an Indian Subsidiary" },
        ]}
      />

      <GuideHero
        eyebrow="German parent: tax and law at home"
        title="What a German Parent Company Owes at Home When It Owns an Indian Subsidiary"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A German GmbH or AG that owns an Indian subsidiary pays corporation tax of 15% plus the solidarity
          surcharge and municipal trade tax, which together come to roughly 30%, but dividends and share gains
          from a qualifying foreign subsidiary are 95% exempt, so the German cost on an Indian dividend is
          small. The parent must still notify the tax office of the foreign holding, report to the Bundesbank
          where thresholds are met, consolidate under German accounting rules, keep the Transparenzregister
          current and apply German anti-bribery and supply-chain law to the Indian team. This page lists
          German-side points for your German advisers to confirm; we advise on the Indian side.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="parent-obligations" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Corporate tax", "Corporation tax 15% plus 5.5% solidarity surcharge on the tax, and trade tax set by the municipality; combined burden is roughly 30%"],
                ["Rate path", "Under the 2025 investment programme the corporation tax rate is scheduled to fall by one percentage point a year from 2028 to 10% in 2032; confirm with your German adviser"],
                ["Participation exemption", "Section 8b of the Corporation Tax Act exempts 95% of qualifying dividends and share gains; 5% is treated as non-deductible expense, so about 1.5% effective tax on the dividend"],
                ["Dividend condition", "A holding of at least 10% at the start of the calendar year for dividends; trade tax has its own conditions for foreign subsidiaries"],
                ["Notification", "Acquisition of a foreign participation must be notified to the tax office under Section 138 of the Fiscal Code; confirm timing"],
                ["Bundesbank", "Direct investment reports under the Foreign Trade and Payments Ordinance where thresholds are met"],
                ["CFC rules", "Low-taxed passive income of a foreign subsidiary (below 15%) can be attributed to the parent"],
                ["Large groups", "Minimum tax rules (Pillar Two) for groups with consolidated revenue of EUR 750 million or more"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">German tax on income from the Indian subsidiary</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A German corporation is taxed on worldwide income. Dividends from an Indian subsidiary are included in
          the parent&apos;s income, but if the parent held at least 10% at the start of the calendar year, 95%
          of the dividend is exempt under Section 8b of the Corporation Tax Act, and the other 5% is added back
          as a non-deductible expense. Applied to a combined rate of about 30%, the German cost is about 1.5% of
          the dividend. Gains on a sale of the Indian shares are also 95% exempt in the same way.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Service fees, royalties and interest from India:</strong> fully taxable in Germany as business income, with credit for Indian Withholding Tax on the same income.</li>
          <li><strong>Trade tax:</strong> a foreign dividend can also be exempt from trade tax if the holding and activity conditions are met; otherwise 5% is added back. Your German adviser should confirm the position each year.</li>
          <li><strong>Losses:</strong> losses in the Indian subsidiary stay in India. They are not relieved against German profits.</li>
          <li><strong>Partnership parents:</strong> if the parent is a GmbH &amp; Co. KG or another transparent entity, the partners are taxed on the income and the exemption works differently. See <Link href="/germany-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">structure options</Link>.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          The treaty position is in{" "}
          <Link href="/germany-to-india/india-germany-dtaa" className="text-blue-800 font-semibold hover:underline">the India-Germany tax treaty guide</Link>.
        </p>

        <h2 id="reporting" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Notifications and reports in Germany</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Tax office notification:</strong> acquiring a foreign participation of a stated size must be notified under Section 138 of the Fiscal Code. Ask your German adviser to confirm the form and timing for your year.</li>
          <li><strong>Bundesbank:</strong> a German company with a foreign subsidiary above the reporting threshold files annual direct investment reports, and payments above the threshold are reported. Your bank can guide the first filing.</li>
          <li><strong>Transparency register:</strong> keep the Transparenzregister entry for the parent&apos;s beneficial owners current; the Indian bank and the Indian subsidiary&apos;s beneficial owner filing will rely on the same information.</li>
          <li><strong>Accounts:</strong> the Indian subsidiary appears in the parent&apos;s notes and, above the size thresholds, in consolidated accounts under German commercial law (HGB) or IFRS. The 31 March Indian year end needs a bridge to the German reporting date.</li>
        </ul>

        <h2 id="cfc" className="text-2xl font-bold text-gray-900 mt-12 mb-4">CFC rules and intermediate holdings</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The German controlled foreign company rules attribute low-taxed passive income of a foreign subsidiary
          to the German parent. An Indian operating subsidiary paying Indian corporate tax at rates well above
          15% is generally outside the rules for its active income, but passive income streams, special regimes
          and tax incentives can change the result. Do not interpose a third-country holding company without
          substance: it adds cost, can fail the anti-abuse tests and gives no treaty advantage when the
          India-Germany rate is already a flat 10%.
        </p>

        <h2 id="law" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Criminal law, whistleblowing and trade controls</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Anti-bribery:</strong> the Criminal Code covers bribery in business dealings, and the Administrative Offences Act allows fines on the company and on managers who fail to supervise. Train the Indian team and control agents and gifts.</li>
          <li><strong>Whistleblower Protection Act:</strong> German companies above the employee threshold must run an internal reporting channel; many groups extend one channel to Indian staff, which needs data protection review.</li>
          <li><strong>Export controls and sanctions:</strong> German and EU rules apply to goods, software and technology moved to the Indian subsidiary, including by email or remote access.</li>
          <li><strong>Supply chain and sustainability:</strong> see <Link href="/germany-to-india/supply-chain-and-esg-duties" className="text-blue-800 font-semibold hover:underline">supply chain and ESG duties</Link>.</li>
          <li><strong>Data:</strong> personal data moved to India needs a transfer mechanism. See <Link href="/germany-to-india/data-protection-gdpr-dpdp" className="text-blue-800 font-semibold hover:underline">GDPR and DPDP</Link>.</li>
        </ul>

        <h2 id="pillar" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Transfer pricing and minimum tax</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Germany requires transfer pricing documentation for cross-border related-party dealings and has
          specific rules on moving functions abroad. See{" "}
          <Link href="/germany-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
          Groups with consolidated revenue of EUR 750 million or more are in scope of Germany&apos;s minimum tax
          rules, and the Indian rate is normally above the 15% minimum, but incentives and special regimes can
          lower the effective rate, so in-scope groups should test it each year. Draft legislation to adopt the
          OECD side-by-side package was published in May 2026 and was not yet law when we checked.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.bzst.de/EN/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Federal Central Tax Office (BZSt)</a>,{" "}
          <a href="https://www.handelsregister.de/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Handelsregister</a>{" "}
          and the{" "}
          <a href="https://www.bundesbank.de/en" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Deutsche Bundesbank</a>.
        </p>

        <GuideServiceBox path="/germany-to-india/german-parent-obligations" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/germany-to-india/faq"
          seeAllLabel="See all 146 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Federal Central Tax Office (BZSt)", href: "https://www.bzst.de/EN/" },
            { label: "Deutsche Bundesbank", href: "https://www.bundesbank.de/en" },
            { label: "PwC Worldwide Tax Summaries: Germany corporate", href: "https://taxsummaries.pwc.com/germany/corporate" },
          ]}
        />

        <p className="mt-6">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and German
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Reporting on the Indian Subsidiary in Germany?"
        description="Tell us how the group reports, and we'll supply the Indian figures your German tax, audit and reporting work needs."
      />
    </main>
  )
}
