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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "compare", label: "The four options for a Japanese company" },
  { id: "why-subsidiary", label: "Why the subsidiary is the default" },
  { id: "liaison", label: "When a liaison office makes sense" },
  { id: "branch", label: "When a branch is considered" },
  { id: "llp", label: "Why Japanese groups rarely use an LLP" },
  { id: "decide", label: "Questions to settle before choosing" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Which structure do most Japanese companies use in India?", a: "A wholly owned private limited subsidiary, sometimes with an Indian partner as a joint venture." },
  { q: "Can a Japanese company own 100% of an Indian subsidiary?", a: "Yes, in most sectors under the Automatic Route. A few sectors cap foreign ownership or require government approval." },
  { q: "Does a liaison office need RBI approval?", a: "Yes, through an authorised dealer bank, and the Japanese company must meet profit and net worth track-record tests." },
  { q: "How are branch profits taxed?", a: "In India at the foreign company rate, and again in Japan as part of the Japanese company's income, with credit for the Indian tax." },
  { q: "Why are dividends from a subsidiary attractive for a Japanese parent?", a: "Because 95% of qualifying foreign dividends are exempt from Japanese tax when the parent holds 25% or more for six months." },
  { q: "Can a liaison office be converted into a subsidiary?", a: "Not directly. The subsidiary is incorporated, the business moves to it, and the liaison office is closed with RBI and Registrar filings." },
  { q: "Does Press Note 3 apply to Japanese investors?", a: "No, unless a beneficial owner in the Japanese company's chain is from a country sharing a land border with India." },
  { q: "Is an LLP a good option for a Japanese company?", a: "Rarely. Foreign investment in LLPs is limited to certain sectors and the Japanese tax treatment needs separate review." },
]

const relatedCards = [
  { title: "Incorporation Process from Japan", desc: "Setting up the subsidiary step by step.", href: "/japan-to-india/incorporation-process" },
  { title: "EOR or Subsidiary", desc: "Hiring before the entity exists.", href: "/japan-to-india/eor-vs-subsidiary" },
  { title: "Repatriating Profits to Japan", desc: "Dividends, fees and the foreign dividend exemption.", href: "/japan-to-india/repatriating-profits" },
  { title: "Japan Parent Obligations", desc: "The Japanese side of owning an Indian company.", href: "/japan-to-india/japan-parent-obligations" },
]

