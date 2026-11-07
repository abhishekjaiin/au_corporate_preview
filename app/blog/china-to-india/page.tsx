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

const PAGE_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "at-a-glance", label: "India subsidiary at a glance" },
  { id: "approval", label: "Step one: government approval under Press Note 3" },
  { id: "why-now", label: "What has changed in 2025 and 2026" },
  { id: "structure", label: "Which structure should a Chinese company choose?" },
  { id: "steps", label: "How to incorporate, step by step" },
  { id: "money", label: "How money moves between China and the Indian subsidiary" },
  { id: "treaty", label: "The tax treaty, documents and what is missing" },
  { id: "tax", label: "Tax and transfer pricing: what the Chinese parent should know" },
  { id: "cn-law", label: "Chinese law that follows the group into India" },
  { id: "compliance", label: "Annual compliance: what the subsidiary files" },
  { id: "people", label: "People: hiring, visas and provident fund" },
  { id: "cost", label: "What it costs and how long it takes" },
  { id: "mistakes", label: "Six mistakes Chinese companies make" },
  { id: "series", label: "The full guide series" },
  { id: "help", label: "How AU Corporate can help" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "sources", label: "Sources and how this page is maintained" },
]

const seriesCards = [
  { title: "Press Note 3: government approval", desc: "Who needs approval, what the 2026 easing changes, and the 60-day sectors.", href: "/china-to-india/india-press-note-3-and-chinese-investors" },
  { title: "India-China tax treaty, article by article", desc: "Rates, permanent establishment, share gains and relief.", href: "/china-to-india/india-china-dtaa" },
  { title: "Chinese employees: tax and provident fund", desc: "No social security agreement, the 183-day test and EPF.", href: "/china-to-india/chinese-employees-in-india" },
  { title: "Chinese parent obligations", desc: "NDRC, MOFCOM and SAFE steps, technology and tax credit.", href: "/china-to-india/chinese-parent-obligations" },
  { title: "Documents: notary and legalisation", desc: "Why there is no apostille between China and India.", href: "/china-to-india/documents-notarisation-legalisation" },
  { title: "Incorporation: who does what", desc: "The Chinese side and the Indian side, step by step.", href: "/china-to-india/incorporation-steps" },
  { title: "Subsidiary, joint venture, branch or EOR", desc: "Choose the structure with approval in mind.", href: "/china-to-india/structure-options" },
  { title: "Funding and FEMA", desc: "Equity, ECB loans, SAFE remittance and Form FC-GPR.", href: "/china-to-india/funding-and-fema" },
  { title: "Getting money out of India", desc: "Dividends, fees, royalties and loans to China.", href: "/china-to-india/repatriating-profits" },
  { title: "Transfer pricing", desc: "Form 48, components, technology and customs value.", href: "/china-to-india/transfer-pricing" },
  { title: "Hiring in India", desc: "Contracts, payroll, labour codes and mixed teams.", href: "/china-to-india/hiring-in-india" },
  { title: "Data protection: PIPL and DPDP", desc: "Chinese export routes and the new Indian law.", href: "/china-to-india/data-protection-pipl-dpdp" },
  { title: "Contracts, courts and arbitration", desc: "Awards, judgments and the investment protection position.", href: "/china-to-india/contracts-courts-arbitration" },
  { title: "Compliance calendar", desc: "Indian dates beside the Chinese parent's dates.", href: "/china-to-india/compliance-calendar" },
  { title: "Manufacturing and joint ventures", desc: "Fast-track sectors, JV terms and technology licences.", href: "/china-to-india/manufacturing-and-jv-for-chinese-companies" },
  { title: "Relocating Chinese staff", desc: "Visas, clearance, FRRO registration and directors.", href: "/china-to-india/relocate-chinese-staff" },
  { title: "Selling, restructuring or closing", desc: "Options, FEMA pricing and Chinese approvals.", href: "/china-to-india/exit-and-restructuring" },
  { title: "12 common mistakes", desc: "And the fix for each.", href: "/china-to-india/common-mistakes" },
  { title: "Sectors, procurement and trade rules", desc: "Government contracts, app blocks and customs duties.", href: "/china-to-india/restricted-sectors-procurement-and-trade" },
  { title: "147 FAQs on setting up an India subsidiary", desc: "From pre-incorporation to closure.", href: "/china-to-india/faq" },
]

