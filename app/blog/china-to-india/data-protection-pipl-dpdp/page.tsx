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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/data-protection-pipl-dpdp"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "china", label: "China: sending data out" },
  { id: "india", label: "India: the DPDP Act and Rules" },
  { id: "compare", label: "A comparison" },
  { id: "security", label: "Security and trust issues specific to this corridor" },
  { id: "plan", label: "A build plan for one privacy programme" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a Chinese company send personal data from China to its Indian subsidiary?", a: "Only through an approved route unless an exemption applies: a security assessment, a standard contract filing or certification, depending on the type and volume of data." },
  { q: "Does remote access from India count as an export from China?", a: "Generally yes. Access from outside China to data held in China is treated as a transfer, so a route is needed." },
  { q: "When do India's DPDP duties start?", a: "The Rules were notified on 13 November 2025 and the main duties take effect on 13 May 2027." },
  { q: "What is the penalty under the DPDP Act?", a: "Up to INR 250 crore for serious failures such as inadequate security safeguards." },
  { q: "Can Indian user data be accessed from China?", a: "Legally it can be, subject to the DPDP Act and any customer or sector restrictions, but access is a security concern in India and may be restricted by contract or regulation. Limit and document it." },
  { q: "Do Indian app blocks affect a new Chinese-owned company?", a: "Blocks apply to listed apps. A new company is not blocked automatically, but data and security reviews can be strict, so be ready to explain the data location and access." },
  { q: "Are the Chinese transfer thresholds fixed?", a: "No. They are cumulative from 1 January each year and the regulations have changed, so confirm the current figures with Chinese counsel." },
]

const relatedCards = [
  { title: "Hiring in India as a Chinese Employer: Local Contracts, Statutory Benefits and Managing Mixed Teams", desc: "A guide for Chinese HR teams hiring in India: written contracts, provident fund, ESI, gratuity, labour codes, notice and termination, working hours, grievance rules and the practical issues of managing a mixed Indian and Chinese team.", href: "/china-to-india/hiring-in-india" },
  { title: "What Else Applies to Chinese-Linked Companies in India: Sector Limits, Government Contracts, App Blocks, Customs and Trade Remedies", desc: "Beyond Press Note 3: sector limits, the registration rule for land-border-country bidders in government procurement, blocked apps and security reviews, customs duty, anti-dumping duties and enforcement scrutiny for a Chinese-owned company in India.", href: "/china-to-india/restricted-sectors-procurement-and-trade" },
  { title: "Contracts, Courts and Arbitration: Choosing Law and Seat and Enforcing Awards and Judgments Between China and India", desc: "How a Chinese parent protects its Indian subsidiary contracts: choice of law and seat, CIETAC, HKIAC and SIAC arbitration, enforcement of awards under the New York Convention, judgments, stamping and the investment protection position.", href: "/china-to-india/contracts-courts-arbitration" },
  { title: "Common Mistakes Chinese Companies Make in India and How to Avoid Them", desc: "The most frequent mistakes Chinese companies make when setting up in India: investing before Press Note 3 approval, assuming an apostille works, hidden ownership, late FEMA filings, visa mismatches and weak records.", href: "/china-to-india/common-mistakes" },
]

export default function DataProtectionPiplDpdpPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Moving Personal Data Between China and India: PIPL Cross-Border Routes, Important Data and the DPDP Act"
        description="How China's PIPL, Data Security Law and cross-border data rules apply to a Chinese company with an Indian subsidiary, and how India's Digital Personal Data Protection Act and data restrictions affect the Indian side."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Data Protection for Chinese Companies in India: PIPL Export Rules and India's DPDP Act" },
        ]}
      />

      <GuideHero
        eyebrow="Data: PIPL and DPDP"
        title="Moving Personal Data Between China and India: PIPL Cross-Border Routes, Important Data and the DPDP Act"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Data flows in this corridor are regulated at both ends. China restricts the export of personal
          information and important data through a security assessment, a standard contract filing or a
          certification route, with volume thresholds and special treatment for sensitive information. India has
          a new data protection law, the Digital Personal Data Protection Act, 2023, whose Rules were notified
          on 13 November 2025 with main duties from 13 May 2027, and it has blocked many Chinese-linked apps
          under the IT Act. A Chinese group running Indian operations needs a clear map of what data crosses the
          border in each direction and on what legal basis.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="data-protection" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Chinese law", "Personal Information Protection Law, Data Security Law and Cybersecurity Law; supervised by the Cyberspace Administration of China"],
                ["Export of personal information from China", "Security assessment, standard contract filing or certification, depending on the type and volume of data"],
                ["Certification route", "Measures for certification of cross-border transfers of personal information take effect 1 January 2026; certification valid for three years"],
                ["Thresholds (as reported)", "Non-sensitive data of fewer than 100,000 individuals in a year can fall within an exemption; 100,000 to 1 million via certification or standard contract; 1 million or more, or 10,000 or more sensitive records, via security assessment; important data via security assessment"],
                ["Employee data", "Treated carefully; transfers for human resources management are subject to the rules and to the exemptions in the current regulations"],
                ["Indian law", "Digital Personal Data Protection Act, 2023; Rules notified 13 November 2025; main duties from 13 May 2027; penalties up to INR 250 crore"],
                ["Indian restrictions", "Section 69A IT Act blocking of apps; government procurement and security reviews"],
                ["Action", "Map data flows both ways and decide which route applies before data moves"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="china" className="text-2xl font-bold text-gray-900 mt-12 mb-4">China: sending data out</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Personal information:</strong> a transfer of personal information from China to a recipient abroad, including viewing it remotely from India, needs one of the three routes unless an exemption applies.</li>
          <li><strong>Security assessment:</strong> run by the Cyberspace Administration, for large volumes, sensitive information above the threshold, important data and operators of critical information infrastructure.</li>
          <li><strong>Standard contract filing:</strong> a standard contract with the overseas recipient, filed with the provincial authority, for smaller volumes.</li>
          <li><strong>Certification:</strong> issued by approved institutions, valid for three years, suited to regular transfers. The measures take effect 1 January 2026.</li>
          <li><strong>Consent and assessment:</strong> separate individual consent and a personal information protection impact assessment are normally required.</li>
          <li><strong>Important data:</strong> sector rules define it; data classed as important needs a security assessment before export.</li>
          <li>Thresholds are cumulative from 1 January each year and splitting transfers to stay under a limit is not allowed. Confirm all figures with Chinese counsel.</li>
        </ul>

        <h2 id="india" className="text-2xl font-bold text-gray-900 mt-12 mb-4">India: the DPDP Act and Rules</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Who is covered:</strong> processing of digital personal data within India, and outside India if connected to offering goods or services in India.</li>
          <li><strong>Notice and consent:</strong> clear notice and free, specific consent for most processing, with listed legitimate uses such as employment purposes.</li>
          <li><strong>Data fiduciary duties:</strong> security safeguards, breach notice to the Data Protection Board and to affected people, erasure when the purpose ends.</li>
          <li><strong>Significant data fiduciaries:</strong> larger or riskier processors face extra duties, including an audit and an impact assessment.</li>
          <li><strong>Cross-border transfers:</strong> allowed except to countries the government restricts by notification. Check the notification list from time to time.</li>
          <li><strong>Timeline:</strong> the Rules were notified on 13 November 2025 and the main obligations take effect on 13 May 2027.</li>
        </ul>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A comparison</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">China (PIPL system)</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">India (DPDP Act)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Scope", "Personal information of individuals, with extraterritorial reach", "Digital personal data and non-digital data that is digitised"],
                ["Grounds", "Consent and listed other grounds", "Consent and listed legitimate uses"],
                ["Cross-border", "Security assessment, standard contract or certification, with exemptions", "Allowed unless the destination is restricted by notification"],
                ["Regulator", "Cyberspace Administration of China and sector regulators", "Data Protection Board of India"],
                ["Maximum penalty", "Up to 5% of prior-year turnover or CNY 50 million for serious violations (confirm)", "Up to INR 250 crore per breach category"],
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

        <h2 id="security" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Security and trust issues specific to this corridor</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>India has blocked many Chinese apps under Section 69A of the IT Act and reviews telecom and critical-infrastructure suppliers closely. A Chinese-owned Indian company that handles Indian user data should expect questions about where the data is stored and who can access it.</li>
          <li>Store Indian customer data in India or in a jurisdiction your customers accept, and limit access from China to what is needed and documented.</li>
          <li>Government and regulated customers may contractually prohibit access from certain countries.</li>
          <li>Keep the data map and access logs ready for audits and customer questionnaires.</li>
        </ul>

        <h2 id="plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A build plan for one privacy programme</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Map what personal data moves between China and India and why: employee, customer, supplier and device data.</li>
          <li>Decide the Chinese export route for each flow and prepare consent and impact assessments.</li>
          <li>Document the legal basis and storage location for Indian data.</li>
          <li>Choose a breach response procedure that satisfies both regulators.</li>
          <li>Update notices and consent flows for Indian individuals before 13 May 2027.</li>
          <li>Train both teams and test the process.</li>
        </ol>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.mofcom.gov.cn/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">MOFCOM (China)</a>,{" "}
          <a href="https://www.safe.gov.cn/en/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">SAFE (China)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/china-to-india/data-protection-pipl-dpdp" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/china-to-india/faq"
          seeAllLabel="See all 147 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Arnold & Porter: China requirements for personal information protection certification", href: "https://www.arnoldporter.com/en/perspectives/advisories/2025/11/china-requirements-personal-information-protection-certification" },
            { label: "MeitY: Digital Personal Data Protection", href: "https://www.meity.gov.in/" },
            { label: "Cyberspace Administration of China", href: "https://www.cac.gov.cn/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Chinese
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Moving Personal Data Between China and India?"
        description="Tell us what data flows where, and we'll map PIPL export rules, the DPDP Act and the contract terms you need."
      />
    </main>
  )
}
