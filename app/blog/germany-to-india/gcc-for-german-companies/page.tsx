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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/gcc-for-german-companies"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "why", label: "Why German companies build centres in India" },
  { id: "models", label: "Operating models compared" },
  { id: "structure", label: "Structure and tax in India" },
  { id: "germany", label: "German points to settle first" },
  { id: "start", label: "A phased start" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Why do German companies set up captive centres in India?", a: "For engineering and IT talent, time-zone cover and scalable teams, usually serving the German group at cost plus a mark-up." },
  { q: "Does shifting work from Germany to India involve the works council?", a: "Often yes. A move of operations abroad can be a change in operations that requires information and consultation, and sometimes a social plan. Speak to German labour counsel early." },
  { q: "How is a captive centre priced for tax?", a: "Normally cost plus a benchmarked mark-up, documented under Indian transfer pricing rules and checked against German documentation duties." },
  { q: "Is a build-operate-transfer arrangement better than a subsidiary?", a: "It helps companies without Indian experience, but you must agree the transfer terms, staff continuity and price in advance." },
  { q: "Can the Indian centre sign contracts for the German company?", a: "It should not. If it habitually concludes contracts on behalf of the German company, it can create a permanent establishment." },
  { q: "Is GST charged on services the Indian centre exports to Germany?", a: "If the export of services conditions are met, the supply is zero-rated. Confirm the conditions with your adviser." },
]

const relatedCards = [
  { title: "Transfer Pricing Between a German Parent and an Indian Subsidiary: What India Requires and Where Germany Differs", desc: "How transfer pricing works between Germany and India: Indian arm's length rules and Form 48, German documentation duties, the function transfer rules, APAs and the mutual agreement route.", href: "/germany-to-india/transfer-pricing" },
  { title: "Hiring in India as a German Employer: What Changes from German Practice", desc: "A comparison for German HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and dismissal, no works council, payroll tax and share plans, set against German practice.", href: "/germany-to-india/hiring-in-india" },
  { title: "Moving Personal Data Between Germany and India: GDPR Transfer Rules, Works Councils and the DPDP Act", desc: "How the GDPR and India's Digital Personal Data Protection Act apply when a German company has an Indian subsidiary: standard contractual clauses, transfer impact assessments, employee data, works council rights, breach notice and penalties.", href: "/germany-to-india/data-protection-gdpr-dpdp" },
  { title: "Which Structure Should a German Company Use in India? Subsidiary, Joint Venture, Project Office, Branch, LLP or Employer of Record", desc: "A decision guide for German companies: wholly owned subsidiary, joint venture with an Indian partner, project office, branch, liaison office, LLP and EOR, with tests, tax results, a GmbH & Co. KG warning and a choice by business model.", href: "/germany-to-india/structure-options" },
]

