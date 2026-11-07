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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/repatriating-profits"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "choices", label: "Choosing how to bring money home" },
  { id: "dividend", label: "Dividends" },
  { id: "fees", label: "Fees, royalties and interest" },
  { id: "process", label: "Processing a remittance" },
  { id: "compare", label: "Comparing the after-tax result" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the Indian tax on dividends to an Australian parent?", a: "Up to 15% under the India-Australia treaty, with an ATO certificate of residency and Form 41." },
  { q: "Are Indian dividends taxed in Australia?", a: "Generally not for an Australian company with at least a 10% voting interest; they are non-assessable non-exempt income." },
  { q: "What rate applies to royalties?", a: "Up to 15%, or 10% for equipment royalties." },
  { q: "Are fees for technical services taxed in India?", a: "The treaty treats many of them as royalties, taxable at up to 15%." },
  { q: "How is Indian tax on fees relieved in Australia?", a: "Through a foreign income tax offset." },
  { q: "Can a new subsidiary pay a dividend?", a: "Only from distributable profits after audited accounts are approved." },
  { q: "What are Forms 145 and 146?", a: "The remittance declarations that replaced Forms 15CA and 15CB." },
  { q: "When is Withholding Tax deposited?", a: "By the 7th of the following month." },
]

const relatedCards = [
  { title: "Tax Treaty and PE Risk", desc: "The treaty rates and PE rules.", href: "/australia-to-india/dtaa-pe-risk" },
  { title: "India-Australia DTAA", desc: "The treaty in detail.", href: "/australia-to-india/india-australia-dtaa" },
  { title: "Transfer Pricing", desc: "Pricing fees and royalties.", href: "/australia-to-india/transfer-pricing" },
  { title: "Australian Parent Obligations", desc: "Australian tax on Indian income.", href: "/australia-to-india/australian-parent-obligations" },
]

export default function RepatriatingProfitsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Repatriating Profits to Australia: Dividends, Fees, Royalties, Loans and the Paperwork"
        description="How an Australian parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief."
        datePublished="2026-10-15"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "Repatriating Profits from India to Australia: Forms and Tax" },
        ]}
      />

      <GuideHero
        eyebrow="Repatriate: moving money back"
        title="Repatriating Profits to Australia: Dividends, Fees, Royalties, Loans and the Paperwork"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Money returns to Australia as dividends, service fees, royalties, interest or loan repayments. The India-Australia treaty caps Indian tax at 15% on dividends, interest and royalties, and 10% on equipment royalties, with an ATO certificate of residency and Form 41. Dividends to an Australian company with at least a 10% voting interest are generally non-assessable non-exempt income, so the Indian tax on them is a final cost, while fees and royalties are assessable with a foreign income tax offset.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="repatriating-profits" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Dividends", "Indian tax capped at 15%; generally non-assessable non-exempt in Australia (section 768-5)"],
                ["Interest", "Indian tax capped at 15%; assessable in Australia with an offset"],
                ["Royalties", "Indian tax capped at 15% (10% for equipment); assessable in Australia with an offset"],
                ["Treaty documents", "ATO certificate of residency and Form 41 (previously Form 10F)"],
                ["Remittance forms", "Form 145 (previously 15CA) and, where required, Form 146 (previously 15CB)"],
                ["Deposit", "Indian Withholding Tax deposited by the 7th of the next month"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="choices" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing how to bring money home</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian tax</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Australian treatment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividend</th>
                <td className="border border-gray-300 p-3">Up to 15%</td>
                <td className="border border-gray-300 p-3">Generally non-assessable non-exempt for a 10% or greater voting interest</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Service fee</th>
                <td className="border border-gray-300 p-3">Up to 15% if treated as a royalty-type fee; otherwise business profits without PE</td>
                <td className="border border-gray-300 p-3">Assessable; foreign income tax offset</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Royalty</th>
                <td className="border border-gray-300 p-3">Up to 15%, or 10% for equipment</td>
                <td className="border border-gray-300 p-3">Assessable; foreign income tax offset</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Interest</th>
                <td className="border border-gray-300 p-3">Up to 15%</td>
                <td className="border border-gray-300 p-3">Assessable; foreign income tax offset</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Loan principal</th>
                <td className="border border-gray-300 p-3">None</td>
                <td className="border border-gray-300 p-3">Not income</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="dividend" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Dividends</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A dividend can be declared only from distributable profits after the audited accounts are approved, so most subsidiaries cannot pay one in their first years. Because the Australian parent usually receives it as non-assessable non-exempt income, the 15% Indian tax is the full tax cost on that route, which makes dividends attractive once the Indian company is profitable.
        </p>
        <h2 id="fees" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Fees, royalties and interest</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Fees, royalties and interest reduce Indian taxable profit only if they are real, priced at arm&apos;s length and supported by a signed agreement and evidence. The India-Australia treaty treats many technical service fees as royalties, taxable in India at up to 15%. In Australia these receipts are assessable, with a foreign income tax offset for the Indian tax.
        </p>
        <h2 id="process" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Processing a remittance</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Confirm the payment type and treaty article.</li>
          <li>Hold a current ATO certificate of residency and Form 41.</li>
          <li>Deduct and deposit Indian tax by the 7th of the next month.</li>
          <li>Prepare Form 145 and, where required, a Chartered Accountant&apos;s Form 146.</li>
          <li>Remit through the bank with the board resolution or invoice.</li>
        </ol>
        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Comparing the after-tax result</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          For a profitable subsidiary, compare a dividend taxed at 15% in India and not again in Australia with a fee or royalty that is deductible in India at the corporate rate but assessable in Australia. The answer depends on the Indian tax saved, the Australian tax payable and whether the payment can be supported for transfer pricing.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We confirm the treaty position, obtain the documents, deduct and deposit the tax, prepare Forms 145 and 146 and remit to Australia.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link> and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/repatriating-profits" />
        <GuideCTA
          title="Planning a dividend or fee to Australia?"
          description="Tell us the amount and route, and we will compare the tax cost."
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
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Australian Taxation Office", href: "https://www.ato.gov.au" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
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
        title="Ready to Repatriate Profits to Australia?"
        description="Tell us your planned dividend amount and timing — we'll map the withholding tax, DTAA relief and RBI reporting involved."
      />
    </main>
  )
}
