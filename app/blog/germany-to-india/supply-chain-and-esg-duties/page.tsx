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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/supply-chain-and-esg-duties"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "lksg", label: "The German Supply Chain Act in practice" },
  { id: "what-india", label: "What an Indian subsidiary or supplier should prepare" },
  { id: "cbam", label: "CBAM and Indian exporters" },
  { id: "customs", label: "Customs and the free trade agreement" },
  { id: "plan", label: "A light programme" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does the German Supply Chain Act apply to my Indian subsidiary?", a: "If your German group has 1,000 or more employees in Germany, the Indian subsidiary is part of the group's own business area for the risk analysis. A smaller group is not directly covered but may receive duties through customer contracts." },
  { q: "Has the German Supply Chain Act changed?", a: "A cabinet draft of 3 September 2025 proposes to abolish the reporting duty and limit fines. Confirm the current status before building your programme." },
  { q: "What do German customers ask Indian suppliers for?", a: "A supplier code of conduct, records on wages and safety, environmental permits and emission data, a complaints channel and audit reports." },
  { q: "What is CBAM?", a: "The EU Carbon Border Adjustment Mechanism, which puts a carbon price on imports of certain goods such as steel, aluminium, cement, fertilisers, electricity and hydrogen." },
  { q: "Will the India-EU free trade agreement remove customs duty immediately?", a: "No. The agreement was concluded on 27 January 2026 and is not yet in force. Rely on current duties until it applies and your goods meet its origin rules." },
  { q: "Should a small Indian company prepare an evidence file?", a: "Yes. A single file of policies, audit reports and emission data saves time when several German customers send questionnaires." },
]

const relatedCards = [
  { title: "The India-EU Free Trade Agreement: What It Changes, and What It Leaves Alone, for a German Company Setting Up in India", desc: "Status and content of the India-EU free trade agreement for German companies: services access, staff mobility, tariffs on components, the investment protection gap and what stays under the 1995 tax treaty.", href: "/germany-to-india/india-eu-fta-and-germany" },
  { title: "Hiring in India as a German Employer: What Changes from German Practice", desc: "A comparison for German HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and dismissal, no works council, payroll tax and share plans, set against German practice.", href: "/germany-to-india/hiring-in-india" },
  { title: "Common Mistakes German Companies Make in India and How to Avoid Them", desc: "The most frequent mistakes German companies make when setting up in India: late FEMA filings, missing forms for treaty relief, works council surprises, apostille errors, PE creation and transfer pricing gaps.", href: "/germany-to-india/common-mistakes" },
  { title: "Setting Up a Global Capability Centre in India: A Guide for German Mittelstand and Large Groups", desc: "How German companies set up captive engineering, IT and shared service centres in India: entity choice, cost-plus transfer pricing, export of services, the works council on offshoring, data and build-operate-transfer.", href: "/germany-to-india/gcc-for-german-companies" },
]

export default function SupplyChainAndEsgDutiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Supply Chain Due Diligence, Sustainability Reporting and CBAM: How German and EU Rules Reach Indian Operations"
        description="How German and EU supply chain, sustainability and carbon border rules reach an Indian subsidiary or supplier: the German Supply Chain Act (LkSG), EU reporting, CBAM, and what to prepare."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "Supply Chain, ESG and Customs: What German Rules Mean for Your Indian Operations" },
        ]}
      />

      <GuideHero
        eyebrow="Compliance: supply chain and ESG"
        title="Supply Chain Due Diligence, Sustainability Reporting and CBAM: How German and EU Rules Reach Indian Operations"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          German and EU rules reach beyond Germany&apos;s borders. The German Supply Chain Due Diligence Act
          (LkSG) applies to companies with 1,000 or more employees in Germany and requires risk analysis of
          direct suppliers and, where they have knowledge, indirect ones; a cabinet draft of 3 September 2025
          proposes to abolish the reporting duty and limit fines. EU sustainability reporting and the Carbon
          Border Adjustment Mechanism add data requests that land on Indian suppliers and subsidiaries. Prepare
          a simple evidence file now instead of answering each customer questionnaire from scratch.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="esg-supply-chain" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["LkSG", "German Supply Chain Due Diligence Act; applies to companies with 1,000+ employees in Germany; risk analysis, preventive measures, complaints procedure"],
                ["Reform", "Cabinet draft of 3 September 2025 abolishes the reporting duty and limits fines; confirm the current status"],
                ["Passed-down duties", "Smaller Indian suppliers get questionnaires, audits and contract clauses from German customers"],
                ["EU reporting", "Sustainability reporting rules for large companies; scope and timing have been revised, so check the current status"],
                ["CBAM", "EU carbon border mechanism for certain imports such as steel, aluminium, cement, fertiliser, electricity and hydrogen; relevant to Indian exporters"],
                ["Evidence file", "Policies, audit reports, emission data and complaint logs, ready to share"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="lksg" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The German Supply Chain Act in practice</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Who is covered:</strong> companies with 1,000 or more employees in Germany, including affiliated companies under the rules. Smaller companies are not directly covered but often receive the duties through contracts.</li>
          <li><strong>What it requires:</strong> a risk analysis, a policy statement, preventive and remedial measures, a complaints procedure and documentation.</li>
          <li><strong>Supplier focus:</strong> direct suppliers first; indirect suppliers when the company gets substantial knowledge of a violation.</li>
          <li><strong>Indian relevance:</strong> an Indian subsidiary of a German group is part of the group&apos;s own business area and is covered by the group&apos;s risk analysis. Indian suppliers receive requests.</li>
          <li><strong>Reform:</strong> a cabinet draft dated 3 September 2025 proposes to abolish the reporting duty and limit fines. Check the status of the draft before building a programme.</li>
        </ul>

        <h2 id="what-india" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What an Indian subsidiary or supplier should prepare</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Why it is asked for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Code of conduct and human rights policy", "Customers ask for a signed supplier code"],
                ["Wages, hours and child labour records", "Core risk area under due diligence questionnaires"],
                ["Health and safety certificates and incident logs", "Occupational safety risk"],
                ["Environmental permits and emission data", "Environmental risk and CBAM data"],
                ["Grievance channel", "Complaints procedure is a required element"],
                ["Sub-supplier map", "Customers want visibility down the chain"],
                ["Audit reports", "Third-party audits reduce repeated customer audits"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="cbam" className="text-2xl font-bold text-gray-900 mt-12 mb-4">CBAM and Indian exporters</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The EU Carbon Border Adjustment Mechanism applies to imports of certain goods into the EU, such as iron and steel, aluminium, cement, fertilisers, electricity and hydrogen. Importers must report embedded emissions and, from the definitive period, buy certificates.</li>
          <li>An Indian subsidiary that ships these goods to Germany, or a German buyer that sources them in India, will be asked for verified emission data.</li>
          <li>Build the emission data process early; the scope and the dates of the definitive period have been changed by EU legislation over time, so confirm the current schedule.</li>
        </ul>

        <h2 id="customs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Customs and the free trade agreement</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Goods moving between Germany and India pay Indian customs duty and GST on import, and EU duty and VAT
          on the way back. The India-EU free trade agreement, concluded on 27 January 2026 and not yet in force,
          is expected to lower tariffs once it applies. Do not price on assumed preferences until the agreement
          is in force and your product qualifies under its origin rules. See{" "}
          <Link href="/germany-to-india/india-eu-fta-and-germany" className="text-blue-800 font-semibold hover:underline">the India-EU FTA guide</Link>.
        </p>

        <h2 id="plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A light programme</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Map which German customers and group rules require which documents.</li>
          <li>Create one evidence file and keep it current.</li>
          <li>Add a grievance channel in the Indian subsidiary and publish it.</li>
          <li>Train procurement and HR on the basics.</li>
          <li>Review again when the reform of the German Act is final.</li>
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

        <GuideServiceBox path="/germany-to-india/supply-chain-and-esg-duties" />
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
            { label: "BAFA: German Federal Office for Economic Affairs and Export Control", href: "https://www.bafa.de/EN/Home/home_node.html" },
            { label: "European Commission: CBAM", href: "https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en" },
            { label: "Ministry of External Affairs (India)", href: "https://www.mea.gov.in/" },
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
        title="Meeting German Supply Chain and ESG Duties in India?"
        description="Tell us your Indian operations and suppliers, and we'll map the records your German compliance team needs from India."
      />
    </main>
  )
}
