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

const PAGE_URL = "https://www.theaucorp.com/press-note-3-approval-india"

const toc = [
  { id: "who", label: "Who needs Press Note 3 approval" },
  { id: "easing", label: "What the 2026 easing changed" },
  { id: "process", label: "How the approval process works" },
  { id: "documents", label: "Documents usually needed" },
  { id: "timeline", label: "How long approval takes" },
  { id: "directors", label: "Chinese directors and staff" },
  { id: "after", label: "Compliance after approval" },
  { id: "guides", label: "Related country guides" },
  { id: "other-rules", label: "Rules beyond Press Note 3" },
  { id: "while-pending", label: "What you can do while approval is pending" },
  { id: "delays", label: "Common reasons for delay or rejection" },
  { id: "hk-points", label: "Points specific to Hong Kong investors" },
  { id: "example", label: "An illustrative timeline" },
  { id: "ownership-changes", label: "When ownership changes later" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is Press Note 3?", a: "A 2020 policy requiring prior Government of India approval for investment by entities or beneficial owners from countries sharing a land border with India." },
  { q: "Does Press Note 3 apply to Hong Kong companies?", a: "Yes. Indian authorities treat Hong Kong investors in the same way as Chinese investors." },
  { q: "Does a Singapore holding company avoid Press Note 3?", a: "No, if Chinese beneficial owners hold more than 10% or control it; the test looks through holding companies." },
  { q: "What did the 2026 amendment change?", a: "A non-land-border investor with up to 10% passive, non-controlling land-border beneficial ownership can use the Automatic Route with reporting; China-incorporated investors still need approval." },
  { q: "How long does Press Note 3 approval take?", a: "Usually months; a 60-day target has been reported for specified manufacturing sectors." },
  { q: "Can we incorporate the company before approval?", a: "Plan for approval before funding; capital from a land-border investor cannot be received and allotted without it." },
  { q: "Do later funding rounds need approval too?", a: "Yes. Each further investment by a land-border investor needs approval." },
  { q: "Do Chinese directors need clearance?", a: "Yes. Chinese citizens proposed as directors need Ministry of Home Affairs security clearance." },
  { q: "Is Press Note 3 approval needed for a branch or liaison office?", a: "Applicants from China and Hong Kong for branch, liaison or project offices go through the RBI route with security review, which is a separate process." },
  { q: "Can approval be refused?", a: "Yes. Applications can be rejected, or approved with conditions, after the ministry review and security clearance." },
  { q: "Does Press Note 3 apply to Russian or Japanese investors?", a: "Not because of their nationality, since Russia and Japan do not share a land border with India; it applies only if a beneficial owner is from a land-border country above the threshold." },
]

const relatedCards = [
  { title: "China to India", desc: "The complete guide for Chinese companies.", href: "/china-to-india" },
  { title: "Hong Kong to India", desc: "The complete guide for Hong Kong companies.", href: "/hong-kong-to-india" },
  { title: "FEMA compounding case study", desc: "Regularising a Chinese-owned company's FEMA position.", href: "/case-studies/china-subsidiary-fema-compounding" },
  { title: "FEMA and RBI compliance", desc: "FC-GPR and FLA filings.", href: "/fema-rbi-compliance" },
]

export default function PressNote3ApprovalIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"Press Note 3 Approval in India: Government Approval for Investors from China, Hong Kong and Other Land-Border Countries"}
        description={"Who needs Press Note 3 approval to invest in India, the March 2026 easing, documents, the approval process, timelines, director clearance and filings after approval."}
        datePublished="2026-11-07"
        dateModified="2026-11-13"
        inLanguage="en"
      />

      <Breadcrumb items={[{ label: "Press Note 3 Approval" }]} />

      <GuideHero eyebrow={"Service: Press Note 3 approval"} title={"Press Note 3 Approval in India: Government Approval for Investors from China, Hong Kong and Other Land-Border Countries"} updated="13 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Press Note 3 (2020) requires prior Government of India approval for any investment in an Indian company by an entity of a country that shares a land border with India, or where the beneficial owner of the investment is situated in or a citizen of such a country. In practice it applies mainly to investors from China and Hong Kong, in every sector, including sectors otherwise on the Automatic Route. Amendments approved by the Cabinet on 10 March 2026 let a non-land-border investor with up to 10% passive, non-controlling land-border beneficial ownership use the Automatic Route with reporting, but an investor incorporated in China still needs approval. The application is filed on the government&apos;s portal, reviewed by the relevant ministry with security clearance, and usually takes months. Approval must be in place before incorporation or funding.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="who" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who needs Press Note 3 approval</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Investor</th><th scope="col" className="border border-gray-300 p-3 text-left">Approval needed?</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">A company incorporated in China</th><td className="border border-gray-300 p-3">Yes, for any amount and any sector</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">A Chinese or Hong Kong citizen investing personally</th><td className="border border-gray-300 p-3">Yes</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">A Hong Kong company</th><td className="border border-gray-300 p-3">Yes; Indian authorities treat it in the same way</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">A company in a third country whose Chinese beneficial owners hold more than 10% or control it</th><td className="border border-gray-300 p-3">Yes</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">A non-land-border investor with up to 10% passive, non-controlling land-border beneficial ownership</th><td className="border border-gray-300 p-3">No, under the March 2026 easing: Automatic Route with reporting to the RBI; confirm the notification text</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Investors from Pakistan, Bangladesh, Nepal, Myanmar, Bhutan or Afghanistan</th><td className="border border-gray-300 p-3">Yes; separate rules also apply to some of these countries</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          The test looks through holding companies to the individuals and entities that ultimately own or control the investor. A Singapore, Mauritius or European holding company owned by Chinese shareholders above the threshold does not avoid approval.
        </p>

        <h2 id="easing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the 2026 easing changed</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Cabinet approved amendments to the policy on 10 March 2026, and the FEMA rules were reported as amended on 1 May 2026. The changes add a definition of beneficial owner and a 10% test: a non-land-border investor whose land-border beneficial ownership is up to 10%, passive and non-controlling, can invest under the Automatic Route and report to the RBI. A 60-day target was reported for approvals in specified manufacturing sectors such as capital goods, electronic capital goods, electronic components, polysilicon and ingot-wafer, where Indian majority ownership and control is reportedly expected. Some procedural details, such as the RBI reporting format and the fast-track procedure, were reported as still being finalised, so confirm the current position before relying on it.
        </p>

        <h2 id="process" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the approval process works</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Structure check:</strong> confirm whether approval is needed, which sector rules apply and whether the investment can be structured to meet the 2026 easing.</li>
          <li><strong>Application:</strong> filed online on the government&apos;s Foreign Investment Facilitation Portal with the investor&apos;s details, the full ownership chain, the proposed Indian company&apos;s activities and the investment amount.</li>
          <li><strong>Ministry review:</strong> the application is sent to the administrative ministry for the sector, which consults other departments.</li>
          <li><strong>Security clearance:</strong> the Ministry of Home Affairs reviews the investor, beneficial owners and proposed directors.</li>
          <li><strong>Queries:</strong> the ministries may ask for more information; prompt, complete replies matter.</li>
          <li><strong>Decision:</strong> approval, often with conditions, or rejection.</li>
          <li><strong>After approval:</strong> incorporate or fund the Indian company, allot shares and file FC-GPR quoting the approval.</li>
        </ol>

        <h2 id="documents" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documents usually needed</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Certificate of incorporation, constitution and register extract of the investor, authenticated for India.</li>
          <li>An ownership chart up to the ultimate individual owners, with percentages, nationalities and control rights.</li>
          <li>Identity documents of beneficial owners and proposed directors.</li>
          <li>Audited financial statements of the investor.</li>
          <li>A board resolution approving the investment.</li>
          <li>A business plan for the Indian company: activities, investment, employment, technology and locations.</li>
          <li>Source of funds and details of the remitting bank.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Inconsistent ownership information across documents is the most common reason for delay. We prepare one ownership chart and reconcile every document to it before filing.
        </p>

        <h2 id="timeline" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How long approval takes</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Approvals have typically taken months rather than weeks, depending on the sector, the size of the investment, the investor&apos;s profile and the completeness of the application. Fast-track timelines have been announced for specified manufacturing sectors. Plan the Indian project, hiring and customer commitments around a realistic approval window, and consider interim arrangements such as contract manufacturing with an Indian partner while approval is pending.
        </p>

        <h2 id="directors" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Chinese directors and staff</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Chinese citizens proposed as directors of an Indian company need security clearance from the Ministry of Home Affairs. Visas for Chinese employees follow their own process; business visa processing was reported to have improved in late 2025, but employment visas still require planning. Many Chinese-owned companies appoint an Indian resident director and Indian managers for the early period. See <Link href="/resident-director-services-india" className="text-blue-800 font-semibold hover:underline">resident director services</Link>.
        </p>

        <h2 id="after" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Compliance after approval</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Follow any conditions in the approval letter, such as limits on activities or ownership changes.</li>
          <li>Allot shares within 60 days of receiving funds and file FC-GPR within 30 days, quoting the approval.</li>
          <li>Seek fresh approval for further capital rounds and for transfers of shares to land-border investors.</li>
          <li>Keep beneficial ownership records current, because a later change in ownership can bring the company back into Press Note 3.</li>
          <li>File the FLA return each year by 15 July.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Investments made without a needed approval are serious FEMA contraventions. Our <Link href="/case-studies/china-subsidiary-fema-compounding" className="text-blue-800 font-semibold hover:underline">FEMA compounding case study</Link> shows how one Chinese-owned company regularised its position.
        </p>

        <h2 id="guides" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related country guides</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          See <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">setting up in India from China</Link>, <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">from Hong Kong</Link>, the detailed <Link href="/china-to-india/india-press-note-3-and-chinese-investors" className="text-blue-800 font-semibold hover:underline">Press Note 3 guide for Chinese investors</Link> and <Link href="/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" className="text-blue-800 font-semibold hover:underline">Press Note 3 and Hong Kong entities</Link>.
        </p>
        <h2 id="other-rules" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Rules beyond Press Note 3</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Approval is only the first layer for a Chinese-linked business in India. Check each of these before committing capital:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Area</th><th scope="col" className="border border-gray-300 p-3 text-left">What applies</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Sector caps</th><td className="border border-gray-300 p-3">Defence, insurance, multi-brand retail, some media and financial services have caps or conditions for all foreign investors</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Government procurement</th><td className="border border-gray-300 p-3">Bidders from land-border countries must register with a competent authority before bidding for central government contracts, under the General Financial Rules as amended in 2020; states may have their own rules</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Apps and platforms</th><td className="border border-gray-300 p-3">Many Chinese-linked apps have been blocked under Section 69A of the IT Act, and new products face security scrutiny</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Telecom and critical sectors</th><td className="border border-gray-300 p-3">Trusted-source rules and security review for equipment and infrastructure suppliers</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Customs</th><td className="border border-gray-300 p-3">Customs duty, GST and, for many products from China, anti-dumping or safeguard duties</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Banks</th><td className="border border-gray-300 p-3">Enhanced due diligence on ownership and sources of funds</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          See <Link href="/china-to-india/restricted-sectors-procurement-and-trade" className="text-blue-800 font-semibold hover:underline">restricted sectors, procurement and trade rules</Link> for detail.
        </p>

        <h2 id="while-pending" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What you can do while approval is pending</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Contract manufacturing</strong> with an Indian manufacturer, under a supply or toll-manufacturing agreement, to start production without owning an Indian company.</li>
          <li><strong>Technology licensing</strong> to an Indian partner for a royalty, which is not an investment and does not need Press Note 3 approval, although tax and other rules apply.</li>
          <li><strong>Exporting to Indian customers</strong> directly, with GST and customs handled by the importer.</li>
          <li><strong>Market research</strong> through visits and local consultants, without employing staff in India.</li>
          <li><strong>Preparing the Indian side</strong>: name search, office options, bankers and recruitment plans, so that incorporation can follow quickly after approval.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Anything that amounts to investing in or controlling an Indian business, including paying salaries of Indian staff through informal arrangements, should wait for approval.
        </p>

        <h2 id="delays" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common reasons for delay or rejection</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Incomplete or inconsistent ownership information, especially for layered holding structures.</li>
          <li>Unclear source of funds or remitting bank.</li>
          <li>Proposed activities that touch sensitive sectors or data without explaining safeguards.</li>
          <li>Proposed directors who have not been put forward for security clearance.</li>
          <li>Slow replies to ministry queries.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          A clear, consistent application with complete ownership evidence is the best way to avoid delay.
        </p>

        <h2 id="hk-points" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Points specific to Hong Kong investors</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Hong Kong investors are treated in the same way as Chinese investors for Press Note 3, and the reported government position is that Hong Kong-registered companies need approval even where their shareholders are not Chinese. Take written advice on your facts before assuming otherwise. Hong Kong groups that hold Indian investments through Singapore or other holding companies still need approval if Chinese or Hong Kong beneficial owners exceed the threshold or control the investor.
        </p>

        <h2 id="example" className="text-2xl font-bold text-gray-900 mt-12 mb-4">An illustrative timeline</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          For a Chinese electronics component maker planning a wholly owned Indian company: one to two weeks to assemble and authenticate documents and the ownership chart; filing on the portal; ministry review and security clearance, which may meet the reported 60-day target if the sector qualifies and otherwise usually takes longer; then about four to six weeks for incorporation, bank account and the first capital, followed by FC-GPR. Throughout, the company can prepare recruitment and premises so that operations start soon after incorporation.
        </p>
        <h2 id="ownership-changes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When ownership changes later</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Approval is tied to the investor and the ownership described in the application. If, after investing, a Chinese or Hong Kong shareholder joins the investor&apos;s group, or an existing land-border shareholder increases its stake or gains control, the Indian company may need approval for that change before further investment or transfers. Build a simple check into the group&apos;s corporate governance: before any change in the shareholding of the investor or its parents, confirm whether it affects the Indian company&apos;s Press Note 3 position.
        </p>



        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate prepares the Press Note 3 application, assembles the ownership and beneficial-owner evidence, files it on the government&apos;s portal, responds to queries from the ministries and, once approval is granted, incorporates or funds the Indian company and files the FEMA reports. We offer the best pricing with better work support, and the first consultation is free.
        </p>
        <GuideCTA title={"Need Press Note 3 Approval?"} description={"Tell us about the investor, its ownership and the Indian plan, and we will assess the approval route in a free consultation."} />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "DPIIT: FDI Policy and press notes", href: "https://dpiit.gov.in/" },
            { label: "Foreign Investment Facilitation Portal", href: "https://www.fifp.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Need Press Note 3 Approval?"} description={"Tell us about the investor, its ownership and the Indian plan, and we will assess the approval route in a free consultation."} />
    </main>
  )
}
