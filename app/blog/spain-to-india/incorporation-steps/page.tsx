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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/incorporation-steps"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "overview", label: "The steps in order" },
  { id: "spice", label: "Reading SPICe+ and AGILE-PRO-S" },
  { id: "name", label: "Name and object clause" },
  { id: "after", label: "After incorporation: the first 180 days" },
  { id: "stamp", label: "Stamp duty and registers" },
  { id: "mistakes", label: "Mistakes we see most often" },
  { id: "next", label: "What to read next" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is SPICe+?", a: "The integrated online form of the Ministry of Corporate Affairs for incorporating a company. It can apply for PAN, TAN and other registrations together through AGILE-PRO-S." },
  { q: "How many directors and shareholders does a private company need?", a: "Two shareholders and two directors, with at least one Resident Director." },
  { q: "Can a Spanish company be the shareholder?", a: "Yes. A foreign company may subscribe to shares, provided the sector allows foreign investment. Documents are apostilled and translated." },
  { q: "Do the directors need to be in India to incorporate?", a: "No. The filing is online, with Digital Signature Certificates. Some banks ask a director to attend." },
  { q: "What is AGILE-PRO-S?", a: "An attached form to SPICe+ that applies for PAN, TAN, provident fund, state insurance and other registrations, and for the bank account." },
  { q: "How soon must the first auditor be appointed?", a: "Within 30 days of incorporation, by the board, with Form ADT-1." },
  { q: "By when must shares be allotted?", a: "Within 60 days of receiving the money." },
  { q: "What is Form FC-GPR?", a: "The Reserve Bank filing that reports the allotment of shares to a foreign investor. It is due within 30 days of allotment." },
  { q: "What is Form INC-20A?", a: "The declaration of commencement of business, to be filed within 180 days of incorporation." },
  { q: "Can I change the name later?", a: "Yes, with a special resolution and Registrar approval, but choosing a good name at the start avoids the delay and cost." },
]

const relatedCards = [
  { title: "Which Structure Should a Spanish Company Use in India? Private Limited, LLP, Branch, Liaison Office, Project Office or Joint Venture, with Sector Notes", desc: "Compare the ways a Spanish group can enter India: a wholly owned private limited company, a joint venture, a limited liability partnership, a branch, a liaison office or a project office. Includes the RBI net worth tests, tax differences and notes for renewables, auto components, ceramics, retail and infrastructure.", href: "/spain-to-india/structure-options" },
  { title: "Preparing Spanish Documents for an Indian Subsidiary: Escritura, Registro Mercantil Extracts, Apostille and Sworn Translation into English", desc: "How to prepare Spanish company and director documents for Indian filings: why Spain and India both accept the apostille, notarial deeds and Mercantile Registry certificates, sworn translation, the Indian missions in Madrid and Barcelona, and a document checklist.", href: "/spain-to-india/documents-apostille-and-sworn-translation" },
  { title: "Funding an Indian Subsidiary from Spain: Share Capital, Shareholder Loans, Fair Value Pricing Rules, FC-GPR, FC-TRS and the Annual FLA Return", desc: "How a Spanish parent can put money into an Indian company: equity under the Automatic Route, convertible instruments, external commercial borrowing, intra-group financing, the FEMA pricing rule, the 60-day and 30-day deadlines, the FLA return and the Spanish declarations that match.", href: "/spain-to-india/funding-and-fema" },
  { title: "Resident Director for an Indian Subsidiary of a Spanish Company: The 182-Day Rule, Who Can Fill the Role, Duties, Liability and Alternatives", desc: "Every Indian company needs a director who has lived in India for 182 days. This guide explains the rule, the four ways a Spanish group can meet it, the duties and personal liability that come with the seat, what a professional or nominee arrangement must and must not do, and a checklist for appointing one.", href: "/spain-to-india/resident-director-service-for-spanish-companies" },
]

