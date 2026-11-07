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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/transfer-pricing"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "scope", label: "What counts as a transaction" },
  { id: "methods", label: "Choosing and applying a method" },
  { id: "india", label: "India: reporting and documentation" },
  { id: "services", label: "Intra-group services: the benefit test" },
  { id: "royalty", label: "Royalties and brand licences" },
  { id: "spain", label: "Spain and the match between files" },
  { id: "disputes", label: "Audits, advance pricing agreements and treaty relief" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is transfer pricing?", a: "The rules that require prices between related companies to be what independent parties would agree. India and Spain both apply them." },
  { q: "What is Form 3CEB?", a: "An accountant's report on international transactions with associated enterprises, filed with the Indian tax return." },
  { q: "Does a subsidiary with no revenue need documentation?", a: "Yes, if it has international transactions such as service fees or loans from the parent." },
  { q: "Which transactions are the highest risk?", a: "Management fees, royalties, intra-group loans, guarantees and cost allocations." },
  { q: "What is the benefit test for services?", a: "Whether an independent party would have paid for the service. Duplicate and shareholder services fail it." },
  { q: "Does Spain also require documentation?", a: "Yes. Larger groups prepare a master file, a local file and country-by-country reporting." },
  { q: "Can I agree the method in advance?", a: "Yes, through an advance pricing agreement, which takes time and cost but fixes the method for several years." },
  { q: "What if Spain and India disagree?", a: "The treaty's mutual agreement procedure lets the competent authorities try to resolve double taxation from an adjustment." },
  { q: "What is a safe harbour?", a: "A rule that accepts a stated margin for certain transactions. It gives certainty at the cost of flexibility." },
]

const relatedCards = [
  { title: "Taking Money Out of India to Spain: Dividend, Management Fee, Royalty, Interest and Capital Reduction Routes Compared, with the Treaty Rate and Spanish Relief", desc: "A comparison of the five routes a Spanish parent can use to take cash from an Indian subsidiary, with the Indian withholding tax, Indian conditions, Spanish tax treatment, documents, timing and the traps in each route.", href: "/spain-to-india/repatriating-profits" },
  { title: "What a Spanish Parent Must Do at Home: Registro de Inversiones Exteriores Filings, Participation Exemption, CFC Rules and Corporate Records", desc: "The Spanish-side steps for a parent investing in India: declarations to the Registro de Inversiones Exteriores (forms D-5A and D-8), board and notarial formalities, the participation exemption, CFC rules, related-party documentation and the beneficial ownership register.", href: "/spain-to-india/spanish-parent-obligations" },
  { title: "India-Spain Double Taxation Agreement Explained: 15% Dividends, 10% Royalties and Technical Fees, the 6-Month Site PE, the 10% Share-Gain Rule and the MLI", desc: "The India-Spain tax treaty explained for a Spanish parent with India as source state and Spain as residence state: dividend, interest, royalty and technical fee rates, permanent establishment, capital gains on Indian shares, credit and participation exemption, limitation of benefits, the MLI principal purpose test and how to claim relief.", href: "/spain-to-india/india-spain-dtaa" },
  { title: "Two-Country Compliance Calendar: Indian Company Filings, Tax, Payroll and RBI Returns, Plus the Spanish Parent's D-8, Tax and Documentation Dates", desc: "One calendar for the whole year showing what the Indian subsidiary files with Indian authorities and what the Spanish parent files in Spain, with the Indian financial year of April to March set against the Spanish calendar year and the points where they collide.", href: "/spain-to-india/compliance-calendar" },
]

