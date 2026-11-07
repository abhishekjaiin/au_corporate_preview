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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/funding-and-fema"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "equity", label: "Equity and preference shares" },
  { id: "steps", label: "Receiving and reporting the funds" },
  { id: "ecb", label: "Loans and external commercial borrowing" },
  { id: "transfers", label: "Transfers of shares" },
  { id: "mistakes", label: "Common errors" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How can a Hong Kong company fund its Indian subsidiary?", a: "By equity, compulsorily convertible preference shares or a compliant external commercial borrowing, always through a bank." },
  { q: "How soon must shares be allotted?", a: "Within 60 days of receiving the money." },
  { q: "When is FC-GPR due?", a: "Within 30 days of allotment of shares." },
  { q: "What is the FLA return?", a: "An annual return on foreign liabilities and assets filed by 15 July with the RBI." },
  { q: "Is there a pricing rule?", a: "Yes. An issue or sale of shares to a non-resident cannot be below fair value, and a purchase from a non-resident cannot be above it." },
  { q: "Can a Hong Kong group company lend to the Indian subsidiary?", a: "Yes if it meets the external commercial borrowing conditions, with Withholding Tax on interest and arm's length pricing." },
  { q: "Is Press Note 3 approval needed before the money comes in?", a: "For Hong Kong investors, yes. Funding before approval is a contravention." },
  { q: "Can money come from a third party?", a: "No. It should come from the Hong Kong parent's own account to avoid KYC and reporting problems." },
]

const relatedCards = [
  { title: "Press Note 3 for Hong Kong Companies: Approval for Hong Kong-Registered Investors and What the 2026 Easing Does Not Change", desc: "How India's Press Note 3 applies to a Hong Kong parent: the March 2026 government statement that Hong Kong-registered firms still need prior approval, the 10% passive-ownership easing for other investors, the approval route, and planning for regional headquarters.", href: "/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" },
  { title: "How to Incorporate a Private Limited Company in India as a Hong Kong Parent: Approval, SPICe+, Bank Account and Post-Incorporation Filings", desc: "Step-by-step route for a Hong Kong parent to set up an Indian private limited company: Press Note 3 approval, name, SPICe+, DIN and DSC, resident director, PAN and TAN, bank account, capital inflow, FC-GPR and first filings.", href: "/hong-kong-to-india/incorporation-steps" },
  { title: "Getting Money Out of India to a Hong Kong Parent: Dividends at 5%, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a Hong Kong parent receives money from an Indian subsidiary: 5% treaty withholding on dividends, 10% on interest, royalties and fees, Section 393, Forms 41, 145 and 146, Hong Kong tax treatment and the documents banks ask for.", href: "/hong-kong-to-india/repatriating-profits" },
  { title: "Transfer Pricing between India and Hong Kong: Arm's Length Pricing, Hub and Re-Invoicing Models, Documentation and Safe Harbours", desc: "Transfer pricing for a Hong Kong group with an Indian subsidiary: arm's length rules, Form 3CEB, master file and local file, Hong Kong trading and re-invoicing hubs, services and management fees, advance pricing agreements and safe harbours.", href: "/hong-kong-to-india/transfer-pricing" },
]

