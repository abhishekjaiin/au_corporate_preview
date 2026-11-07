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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/incorporation-steps"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "split", label: "Who does what" },
  { id: "steps", label: "The steps in order" },
  { id: "details", label: "Points that differ for a Chinese-owned company" },
  { id: "180", label: "The first 180 days" },
  { id: "slip", label: "Where the plan slips" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How long does it take to incorporate an Indian subsidiary for a Chinese parent?", a: "Four to six weeks from complete documents, but only after the Press Note 3 approval and the Chinese filings. Add time for approvals and document legalisation." },
  { q: "Can I incorporate before Press Note 3 approval?", a: "The approval is needed before the investment. Do not incorporate or fund until you have confirmed with Indian counsel that the approval covers the entity and the structure." },
  { q: "Do Chinese directors need a clearance?", a: "Yes. A citizen of a land-border country proposed as a director needs Ministry of Home Affairs security clearance." },
  { q: "Who files the RBI forms?", a: "The Indian subsidiary files Form FC-GPR within 30 days of allotment, with advisers and the authorised dealer bank, using the documents the Chinese parent provides." },
  { q: "What are the two post-funding clocks?", a: "Allot shares within 60 days of receiving the funds, and file Form FC-GPR within 30 days of the allotment." },
  { q: "What is INC-20A?", a: "The declaration of commencement of business. File it within 180 days of incorporation, after the share capital is paid in." },
  { q: "Does the bank treat a Chinese-owned company differently?", a: "Expect enhanced due diligence on the ownership chain and requests for the approval letter. Prepare the documents early." },
]

const relatedCards = [
  { title: "Press Note 3 for Chinese Companies: When Government Approval Is Needed and What the 2026 Easing Changes", desc: "How India's Press Note 3 (2020) applies to a Chinese parent: prior government approval for investors incorporated in China, the 2026 easing for passive minority land-border ownership, the control test, the 60-day sectors, director clearance and planning.", href: "/china-to-india/india-press-note-3-and-chinese-investors" },
  { title: "Preparing Chinese Documents for India: Why There Is No Apostille Between China and India and What to Do Instead", desc: "How to prepare Chinese company documents for an Indian subsidiary: notarisation in China, authentication by the Chinese foreign affairs authority, attestation by the Indian Embassy or Consulate, certified translations and why the Apostille Convention does not apply between China and India.", href: "/china-to-india/documents-notarisation-legalisation" },
  { title: "Choosing the Structure in India as a Chinese Investor: Wholly Owned Subsidiary, Joint Venture, Branch or Employer of Record", desc: "A comparison of ways for a Chinese company to operate in India: wholly owned subsidiary, joint venture with an Indian partner, branch or liaison office, LLP and Employer of Record, with Press Note 3 and approval consequences for each.", href: "/china-to-india/structure-options" },
  { title: "Funding an Indian Subsidiary from China: Equity, Convertible Instruments, ECB Loans, SAFE Remittance and FC-GPR", desc: "How a Chinese parent funds an Indian subsidiary: equity pricing and valuation, compulsorily convertible instruments, external commercial borrowing, the Chinese SAFE step, inward remittance, FC-GPR and the 60-day and 30-day clocks.", href: "/china-to-india/funding-and-fema" },
]

