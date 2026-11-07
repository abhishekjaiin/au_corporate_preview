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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/india-germany-dtaa"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "how-it-works", label: "How the treaty works, and who can use it" },
  { id: "rates", label: "Tax rates table: what India can charge a German resident" },
  { id: "articles", label: "Article by article" },
  { id: "gains", label: "Gains on shares: an open point to confirm" },
  { id: "claim", label: "How to claim treaty rates: the paperwork" },
  { id: "pe-risk", label: "Permanent establishment: where German groups get caught" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the withholding rate on dividends from India to Germany?", a: "Under the treaty, 10% of the gross amount, with no shareholding tiers. The Indian payer applies it under Section 393 on receipt of the German certificate of residence and Form 41." },
  { q: "Does the India-Germany treaty have a services permanent establishment clause?", a: "The summaries we checked say it does not. Fixed-place and dependent-agent PE risk still applies, so track days and authority anyway." },
  { q: "How long can a German construction project run in India before a PE arises?", a: "More than six months, counting connected supervisory activity, as summarised in the sources we checked." },
  { q: "What documents does a German company need to claim treaty benefits?", a: "A certificate of residence from the German tax office, Form 41 (previously Form 10F), a no-PE declaration and a beneficial-ownership declaration, given to the Indian payer before payment." },
  { q: "Can India tax a German company on the sale of Indian shares?", a: "That depends on Article 13, where the sources we checked disagree. Confirm against the consolidated text before planning an exit." },
  { q: "Does the MLI change the India-Germany treaty?", a: "It was reported not to, because the treaty was not listed as a covered agreement, so the principal purpose test does not apply. India's domestic GAAR can still apply, and Germany's 2026 amendment of its MLI consent act should be watched." },
  { q: "Are royalties and technical fees taxed at the same rate?", a: "Yes, at 10% each under the treaty. Whether a payment is a technical fee depends on the treaty definition." },
  { q: "How is Indian tax relieved in Germany?", a: "Under Article 23 by credit or exemption depending on the income, and domestic law exempts 95% of qualifying dividends and share gains of corporations. Your German adviser should confirm the result for your structure." },
  { q: "Is there a mutual agreement procedure?", a: "Yes. A case can be presented within three years of the first notification of the action. The EU Arbitration Convention does not apply to India." },
]

const relatedCards = [
  { title: "Exit and Restructuring: Share Sale, Buyback, Liquidation and Closing a Subsidiary Owned by a German Parent", desc: "How a German parent exits an Indian subsidiary: share sale and FEMA pricing, capital gains and the treaty, buyback, voluntary liquidation, strike off, German effect and employee rules.", href: "/germany-to-india/exit-and-restructuring" },
  { title: "Getting Money Out of India to Germany: Dividends, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a German parent receives money from an Indian subsidiary: the flat 10% treaty rate, Section 393 withholding, Forms 41, 145 and 146, German 95% exemption, VAT on service fees and Indian GST reverse charge.", href: "/germany-to-india/repatriating-profits" },
  { title: "Transfer Pricing Between a German Parent and an Indian Subsidiary: What India Requires and Where Germany Differs", desc: "How transfer pricing works between Germany and India: Indian arm's length rules and Form 48, German documentation duties, the function transfer rules, APAs and the mutual agreement route.", href: "/germany-to-india/transfer-pricing" },
  { title: "German Employees Working in India: What the Tax Treaty and the Social Security Agreement Mean", desc: "How income tax and social security apply to German staff in India: the 183-day treaty test, the 2009 social security agreement, the 48-month detachment rule, certificates of coverage and German tax residence.", href: "/germany-to-india/german-employees-in-india-ssa" },
]

