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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/india-spain-dtaa"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "why", label: "Why this treaty matters to a Spanish investor" },
  { id: "rates", label: "Tax rates table, article by article" },
  { id: "dividends", label: "Dividends: the flat 15% and what it does to your cash plan" },
  { id: "interest-royalty", label: "Interest, royalties and technical fees" },
  { id: "pe", label: "Permanent establishment under Article 5" },
  { id: "gains", label: "Gains on shares: the 10% threshold and what Spain does with the gain" },
  { id: "relief", label: "How Spain gives relief" },
  { id: "abuse", label: "Anti-abuse rules: limitation of benefits, the principal purpose test and GAAR" },
  { id: "claim", label: "How to claim treaty rates, step by step" },
  { id: "spain-side", label: "The Spanish side in brief" },
  { id: "map", label: "Disputes, information exchange and the MFN clause" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is there a tax treaty between India and Spain?", a: "Yes. It was signed on 8 February 1993 and entered into force on 12 January 1995, was amended by a 2012 Protocol, and is modified by the Multilateral Instrument." },
  { q: "What is the Indian withholding tax on dividends paid to a Spanish parent?", a: "15% of the gross amount under the treaty, flat, if the Spanish company is the beneficial owner and holds the paperwork on the payment date. The domestic rate is about 20% plus surcharge and cess." },
  { q: "Why is the royalty and technical fee rate 10% when the treaty text says otherwise?", a: "The 10% comes through the most-favoured-nation clause, which imports the lower India-Germany rate. India gave effect to it by Notification 33/2024, applying from assessment year 2024-25. Keep a copy of the notification." },
  { q: "When does a building or installation site become a permanent establishment?", a: "After more than six months. The treaty has no separate clause that turns services by employees into a permanent establishment after a set number of days." },
  { q: "Are gains on Indian shares taxable in India for a Spanish seller?", a: "If the seller held at least 10%, India may tax the gain, at 12.5% for unlisted shares held more than 24 months. For holdings below 10% the residual rule leaves the gain taxable only in Spain." },
  { q: "Does Spain tax the dividend again?", a: "Usually not for a qualifying holding, because the Spanish participation exemption removes most of the dividend from Spanish tax. Where it does not apply, Spain gives a credit for Indian tax up to the Spanish tax on that income." },
  { q: "What documents prove treaty eligibility?", a: "A tax residency certificate from the Agencia Tributaria, Form 41, a beneficial ownership declaration and a no-PE declaration, plus a note on the MFN clause where the 10% rate is claimed." },
  { q: "Does the principal purpose test affect Spanish groups?", a: "Yes. It has applied to Spain since 1 January 2022. A Spanish company with real people and decisions is at low risk; a pass-through company with no substance is exposed." },
  { q: "Does the treaty remove the need for any Indian approval?", a: "No. It deals only with tax. India's foreign investment rules, RBI reporting and sector caps apply separately." },
  { q: "Can I get relief if the wrong rate was deducted?", a: "You can claim a refund through the Indian return, but it is slow. It is far easier to hold the documents before the payment date." },
]

const relatedCards = [
  { title: "Taking Money Out of India to Spain: Dividend, Management Fee, Royalty, Interest and Capital Reduction Routes Compared, with the Treaty Rate and Spanish Relief", desc: "A comparison of the five routes a Spanish parent can use to take cash from an Indian subsidiary, with the Indian withholding tax, Indian conditions, Spanish tax treatment, documents, timing and the traps in each route.", href: "/spain-to-india/repatriating-profits" },
  { title: "Spanish Employees Working in India: Indian Salary Tax, Spain's Exemption for Work Abroad, EPF for International Workers and Double Contributions", desc: "What a Spanish employer must plan when staff work in India: Indian salary tax and the treaty test, the Spanish IRPF exemption for work abroad, Indian provident fund rules for international workers, Spanish social security for posted staff, and secondment contracts.", href: "/spain-to-india/spanish-employees-in-india" },
  { title: "Transfer Pricing for an Indian Subsidiary of a Spanish Group: Arm's Length Rules, Form 3CEB, Local File, Services, Royalties and Loans, and Spain's Own Documentation", desc: "How India and Spain test related-party prices: methods, thresholds, Form 3CEB, the master and local files, intra-group services and royalties, loans, safe harbours, advance pricing agreements, audits and the match between Indian and Spanish files.", href: "/spain-to-india/transfer-pricing" },
  { title: "Exiting an Indian Subsidiary: Sale of Shares, Buyback, Voluntary Liquidation, Strike-Off and Merger, with the 10% Treaty Rule, FEMA Pricing and Spanish Declarations", desc: "How a Spanish parent can sell, wind up or restructure an Indian subsidiary: the tax on share gains under the India-Spain treaty, FEMA pricing, buyback and capital reduction, liquidation and strike-off, mergers and conversions, repatriating the proceeds and the Spanish filings that close the loop.", href: "/spain-to-india/exit-and-restructuring" },
]

