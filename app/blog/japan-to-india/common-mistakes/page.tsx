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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/common-mistakes"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "ten", label: "The ten mistakes" },
  { id: "approvals", label: "Fitting Indian deadlines into Japanese approvals" },
  { id: "before-filing", label: "Before you file anything" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the most common mistake Japanese companies make in India?", a: "Running internal approvals and Indian deadlines on separate tracks, so that allotment, reporting or auditor appointments miss their fixed windows." },
  { q: "Why do Japanese documents get rejected?", a: "Usually because the steps were done out of order, the translation is uncertified, or the certificate of registered matters is older than MOFA accepts for an apostille." },
  { q: "Can a chuzaiin sign contracts for the Japanese parent in India?", a: "It is risky. A person in India who habitually concludes contracts for the parent can create a permanent establishment, so contracts should be signed by the Indian company." },
  { q: "Do Japanese employment practices apply to Indian staff?", a: "No. Indian employees are covered by Indian contracts, the labour codes and state rules, including notice, leave and gratuity after five years." },
  { q: "Is a Certificate of Coverage needed for every seconded employee?", a: "It is needed for each employee who should stay in Japanese pension insurance and be exempt from Indian provident fund, for up to five years." },
  { q: "What happens if shares are not allotted within 60 days?", a: "The money must be returned to the Japanese parent within the next 15 days unless the RBI allows otherwise, and the remittance has to be repeated." },
  { q: "Does the parent's 31 March year end remove all reporting work?", a: "It aligns the years, but the Indian accounts still follow Indian standards and timelines, so group packs need a mapping to J-GAAP or IFRS." },
  { q: "When should the resident director be decided?", a: "Before incorporation, because the director's DIN and digital signature are needed for the SPICe+ filing." },
]

const relatedCards = [
  { title: "Incorporation Process from Japan", desc: "The steps and documents in order.", href: "/japan-to-india/incorporation-process" },
  { title: "Resident Director Rules", desc: "Who can meet the 182-day test.", href: "/japan-to-india/resident-director" },
  { title: "Funding and FC-GPR", desc: "The 60-day and 30-day FEMA clocks.", href: "/japan-to-india/funding-fema-fc-gpr" },
  { title: "Compliance Calendar", desc: "What is due and when after incorporation.", href: "/japan-to-india/compliance-calendar" },
]

