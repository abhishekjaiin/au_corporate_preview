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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/incorporation-steps"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "steps", label: "Steps in order" },
  { id: "time", label: "Timeline" },
  { id: "director", label: "Directors and the resident director" },
  { id: "costs", label: "Cost planning" },
  { id: "after", label: "After incorporation" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How long does it take to set up an Indian company from Hong Kong?", a: "After the approval and documents are ready, about two to three weeks for incorporation. The Press Note 3 approval is the long step." },
  { q: "What form is used to incorporate?", a: "SPICe+ with AGILE-PRO-S, which also gives PAN, TAN, GST, EPFO and ESIC registrations where applicable." },
  { q: "Do I need a resident director?", a: "Yes. At least one director must have stayed in India for 182 days or more in the previous financial year." },
  { q: "Can a Hong Kong company be the shareholder?", a: "Yes, subject to the sector cap and Press Note 3 approval. A private limited company needs at least two shareholders." },
  { q: "When must shares be allotted after the money arrives?", a: "Within 60 days of receipt. Form FC-GPR is due within 30 days of allotment." },
  { q: "When is the declaration of commencement due?", a: "Form INC-20A within 180 days of incorporation, before starting business or using the subscription money." },
  { q: "Do directors need a DIN and DSC?", a: "Yes. Each director needs a Director Identification Number and a Digital Signature Certificate." },
  { q: "Can a branch be used instead of a subsidiary?", a: "Only with a large track record and Reserve Bank approval. See the structure options." },
]

const relatedCards = [
  { title: "Choosing an Indian Structure for a Hong Kong Parent: Private Limited, LLP, Branch, Liaison Office, Project Office and Joint Venture", desc: "Compare Indian structures for a Hong Kong company: wholly owned private limited company, LLP, branch, liaison and project office, and joint venture, with tax, approval, liability and exit points.", href: "/hong-kong-to-india/structure-options" },
  { title: "Funding Your Indian Subsidiary from Hong Kong: Equity, Preference Shares, External Borrowing and FEMA Reporting", desc: "How a Hong Kong parent can fund an Indian company: equity share and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return, Press Note 3 and reporting through the authorised dealer bank.", href: "/hong-kong-to-india/funding-and-fema" },
  { title: "Compliance Calendar: Indian Deadlines and the Hong Kong Filings They Feed", desc: "A month-by-month compliance calendar for an Indian subsidiary of a Hong Kong parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return, approval conditions and the Hong Kong-side annual return and profits tax filings.", href: "/hong-kong-to-india/compliance-calendar" },
  { title: "Hong Kong Documents for an Indian Subsidiary: Notary, Apostille or Consular Legalisation and Translation", desc: "How to prepare Hong Kong company and director documents for Indian filings: certified copies, notary public, Hong Kong apostille, when consular legalisation applies, translation and a checklist of documents.", href: "/hong-kong-to-india/documents-hong-kong-apostille" },
]

