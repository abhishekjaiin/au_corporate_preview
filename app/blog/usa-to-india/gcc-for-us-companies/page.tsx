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

const PAGE_URL = "https://www.theaucorp.com/usa-to-india/gcc-for-us-companies"
const PARENT_URL = "https://www.theaucorp.com/usa-to-india"

const toc = [
  { id: "country-specific", label: "What's different for US companies" },
  { id: "what", label: "What a GCC is and what it is not" },
  { id: "models", label: "Three ways to build" },
  { id: "tp", label: "Transfer pricing for a captive" },
  { id: "pe", label: "Permanent establishment and control" },
  { id: "ip", label: "Intellectual property in a captive" },
  { id: "states", label: "State policies and where to locate" },
  { id: "roadmap", label: "A 12-month roadmap" },
  { id: "risks", label: "Risks to manage" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is a GCC?", a: "A global capability centre is an Indian entity owned by a foreign group that performs work for the group, such as engineering, analytics, finance or operations." },
  { q: "What models can a US company use?", a: "A wholly owned subsidiary, a build-operate-transfer arrangement with a partner, or a hybrid with a managed team while the entity is built." },
  { q: "How is a GCC taxed in India?", a: "As a contract service provider to the parent, usually on cost plus a mark-up that is supported by benchmarking." },
  { q: "Is there a safe harbour for GCC margins?", a: "Indian rules provide safe harbour margins for some IT services, reportedly revised in 2025. Confirm the current margins and thresholds before electing." },
  { q: "Does a GCC create a permanent establishment of the US parent?", a: "Not by itself. The risk rises if the centre concludes contracts for the parent or operates as its fixed place of business." },
  { q: "Who owns the intellectual property made in India?", a: "It belongs to the US parent only if assigned in writing through the Indian company, with terms that satisfy Indian law." },
  { q: "Do states offer incentives for GCCs?", a: "Several states have announced GCC policies, with terms that vary and change. Confirm current terms before relying on any." },
  { q: "How long does it take to set up a GCC?", a: "Incorporation takes weeks, but a functioning centre with a first team usually takes six to twelve months." },
  { q: "Should we use build-operate-transfer?", a: "It suits a fast start and a clean transfer. Agree the transfer price, staff consent and intellectual property ownership up front." },
]

const relatedCards = [
  { title: "Transfer pricing for US groups", desc: "Form 3CEB, benchmarking and intercompany agreements.", href: "/usa-to-india/transfer-pricing" },
  { title: "DTAA and permanent establishment risk", desc: "How the India-US treaty treats a US company's presence in India.", href: "/usa-to-india/dtaa-pe-risk" },
  { title: "Hiring and payroll in India", desc: "Contracts, statutory benefits and the monthly payroll cycle.", href: "/usa-to-india/hiring-and-payroll" },
  { title: "Employer of record or subsidiary", desc: "When an employer of record is enough and when to incorporate.", href: "/usa-to-india/eor-vs-subsidiary" },
]

export default function GccForUsCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Setting Up a Global Capability Centre in India as a US Company: Captive, Build-Operate-Transfer and Hybrid Models, Cost-Plus Pricing, State Policies and Key Risks"
        description="How a US company builds a captive engineering, finance or operations centre in India: the three delivery models, entity and tax choices, cost-plus transfer pricing and safe harbour questions, permanent establishment, intellectual property, state incentives and a 12-month roadmap."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-US"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/usa-to-india" },
          { label: "Global Capability Centre in India for US Companies: Models, Transfer Pricing and Setup" },
        ]}
      />

      <GuideHero
        eyebrow="Operating model: GCC"
        title="Setting Up a Global Capability Centre in India as a US Company: Captive, Build-Operate-Transfer and Hybrid Models, Cost-Plus Pricing, State Policies and Key Risks"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A global capability centre, or GCC, is an Indian entity that does work for its foreign parent and is
          run as part of the group. US companies use them for software engineering, analytics, finance and
          accounting, customer operations and research. The three common routes are a fully owned subsidiary
          built by the US company, a build-operate-transfer arrangement in which a partner sets the centre up
          and hands it over, and a hybrid in which a partner provides a managed team while the legal entity is
          being built. Because the Indian entity is paid by the US parent for its services, its profit is set by
          transfer pricing, usually on a cost-plus basis, and the main Indian tax risks are the mark-up, the
          treatment of cost items such as stock awards, and permanent establishment if the Indian staff conclude
          contracts for the parent. India&apos;s industry bodies report well over a thousand GCCs, and several
          states have announced GCC policies with incentives, which we cover below.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the US
          </Link>
        </p>

        <GuideCountryContext country="usa" topic="gcc" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Models", "Wholly owned subsidiary; build-operate-transfer; hybrid with a managed-services partner"],
                ["Entity", "Private limited company; services entity paid by the US parent on a cost-plus basis"],
                ["Pricing", "Cost-plus on a defined cost base; safe harbour rules for some IT services; confirm current margins"],
                ["Tax points", "Mark-up, stock awards in the cost base, goods and services tax on exports of services, withholding on payments to the US"],
                ["PE risk", "Low if the centre only performs services and the US parent controls contracts and strategy; assess dependency on a case basis"],
                ["IP", "Assignment to the US parent in writing; foreign filing permission for patents"],
                ["People", "Hiring in waves; labour codes; attrition and bench planning"],
                ["Incentives", "State GCC policies, special economic zones and other schemes; confirm current terms"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="what" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What a GCC is and what it is not</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A GCC is not a shared-services contract with a vendor. The Indian company is owned by the group, takes
          instructions from group management and typically has no external customers. That distinction matters
          in three ways. It affects the tax model, because the entity is a contract service provider to the
          parent. It affects the employment relationship, because the staff are Indian employees of the Indian
          company even though the work is for the US group. And it affects control, because the group can shape
          the culture, tools and standards of a team that it owns, which is the main reason companies choose
          this route over using a third-party vendor.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          A centre differs from a sales or distribution subsidiary because it does not hold stock or take market
          risk. It differs from a research and development subsidiary that owns intellectual property because
          the output belongs to the parent. Most centres start with one function and add others as the team
          matures, so design the entity and the agreements so that a second and third function can be added
          without a fresh round of tax advice.
        </p>

        <h2 id="models" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Three ways to build</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Model</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">How it works</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Suits</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Watch out for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Wholly owned subsidiary", "The US company incorporates the Indian entity and hires its own team", "Companies that want control from day one and can lead hiring", "Time to hire the first leaders; compliance workload from the first month"],
                ["Build-operate-transfer", "A partner sets up and runs the centre for a period, then transfers staff and operations to the US company", "Companies that want a fast start and a clean transition", "Transfer price, employee consent, and who owns the intellectual property built during the period"],
                ["Hybrid", "A managed team starts work under a partner while the owned entity is formed, then staff move across", "Companies with a hard delivery date", "Overlap costs; permanent establishment risk if the foreign company directs the partner's staff"],
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

        <h2 id="tp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Transfer pricing for a captive</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Indian entity should earn an arm&apos;s length return on its costs. The usual method is the
          transactional net margin method with the operating profit on total costs as the profit indicator,
          which in practice means a cost base plus a mark-up. The cost base should include all operating costs
          of the centre, including salaries, bonuses, rent, depreciation, software and shared service charges,
          and the treatment of stock-based compensation awarded by the US parent is a recurring audit issue. The
          mark-up is set from comparable independent companies, and a mark-up in the mid-teens percent has been
          common in industry practice for routine services, but the right figure depends on the functions
          performed and the benchmarking, so we do not give a number as advice. Indian rules also provide safe
          harbour margins for certain information technology services, and the thresholds and margins were
          reportedly revised in 2025, so ask your adviser whether an election is available and worthwhile. See{" "}
          <Link href="/usa-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The agreement between the Indian centre and the US parent should state the services, the cost base,
          the mark-up, how costs are invoiced and settled, the treatment of exchange rates, who owns
          intellectual property and how disputes are resolved. Invoices should be raised monthly with the goods
          and services tax treatment of an export of services if the conditions are met, and receipts should
          come in within the period allowed by the Reserve Bank for export proceeds.
        </p>

        <h2 id="pe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Permanent establishment and control</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A centre that performs services for its parent is an independent legal person, and it is not in itself
          a permanent establishment of the parent. The question arises if the Indian entity habitually concludes
          contracts for the parent, if the parent&apos;s employees work from the centre&apos;s premises in a way
          that gives the parent a fixed place of business in India, or if the centre acts as a dependent agent.
          Keep a clear line: commercial decisions and contracts with customers belong to the US company, the
          Indian entity delivers services under its own agreement, and visiting US managers do not become, in
          effect, the managers of a business carried on in India. See{" "}
          <Link href="/usa-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">DTAA and permanent establishment risk</Link>.
        </p>

        <h2 id="ip" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Intellectual property in a captive</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Work product created by Indian employees must reach the US owner by assignment. The first step is a
          written employment contract that assigns inventions and works to the Indian company, and the second is
          a written assignment from the Indian company to the US parent that satisfies Indian copyright law on
          duration, territory and consideration. Patents filed in the US for inventions made in India need a
          foreign filing permission from the Indian Patent Office unless the invention was first filed in India.
          The details are in{" "}
          <Link href="/usa-to-india/ip-ownership-and-copyright-assignment-for-indian-teams" className="text-blue-800 font-semibold hover:underline">the intellectual property guide</Link>.
        </p>

        <h2 id="states" className="text-2xl font-bold text-gray-900 mt-12 mb-4">State policies and where to locate</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Several Indian states have announced policies for global capability centres with incentives such as
          capital subsidies, payroll-linked support, stamp duty relief or fast-track approvals, and the terms
          differ by state and change often. The better question for most companies is where the right people
          are. Talent depth by function, cost of living, attrition and infrastructure will decide the
          productivity of the centre more than a time-limited subsidy. See{" "}
          <Link href="/usa-to-india/choosing-an-indian-state-and-city-for-us-companies" className="text-blue-800 font-semibold hover:underline">choosing a state and city</Link>.
        </p>

        <h2 id="roadmap" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A 12-month roadmap</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Months 0 to 2: decide scope, model and city; incorporate the entity; hire the managing director or site leader; sign the services agreement.</li>
          <li>Months 2 to 4: open the bank account and fund the company; register for payroll, provident fund and goods and services tax; take the office.</li>
          <li>Months 4 to 8: hire the first wave in core functions; set up tools, security and access controls; start the monthly cost-plus invoicing.</li>
          <li>Months 8 to 12: add the second function; complete the first statutory audit steps and the transfer pricing file; review attrition and productivity.</li>
        </ol>

        <h2 id="risks" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Risks to manage</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Over- or under-pricing the services, which draws a transfer pricing adjustment in India or the US.</li>
          <li>Cost items missing from the base, such as stock awards or shared service charges.</li>
          <li>Hiring ahead of registrations, which leads to payroll penalties.</li>
          <li>Weak data and security controls that fail a customer or regulator audit. See <Link href="/usa-to-india/us-privacy-hipaa-ccpa-and-dpdp" className="text-blue-800 font-semibold hover:underline">US privacy and DPDP</Link>.</li>
          <li>Losing key staff in a competitive market without retention and career design.</li>
          <li>Unclear ownership of code, models and documents created in India.</li>
        </ul>

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

        <GuideServiceBox path="/usa-to-india/gcc-for-us-companies" />
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
        title="Planning a GCC in India?"
        description="Tell us the functions and headcount, and we'll map the entity, transfer pricing model and setup timeline."
      />
    </main>
  )
}
