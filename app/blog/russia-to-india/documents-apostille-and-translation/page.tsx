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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/documents-apostille-and-translation"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "list", label: "Documents normally required" },
  { id: "process", label: "Process" },
  { id: "pitfalls", label: "Pitfalls" },
  { id: "india-side", label: "On the Indian side" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does India accept a Russian apostille?", a: "Both countries are parties to the Apostille Convention, so an apostille from the competent Russian authority is the normal route and consular legalisation is not usually required." },
  { q: "Who issues apostilles in Russia?", a: "It depends on the document. Notarised documents, registry extracts and certificates each have a competent authority; your Russian notary can tell you which." },
  { q: "Do I need a translation?", a: "Yes for documents in Russian. Use a certified English translation, normally notarised, and make sure the apostille covers it." },
  { q: "Do I need a notary?", a: "Usually for copies of private documents, signatures on decisions and powers of attorney, before the apostille." },
  { q: "How recent must the documents be?", a: "Banks and the Registrar commonly want registry extracts and similar documents within three to six months. Ask each recipient." },
  { q: "Do directors need Indian credentials?", a: "Yes. Each proposed director needs a Director Identification Number and a Digital Signature Certificate." },
  { q: "Why do names matter so much?", a: "Indian systems and banks reject near matches, so the transliteration of names must be identical in every document." },
]

const relatedCards = [
  { title: "How to Incorporate a Private Limited Company in India as a Russian Parent: Sanctions Checks, SPICe+, Bank Account, Capital Inflow and First Filings", desc: "Step-by-step route for a Russian parent to set up an Indian private limited company: ownership and sanctions checks, name, SPICe+, DIN and DSC, resident director, PAN and TAN, bank account, capital inflow, FC-GPR and first filings.", href: "/russia-to-india/incorporation-steps" },
  { title: "Funding Your Indian Subsidiary from Russia: Equity, Preference Shares, External Borrowing, FEMA Reporting and the Remittance Route", desc: "How a Russian parent can fund an Indian company: equity and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return, the remittance route through banks acceptable to India and Russian clearance.", href: "/russia-to-india/funding-and-fema" },
  { title: "What a Russian Parent Must Do at Home: Outbound Investment Controls, Currency Rules, Foreign Account Reporting and Tax Credit", desc: "The Russian-side steps for a parent investing in India: Bank of Russia thresholds and approval for share investments abroad, currency control and repatriation rules, foreign account reporting, controlled foreign company rules, profit tax and treatment of Indian dividends.", href: "/russia-to-india/russian-parent-obligations" },
  { title: "Twelve Common Mistakes Russian Companies Make in India and How to Avoid Them", desc: "The most common mistakes of Russian companies entering India: ignoring banking and sanctions, skipping Russian clearance, late FEMA filings, weak treaty paperwork, secondment tax errors, unauthenticated documents, unstamped contracts and ignoring the Indian calendar.", href: "/russia-to-india/common-mistakes" },
]

export default function DocumentsApostilleAndTranslationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Russian Documents for an Indian Subsidiary: Notary, Apostille, Certified English Translation and Delivery to India"
        description="How to prepare Russian company and director documents for Indian filings: both countries are parties to the Apostille Convention, which authority issues the apostille, notarised English translations, validity, checklist and common pitfalls."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Russian Documents for India: Apostille, Notarised Translation and Checklist" },
        ]}
      />

      <GuideHero
        eyebrow="Documents: apostille and translation"
        title="Russian Documents for an Indian Subsidiary: Notary, Apostille, Certified English Translation and Delivery to India"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Russia and India are both parties to the Hague Apostille Convention, so Russian public documents and
          notarised documents are authenticated for India by an apostille from the competent Russian authority,
          without consular legalisation. Documents in Russian need a certified English translation, usually
          notarised, with the apostille covering the notarisation. Prepare certificates, extracts from the
          register of legal entities, charter, board or shareholder decisions, passports and a net worth
          statement, and keep names and spellings identical across them. Which Russian authority issues the
          apostille depends on the document, so confirm with the notary or the issuing body.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="documents-and-apostille" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Convention status", "Russia and India are both parties to the Apostille Convention"],
                ["Apostille issuer", "Depends on the document: justice authorities, tax authority or other competent bodies; confirm with your notary"],
                ["Translation", "Certified English translation of Russian documents, normally notarised"],
                ["Names", "Transliteration must match passports and across all documents"],
                ["Validity", "Indian banks and the Registrar usually want recent extracts, often three to six months"],
                ["Power of attorney", "Notarise, apostille, then follow Indian stamp rules on arrival"],
                ["Digital signatures", "Directors need an Indian Digital Signature Certificate and Director Identification Number"],
                ["Fallback", "Consular legalisation is not normally needed between Convention parties; ask the receiving body if in doubt"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="list" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documents normally required</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Document</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Source</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Authentication</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Extract from the register of legal entities", "Federal Tax Service", "Apostille, certified English translation"],
                ["Charter of the company", "Russian company", "Notarised copy, apostille, translation"],
                ["Decision of the board or shareholders to invest", "Russian company", "Notarised signatures, apostille, translation"],
                ["Passport copies and address proof of directors", "Individuals", "Notarised copies, translation of any Russian parts"],
                ["Financial statements or net worth certificate", "Russian auditor or accountant", "Notarised, apostille, translation"],
                ["Ultimate beneficial owner chart and declarations", "Company", "Signed declaration, notarised where requested"],
                ["Power of attorney for Indian signatories", "Company", "Notarised, apostille, translation, stamped in India"],
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

        <h2 id="process" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Process</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Prepare documents and consistent transliteration of all names and addresses.</li>
          <li>Have a Russian notary certify copies and signatures where the document is private.</li>
          <li>Obtain the apostille from the competent authority for each document.</li>
          <li>Arrange certified English translations and have the translator&apos;s signature notarised, with the apostille covering it.</li>
          <li>Courier originals to India and scan copies for the online filing.</li>
        </ol>

        <h2 id="pitfalls" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Pitfalls</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Different spellings of the same name in the passport, the register and the board decision.</li>
          <li>Translations that are not certified, or that are not covered by the apostille.</li>
          <li>Stale extracts: re-issue anything past the validity the bank or Registrar accepts.</li>
          <li>Missing stamp duty on a power of attorney or agreement on arrival in India.</li>
          <li>Documents that reveal an ownership chain the bank cannot follow.</li>
        </ul>

        <h2 id="india-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">On the Indian side</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Foreign directors need a DIN and Digital Signature Certificate, and the company needs a registered
          office with proof. See{" "}
          <Link href="/russia-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">incorporation steps</Link>.
          Banking evidence is in{" "}
          <Link href="/russia-to-india/sanctions-and-payments-for-russian-companies" className="text-blue-800 font-semibold hover:underline">sanctions and payments</Link>.
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

        <GuideServiceBox path="/russia-to-india/documents-apostille-and-translation" />
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
            { label: "Hague Conference: Apostille Convention status table", href: "https://www.hcch.net/en/instruments/conventions/status-table/?cid=41" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
            { label: "Ministry of External Affairs (India)", href: "https://www.mea.gov.in/" },
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
        title="Getting Russian Documents Ready for India?"
        description="Tell us which documents your subsidiary needs, and we'll map the notary, apostille and certified translation steps."
      />
    </main>
  )
}
