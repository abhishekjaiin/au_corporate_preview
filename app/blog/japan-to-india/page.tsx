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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "decision", label: "The decision in one table" },
  { id: "before", label: "Before the ringi: three questions to settle" },
  { id: "vehicle", label: "Choosing the vehicle" },
  { id: "documents", label: "Preparing documents in Japan" },
  { id: "setup", label: "From filing to a working company" },
  { id: "money", label: "Capital in, profits back to Japan" },
  { id: "tax", label: "Tax, transfer pricing and the Japanese parent" },
  { id: "running", label: "Running the subsidiary year round" },
  { id: "people", label: "Local hires and chuzaiin" },
  { id: "cost", label: "Cost and timeline" },
  { id: "treaties", label: "Treaty and social security" },
  { id: "series", label: "The full guide series" },
  { id: "help", label: "How AU Corporate works with Japanese groups" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "sources", label: "Sources and how this page is maintained" },
]

const seriesCards = [
  { title: "Subsidiary, branch, liaison office or LLP", desc: "Which vehicle fits a KK or GK entering India.", href: "/japan-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" },
  { title: "Incorporation process from Japan", desc: "Three phases across Japan and India, in order.", href: "/japan-to-india/incorporation-process" },
  { title: "Documents and apostille from Japan", desc: "Notary, Legal Affairs Bureau, MOFA and translation.", href: "/japan-to-india/documents-and-apostille" },
  { title: "Resident director rules", desc: "Chuzaiin, local managers and professional directors.", href: "/japan-to-india/resident-director" },
  { title: "Funding and FC-GPR", desc: "Yen remittance, rupee pricing and the FEMA clocks.", href: "/japan-to-india/funding-fema-fc-gpr" },
  { title: "Share valuation", desc: "The FEMA price floor and when to revalue.", href: "/japan-to-india/share-valuation" },
  { title: "Repatriating profits to Japan", desc: "The 10% treaty rate and the foreign dividend exemption.", href: "/japan-to-india/repatriating-profits" },
  { title: "EOR or subsidiary", desc: "Hiring before the entity, and when to switch.", href: "/japan-to-india/eor-vs-subsidiary" },
  { title: "Transfer pricing", desc: "Aligning the Indian file with the Japanese local file.", href: "/japan-to-india/transfer-pricing" },
  { title: "Tax treaty and PE risk", desc: "Chuzaiin, dependent agents and fees for technical services.", href: "/japan-to-india/dtaa-pe-risk" },
  { title: "India-Japan treaty and social security", desc: "Treaty rates, expat tax and the Certificate of Coverage.", href: "/japan-to-india/tax-and-social-security-treaties" },
  { title: "Japan parent obligations", desc: "CFC rules, dividend exemption and Japanese reporting.", href: "/japan-to-india/japan-parent-obligations" },
  { title: "Compliance calendar", desc: "Indian deadlines against a 31 March group year.", href: "/japan-to-india/compliance-calendar" },
  { title: "Japan FAQs", desc: "Answers from first planning to exit.", href: "/japan-to-india/faq" },
  { title: "Treaty and social security FAQs", desc: "The DTAA, expat tax, EPF and the agreement.", href: "/japan-to-india/tax-and-social-security-treaties/faq" },
]

