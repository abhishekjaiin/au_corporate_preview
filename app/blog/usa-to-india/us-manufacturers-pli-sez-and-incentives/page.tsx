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

const PAGE_URL = "https://www.theaucorp.com/usa-to-india/us-manufacturers-pli-sez-and-incentives"
const PARENT_URL = "https://www.theaucorp.com/usa-to-india"

const toc = [
  { id: "country-specific", label: "What's different for US companies" },
  { id: "why", label: "Why manufacturers need a separate plan" },
  { id: "pli", label: "Production-linked incentives" },
  { id: "sez", label: "Special economic zones and export units" },
  { id: "indirect", label: "Customs duty, GST and machinery" },
  { id: "standards", label: "Standards and quality control orders" },
  { id: "land", label: "Land, power and approvals" },
  { id: "tax", label: "Tax rate choices and transfer pricing" },
  { id: "checklist", label: "A project checklist" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does India offer incentives for US manufacturers?", a: "Yes, in the form of production-linked incentives for listed sectors, zone and export unit benefits, and state concessions, each with conditions." },
  { q: "What is a PLI scheme?", a: "A scheme that pays a percentage of incremental sales of eligible products over a base year, for a limited period, subject to investment and sales thresholds." },
  { q: "Do special economic zones still have a tax holiday?", a: "Income-tax holidays ended for units that began operations after March 2020. Zone benefits now rest mainly on indirect tax and logistics." },
  { q: "Is manufacturing open to 100% foreign ownership?", a: "Generally yes under the Automatic Route, with exceptions in a few sectors. Confirm for your product." },
  { q: "What are quality control orders?", a: "Rules that make BIS certification compulsory for listed products and sometimes their inputs, which can restrict imports of components." },
  { q: "How is machinery taxed on import?", a: "Customs duty depends on the tariff line and any concession, and goods and services tax applies with input credit if conditions are met." },
  { q: "Should I choose a location only for incentives?", a: "No. Talent, logistics, power and approvals matter more, and schemes change." },
  { q: "Does the US parent need to do anything for a manufacturing subsidiary?", a: "The usual Form 5471 and credit work applies, and transfer pricing needs care. See the US tax guide." },
  { q: "When should the subsidiary be set up?", a: "Early, so that it can sign contracts, hold licences and apply for schemes." },
]

const relatedCards = [
  { title: "Where Should a US Company Set Up in India? Comparing Bengaluru, Hyderabad, Pune, Chennai, Delhi NCR, Mumbai and GIFT City on Talent, Stamp Duty, Labour Rules and Incentives", desc: "How to choose the state and city for the registered office and the team: a decision framework, a comparison table of major hubs by function, how state law changes stamp duty, professional tax and shops rules, what GIFT City offers, and the order of questions that matter most.", href: "/usa-to-india/choosing-an-indian-state-and-city-for-us-companies" },
  { title: "Transfer pricing for US groups", desc: "Form 3CEB, benchmarking and intercompany agreements.", href: "/usa-to-india/transfer-pricing" },
  { title: "How the US Taxes Profits of an Indian Subsidiary: Net CFC Tested Income, Subpart F, the Participation Deduction, the High-Tax Exclusion and Foreign Tax Credits", desc: "The US side of an Indian subsidiary for a US C corporation or pass-through owner: how profits are taxed when earned or when distributed, what changed after the July 2025 tax act, the role of Indian tax as a credit, check-the-box choices and the forms (5471, 926, 1118, 8992 and 8993).", href: "/usa-to-india/us-tax-on-indian-subsidiary-ncti-subpart-f-and-foreign-tax-credit" },
  { title: "Compliance calendar", desc: "Annual and monthly filings for an Indian subsidiary.", href: "/usa-to-india/compliance-calendar" },
]

export default function UsManufacturersPliSezAndIncentivesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Manufacturing in India as a US Company: Production-Linked Incentives, SEZ and Export Units, Duty on Machinery, BIS and Quality Control Orders, Land, Power and the Supply Chain"
        description="What a US manufacturer should check before building or contracting a plant in India: how PLI and zone incentives work and what they require, customs and GST on machinery, product standards and quality control orders, land and power, labour rules, tax rate choices and a project checklist."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-US"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/usa-to-india" },
          { label: "US Manufacturers in India: PLI, Special Economic Zones, Customs Duty and Product Standards" },
        ]}
      />

      <GuideHero
        eyebrow="Operations: manufacturing"
        title="Manufacturing in India as a US Company: Production-Linked Incentives, SEZ and Export Units, Duty on Machinery, BIS and Quality Control Orders, Land, Power and the Supply Chain"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A US company that wants to manufacture in India faces a different set of questions from a software
          company. Incentives such as production-linked incentive schemes reward sales and investment above a
          base year in selected sectors, special economic zones offer duty-free imports and export-oriented
          treatment, and several states add land, power or stamp duty concessions. Each carries conditions and
          deadlines, and income-tax holidays that once attracted investors have largely lapsed. Beyond
          incentives, the work is practical: customs duty and goods and services tax on machinery, product
          standards and quality control orders that restrict imports of components, land and power, and a
          skilled workforce. This guide is a checklist for those questions. We state scheme features from public
          descriptions; the terms change often, so confirm them with the administering ministry before relying
          on any.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the US
          </Link>
        </p>

        <GuideCountryContext country="usa" topic="manufacturing-incentives" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["PLI schemes", "Cash incentives on incremental sales of eligible products in listed sectors; thresholds, application windows and caps"],
                ["SEZ and export units", "Duty-free import of inputs and capital goods for export production; GST zero-rated supplies; conditions on net foreign exchange earnings"],
                ["Income tax", "Older tax holidays have largely lapsed; confirm the current concessional regimes and sunset dates"],
                ["Customs and GST", "Duty on machinery and components; some capital goods schemes; input tax credit rules"],
                ["Standards", "BIS certification and quality control orders can restrict imported components"],
                ["Land and power", "State industrial agencies; stamp duty on leases; power tariffs and reliability"],
                ["Foreign exchange", "Manufacturing is generally under the Automatic Route; some sectors have caps"],
                ["Supply chain", "Local sourcing conditions in some schemes and in single-brand retail"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why manufacturers need a separate plan</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A services company has few assets and can move quickly. A manufacturer commits capital for years,
          needs land and power, and often depends on government schemes whose rules change. The legal entity is
          usually the same, a private limited company, and the foreign investment route is usually the Automatic
          Route for manufacturing, but the commercial planning is quite different. Start by listing the
          products, the volume plan, the share of local sourcing, the export plan and the funding timetable,
          because each scheme asks for them.
        </p>

        <h2 id="pli" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Production-linked incentives</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Production-linked incentive schemes pay a percentage of incremental sales of products made in India
          over a base year, for a limited period, to companies in listed sectors, which have included
          electronics, pharmaceuticals, medical devices, auto components, specialty steel, solar modules and
          others. Applicants must meet minimum investment and sales thresholds and file within an application
          window. Payments depend on verification of sales and are subject to caps and conditions on domestic
          value addition. Because windows close and schemes are revised, a US company should check whether its
          product is on the current eligibility list and whether the scheme is still open. A scheme should be
          treated as a possible upside, not as the reason for the investment.
        </p>

        <h2 id="sez" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Special economic zones and export units</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A special economic zone is a designated area treated as foreign territory for trade purposes. Units in
          a zone can import capital goods and inputs without customs duty and can supply exports as zero-rated
          for goods and services tax, subject to conditions such as achieving positive net foreign exchange
          earnings. Income-tax holidays for new units in zones ended for units that began operations after March
          2020, so the case for a zone now rests on indirect tax and logistics, not on a tax holiday. Supplies
          from a zone unit to the Indian domestic market are charged duty and have restrictions. Export-oriented
          units outside zones have similar benefits. Check the current framework, including any replacement
          scheme for zones, before you commit.
        </p>

        <h2 id="indirect" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Customs duty, GST and machinery</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Capital goods carry customs duty that depends on the tariff line and any concession, and goods and services tax on top, for which input tax credit is available if the conditions are met.</li>
          <li>Some schemes allow concessional duty on capital goods against an export obligation; the obligation has to be met within a stated period.</li>
          <li>Imports of components can face anti-dumping duties and quality control orders, so check each part number.</li>
          <li>Classification disputes are common, so ask a customs adviser to confirm the tariff line and obtain an advance ruling where the amount justifies it.</li>
          <li>Plan the cash flow: duty and tax are paid at import, and credit is received later.</li>
        </ul>

        <h2 id="standards" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Standards and quality control orders</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India applies product standards through the Bureau of Indian Standards, and quality control orders
          make certification compulsory for listed products and, in some cases, for the inputs used to make
          them. A manufacturer that imports components covered by an order must either obtain certification for
          the foreign supplier or source locally, and the restriction can change the economics of a plant. Check
          the list for each component and each finished product and allow time for certification, which can take
          months. See{" "}
          <Link href="/usa-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">the compliance calendar</Link>{" "}
          for the annual rhythm once operations begin.
        </p>

        <h2 id="land" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Land, power and approvals</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Industrial land is allotted by state industrial development agencies or bought privately, with stamp
          duty on the transaction and conditions on use and timelines for construction. Approvals typically
          include environmental consent, factory licence, fire and building approvals, power connection and, for
          some sectors, a sector regulator. Timelines vary by state, and single-window systems exist to speed
          them up. Power tariffs and reliability differ by state and by category of consumer. Use a local
          adviser who has dealt with the agency, and keep the first plant modest until approvals are in hand.
          See{" "}
          <Link href="/usa-to-india/choosing-an-indian-state-and-city-for-us-companies" className="text-blue-800 font-semibold hover:underline">choosing a state and city</Link>.
        </p>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax rate choices and transfer pricing</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Domestic companies can choose between the standard regime with deductions and a lower-rate regime
          without them, and a concessional regime for new manufacturing companies has existed with a sunset
          date. Which is better depends on the plan, and the choice is made by filing, so model it before the
          first return. Transfer pricing matters more for a manufacturer, because of contract manufacturing for
          the US parent, purchases of components from the group and royalties for technology. See{" "}
          <Link href="/usa-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
        </p>

        <h2 id="checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A project checklist</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Confirm the sector route and any caps.</li>
          <li>List products and check PLI and other scheme eligibility and windows.</li>
          <li>Decide the site and compare state concessions with talent and logistics.</li>
          <li>Classify machinery and components; check duties and quality control orders.</li>
          <li>Model the tax regime choice, the incentive and the transfer pricing.</li>
          <li>Plan approvals, power and water, and a realistic construction timeline.</li>
          <li>Hire the plant leader and key engineers before the building is complete.</li>
          <li>Set up an Indian subsidiary early so that it can sign contracts and hold licences. See <Link href="/usa-to-india/how-long-it-takes-to-set-up-from-the-us" className="text-blue-800 font-semibold hover:underline">the timeline guide</Link>.</li>
        </ol>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.irs.gov/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Internal Revenue Service (US)</a>,{" "}
          <a href="https://www.bis.gov/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Bureau of Industry and Security (US)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/usa-to-india/us-manufacturers-pli-sez-and-incentives" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/usa-to-india/faq"
          seeAllLabel="See all the FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in/" },
            { label: "Bureau of Indian Standards", href: "https://www.bis.gov.in/" },
            { label: "Ministry of Commerce and Industry (India)", href: "https://commerce.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and US rules
          change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Setting Up Manufacturing in India?"
        description="Tell us the product and location, and we'll map the entity, incentive eligibility, customs and compliance."
      />
    </main>
  )
}
