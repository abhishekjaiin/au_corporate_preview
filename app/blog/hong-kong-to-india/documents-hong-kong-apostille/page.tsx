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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/documents-hong-kong-apostille"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "list", label: "Documents normally required" },
  { id: "process", label: "Process" },
  { id: "pitfalls", label: "Pitfalls" },
  { id: "india-side", label: "On the Indian side" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does India accept a Hong Kong apostille?", a: "Hong Kong applies the Apostille Convention in its own right and India is a party, so it is generally expected to work. Because India objected to China's accession, confirm with the Indian mission or the receiving authority before relying on it." },
  { q: "Who issues apostilles in Hong Kong?", a: "The High Court registry issues Hong Kong apostilles, after a notary public or solicitor certifies private documents." },
  { q: "When do I need consular legalisation instead?", a: "If the receiving Indian body will not accept the apostille, the Indian Consulate General in Hong Kong can legalise the document." },
  { q: "Do I need a notary?", a: "Usually yes for copies of private documents, signatures on resolutions and powers of attorney, before the apostille." },
  { q: "Must Chinese-language documents be translated?", a: "Yes. Provide a certified English translation, and authenticate the translation as the receiving body requires." },
  { q: "How recent must the documents be?", a: "Banks and the Registrar commonly want good standing and similar documents within three to six months. Ask each recipient." },
  { q: "Do directors need Indian credentials?", a: "Yes. Each proposed director needs a Director Identification Number and a Digital Signature Certificate." },
]

const relatedCards = [
  { title: "How to Incorporate a Private Limited Company in India as a Hong Kong Parent: Approval, SPICe+, Bank Account and Post-Incorporation Filings", desc: "Step-by-step route for a Hong Kong parent to set up an Indian private limited company: Press Note 3 approval, name, SPICe+, DIN and DSC, resident director, PAN and TAN, bank account, capital inflow, FC-GPR and first filings.", href: "/hong-kong-to-india/incorporation-steps" },
  { title: "Funding Your Indian Subsidiary from Hong Kong: Equity, Preference Shares, External Borrowing and FEMA Reporting", desc: "How a Hong Kong parent can fund an Indian company: equity share and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return, Press Note 3 and reporting through the authorised dealer bank.", href: "/hong-kong-to-india/funding-and-fema" },
  { title: "What a Hong Kong Parent Must Do at Home: Registers, Annual Filings, Profits Tax Position and Foreign-Sourced Income Rules", desc: "The Hong Kong-side steps for a parent investing in India: no outbound approval or exchange controls, company secretary and registers, significant controllers register, annual return and audit, profits tax on Indian dividends and the FSIE regime.", href: "/hong-kong-to-india/hong-kong-parent-obligations" },
  { title: "Twelve Common Mistakes Hong Kong Companies Make in India and How to Avoid Them", desc: "The most common mistakes of Hong Kong companies entering India: skipping Press Note 3, thin hub structures, late FEMA filings, weak treaty paperwork, secondment tax errors, stale apostilles, unstamped contracts and ignoring the Indian calendar.", href: "/hong-kong-to-india/common-mistakes" },
]

