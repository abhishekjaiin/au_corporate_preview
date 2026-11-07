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

const PAGE_URL = "https://www.theaucorp.com/usa-to-india/us-tax-on-indian-subsidiary-ncti-subpart-f-and-foreign-tax-credit"
const PARENT_URL = "https://www.theaucorp.com/usa-to-india"

const toc = [
  { id: "country-specific", label: "What's different for US companies" },
  { id: "map", label: "The two ways the US reaches an Indian subsidiary" },
  { id: "ncti", label: "Net CFC tested income, the regime formerly known as GILTI" },
  { id: "credit", label: "Indian tax as a foreign tax credit" },
  { id: "high-tax", label: "The high-tax exclusion" },
  { id: "owners", label: "The owner matters: C corporation, pass-through or individual" },
  { id: "entity", label: "Classification of the Indian company" },
  { id: "forms", label: "The forms and the data they need from India" },
  { id: "plan", label: "A short planning list before you incorporate" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does the US tax profits of an Indian subsidiary before they are paid?", a: "In part. Subpart F income and net CFC tested income (formerly GILTI) are included in the US shareholder's income each year, whether or not cash is distributed." },
  { q: "What was GILTI renamed?", a: "Net CFC tested income, or NCTI, for tax years beginning after 2025 under the July 2025 tax act. Confirm the current deduction and credit percentages with a US adviser." },
  { q: "Can a US company deduct dividends from India?", a: "A US C corporation may claim a 100% dividends-received deduction under Section 245A if the ownership and holding period conditions are met." },
  { q: "Is Indian tax creditable in the US?", a: "Indian income tax paid by the subsidiary, and Indian withholding tax, can be credited subject to the foreign tax credit limits and baskets." },
  { q: "What is the high-tax exclusion?", a: "An election to exclude income taxed abroad above a stated share of the US rate. Indian company tax of about 25.17% is above that level, but the election is group-wide." },
  { q: "Does the owner type matter?", a: "Yes. A C corporation, an S corporation, a partnership and an individual are taxed differently, and pass-through owners may consider a Section 962 election." },
  { q: "Can the US owner choose how the Indian company is classified?", a: "Often yes, because an Indian private limited company is not a per se corporation. The choice has consequences and should be made before incorporation." },
  { q: "Which forms does the US owner file every year?", a: "Form 5471 for the foreign corporation, and where relevant Forms 926, 8992, 8993, 1118 or 1116 and 8858." },
  { q: "Why does the Indian year end matter?", a: "The Indian year ends on 31 March and many US owners use a calendar year, so the Indian data has to be re-cut for the US return." },
]

const relatedCards = [
  { title: "US parent obligations", desc: "Form 5471 and the other US filings that follow an Indian subsidiary.", href: "/usa-to-india/us-parent-obligations" },
  { title: "Repatriating profits to the US", desc: "Dividends, fees, royalties and the documents the bank needs.", href: "/usa-to-india/repatriating-profits" },
  { title: "Transfer pricing for US groups", desc: "Form 3CEB, benchmarking and intercompany agreements.", href: "/usa-to-india/transfer-pricing" },
  { title: "Funding and FC-GPR", desc: "How to bring in capital and report it to the Reserve Bank.", href: "/usa-to-india/funding-fema-fc-gpr" },
]

export default function UsTaxOnIndianSubsidiaryNctiSubpartFAndForeignTaxCreditPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How the US Taxes Profits of an Indian Subsidiary: Net CFC Tested Income, Subpart F, the Participation Deduction, the High-Tax Exclusion and Foreign Tax Credits"
        description="The US side of an Indian subsidiary for a US C corporation or pass-through owner: how profits are taxed when earned or when distributed, what changed after the July 2025 tax act, the role of Indian tax as a credit, check-the-box choices and the forms (5471, 926, 1118, 8992 and 8993)."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-US"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/usa-to-india" },
          { label: "US Tax on an Indian Subsidiary: NCTI (Formerly GILTI), Subpart F, Section 245A and Foreign Tax Credits" },
        ]}
      />

      <GuideHero
        eyebrow="US side: tax"
        title="How the US Taxes Profits of an Indian Subsidiary: Net CFC Tested Income, Subpart F, the Participation Deduction, the High-Tax Exclusion and Foreign Tax Credits"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A US company that owns an Indian subsidiary is taxed in the US on its Indian profits in two different
          ways. Profits distributed as dividends to a US C corporation can qualify for a 100% dividends-received
          deduction under Section 245A if holding-period and entity conditions are met. Profits that are not
          distributed can still be taxed currently, because the controlled foreign corporation rules treat part
          of the subsidiary&apos;s income as the parent&apos;s income each year: Subpart F income, and the
          tested income regime that was called GILTI and was renamed net CFC tested income (NCTI) by the July
          2025 tax act for years beginning after 2025. Indian corporate tax of about 25.17% is a foreign tax
          that can be credited, in part, against the US tax on that income, and an election to exclude
          high-taxed income may remove it altogether. Which rule decides the result depends on whether the owner
          is a C corporation or a pass-through, so ask your US adviser to model the structure before the
          subsidiary earns its first rupee. This page is a map for that conversation and not US tax advice.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the US
          </Link>
        </p>

        <GuideCountryContext country="usa" topic="home-country-tax" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Dividends to a US C corporation", "Possible 100% dividends-received deduction (Section 245A) if conditions on ownership and holding period are met"],
                ["Current inclusion", "Subpart F income and net CFC tested income (formerly GILTI) are taxed whether or not cash is paid up"],
                ["NCTI changes", "Renamed by the July 2025 act for tax years beginning after 2025; deduction and credit percentages changed; confirm current figures"],
                ["High-tax exclusion", "Elective exclusion where the foreign effective rate exceeds a stated share of the US rate; Indian company tax of about 25.17% is above the usual threshold"],
                ["Foreign tax credit", "Claimed on Form 1118 (corporations) or Form 1116 (individuals); baskets and limits apply"],
                ["Entity election", "An Indian private limited company is not a per se corporation; a US owner may be able to elect its classification"],
                ["Main forms", "Form 5471 (every year), Form 926 (transfers), Forms 8992 and 8993, Form 1118"],
                ["Indian tax rate", "About 25.17% including surcharge and cess for a domestic company opting into the lower-rate regime"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="map" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The two ways the US reaches an Indian subsidiary</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The US system is not a simple choice between taxing profits when earned and when received. It does
          both for different slices of income, and the slice depends on the kind of income and the kind of
          owner. For a US C corporation owning at least 10% of the Indian company, dividends can carry a 100%
          deduction, which means a distribution costs no further US tax. The price of that relief is a
          current-year charge on income that the controlled foreign corporation rules pull in before any
          distribution, so the question is rarely whether the US taxes the profit but when and at what net rate
          after credits.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          An Indian subsidiary that is a controlled foreign corporation (more than 50% owned by US shareholders)
          triggers annual information reporting on Form 5471 regardless of whether any income is included. The
          form lists the entity&apos;s financial statements, its shareholders, its transactions with the US
          owner and its earnings and profits. Penalties for missing or incomplete forms are significant and run
          per form per year, so the first filing is the one to get right. See{" "}
          <Link href="/usa-to-india/us-parent-obligations" className="text-blue-800 font-semibold hover:underline">US parent obligations</Link>{" "}
          for the filing list.
        </p>

        <h2 id="ncti" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Net CFC tested income, the regime formerly known as GILTI</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Tested income is the income of a controlled foreign corporation after allowing for certain items, such
          as Subpart F income and income already taxed at high rates. A US shareholder includes its share of the
          aggregate tested income each year, reduced by a deemed return on tangible assets under the old rules,
          and then deducts a percentage of the inclusion under Section 250 so that the effective US rate falls
          below the standard 21%. The July 2025 act renamed the regime net CFC tested income for years beginning
          after 2025, removed the deemed tangible return, reduced the Section 250 deduction to 40% (an effective
          rate of about 12.6% at a 21% corporate rate) and changed the credit haircut so that more foreign tax
          is creditable. We state these figures from secondary summaries of the act, so confirm each one against
          the Internal Revenue Code and current guidance with your US adviser.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          For a service or software subsidiary with few tangible assets, the old deemed-return exclusion gave
          little relief, so the removal of that exclusion matters less than the changed deduction and credit
          percentages. For a manufacturing subsidiary with large plant and machinery, the removal can matter
          more. The practical consequence is that a US group that modelled its Indian subsidiary under the old
          GILTI rules should re-run the numbers for 2026.
        </p>

        <h2 id="credit" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian tax as a foreign tax credit</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A US corporation may credit foreign income taxes paid or deemed paid by the subsidiary against US tax
          on the included income, subject to limitations and baskets. Indian corporate income tax qualifies as
          an income tax, so for the typical operating subsidiary paying about 25.17% the credit is substantial.
          The credit for tested income is limited to a stated percentage of the foreign tax, expense allocation
          rules reduce the limit, and unused credits in the tested-income basket do not carry forward. Indian
          withholding tax on dividends, royalties and fees paid to the US parent is a separate foreign tax,
          creditable in the general or passive basket depending on the income. See{" "}
          <Link href="/usa-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">repatriating profits</Link>{" "}
          for the Indian side of those payments.
        </p>

        <h2 id="high-tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The high-tax exclusion</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A US shareholder can elect to exclude from tested income the income of a controlled foreign
          corporation that is taxed abroad at an effective rate above a threshold set as a percentage of the US
          corporate rate (90% of the top rate, which is 18.9% when the US rate is 21%). Indian company tax of
          about 25.17% is above that level, so the election may take Indian operating income out of the
          tested-income calculation entirely, which also means the foreign tax on it is not credited. Whether
          the election is better than inclusion with a partial credit depends on the group&apos;s mix of low-
          and high-tax subsidiaries, because the election is made for all controlled foreign corporations of the
          US shareholder in a group. Do the comparison, do not assume.
        </p>

        <h2 id="owners" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The owner matters: C corporation, pass-through or individual</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">US owner</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical result</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Points to raise with your adviser</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["C corporation", "Section 245A deduction on dividends; tested income taxed with the Section 250 deduction and credits; high-tax election available", "Group-wide election; expense allocation; Form 5471 and 8992"],
                ["S corporation or partnership with individual owners", "Inclusions pass through to owners; individuals do not get Section 250 or the deemed-paid credit unless they elect corporate treatment under Section 962", "Whether a Section 962 election is better; Form 1116"],
                ["Individual with a direct stake", "Similar to the pass-through case; dividends may be qualified at a lower rate if the Indian company is in a treaty country", "Treaty and qualified dividend status; Form 5471"],
                ["Disregarded or branch treatment", "Profits taxed in the US as earned; Indian tax credited; Form 8858 reporting", "Whether the election is available and whether it suits the group"],
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

        <h2 id="entity" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Classification of the Indian company</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          US tax law lets many foreign entities choose whether to be treated as a corporation, a partnership or
          a disregarded entity. An Indian private limited company is not on the list of entities that are always
          corporations, so the US owner can often choose its treatment by filing an election, and an Indian
          limited liability partnership can too. The default for a foreign entity with limited liability for all
          members is corporate treatment. A change of treatment is a taxable event in some directions, and a
          disregarded Indian subsidiary brings its income straight onto the US return and out of the controlled
          foreign corporation regime. This is a high-stakes choice that should be made with a US adviser before
          incorporation, not after the first return.
        </p>

        <h2 id="forms" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The forms and the data they need from India</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Form</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Purpose</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Data from the Indian company</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["5471", "Annual information return on a foreign corporation", "Financial statements in US dollars, ownership, related-party transactions, earnings and profits"],
                ["926", "Return on transfers of property to a foreign corporation", "Date and amount of each capital contribution"],
                ["8992 and 8993", "Tested income inclusion and the Section 250 deduction", "Tested income by entity; tangible asset data if still required"],
                ["1118 or 1116", "Foreign tax credit", "Indian income tax paid, withholding certificates, exchange rates"],
                ["8858", "Foreign disregarded entity or branch", "Branch or entity books"],
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
          The Indian company&apos;s year ends on 31 March and the US owner&apos;s year usually ends on 31
          December, so the 5471 data must be re-cut to the US year or the controlled foreign corporation must be
          allowed to follow its own year under the rules. Ask the Indian accountant to prepare a trial balance
          mapped to US tax categories at each date your CPA needs.
        </p>

        <h2 id="plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A short planning list before you incorporate</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Decide the US owner of the Indian shares and how the US group will be taxed on them.</li>
          <li>Ask the US adviser whether to elect disregarded treatment and whether to make the high-tax exclusion election.</li>
          <li>Model the first three years under the rules in force for 2026 and later, including Indian tax and withholding tax.</li>
          <li>Agree the data calendar between the Indian accountant and the US CPA.</li>
          <li>Record transfers of capital for Form 926 at the time of each remittance. See <Link href="/usa-to-india/funding-fema-fc-gpr" className="text-blue-800 font-semibold hover:underline">funding and FC-GPR</Link>.</li>
          <li>Align transfer pricing in both countries. See <Link href="/usa-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
        </ol>

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

        <GuideServiceBox path="/usa-to-india/us-tax-on-indian-subsidiary-ncti-subpart-f-and-foreign-tax-credit" />
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
            { label: "IRS: About Form 5471", href: "https://www.irs.gov/forms-pubs/about-form-5471" },
            { label: "Internal Revenue Service", href: "https://www.irs.gov/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
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
        title="Lining Up Indian and US Tax?"
        description="Tell us the subsidiary's profile, and we'll provide the Indian figures and tax positions your US CPA needs."
      />
    </main>
  )
}
