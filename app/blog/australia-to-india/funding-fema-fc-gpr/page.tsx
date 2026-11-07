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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/funding-fema-fc-gpr"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "money-path", label: "How the money gets from Australia to India" },
  { id: "deadlines", label: "Deadlines that start when the money lands" },
  { id: "debt-or-equity", label: "Equity or a loan from Australia" },
  { id: "currency", label: "Managing the AUD-rupee movement" },
  { id: "australian-side", label: "On the Australian side" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can the Australian parent send Australian dollars?", a: "Yes. The Indian bank converts Australian or US dollars into rupees and issues the foreign inward remittance certificate." },
  { q: "How long does the Indian company have to allot shares?", a: "60 days from the date the money is credited; otherwise it must be refunded to Australia within the following 15 days." },
  { q: "When is FC-GPR filed?", a: "Within 30 days of the share allotment, on the RBI's FIRMS portal." },
  { q: "Does Press Note 3 apply to an Australian investor?", a: "No, unless a beneficial owner in the ownership chain is from a country sharing a land border with India." },
  { q: "What is the Indian tax on interest paid to Australia?", a: "Up to 15% under the India-Australia treaty, with an ATO certificate of residency and Form 41." },
  { q: "Is there a limit on interest deductions in India?", a: "Yes. Interest on debt from non-resident associated enterprises is deductible only up to 30% of EBITDA." },
  { q: "Is a minimum capital required?", a: "No. Plan enough to cover 12 to 18 months of the subsidiary's costs." },
  { q: "What does a late FC-GPR cost?", a: "₹7,500 plus 0.025% of the amount involved for each year of delay, for up to three years." },
]

const relatedCards = [
  { title: "Share Valuation", desc: "Pricing shares issued to the Australian parent.", href: "/australia-to-india/share-valuation" },
  { title: "Repatriating Profits to Australia", desc: "Dividends, fees and royalties under the treaty.", href: "/australia-to-india/repatriating-profits" },
  { title: "Incorporation Process from Australia", desc: "Setting up before the money moves.", href: "/australia-to-india/incorporation-process" },
  { title: "Australian Parent Obligations", desc: "Australian tax and reporting on the investment.", href: "/australia-to-india/australian-parent-obligations" },
]

export default function FundingFemaFcGprPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Funding the Indian Subsidiary: FEMA Rules, Share Allotment and Form FC-GPR"
        description="How an Australian parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS."
        datePublished="2026-10-15"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "Funding an Indian Subsidiary: FEMA and Form FC-GPR" },
        ]}
      />

      <GuideHero
        eyebrow="Fund: capital infusion"
        title="Funding the Indian Subsidiary: FEMA Rules, Share Allotment and Form FC-GPR"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Australian Pty Ltd normally funds its Indian subsidiary by subscribing for equity shares, sent in Australian or US dollars through the banking channel. The Indian company must allot the shares within 60 days of receipt at no less than fair value, and report the issue to the RBI in Form FC-GPR within 30 days of allotment. A parent loan is possible as an external commercial borrowing, but India caps interest deductions on related-party debt at 30% of EBITDA.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="funding-fema-fc-gpr" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Currency", "Australian or US dollars, converted to rupees by the Indian bank, which issues the FIRC"],
                ["Route", "Automatic Route in most sectors; Press Note 3 does not apply to Australia"],
                ["Price", "Not below fair value certified by a Chartered Accountant or SEBI-registered merchant banker"],
                ["Allotment", "Within 60 days of receipt, or refund within 15 more days"],
                ["RBI filing", "FC-GPR on FIRMS within 30 days of allotment"],
                ["Debt option", "External commercial borrowing; Indian interest deductions on related-party debt capped at 30% of EBITDA"],
                ["Late filing", "₹7,500 plus 0.025% of the amount per year of delay, up to three years"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="money-path" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the money gets from Australia to India</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>The Indian company is incorporated and its current account is open.</li>
          <li>The Australian parent instructs its bank to send the subscription amount from the parent&apos;s own account, naming the Indian company exactly as on the bank&apos;s records.</li>
          <li>The Indian authorised dealer bank converts the dollars to rupees and issues the foreign inward remittance certificate with a KYC report on the Australian remitter.</li>
          <li>The Indian board allots shares at the agreed rupee price and files the return of allotment with the Registrar.</li>
          <li>FC-GPR is filed on the RBI&apos;s FIRMS portal with the FIRC, the valuation certificate and a Company Secretary&apos;s certificate.</li>
        </ol>
        <h2 id="deadlines" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Deadlines that start when the money lands</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">What</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Deadline</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">If missed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Report the receipt on FIRMS</th>
                <td className="border border-gray-300 p-3">30 days from credit</td>
                <td className="border border-gray-300 p-3">Late Submission Fee</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Allot shares</th>
                <td className="border border-gray-300 p-3">60 days from credit</td>
                <td className="border border-gray-300 p-3">Refund to Australia within 15 more days</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">File FC-GPR</th>
                <td className="border border-gray-300 p-3">30 days from allotment</td>
                <td className="border border-gray-300 p-3">Late Submission Fee or compounding</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">FLA return</th>
                <td className="border border-gray-300 p-3">15 July each year</td>
                <td className="border border-gray-300 p-3">Late reporting penalty</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          Because the Indian year ends on 31 March and the Australian one on 30 June, a remittance in March can straddle two Indian years for the FLA return. Keep the FIRC and allotment dates on file for both.
        </p>
        <h2 id="debt-or-equity" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Equity or a loan from Australia</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Equity is the usual first round: no repayment schedule, simple reporting and a clean base for later dividends that can be non-assessable non-exempt income in Australia. A loan from the parent is an external commercial borrowing, with conditions on the lender, maturity, cost ceiling and end use. Interest paid to Australia bears Indian Withholding Tax at up to 15% under the India-Australia treaty, India limits the deduction to 30% of EBITDA, and Australia&apos;s thin capitalisation rules look at the parent&apos;s own debt, so a mostly-debt structure rarely helps a start-up subsidiary.
        </p>
        <h2 id="currency" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Managing the AUD-rupee movement</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The share price is fixed in rupees, so the number of shares depends on the rupee credit actually received. Fix the issue price before sending, then let the share count follow the FIRC. A small buffer in the amount sent covers bank charges and a weaker Australian dollar.
        </p>
        <h2 id="australian-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">On the Australian side</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The parent&apos;s board approves the investment and the authorised signatory for the Indian documents.</li>
          <li>The investment is recorded at its Australian dollar cost under Australian Accounting Standards, separately from the rupee share value.</li>
          <li>Interest on any parent loan is assessable in Australia, with a foreign income tax offset for the Indian Withholding Tax.</li>
          <li>Transfer pricing on the loan is reviewed by both the Indian authorities and the ATO under Division 815.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We prepare the remittance instructions for the Australian parent, arrange the valuation, handle the allotment and file the FIRMS reports and FC-GPR, and advise on equity versus a parent loan.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/funding-fema-fc-gpr" />
        <GuideCTA
          title="Sending the first capital from Australia?"
          description="Tell us the amount and timing, and we will plan the remittance, allotment and FC-GPR."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/australia-to-india/faq"
          seeAllLabel="See all Australian FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Australian parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Reserve Bank of India (FEMA and FIRMS)", href: "https://www.rbi.org.in" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Australian Taxation Office", href: "https://www.ato.gov.au" },
          ]}
        />

        <p className="mt-6">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Funding Your Indian Subsidiary?"
        description="Tell us your planned investment amount and structure — we'll map the FC-GPR filing and FEMA reporting timeline."
      />
    </main>
  )
}
