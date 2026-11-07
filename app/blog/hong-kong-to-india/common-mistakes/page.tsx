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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/common-mistakes"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "list", label: "Twelve mistakes and fixes" },
  { id: "how", label: "How to avoid them" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the biggest mistake Hong Kong companies make in India?", a: "Assuming they can use the Automatic Route. Hong Kong-registered investors are reported to need prior approval under Press Note 3." },
  { q: "Why is a shell Hong Kong company risky?", a: "The principal purpose test, India's anti-avoidance rule and transfer pricing can deny treaty benefits and adjust profits." },
  { q: "What happens if FC-GPR is late?", a: "The company must regularise by compounding and may pay a penalty." },
  { q: "Can I claim the 5% dividend rate without paperwork?", a: "No. The payer needs Form 41, the residency certificate and a beneficial ownership declaration." },
  { q: "Does a secondee pay both EPF and MPF?", a: "Possibly, because there is no social security agreement. Budget for both and take advice." },
  { q: "Why do contracts need stamping?", a: "Unstamped documents are not admissible in evidence in India until stamped and penalty paid." },
  { q: "How do I stay on top of deadlines?", a: "Use a compliance calendar with owners, and review it each quarter." },
]

const relatedCards = [
  { title: "Press Note 3 for Hong Kong Companies: Approval for Hong Kong-Registered Investors and What the 2026 Easing Does Not Change", desc: "How India's Press Note 3 applies to a Hong Kong parent: the March 2026 government statement that Hong Kong-registered firms still need prior approval, the 10% passive-ownership easing for other investors, the approval route, and planning for regional headquarters.", href: "/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" },
  { title: "How to Incorporate a Private Limited Company in India as a Hong Kong Parent: Approval, SPICe+, Bank Account and Post-Incorporation Filings", desc: "Step-by-step route for a Hong Kong parent to set up an Indian private limited company: Press Note 3 approval, name, SPICe+, DIN and DSC, resident director, PAN and TAN, bank account, capital inflow, FC-GPR and first filings.", href: "/hong-kong-to-india/incorporation-steps" },
  { title: "Compliance Calendar: Indian Deadlines and the Hong Kong Filings They Feed", desc: "A month-by-month compliance calendar for an Indian subsidiary of a Hong Kong parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return, approval conditions and the Hong Kong-side annual return and profits tax filings.", href: "/hong-kong-to-india/compliance-calendar" },
  { title: "Funding Your Indian Subsidiary from Hong Kong: Equity, Preference Shares, External Borrowing and FEMA Reporting", desc: "How a Hong Kong parent can fund an Indian company: equity share and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return, Press Note 3 and reporting through the authorised dealer bank.", href: "/hong-kong-to-india/funding-and-fema" },
]

