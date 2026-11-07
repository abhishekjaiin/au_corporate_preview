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

const PAGE_URL = "https://www.theaucorp.com/usa-to-india/us-saas-and-digital-sales-into-india"
const PARENT_URL = "https://www.theaucorp.com/usa-to-india"

const toc = [
  { id: "country-specific", label: "What's different for US companies" },
  { id: "gst", label: "GST on online services (OIDAR)" },
  { id: "it", label: "Income tax: royalty, technical fee or business income?" },
  { id: "el", label: "The equalisation levy has been withdrawn" },
  { id: "sep", label: "Significant economic presence and the treaty" },
  { id: "table", label: "Which route fits which business" },
  { id: "local", label: "When a local entity starts to make sense" },
  { id: "fx", label: "Receipts and foreign exchange" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does a US SaaS company need to register for GST in India?", a: "If it sells online services to non-taxable persons in India, yes, under the simplified OIDAR registration for foreign suppliers. For sales to GST-registered businesses, the customer pays under reverse charge." },
  { q: "What is the GST rate on online services?", a: "18%." },
  { q: "Do Indian customers withhold tax on SaaS fees?", a: "It depends on whether the payment is a royalty or technical fee. The India-US treaty rate is 15% in the general case. Many subscription fees are argued to be business income, so the facts and contract matter." },
  { q: "Is the equalisation levy still charged?", a: "No. The 6% levy on online advertising ceased from 1 April 2025 and the 2% levy on e-commerce supply from 1 August 2024. Confirm against the current Finance Act." },
  { q: "Does the US company have a permanent establishment in India?", a: "Not from remote sales alone. A fixed place of business or a dependent agent could create one." },
  { q: "What is significant economic presence?", a: "A domestic law concept based on revenue or users in India. The India-US treaty has no equivalent, so the treaty normally prevails." },
  { q: "Can I invoice in US dollars?", a: "Yes for B2B sales, but consumer sales are normally in rupees for practical reasons. Foreign exchange rules apply to the customer's payment." },
  { q: "When should I set up a local company?", a: "When Indian customers need a local contracting party, support or data residency, or when you plan a team in India." },
  { q: "What documents should I give Indian customers for the treaty?", a: "A US tax residency certificate and Form 41, with a beneficial ownership declaration." },
]

const relatedCards = [
  { title: "Global VAT and GST for US sellers", desc: "Indirect tax for US companies selling abroad.", href: "/usa-to-india/global-vat" },
  { title: "DTAA and permanent establishment risk", desc: "How the India-US treaty treats a US company's presence in India.", href: "/usa-to-india/dtaa-pe-risk" },
  { title: "Repatriating profits to the US", desc: "Dividends, fees, royalties and the documents the bank needs.", href: "/usa-to-india/repatriating-profits" },
  { title: "Setting Up a Global Capability Centre in India as a US Company: Captive, Build-Operate-Transfer and Hybrid Models, Cost-Plus Pricing, State Policies and Key Risks", desc: "How a US company builds a captive engineering, finance or operations centre in India: the three delivery models, entity and tax choices, cost-plus transfer pricing and safe harbour questions, permanent establishment, intellectual property, state incentives and a 12-month roadmap.", href: "/usa-to-india/gcc-for-us-companies" },
]

export default function UsSaasAndDigitalSalesIntoIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Selling Software and Online Services from the US to Indian Customers: OIDAR GST Registration, Reverse Charge, Withholding Tax, Royalty Characterisation and the End of the Equalisation Levy"
        description="How a US software or digital business is taxed when it sells to India without a local entity: GST on online information and database access services, B2B reverse charge, income tax withholding and the royalty question, the abolition of the equalisation levy, significant economic presence and when to add a local company."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-US"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/usa-to-india" },
          { label: "US SaaS and Digital Sales into India: GST on Online Services, Withholding and Treaty Issues" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: digital sales"
        title="Selling Software and Online Services from the US to Indian Customers: OIDAR GST Registration, Reverse Charge, Withholding Tax, Royalty Characterisation and the End of the Equalisation Levy"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A US company that sells software as a service, apps, online content or other digital services to
          customers in India must look at three taxes. Goods and services tax applies to online information and
          database access or retrieval services, called OIDAR, and a foreign supplier selling to non-taxable
          online recipients such as consumers must register under a simplified procedure and collect 18% tax;
          for sales to Indian businesses the customer normally pays the tax under reverse charge. Income tax
          applies if the payment is treated as a royalty or a fee for technical services under Indian law and
          the treaty, and the Indian customer must then withhold, with the India-US treaty setting a rate of 15%
          in the general case. The equalisation levy on online advertising and on e-commerce supply was
          abolished, with the 6% levy removed from 1 April 2025 and the 2% levy from 1 August 2024. If the
          volume of Indian customers grows, a local company may still be worth it for invoicing, support and
          contract reasons.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the US
          </Link>
        </p>

        <GuideCountryContext country="usa" topic="digital-sales-gst" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["GST on online services", "OIDAR supplied to non-taxable online recipients: foreign supplier registers and pays; rate 18%"],
                ["B2B sales", "Indian business customers account for GST under reverse charge; check registration status of the buyer"],
                ["Income tax", "Software payments may be royalties or fees for technical services or simply business income; characterisation depends on the facts and the treaty"],
                ["Treaty rate", "15% in the general case under the India-US treaty for royalties and fees for included services; some categories lower"],
                ["Equalisation levy", "Online advertising levy removed from 1 April 2025; e-commerce levy removed from 1 August 2024"],
                ["Permanent establishment", "No fixed place of business means no PE; significant economic presence rule applies domestically but treaties may override"],
                ["Invoices and currency", "Indian customers expect INR invoices with GST details; foreign exchange rules apply to receipts"],
                ["When to add a local entity", "Support, contracts, data residency demands, tenders, or a team in India"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="gst" className="text-2xl font-bold text-gray-900 mt-12 mb-4">GST on online services (OIDAR)</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Online information and database access or retrieval services are services delivered over the internet
          with minimal human intervention, including software as a service, cloud storage, online games,
          streaming and apps. When a supplier located outside India provides them to a person in India who is
          not registered for GST and is not a business, the supplier is liable to register under a simplified
          registration for foreign suppliers, charge 18% tax, file monthly returns and pay the tax in foreign
          currency or rupees. When the customer is a business registered under GST, the customer pays the tax
          under reverse charge, and the supplier does not charge Indian GST but should keep the customer&apos;s
          registration number on the invoice. A US company that is unsure whether a customer is a business
          should ask for the registration number in the order form.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          A good order form for Indian customers collects the customer&apos;s name, address, GST registration
          number if any and the state of supply. The state determines whether the tax is the central and state
          components or the integrated tax. If the supplier cannot tell whether a recipient is a business, the
          default is to treat the sale as a consumer sale and charge tax.
        </p>

        <h2 id="it" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Income tax: royalty, technical fee or business income?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Indian income tax law treats payments for the use of, or the right to use, certain intellectual
          property and software as royalties, and payments for managerial, technical or consultancy services as
          fees for technical services. The treaty has its own definitions, and the Supreme Court held in 2021
          that payments by Indian distributors for resale of software copies were not royalties under the
          treaties it considered. Payments for access to a cloud service or for a standard subscription are
          argued by many to be business income taxable in India only if there is a permanent establishment, but
          Indian authorities have taken different positions, and the answer depends on the facts: what the
          customer gets, whether any right to the software is given, and how the service is delivered. If the
          payment is a royalty or fee under the treaty, the Indian customer must withhold tax at a rate that,
          under the India-US treaty, is 15% in the general case and may be lower for some categories. See{" "}
          <Link href="/usa-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">the treaty and permanent establishment guide</Link>.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Practical steps include a clear contract that describes the service, a tax residency certificate and
          Form 10F equivalent (now Form 41) to claim the treaty, and an understanding with large customers about
          whether they will withhold and how the US company will claim a credit. A gross-up clause, which makes
          the customer pay extra to cover withholding, is common in enterprise contracts, but Indian customers
          may refuse it.
        </p>

        <h2 id="el" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The equalisation levy has been withdrawn</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India introduced an equalisation levy of 6% on payments for online advertising to non-residents in
          2016, and a 2% levy on e-commerce supply and services in 2020. Both have been withdrawn: the 6% levy
          ceased from 1 April 2025 and the 2% levy from 1 August 2024. Income from digital services that used to
          be covered by the levy now falls back to the ordinary rules on withholding and permanent
          establishment, which is why the characterisation questions above matter more than before. Check the
          position against the current Finance Act before relying on this summary.
        </p>

        <h2 id="sep" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Significant economic presence and the treaty</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India&apos;s domestic law treats a non-resident as having a business connection if it has a
          significant economic presence in India, measured by revenue from Indian customers or the number of
          Indian users above stated thresholds. Treaties can override domestic law, and the India-US treaty has
          no equivalent clause, so a US company relying on the treaty would normally not be taxed on business
          profits without a permanent establishment. Disputes are possible, so keep records of where decisions
          are made and where the work is performed, and avoid giving Indian staff or agents the power to
          conclude contracts.
        </p>

        <h2 id="table" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Which route fits which business</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Situation</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Likely tax treatment</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What to put in place</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Consumer app sold from the US to Indian users", "GST under OIDAR on the supplier; income tax usually business income", "Simplified GST registration; INR pricing and invoices; payment gateway set up"],
                ["Enterprise SaaS to Indian businesses on subscription", "Customer pays GST under reverse charge; withholding question on the fee", "Order form with GST number; contract on withholding and gross-up; residency certificate"],
                ["Software licence with source code or IP rights", "Likely royalty; treaty rate applies", "Licence terms; treaty claim documents; transfer pricing if related-party"],
                ["Implementation and support by US staff visiting India", "Possible fee for technical services; PE risk if prolonged", "Day count; contract terms; consider a local entity"],
                ["Reseller or distributor in India", "Distributor margin; Indian company withholds on payments if a royalty", "Distribution agreement; pricing; compliance clauses"],
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

        <h2 id="local" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When a local entity starts to make sense</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Indian customers ask for a local contracting party, rupee invoicing or local support.</li>
          <li>Public-sector or regulated customers require an Indian entity or data residency.</li>
          <li>The US company wants a sales or customer success team in India.</li>
          <li>Withholding disputes or GST questions take more management time than a subsidiary would.</li>
          <li>The group plans a development team in India, which brings a subsidiary anyway. See <Link href="/usa-to-india/gcc-for-us-companies" className="text-blue-800 font-semibold hover:underline">the GCC guide</Link>.</li>
        </ol>

        <h2 id="fx" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Receipts and foreign exchange</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian customers pay for services imported from abroad through authorised dealer banks, and the bank
          will ask for the invoice and the purpose code. The US company should give its bank details clearly,
          quote the invoice currency, and be prepared to receive net of withholding tax with a certificate.
          Where the Indian customer is a group company, the transfer pricing rules apply as well. See{" "}
          <Link href="/usa-to-india/global-vat" className="text-blue-800 font-semibold hover:underline">global VAT and GST for US sellers</Link>.
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

        <GuideServiceBox path="/usa-to-india/us-saas-and-digital-sales-into-india" />
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
            { label: "GST portal (India)", href: "https://www.gst.gov.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "Internal Revenue Service", href: "https://www.irs.gov/" },
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
        title="Selling Software into India?"
        description="Tell us how you sell and to whom, and we'll map GST registration, withholding and treaty points."
      />
    </main>
  )
}