const faqs = [
  { q: "Can a KK or GK own all the shares of an Indian company?", a: "Yes, in most sectors. India allows 100% foreign ownership under the Automatic Route, and Press Note 3 does not apply to Japanese investors, so no prior approval is needed unless the sector itself requires it. A second shareholder, usually a group company or nominee holding one share, completes the two-shareholder minimum." },
  { q: "How long does it take to set up from Japan?", a: "Usually 4 to 6 weeks from the day the apostilled Japanese documents reach India. The Japanese document steps, the internal approval of the capital and bank KYC are what most often extend the timeline." },
  { q: "Who apostilles Japanese company documents?", a: "The Ministry of Foreign Affairs of Japan. Private documents such as board resolutions are notarised and certified by the Legal Affairs Bureau first, and every document needs a certified English translation." },
  { q: "Does the Indian company need a director living in India?", a: "Yes. At least one director must have stayed in India for 182 days or more in the financial year. Many Japanese groups use a full-year chuzaiin; others appoint an Indian manager or a professional resident director." },
  { q: "What does AU Corporate charge to set up the subsidiary?", a: "Our indicative fee is USD 750 to USD 1,000 for share capital up to ₹10 lakh, covering the incorporation work. Government fees, stamp duty and the Japanese notary and apostille costs depend on the state, the capital and the documents." },
  { q: "What tax does India charge on dividends to Japan?", a: "10% under the India-Japan treaty, with a Japanese Certificate of Residence and Form 41. A Japanese parent holding 25% or more for six months can exempt 95% of the dividend from Japanese tax." },
  { q: "Do chuzaiin pay into the Indian provident fund?", a: "Not if they hold a Certificate of Coverage under the India-Japan Social Security Agreement, which keeps them in Japanese pension insurance for up to five years." },
  { q: "Does the same 31 March year end help?", a: "Yes. Most Japanese parents close on 31 March like India, so the Indian audit and the Japanese consolidation can share one timetable, although the parent usually needs Indian figures within weeks." },
  { q: "Can a Japanese court judgment be used against an Indian party?", a: "Not directly. Japan is not a reciprocating territory under Section 44A of the Code of Civil Procedure, so arbitration, for example under JCAA or SIAC rules, is the safer choice for contracts with Indian parties." },
  { q: "Is an employer of record a good first step?", a: "For a small pilot team, often yes. Once the team grows, serves Indian customers or needs chuzaiin, a subsidiary is cheaper and avoids permanent establishment questions." },
  { q: "What does the subsidiary file every year?", a: "A statutory audit, AOC-4 and MGT-7 after the AGM, the income tax return with a transfer pricing report where applicable, GST and TDS returns, payroll filings and the RBI's FLA return by 15 July." },
  { q: "Can the subsidiary be sold or closed later?", a: "Yes, by share sale, merger, slump sale, strike-off or voluntary liquidation, each with its own Indian tax and FEMA steps and a separate Japanese tax result." },
]

