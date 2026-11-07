import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideFaqList } from "@/components/guide/GuideFaqList"
import { GuideRelatedCards } from "@/components/guide/GuideRelatedCards"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideSources } from "@/components/guide/GuideSources"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/funding-instruments-india-ccd-ccps-convertible-notes"

const toc = [
  { id: "compare", label: "The instruments compared" },
  { id: "ccd", label: "Compulsorily convertible debentures in practice" },
  { id: "ccps", label: "Compulsorily convertible preference shares" },
  { id: "notes", label: "Convertible notes for start-ups" },
  { id: "company-law", label: "Rights issue or private placement" },
  { id: "steps", label: "Steps for each funding round" },
  { id: "choosing", label: "Choosing the right instrument" },
  { id: "mistakes-fund", label: "Common mistakes in funding rounds" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Do compulsorily convertible debentures count as FDI?", a: "Yes. Fully and compulsorily convertible debentures are FDI; optionally convertible ones are external commercial borrowings." },
  { q: "Is interest on CCDs taxed in India?", a: "Yes, with withholding tax reduced under the applicable tax treaty." },
  { q: "Who can issue convertible notes to foreign investors?", a: "Only start-ups recognised under the government's start-up programme, within the set limits." },
  { q: "What form reports convertible notes?", a: "Form CN, within 30 days of issue." },
  { q: "Must the conversion price be fixed at issue?", a: "The price or formula must be fixed at issue, and conversion cannot be below fair value at the time of issue." },
  { q: "Is a rights issue simpler than a private placement?", a: "For a wholly owned subsidiary, yes: the offer goes to existing shareholders and needs fewer formalities." },
]

const relatedCards = [
  { title: "Share valuation in India", desc: "Valuation rules for each issue.", href: "/share-valuation-india-registered-valuer-fema" },
  { title: "FEMA and RBI compliance", desc: "FC-GPR and Form CN filings.", href: "/fema-rbi-compliance" },
  { title: "Cost of setting up a subsidiary", desc: "Planning the first capital.", href: "/cost-of-setting-up-a-subsidiary-in-india" },
]

export default function FundingInstrumentsIndiaCcdCcpsConvertibleNotesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"Funding Instruments for Indian Companies: Compulsorily Convertible Debentures, CCPS, Convertible Notes and Rights Issues"}
        description={"How foreign investors fund an Indian company: equity, compulsorily convertible debentures and preference shares, convertible notes for start-ups, and the rules."}
        datePublished="2026-11-07"
        dateModified="2026-11-07"
        inLanguage="en"
      />

      <Breadcrumb items={[{ label: "Funding Instruments" }]} />

      <GuideHero eyebrow={"Guide: funding instruments"} title={"Funding Instruments for Indian Companies: Compulsorily Convertible Debentures, CCPS, Convertible Notes and Rights Issues"} updated="7 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A foreign investor can fund an Indian company with equity shares, compulsorily convertible preference shares (CCPS) or compulsorily convertible debentures (CCDs), all of which count as foreign direct investment. Instruments that are optionally convertible or not convertible are treated as external commercial borrowings instead. Convertible notes are available only to recognised start-ups, within set limits. Every FDI instrument must be priced at no less than fair value, with the conversion formula fixed when it is issued, and reported in Form FC-GPR, or Form CN for convertible notes, within 30 days. Company-law steps differ for a rights issue and a private placement.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The instruments compared</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Instrument</th><th scope="col" className="border border-gray-300 p-3 text-left">FEMA treatment</th><th scope="col" className="border border-gray-300 p-3 text-left">Returns to the investor</th><th scope="col" className="border border-gray-300 p-3 text-left">Typical use</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Equity shares</th><td className="border border-gray-300 p-3">FDI</td><td className="border border-gray-300 p-3">Dividends and capital gains</td><td className="border border-gray-300 p-3">Standard capital for a subsidiary</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Compulsorily convertible preference shares (CCPS)</th><td className="border border-gray-300 p-3">FDI</td><td className="border border-gray-300 p-3">Fixed preference dividend, then conversion</td><td className="border border-gray-300 p-3">Venture and growth investors wanting preference rights</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Compulsorily convertible debentures (CCDs)</th><td className="border border-gray-300 p-3">FDI</td><td className="border border-gray-300 p-3">Interest until conversion</td><td className="border border-gray-300 p-3">Funding with a coupon before conversion</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Convertible notes</th><td className="border border-gray-300 p-3">FDI, for recognised start-ups only</td><td className="border border-gray-300 p-3">Converted into shares within the permitted period</td><td className="border border-gray-300 p-3">Early-stage funding before a priced round</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Optionally convertible or non-convertible debentures and loans</th><td className="border border-gray-300 p-3">External commercial borrowing</td><td className="border border-gray-300 p-3">Interest and repayment</td><td className="border border-gray-300 p-3">Debt funding under the ECB framework</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="ccd" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Compulsorily convertible debentures in practice</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          CCDs pay interest until they convert into equity on the terms fixed at issue. Interest paid to a foreign holder is subject to Indian withholding tax, reduced under the applicable tax treaty, and is generally deductible for the company within the interest limitation rules. Because CCDs convert compulsorily, they count as FDI rather than debt, so FC-GPR is filed on issue and pricing follows the FEMA guidelines. Under the Companies Act, CCDs issued by a private company are commonly structured to fall outside the deposit rules, which require conversion within the prescribed period; check the terms when drafting.
        </p>

        <h2 id="ccps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Compulsorily convertible preference shares</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          CCPS give the investor priority on dividends and on a winding up, and convert into equity shares by a set date or event. They are the most common instrument for venture and private equity investors in India, because they combine FDI treatment with investor protections. The conversion ratio must be fixed, or determined by a formula fixed, at issue, and the conversion price cannot be lower than the fair value at the time of issue.
        </p>

        <h2 id="notes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Convertible notes for start-ups</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A start-up recognised by the government&apos;s start-up programme can issue convertible notes to a foreign investor, subject to a minimum amount in a single tranche and conversion or repayment within the period set by the rules. The issue is reported to the RBI in Form CN within 30 days. Sectors needing government approval for FDI also need approval for convertible notes, and Press Note 3 applies to investors from land-border countries.
        </p>

        <h2 id="company-law" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Rights issue or private placement</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Route</th><th scope="col" className="border border-gray-300 p-3 text-left">How it works</th><th scope="col" className="border border-gray-300 p-3 text-left">Main filings</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Rights issue</th><td className="border border-gray-300 p-3">Offer to existing shareholders in proportion to their holdings</td><td className="border border-gray-300 p-3">Board resolution, offer letter, return of allotment</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Private placement</th><td className="border border-gray-300 p-3">Offer to identified persons, with a private placement offer letter</td><td className="border border-gray-300 p-3">Special resolution, separate bank account for the money, return of allotment</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Preferential allotment</th><td className="border border-gray-300 p-3">Allotment to selected persons approved by shareholders</td><td className="border border-gray-300 p-3">Special resolution and a registered valuer&apos;s report for unlisted companies</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          For a wholly owned subsidiary, a rights issue to the parent is usually the simplest route for later funding rounds.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Steps for each funding round</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Agree the instrument and terms, including any conversion formula.</li>
          <li>Obtain the valuations required under FEMA and, where relevant, the Companies Act.</li>
          <li>Pass the board and shareholder resolutions.</li>
          <li>Receive the money through banking channels and report the receipt on FIRMS.</li>
          <li>Allot within 60 days and file the return of allotment.</li>
          <li>File FC-GPR, or Form CN for convertible notes, within 30 days.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          See <Link href="/share-valuation-india-registered-valuer-fema" className="text-blue-800 font-semibold hover:underline">share valuation in India</Link> and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>.
        </p>
        <h2 id="choosing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing the right instrument</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          For a wholly owned subsidiary funded by its parent, ordinary equity through a rights issue is almost always the simplest choice. CCPS suit third-party investors who want priority rights. CCDs suit groups that want an interest return before conversion and can accept withholding tax on the interest. A loan under the ECB framework suits short-term funding that will be repaid. Discuss the choice with the group&apos;s treasury and tax advisers, because the home-country treatment of each instrument differs.
        </p>
        <h2 id="mistakes-fund" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common mistakes in funding rounds</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Receiving money before the board has approved the issue or before Press Note 3 approval where needed.</li>
          <li>Missing the 60-day allotment window or the 30-day reporting deadline.</li>
          <li>Leaving the conversion formula open instead of fixing it at issue.</li>
          <li>Issuing below fair value to save stamp duty or time.</li>
          <li>Using a private placement without a separate bank account for the money.</li>
        </ul>



        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate identifies which valuation rules apply to each transaction, coordinates the valuation with the appropriate professional, a Chartered Accountant, a SEBI-registered merchant banker or an IBBI registered valuer as the law requires, and handles the related FEMA, company-law and tax filings.
        </p>
        <GuideCTA title={"Planning a Funding Round for Your Indian Company?"} description={"Tell us the investor and the instrument, and we will set out the valuation, approvals and filings."} />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 7 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Planning a Funding Round for Your Indian Company?"} description={"Tell us the investor and the instrument, and we will set out the valuation, approvals and filings."} />
    </main>
  )
}
