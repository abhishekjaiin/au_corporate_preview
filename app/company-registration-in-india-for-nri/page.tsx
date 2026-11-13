import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideFaqList } from "@/components/guide/GuideFaqList"
import { GuideRelatedCards } from "@/components/guide/GuideRelatedCards"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideSources } from "@/components/guide/GuideSources"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/company-registration-in-india-for-nri"

const toc = [
  { id: "who", label: "Who this applies to" },
  { id: "structures", label: "Which structure: private limited company, OPC or LLP" },
  { id: "repatriation-choice", label: "Repatriation or non-repatriation basis: the most important choice" },
  { id: "documents", label: "Documents an NRI or foreign national needs" },
  { id: "steps", label: "Step by step" },
  { id: "resident-director", label: "The resident director requirement" },
  { id: "banking", label: "Bank accounts and funding" },
  { id: "tax", label: "Tax for the company and the NRI owner" },
  { id: "compliance", label: "Compliance after registration" },
  { id: "returning", label: "Planning a return to India" },
  { id: "family", label: "Family members, nominees and joint ownership" },
  { id: "timeline-fees", label: "Timeline and fees" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can an NRI register a company in India?", a: "Yes. An NRI can register a private limited company, a One Person Company or, in eligible sectors, an LLP, and own up to 100% in most sectors." },
  { q: "Can a foreign national own 100% of an Indian company?", a: "Yes, in most sectors under the Automatic Route; citizens of countries sharing a land border with India need government approval first." },
  { q: "Does an NRI need to visit India to register a company?", a: "No. Documents are signed and authenticated abroad and the filings are made online." },
  { q: "Can an NRI be the only director?", a: "No. A private limited company needs two directors, and at least one must have stayed in India for 182 days in the financial year." },
  { q: "Can an NRI form a One Person Company?", a: "Yes. NRIs have been allowed to incorporate One Person Companies since 2021." },
  { q: "What is the difference between repatriation and non-repatriation investment?", a: "Repatriation-basis investment is foreign investment reported to the RBI and can be taken abroad; non-repatriation investment is treated as domestic and its proceeds stay largely in India." },
  { q: "Which bank account should an NRI use to invest?", a: "An NRE account or a direct remittance from abroad for a repatriation-basis investment; an NRO account for a non-repatriation investment." },
  { q: "How long does company registration take for an NRI?", a: "About 4 to 6 weeks from complete documents, plus time for bank onboarding." },
  { q: "How is a dividend to an NRI taxed?", a: "In India at about 20% plus surcharge and cess, or the lower tax treaty rate with a tax residency certificate and Form 41." },
  { q: "How much does company registration cost?", a: "AU Corporate offers the best pricing with better work support, and the first consultation is free." },
]

const relatedCards = [
  { title: "Resident director services", desc: "A professional resident director for your Indian company.", href: "/resident-director-services-india" },
  { title: "India subsidiary registration", desc: "Incorporation for foreign companies.", href: "/india-subsidiary-registration" },
  { title: "FEMA and RBI compliance", desc: "FC-GPR, FLA and other filings.", href: "/fema-rbi-compliance" },
  { title: "NRI and OCI founders of US companies", desc: "When a US company founded by NRIs invests in India.", href: "/usa-to-india/nri-and-oci-founders-of-us-companies-investing-in-india" },
]

export default function CompanyRegistrationInIndiaForNriPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"Company Registration in India for NRIs and Foreign Nationals: Structures, Documents, FEMA and Tax"}
        description={"How NRIs, OCIs and foreign nationals register a company in India: private limited, OPC or LLP, repatriation vs non-repatriation investment, documents, PAN, bank accounts, the resident director rule and tax."}
        datePublished="2026-11-07"
        dateModified="2026-11-07"
        inLanguage="en"
      />

      <Breadcrumb items={[{ label: "Company Registration for NRIs" }]} />

      <GuideHero eyebrow={"Service: company registration for NRIs"} title={"Company Registration in India for NRIs and Foreign Nationals: Structures, Documents, FEMA and Tax"} updated="7 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An NRI, an OCI cardholder or a foreign national can register a company in India and own up to 100% of it in most sectors. The usual vehicle is a private limited company, and NRIs can also form a One Person Company. The key decision for an NRI is whether the investment is made on a repatriation basis, treated as foreign investment and reported to the RBI, or on a non-repatriation basis, treated like domestic investment. Every company still needs a director who stayed in India for 182 days in the financial year. Documents are signed abroad and authenticated, the company is incorporated online in about 4 to 6 weeks, and AU Corporate handles the filings, FEMA reporting and the first year&apos;s compliance.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="who" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who this applies to</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Person</th><th scope="col" className="border border-gray-300 p-3 text-left">How Indian law treats the investment</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Non-resident Indian (NRI): an Indian citizen living abroad</th><td className="border border-gray-300 p-3">Can invest on a repatriation basis (foreign investment) or a non-repatriation basis (treated as domestic investment)</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Overseas Citizen of India (OCI) cardholder</th><td className="border border-gray-300 p-3">Same choice as an NRI</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Foreign national without OCI</th><td className="border border-gray-300 p-3">Foreign direct investment under the FDI Policy, on a repatriation basis</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Citizen of a country sharing a land border with India</th><td className="border border-gray-300 p-3">Government approval under Press Note 3 before investing</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Returning NRI who becomes resident</th><td className="border border-gray-300 p-3">Treated as a resident from the date residence changes; existing investments are reviewed</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          The rest of this guide focuses on NRIs and OCIs, with notes on where the position differs for foreign nationals. For a foreign company rather than an individual, see <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link>.
        </p>

        <h2 id="structures" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Which structure: private limited company, OPC or LLP</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Structure</th><th scope="col" className="border border-gray-300 p-3 text-left">Minimum people</th><th scope="col" className="border border-gray-300 p-3 text-left">Point for an NRI</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Private limited company</th><td className="border border-gray-300 p-3">Two shareholders and two directors, one of them resident in India</td><td className="border border-gray-300 p-3">The usual choice for any business that will hire, raise funds or grow</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">One Person Company (OPC)</th><td className="border border-gray-300 p-3">One shareholder and one director, with a nominee</td><td className="border border-gray-300 p-3">Open to NRIs since 2021; suits a single founder, with limits once the business grows</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Limited liability partnership (LLP)</th><td className="border border-gray-300 p-3">Two designated partners, one resident in India</td><td className="border border-gray-300 p-3">Foreign investment only in sectors open to 100% automatic investment without performance conditions</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Sole proprietorship or partnership firm</th><td className="border border-gray-300 p-3">Not designed for non-resident owners</td><td className="border border-gray-300 p-3">Generally not suitable for NRI investment on a repatriation basis</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Most NRI founders choose a private limited company because it can issue shares to investors and employees, is familiar to banks and customers, and pays the domestic corporate tax rate of about 25.17% under the concessional regime. An OPC can be converted into a private limited company later as the business grows.
        </p>

        <h2 id="repatriation-choice" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Repatriation or non-repatriation basis: the most important choice</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Point</th><th scope="col" className="border border-gray-300 p-3 text-left">Repatriation basis</th><th scope="col" className="border border-gray-300 p-3 text-left">Non-repatriation basis</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">How it is treated</th><td className="border border-gray-300 p-3">Foreign investment under FEMA</td><td className="border border-gray-300 p-3">Treated as domestic investment</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Funding source</th><td className="border border-gray-300 p-3">Inward remittance from abroad or an NRE or FCNR account</td><td className="border border-gray-300 p-3">NRO account or other permitted Indian funds</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Reporting</th><td className="border border-gray-300 p-3">Form FC-GPR within 30 days of allotting shares, and the FLA return</td><td className="border border-gray-300 p-3">No foreign investment reporting for the investment itself</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Pricing</th><td className="border border-gray-300 p-3">Shares at no less than fair value under the FEMA pricing guidelines</td><td className="border border-gray-300 p-3">Domestic company-law rules apply</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Taking money out</th><td className="border border-gray-300 p-3">Dividends and sale proceeds can be repatriated after tax</td><td className="border border-gray-300 p-3">Dividends are credited to an NRO account; repatriation is limited to the permitted annual amounts</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Sector limits</th><td className="border border-gray-300 p-3">FDI caps and conditions apply</td><td className="border border-gray-300 p-3">Fewer restrictions, because it counts as domestic</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          If you expect to take profits or sale proceeds abroad, choose the repatriation basis from the start. If the business is funded from Indian income and the money will stay in India, the non-repatriation basis is simpler. The choice is recorded when the shares are issued, so we settle it before incorporation.
        </p>

        <h2 id="documents" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documents an NRI or foreign national needs</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Passport, with proof of address abroad, such as a bank statement or utility bill.</li>
          <li>PAN: Indian citizens apply on Form 49A, foreign nationals and OCIs on Form 49AA.</li>
          <li>OCI card, where applicable.</li>
          <li>Photograph and contact details.</li>
          <li>Proof of the Indian registered office: a utility bill not older than two months and the owner&apos;s consent.</li>
          <li>For documents signed abroad, notarisation and an apostille (or consular legalisation where the country is outside the Apostille Convention).</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Every director also needs a digital signature certificate and a Director Identification Number, which for up to three directors is allotted through the incorporation filing. You do not need to travel to India: documents are signed and authenticated where you live and couriered to us.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Step by step</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Choose the structure, the investment basis and the resident director.</li>
          <li>Obtain digital signature certificates for the directors.</li>
          <li>Reserve the company name through SPICe+ Part A.</li>
          <li>File SPICe+ Part B with the memorandum and articles; PAN and TAN are issued with the certificate of incorporation.</li>
          <li>Open the company&apos;s bank account.</li>
          <li>Remit the share capital from abroad or the appropriate NRE, FCNR or NRO account.</li>
          <li>Allot shares within 60 days and, on the repatriation basis, file FC-GPR within 30 days of allotment.</li>
          <li>File the commencement of business declaration within 180 days of incorporation.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          From complete documents, incorporation usually takes 4 to 6 weeks, with the bank account often the longest step for non-resident directors.
        </p>

        <h2 id="resident-director" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The resident director requirement</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Every Indian company must have at least one director who stayed in India for 182 days or more in the financial year. An NRI founder living abroad does not meet this, so the company needs another director who does: a family member or partner living in India, an Indian employee, or a <Link href="/resident-director-services-india" className="text-blue-800 font-semibold hover:underline">professional resident director</Link>. The resident director&apos;s role and authority can be limited in writing so that control stays with the NRI owner.
        </p>

        <h2 id="banking" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Bank accounts and funding</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>NRE account:</strong> holds foreign earnings in rupees; fully repatriable; suitable for investment on a repatriation basis.</li>
          <li><strong>FCNR deposit:</strong> held in foreign currency; also repatriable.</li>
          <li><strong>NRO account:</strong> holds Indian income such as rent or dividends; investments from it are on a non-repatriation basis, and repatriation is limited.</li>
          <li><strong>Direct remittance from abroad:</strong> the simplest evidence for a repatriation-basis investment.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Keep the remittance trail clean: the bank&apos;s inward remittance certificate and KYC report are needed for FC-GPR, and the remitter should be the shareholder named in the documents.
        </p>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax for the company and the NRI owner</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Item</th><th scope="col" className="border border-gray-300 p-3 text-left">Position</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Company tax</th><td className="border border-gray-300 p-3">About 25.17% under the concessional regime</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividends to an NRI</th><td className="border border-gray-300 p-3">Taxed in India; the domestic rate is about 20% plus surcharge and cess, reduced to the tax treaty rate with a tax residency certificate and Form 41</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Salary to an NRI director working from abroad</th><td className="border border-gray-300 p-3">Generally not taxable in India if the work is done outside India, but check each case</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Sale of shares</th><td className="border border-gray-300 p-3">Capital gains tax in India, at 12.5% for unlisted shares held more than 24 months, subject to the tax treaty</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Home country</th><td className="border border-gray-300 p-3">The NRI usually declares the dividend at home and claims credit for Indian tax</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          An NRI who returns to India and becomes resident changes the tax position of both the company and their personal income, so plan the timing of any move.
        </p>

        <h2 id="compliance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Compliance after registration</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Once incorporated, the company files monthly TDS and GST returns, holds board meetings and an AGM, files annual accounts and returns with the Registrar, gets an annual audit, files its income tax return and, on the repatriation basis, the yearly FLA return. Missing FEMA filings is the most common problem for NRI-owned companies; see our <Link href="/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar</Link> for every date.
        </p>
        <h2 id="returning" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Planning a return to India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Founders who plan to move back to India should think about timing. When they become resident, investments made earlier on a repatriation basis stay valid, but new investments follow the rules for residents, NRE accounts must be redesignated, and their worldwide income may become taxable in India once they are ordinarily resident. A founder who returns can also become the resident director, which removes the need for a separate director in India. We review the company&apos;s structure and the founder&apos;s personal position a few months before the move.
        </p>

        <h2 id="family" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Family members, nominees and joint ownership</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Many overseas founders set up the company with a parent, sibling or spouse living in India as the second shareholder and resident director. This works well, but the arrangement should be written down: who owns how many shares, who can sign what, and what happens if the family member steps away. Where a family member holds a single share only to meet the two-shareholder rule, a nominee declaration records the real owner. Keep the bank mandate consistent with these documents so the founder abroad stays in control of payments.
        </p>
        <h2 id="timeline-fees" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Timeline and fees</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Incorporation usually takes 4 to 6 weeks from complete documents. AU Corporate offers the best pricing with better work support, and the first consultation is free. See <Link href="/cost-of-setting-up-a-subsidiary-in-india" className="text-blue-800 font-semibold hover:underline">the cost guide</Link>.
        </p>



        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India firm of Chartered Accountants and Company Secretaries, serving foreign companies since 2016. We handle the Indian side end to end, with the best pricing, better work support and a free first consultation.
        </p>
        <GuideCTA title={"Registering a Company in India as an NRI?"} description={"Tell us where you live, what the company will do and whether you plan to repatriate profits, and we will recommend the structure in a free consultation."} />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 7 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Registering a Company in India as an NRI?"} description={"Tell us where you live, what the company will do and whether you plan to repatriate profits, and we will recommend the structure in a free consultation."} />
    </main>
  )
}
