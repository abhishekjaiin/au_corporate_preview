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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/structure-options"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "compare", label: "The options side by side" },
  { id: "choose", label: "Choosing by business model" },
  { id: "kg", label: "If the German parent is a partnership" },
  { id: "jv", label: "Joint ventures with an Indian partner" },
  { id: "private-limited", label: "Why a private limited company is the default" },
  { id: "holding", label: "Do you need an intermediate holding company?" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the best way for a German company to enter India?", a: "For most, a wholly owned private limited company. A joint venture suits partner-led entry, a project office suits a single contract, and branches and liaison offices need RBI approval and track records." },
  { q: "What net worth does a German company need for an Indian branch office?", a: "A net worth of at least USD 100,000 and a profit record in each of the last five years. For a liaison office the tests are USD 50,000 and three years." },
  { q: "Does a GmbH & Co. KG need special care when it invests in India?", a: "Yes. A transparent partnership affects who claims the treaty and whether the 95% exemption applies. Have your German adviser review it, and consider a corporate holding company." },
  { q: "Can a liaison office earn income in India?", a: "No. A liaison office can only liaise. It cannot invoice or earn income, and its costs are met from remittances from the parent." },
  { q: "Do I need a Dutch or Singapore holding company between Germany and India?", a: "Usually not. The treaty already gives a flat 10%, so an intermediate holding adds cost and anti-abuse questions without a rate benefit." },
  { q: "Can a German parent use an Employer of Record to start?", a: "Yes, for a first few hires. The EOR is the legal employer, so control is limited, and your staff in India can still create a permanent establishment if they conclude contracts." },
]

const relatedCards = [
  { title: "Incorporating a Subsidiary in India from Germany: Who Does What, in What Order", desc: "A split plan for a German parent forming an Indian private limited company: what the German team does, what the Indian team does, SPICe+, bank account, FC-GPR and the first 180 days.", href: "/germany-to-india/incorporation-steps" },
  { title: "Setting Up a Global Capability Centre in India: A Guide for German Mittelstand and Large Groups", desc: "How German companies set up captive engineering, IT and shared service centres in India: entity choice, cost-plus transfer pricing, export of services, the works council on offshoring, data and build-operate-transfer.", href: "/germany-to-india/gcc-for-german-companies" },
  { title: "What a German Parent Company Owes at Home When It Owns an Indian Subsidiary", desc: "German-side duties for a parent with an Indian subsidiary: corporation and trade tax, the 95% participation exemption, notification of foreign holdings, Bundesbank reports, CFC rules, HGB consolidation, anti-bribery law and Pillar Two.", href: "/germany-to-india/german-parent-obligations" },
  { title: "Funding an Indian Subsidiary from Germany: Equity, Convertible Instruments, ECB Loans and RBI Reporting", desc: "How a German parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, euro remittance, public-lender loans, FC-GPR and the annual FLA return.", href: "/germany-to-india/funding-and-fema" },
]

