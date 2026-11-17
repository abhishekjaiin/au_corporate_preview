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

const PAGE_URL = "https://www.theaucorp.com/how-long-to-set-up-a-subsidiary-in-india"

const toc = [
  { id: "overview", label: "The timeline at a glance" },
  { id: "week-by-week", label: "Week by week" },
  { id: "by-country", label: "How the parent's country changes the timeline" },
  { id: "delays", label: "What usually causes delays" },
  { id: "faster", label: "How to make it faster" },
  { id: "after-incorporation", label: "Deadlines that start after incorporation" },
  { id: "timeline-scenarios", label: "Three real-world timelines, from fastest to slowest" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How long does it take to set up a subsidiary in India?", a: "About 4 to 6 weeks from complete authenticated documents, and two to three months from board decision to an operating company." },
  { q: "How long does SPICe+ incorporation take?", a: "About one to two weeks once the file is complete." },
  { q: "What is the slowest step?", a: "Usually the bank account and the parent's document authentication." },
  { q: "Can a subsidiary be set up in two weeks?", a: "Yes, when documents are ready and queries are answered quickly; we incorporated one US company's subsidiary in 14 days." },
  { q: "Do directors need to travel to India?", a: "No. Documents are signed and authenticated abroad and the filings are online." },
  { q: "When must FC-GPR be filed?", a: "Within 30 days of allotting shares to the foreign parent." },
  { q: "Does Press Note 3 affect timing?", a: "Yes. Investors from countries sharing a land border with India need government approval first, which can take months." },
]

const relatedCards = [
  { title: "Cost of setting up a subsidiary", desc: "One-time fees and annual running costs.", href: "/cost-of-setting-up-a-subsidiary-in-india" },
  { title: "14-day incorporation case study", desc: "How a US company was incorporated in 14 days.", href: "/case-studies/us-longevity-company-india-subsidiary-14-days" },
  { title: "India subsidiary registration", desc: "Our incorporation service.", href: "/india-subsidiary-registration" },
  { title: "Resident director services", desc: "If you have no director in India.", href: "/resident-director-services-india" },
]

export default function HowLongToSetUpASubsidiaryInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"How Long Does It Take to Set Up a Subsidiary in India? A Week-by-Week Timeline"}
        description={"How long it takes a foreign company to set up a subsidiary in India: documents and apostille, SPICe+ incorporation, bank account, capital and FC-GPR, with what speeds it up and a 14-day case study."}
        datePublished="2026-11-07"
        dateModified="2026-11-13"
        inLanguage="en"
      />

      <Breadcrumb items={[{ label: "How Long to Set Up a Subsidiary" }]} />

      <GuideHero eyebrow={"Timeline"} title={"How Long Does It Take to Set Up a Subsidiary in India? A Week-by-Week Timeline"} updated="13 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Setting up a subsidiary in India usually takes 4 to 6 weeks from the day complete, authenticated documents reach India, and about two to three months from a board decision to a company that can hire and invoice. The parent&apos;s documents and apostille take one to three weeks depending on the country; the Indian incorporation through SPICe+ takes about one to two weeks once the file is complete; and the bank account and first capital remittance often take one to four weeks. After the money arrives, shares must be allotted within 60 days and FC-GPR filed within 30 days of allotment. With documents ready and a prompt bank, it can be much faster: we incorporated one US company&apos;s subsidiary in 14 days.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="overview" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The timeline at a glance</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Stage</th><th scope="col" className="border border-gray-300 p-3 text-left">Typical time</th><th scope="col" className="border border-gray-300 p-3 text-left">What decides it</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Decision and planning</th><td className="border border-gray-300 p-3">About 1 week</td><td className="border border-gray-300 p-3">Structure, resident director, share capital and state chosen</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Documents and apostille in the parent&apos;s country</th><td className="border border-gray-300 p-3">1 to 3 weeks</td><td className="border border-gray-300 p-3">The country&apos;s notary and apostille process; translations</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Digital signatures and name reservation</th><td className="border border-gray-300 p-3">A few days, in parallel</td><td className="border border-gray-300 p-3">Complete identity documents; an available name</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">SPICe+ incorporation</th><td className="border border-gray-300 p-3">About 1 to 2 weeks from a complete file</td><td className="border border-gray-300 p-3">Registrar queries, if any</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Bank account</th><td className="border border-gray-300 p-3">1 to 4 weeks</td><td className="border border-gray-300 p-3">The bank&apos;s KYC review of the foreign parent and directors</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Capital remittance and allotment</th><td className="border border-gray-300 p-3">Days after the account opens; allotment within 60 days</td><td className="border border-gray-300 p-3">The parent&apos;s treasury process</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">FC-GPR</th><td className="border border-gray-300 p-3">Within 30 days of allotment</td><td className="border border-gray-300 p-3">Complete remittance and valuation papers</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Several stages run in parallel. While the parent&apos;s documents are being authenticated, we obtain digital signatures, reserve the name and start the bank discussion, which is how a 4 to 6 week setup is achieved.
        </p>

        <h2 id="week-by-week" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Week by week</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Week 1:</strong> board resolution in the parent&apos;s country; structure, resident director and share capital settled; document checklist issued.</li>
          <li><strong>Weeks 1 to 3:</strong> notary and apostille of the parent&apos;s documents; digital signatures for directors; name reserved through SPICe+ Part A.</li>
          <li><strong>Weeks 3 to 5:</strong> SPICe+ Part B filed with the memorandum and articles; certificate of incorporation, PAN and TAN issued.</li>
          <li><strong>Weeks 4 to 6:</strong> bank account opened; share capital remitted; shares allotted.</li>
          <li><strong>Within 30 days of allotment:</strong> FC-GPR filed with the RBI.</li>
          <li><strong>Within 180 days of incorporation:</strong> commencement of business declaration filed.</li>
        </ol>

        <h2 id="by-country" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the parent&apos;s country changes the timeline</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Parent country</th><th scope="col" className="border border-gray-300 p-3 text-left">Document stage</th><th scope="col" className="border border-gray-300 p-3 text-left">Note</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">USA</th><td className="border border-gray-300 p-3">1 to 3 weeks</td><td className="border border-gray-300 p-3">Apostille is issued by each state; times vary</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">UK</th><td className="border border-gray-300 p-3">1 to 2 weeks</td><td className="border border-gray-300 p-3">FCDO apostille; Companies House documents</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Germany</th><td className="border border-gray-300 p-3">1 to 3 weeks</td><td className="border border-gray-300 p-3">Landgericht apostille and sworn translations</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Japan</th><td className="border border-gray-300 p-3">2 to 3 weeks</td><td className="border border-gray-300 p-3">Notary, Legal Affairs Bureau and MOFA apostille, then translation</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Singapore and Australia</th><td className="border border-gray-300 p-3">About 1 to 2 weeks</td><td className="border border-gray-300 p-3">Single national apostille processes</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">China and Hong Kong</th><td className="border border-gray-300 p-3">Months longer overall</td><td className="border border-gray-300 p-3">Press Note 3 government approval is needed before investing</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our country guides give the detail, for example <Link href="/usa-to-india/how-long-it-takes-to-set-up-from-the-us" className="text-blue-800 font-semibold hover:underline">the US timeline</Link> and <Link href="/spain-to-india/how-long-it-takes-to-set-up-from-spain" className="text-blue-800 font-semibold hover:underline">Spain&apos;s</Link>.
        </p>

        <h2 id="delays" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What usually causes delays</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Names that differ between the passport, the parent&apos;s register extract and the Indian forms.</li>
          <li>An apostille that covers the original document but not the translation.</li>
          <li>A proposed company name too close to an existing company or trademark.</li>
          <li>No resident director identified before filing.</li>
          <li>A utility bill for the registered office older than two months.</li>
          <li>Capital sent from a group treasury company instead of the shareholder named in the documents, which holds up FC-GPR.</li>
          <li>Bank KYC questions about the ownership chain, answered slowly across time zones.</li>
        </ul>

        <h2 id="faster" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to make it faster</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Decide the resident director and share capital before anything else.</li>
          <li>Order the parent&apos;s documents in one batch, with translations covered by the apostille.</li>
          <li>Send scanned copies first so digital signatures and name approval can start.</li>
          <li>Prepare an ownership chart to the ultimate owners for the bank.</li>
          <li>Name one decision-maker at the parent who can approve queries within a day.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          In our <Link href="/case-studies/us-longevity-company-india-subsidiary-14-days" className="text-blue-800 font-semibold hover:underline">14-day incorporation case study</Link>, a US company had its documents ready and responded to every query the same day, so the Indian subsidiary was incorporated in 14 days.
        </p>

        <h2 id="after-incorporation" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Deadlines that start after incorporation</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Deadline</th><th scope="col" className="border border-gray-300 p-3 text-left">Time limit</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">First board meeting and first auditor</th><td className="border border-gray-300 p-3">Within 30 days of incorporation</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Share certificates to subscribers</th><td className="border border-gray-300 p-3">Within two months of incorporation</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Allotment of shares after money is received</th><td className="border border-gray-300 p-3">Within 60 days, or refund within 15 more days</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">FC-GPR</th><td className="border border-gray-300 p-3">Within 30 days of allotment</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Commencement of business declaration (INC-20A)</th><td className="border border-gray-300 p-3">Within 180 days of incorporation</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          For the budget side of the same plan, see <Link href="/cost-of-setting-up-a-subsidiary-in-india" className="text-blue-800 font-semibold hover:underline">the cost of setting up a subsidiary in India</Link>.
        </p>

        <h2 id="timeline-scenarios" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Three real-world timelines, from fastest to slowest</h2>
        <p className="text-gray-700 mb-4">The headline answer of four to six weeks hides a wide range. The Indian filing itself rarely takes more than two weeks. What moves the date is everything that happens before it, in the parent&apos;s country, and the steps after it that make the company able to operate. The three scenarios below are composites of projects we have run.</p>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Scenario A: about three weeks from instruction to bank account</h3>
        <p className="text-gray-700 mb-4">A US software company with one shareholder and two directors who already hold passports and proof of address in good order. The parent&apos;s board resolution is signed electronically on day one, documents are notarised and apostilled by the Secretary of State within a week, the name is approved on the first attempt and the SPICe+ form is approved four working days after filing. The bank account opens within a week of incorporation because a director attends a video KYC call. This is close to the fastest realistic timeline.</p>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Scenario B: six to seven weeks, the typical case</h3>
        <p className="text-gray-700 mb-4">A UK group with a corporate shareholder, a nominee second shareholder and a director who is also a UK company director. The Companies House documents need certified copies, the first notarised set has a name mismatch with the passport and must be redone, and the proposed name is rejected once for being too close to an existing trademark. None of these is unusual, and together they add about three weeks. The incorporation, PAN, TAN and bank account then follow on the normal schedule.</p>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Scenario C: three months or more</h3>
        <p className="text-gray-700 mb-4">A company that needs government approval, for example because a shareholder is based in a country that shares a land border with India, or because the sector is outside the automatic route. The approval application itself can take eight to twelve weeks or longer, and incorporation cannot begin until it is granted. Other slow cases include parents in countries that are not party to the Apostille Convention, where documents must be legalised by the Indian embassy, and groups whose internal approvals need a board meeting that only happens quarterly.</p>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What does not slow you down as much as people expect</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>Share capital: there is no minimum, and the money can arrive after incorporation.</li>
          <li>Office premises: a registered office can be a co-working space or our address while you find a permanent location.</li>
          <li>GST registration: it can be applied for after incorporation and usually takes one to three weeks.</li>
          <li>The resident director: if you do not have one, a professional resident director can be appointed in days.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">A week-by-week plan you can share with your board</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>Week 1: agree the structure, the name options, the directors and the shareholders. Collect passports and addresses. The parent signs the board resolution.</li>
          <li>Week 2: notarise and apostille the parent documents. Apply for digital signature certificates for the directors.</li>
          <li>Week 3: file the name reservation, then the SPICe+ incorporation form with the memorandum and articles.</li>
          <li>Week 4: receive the certificate of incorporation, PAN and TAN. Start the bank account application.</li>
          <li>Weeks 5 and 6: open the bank account, receive the share capital, allot shares and file Form FC-GPR within 30 days of allotment.</li>
        </ul>
        <p className="text-gray-700 mb-4">If you start collecting documents before the board meeting rather than after it, the whole plan often moves forward by a week. The single most useful thing a parent company can do is check that names, addresses and dates match exactly across every document before anything is notarised.</p>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Timeline differences by parent country</h3>
        <p className="text-gray-700 mb-4">Parents in Apostille Convention countries such as the US, UK, Germany, Japan, Australia and Singapore usually finish their document stage in one to two weeks. Hong Kong uses an apostille too, but a Hong Kong shareholder is subject to the approval requirement for land-border countries, which dominates the timeline. Chinese parents need approval and, depending on the document, legalisation. Parents in the UAE need embassy attestation rather than an apostille, which typically adds one to two weeks.</p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India firm of Chartered Accountants and Company Secretaries, serving foreign companies since 2016. We handle the Indian side end to end, with the best pricing, better work support and a free first consultation.
        </p>
        <GuideCTA title={"Working to a Launch Date?"} description={"Tell us when you need the Indian company running, and we will build a week-by-week plan from apostille to bank account."} />

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
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Working to a Launch Date?"} description={"Tell us when you need the Indian company running, and we will build a week-by-week plan from apostille to bank account."} />
    </main>
  )
}
