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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/documents-handelsregister-apostille"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "list", label: "The document set for the parent" },
  { id: "apostille", label: "Notary, apostille and translation: how it works in Germany" },
  { id: "directors", label: "Directors: identity, address and signatures" },
  { id: "beneficial", label: "Showing who owns the parent" },
  { id: "timeline", label: "Timing" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What documents does a German company need to incorporate a subsidiary in India?", a: "A current Handelsregister extract, the articles of association, a resolution approving the investment and the director appointments, a certificate of representation and identity and address proof for foreign directors, notarised, apostilled and translated into English." },
  { q: "Which German documents need an apostille for an Indian subsidiary, and who issues it?", a: "The German parent's Handelsregister extract, its articles of association, the resolution approving the investment, and the notarised passports and address proofs of its directors and authorised signatory all need an apostille. Germany has no central apostille office: the Landgericht for the notary's district apostilles notarised documents, and the Landgericht of the register court apostilles Handelsregister extracts. Each document then needs a sworn English translation, and India and Germany are both parties to the Apostille Convention, so no Indian embassy legalisation is needed." },
  { q: "Does India accept a German apostille?", a: "Yes. India and Germany are both parties to the Hague Apostille Convention, so no consular legalisation by the Indian embassy is needed." },
  { q: "Do my German documents need to be translated into English?", a: "Usually yes. Indian authorities need English, so use a sworn translator and attach the translation to the apostilled original." },
  { q: "What is a Vertretungsbescheinigung?", a: "A notary's certificate, based on the register, that confirms who may represent the company. It helps the Indian bank and the Registrar verify the signatory." },
  { q: "Does a German parent have to declare its beneficial owners in India?", a: "Yes. The Indian subsidiary must identify significant beneficial owners (10% or more) and file Form BEN-2. The Transparenzregister extract and an ownership chart support it." },
]

const relatedCards = [
  { title: "Incorporating a Subsidiary in India from Germany: Who Does What, in What Order", desc: "A split plan for a German parent forming an Indian private limited company: what the German team does, what the Indian team does, SPICe+, bank account, FC-GPR and the first 180 days.", href: "/germany-to-india/incorporation-steps" },
  { title: "Which Structure Should a German Company Use in India? Subsidiary, Joint Venture, Project Office, Branch, LLP or Employer of Record", desc: "A decision guide for German companies: wholly owned subsidiary, joint venture with an Indian partner, project office, branch, liaison office, LLP and EOR, with tests, tax results, a GmbH & Co. KG warning and a choice by business model.", href: "/germany-to-india/structure-options" },
  { title: "What a German Parent Company Owes at Home When It Owns an Indian Subsidiary", desc: "German-side duties for a parent with an Indian subsidiary: corporation and trade tax, the 95% participation exemption, notification of foreign holdings, Bundesbank reports, CFC rules, HGB consolidation, anti-bribery law and Pillar Two.", href: "/germany-to-india/german-parent-obligations" },
  { title: "Common Mistakes German Companies Make in India and How to Avoid Them", desc: "The most frequent mistakes German companies make when setting up in India: late FEMA filings, missing forms for treaty relief, works council surprises, apostille errors, PE creation and transfer pricing gaps.", href: "/germany-to-india/common-mistakes" },
]

