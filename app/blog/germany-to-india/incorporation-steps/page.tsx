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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/incorporation-steps"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "roles", label: "Who does what" },
  { id: "german-papers", label: "The German paper trail" },
  { id: "indian-steps", label: "The Indian steps" },
  { id: "calendar", label: "Fitting it around German holidays and approvals" },
  { id: "pitfalls", label: "Where German incorporations stall" },
  { id: "spice-detail", label: "Inside the SPICe+ incorporation filing" },
  { id: "de-sequence", label: "The German document sequence" },
  { id: "de-name", label: "Name approval and objects" },
  { id: "de-after", label: "After the certificate of incorporation" },
  { id: "de-office", label: "Digital signatures and DINs for German directors" },
  { id: "de-timeline", label: "A realistic timeline" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How long does incorporation take from Germany?", a: "About 4 to 6 weeks from the day the German documents are ready." },
  { q: "Which authority apostilles German documents?", a: "The Landgericht for the notary's district, or the Landgericht of the register court for Handelsregister extracts." },
  { q: "Do German documents need translation?", a: "Yes, sworn English translations." },
  { q: "Which German documents are needed?", a: "A current Handelsregister extract, the articles and a resolution approving the investment." },
  { q: "Does a German investor need Indian government approval?", a: "Not in most sectors; Press Note 3 does not apply." },
  { q: "Do German directors need to travel to India?", a: "No. They sign with digital signatures." },
  { q: "Why approve the capital with the incorporation?", a: "So the 60-day allotment window is not delayed by a second approval." },
  { q: "What follows the certificate of incorporation?", a: "Bank account, capital, allotment, FC-GPR, auditor and registrations." },
  { q: "What is name approval in India?", a: "The reservation of the company name through SPICe+ Part A; an approved name is held for 20 days." },
  { q: "When are PAN and TAN issued?", a: "With the certificate of incorporation." },
  { q: "Can a GmbH & Co. KG be the shareholder?", a: "Yes, but its tax treatment as a partnership needs a German review before it holds Indian shares." },
  { q: "Do German directors need to travel to India?", a: "No. They sign digitally; some banks ask to meet a signatory by video when opening the account." },
]

const relatedCards = [
  { title: "Documents and Apostille from Germany", desc: "The Landgericht process.", href: "/germany-to-india/documents-handelsregister-apostille" },
  { title: "Structure Options", desc: "Choosing the entity.", href: "/germany-to-india/structure-options" },
  { title: "Funding and FEMA", desc: "Capital and reporting.", href: "/germany-to-india/funding-and-fema" },
  { title: "Compliance Calendar", desc: "What follows setup.", href: "/germany-to-india/compliance-calendar" },
]

