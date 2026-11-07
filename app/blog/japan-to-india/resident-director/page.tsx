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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/resident-director"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "rule", label: "What the law requires" },
  { id: "options", label: "Who Japanese groups appoint" },
  { id: "first-year", label: "The first year after incorporation" },
  { id: "control", label: "Keeping decisions with the parent" },
  { id: "duties", label: "Annual duties of every director" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does the resident director have to be an Indian citizen?", a: "No. Any individual who stayed in India for 182 days or more in the financial year qualifies, including a Japanese national posted to India." },
  { q: "Can a chuzaiin be the resident director?", a: "Yes, if the chuzaiin is in India for at least 182 days in the financial year. A full-year posting usually meets the test." },
  { q: "What if the chuzaiin arrives after incorporation?", a: "The company can appoint a professional resident director at incorporation and replace that director once the chuzaiin meets the test." },
  { q: "Does a professional resident director control the company?", a: "No. A professional resident director signs statutory documents only and has no authority over the bank account or commercial contracts." },
  { q: "Do directors living in Japan need to travel to India?", a: "No. They need a DIN and digital signature, obtained with an apostilled passport and translated address proof, and can attend board meetings by video." },
  { q: "What is DIR-3 KYC?", a: "An annual identity update every director files with the Ministry of Corporate Affairs by 30 September; a missed filing deactivates the DIN until a late fee is paid." },
  { q: "Can a resident director create tax risk for the parent?", a: "A director who acts for the parent, rather than the Indian company, in concluding contracts can raise permanent establishment questions, so roles should be documented." },
  { q: "How many directors does an Indian private company need?", a: "At least two, of whom at least one must meet the 182-day residence test." },
]

const relatedCards = [
  { title: "Incorporation Process from Japan", desc: "When the director details are needed in the filing.", href: "/japan-to-india/incorporation-process" },
  { title: "Sending a Japanese Executive to India", desc: "Visa, FRRO and tax for chuzaiin.", href: "/japan-to-india/expat-visa" },
  { title: "Common Mistakes", desc: "Including treating the resident director as a formality.", href: "/japan-to-india/common-mistakes" },
  { title: "Compliance Calendar", desc: "Director KYC and board meeting dates.", href: "/japan-to-india/compliance-calendar" },
]

export default function ResidentDirectorPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Resident Director Rules for an Indian Subsidiary: Who Can Be One and How to Plan"
        description="Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for Japanese parents, and duties."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "Resident Director Requirement for an Indian Company" },
        ]}
      />

      <GuideHero
        eyebrow="Enter: directors"
        title="Resident Director Rules for an Indian Subsidiary: Who Can Be One and How to Plan"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Every Indian company needs at least one director who has stayed in India for 182 days or more in the financial year. Japanese groups usually meet this with a chuzaiin posted to India for a full year, or with an Indian general manager appointed to the board. A professional resident director is the fallback when neither is available at incorporation. The other directors, including those in Japan, can stay abroad.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="resident-director" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Legal basis", "Section 149(3) of the Companies Act, 2013"],
                ["Test", "Stayed in India for 182 days or more during the financial year (1 April to 31 March)"],
                ["Minimum board", "Two directors for a private limited company, one of them resident"],
                ["Credentials", "Director Identification Number (DIN) and Digital Signature Certificate for every director"],
                ["Annual KYC", "DIR-3 KYC for each director by 30 September"],
                ["Japanese directors", "Apostilled passport and translated address proof for the DIN and digital signature"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="rule" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the law requires</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The test looks at physical presence in India during the Indian financial year. It is not about citizenship or tax residence. A Japanese national who lives in India for the year meets it; an Indian citizen who has lived in Tokyo for the year does not. If the resident director leaves or falls short, the company must appoint another to stay compliant.
        </p>
        <h2 id="options" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who Japanese groups appoint</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Option</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Suits</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Points to plan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Full-year chuzaiin</th>
                <td className="border border-gray-300 p-3">Groups posting a manager to run the Indian company</td>
                <td className="border border-gray-300 p-3">Employment visa and FRRO registration; Certificate of Coverage for pension; the manager must not conclude contracts for the parent</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Indian general manager</th>
                <td className="border border-gray-300 p-3">Groups hiring a local head early</td>
                <td className="border border-gray-300 p-3">Clear authority matrix and director and officer insurance</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Professional resident director</th>
                <td className="border border-gray-300 p-3">Incorporation before anyone is in India</td>
                <td className="border border-gray-300 p-3">Signs statutory documents only; no banking or commercial authority</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Indian joint venture partner&apos;s nominee</th>
                <td className="border border-gray-300 p-3">Joint ventures</td>
                <td className="border border-gray-300 p-3">Board composition set out in the shareholders&apos; agreement</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="first-year" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The first year after incorporation</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          For a newly incorporated company, the 182 days are counted proportionately for the part of the first financial year after incorporation. Groups that incorporate before their chuzaiin arrives often appoint a professional resident director first and replace that director once the posted manager has built up enough days in India.
        </p>
        <h2 id="control" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Keeping decisions with the parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The parent appoints and removes directors as shareholder, so control sits with the shareholder, not with any one director.</li>
          <li>Reserved matters, such as budgets, borrowings, senior hires and new business lines, can be listed in the articles or a board-approved authority matrix.</li>
          <li>Bank mandates can require a Japanese signatory or dual approval above set amounts.</li>
          <li>Directors still owe duties to the Indian company under Indian law, whoever appointed them.</li>
        </ul>
        <h2 id="duties" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Annual duties of every director</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Complete DIR-3 KYC by 30 September each year.</li>
          <li>Disclose interests in other companies at the first board meeting of each year.</li>
          <li>Attend the minimum board meetings: four a year with no more than 120 days between meetings, with relaxations for small companies.</li>
          <li>Keep the digital signature valid for filings.</li>
          <li>Resign formally, with the Registrar notified, when leaving India or the board.</li>
        </ol>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We obtain DINs and digital signatures for Japanese directors, provide a professional resident director when needed, and keep director KYC, disclosures and board meetings on schedule.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and <Link href="/secretarial-roc-compliance" className="text-blue-800 font-semibold hover:underline">secretarial and ROC compliance</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/resident-director" />
        <GuideCTA
          title="Need a resident director before your team arrives?"
          description="Tell us the timeline, and we will propose the arrangement that fits."
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
            { label: "Companies Act, 2013 (India Code)", href: "https://www.indiacode.nic.in" },
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
        title="Need a Resident Director Alongside Your Japanese Board?"
        description="Tell us your planned board, and we'll map the options for meeting India's 182-day resident director rule."
      />
    </main>
  )
}