export default function DocumentsHandelsregisterApostillePage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Documents a German Company Must Prepare to Set Up an Indian Subsidiary: Handelsregister, Notary, Apostille and Translation"
        description="The document checklist for a German parent forming an Indian subsidiary: Handelsregister extract, articles of association, shareholder resolution, certificate of representation by a notary, apostille from the Landgericht and English translation."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "Documents for an Indian Subsidiary: Handelsregister Extract, Notary and Apostille from Germany" },
        ]}
      />

      <GuideHero
        eyebrow="Setup: documents and apostille"
        title="Documents a German Company Must Prepare to Set Up an Indian Subsidiary: Handelsregister, Notary, Apostille and Translation"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A German parent needs a certified set of company documents for the Indian incorporation: a current
          Handelsregister extract, the articles of association, a resolution approving the investment, and
          identity and address proof for each foreign director, notarised and apostilled. Germany has no central
          apostille office, so the Landgericht for the notary&apos;s or register&apos;s district issues it, and
          because German-language records need an English version, a sworn translation is usually the last step.
          Start this early, because translation and court processing can set the pace.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="documents-and-apostille" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Apostille authority", "The Landgericht (regional court) for the notary's district; for register extracts, the Landgericht of the register court"],
                ["Convention", "Hague Apostille Convention, in force for Germany since 13 February 1966; India is also a party"],
                ["Company records", "Handelsregister extract (HRB number, Geschäftsführer, power of representation, share capital), articles of association, shareholder list"],
                ["Notary", "Certifies signatures and can issue a certificate of representation from the register under Section 21 of the Federal Notary Code"],
                ["Approval", "Resolution of the managing directors or shareholders approving the investment, the Indian name, the directors and a signatory"],
                ["Language", "German documents need a certified English translation by a sworn translator, attached to the apostilled original"],
                ["Validity", "Indian authorities look for recent documents; address proofs are normally under two months old"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="list" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The document set for the parent</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Document</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">From</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treatment</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Handelsregister extract (current print)", "Handelsregister portal", "Certified extract, then apostille from the Landgericht; keep the order recent"],
                ["Articles of association (Gesellschaftsvertrag or Satzung)", "Parent", "Certified copy by the managing director or a notary, apostilled, translated"],
                ["Resolution approving the Indian investment", "Managing directors or shareholders", "Signed, notarised, apostilled, translated"],
                ["Certificate of representation (Vertretungsbescheinigung)", "Notary, based on the register", "Shows who may sign for the company; apostille and English version"],
                ["Power of attorney for the Indian signatory, if used", "Parent", "Notarised, apostilled, translated"],
                ["Transparenzregister extract and ownership chart", "Parent", "Needed for the bank and the Indian beneficial owner filing"],
                ["Latest annual accounts, if the bank asks", "Parent", "Often requested by Indian banks; apostille not usually required"],
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

        <h2 id="apostille" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Notary, apostille and translation: how it works in Germany</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Germany has no central apostille authority. Each Bundesland handles documents from its own courts, and
          the usual route is the Landgericht for the notary&apos;s district for notarised documents and the
          Landgericht of the register court for register extracts. The Hague Apostille Convention applies
          between Germany and India, so no consular legalisation by the Indian embassy is needed.
        </p>

        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li>Order a certified Handelsregister extract and have a German notary certify the signatures on private documents, such as the resolution and any power of attorney.</li>
          <li>Ask the notary for the certificate of representation, in English if the notary offers it.</li>
          <li>Submit the documents to the Landgericht for the apostille. Allow several working days, longer in busy courts.</li>
          <li>Commission a sworn translation into English that refers to the apostilled original, so the apostille is not detached from the text.</li>
          <li>Courier the originals or scans to the Indian incorporation team. Keep the originals with the parent.</li>
        </ol>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          <strong>Ask the Indian side first.</strong> Confirm which documents they will file or show to the bank
          before you order anything. An unneeded apostille and translation costs time and money, and a missing
          one holds up the filing.
        </div>

        <h2 id="directors" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Directors: identity, address and signatures</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>German director or signatory:</strong> passport copy and address proof, such as a bank statement or utility bill, issued within the last two months. A residents&apos; registration certificate does not always meet the Indian form.</li>
          <li><strong>Notarised copies:</strong> a notary certifies the copy, then the apostille is added. Keep the names on all documents identical.</li>
          <li><strong>DSC and DIN:</strong> each proposed director needs a Digital Signature Certificate and a Director Identification Number. A foreign director&apos;s DSC usually needs attested documents or video verification.</li>
          <li><strong>Resident Director:</strong> at least one director must have stayed in India for 182 days or more in the financial year. See <Link href="/germany-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">the incorporation guide</Link>.</li>
        </ul>

        <h2 id="beneficial" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Showing who owns the parent</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian law asks for significant beneficial owners, meaning individuals who hold or control 10% or more
          of the company directly or through others. A GmbH owned through a family holding, a foundation or a
          GmbH &amp; Co. KG should prepare an ownership chart, use the Transparenzregister extract as support
          and be ready to file Form BEN-2 after the subsidiary is formed. Where an ultimate owner is in or a
          citizen of a country sharing a land border with India, Press Note 3 of 2020 can require government
          approval, so review ownership before you commit.
        </p>

        <h2 id="timeline" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Timing</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>German side:</strong> allow several working days for notary appointments, the Landgericht and the translator. Plan for German public holidays, which differ by state.</li>
          <li><strong>Time zone:</strong> India is three and a half hours ahead of Germany in summer and four and a half in winter, so a morning call in Germany reaches the Indian bank in the afternoon.</li>
          <li><strong>Rework:</strong> the usual delays are name mismatches between the passport and the register, an extract that is too old, and a translation that omits the apostille text.</li>
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

        <GuideServiceBox path="/germany-to-india/documents-handelsregister-apostille" />
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
            { label: "German Company Formation: apostille and document legalisation in Germany (secondary source)", href: "https://germancompanyformation.com/guides/apostille-germany-document-legalisation" },
            { label: "Handelsregister (German commercial register portal)", href: "https://www.handelsregister.de/" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
            { label: "German Embassy New Delhi: services and legalisation", href: "https://india.diplo.de/in-en/service/2775256-2775256" },
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
        title="Getting German Documents Ready for India?"
        description="Tell us which documents your subsidiary needs, and we'll map the Handelsregister, notary, Landgericht apostille and sworn translation steps."
      />
    </main>
  )
}