export default function IndiaSpainDtaaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="India-Spain Double Taxation Agreement Explained: 15% Dividends, 10% Royalties and Technical Fees, the 6-Month Site PE, the 10% Share-Gain Rule and the MLI"
        description="The India-Spain tax treaty explained for a Spanish parent with India as source state and Spain as residence state: dividend, interest, royalty and technical fee rates, permanent establishment, capital gains on Indian shares, credit and participation exemption, limitation of benefits, the MLI principal purpose test and how to claim relief."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "India-Spain DTAA: Article-by-Article Guide with Tax Rates, PE, Share Gains and Anti-Abuse Rules" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: DTAA"
        title="India-Spain Double Taxation Agreement Explained: 15% Dividends, 10% Royalties and Technical Fees, the 6-Month Site PE, the 10% Share-Gain Rule and the MLI"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The India-Spain tax treaty was signed on 8 February 1993 and entered into force on 12 January 1995,
          and it has since been amended by a 2012 Protocol and modified by the Multilateral Instrument. Read
          with India as the source state and Spain as the residence state, it limits Indian withholding tax to
          15% on dividends and interest, and to 10% on royalties and fees for technical services (the 10% comes
          through the most-favoured-nation clause and the India-Germany treaty, applied from assessment year
          2024-25). A building or installation site creates a permanent establishment only after six months, and
          the treaty has no separate services permanent establishment clause. On exit, gains on shares of an
          Indian company can be taxed in India only where the Spanish seller holds at least 10%; smaller
          holdings are taxed only in Spain. Spain then relieves Indian tax by credit and, for qualifying
          holdings, by its participation exemption. Treat the figures here as a guide from secondary summaries
          and confirm them against the treaty text and the current Indian notification before you pay or file.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="india-dtaa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Signed / in force", "8 February 1993 / 12 January 1995; amended by a 2012 Protocol; modified by the MLI (in effect for India from 1 October 2019 and for Spain from 1 January 2022)"],
                ["Dividends (Article 11)", "15% of the gross amount, flat, whatever the size of the shareholding"],
                ["Interest (Article 12)", "15%; 0% where the recipient is the Spanish Government, a political subdivision or the central bank"],
                ["Royalties and fees for technical services (Article 13)", "10% of the gross amount, through the most-favoured-nation clause and the India-Germany treaty, from assessment year 2024-25 (Notification 33/2024)"],
                ["Permanent establishment (Article 5)", "Fixed place of business; building, construction or assembly project over six months; no separate services PE clause; usual exclusions for storage, display, delivery, purchasing and auxiliary work"],
                ["Capital gains (Article 14)", "Shares in an Indian company can be taxed in India if the Spanish seller holds at least 10%; other share gains only in Spain; property-rich companies and real estate taxed where the property is"],
                ["Relief in Spain", "Credit for Indian tax up to the Spanish tax on the same income, and the Spanish participation exemption for qualifying holdings"],
                ["Anti-abuse", "Limitation of benefits article added by the 2012 Protocol; MLI principal purpose test; Indian General Anti-Avoidance Rule"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why this treaty matters to a Spanish investor</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A Spanish group that owns an Indian company meets the treaty at four moments. The first is when the
          subsidiary pays money upwards: dividends, interest on a shareholder loan, a royalty for a brand or
          know-how, or a fee for technical or management services. The second is when Spanish employees or
          engineers work in India long enough to raise the question of a permanent establishment. The third is
          on exit, when shares are sold and India and Spain each claim a share of the gain. The fourth is every
          year in between, when Spain asks for evidence of the Indian tax paid so that it can give relief. A
          treaty read once at the planning stage and then forgotten is the commonest cause of avoidable
          withholding tax at the full domestic rate of about 20% plus surcharge and cess.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Two features make the Spanish treaty different from the ones many advisers carry in their heads. The
          dividend rate is a flat 15% with no lower tier for large shareholders, so it is higher than the 10%
          that appears in several newer Indian treaties. And the 10% rate for royalties and technical fees is
          not written into the Spanish treaty at all: it arrives through the most-favoured-nation clause, which
          imports a lower rate agreed with another OECD member, and Indian tax authorities gave effect to it by
          notification in March 2024. A Spanish group relying on it should keep a copy of the notification and a
          short note on why the clause applies.
        </p>

        <h2 id="rates" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax rates table, article by article</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Article</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Income</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treaty rate on payments from India to Spain</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Domestic comparison and conditions</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Article 11", "Dividends", "15% of the gross amount, flat", "Domestic rate on dividends to non-residents is about 20% plus surcharge and cess. The recipient must be the beneficial owner and a Spanish tax resident"],
                ["Article 12", "Interest, general", "15% of the gross amount", "Domestic rate is about 20% plus surcharge and cess for most loans; check the lower special rates for some foreign-currency borrowings"],
                ["Article 12", "Interest paid to the Spanish Government, a political subdivision or the central bank", "0%", "Applies to the listed bodies only, not to commercial banks"],
                ["Article 13", "Royalties", "10% of the gross amount", "Reached through the MFN clause; the royalty must be for the use of, or the right to use, the property or know-how and the recipient must be the beneficial owner"],
                ["Article 13", "Fees for technical services", "10% of the gross amount", "Same MFN route and notification; managerial, technical and consultancy services are the usual scope"],
                ["Article 7", "Business profits", "Taxed in India only to the extent attributable to a permanent establishment", "Net basis; no tax if there is no PE"],
                ["Article 14", "Gains on shares of an Indian company", "Taxable in India only if the Spanish seller holds at least 10%; otherwise only in Spain", "Domestic law then sets the rate: 12.5% on unlisted shares held more than 24 months"],
                ["Article 14", "Gains on real estate and on property-rich companies", "Taxable where the property is", "India taxes shares that derive their principal value from Indian immovable property"],
                ["Article 14", "Ships and aircraft in international traffic", "Taxable only in Spain", "Relevant to shipping and aviation groups only"],
                ["Dependent personal services", "Salary of a Spanish resident working in India", "Taxable in India unless the day-count and employer conditions are met", "Confirm the days and conditions in the text; see the employees guide"],
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

        <h2 id="dividends" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Dividends: the flat 15% and what it does to your cash plan</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Under Article 11 Indian tax on a dividend paid to a Spanish resident who is the beneficial owner
          cannot exceed 15% of the gross amount. The treaty gives no reduced rate for a parent with a large
          stake, so a wholly owned subsidiary and a 5% minority investor are taxed at the same rate. Compare
          that with the domestic rate of about 20% plus surcharge and cess and the saving is real but modest.
          Because Spain exempts most of the dividend from its own corporate income tax for a qualifying holding,
          the Indian 15% is usually the only tax suffered on the cash, which makes it a cost to plan for rather
          than a credit to recover.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Two practical points follow. First, treaty relief is claimed at the moment of payment, not afterwards:
          the Indian company deducts tax at the treaty rate only if it holds the paperwork on the payment date.
          If it does not, it must deduct at the domestic rate and the Spanish parent can then recover the excess
          only through a refund claim, which is slow. Second, a dividend must come out of distributable profits
          after audit. A subsidiary that is in its first loss-making years will pay no dividend at all, so cash
          for a Spanish parent will normally come first through service fees, royalties or loan interest, each
          of which has its own rate and its own evidence requirements. See{" "}
          <Link href="/spain-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">repatriating profits</Link>.
        </p>

        <h2 id="interest-royalty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Interest, royalties and technical fees</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Interest on a shareholder loan is limited to 15%, and the 0% rate does not extend to ordinary Spanish
          banks, so a loan from a Spanish group company is taxed at 15% under the treaty and also needs to
          satisfy the Reserve Bank&apos;s external commercial borrowing rules on lender, cost and use. Royalties
          and fees for technical services are both capped at 10%. The point to watch is characterisation. Indian
          tax law treats many cross-border services as fees for technical services even when no technology is
          transferred, and Spanish groups that recharge management time, IT support or engineering hours often
          discover that a payment they treated as a reimbursement is a taxable fee. The remedy is a written
          services agreement, a time or cost record, a mark-up supported by benchmarking and a clear statement
          of what was delivered. See{" "}
          <Link href="/spain-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          For a brand licence the royalty has to be tied to a real licence. Spanish consumer groups that sell
          through Indian franchise or joint-venture arrangements commonly agree a percentage of sales; Indian
          officers will test that percentage against comparable licences and may disallow the part that exceeds
          it.
        </p>

        <h2 id="pe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Permanent establishment under Article 5</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The treaty follows the OECD pattern. A fixed place of business through which the enterprise carries on
          business is a permanent establishment, and the examples include a place of management, a branch, an
          office, a factory, a workshop and a warehouse. Two features matter more than the general definition.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Construction, installation and assembly:</strong> a building site, construction or assembly project, or related supervisory activity, becomes a permanent establishment only if it continues for more than six months. That is shorter than the twelve months found in some older Indian treaties, so a Spanish contractor installing machinery, a wind or solar plant, a metro system or a transmission line needs to count calendar months carefully, including interruptions and connected phases.</li>
          <li><strong>No separate services PE:</strong> the treaty does not contain a clause that turns services performed by employees in India for a given number of days into a permanent establishment. That does not make services free of Indian tax, because the payment may still be a fee for technical services taxed at 10%. But it narrows the PE risk for consultancies and engineering firms whose people visit India on short assignments.</li>
          <li><strong>Dependent agents:</strong> a person who habitually concludes contracts, or habitually plays the principal role in concluding them, on the enterprise&apos;s behalf can create a permanent establishment. The MLI modifies the agency wording for both countries, and Indian tax officers have used it against group companies that negotiate in India for a foreign parent.</li>
          <li><strong>Exclusions:</strong> a place used only for storage, display or delivery of goods, for stock held for processing by another enterprise, for purchasing or for collecting information, and any other preparatory or auxiliary activity, does not create a permanent establishment. A liaison office that stays inside that boundary is therefore low-risk; one that negotiates or signs becomes high-risk.</li>
          <li><strong>Subsidiary:</strong> an Indian subsidiary is not in itself a permanent establishment of its Spanish parent. The risk arises when the subsidiary has no real independence, when the parent&apos;s staff run it day to day from Spain or from India, or when the subsidiary&apos;s premises are at the parent&apos;s disposal.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          If a permanent establishment exists, Indian tax applies to the profits attributable to it at the
          higher rate for foreign companies, and the Spanish parent must file an Indian return. The cost of that
          is far greater than the cost of the earlier planning, so a site, secondment and agent review at the
          start of each project is worth the time.
        </p>

        <h2 id="gains" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Gains on shares: the 10% threshold and what Spain does with the gain</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Article 14 is where this treaty differs most from the common template. Gains from the sale of shares
          of an Indian company may be taxed in India if the Spanish seller held at least 10% of the capital at
          any time in the period set out in the article; gains on holdings below that level are taxable only in
          Spain. Gains on shares deriving their principal value from Indian immovable property are taxable in
          India without a threshold. For the wholly owned subsidiary that most Spanish groups set up, the 10%
          test is plainly met, so India taxes the exit gain: under domestic law a long-term capital gain on
          unlisted shares held for more than 24 months bears tax of 12.5%, and a shorter holding is taxed as a
          short-term gain at the normal rate for a foreign company.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Spain then looks at the same gain. A Spanish company selling a qualifying holding generally benefits
          from the participation exemption, which, as reformed, exempts most of the gain where the seller held
          at least 5% (or an acquisition cost above EUR 20 million) for at least a year and the investee was
          subject to a comparable tax. Where the exemption applies, the Indian tax is a final cost; where it
          does not, Spain taxes the gain and gives a credit for the Indian tax up to the Spanish tax on that
          income. Because the Spanish conditions and exempt percentage have changed in recent years, confirm
          them with a Spanish adviser at the time of sale. See{" "}
          <Link href="/spain-to-india/exit-and-restructuring" className="text-blue-800 font-semibold hover:underline">exit and restructuring</Link>.
        </p>

        <h2 id="relief" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Spain gives relief</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Spain relieves double taxation by the credit method. Indian tax paid on Indian-source income is
          credited against Spanish tax on that income, but never above the Spanish tax attributable to it, so
          any excess Indian tax is lost unless carried forward under Spanish rules. For dividends and gains from
          qualifying subsidiaries the participation exemption usually takes the income out of Spanish tax
          altogether, which means no credit is needed. For royalties, interest and fees, which Spain taxes as
          ordinary income, the credit is what prevents the same income being taxed twice. Keep the Indian
          withholding tax certificate, the Indian tax return where relevant and the bank evidence of payment,
          because Spain will ask for them.
        </p>

        <h2 id="abuse" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Anti-abuse rules: limitation of benefits, the principal purpose test and GAAR</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The 2012 Protocol added a limitation of benefits article that denies treaty benefits to arrangements
          whose main purpose is to obtain them. Since 1 January 2022, when the MLI took effect for Spain, the
          principal purpose test also applies: a benefit is denied if obtaining it was one of the principal
          purposes of an arrangement and granting it would be contrary to the object and purpose of the treaty.
          India&apos;s General Anti-Avoidance Rule sits alongside both and applies to arrangements with a main
          purpose of obtaining a tax benefit above its threshold.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          In practice, a Spanish group that holds its Indian subsidiary directly from a Spanish operating or
          holding company with real management, people and decision-making in Spain faces little risk. The risk
          rises where an intermediate Spanish company is inserted only to access the treaty, for example by a
          non-EU group, or where the Spanish company has no employees, no premises and no board activity.
          Document why the Spanish entity holds the Indian shares, who decides, and where the people are. See{" "}
          <Link href="/spain-to-india/spanish-parent-obligations" className="text-blue-800 font-semibold hover:underline">Spanish parent obligations</Link>.
        </p>

        <h2 id="claim" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to claim treaty rates, step by step</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>The Spanish company obtains a tax residency certificate (certificado de residencia fiscal) from the Agencia Tributaria for the year of payment.</li>
          <li>It gives the Indian payer Form 41 (earlier Form 10F), the certificate, a declaration that it is the beneficial owner and a declaration that it has no permanent establishment in India.</li>
          <li>For royalties and technical fees at 10%, it also gives a short note referring to the most-favoured-nation clause and Notification 33/2024.</li>
          <li>The Indian payer deducts Withholding Tax at the treaty rate under Section 393 of the Income-tax Act, 2025, and deposits it by the 7th of the following month.</li>
          <li>For the remittance, the payer files Form 145 (earlier 15CA) and, where the bank requires it, Form 146 (earlier 15CB) from a chartered accountant.</li>
          <li>The payer issues the withholding certificate, which the Spanish company keeps for its Spanish return and its credit claim.</li>
        </ol>

        <h2 id="spain-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Spanish side in brief</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Spain taxes resident companies on worldwide income at the general corporate income tax rate, which has
          been 25%, and the foreign-source dividends and gains discussed above are largely exempt. Spain also
          has controlled foreign company rules, rules on documentation of related-party transactions and the EU
          minimum tax regime for large groups. None of these changes the Indian figures on this page, but they
          decide the net result. Your Spanish adviser, not this guide, should confirm the position.
        </p>

        <h2 id="map" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Disputes, information exchange and the MFN clause</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The treaty provides for a mutual agreement procedure under which the competent authorities of the two
          countries try to resolve disputes about its application, and for exchange of information and
          assistance in collection. Time limits for presenting a case are set by the treaty and by each
          country&apos;s domestic rules, so take advice early after any notice of demand. The
          most-favoured-nation clause deserves a final note: it depends on a lower rate being agreed with
          another OECD member after a given date, and an Indian officer may query it. Keep the evidence file and
          watch for later changes in the other treaty, because the rate that the clause imports can follow.
        </p>

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

        <GuideServiceBox path="/spain-to-india/india-spain-dtaa" />
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
            { label: "Beacon Filing: DTAA benefits for Spanish companies in India", href: "https://beaconfiling.com/dtaa/dtaa-benefits-spain-companies-india" },
            { label: "India Briefing: India-Spain DTAA notification and lowered rates", href: "https://www.india-briefing.com/news/india-spain-dtaa-notification-lowered-tax-rates-and-key-provisions-31735.html/" },
            { label: "Agencia Tributaria (Spain)", href: "https://sede.agenciatributaria.gob.es/" },
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
        title="Applying the India-Spain Treaty?"
        description="Tell us the payments and people moving between Spain and India, and we'll confirm how the treaty applies and what documents you need."
      />
    </main>
  )
}
