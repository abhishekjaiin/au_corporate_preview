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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/repatriating-profits"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "routes", label: "The routes compared" },
  { id: "dividends", label: "Dividends: the standard route" },
  { id: "fees", label: "Fees, royalties and recharges" },
  { id: "limits", label: "Limits and traps" },
  { id: "german-side", label: "On the German side" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How is a dividend from India taxed on its way to a German parent?", a: "India withholds 10% under the treaty, on receipt of the German certificate of residence and Form 41. In Germany, 95% of a qualifying dividend is exempt, so the effective German cost is about 1.5%." },
  { q: "What forms are needed to send money from India to Germany?", a: "Form 145 (previously 15CA) and, where required, Form 146 (previously 15CB) for the remittance, plus the treaty documents." },
  { q: "Are management fees to a German parent taxable in India?", a: "Only if they are fees for technical services under the treaty definition or the parent has a PE in India. The payment must also be at arm's length and supported by evidence of service." },
  { q: "Does the German parent charge VAT on services to the Indian subsidiary?", a: "Generally not. Services to a business customer in India are supplied outside Germany, but keep proof of the customer's status and confirm with your German adviser." },
  { q: "When is Withholding Tax deposited?", a: "By the 7th of the month following the payment or credit." },
  { q: "Can an Indian subsidiary repay a loan from its German parent at any time?", a: "Principal repayment follows the ECB agreement and the RBI's minimum maturity. Early repayment before the minimum maturity needs care." },
  { q: "Does India limit interest to a foreign parent?", a: "Yes. Interest paid to an associated enterprise abroad is capped under the interest limitation rule and must also meet the RBI cost ceiling and arm's length tests." },
]

const relatedCards = [
  { title: "The India-Germany Tax Treaty (DTAA), Article by Article: India as Source State, Germany as Residence State", desc: "The India-Germany double taxation agreement explained article by article from the German parent's point of view: the flat 10% rates table, permanent establishment, share gains, relief and how to claim.", href: "/germany-to-india/india-germany-dtaa" },
  { title: "Transfer Pricing Between a German Parent and an Indian Subsidiary: What India Requires and Where Germany Differs", desc: "How transfer pricing works between Germany and India: Indian arm's length rules and Form 48, German documentation duties, the function transfer rules, APAs and the mutual agreement route.", href: "/germany-to-india/transfer-pricing" },
  { title: "Funding an Indian Subsidiary from Germany: Equity, Convertible Instruments, ECB Loans and RBI Reporting", desc: "How a German parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, euro remittance, public-lender loans, FC-GPR and the annual FLA return.", href: "/germany-to-india/funding-and-fema" },
  { title: "What a German Parent Company Owes at Home When It Owns an Indian Subsidiary", desc: "German-side duties for a parent with an Indian subsidiary: corporation and trade tax, the 95% participation exemption, notification of foreign holdings, Bundesbank reports, CFC rules, HGB consolidation, anti-bribery law and Pillar Two.", href: "/germany-to-india/german-parent-obligations" },
]

