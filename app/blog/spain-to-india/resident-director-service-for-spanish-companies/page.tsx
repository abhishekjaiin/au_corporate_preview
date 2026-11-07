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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/resident-director-service-for-spanish-companies"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "rule", label: "What the rule says and when it bites" },
  { id: "options", label: "Four ways to fill the seat" },
  { id: "duties", label: "Duties and liability that come with the seat" },
  { id: "nominee", label: "Professional and nominee arrangements: what is acceptable" },
  { id: "process", label: "Checklist for appointing the resident director" },
  { id: "spanish", label: "The Spanish angle" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Who is a Resident Director in India?", a: "A director who has stayed in India for 182 days or more in the financial year. Every Indian company must have at least one." },
  { q: "Can a Spanish citizen be the Resident Director?", a: "Yes, if the person stays in India long enough and holds a DIN and a Digital Signature Certificate, and has the right visa. A Spanish citizen resident in India for 182 days qualifies." },
  { q: "How many directors does a private company need?", a: "At least two, one of whom must be a Resident Director." },
  { q: "Can an adviser supply a Resident Director?", a: "Yes, as a professional director on a written scope. The director must have a real role and the ability to decide. AU Corporate can discuss what arrangement fits your plan." },
  { q: "Is a Resident Director personally liable?", a: "Yes. Directors are personally liable for statutory defaults and for fraud, and a formal seat does not remove it." },
  { q: "What if the Resident Director leaves India?", a: "The company may default on the requirement if no director meets the 182-day test. Track the days and appoint a replacement in good time." },
  { q: "Does the director need annual KYC?", a: "Yes, each director with a DIN completes an annual KYC. Late KYC can lead to deactivation of the DIN." },
  { q: "How often must the board meet?", a: "At least four times a year with no more than 120 days between meetings, subject to relaxations for small companies." },
  { q: "Should the Spanish parent insure its directors?", a: "It is worth pricing directors' and officers' cover for the Indian company, especially with a professional or relocated director." },
]

const relatedCards = [
  { title: "Step-by-Step Incorporation of an Indian Private Limited Company by a Spanish Parent: From Name Approval to the Foreign Investment Filing", desc: "The exact steps to incorporate an Indian private limited company when the shareholder is Spanish: name, DIN and DSC, the SPICe+ form with AGILE-PRO-S, charter documents, PAN and TAN, bank account, share allotment, FC-GPR, first auditor and commencement of business.", href: "/spain-to-india/incorporation-steps" },
  { title: "Moving Spanish Employees to India: Employment Visa, the USD 25,000 Salary Floor, FRRO Registration, 182-Day Residence, Dependants, Health Cover and Return", desc: "A step-by-step relocation guide for a Spanish employee posted to an Indian subsidiary: the employment visa and its conditions, FRRO registration within 14 days for stays over 180 days, Indian tax residency, the Spanish tax and social security position, dependants, housing, health cover and the return.", href: "/spain-to-india/relocate-spanish-staff" },
  { title: "Two-Country Compliance Calendar: Indian Company Filings, Tax, Payroll and RBI Returns, Plus the Spanish Parent's D-8, Tax and Documentation Dates", desc: "One calendar for the whole year showing what the Indian subsidiary files with Indian authorities and what the Spanish parent files in Spain, with the Indian financial year of April to March set against the Spanish calendar year and the points where they collide.", href: "/spain-to-india/compliance-calendar" },
  { title: "Which Structure Should a Spanish Company Use in India? Private Limited, LLP, Branch, Liaison Office, Project Office or Joint Venture, with Sector Notes", desc: "Compare the ways a Spanish group can enter India: a wholly owned private limited company, a joint venture, a limited liability partnership, a branch, a liaison office or a project office. Includes the RBI net worth tests, tax differences and notes for renewables, auto components, ceramics, retail and infrastructure.", href: "/spain-to-india/structure-options" },
]

export default function ResidentDirectorServiceForSpanishCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Resident Director for an Indian Subsidiary of a Spanish Company: The 182-Day Rule, Who Can Fill the Role, Duties, Liability and Alternatives"
        description="Every Indian company needs a director who has lived in India for 182 days. This guide explains the rule, the four ways a Spanish group can meet it, the duties and personal liability that come with the seat, what a professional or nominee arrangement must and must not do, and a checklist for appointing one."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "Resident Director in India for Spanish Companies: Rules, Options and Liability" },
        ]}
      />

      <GuideHero
        eyebrow="Governance: resident director"
        title="Resident Director for an Indian Subsidiary of a Spanish Company: The 182-Day Rule, Who Can Fill the Role, Duties, Liability and Alternatives"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Every Indian company must have at least one director who has stayed in India for 182 days or more in
          the financial year. A Spanish group can meet the rule by relocating one of its own executives, by
          hiring an Indian managing director, by appointing a professional director through an adviser, or by
          appointing an Indian co-founder or partner. The seat carries real duties and personal liability under
          the Companies Act, including for filings, financial statements and compliance, and Indian law does not
          recognise a director who signs papers without taking part in decisions. A private company also needs
          at least two directors, and the first resident requirement applies for the first financial year in
          proportion to the period. Choose the person for their role in the business first and their residence
          second.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="resident-director" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Legal rule", "At least one director who has stayed in India for 182 days or more in the financial year"],
                ["Minimum board", "Two directors for a private limited company"],
                ["Credentials", "DIN and Digital Signature Certificate for each director; annual director KYC"],
                ["Board meetings", "At least four a year, with no more than 120 days between two meetings, with relaxations for small companies"],
                ["Liability", "Personal liability for statutory defaults and for fraud; the role cannot be a formality"],
                ["Options", "Relocated Spanish executive; Indian managing director; professional director; Indian partner or co-founder"],
                ["Insurance", "Directors and officers cover is worth pricing"],
                ["Cost", "Depends on the option; get a written scope and fee"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="rule" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the rule says and when it bites</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Companies Act requires every company to have at least one director who has stayed in India for a
          total of 182 days or more in the previous financial year. For a company in its first year, the
          requirement is read in proportion to the period from incorporation to the end of that year. The rule
          is not met by a person who merely holds an Indian passport or lives in India part of the year without
          reaching the day count, and a director who then leaves the country can cause the company to default.
          Keep a calendar of days for the resident director and review it at the half-year point, because a
          shortfall is far easier to fix in October than in March.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The rule matters in practice for three reasons. First, the Registrar will not accept an incorporation
          file without it. Second, Indian banks ask who the resident director is, because that person is the
          contact for notices and for the account. Third, the Registrar and the courts treat the resident
          director as the person to whom notices and prosecutions are addressed if the board is silent.
        </p>

        <h2 id="options" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Four ways to fill the seat</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Option</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Good for</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Watch out for</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Relocate a Spanish executive</th>
                  <td className="border border-gray-300 p-3">Groups that want direct control and expect a long-term presence</td>
                  <td className="border border-gray-300 p-3">The visa, the Spanish tax and social security position of the executive and the 182-day count. See <Link href="/spain-to-india/relocate-spanish-staff" className="text-blue-800 font-semibold hover:underline">relocation</Link> and <Link href="/spain-to-india/spanish-employees-in-india" className="text-blue-800 font-semibold hover:underline">employees</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Hire an Indian managing director</th>
                  <td className="border border-gray-300 p-3">Groups that want an operating leader in the market</td>
                  <td className="border border-gray-300 p-3">Authority limits, reporting lines, incentive design and exit terms in the employment contract</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Professional director through an adviser</th>
                  <td className="border border-gray-300 p-3">Early phase, short term, or compliance-heavy sectors</td>
                  <td className="border border-gray-300 p-3">Scope and limits in writing; a real role; the director must receive information and be allowed to say no</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Indian partner or co-founder</th>
                  <td className="border border-gray-300 p-3">Joint ventures and local-partnership models</td>
                  <td className="border border-gray-300 p-3">Shareholder agreement, reserved matters, deadlock and exit</td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="duties" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Duties and liability that come with the seat</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A director owes duties under the Companies Act to act in good faith in the interests of the company,
          to exercise independent judgment and due care, to avoid conflicts and to avoid making a personal gain.
          The resident director is, in addition, the natural point of contact for the registrar, the tax
          department and the bank. The Act makes directors liable for filing defaults, for incorrect financial
          statements, for related-party transactions without approval and for fraud, and it treats certain
          directors as officers in default. Liability is personal and can include fines and, in serious cases,
          disqualification.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Sign the annual financial statements only after reading them.</li>
          <li>Attend the board meetings and record dissent in the minutes.</li>
          <li>Make sure the statutory registers and the annual returns are filed on time.</li>
          <li>Disclose interests and avoid votes where conflicted.</li>
          <li>Complete the annual KYC for the Director Identification Number.</li>
          <li>Keep the Indian directors informed of the Spanish group&apos;s instructions so that decisions are taken by the board and not merely signed by it.</li>
        </ul>

        <h2 id="nominee" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Professional and nominee arrangements: what is acceptable</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A professional director arranged by an adviser can be a sensible way to meet the rule while the
          business is small. The arrangement should be written and should say what the director will do, what
          information the director will receive, how often the board will meet, what fees are paid and how the
          director leaves. The director must be able to refuse a decision, to resign and to obtain independent
          advice. A so-called nominee who signs documents but has no information, takes no part in decisions or
          is indemnified against all consequences is not a safe arrangement for the director, for the company or
          for the group. Indian regulators and banks are increasingly alert to dummy directors, and tax
          authorities will ask who really controls the company.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          If you consider an adviser-supplied director, ask for the director&apos;s profile, the other companies
          on which the person serves, the fee, the limit of authority and the replacement process. AU Corporate
          can discuss what arrangement is appropriate for your plan; the scope, fee and conditions would be set
          in writing.
        </p>

        <h2 id="process" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Checklist for appointing the resident director</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Decide who fills the seat and what the person will actually do.</li>
          <li>Obtain the passport, address proof, photographs and the Director Identification Number and Digital Signature Certificate.</li>
          <li>Include the director in the incorporation file and the board resolution.</li>
          <li>Sign a letter of appointment or service contract that states duties, authority, fees and exit.</li>
          <li>Arrange directors&apos; and officers&apos; insurance if the company will take on obligations beyond a nominal level.</li>
          <li>Introduce the director to the bank and give the bank the confirmation it needs.</li>
          <li>Diary the days in India and review at the half-year point.</li>
          <li>Provide a list of filings and dates. See <Link href="/spain-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">the compliance calendar</Link>.</li>
        </ol>

        <h2 id="spanish" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Spanish angle</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A Spanish executive who becomes a director of the Indian company should consider the personal side:
          Spanish law on directors of subsidiaries, the effect on the executive&apos;s Spanish tax and social
          security position, any conflict with duties to the Spanish parent, and the group&apos;s insurance.
          Directors who remain in Spain and visit only for board meetings do not meet the residence rule, but
          they can be the second director. Keep minutes that show who decided what, because Indian officers and
          Spanish tax authorities may both ask to see that the Indian company is managed and controlled where it
          claims to be.
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

        <GuideServiceBox path="/spain-to-india/resident-director-service-for-spanish-companies" />
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
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "Ministry of External Affairs (India)", href: "https://www.mea.gov.in/" },
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
        title="Need a Resident Director in India?"
        description="Tell us about your board and timeline, and we'll explain the options, including a professional resident director from AU Corporate."
      />
    </main>
  )
}