export default function CommonMistakesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Ten Mistakes Japanese Companies Make When Setting Up in India, and How to Avoid Them"
        description="The ten most common and costly mistakes Japanese companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "10 Common Mistakes Japanese Companies Make Setting Up in India" },
        ]}
      />

      <GuideHero
        eyebrow="Avoid the pitfalls"
        title="Ten Mistakes Japanese Companies Make When Setting Up in India, and How to Avoid Them"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The ten mistakes we see most often from Japanese parents are not about Indian law being hard; they come from carrying Japanese habits into a different system. Slow internal approvals collide with fixed Indian deadlines, documents are prepared in the wrong order for the apostille, chuzaiin cross into permanent establishment territory, and Japanese employment and pricing practices are copied without change. Each is avoidable with a plan made before incorporation.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="common-mistakes" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Most common timing problem", "Indian deadlines (60-day allotment, 30-day FC-GPR, 30-day first auditor) running past a ringi cycle or a Japanese holiday period"],
                ["Most common document problem", "Translating or apostilling in the wrong order, or using a certificate of registered matters older than MOFA accepts"],
                ["Most common tax problem", "Chuzaiin negotiating or signing contracts in India, creating permanent establishment risk for the Japanese parent"],
                ["Most common people problem", "Applying Japanese employment terms, such as retirement allowances or seniority pay, without Indian labour code review"],
                ["Hard deadline to diarise", "Commencement of business declaration (INC-20A) within 180 days of incorporation"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="ten" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The ten mistakes</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Mistake</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What happens</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">How to avoid it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">1. Starting the ringi only after choosing a city and partner</th>
                <td className="border border-gray-300 p-3">Incorporation waits weeks for internal sign-off, and quotes and name approvals expire</td>
                <td className="border border-gray-300 p-3">Run the internal approval in parallel with entity planning, with a defined decision date</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">2. Preparing Japanese documents in the wrong order</th>
                <td className="border border-gray-300 p-3">MOFA rejects the apostille or the Indian Registrar queries the translation</td>
                <td className="border border-gray-300 p-3">Notarise, obtain Legal Affairs Bureau certification, apostille, then translate; keep certificates under three months old</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">3. Remitting capital from a group treasury company</th>
                <td className="border border-gray-300 p-3">The remitter does not match the shareholder, and FC-GPR is held up</td>
                <td className="border border-gray-300 p-3">Send funds from the shareholder named in the incorporation documents</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">4. Missing the 60-day allotment window over Golden Week or Obon</th>
                <td className="border border-gray-300 p-3">The capital must be refunded and sent again</td>
                <td className="border border-gray-300 p-3">Fix the board date for allotment before the money leaves Japan</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">5. Letting chuzaiin negotiate or sign contracts for the parent</th>
                <td className="border border-gray-300 p-3">The parent may have a permanent establishment in India and an Indian tax return to file</td>
                <td className="border border-gray-300 p-3">Keep contracting authority in the Indian company and document roles</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">6. Copying Japanese employment terms</th>
                <td className="border border-gray-300 p-3">Contracts conflict with Indian notice, gratuity and leave rules</td>
                <td className="border border-gray-300 p-3">Use Indian contracts reviewed against the labour codes and state shops rules</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">7. Assuming the same year end needs no bridge</th>
                <td className="border border-gray-300 p-3">Most Japanese parents close on 31 March like India, but those on 31 December still need a reconciliation</td>
                <td className="border border-gray-300 p-3">Agree the group reporting calendar at the start</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">8. Charging the subsidiary without an intercompany agreement</th>
                <td className="border border-gray-300 p-3">Fees are disallowed or challenged in transfer pricing</td>
                <td className="border border-gray-300 p-3">Sign agreements before the first invoice and price them at arm&apos;s length</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">9. Skipping a Certificate of Coverage for seconded staff</th>
                <td className="border border-gray-300 p-3">Indian provident fund contributions are due on top of Japanese pension insurance</td>
                <td className="border border-gray-300 p-3">Apply for the Certificate of Coverage under the India-Japan Social Security Agreement before the move</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">10. Treating the resident director as a formality</th>
                <td className="border border-gray-300 p-3">A director who misses the 182-day test leaves the company non-compliant</td>
                <td className="border border-gray-300 p-3">Plan who meets the test, often a full-year chuzaiin or an Indian manager</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="approvals" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Fitting Indian deadlines into Japanese approvals</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian timelines start from events: receipt of money, allotment, incorporation, year end. Japanese approvals start from the calendar of meetings. The fix is to approve a package once, covering the capital, the valuation range, the board authority to allot and the bank mandate, so that local management can act within the Indian clocks without returning to Tokyo for each step.
        </p>
        <h2 id="before-filing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Before you file anything</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Confirm the sector is on the Automatic Route and that no beneficial owner brings Press Note 3 into play.</li>
          <li>Decide who will be the resident director and confirm the 182-day test.</li>
          <li>Order a fresh certificate of registered matters and plan the notary, Legal Affairs Bureau and MOFA steps.</li>
          <li>Agree the capital, the share price basis and the remitting account.</li>
          <li>Draft the intercompany agreement and the secondment terms for chuzaiin.</li>
          <li>Set the reporting calendar between the Indian 31 March year and the parent&apos;s year end.</li>
        </ol>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We plan the incorporation around your internal approval cycle, prepare the document checklist in the order MOFA and the Indian Registrar expect, and run the filings and deadlines after incorporation.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/common-mistakes" />
        <GuideCTA
          title="Planning your India entry from Japan?"
          description="Tell us your timeline, and we will flag the steps that usually slip."
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
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "Ministry of Foreign Affairs of Japan: apostille", href: "https://www.mofa.go.jp/" },
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
        title="Avoid the Usual Traps for Japanese Investors"
        description="Tell us your planned structure and launch date, and we'll flag the compliance issues Japanese parents most often run into in India."
      />
    </main>
  )
}