export default function FundingAndFemaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Funding Your Indian Subsidiary from Hong Kong: Equity, Preference Shares, External Borrowing and FEMA Reporting"
        description="How a Hong Kong parent can fund an Indian company: equity share and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return, Press Note 3 and reporting through the authorised dealer bank."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Funding an Indian Subsidiary from Hong Kong: FEMA, FC-GPR and Pricing Rules" },
        ]}
      />

      <GuideHero
        eyebrow="Money: funding and FEMA"
        title="Funding Your Indian Subsidiary from Hong Kong: Equity, Preference Shares, External Borrowing and FEMA Reporting"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Hong Kong parent funds an Indian subsidiary through equity (the usual route), compulsorily
          convertible preference shares, or an external commercial borrowing that meets RBI conditions. Money
          goes through an authorised dealer bank. Shares must be allotted within 60 days of receipt, Form FC-GPR
          is due within 30 days of allotment, and the annual FLA return is due by 15 July. A transfer of shares
          between a resident and a non-resident must respect the pricing rule: a sale to a non-resident cannot
          be below fair value, and a purchase from a non-resident cannot be above it. Press Note 3 approval
          comes first for Hong Kong investors.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="funding-fema-fc-gpr" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Routes", "Equity; compulsorily convertible preference shares; ECB; permitted loans"],
                ["Allotment", "Within 60 days of receipt of funds, otherwise refund or regularise"],
                ["Reporting", "Form FC-GPR within 30 days of allotment; FC-TRS for transfers; FLA return by 15 July"],
                ["Pricing", "Issue of shares to a non-resident: not below fair value. Transfer from resident to non-resident: not below fair value. From non-resident to resident: not above fair value"],
                ["ECB", "Registered with the RBI; rules on lender eligibility, tenor, cost and end use"],
                ["Banking", "Funds must come from the Hong Kong parent's own bank account through banking channels"],
                ["Press Note 3", "Approval for Hong Kong entities before any inflow"],
                ["Sector caps", "Check the FDI Policy, including conditions on minimum capitalisation in some sectors"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="equity" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Equity and preference shares</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Equity shares are the simplest instrument and are fully repatriable as dividends.</li>
          <li>Compulsorily convertible preference shares count as equity for FDI. Optionally convertible or redeemable preference shares are treated as debt under the rules.</li>
          <li>Price at or above fair value, supported by a valuation certificate from a chartered accountant or merchant banker, for an issue to a non-resident.</li>
          <li>₹10 lakh is about HK$83,000 at an indicative ₹12.07 per Hong Kong dollar (15 October 2026 interbank rate; check the live rate before remitting).</li>
        </ul>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Receiving and reporting the funds</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Hong Kong parent remits through its bank with clear remittance purpose and the Indian company&apos;s details.</li>
          <li>The Indian bank issues a foreign inward remittance certificate and KYC of the remitter.</li>
          <li>Allot shares within 60 days; hold the board meeting and issue share certificates.</li>
          <li>File Form FC-GPR on the RBI FIRMS portal within 30 days of allotment with the valuation, the certificate and the bank&apos;s KYC.</li>
          <li>File the annual FLA return by 15 July for the previous financial year.</li>
        </ol>

        <h2 id="ecb" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Loans and external commercial borrowing</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Position</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Lender", "A recognised non-resident lender; a Hong Kong group company can lend if the lender conditions are met"],
                ["Registration", "Loan Registration Number from the RBI through the authorised dealer bank"],
                ["End use", "Restricted for some purposes such as real estate and investing in capital markets"],
                ["Cost and tenor", "Subject to all-in cost ceilings and minimum average maturity"],
                ["Withholding tax", "Interest is subject to Indian Withholding Tax; the treaty rate is 10% with the paperwork"],
                ["Transfer pricing", "Interest on related-party loans must be at arm's length"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="transfers" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Transfers of shares</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A sale of shares by a resident to a Hong Kong investor cannot be below fair value; a purchase from a non-resident cannot be above it.</li>
          <li>Report on Form FC-TRS within 60 days, with the bank and valuation certificate.</li>
          <li>Deferred consideration and escrow are allowed within RBI limits. Check the timing.</li>
          <li>A transfer involving a Hong Kong investor may need Press Note 3 approval.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common errors</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Late allotment or late FC-GPR, which leads to compounding applications and penalties.</li>
          <li>Receiving funds before Press Note 3 approval.</li>
          <li>Pricing below fair value on an issue to the Hong Kong parent.</li>
          <li>Routing the money through a third-party account or an unrelated entity.</li>
        </ul>

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

        <GuideServiceBox path="/hong-kong-to-india/funding-and-fema" />
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
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "RBI FIRMS portal", href: "https://firms.rbi.org.in/" },
            { label: "DPIIT", href: "https://dpiit.gov.in/" },
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
        title="Funding an Indian Subsidiary from Hong Kong?"
        description="Tell us the amount and whether it is equity or a loan, and we'll map the valuation, FC-GPR or ECB filing and the timeline."
      />
    </main>
  )
}
