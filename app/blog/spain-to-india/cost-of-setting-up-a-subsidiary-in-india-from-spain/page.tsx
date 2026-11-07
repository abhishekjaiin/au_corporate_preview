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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/cost-of-setting-up-a-subsidiary-in-india-from-spain"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "three", label: "Three budgets, not one" },
  { id: "onetime", label: "One-time set-up costs, line by line" },
  { id: "running", label: "First-year running costs" },
  { id: "capital", label: "Sizing the share capital" },
  { id: "template", label: "A budget template you can copy" },
  { id: "forgotten", label: "The costs that are most often forgotten" },
  { id: "ask", label: "Questions to ask before you accept a quote" },
  { id: "next", label: "Getting a costing" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How much does it cost to set up a subsidiary in India from Spain?", a: "AU Corporate's fee for the set-up is USD 750 to USD 1,000 for share capital up to ₹10 lakh. Government charges, stamp duty, bank charges, office, audit and compliance are separate, and the total depends on your plan." },
  { q: "Is there a minimum capital?", a: "There is no statutory minimum for a private limited company. Size it to your 12 to 18 month plan and any sector rule." },
  { q: "What is ₹10 lakh in euros?", a: "₹10 lakh is about EUR 9,400 at an indicative ₹106 per euro (2 November 2026 market rate; check the live rate before remitting)." },
  { q: "Does the set-up fee include annual compliance?", a: "No. The set-up fee covers incorporation only. Accounting, tax, payroll and audit are priced against your plan." },
  { q: "What recurring costs start in the first year?", a: "Registered office, accounting, GST and TDS returns, payroll compliance, the statutory audit, annual company filings and the tax return, plus a transfer pricing report where thresholds are crossed." },
  { q: "Do I pay Indian stamp duty?", a: "Yes, on the charter documents and on some agreements. The rate depends on the state and on the document." },
  { q: "Are bank charges included in a quote?", a: "Usually not. Ask who bears remittance charges and the conversion spread." },
  { q: "Does Spanish notary and translation cost extra?", a: "Yes. Notary, apostille and sworn translation in Spain are separate from the Indian fee." },
  { q: "Can I reduce the cost by choosing a branch?", a: "A branch has its own conditions and a net worth test, and it is usually not cheaper in the long run. See the structure guide." },
  { q: "How do I get a costing for my plan?", a: "Use the costing tool on the main guide or send us the structure, headcount, sector and shareholders." },
]

const relatedCards = [
  { title: "How Long Does It Take a Spanish Company to Set Up in India? A Week-by-Week Timeline from Board Decision to First Invoice", desc: "A realistic schedule for a Spanish parent: documents and apostille in Spain, name and incorporation in India, bank account, share capital and foreign investment filing, commencement of business, first audit and first returns. Shows what runs in parallel and what causes delay.", href: "/spain-to-india/how-long-it-takes-to-set-up-from-spain" },
  { title: "Step-by-Step Incorporation of an Indian Private Limited Company by a Spanish Parent: From Name Approval to the Foreign Investment Filing", desc: "The exact steps to incorporate an Indian private limited company when the shareholder is Spanish: name, DIN and DSC, the SPICe+ form with AGILE-PRO-S, charter documents, PAN and TAN, bank account, share allotment, FC-GPR, first auditor and commencement of business.", href: "/spain-to-india/incorporation-steps" },
  { title: "Funding an Indian Subsidiary from Spain: Share Capital, Shareholder Loans, Fair Value Pricing Rules, FC-GPR, FC-TRS and the Annual FLA Return", desc: "How a Spanish parent can put money into an Indian company: equity under the Automatic Route, convertible instruments, external commercial borrowing, intra-group financing, the FEMA pricing rule, the 60-day and 30-day deadlines, the FLA return and the Spanish declarations that match.", href: "/spain-to-india/funding-and-fema" },
  { title: "Two-Country Compliance Calendar: Indian Company Filings, Tax, Payroll and RBI Returns, Plus the Spanish Parent's D-8, Tax and Documentation Dates", desc: "One calendar for the whole year showing what the Indian subsidiary files with Indian authorities and what the Spanish parent files in Spain, with the Indian financial year of April to March set against the Spanish calendar year and the points where they collide.", href: "/spain-to-india/compliance-calendar" },
]

