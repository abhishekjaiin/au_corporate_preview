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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/tax-and-social-security-treaties/treaty-benefits-documents"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "set", label: "The document set for a Japanese recipient" },
  { id: "residence", label: "Getting the Certificate of Residence in Japan" },
  { id: "form41", label: "Filing Form 41 in India" },
  { id: "tests", label: "Beneficial ownership and anti-abuse" },
  { id: "routine", label: "A routine for recurring payments" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is a Certificate of Residence?", a: "A certificate from the Japanese tax office confirming the company is resident in Japan for treaty purposes, needed to claim the 10% rate." },
  { q: "What is Form 41?", a: "The statement under the Income-tax Act, 2025, previously Form 10F, giving the details a non-resident must provide to claim treaty benefits." },
  { q: "Is a no-PE declaration required?", a: "Payers and tax officers commonly ask for one, especially for fees for services." },
  { q: "How often must the certificate be renewed?", a: "For each period of payments, usually each year; the payer needs a valid certificate before each payment." },
  { q: "What if the documents arrive after the payment?", a: "The payer must deduct at the domestic rate; any excess can only be recovered through a refund claim in India." },
  { q: "Does a regional holding company change the position?", a: "It can. The treaty then depends on that company's own residence and beneficial ownership, so the structure needs review." },
  { q: "Can the Japanese parent file Form 41 without an Indian PAN?", a: "The portal requires a PAN or a non-resident registration, so the parent usually obtains one." },
  { q: "Which payments benefit from the 10% rate?", a: "Dividends, interest, royalties and fees for technical services paid to a Japanese resident beneficial owner." },
]

const relatedCards = [
  { title: "India-Japan DTAA Withholding Rates", desc: "The rate for each payment type.", href: "/japan-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" },
  { title: "The India-Japan DTAA Explained", desc: "How the treaty works.", href: "/japan-to-india/tax-and-social-security-treaties/india-japan-dtaa-guide" },
  { title: "Repatriating Profits to Japan", desc: "Dividends, fees and royalties in practice.", href: "/japan-to-india/repatriating-profits" },
  { title: "Tax Notices and Disputes", desc: "When a treaty claim is questioned.", href: "/japan-to-india/tax-notices-and-litigation" },
]

export default function TreatyBenefitsDocumentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How to Claim India-Japan Treaty Benefits: Certificate of Residence, Form 41 and Beneficial Ownership"
        description="Documents a Japanese company needs to claim India-Japan treaty rates: certificate of residence, Form 41 (previously Form 10F) and no-PE declaration."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "Tax and Social Security Treaties", href: "/japan-to-india/tax-and-social-security-treaties" },
          { label: "Claiming India-Japan Treaty Benefits: Forms and Documents" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: claiming relief"
        title="How to Claim India-Japan Treaty Benefits: Certificate of Residence, Form 41 and Beneficial Ownership"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          To pay a Japanese company at the 10% India-Japan treaty rate, the Indian payer needs proof that the recipient is resident in Japan and entitled to the treaty: a Certificate of Residence from the Japanese tax office covering the payment date, Form 41 (previously Form 10F) filed on the Indian portal, and usually declarations of beneficial ownership and no permanent establishment. Without them, the payer must deduct tax at the higher domestic rate.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Proof of residence", "Certificate of Residence (kyojusha shomeisho) from the Japanese tax office"],
                ["Indian statement", "Form 41 (previously Form 10F), filed electronically on the Indian income tax portal"],
                ["Usual declarations", "Beneficial ownership and no permanent establishment in India for the payment"],
                ["Supporting contract", "The agreement under which the payment is made"],
                ["Rate achieved", "10% on dividends, interest, royalties and fees for technical services"],
                ["Legal basis", "Section 159 of the Income-tax Act, 2025 (previously Sections 90 and 90A)"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="set" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The document set for a Japanese recipient</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Document</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Issued or signed by</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Why the payer needs it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Certificate of Residence</th>
                <td className="border border-gray-300 p-3">Japanese tax office with jurisdiction over the parent</td>
                <td className="border border-gray-300 p-3">Proves Japanese residence for the period</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Form 41</th>
                <td className="border border-gray-300 p-3">Japanese recipient, on the Indian portal</td>
                <td className="border border-gray-300 p-3">Gives the details the Income-tax Act requires for treaty claims</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Beneficial ownership declaration</th>
                <td className="border border-gray-300 p-3">Japanese recipient</td>
                <td className="border border-gray-300 p-3">Confirms the income is not passed on to another party</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">No-PE declaration</th>
                <td className="border border-gray-300 p-3">Japanese recipient</td>
                <td className="border border-gray-300 p-3">Supports treatment of fees as not attributable to an Indian PE</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Agreement or board resolution</th>
                <td className="border border-gray-300 p-3">Both parties or the Indian board</td>
                <td className="border border-gray-300 p-3">Shows what the payment is for</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="residence" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Getting the Certificate of Residence in Japan</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The Japanese parent applies to its local tax office for a certificate of residence for treaty purposes, in English. Ask for a certificate that covers the period of the payments, and renew it each year in good time, because the Indian payer must hold a valid certificate before the payment date. Japanese tax offices usually issue certificates quickly, but year-end and March periods are busy.
        </p>
        <h2 id="form41" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Filing Form 41 in India</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Form 41 replaced Form 10F under the Income-tax Act, 2025. It records the recipient&apos;s status, nationality, tax identification number, period of residence and address. The Japanese company files it on the Indian income tax portal, which requires a PAN or a registration for non-residents, or provides the details to the Indian payer as the rules allow.
        </p>
        <h2 id="tests" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Beneficial ownership and anti-abuse</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Treaty rates on dividends, interest and royalties go to the beneficial owner. A Japanese parent that receives income in its own right usually meets this easily. Where a regional company in another country sits between Japan and India, or the income is passed on, the claim needs closer review under the beneficial ownership condition, India&apos;s general anti-avoidance rule and any principal purpose test that applies to the treaty.
        </p>
        <h2 id="routine" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A routine for recurring payments</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Diarise the certificate renewal one month before the current one expires.</li>
          <li>File Form 41 for each tax year before the first payment.</li>
          <li>Keep the declarations and agreement in the payment file.</li>
          <li>Check each payment type against the treaty article that applies.</li>
          <li>Prepare Forms 145 and 146 with the treaty rate stated.</li>
        </ol>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We list exactly which documents the Indian payer needs, prepare Form 41 and the declarations, apply the treaty rate and file the remittance forms.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link> and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/tax-and-social-security-treaties/treaty-benefits-documents" />
        <GuideCTA
          title="Paying your Japanese parent at the treaty rate?"
          description="Tell us the payments, and we will send the document checklist."
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
            { label: "Income Tax Department: Form 41", href: "https://www.incometax.gov.in" },
            { label: "National Tax Agency, Japan", href: "https://www.nta.go.jp/english/" },
            { label: "Ministry of Finance, Japan: tax treaties", href: "https://www.mof.go.jp/english/" },
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
        title="Need a Japanese Certificate of Residence or Form 10F?"
        description="Tell us the payments you plan to make to Japan, and we'll prepare the treaty documentation pack and remittance forms."
      />
    </main>
  )
}
