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

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/eu-india-fta-and-spanish-exporters"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Spanish companies" },
  { id: "status", label: "Where the agreement stands" },
  { id: "cover", label: "What it is reported to cover" },
  { id: "exporters", label: "For Spanish exporters to India" },
  { id: "investors", label: "For Spanish investors in India" },
  { id: "origin", label: "Rules of origin and documentation" },
  { id: "plan", label: "A planning checklist" },
  { id: "caution", label: "A note of caution" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Has the EU-India trade agreement been concluded?", a: "Negotiations were concluded on 27 January 2026 at the 16th India-EU Summit, according to reports. Signature and ratification are still to come." },
  { q: "When will it be signed?", a: "Reported as expected in December 2026, after the Commission asked the Council on 11 September 2026 to authorise signing." },
  { q: "When will it enter into force?", a: "Reported as early 2027, subject to European Parliament consent and Indian ratification. The date can move." },
  { q: "What does it cover?", a: "Reported coverage includes goods, services, temporary movement of professionals, financial services and telecoms." },
  { q: "Is investment protection included?", a: "A separate investment protection agreement is being negotiated alongside it." },
  { q: "Do I wait for the agreement before setting up?", a: "No. Plan on current rules and treat the agreement as upside." },
  { q: "Will duties on Spanish goods fall immediately?", a: "Not necessarily. Tariff cuts are usually phased in by product line and need the rules of origin to be met." },
  { q: "Does the agreement replace FDI rules?", a: "No. A Spanish investor still follows the FDI route, FEMA filings and company law." },
  { q: "Where can I check the latest status?", a: "On the European Commission trade pages and the Indian Ministry of Commerce, which publish the signing and ratification steps." },
]

const relatedCards = [
  { title: "Which Structure Should a Spanish Company Use in India? Private Limited, LLP, Branch, Liaison Office, Project Office or Joint Venture, with Sector Notes", desc: "Compare the ways a Spanish group can enter India: a wholly owned private limited company, a joint venture, a limited liability partnership, a branch, a liaison office or a project office. Includes the RBI net worth tests, tax differences and notes for renewables, auto components, ceramics, retail and infrastructure.", href: "/spain-to-india/structure-options" },
  { title: "Contracts and Disputes in India for Spanish Companies: Governing Law, Arbitration Seat, the New York Convention, Enforcing Spanish Judgments and Investment Protection", desc: "How to draft and enforce contracts with Indian counterparties from Spain: governing law, the choice of arbitration seat (Madrid, Singapore, London or Paris), enforcement of awards under the New York Convention, why Spanish court judgments are hard to enforce in India, interim relief, mediation, stamping and the status of investment treaty protection.", href: "/spain-to-india/contracts-courts-arbitration" },
  { title: "Moving Spanish Employees to India: Employment Visa, the USD 25,000 Salary Floor, FRRO Registration, 182-Day Residence, Dependants, Health Cover and Return", desc: "A step-by-step relocation guide for a Spanish employee posted to an Indian subsidiary: the employment visa and its conditions, FRRO registration within 14 days for stays over 180 days, Indian tax residency, the Spanish tax and social security position, dependants, housing, health cover and the return.", href: "/spain-to-india/relocate-spanish-staff" },
  { title: "Step-by-Step Incorporation of an Indian Private Limited Company by a Spanish Parent: From Name Approval to the Foreign Investment Filing", desc: "The exact steps to incorporate an Indian private limited company when the shareholder is Spanish: name, DIN and DSC, the SPICe+ form with AGILE-PRO-S, charter documents, PAN and TAN, bank account, share allotment, FC-GPR, first auditor and commencement of business.", href: "/spain-to-india/incorporation-steps" },
]

