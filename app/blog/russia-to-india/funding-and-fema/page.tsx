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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/funding-and-fema"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "route", label: "Choosing the remittance route" },
  { id: "rules", label: "The FEMA rules" },
  { id: "instruments", label: "Equity, convertibles or a loan" },
  { id: "evidence", label: "Evidence the Indian bank will ask for" },
  { id: "russia", label: "Russian approvals and currency control" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does a Russian investor need Indian government approval?", a: "Not in most sectors; Press Note 3 does not apply to Russia." },
  { q: "Can any Russian bank remit the capital?", a: "Only one the Indian bank accepts; many Russian banks are sanctioned or off SWIFT." },
  { q: "Are rupee vostro accounts a safe harbour?", a: "No. They are a settlement channel, not protection from sanctions." },
  { q: "How long is there to allot shares?", a: "60 days from receipt of the money." },
  { q: "When is FC-GPR filed?", a: "Within 30 days of allotment." },
  { q: "What is the Indian tax on interest paid to Russia?", a: "Up to 10% under the India-Russia treaty." },
  { q: "Is Russian approval needed?", a: "Reportedly above RUB 30 million per counterparty, from the Bank of Russia." },
  { q: "What evidence will the Indian bank want?", a: "Ownership chart, source of funds, screening confirmation and business rationale." },
]

const relatedCards = [
  { title: "Sanctions and Payments", desc: "Banking and screening.", href: "/russia-to-india/sanctions-and-payments-for-russian-companies" },
  { title: "Russian Parent Obligations", desc: "Bank of Russia and currency control.", href: "/russia-to-india/russian-parent-obligations" },
  { title: "Repatriating Profits", desc: "Money back to Russia.", href: "/russia-to-india/repatriating-profits" },
  { title: "Incorporation Steps", desc: "Before the money moves.", href: "/russia-to-india/incorporation-steps" },
]

export default function FundingAndFemaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Funding Your Indian Subsidiary from Russia: Equity, Preference Shares, External Borrowing, FEMA Reporting and the Remittance Route"
        description="How a Russian parent can fund an Indian company: equity and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return, the remittance route through banks acceptable to India and Russian clearance."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Funding an Indian Subsidiary from Russia: FEMA, FC-GPR, Pricing Rules and Payment Routes" },
        ]}
      />

      <GuideHero
        eyebrow="Money: funding and FEMA"
        title="Funding Your Indian Subsidiary from Russia: Equity, Preference Shares, External Borrowing, FEMA Reporting and the Remittance Route"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Russian parent funds its Indian subsidiary with equity, convertible instruments or an external commercial borrowing, under the usual FEMA rules: allot within 60 days, price at no less than fair value, file FC-GPR within 30 days. What differs is the route: the remitting bank must be one the Indian bank will accept, many Russian banks are sanctioned or off SWIFT, and Bank of Russia approval is reportedly needed above RUB 30 million per counterparty.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="funding-fema-fc-gpr" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Route", "Automatic Route in most sectors; Press Note 3 does not apply"],
                ["Remitting bank", "Must be acceptable to the Indian bank; many Russian banks are sanctioned or off SWIFT"],
                ["Allotment", "Within 60 days of receipt"],
                ["RBI filing", "FC-GPR within 30 days of allotment"],
                ["Interest to Russia", "Indian tax capped at 10% under the treaty"],
                ["Russian side", "Bank of Russia approval reported above RUB 30 million per counterparty; currency control"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="route" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing the remittance route</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Before any amount is approved in Moscow, agree with the Indian bank which remitting banks, currencies and correspondent routes it will accept. Options can include remitting from a non-sanctioned bank, using a third currency, or using the rupee vostro arrangements some banks operate, but none of these is a sanctions safe harbour. Specialist sanctions counsel should review the route.
        </p>
        <h2 id="rules" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The FEMA rules</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Step</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Deadline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Report the receipt on FIRMS</th>
                <td className="border border-gray-300 p-3">Within 30 days</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Allot shares</th>
                <td className="border border-gray-300 p-3">Within 60 days, or refund within 15 more days</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">File FC-GPR</th>
                <td className="border border-gray-300 p-3">Within 30 days of allotment</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">FLA return</th>
                <td className="border border-gray-300 p-3">By 15 July each year</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="instruments" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Equity, convertibles or a loan</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Equity</strong> is simplest and avoids repayment flows that would need to cross the same banking channels later.</li>
          <li><strong>Compulsorily convertible instruments</strong> suit staged funding, with the conversion price fixed at issue.</li>
          <li><strong>A parent loan</strong> is an external commercial borrowing with conditions on the lender, maturity, cost and use; interest to Russia bears Indian tax of up to 10% under the treaty, and every repayment needs a working payment route.</li>
        </ul>
        <h2 id="evidence" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Evidence the Indian bank will ask for</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>An ownership chart to the ultimate beneficial owners.</li>
          <li>Source of funds for the remittance.</li>
          <li>Confirmation that no shareholder or beneficial owner is on US, EU or UK lists, and the remitting bank&apos;s status.</li>
          <li>The business rationale for the investment.</li>
        </ul>
        <h2 id="russia" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Russian approvals and currency control</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Under Russian currency control, share investments abroad above the reported threshold of RUB 30 million per counterparty need Bank of Russia approval, counted with earlier transactions with the same counterparty. The parent also notifies the Russian tax authority of foreign participations and accounts. Confirm the current rules with a Russian adviser before remitting.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We work with the Indian bank on the acceptable route, prepare the evidence pack, handle allotment and FC-GPR, and coordinate with your Russian and sanctions advisers.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link> and <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link>.
        </p>

        <GuideServiceBox path="/russia-to-india/funding-and-fema" />
        <GuideCTA
          title="Funding your Indian subsidiary from Russia?"
          description="Tell us the amount and remitting bank, and we will map the route and filings."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/russia-to-india/faq"
          seeAllLabel="See all Russian FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Russian parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "Bank of Russia", href: "https://www.cbr.ru/eng/" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Funding an Indian Subsidiary from Russia?"
        description="Tell us the amount, the remitting bank and whether it is equity or a loan, and we'll map the valuation, FC-GPR or ECB filing and the timeline."
      />
    </main>
  )
}
