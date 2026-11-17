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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/transfer-pricing"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "flows", label: "German-Indian flows" },
  { id: "function", label: "Function transfers from Germany" },
  { id: "india", label: "What India requires" },
  { id: "years", label: "31 December and 31 March" },
  { id: "certainty", label: "APAs and MAP" },
  { id: "arm-length-range", label: "How India tests the arm's length price" },
  { id: "apa-master-file", label: "APAs, master file and country-by-country reporting" },
  { id: "function-transfer", label: "Function transfers from Germany to India" },
  { id: "german-documentation", label: "German and Indian documentation side by side" },
  { id: "de-apa", label: "Bilateral APAs between India and Germany" },
  { id: "de-range", label: "What goes into the cost base" },
  { id: "de-checklist", label: "A year-end checklist for German groups" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is a function transfer?", a: "A German rule under which moving a function and its profit potential abroad can trigger an exit charge in Germany." },
  { q: "How is an Indian service centre for a German group priced?", a: "Usually at cost plus a mark-up." },
  { q: "What is Form 48?", a: "The accountant's report on international transactions, previously Form 3CEB." },
  { q: "When is documentation needed in India?", a: "When international transactions exceed ₹1 crore." },
  { q: "When should true-ups be booked?", a: "Before the Indian year ends on 31 March." },
  { q: "What royalty rate applies to Germany?", a: "10% under the treaty." },
  { q: "Can India and Germany agree methods in advance?", a: "Yes, through a bilateral Advance Pricing Agreement." },
  { q: "How is double tax resolved?", a: "Through the Mutual Agreement Procedure under the treaty." },
  { q: "What is a function transfer?", a: "A German tax concept: when functions move from a German company to a foreign group company, the profit potential that leaves Germany may be taxed in Germany." },
  { q: "Can Germany and India agree an APA?", a: "Yes, a bilateral APA under the DTAA, covering up to five future years with an Indian rollback of up to four years." },
  { q: "Which transfer pricing method suits an Indian engineering centre?", a: "Usually the transactional net margin method, testing a cost-plus mark-up against Indian service comparables." },
  { q: "When is Form 48 due?", a: "With the tax audit, by 31 October; it is the accountant's transfer pricing report on international transactions." },
  { q: "Do German and Indian transfer pricing files need to match?", a: "They should describe the same facts and margin; differences in comparables should be explained in both." },
]

const relatedCards = [
  { title: "German Parent Obligations", desc: "German-side tax and reporting.", href: "/germany-to-india/german-parent-obligations" },
  { title: "India-Germany DTAA", desc: "Treaty rates.", href: "/germany-to-india/india-germany-dtaa" },
  { title: "Repatriating Profits", desc: "Fees and royalties.", href: "/germany-to-india/repatriating-profits" },
  { title: "Compliance Calendar", desc: "Report dates.", href: "/germany-to-india/compliance-calendar" },
]

