import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideFaqList } from "@/components/guide/GuideFaqList"
import { GuideRelatedCards } from "@/components/guide/GuideRelatedCards"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideSources } from "@/components/guide/GuideSources"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/manufacturing-company-setup-in-india"

const toc = [
  { id: "routes", label: "Own factory, contract manufacturing or joint venture" },
  { id: "fdi", label: "FDI route for manufacturing" },
  { id: "location", label: "Choosing the state and land" },
  { id: "approvals", label: "Approvals before production" },
  { id: "incentives", label: "PLI schemes and other incentives" },
  { id: "tax", label: "Tax for a manufacturing company" },
  { id: "timeline", label: "A realistic manufacturing timeline" },
  { id: "how-we-work", label: "How we support a manufacturing project" },
  { id: "people", label: "Workforce and labour law for a plant" },
  { id: "supply", label: "Imports, local sourcing and customs" },
  { id: "exit-risk", label: "Planning for change" },
  { id: "checklist-mfg", label: "Project checklist for the first year" },
  { id: "plant-in-depth", label: "From site visit to first shipment: a detailed plan for a foreign-owned plant" },
  { id: "how-we-help", label: "How AU Corporate helps" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a foreign company set up a factory in India?", a: "Yes. Most manufacturing is open to 100% FDI on the Automatic Route through an Indian company." },
  { q: "Can a branch office manufacture in India?", a: "No. A branch cannot manufacture on its own account, though it can arrange contract manufacturing." },
  { q: "What approvals does a factory need?", a: "Building plan, Consent to Establish and Consent to Operate, fire safety, factory registration, BIS certification where applicable, an Import Export Code and GST." },
  { q: "How long does it take to start manufacturing in India?", a: "Incorporation takes weeks; land, construction and approvals usually take one to two years for a new plant." },
  { q: "What are PLI schemes?", a: "Production-linked incentives that pay a percentage of incremental sales of goods made in India in selected sectors, subject to each scheme's conditions." },
  { q: "Is contract manufacturing a good first step?", a: "Often, yes: it is fast and needs little capital, while the group plans its own plant." },
  { q: "Which Indian states are popular for new plants?", a: "Tamil Nadu, Gujarat, Maharashtra, Karnataka, Telangana, Uttar Pradesh and Andhra Pradesh, each with clusters in particular industries." },
]

const relatedCards = [
  { title: "India subsidiary registration", desc: "Incorporating the manufacturing company.", href: "/india-subsidiary-registration" },
  { title: "100% FDI in India", desc: "Which sectors allow full foreign ownership.", href: "/can-a-foreign-company-own-100-percent-of-an-indian-company" },
  { title: "US manufacturers: PLI, SEZ and incentives", desc: "Incentives in detail.", href: "/usa-to-india/us-manufacturers-pli-sez-and-incentives" },
]

export default function ManufacturingCompanySetupInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline={"Manufacturing Company Setup in India for Foreign Companies: Structure, Land, Approvals and Incentives"}
        description={"How a foreign company sets up manufacturing in India: own factory or contract manufacturing, FDI route, land, factory and pollution approvals, BIS and import-export registration, PLI incentives and tax."}
        datePublished="2026-11-07"
        dateModified="2026-11-13"
        inLanguage="en"
      />

      <Breadcrumb items={[{ label: "Manufacturing Company Setup" }]} />

      <GuideHero eyebrow={"Service: manufacturing setup"} title={"Manufacturing Company Setup in India for Foreign Companies: Structure, Land, Approvals and Incentives"} updated="13 November 2026" />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A foreign company can set up a manufacturing company in India with 100% foreign ownership in most sectors under the Automatic Route. The usual structure is a private limited company that leases or buys industrial land, often in a state industrial park, then obtains building, factory, fire and pollution approvals before production starts. Product certification under Indian standards, an import-export code and GST registration follow. Many groups start with contract manufacturing through an Indian partner while their own plant is built. Production-linked incentive schemes and state incentives can reduce the cost in eligible sectors, and the Indian company pays corporate tax of about 25.17% under the concessional regime.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Own factory, contract manufacturing or joint venture</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Route</th><th scope="col" className="border border-gray-300 p-3 text-left">How it works</th><th scope="col" className="border border-gray-300 p-3 text-left">Suits</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Own manufacturing company</th><td className="border border-gray-300 p-3">Wholly owned Indian company with its own plant</td><td className="border border-gray-300 p-3">Long-term production for India or export; control of quality and IP</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Contract manufacturing</th><td className="border border-gray-300 p-3">An Indian manufacturer produces to your specifications under contract</td><td className="border border-gray-300 p-3">Testing demand, fast start, lower capital; often the first step</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Joint venture</th><td className="border border-gray-300 p-3">Shared ownership with an Indian manufacturer</td><td className="border border-gray-300 p-3">Access to an existing plant, licences, workforce and customers</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Acquisition</th><td className="border border-gray-300 p-3">Buying an existing Indian manufacturing company</td><td className="border border-gray-300 p-3">Fast access to capacity; needs careful due diligence</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          A branch or liaison office cannot manufacture on its own account in India, although a branch can arrange contract manufacturing through Indian manufacturers. For a factory, a company is required.
        </p>

        <h2 id="fdi" className="text-2xl font-bold text-gray-900 mt-12 mb-4">FDI route for manufacturing</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Manufacturing is open to 100% FDI on the Automatic Route in most sectors. Defence manufacturing allows up to 74% on the Automatic Route, with approval above that. Investors from countries sharing a land border with India need government approval under Press Note 3 for any sector. See <Link href="/can-a-foreign-company-own-100-percent-of-an-indian-company" className="text-blue-800 font-semibold hover:underline">can a foreign company own 100% of an Indian company</Link>.
        </p>

        <h2 id="location" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing the state and land</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Industrial parks</strong> run by state industrial development corporations offer serviced plots with power, water and approvals in place, on long leases.</li>
          <li><strong>Private industrial land</strong> needs conversion and zoning checks before construction.</li>
          <li><strong>Plug-and-play facilities</strong> let you lease a ready building and start sooner.</li>
          <li><strong>State incentives</strong> vary: capital subsidies, stamp duty and electricity duty relief, and support for employment, under each state&apos;s industrial policy.</li>
          <li><strong>Logistics:</strong> ports, highways and supplier clusters matter more than incentives for most plants.</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Leading manufacturing states include Tamil Nadu, Gujarat, Maharashtra, Karnataka, Telangana, Uttar Pradesh and Andhra Pradesh, each with clusters in particular industries. Most states run single-window portals for investor approvals, and the central National Single Window System lists approvals across ministries.
        </p>

        <h2 id="approvals" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Approvals before production</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Approval</th><th scope="col" className="border border-gray-300 p-3 text-left">Issued by</th><th scope="col" className="border border-gray-300 p-3 text-left">When</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Building plan approval</th><td className="border border-gray-300 p-3">Local or industrial area authority</td><td className="border border-gray-300 p-3">Before construction</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Consent to Establish</th><td className="border border-gray-300 p-3">State Pollution Control Board</td><td className="border border-gray-300 p-3">Before construction, for polluting categories</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Fire safety approval</th><td className="border border-gray-300 p-3">State fire department</td><td className="border border-gray-300 p-3">Before occupation</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Factory registration and licence</th><td className="border border-gray-300 p-3">State labour or factories department under the occupational safety code</td><td className="border border-gray-300 p-3">Before production</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Consent to Operate</th><td className="border border-gray-300 p-3">State Pollution Control Board</td><td className="border border-gray-300 p-3">Before production</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Product certification (BIS)</th><td className="border border-gray-300 p-3">Bureau of Indian Standards</td><td className="border border-gray-300 p-3">Before selling products covered by quality control orders</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Import Export Code</th><td className="border border-gray-300 p-3">Directorate General of Foreign Trade</td><td className="border border-gray-300 p-3">Before importing machinery or exporting</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">GST registration</th><td className="border border-gray-300 p-3">GST authorities</td><td className="border border-gray-300 p-3">Before supplies begin</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Some sectors need further licences, for example drugs, food, chemicals, electronics or explosives. We map the complete list for your product and state at the start, because approvals determine the project timeline more than incorporation does.
        </p>

        <h2 id="incentives" className="text-2xl font-bold text-gray-900 mt-12 mb-4">PLI schemes and other incentives</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India&apos;s production-linked incentive (PLI) schemes pay incentives linked to incremental sales of goods manufactured in India in selected sectors, such as electronics, pharmaceuticals, medical devices, automobile components, specialty steel and solar modules, subject to investment and sales thresholds set in each scheme. Application windows and eligibility differ by scheme, and some schemes have closed to new applicants. State incentives add capital subsidies and duty relief. SEZ units keep customs and GST benefits, although the SEZ income-tax holiday is not available to units that started after 31 March 2020.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Incentives should be modelled as a bonus, not the reason for the investment. See <Link href="/usa-to-india/us-manufacturers-pli-sez-and-incentives" className="text-blue-800 font-semibold hover:underline">US manufacturers, PLI, SEZ and incentives</Link> for a detailed example.
        </p>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax for a manufacturing company</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Corporate tax of about 25.17% under the concessional regime.</li>
          <li>Customs duty on imported machinery and inputs, with concessions under some schemes and trade agreements.</li>
          <li>GST on supplies, with input credit on most purchases; exports are zero-rated.</li>
          <li>Transfer pricing on purchases of components, technology licences and sales to group companies abroad.</li>
          <li>Withholding tax on royalties and technical fees paid to the parent, reduced under the relevant tax treaty.</li>
        </ul>

        <h2 id="timeline" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A realistic manufacturing timeline</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white"><tr><th scope="col" className="border border-gray-300 p-3 text-left">Phase</th><th scope="col" className="border border-gray-300 p-3 text-left">Typical time</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Company incorporation and bank account</th><td className="border border-gray-300 p-3">4 to 6 weeks</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Land allotment or lease</th><td className="border border-gray-300 p-3">1 to 6 months</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Building approvals and construction</th><td className="border border-gray-300 p-3">6 to 18 months</td></tr>
              <tr className="bg-gray-50"><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Factory, fire and pollution approvals</th><td className="border border-gray-300 p-3">In parallel, finishing before production</td></tr>
              <tr><th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Trial production and certification</th><td className="border border-gray-300 p-3">1 to 3 months</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Contract manufacturing can start within weeks, which is why many groups run it alongside their own plant project.
        </p>

        <h2 id="how-we-work" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How we support a manufacturing project</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate incorporates the Indian company, handles FEMA reporting of the capital, sets up accounting, GST, customs-facing records and payroll, prepares transfer pricing for group purchases and sales, and coordinates with the technical consultants who manage land, building and environmental approvals. See <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and <Link href="/china-to-india/manufacturing-and-jv-for-chinese-companies" className="text-blue-800 font-semibold hover:underline">manufacturing and joint ventures for Chinese companies</Link>.
        </p>
        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Workforce and labour law for a plant</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A plant employs workers under the labour codes and the state&apos;s factory rules: registration of the factory, limits on working hours and overtime, safety committees above set sizes, canteens and welfare facilities in larger establishments, and provident fund and ESI for eligible workers. Contract labour is common but must be engaged through licensed contractors, with the principal employer responsible for ensuring wages and contributions are paid. Plan the shift pattern, the skills you need and training early, because skilled operators and maintenance technicians are often the scarcest people in a new industrial area.
        </p>

        <h2 id="supply" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Imports, local sourcing and customs</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Most new plants import machinery and some inputs at first, then build local suppliers. Imported capital goods attract customs duty unless a concession or scheme applies, and inputs are cleared with GST paid at import and claimed back as credit. Local sourcing reduces duty and lead times and may be required to meet the value-addition conditions in some incentive schemes. Keep customs valuation consistent with transfer pricing for anything bought from group companies, because both authorities compare the same invoices.
        </p>

        <h2 id="exit-risk" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Planning for change</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Manufacturing projects run for decades, so the structure should allow for a partner joining, a second plant, a change of product or a sale. Lease terms with industrial authorities often restrict transfer of the land, require production within set periods and impose conditions on change of ownership. Read these conditions before signing, because they affect future options as much as the purchase price.
        </p>
        <h2 id="checklist-mfg" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Project checklist for the first year</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
          <li>Incorporate the Indian company and report the capital to the RBI.</li>
          <li>Shortlist states and industrial parks; visit and compare land terms.</li>
          <li>Engage an architect and environmental consultant for approvals.</li>
          <li>Register for GST and obtain the Import Export Code.</li>
          <li>Plan recruitment and training for operators and supervisors.</li>
          <li>Set up accounting, payroll and transfer pricing before the first purchase from the group.</li>
        </ol>



        <h2 id="plant-in-depth" className="text-2xl font-bold text-gray-900 mt-12 mb-4">From site visit to first shipment: a detailed plan for a foreign-owned plant</h2>
        <p className="text-gray-700 mb-4">The sections above set out the choices. This part walks through the sequence a foreign parent actually follows, with the approvals, the money and the people in the order they come up. Timings assume a medium-sized assembly or processing plant on leased industrial land in an established park.</p>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Months 0 to 2: decide where and how</h3>
        <p className="text-gray-700 mb-4">Shortlist two or three states based on supplier base, port access, labour availability and the incentive package. Visit the industrial parks, meet the state investment promotion agency and ask for the current incentive policy in writing. At the same stage decide between your own factory, a contract manufacturer and a joint venture. A contract manufacturer gets product to market fastest but limits control over quality and IP. A joint venture brings land, approvals experience and a local network, but needs a carefully drafted shareholders&apos; agreement on deadlock, exit and technology use.</p>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Months 1 to 3: set up the company and the money</h3>
        <p className="text-gray-700 mb-4">Incorporate the Indian company while the site is being finalised. Most production activity allows 100% foreign ownership under the automatic route, but defence, some electronics and certain other sectors have conditions, and investors from countries sharing a land border with India need government approval. Decide how the project will be funded: equity, compulsorily convertible instruments, external commercial borrowings from the parent or a combination. A plant usually needs more capital up front than a services business, so align the funding plan with the land, building and machinery payment schedule.</p>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Months 2 to 6: land and building approvals</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>Allotment or lease of the plot from the industrial development corporation, with the lease deed registered and stamp duty paid.</li>
          <li>Building plan approval and, where the park requires it, approval of the layout from the park authority.</li>
          <li>Consent to Establish from the State Pollution Control Board, under the Water and Air Acts, before construction begins. Red category industries face the longest review.</li>
          <li>Fire safety approval of the plans and, later, a fire no-objection certificate before occupation.</li>
          <li>Power and water connections, often the slowest items in practice, so apply as soon as the plot is allotted.</li>
        </ul>
        <p className="text-gray-700 mb-4">Most states run a single-window portal that tracks these applications together. Use it, but keep a separate tracker, because each department still issues its own approval.</p>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Months 4 to 10: machinery, imports and customs</h3>
        <p className="text-gray-700 mb-4">Order machinery with delivery dates that match construction. Check whether imported capital goods qualify for reduced customs duty under an incentive scheme, an export promotion capital goods authorisation or a free trade agreement, and obtain the importer-exporter code before the first shipment. Second-hand machinery can be imported but faces additional conditions, including a chartered engineer&apos;s certificate. Plan the classification of components early, because customs duty on inputs often decides whether local assembly makes sense at all.</p>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Months 8 to 12: people and pre-production</h3>
        <p className="text-gray-700 mb-4">Register the factory under the factories law of the state, now aligned with the Occupational Safety, Health and Working Conditions Code, before production begins, and appoint an occupier. Register for provident fund and employee state insurance as soon as the first workers join, and register under the state shops and establishments law for any office. Draft standing orders or service rules, set shift patterns that respect the daily and weekly hour limits, and plan for contract labour compliance if you use a manpower agency. Recruit supervisors first; they will help hire and train operators.</p>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Months 10 to 14: consent to operate and first production</h3>
        <p className="text-gray-700 mb-4">Apply for the Consent to Operate from the pollution control board once construction and pollution control equipment are complete. Obtain the fire no-objection certificate and complete any product certification your goods need, such as Bureau of Indian Standards certification for products under a quality control order. Run trial production, validate quality and only then begin commercial shipments.</p>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Money: what foreign parents underestimate</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
          <li>Stamp duty and registration charges on the land lease, which vary by state and can be significant.</li>
          <li>Security deposits for power and water connections.</li>
          <li>Working capital for raw material stocks, which is often larger than planned because lead times from overseas suppliers are long.</li>
          <li>GST paid on capital goods and inputs before sales begin. It can be recovered as input tax credit, but only against future output tax or through a refund for exports.</li>
          <li>Pre-operative expenses during the twelve months or more before revenue starts.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Claiming incentives without losing them</h3>
        <p className="text-gray-700 mb-4">State incentives such as capital subsidies, stamp duty refunds, electricity duty waivers and reimbursement of state GST are usually linked to investment and employment milestones within a fixed period. Central schemes such as production linked incentives are tied to incremental sales and investment thresholds. Keep investment and employment evidence from day one, file claims on time and check clawback conditions before you relocate machinery or cut headcount. Incentives are often the difference between a project that meets its return target and one that does not, and they are lost more often through missed paperwork than through failure to qualify.</p>
        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">After the first year</h3>
        <p className="text-gray-700 mb-4">Once the plant is running, the annual cycle includes renewal of pollution consents, factory licence renewals, annual returns under labour laws, statutory audit, tax audit, transfer pricing documentation for purchases from and sales to group companies, and GST reconciliations. A single compliance calendar that combines company law, tax, labour and environmental deadlines is the most useful control a plant manager can have.</p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate helps</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India firm of Chartered Accountants and Company Secretaries, serving foreign companies since 2016. We handle the Indian side end to end, with the best pricing, better work support and a free first consultation.
        </p>
        <GuideCTA title={"Planning a Manufacturing Plant in India?"} description={"Tell us your product, target state and timeline, and we will map the structure, approvals and compliance plan."} />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList faqs={faqs} />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "DPIIT", href: "https://dpiit.gov.in/" },
            { label: "National Single Window System", href: "https://www.nsws.gov.in/" },
            { label: "Bureau of Indian Standards", href: "https://www.bis.gov.in/" },
            { label: "DGFT", href: "https://www.dgft.gov.in/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 13 November 2026. General information only, not legal or tax advice. Indian rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm title={"Planning a Manufacturing Plant in India?"} description={"Tell us your product, target state and timeline, and we will map the structure, approvals and compliance plan."} />
    </main>
  )
}
