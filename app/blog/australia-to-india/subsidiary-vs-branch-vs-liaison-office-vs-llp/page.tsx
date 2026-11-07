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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "table", label: "Four options for an Australian company" },
  { id: "tax-lens", label: "The Australian tax lens" },
  { id: "liabilities", label: "Liability and control" },
  { id: "when-other", label: "When a branch or liaison office still makes sense" },
  { id: "checklist", label: "Questions for the Australian board" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What structure do most Australian companies use in India?", a: "A private limited subsidiary, wholly owned or as a joint venture." },
  { q: "Are Indian branch profits taxed in Australia?", a: "They may be non-assessable under section 23AH, subject to conditions, but they are taxed in India at the foreign company rate." },
  { q: "Are dividends from an Indian subsidiary taxed in Australia?", a: "Generally not for a company with at least a 10% voting interest; they are non-assessable non-exempt income under section 768-5." },
  { q: "Does a branch need approval?", a: "Yes, from the RBI through an authorised dealer bank, with track-record conditions." },
  { q: "Can a liaison office earn income?", a: "No. It can only represent the Australian company and promote its business." },
  { q: "Does the trade agreement change entity choice?", a: "No. The India-Australia ECTA mainly cuts goods tariffs." },
  { q: "Can an Australian company own 100% of an Indian subsidiary?", a: "Yes, in most sectors under the Automatic Route." },
  { q: "Is an LLP a good option?", a: "Rarely for Australian groups; foreign investment is limited to eligible sectors and the Australian treatment needs review." },
]

const relatedCards = [
  { title: "Incorporation Process from Australia", desc: "Setting up the subsidiary.", href: "/australia-to-india/incorporation-process" },
  { title: "EOR or Subsidiary", desc: "Hiring before the entity.", href: "/australia-to-india/eor-vs-subsidiary" },
  { title: "Repatriating Profits to Australia", desc: "Dividends and fees.", href: "/australia-to-india/repatriating-profits" },
  { title: "Australian Parent Obligations", desc: "Australian tax on Indian profits.", href: "/australia-to-india/australian-parent-obligations" },
]

export default function SubsidiaryVsBranchVsLiaisonOfficeVsLlpPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Subsidiary vs. Branch vs. Liaison Office vs. LLP: Which Is Right for an Australian Company in India?"
        description="Compare the four ways an Australian company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control."
        datePublished="2026-10-15"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "Subsidiary vs Branch vs Liaison Office vs LLP in India" },
        ]}
      />

      <GuideHero
        eyebrow="Enter: choose your structure"
        title="Subsidiary vs. Branch vs. Liaison Office vs. LLP: Which Is Right for an Australian Company in India?"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Most Australian companies use a private limited subsidiary in India. A branch keeps the Indian business inside the Australian company, and its profits may be non-assessable in Australia under section 23AH, but it needs RBI approval, is taxed in India at the foreign company rate and exposes the parent to Indian liabilities. Dividends from a subsidiary can be non-assessable non-exempt income under section 768-5. A liaison office is only for representation, and LLPs are uncommon.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="subsidiary-vs-branch-vs-liaison-office-vs-llp" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Usual choice", "Private limited subsidiary under the Companies Act, 2013"],
                ["Approval", "Subsidiary: Automatic Route in most sectors; branch and liaison office: RBI through an authorised dealer bank"],
                ["Branch profits in Australia", "May be non-assessable under section 23AH of the Income Tax Assessment Act 1936, subject to conditions"],
                ["Subsidiary dividends in Australia", "Non-assessable non-exempt income for a 10% or greater voting interest (section 768-5)"],
                ["Trade agreement", "India-Australia ECTA cuts goods tariffs; it does not change entity rules"],
                ["Press Note 3", "Does not apply to Australian investors"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="table" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Four options for an Australian company</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left"></th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Subsidiary</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Branch</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Liaison office</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">LLP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">What it is</th>
                <td className="border border-gray-300 p-3">Indian company owned by the Australian parent</td>
                <td className="border border-gray-300 p-3">Extension of the Australian company</td>
                <td className="border border-gray-300 p-3">Representative office</td>
                <td className="border border-gray-300 p-3">Indian partnership with limited liability</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Revenue</th>
                <td className="border border-gray-300 p-3">Any permitted business</td>
                <td className="border border-gray-300 p-3">Permitted activities only</td>
                <td className="border border-gray-300 p-3">None</td>
                <td className="border border-gray-300 p-3">Permitted, in eligible sectors</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Who is liable</th>
                <td className="border border-gray-300 p-3">The subsidiary</td>
                <td className="border border-gray-300 p-3">The Australian company</td>
                <td className="border border-gray-300 p-3">The Australian company</td>
                <td className="border border-gray-300 p-3">The LLP</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Indian tax</th>
                <td className="border border-gray-300 p-3">About 25.17% concessional rate</td>
                <td className="border border-gray-300 p-3">Foreign company rate</td>
                <td className="border border-gray-300 p-3">None on income</td>
                <td className="border border-gray-300 p-3">30% plus surcharge and cess</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Australian result</th>
                <td className="border border-gray-300 p-3">Dividends usually non-assessable non-exempt</td>
                <td className="border border-gray-300 p-3">Profits may be non-assessable under 23AH</td>
                <td className="border border-gray-300 p-3">Costs only</td>
                <td className="border border-gray-300 p-3">Depends on Australian classification</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="tax-lens" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Australian tax lens</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Both a branch and a subsidiary can keep active Indian profits out of Australian tax, through section 23AH for branch profits and section 768-5 for dividends from a 10% or greater holding. The difference is on the Indian side: a branch pays the higher foreign company rate and cannot easily be sold separately, while a subsidiary pays the domestic company rate and can be sold, merged or used for a joint venture later.
        </p>
        <h2 id="liabilities" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Liability and control</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A subsidiary ring-fences Indian contracts, employees and tax disputes inside an Indian company. A branch puts the Australian company&apos;s balance sheet behind every Indian obligation. For most Australian boards, that alone settles the choice in favour of a subsidiary.
        </p>
        <h2 id="when-other" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When a branch or liaison office still makes sense</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A liaison office for a market study or relationship-building phase, before any revenue.</li>
          <li>A project office or branch for a specific engineering or mining services contract with a defined end date.</li>
          <li>A branch where a regulated activity is easier to carry on through the Australian entity, subject to RBI approval.</li>
        </ul>
        <h2 id="checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Questions for the Australian board</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Will the Indian operation earn revenue in its first year?</li>
          <li>Does the sector allow 100% foreign ownership on the Automatic Route?</li>
          <li>Should Indian liabilities stay outside the Australian company?</li>
          <li>Will a partner or buyer be involved later?</li>
          <li>How will profits come back: dividends, fees or royalties?</li>
        </ol>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We compare the options against your plan, confirm the sector rules and set up the chosen entity, including RBI applications for branches and liaison offices.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and <Link href="/branch-office-registration" className="text-blue-800 font-semibold hover:underline">branch office registration</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" />
        <GuideCTA
          title="Choosing your Indian structure?"
          description="Tell us what the Indian operation will do, and we will recommend the entity."
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
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
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
        title="Not Sure Which Entity Type Fits?"
        description="Tell us your planned activities in India — sales, liaison or back-office — and we'll recommend the right structure for your case."
      />
    </main>
  )
}