export default function IndiaGermanyDtaaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="The India-Germany Tax Treaty (DTAA), Article by Article: India as Source State, Germany as Residence State"
        description="The India-Germany double taxation agreement explained article by article from the German parent's point of view: the flat 10% rates table, permanent establishment, share gains, relief and how to claim."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "India-Germany DTAA: Article-by-Article Guide to the Tax Treaty for German Companies" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: the India-Germany DTAA"
        title="The India-Germany Tax Treaty (DTAA), Article by Article: India as Source State, Germany as Residence State"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Under the India-Germany double taxation agreement (signed 19 June 1995, in force 26 October 1996),
          India, as the source state, may tax dividends, interest, royalties and fees for technical services
          paid to a German parent at no more than 10%, a flat rate with no shareholding tiers. It taxes the
          parent&apos;s business profits only through a permanent establishment, a building site becomes one
          after six months, and the secondary sources we checked describe no separate services PE clause.
          Germany, as the residence state, relieves Indian tax and, for a qualifying GmbH, exempts 95% of
          dividends from an Indian subsidiary under domestic law.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="india-dtaa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Treaty", "Agreement between India and Germany for the avoidance of double taxation and the prevention of fiscal evasion with respect to taxes on income and capital (signed 19 June 1995 at Bonn; replaced the 1959 agreement as amended by the 1984 protocol)"],
                ["In force", "26 October 1996; effective in India for fiscal years beginning on or after 1 April 1997; a protocol forms an integral part"],
                ["Dividends", "10% of the gross amount, with no shareholding-based tiers"],
                ["Interest", "10%; interest paid to the German Government, the Bundesbank, KfW or DEG, and on Hermes-guaranteed loans, is reported as exempt in India"],
                ["Royalties and technical fees", "10% for both"],
                ["Permanent establishment", "Building site or installation above six months, including supervisory activity. No separate services PE clause appears in the summaries we checked"],
                ["Share gains", "Sources conflict (see the gains section); do not plan an exit until confirmed against the consolidated text"],
                ["MLI", "Reported not to modify this treaty, so the principal purpose test from the MLI does not apply; India's domestic GAAR can still apply"],
                ["Claim paperwork", "Tax residency certificate from the German tax office, Form 41 (previously Form 10F), beneficial-ownership and no-PE declarations, given to the Indian payer before payment"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="how-it-works" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the treaty works, and who can use it</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A treaty limits the tax a country can charge and allocates taxing rights between the{" "}
          <em>source state</em>, where the income arises (India, for Indian dividends, fees and gains), and the{" "}
          <em>residence state</em>, where the recipient is resident (Germany). The Indian payer applies the
          reduced rate under Section 393 of the Income-tax Act, 2025 when the German recipient proves residence
          and beneficial ownership.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Resident:</strong> the German company must be a German tax resident and hold a certificate of residence from its tax office (Finanzamt).</li>
          <li><strong>Beneficial owner:</strong> the recipient must own the income, not pass it on as a conduit.</li>
          <li><strong>Flat rate:</strong> because the treaty gives 10% on dividends, interest, royalties and technical fees, an intermediate holding company in a third country rarely improves the withholding position.</li>
          <li><strong>Domestic comparison:</strong> Indian domestic Withholding Tax on these payments to a non-resident is typically about 20% plus surcharge and cess, so the treaty rate is normally a saving.</li>
          <li><strong>Anti-avoidance:</strong> India&apos;s domestic GAAR applies from 1 April 2017 where the tax benefit exceeds INR 3 crore.</li>
        </ul>

        <h2 id="rates" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax rates table: what India can charge a German resident</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Article</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Income</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">India as source state may tax at</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["10", "Dividends", "10% of the gross amount", "No shareholding tiers"],
                ["11", "Interest", "10%", "Exempt in India for interest paid to the German Government, Bundesbank, KfW or DEG and on Hermes-guaranteed loans, as reported"],
                ["12", "Royalties", "10%", "Equipment rentals, know-how and intellectual property; check the definition in the text"],
                ["12", "Fees for technical services", "10%", "Check how the treaty defines the services; Indian authorities argue for a knowledge-transfer reading"],
                ["5 and 7", "Business profits", "Nil, unless there is a PE", "If a PE exists, profits attributable to it are taxed at the foreign-company rate (35% plus surcharge and cess)"],
                ["13", "Gains on Indian shares", "Unconfirmed: nil or domestic rates", "Sources conflict; see the gains section"],
                ["13", "Gains on immovable property", "Domestic rates", "Taxed where the property is"],
                ["15", "Employment income", "Domestic rates unless the 183-day exemption applies", "See the employees guide"],
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

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          <strong>Surcharge and cess.</strong> Domestic rates carry surcharge and cess. Whether payers add them
          on top of a treaty rate differs in practice, so agree the computation with your Indian adviser before
          the first payment.
        </div>

        <h2 id="articles" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Article by article</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Article numbers follow the secondary summaries we checked. Confirm each against the consolidated
          treaty text before citing it in a filing or a notice reply.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Taxes covered:</strong> in India, income tax with any surcharge; in Germany, income tax, corporation tax, trade tax and the solidarity surcharge.</li>
          <li><strong>Residence:</strong> a company is resident where it is liable to tax by reason of domicile, residence, management or similar criteria; dual residents are placed by agreement.</li>
          <li><strong>Article 5, permanent establishment:</strong> a fixed place of business such as a branch, office, factory or workshop; a building site, construction or installation project lasting more than six months, including connected supervision; and a dependent agent who habitually concludes contracts. A purchasing office or a stock held only for delivery does not create one.</li>
          <li><strong>No services PE clause:</strong> the summaries we checked say the treaty has no day-count services PE test. That does not make German staff safe: a fixed place at their disposal in India, or a dependent agent, can still create a PE. A blog we read suggested a seven-month risk and a 183-day guide; those figures are not in any treaty text we saw.</li>
          <li><strong>Article 7, business profits:</strong> taxable only in Germany unless the parent carries on business in India through a PE, and then only the profit attributable to that PE.</li>
          <li><strong>Associated enterprises:</strong> where parent and subsidiary deal on non-arm&apos;s-length terms, either state may adjust profits. See <Link href="/germany-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li><strong>Article 10, dividends:</strong> 10%, see the table.</li>
          <li><strong>Article 11, interest:</strong> 10%, with the reported public-lender and Hermes exemptions.</li>
          <li><strong>Article 12, royalties and technical fees:</strong> 10% each. Whether a service is a technical fee depends on the definition; services that are not fees for technical services are business profits and are taxed in India only if there is a PE.</li>
          <li><strong>Article 13, capital gains:</strong> see the gains section.</li>
          <li><strong>Article 14, independent personal services:</strong> taxable in India if the person has a fixed base there, or, as one summary says, stays in India for 120 days or more in the fiscal year.</li>
          <li><strong>Article 15, dependent personal services:</strong> employees are taxable in India on work done there unless they are present for 183 days or fewer in the fiscal year, are paid by an employer that is not resident in India and the cost is not borne by an Indian PE. See <Link href="/germany-to-india/german-employees-in-india-ssa" className="text-blue-800 font-semibold hover:underline">the employees guide</Link>.</li>
          <li><strong>Directors&apos; fees:</strong> taxable in the state where the paying company is resident, so India for an Indian subsidiary.</li>
          <li><strong>Article 23, relief from double tax:</strong> Germany relieves Indian tax by credit or exemption depending on the income, and domestic law adds a 95% exemption for qualifying dividends and share gains of corporations. India relieves under its domestic law.</li>
          <li><strong>Article 25, mutual agreement procedure:</strong> a case may be presented within three years of the first notification of the action. The EU Arbitration Convention does not apply to India.</li>
          <li><strong>Exchange of information:</strong> both countries exchange information under the treaty and under their wider agreements.</li>
        </ul>

        <h2 id="gains" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Gains on shares: an open point to confirm</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          This is the article where the sources we checked disagree, and it matters most at exit. One treaty
          summary says gains from the sale of shares in a company resident in a contracting state may be taxed
          in that state, so India could tax a German seller of Indian shares at domestic rates, with Germany
          giving relief. A second summary says shares are taxable only in the seller&apos;s state of residence,
          with India taxing only where more than half the value comes from Indian immovable property. The texts
          cannot both be right.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Before any sale or reorganisation:</strong> have your Indian adviser confirm Article 13 against the consolidated text and any Indian court decisions.</li>
          <li><strong>Model both outcomes:</strong> India at 12.5% (plus surcharge and cess) on unlisted shares held more than 24 months, against nil in India.</li>
          <li><strong>Indirect transfers:</strong> India&apos;s rules on indirect transfers may be raised against a sale of a holding company that derives value from India, whichever way Article 13 reads.</li>
          <li><strong>Germany:</strong> a sale of shares by a GmbH is largely exempt at corporate level (95%) under domestic law, so the German cost is small; the Indian cost decides.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          See{" "}
          <Link href="/germany-to-india/exit-and-restructuring" className="text-blue-800 font-semibold hover:underline">selling, restructuring or closing</Link>{" "}
          for the exit steps.
        </p>

        <h2 id="claim" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to claim treaty rates: the paperwork</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li>Obtain a certificate of residence for the German company from its tax office, for each relevant year.</li>
          <li>Prepare Form 41 (previously Form 10F) with identity, residence, period and tax identification details.</li>
          <li>Prepare a no-PE declaration and a beneficial-ownership declaration signed by a Geschäftsführer.</li>
          <li>Send the set to the Indian payer before the first payment. The payer withholds at the treaty rate under Section 393.</li>
          <li>The payer files Form 145 (previously Form 15CA) and, where required, a Chartered Accountant&apos;s Form 146 (previously Form 15CB).</li>
          <li>The German parent keeps the Indian TDS certificate for its German return and any credit.</li>
        </ol>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          <strong>Timing.</strong> Ask for the German certificate early and renew it every year, so the Indian
          payer is never forced to deduct at the higher domestic rate for want of a document.
        </div>

        <h2 id="pe-risk" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Permanent establishment: where German groups get caught</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Fixed place:</strong> an office, a desk or a workshop in the Indian subsidiary&apos;s premises that is at the disposal of German staff can be argued to be a fixed place of the parent.</li>
          <li><strong>Construction and installation:</strong> projects above six months, with supervision counted in. German plant builders and machine installers should track project time by site.</li>
          <li><strong>Dependent agent:</strong> a German manager who negotiates and signs Indian contracts can create an agency PE.</li>
          <li><strong>Document who directs the work:</strong> Indian staff taking daily instructions from Germany can be argued to be a disguised PE.</li>
          <li><strong>Use a services agreement</strong> with a cost-plus charge so profit for the work stays where it should.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          If a PE arises, India taxes its profits as those of a foreign company (35% plus surcharge and cess)
          and the German parent files an Indian return.
        </p>

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

        <GuideServiceBox path="/germany-to-india/india-germany-dtaa" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/germany-to-india/faq"
          seeAllLabel="See all 146 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Beacon Filing: India-Germany DTAA guide (secondary source)", href: "https://beaconfiling.com/dtaa/india-germany-dtaa" },
            { label: "India Law Offices: India-Germany DTAA (secondary source)", href: "https://www.indialawoffices.com/legal-articles/india-germany-dtaa" },
            { label: "Beacon Filing: Germany-India DTAA practical tax planning (secondary source)", href: "https://beaconfiling.com/blog/germany-india-dtaa-practical-tax-planning" },
            { label: "German Federal Central Tax Office (BZSt)", href: "https://www.bzst.de/EN/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and German
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Applying the India-Germany Treaty?"
        description="Tell us the payments and people moving between Germany and India, and we'll confirm how the treaty applies and what documents you need."
      />
    </main>
  )
}
