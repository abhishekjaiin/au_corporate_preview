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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/india-hong-kong-dtaa"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "rates", label: "Tax rates table" },
  { id: "pe", label: "Permanent establishment (Article 5)" },
  { id: "gains", label: "Share gains" },
  { id: "abuse", label: "Anti-abuse: the principal purpose test" },
  { id: "claim", label: "How to claim treaty rates" },
  { id: "trc-hk", label: "The Hong Kong certificate of resident status" },
  { id: "dividends-hk", label: "The 5% dividend rate, and why it is final" },
  { id: "holdco-hk", label: "Using a Hong Kong company to hold the Indian subsidiary" },
  { id: "hk", label: "The Hong Kong side" },
  { id: "map", label: "Disputes and information exchange" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is there a tax treaty between India and Hong Kong?", a: "Yes. It was signed on 19 March 2018, entered into force on 30 November 2018 and applies in India from 1 April 2019." },
  { q: "What is the Indian withholding rate on dividends paid to a Hong Kong parent?", a: "5% of the gross amount under the treaty, if the beneficial owner is a Hong Kong resident and the paperwork is in place. The domestic rate is higher." },
  { q: "What are the treaty rates on interest, royalties and technical fees?", a: "10% of the gross amount for each, with 0% on interest paid to the government, the RBI and designated bodies such as the HKMA." },
  { q: "When does a Hong Kong company have a permanent establishment in India?", a: "Through a fixed place, a building site or installation over six months, services through personnel for more than 183 days in any 12-month period, or a dependent agent." },
  { q: "Are gains on Indian shares taxable in India for a Hong Kong seller?", a: "Yes. Summaries of the treaty say gains on shares of an Indian company are taxable in India, and Hong Kong does not tax capital gains in general." },
  { q: "What is the principal purpose test?", a: "A rule that denies a treaty benefit if obtaining it was one of the principal purposes of an arrangement and granting it would be contrary to the treaty's object and purpose." },
  { q: "Does the treaty remove the need for Press Note 3 approval?", a: "No. The treaty deals with tax. Press Note 3 is a separate foreign investment approval rule." },
  { q: "What documents prove treaty eligibility?", a: "A Tax Residency Certificate from the Hong Kong Inland Revenue Department, Form 41, and a declaration of beneficial ownership and no PE." },
  { q: "How long do I have to bring a mutual agreement case?", a: "Three years from the first notification of the action that gives rise to the taxation, under Article 25." },
]

const relatedCards = [
  { title: "Press Note 3 for Hong Kong Companies: Approval for Hong Kong-Registered Investors and What the 2026 Easing Does Not Change", desc: "How India's Press Note 3 applies to a Hong Kong parent: the March 2026 government statement that Hong Kong-registered firms still need prior approval, the 10% passive-ownership easing for other investors, the approval route, and planning for regional headquarters.", href: "/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" },
  { title: "Getting Money Out of India to a Hong Kong Parent: Dividends at 5%, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a Hong Kong parent receives money from an Indian subsidiary: 5% treaty withholding on dividends, 10% on interest, royalties and fees, Section 393, Forms 41, 145 and 146, Hong Kong tax treatment and the documents banks ask for.", href: "/hong-kong-to-india/repatriating-profits" },
  { title: "Hong Kong Employees in India: Salary Tax, the MPF Position and EPF for International Workers", desc: "What a Hong Kong employer must plan for staff in India: Indian salary tax and the treaty day-count test, Hong Kong salaries tax, MPF, EPF for international workers because there is no social security agreement, and secondment contracts.", href: "/hong-kong-to-india/hong-kong-employees-in-india" },
  { title: "Hong Kong as a Regional Headquarters for India: Holding Company, Trading Hub, Treasury and the Principal Purpose Test", desc: "How groups use a Hong Kong company as a regional holding, trading or treasury hub for India, the substance Indian and Hong Kong tax authorities expect, the treaty principal purpose test, Press Note 3 limits and alternatives.", href: "/hong-kong-to-india/hong-kong-as-regional-hub-for-india" },
]

