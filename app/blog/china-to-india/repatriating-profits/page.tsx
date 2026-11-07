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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/repatriating-profits"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "routes", label: "The routes compared" },
  { id: "dividends", label: "Dividends: the standard route" },
  { id: "evidence", label: "The evidence file for payments to a Chinese parent" },
  { id: "limits", label: "Limits and traps" },
  { id: "china", label: "On the Chinese side" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How is a dividend from India taxed on its way to a Chinese parent?", a: "India withholds at 10% under the treaty on receipt of the Chinese tax residence certificate and Form 41. China generally taxes the receipt with credit for Indian tax, subject to Chinese rules." },
  { q: "What forms are needed to send money from India to China?", a: "Form 145 (previously 15CA) and, where required, Form 146 (previously 15CB) for the remittance, plus the treaty documents and the evidence of the underlying transaction." },
  { q: "Are management fees to a Chinese parent taxable in India?", a: "Fees for managerial, technical or consultancy services are taxable at up to 10% under Article 12 unless the payee has a PE, and the payment must be supported by evidence and arm's length pricing." },
  { q: "When is Withholding Tax deposited?", a: "By the 7th of the month following the payment or credit." },
  { q: "Can an Indian subsidiary repay a loan from its Chinese parent at any time?", a: "Principal repayment follows the ECB agreement and the RBI's minimum maturity. Early repayment before the minimum maturity needs care." },
  { q: "Why are payments to Chinese related parties scrutinised?", a: "Banks and tax officers apply closer checks to such outflows. Keep a contract, proof of service and a benchmark for each payment." },
  { q: "Does the Press Note 3 approval affect repatriation?", a: "If the approval contains conditions, such as technology or sourcing commitments, repatriation must not breach them. Review the approval letter before agreeing payments." },
]

const relatedCards = [
  { title: "India-China Double Taxation Avoidance Agreement Explained: Rates, Permanent Establishment and Relief for a Chinese Parent", desc: "The India-China DTAA explained for a Chinese parent: 10% rates on dividends, interest, royalties and technical fees, permanent establishment rules, business profits, share gains, employment income, relief from double tax and how to claim treaty rates.", href: "/china-to-india/india-china-dtaa" },
  { title: "Transfer Pricing Between a Chinese Parent and an Indian Subsidiary: Pricing Components, Equipment and Technology", desc: "How transfer pricing works between China and India: Indian arm's length rules and Form 48, pricing of components, equipment and technology, customs value, Chinese documentation, advance pricing agreements and disputes.", href: "/china-to-india/transfer-pricing" },
  { title: "Funding an Indian Subsidiary from China: Equity, Convertible Instruments, ECB Loans, SAFE Remittance and FC-GPR", desc: "How a Chinese parent funds an Indian subsidiary: equity pricing and valuation, compulsorily convertible instruments, external commercial borrowing, the Chinese SAFE step, inward remittance, FC-GPR and the 60-day and 30-day clocks.", href: "/china-to-india/funding-and-fema" },
  { title: "What a Chinese Parent Must Do at Home: Outbound Investment Filings, SAFE Registration and Tax Credit for Indian Tax", desc: "The Chinese-side steps for a parent investing in India: NDRC and MOFCOM outbound investment approval or filing, SAFE foreign exchange registration through the bank, state-owned enterprise approvals, export controls on technology and tax credit.", href: "/china-to-india/chinese-parent-obligations" },
]