export default function TransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Transfer Pricing for an Indian Subsidiary of a Spanish Group: Arm's Length Rules, Form 3CEB, Local File, Services, Royalties and Loans, and Spain's Own Documentation"
        description="How India and Spain test related-party prices: methods, thresholds, Form 3CEB, the master and local files, intra-group services and royalties, loans, safe harbours, advance pricing agreements, audits and the match between Indian and Spanish files."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "Transfer Pricing for Spanish Groups in India: Documentation, Form 3CEB and Benchmarking" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: transfer pricing"
        title="Transfer Pricing for an Indian Subsidiary of a Spanish Group: Arm's Length Rules, Form 3CEB, Local File, Services, Royalties and Loans, and Spain's Own Documentation"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Both India and Spain apply the arm&apos;s length principle, so any price between the Spanish group and
          its Indian subsidiary must be one that independent parties would agree. In India, a company with
          international transactions files Form 3CEB, an accountant&apos;s report, with its tax return and keeps
          documentation that supports each price. Spain requires related-party documentation too, and larger
          groups prepare a master file, a local file and country-by-country reporting. The Indian tax officer
          will look first at service fees, royalties, loans and the price of goods, because these are the routes
          for moving profit. A consistent approach in both countries, a written agreement for each flow, and a
          benchmarking study updated each year are the best protection. This guide is a map for the finance
          team; your transfer pricing adviser sets the actual method and margins.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="transfer-pricing" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Principle", "Arm's length price for every international transaction with an associated enterprise"],
                ["Annual report", "Form 3CEB from a Chartered Accountant, with the tax return"],
                ["Documentation", "Kept contemporaneously; the file must support the method chosen"],
                ["Methods", "Comparable uncontrolled price, resale price, cost plus, transactional net margin, profit split and others"],
                ["Group reporting", "Master file and country-by-country reporting for large groups"],
                ["Spanish side", "Related-party documentation; master file and local file for larger groups"],
                ["Dispute tools", "Advance pricing agreements; mutual agreement procedure under the treaty"],
                ["High-risk flows", "Management fees, royalties, intra-group loans, guarantees and cost allocations"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="scope" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What counts as a transaction</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          An international transaction includes the sale or purchase of goods, services such as management, IT
          or engineering support, royalties and licences, loans and guarantees, cost sharing and allocations of
          group costs, and the transfer of assets or employees. Between a Spanish parent and its Indian
          subsidiary, almost every payment is in scope. The test is applied transaction by transaction, or on a
          combined basis where the transactions are closely linked. A subsidiary that has no revenue yet still
          has transactions to document, for example the services the parent charges it.
        </p>

        <h2 id="methods" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing and applying a method</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Transaction</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Usual method</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What the officer will test</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Sale of goods to the subsidiary for resale", "Resale price or transactional net margin", "Margin of the Indian distributor against comparables"],
                ["Contract manufacturing for the parent", "Cost plus or transactional net margin", "Mark-up on full cost; capacity utilisation; losses"],
                ["Support services (IT, finance, engineering)", "Cost plus", "Real need, benefit, allocation key and mark-up"],
                ["Management fee", "Cost plus with a strong benefit test", "Whether the service is a shareholder activity; double charges"],
                ["Royalty for brand or technology", "Comparable uncontrolled price or profit split", "Rate against third-party licences; the value contributed in India"],
                ["Intra-group loan", "Comparable uncontrolled price", "Rate against third-party loans of similar credit and term"],
                ["Guarantee", "Fee against third-party guarantees", "Benefit to the borrower beyond implicit support"],
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

        <h2 id="india" className="text-2xl font-bold text-gray-900 mt-12 mb-4">India: reporting and documentation</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Form 3CEB is filed by a Chartered Accountant, with the return, for companies with international transactions; the due date follows the return.</li>
          <li>Documentation is kept in the form the rules prescribe and must be ready if the officer asks; a comparability analysis is updated each year.</li>
          <li>Master file reporting applies to groups above prescribed thresholds; country-by-country reporting is filed by the parent in the country of residence, here Spain, and the Indian subsidiary may be asked to notify.</li>
          <li>Penalties apply for failing to keep documents, for failing to report and for under-reporting income.</li>
          <li>Safe harbour rules exist for some transactions such as certain services and loans; they give certainty at a cost in margin.</li>
        </ul>

        <h2 id="services" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Intra-group services: the benefit test</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The question in a services audit is whether an independent party would have paid for the service. Fees
          for services that duplicate work the subsidiary already does, that benefit only the parent, or that
          are charged with no evidence of delivery are the ones disallowed. Keep a service catalogue that lists
          each service, the cost pool, the allocation key and the mark-up, and keep records that the service was
          delivered: timesheets, deliverables and emails. A Spanish group that runs shared services in Spain for
          several countries should apply the same catalogue in each country, because Indian officers ask for it.
        </p>

        <h2 id="royalty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Royalties and brand licences</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Spanish consumer groups often license a brand or technology to the Indian company for a percentage of
          sales. The royalty must reflect what the right is worth in India, and officers test it against
          comparable licences and against the margin that remains for the Indian company. A royalty that drives
          the subsidiary into losses is a signal that the rate is too high. Make sure the licence is real,
          registered where it needs to be and documented, and file the royalty with the correct treaty rate. See{" "}
          <Link href="/spain-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">repatriating profits</Link>.
        </p>

        <h2 id="spain" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Spain and the match between files</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Spain requires documentation of related-party transactions, with a master file and a local file for
          larger groups, and country-by-country reporting above the group threshold. The Spanish file and the
          Indian file should describe the same transactions with the same prices and the same functional
          analysis. Differences are the first thing an officer in either country will find. Agree one policy for
          the group, apply it in both files and update both each year. See{" "}
          <Link href="/spain-to-india/spanish-parent-obligations" className="text-blue-800 font-semibold hover:underline">Spanish parent obligations</Link>.
        </p>

        <h2 id="disputes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Audits, advance pricing agreements and treaty relief</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A transfer pricing audit in India can take years and ends in an adjustment that is taxed at the full
          rate. Three tools reduce the risk. An advance pricing agreement fixes the method for several years, at
          the cost of time and fees. The treaty&apos;s mutual agreement procedure lets the competent authorities
          of India and Spain resolve double taxation caused by an adjustment. And a safe harbour election, where
          available, gives certainty on the margin. Take advice when the first notice arrives, not when the
          deadline for appeal is near.
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

        <GuideServiceBox path="/spain-to-india/transfer-pricing" />
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
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
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
        title="Transfer Pricing Between Spain and India?"
        description="Tell us the intercompany transactions, and we'll map the Indian documentation, Form 3CEB and how it lines up with your Spanish file."
      />
    </main>
  )
}
