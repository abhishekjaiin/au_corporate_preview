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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/how-long-it-takes-to-set-up-from-spain"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "plan", label: "The schedule at a glance" },
  { id: "week", label: "A week-by-week plan" },
  { id: "delays", label: "What usually causes delay" },
  { id: "after", label: "After incorporation: the first year calendar" },
  { id: "speed", label: "How to save time without taking risk" },
  { id: "urgent", label: "When a project is urgent" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How long does it take to set up an Indian subsidiary from Spain?", a: "About two to three months from board decision to a company that can bill. Spanish paperwork takes two to four weeks, incorporation two to three weeks and the bank account one to four weeks, with much of it in parallel." },
  { q: "What is the slowest step?", a: "Usually the bank account and the first remittance, followed by the Spanish apostille and translation." },
  { q: "By when must shares be allotted?", a: "Within 60 days of receiving the money from the Spanish parent." },
  { q: "By when must the foreign investment be reported?", a: "Form FC-GPR within 30 days of allotting the shares." },
  { q: "When must the company file the commencement declaration?", a: "Form INC-20A within 180 days of incorporation." },
  { q: "When must the first auditor be appointed?", a: "Within 30 days of incorporation, by board resolution, with Form ADT-1 filed." },
  { q: "Can the Spanish and Indian steps run in parallel?", a: "Yes. The Spanish documents, the Indian director and name steps and the bank conversation can all start in week one." },
  { q: "What if I need the company by a fixed date?", a: "Tell us on day one. We can sequence the steps and tell you if the date is realistic, and discuss interim options." },
  { q: "Do the directors need to travel to India?", a: "Not for the incorporation filing, which is online, but some banks ask for a director to attend or to verify identity." },
]

const relatedCards = [
  { title: "What It Costs a Spanish Company to Set Up a Subsidiary in India: Professional Fees, Government Charges, Capital, Banking and the First-Year Running Budget", desc: "A budgeting guide for Spanish groups: what the one-time set-up costs, the first-year running costs and the money you must fund as share capital. Includes a cost table by stage, a worked first-year budget template and the questions to ask any adviser before you accept a quote.", href: "/spain-to-india/cost-of-setting-up-a-subsidiary-in-india-from-spain" },
  { title: "Step-by-Step Incorporation of an Indian Private Limited Company by a Spanish Parent: From Name Approval to the Foreign Investment Filing", desc: "The exact steps to incorporate an Indian private limited company when the shareholder is Spanish: name, DIN and DSC, the SPICe+ form with AGILE-PRO-S, charter documents, PAN and TAN, bank account, share allotment, FC-GPR, first auditor and commencement of business.", href: "/spain-to-india/incorporation-steps" },
  { title: "Preparing Spanish Documents for an Indian Subsidiary: Escritura, Registro Mercantil Extracts, Apostille and Sworn Translation into English", desc: "How to prepare Spanish company and director documents for Indian filings: why Spain and India both accept the apostille, notarial deeds and Mercantile Registry certificates, sworn translation, the Indian missions in Madrid and Barcelona, and a document checklist.", href: "/spain-to-india/documents-apostille-and-sworn-translation" },
  { title: "Funding an Indian Subsidiary from Spain: Share Capital, Shareholder Loans, Fair Value Pricing Rules, FC-GPR, FC-TRS and the Annual FLA Return", desc: "How a Spanish parent can put money into an Indian company: equity under the Automatic Route, convertible instruments, external commercial borrowing, intra-group financing, the FEMA pricing rule, the 60-day and 30-day deadlines, the FLA return and the Spanish declarations that match.", href: "/spain-to-india/funding-and-fema" },
]

