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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/spanish-parent-obligations"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "steps", label: "The Spanish steps before and after investing" },
  { id: "forms", label: "What the Spanish forms ask for" },
  { id: "tax", label: "Tax on Indian income in Spain" },
  { id: "group", label: "Group reporting and transfer pricing" },
  { id: "ownership", label: "Beneficial ownership and records" },
  { id: "foreign", label: "Using Spanish public support" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does a Spanish company need permission to invest in India?", a: "The official guide to Spanish investment abroad describes no prior authorisation for ordinary investments. A declaration to the Registro de Inversiones Exteriores is required after the investment." },
  { q: "When must the Spanish investment be declared?", a: "Within one month of the transaction for acquisitions of 10% or more, on form D-5A, and disposals on D-5B." },
  { q: "What is the annual D-8 report?", a: "A report on the foreign company filed within seven months of its year end, where the Spanish holder has at least 10% and the foreign capital or net equity exceeds EUR 1.5 million, or the company is a holding." },
  { q: "Do intra-group loans need a declaration?", a: "Loans from a Spanish company above EUR 1 million with a term over one year are declared, and so are repayments." },
  { q: "Are Indian dividends taxed in Spain?", a: "Generally largely exempt for a qualifying holding under the participation exemption. Confirm the current percentage and conditions with a Spanish adviser." },
  { q: "Do CFC rules apply to an Indian operating company?", a: "Rarely, because an operating company that pays normal Indian tax is not the usual target, but passive income and holding entities should be reviewed." },
  { q: "What Spanish records does India ask for?", a: "Mercantile Registry extracts, the bylaws, a board resolution, beneficial ownership information and recent accounts." },
  { q: "Who prepares the Spanish declarations?", a: "Your Spanish adviser or the bank handling the transfer. The Indian adviser supplies the Indian evidence." },
]

const relatedCards = [
  { title: "Preparing Spanish Documents for an Indian Subsidiary: Escritura, Registro Mercantil Extracts, Apostille and Sworn Translation into English", desc: "How to prepare Spanish company and director documents for Indian filings: why Spain and India both accept the apostille, notarial deeds and Mercantile Registry certificates, sworn translation, the Indian missions in Madrid and Barcelona, and a document checklist.", href: "/spain-to-india/documents-apostille-and-sworn-translation" },
  { title: "Funding an Indian Subsidiary from Spain: Share Capital, Shareholder Loans, Fair Value Pricing Rules, FC-GPR, FC-TRS and the Annual FLA Return", desc: "How a Spanish parent can put money into an Indian company: equity under the Automatic Route, convertible instruments, external commercial borrowing, intra-group financing, the FEMA pricing rule, the 60-day and 30-day deadlines, the FLA return and the Spanish declarations that match.", href: "/spain-to-india/funding-and-fema" },
  { title: "India-Spain Double Taxation Agreement Explained: 15% Dividends, 10% Royalties and Technical Fees, the 6-Month Site PE, the 10% Share-Gain Rule and the MLI", desc: "The India-Spain tax treaty explained for a Spanish parent with India as source state and Spain as residence state: dividend, interest, royalty and technical fee rates, permanent establishment, capital gains on Indian shares, credit and participation exemption, limitation of benefits, the MLI principal purpose test and how to claim relief.", href: "/spain-to-india/india-spain-dtaa" },
  { title: "Step-by-Step Incorporation of an Indian Private Limited Company by a Spanish Parent: From Name Approval to the Foreign Investment Filing", desc: "The exact steps to incorporate an Indian private limited company when the shareholder is Spanish: name, DIN and DSC, the SPICe+ form with AGILE-PRO-S, charter documents, PAN and TAN, bank account, share allotment, FC-GPR, first auditor and commencement of business.", href: "/spain-to-india/incorporation-steps" },
]

