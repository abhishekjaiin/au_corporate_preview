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
import { GuideCountryContext } from "@/components/guide/GuideCountryContext"

const PAGE_URL = "https://www.theaucorp.com/usa-to-india/fcpa-anti-bribery-and-export-controls-for-indian-subsidiaries"
const PARENT_URL = "https://www.theaucorp.com/usa-to-india"

const toc = [
  { id: "country-specific", label: "What's different for US companies" },
  { id: "fcpa", label: "How the FCPA reaches India" },
  { id: "india", label: "Indian anti-corruption law" },
  { id: "programme", label: "A programme that fits a small subsidiary" },
  { id: "third", label: "Third parties: where problems start" },
  { id: "ear", label: "Export controls: the Indian team and US technology" },
  { id: "sanctions", label: "Sanctions and restricted parties" },
  { id: "records", label: "Books, records and the audit" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does the FCPA apply to an Indian subsidiary?", a: "Directly to US persons and agents, and indirectly to the subsidiary when a US person is involved or when its books are consolidated into a US issuer. Treat it as applicable." },
  { q: "Does India have its own anti-bribery law?", a: "Yes. The Prevention of Corruption Act, 1988 as amended in 2018 punishes giving a bribe and makes a commercial organisation liable for bribery by an associated person, with an adequate-procedures defence." },
  { q: "Are facilitation payments allowed?", a: "They are not a safe harbour in India and the FCPA exception is narrow. Avoid them." },
  { q: "What do we need to do for agents and distributors?", a: "Run due diligence, write the scope and fees into a contract with an anti-bribery clause, and monitor payments." },
  { q: "Is sharing source code with the Indian team an export?", a: "Yes, releasing controlled technology or source code to a foreign national, including in India, is an export under the EAR. Most commercial software needs no licence, but classify first." },
  { q: "Which technologies need special care?", a: "Encryption, aerospace, defence, advanced semiconductors and some dual-use items. Check the Commerce Control List." },
  { q: "Can US sanctions affect an Indian subsidiary?", a: "In some programmes yes. Screen customers and vendors and take advice before doing business with sanctioned parties or territories." },
  { q: "Does the 2025 change in US enforcement relax the rules?", a: "No. The statutes remain in force, enforcement priorities can change again, and Indian law is independent." },
  { q: "Who should own the programme?", a: "A named person in the US compliance function with a local owner in India, plus an annual report to the board." },
]

const relatedCards = [
  { title: "Audit and ICOFR", desc: "Statutory audit and internal financial controls.", href: "/usa-to-india/audit-icofr" },
  { title: "Common mistakes", desc: "Errors US companies make in India.", href: "/usa-to-india/common-mistakes" },
  { title: "US parent obligations", desc: "Form 5471 and the other US filings that follow an Indian subsidiary.", href: "/usa-to-india/us-parent-obligations" },
  { title: "Compliance calendar", desc: "Annual and monthly filings for an Indian subsidiary.", href: "/usa-to-india/compliance-calendar" },
]

export default function FcpaAntiBriberyAndExportControlsForIndianSubsidiariesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Anti-Bribery and Export Control Compliance for the Indian Subsidiary of a US Company: FCPA, the Prevention of Corruption Act, Third-Party Due Diligence, EAR and Deemed Exports, and Sanctions"
        description="The compliance rules that follow US law into India: how the Foreign Corrupt Practices Act reaches an Indian subsidiary and its agents, how Indian anti-corruption law applies, a practical programme, export control rules on technology shared with an Indian team, and sanctions screening."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-US"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/usa-to-india" },
          { label: "FCPA, Indian Anti-Bribery Law and US Export Controls for an Indian Subsidiary" },
        ]}
      />

      <GuideHero
        eyebrow="Compliance: FCPA and export controls"
        title="Anti-Bribery and Export Control Compliance for the Indian Subsidiary of a US Company: FCPA, the Prevention of Corruption Act, Third-Party Due Diligence, EAR and Deemed Exports, and Sanctions"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Indian subsidiary of a US company is subject to two anti-bribery systems and to US export control
          and sanctions rules that travel with the parent&apos;s technology and money. The Foreign Corrupt
          Practices Act reaches US companies and their agents, and its books-and-records and internal control
          provisions reach the subsidiary&apos;s accounts when consolidated into a US issuer. India&apos;s
          Prevention of Corruption Act, as amended in 2018, makes giving a bribe an offence and makes a
          commercial organisation liable for bribery by a person associated with it, with a defence of adequate
          procedures. US export controls on technology also matter, because releasing controlled technology to a
          foreign national, including an Indian employee in India, is an export. The practical response is a
          short written programme, due diligence on agents and resellers, training for the Indian team,
          screening and clear records. US enforcement priorities have shifted in 2025, but the law remains in
          force and Indian law is independent of it.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the US
          </Link>
        </p>

        <GuideCountryContext country="usa" topic="anti-bribery-export-controls" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["FCPA", "Anti-bribery provisions for US companies and agents; accounting provisions for issuers; applies to payments to foreign officials"],
                ["Indian law", "Prevention of Corruption Act, 1988 as amended in 2018: offences by givers, and liability of commercial organisations for associated persons, with an adequate-procedures defence"],
                ["Third parties", "Agents, distributors, customs brokers and consultants are the highest-risk channel"],
                ["Facilitation payments", "Not a safe harbour in India and a narrow exception under the FCPA; avoid"],
                ["Export controls", "EAR controls on technology and software; deemed exports to foreign nationals; check the classification of what the Indian team receives"],
                ["Sanctions", "US sanctions can reach foreign subsidiaries of US companies in some programmes; screen customers and vendors"],
                ["Records", "Accurate books and records and internal controls; gift and hospitality register"],
                ["Enforcement", "US priorities changed in 2025; the statutes remain and local enforcement is independent"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="fcpa" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the FCPA reaches India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The anti-bribery provisions prohibit paying or offering anything of value to a foreign official to
          obtain or retain business. They apply directly to US companies and to US citizens, and indirectly to
          an Indian subsidiary when a US person authorises, directs or participates in a payment, or when the
          payment is made through an agent of the US company. The accounting provisions require issuers to keep
          accurate books and records and a system of internal controls, and the Indian subsidiary&apos;s books
          are part of the issuer&apos;s consolidated books, so a bribe booked as a consulting fee in India is a
          problem in the US as well as in India.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          In India the officials most often met by a subsidiary are customs officers, tax officers, municipal
          and state inspectors, utility and licensing officers and employees of public-sector customers. The
          risk areas are licences and approvals, customs clearance, tax audits, labour inspections and public
          tenders. Public-sector bank and enterprise employees are public servants under Indian law, so a
          government customer need not be a ministry to raise the issue.
        </p>

        <h2 id="india" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian anti-corruption law</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The Prevention of Corruption Act, 1988, as amended in 2018, makes it an offence to give or promise an
          undue advantage to a public servant, and extends liability to commercial organisations whose
          associated persons give such advantages to obtain or retain business, with a defence if the
          organisation had adequate procedures. Senior officers of a company can be personally liable if the
          offence is committed with their consent or connivance. The Indian Penal Code replacement, the
          Bharatiya Nyaya Sanhita, and the laws on money laundering add related offences. The Indian regime does
          not depend on whether the US enforces the FCPA, and Indian authorities do investigate foreign-owned
          companies.
        </p>

        <h2 id="programme" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A programme that fits a small subsidiary</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>A short written policy in plain language covering gifts, hospitality, travel, political and charitable payments, facilitation payments and the reporting of concerns.</li>
          <li>A register of gifts and hospitality given to or received from public officials and customers, reviewed monthly by finance.</li>
          <li>Due diligence on agents, distributors, resellers and customs brokers before onboarding, with a risk rating and an anti-bribery clause in the contract.</li>
          <li>A payment control: no cash, no payment to an account in the name of a person other than the contractor, and an invoice that describes the real service.</li>
          <li>Training for the Indian team at hiring and once a year, with examples from the work they do.</li>
          <li>A hotline or named contact, and a rule against retaliation.</li>
          <li>An annual review by the US compliance lead, with a short report to the board of the Indian company.</li>
        </ol>

        <h2 id="third" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Third parties: where problems start</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Third party</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical risk</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Control</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Customs broker or clearing agent", "Payments to officers to speed clearance or reduce duty", "Written scope, fee schedule, receipts, audit right"],
                ["Distributor or reseller", "Discounts or commissions used to fund payments to customers' officials", "Due diligence, commercial justification, volume-based pricing"],
                ["Consultant for licences and approvals", "Success fees with no clear work product", "Fixed fees, reports and deliverables, no success fee tied to officials"],
                ["Landlord or facilities provider", "Payments to inspectors", "Contracts that make the provider responsible for permits"],
                ["Recruiter or agent for government tenders", "Inside information and payments", "Tender rules, no agent in public tenders without senior approval"],
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

        <h2 id="ear" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Export controls: the Indian team and US technology</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Export Administration Regulations control the export of items, software and technology, and an
          export includes releasing technology or source code to a foreign national, whether in the US or
          abroad. When a US company sends controlled technology to its Indian centre, or lets Indian staff
          access controlled source code on a shared system, it makes an export to India that may need a licence
          depending on the classification of the item and the destination. India has been placed in a more
          favourable country group than before, which makes licence exceptions available for some items, but the
          analysis is classification-specific. Most commercial software and general engineering information
          carries no licence requirement to India, while encryption, aerospace, defence, advanced semiconductor
          and certain dual-use technologies need case-by-case review.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Classify the technology and software the Indian team will receive, using the Commerce Control List.</li>
          <li>Restrict access on shared repositories by role and location where a licence would be needed.</li>
          <li>Screen Indian staff, contractors and visitors who will handle controlled items.</li>
          <li>Keep records of what was released, to whom and under what authority.</li>
          <li>Do not re-export to a third country without checking the controls.</li>
        </ul>

        <h2 id="sanctions" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sanctions and restricted parties</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          US sanctions are administered by the Treasury Department and bind US persons, and in some programmes
          they reach entities owned or controlled by US persons abroad. An Indian subsidiary of a US company
          should screen customers, vendors, banks and beneficial owners against the sanctions and
          restricted-party lists before onboarding and at renewal, and should not do business with sanctioned
          parties or in sanctioned territories without legal advice. India has its own rules, so check both
          systems. The same screening is useful for the bank account onboarding and for the
          anti-money-laundering checks that Indian banks run.
        </p>

        <h2 id="records" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Books, records and the audit</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Accurate records are the backbone of both regimes. Each payment should have a contract, an invoice,
          evidence of delivery and an approval, and should be coded to the right account. Expenses for
          entertainment, gifts and travel for officials or customers need an approval and a purpose. The
          statutory auditor and the US group auditor both test controls over financial reporting, and the Indian
          company&apos;s internal financial controls are reported on by the auditor. See{" "}
          <Link href="/usa-to-india/audit-icofr" className="text-blue-800 font-semibold hover:underline">audit and ICOFR</Link>.
        </p>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Treating small facilitation payments as harmless.</li>
          <li>Hiring an agent on a success fee for a licence or tax matter.</li>
          <li>Letting finance book payments to a third party under a vague description.</li>
          <li>Giving Indian staff access to controlled technology without classification.</li>
          <li>Assuming that changes in US enforcement mean that Indian law is relaxed.</li>
        </ul>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.irs.gov/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Internal Revenue Service (US)</a>,{" "}
          <a href="https://www.bis.gov/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Bureau of Industry and Security (US)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/usa-to-india/fcpa-anti-bribery-and-export-controls-for-indian-subsidiaries" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/usa-to-india/faq"
          seeAllLabel="See all the FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "US Department of Justice: Foreign Corrupt Practices Act", href: "https://www.justice.gov/criminal/criminal-fraud/foreign-corrupt-practices-act" },
            { label: "Bureau of Industry and Security (US)", href: "https://www.bis.gov/" },
            { label: "US Treasury: Office of Foreign Assets Control", href: "https://ofac.treasury.gov/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and US rules
          change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Setting Up Compliance Controls in India?"
        description="Tell us how the subsidiary will operate, and we'll map the Indian side of your anti-bribery and approvals controls."
      />
    </main>
  )
}
