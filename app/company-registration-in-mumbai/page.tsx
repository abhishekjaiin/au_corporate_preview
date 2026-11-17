import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideFaqList } from "@/components/guide/GuideFaqList"
import { GuideRelatedCards } from "@/components/guide/GuideRelatedCards"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideSources } from "@/components/guide/GuideSources"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/company-registration-in-mumbai"

const toc = [
  { id: "why-city", label: "Why foreign companies choose Mumbai" },
  { id: "registrar", label: "Registrar of Companies and the registered office" },
  { id: "state-rules", label: "Maharashtra rules that apply to your company" },
  { id: "areas", label: "Business districts in Mumbai" },
  { id: "sectors-talent", label: "Sectors and talent" },
  { id: "regulated", label: "Regulated businesses in Mumbai" },
  { id: "steps", label: "Steps and timeline" },
  { id: "mum-living", label: "Practical points for teams in Mumbai" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a foreign company register a company in Mumbai?", a: "Yes. It incorporates a private limited company with its registered office in Mumbai, usually wholly owned under the Automatic Route." },
  { q: "Which Registrar does a Mumbai company report to?", a: "The Registrar of Companies for Mumbai." },
  { q: "Is professional tax payable in Mumbai?", a: "Registers for Maharashtra professional tax, which the state levies on salaries above a threshold, subject to an annual maximum." },
  { q: "How long does company registration in Mumbai take?", a: "About 4 to 6 weeks from complete documents, plus time for the bank account." },
  { q: "Do directors need to travel to India?", a: "No. Documents are signed and authenticated abroad and the filings are online." },
  { q: "Do financial services companies in Mumbai need extra licences?", a: "Usually yes: banking, lending, payments, insurance and fund management need RBI, SEBI or IRDAI approval in addition to incorporation." },
]

const relatedCards = [
  { title: "India subsidiary registration", desc: "Our incorporation service.", href: "/india-subsidiary-registration" },
  { title: "Cost of setting up a subsidiary", desc: "Fees and annual costs.", href: "/cost-of-setting-up-a-subsidiary-in-india" },
  { title: "Cost of hiring employees", desc: "Employer costs in India.", href: "/cost-of-hiring-employees-in-india" },
  { title: "Resident director services", desc: "If you have no director in India.", href: "/resident-director-services-india" },
]

export default function CompanyRegistrationInMumbaiPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"Company Registration in Mumbai for Foreign Companies: Registrar, State Rules, Offices and Talent"}
        description={"How a foreign company registers a company in Mumbai: the Registrar, Maharashtra shops and establishments and professional tax rules, offices, talent and timeline."}
        datePublished="2026-11-07"
        dateModified="2026-11-13"
        inLanguage="en"
      />

      <Breadcrumb items={[{ label: "Company Registration in Mumbai" }]} />

      <GuideHero eyebrow={"City guide: Mumbai"} title={"Company Registration in Mumbai for Foreign Companies: Registrar, State Rules, Offices and Talent"} updated="13 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A foreign company registers a company in Mumbai the same way as anywhere in India: a private limited company incorporated online through SPICe+, usually wholly owned under the Automatic Route, in about 4 to 6 weeks from complete documents. What changes with the city is the state law that applies once the company exists. With a registered office in Mumbai, the company reports to the Registrar of Companies for Mumbai, registers under the Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017, registers for Maharashtra professional tax, which the state levies on salaries above a threshold, subject to an annual maximum, and contributes to the Maharashtra Labour Welfare Fund twice a year for eligible employees. Mumbai suits financial services, consumer and trading businesses.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="why-city" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why foreign companies choose Mumbai</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Mumbai is India&apos;s financial capital, home to the Reserve Bank of India, the securities regulator, the main stock exchanges and the headquarters of most large Indian banks and corporates. Foreign financial services firms, consumer brands, media companies, pharmaceutical groups and trading houses choose it to be close to customers, banks and regulators.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Its port and airport connections make it a natural base for import and export businesses, while the wider region, including Thane and Navi Mumbai, offers lower-cost office and warehouse space.
        </p>

        <h2 id="registrar" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Registrar of Companies and the registered office</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The registered office decides which Registrar of Companies the company reports to and which state&apos;s stamp duty applies to its incorporation documents. A company with its registered office in Mumbai reports to the Registrar of Companies for Mumbai. All filings are made online through the Ministry of Corporate Affairs portal, so the Registrar&apos;s location matters mainly for queries, approvals that need the Registrar&apos;s review and later changes such as shifting the office out of the state.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Proof of the registered office is a utility bill not older than two months and the owner&apos;s written consent. Office rents in south and central Mumbai are among the highest in India; Thane and Navi Mumbai are common alternatives for larger teams.
        </p>

        <h2 id="state-rules" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Maharashtra rules that apply to your company</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Rule</th><th scope="col" className="border border-gray-300 p-3 text-left">Position in Maharashtra</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Shops and establishments</th><td className="border border-gray-300 p-3">The Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Professional tax</th><td className="border border-gray-300 p-3">Registers for Maharashtra professional tax, which the state levies on salaries above a threshold, subject to an annual maximum</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Labour welfare fund</th><td className="border border-gray-300 p-3">Contributes to the Maharashtra Labour Welfare Fund twice a year for eligible employees</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Labour codes</th><td className="border border-gray-300 p-3">The four labour codes in force since 21 November 2025, with rules made by Maharashtra</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">GST</th><td className="border border-gray-300 p-3">State GST registration in Maharashtra for supplies from the city</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          These registrations are usually needed within weeks of opening an office or hiring the first employee, so we include them in the first-90-days plan after incorporation.
        </p>

        <h2 id="areas" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Business districts in Mumbai</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Bandra Kurla Complex (BKC): banks, financial firms and multinational offices.</li>
          <li>Lower Parel and Worli: corporate offices in converted mill areas.</li>
          <li>Nariman Point and Fort: the traditional business district in south Mumbai.</li>
          <li>Andheri and Powai: technology companies and mid-sized offices.</li>
          <li>Thane and Navi Mumbai: lower-cost offices, back offices and warehousing.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Co-working space is widely available across Mumbai and is a common first office for foreign-owned companies while the team is small.
        </p>

        <h2 id="sectors-talent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sectors and talent</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Mumbai&apos;s strengths are banking and financial services, asset management, insurance, media and entertainment, consumer goods, pharmaceuticals, shipping and trading.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Finance, legal, sales and marketing professionals are concentrated in Mumbai; technology teams are available too, though many groups place larger engineering centres in Pune or Bengaluru.
        </p>

        <h2 id="regulated" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulated businesses in Mumbai</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Banks, non-banking finance companies, payment businesses, insurers, fund managers and broking firms need licences or registrations from the RBI, SEBI or IRDAI in addition to incorporation, and several have minimum capital and fit-and-proper requirements. Plan these approvals before incorporating, because they often decide the company&apos;s capital, name and objects. Foreign investment caps also apply in some of these sectors.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Steps and timeline</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Board resolution in the parent&apos;s country; documents notarised and apostilled.</li>
          <li>Digital signatures for directors; name reserved through SPICe+ Part A.</li>
          <li>SPICe+ Part B filed with the registered office in the city; certificate of incorporation, PAN and TAN issued.</li>
          <li>Bank account opened with a local branch; share capital remitted.</li>
          <li>Shares allotted within 60 days; FC-GPR filed within 30 days of allotment.</li>
          <li>State registrations: shops and establishments, professional tax where levied, and labour welfare fund.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          From complete documents, incorporation in Mumbai usually takes 4 to 6 weeks, with the bank account often the longest step. AU Corporate offers the best pricing with better work support, and the first consultation is free. See <Link href="/cost-of-setting-up-a-subsidiary-in-india" className="text-blue-800 font-semibold hover:underline">the cost of setting up a subsidiary</Link> and <Link href="/how-long-to-set-up-a-subsidiary-in-india" className="text-blue-800 font-semibold hover:underline">how long it takes</Link>.
        </p>
        <h2 id="mum-living" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Practical points for teams in Mumbai</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Mumbai&apos;s suburban rail network carries millions of commuters, and the metro lines now connect major business districts such as Andheri and the Bandra Kurla Complex. Commutes are long, so office location relative to where staff live matters. Housing in south and central Mumbai is among the most expensive in Asia, which raises expatriate housing allowances. The city&apos;s international airport handles direct flights to most global financial centres.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Because many regulators and banks are headquartered here, Mumbai is the most convenient base for businesses that need frequent meetings with the RBI, SEBI, banks or institutional investors.
        </p>


        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India firm of Chartered Accountants and Company Secretaries, serving foreign companies since 2016. We handle the Indian side end to end, with the best pricing, better work support and a free first consultation.
        </p>
        <GuideCTA title={"Registering a Company in Mumbai?"} description={"Tell us about your business and why Mumbai, and we will confirm the incorporation plan, any licences in a free consultation."} />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
            { label: "Government of Maharashtra", href: "https://www.maharashtra.gov.in/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Registering a Company in Mumbai?"} description={"Tell us about your business and why Mumbai, and we will confirm the incorporation plan, any licences in a free consultation."} />
    </main>
  )
}
