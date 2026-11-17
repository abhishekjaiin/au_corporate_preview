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
  { id: "claim-pack", label: "The DTAA claim pack for each payment" },
  { id: "mli", label: "The MLI and the principal purpose test" },
  { id: "classification", label: "Royalty, technical fee or business income" },
  { id: "withholding-timing", label: "Withholding is due when the amount is credited" },
  { id: "worked-dividend", label: "Worked example: dividend to a Japanese parent" },
  { id: "residence-cert", label: "Getting the Certificate of Residence in Japan" },
  { id: "jp-dtaa-checklist", label: "DTAA checklist before each payment" },
  { id: "jp-pe-short", label: "Permanent establishment risk for visiting engineers" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "When was the India-Japan tax treaty signed?", a: "In 1989, and it was amended by a protocol in 2006." },
  { q: "What rate does the DTAA set on dividends?", a: "Indian tax on dividends paid to a Japanese resident is capped at 10%." },
  { q: "Does the DTAA override Indian law?", a: "India applies the DTAA where it is more beneficial to the taxpayer, under Section 159 of the Income-tax Act, 2025." },
  { q: "Are fees for technical services taxed without a PE?", a: "Yes. The DTAA allows India to tax them at up to 10% even if the Japanese company has no PE in India." },
  { q: "How is the DTAA claimed?", a: "With a Japanese Certificate of Residence and Form 41, plus declarations the payer asks for." },
  { q: "How does Japan relieve the Indian tax?", a: "Through the 95% foreign dividend exemption for qualifying dividends, and a foreign tax credit for other income." },
  { q: "Can a chuzaiin be resident in both countries?", a: "Yes under domestic law; the DTAA's tie-breaker then decides which country has primary taxing rights." },
  { q: "What if India and Japan both tax the same profit?", a: "The taxpayer can request the Mutual Agreement Procedure under the DTAA." },
  { q: "What rate applies under the India-Japan DTAA without a Certificate of Residence?", a: "The Indian domestic rate, which for dividends is about 20% plus surcharge and cess." },
  { q: "Does the MLI change the India-Japan DTAA?", a: "Yes. It adds a principal purpose test, which matters mainly for income routed through intermediate holding companies." },
  { q: "Is Indian dividend withholding creditable in Japan?", a: "Generally not, when 95% of the dividend is excluded under the foreign dividend exclusion; it is then a final cost." },
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
        dateModified="2026-11-13"
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
        updated="13 November 2026"
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
                ["Indian law", "Section 159 of the Income-tax Act, 2025 (previously Sections 90 and 90A): the DTAA applies where more beneficial"],
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

        <h2 id="purpose" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the DTAA does for a Japanese group</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Without a treaty, India would tax income arising in India at its domestic rates and Japan would tax the same income in the hands of the Japanese company. The DTAA allocates taxing rights, lowers Indian withholding on payments to Japan, defines when a Japanese company has a taxable presence in India, and gives both sides a route to resolve conflicts. For most Japanese groups its practical effect is the 10% cap on payments from the Indian subsidiary.
        </p>
        <h2 id="articles" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The articles Japanese groups use most</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What the DTAA says in outline</th>
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
                <td className="border border-gray-300 p-3">Short stays can be exempt if the DTAA conditions are met</td>
                <td className="border border-gray-300 p-3">183-day and employer conditions</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="residence" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who counts as resident</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A Japanese company incorporated in Japan is normally resident there. Individuals can be resident in both countries under domestic law, for example a chuzaiin who spends most of the year in India while keeping a home in Japan; the DTAA&apos;s tie-breaker then looks at permanent home, centre of vital interests and habitual abode to decide which country has primary taxing rights.
        </p>
        <h2 id="pe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Permanent establishment under the DTAA</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A Japanese company has a permanent establishment in India if it carries on business through a fixed place in India, has a building, construction or installation project lasting beyond the DTAA period, or acts through a dependent agent who habitually concludes contracts for it. Business profits of the Japanese company are taxed in India only if they are attributable to such a PE, so the role of seconded staff and project timelines matter.
        </p>
        <h2 id="relief" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How double tax is relieved</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India taxes at source within the DTAA caps. Japan then gives relief: qualifying dividends from a 25% or larger holding are 95% exempt under the foreign dividend exemption, and other income such as royalties, fees and interest is taxed with a foreign tax credit for the Indian tax, within Japan&apos;s credit limits.
        </p>
        <h2 id="disputes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When the authorities disagree</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          If either country taxes in a way the DTAA does not allow, for example through a transfer pricing adjustment that Japan does not match, the taxpayer can ask for the Mutual Agreement Procedure. The Indian and Japanese competent authorities then negotiate. For recurring transactions, a bilateral Advance Pricing Agreement can prevent the dispute arising.
        </p>

        <h2 id="japan-rates" className="text-2xl font-bold text-gray-900 mt-12 mb-4">One 10% rate, and what it is compared with</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Since the 2006 protocol, the India-Japan treaty uses a single 10% cap for dividends, interest, royalties and fees for technical services paid from India to a Japanese resident. That simplicity hides two points Japanese finance teams often miss.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Fees for technical services are defined broadly.</strong> Unlike the India-US treaty, the India-Japan treaty has no make-available test. Managerial, technical and consultancy fees paid to a Japanese parent are taxable in India at 10%, even if no know-how passes to the Indian company, so most cross-charges for engineering, quality and management support are caught.</li>
          <li><strong>The comparison is with roughly 20.8% or more.</strong> Without the DTAA, Indian domestic withholding on these payments to a foreign company is 20% plus surcharge and 4% cess. The DTAA rate is applied to the gross amount and is not increased by surcharge or cess.</li>
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
        <h2 id="claim-pack" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The DTAA claim pack for each payment</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Payment to the Japanese company</th><th scope="col" className="border border-gray-300 p-3 text-left">Documents the Indian payer needs</th><th scope="col" className="border border-gray-300 p-3 text-left">DTAA rate</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividend</th><td className="border border-gray-300 p-3">Certificate of Residence (the Japanese TRC), Form 41 (previously Form 10F), beneficial ownership declaration, board and shareholder resolutions</td><td className="border border-gray-300 p-3">10%</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Interest on a parent loan</th><td className="border border-gray-300 p-3">TRC, Form 41, loan agreement, ECB registration number</td><td className="border border-gray-300 p-3">10%</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Royalty</th><td className="border border-gray-300 p-3">TRC, Form 41, licence agreement, evidence of benefit and pricing</td><td className="border border-gray-300 p-3">10%</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Fee for technical services</th><td className="border border-gray-300 p-3">TRC, Form 41, services agreement and deliverables</td><td className="border border-gray-300 p-3">10%</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Payment for goods or services with no Indian PE</th><td className="border border-gray-300 p-3">TRC, Form 41, no-PE declaration</td><td className="border border-gray-300 p-3">Not taxable in India under the business profits article</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Without a valid TRC and Form 41, the Indian payer withholds at the domestic rate, which for dividends is about 20% plus surcharge and cess. The DTAA rate can then only be recovered through a refund in an Indian return, which needs an Indian PAN and takes time.
        </p>

        <h2 id="mli" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The MLI and the principal purpose test</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Both India and Japan have ratified the OECD Multilateral Instrument, and it modifies the India-Japan DTAA. The main practical effect is the principal purpose test: DTAA benefits can be denied if obtaining them was one of the principal purposes of an arrangement. For a Japanese operating parent receiving dividends, fees or royalties from its own Indian company, this is rarely an issue. It matters where income is routed through an intermediate holding company, for example in Singapore, so document the commercial reasons for any such structure.
        </p>

        <h2 id="classification" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Royalty, technical fee or business income</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Because the India-Japan DTAA taxes royalties and technical fees at 10% of the gross amount without a make-available test, while business profits are taxed only through a permanent establishment, classification decides whether Indian tax applies. Standard software licences without transfer of copyright are generally not royalty after the Supreme Court&apos;s 2021 decision in Engineering Analysis. Engineering, design, training and technical support are usually technical fees. Classify each recurring payment once, record the reasoning, and apply it consistently in Forms 145 and 146.
        </p>

        <h2 id="withholding-timing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Withholding is due when the amount is credited</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Indian withholding applies when a payment is credited to the Japanese company&apos;s account in the Indian books or paid, whichever is earlier. A year-end accrual of a management fee to the Japanese parent therefore triggers withholding even if the money is sent months later. Deposit the tax by the 7th of the following month, or 30 April for credits made in March, to avoid interest and a disallowance of the expense.
        </p>
        <h2 id="worked-dividend" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Worked example: dividend to a Japanese parent</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          An Indian company declares a dividend of ₹2 crore to its Japanese parent, which has held 100% for several years. With the Certificate of Residence and Form 41 on file, the Indian company withholds 10%, ₹20 lakh, deposits it by the 7th of the following month, files Forms 145 and 146 and remits ₹1.8 crore. In Japan, 95% of the dividend is excluded from income, so Japanese tax applies only to 5%, and the Indian withholding on the excluded dividend is not creditable. The ₹20 lakh is therefore a final cost, which is why some groups combine dividends with royalties or fees that give a foreign tax credit.
        </p>
        <h2 id="residence-cert" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Getting the Certificate of Residence in Japan</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Japanese Certificate of Residence is issued by the competent tax office on application. Ask for one covering the period of each Indian payment and renew it every year, because Indian payers will not apply the reduced rate on an expired certificate. Keep the original and a scan for Forms 145 and 146, and give the Indian payer Form 41 before the first payment of each year.
        </p>
        <h2 id="jp-dtaa-checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">DTAA checklist before each payment</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Before each payment to Japan under the DTAA: confirm the article and DTAA rate, check the Certificate of Residence is current, file Form 41, prepare Forms 145 and 146, withhold and deposit the tax, and keep the agreement and invoice on file. Review the DTAA classification of any new type of payment before it is made.
        </p>
        <h2 id="jp-pe-short" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Permanent establishment risk for visiting engineers</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Japanese engineers who visit India to install equipment or support the Indian company can create a permanent establishment for the Japanese parent if their work goes beyond the limits set in the agreement. Track the days on each project and keep the work contracted through the Indian company where possible.
        </p>






        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We confirm the DTAA article that applies to each payment, collect the residence documents, apply the correct rate and support Mutual Agreement Procedure and APA cases with your Japanese advisers.
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
          Last updated 13 November 2026. General information only, not legal or tax advice. Indian rules change
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
