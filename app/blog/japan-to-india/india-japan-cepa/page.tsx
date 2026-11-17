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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/india-japan-cepa"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "snapshot", label: "CEPA at a glance" },
  { id: "tariffs", label: "How the tariff cuts work in practice" },
  { id: "origin", label: "Rules of origin and certificates" },
  { id: "services-investment", label: "Services, investment and people" },
  { id: "separate-agreements", label: "CEPA, the tax treaty and the social security agreement" },
  { id: "plants", label: "CEPA for Japanese manufacturing in India" },
  { id: "claiming", label: "Claiming the CEPA rate at Indian customs" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "When did the India-Japan CEPA come into force?", a: "On 1 August 2011, after signature on 16 February 2011." },
  { q: "Does CEPA make it easier to set up a subsidiary in India?", a: "No. Company formation, FEMA and FDI rules are unchanged; CEPA mainly affects trade in goods and services." },
  { q: "How do I claim the CEPA tariff rate?", a: "Declare the CEPA rate on the bill of entry with a certificate of origin from the exporting country, and keep evidence that the goods meet the origin rules." },
  { q: "Do anti-dumping duties still apply under CEPA?", a: "Yes. Trade remedy duties are separate and apply where imposed." },
  { q: "Does CEPA change tax on dividends to Japan?", a: "No. The India-Japan tax treaty sets Indian tax on dividends, interest, royalties and fees." },
  { q: "Who issues the certificate of origin for Japanese exports to India?", a: "A designated authority in Japan issues it on the exporter's application, based on the exporter's origin evidence." },
]

const relatedCards = [
  { title: "India-Japan DTAA guide", desc: "Tax on payments between India and Japan.", href: "/japan-to-india/tax-and-social-security-treaties/india-japan-dtaa-guide" },
  { title: "Transfer pricing for Japanese groups", desc: "Pricing group supplies.", href: "/japan-to-india/transfer-pricing" },
  { title: "Manufacturing setup in India", desc: "Plants, approvals and incentives.", href: "/manufacturing-company-setup-in-india" },
]

