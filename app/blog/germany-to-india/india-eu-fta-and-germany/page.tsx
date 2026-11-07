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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/india-eu-fta-and-germany"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "what-it-is", label: "What the agreement is, and how it differs from the tax treaty" },
  { id: "goods", label: "Goods: components, machinery and the supply chain" },
  { id: "services", label: "Services and people" },
  { id: "gap", label: "The investment protection gap" },
  { id: "unchanged", label: "What does not change" },
  { id: "use-it", label: "How to use the FTA in planning" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is the India-EU free trade agreement in force?", a: "Not yet. It was concluded on 27 January 2026. The Commission asked the Council on 11 September 2026 to authorise signing, signature is being reported for December 2026, and entry into force is targeted for early 2027." },
  { q: "Does the India-EU FTA change how a German company sets up an Indian subsidiary?", a: "No. Company law, FEMA, the FDI Policy and tax rules for the subsidiary are unchanged. The FTA affects tariffs, services access and staff mobility." },
  { q: "Does the FTA protect German investments in India?", a: "No. It has no investment protection chapter. A separate EU-India Investment Protection Agreement is under negotiation, so rely on contracts and arbitration for now." },
  { q: "Will the FTA lower tariffs on German machinery and components?", a: "Yes, over phased periods once it is in force, including automotive components over five to ten years. The detailed schedules decide each product." },
  { q: "Does the FTA reduce Indian Withholding Tax on dividends paid to a German parent?", a: "No. Withholding Tax is governed by the Income-tax Act, 2025 and the 1995 India-Germany tax treaty, which caps dividends at 10%." },
]

const relatedCards = [
  { title: "The India-Germany Tax Treaty (DTAA), Article by Article: India as Source State, Germany as Residence State", desc: "The India-Germany double taxation agreement explained article by article from the German parent's point of view: the flat 10% rates table, permanent establishment, share gains, relief and how to claim.", href: "/germany-to-india/india-germany-dtaa" },
  { title: "German Employees Working in India: What the Tax Treaty and the Social Security Agreement Mean", desc: "How income tax and social security apply to German staff in India: the 183-day treaty test, the 2009 social security agreement, the 48-month detachment rule, certificates of coverage and German tax residence.", href: "/germany-to-india/german-employees-in-india-ssa" },
  { title: "Supply Chain Due Diligence, Sustainability Reporting and CBAM: How German and EU Rules Reach Indian Operations", desc: "How German and EU supply chain, sustainability and carbon border rules reach an Indian subsidiary or supplier: the German Supply Chain Act (LkSG), EU reporting, CBAM, and what to prepare.", href: "/germany-to-india/supply-chain-and-esg-duties" },
  { title: "Contracts, Courts and Arbitration: Choosing Law and Seat, and Enforcing in India and Germany", desc: "How a German parent protects its Indian subsidiary contracts: choice of law, DIS and other arbitration, why German court judgments need a fresh suit in India, enforcing awards, stamping and the investment protection gap.", href: "/germany-to-india/contracts-courts-arbitration" },
]

export default function IndiaEuFtaAndGermanyPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="The India-EU Free Trade Agreement: What It Changes, and What It Leaves Alone, for a German Company Setting Up in India"
        description="Status and content of the India-EU free trade agreement for German companies: services access, staff mobility, tariffs on components, the investment protection gap and what stays under the 1995 tax treaty."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "India-EU Free Trade Agreement: What It Means for German Companies Entering India" },
        ]}
      />

      <GuideHero
        eyebrow="Trade: the India-EU FTA"
        title="The India-EU Free Trade Agreement: What It Changes, and What It Leaves Alone, for a German Company Setting Up in India"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Negotiators concluded the India-EU free trade agreement on 27 January 2026, but it is not yet in
          force. On 11 September 2026 the European Commission asked the Council to authorise signing and
          conclusion, signature is being reported for December 2026, and entry into force is targeted for early
          2027 after the European Parliament and India complete their steps. When it applies, it should help
          German firms through lower tariffs on components and machinery, clearer rules for sending staff, and
          stronger intellectual property enforcement. It will not change how an Indian subsidiary is formed,
          funded or taxed, and there is still no investment protection treaty.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="trade-agreement" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Concluded", "27 January 2026, at the 16th India-EU Summit in New Delhi"],
                ["Next steps", "Commission request to the Council of 11 September 2026; signing reported for December 2026; European Parliament consent and Indian ratification still needed"],
                ["Target date", "Entry into force reported for early 2027; treat as a target, not a date"],
                ["Services", "Wider access for EU firms, including financial services and maritime transport, and a temporary-entry annex covering intra-corporate transferees and project professionals"],
                ["Goods", "Tariff cuts phased over several years, including automotive components (five to ten years), machinery, chemicals and pharmaceuticals"],
                ["Investment protection", "Not in the FTA. A separate Investment Protection Agreement and a Geographical Indications agreement are under negotiation"],
                ["Tax", "The FTA does not alter income tax. The 1995 India-Germany tax treaty continues to apply"],
                ["Does it change FDI rules?", "No. Sector caps, the Automatic Route and RBI reporting under FEMA apply as before"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="what-it-is" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the agreement is, and how it differs from the tax treaty</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A free trade agreement sets the terms of trade in goods and services, the temporary movement of staff,
          intellectual property and dispute settlement between governments. The tax treaty divides the right to
          tax income. A German company that sets up in India touches both, but only the tax treaty decides how
          much Indian tax is withheld on a dividend, and only Indian company law and FEMA decide how the
          subsidiary is formed and funded.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Germany is one of India&apos;s largest trading partners in Europe, and the FTA is a significant change
          in the legal setting for German exporters. Because it is not yet in force, plan the subsidiary on
          today&apos;s rules and treat the FTA as an upside that arrives during year one or two.
        </p>

        <h2 id="goods" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Goods: components, machinery and the supply chain</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Automotive components:</strong> tariff cuts are phased over five to ten years, which matters to German suppliers shipping parts to an Indian plant or assembling in India.</li>
          <li><strong>Machinery, chemicals and pharmaceuticals:</strong> tariff cuts are phased, so landed-cost models for the Indian subsidiary should be updated once the schedules are final.</li>
          <li><strong>Rules of origin:</strong> an Indian subsidiary that exports to Germany will need origin proof to claim the lower duty. Build the record keeping early.</li>
          <li><strong>Carbon border adjustment:</strong> separate EU rules on carbon-intensive imports apply to some Indian exports regardless of the FTA. See <Link href="/germany-to-india/supply-chain-and-esg-duties" className="text-blue-800 font-semibold hover:underline">supply chain and ESG duties</Link>.</li>
        </ul>

        <h2 id="services" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Services and people</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The services chapter opens parts of the Indian market to EU suppliers and adds a temporary-entry annex
          with clearer rules for intra-corporate transferees, business visitors and professionals working on
          cross-border projects. The detailed schedules will decide whether a particular German engineering,
          software or consulting firm gains anything, so read India&apos;s schedule for your own sector once
          published, and do not assume a commitment removes licensing in regulated fields.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          For staff, the practical rules still sit in Indian visa law and the India-Germany social security
          agreement. See{" "}
          <Link href="/germany-to-india/relocate-german-staff" className="text-blue-800 font-semibold hover:underline">relocating German staff</Link>{" "}
          and{" "}
          <Link href="/germany-to-india/german-employees-in-india-ssa" className="text-blue-800 font-semibold hover:underline">German employees in India: the treaty and the social security agreement</Link>.
        </p>

        <h2 id="gap" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The investment protection gap</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The FTA is a trade agreement. It does not give a German investor treaty claims against India, and the
          older bilateral investment treaties were largely wound down from 2016 and 2017. A separate EU-India
          Investment Protection Agreement is under negotiation but is not in force. Until then, a German parent
          should rely on its contracts, a neutral arbitration clause and clean FEMA reporting, as set out in{" "}
          <Link href="/germany-to-india/contracts-courts-arbitration" className="text-blue-800 font-semibold hover:underline">contracts, courts and arbitration</Link>.
        </p>

        <h2 id="unchanged" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What does not change</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Company law and FDI:</strong> a German company still forms an Indian private limited company under the Companies Act, 2013 and follows the FDI Policy. See <Link href="/germany-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">the incorporation guide</Link>.</li>
          <li><strong>FEMA reporting:</strong> Form FC-GPR, the pricing floor and the 60-day allotment rule are unchanged. See <Link href="/germany-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
          <li><strong>Tax:</strong> Indian profits, Withholding Tax and permanent establishment risk follow Indian law and the 1995 treaty. See <Link href="/germany-to-india/india-germany-dtaa" className="text-blue-800 font-semibold hover:underline">the India-Germany tax treaty, article by article</Link>.</li>
        </ul>

        <h2 id="use-it" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to use the FTA in planning</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Build the business case on current tariffs and rules, then model the FTA as a later improvement.</li>
          <li>Decide whether the Indian entity will import from Germany, make in India, or export back; each depends on different parts of the agreement.</li>
          <li>Keep origin and customs records from day one so you can claim preferences when they start.</li>
          <li>Check the signed text and the notified Indian rules before relying on any press summary.</li>
          <li>Revisit the staffing plan when the temporary-entry annex takes effect.</li>
        </ol>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.bzst.de/EN/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Federal Central Tax Office (BZSt)</a>,{" "}
          <a href="https://www.handelsregister.de/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Handelsregister</a>{" "}
          and the{" "}
          <a href="https://www.bundesbank.de/en" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Deutsche Bundesbank</a>.
        </p>

        <GuideServiceBox path="/germany-to-india/india-eu-fta-and-germany" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/germany-to-india/faq"
          seeAllLabel="See all 146 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Cyril Amarchand Mangaldas: the India-EU FTA moves toward finalisation (September 2026)", href: "https://corporate.cyrilamarchandblogs.com/2026/09/the-india-eu-free-trade-agreement-a-landmark-deal-moves-toward-finalisation/" },
            { label: "EUbusiness: EU-India FTA set for 2027 entry into force", href: "https://www.eubusiness.com/trade/eu-india-free-trade-agreement-set-for-2027-entry-into-force/" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and German
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Preparing for the India-EU FTA?"
        description="Tell us what you trade or supply into India, and we'll show what the agreement changes and what stays under ordinary Indian rules."
      />
    </main>
  )
}
