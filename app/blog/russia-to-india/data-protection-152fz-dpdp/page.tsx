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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/data-protection-152fz-dpdp"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "compare", label: "Side-by-side" },
  { id: "flows", label: "Typical data flows in a Russia-India group" },
  { id: "steps", label: "Practical steps" },
  { id: "sector", label: "Sector rules" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does Russian data localisation affect an Indian subsidiary?", a: "It can, if the group handles personal data of Russian citizens. The initial collection and storage must be in Russia, so India should receive copies only as the law permits. Confirm with Russian counsel." },
  { q: "Must I notify the Russian regulator before sending data to India?", a: "Russian rules require notification of the regulator before cross-border transfers and an assessment of the recipient country's protection. Confirm the current procedure." },
  { q: "When do the Indian data protection duties start?", a: "The Rules were notified on 13 November 2025 and the main duties apply from 13 May 2027." },
  { q: "Can I send Indian personal data to Russia?", a: "Generally yes, because the Act restricts transfers only to countries the government notifies. Sector rules can be stricter." },
  { q: "What is the maximum penalty in India?", a: "Up to INR 250 crore for failing to take reasonable security safeguards to prevent a personal data breach." },
  { q: "Do I need a data processing agreement?", a: "Yes. A written contract with the processor covers purpose, security, breach and return or deletion of data." },
  { q: "Who regulates data protection?", a: "Roskomnadzor in Russia and the Data Protection Board of India." },
]

const relatedCards = [
  { title: "Hiring Staff in India as a Russian-Owned Company: Employment Contracts, Provident Fund, ESI, Gratuity and Labour Codes", desc: "How a Russian-owned Indian subsidiary hires locally: offer and employment contracts, payroll taxes, provident fund, ESI, gratuity, labour codes, shops and establishments law, notice periods, POSH and differences from Russian labour practice.", href: "/russia-to-india/hiring-in-india" },
  { title: "Contracts and Dispute Resolution for Russian Companies in India: Governing Law, Arbitration Seats, Enforcing Awards and Court Judgments", desc: "How to draft and enforce contracts between a Russian company and Indian counterparties: governing law, arbitration seat and institution, enforcing awards under the New York Convention, the position on court judgments, Russian courts' jurisdiction over sanctions disputes, stamp duty and interim relief.", href: "/russia-to-india/contracts-courts-arbitration" },
  { title: "Compliance Calendar: Indian Deadlines and the Russian Filings They Feed", desc: "A month-by-month compliance calendar for an Indian subsidiary of a Russian parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return, sanctions reviews and the Russian-side reporting that depends on Indian numbers.", href: "/russia-to-india/compliance-calendar" },
  { title: "Twelve Common Mistakes Russian Companies Make in India and How to Avoid Them", desc: "The most common mistakes of Russian companies entering India: ignoring banking and sanctions, skipping Russian clearance, late FEMA filings, weak treaty paperwork, secondment tax errors, unauthenticated documents, unstamped contracts and ignoring the Indian calendar.", href: "/russia-to-india/common-mistakes" },
]

