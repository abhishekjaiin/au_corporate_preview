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

const PAGE_URL = "https://www.theaucorp.com/usa-to-india/cost-of-setting-up-a-subsidiary-in-india-from-the-us"
const PARENT_URL = "https://www.theaucorp.com/usa-to-india"

const toc = [
  { id: "country-specific", label: "What's different for US companies" },
  { id: "three", label: "Set-up, running and capital" },
  { id: "onetime", label: "One-time costs" },
  { id: "running", label: "Running costs in the first year" },
  { id: "capital", label: "Sizing the capital" },
  { id: "template", label: "Budget template" },
  { id: "forgotten", label: "Costs US teams forget" },
  { id: "ask", label: "Questions to ask before accepting a quote" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How much does it cost to set up a subsidiary in India from the US?", a: "AU Corporate's fee is USD 750 to USD 1,000 for share capital up to ₹10 lakh, for the incorporation work only. Government charges, bank charges, office, audit and compliance are separate." },
  { q: "Is there a minimum capital?", a: "No statutory minimum for a private limited company. Size it to your 12 to 18 month plan." },
  { q: "What is ₹10 lakh in dollars?", a: "₹10 lakh is roughly USD 10,500 at an indicative ₹95 per dollar (late-2026 level; check the live rate before remitting)." },
  { q: "Does the set-up fee cover annual compliance?", a: "No. Accounting, tax, payroll and audit are priced against your plan." },
  { q: "Are there US-side costs?", a: "Yes: notary and apostille for documents, and the US CPA's work on Form 5471 and the foreign tax credit." },
  { q: "What recurring costs start in year one?", a: "Registered office, accounting, GST and TDS, payroll, statutory audit, annual filings, the tax return and, where it applies, a transfer pricing report." },
  { q: "Are bank charges included?", a: "Usually not. Ask who bears remittance charges and the conversion spread." },
  { q: "Why is the audit due with no revenue?", a: "A company must have its accounts audited and filed every year whether or not it trades." },
  { q: "How do I get a costing for my plan?", a: "Use the costing tool on the main guide or send us the structure, headcount, sector and shareholders." },
]

const relatedCards = [
  { title: "How Long Does a US Company Take to Set Up in India? A Realistic Timeline from Decision to First Invoice, with Delaware Documents and US Time Zones", desc: "A schedule for a US parent: US documents and apostille, Indian incorporation, bank onboarding across a 9.5 to 12.5 hour time difference, remittance and the 60-day and 30-day deadlines, plus what to do when a customer deadline forces speed.", href: "/usa-to-india/how-long-it-takes-to-set-up-from-the-us" },
  { title: "Incorporation process", desc: "The online steps from name approval to the certificate.", href: "/usa-to-india/incorporation-process" },
  { title: "Funding and FC-GPR", desc: "How to bring in capital and report it to the Reserve Bank.", href: "/usa-to-india/funding-fema-fc-gpr" },
  { title: "Compliance calendar", desc: "Annual and monthly filings for an Indian subsidiary.", href: "/usa-to-india/compliance-calendar" },
]

export default function CostOfSettingUpASubsidiaryInIndiaFromTheUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="What It Costs a US Company to Set Up a Subsidiary in India: One-Time Charges, Annual Running Costs, Capital and the Costs Teams Forget"
        description="A budgeting guide for US companies: what the one-time set-up costs, what the subsidiary costs every year to keep compliant, how to size the capital you invest, and a template and question list for comparing quotes. The AU Corporate set-up fee is stated; other lines are framed so you can build your own estimate."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-US"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/usa-to-india" },
          { label: "Cost of Setting Up a Subsidiary in India from the US: Budget Framework and Fee Questions" },
        ]}
      />

      <GuideHero
        eyebrow="Cost: budget"
        title="What It Costs a US Company to Set Up a Subsidiary in India: One-Time Charges, Annual Running Costs, Capital and the Costs Teams Forget"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Three numbers describe the cost of an Indian subsidiary, and they should not be added together without
          labels: the one-time cost of setting up the company, the recurring cost of keeping it compliant and
          the capital you invest in shares. AU Corporate&apos;s fee for setting up the subsidiary is USD 750 to
          USD 1,000 for share capital up to ₹10 lakh (₹10 lakh is roughly USD 10,500 at an indicative ₹95 per
          dollar (late-2026 level; check the live rate before remitting)). That covers the incorporation work
          only. Government and stamp charges, US notary and apostille costs, bank charges and conversion spread,
          the registered office, audit, tax filings, payroll and legal work are separate, and the right figure
          depends on your structure, state and plan. This page gives a framework and a template, and shows which
          lines US teams most often forget, so that you can compare quotes on the same basis.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the US
          </Link>
        </p>

        <GuideCountryContext country="usa" topic="setup-cost" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["AU Corporate set-up fee", "USD 750 to USD 1,000 for share capital up to ₹10 lakh; incorporation work only"],
                ["Minimum capital", "No statutory minimum for a private limited company; size it to your 12 to 18 month plan"],
                ["One-time", "Professional fee, government and stamp charges, digital signatures, US notary and apostille, first remittance charges"],
                ["Recurring", "Registered office, accounting, GST and TDS returns, payroll, statutory audit, annual filings, tax return, transfer pricing report"],
                ["Variable", "Legal agreements, licences, visas, employer-of-record fees, tax notices"],
                ["US-side costs", "Form 5471 and related US tax work, US notary, apostille and courier"],
                ["Exchange rate", "₹10 lakh is roughly USD 10,500 at an indicative ₹95 per dollar (late-2026 level; check the live rate before remitting)"],
                ["Not included", "Salaries, rent and the capital that funds the business"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="three" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Set-up, running and capital</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          US finance teams often ask for a single figure for India. The honest answer is three. The set-up
          budget is a one-time spend that ends when the company has its certificate of incorporation, tax
          numbers, bank account and registers. The running budget is what the company pays each year to remain
          in good standing, whether or not it earns revenue. The capital is the money the parent invests, which
          is not a cost but needs to be sized so that the subsidiary can pay its running budget and build the
          business without an early second round. A board that sees them separately can compare each against the
          right benchmark.
        </p>

        <h2 id="onetime" className="text-2xl font-bold text-gray-900 mt-12 mb-4">One-time costs</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Line</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Charged by</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">How it is set</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Often forgotten</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Incorporation professional fee", "Your adviser", "Fixed fee; AU Corporate is USD 750 to USD 1,000 for share capital up to ₹10 lakh", "Whether name approval, PAN, TAN and first filings are included"],
                ["Government filing fee and stamp duty on the charter documents", "Ministry of Corporate Affairs and the state", "Rises with authorised capital; differs by state", "High authorised capital raises both"],
                ["DIN and Digital Signature Certificates", "Government and certifying agencies", "Small fees per director", "Each foreign director needs one"],
                ["US notary, apostille and courier", "Notary, Secretary of State, courier", "Per document", "Rework when a name differs between documents"],
                ["Registered office", "Landlord or business centre", "Monthly or annual, with deposit", "Deposit and minimum term"],
                ["Bank charges and conversion spread on the first remittance", "US and Indian banks", "Fee plus exchange margin", "The margin can exceed the stated fee"],
                ["Foreign investment filing", "Your adviser and the bank", "Usually in advisory fees", "Late filing carries a fee far above the cost of filing"],
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

        <h2 id="running" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Running costs in the first year</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Frequency</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What drives the price</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Accounting and bookkeeping</th>
                  <td className="border border-gray-300 p-3">Monthly</td>
                  <td className="border border-gray-300 p-3">Transactions, currencies and the US reporting pack</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">GST returns</th>
                  <td className="border border-gray-300 p-3">Monthly or quarterly</td>
                  <td className="border border-gray-300 p-3">Invoices and state registrations</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">TDS and withholding returns</th>
                  <td className="border border-gray-300 p-3">Monthly deposits, quarterly returns</td>
                  <td className="border border-gray-300 p-3">Payees and cross-border payments</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Payroll, provident fund and state insurance</th>
                  <td className="border border-gray-300 p-3">Monthly</td>
                  <td className="border border-gray-300 p-3">Headcount</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Statutory audit</th>
                  <td className="border border-gray-300 p-3">Annual</td>
                  <td className="border border-gray-300 p-3">Turnover and complexity</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Company annual filings</th>
                  <td className="border border-gray-300 p-3">Annual</td>
                  <td className="border border-gray-300 p-3">Mostly fixed</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Income tax return and advance tax</th>
                  <td className="border border-gray-300 p-3">Annual and quarterly</td>
                  <td className="border border-gray-300 p-3">Profit and adjustments</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Transfer pricing report and Form 3CEB</th>
                  <td className="border border-gray-300 p-3">Annual</td>
                  <td className="border border-gray-300 p-3">Number and size of group transactions</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">US reporting support (Form 5471 data)</th>
                  <td className="border border-gray-300 p-3">Annual</td>
                  <td className="border border-gray-300 p-3">Frequency of US requests; see <Link href="/usa-to-india/us-tax-on-indian-subsidiary-ncti-subpart-f-and-foreign-tax-credit" className="text-blue-800 font-semibold hover:underline">the US tax guide</Link></td>
                </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 leading-relaxed mb-10">
          Prices for these lines vary a great deal between providers. AU Corporate quotes them against your
          plan, so ask for a costing and not a rate card. See{" "}
          <Link href="/usa-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">the compliance calendar</Link>{" "}
          for the dates behind each line.
        </p>

        <h2 id="capital" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sizing the capital</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          There is no statutory minimum capital for a private limited company. Add together the one-time costs,
          twelve to eighteen months of running costs, the payroll and rent of the team until revenue covers it,
          working capital for receivables and inventory, deposits and a reserve for delay. Because foreign
          investment is reported and priced under the Foreign Exchange Management Act, several small remittances
          create more paperwork than one larger one, but later top-ups are routine. ₹10 lakh is roughly USD
          10,500 at an indicative ₹95 per dollar (late-2026 level; check the live rate before remitting). See{" "}
          <Link href="/usa-to-india/funding-fema-fc-gpr" className="text-blue-800 font-semibold hover:underline">funding and FC-GPR</Link>.
        </p>

        <h2 id="template" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Budget template</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Block</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Month 0 to 3</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Month 4 to 12</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Set-up (one time)", "Fill in", "None", "Include US notary and apostille"],
                ["Registered office and utilities", "Fill in", "Fill in", "Include deposit"],
                ["Accounting, tax and payroll compliance", "Fill in", "Fill in", "Ask for a fixed monthly fee"],
                ["Audit and annual filings", "None", "Fill in", "Accrue monthly"],
                ["Salaries and employer contributions", "Fill in", "Fill in", "Include bonus and notice pay"],
                ["Legal agreements and licences", "Fill in", "Fill in", "Customer, supplier and lease contracts"],
                ["US-side tax and reporting", "Fill in", "Fill in", "CPA time for Form 5471 and credits"],
                ["Contingency", "Add margin", "Add margin", "Bank onboarding delay"],
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

        <h2 id="forgotten" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Costs US teams forget</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The first-year audit fee, which is due even with no revenue.</li>
          <li>Conversion spread on the dollar-to-rupee remittance.</li>
          <li>Withholding tax on payments to the US parent, which is a real cost. See <Link href="/usa-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">repatriating profits</Link>.</li>
          <li>GST on management fees charged by the parent, paid under reverse charge by the Indian company.</li>
          <li>The cost of delay in opening the bank account while rent and salaries are already running.</li>
          <li>The US CPA&apos;s time to build the Form 5471 file.</li>
          <li>Travel and the time of your own people.</li>
        </ul>

        <h2 id="ask" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Questions to ask before accepting a quote</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>What is included in the set-up fee: name approval, PAN, TAN, address, first auditor and the foreign investment filing?</li>
          <li>What is excluded, and is every exclusion listed?</li>
          <li>Is the quote in USD or INR, and who bears bank charges?</li>
          <li>Who files the first deadlines and are they priced?</li>
          <li>What happens if the registrar raises queries?</li>
          <li>What does it cost to keep the company compliant each month?</li>
          <li>Who will do the work, and can we speak to them?</li>
        </ol>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.irs.gov/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Internal Revenue Service (US)</a>,{" "}
          <a href="https://www.bis.gov/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Bureau of Industry and Security (US)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/usa-to-india/cost-of-setting-up-a-subsidiary-in-india-from-the-us" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/usa-to-india/faq"
          seeAllLabel="See all the FAQs"
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
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and US rules
          change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Budgeting for an Indian Subsidiary?"
        description="Tell us your structure and share capital, and we'll send a fixed quote and a first-year cost checklist."
      />
    </main>
  )
}
