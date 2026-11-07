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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "at-a-glance", label: "India subsidiary at a glance" },
  { id: "approval", label: "Step one: government approval under Press Note 3" },
  { id: "why-now", label: "What has changed in 2025 and 2026" },
  { id: "structure", label: "Which structure should a Hong Kong company choose?" },
  { id: "steps", label: "How to incorporate, step by step" },
  { id: "money", label: "How money moves between Hong Kong and the Indian subsidiary" },
  { id: "treaty", label: "The tax treaty, documents and what is missing" },
  { id: "tax", label: "Tax and transfer pricing: what the Hong Kong parent should know" },
  { id: "hk-law", label: "Hong Kong rules that follow the group into India" },
  { id: "compliance", label: "Annual compliance: what the subsidiary files" },
  { id: "people", label: "People: hiring, visas and provident fund" },
  { id: "cost", label: "What it costs and how long it takes" },
  { id: "mistakes", label: "Six mistakes Hong Kong companies make" },
  { id: "series", label: "The full guide series" },
  { id: "help", label: "How AU Corporate can help" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "sources", label: "Sources and how this page is maintained" },
]

const seriesCards = [
  { title: "Press Note 3: government approval", desc: "Why Hong Kong-registered investors are reported to need approval.", href: "/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" },
  { title: "India-Hong Kong tax treaty, article by article", desc: "Rates, permanent establishment, share gains and the principal purpose test.", href: "/hong-kong-to-india/india-hong-kong-dtaa" },
  { title: "Hong Kong employees: tax, EPF and MPF", desc: "No social security agreement and the day-count test.", href: "/hong-kong-to-india/hong-kong-employees-in-india" },
  { title: "Hong Kong parent obligations", desc: "Company secretary, registers, profits tax and FSIE.", href: "/hong-kong-to-india/hong-kong-parent-obligations" },
  { title: "Documents: notary and apostille", desc: "Hong Kong apostille, legalisation fallback and checklist.", href: "/hong-kong-to-india/documents-hong-kong-apostille" },
  { title: "Incorporation: step by step", desc: "Approval, SPICe+, bank account and first filings.", href: "/hong-kong-to-india/incorporation-steps" },
  { title: "Subsidiary, LLP, branch or JV", desc: "Choose the structure with approval in mind.", href: "/hong-kong-to-india/structure-options" },
  { title: "Funding and FEMA", desc: "Equity, ECB loans, pricing rules and Form FC-GPR.", href: "/hong-kong-to-india/funding-and-fema" },
  { title: "Getting money out of India", desc: "Dividends at 5%, fees, royalties and loans to Hong Kong.", href: "/hong-kong-to-india/repatriating-profits" },
  { title: "Transfer pricing", desc: "Hubs, re-invoicing, services and documentation.", href: "/hong-kong-to-india/transfer-pricing" },
  { title: "Hiring in India", desc: "Contracts, payroll and labour codes.", href: "/hong-kong-to-india/hiring-in-india" },
  { title: "Data protection: PDPO and DPDP", desc: "Two regimes and cross-border transfers.", href: "/hong-kong-to-india/data-protection-pdpo-dpdp" },
  { title: "Contracts, courts and arbitration", desc: "HKIAC, Section 44A and the New York Convention.", href: "/hong-kong-to-india/contracts-courts-arbitration" },
  { title: "Compliance calendar", desc: "Indian dates beside the Hong Kong parent's dates.", href: "/hong-kong-to-india/compliance-calendar" },
  { title: "Hong Kong as a regional hub", desc: "Holding, trading and treasury structures and substance.", href: "/hong-kong-to-india/hong-kong-as-regional-hub-for-india" },
  { title: "Relocating Hong Kong staff", desc: "Visas, registration and dependants.", href: "/hong-kong-to-india/relocate-hong-kong-staff" },
  { title: "Selling, restructuring or closing", desc: "Options, FEMA pricing and tax on exit.", href: "/hong-kong-to-india/exit-and-restructuring" },
  { title: "12 common mistakes", desc: "And the fix for each.", href: "/hong-kong-to-india/common-mistakes" },
  { title: "Goods via Hong Kong", desc: "Origin, customs value and procurement limits.", href: "/hong-kong-to-india/goods-via-hong-kong-origin-customs-and-procurement" },
  { title: "157 FAQs on setting up an India subsidiary", desc: "From pre-incorporation to closure.", href: "/hong-kong-to-india/faq" },
]