export default function SubsidiaryVsBranchVsLiaisonOfficeVsLlpPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Subsidiary vs. Branch vs. Liaison Office vs. LLP: Which Is Right for a Japanese Company in India?"
        description="Compare the four ways a Japanese company can enter India: wholly owned subsidiary, branch office, liaison office and LLP. Activities, approvals, tax and control."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "Subsidiary vs Branch vs Liaison Office vs LLP in India" },
        ]}
      />

      <GuideHero
        eyebrow="Enter: choose your structure"
        title="Subsidiary vs. Branch vs. Liaison Office vs. LLP: Which Is Right for a Japanese Company in India?"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Most Japanese companies choose a wholly owned private limited subsidiary, because it can do every kind of business, keeps Indian liability inside the Indian company and lets dividends qualify for Japan&apos;s 95% foreign dividend exemption. A liaison office suits a market-study phase, a branch suits certain project or trading work that needs the parent&apos;s balance sheet, and an LLP is rarely used by Japanese groups.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="subsidiary-vs-branch-vs-liaison-office-vs-llp" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Usual choice", "Wholly owned private limited company under the Companies Act, 2013"],
                ["Approval", "Subsidiary: Automatic Route in most sectors; branch and liaison office: RBI approval through an authorised dealer bank"],
                ["Press Note 3", "Not applicable to a Japanese investor unless a beneficial owner is from a land-border country"],
                ["Japanese tax on dividends", "95% exempt for a holding of 25% or more for six months (foreign dividend exemption)"],
                ["Branch profits", "Taxed in India and included in the Japanese company's own return"],
                ["Liaison office", "Cannot earn income in India"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The four options for a Japanese company</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left"></th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Subsidiary</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Branch office</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Liaison office</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">LLP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Legal status</th>
                <td className="border border-gray-300 p-3">Separate Indian company</td>
                <td className="border border-gray-300 p-3">Part of the Japanese company</td>
                <td className="border border-gray-300 p-3">Part of the Japanese company</td>
                <td className="border border-gray-300 p-3">Separate Indian partnership with limited liability</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Can earn revenue</th>
                <td className="border border-gray-300 p-3">Yes</td>
                <td className="border border-gray-300 p-3">Yes, within permitted activities</td>
                <td className="border border-gray-300 p-3">No</td>
                <td className="border border-gray-300 p-3">Yes</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Approval</th>
                <td className="border border-gray-300 p-3">Automatic Route in most sectors</td>
                <td className="border border-gray-300 p-3">RBI through bank</td>
                <td className="border border-gray-300 p-3">RBI through bank</td>
                <td className="border border-gray-300 p-3">Allowed only in sectors open to 100% automatic FDI</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Liability for Indian debts</th>
                <td className="border border-gray-300 p-3">Limited to the subsidiary</td>
                <td className="border border-gray-300 p-3">Japanese company is liable</td>
                <td className="border border-gray-300 p-3">Japanese company is liable</td>
                <td className="border border-gray-300 p-3">Limited to the LLP</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Indian tax</th>
                <td className="border border-gray-300 p-3">About 25.17% under the concessional regime</td>
                <td className="border border-gray-300 p-3">Foreign company rate, higher</td>
                <td className="border border-gray-300 p-3">No business income</td>
                <td className="border border-gray-300 p-3">30% plus surcharge and cess</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Japanese tax on profits</th>
                <td className="border border-gray-300 p-3">Dividends 95% exempt if conditions met</td>
                <td className="border border-gray-300 p-3">Profits in the parent&apos;s own return</td>
                <td className="border border-gray-300 p-3">Costs only</td>
                <td className="border border-gray-300 p-3">Depends on Japanese treatment of the partnership</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="why-subsidiary" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why the subsidiary is the default</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A subsidiary separates the Indian business from the Japanese balance sheet, can hire, sell, manufacture and provide services, and is the form Indian customers and banks expect. Its profits are taxed in India and can then return as dividends that benefit from Japan&apos;s foreign dividend exemption. It also gives a clean vehicle for a later joint venture or sale.
        </p>
        <h2 id="liaison" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When a liaison office makes sense</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A liaison office lets a Japanese company keep a representative presence for market research, promotion and liaison with Indian customers while it decides on India. It cannot earn income, its costs are funded from Japan, and it must file an annual activity certificate. Most groups convert to a subsidiary once sales or delivery begins.
        </p>
        <h2 id="branch" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When a branch is considered</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A branch can carry on permitted activities such as export and import, consultancy or research, but it is part of the Japanese company, so the parent carries its liabilities and its Indian profits are taxed at the higher foreign company rate. Japanese trading houses and engineering groups sometimes use project offices or branches for specific contracts; for a permanent operation the subsidiary is usually better.
        </p>
        <h2 id="llp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why Japanese groups rarely use an LLP</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Foreign investment in an LLP is permitted only in sectors open to 100% automatic FDI with no performance conditions, and the Japanese tax treatment of an Indian LLP needs separate analysis. Japanese groups also tend to prefer the familiar governance of a company with a board, so LLPs are unusual.
        </p>
        <h2 id="decide" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Questions to settle before choosing</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Will the Indian operation earn revenue in the first year?</li>
          <li>Does the sector allow 100% foreign ownership on the Automatic Route?</li>
          <li>Should Indian liabilities stay away from the Japanese balance sheet?</li>
          <li>How will profits return to Japan, as dividends or service fees?</li>
          <li>Is a joint venture partner likely later?</li>
        </ol>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We compare the structures against your plan, check the sector rules, and set up the chosen entity, including the RBI applications for a branch or liaison office.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and <Link href="/branch-office-registration" className="text-blue-800 font-semibold hover:underline">branch office registration</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" />
        <GuideCTA
          title="Deciding how to enter India from Japan?"
          description="Tell us what the Indian operation will do, and we will recommend the structure."
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
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
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
        title="Subsidiary, Branch or Liaison Office?"
        description="Tell us what the India operation will do, and we'll recommend the structure that suits a Japanese parent."
      />
    </main>
  )
}
