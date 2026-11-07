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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/hong-kong-parent-obligations"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "steps", label: "Hong Kong-side steps before investing" },
  { id: "registers", label: "Hong Kong corporate housekeeping" },
  { id: "tax", label: "Profits tax on income from India" },
  { id: "mpf", label: "Employees and officers" },
  { id: "sequence", label: "Order of work" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does a Hong Kong company need permission to invest in India?", a: "Not under Hong Kong law. There are no exchange controls or outbound approval. The Indian approval under Press Note 3 is the main gate." },
  { q: "Does a Hong Kong company need a company secretary?", a: "Yes. Every Hong Kong company must have a company secretary who is a Hong Kong-resident individual or a Hong Kong-registered company." },
  { q: "Are Indian dividends taxable in Hong Kong?", a: "Ordinarily not, because they are not Hong Kong-sourced, but the foreign-sourced income exemption rules can tax certain foreign dividends received by multinational group members that lack economic substance." },
  { q: "Does Hong Kong tax capital gains on Indian shares?", a: "Not in general, but frequent trading may be treated as business income. The gain is taxed in India under the treaty and domestic law." },
  { q: "What is the Hong Kong profits tax rate?", a: "For corporations, 8.25% on the first HK$2 million of assessable profits and 16.5% on the rest, with one company in a connected group able to use the lower tier." },
  { q: "What is a significant controllers register?", a: "A register kept by a Hong Kong company of individuals or entities with more than 25% of shares or votes or with control. It aligns with the beneficial owner information India asks for." },
  { q: "Do I need an audit for a Hong Kong company?", a: "Yes. Hong Kong companies generally prepare audited financial statements by a certified public accountant, which also support Indian banking and net worth evidence." },
]

const relatedCards = [
  { title: "Press Note 3 for Hong Kong Companies: Approval for Hong Kong-Registered Investors and What the 2026 Easing Does Not Change", desc: "How India's Press Note 3 applies to a Hong Kong parent: the March 2026 government statement that Hong Kong-registered firms still need prior approval, the 10% passive-ownership easing for other investors, the approval route, and planning for regional headquarters.", href: "/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" },
  { title: "Funding Your Indian Subsidiary from Hong Kong: Equity, Preference Shares, External Borrowing and FEMA Reporting", desc: "How a Hong Kong parent can fund an Indian company: equity share and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return, Press Note 3 and reporting through the authorised dealer bank.", href: "/hong-kong-to-india/funding-and-fema" },
  { title: "Hong Kong Documents for an Indian Subsidiary: Notary, Apostille or Consular Legalisation and Translation", desc: "How to prepare Hong Kong company and director documents for Indian filings: certified copies, notary public, Hong Kong apostille, when consular legalisation applies, translation and a checklist of documents.", href: "/hong-kong-to-india/documents-hong-kong-apostille" },
  { title: "Hong Kong as a Regional Headquarters for India: Holding Company, Trading Hub, Treasury and the Principal Purpose Test", desc: "How groups use a Hong Kong company as a regional holding, trading or treasury hub for India, the substance Indian and Hong Kong tax authorities expect, the treaty principal purpose test, Press Note 3 limits and alternatives.", href: "/hong-kong-to-india/hong-kong-as-regional-hub-for-india" },
]

