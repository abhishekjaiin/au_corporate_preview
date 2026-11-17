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

const PAGE_URL = "https://www.theaucorp.com/europe-to-india"

const toc = [
  { id: "countries", label: "Country guides and key differences" },
  { id: "netherlands", label: "Setting up a subsidiary in India from the Netherlands" },
  { id: "france", label: "Notes for French companies" },
  { id: "fta", label: "The India-EU free trade agreement" },
  { id: "gdpr", label: "GDPR and India's DPDP Act" },
  { id: "steps", label: "Setup steps for any European parent" },
  { id: "years", label: "Two financial years" },
  { id: "dutch-steps", label: "A Dutch BV setting up in India, step by step" },
  { id: "dutch-holding", label: "Using a Dutch holding company for India" },
  { id: "dutch-staff", label: "Posting Dutch employees to India" },
  { id: "other-eu", label: "Notes for other European countries" },
  { id: "home-tax", label: "How Indian dividends are taxed at home" },
  { id: "why-europe", label: "Why European groups set up in India" },
  { id: "costs-eu", label: "Fees and timeline for European parents" },
  { id: "eu-mistakes", label: "Common mistakes European parents make" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a Dutch BV own an Indian subsidiary?", a: "Yes, up to 100% in most sectors under the Automatic Route." },
  { q: "What is the dividend withholding rate from India to the Netherlands?", a: "10% under the India-Netherlands treaty text; India's Supreme Court held in 2023 that the most-favoured-nation clause does not lower it without a notification." },
  { q: "Does the India-EU FTA change how a subsidiary is set up?", a: "No. It covers trade; company, FEMA and tax rules are unchanged, and it is not yet in force." },
  { q: "Is GDPR relevant to an Indian subsidiary?", a: "Yes. Transfers of EU personal data to India need standard contractual clauses or binding corporate rules." },
  { q: "Do posted European staff pay Indian provident fund?", a: "Not if their country has a social security agreement with India and they hold a certificate of coverage; otherwise they contribute as international workers." },
  { q: "How long does it take a European company to set up in India?", a: "About 4 to 6 weeks from complete, apostilled documents, plus time for bank onboarding." },
  { q: "Which European countries have social security agreements with India?", a: "Several, including the Netherlands, Germany, France, Belgium, Denmark, Finland, Sweden and Austria; a certificate of coverage is needed for each posted employee." },
  { q: "Do European directors need to travel to India?", a: "No. Directors sign digitally and documents are authenticated at home." },
]

const relatedCards = [
  { title: "Germany to India", desc: "The complete guide for German companies.", href: "/germany-to-india" },
  { title: "Spain to India", desc: "The complete guide for Spanish companies.", href: "/spain-to-india" },
  { title: "India subsidiary registration", desc: "Our incorporation service.", href: "/india-subsidiary-registration" },
  { title: "Cost of setting up a subsidiary", desc: "One-time and annual costs.", href: "/cost-of-setting-up-a-subsidiary-in-india" },
]

export default function EuropeToIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"Setting Up a Subsidiary in India from the Netherlands and Europe: An EU Guide"}
        description={"How Dutch, German, French, Spanish and other European companies set up a subsidiary in India: the Dutch BV route, tax treaties, social security agreements, the India-EU FTA, GDPR transfers and setup steps."}
        datePublished="2026-11-07"
        dateModified="2026-11-13"
        inLanguage="en"
      />

      <Breadcrumb items={[{ label: "Europe to India" }]} />

      <GuideHero eyebrow={"Regional guide: Europe to India"} title={"Setting Up a Subsidiary in India from the Netherlands and Europe: An EU Guide"} updated="13 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A European company usually sets up in India through a private limited subsidiary, wholly owned on the Automatic Route with no prior approval in most sectors. The Netherlands is also a common holding location for groups investing in India. Documents are apostilled in the home country, the company is incorporated in about 4 to 6 weeks, and FC-GPR is filed within 30 days of allotting shares. Each country has its own tax treaty with India, several have social security agreements that keep posted staff in home schemes, GDPR applies to personal data sent to the Indian company, and the India-EU free trade agreement, concluded in January 2026, is expected to lower tariffs once in force. It will not change how an Indian subsidiary is formed, funded or taxed.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="countries" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Country guides and key differences</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Country</th><th scope="col" className="border border-gray-300 p-3 text-left">Guide</th><th scope="col" className="border border-gray-300 p-3 text-left">Points specific to the country</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Germany</th><td className="border border-gray-300 p-3"><Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">Germany to India</Link></td><td className="border border-gray-300 p-3">Landgericht apostille and sworn translations; 10% treaty rate on dividends; Section 8b exemption at home</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Spain</th><td className="border border-gray-300 p-3"><Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">Spain to India</Link></td><td className="border border-gray-300 p-3">Apostille and sworn translation; Spanish participation exemption</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Netherlands</th><td className="border border-gray-300 p-3">This page, below</td><td className="border border-gray-300 p-3">Dutch BV as parent or holding company; treaty and social security agreement</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">France</th><td className="border border-gray-300 p-3">This page, below</td><td className="border border-gray-300 p-3">Treaty with India; social security agreement for posted workers</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Other EU countries</th><td className="border border-gray-300 p-3">Contact us</td><td className="border border-gray-300 p-3">Each has its own treaty; most are parties to the Apostille Convention</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="netherlands" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Setting up a subsidiary in India from the Netherlands</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Dutch companies set up in India for engineering, agri-food, logistics, water, health technology and services, and many international groups hold their Indian subsidiaries through a Dutch BV. The steps are the same as for any foreign parent: a board resolution, a recent extract from the Dutch Chamber of Commerce (KVK) register and the articles of association are notarised and apostilled, the Indian company is incorporated through SPICe+, and the BV remits the capital and files FC-GPR through the Indian company.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Topic</th><th scope="col" className="border border-gray-300 p-3 text-left">Position for a Dutch parent</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Vehicle</th><td className="border border-gray-300 p-3">Private limited subsidiary, wholly owned or a joint venture</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Documents</th><td className="border border-gray-300 p-3">KVK extract, articles, board resolution, director identity documents; apostille; Dutch documents translated into English</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividends to the Netherlands</th><td className="border border-gray-300 p-3">10% in the India-Netherlands treaty text; India&apos;s Supreme Court held in 2023 that a most-favoured-nation clause does not reduce the rate without a notification</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Interest, royalties and technical fees</th><td className="border border-gray-300 p-3">10% under the treaty</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dutch tax on dividends received</th><td className="border border-gray-300 p-3">Usually exempt under the Dutch participation exemption where its conditions are met</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Posted staff</th><td className="border border-gray-300 p-3">India-Netherlands social security agreement: a certificate of coverage keeps posted workers in the Dutch scheme</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Holding structures</th><td className="border border-gray-300 p-3">Treaty benefits subject to the principal purpose test and to substance in the Netherlands</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="france" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Notes for French companies</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          French groups use the same subsidiary route. Documents such as the Kbis extract, statuts and board decisions are apostilled and translated into English. The India-France tax treaty limits Indian tax on dividends, interest, royalties and technical fees paid to France, and an India-France social security agreement lets posted workers with a certificate of coverage stay in the French system for the covered period. Confirm the current treaty rates in the consolidated text before paying.
        </p>

        <h2 id="fta" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The India-EU free trade agreement</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Negotiators concluded the India-EU free trade agreement on 27 January 2026. It is not yet in force: signature and ratification steps are expected to run into 2027. Once in force, it is expected to lower tariffs on industrial goods such as machinery and components, improve services access and clarify rules for business visitors and intra-company transfers. It will not change the Companies Act, FEMA, the FDI Policy or the tax treaties, so setting up and running the Indian company works the same way. Separately, India&apos;s agreement with the EFTA states (Switzerland, Norway, Iceland and Liechtenstein) is relevant for groups based there.
        </p>

        <h2 id="gdpr" className="text-2xl font-bold text-gray-900 mt-12 mb-4">GDPR and India&apos;s DPDP Act</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Sending personal data from the EU to the Indian subsidiary is a restricted transfer under the GDPR. India has no EU adequacy decision, so groups use standard contractual clauses with a transfer impact assessment, or binding corporate rules. The Indian company must also meet India&apos;s Digital Personal Data Protection Act as its main duties start on 13 May 2027. Many EU groups also involve works councils at home before rolling out shared HR systems to India. See <Link href="/germany-to-india/data-protection-gdpr-dpdp" className="text-blue-800 font-semibold hover:underline">GDPR and DPDP for German companies</Link>.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Setup steps for any European parent</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Board decision on the structure, capital, directors and the resident director.</li>
          <li>Register extract, articles and resolution notarised, apostilled and translated where needed.</li>
          <li>Digital signatures for directors; name reservation through SPICe+.</li>
          <li>Incorporation with PAN and TAN.</li>
          <li>Bank account and capital remittance in euros.</li>
          <li>Allotment within 60 days and FC-GPR within 30 days of allotment.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          See <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link>, <Link href="/cost-of-setting-up-a-subsidiary-in-india" className="text-blue-800 font-semibold hover:underline">the cost of setting up a subsidiary</Link> and <Link href="/resident-director-services-india" className="text-blue-800 font-semibold hover:underline">resident director services</Link>.
        </p>

        <h2 id="years" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Two financial years</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Most European groups close on 31 December, while the Indian company&apos;s year runs from 1 April to 31 March. Group consolidation uses Indian management accounts to 31 December; the Indian audit runs between April and September, and the FLA return to the RBI is due by 15 July. See the <Link href="/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar</Link>.
        </p>
        <h2 id="dutch-steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A Dutch BV setting up in India, step by step</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>The BV&apos;s management board resolves to set up the Indian company and appoints its directors and an authorised signatory.</li>
          <li>Obtain a recent KVK extract and the articles, notarise the resolution and directors&apos; identity documents, and obtain apostilles from the competent Dutch court.</li>
          <li>Translate any Dutch-language documents into English, with the translation covered as required.</li>
          <li>We obtain digital signatures, reserve the name and file SPICe+; PAN and TAN arrive with the certificate of incorporation.</li>
          <li>The Indian company opens its bank account, the BV remits euros, shares are allotted within 60 days and FC-GPR follows within 30 days.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          With documents prepared in one batch, the process usually takes 4 to 6 weeks.
        </p>

        <h2 id="dutch-holding" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Using a Dutch holding company for India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          International groups have long used Dutch holding companies for investments in India, because of the Netherlands&apos; treaty network and participation exemption. Since the Multilateral Instrument added a principal purpose test to the India-Netherlands treaty, and India&apos;s courts have scrutinised holding structures more closely, a Dutch holding company needs real substance: directors who take decisions in the Netherlands, staff or outsourced functions, an office and its own records. A letterbox BV used only to hold Indian shares may lose treaty benefits on dividends and capital gains. The India-Netherlands investment treaty was terminated by India, with protection continuing only for existing investments under its sunset clause, so new investments rely on Indian law and, once negotiated, any EU-level agreement.
        </p>

        <h2 id="dutch-staff" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Posting Dutch employees to India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Under the India-Netherlands social security agreement, a Dutch employee posted to the Indian company can remain in Dutch social security for the covered period with a certificate of coverage from the Dutch authority, and is then exempt from Indian provident fund. Indian income tax applies to pay for work done in India, unless the treaty&apos;s short-stay conditions are met. Employees moving for longer periods need an employment visa, with the salary threshold of USD 25,000 a year, and FRRO registration.
        </p>

        <h2 id="other-eu" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Notes for other European countries</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Italian, Belgian, Swedish, Danish, Finnish, Irish, Austrian and Polish companies follow the same steps. Each country has its own tax treaty with India, most belong to the Apostille Convention, and several, including Belgium, Denmark, Finland, Sweden and Austria, have social security agreements with India. Swiss and Norwegian companies are outside the EU but covered by India&apos;s trade agreement with the EFTA states. Tell us where the parent is based and we will set out the treaty rates and the documents for that country.
        </p>

        <h2 id="home-tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Indian dividends are taxed at home</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Most European countries exempt dividends from a substantial shareholding in a foreign company, wholly or largely, under a participation exemption, while India withholds tax at the treaty rate when the dividend is paid. In such cases the Indian withholding is usually the final tax cost. Royalties and service fees, by contrast, are taxed at home with a credit for Indian tax. Confirm the position with the parent&apos;s home-country adviser before choosing how to bring profits back.
        </p>
        <h2 id="why-europe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why European groups set up in India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          European companies use India for three main purposes: selling into one of the world&apos;s largest and fastest-growing markets, manufacturing for India and for export, and running engineering, IT, finance and support teams for the group. Germany, the Netherlands, France and the Nordic countries have long-established groups in India, and mid-sized European firms increasingly follow, often starting with a small team that grows into a full capability centre. See <Link href="/gcc-setup-india" className="text-blue-800 font-semibold hover:underline">GCC setup in India</Link>.
        </p>

        <h2 id="costs-eu" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Fees and timeline for European parents</h2>
        <p className="text-gray-600 leading-relaxed mb-4">AU Corporate offers the best pricing with better work support, and the first consultation is free. Incorporation usually takes 4 to 6 weeks from complete documents. Ongoing accounting, tax, payroll and FEMA work is available as a package tailored to your company. See <Link href="/cost-of-setting-up-a-subsidiary-in-india" className="text-blue-800 font-semibold hover:underline">the cost of setting up a subsidiary in India</Link>.
        </p>
        <h2 id="eu-mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common mistakes European parents make</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Copying home-country employment contracts instead of drafting Indian ones under the labour codes.</li>
          <li>Sending staff without a certificate of coverage where a social security agreement exists.</li>
          <li>Remitting capital from a group treasury entity rather than the shareholder named in the documents.</li>
          <li>Assuming the trade agreement changes company or tax rules.</li>
          <li>Running transfers of personal data to India before standard contractual clauses are signed.</li>
          <li>Leaving the resident director decision until after the documents are apostilled.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Each of these is easy to avoid if it is settled before incorporation.
        </p>




        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India firm of Chartered Accountants and Company Secretaries, serving foreign companies since 2016. We handle the Indian side end to end, with the best pricing, better work support and a free first consultation.
        </p>
        <GuideCTA title={"Setting Up in India from Europe?"} description={"Tell us where the parent is based and what the Indian company will do, and we will confirm the route, documents in a free consultation."} />

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
            { label: "Income Tax Department of India: tax treaties", href: "https://www.incometax.gov.in/" },
            { label: "European Commission: EU-India trade", href: "https://policy.trade.ec.europa.eu/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Setting Up in India from Europe?"} description={"Tell us where the parent is based and what the Indian company will do, and we will confirm the route, documents in a free consultation."} />
    </main>
  )
}
