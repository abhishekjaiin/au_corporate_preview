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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/relocate-spanish-staff"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "steps", label: "The relocation in order" },
  { id: "visa", label: "Employment visa: what officers look at" },
  { id: "frro", label: "Registration after arrival" },
  { id: "tax", label: "Tax and social security during the move" },
  { id: "family", label: "Family, housing and health" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What visa does a Spanish employee need to work in India?", a: "An employment visa, applied for with an offer or employment letter and documents about the Indian company. Productive work on a business visa is not permitted." },
  { q: "Is there a salary floor?", a: "A minimum annual salary of USD 25,000 applies to the main employment category. Confirm exceptions." },
  { q: "Do I need to register after arrival?", a: "Yes, with the Foreigners Regional Registration Office within 14 days if the stay will exceed 180 days." },
  { q: "When does a Spanish employee become an Indian tax resident?", a: "At 182 days or more in a financial year, or 60 days plus 365 days in the previous four years. Special categories may differ." },
  { q: "Is there a social security agreement?", a: "None found between India and Spain. Confirm with an adviser." },
  { q: "Can family members come?", a: "Yes on dependant visas, which the main applicant should request at the same time." },
  { q: "Where do I apply?", a: "Online, with attendance where needed at the Embassy of India in Madrid or the Consulate General in Barcelona." },
  { q: "How early should I start?", a: "Eight to twelve weeks before the planned move." },
  { q: "Does the Spanish exemption for work abroad apply?", a: "Possibly, up to EUR 60,100 a year if the conditions are met. A Spanish adviser must confirm." },
]

const relatedCards = [
  { title: "Spanish Employees Working in India: Indian Salary Tax, Spain's Exemption for Work Abroad, EPF for International Workers and Double Contributions", desc: "What a Spanish employer must plan when staff work in India: Indian salary tax and the treaty test, the Spanish IRPF exemption for work abroad, Indian provident fund rules for international workers, Spanish social security for posted staff, and secondment contracts.", href: "/spain-to-india/spanish-employees-in-india" },
  { title: "Resident Director for an Indian Subsidiary of a Spanish Company: The 182-Day Rule, Who Can Fill the Role, Duties, Liability and Alternatives", desc: "Every Indian company needs a director who has lived in India for 182 days. This guide explains the rule, the four ways a Spanish group can meet it, the duties and personal liability that come with the seat, what a professional or nominee arrangement must and must not do, and a checklist for appointing one.", href: "/spain-to-india/resident-director-service-for-spanish-companies" },
  { title: "Hiring Staff in India from Spain: Employment Contracts, Provident Fund, State Insurance, the Four Labour Codes, Notice Periods and the Employer-of-Record Option", desc: "How a Spanish company hires in India: the entity or employer-of-record choice, offer letters and contracts, salary structure, payroll deductions, the labour codes reported in force from 21 November 2025, notice and termination, share awards and the differences that surprise Spanish managers.", href: "/spain-to-india/hiring-in-india" },
  { title: "EU-India Free Trade Agreement for Spanish Companies: Status After the January 2026 Conclusion, Services and Investment, Rules of Origin and How to Plan Before It Is in Force", desc: "The EU-India trade agreement as it affects a Spanish company exporting to or investing in India: the 27 January 2026 conclusion, the signature and ratification steps reported for December 2026 and early 2027, what it is expected to cover, the separate investment protection agreement, and a planning checklist.", href: "/spain-to-india/eu-india-fta-and-spanish-exporters" },
]

