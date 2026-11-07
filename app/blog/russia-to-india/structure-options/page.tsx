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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/structure-options"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "options", label: "The options compared" },
  { id: "bank-test", label: "The banking test" },
  { id: "jv", label: "Joint ventures with Indian partners" },
  { id: "project", label: "Project offices for contracts" },
  { id: "russian-side", label: "Russian approvals for each option" },
  { id: "tax-rates", label: "Indian tax rate by structure" },
  { id: "llp", label: "Is an LLP a good fit for a Russian investor?" },
  { id: "ownership", label: "Setting up the ownership correctly" },
  { id: "decision", label: "Five questions that decide the structure" },
  { id: "converting", label: "Changing the structure later" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What structure do Russian companies usually choose?", a: "A private limited subsidiary, wholly owned or as a joint venture." },
  { q: "Does Press Note 3 apply to Russian investors?", a: "No, unless a beneficial owner is from a country sharing a land border with India." },
  { q: "Do branch and liaison offices need approval?", a: "Yes, from the RBI through an authorised dealer bank." },
  { q: "Why is banking part of the structure decision?", a: "Indian banks screen Russian-owned entities closely, and a subsidiary is usually easier to bank." },
  { q: "When does a project create a PE?", a: "A building or installation project lasting more than 12 months creates a PE under the treaty." },
  { q: "What should a JV agreement cover for a Russian partner?", a: "Board rights, funding, deadlock, transfers and what happens if sanctions change." },
  { q: "Is Bank of Russia approval needed?", a: "Reportedly for share investments above RUB 30 million per counterparty." },
  { q: "Can an LLP be used?", a: "Only in sectors open to 100% automatic FDI, and it is uncommon." },
  { q: "What is the tax rate for a Russian-owned company in India?", a: "About 25.17% under the concessional regime, against about 36.4% to 38.22% for a branch or project office." },
  { q: "Can a Russian company invest in an Indian LLP?", a: "Yes, on the Automatic Route, but only in sectors open to 100% foreign investment without performance conditions." },
  { q: "Can a Russian company open a branch office in India?", a: "Yes, through an AD bank on Form FNC, if the parent has a five-year profit record and net worth of at least USD 100,000. The branch is taxed at the foreign company rate and the parent is directly liable for it." },
  { q: "Is a joint venture easier to bank than a wholly owned company?", a: "Often, yes. An established Indian partner with an existing banking relationship can make account opening and payment reviews smoother, provided the ownership chain is fully disclosed." },
]

const relatedCards = [
  { title: "India FDI Rules for Russian Companies", desc: "Why the Automatic Route applies.", href: "/russia-to-india/india-fdi-rules-for-russian-companies" },
  { title: "Sanctions and Payments", desc: "Banking in practice.", href: "/russia-to-india/sanctions-and-payments-for-russian-companies" },
  { title: "Incorporation Steps", desc: "Setting up the subsidiary.", href: "/russia-to-india/incorporation-steps" },
  { title: "Russian Parent Obligations", desc: "Russian approvals.", href: "/russia-to-india/russian-parent-obligations" },
]

