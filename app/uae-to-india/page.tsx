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

const PAGE_URL = "https://www.theaucorp.com/uae-to-india"

const toc = [
  { id: "snapshot", label: "UAE to India in one table" },
  { id: "why", label: "Why UAE businesses are setting up in India" },
  { id: "who-invests", label: "Who is investing: UAE company, free zone entity or NRI founder" },
  { id: "structure", label: "Choosing the structure in India" },
  { id: "documents", label: "Documents from the UAE" },
  { id: "steps", label: "Incorporation step by step" },
  { id: "resident-director", label: "The resident director" },
  { id: "money", label: "Money between the UAE and India" },
  { id: "tax", label: "Tax: India, the treaty and UAE corporate tax" },
  { id: "cepa", label: "The India-UAE CEPA: what it changes" },
  { id: "people", label: "Staff, secondees and NRIs moving between the UAE and India" },
  { id: "compliance", label: "Compliance after incorporation" },
  { id: "cost", label: "Cost and timeline" },
  { id: "mistakes", label: "Common mistakes UAE investors make" },
  { id: "free-zone", label: "Investing through a Dubai or Abu Dhabi free zone company" },
  { id: "family-groups", label: "Family business groups: ownership, control and succession" },
  { id: "gulf-tp", label: "Transfer pricing between Gulf trading hubs and India" },
  { id: "bank-kyc", label: "What Indian banks ask Gulf-based shareholders" },
  { id: "exit-uae", label: "Exit and moving proceeds back to the Gulf" },
  { id: "india-locations", label: "Where in India Gulf businesses set up" },
  { id: "gift-city", label: "GIFT City for finance and treasury businesses" },
  { id: "timeline-uae", label: "A realistic timeline from Dubai" },
  { id: "first-steps", label: "Your first three steps" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a Dubai company set up a subsidiary in India?", a: "Yes. A UAE mainland or free zone company can own up to 100% of an Indian company in most sectors under the Automatic Route." },
  { q: "Can an NRI in Dubai register a company in India?", a: "Yes, personally or through a UAE company, on a repatriation or non-repatriation basis." },
  { q: "Does a UAE company need RBI approval to invest in India?", a: "Not in most sectors; the investment is reported to the RBI after allotment in Form FC-GPR." },
  { q: "How long does it take to set up a company in India from the UAE?", a: "About 4 to 6 weeks from complete, authenticated documents." },
  { q: "Is there a tax treaty between India and the UAE?", a: "Yes. It reduces Indian tax on dividends, interest and royalties for UAE residents who meet its conditions." },
  { q: "Does CEPA change company formation rules?", a: "No. CEPA covers trade in goods and services; company formation, FEMA and tax rules are unchanged." },
  { q: "Is there a social security agreement between India and the UAE?", a: "No. Foreign employees on Indian payroll contribute to Indian provident fund as international workers." },
  { q: "Can a UAE resident be the resident director?", a: "Only if they stayed in India for 182 days or more in the financial year." },
  { q: "What does it cost?", a: "AU Corporate offers the best pricing with better work support, and the first consultation is free." },
  { q: "Can a free zone company in Dubai own shares in an Indian company?", a: "Generally yes, subject to its own free zone rules; Indian banks will ask for its registry documents, share register and ownership chart to the individuals at the top." },
  { q: "Which Indian city suits a Gulf trading business?", a: "Often Mumbai, Ahmedabad, Kochi or Chennai, for port access and shipping links to the Gulf." },
]

const relatedCards = [
  { title: "Company registration for NRIs", desc: "For UAE-based Indian founders investing personally.", href: "/company-registration-in-india-for-nri" },
  { title: "India subsidiary registration", desc: "Our incorporation service.", href: "/india-subsidiary-registration" },
  { title: "Resident director services", desc: "A professional resident director for your Indian company.", href: "/resident-director-services-india" },
  { title: "Cost of setting up a subsidiary", desc: "One-time fees and annual costs.", href: "/cost-of-setting-up-a-subsidiary-in-india" },
]

export default function UaeToIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"How to Set Up a Company in India from Dubai and the UAE: The 2026 Guide for UAE Businesses and Founders"}
        description={"How UAE companies, free zone entities and UAE-based founders set up a company in India: structure, FDI route, documents, the India-UAE tax treaty and CEPA, banking in dirhams and rupees, compliance and cost."}
        datePublished="2026-11-07"
        dateModified="2026-11-07"
        inLanguage="en-AE"
      />

      <Breadcrumb items={[{ label: "UAE to India" }]} />

      <GuideHero eyebrow={"Country guide: UAE to India"} title={"How to Set Up a Company in India from Dubai and the UAE: The 2026 Guide for UAE Businesses and Founders"} updated="7 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A UAE company, including a mainland or free zone entity in Dubai or Abu Dhabi, usually sets up in India through a private limited company owned up to 100% on the Automatic Route, with no prior approval in most sectors. UAE-based Indian founders who are NRIs can also invest personally, on a repatriation or non-repatriation basis. The parent&apos;s documents are attested in the UAE and authenticated for India, the company is incorporated online in about 4 to 6 weeks, and the capital is reported to the RBI within 30 days of allotting shares. Dividends to the UAE are taxed in India at the rate set by the India-UAE tax treaty, the India-UAE CEPA has cut tariffs on most trade since 1 May 2022, and every Indian company needs a director who lives in India.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="snapshot" className="text-2xl font-bold text-gray-900 mt-12 mb-4">UAE to India in one table</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Topic</th><th scope="col" className="border border-gray-300 p-3 text-left">Position for a UAE investor</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Usual vehicle</th><td className="border border-gray-300 p-3">Private limited company, wholly owned or a joint venture</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Approval</th><td className="border border-gray-300 p-3">Automatic Route in most sectors; Press Note 3 applies only if a beneficial owner is from a country sharing a land border with India</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Parent types</th><td className="border border-gray-300 p-3">UAE mainland LLC, free zone company (for example DMCC, JAFZA, DIFC or ADGM entities), or a UAE-resident individual</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Directors</th><td className="border border-gray-300 p-3">At least two, one of whom stayed in India for 182 days in the financial year</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Setup time</th><td className="border border-gray-300 p-3">About 4 to 6 weeks from complete, authenticated documents</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Capital</th><td className="border border-gray-300 p-3">No legal minimum; FC-GPR within 30 days of allotment</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Trade</th><td className="border border-gray-300 p-3">India-UAE CEPA in force since 1 May 2022</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">UAE tax on the parent</th><td className="border border-gray-300 p-3">UAE corporate tax at 9% above the threshold, from financial years starting on or after 1 June 2023, with exemptions for qualifying participations</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Social security</th><td className="border border-gray-300 p-3">No India-UAE social security agreement</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why UAE businesses are setting up in India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The UAE is one of India&apos;s largest trading partners and a major source of foreign investment, and the two economies are closely linked through trade, finance, logistics and a large Indian community in the Emirates. Since CEPA came into force, UAE trading and manufacturing groups have looked at India both as a market and as a production base for the Gulf, Africa and beyond. UAE-based technology and services companies use India for engineering, operations and support teams, and UAE family offices and founders invest in Indian businesses directly.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          For many UAE-based Indian entrepreneurs, setting up in India is also a way to build a second base close to suppliers and talent while running the group from Dubai or Abu Dhabi.
        </p>

        <h2 id="who-invests" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who is investing: UAE company, free zone entity or NRI founder</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Investor</th><th scope="col" className="border border-gray-300 p-3 text-left">How the investment is treated</th><th scope="col" className="border border-gray-300 p-3 text-left">Main point</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">UAE mainland company</th><td className="border border-gray-300 p-3">Foreign direct investment</td><td className="border border-gray-300 p-3">Board resolution and trade licence documents authenticated for India</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">UAE free zone company</th><td className="border border-gray-300 p-3">Foreign direct investment</td><td className="border border-gray-300 p-3">Free zone licence and registry documents; confirm the entity can hold foreign shares under its free zone rules</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">UAE holding company of a wider group</th><td className="border border-gray-300 p-3">Foreign direct investment; India looks through to beneficial owners</td><td className="border border-gray-300 p-3">Disclose the full ownership chain; Press Note 3 applies if any beneficial owner is from a land-border country</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">NRI living in the UAE</th><td className="border border-gray-300 p-3">Repatriation basis (foreign investment) or non-repatriation basis (treated as domestic)</td><td className="border border-gray-300 p-3">See <Link href="/company-registration-in-india-for-nri" className="text-blue-800 font-semibold hover:underline">company registration for NRIs</Link></td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Foreign national resident in the UAE</th><td className="border border-gray-300 p-3">Foreign direct investment</td><td className="border border-gray-300 p-3">Individual documents authenticated for India</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Many UAE groups are owned by Indian families living in the Emirates. The choice between investing through a UAE company and investing personally as an NRI affects the FEMA treatment, the tax on dividends and how easily money can come back to the UAE, so we model both before incorporation.
        </p>

        <h2 id="structure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing the structure in India</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Structure</th><th scope="col" className="border border-gray-300 p-3 text-left">Indian tax on profits</th><th scope="col" className="border border-gray-300 p-3 text-left">Suits</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Private limited company</th><td className="border border-gray-300 p-3">About 25.17% under the concessional regime</td><td className="border border-gray-300 p-3">Almost every operating business</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Joint venture company</th><td className="border border-gray-300 p-3">Same as above</td><td className="border border-gray-300 p-3">A UAE group partnering with an Indian business for licences, land or distribution</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">LLP</th><td className="border border-gray-300 p-3">30% plus surcharge and cess</td><td className="border border-gray-300 p-3">Small professional businesses in sectors open to 100% automatic foreign investment</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Branch or project office</th><td className="border border-gray-300 p-3">35% plus surcharge and cess</td><td className="border border-gray-300 p-3">Single contracts or limited activities, with AD bank approval</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Liaison office</th><td className="border border-gray-300 p-3">No income allowed</td><td className="border border-gray-300 p-3">Market research and representation only</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          The private limited company is the usual choice because it pays the domestic tax rate, needs no prior approval in most sectors and can later be sold, merged or used to raise capital. See <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and, for the office routes, <Link href="/branch-office-registration" className="text-blue-800 font-semibold hover:underline">branch office registration</Link>.
        </p>

        <h2 id="documents" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documents from the UAE</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Trade licence or free zone licence and the certificate of incorporation or registration.</li>
          <li>Memorandum and articles of association, or the free zone equivalent.</li>
          <li>Register of shareholders and directors, or an incumbency certificate.</li>
          <li>Board resolution approving the Indian company, its capital, the directors and an authorised signatory.</li>
          <li>Passports, UAE residence visas and Emirates ID of the directors and signatories, with proof of address.</li>
          <li>Documents in Arabic need a certified English translation.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          UAE documents are notarised and attested in the UAE and then authenticated for use in India, by apostille or by legalisation depending on the current route for the document. We confirm the exact sequence for each document before you start, because the rules for UAE documents have changed in recent years and differ between mainland and free zone authorities.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Incorporation step by step</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Decide the structure, share capital, state and the resident director.</li>
          <li>Prepare and authenticate the UAE documents.</li>
          <li>Obtain digital signature certificates for the directors; Director Identification Numbers are allotted through the incorporation filing.</li>
          <li>Reserve the name and incorporate through SPICe+, receiving the certificate of incorporation, PAN and TAN.</li>
          <li>Open the Indian company&apos;s bank account.</li>
          <li>Remit the share capital from the UAE in dirhams, dollars or rupees through the banking channel.</li>
          <li>Allot shares within 60 days at no less than fair value and file FC-GPR within 30 days of allotment.</li>
          <li>File the commencement of business declaration within 180 days of incorporation.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          From complete documents the incorporation usually takes 4 to 6 weeks; the document stage in the UAE and the Indian bank&apos;s KYC review are the two steps that most often decide the overall time. See <Link href="/how-long-to-set-up-a-subsidiary-in-india" className="text-blue-800 font-semibold hover:underline">how long it takes to set up a subsidiary</Link>.
        </p>

        <h2 id="resident-director" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The resident director</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Every Indian company needs at least one director who stayed in India for 182 days or more in the financial year. Directors living in Dubai or Abu Dhabi do not meet this, even if they are Indian citizens. UAE groups usually appoint an Indian manager, a family member living in India, or a <Link href="/resident-director-services-india" className="text-blue-800 font-semibold hover:underline">professional resident director</Link> whose role is limited in writing so that control stays in the UAE.
        </p>

        <h2 id="money" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Money between the UAE and India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Capital is remitted through banks from the UAE to the Indian company&apos;s account. Remittances can be made in US dollars or dirhams, and India and the UAE have also set up a framework for settling payments in rupees and dirhams. Whatever the currency, the remitter should be the shareholder named in the incorporation documents, so the bank&apos;s KYC report matches the FC-GPR filing.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Payment from India to the UAE</th><th scope="col" className="border border-gray-300 p-3 text-left">Indian tax position</th><th scope="col" className="border border-gray-300 p-3 text-left">Note</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividend</th><td className="border border-gray-300 p-3">Reduced rate under the India-UAE tax treaty with a UAE tax residency certificate and Form 41; about 20% plus surcharge and cess without it</td><td className="border border-gray-300 p-3">Confirm the treaty rate and beneficial ownership conditions before paying</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Interest on a parent loan</th><td className="border border-gray-300 p-3">Reduced treaty rate for qualifying lenders</td><td className="border border-gray-300 p-3">External commercial borrowing rules apply</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Royalty</th><td className="border border-gray-300 p-3">Treaty rate on royalties</td><td className="border border-gray-300 p-3">Licence agreement and arm&apos;s length price</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Service fees</th><td className="border border-gray-300 p-3">Depends on whether the treaty treats them as royalties or business profits</td><td className="border border-gray-300 p-3">Analyse each type of payment</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Share buy-back</th><td className="border border-gray-300 p-3">Taxed as a dividend for the shareholder since 1 October 2024</td><td className="border border-gray-300 p-3">No longer cheaper than a dividend</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Each payment abroad is reported on Forms 145 and 146 (previously Forms 15CA and 15CB) before the bank releases it.
        </p>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax: India, the treaty and UAE corporate tax</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Indian company tax:</strong> about 25.17% under the concessional regime, or the rate applicable to the chosen structure.</li>
          <li><strong>India-UAE tax treaty:</strong> caps Indian tax on dividends, interest and royalties paid to a UAE resident that meets the treaty&apos;s residence and beneficial ownership tests; confirm the current rates and conditions in the consolidated text before filing. The Multilateral Instrument&apos;s principal purpose test can deny benefits to arrangements set up mainly for treaty access.</li>
          <li><strong>Tax residency certificate:</strong> the UAE parent obtains a tax residency certificate from the UAE Federal Tax Authority for each year in which it receives payments from India.</li>
          <li><strong>UAE corporate tax:</strong> 9% on taxable income above the threshold for financial years starting on or after 1 June 2023, with a participation exemption for qualifying dividends and gains from shareholdings, subject to conditions.</li>
          <li><strong>Transfer pricing:</strong> transactions between the Indian company and UAE group companies must be priced at arm&apos;s length and documented in India, with Form 48 filed each year; the UAE also has transfer pricing rules under its corporate tax law.</li>
          <li><strong>Substance:</strong> a UAE holding company used for India should have real management and activity in the UAE, both for treaty access and for its own UAE tax position.</li>
        </ul>

        <h2 id="cepa" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The India-UAE CEPA: what it changes</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The India-UAE Comprehensive Economic Partnership Agreement came into force on 1 May 2022. It removes or reduces tariffs on most goods traded between the two countries, improves market access for services, and sets rules of origin that decide which goods qualify. For a UAE trading group, CEPA makes India-made goods more attractive for the Gulf and UAE goods more competitive in India. It does not change how an Indian company is formed, funded or taxed: the Companies Act, FEMA and the FDI Policy still apply. India and the UAE have also signed a bilateral investment treaty that provides investment protection for investors of each country.
        </p>

        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Staff, secondees and NRIs moving between the UAE and India</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Local hiring:</strong> Indian employees are hired on Indian contracts under the labour codes, with provident fund, ESI where applicable and gratuity. See <Link href="/cost-of-hiring-employees-in-india" className="text-blue-800 font-semibold hover:underline">the cost of hiring employees in India</Link>.</li>
          <li><strong>UAE staff sent to India:</strong> there is no India-UAE social security agreement, so a foreign employee on Indian payroll contributes to Indian provident fund as an international worker on full basic wages.</li>
          <li><strong>Indian citizens returning from the UAE:</strong> become resident in India for tax depending on their days in India; their personal tax position changes, and UAE income may become taxable in India once they are ordinarily resident.</li>
          <li><strong>Visas:</strong> foreign nationals working for the Indian company need an employment visa with a minimum salary of USD 25,000 a year and FRRO registration for stays longer than 180 days.</li>
        </ul>

        <h2 id="compliance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Compliance after incorporation</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Area</th><th scope="col" className="border border-gray-300 p-3 text-left">What is filed</th><th scope="col" className="border border-gray-300 p-3 text-left">When</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">RBI</th><td className="border border-gray-300 p-3">FC-GPR for each allotment; FLA return</td><td className="border border-gray-300 p-3">30 days after allotment; 15 July each year</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Registrar of Companies</th><td className="border border-gray-300 p-3">AGM, annual accounts and annual return</td><td className="border border-gray-300 p-3">AGM by 30 September; forms after the AGM</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Income tax</th><td className="border border-gray-300 p-3">Advance tax, TDS returns, Form 48 and the tax return</td><td className="border border-gray-300 p-3">Quarterly; return by 31 October or 30 November</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">GST and payroll</th><td className="border border-gray-300 p-3">GST returns; provident fund and ESI</td><td className="border border-gray-300 p-3">Monthly</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          UAE groups usually close on 31 December, so the Indian 31 March year needs a bridge for group reporting. See the <Link href="/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar</Link>.
        </p>

        <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Cost and timeline</h2>
        <p className="text-gray-600 leading-relaxed mb-4">AU Corporate offers the best pricing with better work support, and the first consultation is free. Incorporation takes about 4 to 6 weeks from complete documents. Ongoing compliance is available as a package tailored to your company. See <Link href="/cost-of-setting-up-a-subsidiary-in-india" className="text-blue-800 font-semibold hover:underline">the cost of setting up a subsidiary in India</Link>.
        </p>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common mistakes UAE investors make</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Investing through a UAE company with little substance and expecting treaty benefits automatically.</li>
          <li>Remitting capital from a personal account or a different group company than the shareholder named in the documents.</li>
          <li>Assuming a director living in Dubai meets the resident director rule because they are an Indian citizen.</li>
          <li>Choosing the non-repatriation route as an NRI and later wanting to move profits to the UAE.</li>
          <li>Paying dividends without a current UAE tax residency certificate and Form 41.</li>
          <li>Treating Indian transfer pricing as optional because the UAE group is small.</li>
        </ul>
        <h2 id="free-zone" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Investing through a Dubai or Abu Dhabi free zone company</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Free zone companies are a common parent for Indian subsidiaries, because many Gulf groups already hold their regional businesses through them. Indian banks and the Registrar treat a free zone company like any other foreign company, but they will look closely at its ownership and management. Prepare the free zone registry extract, the share register, the list of managers or directors and an ownership chart to the individuals at the top. If the free zone company has no staff or office of its own, expect questions on substance from the Indian bank and, later, from the tax department when it claims treaty benefits on dividends or royalties.
        </p>

        <h2 id="family-groups" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Family business groups: ownership, control and succession</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Many Gulf businesses investing in India are family groups founded by Indians living abroad. Three decisions shape the Indian structure for such groups:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Who holds the Indian shares:</strong> a holding company in the Emirates, the founder personally as an NRI, or a mix. Holding through a company keeps the Indian investment inside the group; personal holding can suit founders planning to return to India.</li>
          <li><strong>Who controls the board:</strong> reserved matters in the articles and a clear bank mandate keep decisions with the family while a resident director meets the legal requirement.</li>
          <li><strong>What happens on succession:</strong> shares held personally pass under the founder&apos;s will and the applicable succession law, which may differ between India and the Emirates; shares held through a company pass with the company. Plan this before the Indian company grows.</li>
        </ol>

        <h2 id="gulf-tp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Transfer pricing between Gulf trading hubs and India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Gulf groups often route sales, purchases or treasury through a Dubai company. When the Indian company buys from or sells to that company, Indian transfer pricing applies: the Indian file must show what the Dubai company actually does, its staff, assets and risks, and why its margin is justified. A trading company with no real functions earning a large margin on goods shipped directly between India and customers attracts adjustments. Keep the Indian transfer pricing study consistent with the group&apos;s own transfer pricing documentation under the Emirates&apos; corporate tax law.
        </p>

        <h2 id="bank-kyc" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What Indian banks ask Gulf-based shareholders</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Expect the Indian bank to ask for: the ownership chart to ultimate individual owners with nationalities and percentages; passports, residence visas and Emirates ID for owners holding significant stakes; the source of funds for the capital; and the commercial reason for the Indian company. Answering these in one pack, with documents already authenticated, is the single best way to shorten the account-opening stage.
        </p>

        <h2 id="exit-uae" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Exit and moving proceeds back to the Gulf</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A Gulf parent can exit by selling the Indian shares, by a buy-back, by a merger or by closing the company. The price must follow FEMA pricing rules, the transfer is reported on Form FC-TRS within 60 days where an Indian resident is party, and Indian capital gains tax applies, at 12.5% for unlisted shares held more than 24 months, subject to the treaty. Sale proceeds are remitted after tax with Forms 145 and 146. Plan the exit tax position when choosing the holding structure, because it is hard to change later.
        </p>

        <h2 id="india-locations" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where in India Gulf businesses set up</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Location follows the business. Trading and logistics groups often choose Mumbai, Ahmedabad, Kochi or Chennai for port access and Gulf shipping lanes. Technology and services teams go to Bengaluru, Hyderabad, Pune or the National Capital Region for talent. Financial services and fund businesses may consider GIFT City, India&apos;s international financial services centre in Gujarat, which has its own regulator and tax incentives. Manufacturing for export to the Gulf often sits in Gujarat, Maharashtra or Tamil Nadu. See <Link href="/manufacturing-company-setup-in-india" className="text-blue-800 font-semibold hover:underline">manufacturing company setup in India</Link>.
        </p>
        <h2 id="gift-city" className="text-2xl font-bold text-gray-900 mt-12 mb-4">GIFT City for finance and treasury businesses</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Gulf financial groups, family offices and fund managers sometimes set up in GIFT City, India&apos;s international financial services centre near Gandhinagar, rather than a standard location. Units there operate under the International Financial Services Centres Authority, deal mainly in foreign currency and can access tax incentives for eligible activities. It suits fund management, aircraft and ship leasing, banking units and treasury centres, not ordinary trading or technology businesses. Setting up in GIFT City needs its own licences in addition to incorporation.
        </p>

        <h2 id="timeline-uae" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A realistic timeline from Dubai</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Stage</th><th scope="col" className="border border-gray-300 p-3 text-left">Typical time</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Decisions on structure, capital and director</th><td className="border border-gray-300 p-3">About 1 week</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Attestation and authentication of documents from the Emirates</th><td className="border border-gray-300 p-3">1 to 3 weeks</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Digital signatures and name reservation in India</th><td className="border border-gray-300 p-3">A few days, in parallel</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Incorporation through SPICe+</th><td className="border border-gray-300 p-3">About 1 to 2 weeks from a complete file</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Bank account and first remittance</th><td className="border border-gray-300 p-3">1 to 4 weeks</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Allotment and FC-GPR</th><td className="border border-gray-300 p-3">Within 60 days of receipt, then within 30 days</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          See <Link href="/how-long-to-set-up-a-subsidiary-in-india" className="text-blue-800 font-semibold hover:underline">how long it takes to set up a subsidiary</Link> for what speeds this up.
        </p>
        <h2 id="first-steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Your first three steps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          First, tell us who will own the Indian shares and how the business will make money in India. Second, we confirm the route, the documents to attest in the Emirates and the resident director. Third, we prepare the Indian filings while your documents are authenticated, so that incorporation can follow as soon as the papers arrive in India.
        </p>




        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India firm of Chartered Accountants and Company Secretaries, serving foreign companies since 2016. We handle the Indian side end to end, with the best pricing, better work support and a free first consultation.
        </p>
        <GuideCTA title={"Setting Up in India from the UAE?"} description={"Tell us about the UAE parent or your own NRI status and what the Indian company will do, and we will recommend the route in a free consultation."} />

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
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "UAE Federal Tax Authority", href: "https://tax.gov.ae/" },
            { label: "Department of Commerce, India (trade agreements)", href: "https://commerce.gov.in/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 7 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Setting Up in India from the UAE?"} description={"Tell us about the UAE parent or your own NRI status and what the Indian company will do, and we will recommend the route in a free consultation."} />
    </main>
  )
}
