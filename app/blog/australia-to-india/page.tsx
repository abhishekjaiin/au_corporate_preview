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
import { GuideCountryProfile } from "@/components/guide/GuideCountryContext"
import { InquiryTrigger } from "@/components/InquiryTrigger"

const PAGE_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "snapshot", label: "Australia to India in one table" },
  { id: "board", label: "What the Australian board should settle first" },
  { id: "entity", label: "Entity choice through an Australian tax lens" },
  { id: "dfat", label: "Documents, DFAT and the filing" },
  { id: "capital", label: "Capital in, cash back to Australia" },
  { id: "two-years", label: "Living with two financial years" },
  { id: "tax", label: "Tax, treaty and transfer pricing" },
  { id: "people", label: "Teams, secondees and superannuation" },
  { id: "cost", label: "Cost and timeline" },
  { id: "series", label: "The full guide series" },
  { id: "help", label: "How AU Corporate works with Australian groups" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "sources", label: "Sources and how this page is maintained" },
]

const seriesCards = [
  { title: "Subsidiary, branch, liaison office or LLP", desc: "Sections 23AH and 768-5 compared with Indian rules.", href: "/australia-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" },
  { title: "Incorporation from Australia", desc: "ASIC extract, DFAT apostille and SPICe+.", href: "/australia-to-india/incorporation-process" },
  { title: "Documents and apostille through DFAT", desc: "The federal apostille process.", href: "/australia-to-india/documents-and-apostille" },
  { title: "Resident director rules", desc: "When no Australian spends 182 days in India.", href: "/australia-to-india/resident-director" },
  { title: "Funding and FC-GPR", desc: "AUD remittance and the FEMA deadlines.", href: "/australia-to-india/funding-fema-fc-gpr" },
  { title: "Share valuation", desc: "FEMA price limits and Australian accounting.", href: "/australia-to-india/share-valuation" },
  { title: "Repatriating profits to Australia", desc: "15% treaty rates and non-assessable dividends.", href: "/australia-to-india/repatriating-profits" },
  { title: "EOR or subsidiary", desc: "Time-zone overlap and the 183-day test.", href: "/australia-to-india/eor-vs-subsidiary" },
  { title: "Hiring and payroll", desc: "Provident fund instead of super, gratuity instead of long service leave.", href: "/australia-to-india/hiring-and-payroll" },
  { title: "Sending Australian staff to India", desc: "Visas, certificate of coverage and dual residence.", href: "/australia-to-india/expat-visa" },
  { title: "Transfer pricing", desc: "Indian rules and Division 815 side by side.", href: "/australia-to-india/transfer-pricing" },
  { title: "India-Australia DTAA", desc: "The treaty article by article.", href: "/australia-to-india/india-australia-dtaa" },
  { title: "Tax treaty and PE risk", desc: "Service PE and treaty documents.", href: "/australia-to-india/dtaa-pe-risk" },
  { title: "Foreign employees and social security", desc: "The India-Australia agreement in practice.", href: "/australia-to-india/foreign-employee-treaty-ssa" },
  { title: "Australian parent obligations", desc: "Australian tax and reporting on the Indian company.", href: "/australia-to-india/australian-parent-obligations" },
  { title: "Compliance calendar", desc: "Indian dates against a 30 June group year.", href: "/australia-to-india/compliance-calendar" },
  { title: "Audit and internal controls", desc: "ASA 600 and section 295A for ASX groups.", href: "/australia-to-india/audit-icofr" },
  { title: "Tax notices and disputes", desc: "Replies, appeals and MAP with the ATO.", href: "/australia-to-india/tax-notices-and-litigation" },
  { title: "Contracts and arbitration", desc: "Why Australian judgments are not enough.", href: "/australia-to-india/contracts-and-arbitration" },
  { title: "ESOPs for Indian employees", desc: "Australian share plans for Indian staff.", href: "/australia-to-india/esop" },
  { title: "Restructuring and exit", desc: "Sale, merger or closure, and Subdivision 768-G.", href: "/australia-to-india/restructuring-and-exit" },
  { title: "Global VAT", desc: "GST and VAT for Australian digital sellers.", href: "/australia-to-india/global-vat" },
  { title: "Common mistakes", desc: "Thirteen traps for Australian parents.", href: "/australia-to-india/common-mistakes" },
  { title: "Australia FAQs", desc: "Answers from first planning to exit.", href: "/australia-to-india/faq" },
]

