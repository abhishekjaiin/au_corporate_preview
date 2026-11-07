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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/repatriating-profits"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "routes", label: "The routes compared" },
  { id: "dividends", label: "Paying a dividend" },
  { id: "fees", label: "Service fees, royalties and recharges" },
  { id: "forms", label: "Remittance paperwork" },
  { id: "hk", label: "Hong Kong side" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the withholding tax on dividends paid from India to a Hong Kong parent?", a: "5% of the gross amount under the treaty if the Hong Kong company is the beneficial owner and the paperwork is in place. The domestic rate on dividends to non-residents is about 20% plus surcharge and cess." },
  { q: "Which forms do I need to send money to Hong Kong?", a: "Form 145 for the remittance, and Form 146 where a chartered accountant's certificate is needed, along with Form 41 and the tax residency certificate for treaty rates." },
  { q: "Can I pay a management fee to Hong Kong?", a: "Yes if it is for real services at an arm's length price, with Withholding Tax at 10% where treated as fees for technical services under the treaty and GST on reverse charge." },
  { q: "Can the subsidiary pay dividends from capital?", a: "No. Dividends must come from distributable profits as the Companies Act requires." },
  { q: "Can I repay a loan to Hong Kong?", a: "Yes, following the registered ECB schedule through the bank. Principal is not taxed, but interest is subject to Withholding Tax." },
  { q: "Are Indian dividends taxed in Hong Kong?", a: "Generally not as Hong Kong-sourced, but the foreign-sourced income exemption rules can apply to multinational group members that lack economic substance." },
  { q: "What if the Hong Kong company is only a conduit?", a: "The principal purpose test and the general anti-avoidance rule can deny treaty relief. Build commercial substance in Hong Kong." },
]

const relatedCards = [
  { title: "India-Hong Kong Double Taxation Agreement Explained: 5% Dividends, 10% Royalties and Fees, PE Rules and the Principal Purpose Test", desc: "The India-Hong Kong tax treaty explained for a Hong Kong parent: 5% dividend rate, 10% interest, royalties and fees for technical services, permanent establishment rules, share gains, anti-abuse tests and how to claim treaty rates.", href: "/hong-kong-to-india/india-hong-kong-dtaa" },
  { title: "Transfer Pricing between India and Hong Kong: Arm's Length Pricing, Hub and Re-Invoicing Models, Documentation and Safe Harbours", desc: "Transfer pricing for a Hong Kong group with an Indian subsidiary: arm's length rules, Form 3CEB, master file and local file, Hong Kong trading and re-invoicing hubs, services and management fees, advance pricing agreements and safe harbours.", href: "/hong-kong-to-india/transfer-pricing" },
  { title: "Funding Your Indian Subsidiary from Hong Kong: Equity, Preference Shares, External Borrowing and FEMA Reporting", desc: "How a Hong Kong parent can fund an Indian company: equity share and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return, Press Note 3 and reporting through the authorised dealer bank.", href: "/hong-kong-to-india/funding-and-fema" },
  { title: "Hong Kong as a Regional Headquarters for India: Holding Company, Trading Hub, Treasury and the Principal Purpose Test", desc: "How groups use a Hong Kong company as a regional holding, trading or treasury hub for India, the substance Indian and Hong Kong tax authorities expect, the treaty principal purpose test, Press Note 3 limits and alternatives.", href: "/hong-kong-to-india/hong-kong-as-regional-hub-for-india" },
]

