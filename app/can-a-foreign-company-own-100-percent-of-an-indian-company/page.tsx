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

const PAGE_URL = "https://www.theaucorp.com/can-a-foreign-company-own-100-percent-of-an-indian-company"

const toc = [
  { id: "automatic", label: "100% FDI under the Automatic Route" },
  { id: "exceptions", label: "Where 100% FDI is not automatic" },
  { id: "pn3", label: "Press Note 3: investors from neighbouring countries" },
  { id: "two-shareholders", label: "How a wholly owned company meets the two-shareholder rule" },
  { id: "after", label: "Filings after a 100% FDI investment" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a foreign company own 100% of an Indian company?", a: "Yes, in most sectors under the Automatic Route, without prior approval." },
  { q: "Which sectors do not allow 100% FDI?", a: "Sectors with caps, such as defence above 74% on the Automatic Route, approval-route sectors, and prohibited activities such as atomic energy, lottery and gambling." },
  { q: "Does a wholly owned subsidiary need two shareholders?", a: "Yes. The parent holds all shares but one and a nominee holds one share on its behalf." },
  { q: "Do Chinese investors need approval for 100% ownership?", a: "Yes. Investment from countries sharing a land border with India needs government approval under Press Note 3." },
  { q: "What filing follows a 100% FDI investment?", a: "Form FC-GPR within 30 days of allotment, and the yearly FLA return." },
  { q: "Can a foreign individual own 100% of an Indian company?", a: "Yes, in most sectors, subject to the same FDI rules as a foreign company, with a second shareholder holding at least one share." },
]

const relatedCards = [
  { title: "India subsidiary registration", desc: "Incorporating a wholly owned subsidiary.", href: "/india-subsidiary-registration" },
  { title: "FEMA and RBI compliance", desc: "FC-GPR, FLA and other filings.", href: "/fema-rbi-compliance" },
  { title: "Cost of setting up a subsidiary", desc: "One-time and annual costs.", href: "/cost-of-setting-up-a-subsidiary-in-india" },
]

export default function CanAForeignCompanyOwn100PercentOfAnIndianCompanyPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"Can a Foreign Company Own 100% of an Indian Company? 100% FDI in India Explained"}
        description={"Yes, in most sectors. How 100% FDI works in India: the Automatic Route, sectors with caps or approval, Press Note 3, the two-shareholder rule and the filings after investment."}
        datePublished="2026-11-07"
        dateModified="2026-11-13"
        inLanguage="en"
      />

      <Breadcrumb items={[{ label: "Can a Foreign Company Own 100%?" }]} />

      <GuideHero eyebrow={"FDI rules"} title={"Can a Foreign Company Own 100% of an Indian Company? 100% FDI in India Explained"} updated="13 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Yes. A foreign company can own 100% of an Indian company in most sectors under the Automatic Route, with no prior government approval. A few sectors cap foreign ownership or need government approval, some activities are closed to foreign investment, and any investor from a country sharing a land border with India needs approval under Press Note 3. Because an Indian private limited company needs at least two shareholders, a wholly owned subsidiary usually has the parent holding all but one share and a nominee, often a group company, holding one share on its behalf. The investment is then reported to the RBI in Form FC-GPR within 30 days of allotting the shares.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="automatic" className="text-2xl font-bold text-gray-900 mt-12 mb-4">100% FDI under the Automatic Route</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India&apos;s FDI Policy allows 100% FDI on the Automatic Route for most manufacturing, IT and IT-enabled services, engineering, consulting, e-commerce marketplaces, and many other services. Automatic means the investment needs no prior approval from the government or the RBI: the Indian company receives the money, issues shares and reports the investment afterwards.
        </p>

        <h2 id="exceptions" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where 100% FDI is not automatic</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Category</th><th scope="col" className="border border-gray-300 p-3 text-left">Examples</th><th scope="col" className="border border-gray-300 p-3 text-left">Position</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Caps below 100%</th><td className="border border-gray-300 p-3">Defence manufacturing above 74%, print media</td><td className="border border-gray-300 p-3">A cap on foreign ownership, or approval above a threshold</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Government approval route</th><td className="border border-gray-300 p-3">Some sectors and all investment covered by Press Note 3</td><td className="border border-gray-300 p-3">Application through the Foreign Investment Facilitation Portal before investing</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Prohibited</th><td className="border border-gray-300 p-3">Atomic energy, lottery, gambling and betting, chit funds, real estate business in the narrow sense</td><td className="border border-gray-300 p-3">No foreign investment allowed</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Conditions attached</th><td className="border border-gray-300 p-3">Single-brand and multi-brand retail, some financial services</td><td className="border border-gray-300 p-3">100% possible in some cases only if conditions are met</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Sector caps and conditions change through press notes, so we confirm the current position for your activity before filing.
        </p>

        <h2 id="pn3" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Press Note 3: investors from neighbouring countries</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          An investor from a country that shares a land border with India, or whose beneficial owner is from or a citizen of such a country, can invest only with government approval, whatever the sector. This affects investors from China and Hong Kong in practice, and looks through holding companies in third countries.
        </p>

        <h2 id="two-shareholders" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How a wholly owned company meets the two-shareholder rule</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A private limited company needs at least two shareholders under the Companies Act. A 100% foreign-owned company therefore usually has the parent holding all shares but one, and a nominee shareholder, commonly another group company or an individual, holding one share for the parent&apos;s benefit. The nominee records its arrangement with the parent, and the company files the declarations of beneficial interest. For FDI purposes the company is still 100% foreign-owned.
        </p>

        <h2 id="after" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Filings after a 100% FDI investment</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Report the receipt of funds on the RBI&apos;s FIRMS portal.</li>
          <li>Allot shares within 60 days, at no less than fair value.</li>
          <li>File Form FC-GPR within 30 days of allotment.</li>
          <li>File the annual FLA return by 15 July.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          See <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> for the full setup and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link> for the ongoing filings.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India firm of Chartered Accountants and Company Secretaries, serving foreign companies since 2016. We handle the Indian side end to end, with the best pricing, better work support and a free first consultation.
        </p>
        <GuideCTA title={"Planning a 100% Owned Indian Company?"} description={"Tell us your sector and where the parent is based, and we will confirm the FDI route in a free consultation."} />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "DPIIT: FDI Policy", href: "https://dpiit.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Foreign Investment Facilitation Portal", href: "https://www.fifp.gov.in/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Planning a 100% Owned Indian Company?"} description={"Tell us your sector and where the parent is based, and we will confirm the FDI route in a free consultation."} />
    </main>
  )
}
