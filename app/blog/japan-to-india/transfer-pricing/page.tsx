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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/transfer-pricing"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "flows", label: "Typical Japan-India flows" },
  { id: "methods", label: "Choosing the method" },
  { id: "documents", label: "Indian documentation and reporting" },
  { id: "alignment", label: "Aligning with the Japanese local file" },
  { id: "certainty", label: "Safe harbour and advance pricing" },
  { id: "year-end", label: "Year-end true-ups" },
  { id: "range", label: "How India tests the price: the arm's length range" },
  { id: "bilateral-apa", label: "Bilateral APAs between India and Japan" },
  { id: "master-file", label: "Master file and country-by-country reporting" },
  { id: "agreements", label: "Intercompany agreements Indian officers expect" },
  { id: "tp-calendar", label: "A transfer pricing calendar for a 31 March year" },
  { id: "study", label: "What the Indian study contains" },
  { id: "jp-contract-mfg", label: "Contract manufacturers supplying Japan" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Which transactions with the Japanese parent need transfer pricing?", a: "Services, goods, royalties, management fees, cost allocations, loans and guarantees between the subsidiary and any group company outside India." },
  { q: "What is Form 48?", a: "The accountant's report on international transactions under the Income-tax Act, 2025, previously Form 3CEB, certified by a Chartered Accountant." },
  { q: "When is documentation required?", a: "When international transactions in a year exceed ₹1 crore in total." },
  { q: "How are captive service centres priced?", a: "Usually at cost plus a mark-up benchmarked against independent service companies." },
  { q: "Does the Japanese tax authority check the same price?", a: "Yes. Japan's National Tax Agency reviews the parent's side, so both files should use the same method and margin." },
  { q: "Has India signed bilateral APAs with Japan?", a: "India and Japan negotiate bilateral Advance Pricing Agreements for groups that apply, fixing the method for future years." },
  { q: "What is the penalty for missing documentation?", a: "2% of the value of each international transaction, and ₹1 lakh for not filing Form 48." },
  { q: "When should a year-end adjustment be made?", a: "Before the books close on 31 March, so GST, Withholding Tax and customs can follow it." },
  { q: "Are bilateral APAs common between India and Japan?", a: "Yes. Japanese groups use bilateral APAs with India more than most investors, for large and stable flows." },
  { q: "Which comparables does India use?", a: "Normally Indian companies from Indian databases, tested within the 35th to 65th percentile range." },
  { q: "Does India accept the Japanese local file?", a: "No. India requires its own transfer pricing study on Indian comparables, although the facts should match the Japanese local file." },
]

const relatedCards = [
  { title: "Tax Notices and Disputes", desc: "Answering transfer pricing references.", href: "/japan-to-india/tax-notices-and-litigation" },
  { title: "Tax Treaty and PE Risk", desc: "How the treaty affects payments to Japan.", href: "/japan-to-india/dtaa-pe-risk" },
  { title: "Repatriating Profits to Japan", desc: "Royalties and fees under the treaty.", href: "/japan-to-india/repatriating-profits" },
  { title: "Audit and Internal Controls", desc: "Controls over intercompany pricing.", href: "/japan-to-india/audit-icofr" },
]

