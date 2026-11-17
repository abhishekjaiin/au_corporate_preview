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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/gcc-for-australian-companies"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "why", label: "Why Australian groups build GCCs in India" },
  { id: "models", label: "Choosing the model" },
  { id: "regulation", label: "APRA CPS 230 and regulated entities" },
  { id: "privacy", label: "Privacy Act and data from Australia" },
  { id: "tz", label: "Time zones and working patterns" },
  { id: "tp", label: "Transfer pricing and tax" },
  { id: "retention", label: "Hiring and retaining talent" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How do Australian companies set up a GCC in India?", a: "Usually through a wholly owned Indian subsidiary at cost plus a mark-up, often after a pilot through an employer of record." },
  { q: "Does APRA CPS 230 apply to an Indian GCC?", a: "For APRA-regulated entities, yes: a related-party service provider is covered by the standard's requirements on material service providers." },
  { q: "What is the time difference between India and Sydney?", a: "India is 4.5 hours behind Australian eastern standard time, 5.5 hours in daylight saving." },
  { q: "Can personal information be sent from Australia to India?", a: "Yes, with reasonable steps under Australian Privacy Principle 8, usually contracts and controls." },
  { q: "Which Indian city suits an Australian GCC?", a: "Bengaluru and Hyderabad for technology, and Pune, Chennai or the National Capital Region depending on functions." },
  { q: "Should an Australian GCC start with an employer of record?", a: "Often yes for the first few hires, moving to the group's own company once the team reaches about 15 to 50 people." },
]

const relatedCards = [
  { title: "GCC setup in India", desc: "Our GCC service.", href: "/gcc-setup-india" },
  { title: "EOR or subsidiary", desc: "Starting with a pilot team.", href: "/australia-to-india/eor-vs-subsidiary" },
  { title: "Transfer pricing for Australian groups", desc: "Cost-plus documentation.", href: "/australia-to-india/transfer-pricing" },
]

