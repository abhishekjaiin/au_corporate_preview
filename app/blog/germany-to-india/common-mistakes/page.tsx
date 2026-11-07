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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/common-mistakes"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "list", label: "Mistakes and fixes" },
  { id: "mindset", label: "Three habits that avoid most of these" },
  { id: "early-warning", label: "Early warning signs" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the most common mistake German companies make in India?", a: "Missing FEMA timelines: allotting shares more than 60 days after receipt of funds or filing FC-GPR more than 30 days after allotment." },
  { q: "Do German documents need an apostille for India?", a: "Public documents generally need an apostille from the competent German authority, usually the Landgericht for court and register documents, plus a sworn translation where the document is not in English." },
  { q: "What do I need before the first dividend is paid?", a: "A German certificate of residence, Form 41, and any no-PE declaration the payer requires." },
  { q: "Can seconded engineers work on a business visa?", a: "A business visa is for meetings and talks, not productive work. Choose the visa category that matches the real work." },
  { q: "Why do intercompany charges attract disputes?", a: "Because there is no contract, no proof of service or no benchmark. Fix these before the first invoice." },
  { q: "Where do I start to avoid these mistakes?", a: "With the structure and documents pages, then the compliance calendar and an adviser in each country." },
]

const relatedCards = [
  { title: "Which Structure Should a German Company Use in India? Subsidiary, Joint Venture, Project Office, Branch, LLP or Employer of Record", desc: "A decision guide for German companies: wholly owned subsidiary, joint venture with an Indian partner, project office, branch, liaison office, LLP and EOR, with tests, tax results, a GmbH & Co. KG warning and a choice by business model.", href: "/germany-to-india/structure-options" },
  { title: "Documents a German Company Must Prepare to Set Up an Indian Subsidiary: Handelsregister, Notary, Apostille and Translation", desc: "The document checklist for a German parent forming an Indian subsidiary: Handelsregister extract, articles of association, shareholder resolution, certificate of representation by a notary, apostille from the Landgericht and English translation.", href: "/germany-to-india/documents-handelsregister-apostille" },
  { title: "Compliance Calendar: Indian Deadlines and the German Filings They Feed", desc: "A month-by-month compliance calendar for an Indian subsidiary of a German parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return and the German-side reports.", href: "/germany-to-india/compliance-calendar" },
  { title: "Exit and Restructuring: Share Sale, Buyback, Liquidation and Closing a Subsidiary Owned by a German Parent", desc: "How a German parent exits an Indian subsidiary: share sale and FEMA pricing, capital gains and the treaty, buyback, voluntary liquidation, strike off, German effect and employee rules.", href: "/germany-to-india/exit-and-restructuring" },
]

