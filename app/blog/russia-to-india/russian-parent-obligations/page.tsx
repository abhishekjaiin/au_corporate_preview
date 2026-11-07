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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/russian-parent-obligations"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "steps", label: "Russian-side steps before investing" },
  { id: "table", label: "Russian rules at a glance" },
  { id: "tax", label: "Tax on income from India" },
  { id: "data", label: "Data and technology" },
  { id: "sequence", label: "Order of work" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does a Russian company need approval to invest in India?", a: "Russian residents face restrictions on paying for shares abroad. As reported, transactions up to RUB 30 million in aggregate per counterparty need no individual Bank of Russia approval from 1 July 2026, and larger ones do. Confirm with Russian counsel." },
  { q: "How is the RUB 30 million threshold calculated?", a: "Transactions with the same non-resident entity are added together, counting those made on or after 1 April 2024, with foreign currency converted at the Bank of Russia rate." },
  { q: "Are Indian dividends taxed in Russia?", a: "Foreign dividends can be taxed at 0% for qualifying holdings under conditions, otherwise at the normal rate with credit for Indian tax. Confirm with a Russian adviser." },
  { q: "Do controlled foreign company rules apply?", a: "They can, to undistributed profits of foreign subsidiaries unless an exemption applies. Check the position for the Indian subsidiary." },
  { q: "Must I tell the Russian tax authority?", a: "Russian rules require notification of foreign participation and accounts. Confirm the forms and deadlines with Russian counsel." },
  { q: "What is the Russian profit tax rate?", a: "Reported as 25% from 2025, with credit for foreign tax. Confirm the current rate." },
  { q: "Can money go to India through any bank?", a: "Only through banks acceptable to both the Russian and Indian sides. See the sanctions and payments guide." },
]

const relatedCards = [
  { title: "Sanctions, Banking and Payment Channels for a Russian Parent and Its Indian Subsidiary: Screening, Special Rupee Accounts and Bank Due Diligence", desc: "The practical gate for Russian investors in India: US, EU and UK sanctions screening, the 50% ownership rule, Indian bank due diligence, settlement channels including rupee vostro accounts, why non-dollar payments are not a safe harbour and a compliance checklist.", href: "/russia-to-india/sanctions-and-payments-for-russian-companies" },
  { title: "Funding Your Indian Subsidiary from Russia: Equity, Preference Shares, External Borrowing, FEMA Reporting and the Remittance Route", desc: "How a Russian parent can fund an Indian company: equity and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return, the remittance route through banks acceptable to India and Russian clearance.", href: "/russia-to-india/funding-and-fema" },
  { title: "Russian Documents for an Indian Subsidiary: Notary, Apostille, Certified English Translation and Delivery to India", desc: "How to prepare Russian company and director documents for Indian filings: both countries are parties to the Apostille Convention, which authority issues the apostille, notarised English translations, validity, checklist and common pitfalls.", href: "/russia-to-india/documents-apostille-and-translation" },
  { title: "Twelve Common Mistakes Russian Companies Make in India and How to Avoid Them", desc: "The most common mistakes of Russian companies entering India: ignoring banking and sanctions, skipping Russian clearance, late FEMA filings, weak treaty paperwork, secondment tax errors, unauthenticated documents, unstamped contracts and ignoring the Indian calendar.", href: "/russia-to-india/common-mistakes" },
]

