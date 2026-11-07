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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/repatriating-profits"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "routes", label: "The five routes compared" },
  { id: "dividend", label: "Dividends in practice" },
  { id: "fees", label: "Fees and royalties: what makes them safe" },
  { id: "interest", label: "Loans and interest" },
  { id: "steps", label: "The mechanics of each payment" },
  { id: "mix", label: "Building the right mix over time" },
  { id: "mistakes", label: "Mistakes that cost money" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How can a Spanish parent take money out of an Indian subsidiary?", a: "Through dividends, service fees, royalties, loan interest and repayment, or a buyback or capital reduction. Each has a different tax and documentation profile." },
  { q: "What is the withholding tax on dividends to Spain?", a: "15% under the treaty, if the documents are in place on the payment date." },
  { q: "What is the rate on technical fees and royalties?", a: "10%, through the most-favoured-nation clause and Notification 33/2024." },
  { q: "Is a dividend taxed again in Spain?", a: "Usually not for a qualifying holding, because of the participation exemption. Confirm the conditions with a Spanish adviser." },
  { q: "Can the subsidiary pay a management fee from day one?", a: "Yes if there is a contract and real services at an arm's length price. Indian officers will test it." },
  { q: "Why are shareholder costs disallowed?", a: "Services that only protect the parent's investment are the parent's own cost, not a service to the subsidiary." },
  { q: "Does the fee attract goods and services tax?", a: "Often yes, under reverse charge for services received from abroad. The Indian company pays it and may claim credit." },
  { q: "How is interest taxed?", a: "15% withholding under the treaty, with deductibility subject to the interest limitation rule and transfer pricing." },
  { q: "What documents does the bank need?", a: "Forms 145 and 146, the contract, invoices, the residency certificate and sometimes proof of tax paid." },
]

const relatedCards = [
  { title: "India-Spain Double Taxation Agreement Explained: 15% Dividends, 10% Royalties and Technical Fees, the 6-Month Site PE, the 10% Share-Gain Rule and the MLI", desc: "The India-Spain tax treaty explained for a Spanish parent with India as source state and Spain as residence state: dividend, interest, royalty and technical fee rates, permanent establishment, capital gains on Indian shares, credit and participation exemption, limitation of benefits, the MLI principal purpose test and how to claim relief.", href: "/spain-to-india/india-spain-dtaa" },
  { title: "Transfer Pricing for an Indian Subsidiary of a Spanish Group: Arm's Length Rules, Form 3CEB, Local File, Services, Royalties and Loans, and Spain's Own Documentation", desc: "How India and Spain test related-party prices: methods, thresholds, Form 3CEB, the master and local files, intra-group services and royalties, loans, safe harbours, advance pricing agreements, audits and the match between Indian and Spanish files.", href: "/spain-to-india/transfer-pricing" },
  { title: "Funding an Indian Subsidiary from Spain: Share Capital, Shareholder Loans, Fair Value Pricing Rules, FC-GPR, FC-TRS and the Annual FLA Return", desc: "How a Spanish parent can put money into an Indian company: equity under the Automatic Route, convertible instruments, external commercial borrowing, intra-group financing, the FEMA pricing rule, the 60-day and 30-day deadlines, the FLA return and the Spanish declarations that match.", href: "/spain-to-india/funding-and-fema" },
  { title: "Exiting an Indian Subsidiary: Sale of Shares, Buyback, Voluntary Liquidation, Strike-Off and Merger, with the 10% Treaty Rule, FEMA Pricing and Spanish Declarations", desc: "How a Spanish parent can sell, wind up or restructure an Indian subsidiary: the tax on share gains under the India-Spain treaty, FEMA pricing, buyback and capital reduction, liquidation and strike-off, mergers and conversions, repatriating the proceeds and the Spanish filings that close the loop.", href: "/spain-to-india/exit-and-restructuring" },
]