export default function RepatriatingProfitsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Getting Money Out of India to a Chinese Parent: Dividends, Service Fees, Royalties, Interest and Loan Repayments"
        description="How a Chinese parent receives money from an Indian subsidiary: 10% treaty withholding, Section 393, Forms 41, 145 and 146, Chinese tax credit, scrutiny of related-party payments and the documents banks ask for."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Repatriating Profits from India to China: Dividends, Fees, Royalties and Loans" },
        ]}
      />

      <GuideHero
        eyebrow="Money out: repatriation"
        title="Getting Money Out of India to a Chinese Parent: Dividends, Service Fees, Royalties, Interest and Loan Repayments"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Chinese parent can take money out of its Indian subsidiary as dividends, service fees, royalties,
          interest, loan repayments, buybacks or sale proceeds. The treaty caps Indian withholding at 10% on
          dividends, interest, royalties and fees for technical services when the paperwork is in place.
          Payments to Chinese related parties get closer attention from Indian banks and tax officers than most,
          so every outflow should rest on a written agreement, a transfer pricing file and clear evidence that
          the service was received. China taxes the receipt, with credit for Indian tax, so the Chinese side
          must be planned too.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="repatriating-profits" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Dividends", "10% treaty rate; paid from distributable profits after audit and shareholder approval"],
                ["Service fees", "Taxable in India as fees for technical services at 10% if managerial, technical or consultancy; otherwise depends on PE; GST reverse charge applies"],
                ["Royalties", "10%; licence agreement and valuation required"],
                ["Interest", "10%; ECB limits; interest limitation rule"],
                ["Loan principal", "No tax on principal; follows the ECB schedule"],
                ["Paperwork", "Chinese tax residence certificate, Form 41, no-PE declaration, Form 145 (previously 15CA), Form 146 (previously 15CB) where needed"],
                ["Scrutiny", "Related-party payments to China draw questions from banks and tax authorities; keep evidence"],
                ["China side", "Receipts taxable in China with credit for Indian tax; confirm with a Chinese adviser"],
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
                <th scope="col" className="border border-gray-300 p-3 text-left">Chinese result</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Watch for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dividends", "10% under the treaty, against about 20% plus surcharge and cess domestically", "Generally taxable, with credit for Indian tax; indirect credit for qualifying holdings", "Distributable profits; Form 41 before payment"],
                ["Service fees", "10% if fees for technical services; nil if business profits without a PE", "Taxable business income with credit", "Documents, evidence of service, arm's length price, GST reverse charge"],
                ["Royalties", "10%", "Taxable with credit", "Licence agreement, valuation, transfer pricing"],
                ["Interest", "10%; limits on cost and amount", "Taxable with credit", "ECB ceiling; interest limitation rule"],
                ["Loan principal", "None on principal", "Not income", "Maturity and registration"],
                ["Buyback or capital reduction", "Depends on the route", "Depends on the structure", "Companies Act procedure"],
                ["Sale proceeds", "Capital gains; see the treaty note", "Depends on the structure", "Valuation, FEMA pricing"],
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
          <li>The board recommends a dividend from distributable profits after the audit; shareholders approve it at the AGM.</li>
          <li>The subsidiary asks the Chinese parent for the tax residence certificate, Form 41 and declarations.</li>
          <li>It deducts Withholding Tax under Section 393 at the treaty rate and pays the net amount through the dealer bank, with Form 145 and, where required, Form 146.</li>
          <li>It issues a Withholding Tax certificate. The parent keeps it for its Chinese return and credit claim.</li>
          <li>The parent records the receipt and the credit in China, with the help of its Chinese adviser.</li>
        </ol>

        <h2 id="evidence" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The evidence file for payments to a Chinese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A signed intercompany agreement before the service starts, stating scope, price and payment terms.</li>
          <li>Proof that the Indian company needed and received the service: reports, emails, time sheets, deliverables.</li>
          <li>A benchmarking study supporting the price. See <Link href="/china-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li>For royalties, a licence that identifies the intellectual property and the licensed use.</li>
          <li>For loans, the sanction letter, registration and interest calculation.</li>
          <li>Board minutes approving the payment.</li>
        </ul>

        <h2 id="limits" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Limits and traps</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Excess interest:</strong> interest above the ECB ceiling or arm&apos;s length is not deductible and may not be remitted.</li>
          <li><strong>Dividend timing:</strong> declaring a dividend before the accounts are approved invites disputes.</li>
          <li><strong>Missed forms:</strong> a bank may refuse to remit without Form 145 or the right declaration.</li>
          <li><strong>Fee disallowance:</strong> management fees with no evidence of service are commonly disallowed.</li>
          <li><strong>Approval conditions:</strong> if the Press Note 3 approval attached conditions, such as technology transfer or local sourcing, ensure repatriation does not breach them.</li>
          <li><strong>PE risk:</strong> if Chinese staff do the work in India, fees may be profits of an Indian PE. See <Link href="/china-to-india/india-china-dtaa" className="text-blue-800 font-semibold hover:underline">the DTAA guide</Link>.</li>
        </ul>

        <h2 id="china" className="text-2xl font-bold text-gray-900 mt-12 mb-4">On the Chinese side</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Keep the Withholding Tax certificates, the payment evidence and the Indian return for the Chinese
          credit claim. China generally taxes foreign-source income of a resident enterprise with a credit for
          foreign tax, within limits, so the effective cost is usually the higher of the Indian and Chinese
          rates. Your Chinese adviser should confirm the treatment of dividends and the indirect credit each
          year. See{" "}
          <Link href="/china-to-india/chinese-parent-obligations" className="text-blue-800 font-semibold hover:underline">Chinese parent obligations</Link>.
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

        <GuideServiceBox path="/china-to-india/repatriating-profits" />
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
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "State Taxation Administration of China", href: "https://www.chinatax.gov.cn/eng/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Chinese
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Sending Profits Back to China?"
        description="Tell us the dividend, fee, royalty or interest you plan to pay, and we'll map the treaty rate, the residence certificate and the remittance forms."
      />
    </main>
  )
}