export default function EuIndiaFtaAndSpanishExportersPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="EU-India Free Trade Agreement for Spanish Companies: Status After the January 2026 Conclusion, Services and Investment, Rules of Origin and How to Plan Before It Is in Force"
        description="The EU-India trade agreement as it affects a Spanish company exporting to or investing in India: the 27 January 2026 conclusion, the signature and ratification steps reported for December 2026 and early 2027, what it is expected to cover, the separate investment protection agreement, and a planning checklist."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "EU-India Trade Agreement and Spanish Exporters: What Is Concluded, What Is Pending" },
        ]}
      />

      <GuideHero
        eyebrow="Trade: EU-India"
        title="EU-India Free Trade Agreement for Spanish Companies: Status After the January 2026 Conclusion, Services and Investment, Rules of Origin and How to Plan Before It Is in Force"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The European Union and India concluded negotiations on a free trade agreement on 27 January 2026 at
          the 16th India-EU Summit. According to a September 2026 law firm briefing, the European Commission
          asked the Council on 11 September 2026 to authorise signature, signing is expected in December 2026
          and entry into force in early 2027, subject to consent from the European Parliament and ratification
          in India. It is reported to cover goods, services, temporary movement of professionals, financial
          services and telecoms, while an investment protection agreement is being negotiated separately. Until
          the agreement is in force, the existing Indian tariffs, import rules and standards continue to apply.
          A Spanish company should plan its Indian entry on current rules, model the agreement&apos;s benefits
          as upside, and watch the final text for rules of origin and the schedule of tariff cuts.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideCountryContext country="spain" topic="trade-agreement" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Concluded", "27 January 2026 at the 16th India-EU Summit"],
                ["Next steps reported", "Council authorisation to sign requested 11 September 2026; signature expected December 2026"],
                ["Entry into force", "Reported as early 2027, after European Parliament consent and Indian ratification"],
                ["Scope reported", "Goods, services, temporary entry of professionals, financial services, telecoms"],
                ["Investment", "A separate investment protection agreement is being negotiated"],
                ["Until in force", "Current Indian duties, import licences and standards apply"],
                ["Rules of origin", "Will decide who benefits; read the final text"],
                ["Planning rule", "Do not price a project on tariff cuts that are not yet in force"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="status" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where the agreement stands</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The agreement has three stages still to run. The European Commission has asked the Council to
          authorise signature, and a signature is expected around December 2026. The European Parliament must
          then give its consent, and India must complete its own ratification and the legal steps for entry into
          force. Reports point to early 2027 for entry into force, but the date can move, and some parts such as
          investment protection are on a separate track. We rely on a September 2026 briefing by Cyril Amarchand
          Mangaldas for this timetable, and we recommend that you confirm it against the Commission and the
          Indian Ministry of Commerce before a decision turns on it.
        </p>

        <h2 id="cover" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What it is reported to cover</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Area</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What to expect</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Why it matters to a Spanish company</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Goods", "Staged tariff reductions and removal on many lines", "Machinery, auto parts, ceramics, food and wine are Spanish interests; check the schedule by tariff line"],
                ["Services", "Market access commitments and rules for professional services", "Engineering, consulting, infrastructure and IT services"],
                ["Movement of professionals", "Temporary entry and stay for defined categories", "Fewer visa frictions for transferred staff; visa rules still apply"],
                ["Financial services and telecoms", "Market access and regulatory cooperation", "Banks, insurers and equipment suppliers"],
                ["Regulatory cooperation", "Standards, customs facilitation and non-tariff barriers", "Product certification, labelling and testing"],
                ["Investment", "Protection under a separate agreement under negotiation", "Stronger protection than contract alone, once in force"],
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

        <h2 id="exporters" className="text-2xl font-bold text-gray-900 mt-12 mb-4">For Spanish exporters to India</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A Spanish company that sells to India without a local company pays Indian customs duty at the border,
          deals with the importer of record, meets Indian product standards and certifications and receives
          payment in line with exchange control. Duties on some Spanish products are high today, which is a
          reason many groups choose to produce or assemble in India. If the agreement cuts duties, the case for
          local production on tariff grounds weakens for some lines but remains strong for others such as
          products that benefit from local sourcing rules or from production-linked incentives. Do not price a
          contract or a factory decision on tariff cuts that have not entered into force.
        </p>

        <h2 id="investors" className="text-2xl font-bold text-gray-900 mt-12 mb-4">For Spanish investors in India</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The agreement is not the legal basis for investment in India: an Indian subsidiary still needs the FDI
          route, FEMA filings and Indian company law compliance. The agreement could improve services access and
          professional mobility and could be paired with an investment protection agreement. Until then,
          protection depends on the contract, the arbitration clause and the corporate structure. See{" "}
          <Link href="/spain-to-india/contracts-courts-arbitration" className="text-blue-800 font-semibold hover:underline">contracts and arbitration</Link>{" "}
          and{" "}
          <Link href="/spain-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">structure options</Link>.
        </p>

        <h2 id="origin" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Rules of origin and documentation</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Tariff preferences apply only to goods that meet the rules of origin, usually by wholly obtaining the
          goods, by sufficient processing or by a change in tariff classification or value content. A Spanish
          company with a supply chain across several countries should map where its inputs come from and keep
          records that can prove origin. Importers in India will ask for the origin statement, and customs may
          verify it. Start the mapping now so that you can claim preferences from the first day.
        </p>

        <h2 id="plan" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A planning checklist</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Identify your products by tariff line and note the current Indian duty.</li>
          <li>Watch the final text and the tariff schedule for your lines and the phase-in period.</li>
          <li>Map your inputs and origin so that you can qualify.</li>
          <li>Decide whether local production or assembly is justified without any tariff cut.</li>
          <li>Plan the Indian entity on current rules and treat the agreement as upside.</li>
          <li>Check whether your professionals will benefit from the temporary movement rules and keep the usual visa plan.</li>
          <li>Review contracts that quote duty-inclusive prices so they can adjust when duties fall.</li>
        </ol>

        <h2 id="caution" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A note of caution</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Trade agreements often take longer than announced to come into force, and tariff schedules usually
          phase in over years. Rely on the text, not on press summaries, and ask your customs adviser to confirm
          the rate on your product line. The details on this page come from secondary reports and should be
          verified before they support a commercial decision.
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

        <GuideServiceBox path="/spain-to-india/eu-india-fta-and-spanish-exporters" />
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
            { label: "Cyril Amarchand Mangaldas: briefings on the EU-India FTA", href: "https://www.cyrilamarchandblogs.com/" },
            { label: "European Commission: trade policy", href: "https://policy.trade.ec.europa.eu/" },
            { label: "Ministry of Commerce and Industry (India)", href: "https://commerce.gov.in/" },
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
        title="Exporting from Spain to India?"
        description="Tell us your products and customers, and we'll map the current duties, what the EU-India agreement changes and when."
      />
    </main>
  )
}