export default function HowLongItTakesToSetUpFromSpainPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How Long Does It Take a Spanish Company to Set Up in India? A Week-by-Week Timeline from Board Decision to First Invoice"
        description="A realistic schedule for a Spanish parent: documents and apostille in Spain, name and incorporation in India, bank account, share capital and foreign investment filing, commencement of business, first audit and first returns. Shows what runs in parallel and what causes delay."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "How Long It Takes to Set Up an Indian Subsidiary from Spain: Week-by-Week Timeline" },
        ]}
      />

      <GuideHero
        eyebrow="Timeline: planning"
        title="How Long Does It Take a Spanish Company to Set Up in India? A Week-by-Week Timeline from Board Decision to First Invoice"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          From a board decision to a company that can bill customers usually takes about two to three months,
          and most of that time is spent outside the incorporation form. Documents and apostille in Spain take
          two to four weeks. Incorporation in India takes two to three weeks from a complete file. The bank
          account and the first remittance of share capital often take longer than the incorporation, and the
          foreign investment filing must follow within 30 days of allotting shares. Shares must be allotted
          within 60 days of receiving the money, and the company must file its declaration of commencement of
          business within 180 days of incorporation. The fastest plan runs the Spanish paperwork, the Indian
          name and director steps and the bank discussions in parallel from the first week.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="setup-timeline" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Spanish documents and apostille", "2 to 4 weeks from final drafts"],
                ["Name approval and director credentials", "Days, in parallel with Spanish documents"],
                ["Incorporation (SPICe+)", "2 to 3 weeks from a complete file"],
                ["Bank account", "1 to 4 weeks, often the longest step"],
                ["Share capital remittance", "Days once the account is open; shares allotted within 60 days of receipt"],
                ["Foreign investment filing (FC-GPR)", "Within 30 days of allotment"],
                ["Commencement of business (INC-20A)", "Within 180 days of incorporation"],
                ["First annual general meeting", "Within six months of the first financial year end"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The schedule at a glance</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Phase</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical duration</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Depends on</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Can run in parallel with</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1. Board decision and structure", "1 to 2 weeks", "Board calendar; shareholder approvals", "None"],
                ["2. Spanish documents, apostille and translation", "2 to 4 weeks", "Notary, apostille authority, sworn translator", "Phases 3 and 4"],
                ["3. Director credentials (DIN, DSC) and name", "Several days", "Passport copies and identity checks", "Phase 2"],
                ["4. Bank pre-discussion", "1 to 2 weeks to start", "Beneficial ownership papers", "Phases 2 and 3"],
                ["5. Incorporation filing and certificate", "2 to 3 weeks", "Registrar queries", "Phase 4"],
                ["6. Bank account opening", "1 to 4 weeks", "Bank checks and director visits", "Phase 7 preparation"],
                ["7. Remittance, allotment and FC-GPR", "1 to 3 weeks, then 30 days to file", "Spanish bank speed; Indian bank certificates", "Hiring"],
                ["8. Commencement of business and tax registrations", "Within 180 days; earlier is better", "Capital received and shares allotted", "First hires"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                  <td className="border border-gray-300 p-3">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="week" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A week-by-week plan</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Weeks 1 to 2:</strong> board resolution, final decision on structure, appointment of the Resident Director, instructions to the Spanish notary and translator, passport and address proofs gathered.</li>
          <li><strong>Weeks 2 to 4:</strong> Spanish documents signed, notarised, apostilled and translated; DIN and DSC applied for; proposed names checked; first discussion with the Indian bank.</li>
          <li><strong>Weeks 4 to 6:</strong> SPICe+ filed with AGILE-PRO-S for the tax and other registrations; registrar queries answered; certificate of incorporation, PAN and TAN issued.</li>
          <li><strong>Weeks 5 to 8:</strong> bank account opened; first auditor appointed within 30 days of incorporation; registered office evidence held; share capital remitted from Spain.</li>
          <li><strong>Weeks 8 to 10:</strong> shares allotted within 60 days of receiving the money; FC-GPR filed within 30 days of allotment; stamp duty on share certificates settled.</li>
          <li><strong>By day 180:</strong> INC-20A filed so that the company may begin business and borrow; GST, professional tax, provident fund and state insurance registered as needed.</li>
        </ol>

        <h2 id="delays" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What usually causes delay</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Names and numbers that do not match.</strong> A director&apos;s name spelled differently in the passport and the Registry certificate can stop a filing for days. See <Link href="/spain-to-india/documents-apostille-and-sworn-translation" className="text-blue-800 font-semibold hover:underline">the documents guide</Link>.</li>
          <li><strong>Bank onboarding.</strong> Indian banks ask for beneficial ownership down to individuals, for source of funds and sometimes for the director to be present. Start the conversation before incorporation.</li>
          <li><strong>Registrar queries.</strong> A name that is too close to an existing one, an object clause that does not match the sector, or an address proof that is incomplete are the usual triggers.</li>
          <li><strong>Powers of attorney.</strong> A power that is too general, or that has not been stamped on arrival in India, sends the file back.</li>
          <li><strong>Spanish approvals.</strong> A shareholders&apos; agreement or financing contract may require a consent that takes time. See <Link href="/spain-to-india/spanish-parent-obligations" className="text-blue-800 font-semibold hover:underline">Spanish parent obligations</Link>.</li>
          <li><strong>Sector licences.</strong> Regulated sectors need licences or approvals that run on the regulator&apos;s timetable, not yours.</li>
        </ul>

        <h2 id="after" className="text-2xl font-bold text-gray-900 mt-12 mb-4">After incorporation: the first year calendar</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">When</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What happens</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Within 30 days of incorporation", "First auditor appointed by the board (Form ADT-1 filed)"],
                ["Within 60 days of receiving the remittance", "Shares allotted"],
                ["Within 30 days of allotment", "FC-GPR filed with the Reserve Bank through the portal"],
                ["Within 180 days of incorporation", "Declaration of commencement of business (Form INC-20A)"],
                ["By 15 June, September, December and March", "Advance tax instalments once the company is profitable"],
                ["Within six months of year end", "First annual general meeting; accounts adopted"],
                ["30 days and 60 days after the meeting", "AOC-4 and MGT-7 filed"],
                ["By 15 July", "Foreign liabilities and assets return"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="speed" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to save time without taking risk</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Start every thread in week one: documents, director credentials and the bank.</li>
          <li>Use one set of name spellings, taken from the passport, in every paper.</li>
          <li>Ask the Spanish notary to prepare a power of attorney that names the specific Indian acts.</li>
          <li>Decide the authorised capital and the registered office before filing.</li>
          <li>Do not wait for the certificate of incorporation to start the bank discussion.</li>
          <li>Have a named person in Spain who can answer queries within one working day. Time zone differences are small, so this is easy to do.</li>
        </ul>

        <h2 id="urgent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When a project is urgent</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          If a customer contract or a tender requires an Indian entity by a fixed date, say so on day one. We
          can then sequence the work so that the steps with the longest fixed durations, such as apostille and
          bank onboarding, start first, and we can tell you honestly whether the date is achievable. Where it is
          not, we can talk about interim arrangements such as engaging an Indian partner or an employer of
          record while the company is being formed. See{" "}
          <Link href="/spain-to-india/hiring-in-india" className="text-blue-800 font-semibold hover:underline">hiring in India</Link>.
        </p>

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

        <GuideServiceBox path="/spain-to-india/how-long-it-takes-to-set-up-from-spain" />
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
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
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
        title="Working to a Launch Date?"
        description="Tell us when you need the Indian company running, and we'll build a week-by-week plan from documents to bank account."
      />
    </main>
  )
}
