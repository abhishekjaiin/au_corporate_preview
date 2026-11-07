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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/sanctions-and-payments-for-russian-companies"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "gate", label: "Where sanctions bite" },
  { id: "channels", label: "Settlement channels" },
  { id: "screening", label: "A basic compliance programme" },
  { id: "indian", label: "Indian law and sanctions" },
  { id: "tips", label: "Practical tips" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does India apply US or EU sanctions on Russia?", a: "The Government of India has not adopted unilateral sanctions, but Indian banks and companies with dollar, euro or sterling exposure screen against them in practice." },
  { q: "Can a Russian company open an Indian bank account?", a: "Yes in principle, but expect enhanced due diligence and possible refusals. Prepare ownership, source of funds and a business plan." },
  { q: "Can I pay in roubles or rupees to avoid sanctions?", a: "Non-dollar settlement is possible through channels such as rupee vostro accounts, but it is not a sanctions safe harbour. Parties and banks still matter." },
  { q: "Are Indian banks refusing Russian payments?", a: "Some have, after new US sanctions, particularly on oil-related payments. The position changes, so ask your bank." },
  { q: "What is the 50% rule?", a: "Under US sanctions, entities owned 50% or more in aggregate by blocked persons are also blocked. EU and UK rules use ownership and control tests." },
  { q: "Who is responsible for sanctions screening?", a: "The Indian subsidiary and its directors, with support from advisers. The parent should also screen its own side." },
  { q: "Does the treaty or FDI route help with sanctions?", a: "No. Tax treaties and the FDI route do not remove sanctions or banking restrictions." },
]

const relatedCards = [
  { title: "Funding Your Indian Subsidiary from Russia: Equity, Preference Shares, External Borrowing, FEMA Reporting and the Remittance Route", desc: "How a Russian parent can fund an Indian company: equity and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return, the remittance route through banks acceptable to India and Russian clearance.", href: "/russia-to-india/funding-and-fema" },
  { title: "Can a Russian Company Invest in India? Automatic Route, Sector Caps, Defence and Sensitive Sectors, and the Real Obstacles", desc: "How India's FDI rules apply to a Russian parent: Press Note 3 covers land-border countries and Russia is not one, the Automatic Route and sector caps, defence and nuclear limits, beneficial ownership checks and why sanctions and payments are the practical hurdles.", href: "/russia-to-india/india-fdi-rules-for-russian-companies" },
  { title: "Trade with Russia from India: Customs Duties, Origin, the India-EAEU Free Trade Talks, Defence and Energy Procurement and Export Controls", desc: "What Russian companies and their Indian subsidiaries must know about goods: no India-Russia preferential agreement in force, EAEU free trade negotiations, customs value and origin, anti-dumping duties, BIS standards, defence and energy procurement and export controls.", href: "/russia-to-india/goods-trade-customs-and-eaeu-fta" },
  { title: "Twelve Common Mistakes Russian Companies Make in India and How to Avoid Them", desc: "The most common mistakes of Russian companies entering India: ignoring banking and sanctions, skipping Russian clearance, late FEMA filings, weak treaty paperwork, secondment tax errors, unauthenticated documents, unstamped contracts and ignoring the Indian calendar.", href: "/russia-to-india/common-mistakes" },
]

export default function SanctionsAndPaymentsForRussianCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Sanctions, Banking and Payment Channels for a Russian Parent and Its Indian Subsidiary: Screening, Special Rupee Accounts and Bank Due Diligence"
        description="The practical gate for Russian investors in India: US, EU and UK sanctions screening, the 50% ownership rule, Indian bank due diligence, settlement channels including rupee vostro accounts, why non-dollar payments are not a safe harbour and a compliance checklist."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Sanctions and Payments for Russian Companies in India: Banking, Screening and Settlement Channels" },
        ]}
      />

      <GuideHero
        eyebrow="Banking: sanctions and payments"
        title="Sanctions, Banking and Payment Channels for a Russian Parent and Its Indian Subsidiary: Screening, Special Rupee Accounts and Bank Due Diligence"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          India&apos;s government has not adopted US, EU or UK unilateral sanctions on Russia, but Indian banks,
          auditors, insurers and counterparties with dollar, euro or sterling exposure screen against those
          lists in practice, and secondary sanctions have led Indian banks to refuse some Russia-linked
          payments. For a Russian parent the question is therefore less whether Indian law allows the investment
          and more whether the funds can move, whether the bank will open and keep the account, and whether the
          Indian subsidiary can transact with customers and suppliers. Plan screening, ownership evidence and a
          payment route before incorporation, and take specialist sanctions advice for your facts.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="sanctions-payments" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Indian law", "FDI Policy and FEMA do not single out Russia; the Government's position is that it follows UN sanctions"],
                ["Practical regime", "US OFAC, EU and UK lists drive bank, insurer and counterparty decisions"],
                ["Ownership", "Entities owned 50% or more by listed persons can be blocked under US rules; EU and UK have ownership and control tests"],
                ["Banks", "Indian banks apply enhanced due diligence to Russian-owned customers and may refuse accounts or payments"],
                ["Settlement", "Rupee vostro accounts, third-currency settlement and other channels exist, but are not a sanctions safe harbour"],
                ["Remitting bank", "Many Russian banks are listed or cut off from SWIFT; choose a remitter the Indian bank accepts"],
                ["Evidence", "Source of funds, ownership chart and business rationale for every inflow"],
                ["Advice", "Specialist sanctions counsel before structuring"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="gate" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where sanctions bite</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Area</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Risk</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What to do</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Bank account opening", "Enhanced due diligence, long delays or refusal", "Prepare ownership, source of funds and business plan; approach banks early"],
                ["Inward remittance", "Remitter or intermediary bank listed or unacceptable", "Use a remitter the Indian bank has approved; pre-clear the route"],
                ["Customers and suppliers", "Counterparties with US or EU exposure may refuse to deal", "Screen counterparties; document the commercial reasons"],
                ["Dollar, euro and sterling payments", "Clearing through correspondent banks can expose payments to sanctions", "Avoid unsanctioned-looking structures that still touch those systems"],
                ["Technology and dual-use goods", "Export control and sanctions on supply to or from Russia", "Check licence and end-use rules in each jurisdiction"],
                ["Insurance, shipping and logistics", "Providers may decline cover or carriage", "Confirm cover before committing"],
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

        <h2 id="channels" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Settlement channels</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Rupee vostro accounts:</strong> since 2022 the RBI has allowed authorised banks to open special rupee vostro accounts for settling trade in rupees with partner countries. Rupee balances built up in them have had limited uses, so check what is currently permitted before planning around them.</li>
          <li><strong>Third currencies:</strong> UAE dirham and Chinese yuan have been used. A non-dollar payment can still breach sanctions depending on the parties and banks involved, so it is not a safe harbour.</li>
          <li><strong>Direct bank transfer from Russia:</strong> depends on whether the Russian bank and any intermediary are acceptable to the Indian bank. See <Link href="/russia-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
          <li><strong>Documentation:</strong> every inflow needs an invoice or investment agreement, the purpose code and evidence of source of funds.</li>
        </ul>

        <h2 id="screening" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A basic compliance programme</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Screen the parent, its owners and directors, the Indian directors and all counterparties against US, EU and UK lists, and against the Indian and UN lists.</li>
          <li>Apply the ownership tests: check aggregate ownership by listed persons and control.</li>
          <li>Keep the evidence file: ownership chart, source of funds, contracts and screening results.</li>
          <li>Add sanctions clauses to contracts: representations, termination and audit rights.</li>
          <li>Review regularly; lists and guidance change often.</li>
        </ol>

        <h2 id="indian" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian law and sanctions</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian law does not prohibit dealing with a person merely because a foreign government has sanctioned
          them, but Indian companies that use the US financial system or that are owned by or sell to sanctioned
          or exposed groups face real consequences. The Indian subsidiary&apos;s own directors should understand
          the risk, and any dual-use or technology transfers must also comply with Indian export and import
          rules.
        </p>

        <h2 id="tips" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Practical tips</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Open the bank account before the capital arrives, and tell the bank the funding route.</li>
          <li>Keep a second bank relationship if possible.</li>
          <li>Do not use intermediaries or conduits whose only purpose is to hide the Russian origin of funds; it raises more red flags.</li>
          <li>Brief the Indian auditor early.</li>
        </ul>

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

        <GuideServiceBox path="/russia-to-india/sanctions-and-payments-for-russian-companies" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/russia-to-india/faq"
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
            { label: "Eldwick Law: Russia sanctions and Indian businesses", href: "https://eldwicklaw.com/russia-sanctions-india/" },
            { label: "US Treasury OFAC: Russian harmful foreign activities sanctions", href: "https://ofac.treasury.gov/sanctions-programs-and-country-information/russian-harmful-foreign-activities-sanctions" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Russian
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Planning Banking and Payments for India?"
        description="Tell us the ownership chain and the remitting bank, and we'll map the account opening, screening evidence and settlement options. Sanctions advice comes from specialist counsel."
      />
    </main>
  )
}