export default function IncorporationStepsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How to Incorporate a Private Limited Company in India as a Hong Kong Parent: Approval, SPICe+, Bank Account and Post-Incorporation Filings"
        description="Step-by-step route for a Hong Kong parent to set up an Indian private limited company: Press Note 3 approval, name, SPICe+, DIN and DSC, resident director, PAN and TAN, bank account, capital inflow, FC-GPR and first filings."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Incorporating an Indian Subsidiary from Hong Kong: Step-by-Step with Timeline" },
        ]}
      />

      <GuideHero
        eyebrow="Setup: step by step"
        title="How to Incorporate a Private Limited Company in India as a Hong Kong Parent: Approval, SPICe+, Bank Account and Post-Incorporation Filings"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Hong Kong parent normally sets up a wholly owned private limited company. Plan first for the Press
          Note 3 approval, then the Indian steps: reserve the name, file SPICe+ with a resident director, open
          the bank account and receive the capital, allot shares within 60 days and file Form FC-GPR within 30
          days of allotment. After the Indian approval is in hand, incorporation takes about two to three weeks;
          the approval, not the incorporation, is the long part. Foreign nationals can be directors, but at
          least one director must have stayed in India for 182 days or more in the previous year.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="incorporation-process" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Approval first", "Press Note 3 approval for Hong Kong entities, as reported; plan months"],
                ["Vehicle", "Private limited company, minimum two directors and two shareholders"],
                ["Form", "SPICe+ with AGILE-PRO-S (GST, EPFO, ESIC, bank account, professional tax in one filing)"],
                ["Resident director", "At least one director resident in India for 182 days in the previous year"],
                ["Names", "Reserve through SPICe+ Part A; trademark conflicts and Hong Kong-style names need checking"],
                ["After incorporation", "INC-20A declaration of commencement within 180 days; auditor within 30 days; first board meeting within 30 days"],
                ["Capital", "Remit inward through a bank; allot shares within 60 days; FC-GPR within 30 days of allotment"],
                ["Typical time", "About two to three weeks after approval and documents are ready"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Steps in order</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Approval and sector check.</strong> Confirm the sector is open under FDI Policy and obtain Press Note 3 approval. See <Link href="/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" className="text-blue-800 font-semibold hover:underline">Press Note 3</Link>.</li>
          <li><strong>Documents.</strong> Prepare and authenticate the Hong Kong documents. See <Link href="/hong-kong-to-india/documents-hong-kong-apostille" className="text-blue-800 font-semibold hover:underline">Hong Kong documents</Link>.</li>
          <li><strong>DIN and DSC.</strong> Each proposed director obtains a Director Identification Number and Digital Signature Certificate.</li>
          <li><strong>Name and SPICe+.</strong> Reserve the name, file SPICe+ with the memorandum, articles, registered office proof and subscriber details.</li>
          <li><strong>Certificate of incorporation.</strong> The Registrar issues the certificate, PAN and TAN, and GST, EPFO and ESIC registrations follow through the combined form.</li>
          <li><strong>Bank account.</strong> Open the current account; the bank will ask for KYC of the Hong Kong parent and beneficial owners.</li>
          <li><strong>Capital inflow and FC-GPR.</strong> Remit funds, allot shares within 60 days, file FC-GPR within 30 days of allotment. See <Link href="/hong-kong-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
          <li><strong>Post-incorporation.</strong> Appoint the first auditor within 30 days, hold the first board meeting within 30 days, file INC-20A within 180 days, set up registers and payroll. See <Link href="/hong-kong-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar</Link>.</li>
        </ol>

        <h2 id="time" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Timeline</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Stage</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical time</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Dependency</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Press Note 3 approval", "Months; 60-day target reported for specified manufacturing sectors", "Ownership clarity, sector, security review"],
                ["Documents authenticated", "1 to 3 weeks", "Notary and apostille turnaround"],
                ["DIN, DSC, name, SPICe+", "1 to 2 weeks", "Name approval and Registrar processing"],
                ["Bank account and inward remittance", "1 to 3 weeks", "Bank KYC of Hong Kong parent and owners"],
                ["Share allotment and FC-GPR", "Within 60 days and 30 days of allotment", "Authorised dealer bank and valuation if needed"],
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

        <h2 id="director" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Directors and the resident director</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A private company needs at least two directors. At least one must be resident in India, meaning 182 days or more in the previous financial year.</li>
          <li>Citizens of land-border countries need Ministry of Home Affairs clearance. Plan for it if any director holds a PRC passport.</li>
          <li>Foreign directors need a registered office address in India for the company, not their own.</li>
          <li>Appoint an Indian resident director early. A relocated manager or an adviser-nominated director are common routes.</li>
        </ul>

        <h2 id="costs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Cost planning</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Budget for professional fees, government fees, stamp duty by state, registered office, accounting and
          payroll. ₹10 lakh is about HK$83,000 at an indicative ₹12.07 per Hong Kong dollar (15 October 2026
          interbank rate; check the live rate before remitting). See{" "}
          <Link href="/hong-kong-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">structure options</Link>{" "}
          for the entity choice.
        </p>

        <h2 id="after" className="text-2xl font-bold text-gray-900 mt-12 mb-4">After incorporation</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Declare commencement of business (INC-20A) within 180 days or face penalties and possible strike-off.</li>
          <li>Hold the first AGM within 6 months of the financial year end and file AOC-4 within 30 days and MGT-7 within 60 days of the AGM.</li>
          <li>Register for GST, professional tax and labour laws as needed.</li>
          <li>File FLA return by 15 July each year.</li>
        </ul>

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

        <GuideServiceBox path="/hong-kong-to-india/incorporation-steps" />
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
            { label: "DPIIT", href: "https://dpiit.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
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
        title="Ready to Incorporate from Hong Kong?"
        description="Tell us your shareholders, share capital and target date, and we'll map the approval check, the SPICe+ filing and a fixed quote."
      />
    </main>
  )
}