export default function CommonMistakesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Common Mistakes German Companies Make in India and How to Avoid Them"
        description="The most frequent mistakes German companies make when setting up in India: late FEMA filings, missing forms for treaty relief, works council surprises, apostille errors, PE creation and transfer pricing gaps."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "Common Mistakes German Companies Make When Entering India" },
        ]}
      />

      <GuideHero
        eyebrow="Risks: mistakes"
        title="Common Mistakes German Companies Make in India and How to Avoid Them"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Most problems for German companies in India are procedural, not strategic: shares allotted late, a
          form missing when the dividend is paid, a document apostilled but not translated, a secondment that
          creates a permanent establishment, or an intercompany charge with no contract. The list below groups
          the common ones by area, with the fix for each.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="common-mistakes" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["FEMA", "Late allotment (60 days) or late FC-GPR (30 days after allotment); missed FLA return"],
                ["Treaty relief", "No residence certificate or Form 41 on file before the first dividend"],
                ["Documents", "German documents not apostilled by the right authority, or no sworn translation"],
                ["Transfer pricing", "No intercompany agreements; Form 48 forgotten"],
                ["Employees", "Misjudging gratuity, provident fund and the labour codes"],
                ["PE", "Seconded staff concluding contracts; long project presence"],
                ["Germany", "Works council not consulted; function transfer ignored"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="list" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes and fixes</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Area</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Mistake</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Fix</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Setup</th>
                  <td className="border border-gray-300 p-3">Choosing a branch to avoid a subsidiary without testing the eligibility</td>
                  <td className="border border-gray-300 p-3">Branch needs net worth of USD 100,000 and a five-year profit record; a subsidiary is the usual route. See <Link href="/germany-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">structure options</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Documents</th>
                  <td className="border border-gray-300 p-3">Using an apostille from the wrong office or skipping the sworn translation</td>
                  <td className="border border-gray-300 p-3">Obtain the apostille from the competent Landgericht and a sworn translation. See <Link href="/germany-to-india/documents-handelsregister-apostille" className="text-blue-800 font-semibold hover:underline">documents and apostille</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">FEMA</th>
                  <td className="border border-gray-300 p-3">Receiving funds but allotting shares after 60 days</td>
                  <td className="border border-gray-300 p-3">Allot within 60 days or refund; file FC-GPR within 30 days of allotment. See <Link href="/germany-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Directors</th>
                  <td className="border border-gray-300 p-3">No resident director</td>
                  <td className="border border-gray-300 p-3">Appoint a director who has stayed in India at least 182 days in the year</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Tax treaty</th>
                  <td className="border border-gray-300 p-3">Paying dividends without a residence certificate and Form 41</td>
                  <td className="border border-gray-300 p-3">Collect documents before the first payment. See <Link href="/germany-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">repatriating profits</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Transfer pricing</th>
                  <td className="border border-gray-300 p-3">Charging management fees with no agreement or evidence</td>
                  <td className="border border-gray-300 p-3">Contract first; keep a benchmark file. See <Link href="/germany-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Staff</th>
                  <td className="border border-gray-300 p-3">Sending engineers on business visas to work on site</td>
                  <td className="border border-gray-300 p-3">Use the right visa; plan certificate of coverage. See <Link href="/germany-to-india/relocate-german-staff" className="text-blue-800 font-semibold hover:underline">staff relocation</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Data</th>
                  <td className="border border-gray-300 p-3">Giving Indian staff access to German systems without a transfer mechanism</td>
                  <td className="border border-gray-300 p-3">Sign standard contractual clauses and run a transfer impact assessment. See <Link href="/germany-to-india/data-protection-gdpr-dpdp" className="text-blue-800 font-semibold hover:underline">data protection</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Works council</th>
                  <td className="border border-gray-300 p-3">Announcing an offshoring plan without consultation</td>
                  <td className="border border-gray-300 p-3">Involve German labour counsel early</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Disputes</th>
                  <td className="border border-gray-300 p-3">Assuming a German judgment can be enforced directly in India</td>
                  <td className="border border-gray-300 p-3">Choose arbitration. See <Link href="/germany-to-india/contracts-courts-arbitration" className="text-blue-800 font-semibold hover:underline">contracts and arbitration</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Supply chain</th>
                  <td className="border border-gray-300 p-3">Ignoring due diligence duties passed on by German customers</td>
                  <td className="border border-gray-300 p-3">Prepare for supplier questionnaires. See <Link href="/germany-to-india/supply-chain-and-esg-duties" className="text-blue-800 font-semibold hover:underline">supply chain duties</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Calendar</th>
                  <td className="border border-gray-300 p-3">Missing AGM, AOC-4 or MGT-7</td>
                  <td className="border border-gray-300 p-3">Use the compliance calendar. See <Link href="/germany-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar</Link></td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="mindset" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Three habits that avoid most of these</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Documents first:</strong> collect corporate and tax documents from Germany before any filing begins.</li>
          <li><strong>One owner per deadline:</strong> a named person for each filing in each country.</li>
          <li><strong>Two advisers who talk:</strong> an Indian adviser for local law and a German adviser for the parent&apos;s side, with a short monthly call.</li>
        </ul>

        <h2 id="early-warning" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Early warning signs</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A bank asks for a form you have not heard of.</li>
          <li>A German customer sends an Indian supplier questionnaire.</li>
          <li>The Indian team starts negotiating contracts for the German company.</li>
          <li>Payments to the German parent have no contract behind them.</li>
          <li>Share certificates are issued but no filing has been made.</li>
        </ul>

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

        <GuideServiceBox path="/germany-to-india/common-mistakes" />
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
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
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
        title="Avoid the Usual Traps for German Investors"
        description="Tell us your planned structure and launch date, and we'll flag the issues German parents most often run into in India."
      />
    </main>
  )
}
