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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/common-mistakes"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "list", label: "Mistakes and fixes" },
  { id: "habits", label: "Three habits that avoid most of these" },
  { id: "signs", label: "Early warning signs" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the most common mistake Chinese companies make in India?", a: "Investing or incorporating before the Press Note 3 approval, or in a structure that does not match what was approved." },
  { q: "Can a Hong Kong or Singapore holding company avoid the approval?", a: "No. The policy looks at beneficial ownership and control. A mis-described structure is a FEMA risk." },
  { q: "Do Chinese documents need an apostille for India?", a: "No. India objected to China's accession to the Apostille Convention, so documents go through a Chinese notary, Chinese authentication and Indian Embassy attestation." },
  { q: "Can Chinese engineers work on a business visa?", a: "A business visa is for meetings and talks, not hands-on work. Choose the right visa and allow time for clearance." },
  { q: "What do I need before the first dividend is paid?", a: "A Chinese tax residence certificate, Form 41 and any no-PE declaration the payer requires." },
  { q: "Where do I start to avoid these mistakes?", a: "With the Press Note 3 and documents pages, then the compliance calendar and an adviser in each country." },
]

const relatedCards = [
  { title: "Press Note 3 for Chinese Companies: When Government Approval Is Needed and What the 2026 Easing Changes", desc: "How India's Press Note 3 (2020) applies to a Chinese parent: prior government approval for investors incorporated in China, the 2026 easing for passive minority land-border ownership, the control test, the 60-day sectors, director clearance and planning.", href: "/china-to-india/india-press-note-3-and-chinese-investors" },
  { title: "Preparing Chinese Documents for India: Why There Is No Apostille Between China and India and What to Do Instead", desc: "How to prepare Chinese company documents for an Indian subsidiary: notarisation in China, authentication by the Chinese foreign affairs authority, attestation by the Indian Embassy or Consulate, certified translations and why the Apostille Convention does not apply between China and India.", href: "/china-to-india/documents-notarisation-legalisation" },
  { title: "Compliance Calendar: Indian Deadlines and the Chinese Filings They Feed", desc: "A month-by-month compliance calendar for an Indian subsidiary of a Chinese parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return, approval conditions and the Chinese-side reports.", href: "/china-to-india/compliance-calendar" },
  { title: "Exit and Restructuring: Share Sale, Buyback, Liquidation and Closing a Subsidiary Owned by a Chinese Parent", desc: "How a Chinese parent exits an Indian subsidiary: share sale and FEMA pricing, capital gains and the treaty, approval for a land-border buyer, buyback, voluntary liquidation, Chinese approvals and employee rules.", href: "/china-to-india/exit-and-restructuring" },
]