export default function GccForAustralianCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"Setting Up a Global Capability Centre in India for an Australian Group: Models, Time Zones, Regulation and Compliance"}
        description={"How Australian companies set up a GCC in India: own centre, BOT or EOR pilot, time-zone overlap, APRA CPS 230 for regulated firms, Privacy Act transfers and cost-plus tax."}
        datePublished="2026-11-13"
        dateModified="2026-11-13"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Set Up a Subsidiary in India from Australia: 2026 Guide", href: "/australia-to-india" },
          { label: "GCC Setup in India for Australian Companies (2026 Guide)" },
        ]}
      />

      <GuideHero eyebrow={"GCC: Australian companies"} title={"Setting Up a Global Capability Centre in India for an Australian Group: Models, Time Zones, Regulation and Compliance"} updated="13 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Australian group usually runs its Indian global capability centre (GCC) through a wholly owned Indian subsidiary that serves the group at cost plus a mark-up, often after a pilot team employed through an employer of record. India is 4.5 hours behind Australian eastern standard time (5.5 hours in daylight saving), giving a shared working afternoon in Australia and morning in India. APRA-regulated banks, insurers and super funds must also meet APRA&apos;s operational risk standard CPS 230 when work moves to the Indian centre, and personal information sent from Australia is subject to the Privacy Act&apos;s cross-border rules.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: Set Up a Subsidiary in India from Australia: 2026 Guide
          </Link>
        </p>

        <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why Australian groups build GCCs in India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Australian banks, insurers, telecoms, retailers, mining services and technology companies use Indian centres for technology, data, finance, customer operations and risk functions. The drivers are access to scale, skills that are hard to hire in Australia, and a time zone that allows same-day handovers. Many centres start small and grow into a group capability serving Australia and New Zealand.
        </p>

        <h2 id="models" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing the model</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Model</th><th scope="col" className="border border-gray-300 p-3 text-left">How it works</th><th scope="col" className="border border-gray-300 p-3 text-left">Suits</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">EOR pilot then subsidiary</th><td className="border border-gray-300 p-3">A provider employs the first team; the group forms its own company at 15 to 50 people</td><td className="border border-gray-300 p-3">Groups testing India</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Own GCC</th><td className="border border-gray-300 p-3">The Australian parent forms its Indian company and hires directly</td><td className="border border-gray-300 p-3">Groups with a clear long-term plan</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Build-operate-transfer (BOT)</th><td className="border border-gray-300 p-3">A partner builds and runs the centre, then transfers it</td><td className="border border-gray-300 p-3">Groups wanting speed with lower early risk</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Plan the move from pilot to subsidiary early, including employee transfer terms and IP ownership. See <Link href="/australia-to-india/eor-vs-subsidiary" className="text-blue-800 font-semibold hover:underline">EOR or subsidiary</Link>.
        </p>

        <h2 id="regulation" className="text-2xl font-bold text-gray-900 mt-12 mb-4">APRA CPS 230 and regulated entities</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          APRA&apos;s Prudential Standard CPS 230 Operational Risk Management, which took effect on 1 July 2025, requires APRA-regulated entities to manage the risks of material service providers, including related parties such as an Indian group company. For a bank, insurer or super fund, the Indian centre therefore needs a documented service agreement, oversight and monitoring, business continuity arrangements and, for material arrangements, notification to APRA in line with the standard. Build these into the centre&apos;s design rather than adding them later.
        </p>

        <h2 id="privacy" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Privacy Act and data from Australia</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Personal information disclosed from Australia to the Indian centre falls under Australian Privacy Principle 8 on cross-border disclosure, which generally requires the Australian entity to take reasonable steps to ensure the overseas recipient handles it consistently with the principles, usually through contracts and controls. The Indian company must also meet India&apos;s DPDP Act as its main duties start on 13 May 2027.
        </p>

        <h2 id="tz" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Time zones and working patterns</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          With India 4.5 to 5.5 hours behind Australian eastern time, an Indian team working a standard day overlaps with the Australian afternoon. Many centres shift Indian working hours slightly earlier for teams supporting Australian business hours, with transport and allowances for early or late shifts where needed. Customer operations covering Australian evenings may need rotating shifts.
        </p>

        <h2 id="tp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Transfer pricing and tax</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Indian company is paid at cost plus a mark-up benchmarked on Indian comparables, documented in India and aligned with the ATO&apos;s Division 815 file. Service income of the Indian company is taxed in India at about 25.17% under the concessional regime, and dividends to the Australian parent are generally non-assessable non-exempt in Australia. See <Link href="/australia-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing for Australian groups</Link> and our <Link href="/gcc-setup-india" className="text-blue-800 font-semibold hover:underline">GCC setup service</Link>.
        </p>
        <h2 id="retention" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Hiring and retaining talent</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Indian technology and finance talent is in high demand, so Australian centres compete with global banks and technology firms in the same cities. Annual salary reviews at market level, clear career paths, group health insurance for families, flexible working and exposure to Australian stakeholders help retention. Plan a leadership hire early: a strong India site leader shapes hiring quality more than any other choice. See <Link href="/employee-benefits-in-india-for-foreign-companies" className="text-blue-800 font-semibold hover:underline">employee benefits in India</Link>.
        </p>


        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We incorporate the Indian company, set up payroll, accounting, GST and FEMA reporting, prepare cost-plus transfer pricing for the centre, and coordinate with your recruitment and real estate partners. We offer the best pricing with better work support, and the first consultation is free.
        </p>
        <GuideServiceBox path="/australia-to-india/gcc-for-australian-companies" />
        <GuideCTA title={"Planning a GCC in India?"} description={"Tell us the functions, team size and timeline, and we will map the setup in a free consultation."} />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} seeAllHref="/australia-to-india/faq" seeAllLabel="See all the FAQs" seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit." />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "APRA", href: "https://www.apra.gov.au/" },
            { label: "Office of the Australian Information Commissioner", href: "https://www.oaic.gov.au/" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">&larr; Back to the complete guide</Link>
        </p>
        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Planning a GCC in India?"} description={"Tell us the functions, team size and timeline, and we will map the setup in a free consultation."} />
    </main>
  )
}
