import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideFaqList } from "@/components/guide/GuideFaqList"
import { GuideRelatedCards } from "@/components/guide/GuideRelatedCards"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideSources } from "@/components/guide/GuideSources"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/cost-of-setting-up-a-subsidiary-in-india"

const toc = [
  { id: "one-time", label: "One-time set-up costs" },
  { id: "home-costs", label: "Costs in your own country" },
  { id: "capital", label: "Share capital: an investment, not a cost" },
  { id: "annual", label: "Annual running costs after incorporation" },
  { id: "hidden", label: "Costs foreign parents often forget" },
  { id: "compare-quotes", label: "How to compare quotes" },
  { id: "first-year", label: "A first-year budget template" },
  { id: "save", label: "Ways to keep the set-up efficient" },
  { id: "registration-fee", label: "Indian subsidiary registration fee: what our package covers" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How much does it cost to set up a subsidiary in India?", a: "It depends on the share capital, the state, the documents needed in your own country and the services you choose. AU Corporate offers the best pricing with better work support, and the first consultation is free." },
  { q: "What is the minimum capital for a subsidiary in India?", a: "There is no legal minimum; fund 12 to 18 months of expected costs." },
  { q: "Are government fees included in AU Corporate's fee?", a: "Yes, for share capital up to ₹10 lakh in the standard package; larger capital or some states cost more." },
  { q: "Does the fee include FC-GPR?", a: "Yes. The share issue to the parent, share certificates and the FC-GPR filing are included." },
  { q: "What is not included?", a: "Notary and apostille fees in your country, courier costs, and compliance after incorporation." },
  { q: "What does annual compliance cost?", a: "It depends on the company's size and transactions; AU Corporate offers the best pricing with better work support and a free first consultation." },
  { q: "Is share capital a cost?", a: "No. It is the company's own money, used to pay its expenses." },
  { q: "Why do quotes for incorporation vary so much?", a: "Mainly because some exclude government fees, FC-GPR or the share issue; compare like with like." },
]

const relatedCards = [
  { title: "How long it takes", desc: "A realistic timeline from documents to bank account.", href: "/how-long-to-set-up-a-subsidiary-in-india" },
  { title: "India subsidiary registration", desc: "What the incorporation service covers.", href: "/india-subsidiary-registration" },
  { title: "Cost guide for US companies", desc: "A detailed budget template for US parents.", href: "/usa-to-india/cost-of-setting-up-a-subsidiary-in-india-from-the-us" },
  { title: "Resident director services", desc: "If you have no one in India to act as director.", href: "/resident-director-services-india" },
]

export default function CostOfSettingUpASubsidiaryInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"Cost of Setting Up a Subsidiary in India: One-Time Fees, Annual Running Costs and a Budget Template"}
        description={"AU Corporate offers the best pricing with better work support, and the first consultation is free."}
        datePublished="2026-11-07"
        dateModified="2026-11-07"
        inLanguage="en"
      />

      <Breadcrumb items={[{ label: "Cost of Setting Up a Subsidiary" }]} />

      <GuideHero eyebrow={"Cost and pricing"} title={"Cost of Setting Up a Subsidiary in India: One-Time Fees, Annual Running Costs and a Budget Template"} updated="7 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">The cost of setting up a subsidiary in India has three parts: Indian government fees and stamp duty, which rise with the authorised share capital and vary by state; professional fees for incorporation, the share issue and FC-GPR; and costs outside India, such as notary, apostille and courier charges in your own country. After incorporation, budget for annual running costs: accounting, audit, tax and GST filings, payroll, FEMA and Registrar filings, plus rent and salaries. The share capital you invest is not a cost; it funds the company&apos;s own expenses. AU Corporate offers the best pricing with better work support, and the first consultation is free.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="one-time" className="text-2xl font-bold text-gray-900 mt-12 mb-4">One-time set-up costs</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Cost item</th><th scope="col" className="border border-gray-300 p-3 text-left">Who it is paid to</th><th scope="col" className="border border-gray-300 p-3 text-left">Included in AU Corporate&apos;s fee?</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Name reservation and incorporation filing fees</th><td className="border border-gray-300 p-3">Ministry of Corporate Affairs</td><td className="border border-gray-300 p-3">Yes, for share capital up to ₹10 lakh</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Stamp duty on the memorandum and articles</th><td className="border border-gray-300 p-3">State government, through the filing</td><td className="border border-gray-300 p-3">Yes, for share capital up to ₹10 lakh; varies by state</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Digital signature certificates and Director Identification Numbers</th><td className="border border-gray-300 p-3">Certifying authority and Ministry of Corporate Affairs</td><td className="border border-gray-300 p-3">Yes</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">PAN and TAN</th><td className="border border-gray-300 p-3">Income Tax Department, issued with incorporation</td><td className="border border-gray-300 p-3">Yes</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Professional work: structure and FDI advice, filings, bank support, share issue, share certificates, FC-GPR</th><td className="border border-gray-300 p-3">AU Corporate</td><td className="border border-gray-300 p-3">Yes</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Notary, apostille or legalisation in your country</th><td className="border border-gray-300 p-3">Your local notary and authority</td><td className="border border-gray-300 p-3">No</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Courier of original documents</th><td className="border border-gray-300 p-3">Courier</td><td className="border border-gray-300 p-3">No</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Higher share capital or certain states</th><td className="border border-gray-300 p-3">Government fees and stamp duty</td><td className="border border-gray-300 p-3">Quoted separately where above the standard package</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          The single biggest variable in the government cost is the authorised share capital, because filing fees and stamp duty rise with it in many states. Starting with ₹10 lakh and increasing later is common, although each increase has its own filing and stamp duty.
        </p>

        <h2 id="home-costs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Costs in your own country</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The parent&apos;s documents, such as the certificate of incorporation, board resolution and directors&apos; identity documents, must be notarised and apostilled, or legalised by the Indian embassy where the country is outside the Apostille Convention. Notary and apostille charges vary widely by country and by the number of documents; some countries also require certified translations. Ask your notary for a quote on the document list we send you. Our country guides explain the steps for <Link href="/usa-to-india/documents-and-apostille" className="text-blue-800 font-semibold hover:underline">the USA</Link>, <Link href="/uk-to-india/documents-companies-house-apostille" className="text-blue-800 font-semibold hover:underline">the UK</Link>, <Link href="/germany-to-india/documents-handelsregister-apostille" className="text-blue-800 font-semibold hover:underline">Germany</Link> and <Link href="/japan-to-india/documents-and-apostille" className="text-blue-800 font-semibold hover:underline">Japan</Link>.
        </p>

        <h2 id="capital" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Share capital: an investment, not a cost</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India has no legal minimum share capital for a private limited company. The capital you remit is the company&apos;s money: it pays rent, salaries and set-up costs until the company earns revenue. Size it to cover 12 to 18 months of expected costs, because every further capital round repeats the valuation, allotment and FC-GPR filing.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Indian company plan</th><th scope="col" className="border border-gray-300 p-3 text-left">Typical first-year cost base to fund</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Sales or liaison presence with one or two staff</th><td className="border border-gray-300 p-3">Salaries, a co-working desk, travel and compliance</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Small development or support team of 10 people</th><td className="border border-gray-300 p-3">Salaries and benefits, office rent, equipment, compliance</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Larger captive centre</th><td className="border border-gray-300 p-3">Salaries, a fitted office, IT infrastructure, recruitment and compliance</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          A worked budget for your own plan is part of our engagement; see <Link href="/usa-to-india/cost-of-setting-up-a-subsidiary-in-india-from-the-us" className="text-blue-800 font-semibold hover:underline">the US cost guide</Link> for a detailed template.
        </p>

        <h2 id="annual" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Annual running costs after incorporation</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Area</th><th scope="col" className="border border-gray-300 p-3 text-left">What the work covers</th><th scope="col" className="border border-gray-300 p-3 text-left">How it is usually priced</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Accounting and bookkeeping</th><td className="border border-gray-300 p-3">Monthly books, reconciliations, management reports for the parent</td><td className="border border-gray-300 p-3">Fixed monthly fee by volume</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Tax and GST</th><td className="border border-gray-300 p-3">TDS returns, GST returns, advance tax, income tax return</td><td className="border border-gray-300 p-3">Fixed monthly or annual fee</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Payroll</th><td className="border border-gray-300 p-3">Monthly payroll, provident fund, ESI, professional tax, payslips</td><td className="border border-gray-300 p-3">Per employee per month</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Secretarial and Registrar</th><td className="border border-gray-300 p-3">Board meetings, AGM, registers, annual returns</td><td className="border border-gray-300 p-3">Fixed annual fee</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">FEMA and RBI</th><td className="border border-gray-300 p-3">FC-GPR on each capital round, FLA return</td><td className="border border-gray-300 p-3">Per filing or included in an annual package</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Statutory audit and tax audit</th><td className="border border-gray-300 p-3">Independent Chartered Accountant</td><td className="border border-gray-300 p-3">Annual audit fee</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Transfer pricing</th><td className="border border-gray-300 p-3">Study and Form 48 for transactions with the parent</td><td className="border border-gray-300 p-3">Annual fee</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Resident director</th><td className="border border-gray-300 p-3">A professional resident director, if needed</td><td className="border border-gray-300 p-3">Fixed annual fee</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate offers ongoing compliance as a package covering the areas you need, at the best pricing with better work support, after a free consultation about your company&apos;s size and transactions. The audit itself is performed by an independent audit firm.
        </p>

        <h2 id="hidden" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Costs foreign parents often forget</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Bank charges</strong> on inward remittances and currency conversion.</li>
          <li><strong>Stamp duty</strong> on intercompany agreements and office leases in India.</li>
          <li><strong>Office deposits:</strong> landlords commonly ask for several months&apos; rent as a deposit.</li>
          <li><strong>Gratuity and leave encashment</strong> liabilities that build up for employees.</li>
          <li><strong>Late fees and interest</strong> if filings are missed, which a compliance calendar avoids.</li>
          <li><strong>Exchange movements</strong> between budgeting in your currency and spending in rupees.</li>
        </ul>

        <h2 id="compare-quotes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to compare quotes</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Check whether Indian government fees and stamp duty are included, and up to what share capital.</li>
          <li>Check whether FC-GPR and the share issue are included; some quotes stop at the certificate of incorporation.</li>
          <li>Ask whether bank account opening support and share certificates are covered.</li>
          <li>Ask for the ongoing compliance price at the same time, because the first-year total matters more than the set-up fee.</li>
          <li>Check who will sign as resident director if you have no one in India, and at what cost.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          A low incorporation fee that excludes FEMA filings or the share issue often costs more once those are added. For timing, see <Link href="/how-long-to-set-up-a-subsidiary-in-india" className="text-blue-800 font-semibold hover:underline">how long it takes to set up a subsidiary</Link>.
        </p>
        <h2 id="first-year" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A first-year budget template</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Use these headings to build a first-year budget for the Indian company, then ask us to check it against your plan:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Incorporation package, including government fees and FC-GPR.</li>
          <li>Notary, apostille and courier in the parent&apos;s country.</li>
          <li>Resident director, if no one in the group can act.</li>
          <li>Office: registered office service, co-working desks or a lease with deposit.</li>
          <li>Salaries, statutory contributions and insurance for the first hires.</li>
          <li>Recruitment fees and equipment.</li>
          <li>Monthly accounting, tax, GST and payroll.</li>
          <li>Annual audit, tax audit, transfer pricing and Registrar filings.</li>
          <li>FEMA filings for later capital rounds.</li>
          <li>Bank charges and a contingency for exchange movements.</li>
        </ol>

        <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Ways to keep the set-up efficient</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Start with share capital of ₹10 lakh unless the business plan clearly needs more, because government charges rise with capital. Prepare the parent&apos;s documents in one batch so that notary and apostille work is done once. Use a registered office service until you know where the team will sit. Choose one firm for incorporation and ongoing compliance so that the records start correctly. Finally, plan the second capital round in advance rather than making several small remittances, each of which needs its own filings.
        </p>
        <h2 id="registration-fee" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian subsidiary registration fee: what our package covers</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our standard package covers structure and FDI advice, digital signatures and director identification numbers, name approval, incorporation with PAN and TAN, support with opening the bank account, the share issue to the parent, share certificates and the FC-GPR filing with the RBI. We agree the scope with you in a free consultation and confirm it in writing before any work begins.
        </p>



        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India firm of Chartered Accountants and Company Secretaries, serving foreign companies since 2016. We handle the Indian side end to end, with the best pricing, better work support and a free first consultation.
        </p>
        <GuideCTA title={"Get the Best Pricing for Your Indian Subsidiary"} description={"Tell us your share capital, state and what the company will do, and we will recommend the right package in a free consultation."} />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 7 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Get the Best Pricing for Your Indian Subsidiary"} description={"Tell us your share capital, state and what the company will do, and we will recommend the right package in a free consultation."} />
    </main>
  )
}