const faqs = [
  { q: "Can an Australian Pty Ltd own 100% of an Indian company?", a: "Yes, in most sectors under the Automatic Route. Press Note 3 does not apply to Australian investors, and a group company or nominee holds one share to meet the two-shareholder rule." },
  { q: "How long does incorporation take from Australia?", a: "About 4 to 6 weeks from the day the DFAT-apostilled documents reach India." },
  { q: "Who apostilles Australian documents?", a: "The Department of Foreign Affairs and Trade, through one federal process, using a notary whose signature DFAT can verify." },
  { q: "Does the Indian company need a resident director?", a: "Yes. One director must have stayed in India for 182 days or more in the Indian financial year; most Australian groups appoint an Indian manager or professional director." },
  { q: "Can the Indian subsidiary use a 30 June year end?", a: "No. Indian companies use the year to 31 March, so the group needs a bridge to its 30 June year." },
  { q: "What is the Indian tax on dividends to Australia?", a: "Up to 15% under the treaty; the dividend is generally non-assessable non-exempt income for an Australian company with a 10% or greater voting interest." },
  { q: "Do Australian secondees pay into the Indian provident fund?", a: "Not with an ATO certificate of coverage under the India-Australia Social Security Agreement, for up to five years." },
  { q: "Does the trade agreement change the setup rules?", a: "No. The India-Australia ECTA cuts goods tariffs but leaves FDI and company law rules unchanged." },
  { q: "What does AU Corporate charge to incorporate?", a: "An indicative USD 750 to USD 1,000 for share capital up to ₹10 lakh, covering the incorporation work." },
  { q: "Can an Australian court judgment be enforced in India?", a: "Not directly, because Australia is not a reciprocating territory under Section 44A, so arbitration is the usual choice." },
  { q: "What does the subsidiary file every year?", a: "An audit, AOC-4 and MGT-7, the income tax return with Form 48 where required, GST and TDS returns, payroll filings and the FLA return by 15 July." },
  { q: "Can the subsidiary be sold later?", a: "Yes; India generally taxes the gain, and Subdivision 768-G may reduce the Australian gain on an active foreign company." },
]

export default function AustraliaToIndiaHubPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How to Set Up a Subsidiary in India from Australia: The 2026 Guide"
        description="How Australian companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, the India-Australia tax treaty and compliance. By a Chartered Accountant."
        datePublished="2026-10-15"
        dateModified="2026-11-02"
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "How to Set Up a Subsidiary in India from Australia" },
        ]}
      />

      <GuideHero
        eyebrow="Guide for Australian companies"
        title="How to Set Up a Subsidiary in India from Australia: The 2026 Guide"
        dek="Structure, incorporation, FEMA/RBI filings, tax and compliance for Australian companies entering India — in plain terms, with the form names your advisers will use."
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="The short answer">
          An Australian company usually sets up in India through a private limited subsidiary on the Automatic
          Route, with no prior approval needed in most sectors. Documents are apostilled once, federally, by
          DFAT; the company is incorporated online in about 4 to 6 weeks; and the parent&apos;s capital is
          reported to the RBI within 30 days of allotment. The two practical differences from home are the 31
          March Indian year and the need for a director who lives in India.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="text-gray-600 leading-relaxed mb-10">
          This guide is written for Australian founders, CFOs and boards. It works through the decisions in the
          order an Australian company usually meets them, from the board paper to the first dividend, and
          points out where Australian tax rules, superannuation, Fair Work habits and the 30 June year end
          interact with Indian law. Each section links to a deeper guide.
        </p>

        <h2 id="snapshot" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Australia to India in one table</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Position for an Australian company</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Vehicle</th>
                <td className="border border-gray-300 p-3">Private limited subsidiary, wholly owned or a joint venture</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Approval</th>
                <td className="border border-gray-300 p-3">Automatic Route in most sectors; Press Note 3 does not apply</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Board</th>
                <td className="border border-gray-300 p-3">Two directors, one in India for 182 days in the Indian year</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Documents</th>
                <td className="border border-gray-300 p-3">ASIC extract, constitution, board resolution; DFAT apostille</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Setup time</th>
                <td className="border border-gray-300 p-3">About 4 to 6 weeks from receipt of apostilled documents</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Financial year</th>
                <td className="border border-gray-300 p-3">India 1 April to 31 March; most Australian groups 1 July to 30 June</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividends to Australia</th>
                <td className="border border-gray-300 p-3">Up to 15% Indian tax; generally non-assessable non-exempt in Australia</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Secondees</th>
                <td className="border border-gray-300 p-3">Superannuation continues with an ATO certificate of coverage, up to five years</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Trade</th>
                <td className="border border-gray-300 p-3">India-Australia ECTA cuts goods tariffs; investment rules unchanged</td>
              </tr>
            </tbody>
          </table>
        </div>
        <GuideCountryProfile country="australia" />

        <h2 id="board" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the Australian board should settle first</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Activity:</strong> a delivery or development centre for Australia, a sales business in India, or sourcing. This decides the transfer pricing model and the registrations.</li>
          <li><strong>The resident director:</strong> Australian executives rarely spend 182 days in India, so decide early between an Indian manager and a professional director.</li>
          <li><strong>Capital and route home:</strong> the first-round capital, and whether profits will return as dividends or as fees and royalties.</li>
        </ul>
        <h2 id="entity" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Entity choice through an Australian tax lens</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Both a branch and a subsidiary can keep active Indian profits out of Australian tax: branch profits through section 23AH, dividends through section 768-5. The deciding factors are Indian: a branch pays the higher foreign company rate, needs RBI approval and puts the Australian balance sheet behind Indian liabilities, while a subsidiary pays the domestic rate and can be sold or merged later. See <Link href="/australia-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" className="text-blue-800 font-semibold hover:underline">the structure comparison</Link>.
        </p>
        <h2 id="dfat" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documents, DFAT and the filing</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Australia has a single federal apostille process through DFAT, which is simpler than state-by-state systems. Order a current ASIC company extract, notarise the constitution, board resolution and directors' identity documents with a notary DFAT can verify, and keep the exact legal name and ACN consistent everywhere. The Indian side, digital signatures and the SPICe+ filing, can be prepared in parallel. Details: <Link href="/australia-to-india/incorporation-process" className="text-blue-800 font-semibold hover:underline">incorporation from Australia</Link> and <Link href="/australia-to-india/documents-and-apostille" className="text-blue-800 font-semibold hover:underline">documents and apostille</Link>.
        </p>
        <h2 id="capital" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Capital in, cash back to Australia</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The parent sends Australian or US dollars, the Indian bank converts them, shares are allotted within 60 days at no less than fair value, and FC-GPR follows within 30 days. Cash returns as dividends once there are audited profits, taxed in India at up to 15% and generally not again in Australia, or as fees and royalties that are deductible in India and assessable in Australia with a foreign income tax offset. See <Link href="/australia-to-india/funding-fema-fc-gpr" className="text-blue-800 font-semibold hover:underline">funding and FC-GPR</Link> and <Link href="/australia-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">repatriating profits</Link>.
        </p>
        <h2 id="two-years" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Living with two financial years</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Every Indian deadline runs from 31 March: AGM by 30 September, ROC returns after it, the tax return by 31 October or 30 November, and the FLA return by 15 July. The Australian parent closes on 30 June, so the Indian year spans two Australian years. Agree once how the group will consolidate the Indian company, using management accounts to 30 June or audited accounts adjusted for April to June. See the <Link href="/australia-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar</Link>.
        </p>
        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax, treaty and transfer pricing</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Indian tax:</strong> about 25.17% for a domestic company on the concessional regime.</li>
          <li><strong>Treaty:</strong> up to 15% on dividends, interest and royalties (10% for equipment), and a service PE after 183 days of services in any 12 months. <Link href="/australia-to-india/india-australia-dtaa" className="text-blue-800 font-semibold hover:underline">India-Australia DTAA</Link>.</li>
          <li><strong>Transfer pricing:</strong> the Indian file and Form 48 should match the ATO Division 815 documentation. <Link href="/australia-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">Transfer pricing</Link>.</li>
          <li><strong>Australian side:</strong> the International Dealings Schedule, CFC considerations and the foreign income tax offset. <Link href="/australia-to-india/australian-parent-obligations" className="text-blue-800 font-semibold hover:underline">Australian parent obligations</Link>.</li>
        </ul>
        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          <strong>New Indian tax law.</strong> From 1 April 2026 the Income-tax Act, 2025 applies. Our guides use
          the new form names, such as Form 48 (previously Form 3CEB) and Forms 145 and 146 (previously 15CA and
          15CB).
        </div>

        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Teams, secondees and superannuation</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Local teams</strong> are employed under the labour codes, with provident fund instead of super and gratuity instead of long service leave. <Link href="/australia-to-india/hiring-and-payroll" className="text-blue-800 font-semibold hover:underline">Hiring and payroll</Link>.</li>
          <li><strong>Secondees</strong> need an Employment Visa, FRRO registration and an ATO certificate of coverage. <Link href="/australia-to-india/expat-visa" className="text-blue-800 font-semibold hover:underline">Sending Australian staff to India</Link>.</li>
          <li><strong>A first team</strong> can sit with an employer of record while the subsidiary is formed. <Link href="/australia-to-india/eor-vs-subsidiary" className="text-blue-800 font-semibold hover:underline">EOR or subsidiary</Link>.</li>
        </ul>
        <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Cost and timeline</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          One-time costs are government fees and stamp duty by state, Australian notary and DFAT apostille fees, digital signatures and our fee; annual costs cover accounting, audit, tax, GST, payroll and RBI filings. AU Corporate&apos;s indicative incorporation fee is USD 750 to USD 1,000 for share capital up to ₹10 lakh, and incorporation takes about 4 to 6 weeks from receipt of apostilled documents.
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-between bg-[#fffbe6] border border-gold-dark rounded-xl p-5 mb-10">
          <div>
            <strong className="block text-gray-900">Get a costing for your plan</strong>
            <p className="text-sm text-gray-600 mt-0.5">Tell us what you plan to set up and we will prepare a costing and book a call to walk you through it.</p>
          </div>
          <InquiryTrigger className="inline-block rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-[#081a42] hover:bg-gold-dark transition-colors whitespace-nowrap">
            Discuss your costing with our team
          </InquiryTrigger>
        </div>

        <h2 id="series" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The full guide series</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={seriesCards} />
        </div>

        <h2 id="help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate works with Australian groups</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India advisory firm, established in 2016. For Australian parents we act as the Indian finance and compliance team, working to the group's 30 June timetable and alongside its Australian auditors and tax advisers.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Need</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What we do</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Service page</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Incorporation</th>
                <td className="border border-gray-300 p-3">Checklist, DFAT sequence, SPICe+, bank account</td>
                <td className="border border-gray-300 p-3"><Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link></td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">FEMA</th>
                <td className="border border-gray-300 p-3">Valuation, FC-GPR, FC-TRS, FLA</td>
                <td className="border border-gray-300 p-3"><Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link></td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Books and reporting</th>
                <td className="border border-gray-300 p-3">Indian accounts and group packs</td>
                <td className="border border-gray-300 p-3"><Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">Accounting, reporting and audit support</Link></td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Tax</th>
                <td className="border border-gray-300 p-3">Corporate tax, transfer pricing, treaty, notices</td>
                <td className="border border-gray-300 p-3"><Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">Corporate tax, GST and transfer pricing</Link></td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Company law</th>
                <td className="border border-gray-300 p-3">Board, AGM, ROC filings</td>
                <td className="border border-gray-300 p-3"><Link href="/secretarial-roc-compliance" className="text-blue-800 font-semibold hover:underline">Secretarial and ROC compliance</Link></td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">People</th>
                <td className="border border-gray-300 p-3">Payroll, PF, secondee tax</td>
                <td className="border border-gray-300 p-3"><Link href="/payroll-expat-services" className="text-blue-800 font-semibold hover:underline">Payroll and expat services</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources:{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department</a>,
          the{" "}
          <a href="https://www.gst.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">GST portal</a>,
          the{" "}
          <a href="https://www.ato.gov.au/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Australian Taxation Office</a>{" "}
          and{" "}
          <a href="https://www.dfat.gov.au/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">DFAT</a>.
        </p>

        <GuideServiceBox path="/australia-to-india" />
        <GuideCTA
          title="Planning India from Sydney, Melbourne or Perth?"
          description="A 30-minute call on structure, documents, timeline and compliance for your group."
        />

        <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} seeAllHref="/australia-to-india/faq" seeAllCount={266} />

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources and how this page is maintained</h2>
        <GuideSources
          note="This guide is based on the Companies Act, 2013, the Foreign Exchange Management Act, 1999 and the Non-Debt Instruments Rules, 2019, the Consolidated FDI Policy, and guidance from the Ministry of Corporate Affairs and the Reserve Bank of India. Indian and Australian rules, forms and due dates change often. We review this page at least quarterly and after major budget or RBI changes, and show the date of the last review at the top. This page is general information, not legal or tax advice."
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India: FEMA and FIRMS portal", href: "https://www.rbi.org.in" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "GST portal", href: "https://www.gst.gov.in" },
            { label: "Australian Taxation Office", href: "https://www.ato.gov.au" },
            { label: "Department of Foreign Affairs and Trade: apostilles", href: "https://www.dfat.gov.au" },
          ]}
        />


        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Ready to Set Up Your Subsidiary in India?"
        description="Tell us about your Australian parent company, timeline and sector — we'll reply with an entry structure recommendation and compliance overview for your case."
      />
    </main>
  )
}
