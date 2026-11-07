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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/common-mistakes"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "thirteen", label: "The thirteen mistakes" },
  { id: "habits", label: "Australian habits that do not transfer" },
  { id: "prevention", label: "A short prevention plan" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the most common mistake Australian companies make in India?", a: "Running Indian deadlines from the Australian 30 June year end instead of India's 31 March." },
  { q: "Does superannuation replace the Indian provident fund?", a: "Only with an ATO certificate of coverage under the India-Australia Social Security Agreement." },
  { q: "Does the India-Australia trade agreement make investing easier?", a: "It cuts tariffs on goods; FDI and company law rules are unchanged." },
  { q: "Why are DFAT apostilles sometimes refused?", a: "Usually because DFAT cannot verify the notary's signature." },
  { q: "Can an Australian director be the resident director?", a: "Only if he or she stays in India for 182 days or more in the Indian financial year." },
  { q: "What creates a PE for an Australian company in India?", a: "Among other things, services furnished in India by its personnel for more than 183 days in any 12 months." },
  { q: "Do Australian employment templates work in India?", a: "No. Indian contracts must follow the labour codes and state rules." },
  { q: "When should the Indian accounts close?", a: "After 31 March, with a bridge to the Australian 30 June year for group reporting." },
]

const relatedCards = [
  { title: "Incorporation Process from Australia", desc: "The setup steps in order.", href: "/australia-to-india/incorporation-process" },
  { title: "Compliance Calendar", desc: "Indian dates against a 30 June group year.", href: "/australia-to-india/compliance-calendar" },
  { title: "Sending Australian Staff to India", desc: "Certificate of coverage and visas.", href: "/australia-to-india/expat-visa" },
  { title: "Tax Treaty and PE Risk", desc: "The 183-day service PE test.", href: "/australia-to-india/dtaa-pe-risk" },
]

export default function CommonMistakesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Thirteen Mistakes Australian Companies Make When Setting Up in India, and How to Avoid Them"
        description="The 13 most common and costly mistakes Australian companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist."
        datePublished="2026-10-15"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "13 Common Mistakes Australian Companies Make Setting Up in India" },
        ]}
      />

      <GuideHero
        eyebrow="Avoid the pitfalls"
        title="Thirteen Mistakes Australian Companies Make When Setting Up in India, and How to Avoid Them"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The thirteen mistakes below come up repeatedly with Australian parents. Most come from treating India like a second Australian state: using the 30 June year end, assuming Fair Work concepts apply, sending staff without a certificate of coverage, or expecting the trade agreement to ease investment rules. Each has a simple fix if it is planned before incorporation.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="common-mistakes" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Year end", "India 31 March, Australia 30 June: Indian deadlines always run from 31 March"],
                ["Superannuation", "Does not replace Indian provident fund unless an ATO certificate of coverage is held"],
                ["Trade agreement", "India-Australia ECTA (29 December 2022) cuts goods tariffs; FDI and company law rules are unchanged"],
                ["Documents", "DFAT apostille for the whole of Australia; ASIC extract should be recent"],
                ["Resident director", "At least one director in India for 182 days in the Indian financial year"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="thirteen" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The thirteen mistakes</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Mistake</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Consequence</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">1. Using the 30 June year end for Indian deadlines</th>
                <td className="border border-gray-300 p-3">Late AGM, returns and tax filings</td>
                <td className="border border-gray-300 p-3">Run every Indian date from 31 March</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">2. Seconding staff without an ATO certificate of coverage</th>
                <td className="border border-gray-300 p-3">Provident fund on full wages as well as superannuation</td>
                <td className="border border-gray-300 p-3">Apply for the certificate before the move</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">3. Expecting ECTA to relax investment rules</th>
                <td className="border border-gray-300 p-3">Wrong assumptions about approvals</td>
                <td className="border border-gray-300 p-3">Check the FDI Policy for the sector</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">4. Using a notary DFAT cannot verify</th>
                <td className="border border-gray-300 p-3">Apostille refused and documents redone</td>
                <td className="border border-gray-300 p-3">Use a notary whose signature DFAT holds</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">5. Sending an old ASIC extract</th>
                <td className="border border-gray-300 p-3">Registrar or bank query</td>
                <td className="border border-gray-300 p-3">Order the extract close to filing</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">6. No one in India for the resident director role</th>
                <td className="border border-gray-300 p-3">Company non-compliant from the start</td>
                <td className="border border-gray-300 p-3">Appoint an Indian manager or professional director</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">7. Remitting capital from the wrong entity</th>
                <td className="border border-gray-300 p-3">FC-GPR held up</td>
                <td className="border border-gray-300 p-3">Remit from the shareholder in the incorporation documents</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">8. Missing the 60-day allotment window</th>
                <td className="border border-gray-300 p-3">Capital refunded and resent</td>
                <td className="border border-gray-300 p-3">Fix the allotment board date before sending money</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">9. Charging fees without an agreement</th>
                <td className="border border-gray-300 p-3">Deduction denied in India</td>
                <td className="border border-gray-300 p-3">Sign intercompany agreements first</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">10. Ignoring the 183-day service PE test</th>
                <td className="border border-gray-300 p-3">Australian company taxable in India</td>
                <td className="border border-gray-300 p-3">Track days of Australian staff in India</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">11. Copying Fair Work terms into Indian contracts</th>
                <td className="border border-gray-300 p-3">Contracts out of line with Indian law</td>
                <td className="border border-gray-300 p-3">Use Indian contracts under the labour codes</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">12. Treating dividends and fees the same</th>
                <td className="border border-gray-300 p-3">Higher overall tax</td>
                <td className="border border-gray-300 p-3">Compare the 15% dividend route with fees and royalties</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">13. Leaving the Indian close until the Australian year end</th>
                <td className="border border-gray-300 p-3">Group reporting and Indian audit collide</td>
                <td className="border border-gray-300 p-3">Plan an Indian close in April and a bridge to June</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="habits" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Australian habits that do not transfer</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Australian companies are used to a single federal regulator for companies and an employment system built on awards and the National Employment Standards. India divides responsibility between the Ministry of Corporate Affairs, the RBI, the income tax and GST authorities and state labour departments, each with its own calendar. Expect more filings, more often, with less tolerance for late lodgement than the ATO&apos;s usual approach.
        </p>
        <h2 id="prevention" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A short prevention plan</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Decide the resident director before incorporation.</li>
          <li>Order the ASIC extract and DFAT apostilles in one sequence.</li>
          <li>Approve the first capital and allotment together.</li>
          <li>Apply for ATO certificates of coverage for anyone moving to India.</li>
          <li>Sign intercompany agreements before the first invoice.</li>
          <li>Set a group calendar that maps the Indian 31 March year to the Australian 30 June year.</li>
        </ol>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We plan the setup around these points, prepare the Australian document checklist, and run the Indian filings so the deadlines are met from day one.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/common-mistakes" />
        <GuideCTA
          title="Setting up in India from Australia?"
          description="Tell us your plan, and we will flag the steps that usually go wrong."
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
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Department of Foreign Affairs and Trade: apostilles", href: "https://www.dfat.gov.au" },
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
        title="Avoid These India Entry Mistakes"
        description="Tell us your planned structure and timeline — we'll flag the compliance traps specific to your sector before you incorporate."
      />
    </main>
  )
}