export default function RussianParentObligationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="What a Russian Parent Must Do at Home: Outbound Investment Controls, Currency Rules, Foreign Account Reporting and Tax Credit"
        description="The Russian-side steps for a parent investing in India: Bank of Russia thresholds and approval for share investments abroad, currency control and repatriation rules, foreign account reporting, controlled foreign company rules, profit tax and treatment of Indian dividends."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Russian Parent Obligations: Bank of Russia Approval, Currency Control and Tax Reporting" },
        ]}
      />

      <GuideHero
        eyebrow="Russian side: parent duties"
        title="What a Russian Parent Must Do at Home: Outbound Investment Controls, Currency Rules, Foreign Account Reporting and Tax Credit"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Since 2022 Russian residents have faced restrictions on paying for shares or capital contributions in
          foreign companies. As reported, from 1 July 2026 transactions with one foreign counterparty can be
          made without individual Bank of Russia approval up to RUB 30 million in aggregate (counted from 1
          April 2024), and individual approval is needed above that. The parent should also deal with currency
          control and reporting duties, controlled foreign company rules, foreign account notifications and tax
          on Indian income. These are matters of Russian law, which can change quickly: take current advice from
          Russian counsel before committing funds.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="parent-obligations" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Share investment abroad", "Restricted; Bank of Russia approval above a threshold (RUB 30 million aggregate per counterparty, reported effective 1 July 2026)"],
                ["Aggregation", "Transactions with the same non-resident counted from 1 April 2024"],
                ["Currency control", "Rules on payments in foreign currency, notifications and repatriation of export proceeds"],
                ["Reporting", "Notification of foreign accounts and participation in foreign entities to the Russian tax authority"],
                ["CFC rules", "Controlled foreign company profits can be taxed in Russia; check exemptions for the Indian subsidiary"],
                ["Profit tax", "Corporate profit tax rate reported raised to 25% from 2025; confirm"],
                ["Dividends", "Foreign dividends can be taxed at 0% for qualifying holdings (generally 50% for 365 days) subject to conditions; confirm"],
                ["Sanctions", "Russian counter-sanctions and the sanctions environment affect banks and deal terms"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Russian-side steps before investing</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Confirm with Russian counsel whether the planned investment needs Bank of Russia approval or falls under the threshold, and whether any special permit or notification applies.</li>
          <li>Check the constitution of the Russian company and any shareholder approvals; strategic or state-linked groups may need extra internal approvals.</li>
          <li>Plan the funding route with a bank that can send payments to India. See <Link href="/russia-to-india/sanctions-and-payments-for-russian-companies" className="text-blue-800 font-semibold hover:underline">sanctions and payments</Link>.</li>
          <li>Prepare notifications for the Russian tax authority about the foreign participation and any foreign accounts.</li>
          <li>Complete the Indian steps in parallel so the documents agree. See <Link href="/russia-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">incorporation steps</Link>.</li>
        </ol>

        <h2 id="table" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Russian rules at a glance</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Position in outline</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Why it matters for India</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Outbound share investment", "Approval or notification depending on amount and counterparty; threshold reported at RUB 30 million aggregate", "Funding cannot go out without clearance above the threshold"],
                ["Currency control", "Rules on foreign currency payments, accounts abroad and reporting", "Affects how capital and loans are sent and how profits come back"],
                ["Foreign participation notice", "Notify the tax authority of foreign entities held", "Matches the beneficial ownership information given to India"],
                ["CFC rules", "Undistributed profits of controlled foreign companies can be taxable in Russia", "Dividend policy and treaty position"],
                ["Profit tax", "Taxed on worldwide income with credit for foreign tax", "Credit for Indian withholding"],
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

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax on income from India</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Russian companies are taxed on worldwide income, with credit for foreign tax paid. The treaty and Indian Withholding Tax Certificate support the credit. See <Link href="/russia-to-india/india-russia-dtaa" className="text-blue-800 font-semibold hover:underline">the DTAA guide</Link>.</li>
          <li>Dividends from a qualifying foreign subsidiary can be taxed at 0% where the participation and holding period conditions are met, as generally described; confirm the conditions and any restrictions with Russian counsel.</li>
          <li>Interest, royalties and service fees are taxable in Russia with credit for Indian tax.</li>
          <li>Controlled foreign company rules can tax undistributed profits of an Indian subsidiary unless an exemption applies.</li>
        </ul>

        <h2 id="data" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data and technology</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Russian personal data localisation rules affect what can be sent to India. See{" "}
          <Link href="/russia-to-india/data-protection-152fz-dpdp" className="text-blue-800 font-semibold hover:underline">data protection</Link>.
          Export controls on equipment and technology on both sides should be checked before shipments.
        </p>

        <h2 id="sequence" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Order of work</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Start the Russian clearance, the sanctions review and the Indian incorporation together because they
          use the same ownership chart and funds plan. Do not remit funds before the Russian clearance and
          Indian bank approval are in place.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.nalog.gov.ru/eng/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Federal Tax Service (Russia)</a>,{" "}
          <a href="https://www.cbr.ru/eng/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Bank of Russia</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/russia-to-india/russian-parent-obligations" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/russia-to-india/faq"
          seeAllLabel="See all 157 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "ALRUD: Bank of Russia increases threshold for investments in foreign companies", href: "https://www.alrud.ru/storage/newsletters_2026/alrud-newsletter-bank-of-russia-increases-threshold-for-investments-by-russian-residents-in-foreign-companies.pdf" },
            { label: "Bank of Russia", href: "https://www.cbr.ru/eng/" },
            { label: "Federal Tax Service (Russia)", href: "https://www.nalog.gov.ru/eng/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Russian
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Reporting on the Indian Subsidiary in Russia?"
        description="Tell us how the group reports, and we'll supply the Indian figures your currency control, CFC and tax filings in Russia need."
      />
    </main>
  )
}
