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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/tax-and-social-security-treaties/india-japan-dtaa-guide"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "purpose", label: "What the treaty does for a Japanese group" },
  { id: "articles", label: "The articles Japanese groups use most" },
  { id: "residence", label: "Who counts as resident" },
  { id: "pe", label: "Permanent establishment under the treaty" },
  { id: "relief", label: "How double tax is relieved" },
  { id: "disputes", label: "When the authorities disagree" },
  { id: "japan-rates", label: "One 10% rate, and what it is compared with" },
  { id: "japan-dividends", label: "Why Indian tax on dividends is usually a final cost in Japan" },
  { id: "japan-documents", label: "Paperwork for a Japanese company" },
  { id: "japan-example", label: "Worked example: technical support fee to a Japanese parent" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "When was the India-Japan tax treaty signed?", a: "In 1989, and it was amended by a protocol in 2006." },
  { q: "What rate does the treaty set on dividends?", a: "Indian tax on dividends paid to a Japanese resident is capped at 10%." },
  { q: "Does the treaty override Indian law?", a: "India applies the treaty where it is more beneficial to the taxpayer, under Section 159 of the Income-tax Act, 2025." },
  { q: "Are fees for technical services taxed without a PE?", a: "Yes. The treaty allows India to tax them at up to 10% even if the Japanese company has no PE in India." },
  { q: "How is the treaty claimed?", a: "With a Japanese Certificate of Residence and Form 41, plus declarations the payer asks for." },
  { q: "How does Japan relieve the Indian tax?", a: "Through the 95% foreign dividend exemption for qualifying dividends, and a foreign tax credit for other income." },
  { q: "Can a chuzaiin be resident in both countries?", a: "Yes under domestic law; the treaty's tie-breaker then decides which country has primary taxing rights." },
  { q: "What if India and Japan both tax the same profit?", a: "The taxpayer can request the Mutual Agreement Procedure under the treaty." },
]

const relatedCards = [
  { title: "India-Japan DTAA Withholding Rates", desc: "Rates by payment type.", href: "/japan-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" },
  { title: "How to Claim Treaty Benefits", desc: "The documents the payer needs.", href: "/japan-to-india/tax-and-social-security-treaties/treaty-benefits-documents" },
  { title: "Tax Treaty and PE Risk", desc: "Permanent establishment in practice.", href: "/japan-to-india/dtaa-pe-risk" },
  { title: "Japan Parent Obligations", desc: "How the parent reports Indian income.", href: "/japan-to-india/japan-parent-obligations" },
]

