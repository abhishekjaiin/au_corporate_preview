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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/incorporation-process"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "phases", label: "Three phases, two countries" },
  { id: "japan-docs", label: "Phase 1: the Japanese document set" },
  { id: "india-filing", label: "Phase 2: the Indian filing" },
  { id: "post", label: "Phase 3: from certificate to operating company" },
  { id: "timing", label: "Keeping to 4 to 6 weeks" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How long does it take to incorporate an Indian subsidiary from Japan?", a: "Typically 4 to 6 weeks from the day the apostilled Japanese documents reach India, with the SPICe+ filing itself taking 7 to 15 working days." },
  { q: "Which Japanese documents are needed?", a: "A certificate of registered matters, the articles of incorporation, a board or member resolution and identity documents for the directors, with certified English translations." },
  { q: "Who apostilles Japanese documents?", a: "The Ministry of Foreign Affairs of Japan. Private documents are notarised and certified by the Legal Affairs Bureau first." },
  { q: "Do Japanese directors need to come to India?", a: "No. Their digital signatures are issued on apostilled passports and translated address proofs, and they sign electronically." },
  { q: "Does a Japanese company need government approval?", a: "Not in most sectors. Press Note 3 does not apply to Japan, so the Automatic Route is available unless the sector requires approval." },
  { q: "What comes after the Certificate of Incorporation?", a: "Bank account opening, the capital remittance, share allotment within 60 days, FC-GPR within 30 days of allotment, the first auditor and INC-20A." },
  { q: "Can the Indian forms be prepared before the documents arrive?", a: "Yes. Running the Indian drafting in parallel with the Japanese document steps is the main way to keep to the timeline." },
  { q: "What causes most delays?", a: "Name mismatches between Japanese documents and passports, expired certificates, and the internal approval of the capital remittance." },
]

const relatedCards = [
  { title: "Documents and Apostille from Japan", desc: "The Japanese document steps in detail.", href: "/japan-to-india/documents-and-apostille" },
  { title: "Resident Director Rules", desc: "Choosing the director who meets the 182-day test.", href: "/japan-to-india/resident-director" },
  { title: "Funding and FC-GPR", desc: "Capital remittance and reporting.", href: "/japan-to-india/funding-fema-fc-gpr" },
  { title: "Common Mistakes", desc: "Where Japanese parents usually lose time.", href: "/japan-to-india/common-mistakes" },
]

export default function IncorporationProcessPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Incorporation Process for a Japanese-Owned Indian Subsidiary, Step by Step"
        description="The eight steps to incorporate a wholly owned subsidiary in India from Japan: forms, order of steps, typical 4 to 6 week timeline and first 90 days."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "Incorporation Process for an Indian Subsidiary, Step by Step" },
        ]}
      />

      <GuideHero
        eyebrow="Enter: incorporation"
        title="Incorporation Process for a Japanese-Owned Indian Subsidiary, Step by Step"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Incorporating an Indian subsidiary from Japan typically takes 4 to 6 weeks from the day the apostilled Japanese documents reach India. The longest part is usually in Japan: the notary, Legal Affairs Bureau certification and MOFA apostille, followed by certified translation. The Indian filing itself, through SPICe+, takes 7 to 15 working days, after which the bank account, capital remittance and FC-GPR complete the setup.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="incorporation-process" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Typical timeline", "4 to 6 weeks from receipt of the apostilled documents in India"],
                ["Indian filing", "SPICe+ with the Ministry of Corporate Affairs, including name, DIN, PAN and TAN"],
                ["Japanese parent documents", "Certificate of registered matters, articles of incorporation and a board or member resolution"],
                ["Authentication", "Notary and Legal Affairs Bureau certification for private documents, then MOFA apostille"],
                ["Translation", "Certified English translation of every Japanese document"],
                ["Route", "Automatic Route in most sectors; Press Note 3 does not apply to Japan"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="phases" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Three phases, two countries</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Phase</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Where</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">1. Japanese document set</th>
                <td className="border border-gray-300 p-3">Japan: notary, Legal Affairs Bureau, MOFA, translator</td>
                <td className="border border-gray-300 p-3">1 to 3 weeks</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">2. Indian incorporation filing</th>
                <td className="border border-gray-300 p-3">India: DSC, name, SPICe+</td>
                <td className="border border-gray-300 p-3">7 to 15 working days</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">3. Bank, capital and reporting</th>
                <td className="border border-gray-300 p-3">India and Japan: account opening, remittance, allotment, FC-GPR</td>
                <td className="border border-gray-300 p-3">2 to 4 weeks</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="japan-docs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Phase 1: the Japanese document set</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Order a fresh certificate of registered matters (tokibo tohon) from the Legal Affairs Bureau.</li>
          <li>Prepare the board or member resolution approving the investment, naming the authorised signatory and the nominee shareholder.</li>
          <li>Have private documents notarised and certified by the Legal Affairs Bureau, then apostilled by the Ministry of Foreign Affairs.</li>
          <li>Arrange certified English translations, keeping names exactly as in passports and the registry.</li>
          <li>Apostille the passports and translated address proofs of Japanese directors for their digital signatures.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-10">
          MOFA expects official documents to be issued within three months of the apostille application, and its Tokyo desk works by appointment, so order the certificate only when the rest of the set is ready.
        </p>
        <h2 id="india-filing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Phase 2: the Indian filing</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Obtain Digital Signature Certificates for the directors and the subscriber&apos;s signatory.</li>
          <li>Reserve the company name through SPICe+ Part A, or within the combined filing.</li>
          <li>File SPICe+ Part B with the memorandum and articles, director details, registered office proof and the Japanese documents.</li>
          <li>Receive the Certificate of Incorporation with the company identification number, PAN and TAN.</li>
        </ol>
        <h2 id="post" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Phase 3: from certificate to operating company</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Open the bank account; the bank completes KYC on the Japanese parent and the directors.</li>
          <li>The parent remits the share capital in yen or US dollars; the bank issues the FIRC.</li>
          <li>Allot shares within 60 days and file FC-GPR within 30 days of allotment.</li>
          <li>Appoint the first auditor within 30 days of incorporation.</li>
          <li>File the commencement of business declaration (INC-20A) within 180 days.</li>
          <li>Register for GST, provident fund, ESI and professional tax as the business requires.</li>
        </ol>
        <h2 id="timing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Keeping to 4 to 6 weeks</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Most delays come from three places: a Japanese document that has to be re-apostilled because of a name mismatch, the internal approval for the capital remittance, and bank KYC on the parent. Preparing the Indian forms while the Japanese documents are in progress, and approving the capital at the same time as the incorporation, keeps the timeline intact.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We send a Japanese-specific document checklist, prepare the Indian forms in parallel, file SPICe+, open the bank account and complete the post-incorporation filings.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/incorporation-process" />
        <GuideCTA
          title="Ready to incorporate in India from Japan?"
          description="Tell us your target date, and we will send the document checklist and a fixed quote."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/japan-to-india/faq"
          seeAllLabel="See all Japanese FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Japanese parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Ministry of Foreign Affairs of Japan: apostille", href: "https://www.mofa.go.jp/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Ready to Incorporate in India?"
        description="Tell us your sector, share capital and target date, and we'll reply with a SPICe+ document checklist for a Japanese parent and a fixed quote."
      />
    </main>
  )
}
