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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/data-protection-gdpr-dpdp"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "map", label: "Start with a data map" },
  { id: "gdpr", label: "GDPR transfers to India" },
  { id: "spain", label: "The Spanish layer" },
  { id: "dpdp", label: "India: the DPDP Act and Rules" },
  { id: "compare", label: "GDPR and DPDP side by side" },
  { id: "employees", label: "Employee and recruitment data" },
  { id: "contract", label: "A practical data transfer package" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a Spanish company send personal data to India?", a: "Yes, using a GDPR transfer tool. India has no adequacy decision, so standard contractual clauses with a transfer impact assessment are the usual choice." },
  { q: "Is there an EU adequacy decision for India?", a: "No, as far as we know. Check the European Commission's list before relying on this." },
  { q: "Who regulates data protection in Spain?", a: "The Agencia Española de Protección de Datos, under the GDPR and the Spanish organic law." },
  { q: "What is the DPDP Act?", a: "India's Digital Personal Data Protection Act, 2023, with Rules notified on 13 November 2025." },
  { q: "When do the main DPDP duties start?", a: "On 13 May 2027, in stages under the Rules." },
  { q: "What is the DPDP penalty?", a: "Up to INR 250 crore for the most serious breaches, as set in the Act's schedule." },
  { q: "Does DPDP block transfers to Spain?", a: "No blanket ban. The Act permits transfers except to countries the government restricts, subject to sector laws." },
  { q: "Do standard contractual clauses cover staff data?", a: "Yes, if the module and annexes describe the real flows. A transfer impact assessment is also needed." },
  { q: "Does GDPR apply to the Indian subsidiary?", a: "Directly, only if it offers goods or services to people in the EU or monitors their behaviour. Otherwise the clauses carry the obligations." },
]

const relatedCards = [
  { title: "Hiring Staff in India from Spain: Employment Contracts, Provident Fund, State Insurance, the Four Labour Codes, Notice Periods and the Employer-of-Record Option", desc: "How a Spanish company hires in India: the entity or employer-of-record choice, offer letters and contracts, salary structure, payroll deductions, the labour codes reported in force from 21 November 2025, notice and termination, share awards and the differences that surprise Spanish managers.", href: "/spain-to-india/hiring-in-india" },
  { title: "Contracts and Disputes in India for Spanish Companies: Governing Law, Arbitration Seat, the New York Convention, Enforcing Spanish Judgments and Investment Protection", desc: "How to draft and enforce contracts with Indian counterparties from Spain: governing law, the choice of arbitration seat (Madrid, Singapore, London or Paris), enforcement of awards under the New York Convention, why Spanish court judgments are hard to enforce in India, interim relief, mediation, stamping and the status of investment treaty protection.", href: "/spain-to-india/contracts-courts-arbitration" },
  { title: "Two-Country Compliance Calendar: Indian Company Filings, Tax, Payroll and RBI Returns, Plus the Spanish Parent's D-8, Tax and Documentation Dates", desc: "One calendar for the whole year showing what the Indian subsidiary files with Indian authorities and what the Spanish parent files in Spain, with the Indian financial year of April to March set against the Spanish calendar year and the points where they collide.", href: "/spain-to-india/compliance-calendar" },
  { title: "What a Spanish Parent Must Do at Home: Registro de Inversiones Exteriores Filings, Participation Exemption, CFC Rules and Corporate Records", desc: "The Spanish-side steps for a parent investing in India: declarations to the Registro de Inversiones Exteriores (forms D-5A and D-8), board and notarial formalities, the participation exemption, CFC rules, related-party documentation and the beneficial ownership register.", href: "/spain-to-india/spanish-parent-obligations" },
]

export default function DataProtectionGdprDpdpPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Personal Data Between Spain and India: GDPR Transfer Rules, Standard Contractual Clauses, the DPDP Act and Rules, Employee Data and Penalties"
        description="How a Spanish group lawfully moves employee and customer data to and from India: the GDPR transfer regime and the lack of an EU adequacy decision for India, standard contractual clauses and transfer assessments, the Spanish AEPD and LOPDGDD, and the DPDP Act duties that start in May 2027."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "GDPR and India's DPDP Act: Data Transfers Between a Spanish Parent and an Indian Subsidiary" },
        ]}
      />

      <GuideHero
        eyebrow="Compliance: data"
        title="Personal Data Between Spain and India: GDPR Transfer Rules, Standard Contractual Clauses, the DPDP Act and Rules, Employee Data and Penalties"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Personal data about people in Spain can go to an Indian subsidiary only under one of the GDPR&apos;s
          transfer tools. India has no EU adequacy decision, so the usual tool is the Commission&apos;s standard
          contractual clauses, with a transfer impact assessment and supplementary measures where needed. In
          Spain the supervisory authority is the Agencia Española de Protección de Datos, and the Spanish
          organic law on data protection adds national rules, for example on employee monitoring. India&apos;s
          Digital Personal Data Protection Act, 2023 and the Rules notified on 13 November 2025 apply to the
          Indian company that processes personal data, with the main duties starting on 13 May 2027 and
          penalties of up to INR 250 crore for a serious breach. A group needs one data map, two sets of notices
          and a transfer contract that works under both.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="data-protection" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["EU rule", "GDPR applies to personal data of people in the EU and to Spanish controllers; transfers to India need a transfer tool"],
                ["Adequacy", "No EU adequacy decision for India"],
                ["Usual tool", "Standard contractual clauses plus a transfer impact assessment"],
                ["Spanish regulator", "Agencia Española de Protección de Datos; the Spanish organic law adds local rules"],
                ["Indian law", "Digital Personal Data Protection Act, 2023; Rules notified 13 November 2025"],
                ["Indian timeline", "Main duties from 13 May 2027, in stages"],
                ["Indian penalty", "Up to INR 250 crore for the most serious breaches"],
                ["Employee data", "Needs a lawful basis in both systems and a clear notice"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="map" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Start with a data map</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Before you choose a legal tool, map what data moves, in which direction, for what purpose and under
          whose control. A Spanish parent usually sends employee and recruitment data to India for payroll,
          performance and group reporting, and customer or user data for support and software development. An
          Indian subsidiary sends back operational data and sometimes data about Indian customers. Each flow has
          a controller, a processor or a joint controller, and a purpose, and each one needs a contract. A
          written data map is also the first document the Spanish regulator or an Indian customer will ask to
          see.
        </p>

        <h2 id="gdpr" className="text-2xl font-bold text-gray-900 mt-12 mb-4">GDPR transfers to India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Under Chapter V of the GDPR a transfer to a country without an adequacy decision needs an appropriate
          safeguard. For a group the main choices are standard contractual clauses and binding corporate rules.
          Standard contractual clauses are the faster option, and the module depends on the roles: controller to
          controller, controller to processor, or processor to processor. The exporter must also assess whether
          the law and practice of India would undermine the protection the clauses give, for example because of
          government access powers, and add technical and organisational measures such as encryption and access
          controls. The result is documented as a transfer impact assessment. The derogations in Article 49, for
          example explicit consent, are for occasional transfers and not for regular group flows.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The GDPR applies to the Indian subsidiary directly if it offers goods or services to people in the EU
          or monitors their behaviour. In that case it may also need an EU representative. Keep records of
          processing, a breach procedure that meets the 72-hour notice and a data protection officer where the
          Spanish rules require one.
        </p>

        <h2 id="spain" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Spanish layer</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Spain&apos;s organic law on the protection of personal data and the guarantee of digital rights adds
          rules on children&apos;s data, on the right to digital disconnection, on video surveillance and on the
          use of digital devices by employees. A Spanish parent that monitors Indian staff or shares Spanish
          employee data with India should check these rules. The Agencia Española de Protección de Datos
          publishes guidance and handles complaints and enforcement, and fines under the GDPR can reach EUR 20
          million or 4% of worldwide turnover, whichever is higher.
        </p>

        <h2 id="dpdp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">India: the DPDP Act and Rules</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Digital Personal Data Protection Act, 2023 regulates digital personal data processed in India and,
          in some cases, outside India for offering goods or services to people in India. The Rules, notified on
          13 November 2025, bring the Act into operation in stages, with the main obligations of data
          fiduciaries applying from 13 May 2027. A data fiduciary must give a clear notice, obtain consent or
          rely on a listed legitimate use, keep data accurate, secure it, delete it when the purpose ends,
          report breaches to the Data Protection Board and to affected people, and respond to requests from
          individuals. Significant data fiduciaries have extra duties such as audits and a data protection
          officer in India. The Act permits cross-border transfers except to countries the government restricts,
          so the main constraint on moving data from India to Spain is contractual and sectoral, not a blanket
          ban.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Penalties are set in a schedule and reach up to INR 250 crore for a failure to take reasonable
          security safeguards. Because the Rules phase in, a group has until May 2027 to prepare, and should use
          the time to align notices, consent flows and retention rules.
        </p>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">GDPR and DPDP side by side</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">GDPR (Spain)</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">DPDP Act and Rules (India)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Scope", "Personal data of people in the EU and processing by EU establishments", "Digital personal data processed in India, and abroad for offering goods or services to people in India"],
                ["Legal basis", "Consent, contract, legal obligation, vital interests, public task, legitimate interests", "Consent, or listed legitimate uses"],
                ["Notice", "Detailed privacy notice", "Itemised notice in clear language and, on request, in listed Indian languages"],
                ["Breach notice", "Authority within 72 hours where required", "Board and affected individuals; timing set in the Rules"],
                ["Rights", "Access, rectification, erasure, restriction, portability, objection", "Access, correction, erasure, grievance redress and nomination"],
                ["Transfers", "Adequacy, standard clauses, binding corporate rules or derogations", "Allowed except to restricted countries and subject to sector laws"],
                ["Regulator", "Agencia Española de Protección de Datos", "Data Protection Board of India"],
                ["Maximum penalty", "EUR 20 million or 4% of worldwide turnover", "Up to INR 250 crore"],
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

        <h2 id="employees" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Employee and recruitment data</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Use an employee notice that explains that data goes to the Indian company and, where relevant, back to Spain, and for what purpose.</li>
          <li>Do not rely on consent alone for staff data in Spain, because consent in employment is rarely free; use contract or legitimate interests where available.</li>
          <li>Restrict access to sensitive data such as health and union membership.</li>
          <li>Agree retention periods that satisfy both systems, and delete on schedule.</li>
          <li>Keep background checks proportionate and compliant with local law in both countries.</li>
          <li>Record which Indian staff may see data about Spanish employees.</li>
        </ul>

        <h2 id="contract" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A practical data transfer package</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>A data map and records of processing for both companies.</li>
          <li>An intra-group data transfer agreement incorporating the standard contractual clauses, with annexes for the real flows.</li>
          <li>A transfer impact assessment and a list of supplementary measures.</li>
          <li>Aligned privacy notices for Spanish employees, Indian employees and customers.</li>
          <li>An incident response plan that meets the 72-hour GDPR notice and the DPDP breach rules.</li>
          <li>A vendor list and processor contracts for cloud and software providers.</li>
          <li>A DPDP readiness plan for the period to May 2027.</li>
        </ol>

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

        <GuideServiceBox path="/spain-to-india/data-protection-gdpr-dpdp" />
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
            { label: "Agencia Española de Protección de Datos", href: "https://www.aepd.es/" },
            { label: "Ministry of Electronics and Information Technology (India)", href: "https://www.meity.gov.in/" },
            { label: "GDPR text on EUR-Lex", href: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" },
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
        title="Moving Personal Data Between Spain and India?"
        description="Tell us what data flows where, and we'll map the GDPR transfer route, the DPDP Act and the contract terms you need."
      />
    </main>
  )
}
