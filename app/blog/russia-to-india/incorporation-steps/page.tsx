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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/incorporation-steps"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "pre-checks", label: "Checks before filing" },
  { id: "documents", label: "Russian documents" },
  { id: "filing", label: "The Indian filing" },
  { id: "bank", label: "Bank account and first capital" },
  { id: "after", label: "After incorporation" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How long does incorporation take for a Russian parent?", a: "About 4 to 6 weeks from complete documents, plus bank onboarding time." },
  { q: "Does a Russian company need Indian government approval?", a: "Not in most sectors; Press Note 3 does not apply to Russia." },
  { q: "Which Russian documents are needed?", a: "A register extract, the charter, a resolution and directors' documents, apostilled and translated." },
  { q: "Why screen sanctions before filing?", a: "Because Indian banks and counterparties screen against US, EU and UK lists." },
  { q: "Do Russian documents need translation?", a: "Yes, notarised English translations." },
  { q: "Why involve the bank early?", a: "Account opening and the capital route are usually the slowest steps." },
  { q: "What follows incorporation?", a: "Bank account, capital, allotment, FC-GPR, auditor and registrations." },
  { q: "Is Russian approval needed for the investment?", a: "Possibly, from the Bank of Russia above the reported threshold." },
]

const relatedCards = [
  { title: "India FDI Rules for Russian Companies", desc: "Why the Automatic Route applies.", href: "/russia-to-india/india-fdi-rules-for-russian-companies" },
  { title: "Documents, Apostille and Translation", desc: "Russian documents in detail.", href: "/russia-to-india/documents-apostille-and-translation" },
  { title: "Sanctions and Payments", desc: "Banking checks.", href: "/russia-to-india/sanctions-and-payments-for-russian-companies" },
  { title: "Funding and FEMA", desc: "The capital route.", href: "/russia-to-india/funding-and-fema" },
]

export default function IncorporationStepsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How to Incorporate a Private Limited Company in India as a Russian Parent: Sanctions Checks, SPICe+, Bank Account, Capital Inflow and First Filings"
        description="Step-by-step route for a Russian parent to set up an Indian private limited company: ownership and sanctions checks, name, SPICe+, DIN and DSC, resident director, PAN and TAN, bank account, capital inflow, FC-GPR and first filings."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Incorporating an Indian Subsidiary from Russia: Step-by-Step with Timeline" },
        ]}
      />

      <GuideHero
        eyebrow="Setup: step by step"
        title="How to Incorporate a Private Limited Company in India as a Russian Parent: Sanctions Checks, SPICe+, Bank Account, Capital Inflow and First Filings"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Incorporating an Indian subsidiary for a Russian parent follows the standard SPICe+ process and usually takes 4 to 6 weeks from complete documents, but it starts with two checks other countries skip: screening the ownership chain against US, EU and UK sanctions lists, and confirming with an Indian bank that it will open the account and accept the capital remittance. Russian documents are apostilled and need notarised English translations.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="incorporation-process" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Typical timeline", "4 to 6 weeks from complete documents, plus bank onboarding"],
                ["Route", "Automatic Route in most sectors; Press Note 3 does not apply"],
                ["Documents", "Extract from the register of legal entities, charter, resolution; apostille and notarised translation"],
                ["Indian filing", "SPICe+ with name, DINs, PAN and TAN"],
                ["Pre-check", "Sanctions screening of owners and the remitting bank"],
                ["Time difference", "India is 2.5 hours ahead of Moscow"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="pre-checks" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Checks before filing</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Map the ownership chain to the ultimate beneficial owners.</li>
          <li>Screen owners, directors and the remitting bank against US, EU and UK lists, with sanctions counsel where needed.</li>
          <li>Confirm the sector is on the Automatic Route and that no land-border beneficial owner brings in Press Note 3.</li>
          <li>Get an Indian bank&apos;s in-principle agreement to open the account and accept the remittance route.</li>
        </ol>
        <h2 id="documents" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Russian documents</h2>
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
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Extract from the Unified State Register of Legal Entities</th>
                <td className="border border-gray-300 p-3">Federal Tax Service</td>
                <td className="border border-gray-300 p-3">Apostille</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Charter</th>
                <td className="border border-gray-300 p-3">Company records</td>
                <td className="border border-gray-300 p-3">Notarised copy and apostille</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Shareholder or board resolution</th>
                <td className="border border-gray-300 p-3">Company</td>
                <td className="border border-gray-300 p-3">Notarised and apostilled</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Directors&apos; passports and address proofs</th>
                <td className="border border-gray-300 p-3">Directors</td>
                <td className="border border-gray-300 p-3">Notarised and apostilled</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Certified English translations</th>
                <td className="border border-gray-300 p-3">Translator</td>
                <td className="border border-gray-300 p-3">Notarised translation</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          Transliterate names exactly as in passports, and keep the same spelling on every Indian form.
        </p>
        <h2 id="filing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Indian filing</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Digital Signature Certificates for directors and the subscriber&apos;s signatory.</li>
          <li>Name reservation within SPICe+.</li>
          <li>SPICe+ with the memorandum, articles, office proof and the apostilled documents.</li>
          <li>Certificate of Incorporation with PAN and TAN.</li>
        </ol>
        <h2 id="bank" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Bank account and first capital</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Account opening for a Russian-owned company takes longer than usual because of enhanced due diligence. Once open, the capital is remitted through the agreed route, the bank issues the FIRC, shares are allotted within 60 days and FC-GPR is filed within 30 days of allotment. Bank of Russia approval may be needed on the Russian side above the reported threshold.
        </p>
        <h2 id="after" className="text-2xl font-bold text-gray-900 mt-12 mb-4">After incorporation</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Appoint the first auditor within 30 days.</li>
          <li>File INC-20A within 180 days.</li>
          <li>Register for GST, provident fund and ESI as needed.</li>
          <li>Set a quarterly sanctions re-screening routine.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We run the pre-checks with your advisers, prepare the Russian document checklist, file SPICe+, and work with the bank on account opening and the capital route.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>.
        </p>

        <GuideServiceBox path="/russia-to-india/incorporation-steps" />
        <GuideCTA
          title="Incorporating in India from Russia?"
          description="Tell us the ownership chain and timing, and we will plan the checks and filings."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/russia-to-india/faq"
          seeAllLabel="See all Russian FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Russian parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "Federal Tax Service of Russia", href: "https://www.nalog.gov.ru/eng/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Ready to Incorporate from Russia?"
        description="Tell us your shareholders, share capital and target date, and we'll map the documents, the bank account, the SPICe+ filing and a fixed quote."
      />
    </main>
  )
}