export default function GccForGermanCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Setting Up a Global Capability Centre in India: A Guide for German Mittelstand and Large Groups"
        description="How German companies set up captive engineering, IT and shared service centres in India: entity choice, cost-plus transfer pricing, export of services, the works council on offshoring, data and build-operate-transfer."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "Global Capability Centres in India for German Companies: Engineering, IT and Shared Services" },
        ]}
      />

      <GuideHero
        eyebrow="Model: capability centre"
        title="Setting Up a Global Capability Centre in India: A Guide for German Mittelstand and Large Groups"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Many German companies run an Indian captive centre for engineering, software, finance or IT support
          instead of selling in India. The centre is usually a wholly owned subsidiary that serves the German
          group at cost plus a mark-up. The German-specific points are the works council when work moves from
          German sites, the function transfer rules, data protection for German personal data, and the choice
          between building your own centre and a build-operate-transfer arrangement.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="gcc" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Typical form", "Wholly owned private limited company serving the group"],
                ["Pricing", "Cost plus a benchmarked mark-up for services to the parent and affiliates"],
                ["Indian tax", "Service income taxed at the domestic corporate rate; no India-sale GST burden on export of services if conditions are met"],
                ["Works council", "In Germany, shifting work to India can be a change in operations that triggers consultation"],
                ["Function transfer", "Moving a function with profit potential from Germany can trigger a German charge"],
                ["Data", "Standard contractual clauses and a transfer impact assessment for German personal data"],
                ["Models", "Build your own, build-operate-transfer, or a managed provider"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why German companies build centres in India</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Engineering depth:</strong> automotive, machinery and industrial software teams for design, simulation, testing and embedded work.</li>
          <li><strong>Skills shortage:</strong> access to large technical talent pools when German hiring is slow.</li>
          <li><strong>Time-zone cover:</strong> support and operations in the hours when German sites are closed.</li>
          <li><strong>Cost and scale:</strong> teams that can grow in steps; a first team of 20 to 50 often becomes several hundred.</li>
        </ul>

        <h2 id="models" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Operating models compared</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Model</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">How it works</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Best for</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Watch for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Own subsidiary from day one", "Incorporate, hire and run the centre", "Groups with a clear long-term plan", "Setup time; leadership hire"],
                ["Build-operate-transfer", "A partner sets up and runs the centre, then transfers it to you", "Companies without Indian experience", "Transfer terms, staff continuity, exit price"],
                ["Employer of Record then subsidiary", "Start with an EOR, convert later", "Pilots of a few people", "PE risk if staff conclude contracts"],
                ["Managed service provider", "A vendor provides the team", "Short projects", "Less control, IP and data clauses"],
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

        <h2 id="structure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Structure and tax in India</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The usual entity is a private limited company wholly owned by the German parent, or by a German holding company. See <Link href="/germany-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">structure options</Link>.</li>
          <li>Income is the cost-plus fee. A benchmarked mark-up supports the price; see <Link href="/germany-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li>Export of services can be zero-rated for GST if the conditions are met, including payment in convertible foreign exchange and the recipient being outside India. Confirm the current conditions with your adviser.</li>
          <li>Free trade zones and special economic zones have their own conditions and benefits. Check them against your plans before choosing a location.</li>
          <li>Do not let the Indian centre negotiate or conclude contracts with third parties for the German company, or a permanent establishment risk appears.</li>
        </ul>

        <h2 id="germany" className="text-2xl font-bold text-gray-900 mt-12 mb-4">German points to settle first</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Works council:</strong> if the work currently done in Germany will move to India, consult the works council early. Moving work abroad may be a change in operations with consultation and, in some cases, social plan duties. See <Link href="/germany-to-india/exit-and-restructuring" className="text-blue-800 font-semibold hover:underline">exit and restructuring</Link> for the Indian side of closures.</li>
          <li><strong>Function transfer:</strong> model the German tax effect of moving a function and its profit potential to India.</li>
          <li><strong>Data and trade secrets:</strong> see <Link href="/germany-to-india/data-protection-gdpr-dpdp" className="text-blue-800 font-semibold hover:underline">data protection</Link> and protect design data with access control and clear contracts.</li>
          <li><strong>Export controls:</strong> technical data shared with India can be subject to export control rules for certain products and technologies. Check classification with your compliance team.</li>
          <li><strong>Customer contracts:</strong> some German customers restrict where their data or work may be processed.</li>
        </ul>

        <h2 id="start" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A phased start</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Choose scope: which processes or engineering work, which team size, which German sponsor.</li>
          <li>Choose the city, taking talent, cost, infrastructure and any zone benefits into account.</li>
          <li>Incorporate and open the bank account; see <Link href="/germany-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">incorporation steps</Link>.</li>
          <li>Hire a head of centre and a core team, then add staff in waves.</li>
          <li>Document the intercompany agreement, price and data terms before work moves.</li>
          <li>Review scope and cost after 12 months.</li>
        </ol>

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

        <GuideServiceBox path="/germany-to-india/gcc-for-german-companies" />
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
            { label: "Invest India", href: "https://www.investindia.gov.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "GST Portal", href: "https://www.gst.gov.in/" },
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
        title="Setting Up an Engineering or IT Centre in India?"
        description="Tell us the functions and headcount, and we'll map the entity, transfer pricing and compliance for your capability centre."
      />
    </main>
  )
}