export default function IndiaHongKongDtaaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="India-Hong Kong Double Taxation Agreement Explained: 5% Dividends, 10% Royalties and Fees, PE Rules and the Principal Purpose Test"
        description="The India-Hong Kong tax treaty explained for a Hong Kong parent: 5% dividend rate, 10% interest, royalties and fees for technical services, permanent establishment rules, share gains, anti-abuse tests and how to claim treaty rates."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "India-Hong Kong DTAA: Article-by-Article Guide with Tax Rates, PE and Anti-Abuse Test" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: DTAA"
        title="India-Hong Kong Double Taxation Agreement Explained: 5% Dividends, 10% Royalties and Fees, PE Rules and the Principal Purpose Test"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The India-Hong Kong comprehensive tax treaty was signed on 19 March 2018, entered into force on 30
          November 2018 and applies in India from the financial year starting 1 April 2019. Read with India as
          the source state and Hong Kong as the residence state, it caps Indian tax at 5% on dividends (the
          beneficial owner must be a Hong Kong resident) and 10% on interest, royalties and fees for technical
          services, taxes business profits in India only through a permanent establishment, and taxes gains on
          Indian shares in India. A principal purpose test sits in the income articles, so a Hong Kong company
          that is merely a conduit may lose the benefit. Confirm the current treaty text before relying on any
          clause.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="india-dtaa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Signed / in force", "19 March 2018 / 30 November 2018; applies in India from 1 April 2019"],
                ["Dividends (Article 10)", "5% of the gross amount; beneficial owner must be a Hong Kong resident"],
                ["Interest (Article 11)", "10%; 0% for the government, the RBI and designated bodies such as the Hong Kong Monetary Authority"],
                ["Royalties (Article 12)", "10%"],
                ["Fees for technical services (Article 13)", "10%"],
                ["Permanent establishment (Article 5)", "Building site or installation over 6 months; service PE over 183 days in any 12-month period; dependent agent"],
                ["Capital gains (Article 14)", "Gains on shares of an Indian company taxable in India; property-rich companies taxed where the property lies"],
                ["Anti-abuse", "Principal purpose test in the dividend, interest, royalty, technical fees and gains articles, and a general rule in Article 28"],
                ["Disputes", "Mutual agreement procedure: three years from first notification (Article 25)"],
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
                <th scope="col" className="border border-gray-300 p-3 text-left">Treaty rate on payments from India to Hong Kong</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Article 10", "Dividends", "5% of the gross amount", "Beneficial owner must be a Hong Kong resident; no minimum shareholding is stated in the summaries; principal purpose test applies"],
                ["Article 11", "Interest", "10% of the gross amount", "0% for the Indian or Hong Kong government, the RBI and designated bodies such as the HKMA"],
                ["Article 12", "Royalties", "10% of the gross amount", "Beneficial owner and no PE connection required"],
                ["Article 13", "Fees for technical services", "10% of the gross amount", "A separate article from royalties"],
                ["Article 7", "Business profits", "Taxed in India only to the extent attributable to a PE", "Net basis for PE income"],
                ["Article 14", "Capital gains", "Shares of an Indian company: taxable in India", "Domestic law sets the rate; 12.5% for unlisted shares held more than 24 months"],
                ["Article 8", "Shipping and air transport", "Source country may tax at 50% of its normal rate, as reported", "Check the article for the exact scope"],
                ["Article 15", "Salary of a Hong Kong resident", "Standard day-count test; confirm the period and conditions in the treaty text", "See the employees guide"],
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
          <li><strong>Fixed place:</strong> a place of management, branch, office, factory or workshop creates a PE.</li>
          <li><strong>Building site or installation project:</strong> a PE if it lasts more than six months.</li>
          <li><strong>Service PE:</strong> furnishing services through employees or other personnel in India for more than 183 days within any 12-month period creates a PE, with connected projects aggregated.</li>
          <li><strong>Dependent agent:</strong> an agent who habitually concludes contracts, keeps stock for regular delivery or habitually secures orders for the enterprise can create a PE.</li>
          <li><strong>Subsidiary:</strong> an Indian subsidiary is not a PE of the parent by itself, but can become one if it acts as a dependent agent or is the parent&apos;s fixed place.</li>
          <li><strong>Hub models:</strong> Hong Kong trading and sourcing companies that send staff to India should watch the 183-day test and agent rules. See <Link href="/hong-kong-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
        </ul>

        <h2 id="gains" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Share gains</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Summaries of the treaty place share gains in Article 14 and say that gains on shares of an Indian
          company are taxable in India. Hong Kong does not tax capital gains generally, so the Indian tax is the
          main cost on an exit. Domestic law taxes a non-resident&apos;s long-term gain on unlisted Indian
          shares at 12.5% (held more than 24 months), and a short-term gain at the normal rate. See{" "}
          <Link href="/hong-kong-to-india/exit-and-restructuring" className="text-blue-800 font-semibold hover:underline">exit and restructuring</Link>.
        </p>

        <h2 id="abuse" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Anti-abuse: the principal purpose test</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The dividend, interest, royalty, technical services and capital gains articles contain a principal purpose test. A benefit is denied if obtaining it was one of the principal purposes of the arrangement and granting it would be contrary to the treaty&apos;s object and purpose.</li>
          <li>A Hong Kong company needs commercial reasons and real substance: board decisions, people, premises and spend in Hong Kong. A letterbox holding company is exposed.</li>
          <li>India&apos;s General Anti-Avoidance Rule can apply where the arrangement&apos;s main purpose is a tax benefit above INR 3 crore.</li>
          <li>Summaries of the treaty say the Multilateral Instrument does not modify it. Have your adviser confirm.</li>
          <li>The 5% dividend rate is the main attraction. Press Note 3 approval, not the treaty, is the gating issue for most Hong Kong investors. See <Link href="/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" className="text-blue-800 font-semibold hover:underline">Press Note 3 and Hong Kong entities</Link>.</li>
        </ul>

        <h2 id="claim" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to claim treaty rates</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>The Hong Kong company obtains a Tax Residency Certificate from the Inland Revenue Department.</li>
          <li>It gives the Indian payer Form 41 (previously Form 10F), the certificate and a self-declaration of beneficial ownership and no PE in India.</li>
          <li>The Indian payer deducts Withholding Tax at the treaty rate under Section 393 of the Income-tax Act, 2025, and deposits it by the 7th of the following month.</li>
          <li>The payer issues the certificate, which the Hong Kong company keeps for its Hong Kong return and any credit claim.</li>
        </ol>

        <h2 id="trc-hk" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Hong Kong certificate of resident status</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          To claim the treaty, a Hong Kong company needs a <strong>certificate of resident status</strong>, Hong Kong&apos;s tax residency certificate (TRC), issued by the Inland Revenue Department (IRD). For a company, the IRD looks at whether it is normally managed or controlled in Hong Kong, so the application asks where the board meets, where directors live, and whether the company has an office, staff and real operations in Hong Kong.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A company incorporated in Hong Kong but managed from elsewhere may be refused, so holding companies with no Hong Kong substance should check before relying on the treaty.</li>
          <li>Certificates are issued for a specific year of assessment; request one covering the period of the Indian payments.</li>
          <li>Filing Form 41 (previously Form 10F) on the Indian income tax portal and giving a beneficial ownership and no-PE declaration completes the Indian paperwork.</li>
        </ul>
        <h2 id="dividends-hk" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The 5% dividend rate, and why it is final</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The India-Hong Kong treaty caps Indian tax on dividends at 5%, lower than the dividend rates in India&apos;s treaties with Singapore, China or Japan. Interest, royalties and fees for technical services are capped at 10%.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Payment from India to a Hong Kong resident</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treaty cap</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Domestic rate without treaty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividends</th>
                <td className="border border-gray-300 p-3">5%</td>
                <td className="border border-gray-300 p-3">20% plus surcharge and 4% cess</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Interest</th>
                <td className="border border-gray-300 p-3">10%</td>
                <td className="border border-gray-300 p-3">20% plus surcharge and cess</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Royalties</th>
                <td className="border border-gray-300 p-3">10%</td>
                <td className="border border-gray-300 p-3">20% plus surcharge and cess</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Fees for technical services</th>
                <td className="border border-gray-300 p-3">10%</td>
                <td className="border border-gray-300 p-3">20% plus surcharge and cess</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          Hong Kong does not tax dividends received and does not withhold tax on dividends paid onward, so the 5% Indian tax is usually the only tax on the profit flow, and there is nothing in Hong Kong to credit it against. On an INR 1 crore dividend, Indian tax is INR 5 lakh with the treaty, against about INR 20.8 lakh or more without it.
        </p>
        <h2 id="holdco-hk" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Using a Hong Kong company to hold the Indian subsidiary</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The low dividend rate makes Hong Kong a common holding location for groups investing in India. Three tests decide whether the structure works:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Substance for the TRC.</strong> The Hong Kong company must be managed and controlled in Hong Kong, as above.</li>
          <li><strong>The principal purpose test.</strong> Indian tax officers can deny treaty benefits if obtaining them was one of the principal purposes of the arrangement. A Hong Kong company that manages the group&apos;s Asian business, with staff and decision-making there, is far easier to defend than a shell.</li>
          <li><strong>Press Note 3.</strong> If the ultimate owner is Chinese, or a resident or citizen of another country sharing a land border with India, every Indian investment through the Hong Kong company needs Government of India approval. See <Link href="/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" className="text-blue-800 font-semibold hover:underline">Press Note 3 and Hong Kong entities</Link>.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-10">
          Capital gains are a further point: India can tax gains on the sale of shares of an Indian company under the treaty, so an exit through the Hong Kong company does not escape Indian capital gains tax.
        </p>

        <h2 id="hk" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Hong Kong side</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Hong Kong taxes profits arising in or derived from Hong Kong. Indian-source dividends received by a Hong Kong company may be exempt if they are not Hong Kong-sourced, but the foreign-sourced income exemption regime for multinational groups can deem certain foreign dividends, interest, gains and IP income to be received in Hong Kong unless economic substance or participation conditions are met. This is for your Hong Kong adviser.</li>
          <li>Summaries note that the foreign tax credit under the treaty is limited to the Hong Kong profits tax payable on the same income.</li>
          <li>Hong Kong does not levy withholding tax on dividends and interest paid to non-residents; royalties are subject to a withholding tax at an effective rate of 4.95% in the summaries.</li>
        </ul>

        <h2 id="map" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Disputes and information exchange</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The mutual agreement procedure allows a case to be presented within three years of the first
          notification of the action that gives rise to taxation not in line with the treaty. The treaty also
          provides for exchange of information. Keep the transfer pricing files of both jurisdictions aligned.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.ird.gov.hk/eng/welcome.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Inland Revenue Department (Hong Kong)</a>,{" "}
          <a href="https://www.cr.gov.hk/en/home/index.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Companies Registry (Hong Kong)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/hong-kong-to-india/india-hong-kong-dtaa" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/hong-kong-to-india/faq"
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
            { label: "Beacon Filing: India-Hong Kong DTAA", href: "https://beaconfiling.com/dtaa/india-hong-kong-dtaa" },
            { label: "EY: Hong Kong-India income tax treaty enters into force", href: "https://globaltaxnews.ey.com/news/2018-6414-hong-kong-india-income-tax-treaty-enters-into-force" },
            { label: "Inland Revenue Department (Hong Kong)", href: "https://www.ird.gov.hk/eng/welcome.htm" },
          ]}
        />

        <p className="mt-6">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and Hong Kong
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Applying the India-Hong Kong Treaty?"
        description="Tell us the payments and people moving between Hong Kong and India, and we'll confirm how the treaty applies and what documents you need."
      />
    </main>
  )
}