export default function StructureOptionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Choosing an Indian Structure for a Russian Parent: Private Limited, LLP, Branch, Liaison Office, Project Office and Joint Venture"
        description="Compare Indian structures for a Russian company: wholly owned private limited company, LLP, branch, liaison and project office, and joint venture, with tax, approval, liability, sanctions and exit points."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Structure Options in India for a Russian Company: Subsidiary, LLP, Branch, Liaison, Project Office or JV" },
        ]}
      />

      <GuideHero
        eyebrow="Setup: structure"
        title="Choosing an Indian Structure for a Russian Parent: Private Limited, LLP, Branch, Liaison Office, Project Office and Joint Venture"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Most Russian companies use a private limited subsidiary in India, often wholly owned, sometimes as a joint venture with an Indian partner in energy, engineering or pharmaceuticals. Press Note 3 does not apply to Russia, so the subsidiary can use the Automatic Route in most sectors. Branch, liaison and project offices need RBI approval, and for a Russian parent the practical test for any structure is whether Indian banks will open and operate its accounts.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="subsidiary-vs-branch-vs-liaison-office-vs-llp" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Usual choice", "Private limited subsidiary"],
                ["Route", "Automatic Route in most sectors; Press Note 3 does not apply"],
                ["Branch, liaison, project office", "RBI approval through an authorised dealer bank"],
                ["Joint ventures", "Common in energy, engineering and pharmaceuticals"],
                ["Russian side", "Bank of Russia approval reported above RUB 30 million per counterparty"],
                ["Practical gate", "Bank account opening and payment screening"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="options" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The options compared</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left"></th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Subsidiary</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Joint venture company</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Branch or project office</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Liaison office</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">LLP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Revenue in India</th>
                <td className="border border-gray-300 p-3">Yes</td>
                <td className="border border-gray-300 p-3">Yes</td>
                <td className="border border-gray-300 p-3">Permitted activities</td>
                <td className="border border-gray-300 p-3">No</td>
                <td className="border border-gray-300 p-3">Eligible sectors</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Approval</th>
                <td className="border border-gray-300 p-3">Automatic Route</td>
                <td className="border border-gray-300 p-3">Automatic Route; partner terms</td>
                <td className="border border-gray-300 p-3">RBI</td>
                <td className="border border-gray-300 p-3">RBI</td>
                <td className="border border-gray-300 p-3">Automatic in eligible sectors</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Liability</th>
                <td className="border border-gray-300 p-3">Ring-fenced</td>
                <td className="border border-gray-300 p-3">Ring-fenced</td>
                <td className="border border-gray-300 p-3">Russian company liable</td>
                <td className="border border-gray-300 p-3">Russian company liable</td>
                <td className="border border-gray-300 p-3">Ring-fenced</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Banking</th>
                <td className="border border-gray-300 p-3">Indian company KYC</td>
                <td className="border border-gray-300 p-3">Indian partner can help</td>
                <td className="border border-gray-300 p-3">Parent KYC directly</td>
                <td className="border border-gray-300 p-3">Parent KYC directly</td>
                <td className="border border-gray-300 p-3">LLP KYC</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="bank-test" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The banking test</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          For a Russian parent the entity choice is also a banking choice. A subsidiary or joint venture is an Indian company that opens its own accounts, with the Russian ownership disclosed and screened. Branch and liaison offices are part of the Russian company, so the bank screens the parent directly for every operation. Most Russian groups find a subsidiary easier to bank, especially with an Indian partner or a clear ownership chart.
        </p>
        <h2 id="jv" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Joint ventures with Indian partners</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A joint venture brings local relationships, licences and often easier banking. The shareholders&apos; agreement should cover board seats, reserved matters, funding obligations, deadlock, transfer restrictions and what happens if sanctions change, for example a buy-out right for the Indian partner if the Russian shareholder can no longer fund the company.
        </p>
        <h2 id="project" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Project offices for contracts</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Russian engineering, energy and nuclear-sector groups sometimes use a project office for a specific Indian contract. It needs RBI approval, is tied to the contract and closes at its end. A building or installation project lasting more than 12 months creates a permanent establishment under the India-Russia treaty, so the project office&apos;s profits are taxed in India.
        </p>
        <h2 id="russian-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Russian approvals for each option</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Share investments abroad above the reported RUB 30 million per counterparty need Bank of Russia approval.</li>
          <li>Currency control and foreign participation notifications apply to the parent.</li>
          <li>Russian counter-sanctions rules can affect dealings with certain counterparties.</li>
        </ul>
        <h2 id="tax-rates" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian tax rate by structure</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Indian tax rate differs sharply between the options, and it often decides the choice once the banking test is passed.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Structure</th><th scope="col" className="border border-gray-300 p-3 text-left">Indian tax rate on profits</th><th scope="col" className="border border-gray-300 p-3 text-left">Tax when profits go to Russia</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Private limited company (wholly owned or joint venture)</th><td className="border border-gray-300 p-3">About 25.17% under the concessional regime, including surcharge and cess</td><td className="border border-gray-300 p-3">10% on dividends under the India-Russia treaty</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Limited liability partnership</th><td className="border border-gray-300 p-3">30%, plus a 12% surcharge above ₹1 crore and 4% cess: up to about 34.94%</td><td className="border border-gray-300 p-3">No further Indian tax on the partners&apos; profit share</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Branch office or project office</th><td className="border border-gray-300 p-3">35% as a foreign company, plus surcharge and cess: about 36.4% to 38.22%</td><td className="border border-gray-300 p-3">No dividend tax; net profit is remitted after tax</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Liaison office</th><td className="border border-gray-300 p-3">No income, so no tax on profits; annual reporting still applies</td><td className="border border-gray-300 p-3">Not applicable</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          On a profit of ₹1 crore, the difference between the company rate and the branch rate is roughly ₹11 to 13 lakh a year before the 10% dividend tax is considered. That is why most Russian groups choose an Indian company for any business that will earn revenue.
        </p>

        <h2 id="llp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Is an LLP a good fit for a Russian investor?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Foreign investment in an Indian limited liability partnership is allowed on the Automatic Route, but only in sectors open to 100% foreign investment with no performance conditions attached. An LLP needs at least two designated partners, one of them resident in India, and its profit share is not taxed again when paid to the partners.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>In favour:</strong> lighter company-law compliance and no tax on distributions.</li>
          <li><strong>Against:</strong> a higher rate than a company, fewer bankers familiar with foreign-owned LLPs, no way to issue shares to new investors, and a less familiar structure for Russian tax and currency control purposes.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          For most Russian groups the company remains the better choice. An LLP can suit a small advisory or trading business owned by Russian individuals rather than a corporate group.
        </p>

        <h2 id="ownership" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Setting up the ownership correctly</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Two shareholders.</strong> A private limited company needs at least two shareholders, so a wholly owned structure has the Russian parent holding almost all the shares and a nominee, usually a group company or an individual, holding one share on its behalf.</li>
          <li><strong>Resident director.</strong> At least one director must have stayed in India for 182 days or more in the financial year; see <Link href="/russia-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">the incorporation steps</Link>.</li>
          <li><strong>Ownership chart.</strong> Indian banks ask for the full chain up to the ultimate beneficial owners. Prepare it, with percentages and nationalities, before applying for the bank account.</li>
          <li><strong>Shareholder agreement.</strong> In a joint venture, include what happens if a sanctions change prevents the Russian partner from funding or receiving money.</li>
        </ul>

        <h2 id="decision" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Five questions that decide the structure</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Will the Indian business earn revenue from Indian customers? If not, a liaison office may be enough.</li>
          <li>Is the work tied to one Indian contract that ends? If so, consider a project office.</li>
          <li>Will the business hire more than a handful of people or own assets? Choose a company.</li>
          <li>Is there an Indian partner bringing customers, licences or banking relationships? Consider a joint venture company.</li>
          <li>Can an Indian bank open and run the account for this structure and ownership chain? Test this before you file anything.</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">
          We run this test with you before any application. See <Link href="/russia-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link> for how the chosen entity is then capitalised.
        </p>
        <h2 id="converting" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Changing the structure later</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A first choice is not permanent. An LLP can be converted into a company under the Companies Act. A branch or project office business can be moved into a new Indian company through a business transfer, after which the office is closed through the AD bank. A joint venture can become wholly owned when the Russian parent buys the partner&apos;s shares, subject to FEMA pricing rules. Each change has tax and stamp duty consequences and needs its own bank review, so it is usually cheaper to choose the company structure at the start if growth is likely.
        </p>



        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We compare structures against your plan and banking realities, set up the entity, and coordinate the Indian side of Russian approvals.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and <Link href="/branch-office-registration" className="text-blue-800 font-semibold hover:underline">branch office registration</Link>.
        </p>

        <GuideServiceBox path="/russia-to-india/structure-options" />
        <GuideCTA
          title="Choosing a structure for India?"
          description="Tell us the activity and ownership, and we will recommend the entity."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/russia-to-india/faq"
          seeAllLabel="See all Russian FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Russian parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "Bank of Russia", href: "https://www.cbr.ru/eng/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Subsidiary, LLP, Branch or Joint Venture?"
        description="Tell us what the India operation will do, and we'll recommend the structure that suits a Russian company and its owners."
      />
    </main>
  )
}
