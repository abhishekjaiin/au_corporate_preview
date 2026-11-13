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

const PAGE_URL = "https://www.theaucorp.com/japan-alliance"


const allianceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "@id": "https://www.n-cpa.com/#organization",
      name: "Nihon-bashi International Accounting Firm",
      alternateName: "日本橋国際会計事務所",
      url: "https://www.n-cpa.com/en/",
      foundingDate: "2009-02",
      telephone: "+81-3-4446-6568",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Urbannet Nihonbashi 2-chome Building 10F, 2-1-3 Nihonbashi",
        addressLocality: "Chuo-ku",
        addressRegion: "Tokyo",
        postalCode: "103-0027",
        addressCountry: "JP",
      },
      areaServed: [{ "@type": "Country", name: "Japan" }],
      sameAs: ["https://www.n-cpa.com/"],
    },
    {
      "@type": "WebPage",
      "@id": PAGE_URL + "#webpage",
      url: PAGE_URL,
      name: "Japan–India alliance: AU Corporate and Nihon-bashi International Accounting Firm",
      about: [
        { "@id": "https://www.theaucorp.com/#organization" },
        { "@id": "https://www.n-cpa.com/#organization" },
      ],
      mentions: { "@type": "Country", name: "Japan" },
    },
  ],
}

const toc = [
  { id: "what-it-is", label: "What the alliance is" },
  { id: "nihonbashi", label: "About Nihon-bashi International Accounting Firm" },
  { id: "how-it-works", label: "How the work is shared" },
  { id: "services", label: "Services covered" },
  { id: "india-to-japan", label: "Indian companies entering Japan" },
  { id: "fees", label: "Fees" },
  { id: "why-it-matters", label: "Why this matters for Japanese companies" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Who is AU Corporate's partner firm in Japan?", a: "Nihon-bashi International Accounting Firm (日本橋国際会計事務所), a Tokyo firm of Japanese CPAs and tax accountants led by Shunichi Nemoto. The two firms signed an MOU on 19 October 2026." },
  { q: "Is Nihon-bashi part of AU Corporate?", a: "No. They are independent firms with no branch or subsidiary relationship. Each provides the work in its own country under a direct contract with the client." },
  { q: "Can a Japanese company get help in Japanese?", a: "Yes. Nihon-bashi takes the first consultation in Japanese and acts as the Japan-side contact. AU Corporate handles the procedures and ongoing accounting and tax in India." },
  { q: "What does the India incorporation cost?", a: "AU Corporate's indicative fee is USD 750 to USD 1,000 for share capital up to ₹10 lakh. Government fees, stamp duty, and Japanese notary and apostille costs are extra and depend on the case. The first consultation is free." },
  { q: "Does the alliance help Indian companies going to Japan?", a: "Yes. Nihon-bashi supports Japanese incorporation, tax filing, audit and English-language financial statements, and AU Corporate handles the Indian parent's FEMA overseas investment reporting and transfer pricing." },
  { q: "How do I start?", a: "Contact AU Corporate through the form on this page, or contact Nihon-bashi through its own website. Either firm will bring in the other." },
]

const relatedCards = [
  { title: "Japan to India: Complete Guide", desc: "Structure, documents, tax treaty, CEPA and compliance for Japanese companies.", href: "/japan-to-india" },
  { title: "Indian Subsidiary Registration", desc: "AU Corporate's incorporation service, with process and fees.", href: "/india-subsidiary-registration" },
  { title: "India–Japan CEPA", desc: "What the trade agreement changes for Japanese investors.", href: "/japan-to-india/india-japan-cepa" },
  { title: "GCC Setup for Japanese Companies", desc: "Building a capability centre in India.", href: "/japan-to-india/gcc-for-japanese-companies" },
]

export default function JapanAlliancePage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"AU Corporate and Nihon-bashi International Accounting Firm: Japan–India Alliance"}
        description={"AU Corporate (New Delhi) and Nihon-bashi International Accounting Firm (Tokyo) signed an MOU on 19 October 2026 to support Japan–India market entry."}
        datePublished="2026-11-13"
        dateModified="2026-11-13"
        inLanguage="en"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(allianceSchema) }} />

      <Breadcrumb items={[{ label: "Japan alliance" }]} />

      <GuideHero eyebrow={"Japan–India alliance"} title={"AU Corporate and Nihon-bashi International Accounting Firm: Japan–India Alliance"} updated="13 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          On 19 October 2026, AU Corporate signed a memorandum of understanding (MOU) with Nihon-bashi International Accounting Firm (日本橋国際会計事務所), a Tokyo firm of Japanese CPAs and tax accountants. Japanese companies entering India can now speak to Nihon-bashi in Japanese in Tokyo, while AU Corporate&apos;s Chartered Accountants handle incorporation, FEMA and RBI filings, tax, GST, transfer pricing, accounting and payroll in India. The alliance also works the other way for Indian companies entering Japan. The two firms are independent, and each contracts directly with the client for work in its own country.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="what-it-is" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the alliance is</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Nihon-bashi International Accounting Firm announced the alliance on 1 November 2026. It describes it as a memorandum of understanding (MOU) for market-entry support between Japan and India, signed with AU Corporate Private Limited on 19 October 2026. Under the MOU, professionals in both countries work together to give Japanese companies entering or expanding in India, and Indian companies entering Japan, one connected service from incorporation through accounting, tax and compliance.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Both firms state clearly that they are independent: neither is a branch or subsidiary of the other. Each firm provides the work in its own country under its own contract with the client. You get one coordinated team, and each side stays professionally responsible for its own country&apos;s work.
        </p>

        <blockquote lang="ja" className="border-l-4 border-gold bg-[#fffbe6] p-4 mb-4 text-gray-700">
          <p className="mb-2">日本橋国際会計事務所は、2026年10月19日付で、インド・ニューデリーに本拠を置く会計事務所 AU Corporate（AU Corporate Private Limited）と、日本とインドの間の進出支援に関する業務提携の覚書（MOU）を締結いたしました。</p>
          <p className="mb-2">本提携により、インドへの進出・事業拡大をお考えの日本企業の皆様、また日本への進出をお考えのインド企業の皆様に対し、両国の専門家が連携して、会社設立から会計・税務・各種コンプライアンス対応まで、一貫したサポートをご提供してまいります。</p>
          <footer className="text-sm text-gray-500"><span lang="en">From Nihon-bashi International Accounting Firm&apos;s announcement, 1 November 2026.</span></footer>
        </blockquote>

        <h2 id="nihonbashi" className="text-2xl font-bold text-gray-900 mt-12 mb-4">About Nihon-bashi International Accounting Firm</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Point</th><th scope="col" className="border border-gray-300 p-3 text-left">Details</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Name</th><td className="border border-gray-300 p-3">Nihon-bashi International Accounting Firm (日本橋国際会計事務所)</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Location</th><td className="border border-gray-300 p-3">Urbannet Nihonbashi 2-chome Building 10F, 2-1-3 Nihonbashi, Chuo-ku, Tokyo 103-0027, Japan</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Established</th><td className="border border-gray-300 p-3">February 2009</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Representative</th><td className="border border-gray-300 p-3">Shunichi Nemoto, Certified Public Accountant (Japan), certified tax accountant and US CPA (Washington State)</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Memberships</th><td className="border border-gray-300 p-3">The Japanese Institute of Certified Public Accountants, the Tokyo Certified Public Tax Accountants&apos; Association and the American Institute of Certified Public Accountants</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Focus</th><td className="border border-gray-300 p-3">Foreign-owned companies in Japan and Japanese companies working internationally: IFRS and US GAAP audits, subsidiary audits, due diligence, valuation, incorporation support and tax filing</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          The firm&apos;s team includes professionals with Big Four audit experience on foreign-owned clients, IFRS and US GAAP work and international tax. Its own pages cover subsidiary audits for Japanese subsidiaries of Indian groups, and India entry support in partnership with AU Corporate.
        </p>

        <h2 id="how-it-works" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the work is shared</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Stage</th><th scope="col" className="border border-gray-300 p-3 text-left">Nihon-bashi (Japan side)</th><th scope="col" className="border border-gray-300 p-3 text-left">AU Corporate (India side)</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">First consultation</th><td className="border border-gray-300 p-3">Meets the Japanese parent in Japanese and understands the plan</td><td className="border border-gray-300 p-3">Joins to confirm the India structure, documents and timeline</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Planning</th><td className="border border-gray-300 p-3">Advises on Japanese parent accounting, tax and consolidation</td><td className="border border-gray-300 p-3">Recommends subsidiary, branch, liaison office or LLP; confirms FDI route and sector rules</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Set-up</th><td className="border border-gray-300 p-3">Supports the Japan-side documents and board approvals</td><td className="border border-gray-300 p-3">Name approval, DSC and DIN, SPICe+ incorporation, PAN, TAN, GST, bank account, FC-GPR</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Running the company</th><td className="border border-gray-300 p-3">Japanese parent reporting, consolidation and transfer pricing on the Japan side</td><td className="border border-gray-300 p-3">Accounting, payroll, TDS, GST, income tax, transfer pricing, ROC and RBI filings in India</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Contracts</th><td className="border border-gray-300 p-3">Signed directly with the client for Japan work</td><td className="border border-gray-300 p-3">Signed directly with the client for India work</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          In practice, the Japanese finance team gets reporting in a format its head office recognises, with monthly closing and <strong>US GAAP or IFRS-based reporting</strong> where needed. Questions in Tokyo are answered in Japanese, and filings in India are handled by the people who sign them. See the full <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">Japan to India guide</Link> and the <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">Indian subsidiary registration service</Link>.
        </p>

        <h2 id="services" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Services covered</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Setting up an Indian subsidiary, branch office or liaison office for a Japanese company: see <Link href="/japan-to-india/incorporation-process" className="text-blue-800 font-semibold hover:underline">Japan incorporation process</Link> and <Link href="/japan-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" className="text-blue-800 font-semibold hover:underline">choosing the structure</Link></li>
          <li>Foreign direct investment procedures and FEMA and RBI compliance: see <Link href="/japan-to-india/funding-fema-fc-gpr" className="text-blue-800 font-semibold hover:underline">funding, FEMA and FC-GPR</Link></li>
          <li>Corporate tax, GST and transfer pricing filings and advice: see <Link href="/japan-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing for Japanese groups</Link> and the <Link href="/japan-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">India–Japan tax treaty</Link></li>
          <li>Bookkeeping, monthly closing and financial reporting, including US GAAP and IFRS-based reporting</li>
          <li>Payroll and the tax and social security of expatriate staff: see <Link href="/japan-to-india/hiring-and-payroll" className="text-blue-800 font-semibold hover:underline">hiring and payroll</Link> and the <Link href="/japan-to-india/tax-and-social-security-treaties" className="text-blue-800 font-semibold hover:underline">India–Japan social security agreement</Link></li>
          <li>Company law filings and secretarial work: see <Link href="/secretarial-roc-compliance" className="text-blue-800 font-semibold hover:underline">secretarial and ROC compliance</Link></li>
          <li>Accounting, tax, consolidation and transfer pricing questions for the Japanese parent, handled by Nihon-bashi</li>
        </ul>

        <h2 id="india-to-japan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian companies entering Japan</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The MOU also covers the reverse route. An Indian company opening a Japanese subsidiary (kabushiki kaisha or godo kaisha) or branch can use Nihon-bashi for incorporation support, Japanese tax filing, statutory and subsidiary audit, and English-language financial statements. AU Corporate handles the Indian parent&apos;s side: overseas direct investment reporting under FEMA, transfer pricing and the group&apos;s Indian accounts. Contact either firm and the other is brought in.
        </p>

        <h2 id="fees" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Fees</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate&apos;s indicative fee for incorporating an Indian subsidiary is <strong>USD 750 to USD 1,000</strong> for share capital up to ₹10 lakh, covering the incorporation work. Government fees, stamp duty, and the Japanese notary and apostille costs depend on the state, the capital and the documents. Nihon-bashi quotes separately for any Japan-side work. Each firm confirms its fee in writing before starting, and the first consultation is free. See <Link href="/how-long-to-set-up-a-subsidiary-in-india" className="text-blue-800 font-semibold hover:underline">how long it takes</Link> and <Link href="/cost-of-setting-up-a-subsidiary-in-india" className="text-blue-800 font-semibold hover:underline">the costs involved</Link>.
        </p>

        <h2 id="why-it-matters" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why this matters for Japanese companies</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Japanese companies usually plan India entry carefully. Approvals pass through the head office, documents must be notarised and apostilled in Japan, and the Japanese parent has to consolidate and audit the Indian subsidiary. Problems often come from the gap between the two systems: Japanese GAAP and Ind AS, the fiscal year ending in March in both countries but with different filing calendars, FEMA reporting that has no Japanese equivalent, and transfer pricing that both tax authorities review. With a Tokyo-based CPA firm working directly with an India-based CA firm, those gaps are handled by professionals on each side who already work together. See <Link href="/japan-to-india/common-mistakes" className="text-blue-800 font-semibold hover:underline">mistakes Japanese companies make in India</Link> and <Link href="/japan-to-india/japan-parent-obligations" className="text-blue-800 font-semibold hover:underline">Japanese parent obligations</Link>.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a firm of Chartered Accountants and Company Secretaries founded in 2016, with its head office in New Delhi and an office in Gurugram. It is led by Chartered Accountant Abhishek Jaiin. Through the alliance with Nihon-bashi International Accounting Firm, Japanese clients can start the conversation in Tokyo in Japanese, or contact AU Corporate directly in English.
        </p>
        <GuideCTA title={"Plan your India entry with both firms"} description={"Tell us about your Japanese company's plans. The first consultation is free, and we can bring in Nihon-bashi for Japanese-language support in Tokyo."} />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Nihon-bashi International Accounting Firm: alliance announcement with AU Corporate (Japanese)", href: "https://www.n-cpa.com/au-corporate-alliance/" },
            { label: "Nihon-bashi International Accounting Firm: India entry support (Japanese)", href: "https://www.n-cpa.com/finance/overseas-expansion/india-business-support/" },
            { label: "Nihon-bashi International Accounting Firm: firm overview (Japanese)", href: "https://www.n-cpa.com/office-summary/" },
            { label: "Nihon-bashi International Accounting Firm (English)", href: "https://www.n-cpa.com/en/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Plan your India entry with both firms"} description={"Tell us about your Japanese company's plans. The first consultation is free, and we can bring in Nihon-bashi for Japanese-language support in Tokyo."} />
    </main>
  )
}
