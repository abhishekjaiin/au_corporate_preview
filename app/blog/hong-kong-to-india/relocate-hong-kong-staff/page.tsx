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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/relocate-hong-kong-staff"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "visas", label: "Choosing the visa" },
  { id: "steps", label: "Process" },
  { id: "security", label: "Security clearance" },
  { id: "family", label: "Families and practicalities" },
  { id: "exit", label: "Leaving India" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What visa does a Hong Kong employee need to work in an Indian subsidiary?", a: "An employment visa, with a minimum salary of USD 25,000 a year and an appointment letter from the Indian company. A business visa does not allow productive work." },
  { q: "Do Hong Kong staff need to register in India?", a: "A foreign national staying more than 180 days must register with the FRRO within 14 days of arrival." },
  { q: "Can I use a business visa to run the Indian subsidiary?", a: "No. A business visa covers meetings and negotiations, not employment or management work." },
  { q: "Do dependants get a visa?", a: "Yes. Dependant visas follow the employment visa with proof of relationship." },
  { q: "Does security clearance apply to Hong Kong passport holders?", a: "Citizens of land-border countries face extra scrutiny. How it applies to a Hong Kong SAR passport holder should be confirmed with the Indian mission." },
  { q: "How long do visas take?", a: "Processing varies. Apply well before the start date and confirm the requirements with the consulate." },
  { q: "Do I need tax clearance on exit?", a: "Not in every case, but long stays and large equity payouts should be planned with a tax adviser." },
]

const relatedCards = [
  { title: "Hong Kong Employees in India: Salary Tax, the MPF Position and EPF for International Workers", desc: "What a Hong Kong employer must plan for staff in India: Indian salary tax and the treaty day-count test, Hong Kong salaries tax, MPF, EPF for international workers because there is no social security agreement, and secondment contracts.", href: "/hong-kong-to-india/hong-kong-employees-in-india" },
  { title: "Hiring Staff in India as a Hong Kong-Owned Company: Employment Contracts, Provident Fund, ESI, Gratuity and Labour Codes", desc: "How a Hong Kong-owned Indian subsidiary hires locally: offer and employment contracts, payroll taxes, provident fund, ESI, gratuity, labour codes, shops and establishments law, notice periods, POSH and differences from Hong Kong practice.", href: "/hong-kong-to-india/hiring-in-india" },
  { title: "Press Note 3 for Hong Kong Companies: Approval for Hong Kong-Registered Investors and What the 2026 Easing Does Not Change", desc: "How India's Press Note 3 applies to a Hong Kong parent: the March 2026 government statement that Hong Kong-registered firms still need prior approval, the 10% passive-ownership easing for other investors, the approval route, and planning for regional headquarters.", href: "/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" },
  { title: "Twelve Common Mistakes Hong Kong Companies Make in India and How to Avoid Them", desc: "The most common mistakes of Hong Kong companies entering India: skipping Press Note 3, thin hub structures, late FEMA filings, weak treaty paperwork, secondment tax errors, stale apostilles, unstamped contracts and ignoring the Indian calendar.", href: "/hong-kong-to-india/common-mistakes" },
]