export default function RepatriatingProfitsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Taking Money Out of India to Spain: Dividend, Management Fee, Royalty, Interest and Capital Reduction Routes Compared, with the Treaty Rate and Spanish Relief"
        description="A comparison of the five routes a Spanish parent can use to take cash from an Indian subsidiary, with the Indian withholding tax, Indian conditions, Spanish tax treatment, documents, timing and the traps in each route."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "Repatriating Profits from India to Spain: Dividends, Fees, Royalties, Loans and Tax Cost" },
        ]}
      />

      <GuideHero
        eyebrow="Money: repatriation"
        title="Taking Money Out of India to Spain: Dividend, Management Fee, Royalty, Interest and Capital Reduction Routes Compared, with the Treaty Rate and Spanish Relief"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Spanish parent can take money from an Indian subsidiary through dividends, service fees, royalties,
          loan interest and repayment, or a capital reduction or buyback. Each route has a different Indian tax
          cost, different documents and a different Spanish treatment. Dividends bear 15% withholding under the
          treaty and are mostly exempt in Spain for a qualifying holding, so the Indian tax is the final cost.
          Royalties and technical fees bear 10% through the most-favoured-nation clause, but Indian transfer
          pricing and the deductibility test decide how much the subsidiary may pay. Interest bears 15%. A
          dividend needs profit; the other routes need a real service, licence or loan behind them. Plan the mix
          before the first payment, and keep the evidence the Indian bank will ask for.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="repatriating-profits" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Dividends", "15% treaty withholding; paid from distributable profit after audit; mostly exempt in Spain for a qualifying holding"],
                ["Technical and management fees", "10% treaty rate through the MFN clause; needs a contract, delivery evidence and arm's length pricing"],
                ["Royalties", "10%; needs a licence; percentage tested against comparables"],
                ["Interest", "15%; subject to ECB rules and the interest limitation rule"],
                ["Capital reduction or buyback", "Special rules; taxed as a gain or as a deemed dividend depending on the route"],
                ["Documents", "Tax residency certificate, Form 41, Forms 145 and 146"],
                ["Payer deducts", "Withholding Tax under Section 393 by the 7th of the next month"],
                ["Spanish relief", "Participation exemption for dividends; credit for tax on fees, royalties and interest"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The five routes compared</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian cost</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Condition in India</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Spanish treatment</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical trap</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dividend", "15% withholding (treaty); no tax in the company on distribution under current law", "Profit after audit; board and shareholder approval", "Mostly exempt for a qualifying holding; credit otherwise", "No profit in the first years"],
                ["Management and technical service fee", "10% withholding (treaty via MFN); GST under reverse charge", "Actual services, contract, evidence, arm's length mark-up", "Ordinary income; credit for Indian tax", "Disallowed as shareholder activity"],
                ["Royalty", "10% withholding; GST may apply", "Licence agreement; use of the right in India; benchmarked rate", "Ordinary income; credit", "Rate above comparables"],
                ["Interest and loan repayment", "15% withholding on interest", "ECB rules; interest limitation; registered loan", "Ordinary income; credit", "Loan treated as equity or not registered"],
                ["Buyback or capital reduction", "Taxed under special provisions", "Company law process and FEMA pricing", "Participation exemption may apply; confirm", "Pricing above fair value"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                  <td className="border border-gray-300 p-3">{row[3]}</td>
                  <td className="border border-gray-300 p-3">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="dividend" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Dividends in practice</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A dividend can be declared only from distributable profits after the accounts are audited and
          approved, so a subsidiary in its early loss-making years cannot pay one. Once it can, the Indian
          company deducts tax at the treaty rate of 15% if it holds the tax residency certificate, Form 41, the
          beneficial ownership declaration and the no-permanent-establishment declaration on the payment date.
          It reports the payment on Form 145 and, where the bank asks, Form 146. The Spanish parent then treats
          the dividend under its participation exemption where the holding qualifies, so the Indian 15% is
          usually the only tax. See{" "}
          <Link href="/spain-to-india/india-spain-dtaa" className="text-blue-800 font-semibold hover:underline">the treaty guide</Link>.
        </p>

        <h2 id="fees" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Fees and royalties: what makes them safe</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Service fees and royalties give the Spanish parent cash before the subsidiary makes a profit, which
          makes them attractive, and they are also the route Indian officers examine most closely. Four things
          keep them safe. First, a written agreement that describes the service or the licence. Second, evidence
          that the service was needed and delivered, such as time records, reports, deliverables and emails.
          Third, a price benchmarked against third-party comparables, with a documented mark-up. Fourth, correct
          tax treatment: Withholding Tax at the treaty rate, goods and services tax under reverse charge where
          applicable, and an entry in the transfer pricing file. Fees for services that merely protect the
          parent&apos;s investment, such as shareholder oversight, are treated as the parent&apos;s own cost and
          disallowed. See{" "}
          <Link href="/spain-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
        </p>

        <h2 id="interest" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Loans and interest</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Interest on an external commercial borrowing bears 15% withholding, and the Indian company may deduct
          it only within the interest limitation rule and the arm&apos;s length test. The loan must be
          registered, and each interest and principal payment needs the documents the bank asks for. Because
          interest is deductible and dividends are not, loans can be attractive, but they bring a repayment
          obligation and the Spanish parent should confirm the Spanish treatment of the interest income and the
          transfer pricing documentation for the loan. See{" "}
          <Link href="/spain-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The mechanics of each payment</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Check that the payment is permitted and the contract exists.</li>
          <li>Obtain the Spanish tax residency certificate, Form 41 and the declarations.</li>
          <li>Calculate Withholding Tax at the treaty rate and any goods and services tax.</li>
          <li>File Form 145 and, if the bank needs it, obtain Form 146 from a Chartered Accountant.</li>
          <li>The bank remits the net amount and the company deposits the tax by the 7th of the following month.</li>
          <li>Issue the withholding certificate and file the quarterly return.</li>
          <li>The Spanish parent records the income and claims the credit or exemption.</li>
        </ol>

        <h2 id="mix" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Building the right mix over time</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Phase</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Likely mix</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Reason</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Years 1 to 2", "Service fees and royalties; loan interest if debt-funded", "The subsidiary has little or no profit"],
                ["Years 3 to 5", "Growing dividends alongside fees", "Distributable profit emerges"],
                ["Mature", "Dividends as the main route; fees at a stable benchmarked level", "Lowest compliance burden and exempt in Spain"],
                ["Exit or restructuring", "Share sale, buyback or capital reduction", "See the exit guide"],
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

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes that cost money</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Deducting at the domestic rate because the residency certificate was not on file.</li>
          <li>Paying fees without a contract or evidence and having them disallowed.</li>
          <li>Calling a royalty a service fee, or the reverse, and getting the wrong treaty rate.</li>
          <li>Forgetting goods and services tax on reverse charge.</li>
          <li>Paying a dividend before the accounts were approved.</li>
          <li>Ignoring the Spanish parent&apos;s own documentation on the transaction.</li>
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

        <GuideServiceBox path="/spain-to-india/repatriating-profits" />
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
        title="Sending Profits Back to Spain?"
        description="Tell us the dividend, fee, royalty or interest you plan to pay, and we'll map the treaty rate, the residence certificate and the remittance forms."
      />
    </main>
  )
}
