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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "at-a-glance", label: "India subsidiary at a glance" },
  { id: "approval", label: "Step one: the FDI route and why Press Note 3 does not apply" },
  { id: "why-now", label: "What has changed in 2025 and 2026" },
  { id: "sanctions", label: "Sanctions, banking and payments: the practical gate" },
  { id: "structure", label: "Which structure should a Russian company choose?" },
  { id: "steps", label: "How to incorporate, step by step" },
  { id: "money", label: "How money moves between Russia and the Indian subsidiary" },
  { id: "treaty", label: "The tax treaty, documents and what is missing" },
  { id: "tax", label: "Tax and transfer pricing: what the Russian parent should know" },
  { id: "ru-law", label: "Russian rules that follow the group into India" },
  { id: "compliance", label: "Annual compliance: what the subsidiary files" },
  { id: "people", label: "People: hiring, visas and provident fund" },
  { id: "cost", label: "What it costs and how long it takes" },
  { id: "mistakes", label: "Six mistakes Russian companies make" },
  { id: "series", label: "The full guide series" },
  { id: "help", label: "How AU Corporate can help" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "sources", label: "Sources and how this page is maintained" },
]

const seriesCards = [
  { title: "FDI rules for Russian companies", desc: "Why Press Note 3 does not apply, sector caps and real obstacles.", href: "/russia-to-india/india-fdi-rules-for-russian-companies" },
  { title: "India-Russia tax treaty, article by article", desc: "Rates, permanent establishment, share gains and the MLI.", href: "/russia-to-india/india-russia-dtaa" },
  { title: "Russian employees: tax and provident fund", desc: "No social security agreement and the day-count test.", href: "/russia-to-india/russian-employees-in-india" },
  { title: "Sanctions, banking and payments", desc: "Screening, bank due diligence and settlement channels.", href: "/russia-to-india/sanctions-and-payments-for-russian-companies" },
  { title: "Russian parent obligations", desc: "Bank of Russia thresholds, currency control and tax.", href: "/russia-to-india/russian-parent-obligations" },
  { title: "Documents: apostille and translation", desc: "Both countries are Apostille parties; translation and checklist.", href: "/russia-to-india/documents-apostille-and-translation" },
  { title: "Incorporation: step by step", desc: "Checks, SPICe+, bank account and first filings.", href: "/russia-to-india/incorporation-steps" },
  { title: "Subsidiary, LLP, branch or JV", desc: "Choose the structure with banking in mind.", href: "/russia-to-india/structure-options" },
  { title: "Funding and FEMA", desc: "Equity, ECB loans, pricing rules and Form FC-GPR.", href: "/russia-to-india/funding-and-fema" },
  { title: "Getting money out of India", desc: "Dividends at 10%, fees, royalties and loans to Russia.", href: "/russia-to-india/repatriating-profits" },
  { title: "Transfer pricing", desc: "Goods, services, royalties and documentation.", href: "/russia-to-india/transfer-pricing" },
  { title: "Hiring in India", desc: "Contracts, payroll and labour codes.", href: "/russia-to-india/hiring-in-india" },
  { title: "Data protection: 152-FZ and DPDP", desc: "Localisation, transfers and the new Indian law.", href: "/russia-to-india/data-protection-152fz-dpdp" },
  { title: "Contracts, courts and arbitration", desc: "Seats, awards, judgments and treaty status.", href: "/russia-to-india/contracts-courts-arbitration" },
  { title: "Compliance calendar", desc: "Indian dates beside the Russian parent's dates.", href: "/russia-to-india/compliance-calendar" },
  { title: "Relocating Russian staff", desc: "Visas, FRRO registration and dependants.", href: "/russia-to-india/relocate-russian-staff" },
  { title: "Selling, restructuring or closing", desc: "Options, FEMA pricing and tax on exit.", href: "/russia-to-india/exit-and-restructuring" },
  { title: "12 common mistakes", desc: "And the fix for each.", href: "/russia-to-india/common-mistakes" },
  { title: "Goods, trade and the EAEU talks", desc: "Customs, origin, sensitive sectors and procurement.", href: "/russia-to-india/goods-trade-customs-and-eaeu-fta" },
  { title: "157 FAQs on setting up an India subsidiary", desc: "From pre-incorporation to closure.", href: "/russia-to-india/faq" },
]