const faqs = [
  { q: "Can a Hong Kong company own 100% of an Indian subsidiary?", a: "Yes, in sectors that allow 100% foreign investment, but a Hong Kong-registered investor is reported to need the Government of India's prior approval under Press Note 3, because India treats Hong Kong with China. The sector cap still applies." },
  { q: "Did the 2026 changes remove the need for approval for Hong Kong investors?", a: "No, as reported. After the March 2026 Cabinet decision a DPIIT official was reported to say that firms registered in China and Hong Kong still need prior approval. The 10% passive-ownership easing is for investors from non-land-border countries." },
  { q: "Does a Hong Kong company need to send anyone to India to set up a subsidiary?", a: "No. Filing is online. Directors need Digital Signature Certificates, and Hong Kong documents are notarised and apostilled or legalised. A director who is a land-border country citizen needs Ministry of Home Affairs clearance first." },
  { q: "How long does it take to set up an Indian subsidiary from Hong Kong?", a: "Incorporation takes two to three weeks from complete documents, but the Press Note 3 approval comes first and can take months, except for a reported 60-day target in specified manufacturing sectors." },
  { q: "What does it cost to set up a subsidiary in India?", a: "AU Corporate's fee for setting up the subsidiary is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about HK$83,000 at an indicative ₹12.07 per Hong Kong dollar, 15 October 2026 rate). The costing depends on your plan, and it does not include the Press Note 3 approval work, which depends on the sector and structure." },
  { q: "My Hong Kong company is owned by non-Chinese shareholders. Do I still need approval?", a: "The reported government position is that Hong Kong-registered firms need approval. Take written advice from Indian counsel on your facts before assuming otherwise." },
  { q: "Is there a tax treaty between India and Hong Kong?", a: "Yes. It was signed on 19 March 2018, entered into force on 30 November 2018 and applies in India from 1 April 2019." },
  { q: "What are the treaty rates on interest, royalties and technical fees?", a: "10% of the gross amount for each, with 0% on interest paid to the government, the RBI and designated bodies such as the HKMA." },
  { q: "Does India accept a Hong Kong apostille?", a: "Hong Kong applies the Apostille Convention in its own right and India is a party, so it is generally expected to work. Because India objected to China's accession, confirm with the Indian mission or the receiving authority before relying on it." },
  { q: "Is there a social security agreement between India and Hong Kong?", a: "No. A certificate of coverage is not available, so Hong Kong staff in India fall under the Indian provident fund rules for international workers as generally applied." },
  { q: "Does the PDPO apply to my Indian subsidiary?", a: "The PDPO applies to data users who control the collection, holding, processing or use of data in or from Hong Kong. Indian processing for a Hong Kong group still needs contractual protections. Take Hong Kong advice on scope." },
  { q: "Can a Hong Kong arbitral award be enforced in India?", a: "Yes. India has notified Hong Kong for the New York Convention route, so an award with a Hong Kong seat is enforced as a foreign award, subject to the limited grounds for refusal." },
  { q: "How can a Hong Kong company fund its Indian subsidiary?", a: "By equity, compulsorily convertible preference shares or a compliant external commercial borrowing, always through a bank." },
  { q: "What is the withholding tax on dividends paid from India to a Hong Kong parent?", a: "5% of the gross amount under the treaty if the Hong Kong company is the beneficial owner and the paperwork is in place. The domestic rate on dividends to non-residents is about 20% plus surcharge and cess." },
]