export default function DocumentsHongKongApostillePage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Hong Kong Documents for an Indian Subsidiary: Notary, Apostille or Consular Legalisation and Translation"
        description="How to prepare Hong Kong company and director documents for Indian filings: certified copies, notary public, Hong Kong apostille, when consular legalisation applies, translation and a checklist of documents."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Hong Kong Documents for India: Notarisation, Apostille and Legalisation" },
        ]}
      />

      <GuideHero
        eyebrow="Documents: legalisation"
        title="Hong Kong Documents for an Indian Subsidiary: Notary, Apostille or Consular Legalisation and Translation"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Indian filings by a Hong Kong parent usually need the incorporation documents, a board resolution, a
          good standing evidence, director and shareholder identity papers and a net worth certificate, in
          English and properly authenticated. Hong Kong is a party to the Apostille Convention in its own right
          and issues apostilles through the High Court registry, and India is also a party. Hong Kong apostilles
          are generally expected to be usable in India, but India&apos;s objection to China&apos;s accession to
          the Convention has caused uncertainty for the mainland, so confirm with the Indian mission or the
          receiving authority before relying on one. If the receiving body will not accept an apostille, use
          consular legalisation through the Indian Consulate General in Hong Kong.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="documents-and-apostille" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Convention status", "Hong Kong applies the Apostille Convention separately; India is a party. India objected to China's accession, not to Hong Kong's own extension; confirm for your case"],
                ["Issuer in Hong Kong", "The High Court registry issues Hong Kong apostilles"],
                ["Notarisation", "Hong Kong notary public or solicitor certifies copies and signatures before the apostille"],
                ["Fallback", "Consular legalisation through the Indian Consulate General in Hong Kong if an apostille is refused"],
                ["Language", "English documents are fine; Chinese documents need a certified English translation"],
                ["Validity", "Indian banks and the Registrar usually want documents issued within three to six months"],
                ["Power of attorney", "Notarise, apostille, then follow Indian stamp rules on arrival"],
                ["Digital signatures", "Directors need an Indian Digital Signature Certificate and Director Identification Number"],
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
                <th scope="col" className="border border-gray-300 p-3 text-left">Prepared by</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Authentication</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Certificate of incorporation and business registration certificate", "Companies Registry; Inland Revenue Department", "Certified copy by notary or solicitor, apostille"],
                ["Memorandum and articles", "Hong Kong company", "Certified copy, apostille"],
                ["Certificate of incumbency or good standing", "Company secretary or solicitor; Registrar print where available", "Notary, apostille"],
                ["Board resolution to invest and appoint signatories", "Hong Kong company", "Notary for signatures, apostille"],
                ["Passport copies and address proof of directors", "Individuals", "Notary-certified copies"],
                ["Latest audited accounts or net worth certificate", "Hong Kong CPA", "Notary, apostille"],
                ["Ultimate beneficial owner chart and declarations", "Company", "Signed declaration, notary where requested"],
                ["Power of attorney for Indian signatories", "Company", "Notary, apostille, stamping in India"],
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
          <li>Prepare documents in English with consistent names and addresses.</li>
          <li>Have a Hong Kong notary public or solicitor certify copies and witness signatures.</li>
          <li>Obtain the apostille from the High Court registry for each public or notarised document.</li>
          <li>Confirm with the Indian mission or the receiving authority that a Hong Kong apostille will be accepted. If not, use consular legalisation through the Indian Consulate General in Hong Kong.</li>
          <li>Courier originals to India; scan copies for the online filing. Keep the originals available for the bank.</li>
        </ol>

        <h2 id="pitfalls" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Pitfalls</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Name mismatch between the passport, the incorporation certificate and the resolution. Indian systems reject near matches.</li>
          <li>Chinese-language documents without a certified English translation.</li>
          <li>Stale documents: re-issue anything past the validity the bank or Registrar accepts.</li>
          <li>Missing stamp duty on a power of attorney or agreement on arrival in India.</li>
        </ul>

        <h2 id="india-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">On the Indian side</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Foreign directors need a DIN and Digital Signature Certificate, and the company needs a registered
          office with proof. See{" "}
          <Link href="/hong-kong-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">incorporation steps</Link>.
          Documents for banking and for FEMA reporting are covered in{" "}
          <Link href="/hong-kong-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.ird.gov.hk/eng/welcome.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Inland Revenue Department (Hong Kong)</a>,{" "}
          <a href="https://www.cr.gov.hk/en/home/index.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Companies Registry (Hong Kong)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/hong-kong-to-india/documents-hong-kong-apostille" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/hong-kong-to-india/faq"
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
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
            { label: "Hong Kong Judiciary (apostille information)", href: "https://www.judiciary.hk/" },
            { label: "Ministry of External Affairs (India)", href: "https://www.mea.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Hong Kong
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Getting Hong Kong Documents Ready for India?"
        description="Tell us which documents your subsidiary needs, and we'll map the notary, High Court apostille and translation steps."
      />
    </main>
  )
}
