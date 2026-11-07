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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/global-vat"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "principle", label: "Why the customer's country decides" },
  { id: "markets", label: "Common markets for Japanese digital sellers" },
  { id: "india", label: "Selling digital services into India" },
  { id: "subsidiary", label: "Where the Indian subsidiary fits" },
  { id: "set-up", label: "Setting up the process" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does a Japanese app seller need Indian GST registration?", a: "Yes, if it sells online services to Indian consumers. There is no threshold for OIDAR services, and the rate is 18% IGST." },
  { q: "What if the Indian customers are businesses?", a: "Indian businesses registered for GST account for the tax under reverse charge, so the Japanese seller usually does not register for those sales." },
  { q: "What return does an OIDAR supplier file in India?", a: "GSTR-5A, monthly, with payment of the IGST collected." },
  { q: "Is income tax also due in India on software sales?", a: "Possibly. Depending on the facts, software payments can be royalties or fees for technical services taxed at up to 10% under the India-Japan treaty, or business income with no Indian tax if there is no permanent establishment." },
  { q: "Can the Indian subsidiary handle GST for the parent's sales?", a: "Only if the subsidiary itself sells to Indian customers. Otherwise the registration belongs to the Japanese seller." },
  { q: "Is an export of services by the Indian subsidiary taxed?", a: "Exports of services that meet the GST conditions are zero-rated, so the subsidiary charges no GST to the Japanese parent and can claim refunds of input tax." },
  { q: "How is the customer's location proved?", a: "With evidence such as the billing address, IP address, bank or card country, or SIM country, depending on each country's rules." },
  { q: "Do these rules apply to physical goods?", a: "No. Physical goods are taxed on import through customs and import VAT or GST, which follow different rules." },
]

const relatedCards = [
  { title: "Transfer Pricing", desc: "Pricing services between the subsidiary and Japan.", href: "/japan-to-india/transfer-pricing" },
  { title: "Tax Treaty and PE Risk", desc: "When sales into India create Indian tax.", href: "/japan-to-india/dtaa-pe-risk" },
  { title: "Repatriating Profits to Japan", desc: "Royalties and fees under the treaty.", href: "/japan-to-india/repatriating-profits" },
  { title: "Common Mistakes", desc: "Pitfalls Japanese parents meet in India.", href: "/japan-to-india/common-mistakes" },
]