export default function IndiaJapanDtaaGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="The India-Japan Tax Treaty (DTAA) Explained: Scope, Residency and Relief from Double Tax"
        description="How the India-Japan tax treaty works: who qualifies, taxes covered, treaty versus domestic law, residency, relief from double tax and disputes."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "Tax and Social Security Treaties", href: "/japan-to-india/tax-and-social-security-treaties" },
          { label: "India-Japan Tax Treaty (DTAA) Explained" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: DTAA"
        title="The India-Japan Tax Treaty (DTAA) Explained: Scope, Residency and Relief from Double Tax"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The India-Japan tax treaty, signed in 1989 and amended by a 2006 protocol, decides which country may tax income flowing between the two and caps Indian tax at 10% on dividends, interest, royalties and fees for technical services. It applies alongside Indian domestic law, which India applies only where it is more favourable, and it is claimed with a Japanese Certificate of Residence and Form 41. Disputes between the two tax authorities go to the Mutual Agreement Procedure.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Signed and amended", "1989, amended by the 2006 protocol"],
                ["Withholding caps", "10% on dividends, interest, royalties and fees for technical services"],
                ["Indian law", "Section 159 of the Income-tax Act, 2025 (previously Sections 90 and 90A): the treaty applies where more beneficial"],
                ["Proof", "Certificate of Residence from the Japanese tax office and Form 41"],
                ["Relief in Japan", "Foreign tax credit, or the 95% foreign dividend exemption for qualifying dividends"],
                ["Disputes", "Mutual Agreement Procedure between the two competent authorities"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="purpose" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the treaty does for a Japanese group</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Without a treaty, India would tax income arising in India at its domestic rates and Japan would tax the same income in the hands of the Japanese company. The treaty allocates taxing rights, lowers Indian withholding on payments to Japan, defines when a Japanese company has a taxable presence in India, and gives both sides a route to resolve conflicts. For most Japanese groups its practical effect is the 10% cap on payments from the Indian subsidiary.
        </p>
        <h2 id="articles" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The articles Japanese groups use most</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What the treaty says in outline</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Practical point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Residence</th>
                <td className="border border-gray-300 p-3">Defines who is a resident of each country, with tie-breaker rules</td>
                <td className="border border-gray-300 p-3">The Certificate of Residence proves it</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Permanent establishment</th>
                <td className="border border-gray-300 p-3">Fixed place, construction or installation projects, dependent agents</td>
                <td className="border border-gray-300 p-3">Watch chuzaiin authority and project durations</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividends</th>
                <td className="border border-gray-300 p-3">Indian tax capped at 10%</td>
                <td className="border border-gray-300 p-3">Japan exempts 95% for qualifying holdings</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Interest</th>
                <td className="border border-gray-300 p-3">Indian tax capped at 10%</td>
                <td className="border border-gray-300 p-3">ECB rules and interest limitation still apply in India</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Royalties and fees for technical services</th>
                <td className="border border-gray-300 p-3">Indian tax capped at 10%, even without a PE</td>
                <td className="border border-gray-300 p-3">Contract and transfer pricing support needed</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Employment income</th>
                <td className="border border-gray-300 p-3">Short stays can be exempt if the treaty conditions are met</td>
                <td className="border border-gray-300 p-3">183-day and employer conditions</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="residence" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who counts as resident</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A Japanese company incorporated in Japan is normally resident there. Individuals can be resident in both countries under domestic law, for example a chuzaiin who spends most of the year in India while keeping a home in Japan; the treaty&apos;s tie-breaker then looks at permanent home, centre of vital interests and habitual abode to decide which country has primary taxing rights.
        </p>
        <h2 id="pe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Permanent establishment under the treaty</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A Japanese company has a permanent establishment in India if it carries on business through a fixed place in India, has a building, construction or installation project lasting beyond the treaty period, or acts through a dependent agent who habitually concludes contracts for it. Business profits of the Japanese company are taxed in India only if they are attributable to such a PE, so the role of seconded staff and project timelines matter.
        </p>
        <h2 id="relief" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How double tax is relieved</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India taxes at source within the treaty caps. Japan then gives relief: qualifying dividends from a 25% or larger holding are 95% exempt under the foreign dividend exemption, and other income such as royalties, fees and interest is taxed with a foreign tax credit for the Indian tax, within Japan&apos;s credit limits.
        </p>
        <h2 id="disputes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When the authorities disagree</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          If either country taxes in a way the treaty does not allow, for example through a transfer pricing adjustment that Japan does not match, the taxpayer can ask for the Mutual Agreement Procedure. The Indian and Japanese competent authorities then negotiate. For recurring transactions, a bilateral Advance Pricing Agreement can prevent the dispute arising.
        </p>

        <h2 id="japan-rates" className="text-2xl font-bold text-gray-900 mt-12 mb-4">One 10% rate, and what it is compared with</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Since the 2006 protocol, the India-Japan treaty uses a single 10% cap for dividends, interest, royalties and fees for technical services paid from India to a Japanese resident. That simplicity hides two points Japanese finance teams often miss.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Fees for technical services are defined broadly.</strong> Unlike the India-US treaty, the India-Japan treaty has no make-available test. Managerial, technical and consultancy fees paid to a Japanese parent are taxable in India at 10%, even if no know-how passes to the Indian company, so most cross-charges for engineering, quality and management support are caught.</li>
          <li><strong>The comparison is with roughly 20.8% or more.</strong> Without the treaty, Indian domestic withholding on these payments to a foreign company is 20% plus surcharge and 4% cess. The treaty rate is applied to the gross amount and is not increased by surcharge or cess.</li>
        </ul>
        <h2 id="japan-dividends" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why Indian tax on dividends is usually a final cost in Japan</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Japan&apos;s foreign dividend exclusion exempts 95% of dividends a Japanese company receives from a foreign subsidiary in which it has held at least 25% for six months or more. Because the dividend is largely exempt, the Indian withholding tax on it cannot be credited or deducted in Japan. For a wholly owned Indian subsidiary, the 10% Indian withholding is therefore usually a permanent cost of paying dividends.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Royalties and technical fees are different. They are taxable income of the Japanese parent, so the Indian withholding on them is generally creditable under Japan&apos;s foreign tax credit rules, within the credit limit. That difference often leads Japanese groups to plan the mix between dividends, royalties and service fees carefully, always at arm&apos;s length under Indian transfer pricing rules. See <Link href="/japan-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing for Japanese groups</Link>.
        </p>
        <h2 id="japan-documents" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Paperwork for a Japanese company</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Document</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Where it comes from</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Practical note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Certificate of residence (kyojusha shomeisho)</th>
                <td className="border border-gray-300 p-3">The Japanese company&apos;s district tax office</td>
                <td className="border border-gray-300 p-3">Request the English version, covering the period of the payments</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Form 41 (previously Form 10F)</th>
                <td className="border border-gray-300 p-3">Filed by the Japanese company on the Indian income tax portal</td>
                <td className="border border-gray-300 p-3">Needs registration on the portal, usually with an Indian PAN</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Beneficial ownership and no-PE declaration</th>
                <td className="border border-gray-300 p-3">Signed by a representative director or authorised officer</td>
                <td className="border border-gray-300 p-3">Keep consistent with the intercompany agreement</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">PAN of the Japanese company</th>
                <td className="border border-gray-300 p-3">Applied for in India</td>
                <td className="border border-gray-300 p-3">Avoids the higher no-PAN withholding rate</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          The Indian payer then deducts 10% under Section 393 of the Income-tax Act, 2025, deposits it by the 7th of the following month, and files Forms 145 and 146 (previously Forms 15CA and 15CB) before remitting. The Japanese parent uses the Indian tax certificate when claiming its foreign tax credit.
        </p>
        <h2 id="japan-example" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Worked example: technical support fee to a Japanese parent</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A Japanese parent charges its Indian manufacturing subsidiary INR 50 lakh for engineering support during the first year of production.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left"></th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treaty applied</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">No treaty documents</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Indian withholding</th>
                <td className="border border-gray-300 p-3">10% = INR 5 lakh</td>
                <td className="border border-gray-300 p-3">20.8% = INR 10.4 lakh</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Position in Japan</th>
                <td className="border border-gray-300 p-3">Creditable within the foreign tax credit limit</td>
                <td className="border border-gray-300 p-3">Only 10% is treaty tax; the rest must be reclaimed in India</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Deduction for the Indian subsidiary</th>
                <td className="border border-gray-300 p-3">Allowed if the fee is at arm&apos;s length and supported by Form 48</td>
                <td className="border border-gray-300 p-3">Same, but cash is tied up until the refund</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          The fee still has to be justified under Indian transfer pricing: the subsidiary should keep evidence of the services actually received, such as visit reports, emails and timesheets.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We confirm the treaty article that applies to each payment, collect the residence documents, apply the correct rate and support Mutual Agreement Procedure and APA cases with your Japanese advisers.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link> and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/tax-and-social-security-treaties/india-japan-dtaa-guide" />
        <GuideCTA
          title="Applying the India-Japan treaty to your payments?"
          description="Tell us the flows, and we will confirm the article and rate for each."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/japan-to-india/faq"
          seeAllLabel="See all Japanese FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Japanese parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department: tax treaties", href: "https://www.incometaxindia.gov.in" },
            { label: "Ministry of Finance, Japan: tax conventions", href: "https://www.mof.go.jp/english/" },
            { label: "National Tax Agency, Japan", href: "https://www.nta.go.jp/english/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Applying the India-Japan Treaty?"
        description="Tell us the payments and people moving between India and Japan, and we'll confirm how the treaty applies and what documents you need."
      />
    </main>
  )
}