export default function RelocateHongKongStaffPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Moving Hong Kong Employees to India: Employment Visa, Registration with FRRO, Dependants and Clearance"
        description="How to relocate Hong Kong staff to an Indian subsidiary: employment and business visa categories, the salary floor, FRRO registration within 14 days for stays over 180 days, dependants, security clearance for land-border nationals, tax and exit."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Relocating Hong Kong Staff to India: Visas, Registration and Family" },
        ]}
      />

      <GuideHero
        eyebrow="People: relocation"
        title="Moving Hong Kong Employees to India: Employment Visa, Registration with FRRO, Dependants and Clearance"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Hong Kong staff going to India need the right visa for the work. Business visas suit meetings and
          short visits, not employment. An employment visa is for skilled work for an Indian entity, with a
          salary floor of USD 25,000 a year, and a foreign national staying over 180 days must register with the
          Foreigners Regional Registration Office within 14 days. Eligibility and processing differ by passport:
          staff holding a Hong Kong SAR passport and staff holding other passports are treated differently, and
          citizens of land-border countries face extra security scrutiny. Confirm the category with the Indian
          Consulate General in Hong Kong before purchase of tickets.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="expat-visa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Employment visa", "For skilled work with an Indian company; minimum salary USD 25,000 a year, with exceptions; apply through the Indian mission or portal"],
                ["Business visa", "Meetings, negotiations, audits; not for productive work"],
                ["Registration", "FRRO registration within 14 days for stays over 180 days"],
                ["Dependants", "Dependant visa linked to the employment visa"],
                ["Security", "Land-border country citizens face Ministry of Home Affairs clearance; confirm how it applies to your passport"],
                ["Tax", "See the employees guide for the day-count test, EPF and MPF"],
                ["Proof", "Appointment letter, company documents, qualifications and tax proof of the sponsor"],
                ["Exit", "Tax clearance may be sought for long stays; plan the exit with the Indian subsidiary"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="visas" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing the visa</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Purpose</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Visa category</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Attend meetings, negotiate, tour a plant", "Business visa", "No productive work; stays limited by the visa"],
                ["Install or commission machinery for a short period", "Business or employment, depending on work", "Check the categories and limits; the specialist purpose matters"],
                ["Work for the Indian subsidiary", "Employment visa", "Salary floor USD 25,000 a year; letter of appointment"],
                ["Family joining", "Dependant visa", "Linked to the main visa; proof of relationship"],
                ["Short project assignment", "Project visa where the rules permit", "Applies to specified project sectors"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Process</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Decide the real purpose and tax plan. See <Link href="/hong-kong-to-india/hong-kong-employees-in-india" className="text-blue-800 font-semibold hover:underline">Hong Kong employees in India</Link>.</li>
          <li>Prepare the Indian sponsor&apos;s documents: appointment letter, incorporation papers, tax proof.</li>
          <li>Apply for the visa through the Indian Consulate General in Hong Kong or the online route if the passport qualifies.</li>
          <li>On arrival, register with the FRRO within 14 days if staying more than 180 days.</li>
          <li>Open payroll, EPF and tax deduction on arrival. See <Link href="/hong-kong-to-india/hiring-in-india" className="text-blue-800 font-semibold hover:underline">hiring in India</Link>.</li>
        </ol>

        <h2 id="security" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Security clearance</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Citizens of countries sharing a land border with India, including the People&apos;s Republic of China,
          face additional scrutiny for visas and for board appointments. How this applies to Hong Kong SAR
          passport holders is a case-by-case question; confirm with the Indian mission before committing to a
          start date.
        </p>

        <h2 id="family" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Families and practicalities</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Dependant visas follow the main visa.</li>
          <li>Plan housing, schools and healthcare before arrival; Indian cities vary widely.</li>
          <li>Check the foreign exchange rules for personal remittances back to Hong Kong.</li>
          <li>Keep Hong Kong tax residence and MPF positions in mind with your Hong Kong adviser.</li>
        </ul>

        <h2 id="exit" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Leaving India</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          When the assignment ends, close the FRRO record, settle provident fund and tax, and cancel local
          registrations. Equity incentives and bonuses can create tax in both places, so check the timing.
        </p>

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

        <GuideServiceBox path="/hong-kong-to-india/relocate-hong-kong-staff" />
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
            { label: "Indian Visa Online", href: "https://indianvisaonline.gov.in/" },
            { label: "Bureau of Immigration (India)", href: "https://boi.gov.in/" },
            { label: "Ministry of External Affairs (India)", href: "https://www.mea.gov.in/" },
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
        title="Sending Hong Kong Staff to India?"
        description="Tell us who is relocating and for how long, and we'll map the visa, FRRO registration, family arrangements and PE risk."
      />
    </main>
  )
}
