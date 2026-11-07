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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/data-protection-gdpr-dpdp"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "gdpr", label: "GDPR: sending data from Germany to India" },
  { id: "employees", label: "Employee data and the works council" },
  { id: "dpdp", label: "India: the DPDP Act and Rules" },
  { id: "compare", label: "A comparison" },
  { id: "plan", label: "A build plan for one privacy programme" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a German company send personal data to its Indian subsidiary?", a: "Yes, with a transfer mechanism such as the 2021 standard contractual clauses and a transfer impact assessment, because India has no EU adequacy decision." },
  { q: "Does the GDPR apply when Indian staff only view data remotely?", a: "Yes. Remote access from India to data held in Germany is a transfer, so it needs a mechanism." },
  { q: "Do I need to involve the works council before giving Indian staff access to an HR system?", a: "Often yes. A technical system that can monitor behaviour or performance is subject to co-determination, so check with the works council before rollout." },
  { q: "When do India's DPDP duties start?", a: "The Rules were notified on 13 November 2025 and the main duties take effect on 13 May 2027." },
  { q: "What is the penalty under the GDPR and the DPDP Act?", a: "The GDPR allows up to EUR 20 million or 4% of worldwide turnover. The DPDP Act allows up to INR 250 crore for serious failures." },
  { q: "How quickly must a data breach be reported in Germany?", a: "To the data protection authority within 72 hours of becoming aware, where there is a risk to individuals." },
  { q: "Do I need a data protection officer in Germany?", a: "Yes if 20 or more people are constantly engaged in automated processing of personal data, and in some other cases by risk. Many groups appoint one anyway." },
]

const relatedCards = [
  { title: "Hiring in India as a German Employer: What Changes from German Practice", desc: "A comparison for German HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and dismissal, no works council, payroll tax and share plans, set against German practice.", href: "/germany-to-india/hiring-in-india" },
  { title: "Setting Up a Global Capability Centre in India: A Guide for German Mittelstand and Large Groups", desc: "How German companies set up captive engineering, IT and shared service centres in India: entity choice, cost-plus transfer pricing, export of services, the works council on offshoring, data and build-operate-transfer.", href: "/germany-to-india/gcc-for-german-companies" },
  { title: "Contracts, Courts and Arbitration: Choosing Law and Seat, and Enforcing in India and Germany", desc: "How a German parent protects its Indian subsidiary contracts: choice of law, DIS and other arbitration, why German court judgments need a fresh suit in India, enforcing awards, stamping and the investment protection gap.", href: "/germany-to-india/contracts-courts-arbitration" },
  { title: "Common Mistakes German Companies Make in India and How to Avoid Them", desc: "The most frequent mistakes German companies make when setting up in India: late FEMA filings, missing forms for treaty relief, works council surprises, apostille errors, PE creation and transfer pricing gaps.", href: "/germany-to-india/common-mistakes" },
]

export default function DataProtectionGdprDpdpPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Moving Personal Data Between Germany and India: GDPR Transfer Rules, Works Councils and the DPDP Act"
        description="How the GDPR and India's Digital Personal Data Protection Act apply when a German company has an Indian subsidiary: standard contractual clauses, transfer impact assessments, employee data, works council rights, breach notice and penalties."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "Data Protection for German Companies in India: GDPR Transfers and India's DPDP Act" },
        ]}
      />

      <GuideHero
        eyebrow="Data: GDPR and DPDP"
        title="Moving Personal Data Between Germany and India: GDPR Transfer Rules, Works Councils and the DPDP Act"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A German company that sends personal data to its Indian subsidiary makes a restricted transfer under
          the GDPR. India has no EU adequacy decision, so the usual tools are the standard contractual clauses
          with a transfer impact assessment, or binding corporate rules for larger groups. For employee data,
          German law adds a works council co-determination right over many HR and monitoring systems. The Indian
          subsidiary must meet India&apos;s Digital Personal Data Protection Act as its duties take effect: the
          Rules were notified on 13 November 2025 and the main duties start on 13 May 2027.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="data-protection" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["German and EU law", "GDPR and the Federal Data Protection Act (BDSG); supervised by the state data protection authorities"],
                ["Transfer rule", "Chapter V GDPR: no adequacy decision for India, so use standard contractual clauses (2021 version), binding corporate rules or another Article 49 basis, plus a transfer impact assessment"],
                ["Employee data", "Section 26 BDSG and the works council's co-determination right over technical systems that can monitor staff"],
                ["Data protection officer", "Required in Germany where 20 or more people are constantly engaged in automated processing, and in other cases by risk"],
                ["Breach notice", "Notify the authority within 72 hours where there is a risk to individuals"],
                ["Penalty (EU)", "Up to EUR 20 million or 4% of worldwide annual turnover, whichever is higher"],
                ["Indian law", "Digital Personal Data Protection Act, 2023; Rules notified 13 November 2025; main duties from 13 May 2027"],
                ["Indian penalty", "Up to INR 250 crore for serious failures such as security safeguards"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="gdpr" className="text-2xl font-bold text-gray-900 mt-12 mb-4">GDPR: sending data from Germany to India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Personal data may leave the EU only if the transfer has a lawful basis under Chapter V of the GDPR.
          There is no adequacy decision for India, so a German company that gives an Indian subsidiary access to
          customer, supplier or employee data must put safeguards in place and check that they work in practice.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Standard contractual clauses:</strong> the 2021 EU clauses, signed between the German exporter and the Indian importer, in the right module for controller-to-processor or controller-to-controller transfers.</li>
          <li><strong>Transfer impact assessment:</strong> a written assessment of Indian law and practice on government access to data, with extra safeguards where needed, such as encryption with keys held in the EU.</li>
          <li><strong>Binding corporate rules:</strong> an option for larger groups that want one approved regime, but approval takes time.</li>
          <li><strong>Records and notices:</strong> update the record of processing and the privacy notices to show India as a recipient country.</li>
          <li><strong>Remote access counts:</strong> viewing data from India on a German server is a transfer.</li>
        </ul>

        <h2 id="employees" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Employee data and the works council</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Section 26 of the Federal Data Protection Act sets the rules for processing employee data for employment purposes, and the works council has a co-determination right over technical systems that can monitor behaviour or performance.</li>
          <li>Introducing a group HR system, a time tracker or a collaboration tool that Indian staff and German staff both use can need a works council agreement in Germany.</li>
          <li>Where an Indian team handles German employee data, for example as a payroll or HR service centre, the works council usually expects safeguards and a clear scope.</li>
          <li>Indian employee data is also personal data under the DPDP Act once the main duties apply.</li>
        </ul>

        <h2 id="dpdp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">India: the DPDP Act and Rules</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Who is covered:</strong> processing of digital personal data within India, and outside India if connected to offering goods or services in India.</li>
          <li><strong>Notice and consent:</strong> clear notice and free, specific consent for most processing, with allowed &apos;legitimate uses&apos; such as employment purposes.</li>
          <li><strong>Data fiduciary duties:</strong> security safeguards, breach notice to the Data Protection Board and to affected people, erasure when the purpose ends.</li>
          <li><strong>Significant data fiduciaries:</strong> larger or riskier processors face extra duties, including an audit and an impact assessment.</li>
          <li><strong>Cross-border:</strong> transfers out of India are allowed except to countries the government restricts by notification.</li>
          <li><strong>Timeline:</strong> the Rules were notified on 13 November 2025 and the main obligations take effect on 13 May 2027.</li>
        </ul>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A comparison</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">GDPR (Germany)</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">DPDP Act (India)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Scope", "Personal data of individuals in the EU context", "Digital personal data and non-digital data that is digitised"],
                ["Grounds", "Consent, contract, legal duty, legitimate interests and others", "Consent and listed legitimate uses"],
                ["Cross-border", "Restricted without adequacy or safeguards", "Allowed unless the destination is restricted by notification"],
                ["Breach notice", "Authority within 72 hours; individuals if high risk", "Board and individuals, under the Rules"],
                ["Officer", "Data protection officer by threshold or risk", "Data Protection Officer for significant fiduciaries"],
                ["Maximum penalty", "Up to EUR 20 million or 4% of worldwide turnover", "Up to INR 250 crore per breach category"],
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

        <h2 id="plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A build plan for one privacy programme</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Map what personal data moves between Germany and India and why: employee, customer, supplier and marketing data.</li>
          <li>Sign the standard contractual clauses and write the transfer impact assessment before data starts to flow.</li>
          <li>Agree any works council arrangements for HR and monitoring systems.</li>
          <li>Choose a single breach response procedure with clocks that satisfy both regulators.</li>
          <li>Update notices and consent flows for Indian individuals before 13 May 2027.</li>
          <li>Train the Indian team and run a tabletop breach exercise.</li>
        </ol>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.bzst.de/EN/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Federal Central Tax Office (BZSt)</a>,{" "}
          <a href="https://www.handelsregister.de/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Handelsregister</a>{" "}
          and the{" "}
          <a href="https://www.bundesbank.de/en" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Deutsche Bundesbank</a>.
        </p>

        <GuideServiceBox path="/germany-to-india/data-protection-gdpr-dpdp" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/germany-to-india/faq"
          seeAllLabel="See all 146 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Federal Commissioner for Data Protection and Freedom of Information (BfDI)", href: "https://www.bfdi.bund.de/EN/" },
            { label: "MeitY: Digital Personal Data Protection", href: "https://www.meity.gov.in/" },
            { label: "European Commission: data protection", href: "https://commission.europa.eu/law/law-topic/data-protection_en" },
          ]}
        />

        <p className="mt-6">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and German
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Moving Personal Data Between Germany and India?"
        description="Tell us what data flows where, and we'll map GDPR transfer rules, the DPDP Act and the contract terms you need."
      />
    </main>
  )
}