export default function TransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Transfer Pricing Between a German Parent and an Indian Subsidiary: What India Requires and Where Germany Differs"
        description="How transfer pricing works between Germany and India: Indian arm's length rules and Form 48, German documentation duties, the function transfer rules, APAs and the mutual agreement route."
        datePublished="2026-10-26"
        dateModified="2026-11-13"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "Transfer Pricing Between Germany and India: Form 48, Documentation and Function Transfers" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: transfer pricing"
        title="Transfer Pricing Between a German Parent and an Indian Subsidiary: What India Requires and Where Germany Differs"
        updated="13 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          India requires arm&apos;s length pricing and Form 48 for dealings between the Indian subsidiary and its German parent. Germany adds a rule many groups underestimate: moving a function with its profit potential from Germany to India can be a function transfer (Funktionsverlagerung) that triggers an exit charge in Germany. Because German parents usually close on 31 December and India on 31 March, year-end adjustments need a bridge.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="transfer-pricing" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Indian law", "Sections 161 to 172 of the Income-tax Act, 2025"],
                ["Indian report", "Form 48 (previously Form 3CEB)"],
                ["German rule", "Function transfer (Funktionsverlagerung) can trigger an exit charge"],
                ["Year ends", "Germany usually 31 December; India 31 March"],
                ["Treaty", "Mutual Agreement Procedure under the India-Germany treaty"],
                ["Documentation threshold", "International transactions above ₹1 crore"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="flows" className="text-2xl font-bold text-gray-900 mt-12 mb-4">German-Indian flows</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Flow</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Method</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Germany-specific point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Engineering and R&amp;D services to Germany</th>
                <td className="border border-gray-300 p-3">Cost plus mark-up</td>
                <td className="border border-gray-300 p-3">Is a function or its profit potential moving?</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Shared service centre</th>
                <td className="border border-gray-300 p-3">Cost plus</td>
                <td className="border border-gray-300 p-3">Allocation keys aligned with the German file</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Distribution of German machinery</th>
                <td className="border border-gray-300 p-3">Transactional net margin</td>
                <td className="border border-gray-300 p-3">Customs value consistency</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Licence of German technology</th>
                <td className="border border-gray-300 p-3">Royalty benchmark</td>
                <td className="border border-gray-300 p-3">10% treaty rate</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Group financing</th>
                <td className="border border-gray-300 p-3">Market interest</td>
                <td className="border border-gray-300 p-3">German interest barrier on the parent side</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="function" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Function transfers from Germany</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          When a German group moves an activity, such as an engineering line or a back-office process, to India, German law asks whether a function has been transferred with its profit potential. If so, Germany may tax a hypothetical exit price. Document whether the Indian entity is a routine service provider on cost plus, which usually limits the exposure, and agree the analysis with the German tax team before the move.
        </p>
        <h2 id="india" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What India requires</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Annual documentation once international transactions exceed ₹1 crore.</li>
          <li>Form 48 certified by a Chartered Accountant by the return due date.</li>
          <li>Master file where group thresholds are met.</li>
          <li>Annual refresh of benchmarking.</li>
        </ul>
        <h2 id="years" className="text-2xl font-bold text-gray-900 mt-12 mb-4">31 December and 31 March</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Book true-ups before the Indian year closes on 31 March, which falls in the first quarter of the German year. That keeps GST, Withholding Tax and customs consistent and lets the German side reflect the adjustment in its own year.
        </p>
        <h2 id="certainty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">APAs and MAP</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India&apos;s Advance Pricing Agreement programme, unilateral or bilateral with Germany, fixes methods for future years. Double tax after an adjustment can go to the Mutual Agreement Procedure under the India-Germany treaty.
        </p>
        <h2 id="arm-length-range" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How India tests the arm&apos;s length price</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Six or more comparables: the 35th to 65th percentile range; a result outside it is moved to the median.</li>
          <li>Fewer than six: the arithmetic mean with a 3% tolerance (1% for wholesale traders).</li>
          <li>Indian comparables from Indian databases, which can differ from the sets in the German documentation; explain the difference in both files.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Example.</strong> An Indian service company with costs of ₹10 crore charges the GmbH or AG cost plus 10%. If the Indian range is 13% to 18% with a median of 15%, the officer would lift the mark-up to 15%, adding ₹50 lakh to Indian income. A year-end true-up invoice before the books close avoids the adjustment.
        </p>

        <h2 id="apa-master-file" className="text-2xl font-bold text-gray-900 mt-12 mb-4">APAs, master file and country-by-country reporting</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          An advance pricing agreement (APA) fixes the method, and sometimes the margin, for up to five future years, with a rollback of up to four earlier years. A unilateral APA is agreed with the Indian authority alone; a bilateral APA also involves the other country&apos;s tax authority under the treaty and gives certainty on both sides.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Indian company files a master file where group revenue exceeds ₹500 crore and its international transactions exceed ₹50 crore. Country-by-country reporting applies at consolidated group revenue of ₹6,400 crore or more; the parent&apos;s report usually reaches India through exchange, with an Indian notification naming the reporting entity.
        </p>
        <h2 id="function-transfer" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Function transfers from Germany to India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          When a German company moves engineering, IT or back-office work to its Indian company, German tax law may treat it as a function transfer (Funktionsverlagerung). The German side may then tax the profit potential that leaves Germany, valued as a transfer package, even if no asset is sold. The Indian side sees the same move as the start of a routine service, rewarded at cost plus a mark-up.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Document what moved, when and why, with the German board papers.</li>
          <li>Keep the Indian company&apos;s role as a service provider clear in the intercompany agreement.</li>
          <li>Agree the German exit valuation with German advisers before the work moves, not afterwards.</li>
          <li>Make sure the Indian transfer pricing study describes the same facts as the German documentation.</li>
        </ul>

        <h2 id="german-documentation" className="text-2xl font-bold text-gray-900 mt-12 mb-4">German and Indian documentation side by side</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Point</th><th scope="col" className="border border-gray-300 p-3 text-left">India</th><th scope="col" className="border border-gray-300 p-3 text-left">Germany</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Local documentation</th><td className="border border-gray-300 p-3">Transfer pricing study kept on file; Form 48 filed</td><td className="border border-gray-300 p-3">Local file under German documentation rules, produced on request</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Master file</th><td className="border border-gray-300 p-3">Above the Indian revenue and transaction thresholds</td><td className="border border-gray-300 p-3">Above the German revenue threshold</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Country-by-country report</th><td className="border border-gray-300 p-3">At consolidated group revenue of ₹6,400 crore or more</td><td className="border border-gray-300 p-3">Filed by the German parent with the Federal Central Tax Office for large groups</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Year end</th><td className="border border-gray-300 p-3">31 March</td><td className="border border-gray-300 p-3">Usually 31 December</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Align the margin, the method and the description of functions in both sets, and bridge the different year ends with a quarterly margin check.
        </p>

        <h2 id="de-apa" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Bilateral APAs between India and Germany</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India and Germany can agree bilateral advance pricing agreements under the DTAA. For a large engineering or shared service centre serving the German group, a bilateral APA fixes the method for up to five future years, with a rollback of up to four years in India, and removes the risk of both countries taxing the same profit. Smaller centres usually rely on a well-documented cost-plus model and the Indian safe harbour where it fits.
        </p>
        <h2 id="de-range" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What goes into the cost base</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A cost-plus model is only as good as its cost base. Indian officers expect the mark-up to apply to all operating costs of the service: salaries and benefits, rent, depreciation, software, travel and the cost of employee share awards recharged by the German parent. Costs passed through without any value added, such as third-party licences bought for the group, can sometimes be charged at cost, but only if the Indian company genuinely adds no value and the agreement says so.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Example.</strong> An Indian engineering centre with costs of ₹15 crore charges the GmbH cost plus 8% while Indian comparables support about 14%. The ₹90 lakh gap would be added to Indian income on audit, and Germany would relieve it only through the Mutual Agreement Procedure. Setting the mark-up from Indian benchmarks, on the full cost base, avoids this.
        </p>
        <h2 id="de-checklist" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A year-end checklist for German groups</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          In February, test the Indian margin on management accounts. In March, issue any true-up invoice before the Indian books close. Between April and August, update the Indian study with current comparables. By 31 October, file Form 48 with the tax audit. Then share the final Indian figures with the German documentation team for the 31 December year.
        </p>


        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We prepare the Indian transfer pricing study and Form 48, align it with the German documentation and support function-transfer analysis with your German advisers.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link> and <Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">accounting, reporting and audit support</Link>.
        </p>

        <GuideServiceBox path="/germany-to-india/transfer-pricing" />
        <GuideCTA
          title="Moving work from Germany to India?"
          description="Tell us the activity, and we will set up the transfer pricing on both sides."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/germany-to-india/faq"
          seeAllLabel="See all German FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for German parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Federal Central Tax Office, Germany", href: "https://www.bzst.de/EN" },
            { label: "Central Board of Direct Taxes", href: "https://incometaxindia.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Transfer Pricing Between Germany and India?"
        description="Tell us the intercompany transactions, and we'll map the Indian documentation, Form 48 and how it lines up with your German file."
      />
    </main>
  )
}
