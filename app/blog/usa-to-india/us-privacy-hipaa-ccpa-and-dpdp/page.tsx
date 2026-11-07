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

const PAGE_URL = "https://www.theaucorp.com/usa-to-india/us-privacy-hipaa-ccpa-and-dpdp"
const PARENT_URL = "https://www.theaucorp.com/usa-to-india"

const toc = [
  { id: "country-specific", label: "What's different for US companies" },
  { id: "us", label: "What US law requires when data goes to India" },
  { id: "hipaa", label: "HIPAA and Indian teams" },
  { id: "state", label: "State privacy laws and customer data" },
  { id: "dpdp", label: "India: the DPDP Act and its exemption for foreign data" },
  { id: "table", label: "Which regime applies to which data" },
  { id: "controls", label: "Controls that satisfy customers and regulators" },
  { id: "next", label: "Planning for May 2027" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does the US have one federal privacy law?", a: "No. Duties come from sector laws such as HIPAA and the Gramm-Leach-Bliley Act, state laws such as California's, and customer contracts." },
  { q: "Do I need a business associate agreement with my Indian subsidiary?", a: "If it handles protected health information for a US covered entity or business associate, yes. It is a subcontractor business associate." },
  { q: "When does the DPDP Act take full effect?", a: "The Rules were notified on 13 November 2025 and the main duties apply from 13 May 2027, in stages." },
  { q: "What is the DPDP exemption for foreign data processed in India?", a: "Section 17(1) exempts certain obligations when personal data of people outside India is processed in India under a contract with a person outside India. Security duties remain, and Indian counsel should confirm the scope." },
  { q: "Does DPDP apply to my Indian employees' data?", a: "Yes. The foreign-data exemption does not cover the Indian company's own employees or customers." },
  { q: "Can US consumer data be stored in India?", a: "Usually yes, with a service provider contract and the controls the US law and the customer require, unless the customer forbids offshore processing." },
  { q: "Do customers ask for SOC 2?", a: "Often. SOC 2 Type II or ISO 27001 reports are common requirements in enterprise contracts." },
  { q: "What is the DPDP penalty?", a: "Up to INR 250 crore for the most serious failures such as failing to take reasonable security safeguards." },
  { q: "Is India a country of concern for the US bulk data rule?", a: "India is not on the list of countries of concern, but onward transfers from India to those countries would still need controls." },
]

const relatedCards = [
  { title: "Setting Up a Global Capability Centre in India as a US Company: Captive, Build-Operate-Transfer and Hybrid Models, Cost-Plus Pricing, State Policies and Key Risks", desc: "How a US company builds a captive engineering, finance or operations centre in India: the three delivery models, entity and tax choices, cost-plus transfer pricing and safe harbour questions, permanent establishment, intellectual property, state incentives and a 12-month roadmap.", href: "/usa-to-india/gcc-for-us-companies" },
  { title: "Audit and ICOFR", desc: "Statutory audit and internal financial controls.", href: "/usa-to-india/audit-icofr" },
  { title: "Hiring and payroll in India", desc: "Contracts, statutory benefits and the monthly payroll cycle.", href: "/usa-to-india/hiring-and-payroll" },
  { title: "Compliance calendar", desc: "Annual and monthly filings for an Indian subsidiary.", href: "/usa-to-india/compliance-calendar" },
]

export default function UsPrivacyHipaaCcpaAndDpdpPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Personal Data Between the US and India: HIPAA Business Associate Duties, State Privacy Laws, SOC 2 Expectations and the DPDP Exemption for Foreign Data Processed in India"
        description="How a US company handles personal data when an Indian subsidiary or vendor processes it: what US federal and state privacy laws require, HIPAA business associate agreements, customer security reviews, how the DPDP Act treats data of people outside India, employee data in both directions and a controls checklist."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-US"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/usa-to-india" },
          { label: "US Privacy Law and India's DPDP Act: HIPAA, CCPA and Offshore Data Teams" },
        ]}
      />

      <GuideHero
        eyebrow="Compliance: privacy"
        title="Personal Data Between the US and India: HIPAA Business Associate Duties, State Privacy Laws, SOC 2 Expectations and the DPDP Exemption for Foreign Data Processed in India"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The United States has no single federal privacy law, so a US company&apos;s duties depend on the kind
          of data and the customer. Health information falls under HIPAA, which requires a business associate
          agreement with any vendor, including an Indian subsidiary, that handles it. Consumer data is regulated
          by state laws led by California, financial data by the Gramm-Leach-Bliley Act and children&apos;s data
          by COPPA. Enterprise customers add their own requirements through security questionnaires, SOC 2
          reports and contract terms. In India, the Digital Personal Data Protection Act, 2023 and its Rules
          notified on 13 November 2025 apply from 13 May 2027 for the main duties. A provision of the Act
          exempts certain obligations when an Indian company processes personal data of people outside India
          under a contract with a person outside India, which covers much vendor and captive work for US
          clients, but security safeguards and the rules on Indian staff and customers still apply. A US group
          needs one set of controls that satisfies the US customer and the Indian law.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the US
          </Link>
        </p>

        <GuideCountryContext country="usa" topic="data-protection" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["US federal", "Sector laws: HIPAA, Gramm-Leach-Bliley, COPPA, FCRA; no general federal privacy statute"],
                ["US states", "California and a growing list of states; consumer rights, notices, vendor contracts"],
                ["HIPAA", "Business associate agreement; security rule safeguards; breach notification; offshore access disclosed to the covered entity"],
                ["Customers", "Security questionnaires, SOC 2 or ISO 27001 reports, data processing addenda"],
                ["India", "DPDP Act, 2023; Rules notified 13 November 2025; main duties from 13 May 2027; penalties up to INR 250 crore"],
                ["Foreign data principals", "Section 17(1)(d) exempts some obligations for processing of data of people outside India under a contract with a person outside India"],
                ["Employee data", "Indian staff data is covered by DPDP; US staff data processed in India is covered by US contract and policy"],
                ["Bulk data", "US rule on bulk sensitive data transfers to countries of concern; India is not listed, but onward transfers must be controlled"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="us" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What US law requires when data goes to India</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A US company that sends personal data to an Indian affiliate or vendor is still responsible for it.
          The legal duty comes from the sector or state law, and the practical duty comes from the customer. The
          first step is to know which data goes where. Health records, payment and bank information,
          children&apos;s data, background checks and precise location data each trigger a different rule. The
          second step is a contract that binds the Indian recipient to the same duties, covering permitted use,
          security, subcontractors, breach notice, audit and return or deletion. The third is to check that the
          customer allows offshore processing at all, because many US health and public-sector contracts
          restrict or require notice of offshore access.
        </p>

        <h2 id="hipaa" className="text-2xl font-bold text-gray-900 mt-12 mb-4">HIPAA and Indian teams</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A covered entity or business associate that gives protected health information to a subcontractor must
          have a business associate agreement with it. An Indian subsidiary that handles protected health
          information for a US group is a subcontractor business associate, so the group needs a written
          agreement, the subsidiary must apply the security rule&apos;s administrative, physical and technical
          safeguards, and breaches must be reported to the upstream party within the agreed period. Practical
          points include risk analysis, access controls by role, encryption, workforce training, audit logs, a
          sanction policy and secure disposal. The US customer may also require that the Indian team work only
          from controlled premises, not from home, and may ask for evidence such as a third-party audit. See{" "}
          <Link href="/usa-to-india/audit-icofr" className="text-blue-800 font-semibold hover:underline">audit and controls</Link>.
        </p>

        <h2 id="state" className="text-2xl font-bold text-gray-900 mt-12 mb-4">State privacy laws and customer data</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          California&apos;s privacy law and the laws of other states give consumers rights to know, delete and
          correct their data and to opt out of sales and certain sharing, and require a contract with service
          providers that limits their use of the data. An Indian subsidiary acting as a service provider for the
          US company must be bound by those terms. The company should map where consumer data is stored and
          accessed, include the Indian entity in its records of processing, and make sure that a deletion
          request can reach the data held in India. Employee and job-applicant data of California residents is
          covered too.
        </p>

        <h2 id="dpdp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">India: the DPDP Act and its exemption for foreign data</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Digital Personal Data Protection Act, 2023 applies to digital personal data processed in India. It
          sets duties for data fiduciaries on notice, consent or listed legitimate uses, security, breach
          reporting, retention and the rights of individuals, and it sets up the Data Protection Board. The
          Rules notified on 13 November 2025 phase the duties in, with the main obligations applying from 13 May
          2027 and penalties of up to INR 250 crore for the most serious failures.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          A provision in Section 17(1) of the Act exempts certain obligations where personal data of people who
          are not in India is processed in India under a contract with a person outside India. In practice this
          relieves many vendor and captive centres of the notice, consent, retention and rights duties for
          the foreign client&apos;s data, while the general duty to take reasonable security safeguards and the
          rules for breaches remain relevant. The exemption does not cover the data of the centre&apos;s own
          Indian employees, Indian customers or any processing outside the contract. We describe the exemption
          from the text of the Act and the 2025 Rules, and an Indian counsel should confirm how it applies to
          your arrangement.
        </p>

        <h2 id="table" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Which regime applies to which data</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Data</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">US rule</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian rule</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Practical control</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Patient data of a US health client", "HIPAA and the client contract", "DPDP exemption for foreign data principals under a contract; security duties remain", "Business associate agreement; security rule safeguards; restricted access"],
                ["US consumer data", "State privacy laws and the company's notices", "Same exemption where processed under contract for the US company", "Service provider contract; deletion workflow"],
                ["US employee data", "Employer policy; state law in places", "Exempt if foreign data principal and contract", "Limit access; keep in a US system where possible"],
                ["Indian employee data", "Not a US matter unless shared", "DPDP applies from May 2027", "Notice, consent or legitimate use; retention rules"],
                ["Indian customer data", "Not a US matter unless shared", "DPDP applies", "Notice and consent; data principal rights"],
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

        <h2 id="controls" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Controls that satisfy customers and regulators</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Map data by type, location and access, and keep the map current.</li>
          <li>Use role-based access, multi-factor authentication, encryption at rest and in transit, and logging.</li>
          <li>Restrict removable media and home working where the contract requires it.</li>
          <li>Run background checks that follow Indian law and the client&apos;s requirements.</li>
          <li>Train staff at hiring and every year, with a short test.</li>
          <li>Hold a SOC 2 Type II or ISO 27001 certificate if customers ask for it, and plan the audit cycle.</li>
          <li>Have an incident response plan with named contacts in India and the US.</li>
          <li>Review vendors, including cloud and software providers, and list subprocessors.</li>
        </ul>

        <h2 id="next" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Planning for May 2027</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Even if the foreign-data exemption covers most of the client work, the Indian company will have its
          own employees and may have its own customers. Use the period to the main commencement date to draft an
          Indian privacy notice for employees, set retention periods, decide how consent or legitimate use will
          be recorded and name a contact for individual requests. Companies with significant volumes of Indian
          personal data may be designated as significant data fiduciaries and have extra duties. See{" "}
          <Link href="/usa-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">the compliance calendar</Link>{" "}
          for the annual rhythm.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.irs.gov/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Internal Revenue Service (US)</a>,{" "}
          <a href="https://www.bis.gov/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Bureau of Industry and Security (US)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/usa-to-india/us-privacy-hipaa-ccpa-and-dpdp" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/usa-to-india/faq"
          seeAllLabel="See all the FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "US Department of Health and Human Services: HIPAA", href: "https://www.hhs.gov/hipaa/index.html" },
            { label: "Ministry of Electronics and Information Technology (India)", href: "https://www.meity.gov.in/" },
            { label: "California Attorney General: CCPA", href: "https://oag.ca.gov/privacy/ccpa" },
          ]}
        />

        <p className="mt-6">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and US rules
          change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Running Data Teams in India?"
        description="Tell us what data the Indian team handles, and we'll map the DPDP duties and the contract terms with the US parent."
      />
    </main>
  )
}