export default function JapanToIndiaHubPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How to Set Up a Subsidiary in India from Japan: The 2026 Guide"
        description="How Japanese companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, tax and compliance. By a Chartered Accountant."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "How to Set Up a Subsidiary in India from Japan" },
        ]}
      />

      <GuideHero
        eyebrow="Guide for Japanese companies"
        title="How to Set Up a Subsidiary in India from Japan: The 2026 Guide"
        dek="Structure, incorporation, FEMA/RBI filings, the India-Japan tax treaty and social security, and compliance for Japanese companies (KK and GK) entering India, in plain terms."
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="The short answer">
          A Japanese KK or GK usually enters India through a wholly owned private limited company. Press Note 3
          does not apply to Japan, so most sectors need no prior approval. The company is incorporated online,
          funded with share capital sent in yen or dollars, and reported to the Reserve Bank of India within 30
          days of allotment. One director must live in India, often a chuzaiin, and profits can return to Japan
          at a 10% treaty rate.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="text-gray-600 leading-relaxed mb-10">
          This guide follows the order in which a Japanese head office usually makes the India decision: the
          questions to settle before the ringi, the choice of vehicle, the documents prepared in Japan, the
          filing and first capital, and then the tax, compliance and people questions that follow for years.
          Each section links to a deeper guide written for Japanese parents.
        </p>

        <h2 id="decision" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The decision in one table</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Question</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Answer for a Japanese company</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Vehicle</th>
                <td className="border border-gray-300 p-3">Private limited company, wholly owned or as a joint venture</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Prior approval</th>
                <td className="border border-gray-300 p-3">Not needed in most sectors; Press Note 3 does not apply to Japan</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">People on the board</th>
                <td className="border border-gray-300 p-3">Two directors, one meeting the 182-day India residence test</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Documents from Japan</th>
                <td className="border border-gray-300 p-3">Certificate of registered matters, articles, board resolution; notarised, certified and apostilled by MOFA, then translated</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Time to incorporate</th>
                <td className="border border-gray-300 p-3">About 4 to 6 weeks from receipt of the apostilled documents</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">First RBI report</th>
                <td className="border border-gray-300 p-3">FC-GPR within 30 days of allotting shares</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Tax on dividends to Japan</th>
                <td className="border border-gray-300 p-3">10% under the treaty; 95% exempt in Japan for qualifying holdings</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Pension for posted staff</th>
                <td className="border border-gray-300 p-3">Japanese pension continues for up to five years with a Certificate of Coverage</td>
              </tr>
            </tbody>
          </table>
        </div>
        <GuideCountryProfile country="japan" />

        <h2 id="before" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Before the ringi: three questions to settle</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>What will the Indian company do in its first two years?</strong> Development and support for Japan, sales to Indian customers, manufacturing, or a mix. The answer drives the sector check, transfer pricing and the hiring plan.</li>
          <li><strong>Who will sit in India?</strong> A chuzaiin posted for a year or more can be the resident director and run the company; otherwise plan for an Indian manager or a professional director.</li>
          <li><strong>How much capital, in one round?</strong> Approving 12 to 18 months of costs at once avoids a second ringi and a second FC-GPR soon after launch.</li>
        </ul>
        <h2 id="vehicle" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing the vehicle</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The subsidiary is the default because it can do every kind of business, separates Indian liabilities from the Japanese balance sheet, and lets dividends benefit from Japan&apos;s foreign dividend exemption. A liaison office is useful only for a market-study phase without income. A branch is part of the Japanese company and is taxed at the higher foreign company rate. LLPs are rarely used by Japanese groups. Compare them in <Link href="/japan-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" className="text-blue-800 font-semibold hover:underline">subsidiary, branch, liaison office or LLP</Link>.
        </p>
        <h2 id="documents" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Preparing documents in Japan</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Most of the calendar time sits in Japan. Order a fresh certificate of registered matters, prepare the board or member resolution, have private documents notarised and certified by the Legal Affairs Bureau, and obtain the MOFA apostille. Certified English translations must match passports exactly. MOFA expects official documents to be recent, and its Tokyo desk works by appointment, so plan the sequence before ordering anything. Details: <Link href="/japan-to-india/documents-and-apostille" className="text-blue-800 font-semibold hover:underline">documents and apostille from Japan</Link>.
        </p>
        <h2 id="setup" className="text-2xl font-bold text-gray-900 mt-12 mb-4">From filing to a working company</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Stage</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What happens</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Digital signatures</th>
                <td className="border border-gray-300 p-3">DSCs for directors and the subscriber&apos;s signatory</td>
                <td className="border border-gray-300 p-3">AU Corporate with the directors</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">SPICe+ filing</th>
                <td className="border border-gray-300 p-3">Name, memorandum, articles, DINs, PAN and TAN in one integrated filing</td>
                <td className="border border-gray-300 p-3">AU Corporate</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Bank account</th>
                <td className="border border-gray-300 p-3">KYC on the Japanese parent and the directors</td>
                <td className="border border-gray-300 p-3">Indian bank, with our support</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">First capital</th>
                <td className="border border-gray-300 p-3">Yen or dollars remitted; the bank issues the FIRC</td>
                <td className="border border-gray-300 p-3">Japanese treasury</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Allotment and FC-GPR</th>
                <td className="border border-gray-300 p-3">Shares within 60 days; FC-GPR within 30 days of allotment</td>
                <td className="border border-gray-300 p-3">AU Corporate</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Start-up filings</th>
                <td className="border border-gray-300 p-3">First auditor within 30 days; INC-20A within 180 days; GST and payroll registrations</td>
                <td className="border border-gray-300 p-3">AU Corporate</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          The step-by-step version is in the <Link href="/japan-to-india/incorporation-process" className="text-blue-800 font-semibold hover:underline">incorporation process from Japan</Link> and the <Link href="/japan-to-india/funding-fema-fc-gpr" className="text-blue-800 font-semibold hover:underline">funding and FC-GPR</Link> guides.
        </p>
        <h2 id="money" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Capital in, profits back to Japan</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Capital goes in as equity priced at no less than fair value, with convertible instruments or a parent loan for special cases. Profits come back as dividends once the subsidiary has audited distributable profits, or as fees and royalties for real services and technology. Each payment to Japan needs a current Certificate of Residence and Form 41 for the treaty rate, and Forms 145 and 146 for the bank. See <Link href="/japan-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">repatriating profits to Japan</Link> and <Link href="/japan-to-india/share-valuation" className="text-blue-800 font-semibold hover:underline">share valuation</Link>.
        </p>
        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax, transfer pricing and the Japanese parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Indian corporate tax:</strong> about 25.17% under the concessional regime for a domestic company.</li>
          <li><strong>Transfer pricing:</strong> every flow with Japan priced at arm&apos;s length and certified in Form 48; align the margins with the parent&apos;s Japanese local file. <Link href="/japan-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">Transfer pricing guide</Link>.</li>
          <li><strong>Permanent establishment:</strong> chuzaiin should act for the Indian company, not conclude contracts for the parent. <Link href="/japan-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">Treaty and PE risk</Link>.</li>
          <li><strong>Japanese side:</strong> CFC testing, the 95% foreign dividend exemption and Japanese reporting on the overseas investment. <Link href="/japan-to-india/japan-parent-obligations" className="text-blue-800 font-semibold hover:underline">Japan parent obligations</Link>.</li>
        </ul>
        <h2 id="running" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Running the subsidiary year round</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Monthly TDS, GST and payroll filings, quarterly advance tax, and an annual cycle of audit, AGM by 30 September, ROC filings, the tax return and the FLA return by 15 July. Because most Japanese parents also close on 31 March, the Indian close can be planned inside the group&apos;s own year-end timetable. A listed parent may also bring the subsidiary into J-SOX scope. See the <Link href="/japan-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar</Link> and <Link href="/japan-to-india/audit-icofr" className="text-blue-800 font-semibold hover:underline">audit and internal controls</Link>.
        </p>
        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          <strong>New Indian tax law.</strong> The Income-tax Act, 2025 applies from 1 April 2026. Our guides use
          the new form names, with the earlier names in brackets, for example Form 48 (previously Form 3CEB) and
          Forms 145 and 146 (previously 15CA and 15CB).
        </div>

        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Local hires and chuzaiin</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Local staff</strong> are hired on Indian contracts with provident fund, ESI where wages are low, gratuity after five years and the labour codes. Japanese seniority pay and retirement allowances do not carry over. <Link href="/japan-to-india/hiring-and-payroll" className="text-blue-800 font-semibold hover:underline">Hiring and payroll</Link>.</li>
          <li><strong>Chuzaiin</strong> need an Employment Visa, FRRO registration and a Certificate of Coverage for pension. <Link href="/japan-to-india/expat-visa" className="text-blue-800 font-semibold hover:underline">Sending a Japanese executive to India</Link>.</li>
          <li><strong>Before the entity exists,</strong> an employer of record can hold a small team for a pilot. <Link href="/japan-to-india/eor-vs-subsidiary" className="text-blue-800 font-semibold hover:underline">EOR or subsidiary</Link>.</li>
        </ul>
        <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Cost and timeline</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Plan for one-time costs (government fees and stamp duty by state, Japanese notary and apostille, translation, digital signatures and our fee) and annual running costs (accounting, audit, tax and GST filings, payroll, RBI returns and transfer pricing). AU Corporate&apos;s indicative incorporation fee is USD 750 to USD 1,000 for share capital up to ₹10 lakh. From receipt of apostilled documents, incorporation takes about 4 to 6 weeks.
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

        <h2 id="treaties" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Treaty and social security</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The India-Japan tax treaty caps Indian tax at 10% on dividends, interest, royalties and fees for technical services. The separate India-Japan Social Security Agreement, in force since 1 October 2016, keeps posted staff in Japanese pension insurance for up to five years. The treaty guides explain each part:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><Link href="/japan-to-india/tax-and-social-security-treaties" className="text-blue-800 font-semibold hover:underline">India-Japan treaty and social security: overview</Link></li>
          <li><Link href="/japan-to-india/tax-and-social-security-treaties/india-japan-dtaa-guide" className="text-blue-800 font-semibold hover:underline">The India-Japan DTAA explained</Link></li>
          <li><Link href="/japan-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" className="text-blue-800 font-semibold hover:underline">Withholding rates under the treaty</Link></li>
          <li><Link href="/japan-to-india/tax-and-social-security-treaties/treaty-benefits-documents" className="text-blue-800 font-semibold hover:underline">Claiming treaty benefits</Link></li>
          <li><Link href="/japan-to-india/tax-and-social-security-treaties/expat-tax-residency-india-japan" className="text-blue-800 font-semibold hover:underline">Tax residency for Japanese expats</Link></li>
          <li><Link href="/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement" className="text-blue-800 font-semibold hover:underline">The India-Japan Social Security Agreement</Link></li>
          <li><Link href="/japan-to-india/tax-and-social-security-treaties/epf-international-workers" className="text-blue-800 font-semibold hover:underline">EPF for international workers</Link></li>
          <li><Link href="/japan-to-india/tax-and-social-security-treaties/japan-social-insurance-for-expats-in-india" className="text-blue-800 font-semibold hover:underline">Japanese social insurance for employees in India</Link></li>
        </ul>
        <h2 id="series" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The full guide series</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={seriesCards} />
        </div>

        <h2 id="help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate works with Japanese groups</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India advisory firm, established in 2016. We act as the Indian finance and compliance team for Japanese parents: one contact for incorporation, FEMA, accounting, tax and payroll, reporting in the format and timetable your head office uses, and working alongside your Japanese auditors and tax advisers.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Stage</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What we handle</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Service page</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Set up</th>
                <td className="border border-gray-300 p-3">Structure, documents checklist, SPICe+, bank account</td>
                <td className="border border-gray-300 p-3"><Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link></td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Capital and FEMA</th>
                <td className="border border-gray-300 p-3">Valuation, allotment, FC-GPR, FLA, ECB</td>
                <td className="border border-gray-300 p-3"><Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link></td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Monthly operations</th>
                <td className="border border-gray-300 p-3">Accounting, GST, TDS, group reporting packs</td>
                <td className="border border-gray-300 p-3"><Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">Accounting, reporting and audit support</Link></td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Tax</th>
                <td className="border border-gray-300 p-3">Corporate tax, transfer pricing, treaty relief, notices</td>
                <td className="border border-gray-300 p-3"><Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">Corporate tax, GST and transfer pricing</Link></td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Company law</th>
                <td className="border border-gray-300 p-3">Board meetings, AGM, ROC filings, director KYC</td>
                <td className="border border-gray-300 p-3"><Link href="/secretarial-roc-compliance" className="text-blue-800 font-semibold hover:underline">Secretarial and ROC compliance</Link></td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">People</th>
                <td className="border border-gray-300 p-3">Payroll, PF, ESI, chuzaiin tax and visas</td>
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
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department</a>{" "}
          and the{" "}
          <a href="https://www.gst.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">GST portal</a>.
        </p>

        <GuideServiceBox path="/japan-to-india" />
        <GuideCTA
          title="Planning India from Tokyo or Osaka?"
          description="A 30-minute call on structure, documents, timeline and compliance for your group."
        />

        <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/japan-to-india/faq"
          seeAllLabel="See all Japan FAQs"
          seeAllDescription="Answers for Japanese parents, from the first plan to closure."
        />

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources and how this page is maintained</h2>
        <GuideSources
          note="This guide is based on the Companies Act, 2013, the Foreign Exchange Management Act, 1999 and the Non-Debt Instruments Rules, 2019, the Consolidated FDI Policy, and guidance from the Ministry of Corporate Affairs and the Reserve Bank of India. Indian rules, forms and due dates change often. We review this page at least quarterly and after major budget or RBI changes, and show the date of the last review at the top. This page is general information, not legal or tax advice."
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India: FEMA and FIRMS portal", href: "https://www.rbi.org.in" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "GST portal", href: "https://www.gst.gov.in" },
          ]}
        />


        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Planning an Indian Subsidiary for Your Japanese Company?"
        description="Tell us about your KK or GK, your timeline and your sector, and we'll reply with a recommended structure and a compliance overview for an Indian subsidiary."
      />
    </main>
  )
}