export default function IncorporationStepsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Setting Up the Indian Subsidiary After Approval: Step-by-Step Plan for a Chinese Parent"
        description="The step-by-step plan for incorporating an Indian private limited company owned by a Chinese parent: Press Note 3 approval, documents, director clearance, SPICe+, bank account, funding, RBI reporting and the first 180 days."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Incorporation Steps for a Chinese-Owned Indian Subsidiary: Who Does What" },
        ]}
      />

      <GuideHero
        eyebrow="Setup: who does what"
        title="Setting Up the Indian Subsidiary After Approval: Step-by-Step Plan for a Chinese Parent"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Chinese parent forms an Indian private limited company in four to six weeks from complete documents,
          but only after the government approval under Press Note 3 is in hand and the Chinese filings allow the
          remittance. The work splits cleanly: the Chinese side prepares the approvals, documents and funds,
          while the Indian team handles the name, SPICe+, registrations, bank account and RBI reporting. Two
          clocks run after the money arrives: share allotment within 60 days and Form FC-GPR within 30 days of
          allotment.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="incorporation-process" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Prerequisite", "Government approval under Press Note 3 and Chinese outbound approvals"],
                ["Typical time", "4 to 6 weeks to incorporate from complete documents; about 12 weeks to a working bank account, payroll and first filings; approvals come before this"],
                ["Directors", "At least two, with at least one who has stayed in India 182 days or more in the year; Chinese directors need Ministry of Home Affairs clearance"],
                ["Shareholders", "At least two; a wholly owned subsidiary uses a nominee shareholder"],
                ["Registered office", "A physical address in India"],
                ["Bank", "Indian banks apply enhanced checks on Chinese-owned entities; allow more time"],
                ["RBI reporting", "Allot within 60 days of receipt of funds; FC-GPR within 30 days of allotment"],
                ["Start of business", "INC-20A within 180 days"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="split" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who does what</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Task</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Chinese parent</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian team</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Approvals", "Chinese outbound filings; provide ownership and project details", "Press Note 3 application and follow-up"],
                ["Documents", "Notarise, authenticate and attest the corporate set; certified translation", "Check against Registrar and bank requirements"],
                ["Directors", "Choose nominees; passports; security clearance for Chinese directors", "DIN, DSC, consent forms, resident director"],
                ["Name and incorporation", "Approve the name and the MoA and AoA", "Name search, SPICe+ and registrations"],
                ["Bank and funds", "Remit funds through the Chinese bank after SAFE registration", "Open the current account; collect the inward remittance certificate"],
                ["RBI reporting", "Provide parent KYC and valuation inputs", "Allot shares and file FC-GPR"],
                ["First months", "Reporting calendar and budget", "GST, PF, ESI, payroll, auditor, INC-20A"],
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

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The steps in order</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Step</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Task</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indicative time</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Check the sector, cap and Press Note 3 route; start the Chinese filings", "Weeks to months"],
                ["2", "Prepare and legalise the Chinese documents (see the documents guide)", "3 to 6 weeks"],
                ["3", "Obtain Digital Signature Certificates and Director Identification Numbers; resident director chosen", "1 to 2 weeks"],
                ["4", "Reserve the name and file SPICe+ with the memorandum and articles", "1 to 2 weeks"],
                ["5", "Open the bank account; the bank verifies the Chinese parent and the ultimate owners", "2 to 6 weeks"],
                ["6", "Remit capital from the parent's own account; collect the inward remittance advice", "1 to 3 weeks"],
                ["7", "Allot shares within 60 days; file FC-GPR within 30 days of allotment with the valuation certificate", "2 to 4 weeks"],
                ["8", "Commence: INC-20A within 180 days, GST, PF and ESI, auditor, accounting set-up", "Within 180 days"],
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

        <h2 id="details" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Points that differ for a Chinese-owned company</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Approval before incorporation:</strong> do not file SPICe+ until you are sure the approval covers the entity and shareholding you plan.</li>
          <li><strong>Ultimate owner questions:</strong> the Registrar, the bank and the auditor will ask for details of the ultimate beneficial owners. Prepare an ownership chart and identity papers in advance.</li>
          <li><strong>Director clearance:</strong> a Chinese citizen proposed as director needs Ministry of Home Affairs clearance. Name an Indian resident director first and add Chinese directors later if needed.</li>
          <li><strong>Name and objects:</strong> choose objects that match the approved project. A wide clause can attract questions.</li>
          <li><strong>Bank due diligence:</strong> expect enhanced due diligence and requests for the approval letter. Open the account only when the documents are complete.</li>
          <li><strong>Time difference:</strong> China is two and a half hours ahead of India, so calls are easy.</li>
        </ul>

        <h2 id="180" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The first 180 days</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>File INC-20A within 180 days of incorporation before starting business.</li>
          <li>Appoint the first auditor within 30 days of incorporation.</li>
          <li>Register for GST, provident fund, ESI, professional tax and the shops and establishment licence, depending on the state and headcount.</li>
          <li>Set up accounting, payroll and the compliance calendar. See <Link href="/china-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar</Link>.</li>
          <li>Open an escrow of documents for the Press Note 3 conditions, if any, and keep a record of compliance.</li>
        </ul>

        <h2 id="slip" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where the plan slips</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The government approval takes longer than planned.</li>
          <li>Document names do not match across the Chinese set and the Indian forms.</li>
          <li>The Chinese outbound filing and the Indian approval describe the project differently.</li>
          <li>The bank asks for additional ownership documents after funds are ready to move.</li>
          <li>The 60-day allotment clock starts when funds arrive; if the Indian company is not ready, the funds must be refunded.</li>
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

        <GuideServiceBox path="/china-to-india/incorporation-steps" />
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
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "DPIIT", href: "https://dpiit.gov.in/" },
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
        title="Ready to Incorporate from China?"
        description="Tell us your sector, share capital and target date, and we'll map the Press Note 3 approval, the SPICe+ filing and a fixed quote."
      />
    </main>
  )
}