export default function HongKongParentObligationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="What a Hong Kong Parent Must Do at Home: Registers, Annual Filings, Profits Tax Position and Foreign-Sourced Income Rules"
        description="The Hong Kong-side steps for a parent investing in India: no outbound approval or exchange controls, company secretary and registers, significant controllers register, annual return and audit, profits tax on Indian dividends and the FSIE regime."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Hong Kong Parent Obligations: Companies Ordinance, Profits Tax, FSIE and Reporting" },
        ]}
      />

      <GuideHero
        eyebrow="Hong Kong side: parent duties"
        title="What a Hong Kong Parent Must Do at Home: Registers, Annual Filings, Profits Tax Position and Foreign-Sourced Income Rules"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Hong Kong has no outbound investment approval and no foreign exchange controls, so a Hong Kong company
          can fund an Indian subsidiary without a home-side permit, subject to its own constitution, board
          approval and any bank or licence conditions. The Hong Kong obligations that matter are corporate
          housekeeping (company secretary, registers, annual return, audited accounts), tax on income received
          from India, and the foreign-sourced income exemption (FSIE) rules for multinational groups. Take
          advice from a Hong Kong accountant or solicitor for these, because Hong Kong rules change and are
          outside Indian law.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="parent-obligations" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Approval to invest abroad", "None under Hong Kong law; no exchange controls"],
                ["Board action", "Board resolution; shareholder approval if the articles or a shareholders' agreement require it"],
                ["Company secretary", "Every Hong Kong company needs one, resident in Hong Kong or a Hong Kong-registered corporate secretary"],
                ["Registers", "Members, directors, secretaries, charges and a significant controllers register kept at the registered office"],
                ["Annual filings", "Annual return to the Companies Registry; audited financial statements; profits tax return"],
                ["Profits tax", "Territorial; 8.25% on the first HK$2 million and 16.5% above for corporations (two-tiered rate; one company per connected group can elect it)"],
                ["FSIE", "Foreign-sourced dividends, interest, disposal gains and IP income received in Hong Kong by a member of a multinational group can be taxed unless economic substance or participation tests are met"],
                ["Pillar Two", "Hong Kong Minimum Top-up Tax applies to groups with consolidated revenue of at least EUR 750 million"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Hong Kong-side steps before investing</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Check the memorandum and articles for a restriction on investing or giving guarantees, and any shareholders&apos; agreement consents.</li>
          <li>Pass a board resolution authorising the investment, the signatories and the Indian directors, and record the commercial reason.</li>
          <li>Check bank and licence conditions: a licensed financial institution, listed company or regulated group may need regulator or exchange notifications.</li>
          <li>Complete the Press Note 3 approval in India before funds go out. See <Link href="/hong-kong-to-india/india-press-note-3-and-hong-kong-entities" className="text-blue-800 font-semibold hover:underline">Press Note 3 and Hong Kong entities</Link>.</li>
          <li>Remit funds by bank transfer through an authorised Indian bank account with clear remittance details. See <Link href="/hong-kong-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
        </ol>

        <h2 id="registers" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Hong Kong corporate housekeeping</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What it requires</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Where it matters for India</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Company secretary", "Resident individual or Hong Kong-registered company", "Signs authority letters and holds records the Indian bank and Registrar ask for"],
                ["Significant controllers register", "Natural persons or entities with more than 25% of shares or votes, or control; keep at the registered office", "Matches the beneficial owner declarations used for India approvals and FC-GPR"],
                ["Annual return", "Filed with the Companies Registry each year", "Evidence of good standing for the apostille and Indian KYC"],
                ["Audited accounts", "Prepared under Hong Kong standards and audited by a Hong Kong certified public accountant", "Basis for the net worth certificate and Indian banking"],
                ["Business registration", "Business registration certificate renewed annually", "Requested by Indian banks with the incorporation certificate"],
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

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Profits tax on income from India</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Hong Kong taxes profits arising in or derived from Hong Kong. Dividends from an Indian subsidiary are generally not Hong Kong-sourced and are not taxed in the ordinary case.</li>
          <li><strong>FSIE:</strong> where a multinational group member receives foreign-sourced dividends, interest, disposal gains or IP income in Hong Kong, the income is deemed to arise in Hong Kong and taxable unless the entity meets the economic substance requirement or, for dividends and gains, the participation or other conditions apply. Confirm the current conditions with your Hong Kong adviser.</li>
          <li><strong>Capital gains:</strong> Hong Kong does not tax capital gains in general, but frequent trading in shares can be treated as a business profit. Gains on Indian shares are taxed in India. See <Link href="/hong-kong-to-india/india-hong-kong-dtaa" className="text-blue-800 font-semibold hover:underline">the DTAA guide</Link>.</li>
          <li><strong>Foreign tax credit:</strong> relief against Hong Kong profits tax for Indian tax applies under the treaty, limited to the Hong Kong tax payable on the same income.</li>
          <li><strong>Pillar Two:</strong> large multinational groups should check the Hong Kong Minimum Top-up Tax and the Indian position on global minimum tax.</li>
        </ul>

        <h2 id="mpf" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Employees and officers</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Hong Kong employees who travel to India may remain in the Mandatory Provident Fund while working
          there, and Indian provident fund rules also apply. See{" "}
          <Link href="/hong-kong-to-india/hong-kong-employees-in-india" className="text-blue-800 font-semibold hover:underline">Hong Kong employees in India</Link>.
        </p>

        <h2 id="sequence" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Order of work</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Start the Indian approval and Hong Kong board work together, because both use the same ownership chart
          and business plan. Do not incorporate the Indian company or send money until the approval is in hand.
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

        <GuideServiceBox path="/hong-kong-to-india/hong-kong-parent-obligations" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/hong-kong-to-india/faq"
          seeAllLabel="See all 157 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Companies Registry (Hong Kong)", href: "https://www.cr.gov.hk/" },
            { label: "Inland Revenue Department: profits tax", href: "https://www.ird.gov.hk/eng/tax/bus_pft.htm" },
            { label: "Inland Revenue Department (Hong Kong)", href: "https://www.ird.gov.hk/eng/welcome.htm" },
          ]}
        />

        <p className="mt-6">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Hong Kong
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Reporting on the Indian Subsidiary in Hong Kong?"
        description="Tell us how the group reports, and we'll supply the Indian figures your Hong Kong accounts, profits tax and FSIE positions need."
      />
    </main>
  )
}
