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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/india-australia-ecta"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "snapshot", label: "ECTA at a glance" },
  { id: "goods", label: "Who benefits on goods" },
  { id: "origin", label: "Rules of origin in practice" },
  { id: "tax-change", label: "The technical services tax change" },
  { id: "services", label: "Services, professionals and investment" },
  { id: "ceca", label: "From ECTA to CECA" },
  { id: "checklist", label: "A checklist for Australian exporters" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "When did the India-Australia ECTA come into force?", a: "On 29 December 2022, after signature on 2 April 2022." },
  { q: "Does ECTA change how an Australian company sets up in India?", a: "No. Company formation, FEMA and FDI rules are unchanged." },
  { q: "Which tax change came with ECTA?", a: "Australia stopped taxing Indian firms' offshore technical services income from 2023." },
  { q: "Do all Australian goods enter India duty-free?", a: "No. India removed or reduced duties on many lines, with phased schedules and exclusions for sensitive items." },
  { q: "What is CECA?", a: "A broader India-Australia agreement under negotiation to build on ECTA." },
  { q: "Does ECTA cover services as well as goods?", a: "Yes. It includes services commitments, though company formation and investment rules in India are unchanged." },
]

const relatedCards = [
  { title: "India-Australia DTAA", desc: "Tax on payments between India and Australia.", href: "/australia-to-india/india-australia-dtaa" },
  { title: "Transfer pricing for Australian groups", desc: "Pricing group supplies and services.", href: "/australia-to-india/transfer-pricing" },
  { title: "Australia to India", desc: "The complete guide.", href: "/australia-to-india" },
]