export default function IncorporationStepsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Step-by-Step Incorporation of an Indian Private Limited Company by a Spanish Parent: From Name Approval to the Foreign Investment Filing"
        description="The exact steps to incorporate an Indian private limited company when the shareholder is Spanish: name, DIN and DSC, the SPICe+ form with AGILE-PRO-S, charter documents, PAN and TAN, bank account, share allotment, FC-GPR, first auditor and commencement of business."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "Incorporation Steps for a Spanish Company in India: SPICe+, DIN, PAN and the Bank" },
        ]}
      />

      <GuideHero
        eyebrow="Set-up: steps"
        title="Step-by-Step Incorporation of an Indian Private Limited Company by a Spanish Parent: From Name Approval to the Foreign Investment Filing"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Spanish parent incorporates an Indian private limited company online through SPICe+, the Ministry of
          Corporate Affairs&apos; integrated form, which can apply for PAN, TAN and other registrations in one
          go through the AGILE-PRO-S part. The sequence is: decide the structure and capital, prepare Spanish
          documents with apostille and translation, obtain DINs and DSCs for the directors, reserve the name,
          file SPICe+ with the charter documents, receive the certificate of incorporation, open the bank
          account, remit share capital, allot shares within 60 days, file FC-GPR within 30 days of allotment,
          appoint the first auditor within 30 days of incorporation and file INC-20A within 180 days. Each step
          has a deadline that begins at a specific event, so an owner for each step should be named at the
          start.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="incorporation-process" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Form", "SPICe+ with AGILE-PRO-S for PAN, TAN and other registrations"],
                ["Minimum people", "Two shareholders and two directors, one of them a Resident Director"],
                ["Name", "Reserved through the incorporation form; avoid names close to existing ones or to protected names"],
                ["Charter documents", "Memorandum and Articles of Association, with the object clause matched to the sector"],
                ["After certificate", "PAN, TAN and the certificate; first auditor within 30 days; shares within 60 days of receipt of funds"],
                ["RBI step", "FC-GPR within 30 days of allotment"],
                ["Next step", "INC-20A within 180 days"],
                ["Sector check", "Confirm the FDI route for the sector before filing"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="overview" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The steps in order</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Confirm the route and the structure.</strong> Check that the sector allows foreign investment and under which route, and choose a private limited company, a limited liability partnership or another form. See <Link href="/spain-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">structure options</Link>.</li>
          <li><strong>Prepare the Spanish documents.</strong> Registry certificate, board resolution, power of attorney, beneficial ownership papers, passport copies. Notarise, apostille and translate. See <Link href="/spain-to-india/documents-apostille-and-sworn-translation" className="text-blue-800 font-semibold hover:underline">documents</Link>.</li>
          <li><strong>Obtain DIN and DSC.</strong> Each proposed director needs a Director Identification Number and a Digital Signature Certificate. Foreign directors verify identity with their passports.</li>
          <li><strong>Reserve the name.</strong> Propose names in order of preference, with a distinctive word and a descriptive word. Avoid names that look like existing companies or trademarks.</li>
          <li><strong>Draft the charter documents.</strong> Memorandum of Association with an object clause for the actual business, Articles of Association with the transfer and board rules the parent wants.</li>
          <li><strong>File SPICe+.</strong> Include the registered office proof, director consent forms, subscriber details and the apostilled documents. Use AGILE-PRO-S to apply for PAN, TAN and registrations at the same time.</li>
          <li><strong>Receive the certificate of incorporation.</strong> PAN and TAN follow with the certificate; the company is now a legal person.</li>
          <li><strong>Hold the first board meeting.</strong> Appoint the first auditor, open the bank account, authorise signatories, adopt the registers and approve the share allotment mechanics.</li>
          <li><strong>Open the bank account.</strong> Provide beneficial ownership, source of funds and board resolutions.</li>
          <li><strong>Remit share capital from Spain.</strong> Through an authorised dealer bank, with the purpose declared as capital contribution.</li>
          <li><strong>Allot shares within 60 days of receiving the money,</strong> and file FC-GPR within 30 days of allotment.</li>
          <li><strong>File INC-20A within 180 days.</strong> The company cannot begin business or borrow before the declaration is filed.</li>
        </ol>

        <h2 id="spice" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Reading SPICe+ and AGILE-PRO-S</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          SPICe+ is a form with two parts. Part A reserves the name and Part B contains the incorporation
          details: the capital, the registered office, the subscribers, the directors and the charter documents.
          AGILE-PRO-S is an attached form that applies for the tax account numbers, the employee provident fund
          and state insurance registrations, the professional tax in some states and a GST registration if
          requested, and for opening a bank account. Using it saves time but you must give consistent
          information, and any mistake delays several registrations at once.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          For a Spanish shareholder, two points need care. The subscriber details must show the Spanish
          company&apos;s full name, registered address and the person authorised to sign, and the apostilled
          power of attorney must match. And the authorised capital chosen at filing drives the filing fee and
          stamp duty, so choose a figure that supports the plan but does not overstate it.
        </p>

        <h2 id="name" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Name and object clause</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Names are approved by the Registrar and must not be identical or too similar to an existing company or
          trademark. A name that includes Spain, a Spanish place or a Spanish brand does not need special
          consent in itself, but a name that suggests a link with a government body or a protected expression
          will be refused. The object clause should describe what the company will actually do; a clause that is
          too narrow means an amendment before a new activity starts, and one that is too broad can raise a
          query. For a company in a regulated sector, the object clause must match the licence.
        </p>

        <h2 id="after" className="text-2xl font-bold text-gray-900 mt-12 mb-4">After incorporation: the first 180 days</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Step</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Deadline</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Who acts</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Consequence of delay</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["First auditor appointed (Form ADT-1)", "Within 30 days of incorporation", "Board", "Penalty and a query on the accounts"],
                ["Bank account opened", "Before capital is remitted", "Directors and bank", "Capital remittance cannot start"],
                ["Shares allotted to the Spanish parent", "Within 60 days of receiving the funds", "Board", "Funds may have to be returned; penalty under FEMA"],
                ["FC-GPR filed", "Within 30 days of allotment", "Company with an authorised dealer bank and a Chartered Accountant", "Late submission fee and compounding"],
                ["Declaration of commencement (INC-20A)", "Within 180 days of incorporation", "Directors", "Penalty; the company cannot begin business or borrow"],
                ["GST, professional tax, provident fund and state insurance", "Before the first supply or hire", "Company", "Penalty; input tax credit loss"],
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

        <h2 id="stamp" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Stamp duty and registers</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Stamp duty is a state subject and is payable on the charter documents and on the share certificates.
          It varies by state and by authorised capital, which is one reason to choose the registered office
          state carefully. The company must also keep statutory registers of members, directors, charges and
          share transfers, and the Registrar can inspect them. Your adviser should set them up at the first
          board meeting.
        </p>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes we see most often</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Names of directors spelled differently across the passport, the power of attorney and the Registry certificate.</li>
          <li>An authorised capital set far above the plan.</li>
          <li>No Resident Director in the file.</li>
          <li>A bank account that has not been opened before the Spanish bank is told to remit.</li>
          <li>Shares allotted after the 60-day limit.</li>
          <li>FC-GPR filed late because the Indian bank&apos;s foreign inward remittance certificate was not requested.</li>
          <li>INC-20A forgotten because the company has not yet started trading.</li>
        </ul>

        <h2 id="next" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What to read next</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Once the company exists, the focus moves to funding it correctly, to the compliance calendar and to
          the first hires. See{" "}
          <Link href="/spain-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>,{" "}
          <Link href="/spain-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">the compliance calendar</Link>{" "}
          and{" "}
          <Link href="/spain-to-india/hiring-in-india" className="text-blue-800 font-semibold hover:underline">hiring in India</Link>.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://sede.agenciatributaria.gob.es/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Agencia Tributaria (Spain)</a>,{" "}
          <a href="https://comercio.gob.es/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Spanish Ministry of Economy, Trade and Business</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/spain-to-india/incorporation-steps" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/spain-to-india/faq"
          seeAllLabel="See all 179 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and Spanish
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Ready to Incorporate from Spain?"
        description="Tell us your shareholders, share capital and target date, and we'll map the SPICe+ filing, DINs, PAN and the bank account with a fixed quote."
      />
    </main>
  )
}
