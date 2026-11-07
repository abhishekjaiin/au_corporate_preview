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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/repatriating-profits"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "routes", label: "Ways to send money to Japan" },
  { id: "dividends", label: "Paying a dividend" },
  { id: "fees", label: "Service fees and royalties" },
  { id: "paperwork", label: "The paperwork for each remittance" },
  { id: "japan-tax", label: "How Japan taxes what arrives" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the Indian tax on dividends paid to a Japanese parent?", a: "10% under the India-Japan treaty, with a Japanese Certificate of Residence and Form 41, against a higher domestic rate." },
  { q: "Are dividends from India taxed in Japan?", a: "If the parent holds 25% or more for six months, 95% of the dividend is exempt under Japan's foreign dividend exemption." },
  { q: "What rate applies to royalties paid to Japan?", a: "10% under the treaty, against higher domestic rates." },
  { q: "Are service fees to the Japanese parent taxed in India?", a: "Fees for technical services are taxed at up to 10% under the treaty; other service fees are business profits, taxed in India only if the parent has a permanent establishment." },
  { q: "What is a Certificate of Residence?", a: "A certificate from the Japanese tax office confirming the parent is resident in Japan for the treaty, needed to claim the 10% rate." },
  { q: "What are Forms 145 and 146?", a: "The remittance declarations that replaced Forms 15CA and 15CB under the Income-tax Act, 2025." },
  { q: "Can a loss-making subsidiary pay a dividend?", a: "No. Dividends need distributable profits after the audited accounts are approved." },
  { q: "Is GST due on fees and royalties paid to Japan?", a: "Yes, usually under reverse charge by the Indian subsidiary, with input credit where eligible." },
]

const relatedCards = [
  { title: "India-Japan DTAA Guide", desc: "The treaty articles behind the 10% rate.", href: "/japan-to-india/tax-and-social-security-treaties/india-japan-dtaa-guide" },
  { title: "Treaty Benefits Documents", desc: "Certificate of Residence and Form 41.", href: "/japan-to-india/tax-and-social-security-treaties/treaty-benefits-documents" },
  { title: "Transfer Pricing", desc: "Pricing fees and royalties.", href: "/japan-to-india/transfer-pricing" },
  { title: "Japan Parent Obligations", desc: "How the parent reports Indian income.", href: "/japan-to-india/japan-parent-obligations" },
]

export default function RepatriatingProfitsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Repatriating Profits to Japan: Dividends, Fees, Royalties, Loans and the Paperwork"
        description="How a Japanese parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans. Forms 145 and 146, Withholding Tax and DTAA relief."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "Repatriating Profits from India to Japan: Forms and Tax" },
        ]}
      />

      <GuideHero
        eyebrow="Repatriate: moving money back"
        title="Repatriating Profits to Japan: Dividends, Fees, Royalties, Loans and the Paperwork"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Money returns to Japan as dividends, fees for services, royalties, interest or loan repayments. The India-Japan treaty caps Indian tax at 10% on dividends, interest, royalties and fees for technical services, against higher domestic rates, if the parent provides a Japanese Certificate of Residence and Form 41. Dividends that qualify for Japan&apos;s foreign dividend exemption are 95% exempt in Japan, so the Indian 10% is largely the final cost.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="repatriating-profits" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Treaty rate", "10% on dividends, interest, royalties and fees for technical services"],
                ["Domestic rate without treaty", "Generally 20% plus surcharge and cess on dividends to a non-resident"],
                ["Treaty documents", "Certificate of Residence from the Japanese tax office and Form 41 (previously Form 10F)"],
                ["Remittance forms", "Form 145 (previously 15CA) and, where required, Form 146 (previously 15CB)"],
                ["Japanese dividend exemption", "95% exempt for a holding of 25% or more for six months"],
                ["Withholding deposit", "By the 7th of the month after deduction"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Ways to send money to Japan</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian tax</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Japanese result</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">When it suits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividend</th>
                <td className="border border-gray-300 p-3">10% under the treaty</td>
                <td className="border border-gray-300 p-3">95% exempt if the holding conditions are met</td>
                <td className="border border-gray-300 p-3">Profitable subsidiary with audited distributable profits</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Service fee to the parent</th>
                <td className="border border-gray-300 p-3">Up to 10% if fees for technical services; nil if business profits without a PE</td>
                <td className="border border-gray-300 p-3">Taxable, with credit for Indian tax</td>
                <td className="border border-gray-300 p-3">Real services with evidence and an agreement</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Royalty for technology or brand</th>
                <td className="border border-gray-300 p-3">10% under the treaty</td>
                <td className="border border-gray-300 p-3">Taxable, with credit for Indian tax</td>
                <td className="border border-gray-300 p-3">Licensed Japanese technology used in India</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Interest on a parent loan</th>
                <td className="border border-gray-300 p-3">10% under the treaty</td>
                <td className="border border-gray-300 p-3">Taxable, with credit</td>
                <td className="border border-gray-300 p-3">Loan under the ECB rules</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Loan repayment</th>
                <td className="border border-gray-300 p-3">No tax on principal</td>
                <td className="border border-gray-300 p-3">Not income</td>
                <td className="border border-gray-300 p-3">Repaying an ECB on schedule</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="dividends" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Paying a dividend</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A dividend can only be paid out of profits after the accounts are audited and approved, so a subsidiary in its early loss-making years cannot pay one. The board recommends it, shareholders approve a final dividend, and the company deducts 10% under the treaty when the Certificate of Residence and Form 41 are on file. Because the parent receives the dividend largely tax-free in Japan, groups often prefer dividends once the subsidiary is profitable.
        </p>
        <h2 id="fees" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Service fees and royalties</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Fees and royalties reduce the subsidiary&apos;s taxable profit in India, but only if they are real, priced at arm&apos;s length and supported by a signed agreement and evidence of what Japan provided. They also carry GST under reverse charge in India. In Japan they are ordinary income, with credit for the Indian Withholding Tax, so the overall tax cost differs from a dividend.
        </p>
        <h2 id="paperwork" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The paperwork for each remittance</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Confirm the payment type and the treaty rate.</li>
          <li>Hold a current Certificate of Residence covering the payment date and Form 41.</li>
          <li>Deduct tax and deposit it by the 7th of the next month.</li>
          <li>Prepare Form 145, and Form 146 from a Chartered Accountant where required.</li>
          <li>Remit through the authorised dealer bank with the invoice or board resolution.</li>
        </ol>
        <h2 id="japan-tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Japan taxes what arrives</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Qualifying dividends: 95% exempt under the foreign dividend exemption, so no Japanese foreign tax credit is claimed for the Indian tax on them.</li>
          <li>Fees, royalties and interest: taxable in Japan, with a foreign tax credit for the Indian tax, subject to limits.</li>
          <li>Japanese controlled foreign company rules can apply where the Indian subsidiary&apos;s effective tax rate is low, which is unusual at Indian rates.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We check the treaty position, obtain the documents, deduct and deposit the tax, prepare Forms 145 and 146, and remit dividends, fees and royalties to Japan.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link> and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/repatriating-profits" />
        <GuideCTA
          title="Planning a first dividend to Japan?"
          description="Tell us the amount and timing, and we will map the tax and paperwork."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/japan-to-india/faq"
          seeAllLabel="See all Japanese FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Japanese parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "National Tax Agency, Japan", href: "https://www.nta.go.jp/english/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Sending Profits Back to Japan?"
        description="Tell us the dividend, fee or royalty you plan to pay, and we'll map the treaty rate, the Japanese Certificate of Residence and the remittance forms."
      />
    </main>
  )
}
