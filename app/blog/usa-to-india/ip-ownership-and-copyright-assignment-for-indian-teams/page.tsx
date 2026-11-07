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

const PAGE_URL = "https://www.theaucorp.com/usa-to-india/ip-ownership-and-copyright-assignment-for-indian-teams"
const PARENT_URL = "https://www.theaucorp.com/usa-to-india"

const toc = [
  { id: "country-specific", label: "What's different for US companies" },
  { id: "chain", label: "The chain of title, link by link" },
  { id: "copyright", label: "Copyright: the rules that catch US contracts" },
  { id: "patent", label: "Patents: foreign filing permission" },
  { id: "secrets", label: "Trade secrets, confidentiality and non-competes" },
  { id: "oss", label: "Open source and third-party code" },
  { id: "tax", label: "Tax and transfer pricing of intellectual property" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Who owns software written by employees in India?", a: "The employer owns works made in the course of employment under a contract of service, but a written assignment from the Indian company to the US parent is still needed." },
  { q: "What are the default terms of an Indian copyright assignment?", a: "If the duration is not stated it is five years, and if the territory is not stated it is India. State both clearly." },
  { q: "Can an assignment lapse?", a: "Yes, if the assignee does not exercise the rights within the stated period, or within one year if none is stated, unless the contract says otherwise." },
  { q: "Do I need Indian permission to file a US patent?", a: "Yes, for an invention made in India, unless it was first filed in India at least six weeks earlier or the Controller has given written permission." },
  { q: "Are post-employment non-competes enforceable?", a: "Generally not, as a restraint of trade. Use confidentiality, notice and non-solicitation terms." },
  { q: "Is there a trade secret law in India?", a: "No separate statute. Protection comes from contract and the law of confidence." },
  { q: "Do contractors assign their work automatically?", a: "No. A contractor under a contract for service is not an employee for ownership, so a written assignment is needed." },
  { q: "Does open-source use matter?", a: "Yes. Copyleft licences can reach the parent product, so review licences and keep a bill of materials." },
  { q: "Does the assignment need stamp duty?", a: "It can, depending on the state and the document. Check before signing." },
]

const relatedCards = [
  { title: "Setting Up a Global Capability Centre in India as a US Company: Captive, Build-Operate-Transfer and Hybrid Models, Cost-Plus Pricing, State Policies and Key Risks", desc: "How a US company builds a captive engineering, finance or operations centre in India: the three delivery models, entity and tax choices, cost-plus transfer pricing and safe harbour questions, permanent establishment, intellectual property, state incentives and a 12-month roadmap.", href: "/usa-to-india/gcc-for-us-companies" },
  { title: "Hiring and payroll in India", desc: "Contracts, statutory benefits and the monthly payroll cycle.", href: "/usa-to-india/hiring-and-payroll" },
  { title: "Transfer pricing for US groups", desc: "Form 3CEB, benchmarking and intercompany agreements.", href: "/usa-to-india/transfer-pricing" },
  { title: "Employer of record or subsidiary", desc: "When an employer of record is enough and when to incorporate.", href: "/usa-to-india/eor-vs-subsidiary" },
]

export default function IpOwnershipAndCopyrightAssignmentForIndianTeamsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Intellectual Property Created in India for a US Parent: Employer Ownership, Copyright Assignment Terms, Foreign Filing Permission for Patents, Trade Secrets and Open Source"
        description="A guide to making sure the US parent owns what the Indian team creates: employment and assignment contracts, the duration and territory defaults in Indian copyright law, patent inventorship and foreign filing permission under the Patents Act, trade secrets, non-competes, open source and transfer pricing for intellectual property."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-US"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/usa-to-india" },
          { label: "Who Owns the Work? IP Assignment, Copyright and Patent Filing Rules for Indian Teams of US Companies" },
        ]}
      />

      <GuideHero
        eyebrow="Legal: intellectual property"
        title="Intellectual Property Created in India for a US Parent: Employer Ownership, Copyright Assignment Terms, Foreign Filing Permission for Patents, Trade Secrets and Open Source"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A US company that builds software, designs or inventions in India needs a chain of title from the
          individual creator to the US parent. Under Indian copyright law an employer owns works made in the
          course of employment under a contract of service, but any assignment that is not written precisely is
          read narrowly: if the duration is not stated the assignment lasts five years, if the territory is not
          stated it covers India only, and an assignment can lapse if the rights are not exercised within a year
          unless the contract says otherwise. A US patent application for an invention made in India needs
          foreign filing permission from the Indian Patent Office unless the invention was first filed in India
          at least six weeks earlier, and filing without it is an offence. Trade secrets rely on contract and
          confidence, and post-employment non-competes are narrowly enforced. A short checklist of contracts and
          filings closes these gaps before the first line of code is written.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the US
          </Link>
        </p>

        <GuideCountryContext country="usa" topic="ip-ownership" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Employer ownership", "Works made in the course of employment under a contract of service belong to the employer under the Copyright Act, absent a contrary agreement"],
                ["Assignment terms", "Written and signed; default duration five years and default territory India if silent; state both clearly"],
                ["Lapse", "An assignment can lapse if rights are not exercised within one year unless the contract provides otherwise"],
                ["Patent filing abroad", "Foreign filing permission needed unless first filed in India six weeks before; penalties apply"],
                ["Trade secrets", "No separate statute; protected by contract and equity; mark and control access"],
                ["Non-compete", "Restraints after employment are narrowly enforced; confidentiality and assignment clauses are enforceable"],
                ["Open source", "Track licences used by the Indian team; copyleft terms can affect the parent product"],
                ["Tax", "Stamp duty on assignments; transfer pricing and the question of who performs development and controls risk"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="chain" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The chain of title, link by link</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>The Indian employee signs an employment agreement that assigns all work product, inventions and rights to the Indian company, now and in the future, and includes confidentiality and a promise to help with filings.</li>
          <li>The Indian company signs an assignment or services agreement with the US parent that transfers the rights to the parent for the whole world and for the full term of the right, with consideration stated.</li>
          <li>Contractors, interns and consultants sign the same assignments, because a contractor under a contract for service is not an employee for ownership purposes.</li>
          <li>Each important item (a code base, a design system, a trained model) is listed in a schedule, with a catch-all for everything else.</li>
          <li>The assignment is signed, stamped and kept with the corporate records, and a copy goes to the US group&apos;s legal team.</li>
        </ol>

        <h2 id="copyright" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Copyright: the rules that catch US contracts</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A US-style assignment that says the employee assigns all right, title and interest in the work is
          usually enough in the US, but Indian copyright law adds conditions. An assignment must be in writing
          signed by the assignor. If it does not state the duration, the law presumes five years. If it does not
          state the territory, the law presumes India. And if the assignee does not exercise the rights within
          the period stated, or within one year if none is stated, the assignment is deemed to lapse unless the
          contract says otherwise. A US parent that relies on a template without stating that the assignment is
          perpetual, worldwide and not subject to lapse can find that its rights in the Indian work are narrower
          than it thinks.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The assignment should also deal with moral rights, which remain with the author, by a waiver or a
          covenant not to assert them. Where the work is made by an employee in the course of employment,
          ownership vests in the employer and does not depend on an assignment, but a written confirmation is
          still good practice and is often asked for in due diligence. See{" "}
          <Link href="/usa-to-india/hiring-and-payroll" className="text-blue-800 font-semibold hover:underline">hiring and payroll</Link>{" "}
          for the employment contract.
        </p>

        <h2 id="patent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Patents: foreign filing permission</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Indian law restricts residents from filing patent applications abroad for inventions made in India. A
          person resident in India may not file or cause to be filed a patent application outside India unless
          an application for the same invention has first been filed in India at least six weeks before, or the
          Controller has given written permission. The Controller can also issue a secrecy direction on
          defence-related inventions. The rule bites a US parent that files first in the US for an invention
          made by an Indian team, because the Indian inventors are residents and the parent is causing the
          filing. The answer is a permission request to the Indian Patent Office before filing, or a first
          filing in India. Failure to comply can lead to penalties and, in the worst case, invalidity of the
          foreign patent.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The Indian inventors must also be named correctly, and their assignment to the Indian company and
          onward to the US parent must be in place before filing. Where a US group wants to file in the US only,
          a clean internal process, with the Indian legal or compliance owner answering for the permission
          request, avoids surprises. Indian patent law also has its own limits on patentability for software and
          business methods that are different from US practice, so a US-patentable invention may not be
          patentable in India.
        </p>

        <h2 id="secrets" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Trade secrets, confidentiality and non-competes</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India has no trade secret statute, so protection rests on contract, equity and the law of confidence.
          Courts will enforce a well-drafted confidentiality agreement, and will grant injunctions against the
          use of confidential information. The practical steps are to mark confidential material, control access
          by role, log downloads, remove access on exit and keep a record of what each employee received. A
          non-compete that applies after employment is generally void as a restraint of trade under the Contract
          Act, so use garden-leave, notice periods, non-solicitation of customers where defensible and
          confidentiality clauses instead. A non-compete during employment is valid.
        </p>

        <h2 id="oss" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Open source and third-party code</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian teams often build on open-source libraries, and the licences may impose conditions that reach
          the parent&apos;s product, such as an obligation to release derivative works. Set a policy that lists
          approved licences, require a review for components under copyleft licences, keep a bill of materials
          and scan the code base at release. These controls matter in due diligence on a sale of the US business
          as well as for day-to-day compliance.
        </p>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax and transfer pricing of intellectual property</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Who performs the development, who controls it and who bears the risk decide the transfer pricing. In a
          captive that works under the parent&apos;s direction and is paid cost plus, the intellectual property
          belongs to the parent and the Indian entity earns a routine return. If the Indian entity takes the
          lead in developing, funds the work or bears the risk, officers may argue that it should earn more, or
          that part of the value was transferred on an assignment without payment. A written assignment, a
          services agreement with the right characterisation and a transfer pricing study that follows the facts
          are the protection. See{" "}
          <Link href="/usa-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>{" "}
          and{" "}
          <Link href="/usa-to-india/gcc-for-us-companies" className="text-blue-800 font-semibold hover:underline">the GCC guide</Link>.
          Stamp duty may apply to the assignment document depending on the state.
        </p>

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

        <GuideServiceBox path="/usa-to-india/ip-ownership-and-copyright-assignment-for-indian-teams" />
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
            { label: "Intellectual Property India", href: "https://ipindia.gov.in/" },
            { label: "Copyright Office (India)", href: "https://copyright.gov.in/" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
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
        title="Protecting IP Created in India?"
        description="Tell us what the Indian team builds, and we'll coordinate the assignment, employment terms and transfer pricing with your counsel."
      />
    </main>
  )
}
