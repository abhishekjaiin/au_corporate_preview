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

const PAGE_URL = "https://www.theaucorp.com/company-registration-in-gurugram"

const toc = [
  { id: "why-city", label: "Why foreign companies choose Gurugram" },
  { id: "registrar", label: "Registrar of Companies and the registered office" },
  { id: "state-rules", label: "Haryana rules that apply to your company" },
  { id: "areas", label: "Business districts in Gurugram" },
  { id: "sectors-talent", label: "Sectors and talent" },
  { id: "ncr", label: "Gurugram, Delhi or Noida?" },
  { id: "steps", label: "Steps and timeline" },
  { id: "ggn-living", label: "Practical points for teams in Gurugram" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a foreign company register a company in Gurugram?", a: "Yes. It incorporates a private limited company with its registered office in Gurugram, usually wholly owned under the Automatic Route." },
  { q: "Which Registrar does a Gurugram company report to?", a: "The Registrar of Companies for Delhi and Haryana, located in Delhi." },
  { q: "Is professional tax payable in Gurugram?", a: "Does not need to register for professional tax, because Haryana does not levy it." },
  { q: "How long does company registration in Gurugram take?", a: "About 4 to 6 weeks from complete documents, plus time for the bank account." },
  { q: "Do directors need to travel to India?", a: "No. Documents are signed and authenticated abroad and the filings are online." },
  { q: "Does Haryana charge professional tax?", a: "No. Haryana does not levy professional tax." },
]

const relatedCards = [
  { title: "India subsidiary registration", desc: "Our incorporation service.", href: "/india-subsidiary-registration" },
  { title: "Cost of setting up a subsidiary", desc: "Fees and annual costs.", href: "/cost-of-setting-up-a-subsidiary-in-india" },
  { title: "Cost of hiring employees", desc: "Employer costs in India.", href: "/cost-of-hiring-employees-in-india" },
  { title: "Resident director services", desc: "If you have no director in India.", href: "/resident-director-services-india" },
]

export default function CompanyRegistrationInGurugramPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"Company Registration in Gurugram for Foreign Companies: Registrar, State Rules, Offices and Talent"}
        description={"How a foreign company registers a company in Gurugram: the Registrar, Haryana shops and establishments and professional tax rules, offices, talent and timeline."}
        datePublished="2026-11-07"
        dateModified="2026-11-07"
        inLanguage="en"
      />

      <Breadcrumb items={[{ label: "Company Registration in Gurugram" }]} />

      <GuideHero eyebrow={"City guide: Gurugram"} title={"Company Registration in Gurugram for Foreign Companies: Registrar, State Rules, Offices and Talent"} updated="7 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A foreign company registers a company in Gurugram the same way as anywhere in India: a private limited company incorporated online through SPICe+, usually wholly owned under the Automatic Route, in about 4 to 6 weeks from complete documents. What changes with the city is the state law that applies once the company exists. With a registered office in Gurugram, the company reports to the Registrar of Companies for Delhi and Haryana, located in Delhi, registers under the shops and establishments law applicable in Haryana, does not need to register for professional tax, because Haryana does not levy it, and contributes to the Haryana Labour Welfare Fund for eligible employees. Gurugram suits Indian headquarters and corporate functions in north India.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="why-city" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why foreign companies choose Gurugram</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Gurugram, in Haryana, is the corporate centre of the National Capital Region next to Delhi. Many multinationals base their Indian headquarters here for access to the capital&apos;s government and business community, the Delhi international airport twenty minutes away, and a large pool of management, consulting, finance and technology professionals.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          It also sits close to the automotive and manufacturing belt around Manesar, which makes it a practical base for groups combining a head office with industrial operations in north India.
        </p>

        <h2 id="registrar" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Registrar of Companies and the registered office</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The registered office decides which Registrar of Companies the company reports to and which state&apos;s stamp duty applies to its incorporation documents. A company with its registered office in Gurugram reports to the Registrar of Companies for Delhi and Haryana, located in Delhi. All filings are made online through the Ministry of Corporate Affairs portal, so the Registrar&apos;s location matters mainly for queries, approvals that need the Registrar&apos;s review and later changes such as shifting the office out of the state.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Proof of the registered office is a utility bill not older than two months and the owner&apos;s written consent. Grade A towers and business parks are common; co-working is widely available in Cyber City and along Golf Course Road.
        </p>

        <h2 id="state-rules" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Haryana rules that apply to your company</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Rule</th><th scope="col" className="border border-gray-300 p-3 text-left">Position in Haryana</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Shops and establishments</th><td className="border border-gray-300 p-3">The shops and establishments law applicable in Haryana</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Professional tax</th><td className="border border-gray-300 p-3">Does not need to register for professional tax, because Haryana does not levy it</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Labour welfare fund</th><td className="border border-gray-300 p-3">Contributes to the Haryana Labour Welfare Fund for eligible employees</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Labour codes</th><td className="border border-gray-300 p-3">The four labour codes in force since 21 November 2025, with rules made by Haryana</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">GST</th><td className="border border-gray-300 p-3">State GST registration in Haryana for supplies from the city</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          These registrations are usually needed within weeks of opening an office or hiring the first employee, so we include them in the first-90-days plan after incorporation.
        </p>

        <h2 id="areas" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Business districts in Gurugram</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Cyber City and Cyber Hub: corporate offices and multinational headquarters.</li>
          <li>Golf Course Road and Golf Course Extension Road: premium office towers.</li>
          <li>Udyog Vihar: established commercial and light industrial offices.</li>
          <li>Sohna Road: newer offices and residential development.</li>
          <li>Manesar, further south: automotive and manufacturing operations.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Co-working space is widely available across Gurugram and is a common first office for foreign-owned companies while the team is small.
        </p>

        <h2 id="sectors-talent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sectors and talent</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Gurugram&apos;s strengths are corporate headquarters, consulting and professional services, financial technology, IT and business services, and automotive companies in the wider region.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          It draws professionals from across north India and the wider National Capital Region, including Delhi and Noida, giving a broad pool of management, finance and technology staff.
        </p>

        <h2 id="ncr" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Gurugram, Delhi or Noida?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The National Capital Region spans three states. Gurugram is in Haryana, Noida in Uttar Pradesh and Delhi is its own territory, so the choice of city decides which state&apos;s shops and establishments law, labour welfare fund and stamp duty apply. Gurugram is often preferred for corporate offices because of its airport access and Grade A office stock; Noida offers lower rents for larger technology teams. Companies with registered offices in Delhi or Haryana report to the same Registrar in Delhi.
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
          From complete documents, incorporation in Gurugram usually takes 4 to 6 weeks, with the bank account often the longest step. AU Corporate offers the best pricing with better work support, and the first consultation is free. See <Link href="/cost-of-setting-up-a-subsidiary-in-india" className="text-blue-800 font-semibold hover:underline">the cost of setting up a subsidiary</Link> and <Link href="/how-long-to-set-up-a-subsidiary-in-india" className="text-blue-800 font-semibold hover:underline">how long it takes</Link>.
        </p>
        <h2 id="ggn-living" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Practical points for teams in Gurugram</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Delhi Metro and the Rapid Metro link Cyber City and Golf Course Road with Delhi, and Indira Gandhi International Airport is close by, which suits leadership teams that travel. Summers are hot and winters can bring poor air quality, which many employers address through office air filtration and flexible working policies. Gurugram has a wide choice of international schools and serviced apartments for expatriate staff.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Haryana&apos;s enterprise promotion policies and single-roof clearance system support larger investments; ask us whether they apply to your project.
        </p>


        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India firm of Chartered Accountants and Company Secretaries, serving foreign companies since 2016. We handle the Indian side end to end, with the best pricing, better work support and a free first consultation.
        </p>
        <GuideCTA title={"Registering a Company in Gurugram?"} description={"Tell us about your plans for Gurugram, and we will confirm the incorporation route, state registrations in a free consultation."} />

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
            { label: "Government of Haryana", href: "https://haryana.gov.in/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 7 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Registering a Company in Gurugram?"} description={"Tell us about your plans for Gurugram, and we will confirm the incorporation route, state registrations in a free consultation."} />
    </main>
  )
}