const faqs = [
  { q: "Can a Chinese company own 100% of an Indian subsidiary?", a: "Only with the Government of India's prior approval. Under Press Note 3 (2020), an investor from a country sharing a land border with India, including China, needs approval to invest in any sector. The sector's own cap still applies." },
  { q: "Did the 2026 changes remove the need for approval for Chinese investors?", a: "No. The 2026 amendments let a non-land-border investor with up to 10% passive, non-controlling land-border beneficial ownership use the Automatic Route with reporting. An investor incorporated in China still needs approval whatever the amount." },
  { q: "Does a Chinese company need to send anyone to India to set up a subsidiary?", a: "No. Filing is online. Directors need Digital Signature Certificates, and Chinese documents go through notarisation, Chinese authentication and Indian mission attestation. A Chinese director needs Ministry of Home Affairs clearance before appointment." },
  { q: "How long does it take to set up an Indian subsidiary from China?", a: "Incorporation takes four to six weeks from complete documents, but the Press Note 3 approval comes first and can take months, except for a reported 60-day target in specified manufacturing sectors. Plan the approval into the project calendar." },
  { q: "What does it cost to set up a subsidiary in India?", a: "AU Corporate's fee for setting up the subsidiary is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about CNY 70,000 at an indicative ₹14.30 per yuan, July 2026 rate). The costing depends on your plan, and it does not include the Press Note 3 approval work, which depends on the sector and structure." },
  { q: "How long does Press Note 3 approval take?", a: "Historically several months. A 60-day target is reported for specified manufacturing sectors such as capital goods and electronic components, subject to the final procedure." },
  { q: "Is there a tax treaty between India and China?", a: "Yes. It was signed on 18 July 1994 and came into force in November 1994, and has been amended by protocols, including one signed on 26 November 2018." },
  { q: "What is the treaty rate on royalties and technical fees?", a: "10% of the gross amount under Article 12, where the Chinese company is the beneficial owner and has no PE in India connected with the payment." },
  { q: "Can Chinese documents be apostilled for use in India?", a: "No. India objected to China's accession to the Apostille Convention, so the Convention does not apply between them. Use the consular legalisation chain instead." },
  { q: "Is there a social security agreement between India and China?", a: "No. There is none, so a certificate of coverage is not available for Chinese staff." },
  { q: "Can a Chinese company send personal data from China to its Indian subsidiary?", a: "Only through an approved route unless an exemption applies: a security assessment, a standard contract filing or certification, depending on the type and volume of data." },
  { q: "Can a Hong Kong or Singapore arbitral award be enforced in India?", a: "A foreign award from a notified New York Convention territory can be enforced in India under Part II of the Arbitration and Conciliation Act, 1996, on narrow grounds. Awards made in China, Hong Kong and Macao are covered by a 19 March 2012 notification." },
  { q: "How do I fund an Indian subsidiary from China?", a: "Remit equity from the parent's own account after the Press Note 3 approval and the Chinese SAFE registration, then allot shares within 60 days and file FC-GPR within 30 days of allotment." },
  { q: "How is a dividend from India taxed on its way to a Chinese parent?", a: "India withholds at 10% under the treaty on receipt of the Chinese tax residence certificate and Form 41. China generally taxes the receipt with credit for Indian tax, subject to Chinese rules." },
]