export default function IncorporationStepsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Incorporating a Subsidiary in India from Germany: Who Does What, in What Order"
        description="A split plan for a German parent forming an Indian private limited company: what the German team does, what the Indian team does, SPICe+, bank account, FC-GPR and the first 180 days."
        datePublished="2026-10-26"
        dateModified="2026-11-13"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "Incorporating an Indian Subsidiary from Germany: Who Does What, and When" },
        ]}
      />

      <GuideHero
        eyebrow="Setup: the step-by-step plan"
        title="Incorporating a Subsidiary in India from Germany: Who Does What, in What Order"
        updated="13 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A German GmbH or AG can incorporate its Indian subsidiary in about 4 to 6 weeks from the day its documents are ready. Germany has no single apostille office, so each document goes to the right Landgericht after notarisation, and every document needs a sworn English translation. The Indian side, digital signatures and the SPICe+ filing, can be prepared in parallel and usually takes 7 to 15 working days once the papers arrive.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="incorporation-process" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["German documents", "Current Handelsregister extract, Gesellschaftsvertrag or Satzung, shareholder or management resolution"],
                ["Apostille", "Landgericht of the notary's district; Landgericht of the register court for Handelsregister extracts"],
                ["Translation", "Sworn (beeidigte) English translation"],
                ["Indian filing", "SPICe+, with DINs, PAN and TAN"],
                ["Timeline", "About 4 to 6 weeks from documents ready"],
                ["Time difference", "India 3.5 hours ahead in summer, 4.5 in winter"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="roles" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who does what</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Task</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">German side</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian side</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Board and shareholder approval</th>
                <td className="border border-gray-300 p-3">Geschäftsführung or Vorstand, with shareholder consent if the articles require</td>
                <td className="border border-gray-300 p-3">Draft resolution wording provided by us</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Register extract</th>
                <td className="border border-gray-300 p-3">Ordered from the Handelsregister</td>
                <td className="border border-gray-300 p-3">Checked for name and signatory details</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Notary and apostille</th>
                <td className="border border-gray-300 p-3">German notary and the competent Landgericht</td>
                <td className="border border-gray-300 p-3">Checklist of which document goes where</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Translation</th>
                <td className="border border-gray-300 p-3">Sworn translator</td>
                <td className="border border-gray-300 p-3">Spelling checked against passports</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Digital signatures and SPICe+</th>
                <td className="border border-gray-300 p-3">Directors provide KYC</td>
                <td className="border border-gray-300 p-3">AU Corporate files</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Bank account and capital</th>
                <td className="border border-gray-300 p-3">Treasury remits EUR</td>
                <td className="border border-gray-300 p-3">AU Corporate coordinates KYC and FC-GPR</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="german-papers" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The German paper trail</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Order a fresh Handelsregister extract; Indian authorities expect recent documents.</li>
          <li>Pass the resolution approving the Indian company, the capital and the authorised signatory.</li>
          <li>Have private documents notarised.</li>
          <li>Send each document to the competent Landgericht for the apostille.</li>
          <li>Commission sworn English translations and keep the translator&apos;s certificate with each original.</li>
        </ol>
        <h2 id="indian-steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Indian steps</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Digital Signature Certificates for directors and the subscriber&apos;s signatory.</li>
          <li>Name reservation and SPICe+ filing with the memorandum, articles and office proof.</li>
          <li>Certificate of Incorporation with PAN and TAN.</li>
          <li>Bank account opening and EUR capital remittance.</li>
          <li>Allotment within 60 days and FC-GPR within 30 days of allotment.</li>
          <li>First auditor within 30 days; INC-20A within 180 days.</li>
        </ol>
        <h2 id="calendar" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Fitting it around German holidays and approvals</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          German groups often need Aufsichtsrat or shareholder approval for a new foreign subsidiary, and summer and Christmas holidays slow notaries and Landgerichte. Indian deadlines, such as the 60-day allotment window, keep running regardless, so approve the capital and the authority to allot in the same resolution as the incorporation.
        </p>
        <h2 id="pitfalls" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where German incorporations stall</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Sending a document to the wrong Landgericht.</li>
          <li>Translations that spell names differently from passports.</li>
          <li>A Handelsregister extract that has aged before filing.</li>
          <li>No resident director chosen when the forms are ready.</li>
        </ul>
        <h2 id="spice-detail" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Inside the SPICe+ incorporation filing</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Element</th><th scope="col" className="border border-gray-300 p-3 text-left">What it covers</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Part A: name approval</th><td className="border border-gray-300 p-3">Up to two names; an approved name is reserved for 20 days</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Part B</th><td className="border border-gray-300 p-3">Registered office, share capital, subscribers, directors and DINs for up to three directors</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">e-MOA and e-AOA</th><td className="border border-gray-300 p-3">The memorandum (objects) and articles (internal rules)</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">AGILE-PRO-S</th><td className="border border-gray-300 p-3">GST, provident fund, ESI, professional tax and the bank account</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          PAN and TAN are issued with the certificate of incorporation. After incorporation: first board meeting and auditor within 30 days, shares allotted within 60 days of receiving capital, FC-GPR within 30 days of allotment, the commencement of business declaration within 180 days, and share certificates within two months.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          The registered office fixes the state of incorporation. German companies most often choose Pune, Bengaluru or Chennai; a registered office service is enough to start, with a utility bill not older than two months and the owner&apos;s consent as proof.
        </p>
        <h2 id="de-sequence" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The German document sequence</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Shareholder or management board resolution approving the Indian company.</li>
          <li>Notarisation of the resolution and of the directors&apos; passports and address proofs.</li>
          <li>A current Handelsregister extract from the register court.</li>
          <li>Apostille from the competent Landgericht for each notarised document.</li>
          <li>Sworn English translation of every German document, with the translation also covered where required.</li>
          <li>Courier of originals to India and scans for the digital signatures.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          Getting this order right is the single biggest factor in staying within 4 to 6 weeks. A document apostilled before translation, or a Handelsregister extract that is no longer current, is the usual cause of delay.
        </p>

        <h2 id="de-name" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Name approval and objects</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The name is reserved through SPICe+ Part A. Indian name approval rejects names too close to existing companies or registered trademarks. Many German groups use the group name followed by a descriptive word and &apos;India Private Limited&apos;. The objects in the memorandum should describe the Indian activity, for example engineering services or distribution of machinery, because banks and tax officers read them.
        </p>

        <h2 id="de-after" className="text-2xl font-bold text-gray-900 mt-12 mb-4">After the certificate of incorporation</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The certificate of incorporation carries the corporate identity number, and PAN and TAN are issued with it. The first board meeting appoints the auditor within 30 days, the bank account is opened, the GmbH remits the capital, shares are allotted within 60 days and FC-GPR follows within 30 days. The company also files its commencement of business declaration within 180 days. See <Link href="/germany-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.
        </p>
        <h2 id="de-office" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Digital signatures and DINs for German directors</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Each director needs a digital signature certificate, issued against the apostilled passport and address proof, and a Director Identification Number. For up to three directors the DIN is allotted through SPICe+ itself; a director added later applies separately. German directors sign all Indian filings digitally, so there is no need to travel to India for the incorporation.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Keep the spelling of each name identical across the passport, the Handelsregister extract and the Indian forms, including umlauts written out (for example ue for ü), or the filing will be queried.
        </p>
        <h2 id="de-timeline" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A realistic timeline</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Allow one to two weeks in Germany for the resolution, notary, Landgericht apostille and sworn translations, a few days for courier, one to two weeks in India for digital signatures, name approval and the SPICe+ filing, and a further one to two weeks for the bank account. Four to six weeks in total is realistic when the documents are right the first time.
        </p>


        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We send a Germany-specific checklist showing which Landgericht apostilles each document, prepare the Indian forms in parallel, file SPICe+ and complete the bank and RBI steps.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>.
        </p>

        <GuideServiceBox path="/germany-to-india/incorporation-steps" />
        <GuideCTA
          title="Incorporating in India from Germany?"
          description="Tell us your target date, and we will send the checklist and a fixed quote."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/germany-to-india/faq"
          seeAllLabel="See all German FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for German parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Federal Foreign Office, Germany: apostille", href: "https://www.auswaertiges-amt.de/en" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Ready to Incorporate from Germany?"
        description="Tell us your sector, share capital and target date, and we'll send the SPICe+ checklist for a German parent and a fixed quote."
      />
    </main>
  )
}