export default function CommonMistakesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Common Mistakes Chinese Companies Make in India and How to Avoid Them"
        description="The most frequent mistakes Chinese companies make when setting up in India: investing before Press Note 3 approval, assuming an apostille works, hidden ownership, late FEMA filings, visa mismatches and weak records."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Common Mistakes Chinese Companies Make When Entering India" },
        ]}
      />

      <GuideHero
        eyebrow="Risks: mistakes"
        title="Common Mistakes Chinese Companies Make in India and How to Avoid Them"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Most problems for Chinese companies in India come from sequence and disclosure: investing before the
          government approval, relying on a third-country vehicle that does not hide Chinese ownership, using an
          apostille that India does not accept for Chinese documents, sending people on the wrong visa, or
          keeping thin records. The list below groups the common ones by area, with the fix for each.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="common-mistakes" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Approval", "Remitting or incorporating before Press Note 3 approval"],
                ["Ownership", "A Hong Kong or Singapore vehicle used to hide Chinese beneficial ownership"],
                ["Documents", "Chinese documents apostilled instead of notarised, authenticated and attested"],
                ["FEMA", "Late allotment (60 days) or late FC-GPR (30 days after allotment); missed FLA return"],
                ["Treaty relief", "No Chinese tax residence certificate or Form 41 before the first dividend"],
                ["Visas", "Engineers on business visas doing hands-on work"],
                ["Records", "Thin wage, PF and contract records in a foreign-owned factory"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="list" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes and fixes</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Area</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Mistake</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Fix</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Approval</th>
                  <td className="border border-gray-300 p-3">Investing before the Press Note 3 approval, or beyond what it allows</td>
                  <td className="border border-gray-300 p-3">Wait for the approval and keep the structure consistent with it. See <Link href="/china-to-india/india-press-note-3-and-chinese-investors" className="text-blue-800 font-semibold hover:underline">Press Note 3</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Ownership</th>
                  <td className="border border-gray-300 p-3">Assuming a Hong Kong or Singapore holding company avoids the approval</td>
                  <td className="border border-gray-300 p-3">The policy looks at beneficial ownership and control; structure openly. See <Link href="/china-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">structure options</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Documents</th>
                  <td className="border border-gray-300 p-3">Seeking an apostille for Chinese documents</td>
                  <td className="border border-gray-300 p-3">India objected to China&apos;s accession, so use notarisation, authentication and Indian mission attestation. See <Link href="/china-to-india/documents-notarisation-legalisation" className="text-blue-800 font-semibold hover:underline">documents and legalisation</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Chinese filings</th>
                  <td className="border border-gray-300 p-3">Remitting funds before outbound filings and SAFE registration are complete</td>
                  <td className="border border-gray-300 p-3">Sequence Chinese and Indian steps together. See <Link href="/china-to-india/chinese-parent-obligations" className="text-blue-800 font-semibold hover:underline">Chinese parent obligations</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">FEMA</th>
                  <td className="border border-gray-300 p-3">Receiving funds but allotting shares after 60 days</td>
                  <td className="border border-gray-300 p-3">Allot within 60 days or refund; file FC-GPR within 30 days of allotment. See <Link href="/china-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Directors</th>
                  <td className="border border-gray-300 p-3">Appointing a Chinese director before clearance, or having no resident director</td>
                  <td className="border border-gray-300 p-3">Name a resident director first; add Chinese directors after clearance</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Tax treaty</th>
                  <td className="border border-gray-300 p-3">Paying dividends without a residence certificate and Form 41</td>
                  <td className="border border-gray-300 p-3">Collect documents before the first payment. See <Link href="/china-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">repatriating profits</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Transfer pricing</th>
                  <td className="border border-gray-300 p-3">Charging fees or buying components with no agreement or benchmark</td>
                  <td className="border border-gray-300 p-3">Contract first; keep a benchmark file; align customs value. See <Link href="/china-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Visas</th>
                  <td className="border border-gray-300 p-3">Using a business visa for hands-on work</td>
                  <td className="border border-gray-300 p-3">Use the correct visa category and allow for clearance. See <Link href="/china-to-india/relocate-chinese-staff" className="text-blue-800 font-semibold hover:underline">relocating staff</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Provident fund</th>
                  <td className="border border-gray-300 p-3">Assuming Chinese social insurance replaces EPF</td>
                  <td className="border border-gray-300 p-3">There is no social security agreement; budget for EPF. See <Link href="/china-to-india/chinese-employees-in-india" className="text-blue-800 font-semibold hover:underline">Chinese employees in India</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Data</th>
                  <td className="border border-gray-300 p-3">Moving data from China without a legal route, or ignoring DPDP</td>
                  <td className="border border-gray-300 p-3">Map flows and choose a route. See <Link href="/china-to-india/data-protection-pipl-dpdp" className="text-blue-800 font-semibold hover:underline">data protection</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Public contracts</th>
                  <td className="border border-gray-300 p-3">Bidding for government contracts without registration</td>
                  <td className="border border-gray-300 p-3">Land-border-country bidders must register first. See <Link href="/china-to-india/restricted-sectors-procurement-and-trade" className="text-blue-800 font-semibold hover:underline">restricted sectors and procurement</Link></td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="habits" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Three habits that avoid most of these</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Approval first:</strong> no incorporation, remittance or hiring for the project before the approval and the Chinese filings are settled.</li>
          <li><strong>One owner per deadline:</strong> a named person for each filing in each country.</li>
          <li><strong>Open records:</strong> keep a full file of approvals, ownership, contracts, wages and filings that you would be comfortable showing to an inspector.</li>
        </ul>

        <h2 id="signs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Early warning signs</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A bank asks for an ownership chart you have not prepared.</li>
          <li>An Indian partner asks to sign before the approval arrives.</li>
          <li>The Chinese outbound filing and the Indian application describe the project differently.</li>
          <li>A staff member arrives on a visa that does not match the work.</li>
          <li>Payments to the parent have no contract behind them.</li>
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

        <GuideServiceBox path="/china-to-india/common-mistakes" />
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
        title="Avoid the Usual Traps for Chinese Investors"
        description="Tell us your planned structure and launch date, and we'll flag the issues Chinese parents most often run into in India."
      />
    </main>
  )
}
