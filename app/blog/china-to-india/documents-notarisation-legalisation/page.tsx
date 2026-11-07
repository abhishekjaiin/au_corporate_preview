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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/documents-notarisation-legalisation"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "why", label: "Why the Apostille route is closed" },
  { id: "chain", label: "The document chain" },
  { id: "contents", label: "What to prepare" },
  { id: "translation", label: "Translation and names" },
  { id: "timing", label: "Timing and risk" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can Chinese documents be apostilled for use in India?", a: "No. India objected to China's accession to the Apostille Convention, so the Convention does not apply between them. Use the consular legalisation chain instead." },
  { q: "What is the route for Chinese documents to be used in India?", a: "Notarisation by a Chinese notary, authentication by the Ministry of Foreign Affairs or the authorised provincial foreign affairs office, and attestation by the Indian Embassy in Beijing or the Consulates General in Shanghai or Guangzhou." },
  { q: "Does the Indian Embassy check the contents of the document?", a: "No. Its attestation covers the seal and signature, and states that the mission is not responsible for the contents." },
  { q: "Do I need an English translation?", a: "Yes. The Registrar and the Indian bank need English. Use a certified translator and keep names consistent." },
  { q: "How long does it take to prepare Chinese documents?", a: "Plan several weeks for notarisation, authentication and attestation. Confirm current processing times with each office." },
  { q: "Do documents from Hong Kong follow the same route?", a: "Hong Kong and Macao have their own arrangements. Confirm the route with your adviser if a Hong Kong company is in the ownership chain." },
  { q: "Can I sign the incorporation forms electronically from China?", a: "Directors sign with Digital Signature Certificates. The supporting corporate documents still go through the chain above." },
]

const relatedCards = [
  { title: "What a Chinese Parent Must Do at Home: Outbound Investment Filings, SAFE Registration and Tax Credit for Indian Tax", desc: "The Chinese-side steps for a parent investing in India: NDRC and MOFCOM outbound investment approval or filing, SAFE foreign exchange registration through the bank, state-owned enterprise approvals, export controls on technology and tax credit.", href: "/china-to-india/chinese-parent-obligations" },
  { title: "Setting Up the Indian Subsidiary After Approval: Step-by-Step Plan for a Chinese Parent", desc: "The step-by-step plan for incorporating an Indian private limited company owned by a Chinese parent: Press Note 3 approval, documents, director clearance, SPICe+, bank account, funding, RBI reporting and the first 180 days.", href: "/china-to-india/incorporation-steps" },
  { title: "Press Note 3 for Chinese Companies: When Government Approval Is Needed and What the 2026 Easing Changes", desc: "How India's Press Note 3 (2020) applies to a Chinese parent: prior government approval for investors incorporated in China, the 2026 easing for passive minority land-border ownership, the control test, the 60-day sectors, director clearance and planning.", href: "/china-to-india/india-press-note-3-and-chinese-investors" },
  { title: "Common Mistakes Chinese Companies Make in India and How to Avoid Them", desc: "The most frequent mistakes Chinese companies make when setting up in India: investing before Press Note 3 approval, assuming an apostille works, hidden ownership, late FEMA filings, visa mismatches and weak records.", href: "/china-to-india/common-mistakes" },
]

export default function DocumentsNotarisationLegalisationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Preparing Chinese Documents for India: Why There Is No Apostille Between China and India and What to Do Instead"
        description="How to prepare Chinese company documents for an Indian subsidiary: notarisation in China, authentication by the Chinese foreign affairs authority, attestation by the Indian Embassy or Consulate, certified translations and why the Apostille Convention does not apply between China and India."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Documents for an Indian Subsidiary from China: Notary, Chinese Authentication and Indian Embassy Attestation" },
        ]}
      />

      <GuideHero
        eyebrow="Documents: legalisation"
        title="Preparing Chinese Documents for India: Why There Is No Apostille Between China and India and What to Do Instead"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          China joined the Apostille Convention with effect from 7 November 2023, but India objected to
          China&apos;s accession on 8 September 2023 under Article 12 of the Convention. The Convention
          therefore does not operate between the two countries, and Chinese public documents are not apostilled
          for use in India. The route is a Chinese notary, then authentication by the Ministry of Foreign
          Affairs or the authorised provincial foreign affairs office, and then attestation by the Indian
          Embassy in Beijing or the Consulates General in Shanghai and Guangzhou. Allow extra time and keep the
          documents consistent with the Press Note 3 application.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="documents-and-apostille" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Apostille", "Not available between China and India because India objected to China's accession (objection dated 8 September 2023)"],
                ["Step 1", "Notarisation by a Chinese notary public office"],
                ["Step 2", "Authentication by the Ministry of Foreign Affairs legalisation department or the authorised provincial foreign affairs office"],
                ["Step 3", "Attestation by the Indian Embassy in Beijing or the Consulates General in Shanghai or Guangzhou, by consular jurisdiction"],
                ["Translation", "Chinese documents need an English translation, certified or notarised as the Indian Registrar and bank require"],
                ["Typical time", "Plan several weeks for the whole chain; confirm current processing times with each office"],
                ["Coverage", "The Indian missions attest the seal and signature, not the contents"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why the Apostille route is closed</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Under Article 12 of the Apostille Convention, a State may object to another State&apos;s accession,
          and the Convention then does not apply between them. India lodged an objection to China&apos;s
          accession. Chinese authorities therefore still apply consular legalisation for documents going to
          India, and India still requires consular attestation for Chinese documents. Documents from Hong Kong
          and Macao follow their own arrangements, so confirm the position separately if a Hong Kong company is
          on your ownership chart.
        </p>

        <h2 id="chain" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The document chain</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Step</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Who</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What happens</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1. Prepare", "Chinese parent", "Business licence, articles of association, board or shareholder resolution, identity documents of directors and signatories", "Names must match the Press Note 3 application and the Indian forms"],
                ["2. Notarise", "Chinese notary public office", "Notary certifies the copies, signatures and company seal", "Ask for notarisation with English translation if the office offers it"],
                ["3. Authenticate", "Ministry of Foreign Affairs or authorised provincial foreign affairs office", "Authenticates the notary's signature and seal", "Check which office covers your notary"],
                ["4. Attest", "Indian Embassy in Beijing or Consulate General in Shanghai or Guangzhou", "Attests the document with a stamp; commercial and trade documents may need a separate online form", "The applicant must reside within the mission's jurisdiction; use the consular services portal"],
                ["5. Translate", "Certified translator", "English translation, attached to the originals", "The Registrar and the Indian bank may ask for a notarised translation"],
                ["6. Send", "Parent or adviser", "Originals or scans to the Indian team", "Keep the originals safe for the bank KYC and for the Press Note 3 file"],
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

        <h2 id="contents" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What to prepare</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Business licence and the current extract of the company registration, showing legal representative, registered capital and scope.</li>
          <li>Articles of association.</li>
          <li>Board or shareholder resolution approving the investment in India, naming the signatories.</li>
          <li>Ownership chart up to the ultimate natural persons, with shareholder identity documents, because Indian banks and the government approval process ask for it.</li>
          <li>Directors&apos; passports and address proof. Chinese directors need Ministry of Home Affairs clearance; see <Link href="/china-to-india/india-press-note-3-and-chinese-investors" className="text-blue-800 font-semibold hover:underline">Press Note 3</Link>.</li>
          <li>Specimen signatures and, if used, the company seal.</li>
          <li>Audited financial statements, usually for the last two or three years.</li>
        </ul>

        <h2 id="translation" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Translation and names</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Keep the English name of the company, the Chinese name and the transliteration identical across the notarial certificate, the resolution and the application.</li>
          <li>Directors&apos; names must match the passport. A different spelling is a common cause of rejection by the Registrar or the bank.</li>
          <li>Use one translator for the whole set, so that terms such as legal representative and registered capital are consistent.</li>
        </ul>

        <h2 id="timing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Timing and risk</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Run the document chain while the Press Note 3 application is being reviewed, because it will be needed straight after approval.</li>
          <li>Documents may expire for the bank or the Registrar if they are too old, often within a few months, so check the age limit before starting.</li>
          <li>If an office asks for an additional step, follow the office&apos;s current guidance and do not assume the chain you used last year still applies.</li>
          <li>Your Indian adviser can usually accept scans for the filing but the bank will want originals.</li>
        </ul>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.mofcom.gov.cn/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">MOFCOM (China)</a>,{" "}
          <a href="https://www.safe.gov.cn/en/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">SAFE (China)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/china-to-india/documents-notarisation-legalisation" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/china-to-india/faq"
          seeAllLabel="See all 147 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Embassy of India, Beijing: attestation of documents", href: "https://www.eoibeijing.gov.in/page/attestation-of-documents-educational-certificates-commercial-trade-civil-power-of-attorney-affidavit-and-others/" },
            { label: "HCCH: objections to accession to the Apostille Convention", href: "https://www.hcch.net/pt/instruments/conventions/status-table/notifications/?csid=914&disp=resdn" },
            { label: "Ministry of External Affairs (India)", href: "https://www.mea.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Chinese
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Getting Chinese Documents Ready for India?"
        description="Tell us which documents your subsidiary needs, and we'll map the notary, Chinese authentication, Indian embassy attestation and translation steps."
      />
    </main>
  )
}