const faqs = [
  { q: "Can a Russian company own 100% of an Indian subsidiary?", a: "Yes, in sectors that allow 100% foreign investment under the Automatic Route. Russia does not share a land border with India, so Press Note 3 does not apply by nationality. Sector caps still apply, for example defence above 74% needs approval." },
  { q: "Does a Russian company need government approval to invest in India?", a: "Not by reason of being Russian. Approval applies only in sectors or above caps that need it for any foreign investor, or if a beneficial owner is from a land-border country. The practical hurdles are banking, sanctions and Russian outbound controls." },
  { q: "Does a Russian company need to send anyone to India to set up a subsidiary?", a: "No. Filing is online. Directors need Digital Signature Certificates, and Russian documents are notarised, apostilled and translated into English. At least one director must be resident in India." },
  { q: "How long does it take to set up an Indian subsidiary from Russia?", a: "Incorporation takes two to three weeks from complete documents. Bank onboarding for a Russian-owned company can take weeks longer, so start the banking conversation early." },
  { q: "What does it cost to set up a subsidiary in India?", a: "AU Corporate's fee for setting up the subsidiary is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about RUB 845,000 at an indicative ₹1.18 per rouble, 27 October 2026 rate). The costing depends on your plan, and it does not include sanctions, banking or approval work, which depends on the sector, structure and parties." },
  { q: "Does Press Note 3 apply to Russian companies?", a: "Not by reason of Russian nationality, because Russia does not share a land border with India. It can apply if a beneficial owner is from a land-border country." },
  { q: "Is there a tax treaty between India and Russia?", a: "Yes. It was signed on 25 March 1997 and entered into force on 11 April 1998." },
  { q: "What are the treaty rates on interest, royalties and technical fees?", a: "10% each, with 0% interest for governments, local authorities and the Central Bank." },
  { q: "Does India accept a Russian apostille?", a: "Both countries are parties to the Apostille Convention, so an apostille from the competent Russian authority is the normal route and consular legalisation is not usually required." },
  { q: "Is there a social security agreement between India and Russia?", a: "We found none. A certificate of coverage is not available, so Russian staff in India fall under the Indian provident fund rules for international workers as generally applied." },
  { q: "Does Russian data localisation affect an Indian subsidiary?", a: "It can, if the group handles personal data of Russian citizens. The initial collection and storage must be in Russia, so India should receive copies only as the law permits. Confirm with Russian counsel." },
  { q: "Can a Russian arbitral award be enforced in India?", a: "A foreign award from a convention seat can be enforced under Part II of the Arbitration and Conciliation Act, 1996 if the seat country is notified. Check the notification for your seat." },
  { q: "How can a Russian company fund its Indian subsidiary?", a: "By equity, compulsorily convertible preference shares or a compliant external commercial borrowing, always through a bank." },
  { q: "What is the withholding tax on dividends paid from India to a Russian parent?", a: "10% of the gross amount under the treaty if the Russian company is the beneficial owner and the paperwork is in place. The domestic rate is about 20% plus surcharge and cess." },
]