export default function IndiaJapanCepaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"The India-Japan CEPA Explained for Japanese Companies: Tariffs, Rules of Origin, Services and Investment"}
        description={"How the India-Japan Comprehensive Economic Partnership Agreement affects Japanese companies: tariff cuts, rules of origin, certificates, services, investment and what it does not change."}
        datePublished="2026-11-13"
        dateModified="2026-11-13"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Set Up a Subsidiary in India from Japan: 2026 Guide", href: "/japan-to-india" },
          { label: "India-Japan CEPA: What It Means for Japanese Companies" },
        ]}
      />

      <GuideHero eyebrow={"Trade: India-Japan CEPA"} title={"The India-Japan CEPA Explained for Japanese Companies: Tariffs, Rules of Origin, Services and Investment"} updated="13 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The India-Japan Comprehensive Economic Partnership Agreement (CEPA) was signed on 16 February 2011 and has been in force since 1 August 2011. It removes or reduces customs duties on most goods traded between the two countries, sets rules of origin that decide which goods qualify, and covers trade in services, investment, the movement of business people, intellectual property and customs cooperation. For a Japanese company it matters most when importing components or machinery into India, or exporting Indian-made goods to Japan. It does not change how an Indian subsidiary is formed, funded or taxed: the Companies Act, FEMA and the India-Japan tax treaty still decide those.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: Set Up a Subsidiary in India from Japan: 2026 Guide
          </Link>
        </p>

        <h2 id="snapshot" className="text-2xl font-bold text-gray-900 mt-12 mb-4">CEPA at a glance</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Point</th><th scope="col" className="border border-gray-300 p-3 text-left">Position</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Signed / in force</th><td className="border border-gray-300 p-3">16 February 2011 / 1 August 2011</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Goods</th><td className="border border-gray-300 p-3">Tariffs removed or reduced on most traded goods, with phased schedules and some sensitive items excluded</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Rules of origin</th><td className="border border-gray-300 p-3">Goods must meet the agreement&apos;s origin criteria, generally a minimum regional value content together with a change in tariff classification</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Proof of origin</th><td className="border border-gray-300 p-3">A certificate of origin issued by the designated authority in the exporting country</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Services and investment</th><td className="border border-gray-300 p-3">Commitments on market access and treatment of investors, with each country&apos;s reservations</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Business people</th><td className="border border-gray-300 p-3">Provisions on temporary entry of business visitors and intra-company transferees, within each country&apos;s immigration law</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">What it does not change</th><td className="border border-gray-300 p-3">Company formation, FEMA filings, FDI caps and tax on profits and dividends</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="tariffs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the tariff cuts work in practice</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Each product&apos;s duty rate under CEPA is set by its tariff classification and the schedule for that line. Many lines reached zero after the phase-out period; some sensitive items kept a duty or were excluded. Before relying on a CEPA rate, confirm the classification of the product with the customs broker, check the CEPA rate for that line in the Indian customs tariff, and compare it with the standard rate, because for some items the general rate is already low.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Imports into India from Japan:</strong> components, machinery and materials used by a Japanese group&apos;s Indian plant are the most common beneficiaries.</li>
          <li><strong>Exports from India to Japan:</strong> Indian-made goods that meet the origin rules can enter Japan at the CEPA rate.</li>
          <li><strong>Anti-dumping and safeguard duties</strong> are separate and still apply where imposed, whatever the CEPA rate.</li>
        </ul>

        <h2 id="origin" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Rules of origin and certificates</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A product qualifies only if it originates in Japan or India under the agreement&apos;s rules. For manufactured goods this usually means a minimum share of value added in the two countries and a change in tariff classification from the inputs. The importer claims the CEPA rate on the bill of entry with a certificate of origin issued in the exporting country, and Indian customs can verify origin later under India&apos;s customs rules on origin claims, which put the burden on the importer to keep supporting information.
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Confirm the product&apos;s tariff classification.</li>
          <li>Check the origin criterion for that classification.</li>
          <li>Obtain cost data from the supplier to show the value-content test is met.</li>
          <li>Obtain the certificate of origin before shipment.</li>
          <li>Keep origin records for the period customs can review.</li>
        </ol>

        <h2 id="services-investment" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Services, investment and people</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          CEPA includes commitments on trade in services and investment, so Japanese service providers and investors have defined treatment, subject to the reservations each country listed. In practice, India&apos;s FDI Policy and FEMA still decide whether a Japanese company can invest in a sector and how the investment is reported, and India&apos;s immigration rules decide visas. The agreement&apos;s provisions on business visitors and intra-company transferees help clarify categories, but a Japanese engineer working in the Indian company still needs the right visa and, where staying long term, FRRO registration.
        </p>

        <h2 id="separate-agreements" className="text-2xl font-bold text-gray-900 mt-12 mb-4">CEPA, the tax treaty and the social security agreement</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Question</th><th scope="col" className="border border-gray-300 p-3 text-left">Which agreement decides</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Customs duty on goods</th><td className="border border-gray-300 p-3">CEPA</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Indian tax on dividends, interest, royalties and fees paid to Japan</th><td className="border border-gray-300 p-3">The India-Japan tax treaty (10% caps)</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Pension contributions for Japanese staff posted to India</th><td className="border border-gray-300 p-3">The India-Japan Social Security Agreement, in force since 1 October 2016</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Whether a Japanese company may invest in a sector</th><td className="border border-gray-300 p-3">India&apos;s FDI Policy and FEMA</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          See <Link href="/japan-to-india/tax-and-social-security-treaties/india-japan-dtaa-guide" className="text-blue-800 font-semibold hover:underline">the India-Japan DTAA guide</Link> and <Link href="/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" className="text-blue-800 font-semibold hover:underline">the social security agreement</Link>.
        </p>

        <h2 id="plants" className="text-2xl font-bold text-gray-900 mt-12 mb-4">CEPA for Japanese manufacturing in India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Japanese automotive, electronics and machinery groups often build supply chains that combine imported Japanese components with Indian parts. CEPA can reduce the duty on the Japanese components, while exports of finished goods back to Japan may qualify for CEPA treatment if they meet the origin rules. Customs values for imports from group companies must be consistent with transfer pricing, because both authorities review the same invoices. See <Link href="/manufacturing-company-setup-in-india" className="text-blue-800 font-semibold hover:underline">manufacturing company setup in India</Link>.
        </p>
        <h2 id="claiming" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Claiming the CEPA rate at Indian customs</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Indian importer claims the preferential rate when filing the bill of entry, quoting the CEPA notification and attaching the certificate of origin. Customs may ask for more information to verify origin, either at clearance or later, and can deny the preference if the importer cannot show that the goods meet the rules. For regular imports from a Japanese group company, keep a file per product with the classification, the origin calculation from the supplier and copies of certificates, and review it whenever the bill of materials changes.
        </p>


        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We check whether your products qualify for CEPA tariff rates, coordinate certificates of origin with your customs broker, set up the Indian company&apos;s GST and customs-facing records, and price group supplies consistently for customs and transfer pricing. We offer the best pricing with better work support, and the first consultation is free.
        </p>
        <GuideServiceBox path="/japan-to-india/india-japan-cepa" />
        <GuideCTA title={"Importing into India from Japan?"} description={"Tell us your products and supply chain, and we will check the CEPA position in a free consultation."} />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} seeAllHref="/japan-to-india/faq" seeAllLabel="See all the FAQs" seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit." />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Department of Commerce, India (trade agreements)", href: "https://commerce.gov.in/" },
            { label: "Ministry of Foreign Affairs of Japan", href: "https://www.mofa.go.jp/" },
            { label: "Central Board of Indirect Taxes and Customs", href: "https://www.cbic.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">&larr; Back to the complete guide</Link>
        </p>
        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Importing into India from Japan?"} description={"Tell us your products and supply chain, and we will check the CEPA position in a free consultation."} />
    </main>
  )
}