export default function CostOfSettingUpASubsidiaryInIndiaFromSpainPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="What It Costs a Spanish Company to Set Up a Subsidiary in India: Professional Fees, Government Charges, Capital, Banking and the First-Year Running Budget"
        description="A budgeting guide for Spanish groups: what the one-time set-up costs, the first-year running costs and the money you must fund as share capital. Includes a cost table by stage, a worked first-year budget template and the questions to ask any adviser before you accept a quote."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "Cost of Setting Up a Subsidiary in India from Spain: Fee Framework and Budget Checklist" },
        ]}
      />

      <GuideHero
        eyebrow="Cost: budget"
        title="What It Costs a Spanish Company to Set Up a Subsidiary in India: Professional Fees, Government Charges, Capital, Banking and the First-Year Running Budget"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The cost of an Indian subsidiary has three parts that should never be added together without labels:
          the one-time cost of setting up the company, the recurring cost of keeping it compliant, and the
          capital you put in to fund the business. AU Corporate&apos;s fee for setting up the subsidiary is USD
          750 to USD 1,000 for share capital up to ₹10 lakh (₹10 lakh is about EUR 9,400 at an indicative ₹106
          per euro (2 November 2026 market rate; check the live rate before remitting)). That covers the
          incorporation work only. Government charges, stamp duty, bank and remittance charges, the registered
          office, audit, tax filings, payroll and any legal or regulatory work are separate, and the right
          figure depends on your structure, state and sector. This page gives you the framework and a template
          to build your own budget, and it tells you which lines are fixed, which are variable and which are
          most often forgotten.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="setup-cost" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["AU Corporate set-up fee", "USD 750 to USD 1,000 for share capital up to ₹10 lakh; includes the incorporation work only"],
                ["Minimum share capital", "No statutory minimum for a private limited company; the working figure comes from your 12 to 18 month cash plan"],
                ["One-time costs", "Professional fee, government and stamp charges, digital signatures, translation and apostille, first bank remittance charges"],
                ["Recurring costs", "Registered office, accounting, GST and TDS returns, payroll compliance, statutory audit, annual company filings, tax return, transfer pricing report where required"],
                ["Variable costs", "Legal agreements, sector licences, trademark filings, regulatory approvals, employer-of-record fees, visas"],
                ["Exchange rate", "₹10 lakh is about EUR 9,400 at an indicative ₹106 per euro (2 November 2026 market rate; check the live rate before remitting)"],
                ["Payment currency", "Quote in USD or INR and ask who bears the bank charges and conversion spread"],
                ["What is not included", "Spanish-side advice, Spanish notary and sworn translator fees, and the money you invest as capital"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="three" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Three budgets, not one</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Spanish finance teams often ask one question: how much will the Indian company cost? The honest answer
          is three separate numbers. The set-up budget is a one-time spend that ends when the company has a
          certificate of incorporation, a PAN and TAN, a bank account and a first set of registers. The running
          budget is what the company pays every year, whether or not it earns revenue, to stay in good standing.
          The capital budget is the money the parent invests in shares, which is not a cost at all but needs to
          be sized so that the subsidiary can pay its running budget and build the business without a second
          round of funding in the first year.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Keeping the three apart matters when you present the project to a board. A set-up cost of a few
          thousand euros is small next to the capital, and a board that sees a single large number tends either
          to over-fund the company or to approve too little and starve it. Treat the set-up cost as a decision
          about adviser quality, the running cost as a decision about how much work you will hand to advisers, and the
          capital as a decision about how long you are willing to wait for revenue.
        </p>

        <h2 id="onetime" className="text-2xl font-bold text-gray-900 mt-12 mb-4">One-time set-up costs, line by line</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Cost line</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Who charges it</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">How it is set</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Common surprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Incorporation professional fee", "Your adviser", "Fixed fee; AU Corporate is USD 750 to USD 1,000 for share capital up to ₹10 lakh", "Check whether the quote includes name approval, PAN, TAN and the first director filings"],
                ["Government filing fee and stamp duty on the charter documents", "Ministry of Corporate Affairs and the state", "Rises with authorised capital; stamp duty differs by state", "A high authorised capital raises both fees; choose it to match the plan, not by habit"],
                ["Director Identification Number and Digital Signature Certificates", "Government and certifying agencies", "Small per-person fees", "Each foreign director needs one before filing"],
                ["Apostille, notarial fees and sworn translation in Spain", "Spanish notary, apostille authority and translator", "Per document and per page", "Documents re-done because names or numbers differ across papers"],
                ["Registered office", "Landlord or business centre", "Monthly or annual", "A virtual address must still be a place where notices are received"],
                ["Bank account opening and first remittance", "Indian and Spanish banks", "Account opening is often free; remittance and conversion charges apply", "Spread on conversion can exceed the stated charge"],
                ["Foreign investment filing with the Reserve Bank", "Your adviser and the authorised dealer bank", "Usually included in advisory fees", "Late filing carries a penalty far greater than the filing fee"],
                ["Tax and indirect tax registrations", "Your adviser", "GST, professional tax, provident fund and state insurance where hiring", "Registering GST before there is any revenue is optional in some cases; ask"],
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

        <h2 id="running" className="text-2xl font-bold text-gray-900 mt-12 mb-4">First-year running costs</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Once the company exists, the running costs begin on day one, because filing obligations do not wait
          for revenue. The table lists the items to budget. Quotes depend on transaction volume, headcount and
          the quality of the records you keep.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Recurring item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Frequency</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What drives the price</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Accounting and bookkeeping", "Monthly", "Number of transactions, currencies, and whether the parent needs a Spanish reporting pack"],
                ["GST returns", "Monthly or quarterly", "Number of invoices and registrations by state"],
                ["Tax deducted at source returns and payments", "Quarterly returns; payments by the 7th", "Number of payees, and cross-border payments requiring forms 145 and 146"],
                ["Payroll, provident fund and state insurance", "Monthly", "Headcount; the labour codes now in force add records"],
                ["Statutory audit", "Annual", "Turnover, complexity and whether Ind AS applies"],
                ["Annual company filings (AOC-4 and MGT-7)", "Annual", "Mostly fixed"],
                ["Income tax return and advance tax", "Annual and quarterly", "Profit and the number of adjustments"],
                ["Transfer pricing study and Form 3CEB", "Annual where thresholds are crossed", "Number and size of transactions with the Spanish group"],
                ["Foreign liabilities and assets return", "Annual, by 15 July", "Mostly fixed"],
                ["Registered office and company secretary support", "Monthly or annual", "Location and service level"],
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

        <p className="text-gray-600 leading-relaxed mb-10">
          Prices for these lines vary a great deal between providers. AU Corporate quotes them against your
          plan, so ask for a costing and not for a rate card. See{" "}
          <Link href="/spain-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">the compliance calendar</Link>{" "}
          for the dates behind each line.
        </p>

        <h2 id="capital" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sizing the share capital</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          There is no statutory minimum capital for a private limited company, so the amount is a business
          decision. A practical approach is to add together the following and then add a margin: the one-time
          costs above, twelve to eighteen months of running costs, the salaries and rent of the team until
          revenue covers them, working capital for inventory or receivables, deposits and security, and a
          reserve for delays. Because foreign investment must be reported and priced under the Foreign Exchange
          Management Act, adding capital later takes more steps than investing enough at the start, but it is
          still possible and routine. See{" "}
          <Link href="/spain-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          A rough sense of scale helps. ₹10 lakh is about EUR 9,400 at an indicative ₹106 per euro (2 November
          2026 market rate; check the live rate before remitting). A company with a small team and an office
          usually needs a good deal more than that in its first year, so ₹10 lakh is a useful reference for the
          set-up fee tier and should not be taken as a recommended capital.
        </p>

        <h2 id="template" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A budget template you can copy</h2>
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
                ["Set-up (one time)", "Fill in", "None", "Include Spanish notary, apostille and translation"],
                ["Registered office and utilities", "Fill in", "Fill in", "Include deposit"],
                ["Accounting, tax and payroll compliance", "Fill in", "Fill in", "Ask for a fixed monthly fee"],
                ["Audit and annual filings", "None", "Fill in", "Accrue monthly"],
                ["Salaries and employer contributions", "Fill in", "Fill in", "Include notice pay and bonus"],
                ["Legal agreements and licences", "Fill in", "Fill in", "Customer, supplier and lease agreements"],
                ["Travel from Spain", "Fill in", "Fill in", "Visas, flights and accommodation"],
                ["Contingency", "Add a margin", "Add a margin", "For delays and bank onboarding"],
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

        <h2 id="forgotten" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The costs that are most often forgotten</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Delays in opening the bank account while the company already pays rent and salaries.</li>
          <li>Conversion spread on the euro to rupee remittance, and the cost of a second remittance if the first is rejected for missing documents.</li>
          <li>Stamp duty on agreements signed in Spain and brought to India, which can be payable on arrival.</li>
          <li>The audit fee in the first year, which is due even when there is no revenue.</li>
          <li>Withholding tax on payments to the Spanish parent, which is a real cost, not a pass-through. See <Link href="/spain-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">repatriating profits</Link>.</li>
          <li>Goods and services tax on management fees charged by the Spanish parent, which the Indian company pays under the reverse charge mechanism.</li>
          <li>The time of your own people, in Spain and in India, to answer questions and sign papers.</li>
        </ul>

        <h2 id="ask" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Questions to ask before you accept a quote</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Does the fee cover name approval, PAN, TAN, the registered office address, the first auditor appointment and the foreign investment filing?</li>
          <li>What is excluded, and is every exclusion listed?</li>
          <li>Is the quote in USD or INR, and who pays bank charges?</li>
          <li>Who files the next deadlines (INC-20A, auditor appointment, FC-GPR), and are they in the price?</li>
          <li>What happens if the registrar raises queries: is rework included?</li>
          <li>Who will actually do the work, and can you speak to them?</li>
          <li>What is the monthly cost of keeping the company compliant after set-up?</li>
        </ol>

        <h2 id="next" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Getting a costing</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Because each plan differs, the quickest way to a reliable number is to tell us the structure, the
          likely headcount, the sector and the shareholders, and ask for a costing against that plan. The
          costing tool on the main guide collects the same information. See{" "}
          <Link href="/spain-to-india/how-long-it-takes-to-set-up-from-spain" className="text-blue-800 font-semibold hover:underline">the timeline guide</Link>{" "}
          to match cost to timing.
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

        <GuideServiceBox path="/spain-to-india/cost-of-setting-up-a-subsidiary-in-india-from-spain" />
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
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
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
        title="Budgeting for an Indian Subsidiary?"
        description="Tell us your structure and share capital, and we'll send a fixed quote and a first-year cost checklist."
      />
    </main>
  )
}
