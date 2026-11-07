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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/exit-and-restructuring"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "routes", label: "The exit routes compared" },
  { id: "sale", label: "Selling the shares" },
  { id: "wind", label: "Winding up the company" },
  { id: "restructure", label: "Mergers, conversions and group reorganisations" },
  { id: "proceeds", label: "Getting the proceeds home" },
  { id: "traps", label: "Traps on exit" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How can a Spanish parent exit an Indian subsidiary?", a: "By selling the shares, a buyback, voluntary liquidation or strike-off, or a merger or conversion." },
  { q: "How is a gain on shares taxed in India?", a: "Long-term gains on unlisted shares held more than 24 months are taxed at 12.5%, and the treaty lets India tax a Spanish seller who holds at least 10%." },
  { q: "Is the gain taxed again in Spain?", a: "Usually largely exempt for a qualifying holding. Where not, Spain gives a credit for Indian tax. Confirm with a Spanish adviser." },
  { q: "What is the FEMA pricing rule on a sale?", a: "A sale by a non-resident to a resident cannot be above fair value, and a valuation certificate is needed." },
  { q: "Which forms are needed?", a: "FC-TRS within 60 days of the transfer, and Forms 145 and 146 for the remittance. In Spain, D-5B within one month." },
  { q: "How long does a liquidation take?", a: "Often a year or more, depending on creditors, tax clearance and approvals." },
  { q: "What is strike-off?", a: "A quicker closure for a dormant company with no liabilities and no business for two years." },
  { q: "Can I merge the Indian company into another group company?", a: "Yes, with approvals. It can be tax-neutral if the conditions are met." },
  { q: "Can I stop filing for a dormant company?", a: "No. A company that stops filing faces penalties and its directors can be disqualified. Close it properly." },
]

const relatedCards = [
  { title: "India-Spain Double Taxation Agreement Explained: 15% Dividends, 10% Royalties and Technical Fees, the 6-Month Site PE, the 10% Share-Gain Rule and the MLI", desc: "The India-Spain tax treaty explained for a Spanish parent with India as source state and Spain as residence state: dividend, interest, royalty and technical fee rates, permanent establishment, capital gains on Indian shares, credit and participation exemption, limitation of benefits, the MLI principal purpose test and how to claim relief.", href: "/spain-to-india/india-spain-dtaa" },
  { title: "Funding an Indian Subsidiary from Spain: Share Capital, Shareholder Loans, Fair Value Pricing Rules, FC-GPR, FC-TRS and the Annual FLA Return", desc: "How a Spanish parent can put money into an Indian company: equity under the Automatic Route, convertible instruments, external commercial borrowing, intra-group financing, the FEMA pricing rule, the 60-day and 30-day deadlines, the FLA return and the Spanish declarations that match.", href: "/spain-to-india/funding-and-fema" },
  { title: "Taking Money Out of India to Spain: Dividend, Management Fee, Royalty, Interest and Capital Reduction Routes Compared, with the Treaty Rate and Spanish Relief", desc: "A comparison of the five routes a Spanish parent can use to take cash from an Indian subsidiary, with the Indian withholding tax, Indian conditions, Spanish tax treatment, documents, timing and the traps in each route.", href: "/spain-to-india/repatriating-profits" },
  { title: "What a Spanish Parent Must Do at Home: Registro de Inversiones Exteriores Filings, Participation Exemption, CFC Rules and Corporate Records", desc: "The Spanish-side steps for a parent investing in India: declarations to the Registro de Inversiones Exteriores (forms D-5A and D-8), board and notarial formalities, the participation exemption, CFC rules, related-party documentation and the beneficial ownership register.", href: "/spain-to-india/spanish-parent-obligations" },
]

