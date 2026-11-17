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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/data-protection-appi-dpdp"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "appi", label: "APPI rules for transfers to India" },
  { id: "dpdp", label: "India's DPDP Act and Rules" },
  { id: "steps", label: "Practical steps for a Japanese group" },
  { id: "employee-data", label: "Employee data in both directions" },
  { id: "breach", label: "Responding to a data breach" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a Japanese company send personal data to India?", a: "Yes, with the individual's informed consent or where the Indian recipient keeps equivalent protection under APPI, usually through contracts." },
  { q: "Does India have adequacy status under Japan's APPI?", a: "No. Transfers rely on consent or equivalent measures." },
  { q: "When do India's DPDP duties apply?", a: "The main duties start on 13 May 2027, under the DPDP Rules notified on 13 November 2025." },
  { q: "Does DPDP apply to processing Japanese customers' data in India?", a: "Processing non-residents' data under a contract with a foreign entity is largely exempt from DPDP notice and consent duties, but security safeguards still apply." },
  { q: "Can Indian employee data be sent to Japan?", a: "Yes. The DPDP Act permits transfers abroad unless the government restricts particular countries; employment-related processing has its own lawful bases." },
]

const relatedCards = [
  { title: "GCC for Japanese companies", desc: "Running a capability centre in India.", href: "/japan-to-india/gcc-for-japanese-companies" },
  { title: "Contracts and arbitration", desc: "Intercompany agreements.", href: "/japan-to-india/contracts-and-arbitration" },
  { title: "Japan to India", desc: "The complete guide.", href: "/japan-to-india" },
]

export default function DataProtectionAppiDpdpPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"Data Protection for Japanese Companies in India: APPI Cross-Border Rules and India's DPDP Act"}
        description={"How Japan's APPI and India's DPDP Act apply when a Japanese company runs an Indian subsidiary: transfers to India, contracts, the DPDP Rules 2025 timeline and practical steps."}
        datePublished="2026-11-13"
        dateModified="2026-11-13"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Set Up a Subsidiary in India from Japan: 2026 Guide", href: "/japan-to-india" },
          { label: "Data Protection for Japanese Companies in India: APPI and DPDP" },
        ]}
      />

      <GuideHero eyebrow={"Data protection: APPI and DPDP"} title={"Data Protection for Japanese Companies in India: APPI Cross-Border Rules and India's DPDP Act"} updated="13 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          When a Japanese company sends personal data to its Indian subsidiary, Japan&apos;s Act on the Protection of Personal Information (APPI) treats it as a transfer to a third party in a foreign country. India has no adequacy finding from Japan&apos;s Personal Information Protection Commission, so the transfer usually relies on the individual&apos;s consent after being informed about India&apos;s data protection system, or on the Indian recipient maintaining equivalent protection through contracts and controls. On the Indian side, the Digital Personal Data Protection Act applies to the subsidiary as its duties take effect: the DPDP Rules were notified on 13 November 2025 and the main duties start on 13 May 2027.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: Set Up a Subsidiary in India from Japan: 2026 Guide
          </Link>
        </p>

        <h2 id="appi" className="text-2xl font-bold text-gray-900 mt-12 mb-4">APPI rules for transfers to India</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Route under APPI</th><th scope="col" className="border border-gray-300 p-3 text-left">How it works for an Indian subsidiary</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Consent</th><td className="border border-gray-300 p-3">The individual consents after being given information about India&apos;s data protection system and the recipient&apos;s measures</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Equivalent measures</th><td className="border border-gray-300 p-3">The Indian recipient keeps a system equivalent to APPI standards, usually through an intercompany agreement and group policies, with ongoing checks</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Adequacy</th><td className="border border-gray-300 p-3">Not available: India has no adequacy finding from Japan&apos;s Personal Information Protection Commission</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          For employee data and customer data processed in India for the group, most Japanese companies use the equivalent-measures route, because consent is hard to manage at scale. The Japanese company remains responsible for monitoring the Indian recipient&apos;s handling and for providing information to individuals on request.
        </p>

        <h2 id="dpdp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">India&apos;s DPDP Act and Rules</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Timeline:</strong> the DPDP Rules were notified on 13 November 2025; the main duties for data fiduciaries start on 13 May 2027.</li>
          <li><strong>Notice and consent:</strong> clear notices and consent records for Indian customers and employees, with lawful uses where consent is not needed.</li>
          <li><strong>Security and breaches:</strong> reasonable security safeguards and reporting of personal data breaches.</li>
          <li><strong>Processing for a foreign controller:</strong> processing of non-residents&apos; data under a contract with a foreign entity is largely exempt from the notice and consent duties, but not from security safeguards.</li>
          <li><strong>Transfers abroad:</strong> permitted unless the government restricts particular countries; watch for notifications.</li>
        </ul>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Practical steps for a Japanese group</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Map the personal data flowing between Japan and India, and its purpose.</li>
          <li>Sign an intercompany data processing agreement that meets APPI&apos;s equivalent-measures standard.</li>
          <li>Align group information security policies with both laws.</li>
          <li>Prepare DPDP notices and consent processes for Indian data before May 2027.</li>
          <li>Set up a joint breach response process covering Japanese and Indian reporting duties.</li>
          <li>Review the arrangement each year.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          See <Link href="/japan-to-india/gcc-for-japanese-companies" className="text-blue-800 font-semibold hover:underline">GCC setup for Japanese companies</Link> and the <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">complete guide for Japanese companies</Link>.
        </p>
        <h2 id="employee-data" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Employee data in both directions</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          HR data flows both ways in most Japanese groups: Indian employee data goes to Japan for group HR, payroll reporting and equity plans, and Japanese staff data comes to India for chuzaiin payroll and immigration. Under the DPDP Act, processing Indian employee data for employment purposes has specific lawful bases, while transfers of Indian data to Japan are permitted unless the government restricts them. Record each HR data flow, its purpose and the systems used, and cover them in the intercompany agreement.
        </p>

        <h2 id="breach" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Responding to a data breach</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A breach affecting both countries can trigger reporting duties under Japan&apos;s APPI to the Personal Information Protection Commission and individuals, and under India&apos;s DPDP Act to the Data Protection Board and affected individuals once those duties apply. Agree a joint response plan in advance: who decides, who notifies which authority, and how facts are shared between Tokyo and India within the deadlines.
        </p>


        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We help Japanese groups map the personal data their Indian company handles, align intercompany agreements with APPI transfer requirements, and prepare for India&apos;s DPDP duties with their legal advisers. We offer the best pricing with better work support, and the first consultation is free.
        </p>
        <GuideServiceBox path="/japan-to-india/data-protection-appi-dpdp" />
        <GuideCTA title={"Sending Data from Japan to India?"} description={"Tell us what data your Indian company will handle, and we will map the steps in a free consultation."} />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} seeAllHref="/japan-to-india/faq" seeAllLabel="See all the FAQs" seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit." />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Personal Information Protection Commission, Japan", href: "https://www.ppc.go.jp/en/" },
            { label: "Ministry of Electronics and Information Technology (DPDP Act)", href: "https://www.meity.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">&larr; Back to the complete guide</Link>
        </p>
        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Sending Data from Japan to India?"} description={"Tell us what data your Indian company will handle, and we will map the steps in a free consultation."} />
    </main>
  )
}
