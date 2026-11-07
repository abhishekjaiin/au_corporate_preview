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

const PAGE_URL = "https://www.theaucorp.com/usa-to-india/nri-and-oci-founders-of-us-companies-investing-in-india"
const PARENT_URL = "https://www.theaucorp.com/usa-to-india"

const toc = [
  { id: "country-specific", label: "What's different for US companies" },
  { id: "status", label: "Who is an NRI, an OCI and a resident" },
  { id: "route", label: "Choosing how the money goes in" },
  { id: "tax", label: "Tax residency and the treaty" },
  { id: "director", label: "Directorship and the Resident Director rule" },
  { id: "us", label: "US reporting for founders" },
  { id: "family", label: "Family and property" },
  { id: "checklist", label: "Founder checklist" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is an OCI cardholder treated as an NRI?", a: "For most investment purposes, yes. An OCI cardholder is a foreign citizen of Indian origin and is generally treated like an NRI for foreign exchange investment rules." },
  { q: "Can an NRI invest in India without foreign direct investment conditions?", a: "On a non-repatriable basis, an NRI's investment is treated as a domestic investment. The repatriable basis follows the foreign direct investment route." },
  { q: "If my US company is owned by Indian-origin founders, is it an NRI investor?", a: "The company is a non-resident entity and invests under the foreign direct investment route. Special rules for NRI-owned entities should be checked." },
  { q: "When does a founder become an Indian tax resident?", a: "At 182 days or more in a financial year, or the multi-year test, with higher thresholds for some visitors of Indian origin. Confirm your own case." },
  { q: "What if both India and the US treat me as a resident?", a: "The India-US treaty's tie-breaker looks at permanent home, vital interests, habitual abode and nationality." },
  { q: "Can an OCI be a director of an Indian company?", a: "Yes, with a Director Identification Number and Digital Signature Certificate. The Resident Director rule needs 182 days in India." },
  { q: "Do US citizens report Indian holdings?", a: "Yes. Form 5471, the FBAR and Form 8938 may apply, depending on the holding and the thresholds." },
  { q: "Can I send the sale proceeds of Indian property abroad?", a: "Subject to limits and tax conditions for NRIs. Take advice before the sale." },
  { q: "Should the founder hold the shares or the US company?", a: "It depends on the plan for ownership, exit and return to India. Decide before the first remittance." },
]

const relatedCards = [
  { title: "Funding and FC-GPR", desc: "How to bring in capital and report it to the Reserve Bank.", href: "/usa-to-india/funding-fema-fc-gpr" },
  { title: "Resident director", desc: "The 182-day rule and who can fill it.", href: "/usa-to-india/resident-director" },
  { title: "Share valuation", desc: "FEMA valuation for share issues and transfers.", href: "/usa-to-india/share-valuation" },
  { title: "How the US Taxes Profits of an Indian Subsidiary: Net CFC Tested Income, Subpart F, the Participation Deduction, the High-Tax Exclusion and Foreign Tax Credits", desc: "The US side of an Indian subsidiary for a US C corporation or pass-through owner: how profits are taxed when earned or when distributed, what changed after the July 2025 tax act, the role of Indian tax as a credit, check-the-box choices and the forms (5471, 926, 1118, 8992 and 8993).", href: "/usa-to-india/us-tax-on-indian-subsidiary-ncti-subpart-f-and-foreign-tax-credit" },
]

export default function NriAndOciFoundersOfUsCompaniesInvestingInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Indian-Origin Founders of US Companies Setting Up in India: NRI and OCI Rules, Repatriable and Non-Repatriable Investment, Resident Status, Dual Tax Residency and Directorship"
        description="How the status of the founder changes the plan: how FEMA treats NRIs, OCI cardholders and US citizens of Indian origin, the repatriable and non-repatriable investment routes, whether a US company owned by NRIs is treated differently, resident status for tax, the treaty tie-breaker, directorship and a founder checklist."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-US"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/usa-to-india" },
          { label: "NRI and OCI Founders of US Companies: FEMA Status, Investment Routes and Tax Residency" },
        ]}
      />

      <GuideHero
        eyebrow="Founders: NRI and OCI"
        title="Indian-Origin Founders of US Companies Setting Up in India: NRI and OCI Rules, Repatriable and Non-Repatriable Investment, Resident Status, Dual Tax Residency and Directorship"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Many US companies with Indian operations are led by founders who were born in India or who hold
          Overseas Citizen of India cards. Their status affects the plan. For foreign exchange purposes, an NRI
          is an Indian citizen resident outside India, and an OCI cardholder is generally treated like an NRI
          for investment. Investments made by an NRI or OCI personally can go into an Indian company on a
          non-repatriable basis, treated as a domestic investment and free of foreign investment sector
          conditions, or on a repatriable basis under the foreign direct investment route. A US company is a
          non-resident entity, and an investment by it follows the foreign direct investment route, even if the
          founders are of Indian origin. Tax residency is separate: a founder who spends 182 days or more in
          India in a year, or meets the multi-year test, can become an Indian tax resident, and the India-US
          treaty decides which country keeps the primary right to tax if both claim. This page maps the
          questions and does not replace advice on your own status.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the US
          </Link>
        </p>

        <GuideCountryContext country="usa" topic="nri-oci-founders" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["NRI", "Indian citizen who is resident outside India for foreign exchange purposes"],
                ["OCI", "Cardholder of foreign nationality with Indian origin; treated like an NRI for most investment purposes; not a citizen"],
                ["Personal investment", "May be on a non-repatriable basis, treated as domestic, or repatriable under the FDI route"],
                ["US company owned by NRIs", "Investment by the company is foreign investment under the FDI route; special rules for non-repatriation by NRI-owned entities should be checked"],
                ["Tax residency", "Indian resident if 182 days or more in the year, or the multi-year test; special thresholds for NRIs visiting India"],
                ["Treaty", "Tie-breaker rules in the India-US treaty decide treaty residence for individuals; US citizens are taxed on worldwide income"],
                ["Directorship", "An NRI or OCI can be a director; the Resident Director rule needs 182 days in India"],
                ["Reporting", "US reporting of foreign accounts and entities; Indian reporting of foreign assets for residents"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="status" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who is an NRI, an OCI and a resident</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Status</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Meaning for foreign exchange</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical treatment of investment</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Resident of India", "Lives in India for the period and purpose set by the foreign exchange law", "Overseas investment rules apply to money sent abroad"],
                ["NRI", "Indian citizen resident outside India", "May invest in India on a repatriable or non-repatriable basis"],
                ["OCI cardholder", "Foreign citizen of Indian origin with an OCI card; not an Indian citizen", "Treated like an NRI for most investment routes"],
                ["Foreign citizen without OCI", "Non-resident foreign investor", "Foreign direct investment route"],
                ["US company", "Non-resident entity", "Foreign direct investment route, even if owned by NRIs or OCIs"],
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
          The status is a question of fact and of the law&apos;s definitions at the date of investment.
          Citizenship, passport, OCI card, days of stay and purpose of stay all matter. Founders who have moved
          between countries should write down the dates of each move, because the answer for foreign exchange
          and the answer for tax can differ.
        </p>

        <h2 id="route" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing how the money goes in</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          An NRI or OCI founder who invests personally in an Indian company has a choice. Non-repatriable
          investment is treated as a domestic investment, so the sector caps and pricing rules for foreign
          investment do not apply in the same way, but the money and its income stay in India in a way that
          limits sending funds abroad, with allowances for limited remittance. Repatriable investment follows
          the foreign direct investment route, with pricing at or above fair value, reporting on FC-GPR and
          freedom to remit proceeds. A US company that is owned by the same founders invests under the foreign
          direct investment route, and it is the company, not the founders, that is the investor.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The choice should follow the plan. A founder who intends to return and run the business in India may
          prefer to hold shares personally on a non-repatriable basis, while a founder who wants the cap table,
          ownership and exit to sit in the US company will invest through the company. Mixing the two is
          possible, but the cap table and reporting become more complex. Take advice before the first
          remittance. See{" "}
          <Link href="/usa-to-india/funding-fema-fc-gpr" className="text-blue-800 font-semibold hover:underline">funding and FC-GPR</Link>{" "}
          and{" "}
          <Link href="/usa-to-india/share-valuation" className="text-blue-800 font-semibold hover:underline">share valuation</Link>.
        </p>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax residency and the treaty</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India taxes residents on worldwide income and non-residents on Indian-source income. An individual is
          resident if present for 182 days or more in the financial year, or for 60 days in the year and 365
          days in the four preceding years, with a higher 182-day threshold for Indian citizens and persons of
          Indian origin who visit from abroad, and a deemed residence rule for high-income Indian citizens with
          no tax residence elsewhere. A resident who has been abroad most of the previous years may be &apos;not
          ordinarily resident&apos;, which limits the tax on foreign income for a time. The US taxes its
          citizens and residents on worldwide income wherever they live. If both countries treat the founder as
          a resident, the treaty&apos;s tie-breaker looks at permanent home, centre of vital interests, habitual
          abode and nationality. Keep a day-count diary and take advice before a long stay in India.
        </p>

        <h2 id="director" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Directorship and the Resident Director rule</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A founder who is an NRI or OCI can be a director of the Indian company like any other. The Resident
          Director rule requires at least one director who has stayed in India for 182 days in the year, so a
          founder who divides the year between the US and India may or may not qualify. Decide whether the
          founder or a local leader will fill the seat. See{" "}
          <Link href="/usa-to-india/resident-director" className="text-blue-800 font-semibold hover:underline">the resident director guide</Link>.
          An OCI or NRI who is a director also needs a Director Identification Number and Digital Signature
          Certificate and, if employed by the Indian company, an appropriate visa for an OCI, which is simpler
          than for other foreigners but still needs registration steps.
        </p>

        <h2 id="us" className="text-2xl font-bold text-gray-900 mt-12 mb-4">US reporting for founders</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>US citizens and residents with an interest in a foreign corporation file Form 5471 and, where applicable, other information returns. See <Link href="/usa-to-india/us-tax-on-indian-subsidiary-ncti-subpart-f-and-foreign-tax-credit" className="text-blue-800 font-semibold hover:underline">the US tax guide</Link>.</li>
          <li>Foreign bank and financial accounts above the threshold are reported on the FBAR and on Form 8938 where the asset thresholds are met.</li>
          <li>Gifts and inheritances from relatives in India can need US reporting above thresholds.</li>
          <li>Indian residents must report foreign assets in their Indian return; a founder moving to India should plan that before the move.</li>
          <li>A change of residence can trigger exit or entry tax events in both countries.</li>
        </ul>

        <h2 id="family" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Family and property</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Founders of Indian origin often have family property, accounts and shares in India. These affect the
          plan in three ways. Money received from the sale of Indian property by an NRI is subject to
          repatriation limits and tax rules. Accounts held as resident accounts must be converted when the
          person becomes an NRI. And a founder who inherits shares in an Indian company has to follow the
          foreign exchange rules for the holding. Keep these separate from the company&apos;s investment so that
          the filings for each are clean.
        </p>

        <h2 id="checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Founder checklist</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Write down citizenship, passport, OCI status, residence and day counts for the last five years.</li>
          <li>Decide whether the investment is personal or through the US company, and whether it is repatriable.</li>
          <li>Ask the US adviser about the Indian company&apos;s classification and the reporting that follows.</li>
          <li>Choose the Resident Director with the 182-day rule in mind.</li>
          <li>Keep a day-count diary for India and the US.</li>
          <li>Separate personal Indian assets from company investment records.</li>
          <li>Review before any move of residence.</li>
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

        <GuideServiceBox path="/usa-to-india/nri-and-oci-founders-of-us-companies-investing-in-india" />
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
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "OCI Services (India)", href: "https://ociservices.gov.in/" },
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
        title="NRI or OCI Founder Investing in India?"
        description="Tell us your status and the investment route, and we'll map the FEMA filings and tax residency questions."
      />
    </main>
  )
}
