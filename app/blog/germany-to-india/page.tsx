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
import { GuideCountryProfile } from "@/components/guide/GuideCountryContext"
import { InquiryTrigger } from "@/components/InquiryTrigger"

const PAGE_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "overview", label: "Germany to India at a glance" },
  { id: "mittelstand", label: "Why German groups choose India now" },
  { id: "form", label: "Choosing the legal form" },
  { id: "papers", label: "Handelsregister, notary and Landgericht" },
  { id: "euros", label: "Euros in, dividends back" },
  { id: "treaties", label: "Treaty, social security and apostille" },
  { id: "german-rules", label: "German and EU rules that travel with you" },
  { id: "calendar", label: "Two financial years" },
  { id: "people", label: "Staff, secondees and the works-council gap" },
  { id: "cost", label: "Cost and timeline" },
  { id: "entry-routes", label: "Market entry routes for German businesses" },
  { id: "steps", label: "Business setup step by step" },
  { id: "first-year", label: "Ongoing compliance in the first year" },
  { id: "treaty-rates", label: "The India-Germany tax treaty in one table" },
  { id: "contracts", label: "Contracts, DIS arbitration and enforcement" },
  { id: "exit", label: "Leaving India later" },
  { id: "mistakes", label: "Six procedural mistakes" },
  { id: "data", label: "Data protection: GDPR and DPDP" },
  { id: "fta", label: "The India-EU trade agreement" },
  { id: "secondees", label: "Sending German staff to India: four questions to settle" },
  { id: "parent-reporting", label: "What the German parent reports at home" },
  { id: "series", label: "The full guide series" },
  { id: "help", label: "How AU Corporate works with German groups" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "sources", label: "Sources and how this page is maintained" },
]

const seriesCards = [
  { title: "Structure options", desc: "GmbH-owned subsidiary, branch, liaison office or JV.", href: "/germany-to-india/structure-options" },
  { title: "Incorporation steps", desc: "Who does what, in Germany and India.", href: "/germany-to-india/incorporation-steps" },
  { title: "Documents and apostille", desc: "Handelsregister extract, notary, Landgericht, sworn translation.", href: "/germany-to-india/documents-handelsregister-apostille" },
  { title: "Funding and FEMA", desc: "Euro equity, ECB and KfW or DEG finance.", href: "/germany-to-india/funding-and-fema" },
  { title: "Repatriating profits to Germany", desc: "10% treaty rate and the Section 8b exemption.", href: "/germany-to-india/repatriating-profits" },
  { title: "Transfer pricing", desc: "Indian rules and German function transfers.", href: "/germany-to-india/transfer-pricing" },
  { title: "India-Germany DTAA", desc: "The treaty article by article.", href: "/germany-to-india/india-germany-dtaa" },
  { title: "German parent obligations", desc: "Section 8b, CFC rules and Pillar Two.", href: "/germany-to-india/german-parent-obligations" },
  { title: "Compliance calendar", desc: "Indian dates against a 31 December year.", href: "/germany-to-india/compliance-calendar" },
  { title: "Hiring in India", desc: "What changes from German practice.", href: "/germany-to-india/hiring-in-india" },
  { title: "German employees in India", desc: "The social security agreement.", href: "/germany-to-india/german-employees-in-india-ssa" },
  { title: "Relocating German staff", desc: "Visas, FRRO and family.", href: "/germany-to-india/relocate-german-staff" },
  { title: "GCC for German companies", desc: "Engineering and shared service centres.", href: "/germany-to-india/gcc-for-german-companies" },
  { title: "Data protection", desc: "GDPR transfers and India's DPDP Act.", href: "/germany-to-india/data-protection-gdpr-dpdp" },
  { title: "Supply chain and ESG", desc: "LkSG and CBAM for Indian operations.", href: "/germany-to-india/supply-chain-and-esg-duties" },
  { title: "India-EU FTA", desc: "What the concluded agreement means.", href: "/germany-to-india/india-eu-fta-and-germany" },
  { title: "Contracts and arbitration", desc: "DIS awards and Section 44A.", href: "/germany-to-india/contracts-courts-arbitration" },
  { title: "Exit and restructuring", desc: "Sale, merger or closure.", href: "/germany-to-india/exit-and-restructuring" },
  { title: "Common mistakes", desc: "Traps for German parents.", href: "/germany-to-india/common-mistakes" },
  { title: "Germany FAQs", desc: "Answers from first planning to exit.", href: "/germany-to-india/faq" },
]