export default function RussiaToIndiaHubPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How to Set Up a Subsidiary in India from Russia: The 2026 Guide"
        description="How Russian companies set up a subsidiary in India: FDI route, sanctions and banking, structure, incorporation, FEMA filings, the India-Russia tax treaty, documents, staff and compliance. By a Chartered Accountant."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "How to Set Up a Subsidiary in India from Russia" },
        ]}
      />

      <GuideHero
        eyebrow="Guide for Russian companies"
        title="How to Set Up a Subsidiary in India from Russia: The 2026 Guide"
        dek="The FDI route, sanctions and banking, structure, incorporation, FEMA/RBI filings, the India-Russia treaty and the apostille for Russian companies entering India, in plain terms."
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="The short answer">
          A Russian company can set up an Indian subsidiary under India&apos;s normal FDI rules. Russia does not
          share a land border with India, so Press Note 3 (2020) does not apply to a Russian investor by
          nationality, and most sectors allow 100% investment under the Automatic Route, with approval needed
          only in sectors or above caps that need it for every foreign investor, such as defence above 74%. The
          hurdles are practical: Indian banks and counterparties screen against US, EU and UK sanctions lists,
          the funds must travel through banks acceptable on both sides, and a Russian parent has its own
          outbound investment and currency controls, with Bank of Russia approval reported to be needed above
          RUB 30 million in aggregate per counterparty from 1 July 2026. The mechanics are then standard: a
          private limited company, apostilled and translated documents, digital signatures and director IDs, one
          SPICe+ filing, a bank account and capital reported to the RBI. The 1997 tax treaty caps Indian
          withholding at 10% on dividends, interest, royalties and technical fees. There is no social security
          agreement.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="text-gray-600 leading-relaxed mb-10">
          This guide is written for the founders, finance heads and operations leads of Russian companies
          deciding how to enter India, including engineering, energy, pharmaceutical, technology and trading
          groups. It follows the order of the decisions: FDI route, sanctions and banking, structure, set-up,
          money, tax, Russian-side duties, compliance and people. Each section links to a deeper guide. Indian
          tax law changed on 1 April 2026, when the Income-tax Act, 2025 replaced the 1961 Act; where a form has
          a new name, we show the new name with the earlier one in brackets.
        </p>

        <h2 id="at-a-glance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">India subsidiary at a glance</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What to know</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Typical structure", "Private limited company under the Companies Act, 2013, wholly owned or as a joint venture"],
                ["Foreign investment route", "Automatic Route in most sectors; Press Note 3 does not apply to Russia by nationality; sector caps and approvals still apply"],
                ["Directors and shareholders", "At least two directors and two shareholders; a wholly owned subsidiary uses a nominee or group company as the second shareholder"],
                ["Resident Director", "At least one director who has stayed in India 182 days or more in the financial year"],
                ["Minimum capital", "None by law; plan 12 to 18 months of costs"],
                ["Registered office", "A physical address in India"],
                ["Documents", "Russian notary, apostille from the competent authority and certified English translation"],
                ["Russian approvals", "Bank of Russia approval above the reported RUB 30 million threshold; currency control and tax notifications"],
                ["RBI reporting", "Form FC-GPR within 30 days of share allotment; allotment within 60 days of receiving funds"],
                ["Financial year", "1 April to 31 March, which differs from the calendar year used by Russian parents"],
                ["Governing laws", "Companies Act, 2013; FEMA, 1999 and the Non-Debt Instruments Rules, 2019; the Income-tax Act, 2025; GST laws"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="approval" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Step one: the FDI route and why Press Note 3 does not apply</h2>
        <GuideAnswerBox>
          Confirm the sector and the ownership chain before anything else.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Route:</strong> most sectors allow 100% under the Automatic Route with reporting; some have caps or need approval for every foreign investor. See <Link href="/russia-to-india/india-fdi-rules-for-russian-companies" className="text-blue-800 font-semibold hover:underline">FDI rules for Russian companies</Link>.</li>
          <li><strong>Press Note 3:</strong> it covers investors from countries sharing a land border with India. Russia is not one, but a land-border beneficial owner in a Russian company can bring the investment under it.</li>
          <li><strong>Sensitive sectors:</strong> defence above 74% needs approval, and licences and security clearance apply at any level. See <Link href="/russia-to-india/goods-trade-customs-and-eaeu-fta" className="text-blue-800 font-semibold hover:underline">Goods, trade and the EAEU talks</Link>.</li>
          <li><strong>Directors:</strong> no nationality-based security clearance is required for Russian directors, but each needs a DIN and DSC.</li>
        </ul>

        <h2 id="why-now" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What has changed in 2025 and 2026</h2>
        <GuideAnswerBox>
          Trade and political ties are active, but sanctions pressure and banking constraints remain the main
          variable.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Trade talks:</strong> India and the Russia-led Eurasian Economic Union began formal free trade negotiations, reported at an advanced stage, with a trade target of USD 100 billion by 2030. No agreement is in force.</li>
          <li><strong>Mobility:</strong> a manpower mobility agreement was reported as finalised in December 2025 for Indian workers going to Russia.</li>
          <li><strong>Russian outbound rules:</strong> the Bank of Russia was reported to raise the no-approval threshold for investments in foreign companies to RUB 30 million from 1 July 2026.</li>
          <li><strong>New Indian tax law:</strong> the Income-tax Act, 2025 applies from 1 April 2026 (Section 393 for withholding, Section 392 for salary).</li>
          <li><strong>Data:</strong> India&apos;s DPDP Rules were notified on 13 November 2025, with main duties from 13 May 2027, alongside Russia&apos;s 152-FZ. See <Link href="/russia-to-india/data-protection-152fz-dpdp" className="text-blue-800 font-semibold hover:underline">Data protection: 152-FZ and DPDP</Link>.</li>
        </ul>

        <h2 id="sanctions" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sanctions, banking and payments: the practical gate</h2>
        <GuideAnswerBox>
          Indian law does not prohibit the investment, but the account and the payment route decide whether it
          works.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Screening:</strong> banks, auditors and counterparties screen against US, EU and UK lists, including ownership tests.</li>
          <li><strong>Bank onboarding:</strong> expect enhanced due diligence and possible refusals; prepare the ownership chart, source of funds and business plan.</li>
          <li><strong>Settlement:</strong> rupee vostro accounts and third currencies exist, but they are not a sanctions safe harbour.</li>
          <li><strong>Routes:</strong> the remitting bank and any intermediary must be acceptable to the Indian bank.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          Read the full guide:{" "}
          <Link href="/russia-to-india/sanctions-and-payments-for-russian-companies" className="text-blue-800 font-semibold hover:underline">Sanctions, banking and payments</Link>.
        </p>

        <GuideCountryProfile country="russia" />

        <h2 id="structure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Which structure should a Russian company choose?</h2>
        <GuideAnswerBox>
          Most choose a private limited company, either wholly owned or as a joint venture with an Indian
          partner. A branch or liaison office needs RBI approval and track-record tests and is harder to bank.
        </GuideAnswerBox>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Structure</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Best for</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Key limits</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Wholly owned subsidiary", "Sales, engineering, services, manufacturing, captive teams", "Two directors (one resident); audit and ROC compliance; sector cap"],
                ["Joint venture with an Indian partner", "Defence, energy, pharmaceuticals, engineering and local access", "Shareholders' agreement; pricing rules on transfers; sanctions clauses"],
                ["Branch office", "The parent's own activities such as trade or consultancy", "RBI approval; net worth USD 100,000 and a five-year profit record; harder to bank"],
                ["Liaison office", "Market research and liaison", "No income or invoicing; RBI approval; USD 50,000 net worth and three years"],
                ["LLP", "Partnership-style set-ups in eligible sectors", "Tax and FEMA review"],
                ["Project office", "A specific contract", "Conditions on funding and life"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 leading-relaxed mb-10">
          Full comparison:{" "}
          <Link href="/russia-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">Subsidiary, LLP, branch or JV</Link>.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to incorporate, step by step</h2>
        <GuideAnswerBox>
          Nine steps take a Russian parent from board decision to a compliant subsidiary. The sequence matters
          because each step feeds the next.
        </GuideAnswerBox>

        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Check the sector and ownership.</strong> Match your activity to the FDI Policy and map the ownership chain to the ultimate owners.</li>
          <li><strong>Plan banking and sanctions.</strong> Screen the group and agree the funding route with the Indian bank.</li>
          <li><strong>Clear the Russian side.</strong> Bank of Russia threshold or approval, and tax and currency notifications.</li>
          <li><strong>Prepare the documents.</strong> Russian notary, apostille and certified English translation.</li>
          <li><strong>Choose the Resident Director and get DSCs and DINs.</strong> An Indian hire, a relocating colleague or an adviser-nominated director.</li>
          <li><strong>Reserve the name and file SPICe+.</strong> The Registrar issues the Certificate of Incorporation with the CIN, PAN and TAN.</li>
          <li><strong>Open the bank account and send the capital.</strong> From the parent&apos;s own account through an accepted route.</li>
          <li><strong>Allot shares and report to the RBI.</strong> Allot within 60 days; file Form FC-GPR within 30 days of allotment.</li>
          <li><strong>Commence business.</strong> File INC-20A within 180 days, appoint the auditor and register for GST, provident fund and ESI.</li>
        </ol>

        <p className="text-gray-600 leading-relaxed mb-10">
          <strong>Typical timeline: 2 to 3 weeks to incorporate</strong> from complete documents; bank
          onboarding often takes longer. Deeper guides:{" "}
          <Link href="/russia-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">Incorporation: step by step</Link>{" "}
          and{" "}
          <Link href="/russia-to-india/documents-apostille-and-translation" className="text-blue-800 font-semibold hover:underline">Documents: apostille and translation</Link>.
        </p>

        <h2 id="money" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How money moves between Russia and the Indian subsidiary</h2>
        <GuideAnswerBox>
          Money goes in through shares or a loan, and comes out through dividends, fees, royalties, interest and
          loan repayments. Each route has its own tax, paperwork and banking check.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Going in:</strong> equity or compulsorily convertible instruments, priced at or above fair value, with an ECB for loans; Russian clearance and an accepted bank route first.</li>
          <li><strong>Reporting in:</strong> Form FC-GPR and the annual FLA return by 15 July.</li>
          <li><strong>Coming out:</strong> dividends at 10% under the treaty; fees, royalties and interest at 10%; Russia taxes the receipt under its own rules with credit for Indian tax.</li>
          <li><strong>Paperwork out:</strong> Form 41, Form 145, and Form 146 where a Chartered Accountant certifies the payment. Related-party payments receive closer checks.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related guides:{" "}
          <Link href="/russia-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">Funding and FEMA</Link>{" "}
          and{" "}
          <Link href="/russia-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">Getting money out of India</Link>.
        </p>

        <h2 id="treaty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The tax treaty, documents and what is missing</h2>
        <GuideAnswerBox>
          Three points matter to a Russian parent: a tax treaty exists, an apostille works because both
          countries are parties, and there is no social security agreement.
        </GuideAnswerBox>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Instrument</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What it does</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Key points</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Guide</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">India-Russia tax treaty (signed 25 March 1997, in force 11 April 1998)</th>
                  <td className="border border-gray-300 p-3">Caps Indian withholding, sets permanent establishment tests and allocates income</td>
                  <td className="border border-gray-300 p-3">Dividends, interest, royalties and fees for technical services 10%; construction PE over 12 months; MLI principal purpose test</td>
                  <td className="border border-gray-300 p-3"><Link href="/russia-to-india/india-russia-dtaa" className="text-blue-800 font-semibold hover:underline">India-Russia tax treaty, article by article</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Hague Apostille Convention</th>
                  <td className="border border-gray-300 p-3">Both Russia and India are parties</td>
                  <td className="border border-gray-300 p-3">Apostille from the competent Russian authority plus certified translation</td>
                  <td className="border border-gray-300 p-3"><Link href="/russia-to-india/documents-apostille-and-translation" className="text-blue-800 font-semibold hover:underline">Documents: apostille and translation</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Social security agreement</th>
                  <td className="border border-gray-300 p-3">None found between India and Russia</td>
                  <td className="border border-gray-300 p-3">Russian staff fall under EPF international worker rules as generally applied</td>
                  <td className="border border-gray-300 p-3"><Link href="/russia-to-india/russian-employees-in-india" className="text-blue-800 font-semibold hover:underline">Russian employees: tax and provident fund</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Free trade or investment treaty</th>
                  <td className="border border-gray-300 p-3">No free trade agreement in force; EAEU talks under way; 1994 investment treaty status to be checked</td>
                  <td className="border border-gray-300 p-3">Awards enforceable under the New York Convention; Russian judgments need a fresh suit</td>
                  <td className="border border-gray-300 p-3"><Link href="/russia-to-india/contracts-courts-arbitration" className="text-blue-800 font-semibold hover:underline">Contracts, courts and arbitration</Link></td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax and transfer pricing: what the Russian parent should know</h2>
        <GuideAnswerBox>
          An Indian subsidiary pays Indian tax on its Indian profits, and the parent&apos;s exposure comes from
          payments, people, pricing and the evidence of substance.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Transfer pricing:</strong> Indian rules apply to Russian related parties; goods, services, royalties and loans need documentation.</li>
          <li><strong>Withholding Tax:</strong> payments to the Russian parent suffer Indian withholding under Section 393 of the Income-tax Act, 2025, reduced by the treaty where the documents are in place.</li>
          <li><strong>Permanent establishment:</strong> a construction or installation project over 12 months, or a dependent agent, can create one; the treaty has no separate services PE day count.</li>
          <li><strong>Russian result:</strong> worldwide taxation with credit for foreign tax; your Russian adviser must confirm the position.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related guides:{" "}
          <Link href="/russia-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">Transfer pricing</Link>,{" "}
          <Link href="/russia-to-india/india-russia-dtaa" className="text-blue-800 font-semibold hover:underline">India-Russia tax treaty, article by article</Link>{" "}
          and{" "}
          <Link href="/russia-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">Getting money out of India</Link>.
        </p>

        <h2 id="ru-law" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Russian rules that follow the group into India</h2>
        <GuideAnswerBox>
          Russian rules shape what the parent can send and what it must report.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Outbound investment:</strong> Bank of Russia approval above the reported threshold, and currency control rules.</li>
          <li><strong>Tax:</strong> profit tax on worldwide income with foreign tax credit; controlled foreign company rules; notifications of foreign participation.</li>
          <li><strong>Data:</strong> 152-FZ localisation and cross-border transfer notification.</li>
          <li><strong>Sanctions environment:</strong> counter-measures and third-country sanctions affect banks, insurers and counterparties.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          See{" "}
          <Link href="/russia-to-india/russian-parent-obligations" className="text-blue-800 font-semibold hover:underline">Russian parent obligations</Link>{" "}
          and{" "}
          <Link href="/russia-to-india/data-protection-152fz-dpdp" className="text-blue-800 font-semibold hover:underline">Data protection: 152-FZ and DPDP</Link>.
        </p>

        <h2 id="compliance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Annual compliance: what the subsidiary files</h2>
        <GuideAnswerBox>
          The subsidiary has monthly, quarterly and annual filings on a 31 March year end, which differs from
          the parent&apos;s calendar year.
        </GuideAnswerBox>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Filing</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Frequency</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical timing</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Authority</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Statutory audit and financial statements", "Annual", "Before the AGM", "Companies Act"],
                ["Annual General Meeting", "Annual", "Within 6 months of the year end", "Companies Act"],
                ["AOC-4 and MGT-7", "Annual", "30 and 60 days after the AGM", "MCA"],
                ["Income tax return and Form 48", "Annual", "By the due date; transfer pricing cases later", "Income-tax Act, 2025"],
                ["Advance tax", "Quarterly", "15 June, 15 September, 15 December, 15 March", "Income-tax Act, 2025"],
                ["TDS deposit and returns", "Monthly and quarterly", "7th of the next month; quarterly returns", "Income-tax Act, 2025"],
                ["GST returns", "Monthly or quarterly", "11th and 20th", "GST"],
                ["Provident fund and ESI", "Monthly", "By the 15th", "EPFO, ESIC"],
                ["FLA return", "Annual", "By 15 July", "RBI"],
                ["Form FC-GPR", "Per share issue", "Within 30 days of allotment", "RBI"],
                ["Sanctions and KYC refresh", "Quarterly and on change", "Ongoing", "Bank and internal"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                  <td className="border border-gray-300 p-3">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-4 text-sm text-gray-700">
          <strong>Note on the new tax law.</strong> The Income-tax Act, 2025 and the Income-tax Rules, 2026
          apply from 1 April 2026, so form names and sections have changed. Confirm each year.
        </div>

        <p className="text-gray-600 leading-relaxed mb-10">
          The maintained version, with the Russian dates beside it, is in the{" "}
          <Link href="/russia-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">Compliance calendar</Link>.
        </p>

        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">People: hiring, visas and provident fund</h2>
        <GuideAnswerBox>
          Indian employment is contract and statute driven. Russian staff on assignment need the right visa, a
          tax plan and a provident fund budget, because there is no social security agreement.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Hiring locally:</strong> provident fund, ESI, gratuity, the labour codes and state rules. See <Link href="/russia-to-india/hiring-in-india" className="text-blue-800 font-semibold hover:underline">Hiring in India</Link>.</li>
          <li><strong>Sending Russian staff:</strong> visa category, registration and day counts. See <Link href="/russia-to-india/relocate-russian-staff" className="text-blue-800 font-semibold hover:underline">Relocating Russian staff</Link> and <Link href="/russia-to-india/russian-employees-in-india" className="text-blue-800 font-semibold hover:underline">Russian employees: tax and provident fund</Link>.</li>
          <li><strong>Records:</strong> keep wage, provident fund and contract records complete for inspections.</li>
        </ul>

        <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What it costs and how long it takes</h2>
        <GuideAnswerBox>
          Cost has three parts: one-time setup, recurring compliance and variable items such as banking support,
          transfer pricing and disputes.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>One-time:</strong> government fees and stamp duty (by state and authorised capital), professional fees, the valuation, document authentication and translation.</li>
          <li><strong>Recurring:</strong> accounting, statutory audit, GST, TDS, payroll and ROC filings.</li>
          <li><strong>Variable:</strong> transfer pricing documentation, tax notices, secondments, visas, sanctions advice and legal work.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Indicative setup fee:</strong> AU Corporate&apos;s fee for setting up the subsidiary is USD
          750 to USD 1,000 for share capital up to ₹10 lakh (about RUB 845,000 at an indicative ₹1.18 per
          rouble, 27 October 2026 rate). The costing depends on your plan, and it does not include sanctions,
          banking or approval work, which depends on the sector, structure and parties.
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-between bg-[#fffbe6] border border-gold-dark rounded-xl p-5 mb-10">
          <div>
            <strong className="block text-gray-900">Get a costing for your plan</strong>
            <p className="text-sm text-gray-600 mt-0.5">Tell us what you plan to set up and we will prepare a costing and book a call.</p>
          </div>
          <InquiryTrigger className="inline-block rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-[#081a42] hover:bg-gold-dark transition-colors whitespace-nowrap">
            Discuss your costing with our team
          </InquiryTrigger>
        </div>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Six mistakes Russian companies make</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Treating the FDI rule as the only gate.</strong> Banking and sanctions decide whether the investment works.</li>
          <li><strong>Remitting before Russian clearance.</strong> Check the Bank of Russia threshold and approval first.</li>
          <li><strong>Using a bank the Indian bank will not accept.</strong> Pre-clear the route.</li>
          <li><strong>Missing the 60-day and 30-day RBI clocks.</strong> Late reporting costs fees or compounding.</li>
          <li><strong>Claiming the 10% rate without paperwork.</strong> Form 41 and the residency certificate come first.</li>
          <li><strong>Inconsistent names and untranslated documents.</strong> Indian systems reject near matches.</li>
        </ol>

        <p className="text-gray-600 leading-relaxed mb-10">
          More detail:{" "}
          <Link href="/russia-to-india/common-mistakes" className="text-blue-800 font-semibold hover:underline">12 common mistakes</Link>.
        </p>

        <h2 id="series" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The full guide series</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={seriesCards} />
        </div>

        <h2 id="help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate can help</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India advisory firm, established in 2016, that supports foreign companies
          at every stage of an Indian subsidiary. We work with Russian finance teams and advisers so that the
          Indian and Russian positions agree.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { n: "1", title: "Set up", desc: "Choose the structure and incorporate.", chips: ["Entity structuring", "Wholly owned subsidiary", "SPICe+ incorporation", "Bank account support"], href: "/india-subsidiary-registration" },
            { n: "2", title: "Fund and FEMA", desc: "Bring capital in and report it.", chips: ["FEMA", "FC-GPR", "Share valuation", "ECB"] },
            { n: "3", title: "Operate", desc: "Books, payroll and indirect taxes, with a Russian reporting pack.", chips: ["Accounting and bookkeeping", "GST", "Withholding Tax", "Payroll", "Monthly MIS", "Russian consolidation support"], href: "/accounting-reporting-audit-support" },
            { n: "4", title: "People and relocation", desc: "Hire, pay and relocate your team.", chips: ["Employer of Record", "HR services", "Expat visa", "Visa and EPF planning"], href: "/payroll-expat-services" },
            { n: "5", title: "Repatriate funds", desc: "Move money to Russia with the paperwork and treaty position in order.", chips: ["Forms 145 and 146", "India-Russia treaty relief", "Dividends", "Royalties and service fees", "Intercompany agreements"], highlight: true },
            { n: "6", title: "Tax and transfer pricing", desc: "Keep the India position defensible.", chips: ["Direct and indirect tax", "Transfer pricing", "Form 48", "PE review", "CbCR filing (parent-prepared report)"], href: "/corporate-tax-gst-transfer-pricing" },
            { n: "7", title: "Audit and assurance", desc: "Satisfy Indian law and your Russian auditors.", chips: ["Statutory audit", "Internal audit", "Internal financial controls", "GST and tax audit"], href: "/accounting-reporting-audit-support" },
            { n: "8", title: "Legal, disputes and arbitration", desc: "Defend your position and protect contracts.", chips: ["Tax litigation", "Arbitration support", "Agreement drafting and vetting"], href: "/russia-to-india/contracts-courts-arbitration" },
            { n: "9", title: "Restructure and exit", desc: "Scale, reorganise or leave.", chips: ["Restructuring", "Mergers and acquisitions", "Due diligence", "Valuation", "Winding up"], href: "/fema-rbi-compliance" },
          ].map((stage) => (
            <div key={stage.n} className={`relative rounded-xl border p-5 bg-white ${stage.highlight ? "border-2 border-gold bg-[#fffbe6]" : ""}`}>
              <span className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#081a42] text-gold text-xs font-bold">{stage.n}</span>
              <h3 className="font-bold text-gray-900 mb-1 pr-8">{stage.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{stage.desc}</p>
              <ul className="flex flex-wrap gap-1.5 mb-2">
                {stage.chips.map((chip) => (
                  <li key={chip} className="text-xs font-semibold bg-secondary/50 text-[#081a42] rounded-full px-2.5 py-1">{chip}</li>
                ))}
              </ul>
              {stage.href && (
                <Link href={stage.href} className="text-sm font-bold text-blue-800 hover:underline">View service &rarr;</Link>
              )}
            </div>
          ))}
        </div>

        <p className="text-gray-600 leading-relaxed mb-10">
          <strong>Scope note:</strong> we handle the Indian side. Russian tax, Russian company law, currency
          control and sanctions advice for your own jurisdictions come from your Russian and sanctions advisers,
          and we coordinate with them.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.nalog.gov.ru/eng/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Federal Tax Service (Russia)</a>,{" "}
          <a href="https://www.cbr.ru/eng/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Bank of Russia</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/russia-to-india" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/russia-to-india/faq"
          seeAllLabel="See all 157 questions"
          seeAllDescription="Plain answers from pre-incorporation to closure, including the FDI route, sanctions, the treaty, documents, staff, data and exit."
        />

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources and how this page is maintained</h2>
        <GuideSources
          note="This guide is based on Press Note 3 (2020) and its 2026 amendments, the Companies Act, 2013, FEMA and the Non-Debt Instruments Rules, 2019, the Consolidated FDI Policy, the Income-tax Act, 2025, the India-Russia tax treaty and the MLI, reported Bank of Russia rules, and India's Digital Personal Data Protection Rules, 2025. Rules change often. We review this page at least quarterly and show the review date at the top."
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Bank of Russia", href: "https://www.cbr.ru/eng/" },
            { label: "Federal Tax Service (Russia)", href: "https://www.nalog.gov.ru/eng/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Russian
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Planning an Indian Subsidiary from Russia?"
        description="Tell us about your company, your sector and your timeline, and we'll reply with the FDI route, a banking plan, a recommended structure and a compliance overview."
      />
    </main>
  )
}