export default function ExitAndRestructuringPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Exiting an Indian Subsidiary: Sale of Shares, Buyback, Voluntary Liquidation, Strike-Off and Merger, with the 10% Treaty Rule, FEMA Pricing and Spanish Declarations"
        description="How a Spanish parent can sell, wind up or restructure an Indian subsidiary: the tax on share gains under the India-Spain treaty, FEMA pricing, buyback and capital reduction, liquidation and strike-off, mergers and conversions, repatriating the proceeds and the Spanish filings that close the loop."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "Exit and Restructuring from India for Spanish Groups: Share Sale, Buyback, Liquidation and Merger" },
        ]}
      />

      <GuideHero
        eyebrow="Exit: restructuring"
        title="Exiting an Indian Subsidiary: Sale of Shares, Buyback, Voluntary Liquidation, Strike-Off and Merger, with the 10% Treaty Rule, FEMA Pricing and Spanish Declarations"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Spanish parent can leave India by selling the shares, by having the company buy them back, by
          winding the company up or by merging it into another entity. A sale of unlisted shares held more than
          24 months bears long-term capital gains tax of 12.5% in India where the Spanish seller holds at least
          10%, and Spain usually exempts most of the gain for a qualifying holding. The price must not exceed
          fair value when a non-resident sells to a resident, and a valuation certificate is needed. Winding up
          has its own steps and takes longer than most groups expect. The exit also needs reporting on FC-TRS
          within 60 days, Forms 145 and 146 for the remittance and a declaration of the disposal in Spain. Plan
          the exit when you plan the entry, because the structure chosen at the start decides which routes are
          open.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="restructuring-and-exit" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Share sale", "Long-term capital gains 12.5% on unlisted shares held over 24 months; India taxes if the seller holds at least 10% under the treaty"],
                ["Pricing", "Sale by a non-resident to a resident cannot be above fair value; valuation required"],
                ["Reporting", "FC-TRS within 60 days; Forms 145 and 146 for the remittance"],
                ["Buyback", "Company law limits and tax rules; check the pricing"],
                ["Liquidation", "Voluntary liquidation or strike-off; creditors, tax clearance and auditor certificates"],
                ["Merger or conversion", "Tax-neutral routes exist in some cases; conditions apply"],
                ["Spanish side", "D-5B declaration of the disposal; participation exemption or credit"],
                ["Anti-abuse", "GAAR and the principal purpose test apply to planning"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The exit routes compared</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian tax outcome</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Main conditions</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Sale of shares to an Indian or foreign buyer", "Long-term gain 12.5% where held over 24 months and the 10% holding test is met; otherwise short-term at the foreign company rate", "Valuation; FEMA pricing; FC-TRS filing; stamp duty on transfer", "Weeks to months"],
                ["Buyback by the company", "Taxed under the buyback rules; check the current treatment", "Company law limits on amount and reserves; fair value pricing", "Several months"],
                ["Voluntary liquidation", "Gain or loss on distribution; tax clearance", "Solvency declaration; creditors; auditor certificates", "Often a year or more"],
                ["Strike-off of a dormant company", "Limited tax events", "No business for two years; no liabilities", "Several months"],
                ["Merger or demerger", "Can be tax-neutral if conditions are met", "Court or tribunal approval; FEMA rules", "Several months to a year"],
                ["Conversion to another form", "Conditions apply", "Sector and FEMA rules", "Several months"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                  <td className="border border-gray-300 p-3">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="sale" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Selling the shares</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A sale is usually the cleanest exit. For a Spanish seller with at least 10%, Article 14 of the treaty
          lets India tax the gain, so the long-term rate of 12.5% on unlisted shares held more than 24 months
          applies, and a shorter holding is taxed at the normal rate for a foreign company. The buyer must
          withhold tax, and the seller should discuss the tax computation and the certificate of lower deduction
          before closing. If the buyer is an Indian resident, the price must not be above fair value, and the
          authorised dealer bank will ask for the valuation certificate and a certificate from a Chartered
          Accountant. The buyer may defer part of the price only under conditions set by the foreign exchange
          rules, so an earn-out should be cleared in advance. See{" "}
          <Link href="/spain-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Spain then looks at the gain. A qualifying holding often benefits from the participation exemption, so
          the Indian tax is the main cost; where it does not apply, Spain taxes the gain and gives a credit for
          the Indian tax. A Spanish adviser should confirm the position before the sale. See{" "}
          <Link href="/spain-to-india/india-spain-dtaa" className="text-blue-800 font-semibold hover:underline">the treaty guide</Link>.
        </p>

        <h2 id="wind" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Winding up the company</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A solvent company can be wound up by voluntary liquidation, in which the directors declare solvency,
          creditors are paid, the liquidator realises the assets and the remaining money is distributed to the
          Spanish parent. Distribution on liquidation is taxed in the hands of the company and the shareholder
          under specific rules, and the Indian tax authorities will usually ask for a tax clearance. A dormant
          company with no liabilities can apply for strike-off instead, which is quicker and cheaper, but it
          needs a clean record of filings for the last years. Either way the bank account stays open until the
          last payment, and the Reserve Bank requires the remittance of proceeds to be supported by an
          auditor&apos;s certificate and the tax forms.
        </p>

        <h2 id="restructure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mergers, conversions and group reorganisations</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A Spanish group may want to merge the Indian company into another group company, to demerge a business
          or to move the shares to another entity in the group. These steps can be tax-neutral if the conditions
          of the Income-tax Act are met, for example on continuity of ownership and the transfer of all assets
          and liabilities, but each needs approval under company law and compliance with foreign exchange
          pricing. A transfer of the Indian shares between Spanish group companies is a transfer between
          non-residents and is reported differently from a sale to a resident, and the indirect transfer rules
          may apply if the shares of the Spanish holding company change hands. Take advice before a
          reorganisation, not after.
        </p>

        <h2 id="proceeds" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Getting the proceeds home</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Obtain the valuation certificate and the buyer&apos;s payment through the banking channel.</li>
          <li>Calculate tax and obtain any certificate of lower or nil deduction.</li>
          <li>File FC-TRS within 60 days of the transfer.</li>
          <li>File Form 145 and obtain Form 146 from a Chartered Accountant for the remittance.</li>
          <li>Remit to Spain through the authorised dealer bank.</li>
          <li>Declare the disposal to the Registro de Inversiones Exteriores on form D-5B within one month.</li>
          <li>Keep the file for the Spanish return and for any Indian assessment.</li>
        </ol>

        <h2 id="traps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Traps on exit</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Pricing above fair value on a sale to a resident.</li>
          <li>Missing the FC-TRS deadline.</li>
          <li>Assuming the participation exemption applies without checking the conditions.</li>
          <li>Forgetting stamp duty on the transfer of shares.</li>
          <li>Leaving the Indian company dormant without filing returns, which leads to penalties and director disqualification.</li>
          <li>Planning the exit around a treaty benefit that fails the principal purpose test.</li>
        </ul>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://sede.agenciatributaria.gob.es/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Agencia Tributaria (Spain)</a>,{" "}
          <a href="https://comercio.gob.es/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Spanish Ministry of Economy, Trade and Business</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/spain-to-india/exit-and-restructuring" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/spain-to-india/faq"
          seeAllLabel="See all 179 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and Spanish
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Restructuring or Exiting from Spain?"
        description="Tell us the current structure and your goal, and we'll map the ROC, tax and FEMA steps for a clean sale, buyback, merger or closure."
      />
    </main>
  )
}