const faqs = [
  { q: "Can a German GmbH or AG own all the shares of an Indian company?", a: "Yes, in most sectors under the Automatic Route. Press Note 3 does not apply to German investors, and a group company or nominee holds one share to meet the two-shareholder rule." },
  { q: "How long does setup take from Germany?", a: "About 4 to 6 weeks from the day the notarised, apostilled and translated German documents are ready." },
  { q: "Who apostilles German company documents?", a: "The Landgericht for the notary's district, or the Landgericht of the register court for Handelsregister extracts." },
  { q: "What is the Indian tax on dividends to Germany?", a: "A flat 10% under the India-Germany treaty; a German corporation holding at least 10% exempts 95% under Section 8b." },
  { q: "Are KfW or DEG loans taxed in India?", a: "Interest on them is reported as exempt under the treaty, which can make development-bank finance cheaper." },
  { q: "Do German secondees pay into the Indian provident fund?", a: "Not with a certificate of coverage under the India-Germany Social Security Agreement, for up to 48 months plus 12." },
  { q: "Does the German function transfer rule matter?", a: "Yes. Moving a function with its profit potential to India can trigger an exit charge in Germany." },
  { q: "Can the Indian company use a 31 December year?", a: "No. Indian companies use the year to 31 March." },
  { q: "Can a German judgment be enforced in India?", a: "Not directly; Germany is not a Section 44A reciprocating territory, so arbitration such as DIS is the safer route." },
  { q: "Can personal data move from Germany to India?", a: "Yes, under standard contractual clauses or binding corporate rules with a transfer impact assessment, as India has no GDPR adequacy decision." },
  { q: "What does AU Corporate charge to incorporate?", a: "An indicative USD 750 to USD 1,000 for share capital up to ₹10 lakh, covering the incorporation work." },
  { q: "Is the India-EU trade agreement in force?", a: "It was concluded on 27 January 2026 but is not yet in force." },
]