export default function RelocateSpanishStaffPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Moving Spanish Employees to India: Employment Visa, the USD 25,000 Salary Floor, FRRO Registration, 182-Day Residence, Dependants, Health Cover and Return"
        description="A step-by-step relocation guide for a Spanish employee posted to an Indian subsidiary: the employment visa and its conditions, FRRO registration within 14 days for stays over 180 days, Indian tax residency, the Spanish tax and social security position, dependants, housing, health cover and the return."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "Relocating Spanish Staff to India: Visa, FRRO Registration, Tax Residency and Family Practicalities" },
        ]}
      />

      <GuideHero
        eyebrow="People: relocation"
        title="Moving Spanish Employees to India: Employment Visa, the USD 25,000 Salary Floor, FRRO Registration, 182-Day Residence, Dependants, Health Cover and Return"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Spanish employee who moves to India to work for the Indian subsidiary needs an employment visa,
          normally applied for online with an offer or employment letter, proof of the Indian company and a
          minimum annual salary of USD 25,000 for the main category. Those staying more than 180 days must
          register with the Foreigners Regional Registration Office within 14 days of arrival. A stay of 182
          days or more in a financial year can make the employee an Indian tax resident, so plan the days and
          the pay structure. Spanish tax and social security continue to matter, and no India-Spain social
          security agreement was found. Family members need dependant visas and practical help with housing,
          schools and health cover. Start eight to twelve weeks before the move.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="expat-visa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Visa", "Employment visa for skilled professionals; sponsor must be a registered Indian entity"],
                ["Salary floor", "USD 25,000 a year for the main employment category; confirm exceptions"],
                ["Registration", "Foreigners Regional Registration Office within 14 days of arrival for stays over 180 days"],
                ["Tax residence", "182 days or more in the year, or 60 days and 365 in the four years before; confirm the details"],
                ["Spanish side", "Personal income tax exemption for work abroad up to EUR 60,100; social security position to be confirmed"],
                ["Social security agreement", "None found between India and Spain; confirm"],
                ["Dependants", "Dependant visas; schools and health cover"],
                ["Missions", "Embassy of India in Madrid and Consulate General in Barcelona"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The relocation in order</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Decide the assignment type, term and pay model with the Spanish tax adviser. See <Link href="/spain-to-india/spanish-employees-in-india" className="text-blue-800 font-semibold hover:underline">the employees guide</Link>.</li>
          <li>Make sure the Indian subsidiary has its registrations, bank account and an address, because the visa application relies on them.</li>
          <li>Prepare the documents: passport with enough validity, offer or employment letter, degree and experience proof, company documents, photographs and, where required, police certificate.</li>
          <li>Apply online for the employment visa and, where needed, attend at the visa centre or the Embassy of India in Madrid or the Consulate General in Barcelona.</li>
          <li>Arrange health cover and housing; book flights after the visa is issued.</li>
          <li>After arrival, register with the Foreigners Regional Registration Office within 14 days if the stay will exceed 180 days.</li>
          <li>Open an Indian bank account for salary once the registrations are done, and apply for a permanent account number for tax.</li>
          <li>Track days in India for tax residence and for the Spanish exemption.</li>
        </ol>

        <h2 id="visa" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Employment visa: what officers look at</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The employment visa is for a skilled professional or a person with specialised knowledge who is
          employed by an Indian company or a foreign company with an Indian presence. The officer looks at the
          salary against the floor of USD 25,000 a year, the qualifications and experience of the applicant, the
          genuineness of the Indian company, and the role. The visa is normally granted for the period of the
          contract up to a maximum, and extensions are available from within India. Business visits for meetings
          do not need an employment visa, but productive work does. A person who attends only board meetings can
          use the business visa, and a person who works in the office needs the employment visa. Breaching visa
          conditions can lead to fines and deportation.
        </p>

        <h2 id="frro" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Registration after arrival</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A foreigner holding a visa valid for more than 180 days must register with the Foreigners Regional
          Registration Office within 14 days of arrival, and must report changes such as a new address.
          Registration is now online for many categories, and the office issues a registration certificate or a
          residence permit. Keep the receipt, because banks, landlords and tax offices ask for it. An exit
          permit is not needed for an ordinary departure, but check the current rules if the registration
          lapses.
        </p>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax and social security during the move</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Question</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">India</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Spain</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Who taxes the salary?", "India for work done there; employer deducts tax", "Spain if the person remains a Spanish tax resident; exemption up to EUR 60,100 for qualifying work abroad"],
                ["Residence test", "182 days in the year, or 60 days plus 365 in the previous four years", "Spanish residence turns on days in Spain and the centre of economic interests; confirm"],
                ["Social security", "Provident fund for international workers, as generally applied", "Depends on the posting; no agreement with India found"],
                ["Reporting", "Indian return; foreign asset schedule if resident", "Spanish return; declaration of assets abroad above thresholds"],
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

        <h2 id="family" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Family, housing and health</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Dependants need dependant visas, and the main visa holder should apply at the same time.</li>
          <li>Schools in major Indian cities are in demand, so apply early and ask the company for help.</li>
          <li>Private health insurance with international cover is advised; check pre-existing condition terms.</li>
          <li>Housing contracts are typically for eleven months with a deposit; ask the company about guarantees.</li>
          <li>A Spanish driving licence can be used for a limited period with an international permit; check the current rule before driving.</li>
          <li>Plan the return: notice to the landlord, closing the Indian bank account and the final tax return.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Starting work in India on a business visa.</li>
          <li>Applying for the visa before the Indian company has its registrations.</li>
          <li>Missing the 14-day registration.</li>
          <li>Not tracking days, so that tax residence is a surprise.</li>
          <li>Leaving the Spanish social security position unresolved until after the move.</li>
          <li>Giving the employee equity of the Spanish parent without Indian tax planning.</li>
        </ul>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://sede.agenciatributaria.gob.es/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Agencia Tributaria (Spain)</a>,{" "}
          <a href="https://comercio.gob.es/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Spanish Ministry of Economy, Trade and Business</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/spain-to-india/relocate-spanish-staff" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/spain-to-india/faq"
          seeAllLabel="See all 179 FAQs"
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
            { label: "Consulate General of India, Barcelona", href: "https://www.cgibarcelona.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and Spanish
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Sending Spanish Staff to India?"
        description="Tell us who is relocating and for how long, and we'll map the visa, FRRO registration, tax residency and family arrangements."
      />
    </main>
  )
}
