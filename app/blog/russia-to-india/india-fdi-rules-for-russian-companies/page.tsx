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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/india-fdi-rules-for-russian-companies"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "route", label: "Which route applies" },
  { id: "sectors", label: "Sectors that matter to Russian investors" },
  { id: "beneficial", label: "Beneficial ownership and the land-border test" },
  { id: "practical", label: "The practical obstacles" },
  { id: "next", label: "Next steps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does Press Note 3 apply to Russian companies?", a: "Not by reason of Russian nationality, because Russia does not share a land border with India. It can apply if a beneficial owner is from a land-border country." },
  { q: "Can a Russian company own 100% of an Indian subsidiary?", a: "Yes in sectors with 100% automatic FDI, subject to sector conditions and RBI reporting." },
  { q: "Which sectors need approval for Russian investors?", a: "The same as for other foreign investors: sectors or caps requiring approval, such as defence above 74%." },
  { q: "Is investment from Russia restricted by India?", a: "Indian FDI rules do not single out Russia. Practical limits come from sanctions exposure, banking and Russian outbound controls." },
  { q: "Is a Russian investor treated like any other foreign investor?", a: "Under the FDI Policy, yes. Indian banks and counterparties may apply extra due diligence." },
  { q: "What documents prove beneficial ownership?", a: "An ownership chart to natural persons, passports, shareholder registers and extracts from the Russian company register, authenticated for India." },
  { q: "Do I need approval to invest in a defence joint venture?", a: "Above 74% yes, and licences and security clearance apply at any level." },
]

const relatedCards = [
  { title: "Sanctions, Banking and Payment Channels for a Russian Parent and Its Indian Subsidiary: Screening, Special Rupee Accounts and Bank Due Diligence", desc: "The practical gate for Russian investors in India: US, EU and UK sanctions screening, the 50% ownership rule, Indian bank due diligence, settlement channels including rupee vostro accounts, why non-dollar payments are not a safe harbour and a compliance checklist.", href: "/russia-to-india/sanctions-and-payments-for-russian-companies" },
  { title: "What a Russian Parent Must Do at Home: Outbound Investment Controls, Currency Rules, Foreign Account Reporting and Tax Credit", desc: "The Russian-side steps for a parent investing in India: Bank of Russia thresholds and approval for share investments abroad, currency control and repatriation rules, foreign account reporting, controlled foreign company rules, profit tax and treatment of Indian dividends.", href: "/russia-to-india/russian-parent-obligations" },
  { title: "Choosing an Indian Structure for a Russian Parent: Private Limited, LLP, Branch, Liaison Office, Project Office and Joint Venture", desc: "Compare Indian structures for a Russian company: wholly owned private limited company, LLP, branch, liaison and project office, and joint venture, with tax, approval, liability, sanctions and exit points.", href: "/russia-to-india/structure-options" },
  { title: "Twelve Common Mistakes Russian Companies Make in India and How to Avoid Them", desc: "The most common mistakes of Russian companies entering India: ignoring banking and sanctions, skipping Russian clearance, late FEMA filings, weak treaty paperwork, secondment tax errors, unauthenticated documents, unstamped contracts and ignoring the Indian calendar.", href: "/russia-to-india/common-mistakes" },
]

export default function IndiaFdiRulesForRussianCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Can a Russian Company Invest in India? Automatic Route, Sector Caps, Defence and Sensitive Sectors, and the Real Obstacles"
        description="How India's FDI rules apply to a Russian parent: Press Note 3 covers land-border countries and Russia is not one, the Automatic Route and sector caps, defence and nuclear limits, beneficial ownership checks and why sanctions and payments are the practical hurdles."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "India FDI Rules for Russian Companies: Automatic Route, Sector Caps and Why Press Note 3 Does Not Apply" },
        ]}
      />

      <GuideHero
        eyebrow="Approval: FDI route"
        title="Can a Russian Company Invest in India? Automatic Route, Sector Caps, Defence and Sensitive Sectors, and the Real Obstacles"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Russia does not share a land border with India, so Press Note 3 (2020) does not apply to a Russian
          company merely because it is Russian. A Russian parent can invest under the Automatic Route in sectors
          that allow it, subject to the usual sector caps and RBI reporting, and needs government approval only
          in sectors or above caps where approval applies to every foreign investor, such as defence above 74%.
          The real obstacles are practical: sanctions exposure of the parent, its owners and its banks, payment
          channels, Indian bank due diligence and Russian outbound investment controls. Confirm the beneficial
          ownership chain first, because a Russian company with a land-border country shareholder can be caught
          by Press Note 3 through the beneficial-owner test.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="fdi-rules" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Press Note 3", "Applies to entities of, or with beneficial owners from, countries sharing a land border with India; Russia is not one"],
                ["Automatic Route", "Available in sectors with 100% or capped automatic FDI; report to the RBI after investing"],
                ["Government route", "Sectors and caps that need approval for every foreign investor, for example defence above 74%"],
                ["Prohibited", "Sectors closed to foreign investment such as lottery, gambling, chit funds and tobacco manufacturing"],
                ["Beneficial ownership", "A land-border country owner above the Press Note 3 threshold can bring the investment under approval"],
                ["Sanctions", "Indian banks and counterparties screen against US, EU and UK lists; this is the practical gate"],
                ["Russian side", "Bank of Russia and currency control rules for outbound investment"],
                ["Key risk", "Banking access and counterparty reactions, not the Indian FDI rule"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="route" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Which route applies</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Situation</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Russian company, no land-border country beneficial owners, permitted sector", "Automatic Route", "Report to the RBI after funding and allotment"],
                ["Russian company investing in a capped sector within the automatic limit", "Automatic Route", "Check pricing, entry and sectoral conditions"],
                ["Investment above an automatic cap, for example defence above 74%", "Government route", "Approval through the sector ministry and DPIIT"],
                ["Russian company with a beneficial owner from a land-border country", "May need approval", "Check Press Note 3 and the 2026 amendments"],
                ["Prohibited sector", "Not permitted", "No route"],
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

        <h2 id="sectors" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sectors that matter to Russian investors</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Defence and aerospace:</strong> automatic up to 74%, with approval above that for modern technology. Licensing and security clearance apply on top.</li>
          <li><strong>Energy, oil and gas:</strong> many activities allow 100% automatic FDI, but strategic and security considerations can slow deals. See <Link href="/russia-to-india/goods-trade-customs-and-eaeu-fta" className="text-blue-800 font-semibold hover:underline">goods, trade and procurement</Link>.</li>
          <li><strong>Nuclear:</strong> reserved for the State; supply chains and services follow separate rules.</li>
          <li><strong>Pharmaceuticals, fertilisers, mining and engineering:</strong> check the sector entry and conditions; brownfield pharma has its own rules.</li>
          <li><strong>Technology and services:</strong> mostly 100% automatic, with data and licence conditions. See <Link href="/russia-to-india/data-protection-152fz-dpdp" className="text-blue-800 font-semibold hover:underline">data protection</Link>.</li>
        </ul>

        <h2 id="beneficial" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Beneficial ownership and the land-border test</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian rules look through the ownership chain. If a Russian company is owned partly by a citizen or
          entity of China or another land-border country, the investment can fall under Press Note 3 depending
          on the percentage and control. Prepare an ownership chart to the ultimate natural persons for the
          bank, the RBI and any approval file.
        </p>

        <h2 id="practical" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The practical obstacles</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Sanctions screening by Indian banks, auditors and counterparties. See <Link href="/russia-to-india/sanctions-and-payments-for-russian-companies" className="text-blue-800 font-semibold hover:underline">sanctions and payments</Link>.</li>
          <li>Whether the Russian remitting bank can send funds to India and the Indian bank will accept them.</li>
          <li>Russian outbound investment controls. See <Link href="/russia-to-india/russian-parent-obligations" className="text-blue-800 font-semibold hover:underline">Russian parent obligations</Link>.</li>
          <li>Clear documentation of source of funds and ownership.</li>
          <li>Reputational and commercial reactions of Indian partners with US or EU exposure.</li>
        </ul>

        <h2 id="next" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Next steps</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Confirm the sector, the route and the ownership chart, then plan banking and sanctions before
          incorporating. See{" "}
          <Link href="/russia-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">incorporation steps</Link>{" "}
          and{" "}
          <Link href="/russia-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.
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

        <GuideServiceBox path="/russia-to-india/india-fdi-rules-for-russian-companies" />
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
            { label: "DPIIT: Department for Promotion of Industry and Internal Trade", href: "https://dpiit.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
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
        title="Which FDI Route Applies to You?"
        description="Tell us the sector and the full ownership chain, and we'll confirm the route, any cap or approval, and the filings."
      />
    </main>
  )
}
