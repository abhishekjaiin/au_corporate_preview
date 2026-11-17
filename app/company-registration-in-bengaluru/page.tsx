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

const PAGE_URL = "https://www.theaucorp.com/company-registration-in-bengaluru"

const toc = [
  { id: "why-city", label: "Why foreign companies choose Bengaluru" },
  { id: "registrar", label: "Registrar of Companies and the registered office" },
  { id: "state-rules", label: "Karnataka rules that apply to your company" },
  { id: "areas", label: "Business districts in Bengaluru" },
  { id: "sectors-talent", label: "Sectors and talent" },
  { id: "gcc-bengaluru", label: "Setting up a capability centre in Bengaluru" },
  { id: "steps", label: "Steps and timeline" },
  { id: "blr-living", label: "Practical points for teams moving to Bengaluru" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a foreign company register a company in Bengaluru?", a: "Yes. It incorporates a private limited company with its registered office in Bengaluru, usually wholly owned under the Automatic Route." },
  { q: "Which Registrar does a Bengaluru company report to?", a: "The Registrar of Companies for Karnataka at Bengaluru." },
  { q: "Is professional tax payable in Bengaluru?", a: "Registers for Karnataka professional tax, which the state levies on salaries above a threshold and the employer deducts monthly." },
  { q: "How long does company registration in Bengaluru take?", a: "About 4 to 6 weeks from complete documents, plus time for the bank account." },
  { q: "Do directors need to travel to India?", a: "No. Documents are signed and authenticated abroad and the filings are online." },
  { q: "Is Bengaluru good for a GCC?", a: "Yes. It has India's largest concentration of capability centres and technology talent, at higher salary and rent levels than most cities." },
]

const relatedCards = [
  { title: "India subsidiary registration", desc: "Our incorporation service.", href: "/india-subsidiary-registration" },
  { title: "Cost of setting up a subsidiary", desc: "Fees and annual costs.", href: "/cost-of-setting-up-a-subsidiary-in-india" },
  { title: "Cost of hiring employees", desc: "Employer costs in India.", href: "/cost-of-hiring-employees-in-india" },
  { title: "Resident director services", desc: "If you have no director in India.", href: "/resident-director-services-india" },
]

export default function CompanyRegistrationInBengaluruPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"Company Registration in Bengaluru for Foreign Companies: Registrar, State Rules, Offices and Talent"}
        description={"How a foreign company registers a company in Bengaluru: the Registrar, Karnataka shops and establishments and professional tax rules, offices, talent and timeline."}
        datePublished="2026-11-07"
        dateModified="2026-11-13"
        inLanguage="en"
      />

      <Breadcrumb items={[{ label: "Company Registration in Bengaluru" }]} />

      <GuideHero eyebrow={"City guide: Bengaluru"} title={"Company Registration in Bengaluru for Foreign Companies: Registrar, State Rules, Offices and Talent"} updated="13 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A foreign company registers a company in Bengaluru the same way as anywhere in India: a private limited company incorporated online through SPICe+, usually wholly owned under the Automatic Route, in about 4 to 6 weeks from complete documents. What changes with the city is the state law that applies once the company exists. With a registered office in Bengaluru, the company reports to the Registrar of Companies for Karnataka at Bengaluru, registers under the Karnataka Shops and Commercial Establishments Act, 1961, registers for Karnataka professional tax, which the state levies on salaries above a threshold and the employer deducts monthly, and contributes to the Karnataka Labour Welfare Fund once a year for eligible employees. Bengaluru is India&apos;s leading location for technology and capability centres.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="why-city" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why foreign companies choose Bengaluru</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Bengaluru is India&apos;s largest technology hub and the most common location for global capability centres, product engineering teams and start-ups. Foreign companies choose it for the depth of its software, data, semiconductor design and research talent, its established ecosystem of multinational centres, and an international airport with direct links to Europe, the Gulf and Asia.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          For a foreign group building an engineering or IT team, the main advantage is hiring speed: experienced engineers, managers and specialists are available in numbers no other Indian city matches, although salaries and office rents are among the highest in India.
        </p>

        <h2 id="registrar" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Registrar of Companies and the registered office</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The registered office decides which Registrar of Companies the company reports to and which state&apos;s stamp duty applies to its incorporation documents. A company with its registered office in Bengaluru reports to the Registrar of Companies for Karnataka at Bengaluru. All filings are made online through the Ministry of Corporate Affairs portal, so the Registrar&apos;s location matters mainly for queries, approvals that need the Registrar&apos;s review and later changes such as shifting the office out of the state.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Proof of the registered office is a utility bill not older than two months and the owner&apos;s written consent. Technology parks offer serviced space with long leases; co-working operators cover most districts for the first months.
        </p>

        <h2 id="state-rules" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Karnataka rules that apply to your company</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Rule</th><th scope="col" className="border border-gray-300 p-3 text-left">Position in Karnataka</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Shops and establishments</th><td className="border border-gray-300 p-3">The Karnataka Shops and Commercial Establishments Act, 1961</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Professional tax</th><td className="border border-gray-300 p-3">Registers for Karnataka professional tax, which the state levies on salaries above a threshold and the employer deducts monthly</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Labour welfare fund</th><td className="border border-gray-300 p-3">Contributes to the Karnataka Labour Welfare Fund once a year for eligible employees</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Labour codes</th><td className="border border-gray-300 p-3">The four labour codes in force since 21 November 2025, with rules made by Karnataka</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">GST</th><td className="border border-gray-300 p-3">State GST registration in Karnataka for supplies from the city</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          These registrations are usually needed within weeks of opening an office or hiring the first employee, so we include them in the first-90-days plan after incorporation.
        </p>

        <h2 id="areas" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Business districts in Bengaluru</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Outer Ring Road and Marathahalli: large technology parks and multinational centres.</li>
          <li>Whitefield: technology parks and residential areas in the east of the city.</li>
          <li>Electronic City: electronics and IT companies in the south.</li>
          <li>Manyata and Hebbal: tech parks in the north, closer to the airport.</li>
          <li>Central business district around MG Road and Indiranagar: smaller offices and client-facing teams.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Co-working space is widely available across Bengaluru and is a common first office for foreign-owned companies while the team is small.
        </p>

        <h2 id="sectors-talent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sectors and talent</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Bengaluru&apos;s strengths are software and product engineering, data and AI, semiconductor and electronics design, aerospace, biotechnology and a large start-up ecosystem.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          The talent pool is India&apos;s deepest for technology roles, but competition for experienced people is intense, so plan salary benchmarks and notice-period buy-outs into the hiring budget.
        </p>

        <h2 id="gcc-bengaluru" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Setting up a capability centre in Bengaluru</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Many groups start their Indian capability centre in Bengaluru with a small team through an employer of record or a co-working space, then move into a leased floor as the company grows. Price services to the group on a cost-plus basis with Indian transfer pricing documentation, and plan for a resident director from the start. See <Link href="/gcc-setup-india" className="text-blue-800 font-semibold hover:underline">GCC setup in India</Link>.
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
          From complete documents, incorporation in Bengaluru usually takes 4 to 6 weeks, with the bank account often the longest step. AU Corporate offers the best pricing with better work support, and the first consultation is free. See <Link href="/cost-of-setting-up-a-subsidiary-in-india" className="text-blue-800 font-semibold hover:underline">the cost of setting up a subsidiary</Link> and <Link href="/how-long-to-set-up-a-subsidiary-in-india" className="text-blue-800 font-semibold hover:underline">how long it takes</Link>.
        </p>
        <h2 id="blr-living" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Practical points for teams moving to Bengaluru</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Traffic shapes daily life in Bengaluru, so many teams choose an office close to where staff live, and the Namma Metro network is extending to the main technology corridors. Kempegowda International Airport lies north of the city, which favours offices in Hebbal and Manyata for teams that travel often. The weather is mild for most of the year, and international schools in Whitefield, Sarjapur Road and the north make it a common posting for expatriate leaders.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Karnataka runs a single-window investment portal for larger projects, and the state&apos;s information technology and start-up policies offer support for eligible companies; ask us whether any apply to your plans.
        </p>


        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India firm of Chartered Accountants and Company Secretaries, serving foreign companies since 2016. We handle the Indian side end to end, with the best pricing, better work support and a free first consultation.
        </p>
        <GuideCTA title={"Registering a Company in Bengaluru?"} description={"Tell us about the team you plan to build in Bengaluru, and we will confirm the incorporation plan in a free consultation."} />

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
            { label: "Government of Karnataka", href: "https://www.karnataka.gov.in/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Registering a Company in Bengaluru?"} description={"Tell us about the team you plan to build in Bengaluru, and we will confirm the incorporation plan in a free consultation."} />
    </main>
  )
}