export default function DataProtection152fzDpdpPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Data Protection for Russian Groups in India: Localisation, Cross-Border Transfer Notification, the DPDP Act and Penalties of up to INR 250 crore"
        description="How Russia's personal data law (152-FZ), with its localisation rule and cross-border transfer notification, and India's Digital Personal Data Protection Act apply to a group with staff and customers in both: consent, notice, transfers, processors, breach notification and penalties."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Data Protection: Russia's Federal Law 152-FZ and India's DPDP Act for Cross-Border Groups" },
        ]}
      />

      <GuideHero
        eyebrow="Compliance: data protection"
        title="Data Protection for Russian Groups in India: Localisation, Cross-Border Transfer Notification, the DPDP Act and Penalties of up to INR 250 crore"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Russian group with an Indian subsidiary handles personal data under two regimes. Russia&apos;s
          Federal Law No. 152-FZ requires, among other things, that the initial recording and storage of Russian
          citizens&apos; personal data be done in databases located in Russia, and requires notification of the
          regulator before cross-border transfers; fines have been raised in recent years. India&apos;s Digital
          Personal Data Protection Act, 2023, with Rules notified on 13 November 2025 and main duties from 13
          May 2027, uses consent and legitimate-use grounds, gives individuals rights, requires reasonable
          security and breach intimation, and allows penalties up to INR 250 crore. Map data flows between
          Russia and India, decide where data lives, and put agreements in place. Confirm the current Russian
          rules with Russian counsel.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="data-protection" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Russian law", "Federal Law No. 152-FZ on personal data; regulator Roskomnadzor"],
                ["Localisation", "Initial collection and storage of Russian citizens' personal data in databases in Russia"],
                ["Cross-border transfer", "Notify the regulator before transfer; assess the recipient country's protection; the regulator can restrict transfers"],
                ["Indian law", "Digital Personal Data Protection Act, 2023; Rules notified 13 November 2025"],
                ["Timeline", "Main Indian duties apply from 13 May 2027 under the staged commencement"],
                ["Penalties", "India: up to INR 250 crore for failure to take reasonable security safeguards; Russia: fines raised in recent years"],
                ["Transfers from India", "Permitted except to restricted countries notified by the government; sector laws may be stricter"],
                ["Processors", "Written contract; the data fiduciary or operator stays accountable"],
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
                <th scope="col" className="border border-gray-300 p-3 text-left">Russia (152-FZ)</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">India (DPDP Act)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Base of processing", "Consent or other listed legal grounds; notice and purpose limitation", "Consent or specified legitimate uses; notice in clear language"],
                ["Individual rights", "Access, correction, deletion and objection", "Access, correction, erasure, grievance redressal, nomination"],
                ["Security", "Organisational and technical measures", "Reasonable security safeguards; breach intimation"],
                ["Localisation", "Initial storage of Russian citizens' data in Russia", "No general localisation; sector rules may apply"],
                ["Cross-border", "Prior notification and assessment of the recipient country", "Allowed except to notified restricted countries"],
                ["Regulator", "Roskomnadzor", "Data Protection Board of India"],
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

        <h2 id="flows" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Typical data flows in a Russia-India group</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Employee data of Russian secondees held by the Russian parent and shared with the Indian subsidiary.</li>
          <li>Indian employee and customer data sent to Russian group systems for payroll, CRM or analytics.</li>
          <li>Shared services (engineering, IT, support) in India handling Russian customer data, making the Indian company a processor.</li>
          <li>Cloud hosting that moves data between regions.</li>
        </ul>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Practical steps</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Map what data moves between Russia and India, who controls it and who processes it.</li>
          <li>Keep the primary copy of Russian citizens&apos; data in Russia where the law requires it, and review what is copied to India.</li>
          <li>File the notifications and carry out the assessment for cross-border transfers under Russian law.</li>
          <li>Update notices and consent flows for the Indian rules before May 2027.</li>
          <li>Put processor and intra-group data transfer agreements in place with security, breach and audit terms.</li>
          <li>Set up a breach response plan covering both regulators.</li>
        </ol>

        <h2 id="sector" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sector rules</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Financial, health, telecom and government-linked data may be subject to sector rules, including
          localisation requirements in some regulated sectors in both countries. Check your sector
          regulator&apos;s directions before moving data.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.nalog.gov.ru/eng/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Federal Tax Service (Russia)</a>,{" "}
          <a href="https://www.cbr.ru/eng/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Bank of Russia</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/russia-to-india/data-protection-152fz-dpdp" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/russia-to-india/faq"
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
            { label: "Roskomnadzor (Russia)", href: "https://eng.rkn.gov.ru/" },
            { label: "Ministry of Electronics and Information Technology (India)", href: "https://www.meity.gov.in/" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Russian
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Moving Personal Data Between Russia and India?"
        description="Tell us what data flows where, and we'll map 152-FZ localisation and transfer rules, the DPDP Act and the contract terms you need."
      />
    </main>
  )
}