export default function SpanishParentObligationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="What a Spanish Parent Must Do at Home: Registro de Inversiones Exteriores Filings, Participation Exemption, CFC Rules and Corporate Records"
        description="The Spanish-side steps for a parent investing in India: declarations to the Registro de Inversiones Exteriores (forms D-5A and D-8), board and notarial formalities, the participation exemption, CFC rules, related-party documentation and the beneficial ownership register."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "Spanish Parent Obligations: Foreign Investment Declarations, Tax Treatment and Reporting" },
        ]}
      />

      <GuideHero
        eyebrow="Spanish side: parent duties"
        title="What a Spanish Parent Must Do at Home: Registro de Inversiones Exteriores Filings, Participation Exemption, CFC Rules and Corporate Records"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Spain does not ask a company to obtain prior permission to invest in India, but it does ask for a
          declaration. A Spanish resident that acquires 10% or more of a foreign company must declare the
          investment to the Registro de Inversiones Exteriores within one month of the transaction, using form
          D-5A, and later declare disposals on D-5B. Intra-group financing above EUR 1 million with a term over
          a year is also declared, and an annual report (form D-8) is due within seven months of the foreign
          company&apos;s year end where the holding is at least 10% and the foreign company&apos;s capital or
          net equity exceeds EUR 1.5 million. Alongside the declaration, the Spanish parent needs a board
          decision, correct corporate records, a view on how the Indian income will be taxed at home and, for
          larger groups, related-party documentation. This page is a map for your Spanish adviser, who must
          confirm current thresholds and forms.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="parent-obligations" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Prior approval", "None described in the official guide for ordinary investments abroad"],
                ["Declaration", "Form D-5A for acquisitions and capital contributions of 10% or more, within one month; D-5B for disposals; D-5A also for branches"],
                ["Annual report", "Form D-8 within seven months of the foreign company's year end where the holding is at least 10% and capital or net equity is above EUR 1.5 million, or for holding companies"],
                ["Intra-group financing", "Declared if above EUR 1 million and over one year; repayments declared too"],
                ["Corporate steps", "Board resolution; shareholder approval where the bylaws require it; notarial documents for powers of attorney"],
                ["Tax", "General corporate income tax rate of 25%; participation exemption for qualifying holdings; credit for foreign tax otherwise"],
                ["Documentation", "Related-party documentation and country-by-country reporting for larger groups"],
                ["Beneficial ownership", "Registro de Titularidades Reales and the Mercantile Registry records must match the ownership chain given to India"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Spanish steps before and after investing</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Check the bylaws and any shareholders&apos; agreement for limits on foreign investment, guarantees or loans, and obtain the required approvals.</li>
          <li>Pass a board resolution authorising the Indian investment, naming the signatories and the proposed Indian directors, and recording the commercial reason, which later supports the treaty position.</li>
          <li>Execute powers of attorney before a Spanish notary where Indian filings will be signed by an attorney, and arrange the apostille. See <Link href="/spain-to-india/documents-apostille-and-sworn-translation" className="text-blue-800 font-semibold hover:underline">documents and apostille</Link>.</li>
          <li>After the investment is made, file the declaration of the investment (form D-5A) within one month through the Spanish registry&apos;s procedure, usually via the bank or electronically; keep the evidence of the Indian share capital.</li>
          <li>Declare intra-group loans above EUR 1 million and term over one year, and later repayments.</li>
          <li>Each year, file the D-8 report where it applies, and include the Indian subsidiary in the group&apos;s consolidation, transfer pricing and tax files.</li>
        </ol>

        <h2 id="forms" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the Spanish forms ask for</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Form and trigger</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Timing</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes for India</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Acquisition or capital contribution of 10% or more", "D-5A", "Within one month of the transaction", "Use the date the Indian shares are allotted"],
                ["Disposal of the holding", "D-5B", "Within one month", "Also declare the disposal that brings the holding below 10%"],
                ["Branch investment", "D-5A", "Within one month", "Applies to every investment in a foreign branch"],
                ["Annual report", "D-8", "Within seven months of the foreign year end", "The Indian year ends on 31 March, so the report is due by 31 October"],
                ["Intra-group loan above EUR 1 million and over one year", "Declaration of the loan", "Within the declared period", "Repayments must also be declared"],
                ["Investment linked to a non-cooperative jurisdiction", "Declaration whatever the amount", "Within one month", "Check if any intermediary is in such a place"],
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

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax on Indian income in Spain</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Spain taxes resident companies on worldwide income, but income from qualifying foreign holdings is
          largely exempt. A holding of at least 5% (or an acquisition cost above EUR 20 million) held for at
          least a year, in a company that has been subject abroad to a tax of a similar nature and rate,
          generally qualifies for the participation exemption on dividends and on gains. Spain&apos;s rules have
          been amended since 2021, with the exempt percentage and the treatment of holding companies changing,
          so a Spanish adviser should model the real figures. For fees, royalties and interest, which are
          ordinary income in Spain, the Indian withholding tax is relieved by a credit up to the Spanish tax on
          the same income.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Controlled foreign company rules can attribute some income of a foreign subsidiary to its Spanish
          parent when the subsidiary earns passive income and is taxed at a low level. An Indian operating
          company paying normal Indian tax at a rate comparable to the Spanish rate is unlikely to be caught,
          but a company with large passive income or an intermediate holding entity should be reviewed.
        </p>

        <h2 id="group" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Group reporting and transfer pricing</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Spain requires documentation of related-party transactions; larger groups prepare a master file, a local file and, above the group threshold, country-by-country reporting. The Indian subsidiary&apos;s transactions with the Spanish parent belong in the file, and its prices should be consistent with the Indian study. See <Link href="/spain-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li>EU rules on minimum taxation of large groups and on reporting of cross-border arrangements may apply to the group; they are outside Indian law, and your Spanish adviser should confirm them.</li>
          <li>The Indian year end (31 March) does not match the Spanish calendar year, so plan a bridge for consolidation and for the D-8 report.</li>
        </ul>

        <h2 id="ownership" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Beneficial ownership and records</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India&apos;s banks, the Registrar of Companies and the Reserve Bank all ask who owns the Spanish
          parent. Spain keeps a register of beneficial owners and the Mercantile Registry holds the
          company&apos;s records, and these should be consistent with the ownership chart you give India. Gaps
          or mismatches here are a common cause of delays in Indian bank onboarding. Keep up-to-date extracts
          and a signed beneficial ownership declaration.
        </p>

        <h2 id="foreign" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Using Spanish public support</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Spanish groups sometimes use export credit, internationalisation grants or chamber of commerce
          programmes when entering new markets. These programmes have their own conditions and reporting, which
          can include evidence of the Indian company&apos;s establishment. If you plan to use any, tell your
          Indian adviser early so the documents match.
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

        <GuideServiceBox path="/spain-to-india/spanish-parent-obligations" />
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
            { label: "Spanish Ministry of Economy, Trade and Business: guide to declaring foreign investments", href: "https://comercio.gob.es/es-es/inversiones_exteriores/declaraciones_inversion/Documents/Guia_Explicativa_Regimen_Declaracion_Inversiones_Exteriores.pdf" },
            { label: "Spanish Ministry of Economy, Trade and Business", href: "https://comercio.gob.es/" },
            { label: "Agencia Tributaria (Spain)", href: "https://sede.agenciatributaria.gob.es/" },
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
        title="Reporting on the Indian Subsidiary in Spain?"
        description="Tell us how the group reports, and we'll supply the Indian figures your Spanish declarations and tax filings need."
      />
    </main>
  )
}
