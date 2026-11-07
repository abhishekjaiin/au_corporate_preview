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

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/incorporation-process"
const PARENT_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Australian companies" },
  { id: "documents", label: "Documents from Australia" },
  { id: "filing", label: "The Indian filing" },
  { id: "after", label: "After the certificate" },
  { id: "time-zones", label: "Working across the time difference" },
  { id: "delays", label: "What slows Australian incorporations" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How long does incorporation take from Australia?", a: "Usually 4 to 6 weeks from receipt of the apostilled documents in India." },
  { q: "Who apostilles Australian documents?", a: "The Department of Foreign Affairs and Trade, through one federal process." },
  { q: "What Australian documents are needed?", a: "An ASIC company extract, the constitution, a board resolution and directors' identity documents." },
  { q: "Why must the ACN match?", a: "Indian forms and the bank compare the legal name and ACN with the ASIC extract, and differences cause queries." },
  { q: "Do Australian directors need to visit India?", a: "No. They sign with digital signatures obtained using apostilled identity documents." },
  { q: "Does an Australian investor need government approval?", a: "Not in most sectors; Press Note 3 does not apply." },
  { q: "What is the best time for calls with India?", a: "Australian early afternoon, which is Indian morning." },
  { q: "What follows incorporation?", a: "Bank account, capital remittance, allotment, FC-GPR, first auditor, INC-20A and registrations." },
]

const relatedCards = [
  { title: "Documents and Apostille from Australia", desc: "The DFAT process in detail.", href: "/australia-to-india/documents-and-apostille" },
  { title: "Resident Director Rules", desc: "Planning the 182-day director.", href: "/australia-to-india/resident-director" },
  { title: "Funding and FC-GPR", desc: "Capital and reporting.", href: "/australia-to-india/funding-fema-fc-gpr" },
  { title: "Common Mistakes", desc: "What usually slows setup.", href: "/australia-to-india/common-mistakes" },
]

export default function IncorporationProcessPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Incorporation Process for an Australian-Owned Indian Subsidiary, Step by Step"
        description="The eight steps to incorporate a wholly owned subsidiary in India from Australia: forms, order of steps, typical 4 to 6 week timeline and first 90 days."
        datePublished="2026-10-15"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "Incorporation Process for an Indian Subsidiary, Step by Step" },
        ]}
      />

      <GuideHero
        eyebrow="Enter: incorporation"
        title="Incorporation Process for an Australian-Owned Indian Subsidiary, Step by Step"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Australian Pty Ltd can usually incorporate its Indian subsidiary in 4 to 6 weeks from the day its apostilled documents reach India. Australia has one federal apostille process through DFAT, so the document stage is often quicker than for countries with state-by-state rules. The ASIC company extract, constitution and board resolution are the core documents, and the exact legal name and ACN must match on every Indian form.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideCountryContext country="australia" topic="incorporation-process" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Typical timeline", "4 to 6 weeks from receipt of apostilled documents"],
                ["Australian documents", "ASIC company extract, constitution, board resolution, directors' identity documents"],
                ["Apostille", "DFAT, one federal process; notary must be one DFAT can verify"],
                ["Indian filing", "SPICe+ with name, DINs, PAN and TAN"],
                ["Route", "Automatic Route in most sectors; Press Note 3 does not apply"],
                ["Time difference", "India is 4.5 to 5.5 hours behind Sydney and Melbourne"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="documents" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documents from Australia</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Document</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">From</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Authentication</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Current ASIC company extract</th>
                <td className="border border-gray-300 p-3">ASIC</td>
                <td className="border border-gray-300 p-3">Apostille by DFAT</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Constitution</th>
                <td className="border border-gray-300 p-3">Company records</td>
                <td className="border border-gray-300 p-3">Notarised, then DFAT apostille</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Board resolution approving the subsidiary and signatories</th>
                <td className="border border-gray-300 p-3">Australian board</td>
                <td className="border border-gray-300 p-3">Notarised, then DFAT apostille</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Directors&apos; passports and address proofs</th>
                <td className="border border-gray-300 p-3">Each director</td>
                <td className="border border-gray-300 p-3">Notarised, then DFAT apostille</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Nominee shareholder consent</th>
                <td className="border border-gray-300 p-3">Group company or individual</td>
                <td className="border border-gray-300 p-3">Notarised where required</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          Use the exact legal name and ACN from the ASIC extract on every Indian form; small differences such as &apos;Pty Ltd&apos; against &apos;Proprietary Limited&apos; cause queries.
        </p>
        <h2 id="filing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Indian filing</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Digital Signature Certificates for directors and the subscriber&apos;s signatory.</li>
          <li>Name reservation, alone or within SPICe+.</li>
          <li>SPICe+ filing with the memorandum, articles, registered office proof and the apostilled Australian documents.</li>
          <li>Certificate of Incorporation with the company identification number, PAN and TAN, usually 7 to 15 working days after filing.</li>
        </ol>
        <h2 id="after" className="text-2xl font-bold text-gray-900 mt-12 mb-4">After the certificate</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Open the bank account; the bank performs KYC on the Australian parent and its beneficial owners.</li>
          <li>Remit share capital in Australian or US dollars and allot shares within 60 days.</li>
          <li>File FC-GPR within 30 days of allotment.</li>
          <li>Appoint the first auditor within 30 days and file INC-20A within 180 days.</li>
          <li>Register for GST, provident fund, ESI and professional tax as needed.</li>
        </ul>
        <h2 id="time-zones" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Working across the time difference</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India is 4.5 hours behind Sydney and Melbourne during Australian daylight saving and 5.5 hours behind otherwise. Indian mornings meet Australian early afternoons, which is the best window for signing calls, bank KYC video checks and digital signature verification.
        </p>
        <h2 id="delays" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What slows Australian incorporations</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A notary whose signature DFAT cannot verify, forcing a second round.</li>
          <li>An ASIC extract that is too old by the time it is filed.</li>
          <li>Board resolutions that do not name the nominee shareholder or authorised signatory.</li>
          <li>Late decision on the resident director.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We send an Australia-specific document checklist, prepare the Indian forms while DFAT apostilles are in progress, file SPICe+ and complete the bank and RBI steps.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>.
        </p>

        <GuideServiceBox path="/australia-to-india/incorporation-process" />
        <GuideCTA
          title="Ready to incorporate from Australia?"
          description="Tell us your target date, and we will send the checklist and a fixed quote."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/australia-to-india/faq"
          seeAllLabel="See all Australian FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Australian parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Department of Foreign Affairs and Trade", href: "https://www.dfat.gov.au" },
            { label: "Australian Securities and Investments Commission", href: "https://asic.gov.au" },
          ]}
        />

        <p className="mt-6">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Ready to Start Incorporation?"
        description="Tell us your sector, share capital and target start date — we'll reply with your SPICe+ document checklist and a fixed quote."
      />
    </main>
  )
}