export default function TransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Transfer Pricing in India: A Guide for Japanese Parents and Their Indian Subsidiaries"
        description="How transfer pricing works for an Indian subsidiary of a Japanese company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits."
        datePublished="2026-10-20"
        dateModified="2026-11-13"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "Transfer Pricing in India for Japanese-Owned Subsidiaries" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: transfer pricing"
        title="Transfer Pricing in India: A Guide for Japanese Parents and Their Indian Subsidiaries"
        updated="13 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Every transaction between the Indian subsidiary and its Japanese parent or group companies must be priced as if the parties were independent. India and Japan&apos;s National Tax Agency each test the same price, so the Indian documentation and the parent&apos;s Japanese local file should use the same method and margins. Because most Japanese groups close on 31 March like India, the two transfer pricing years usually align.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="transfer-pricing" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Principle", "Arm's length pricing for international transactions with associated enterprises"],
                ["Indian law", "Sections 161 to 172 of the Income-tax Act, 2025 (previously Sections 92 to 92F)"],
                ["Accountant's report", "Form 48 (previously Form 3CEB), certified by a Chartered Accountant"],
                ["Documentation threshold", "Annual documentation where international transactions together exceed ₹1 crore"],
                ["Penalties", "2% of transaction value for missing documentation; ₹1 lakh for not filing Form 48"],
                ["Year alignment", "Most Japanese parents close on 31 March, the same as India"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="flows" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Typical Japan-India flows</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Flow</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Usual method</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Evidence to keep</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Software, engineering or design services to the parent</th>
                <td className="border border-gray-300 p-3">Cost plus a mark-up (transactional net margin method)</td>
                <td className="border border-gray-300 p-3">Timesheets, deliverables, cost base</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Components or finished goods bought from Japan</th>
                <td className="border border-gray-300 p-3">Resale price or transactional net margin method</td>
                <td className="border border-gray-300 p-3">Customs value consistency, distributor margins</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Royalty for Japanese technology or brand</th>
                <td className="border border-gray-300 p-3">Comparable uncontrolled price or profit split</td>
                <td className="border border-gray-300 p-3">Licence agreement and benefit analysis</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Management fees from the parent</th>
                <td className="border border-gray-300 p-3">Cost-based, with proof of benefit</td>
                <td className="border border-gray-300 p-3">Service descriptions and allocation keys</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Loan from the parent</th>
                <td className="border border-gray-300 p-3">Interest benchmarked to market rates</td>
                <td className="border border-gray-300 p-3">ECB terms and credit rating analysis</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="methods" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing the method</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Captive service centres for Japanese groups are usually remunerated at cost plus a mark-up, tested against independent service companies. Indian distributors of Japanese products are tested on their operating margin. Royalties are harder to benchmark and draw the most questions, so the licence should state what is licensed and how the subsidiary benefits.
        </p>
        <h2 id="documents" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian documentation and reporting</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Maintain annual documentation once international transactions exceed ₹1 crore.</li>
          <li>File the accountant&apos;s report in Form 48 by the due date of the tax return.</li>
          <li>File the master file where the group crosses the revenue and transaction thresholds, and support the parent&apos;s country-by-country report.</li>
          <li>Update the benchmarking study each year, or at least refresh the financials of the comparables.</li>
        </ul>
        <h2 id="alignment" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Aligning with the Japanese local file</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Japan&apos;s National Tax Agency looks at the same transactions from the parent&apos;s side. Where the Indian file shows a 15% mark-up on services and the Japanese file assumes 10%, one of the two authorities will challenge it. Agree the method, the tested party and the target margin once, and use the same figures in both countries.
        </p>
        <h2 id="certainty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Safe harbour and advance pricing</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India&apos;s safe harbour rules offer fixed margins for some services, which removes the benchmarking argument for qualifying transactions. For larger or recurring flows, a bilateral Advance Pricing Agreement negotiated by India and Japan fixes the method for up to five future years and can roll back to earlier years. Disputes that still lead to double tax can go to the Mutual Agreement Procedure under the treaty.
        </p>
        <h2 id="year-end" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Year-end true-ups</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Raise any adjustment to bring the subsidiary&apos;s margin into the agreed range before the books close on 31 March. Late adjustments complicate GST, Withholding Tax and customs, and an adjustment made after the Indian year end can be questioned in both countries.
        </p>
        <h2 id="range" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How India tests the price: the arm&apos;s length range</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India does not test a single comparable. It builds a set of independent companies and accepts the Indian result if it falls within a defined range:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Six or more comparables: the 35th to 65th percentile, with an out-of-range result moved to the median.</li>
          <li>Fewer than six: the arithmetic mean, with a tolerance of 3% (1% for wholesale traders).</li>
          <li>Indian comparables from Indian databases are normally required, while the Japanese local file may use Asia-Pacific or Japanese sets; explain the difference in both files.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Example.</strong> An Indian engineering team costs ₹12 crore a year and charges the Japanese parent cost plus 8%, a mark-up typical of Japanese captive arrangements. If the Indian comparables show a range of 12% to 17% with a median of 14%, the Indian officer would raise the mark-up to 14%, adding ₹72 lakh to Indian income. Japan would relieve the double tax only through the Mutual Agreement Procedure. Many Japanese groups therefore set Indian mark-ups by reference to Indian benchmarks from the start.
        </p>

        <h2 id="bilateral-apa" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Bilateral APAs between India and Japan</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Japan and India have concluded a number of bilateral advance pricing agreements, and Japanese groups use them more than most investors. A bilateral APA fixes the method and margin for up to five future years, agreed by both tax authorities, and India allows a rollback to up to four earlier years. It is the strongest protection for a large, stable flow such as an engineering centre or a contract manufacturer supplying the Japanese group.
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Pre-filing meetings with the Indian authority and the National Tax Agency.</li>
          <li>A formal application with the functional analysis and proposed method.</li>
          <li>Negotiation between the two authorities, which can take several years.</li>
          <li>Signature, then annual compliance reports showing the agreed terms were applied.</li>
        </ol>

        <h2 id="master-file" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Master file and country-by-country reporting</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Indian company files a master file where the group&apos;s revenue exceeds ₹500 crore and its international transactions exceed ₹50 crore. Country-by-country reporting applies at consolidated group revenue of ₹6,400 crore or more. A Japanese ultimate parent that files the report with the National Tax Agency usually satisfies the Indian requirement through exchange, with an Indian notification naming the reporting entity.
        </p>

        <h2 id="agreements" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Intercompany agreements Indian officers expect</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Specific descriptions of services, goods or licensed rights.</li>
          <li>The pricing method, mark-up or royalty rate, and the true-up mechanism.</li>
          <li>Invoicing currency, usually yen or US dollars, and who bears exchange differences.</li>
          <li>Ownership of intellectual property developed in India.</li>
          <li>Stamping under Indian law before the agreement is relied on in India.</li>
        </ul>
        <h2 id="tp-calendar" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A transfer pricing calendar for a 31 March year</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">When</th><th scope="col" className="border border-gray-300 p-3 text-left">Step</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">February</th><td className="border border-gray-300 p-3">Check the year-to-date transfer pricing margin and plan any true-up</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">March</th><td className="border border-gray-300 p-3">Issue true-up invoices before the books close</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">April to August</th><td className="border border-gray-300 p-3">Update the transfer pricing study with current comparables</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">By 31 October</th><td className="border border-gray-300 p-3">File Form 48 with the tax audit</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Ongoing</th><td className="border border-gray-300 p-3">Align the Indian transfer pricing file with the Japanese local file</td></tr>
            </tbody>
          </table>
        </div>
        <h2 id="study" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the Indian study contains</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Indian study describes the group, the Indian company&apos;s functions, assets and risks, each international transaction, the method and the comparables. It is kept on file and produced when the tax department asks, while Form 48 is filed every year with the tax audit.
        </p>
        <h2 id="jp-contract-mfg" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contract manufacturers supplying Japan</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Where the Indian company manufactures for the Japanese group, it is usually tested on its operating margin against independent contract manufacturers, with materials, tooling and quality responsibilities set out in the agreement.
        </p>





        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We prepare the benchmarking, the Indian documentation and Form 48, align the margins with your Japanese local file, and support Advance Pricing Agreement and dispute work.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link> and <Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">accounting, reporting and audit support</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/transfer-pricing" />
        <GuideCTA
          title="Setting transfer prices with your Japanese parent?"
          description="Tell us the flows, and we will propose the method and documentation."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/japan-to-india/faq"
          seeAllLabel="See all Japanese FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Japanese parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "National Tax Agency, Japan", href: "https://www.nta.go.jp/english/" },
            { label: "Central Board of Direct Taxes: APA programme", href: "https://incometaxindia.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Transfer Pricing with Your Japanese Parent?"
        description="Tell us the intercompany transactions, and we'll map the Indian documentation and how it lines up with the parent's Japanese TP files."
      />
    </main>
  )
}