export default function RepatriatingProfitsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Getting Money Out of India to a Hong Kong Parent: Dividends at 5%, Service Fees, Royalties, Interest and Loan Repayments"
        description="How a Hong Kong parent receives money from an Indian subsidiary: 5% treaty withholding on dividends, 10% on interest, royalties and fees, Section 393, Forms 41, 145 and 146, Hong Kong tax treatment and the documents banks ask for."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Repatriating Profits from India to Hong Kong: Dividends, Fees, Royalties and Loans" },
        ]}
      />

      <GuideHero
        eyebrow="Money out: repatriation"
        title="Getting Money Out of India to a Hong Kong Parent: Dividends at 5%, Service Fees, Royalties, Interest and Loan Repayments"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Hong Kong parent can take money out of its Indian subsidiary as dividends, service fees, royalties,
          interest, loan repayments, buybacks or sale proceeds. The treaty caps Indian withholding at 5% on
          dividends and 10% on interest, royalties and fees for technical services when the paperwork is in
          place, against a domestic rate of about 20% plus surcharge and cess on dividends to non-residents.
          Payments to related parties are scrutinised, so keep contracts, evidence of service and arm&apos;s
          length support. Hong Kong generally does not tax Indian-sourced dividends, but the foreign-sourced
          income exemption rules can apply to multinational group members.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="repatriating-profits" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Dividends", "5% treaty rate with Hong Kong beneficial owner; paid from distributable profits after audit and shareholder approval"],
                ["Service fees", "Fees for technical services at 10% under the treaty if the services are managerial, technical or consultancy; otherwise business profits depend on a PE; GST reverse charge applies"],
                ["Royalties", "10%; licence agreement and valuation required"],
                ["Interest", "10%; ECB limits; interest limitation rule"],
                ["Loan principal", "No tax on principal; follows the ECB schedule"],
                ["Paperwork", "Hong Kong tax residency certificate, Form 41, no-PE declaration, Form 145 (previously 15CA), Form 146 (previously 15CB) where needed"],
                ["Scrutiny", "Related-party payments draw questions from banks and tax authorities; keep evidence"],
                ["Hong Kong side", "Territorial taxation; FSIE rules may apply to foreign-sourced income received in Hong Kong by group members"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The routes compared</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian tax on the outflow</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Hong Kong result</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Watch for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dividends", "5% under the treaty, against about 20% plus surcharge and cess domestically", "Generally not taxed as Hong Kong-sourced, subject to FSIE", "Distributable profits; Form 41 before payment; principal purpose test"],
                ["Service fees", "10% if fees for technical services; nil if business profits without a PE", "May be taxable if services are performed in Hong Kong; confirm", "Evidence of service, arm's length price, GST reverse charge"],
                ["Royalties", "10%", "Taxable in Hong Kong according to source and use of the IP; confirm with a Hong Kong adviser", "Licence agreement, valuation, transfer pricing"],
                ["Interest", "10%; limits on cost and amount", "Taxable if it arises in Hong Kong; foreign-sourced interest is subject to FSIE", "ECB ceiling; interest limitation rule"],
                ["Loan principal", "None on principal", "Not income", "Maturity and registration"],
                ["Buy-back or sale proceeds", "Capital gain tax; buy-back taxed as dividend in some cases", "Capital gains generally not taxed; FSIE for disposal gains by group members", "Tax on gains in India; see exit guide"],
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

        <h2 id="dividends" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Paying a dividend</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Prepare audited accounts and confirm distributable profits under the Companies Act.</li>
          <li>The board recommends and shareholders approve the dividend; no interim dividend without distributable profit.</li>
          <li>Collect from the Hong Kong parent: tax residency certificate, Form 41, beneficial ownership and no-PE declaration.</li>
          <li>Deduct Withholding Tax at the treaty rate under Section 393 of the Income-tax Act, 2025, and deposit it by the 7th of the following month.</li>
          <li>Remit through the authorised dealer bank with Form 145 (and Form 146 if the bank requires a chartered accountant&apos;s certificate).</li>
        </ol>

        <h2 id="fees" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Service fees, royalties and recharges</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Payments for management, technical or consultancy services are fees for technical services at 10% under the treaty if the paperwork is in place, plus GST on reverse charge.</li>
          <li>A recharge of salaries for seconded staff is a service fee; apply Withholding Tax and transfer pricing. See <Link href="/hong-kong-to-india/hong-kong-employees-in-india" className="text-blue-800 font-semibold hover:underline">Hong Kong employees in India</Link>.</li>
          <li>Pay only for services actually received, and keep the contract, invoices and evidence of benefit. Indian tax officers disallow unsupported management fees.</li>
          <li>A royalty needs a written licence agreement, a clear scope and arm&apos;s length pricing. See <Link href="/hong-kong-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
        </ul>

        <h2 id="forms" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Remittance paperwork</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Document</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">When</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Tax Residency Certificate and Form 41", "Before the first payment each year", "Claim treaty rate"],
                ["Beneficial ownership and no-PE declaration", "Before payment", "Support treaty claim and principal purpose test"],
                ["Form 145 (previously 15CA)", "Each foreign remittance", "Online declaration to the tax department"],
                ["Form 146 (previously 15CB)", "Where required for the remittance", "Chartered accountant's certificate"],
                ["Withholding Tax return and certificate", "Quarterly return; certificate to the payee", "Hong Kong credit and records"],
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

        <h2 id="hk" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Hong Kong side</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian dividends are generally not Hong Kong-sourced. Group members that receive foreign dividends in
          Hong Kong should check the FSIE conditions. Your Hong Kong adviser should confirm. ₹10 lakh is about
          HK$83,000 at an indicative ₹12.07 per Hong Kong dollar (15 October 2026 interbank rate; check the live
          rate before remitting).
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

        <GuideServiceBox path="/hong-kong-to-india/repatriating-profits" />
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
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Inland Revenue Department (Hong Kong)", href: "https://www.ird.gov.hk/eng/welcome.htm" },
          ]}
        />

        <p className="mt-6">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Hong Kong
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Sending Profits Back to Hong Kong?"
        description="Tell us the dividend, fee, royalty or interest you plan to pay, and we'll map the treaty rate, the residence certificate and the remittance forms."
      />
    </main>
  )
}