export default function GlobalVatPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Global VAT for Japanese Companies: Registration, Filing and Compliance"
        description="How VAT works for Japanese companies selling digital services and goods into Europe, the UK and beyond: registration, B2B and B2C rules and compliance."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "Global VAT for Japanese Companies Selling Abroad" },
        ]}
      />

      <GuideHero
        eyebrow="Beyond India: VAT"
        title="Global VAT for Japanese Companies: Registration, Filing and Compliance"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Japanese company that sells software, apps or other digital services to consumers abroad usually has to register for the destination country&apos;s VAT or GST, often from the first sale, because the tax follows where the customer is, not where the seller is. In India the same rule applies to online services sold to Indian consumers (OIDAR), at 18% GST. Business customers usually account for the tax themselves under reverse charge.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="global-vat" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Basic rule", "Digital services to consumers are taxed where the consumer belongs"],
                ["Business customers", "Usually reverse charge: the customer accounts for the tax"],
                ["India", "OIDAR services to Indian consumers: foreign supplier registers and pays 18% IGST"],
                ["European Union", "Non-Union OSS scheme lets a non-EU seller file one return for B2C digital sales across member states"],
                ["Japan", "Japanese consumption tax (10% standard rate) applies to domestic supplies; cross-border digital services follow Japan's own rules"],
                ["Evidence", "Customer location evidence such as billing address, IP address or payment card country"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="principle" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why the customer&apos;s country decides</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Most countries now tax electronically supplied services in the place of consumption. A Japanese app developer selling subscriptions to consumers in Europe, the UK, Australia, Singapore or India is treated as making supplies in each of those countries. Where the buyer is a registered business, the reverse charge usually moves the obligation to the buyer, so the work falls mainly on consumer sales.
        </p>
        <h2 id="markets" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common markets for Japanese digital sellers</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Market</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">How a non-resident seller accounts</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">European Union</th>
                <td className="border border-gray-300 p-3">Register for the non-Union One Stop Shop and file one quarterly return</td>
                <td className="border border-gray-300 p-3">Rates differ by member state</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">United Kingdom</th>
                <td className="border border-gray-300 p-3">Register for UK VAT; no threshold for non-established sellers of digital services</td>
                <td className="border border-gray-300 p-3">Quarterly returns</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Australia</th>
                <td className="border border-gray-300 p-3">Simplified GST registration above the A$75,000 turnover threshold</td>
                <td className="border border-gray-300 p-3">10% GST</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Singapore</th>
                <td className="border border-gray-300 p-3">Overseas vendor registration above the turnover thresholds</td>
                <td className="border border-gray-300 p-3">Current GST rate applies</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">India</th>
                <td className="border border-gray-300 p-3">OIDAR registration with a simplified scheme; no threshold for online services to consumers</td>
                <td className="border border-gray-300 p-3">18% IGST; monthly GSTR-5A</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rates, thresholds and filing frequencies change, so confirm each market&apos;s current position before launch.
        </p>
        <h2 id="india" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Selling digital services into India</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A Japanese company that sells online services directly to Indian consumers registers as an OIDAR supplier, charges 18% IGST and files a monthly GSTR-5A return. Sales to Indian businesses registered for GST fall under the reverse charge instead. Income tax is a separate question: payments for software can be treated as royalties or fees for technical services under the India-Japan treaty, depending on the facts. See our <Link href="/oidar-gst-registration-india" className="text-blue-800 font-semibold hover:underline">OIDAR GST registration service</Link> for the process.
        </p>
        <h2 id="subsidiary" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where the Indian subsidiary fits</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>If the Indian subsidiary resells the parent&apos;s services to Indian customers, it charges domestic GST on its own invoices, and the parent&apos;s charge to the subsidiary is an import of services under reverse charge.</li>
          <li>If the subsidiary only provides development or support services to Japan, its invoices are usually exports of services, zero-rated for GST when the conditions are met.</li>
          <li>The choice affects transfer pricing and permanent establishment analysis as well as indirect tax, so decide the model before launch.</li>
        </ul>
        <h2 id="set-up" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Setting up the process</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>List the countries where consumers can buy and estimate sales by market.</li>
          <li>Decide which markets need registration now and which fall below thresholds.</li>
          <li>Configure checkout to capture two pieces of location evidence and apply the right rate.</li>
          <li>Assign who files each return and when.</li>
          <li>Reconcile tax collected to returns filed each period.</li>
        </ol>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We register Japanese sellers for Indian GST on online services, set up the monthly GSTR-5A filings, and advise on how the Indian subsidiary should invoice when it resells or supports the parent&apos;s digital products.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/oidar-gst-registration-india" className="text-blue-800 font-semibold hover:underline">OIDAR GST registration</Link> and <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/global-vat" />
        <GuideCTA
          title="Selling digital services into India from Japan?"
          description="Tell us how you sell and to whom, and we will map the GST position."
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
            { label: "GST portal", href: "https://www.gst.gov.in" },
            { label: "Central Board of Indirect Taxes and Customs", href: "https://cbic-gst.gov.in" },
            { label: "European Commission: One Stop Shop", href: "https://vat-one-stop-shop.ec.europa.eu" },
            { label: "National Tax Agency, Japan", href: "https://www.nta.go.jp/english/" },
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
        title="Selling Digital Services into Several Countries?"
        description="Tell us where your customers are, and we'll map the VAT and GST registrations your group needs."
      />
    </main>
  )
}
