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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/india-china-dtaa"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "rates", label: "Tax rates table" },
  { id: "pe", label: "Permanent establishment (Article 5)" },
  { id: "profits", label: "Business profits and the Indian subsidiary" },
  { id: "gains", label: "Share gains and other income" },
  { id: "employment", label: "Employment income (Article 15)" },
  { id: "relief", label: "Relief from double taxation (Article 23)" },
  { id: "claim", label: "How to claim treaty rates" },
  { id: "trc-china", label: "The Chinese tax residency certificate" },
  { id: "credit-china", label: "How China credits Indian tax" },
  { id: "example-china", label: "Worked example: technical fees to a Chinese parent" },
  { id: "abuse", label: "Anti-abuse rules" },
  { id: "map", label: "Disputes and information exchange" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is there a tax treaty between India and China?", a: "Yes. It was signed on 18 July 1994 and came into force in November 1994, and has been amended by protocols, including one signed on 26 November 2018." },
  { q: "What is the Indian withholding rate on dividends paid to a Chinese parent under the treaty?", a: "10% of the gross amount, on receipt of the Chinese tax residence certificate, Form 41 and other declarations." },
  { q: "What is the treaty rate on royalties and technical fees?", a: "10% of the gross amount under Article 12, where the Chinese company is the beneficial owner and has no PE in India connected with the payment." },
  { q: "When does a Chinese company have a permanent establishment in India?", a: "Through a fixed place of business, a building site or installation project over 183 days, services through personnel for more than 183 days in a year, or a dependent agent who concludes contracts. Confirm the exact text for your facts." },
  { q: "Who gives relief from double tax?", a: "China gives a credit for Indian tax paid on income taxable in India under the treaty, subject to Chinese rules and limits. Keep the Withholding Tax certificate." },
  { q: "Does the treaty exempt share gains?", a: "Sources differ on Article 13. Domestic law taxes long-term gains on unlisted shares at 12.5%. Confirm the treaty position with the official text before planning an exit." },
  { q: "Do I need a certificate from the Chinese tax office?", a: "Yes. A certificate of tax residence is the basic document for the treaty claim, together with Form 41 and a no-PE declaration." },
  { q: "Does Press Note 3 apply even though a treaty exists?", a: "Yes. The treaty deals with tax. Press Note 3 is a separate foreign investment approval rule and applies whatever the treaty says." },
  { q: "Where can I read the treaty text?", a: "On the Income Tax Department of India website under tax treaties, and the Chinese State Taxation Administration site. Use the consolidated version with all protocols." },
]

const relatedCards = [
  { title: "Press Note 3 for Chinese Companies: When Government Approval Is Needed and What the 2026 Easing Changes", desc: "How India's Press Note 3 (2020) applies to a Chinese parent: prior government approval for investors incorporated in China, the 2026 easing for passive minority land-border ownership, the control test, the 60-day sectors, director clearance and planning.", href: "/china-to-india/india-press-note-3-and-chinese-investors" },
  { title: "Getting Money Out of India to a Chinese Parent: Dividends, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a Chinese parent receives money from an Indian subsidiary: 10% treaty withholding, Section 393, Forms 41, 145 and 146, Chinese tax credit, scrutiny of related-party payments and the documents banks ask for.", href: "/china-to-india/repatriating-profits" },
  { title: "Chinese Employees in India: Tax Under the Treaty, Provident Fund as an International Worker and Cost Planning", desc: "What a Chinese employer must plan for staff in India: the 183-day treaty test, Section 392 salary tax, residence rules, EPF contributions for international workers, the lack of a social security agreement and secondment contracts.", href: "/china-to-india/chinese-employees-in-india" },
  { title: "Transfer Pricing Between a Chinese Parent and an Indian Subsidiary: Pricing Components, Equipment and Technology", desc: "How transfer pricing works between China and India: Indian arm's length rules and Form 48, pricing of components, equipment and technology, customs value, Chinese documentation, advance pricing agreements and disputes.", href: "/china-to-india/transfer-pricing" },
]

