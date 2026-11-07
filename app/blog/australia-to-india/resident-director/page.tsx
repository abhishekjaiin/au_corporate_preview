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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/resident-director"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "test", label: "The 182-day test in practice" },
  { id: "choices", label: "Who Australian groups appoint" },
  { id: "tax", label: "The tax side for an Australian director" },
  { id: "authority", label: "Limiting the resident director's authority" },
  { id: "upkeep", label: "Keeping the director compliant" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can an Australian be the resident director?", a: "Yes, if he or she is in India for 182 days or more in the Indian financial year." },
  { q: "Which year is the 182-day test counted over?", a: "The Indian financial year, 1 April to 31 March." },
  { q: "What do most Australian parents do?", a: "Appoint the Indian country manager or a professional resident director, because Australian executives rarely spend 182 days in India." },
  { q: "Does a professional resident director control the bank account?", a: "No. A professional director signs statutory documents only." },
  { q: "Can a resident director become tax resident in both countries?", a: "Yes. Article 4 of the India-Australia treaty then decides residence for treaty purposes." },
  { q: "What do Australian non-resident directors need?", a: "A DIN and Digital Signature Certificate obtained with a DFAT-apostilled passport and address proof." },
  { q: "When is director KYC due?", a: "By 30 September each year, for every director with a DIN." },
  { q: "How many directors does the company need?", a: "At least two, one of whom meets the residence test." },
]

const relatedCards = [
  { title: "Incorporation Process from Australia", desc: "When director details are filed.", href: "/australia-to-india/incorporation-process" },
  { title: "Sending Australian Staff to India", desc: "Visas and tax for relocated executives.", href: "/australia-to-india/expat-visa" },
  { title: "Tax Treaty and PE Risk", desc: "Residence and PE under the treaty.", href: "/australia-to-india/dtaa-pe-risk" },
  { title: "Compliance Calendar", desc: "Director KYC and board meetings.", href: "/australia-to-india/compliance-calendar" },
]

export default function ResidentDirectorPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Resident Director Rules for an Indian Subsidiary: Who Can Be One and How to Plan"
        description="Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for Australian parents, and duties."
        datePublished="2026-10-15"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
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
          An Indian company must have at least one director who was in India for 182 days or more in the Indian financial year. Australian executives rarely spend that long in India, so most Australian parents appoint an Indian employee, usually the country head, or a professional resident director. An Australian who does meet the test can become tax resident in India while still Australian resident, so the treaty tie-breaker in Article 4 then decides where he or she is taxed.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="resident-director" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Requirement", "At least one director in India for 182 days or more in the financial year (Section 149(3))"],
                ["Financial year", "1 April to 31 March, not the Australian 1 July to 30 June"],
                ["Usual choice for Australian groups", "Indian country manager or a professional resident director"],
                ["Australian director credentials", "DIN and Digital Signature Certificate, using a DFAT-apostilled passport and address proof"],
                ["Tax risk", "An Australian meeting the test may be dual resident; Article 4 of the treaty decides"],
                ["Annual KYC", "DIR-3 KYC by 30 September"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="test" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The 182-day test in practice</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Count days of physical presence in India between 1 April and 31 March. The test has nothing to do with citizenship: an Australian living in Bengaluru for the year qualifies, while an Indian national based in Melbourne does not. For a company incorporated part-way through the year, the requirement applies proportionately to the remaining months.
        </p>
        <h2 id="choices" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who Australian groups appoint</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Choice</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">When it fits</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What to plan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Indian country manager</th>
                <td className="border border-gray-300 p-3">A local head is hired early</td>
                <td className="border border-gray-300 p-3">Written authority limits; directors and officers cover</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Professional resident director</th>
                <td className="border border-gray-300 p-3">No one in India yet</td>
                <td className="border border-gray-300 p-3">Statutory signing only; no bank or contract authority</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Australian executive relocated for a year or more</th>
                <td className="border border-gray-300 p-3">Group is sending a leader</td>
                <td className="border border-gray-300 p-3">Employment visa, FRRO registration, certificate of coverage and dual residence review</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Joint venture partner&apos;s nominee</th>
                <td className="border border-gray-300 p-3">A local partner holds shares</td>
                <td className="border border-gray-300 p-3">Board rights in the shareholders&apos; agreement</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The tax side for an Australian director</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          An Australian who spends 182 days or more in India is usually tax resident in India for that year. Under Australian rules he or she may remain resident through the domicile test. In that case Article 4 of the India-Australia treaty decides residence by looking at permanent home, personal and economic ties and habitual abode, and the Indian tax on Indian salary is generally claimed in Australia through the foreign income tax offset.
        </p>
        <h2 id="authority" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Limiting the resident director&apos;s authority</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Set reserved matters for the Australian parent in the articles or an authority matrix.</li>
          <li>Use dual signatories or parent approval above a set amount on the bank mandate.</li>
          <li>Keep commercial contracting with named officers, not with a professional director.</li>
          <li>Record the scope of a professional director&apos;s role in an engagement letter.</li>
        </ul>
        <h2 id="upkeep" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Keeping the director compliant</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>File DIR-3 KYC by 30 September each year.</li>
          <li>Disclose interests at the first board meeting of each financial year.</li>
          <li>Hold at least four board meetings a year with gaps of no more than 120 days, subject to small company relaxations.</li>
          <li>Renew the digital signature before it expires.</li>
          <li>Appoint a replacement before a departing resident director leaves India.</li>
        </ol>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We obtain DINs and digital signatures for Australian directors, provide a professional resident director where needed, and keep director KYC and board meetings on schedule.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and <Link href="/secretarial-roc-compliance" className="text-blue-800 font-semibold hover:underline">secretarial and ROC compliance</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/resident-director" />
        <GuideCTA
          title="No one in India to act as resident director?"
          description="Tell us your timeline, and we will propose an arrangement."
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
            { label: "Australian Taxation Office: residency", href: "https://www.ato.gov.au" },
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
        title="Need a Resident Director for Your Indian Company?"
        description="Tell us your current board composition — we'll map your options for meeting the 182-day residency requirement."
      />
    </main>
  )
}