export default function HongKongToIndiaHubPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How to Set Up a Subsidiary in India from Hong Kong: The 2026 Guide"
        description="How Hong Kong companies set up a subsidiary in India: Press Note 3 approval, structure, incorporation, FEMA filings, the India-Hong Kong tax treaty, documents, staff and compliance. By a Chartered Accountant."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "How to Set Up a Subsidiary in India from Hong Kong" },
        ]}
      />

      <GuideHero
        eyebrow="Guide for Hong Kong companies"
        title="How to Set Up a Subsidiary in India from Hong Kong: The 2026 Guide"
        dek="Structure, incorporation, Press Note 3 approval, FEMA/RBI filings, the India-Hong Kong treaty and the Hong Kong apostille for Hong Kong companies entering India, in plain terms."
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="The short answer">
          A Hong Kong company can set up an Indian subsidiary, but should plan for government approval.
          India&apos;s Press Note 3 (2020) requires prior approval for investors from countries sharing a land
          border with India, and India treats Hong Kong together with China: after the March 2026 Cabinet
          easing, a DPIIT official was reported to say that firms registered in China and Hong Kong still need
          prior approval. Take written Indian advice on your exact ownership and structure. Once approval is in
          hand, the mechanics are standard: a private limited company, notarised and apostilled documents
          (confirm acceptance with the Indian mission), digital signatures and director IDs, one SPICe+ filing,
          a bank account, and capital remitted from Hong Kong and reported to the RBI. The 2018 tax treaty caps
          Indian withholding at 5% on dividends and 10% on interest, royalties and technical fees. There is no
          social security agreement.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="text-gray-600 leading-relaxed mb-10">
          This guide is written for the founders, finance heads and operations leads of Hong Kong companies
          deciding how to enter India, including trading groups, regional headquarters, manufacturers and
          technology firms. It follows the order of the decisions: approval, structure, set-up, money, tax, Hong
          Kong-side duties, compliance and people. Each section links to a deeper guide. Indian tax law changed
          on 1 April 2026, when the Income-tax Act, 2025 replaced the 1961 Act; where a form has a new name, we
          show the new name with the earlier one in brackets.
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
                ["Foreign investment route", "Government route: prior approval under Press Note 3 is expected for a Hong Kong-registered investor; the sector cap still applies"],
                ["Directors and shareholders", "At least two directors and two shareholders; a wholly owned subsidiary uses a nominee or group company as the second shareholder"],
                ["Resident Director", "At least one director who has stayed in India 182 days or more in the financial year"],
                ["Minimum capital", "None by law; plan 12 to 18 months of costs"],
                ["Registered office", "A physical address in India"],
                ["Documents", "Hong Kong notary, High Court apostille (confirm acceptance with the Indian mission), consular legalisation as fallback; English documents"],
                ["Hong Kong approvals", "None for outbound investment; board resolution, registers and tax review"],
                ["RBI reporting", "Form FC-GPR within 30 days of share allotment; allotment within 60 days of receiving funds"],
                ["Financial year", "1 April to 31 March, which may differ from the Hong Kong parent's year end"],
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

        <h2 id="approval" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Step one: government approval under Press Note 3</h2>
        <GuideAnswerBox>
          Approval comes before incorporation and funding. Plan the project around it.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Who needs it:</strong> an investor from a land-border country, or with beneficial owners from one, and, as reported, a company registered in Hong Kong. See <Link href="/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" className="text-blue-800 font-semibold hover:underline">Press Note 3: government approval</Link>.</li>
          <li><strong>What the 2026 easing does:</strong> Cabinet approved amendments on 10 March 2026. A non-land-border investor with up to 10% passive, non-controlling land-border beneficial ownership can use the Automatic Route with reporting. The government statement reported afterwards said Chinese and Hong Kong-registered firms still need approval.</li>
          <li><strong>Timeline:</strong> approvals have taken months; a 60-day target is reported for specified manufacturing sectors such as capital goods, electronic components, polysilicon and ingot-wafer.</li>
          <li><strong>Hub structures:</strong> if a Hong Kong company will hold the Indian subsidiary, build the approval time into the plan. See <Link href="/hong-kong-to-india/hong-kong-as-regional-hub-for-india" className="text-blue-800 font-semibold hover:underline">Hong Kong as a regional hub</Link> and <Link href="/hong-kong-to-india/goods-via-hong-kong-origin-customs-and-procurement" className="text-blue-800 font-semibold hover:underline">Goods via Hong Kong</Link>.</li>
        </ul>

        <h2 id="why-now" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What has changed in 2025 and 2026</h2>
        <GuideAnswerBox>
          The Indian rules for land-border investors are being rewritten, the tax law has been replaced, and two
          data regimes now apply to Hong Kong-India groups.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Press Note 3 easing:</strong> the March 2026 amendments, with the FEMA rules reported as amended on 1 May 2026, add a beneficial-owner definition and a 10% test. Hong Kong-registered firms were reported to be outside the relief.</li>
          <li><strong>New Indian tax law:</strong> the Income-tax Act, 2025 applies from 1 April 2026, so sections and form names have changed (Section 393 for withholding, Section 392 for salary).</li>
          <li><strong>Labour codes:</strong> reported in force from 21 November 2025; confirm state rules.</li>
          <li><strong>Data:</strong> India&apos;s DPDP Rules were notified on 13 November 2025, with main duties from 13 May 2027, alongside Hong Kong&apos;s PDPO. See <Link href="/hong-kong-to-india/data-protection-pdpo-dpdp" className="text-blue-800 font-semibold hover:underline">Data protection: PDPO and DPDP</Link>.</li>
          <li><strong>Hong Kong tax:</strong> the foreign-sourced income exemption regime and the Hong Kong Minimum Top-up Tax affect how a Hong Kong parent receives Indian income; ask your Hong Kong adviser.</li>
        </ul>

        <GuideCountryProfile country="hongkong" />

        <h2 id="structure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Which structure should a Hong Kong company choose?</h2>
        <GuideAnswerBox>
          Most choose a private limited company, either wholly owned or as a joint venture with an Indian
          partner. A branch or liaison office needs RBI approval and track-record tests.
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
                ["Wholly owned subsidiary", "Sales, services, trading, captive teams", "Approval for a Hong Kong-registered investor; two directors (one resident); audit and ROC compliance"],
                ["Joint venture with an Indian partner", "Manufacturing, distribution and local access", "Shareholders' agreement must match the approval; pricing rules on transfers"],
                ["Branch office", "The parent's own activities such as trade or consultancy", "RBI approval; net worth USD 100,000 and a five-year profit record"],
                ["Liaison office", "Market research and liaison", "No income or invoicing; RBI approval; USD 50,000 net worth and three years"],
                ["LLP", "Partnership-style set-ups in eligible sectors", "Tax and FEMA review; approval still applies"],
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
          <Link href="/hong-kong-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">Subsidiary, LLP, branch or JV</Link>.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to incorporate, step by step</h2>
        <GuideAnswerBox>
          Nine steps take a Hong Kong parent from board decision to a compliant subsidiary. The sequence matters
          because each step feeds the next.
        </GuideAnswerBox>

        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Check the sector and structure.</strong> Match your activity to the FDI Policy for the cap, and map the ownership chain to the ultimate owners.</li>
          <li><strong>Apply for Press Note 3 approval</strong> and prepare the Hong Kong board resolution in parallel.</li>
          <li><strong>Prepare and authenticate the Hong Kong documents.</strong> Certificate of incorporation, business registration, articles, resolution and identity papers: notary, apostille, and consular legalisation if refused.</li>
          <li><strong>Choose the Resident Director.</strong> An Indian hire, a relocating colleague or an adviser-nominated director.</li>
          <li><strong>Get DSCs and DINs.</strong> Digital signatures and director IDs for each proposed director.</li>
          <li><strong>Reserve the name and file SPICe+.</strong> The Registrar issues the Certificate of Incorporation with the CIN, PAN and TAN.</li>
          <li><strong>Open the bank account and send the capital.</strong> From the parent&apos;s own account, after the Indian approval.</li>
          <li><strong>Allot shares and report to the RBI.</strong> Allot within 60 days; file Form FC-GPR within 30 days of allotment.</li>
          <li><strong>Commence business.</strong> File INC-20A within 180 days, appoint the auditor and register for GST, provident fund and ESI.</li>
        </ol>

        <p className="text-gray-600 leading-relaxed mb-10">
          <strong>Typical timeline: 2 to 3 weeks to incorporate</strong> from complete documents, after the
          approval. Deeper guides:{" "}
          <Link href="/hong-kong-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">Incorporation: step by step</Link>{" "}
          and{" "}
          <Link href="/hong-kong-to-india/documents-hong-kong-apostille" className="text-blue-800 font-semibold hover:underline">Documents: notary and apostille</Link>.
        </p>

        <h2 id="money" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How money moves between Hong Kong and the Indian subsidiary</h2>
        <GuideAnswerBox>
          Money goes in through shares or a loan, and comes out through dividends, fees, royalties, interest and
          loan repayments. Each route has its own tax and paperwork.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Going in:</strong> equity or compulsorily convertible instruments, priced at or above fair value, with an ECB for loans. Hong Kong has no exchange controls.</li>
          <li><strong>Reporting in:</strong> Form FC-GPR and the annual FLA return by 15 July.</li>
          <li><strong>Coming out:</strong> dividends at 5% under the treaty; fees, royalties and interest at up to 10%; Hong Kong generally does not tax Indian dividends, subject to the foreign-sourced income rules.</li>
          <li><strong>Paperwork out:</strong> Form 41, Form 145, and Form 146 where a Chartered Accountant certifies the payment. Related-party payments receive closer checks.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related guides:{" "}
          <Link href="/hong-kong-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">Funding and FEMA</Link>{" "}
          and{" "}
          <Link href="/hong-kong-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">Getting money out of India</Link>.
        </p>

        <h2 id="treaty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The tax treaty, documents and what is missing</h2>
        <GuideAnswerBox>
          Three points matter to a Hong Kong parent: a tax treaty exists, an apostille is expected to work but
          should be confirmed, and there is no social security agreement.
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
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">India-Hong Kong tax treaty (signed 19 March 2018, in force 30 November 2018)</th>
                  <td className="border border-gray-300 p-3">Caps Indian withholding, sets permanent establishment tests and allocates income</td>
                  <td className="border border-gray-300 p-3">Dividends 5%; interest, royalties and fees for technical services 10%; service PE over 183 days; principal purpose test</td>
                  <td className="border border-gray-300 p-3"><Link href="/hong-kong-to-india/india-hong-kong-dtaa" className="text-blue-800 font-semibold hover:underline">India-Hong Kong tax treaty, article by article</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Hague Apostille Convention</th>
                  <td className="border border-gray-300 p-3">Hong Kong applies it separately; India is a party; India objected to China&apos;s accession</td>
                  <td className="border border-gray-300 p-3">Hong Kong apostille expected to work; confirm with the Indian mission</td>
                  <td className="border border-gray-300 p-3"><Link href="/hong-kong-to-india/documents-hong-kong-apostille" className="text-blue-800 font-semibold hover:underline">Documents: notary and apostille</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Social security agreement</th>
                  <td className="border border-gray-300 p-3">None between India and Hong Kong</td>
                  <td className="border border-gray-300 p-3">Hong Kong staff fall under EPF international worker rules as generally applied</td>
                  <td className="border border-gray-300 p-3"><Link href="/hong-kong-to-india/hong-kong-employees-in-india" className="text-blue-800 font-semibold hover:underline">Hong Kong employees: tax, EPF and MPF</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Free trade or investment treaty</th>
                  <td className="border border-gray-300 p-3">No free trade agreement; no investment protection agreement was found</td>
                  <td className="border border-gray-300 p-3">Hong Kong judgments enforceable in India under Section 44A; awards under the New York Convention</td>
                  <td className="border border-gray-300 p-3"><Link href="/hong-kong-to-india/contracts-courts-arbitration" className="text-blue-800 font-semibold hover:underline">Contracts, courts and arbitration</Link></td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax and transfer pricing: what the Hong Kong parent should know</h2>
        <GuideAnswerBox>
          An Indian subsidiary pays Indian tax on its Indian profits, and the parent&apos;s exposure comes from
          payments, people, pricing and the substance of any Hong Kong hub.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Transfer pricing:</strong> Indian rules apply to Hong Kong related parties; trading and re-invoicing hubs need real functions.</li>
          <li><strong>Withholding Tax:</strong> payments to the Hong Kong parent suffer Indian withholding under Section 393 of the Income-tax Act, 2025, reduced by the treaty where the documents are in place.</li>
          <li><strong>Permanent establishment:</strong> Hong Kong staff days and contract authority can create a taxable presence; service PE over 183 days in any 12-month period.</li>
          <li><strong>Hong Kong result:</strong> territorial taxation; foreign-sourced income exemption rules for group members; your Hong Kong adviser must confirm.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related guides:{" "}
          <Link href="/hong-kong-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">Transfer pricing</Link>,{" "}
          <Link href="/hong-kong-to-india/india-hong-kong-dtaa" className="text-blue-800 font-semibold hover:underline">India-Hong Kong tax treaty, article by article</Link>{" "}
          and{" "}
          <Link href="/hong-kong-to-india/hong-kong-as-regional-hub-for-india" className="text-blue-800 font-semibold hover:underline">Hong Kong as a regional hub</Link>.
        </p>

        <h2 id="hk-law" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Hong Kong rules that follow the group into India</h2>
        <GuideAnswerBox>
          Hong Kong imposes fewer outbound controls than most places, but company law, tax and data rules still
          travel with the group.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>No outbound approval:</strong> no exchange controls; a board resolution and the constitution govern the decision.</li>
          <li><strong>Corporate housekeeping:</strong> company secretary, registers including the significant controllers register, annual return and audit.</li>
          <li><strong>Tax:</strong> profits tax is territorial; the foreign-sourced income exemption regime and Pillar Two top-up tax can apply to groups.</li>
          <li><strong>Data:</strong> the PDPO applies to personal data handled from Hong Kong.</li>
          <li><strong>Pensions:</strong> MPF may continue for Hong Kong employees sent to India.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          See{" "}
          <Link href="/hong-kong-to-india/hong-kong-parent-obligations" className="text-blue-800 font-semibold hover:underline">Hong Kong parent obligations</Link>{" "}
          and{" "}
          <Link href="/hong-kong-to-india/data-protection-pdpo-dpdp" className="text-blue-800 font-semibold hover:underline">Data protection: PDPO and DPDP</Link>.
        </p>

        <h2 id="compliance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Annual compliance: what the subsidiary files</h2>
        <GuideAnswerBox>
          The subsidiary has monthly, quarterly and annual filings on a 31 March year end.
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
                ["Approval conditions", "As stated", "Per the Press Note 3 approval letter", "DPIIT / RBI"],
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
          The maintained version, with the Hong Kong dates beside it, is in the{" "}
          <Link href="/hong-kong-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">Compliance calendar</Link>.
        </p>

        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">People: hiring, visas and provident fund</h2>
        <GuideAnswerBox>
          Indian employment is contract and statute driven. Hong Kong staff on assignment need the right visa, a
          tax plan and a provident fund budget, because there is no social security agreement.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Hiring locally:</strong> provident fund, ESI, gratuity, the labour codes and state rules. See <Link href="/hong-kong-to-india/hiring-in-india" className="text-blue-800 font-semibold hover:underline">Hiring in India</Link>.</li>
          <li><strong>Sending Hong Kong staff:</strong> visa category, registration and day counts. See <Link href="/hong-kong-to-india/relocate-hong-kong-staff" className="text-blue-800 font-semibold hover:underline">Relocating Hong Kong staff</Link> and <Link href="/hong-kong-to-india/hong-kong-employees-in-india" className="text-blue-800 font-semibold hover:underline">Hong Kong employees: tax, EPF and MPF</Link>.</li>
          <li><strong>Records:</strong> keep wage, provident fund and contract records complete for inspections.</li>
        </ul>

        <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What it costs and how long it takes</h2>
        <GuideAnswerBox>
          Cost has three parts: one-time setup, recurring compliance and variable items such as approvals,
          transfer pricing and disputes.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>One-time:</strong> government fees and stamp duty (by state and authorised capital), professional fees, the valuation, Hong Kong document authentication, and the approval application.</li>
          <li><strong>Recurring:</strong> accounting, statutory audit, GST, TDS, payroll and ROC filings.</li>
          <li><strong>Variable:</strong> transfer pricing documentation, tax notices, secondments, visas and legal work.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Indicative setup fee:</strong> AU Corporate&apos;s fee for setting up the subsidiary is USD
          750 to USD 1,000 for share capital up to ₹10 lakh (about HK$83,000 at an indicative ₹12.07 per Hong
          Kong dollar, 15 October 2026 rate). The costing depends on your plan, and it does not include the
          Press Note 3 approval work, which depends on the sector and structure.
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

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Six mistakes Hong Kong companies make</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Assuming the Automatic Route.</strong> Hong Kong-registered investors are reported to need approval; funding first is a FEMA contravention.</li>
          <li><strong>Building a thin Hong Kong hub.</strong> Treaty benefits and transfer pricing need substance.</li>
          <li><strong>Claiming the 5% rate without paperwork.</strong> Form 41 and the residency certificate come first.</li>
          <li><strong>Missing the 60-day and 30-day RBI clocks.</strong> Late reporting costs fees or compounding.</li>
          <li><strong>Ignoring double provident fund cost.</strong> There is no social security agreement.</li>
          <li><strong>Unstamped contracts.</strong> Stamp before relying on them in India.</li>
        </ol>

        <p className="text-gray-600 leading-relaxed mb-10">
          More detail:{" "}
          <Link href="/hong-kong-to-india/common-mistakes" className="text-blue-800 font-semibold hover:underline">12 common mistakes</Link>.
        </p>

        <h2 id="series" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The full guide series</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={seriesCards} />
        </div>

        <h2 id="help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate can help</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India advisory firm, established in 2016, that supports foreign companies
          at every stage of an Indian subsidiary. We work with Hong Kong finance teams and advisers so that the
          Indian and Hong Kong positions agree.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { n: "1", title: "Set up", desc: "Choose the structure and incorporate.", chips: ["Entity structuring", "Wholly owned subsidiary", "SPICe+ incorporation", "Bank account support"], href: "/india-subsidiary-registration" },
            { n: "2", title: "Fund and FEMA", desc: "Bring capital in and report it.", chips: ["FEMA", "FC-GPR", "Share valuation", "ECB"] },
            { n: "3", title: "Operate", desc: "Books, payroll and indirect taxes, with a Hong Kong reporting pack.", chips: ["Accounting and bookkeeping", "GST", "Withholding Tax", "Payroll", "Monthly MIS", "Hong Kong consolidation support"], href: "/accounting-reporting-audit-support" },
            { n: "4", title: "People and relocation", desc: "Hire, pay and relocate your team.", chips: ["Employer of Record", "HR services", "Expat visa", "Visa and EPF planning"], href: "/payroll-expat-services" },
            { n: "5", title: "Repatriate funds", desc: "Move money to Hong Kong with the paperwork and treaty position in order.", chips: ["Forms 145 and 146", "India-Hong Kong treaty relief", "Dividends", "Royalties and service fees", "Intercompany agreements"], highlight: true },
            { n: "6", title: "Tax and transfer pricing", desc: "Keep the India position defensible.", chips: ["Direct and indirect tax", "Transfer pricing", "Form 48", "PE review", "CbCR filing (parent-prepared report)"], href: "/corporate-tax-gst-transfer-pricing" },
            { n: "7", title: "Audit and assurance", desc: "Satisfy Indian law and your Hong Kong auditors.", chips: ["Statutory audit", "Internal audit", "Internal financial controls", "GST and tax audit"], href: "/accounting-reporting-audit-support" },
            { n: "8", title: "Legal, disputes and arbitration", desc: "Defend your position and protect contracts.", chips: ["Tax litigation", "Arbitration support", "Agreement drafting and vetting"], href: "/hong-kong-to-india/contracts-courts-arbitration" },
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
          <strong>Scope note:</strong> we handle the Indian side. Hong Kong tax, Hong Kong company law and
          regulatory advice come from your Hong Kong advisers, and we coordinate with them.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.ird.gov.hk/eng/welcome.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Inland Revenue Department (Hong Kong)</a>,{" "}
          <a href="https://www.cr.gov.hk/en/home/index.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Companies Registry (Hong Kong)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/hong-kong-to-india" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/hong-kong-to-india/faq"
          seeAllLabel="See all 157 questions"
          seeAllDescription="Plain answers from pre-incorporation to closure, including Press Note 3, the treaty, documents, staff, data and exit."
        />

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources and how this page is maintained</h2>
        <GuideSources
          note="This guide is based on Press Note 3 (2020) and the March 2026 amendments with reported government statements, the Companies Act, 2013, FEMA and the Non-Debt Instruments Rules, 2019, the Consolidated FDI Policy, the Income-tax Act, 2025, the India-Hong Kong tax treaty, and India's Digital Personal Data Protection Rules, 2025. Rules change often. We review this page at least quarterly and show the review date at the top."
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Inland Revenue Department (Hong Kong)", href: "https://www.ird.gov.hk/eng/welcome.htm" },
            { label: "Companies Registry (Hong Kong)", href: "https://www.cr.gov.hk/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Hong Kong
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Planning an Indian Subsidiary from Hong Kong?"
        description="Tell us about your Hong Kong company, its owners and your timeline, and we'll reply with the approval route, a recommended structure and a compliance overview."
      />
    </main>
  )
}