export default function GermanyToIndiaHubPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How to Set Up a Subsidiary in India from Germany: The 2026 Guide"
        description="How German companies set up a subsidiary in India: structure, FDI rules, incorporation, FEMA filings, the India-Germany tax treaty, social security agreement, staff and compliance. By a Chartered Accountant."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "How to Set Up a Subsidiary in India from Germany" },
        ]}
      />

      <GuideHero
        eyebrow="Guide for German companies"
        title="How to Set Up a Subsidiary in India from Germany: The 2026 Guide"
        dek="Structure, incorporation, FEMA/RBI filings, the India-Germany treaty and social security agreement, and EU rules for German companies entering India, in plain terms."
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="The short answer">
          German companies usually enter India through a private limited subsidiary owned by the GmbH or AG.
          Press Note 3 does not apply to Germany, so most sectors need no prior approval. Documents are
          notarised, apostilled by the competent Landgericht and given sworn translations; the company is
          incorporated in about 4 to 6 weeks; and dividends return to Germany at a flat 10% treaty rate, 95%
          exempt under Section 8b for a qualifying holding.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="text-gray-600 leading-relaxed mb-10">
          This guide is for German Geschäftsführer, CFOs and heads of international business. It follows the
          way a German group usually plans India, from the board decision and the Handelsregister papers to
          the first dividend, and highlights where German tax, social security and EU rules interact with
          Indian law. Each section links to a deeper guide.
        </p>

        <h2 id="overview" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Germany to India at a glance</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Position for a German company</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Vehicle</th>
                <td className="border border-gray-300 p-3">Private limited subsidiary, wholly owned or a joint venture</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Approval</th>
                <td className="border border-gray-300 p-3">Automatic Route in most sectors; Press Note 3 does not apply</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Documents</th>
                <td className="border border-gray-300 p-3">Handelsregister extract, articles, resolution; notary, Landgericht apostille, sworn translation</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Setup</th>
                <td className="border border-gray-300 p-3">About 4 to 6 weeks once documents are ready</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Years</th>
                <td className="border border-gray-300 p-3">Germany usually 31 December; India 31 March</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividends</th>
                <td className="border border-gray-300 p-3">10% Indian tax; 95% exempt in Germany under Section 8b</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Secondees</th>
                <td className="border border-gray-300 p-3">German social insurance up to 48 months plus 12 with a certificate of coverage</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Data</th>
                <td className="border border-gray-300 p-3">GDPR transfer tools needed; no adequacy decision for India</td>
              </tr>
            </tbody>
          </table>
        </div>
        <GuideCountryProfile country="germany" />

        <h2 id="mittelstand" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why German groups choose India now</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          German engineering, automotive, chemicals and industrial groups use India for engineering centres, manufacturing for the Indian market and export, and shared services. The concluded India-EU trade agreement, once in force, should lower tariffs further, and German supply-chain rules make a well-governed Indian subsidiary easier to manage than third-party suppliers. See <Link href="/germany-to-india/gcc-for-german-companies" className="text-blue-800 font-semibold hover:underline">GCC for German companies</Link> and <Link href="/germany-to-india/india-eu-fta-and-germany" className="text-blue-800 font-semibold hover:underline">the India-EU FTA</Link>.
        </p>
        <h2 id="form" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing the legal form</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A subsidiary keeps Indian liabilities in an Indian company and lets dividends benefit from the Section 8b participation exemption. A branch needs RBI approval, a USD 100,000 net worth and a five-year profit record, and its profits are taxed at the foreign company rate; a liaison office needs USD 50,000 and three years, and cannot earn income. Compare them in <Link href="/germany-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">structure options</Link>.
        </p>
        <h2 id="papers" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Handelsregister, notary and Landgericht</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Germany has no single apostille office. The Landgericht for the notary's district apostilles notarised documents, and the Landgericht of the register court apostilles Handelsregister extracts. Every document needs a sworn English translation, and the extract should be recent when filed. Our <Link href="/germany-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">incorporation steps</Link> and <Link href="/germany-to-india/documents-handelsregister-apostille" className="text-blue-800 font-semibold hover:underline">documents guide</Link> set out the order.
        </p>
        <h2 id="euros" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Euros in, dividends back</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The parent remits euros, shares are allotted within 60 days and FC-GPR follows within 30 days. Loans from KfW or DEG, and Hermes-guaranteed loans, are reported as exempt from Indian tax on interest under the treaty. Profits return as dividends at 10%, largely exempt in Germany, or as fees and royalties at 10% with a German credit. See <Link href="/germany-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link> and <Link href="/germany-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">repatriating profits</Link>.
        </p>
        <h2 id="treaties" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Treaty, social security and apostille</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Tax treaty:</strong> signed 19 June 1995, in force 26 October 1996; a flat 10% on dividends, interest, royalties and technical fees. <Link href="/germany-to-india/india-germany-dtaa" className="text-blue-800 font-semibold hover:underline">India-Germany DTAA</Link>.</li>
          <li><strong>Social security:</strong> the agreement applied from 1 October 2009 keeps posted staff in German schemes for up to 48 months plus 12. <Link href="/germany-to-india/german-employees-in-india-ssa" className="text-blue-800 font-semibold hover:underline">German employees in India</Link>.</li>
          <li><strong>Apostille:</strong> Germany and India are both parties to the Apostille Convention.</li>
        </ul>
        <h2 id="german-rules" className="text-2xl font-bold text-gray-900 mt-12 mb-4">German and EU rules that travel with you</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Function transfers:</strong> moving activities to India can trigger a German exit charge. <Link href="/germany-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">Transfer pricing</Link>.</li>
          <li><strong>LkSG and CBAM:</strong> supply-chain due diligence and carbon border reporting reach Indian operations. <Link href="/germany-to-india/supply-chain-and-esg-duties" className="text-blue-800 font-semibold hover:underline">Supply chain and ESG</Link>.</li>
          <li><strong>GDPR:</strong> transfers to India need standard contractual clauses or binding corporate rules. <Link href="/germany-to-india/data-protection-gdpr-dpdp" className="text-blue-800 font-semibold hover:underline">Data protection</Link>.</li>
          <li><strong>Pillar Two and CFC rules:</strong> for larger groups and passive income. <Link href="/germany-to-india/german-parent-obligations" className="text-blue-800 font-semibold hover:underline">German parent obligations</Link>.</li>
        </ul>
        <h2 id="calendar" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Two financial years</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The Indian year runs to 31 March, the German usually to 31 December. Consolidate from Indian management accounts to 31 December, run the Indian audit in spring and summer, and expect the FLA return on 15 July during the German half-year close. The <Link href="/germany-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar</Link> maps every date.
        </p>
        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          <strong>New Indian tax law.</strong> The Income-tax Act, 2025 applies from 1 April 2026; our guides use
          the new form names, such as Form 48 (previously 3CEB) and Forms 145 and 146 (previously 15CA and 15CB).
        </div>

        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Staff, secondees and the works-council gap</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian employment has no German-style works council or co-determination for most offices. Staff join the provident fund, gratuity is payable after five years, and the labour codes set wages and hours. German secondees need an Employment Visa and FRRO registration, and stay in German social insurance with a certificate of coverage. See <Link href="/germany-to-india/hiring-in-india" className="text-blue-800 font-semibold hover:underline">hiring in India</Link> and <Link href="/germany-to-india/relocate-german-staff" className="text-blue-800 font-semibold hover:underline">relocating German staff</Link>.
        </p>
        <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Cost and timeline</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          One-time costs cover Indian government fees and stamp duty, German notary, Landgericht and translation fees, digital signatures and our fee; annual costs cover accounting, audit, tax, GST, payroll and RBI filings. AU Corporate&apos;s indicative incorporation fee is USD 750 to USD 1,000 for share capital up to ₹10 lakh.
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-between bg-[#fffbe6] border border-gold-dark rounded-xl p-5 mb-10">
          <div>
            <strong className="block text-gray-900">Get a costing for your plan</strong>
            <p className="text-sm text-gray-600 mt-0.5">Tell us what you plan to set up: you get the best pricing, better work support and a free first consultation.</p>
          </div>
          <InquiryTrigger className="inline-block rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-[#081a42] hover:bg-gold-dark transition-colors whitespace-nowrap">
            Discuss your costing with our team
          </InquiryTrigger>
        </div>

        <h2 id="entry-routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Market entry routes for German businesses</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The right business structure follows from what the German company wants India to do. We ask three questions
          first: will you sell in India, make in India, or deliver services from India to the group? The table maps
          each answer to the usual market entry route.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Plan for India</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Usual structure</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What to watch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Sell products or services in India</th>
                <td className="border border-gray-300 p-3">Wholly owned private limited company</td>
                <td className="border border-gray-300 p-3">GST registration, distributor contracts, and transfer pricing on goods bought from Germany</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Manufacture with a local partner</th>
                <td className="border border-gray-300 p-3">Joint venture company</td>
                <td className="border border-gray-300 p-3">Shareholder agreement, deadlock and exit clauses, technology licence and royalty terms</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Engineering, IT or finance centre for the group</th>
                <td className="border border-gray-300 p-3">Captive centre (GCC) owned by the GmbH or AG</td>
                <td className="border border-gray-300 p-3">Cost-plus remuneration, German function transfer rules and the works council at home</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">One plant or infrastructure contract</th>
                <td className="border border-gray-300 p-3">Project office</td>
                <td className="border border-gray-300 p-3">Needs a contract with an Indian company and a qualifying funding source; closes when the project ends</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Test the market first</th>
                <td className="border border-gray-300 p-3">Liaison office</td>
                <td className="border border-gray-300 p-3">Cannot earn income or sign sales contracts; RBI-regulated through an AD bank</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Between the first two rows, the choice is often between a wholly owned subsidiary and a joint venture.
          A wholly owned subsidiary gives the German parent full control of hiring, pricing and intellectual property,
          and is simpler to merge, sell or close later. A joint venture brings an Indian partner&apos;s customers,
          licences or land, but needs a carefully drafted shareholder agreement covering board seats, reserved
          matters, deadlock, technology rights and exit, because changing partners later is slow and expensive.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          A parent that is a partnership, such as a GmbH &amp; Co. KG, needs its own German tax review before it holds
          Indian shares. Foreign investment in most sectors is on the Automatic Route, so the company can be formed
          without prior approval. More detail is in{" "}
          <Link href="/germany-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">structure options for German companies</Link>,{" "}
          <Link href="/germany-to-india/gcc-for-german-companies" className="text-blue-800 font-semibold hover:underline">GCC setup for German groups</Link>{" "}
          and our{" "}
          <Link href="/project-office-registration" className="text-blue-800 font-semibold hover:underline">project office registration</Link> service.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Business setup step by step, from Gesellschafterbeschluss to bank account</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Resolution in Germany.</strong> The shareholders or the management board approve the Indian company, its share capital, the first directors and an authorised signatory.</li>
          <li><strong>Notary, Landgericht and translation.</strong> The resolution, articles and a recent Handelsregister extract are notarised, apostilled by the competent Landgericht and given a sworn English translation.</li>
          <li><strong>Digital signatures and director identification.</strong> Each proposed director gets a digital signature certificate, and a Director Identification Number (DIN) is allotted through the incorporation filing itself for up to three directors.</li>
          <li><strong>Name and incorporation.</strong> The name is reserved and the company incorporated through the SPICe+ form on the Ministry of Corporate Affairs portal, which also issues PAN and TAN. This usually takes 7 to 15 working days once the papers arrive.</li>
          <li><strong>Bank account and capital.</strong> The company opens its account, the GmbH remits euros, shares are allotted within 60 days, and Form FC-GPR is filed with the RBI within 30 days of allotment.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-10">
          From a ready document set, the whole process takes about 4 to 6 weeks. The order, and the documents for each
          Landgericht, are in{" "}
          <Link href="/germany-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">incorporation steps</Link>{" "}
          and{" "}
          <Link href="/germany-to-india/documents-handelsregister-apostille" className="text-blue-800 font-semibold hover:underline">documents, Handelsregister and apostille</Link>.
        </p>

        <h2 id="first-year" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Ongoing compliance in the first year</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          German finance teams are used to an annual cycle centred on the Jahresabschluss. In India the filings are
          spread through the year and across four authorities, so the first year is where most groups need help.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Area</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What is filed</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">When</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">RBI</th>
                <td className="border border-gray-300 p-3">FC-GPR for each share allotment; FLA return</td>
                <td className="border border-gray-300 p-3">30 days after allotment; 15 July each year</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Registrar of Companies</th>
                <td className="border border-gray-300 p-3">AGM, then annual accounts (AOC-4) and annual return (MGT-7)</td>
                <td className="border border-gray-300 p-3">AGM by 30 September; forms after the AGM</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Income tax</th>
                <td className="border border-gray-300 p-3">Advance tax, TDS returns, transfer pricing report (Form 48) and the tax return</td>
                <td className="border border-gray-300 p-3">Quarterly instalments; return by 31 October or 30 November</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">GST and payroll</th>
                <td className="border border-gray-300 p-3">GST returns; provident fund and ESI contributions</td>
                <td className="border border-gray-300 p-3">Monthly</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          Every date, mapped against a 31 December German year, is in the{" "}
          <Link href="/germany-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar for German groups</Link>.
          Our <Link href="/secretarial-roc-compliance" className="text-blue-800 font-semibold hover:underline">secretarial</Link>{" "}
          and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>{" "}
          teams file them for you.
        </p>

        <h2 id="treaty-rates" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The India-Germany tax treaty in one table</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Payment from India to Germany</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treaty maximum in India</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">German side</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividends</th>
                <td className="border border-gray-300 p-3">10%, with no shareholding tiers</td>
                <td className="border border-gray-300 p-3">95% exempt for a qualifying corporate holding (Section 8b)</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Interest</th>
                <td className="border border-gray-300 p-3">10%; loans from KfW, DEG and Hermes-guaranteed loans exempt</td>
                <td className="border border-gray-300 p-3">Taxable, with credit for Indian tax</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Royalties and fees for technical services</th>
                <td className="border border-gray-300 p-3">10%</td>
                <td className="border border-gray-300 p-3">Taxable, with credit for Indian tax</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Business profits of the parent</th>
                <td className="border border-gray-300 p-3">Only through a permanent establishment; a building site after six months</td>
                <td className="border border-gray-300 p-3">Relief under the treaty</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          To claim the treaty rate, the German recipient gives the Indian payer a German tax residency certificate and
          Form 41 (previously Form 10F) before the payment, and the remittance goes out with Forms 145 and 146. Missing
          these papers is one of the most common reasons Indian tax is withheld at the higher domestic rate. The full
          article-by-article analysis is in the{" "}
          <Link href="/germany-to-india/india-germany-dtaa" className="text-blue-800 font-semibold hover:underline">India-Germany DTAA guide</Link>.
        </p>

        <h2 id="contracts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contracts, DIS arbitration and enforcement in India</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A German parent can choose German law and a German-seated arbitration, for example under the DIS rules, for
          its shareholder, services and licence agreements. India enforces an award from a New York Convention country
          as a foreign award under Part II of the Arbitration and Conciliation Act, 1996. A German court judgment is a
          different matter: Germany is not on India&apos;s list of reciprocating territories, so the winner must bring a
          fresh suit in India within three years. Indian mandatory law, FEMA and stamp duty apply whatever law the
          parties choose, and there is currently no investment protection treaty between India and Germany. See{" "}
          <Link href="/germany-to-india/contracts-courts-arbitration" className="text-blue-800 font-semibold hover:underline">contracts, courts and arbitration</Link>.
        </p>

        <h2 id="exit" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Leaving India later: sale, buy-back or closure</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A German parent can leave by selling the shares, having the Indian company buy them back, winding it up, or
          having it struck off if it is dormant. A sale is the most common route. The price must follow FEMA pricing
          rules; Indian capital gains tax on unlisted shares held for more than 24 months is 12.5%, subject to the
          treaty; and a qualifying German corporation generally pays tax on only 5% of its gain. Closing a company takes
          longer, because tax, labour and company law dues must all be cleared first. See{" "}
          <Link href="/germany-to-india/exit-and-restructuring" className="text-blue-800 font-semibold hover:underline">exit and restructuring</Link>.
        </p>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Six procedural mistakes German companies make</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Choosing a branch without testing eligibility.</strong> It needs USD 100,000 net worth and a five-year profit record.</li>
          <li><strong>Wrong apostille office, or no sworn translation.</strong> Each document goes to the competent Landgericht and needs a sworn English translation.</li>
          <li><strong>Allotting shares after 60 days.</strong> Allot within 60 days of receiving the money, or refund it, and file FC-GPR within 30 days.</li>
          <li><strong>No resident director.</strong> One director must have stayed in India for at least 182 days in the year.</li>
          <li><strong>Dividends without treaty papers.</strong> Without the residency certificate and Form 41, tax is withheld at the higher rate.</li>
          <li><strong>Secondments with no agreement.</strong> A German engineer directing Indian work without a secondment contract can create a permanent establishment for the parent.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-10">
          The full list, grouped by area, is in{" "}
          <Link href="/germany-to-india/common-mistakes" className="text-blue-800 font-semibold hover:underline">common mistakes German companies make in India</Link>.
        </p>

        <h2 id="data" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data protection: GDPR transfers and India&apos;s DPDP Act</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Sending personal data from Germany to the Indian company is a restricted transfer under the GDPR. India has
          no EU adequacy decision, so the usual tools are the standard contractual clauses with a transfer impact
          assessment, or binding corporate rules for larger groups. For employee data, German law adds a works council
          co-determination right over many HR and monitoring systems, so involve the Betriebsrat before rolling out
          shared tools. In India, the Digital Personal Data Protection Act applies as its duties take effect: the Rules
          were notified on 13 November 2025 and the main duties start on 13 May 2027. See 
          <Link href="/germany-to-india/data-protection-gdpr-dpdp" className="text-blue-800 font-semibold hover:underline">GDPR and DPDP for German companies</Link>.
        </p>

        <h2 id="fta" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The India-EU trade agreement: what changes and what does not</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Negotiators concluded the India-EU free trade agreement on 27 January 2026, but it is not yet in force. On 11
          September 2026 the European Commission asked the Council to authorise signing and conclusion, signature is
          being reported for December 2026, and entry into force is targeted for early 2027.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Expected to help:</strong> lower tariffs on components and machinery, clearer rules for sending staff, and stronger intellectual property enforcement.</li>
          <li><strong>Will not change:</strong> how an Indian company is formed, funded or taxed, or the FEMA filings; and there is still no investment protection treaty.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-10">
          German supply-chain rules matter in the meantime. The Supply Chain Due Diligence Act (LkSG) applies to
          companies with 1,000 or more employees in Germany, and EU sustainability reporting and CBAM send data requests
          to Indian suppliers and group companies. See 
          <Link href="/germany-to-india/india-eu-fta-and-germany" className="text-blue-800 font-semibold hover:underline">the India-EU FTA and Germany</Link> 
          and 
          <Link href="/germany-to-india/supply-chain-and-esg-duties" className="text-blue-800 font-semibold hover:underline">supply chain and ESG duties</Link>.
        </p>

        <h2 id="secondees" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sending German staff to India: four questions to settle</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Sending a German employee to India raises four separate questions, and all four should be settled before the
          person travels:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Immigration.</strong> An Employment Visa and registration with the FRRO after arrival.</li>
          <li><strong>Income tax.</strong> Pay for work done in India is taxable there unless the treaty&apos;s short-stay exemption applies: 183 days or fewer in the fiscal year, an employer outside India, and no cost borne by an Indian permanent establishment.</li>
          <li><strong>Social security.</strong> Under the India-Germany agreement, in force since 1 October 2009, a posted worker can stay in the German scheme for up to 48 months, extendable by 12, and avoid Indian provident fund, but only with a certificate of coverage in hand before the posting begins.</li>
          <li><strong>Corporate tax.</strong> Whether the secondment creates a permanent establishment for the German parent, which depends on who directs the work and who bears the cost.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-10">
          A German employee who works on the Indian company&apos;s payroll and under its control is normally an employee of
          the Indian entity for Indian tax. See 
          <Link href="/germany-to-india/relocate-german-staff" className="text-blue-800 font-semibold hover:underline">relocating German staff to India</Link> 
          and 
          <Link href="/germany-to-india/german-employees-in-india-ssa" className="text-blue-800 font-semibold hover:underline">German employees in India and the social security agreement</Link>.
        </p>

        <h2 id="parent-reporting" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the German parent reports at home</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A GmbH or AG pays corporation tax of 15% plus the solidarity surcharge and municipal trade tax, roughly 30% in
          total, but dividends and share gains from a qualifying foreign company are 95% exempt, so the German cost on
          an Indian dividend is small. The parent must still notify the tax office of the foreign holding, report to the
          Bundesbank where thresholds are met, consolidate under German accounting rules, keep the Transparenzregister
          current and apply German anti-bribery and supply-chain law to the Indian team. Your German advisers confirm
          these points; we advise on the Indian side. See 
          <Link href="/germany-to-india/german-parent-obligations" className="text-blue-800 font-semibold hover:underline">obligations of the German parent</Link>.
        </p>

        <h2 id="series" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The full guide series</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={seriesCards} />
        </div>

        <h2 id="help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate works with German groups</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India advisory firm, established in 2016. For German parents we act as the Indian finance and compliance team, working to the group's 31 December timetable alongside its German auditors and Steuerberater.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Need</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What we do</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Service page</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Incorporation</th>
                <td className="border border-gray-300 p-3">Checklist, Landgericht sequence, SPICe+, bank</td>
                <td className="border border-gray-300 p-3"><Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link></td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">FEMA</th>
                <td className="border border-gray-300 p-3">Valuation, FC-GPR, ECB, FLA</td>
                <td className="border border-gray-300 p-3"><Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link></td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Books</th>
                <td className="border border-gray-300 p-3">Indian accounts and HGB or IFRS packs</td>
                <td className="border border-gray-300 p-3"><Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">Accounting, reporting and audit support</Link></td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Tax</th>
                <td className="border border-gray-300 p-3">Corporate tax, transfer pricing, treaty</td>
                <td className="border border-gray-300 p-3"><Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">Corporate tax, GST and transfer pricing</Link></td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Company law</th>
                <td className="border border-gray-300 p-3">Board, AGM, ROC filings</td>
                <td className="border border-gray-300 p-3"><Link href="/secretarial-roc-compliance" className="text-blue-800 font-semibold hover:underline">Secretarial and ROC compliance</Link></td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">People</th>
                <td className="border border-gray-300 p-3">Payroll, PF, secondee tax</td>
                <td className="border border-gray-300 p-3"><Link href="/payroll-expat-services" className="text-blue-800 font-semibold hover:underline">Payroll and expat services</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.bzst.de/EN/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Federal Central Tax Office (BZSt)</a>,{" "}
          <a href="https://www.handelsregister.de/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Handelsregister</a>{" "}
          and the{" "}
          <a href="https://www.bundesbank.de/en" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Deutsche Bundesbank</a>.
        </p>

        <GuideServiceBox path="/germany-to-india" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/germany-to-india/faq"
          seeAllLabel="See all 146 questions"
          seeAllDescription="Plain answers from pre-incorporation to closure, including the treaty, the Social Security Agreement, staff, data and exit."
        />

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources and how this page is maintained</h2>
        <GuideSources
          note="This guide is based on the Companies Act, 2013, FEMA and the Non-Debt Instruments Rules, 2019, the Consolidated FDI Policy, the Income-tax Act, 2025, the India-Germany tax treaty and Social Security Agreement, public statements on the India-EU free trade agreement, and India's Digital Personal Data Protection Rules, 2025. Rules change often. We review this page at least quarterly and show the review date at the top."
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "German Federal Central Tax Office (BZSt)", href: "https://www.bzst.de/EN/" },
            { label: "EPFO India", href: "https://www.epfindia.gov.in/" },
          ]}
        />


        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and German
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Planning an Indian Subsidiary from Germany?"
        description="Tell us about your GmbH or AG, your timeline and your sector, and we'll reply with a recommended structure and a compliance overview."
      />
    </main>
  )
}