export default function ChinaToIndiaHubPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How to Set Up a Subsidiary in India from China: The 2026 Guide"
        description="How Chinese companies set up a subsidiary in India: Press Note 3 approval, structure, incorporation, FEMA filings, the India-China tax treaty, documents, staff and compliance. By a Chartered Accountant."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "How to Set Up a Subsidiary in India from China" },
        ]}
      />

      <GuideHero
        eyebrow="Guide for Chinese companies"
        title="How to Set Up a Subsidiary in India from China: The 2026 Guide"
        dek="Press Note 3 approval, structure, incorporation, FEMA/RBI filings, the India-China treaty and document legalisation for Chinese companies entering India, in plain terms."
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="The short answer">
          A Chinese company can set up an Indian subsidiary, but not through the Automatic Route. Under Press
          Note 3 (2020), an investor from a country that shares a land border with India needs the Government of
          India&apos;s prior approval in every sector, and the 2026 amendments, which let passive land-border
          ownership of up to 10% in a non-land-border investor use the Automatic Route, do not help an investor
          incorporated in China. Once approval is in hand, the mechanics are standard: a private limited
          company, documents notarised, authenticated and attested by the Indian mission (there is no apostille
          between China and India), digital signatures and director IDs, one SPICe+ filing, a bank account, and
          capital remitted from China and reported to the RBI. The 1994 tax treaty caps Indian withholding at
          10% on dividends, interest, royalties and technical fees. There is no social security agreement.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="text-gray-600 leading-relaxed mb-10">
          This guide is written for the founders, finance heads and operations leads of Chinese companies
          deciding how to enter India, including manufacturers, technology groups and trading firms. It follows
          the order of the decisions: approval, structure, set-up, money, tax, Chinese-side duties, compliance
          and people. Each section links to a deeper guide. Indian tax law changed on 1 April 2026, when the
          Income-tax Act, 2025 replaced the 1961 Act; where a form has a new name, we show the new name with the
          earlier one in brackets.
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
                ["Foreign investment route", "Government route: prior approval under Press Note 3 for an investor from China; the sector cap still applies"],
                ["Directors and shareholders", "At least two directors and two shareholders; a wholly owned subsidiary uses a nominee or group company as the second shareholder"],
                ["Resident Director", "At least one director who has stayed in India 182 days or more in the financial year; Chinese directors need Ministry of Home Affairs clearance"],
                ["Minimum capital", "None by law; plan 12 to 18 months of costs"],
                ["Registered office", "A physical address in India"],
                ["Documents", "Chinese notary, Chinese authentication and Indian Embassy or Consulate attestation; English translation; no apostille"],
                ["Chinese approvals", "NDRC, MOFCOM and SAFE approval, filing or registration for outbound investment"],
                ["RBI reporting", "Form FC-GPR within 30 days of share allotment; allotment within 60 days of receiving funds"],
                ["Financial year", "1 April to 31 March, which differs from the common 31 December year end of Chinese parents"],
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
          <li><strong>Who needs it:</strong> a company incorporated in China, a Chinese citizen, or an investor whose Chinese beneficial owners hold more than 10% or control it. See <Link href="/china-to-india/india-press-note-3-and-chinese-investors" className="text-blue-800 font-semibold hover:underline">Press Note 3: government approval</Link>.</li>
          <li><strong>What the 2026 easing does:</strong> Cabinet approved amendments on 10 March 2026. A non-land-border investor with up to 10% passive, non-controlling land-border beneficial ownership can use the Automatic Route with reporting. It does not apply to an investor incorporated in China.</li>
          <li><strong>Timeline:</strong> approvals have taken months; a 60-day target is reported for specified manufacturing sectors such as capital goods, electronic components, polysilicon and ingot-wafer. Indian majority ownership and control is reportedly expected in those sectors.</li>
          <li><strong>Directors:</strong> Chinese citizens proposed as directors need Ministry of Home Affairs clearance. Sector rules and procurement limits are covered in <Link href="/china-to-india/restricted-sectors-procurement-and-trade" className="text-blue-800 font-semibold hover:underline">Sectors, procurement and trade rules</Link>.</li>
        </ul>

        <h2 id="why-now" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What has changed in 2025 and 2026</h2>
        <GuideAnswerBox>
          India–China relations have thawed in practical ways, but the rules remain tight and are still being
          written.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Press Note 3 easing:</strong> the March 2026 amendments, with the FEMA rules reported as amended on 1 May 2026, add a beneficial-owner definition and a 10% test. Pending items such as the RBI reporting format and the fast-track procedure were reported as still being finalised.</li>
          <li><strong>Visas:</strong> in December 2025 the press reported that business visas for Chinese professionals were being processed in about four weeks, with wider e-visa access for company-sponsored staff, though the scope appears limited.</li>
          <li><strong>Chinese outbound rules:</strong> new State Council regulations on overseas investment were reported to take effect on 1 July 2026.</li>
          <li><strong>Technology and equipment:</strong> press reports in 2025 described difficulties for some manufacturers moving equipment and Chinese engineers to India.</li>
          <li><strong>Data:</strong> China&apos;s certification route for personal information exports took effect on 1 January 2026, and India&apos;s DPDP duties start on 13 May 2027. See <Link href="/china-to-india/data-protection-pipl-dpdp" className="text-blue-800 font-semibold hover:underline">Data protection: PIPL and DPDP</Link>.</li>
        </ul>

        <GuideCountryProfile country="china" />

        <p className="mb-10 text-gray-700">
          Already invested without the right filings? See how we handled{" "}
          <Link href="/case-studies/china-subsidiary-fema-compounding" className="text-blue-800 font-semibold hover:underline">
            FEMA compounding for a Chinese-owned Indian subsidiary
          </Link>
          .
        </p>
        <h2 id="structure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Which structure should a Chinese company choose?</h2>
        <GuideAnswerBox>
          Most choose a private limited company, either wholly owned or as a joint venture with an Indian
          partner. A branch or liaison office needs RBI approval and track-record tests; an Employer of Record
          fits a first pilot but not a way around approval.
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
                ["Wholly owned subsidiary", "Sales, development, assembly, captive teams", "Government approval for 100% Chinese ownership; two directors (one resident); audit and ROC compliance"],
                ["Joint venture with an Indian partner", "Manufacturing, distribution and local access", "Approval covers the Chinese stake; shareholder agreement must match it; Indian control expected in fast-track sectors"],
                ["Branch office", "The parent's own activities such as consultancy or trade", "RBI approval with security review; net worth USD 100,000 and a five-year profit record"],
                ["Liaison office", "Market research and liaison", "No income or invoicing; RBI approval; USD 50,000 net worth and three years"],
                ["LLP", "Partnership-style set-ups in eligible sectors", "Tax and FEMA review; approval still applies"],
                ["Employer of Record", "First hires without an entity", "The EOR is the legal employer; not a long-term substitute"],
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
          <Link href="/china-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">Subsidiary, joint venture, branch or EOR</Link>{" "}
          and{" "}
          <Link href="/china-to-india/manufacturing-and-jv-for-chinese-companies" className="text-blue-800 font-semibold hover:underline">Manufacturing and joint ventures</Link>.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to incorporate, step by step</h2>
        <GuideAnswerBox>
          Nine steps take a Chinese parent from board decision to a compliant subsidiary. The sequence matters
          because each step feeds the next.
        </GuideAnswerBox>

        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Check the sector and structure.</strong> Match your activity to the FDI Policy for the cap, and map the ownership chain to the ultimate owners.</li>
          <li><strong>Apply for Press Note 3 approval</strong> and start the Chinese outbound filings in parallel.</li>
          <li><strong>Prepare and legalise the Chinese documents.</strong> Business licence, articles, resolution and identity papers: Chinese notary, Chinese authentication, Indian mission attestation, English translation.</li>
          <li><strong>Choose the Resident Director.</strong> An Indian hire, a relocating colleague or an adviser-nominated director; add Chinese directors after clearance.</li>
          <li><strong>Get DSCs and DINs.</strong> Digital signatures and director IDs for each proposed director.</li>
          <li><strong>Reserve the name and file SPICe+.</strong> The Registrar issues the Certificate of Incorporation with the CIN, PAN and TAN.</li>
          <li><strong>Open the bank account and send the capital.</strong> From the parent&apos;s own account, after SAFE registration and the Indian approval.</li>
          <li><strong>Allot shares and report to the RBI.</strong> Allot within 60 days; file Form FC-GPR within 30 days of allotment.</li>
          <li><strong>Commence business.</strong> File INC-20A within 180 days, appoint the auditor and register for GST, provident fund and ESI.</li>
        </ol>

        <p className="text-gray-600 leading-relaxed mb-10">
          <strong>Typical timeline: 4 to 6 weeks to incorporate</strong> from complete documents, after the
          approval. Deeper guides:{" "}
          <Link href="/china-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">Incorporation: who does what</Link>{" "}
          and{" "}
          <Link href="/china-to-india/documents-notarisation-legalisation" className="text-blue-800 font-semibold hover:underline">Documents: notary and legalisation</Link>.
        </p>

        <h2 id="money" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How money moves between China and the Indian subsidiary</h2>
        <GuideAnswerBox>
          Money goes in through shares or a loan, and comes out through dividends, fees, royalties, interest and
          loan repayments. Each route has its own tax, paperwork and Chinese result.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Going in:</strong> equity or compulsorily convertible instruments, priced at or above fair value, with an ECB for loans; SAFE registration in China first.</li>
          <li><strong>Reporting in:</strong> Form FC-GPR and the annual FLA return by 15 July.</li>
          <li><strong>Coming out:</strong> dividends at 10% under the treaty; fees and royalties priced at arm&apos;s length at up to 10%; interest at up to 10%; China taxes the receipt with credit for Indian tax.</li>
          <li><strong>Paperwork out:</strong> Form 145, and Form 146 where a Chartered Accountant certifies the payment. Payments to Chinese related parties receive closer checks.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related guides:{" "}
          <Link href="/china-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">Funding and FEMA</Link>{" "}
          and{" "}
          <Link href="/china-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">Getting money out of India</Link>.
        </p>

        <h2 id="treaty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The tax treaty, documents and what is missing</h2>
        <GuideAnswerBox>
          Three points matter to a Chinese parent: a tax treaty exists, an apostille does not, and there is no
          social security agreement.
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
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">India-China tax treaty (signed 18 July 1994, in force November 1994, with protocols)</th>
                  <td className="border border-gray-300 p-3">Caps Indian withholding, sets permanent establishment tests and allocates income</td>
                  <td className="border border-gray-300 p-3">Dividends, interest, royalties and fees for technical services 10%; PE tests of 183 days for sites and services, as reported</td>
                  <td className="border border-gray-300 p-3"><Link href="/china-to-india/india-china-dtaa" className="text-blue-800 font-semibold hover:underline">India-China tax treaty, article by article</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Hague Apostille Convention</th>
                  <td className="border border-gray-300 p-3">Not in operation between China and India because India objected to China&apos;s accession (8 September 2023)</td>
                  <td className="border border-gray-300 p-3">Use Chinese notary, authentication and Indian mission attestation</td>
                  <td className="border border-gray-300 p-3"><Link href="/china-to-india/documents-notarisation-legalisation" className="text-blue-800 font-semibold hover:underline">Documents: notary and legalisation</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Social security agreement</th>
                  <td className="border border-gray-300 p-3">None between India and China</td>
                  <td className="border border-gray-300 p-3">Chinese staff fall under EPF international worker rules as generally applied</td>
                  <td className="border border-gray-300 p-3"><Link href="/china-to-india/chinese-employees-in-india" className="text-blue-800 font-semibold hover:underline">Chinese employees: tax and provident fund</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Free trade or investment treaty</th>
                  <td className="border border-gray-300 p-3">No free trade agreement; investment treaty position must be checked</td>
                  <td className="border border-gray-300 p-3">India terminated many older treaties from 2016 and 2017</td>
                  <td className="border border-gray-300 p-3"><Link href="/china-to-india/contracts-courts-arbitration" className="text-blue-800 font-semibold hover:underline">Contracts, courts and arbitration</Link></td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax and transfer pricing: what the Chinese parent should know</h2>
        <GuideAnswerBox>
          An Indian subsidiary pays Indian tax on its Indian profits, and the parent&apos;s exposure comes from
          payments, people, pricing and the conditions of the approval.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Transfer pricing:</strong> Indian rules apply with no small-company exemption, and component, equipment and technology flows from China must also match the customs value.</li>
          <li><strong>Withholding Tax:</strong> payments to the Chinese parent suffer Indian withholding under Section 393 of the Income-tax Act, 2025, reduced by the treaty where the documents are in place.</li>
          <li><strong>Permanent establishment:</strong> Chinese staff days and contract authority can create a taxable presence; sites and services over 183 days are a PE trigger, as reported.</li>
          <li><strong>Chinese result:</strong> China generally taxes the receipt with credit for Indian tax; your Chinese adviser must confirm the position, including indirect credit.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related guides:{" "}
          <Link href="/china-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">Transfer pricing</Link>,{" "}
          <Link href="/china-to-india/india-china-dtaa" className="text-blue-800 font-semibold hover:underline">India-China tax treaty, article by article</Link>{" "}
          and{" "}
          <Link href="/china-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">Getting money out of India</Link>.
        </p>

        <h2 id="cn-law" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Chinese law that follows the group into India</h2>
        <GuideAnswerBox>
          Chinese duties do not stop at the border. They shape what the parent can send and what it must be able
          to show.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Outbound investment:</strong> NDRC, MOFCOM and SAFE approval, filing or registration, with new State Council regulations reported effective 1 July 2026.</li>
          <li><strong>Technology and people:</strong> export-control rules can affect machinery, designs and engineers going to India.</li>
          <li><strong>Data:</strong> export of personal information and important data needs a security assessment, standard contract or certification.</li>
          <li><strong>Tax:</strong> worldwide taxation with foreign tax credit, controlled foreign company rules and related-party documentation.</li>
          <li><strong>State groups:</strong> state-owned enterprises may need extra approvals for investment and disposal.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          See{" "}
          <Link href="/china-to-india/chinese-parent-obligations" className="text-blue-800 font-semibold hover:underline">Chinese parent obligations</Link>{" "}
          and{" "}
          <Link href="/china-to-india/data-protection-pipl-dpdp" className="text-blue-800 font-semibold hover:underline">Data protection: PIPL and DPDP</Link>.
        </p>

        <h2 id="compliance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Annual compliance: what the subsidiary files</h2>
        <GuideAnswerBox>
          The subsidiary has monthly, quarterly and annual filings on a 31 March year end, which often differs
          from the parent&apos;s own year end.
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
          The maintained version, with the Chinese dates beside it, is in the{" "}
          <Link href="/china-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">Compliance calendar</Link>.
        </p>

        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">People: hiring, visas and provident fund</h2>
        <GuideAnswerBox>
          Indian employment is contract and statute driven. Chinese staff on assignment need the right visa,
          security clearance, a tax plan and a provident fund budget, because there is no social security
          agreement.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Hiring locally:</strong> provident fund, ESI, gratuity, the labour codes and state rules. See <Link href="/china-to-india/hiring-in-india" className="text-blue-800 font-semibold hover:underline">Hiring in India</Link>.</li>
          <li><strong>Sending Chinese staff:</strong> visa category, clearance, registration and day counts. See <Link href="/china-to-india/relocate-chinese-staff" className="text-blue-800 font-semibold hover:underline">Relocating Chinese staff</Link> and <Link href="/china-to-india/chinese-employees-in-india" className="text-blue-800 font-semibold hover:underline">Chinese employees: tax and provident fund</Link>.</li>
          <li><strong>Records:</strong> inspectors look closely at foreign-owned factories, so keep wage, provident fund and contract records complete.</li>
        </ul>

        <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What it costs and how long it takes</h2>
        <GuideAnswerBox>
          Cost has three parts: one-time setup, recurring compliance and variable items such as approvals,
          transfer pricing and disputes.
        </GuideAnswerBox>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>One-time:</strong> government fees and stamp duty (by state and authorised capital), professional fees, the valuation, Chinese document legalisation and translation, and the approval application.</li>
          <li><strong>Recurring:</strong> accounting, statutory audit, GST, TDS, payroll and ROC filings.</li>
          <li><strong>Variable:</strong> transfer pricing documentation, tax notices, secondments, visas and legal work.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Indicative setup fee:</strong> AU Corporate&apos;s fee for setting up the subsidiary is USD
          750 to USD 1,000 for share capital up to ₹10 lakh (about CNY 70,000 at an indicative ₹14.30 per yuan,
          July 2026 rate). The costing depends on your plan, and it does not include the Press Note 3 approval
          work, which depends on the sector and structure.
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

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Six mistakes Chinese companies make</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li><strong>Investing before approval.</strong> Press Note 3 approval comes first, and the structure must match it.</li>
          <li><strong>Using a third-country vehicle to hide Chinese ownership.</strong> The policy looks at beneficial ownership and control.</li>
          <li><strong>Seeking an apostille.</strong> India objected to China&apos;s accession, so use the consular legalisation chain.</li>
          <li><strong>Missing the 60-day and 30-day RBI clocks.</strong> Late reporting costs fees or compounding.</li>
          <li><strong>Sending engineers on business visas.</strong> Hands-on work needs the right visa and clearance.</li>
          <li><strong>Thin records.</strong> Foreign-owned factories are inspected; keep contracts, wages and filings complete.</li>
        </ol>

        <p className="text-gray-600 leading-relaxed mb-10">
          More detail:{" "}
          <Link href="/china-to-india/common-mistakes" className="text-blue-800 font-semibold hover:underline">12 common mistakes</Link>.
        </p>

        <h2 id="series" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The full guide series</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={seriesCards} />
        </div>

        <h2 id="help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate can help</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India advisory firm, established in 2016, that supports foreign companies
          at every stage of an Indian subsidiary. We work with Chinese finance teams and advisers so that the
          Indian and Chinese positions agree.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { n: "1", title: "Set up", desc: "Choose the structure and incorporate.", chips: ["Entity structuring", "Wholly owned subsidiary", "SPICe+ incorporation", "Bank account support"], href: "/india-subsidiary-registration" },
            { n: "2", title: "Fund and FEMA", desc: "Bring capital in and report it.", chips: ["FEMA", "FC-GPR", "Share valuation", "ECB"] },
            { n: "3", title: "Operate", desc: "Books, payroll and indirect taxes, with a Chinese reporting pack.", chips: ["Accounting and bookkeeping", "GST", "Withholding Tax", "Payroll", "Monthly MIS", "Chinese consolidation support"], href: "/accounting-reporting-audit-support" },
            { n: "4", title: "People and relocation", desc: "Hire, pay and relocate your team.", chips: ["Employer of Record", "HR services", "Expat visa", "Visa and EPF planning"], href: "/payroll-expat-services" },
            { n: "5", title: "Repatriate funds", desc: "Move money to China with the paperwork and treaty position in order.", chips: ["Forms 145 and 146", "India-China treaty relief", "Dividends", "Royalties and service fees", "Intercompany agreements"], highlight: true },
            { n: "6", title: "Tax and transfer pricing", desc: "Keep the India position defensible.", chips: ["Direct and indirect tax", "Transfer pricing", "Form 48", "PE review", "CbCR filing (parent-prepared report)"], href: "/corporate-tax-gst-transfer-pricing" },
            { n: "7", title: "Audit and assurance", desc: "Satisfy Indian law and your Chinese auditors.", chips: ["Statutory audit", "Internal audit", "Internal financial controls", "GST and tax audit"], href: "/accounting-reporting-audit-support" },
            { n: "8", title: "Legal, disputes and arbitration", desc: "Defend your position and protect contracts.", chips: ["Tax litigation", "Arbitration support", "Agreement drafting and vetting"], href: "/china-to-india/contracts-courts-arbitration" },
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
          <strong>Scope note:</strong> we handle the Indian side. Chinese tax, Chinese company law, outbound
          investment filings and regulatory advice come from your Chinese advisers, and we coordinate with them.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.mofcom.gov.cn/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">MOFCOM (China)</a>,{" "}
          <a href="https://www.safe.gov.cn/en/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">SAFE (China)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/china-to-india" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/china-to-india/faq"
          seeAllLabel="See all 147 questions"
          seeAllDescription="Plain answers from pre-incorporation to closure, including Press Note 3, the treaty, documents, staff, data and exit."
        />

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources and how this page is maintained</h2>
        <GuideSources
          note="This guide is based on Press Note 3 (2020) and the March 2026 amendments, the Companies Act, 2013, FEMA and the Non-Debt Instruments Rules, 2019, the Consolidated FDI Policy, the Income-tax Act, 2025, the India-China tax treaty and its protocols, public statements on China's outbound investment regulations, and India's Digital Personal Data Protection Rules, 2025. Rules change often. We review this page at least quarterly and show the review date at the top."
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "MOFCOM (China)", href: "https://www.mofcom.gov.cn/" },
            { label: "Embassy of India, Beijing", href: "https://www.eoibeijing.gov.in/" },
          ]}
        />


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Chinese
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Planning an Indian Subsidiary from China?"
        description="Tell us about your company, your sector and your timeline, and we'll reply with the Press Note 3 route, a recommended structure and a compliance overview."
      />
    </main>
  )
}
