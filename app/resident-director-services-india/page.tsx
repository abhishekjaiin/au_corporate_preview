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

const PAGE_URL = "https://www.theaucorp.com/resident-director-services-india"

const toc = [
  { id: "rule", label: "The resident director rule in Section 149(3)" },
  { id: "options", label: "Three ways foreign parents meet the rule" },
  { id: "scope", label: "What our resident director services cover" },
  { id: "not-scope", label: "What a professional resident director does not do" },
  { id: "liability", label: "Liability and the safeguards we ask for" },
  { id: "appointment", label: "How appointment works" },
  { id: "tax", label: "Tax points for directors and the company" },
  { id: "cost", label: "What resident director services cost" },
  { id: "existing-company", label: "Taking over as director of an existing company" },
  { id: "governance", label: "Keeping control with the foreign parent" },
  { id: "checklist", label: "Checklist before appointment" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is a resident director mandatory in India?", a: "Yes. Every company needs at least one director who stayed in India for 182 days or more in the financial year, under Section 149(3) of the Companies Act, 2013." },
  { q: "Can a foreign national be the resident director?", a: "Yes, if they stayed in India for at least 182 days in the financial year. Nationality does not matter; physical stay does." },
  { q: "Does an NRI qualify as a resident director?", a: "Only if the NRI actually stayed in India for 182 days or more in the financial year; living abroad, even as an Indian citizen, does not count." },
  { q: "What does a professional resident director do?", a: "Joins the board in a non-executive role, signs the statutory documents the company needs and keeps director compliance current, while business decisions stay with the foreign parent." },
  { q: "Will the resident director control our Indian company?", a: "No. Authority is limited by the appointment letter and board resolutions; contracts, payments and strategy stay with the people the parent authorises." },
  { q: "Can we replace the professional resident director later?", a: "Yes. When the group appoints its own qualifying director, the professional director resigns and the change is filed with the Registrar within 30 days." },
  { q: "How much do resident director services cost?", a: "AU Corporate offers the best pricing with better work support; the terms depend on the company's size, activity and compliance history, and the first consultation is free." },
  { q: "Is the resident director personally liable for the company?", a: "Directors can face liability under company, tax, labour and FEMA law, which is why the role comes with a written scope, an indemnity and insurance where available." },
  { q: "Does a resident director need a DIN?", a: "Yes. Every director needs a Director Identification Number and a digital signature certificate; our directors already have both." },
  { q: "What happens if a company has no resident director?", a: "It is in default of Section 149(3). It should appoint a qualifying director promptly and take advice on regularising the period of default." },
]

const relatedCards = [
  { title: "India subsidiary registration", desc: "Incorporation of a wholly owned subsidiary or joint venture, end to end.", href: "/india-subsidiary-registration" },
  { title: "Secretarial and ROC compliance", desc: "Board meetings, registers and annual filings with the Registrar.", href: "/secretarial-roc-compliance" },
  { title: "Resident director for US companies", desc: "The 182-day test and who US groups appoint.", href: "/usa-to-india/resident-director" },
  { title: "Company registration for NRIs", desc: "How NRIs and foreign nationals set up an Indian company.", href: "/company-registration-in-india-for-nri" },
]

export default function ResidentDirectorServicesIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"Resident Director Services in India: A Professional Resident Director for Your Indian Company"}
        description={"Resident director services in India for foreign-owned companies: the Section 149(3) rule, what a professional resident director does and does not do, liability, safeguards and how appointment works."}
        datePublished="2026-11-07"
        dateModified="2026-11-07"
        inLanguage="en"
      />

      <Breadcrumb items={[{ label: "Resident Director Services" }]} />

      <GuideHero eyebrow={"Service: resident director"} title={"Resident Director Services in India: A Professional Resident Director for Your Indian Company"} updated="7 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Every Indian company must have at least one director who stayed in India for 182 days or more in the financial year (Section 149(3) of the Companies Act, 2013). Foreign parents without a suitable person in India use resident director services: a qualified professional joins the board to meet the rule, signs the statutory filings the company needs and keeps the director&apos;s own compliance current, while business decisions stay with the foreign parent. AU Corporate provides a professional resident director for its clients, with the role, authority and safeguards agreed in writing before appointment, and a free first consultation to agree the scope.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="rule" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The resident director rule in Section 149(3)</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Section 149(3) of the Companies Act, 2013 requires every company to have at least one director who has stayed in India for a total period of 182 days or more during the financial year. For a newly incorporated company, the requirement applies proportionately for the part of the year after incorporation. Nationality does not matter: an Indian citizen living abroad does not qualify, while a foreign national who lives in India does.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Point</th><th scope="col" className="border border-gray-300 p-3 text-left">Position</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Who counts</th><td className="border border-gray-300 p-3">Any individual director who stayed in India for 182 days or more in the financial year</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Nationality</th><td className="border border-gray-300 p-3">Irrelevant; the test is physical stay in India</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Minimum board</th><td className="border border-gray-300 p-3">A private limited company needs at least two directors (Section 149(1)), at least one of them resident</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Financial year</th><td className="border border-gray-300 p-3">1 April to 31 March</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">New companies</th><td className="border border-gray-300 p-3">Applied proportionately for the first, shorter financial year</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">If no director qualifies</th><td className="border border-gray-300 p-3">The company is in default of Section 149(3) and should appoint a qualifying director without delay</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          The rule applies to every Indian company, including the wholly owned company of a foreign group. It is one of the first questions we settle before incorporation, because the incorporation filing itself names the directors.
        </p>

        <h2 id="options" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Three ways foreign parents meet the rule</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Option</th><th scope="col" className="border border-gray-300 p-3 text-left">Suits</th><th scope="col" className="border border-gray-300 p-3 text-left">Watch</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">An Indian manager joins the board</th><td className="border border-gray-300 p-3">Companies that have already hired a country head or finance lead</td><td className="border border-gray-300 p-3">The person takes on director liability and needs a clear role; replacing them later needs planning</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">An expatriate posted to India for a full year</th><td className="border border-gray-300 p-3">Groups sending a general manager anyway</td><td className="border border-gray-300 p-3">Arrival date matters for the 182-day count; the person may become Indian tax resident</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">A professional resident director</th><td className="border border-gray-300 p-3">New companies, small teams, or groups without a suitable person yet</td><td className="border border-gray-300 p-3">Agree a limited role, an indemnity and insurance in writing</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Many groups use a professional resident director at incorporation and replace them once they have hired an Indian leader, often within the first one or two years. Others keep a professional resident director long term because they prefer to keep board seats with independent professionals rather than employees.
        </p>

        <h2 id="scope" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What our resident director services cover</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Joining the board</strong> as a non-executive director who meets the 182-day residence test, with a Director Identification Number and digital signature already in place.</li>
          <li><strong>Signing statutory documents</strong> the company needs from a director, such as Registrar filings, board resolutions passed by circulation and annual returns, after review by our team.</li>
          <li><strong>Board meetings</strong>, attending the minimum meetings the Companies Act requires, by video where permitted.</li>
          <li><strong>Director compliance</strong>, keeping the director&apos;s own KYC and disclosures current so that filings are not blocked.</li>
          <li><strong>Coordination</strong> with the company&apos;s accountants, auditors and bankers on matters that need a director&apos;s signature.</li>
          <li><strong>Handover</strong> to the group&apos;s own resident director when it is ready, including resignation and the related filings.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          The resident director does not run the business. Contracts with customers and suppliers, hiring, pricing, bank payments and strategy remain with the foreign parent and the people it authorises. This is set out in a written appointment letter and in the board resolutions that define who may sign what.
        </p>

        <h2 id="not-scope" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What a professional resident director does not do</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Sign commercial contracts or make business decisions on the company&apos;s behalf.</li>
          <li>Operate the bank account or approve payments, unless the board specifically asks for a limited role.</li>
          <li>Act as an employee, manager or agent of the company in dealings with customers.</li>
          <li>Accept liability for decisions taken by the foreign parent or other directors without information or consultation.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Keeping the role narrow protects the company as well as the director: it avoids the impression, for tax purposes, that the foreign parent&apos;s business is being run from India by someone acting for it, and it keeps decision-making where the group&apos;s governance expects it.
        </p>

        <h2 id="liability" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Liability and the safeguards we ask for</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Any director of an Indian company can be exposed to liability under several laws, including company law (as an officer in default for missed filings), tax law (for unpaid tax of a private company in some cases), labour and other laws (as a person in charge), and FEMA (for contraventions by persons responsible for the business). A professional resident director accepts the role only with safeguards that keep this exposure proportionate:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>A written appointment letter that defines the non-executive role and the matters reserved for the parent.</li>
          <li>Board resolutions naming the people authorised to sign contracts and operate the bank account.</li>
          <li>An indemnity from the foreign parent for liabilities arising from decisions the director did not take.</li>
          <li>Directors&apos; and officers&apos; liability insurance where available.</li>
          <li>Access to the company&apos;s books, filings and compliance status, so the director can confirm that statutory obligations are met.</li>
          <li>A notice period for resignation, so the company has time to appoint a replacement.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          In our experience the best protection for everyone is simply up-to-date compliance. Because AU Corporate also handles accounting, tax, FEMA and secretarial work for most of the companies where we provide a resident director, the director can see that filings are made on time.
        </p>

        <h2 id="appointment" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How appointment works</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Step</th><th scope="col" className="border border-gray-300 p-3 text-left">At incorporation</th><th scope="col" className="border border-gray-300 p-3 text-left">For an existing company</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">1. Agreement</th><td className="border border-gray-300 p-3">Role, safeguards and fee agreed in writing</td><td className="border border-gray-300 p-3">Same, plus a review of the company&apos;s compliance history</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">2. Consent</th><td className="border border-gray-300 p-3">The director&apos;s consent to act and declaration of eligibility</td><td className="border border-gray-300 p-3">Same</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">3. Filing</th><td className="border border-gray-300 p-3">Named as a director in the SPICe+ incorporation filing</td><td className="border border-gray-300 p-3">Board resolution and filing with the Registrar within 30 days of appointment</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">4. Bank</th><td className="border border-gray-300 p-3">Added to bank records only if the board asks for a signing role</td><td className="border border-gray-300 p-3">Same</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">5. Ongoing</th><td className="border border-gray-300 p-3">Board meetings, signatures and director KYC</td><td className="border border-gray-300 p-3">Same</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          For an existing company that has been without a resident director, we first review the period of default and advise on regularising it, then make the appointment.
        </p>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax points for directors and the company</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Fees paid to a resident director are subject to tax deduction at source by the company.</li>
          <li>A foreign national who stays 182 days or more in India to meet the rule will usually become resident in India for income tax, so the tax treaty tie-breaker may decide residence where they are also resident at home.</li>
          <li>An expatriate resident director on the Indian payroll is taxed on salary through Indian payroll from the first day of work in India.</li>
          <li>A professional resident director does not create a permanent establishment for the foreign parent when the role is non-executive and does not involve concluding contracts for the parent.</li>
        </ul>

        <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What resident director services cost</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate offers resident director services at the best pricing, with better work support and a free first consultation to agree the scope. The terms depend mainly on the company&apos;s size and activity, its compliance history, and whether we also handle its accounting and secretarial work, which reduces the risk for the director. Government fees for the appointment filing are separate. Contact us with a short description of the Indian company to book a free consultation.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          See also <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link>, <Link href="/secretarial-roc-compliance" className="text-blue-800 font-semibold hover:underline">secretarial and ROC compliance</Link> and country guides such as <Link href="/usa-to-india/resident-director" className="text-blue-800 font-semibold hover:underline">the resident director guide for US companies</Link> and <Link href="/japan-to-india/resident-director" className="text-blue-800 font-semibold hover:underline">for Japanese companies</Link>.
        </p>
        <h2 id="existing-company" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Taking over as director of an existing company</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Some foreign parents come to us after the person who met the 182-day test has left India, resigned or stopped responding. Before joining such a board, we review the company&apos;s filings, the minutes and registers, the bank mandate and any notices received, and list what needs to be put right. Where Registrar or tax filings are overdue, we agree a plan to bring them up to date in the first weeks after appointment. Joining a company whose records are incomplete without such a review would expose both the new director and the company, so this step is not optional.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Once the company is current, the role continues as for a new company: board meetings, signatures on statutory filings, director KYC and coordination with the auditors.
        </p>

        <h2 id="governance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Keeping control with the foreign parent</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Foreign parents often worry that a director in India could act against the group. The safeguards are straightforward: reserved matters in the articles of association that need the parent&apos;s approval, board resolutions limiting who may sign contracts and operate bank accounts, and a written appointment letter that sets out the non-executive role. The parent, as the main shareholder, can also remove a director by shareholder resolution. In practice, our directors work with the parent&apos;s finance and legal teams, not around them.
        </p>
        <h2 id="checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Checklist before appointment</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Agree the scope in a written appointment letter.</li>
          <li>Pass board resolutions on signing authority and bank mandates.</li>
          <li>Confirm the indemnity from the parent and any insurance.</li>
          <li>Share access to the company&apos;s books and filing status.</li>
          <li>Fix the notice period and the plan for handover to a group director.</li>
        </ul>



        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India firm of Chartered Accountants and Company Secretaries, serving foreign companies since 2016. We handle the Indian side end to end, with the best pricing, better work support and a free first consultation.
        </p>
        <GuideCTA title={"Need a Resident Director for Your Indian Company?"} description={"Tell us about your company and when you need the director in place, and we will confirm the scope, safeguards in a free consultation."} />

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
            { label: "Companies Act, 2013 (India Code)", href: "https://www.indiacode.nic.in/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 7 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Need a Resident Director for Your Indian Company?"} description={"Tell us about your company and when you need the director in place, and we will confirm the scope, safeguards in a free consultation."} />
    </main>
  )
}
