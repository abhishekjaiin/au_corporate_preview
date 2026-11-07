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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/documents-apostille-and-sworn-translation"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "why", label: "What the Indian recipient needs from the paper" },
  { id: "list", label: "Documents normally required" },
  { id: "apostille", label: "How the apostille works in Spain" },
  { id: "translation", label: "Sworn translation into English" },
  { id: "pitfalls", label: "Pitfalls specific to Spanish documents" },
  { id: "timeline", label: "How long the paperwork takes" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does India accept a Spanish apostille?", a: "Spain and India are both parties to the Apostille Convention, so an apostille from the competent Spanish authority is the normal route and consular legalisation is not usually needed." },
  { q: "Which Spanish authority issues the apostille?", a: "It depends on the document: notarial documents are generally apostilled through the notarial college, and other documents by the competent judicial or administrative body. Ask the notary." },
  { q: "Do I need a sworn translation?", a: "Yes for Spanish-language documents. A sworn translator appointed by the Spanish Ministry of Foreign Affairs is the usual choice." },
  { q: "Do I need a notary for a board resolution?", a: "Usually for the signatures, so that the document can be apostilled. The notary also helps with the power of attorney." },
  { q: "How recent must a Mercantile Registry certificate be?", a: "Indian banks and the Registrar commonly accept certificates issued within three to six months. Ask each recipient." },
  { q: "Do the directors need Indian credentials?", a: "Yes. Each proposed director needs a DIN and a Digital Signature Certificate before the incorporation form is filed." },
  { q: "What if the Indian recipient refuses an apostille?", a: "Ask it to state the requirement in writing and approach the Indian Embassy in Madrid or the Consulate General in Barcelona." },
  { q: "Can a lawyer in India sign for my company?", a: "Only under a power of attorney that has been notarised, apostilled, translated and stamped in India." },
]

const relatedCards = [
  { title: "Step-by-Step Incorporation of an Indian Private Limited Company by a Spanish Parent: From Name Approval to the Foreign Investment Filing", desc: "The exact steps to incorporate an Indian private limited company when the shareholder is Spanish: name, DIN and DSC, the SPICe+ form with AGILE-PRO-S, charter documents, PAN and TAN, bank account, share allotment, FC-GPR, first auditor and commencement of business.", href: "/spain-to-india/incorporation-steps" },
  { title: "What a Spanish Parent Must Do at Home: Registro de Inversiones Exteriores Filings, Participation Exemption, CFC Rules and Corporate Records", desc: "The Spanish-side steps for a parent investing in India: declarations to the Registro de Inversiones Exteriores (forms D-5A and D-8), board and notarial formalities, the participation exemption, CFC rules, related-party documentation and the beneficial ownership register.", href: "/spain-to-india/spanish-parent-obligations" },
  { title: "How Long Does It Take a Spanish Company to Set Up in India? A Week-by-Week Timeline from Board Decision to First Invoice", desc: "A realistic schedule for a Spanish parent: documents and apostille in Spain, name and incorporation in India, bank account, share capital and foreign investment filing, commencement of business, first audit and first returns. Shows what runs in parallel and what causes delay.", href: "/spain-to-india/how-long-it-takes-to-set-up-from-spain" },
  { title: "Funding an Indian Subsidiary from Spain: Share Capital, Shareholder Loans, Fair Value Pricing Rules, FC-GPR, FC-TRS and the Annual FLA Return", desc: "How a Spanish parent can put money into an Indian company: equity under the Automatic Route, convertible instruments, external commercial borrowing, intra-group financing, the FEMA pricing rule, the 60-day and 30-day deadlines, the FLA return and the Spanish declarations that match.", href: "/spain-to-india/funding-and-fema" },
]

export default function DocumentsApostilleAndSwornTranslationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Preparing Spanish Documents for an Indian Subsidiary: Escritura, Registro Mercantil Extracts, Apostille and Sworn Translation into English"
        description="How to prepare Spanish company and director documents for Indian filings: why Spain and India both accept the apostille, notarial deeds and Mercantile Registry certificates, sworn translation, the Indian missions in Madrid and Barcelona, and a document checklist."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "Spanish Documents for India: Notary, Apostille and Sworn Translation" },
        ]}
      />

      <GuideHero
        eyebrow="Documents: apostille and translation"
        title="Preparing Spanish Documents for an Indian Subsidiary: Escritura, Registro Mercantil Extracts, Apostille and Sworn Translation into English"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Spain and India are both parties to the Apostille Convention, so a Spanish public document can be
          recognised in India with an apostille and without consular legalisation. The usual Spanish route is a
          notarial document (escritura or acta) or a certificate from the Mercantile Registry (certificación del
          Registro Mercantil), apostilled by the competent authority, with a sworn translation into English
          (traducción jurada) because Indian authorities need English. The apostille covers the signature of the
          notary or official; it does not turn a weak document into a strong one, so decide first what the
          Indian recipient needs: proof of existence, proof of authority, proof of ownership or proof of net
          worth. Keep names, addresses and identity numbers consistent in every paper.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="documents-and-apostille" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Convention status", "Spain and India are both parties to the Apostille Convention"],
                ["Public documents", "Mercantile Registry certificate, notarial deeds and acts; apostille from the competent authority for the document type"],
                ["Private documents", "Board resolutions and powers of attorney: notarised first, then apostilled"],
                ["Translation", "Sworn translation into English; the translator's signature is also authenticated if the recipient requires"],
                ["Validity", "Registry certificates are usually accepted for three to six months"],
                ["Identity", "Passports with the NIE or DNI number as used in Spain; consistent spelling of names"],
                ["Indian missions", "Embassy of India in Madrid and Consulate General in Barcelona for visas and attestation queries"],
                ["Indian credentials", "Each director needs a DIN and a Digital Signature Certificate"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the Indian recipient needs from the paper</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The same Spanish document has different jobs depending on who in India reads it. The Registrar of
          Companies, filing a SPICe+ application, mainly wants to know that the foreign shareholder exists, who
          signs for it and who owns it. The Indian bank, opening the account, wants beneficial owners, source of
          funds and the authority of the person who gives instructions. The authorised dealer bank, receiving
          capital, wants evidence of the remitter and the purpose. The tax department wants the tax residency
          certificate. A clean file starts with a map of which document serves which reader, so that nothing is
          apostilled twice or forgotten.
        </p>

        <h2 id="list" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documents normally required</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Document</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Spanish source</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Authentication</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Certificate of the Mercantile Registry (existence, directors, registered office)", "Registro Mercantil", "Apostille; sworn translation"],
                ["Deed of incorporation and bylaws", "Notary and Registry", "Notarised copy; apostille; sworn translation"],
                ["Board resolution to invest in India, naming signatories and Indian directors", "Spanish company, certified by the secretary with the chair's approval", "Notarised signatures; apostille; sworn translation"],
                ["Power of attorney for the person who will sign in India", "Notarial deed", "Apostille; sworn translation; stamping on arrival in India"],
                ["Passport copies and address proof of directors and beneficial owners", "Individuals", "Notarised copies; translation of non-English parts"],
                ["Latest annual accounts or net worth certificate", "Spanish company, auditor or accountant", "Signature notarised; apostille; translation"],
                ["Tax residency certificate", "Agencia Tributaria", "Apostille not usually required for tax use; confirm with the Indian payer"],
                ["Beneficial ownership chart and declaration", "Company", "Signed declaration; notarised where the bank asks"],
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

        <h2 id="apostille" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the apostille works in Spain</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Spain issues apostilles through several authorities depending on the document. Notarial documents are
          generally apostilled by the notarial college of the region, documents from the courts and some
          registries by the competent judicial or administrative bodies, and documents from the public
          administration by the ministry concerned. The right authority for a Mercantile Registry certificate or
          a notarial deed should be confirmed with the notary at the time of signing. Once apostilled, the
          document does not need a stamp from the Indian Embassy or Consulate. If an Indian recipient does not
          accept an apostille for a particular use, ask it to state the requirement in writing and approach the
          Embassy of India in Madrid or the Consulate General in Barcelona.
        </p>

        <h2 id="translation" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sworn translation into English</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A Spanish document is useless to an Indian registrar unless it is in English. Use a sworn translator,
          appointed by the Spanish Ministry of Foreign Affairs, so that the translation carries a signature and
          seal that Spanish and many foreign authorities respect. Check three details: the translation must
          follow the apostille so that the apostille is translated as well; names of directors must be spelled
          exactly as in the passport; and numbers, dates and amounts must be reviewed against the original,
          because a transposed digit in a share capital figure will delay the filing. For documents that are
          already bilingual, ask the Indian recipient whether a Spanish-only apostille page is enough.
        </p>

        <h2 id="pitfalls" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Pitfalls specific to Spanish documents</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Spanish names with two surnames, and the use of particles such as de or del, appearing differently in the passport, registry and bank forms. Settle one form and use it throughout.</li>
          <li>Powers of attorney granted in broad terms; Indian banks and the Registrar often want a power that names the specific acts, such as signing the SPICe+ forms or opening an account.</li>
          <li>Registry certificates that are older than the period the bank accepts.</li>
          <li>Notarial copies of originals that remain in Spain when the Indian side asks for the original.</li>
          <li>Missing stamp duty on powers of attorney and agreements when they arrive in India. See <Link href="/spain-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">incorporation steps</Link>.</li>
        </ul>

        <h2 id="timeline" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How long the paperwork takes</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Allow two to four weeks from a final draft to a complete, apostilled and translated set, depending on
          notary availability, the apostille authority and the translator&apos;s workload. Start the documents
          in parallel with the Indian name reservation and director credentials, so that the filing is not
          waiting on them. See{" "}
          <Link href="/spain-to-india/how-long-it-takes-to-set-up-from-spain" className="text-blue-800 font-semibold hover:underline">the timeline guide</Link>.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://sede.agenciatributaria.gob.es/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Agencia Tributaria (Spain)</a>,{" "}
          <a href="https://comercio.gob.es/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Spanish Ministry of Economy, Trade and Business</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/spain-to-india/documents-apostille-and-sworn-translation" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/spain-to-india/faq"
          seeAllLabel="See all 179 FAQs"
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
            { label: "Consulate General of India, Barcelona", href: "https://www.cgibarcelona.gov.in/" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and Spanish
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Getting Spanish Documents Ready for India?"
        description="Tell us which documents your subsidiary needs, and we'll map the notary, apostille and sworn translation steps."
      />
    </main>
  )
}