export default function IndiaAustraliaEctaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"The India-Australia ECTA Explained for Australian Companies: Tariffs, Origin, Services and What Comes Next"}
        description={"How the India-Australia Economic Cooperation and Trade Agreement affects Australian companies: tariff cuts, rules of origin, services, the tax change on technical services and the CECA talks."}
        datePublished="2026-11-13"
        dateModified="2026-11-13"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Set Up a Subsidiary in India from Australia: 2026 Guide", href: "/australia-to-india" },
          { label: "India-Australia ECTA: What It Means for Australian Companies" },
        ]}
      />

      <GuideHero eyebrow={"Trade: India-Australia ECTA"} title={"The India-Australia ECTA Explained for Australian Companies: Tariffs, Origin, Services and What Comes Next"} updated="13 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The India-Australia Economic Cooperation and Trade Agreement (ECTA) was signed on 2 April 2022 and has been in force since 29 December 2022. Australia removed duties on its tariff lines for Indian goods, most of them immediately, and India removed or reduced duties on a large share of its tariff lines for Australian goods, including many resources, agricultural and industrial products. Goods qualify only if they meet the agreement&apos;s rules of origin. Alongside ECTA, Australia changed its domestic law so that, from 2023, it no longer taxes the offshore technical services income of Indian firms. ECTA does not change how an Indian subsidiary is formed, funded or taxed, and a broader Comprehensive Economic Cooperation Agreement (CECA) has been under negotiation.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: Set Up a Subsidiary in India from Australia: 2026 Guide
          </Link>
        </p>

        <h2 id="snapshot" className="text-2xl font-bold text-gray-900 mt-12 mb-4">ECTA at a glance</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Point</th><th scope="col" className="border border-gray-300 p-3 text-left">Position</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Signed / in force</th><td className="border border-gray-300 p-3">2 April 2022 / 29 December 2022</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Australian tariffs on Indian goods</th><td className="border border-gray-300 p-3">Removed across tariff lines, most immediately</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Indian tariffs on Australian goods</th><td className="border border-gray-300 p-3">Removed or reduced on a large share of tariff lines, with phased schedules and exclusions for sensitive items</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Rules of origin</th><td className="border border-gray-300 p-3">Product-specific rules; a certificate or declaration of origin supports the claim</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Services</th><td className="border border-gray-300 p-3">Commitments by both sides, including for professional services</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Tax change</th><td className="border border-gray-300 p-3">Australia stopped taxing Indian firms&apos; offshore technical services income from 2023</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Next step</th><td className="border border-gray-300 p-3">A Comprehensive Economic Cooperation Agreement (CECA) under negotiation</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="goods" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who benefits on goods</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Australian exporters to India:</strong> many resources, agricultural, wine and industrial products receive lower Indian duties under the schedule; check each product&apos;s line.</li>
          <li><strong>Australian groups with Indian operations:</strong> inputs imported from Australia into the Indian company may attract lower duty if they qualify.</li>
          <li><strong>Indian-made goods sold into Australia:</strong> enter duty-free if they meet the origin rules.</li>
          <li><strong>Exclusions:</strong> some sensitive Indian lines, including certain agricultural products, were excluded or kept duties.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Always compare the ECTA rate with the standard rate for the specific tariff classification, and remember that anti-dumping and safeguard duties apply separately.
        </p>

        <h2 id="origin" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Rules of origin in practice</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Classify the product correctly under the tariff.</li>
          <li>Find the product-specific rule for that classification.</li>
          <li>Collect supplier cost and sourcing data to show the rule is met.</li>
          <li>Obtain the origin documentation required before shipment.</li>
          <li>Keep records for verification by customs.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          Indian customs place the burden of supporting an origin claim on the importer, so the Indian company should hold the supplier&apos;s information, not only the certificate.
        </p>

        <h2 id="tax-change" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The technical services tax change</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Before ECTA, Australia could tax Indian IT and technical service firms on income from offshore services to Australian clients under the treaty&apos;s royalty provisions. As part of the ECTA package, Australia amended its domestic law so that such offshore technical services income of Indian firms is not taxed in Australia from 2023. This mainly benefits Indian service providers, including Indian companies owned by Australian groups that provide services back to Australia. It does not change the Indian tax position of payments from India to Australia, which the <Link href="/australia-to-india/india-australia-dtaa" className="text-blue-800 font-semibold hover:underline">India-Australia DTAA</Link> still governs.
        </p>

        <h2 id="services" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Services, professionals and investment</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          ECTA includes services commitments and provisions on recognition of professional qualifications and business mobility, which help Australian professional firms and staff. Investment in an Indian company still follows India&apos;s FDI Policy and FEMA, and staff sent to India still need the right visa. Australian superannuation continues for posted staff only with an ATO certificate of coverage under the separate India-Australia Social Security Agreement. See <Link href="/australia-to-india/foreign-employee-treaty-ssa" className="text-blue-800 font-semibold hover:underline">how Australian employees in India are taxed</Link>.
        </p>

        <h2 id="ceca" className="text-2xl font-bold text-gray-900 mt-12 mb-4">From ECTA to CECA</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          ECTA was designed as an early-harvest agreement. Both governments have been negotiating a broader Comprehensive Economic Cooperation Agreement covering more goods, services, digital trade and other areas. Until it is concluded and in force, ECTA&apos;s schedules apply. We track the negotiations and update this page when the position changes.
        </p>
        <h2 id="checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A checklist for Australian exporters</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Confirm the product&apos;s Indian tariff classification with the importer or broker.</li>
          <li>Check the ECTA rate and phase-down schedule for that line, and any exclusion.</li>
          <li>Confirm the product-specific origin rule and gather supplier data.</li>
          <li>Prepare the origin documentation before shipment.</li>
          <li>Agree with the Indian importer who holds origin records for verification.</li>
          <li>Review annually as phase-downs take effect.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          Australian groups with their own Indian company can use the same checklist for intra-group supplies, keeping customs values consistent with transfer pricing.
        </p>


        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We check whether your products qualify for ECTA tariff rates, coordinate certificates of origin with your customs broker, set up the Indian company&apos;s GST and customs-facing records, and price group supplies consistently for customs and transfer pricing. We offer the best pricing with better work support, and the first consultation is free.
        </p>
        <GuideServiceBox path="/australia-to-india/india-australia-ecta" />
        <GuideCTA title={"Trading Between Australia and India?"} description={"Tell us your products or services, and we will check the ECTA position in a free consultation."} />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} seeAllHref="/australia-to-india/faq" seeAllLabel="See all the FAQs" seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit." />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Department of Commerce, India (trade agreements)", href: "https://commerce.gov.in/" },
            { label: "Australian Department of Foreign Affairs and Trade", href: "https://www.dfat.gov.au/" },
            { label: "Central Board of Indirect Taxes and Customs", href: "https://www.cbic.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">&larr; Back to the complete guide</Link>
        </p>
        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Trading Between Australia and India?"} description={"Tell us your products or services, and we will check the ECTA position in a free consultation."} />
    </main>
  )
}