export default function RepatriatingProfitsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Getting Money Out of India to Germany: Dividends, Service Fees, Royalties, Interest and Loan Repayments"
        description="How a German parent receives money from an Indian subsidiary: the flat 10% treaty rate, Section 393 withholding, Forms 41, 145 and 146, German 95% exemption, VAT on service fees and Indian GST reverse charge."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "Repatriating Profits from India to Germany: Dividends, Fees, Royalties and Loans" },
        ]}
      />

      <GuideHero
        eyebrow="Money out: repatriation"
        title="Getting Money Out of India to Germany: Dividends, Service Fees, Royalties, Interest and Loan Repayments"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A German parent can take money out of its Indian subsidiary as dividends, service fees, royalties,
          interest, loan repayments, buybacks or sale proceeds. Indian Withholding Tax under Section 393 is
          capped at 10% on dividends, interest, royalties and technical fees under the treaty, but each route
          has its own paperwork and its own German result. Dividends are the cleanest: 10% in India, and for a
          corporation with at least 10% 95% exempt in Germany, which leaves an effective German cost of about
          1.5%.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="repatriating-profits" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Dividends", "10% under the treaty, any shareholding; 95% exempt in Germany for a qualifying corporation"],
                ["Service fees", "Taxed in India only if they are technical fees or the parent has a PE; Indian GST reverse charge; no German VAT where the Indian company is the recipient"],
                ["Royalties", "10%; taxable in Germany with credit for Indian tax"],
                ["Interest", "10%, with reported exemptions for public lenders and Hermes-covered loans; taxable in Germany"],
                ["Loan repayment", "Principal repayments follow the ECB schedule; Forms 145 and 146 as applicable"],
                ["Paperwork", "German certificate of residence, Form 41, no-PE declaration, Form 145 (previously 15CA), Form 146 (previously 15CB) where needed"],
                ["Payer's duty", "Deduct Withholding Tax under Section 393 and deposit by the 7th of the following month"],
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
                <th scope="col" className="border border-gray-300 p-3 text-left">German result</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Watch for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dividends", "10% under the treaty, against about 20% plus surcharge and cess domestically", "95% exempt if the parent held at least 10% at the start of the year; about 1.5% effective", "Distributable profits; Form 41 before payment"],
                ["Service fees", "Often nil if not a technical fee and no PE; otherwise 10%", "Taxable business income with credit for Indian tax", "Documented services, arm's length price, GST reverse charge"],
                ["Royalties", "10%", "Taxable with credit", "Licence agreement, valuation, transfer pricing"],
                ["Interest", "10% (exempt for some public lenders and Hermes-covered loans, as reported)", "Taxable with credit", "ECB ceiling, Indian interest limitation rule"],
                ["Loan principal", "No tax on principal", "Not income", "Maturity and registration"],
                ["Buyback or capital reduction", "Taxed as deemed dividend or capital gain depending on the route", "Depends on the structure and the parent's position", "Companies Act procedure"],
                ["Sale proceeds", "Capital gains per the treaty (open point) and date of acquisition", "Share gains 95% exempt", "Valuation, indirect transfer"],
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

        <h2 id="dividends" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Dividends: the standard route</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>The board recommends a dividend from distributable profits after the audit; the shareholders approve it at the AGM.</li>
          <li>The subsidiary asks the German parent for the certificate of residence, Form 41 and declarations.</li>
          <li>It deducts Withholding Tax under Section 393 at 10% and pays the net amount through the dealer bank, with Form 145 and, where required, Form 146.</li>
          <li>It issues a Withholding Tax certificate. The parent keeps it for its German return and any credit.</li>
          <li>The parent records the dividend, the 95% exemption and the 5% add-back in its German tax computation.</li>
        </ol>

        <h2 id="fees" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Fees, royalties and recharges</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Put each charge in a written agreement before the services begin, with a price method and evidence of benefit.</li>
          <li>Apply transfer pricing and keep a benchmarking file. See <Link href="/germany-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li><strong>Indian GST:</strong> the Indian subsidiary usually pays GST under reverse charge on services imported from the German parent, and may claim it as input credit if it makes taxable supplies.</li>
          <li><strong>German VAT:</strong> services to a business customer in India are generally treated as supplied outside Germany, so no German VAT is charged. Keep proof of the Indian customer&apos;s business status and confirm with your German adviser.</li>
          <li>Avoid vague &apos;management fees&apos; with no recipient work. Indian authorities often disallow such costs.</li>
        </ul>

        <h2 id="limits" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Limits and traps</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Excess interest:</strong> interest above the ECB ceiling or arm&apos;s length is not deductible and may not be remitted.</li>
          <li><strong>Interest limitation:</strong> interest paid to foreign associated enterprises is capped as a percentage of EBITDA under the Indian interest limitation rule.</li>
          <li><strong>Dividend timing:</strong> declaring a dividend before the accounts are approved invites disputes.</li>
          <li><strong>Missed forms:</strong> a bank may refuse to remit without Form 145 or the right declaration.</li>
          <li><strong>Partnership parent:</strong> if the parent is a transparent partnership, the 95% exemption does not apply in the same way. See <Link href="/germany-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">structure options</Link>.</li>
          <li><strong>PE risk:</strong> if German staff do the work in India, fees may be profits of an Indian PE rather than service income.</li>
        </ul>

        <h2 id="german-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">On the German side</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Keep the Indian Withholding Tax certificates and the residence certificate file. Germany gives credit
          for foreign tax on income that is taxable in Germany, subject to its limits, and exempts 95% of
          qualifying dividends under domestic law. Your German adviser should confirm the treatment each year.
          See{" "}
          <Link href="/germany-to-india/german-parent-obligations" className="text-blue-800 font-semibold hover:underline">German parent obligations</Link>.
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

        <GuideServiceBox path="/germany-to-india/repatriating-profits" />
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
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "German Federal Central Tax Office (BZSt)", href: "https://www.bzst.de/EN/" },
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
        title="Sending Profits Back to Germany?"
        description="Tell us the dividend, fee, royalty or interest you plan to pay, and we'll map the treaty rate, the residence certificate and the remittance forms."
      />
    </main>
  )
}