export default function StructureOptionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Which Structure Should a German Company Use in India? Subsidiary, Joint Venture, Project Office, Branch, LLP or Employer of Record"
        description="A decision guide for German companies: wholly owned subsidiary, joint venture with an Indian partner, project office, branch, liaison office, LLP and EOR, with tests, tax results, a GmbH & Co. KG warning and a choice by business model."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "Choosing an Indian Structure from Germany: Subsidiary, Joint Venture, Branch, LLP or EOR" },
        ]}
      />

      <GuideHero
        eyebrow="Setup: choose the structure"
        title="Which Structure Should a German Company Use in India? Subsidiary, Joint Venture, Project Office, Branch, LLP or Employer of Record"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Most German companies enter India through a wholly owned private limited company, because it limits
          liability, can hire and invoice freely and is taxed at domestic rates. Mittelstand firms with a strong
          local partner often use a joint venture instead, plant builders use a project office for a single
          contract, and a branch or liaison office needs RBI approval and a track record. A parent that is a
          partnership, such as a GmbH &amp; Co. KG, needs its own tax review before it holds Indian shares. The
          right answer depends on whether you sell in India, make in India, or deliver services from India.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="subsidiary-vs-branch-vs-liaison-office-vs-llp" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Wholly owned subsidiary", "Private limited company; 100% foreign ownership in most sectors under the Automatic Route"],
                ["Joint venture", "Indian partner holds shares; shareholder agreement under Indian law; FEMA pricing and option rules apply"],
                ["Project office", "For a specific contract won in India; usually set up without prior approval if conditions are met"],
                ["Branch office", "RBI approval; net worth of the German company at least USD 100,000 and a profit record for the last five years"],
                ["Liaison office", "RBI approval; net worth at least USD 50,000 and a profit record for the last three years; no income-earning activity"],
                ["LLP", "Allowed with foreign investment in sectors where 100% FDI is on the Automatic Route and no performance-linked conditions apply"],
                ["Employer of Record", "Third party employs your people in India; no entity required, not a long-term replacement"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The options side by side</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Structure</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Best for</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Main limits</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Tax outcome in India</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Wholly owned subsidiary", "Sales, service, production, engineering and captive centres", "Two directors (one resident), audit, ROC and RBI compliance", "Taxed as an Indian company at domestic rates"],
                ["Joint venture company", "Market access, local sourcing, regulated sectors", "Shareholder agreement, deadlock, exit and option clauses under Indian rules", "Indian company; dividends shared"],
                ["Project office", "One plant or installation contract", "Tied to the project; RBI conditions; may create a PE", "Taxed as a foreign company at 35% plus surcharge and cess"],
                ["Branch office", "The parent's own consultancy, trading or technical activity", "RBI approval; track-record tests; parent is directly liable", "Taxed as a foreign company at 35% plus surcharge and cess"],
                ["Liaison office", "Market research and liaison only", "No income or invoicing; funded from Germany", "No income; PE questions if it over-reaches"],
                ["LLP", "Professional services and some investment vehicles", "FDI conditions; partner roles", "Taxed as an LLP at domestic rates; German side needs review"],
                ["Employer of Record", "A pilot with one to ten staff", "The EOR is the legal employer; limited control", "EOR bears payroll tax; PE risk remains if your staff conclude contracts"],
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

        <h2 id="choose" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing by business model</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Sell machines, components or software to Indian customers:</strong> a subsidiary. Customers expect an Indian invoice with GST, local service and spares, and an Indian entity can hold licences and sign contracts.</li>
          <li><strong>Make in India:</strong> a subsidiary, often with a land or lease decision and state incentives. Land, environmental and state-incentive approvals sit outside this guide.</li>
          <li><strong>Deliver engineering or IT work to Germany from India:</strong> a subsidiary paid cost plus a mark-up. See <Link href="/germany-to-india/gcc-for-german-companies" className="text-blue-800 font-semibold hover:underline">Global Capability Centres</Link>.</li>
          <li><strong>Install a plant or system once:</strong> consider a project office, and watch the six-month PE test in <Link href="/germany-to-india/india-germany-dtaa" className="text-blue-800 font-semibold hover:underline">the tax treaty guide</Link>.</li>
          <li><strong>Enter with a partner:</strong> a joint venture, with a shareholder agreement that you test against Indian law and FEMA before signing.</li>
          <li><strong>Explore first:</strong> a liaison office or an EOR pilot, with a plan to convert to a subsidiary at a defined point.</li>
        </ul>

        <h2 id="kg" className="text-2xl font-bold text-gray-900 mt-12 mb-4">If the German parent is a partnership</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Many Mittelstand groups are held through a GmbH &amp; Co. KG or a family partnership. These entities
          are tax-transparent in Germany: the partners, not the partnership, are the taxpayers. That affects who
          can claim the India-Germany treaty, who files the residence certificate and whether the 95% exemption
          applies. Before the parent holds the Indian shares, ask your German adviser to confirm whether a
          corporate holding company should sit between the partnership and India, and tell your Indian adviser
          so the beneficial ownership papers and Form 41 name the right person.
        </p>

        <h2 id="jv" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Joint ventures with an Indian partner</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Pricing:</strong> FEMA sets pricing floors for share issues and transfers; the shareholder agreement must work within them.</li>
          <li><strong>Exit clauses:</strong> put and call options, drag and tag rights and non-compete terms are enforceable only within Indian law and the RBI&apos;s conditions, so test them before signing.</li>
          <li><strong>Governance:</strong> reserved matters, board seats and deadlock rules should be drafted for an Indian company, not copied from a GmbH agreement.</li>
          <li><strong>Disputes:</strong> choose a neutral seat and institution. See <Link href="/germany-to-india/contracts-courts-arbitration" className="text-blue-800 font-semibold hover:underline">contracts, courts and arbitration</Link>.</li>
        </ul>

        <h2 id="private-limited" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why a private limited company is the default</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Limited liability for the German parent, except where it gives guarantees or directs the business.</li>
          <li>Free to hire, invoice with GST, open bank accounts and own or lease property.</li>
          <li>Dividend repatriation is a clear, documented route under FEMA and the treaty.</li>
          <li>Share capital can be raised in stages, with FC-GPR filed for each issue.</li>
          <li>Easier to sell, restructure or wind up than a branch.</li>
        </ul>

        <h2 id="holding" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Do you need an intermediate holding company?</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Usually not. The India-Germany treaty already gives a flat 10% on dividends, interest, royalties and
          technical fees, so a third-country holding company adds cost without a rate advantage, and it invites
          questions under India&apos;s GAAR and Germany&apos;s anti-abuse rules unless it has real substance. A
          holding company can still make sense for several Asian subsidiaries, for joint venture reasons or for
          a lender, but justify it commercially.
        </p>

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

        <GuideServiceBox path="/germany-to-india/structure-options" />
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
            { label: "Reserve Bank of India: branch and liaison offices", href: "https://www.rbi.org.in/" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
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
        title="Subsidiary, Joint Venture, Branch or LLP?"
        description="Tell us what the India operation will do, and we'll recommend the structure that suits a German parent."
      />
    </main>
  )
}