export default function CommonMistakesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Twelve Common Mistakes Hong Kong Companies Make in India and How to Avoid Them"
        description="The most common mistakes of Hong Kong companies entering India: skipping Press Note 3, thin hub structures, late FEMA filings, weak treaty paperwork, secondment tax errors, stale apostilles, unstamped contracts and ignoring the Indian calendar."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Common Mistakes Hong Kong Companies Make When Entering India" },
        ]}
      />

      <GuideHero
        eyebrow="Risk: common mistakes"
        title="Twelve Common Mistakes Hong Kong Companies Make in India and How to Avoid Them"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Most problems for Hong Kong companies entering India come from the same places: assuming a Hong Kong
          parent can use the Automatic Route, building a Hong Kong layer with no substance, missing FEMA
          deadlines, claiming the 5% dividend rate without paperwork, paying the wrong provident fund or tax on
          secondees, and relying on a contract that was never stamped. Each is avoidable with an early checklist
          and one person who owns the Indian calendar.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="common-mistakes" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Approval", "Assuming the Automatic Route; Hong Kong entities are reported to need approval"],
                ["Substance", "A shell Hong Kong company invites treaty denial and transfer pricing adjustments"],
                ["FEMA", "Late allotment or FC-GPR; wrong pricing"],
                ["Treaty", "No Form 41 or residency certificate before payment"],
                ["People", "Wrong visa; EPF and MPF double cost not budgeted"],
                ["Documents", "Unauthenticated or stale documents"],
                ["Contracts", "Unstamped agreements; vague arbitration clause"],
                ["Calendar", "No owner for Indian deadlines"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="list" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Twelve mistakes and fixes</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Mistake</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Why it hurts</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Fix</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">1. Assuming a Hong Kong parent can use the Automatic Route</th>
                  <td className="border border-gray-300 p-3">Investment without approval is a FEMA contravention</td>
                  <td className="border border-gray-300 p-3">Obtain written Indian advice; plan the Press Note 3 route. See <Link href="/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" className="text-blue-800 font-semibold hover:underline">Press Note 3</Link>.</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">2. Funding before approval</th>
                  <td className="border border-gray-300 p-3">Money in the bank cannot be used lawfully</td>
                  <td className="border border-gray-300 p-3">Sequence approval, incorporation, then remittance</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">3. Building a thin Hong Kong hub</th>
                  <td className="border border-gray-300 p-3">Treaty denial and transfer pricing disallowance</td>
                  <td className="border border-gray-300 p-3">Real people and decisions in Hong Kong. See <Link href="/hong-kong-to-india/hong-kong-as-regional-hub-for-india" className="text-blue-800 font-semibold hover:underline">the hub guide</Link>.</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">4. Missing the 60-day allotment or 30-day FC-GPR</th>
                  <td className="border border-gray-300 p-3">Compounding and penalties</td>
                  <td className="border border-gray-300 p-3">Calendar the dates from the day money lands. See <Link href="/hong-kong-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">5. Pricing shares below fair value on issue</th>
                  <td className="border border-gray-300 p-3">FEMA breach</td>
                  <td className="border border-gray-300 p-3">Get a valuation certificate</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">6. Paying without Form 41</th>
                  <td className="border border-gray-300 p-3">Domestic withholding rates apply and refunds are slow</td>
                  <td className="border border-gray-300 p-3">Collect the residency certificate and declaration. See <Link href="/hong-kong-to-india/india-hong-kong-dtaa" className="text-blue-800 font-semibold hover:underline">the DTAA guide</Link>.</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">7. Unsupported management fees</th>
                  <td className="border border-gray-300 p-3">Tax disallowance and penalties</td>
                  <td className="border border-gray-300 p-3">Contract, evidence of service and benchmarking. See <Link href="/hong-kong-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">8. Wrong visa category</th>
                  <td className="border border-gray-300 p-3">Deportation risk and fines</td>
                  <td className="border border-gray-300 p-3">Use an employment visa for work. See <Link href="/hong-kong-to-india/relocate-hong-kong-staff" className="text-blue-800 font-semibold hover:underline">relocating staff</Link>.</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">9. Ignoring provident fund for secondees</th>
                  <td className="border border-gray-300 p-3">Back contributions and interest</td>
                  <td className="border border-gray-300 p-3">Budget for EPF and MPF. See <Link href="/hong-kong-to-india/hong-kong-employees-in-india" className="text-blue-800 font-semibold hover:underline">employees guide</Link>.</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">10. Stale or unauthenticated documents</th>
                  <td className="border border-gray-300 p-3">Registrar and bank rejections</td>
                  <td className="border border-gray-300 p-3">Follow the checklist. See <Link href="/hong-kong-to-india/documents-hong-kong-apostille" className="text-blue-800 font-semibold hover:underline">documents</Link>.</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">11. Unstamped contracts and loose arbitration clauses</th>
                  <td className="border border-gray-300 p-3">Inadmissible evidence; slow enforcement</td>
                  <td className="border border-gray-300 p-3">Stamp in time; name the rules and seat. See <Link href="/hong-kong-to-india/contracts-courts-arbitration" className="text-blue-800 font-semibold hover:underline">contracts and arbitration</Link>.</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">12. No owner for the Indian calendar</th>
                  <td className="border border-gray-300 p-3">Late filings and penalties</td>
                  <td className="border border-gray-300 p-3">Name an owner and a deputy. See <Link href="/hong-kong-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar</Link>.</td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="how" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to avoid them</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Run a one-page pre-entry checklist covering approval, structure, funding, documents, people and calendar.</li>
          <li>Keep one folder for approvals, filings and treaty documents.</li>
          <li>Review the structure once a year as Indian and Hong Kong rules change.</li>
          <li>Use local advisers for each country and make them talk to each other.</li>
        </ol>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.ird.gov.hk/eng/welcome.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Inland Revenue Department (Hong Kong)</a>,{" "}
          <a href="https://www.cr.gov.hk/en/home/index.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Companies Registry (Hong Kong)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/hong-kong-to-india/common-mistakes" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/hong-kong-to-india/faq"
          seeAllLabel="See all 157 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "DPIIT", href: "https://dpiit.gov.in/" },
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Hong Kong
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Avoid the Usual Traps for Hong Kong Investors"
        description="Tell us your planned structure and launch date, and we'll flag the issues Hong Kong parents most often run into in India."
      />
    </main>
  )
}