export default function IndiaChinaDtaaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="India-China Double Taxation Avoidance Agreement Explained: Rates, Permanent Establishment and Relief for a Chinese Parent"
        description="The India-China DTAA explained for a Chinese parent: 10% rates on dividends, interest, royalties and technical fees, permanent establishment rules, business profits, share gains, employment income, relief from double tax and how to claim treaty rates."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "India-China DTAA: Article-by-Article Guide with Tax Rates, PE and Relief" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: DTAA"
        title="India-China Double Taxation Avoidance Agreement Explained: Rates, Permanent Establishment and Relief for a Chinese Parent"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The India-China treaty was signed in New Delhi on 18 July 1994 and entered into force in November
          1994. Read with India as the source state and China as the residence state, it caps Indian tax on
          dividends, interest, royalties and fees for technical services at 10% of the gross amount, taxes
          business profits in India only if the Chinese company has a permanent establishment there, and allows
          China to give credit for the Indian tax. Protocols, including one signed on 26 November 2018, updated
          the exchange of information and other provisions. Confirm the current consolidated text and the effect
          of the Multilateral Instrument before you rely on any clause.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="india-dtaa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Signed / in force", "18 July 1994 (New Delhi) / November 1994"],
                ["Protocols", "26 November 2018 (exchange of information, with later amendments reported); confirm the current consolidated text"],
                ["Dividends", "10% of the gross amount"],
                ["Interest", "10%; exempt in the source state for specified government bodies, central banks and wholly state-owned financial institutions, as reported"],
                ["Royalties and fees for technical services", "10% (Article 12); fees cover managerial, technical or consultancy services"],
                ["Permanent establishment", "Fixed place; building site or installation project and services through employees over 183 days, as reported"],
                ["Business profits", "Taxed in India only to the extent attributable to a PE"],
                ["Claim documents", "Chinese tax residence certificate, Form 41, no-PE declaration and, where needed, beneficial ownership evidence"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="rates" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax rates table</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Article</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Income</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treaty rate on payments from India to China</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian domestic position for comparison</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Article 10", "Dividends", "10% of the gross amount", "About 20% plus surcharge and cess for a non-resident company"],
                ["Article 11", "Interest", "10%; exemptions for specified government and central bank lenders", "About 20% plus surcharge and cess; ECB cost limits also apply"],
                ["Article 12", "Royalties", "10% of the gross amount", "Domestic rate under Section 393 of the Income-tax Act, 2025; confirm the current rate"],
                ["Article 12", "Fees for technical services", "10% of the gross amount (managerial, technical or consultancy services)", "Domestic rate under Section 393; confirm the current rate"],
                ["Article 7", "Business profits without a PE", "Not taxable in India", "Taxable in India if business connection, subject to the treaty"],
                ["Article 7", "Business profits of a PE", "Taxed in India on profits attributable to the PE", "About 35% plus surcharge and cess for a foreign company"],
                ["Article 13", "Capital gains", "See the share-gains note below", "12.5% for unlisted shares held more than 24 months"],
                ["Article 14", "Independent professional services", "Not taxable in India without a fixed base or 183 days' stay", "Taxable under the Act"],
                ["Article 15", "Salary of a Chinese resident", "Not taxable in India for up to 183 days if three conditions are met", "Taxable on work done in India"],
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

        <h2 id="pe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Permanent establishment (Article 5)</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Fixed place:</strong> a place of management, branch, office, factory or workshop is a PE, along with mines and other places of extraction.</li>
          <li><strong>Building site or installation project:</strong> a PE if it lasts more than 183 days, with aggregation rules for connected periods, according to the protocol summaries.</li>
          <li><strong>Services PE:</strong> furnishing services through employees or other personnel in India for more than 183 days (within a fiscal year, as reported) can create a PE. Technical services are treated separately under Article 12. Check the exact text before relying on the reading.</li>
          <li><strong>Agent PE:</strong> a dependent agent who habitually concludes contracts for the Chinese company can create a PE; an independent agent acting in the ordinary course does not.</li>
          <li><strong>Subsidiary:</strong> an Indian subsidiary is a separate entity and is not a PE of the parent by itself, but it becomes one if it is a fixed place of the parent or acts as a dependent agent.</li>
          <li><strong>Delivery of goods:</strong> reported to have been removed from the PE definition by the protocol, which narrows the exceptions.</li>
        </ul>

        <h2 id="profits" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Business profits and the Indian subsidiary</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          An Indian private limited company owned by a Chinese parent pays Indian tax on its own profits. The
          treaty matters for what the parent receives and for any activity the parent carries out in India
          itself. Profits of a PE are taxed in India after deducting expenses for the PE. Charges between parent
          and subsidiary must pass transfer pricing. See{" "}
          <Link href="/china-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
        </p>

        <h2 id="gains" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Share gains and other income</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Secondary sources describe Article 13 differently: some say gains on property other than immovable property are taxed where the seller resides, while others say India may tax gains on shares of an Indian company. Obtain the treaty text and have your adviser confirm the reading before pricing an exit.</li>
          <li>Domestic law taxes a non-resident&apos;s long-term gain on unlisted Indian shares at 12.5% (held more than 24 months) and short-term gain at the normal rate.</li>
          <li>Interest and royalties are covered by Articles 11 and 12 above. Directors&apos; fees and artistes and sportspersons have their own articles.</li>
          <li>Pensions and government service have separate rules.</li>
        </ul>

        <h2 id="employment" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Employment income (Article 15)</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A Chinese resident working in India is taxable only in China if the stay is 183 days or less in the
          relevant period, the pay is from an employer who is not an Indian resident, and the cost is not borne
          by a PE in India. A secondee whose cost is borne by the Indian subsidiary normally fails the second
          and third tests. See{" "}
          <Link href="/china-to-india/chinese-employees-in-india" className="text-blue-800 font-semibold hover:underline">Chinese employees in India</Link>.
        </p>

        <h2 id="relief" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Relief from double taxation (Article 23)</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          China gives its resident a credit for Indian tax paid on income taxable in India under the treaty,
          capped by the Chinese tax on that income. Sources differ on the method India itself applies for Indian
          residents. The practical point for a Chinese parent is to keep the Indian Withholding Tax certificate,
          the tax payment evidence and the Indian tax return so that the credit can be claimed in China. A
          Chinese adviser must confirm the credit mechanics for dividends, including indirect credit for
          qualifying holdings.
        </p>

        <h2 id="claim" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to claim treaty rates</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>The Chinese company obtains a certificate of tax residence from the Chinese tax authority.</li>
          <li>It gives the Indian payer Form 41 (previously Form 10F), the residence certificate and a declaration of no permanent establishment in India.</li>
          <li>It confirms it is the beneficial owner of the income.</li>
          <li>The Indian payer deducts Withholding Tax at the treaty rate under Section 393 of the Income-tax Act, 2025, and deposits it by the 7th of the following month.</li>
          <li>The payer issues the certificate for the Chinese credit claim. Keep it with the Chinese tax return papers.</li>
        </ol>

        <h2 id="trc-china" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Chinese tax residency certificate</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A Chinese company claims the treaty with a <strong>tax residency certificate (TRC)</strong> issued by its local tax bureau under the State Taxation Administration. The application states the treaty, the income type and the period, so request it specifically for the India-China agreement and for the year of the Indian payments.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Provide the certificate in Chinese with an English translation; keep the company name identical to the contract and invoices.</li>
          <li>File Form 41 (previously Form 10F) on the Indian income tax portal, giving the unified social credit code as the tax identification number.</li>
          <li>Sign a beneficial ownership and no-PE declaration, and obtain an Indian PAN to avoid the higher no-PAN withholding rate.</li>
        </ul>
        <h2 id="credit-china" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How China credits Indian tax</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          China taxes resident companies on worldwide income at 25% and gives a credit for foreign tax paid. Indian withholding of 10% on royalties, technical fees or interest is generally creditable against Chinese enterprise income tax on the same income, within the credit limit. For dividends, Chinese rules also allow an indirect credit for the Indian corporate tax underlying the dividend, generally where the Chinese company directly holds at least 20% of the Indian company.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          To claim the credit, the Chinese parent needs evidence of the Indian tax paid: the TDS certificate downloaded from the Indian income tax portal, the remittance documents, and the Indian company&apos;s confirmation that the treaty rate was applied. We provide this pack with each remittance.
        </p>
        <h2 id="example-china" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Worked example: technical fees to a Chinese parent</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Chinese engineers support the start of an Indian factory, and the parent invoices the Indian subsidiary INR 80 lakh.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Question</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Answer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Treaty rate on the fee</th>
                <td className="border border-gray-300 p-3">10% under Article 12 = INR 8 lakh, if the engineers do not create a permanent establishment</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Rate without treaty documents</th>
                <td className="border border-gray-300 p-3">20% plus 4% cess = INR 16.64 lakh</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">When a PE can arise instead</th>
                <td className="border border-gray-300 p-3">If the installation or supervisory project, or the services, last beyond the treaty&apos;s time thresholds, the profit is taxed as business profits of a PE, at the foreign company rate on net income</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Transfer pricing</th>
                <td className="border border-gray-300 p-3">The fee must be at arm&apos;s length and documented in Form 48 (previously Form 3CEB)</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Remittance</th>
                <td className="border border-gray-300 p-3">Forms 145 and 146 before payment, through the Indian company&apos;s bank</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          Engineers&apos; own salaries can also become taxable in India under the employment article if they stay more than 183 days, or if the cost is borne by the Indian subsidiary. See <Link href="/china-to-india/chinese-employees-in-india" className="text-blue-800 font-semibold hover:underline">Chinese employees in India</Link>.
        </p>

        <h2 id="abuse" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Anti-abuse rules</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Secondary summaries say the protocol added a test of whether claiming treaty benefits is consistent with the treaty&apos;s object and purpose. Have your adviser confirm how this works with the Multilateral Instrument.</li>
          <li>India&apos;s General Anti-Avoidance Rule applies to arrangements whose main purpose is a tax benefit above INR 3 crore.</li>
          <li>A holding company in a third country needs real substance. A Chinese parent with a Hong Kong or Singapore intermediate holding also has to clear Press Note 3. See <Link href="/china-to-india/india-press-note-3-and-chinese-investors" className="text-blue-800 font-semibold hover:underline">Press Note 3</Link></li>
        </ul>

        <h2 id="map" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Disputes and information exchange</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The treaty provides for a mutual agreement procedure between the competent authorities and for
          exchange of information. File a case within the time limit in the treaty text and as soon as an
          adjustment is notified. Indian authorities may share information about payments and accounts with
          China under the exchange of information article.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.mofcom.gov.cn/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">MOFCOM (China)</a>,{" "}
          <a href="https://www.safe.gov.cn/en/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">SAFE (China)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/china-to-india/india-china-dtaa" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/china-to-india/faq"
          seeAllLabel="See all 147 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "Taxmanagement India: Article 12, India-China treaty", href: "https://www.taxmanagementindia.com/visitor/detail_act.asp?ID=4507" },
            { label: "Mondaq: protocol amending the India-China DTAA", href: "https://www.mondaq.com/india/tax-authorities/835932/protocol-amending-the-double-taxation-avoidance-agreement-between-india-and-china" },
          ]}
        />

        <p className="mt-6">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and Chinese
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Applying the India-China Treaty?"
        description="Tell us the payments and people moving between China and India, and we'll confirm how the treaty applies and what documents you need."
      />
    </main>
  )
}
