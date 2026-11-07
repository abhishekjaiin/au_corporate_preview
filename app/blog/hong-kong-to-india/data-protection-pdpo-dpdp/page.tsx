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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/data-protection-pdpo-dpdp"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "compare", label: "Side-by-side" },
  { id: "flows", label: "Typical data flows in a Hong Kong-India group" },
  { id: "steps", label: "Practical steps" },
  { id: "sector", label: "Sector rules" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does the PDPO apply to my Indian subsidiary?", a: "The PDPO applies to data users who control the collection, holding, processing or use of data in or from Hong Kong. Indian processing for a Hong Kong group still needs contractual protections. Take Hong Kong advice on scope." },
  { q: "When do the Indian data protection duties start?", a: "The Rules were notified on 13 November 2025 and the main duties apply from 13 May 2027." },
  { q: "Can I send Indian personal data to Hong Kong?", a: "Generally yes, because the Act restricts transfers only to countries the government notifies. Sector rules can be stricter." },
  { q: "What is the maximum penalty in India?", a: "Up to INR 250 crore for failing to take reasonable security safeguards to prevent a personal data breach." },
  { q: "Is Hong Kong's cross-border transfer rule in force?", a: "Section 33 of the PDPO has not been brought into force. The Commissioner has issued guidance and model clauses." },
  { q: "Do I need a data processing agreement?", a: "Yes. A written contract with the processor covers purpose, security, breach and return or deletion of data." },
  { q: "Who regulates data protection?", a: "The Privacy Commissioner for Personal Data in Hong Kong and the Data Protection Board of India." },
]

const relatedCards = [
  { title: "Hiring Staff in India as a Hong Kong-Owned Company: Employment Contracts, Provident Fund, ESI, Gratuity and Labour Codes", desc: "How a Hong Kong-owned Indian subsidiary hires locally: offer and employment contracts, payroll taxes, provident fund, ESI, gratuity, labour codes, shops and establishments law, notice periods, POSH and differences from Hong Kong practice.", href: "/hong-kong-to-india/hiring-in-india" },
  { title: "Contracts and Dispute Resolution for Hong Kong Companies in India: Governing Law, HKIAC Arbitration, Enforcing Hong Kong Judgments and Awards", desc: "How to draft and enforce contracts between a Hong Kong company and Indian counterparties: governing law, HKIAC or SIAC seats, Hong Kong as a reciprocating territory under Section 44A, enforcing awards under the New York Convention, stamp duty and limits on interim relief.", href: "/hong-kong-to-india/contracts-courts-arbitration" },
  { title: "Compliance Calendar: Indian Deadlines and the Hong Kong Filings They Feed", desc: "A month-by-month compliance calendar for an Indian subsidiary of a Hong Kong parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return, approval conditions and the Hong Kong-side annual return and profits tax filings.", href: "/hong-kong-to-india/compliance-calendar" },
  { title: "Twelve Common Mistakes Hong Kong Companies Make in India and How to Avoid Them", desc: "The most common mistakes of Hong Kong companies entering India: skipping Press Note 3, thin hub structures, late FEMA filings, weak treaty paperwork, secondment tax errors, stale apostilles, unstamped contracts and ignoring the Indian calendar.", href: "/hong-kong-to-india/common-mistakes" },
]

export default function DataProtectionPdpoDpdpPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Data Protection for Hong Kong Groups in India: PDPO Principles, the DPDP Act and Rules, Cross-Border Transfers and Penalties"
        description="How Hong Kong's Personal Data (Privacy) Ordinance and India's Digital Personal Data Protection Act apply to a group with staff and customers in both: consent, notice, cross-border transfer, processors, breach notification and penalties of up to INR 250 crore."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Data Protection: Hong Kong PDPO and India DPDP Act for Cross-Border Groups" },
        ]}
      />

      <GuideHero
        eyebrow="Compliance: data protection"
        title="Data Protection for Hong Kong Groups in India: PDPO Principles, the DPDP Act and Rules, Cross-Border Transfers and Penalties"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Hong Kong group with an Indian subsidiary will handle personal data under two regimes: Hong
          Kong&apos;s Personal Data (Privacy) Ordinance (PDPO), built on six data protection principles, and
          India&apos;s Digital Personal Data Protection Act, 2023, whose Rules were notified on 13 November 2025
          with the main duties starting 13 May 2027. The Indian Act uses consent and legitimate-use grounds,
          gives individuals rights, requires reasonable security and breach intimation, and allows penalties up
          to INR 250 crore. Cross-border transfers from India are allowed except to countries the government
          restricts; Hong Kong&apos;s cross-border transfer section of the PDPO has not been brought into force.
          Map data flows, prepare notices and agreements, and review before May 2027.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="data-protection" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Hong Kong law", "Personal Data (Privacy) Ordinance (Cap. 486) with six data protection principles; Privacy Commissioner for Personal Data"],
                ["Indian law", "Digital Personal Data Protection Act, 2023; Rules notified 13 November 2025"],
                ["Timeline", "Main duties apply from 13 May 2027 under the staged commencement"],
                ["Penalties", "Up to INR 250 crore for failure to take reasonable security safeguards"],
                ["Transfers from India", "Permitted except to restricted countries notified by the government; sector laws may be stricter"],
                ["Transfers from Hong Kong", "Section 33 of the PDPO (cross-border) not in force; Commissioner recommends model clauses and due diligence"],
                ["Processors", "Written contract; the fiduciary stays accountable"],
                ["Breach", "Notify the Data Protection Board and affected individuals under the Indian Rules; the PDPO regime on breach notification is guidance-based"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Side-by-side</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Hong Kong PDPO</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">India DPDP Act</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Base of processing", "Collection must be lawful, fair and for a purpose directly related to a function; notice at collection", "Consent or specified legitimate uses; notice in clear language"],
                ["Individual rights", "Access and correction", "Access, correction, erasure, grievance redressal, nomination"],
                ["Security", "Practicable steps to protect data", "Reasonable security safeguards; breach intimation"],
                ["Cross-border", "Section 33 not in force; guidance on model clauses", "Allowed except to notified restricted countries"],
                ["Regulator", "Privacy Commissioner for Personal Data", "Data Protection Board of India"],
                ["Penalty", "Offences and enforcement notices; compensation claims", "Monetary penalties up to INR 250 crore"],
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

        <h2 id="flows" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Typical data flows in a Hong Kong-India group</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Employee data shared with the Hong Kong parent for payroll, HR and performance reviews.</li>
          <li>Customer data held by Hong Kong marketing or CRM systems and processed by Indian support teams.</li>
          <li>Shared services (finance, IT, analytics) performed in India for Hong Kong entities, making the Indian company a processor.</li>
          <li>Cloud hosting and group tools that move data between regions.</li>
        </ul>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Practical steps</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Map what data moves between Hong Kong and India, who controls it and who processes it.</li>
          <li>Update notices and consent flows for the Indian rules before May 2027.</li>
          <li>Put processor and intra-group data transfer agreements in place with security, breach and audit terms.</li>
          <li>Set up a breach response plan covering both regulators.</li>
          <li>Review retention and deletion so that old Indian personal data is not kept without purpose.</li>
        </ol>

        <h2 id="sector" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sector rules</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Financial, health, telecom and government-linked data may be subject to sector rules, including
          localisation requirements in some regulated sectors. Check your sector regulator&apos;s directions
          before moving data abroad.
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

        <GuideServiceBox path="/hong-kong-to-india/data-protection-pdpo-dpdp" />
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
            { label: "Office of the Privacy Commissioner for Personal Data (Hong Kong)", href: "https://www.pcpd.org.hk/" },
            { label: "Ministry of Electronics and Information Technology (India)", href: "https://www.meity.gov.in/" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
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
        title="Moving Personal Data Between Hong Kong and India?"
        description="Tell us what data flows where, and we'll map the PDPO, the DPDP Act and the contract terms you need."
      />
    </main>
  )
}
