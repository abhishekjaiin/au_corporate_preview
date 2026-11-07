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

const PAGE_URL = "https://www.theaucorp.com/usa-to-india/choosing-an-indian-state-and-city-for-us-companies"
const PARENT_URL = "https://www.theaucorp.com/usa-to-india"

const toc = [
  { id: "country-specific", label: "What's different for US companies" },
  { id: "start", label: "Start from the function, not the state" },
  { id: "table", label: "A first comparison of the main hubs" },
  { id: "state", label: "What the state changes" },
  { id: "gift", label: "GIFT City in brief" },
  { id: "multi", label: "One state or several" },
  { id: "questions", label: "Ten questions before you decide" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Which Indian state is best for a US company?", a: "There is no single best. Choose by function and talent first, then compare cost and state rules." },
  { q: "Can I change the registered office state later?", a: "Yes, but it needs shareholder and regulatory steps, so decide with care at the start." },
  { q: "Which cities are common for engineering teams?", a: "Bengaluru, Hyderabad, Pune and Chennai are common choices." },
  { q: "Which cities suit operations and finance teams?", a: "Hyderabad, Pune, Chennai and Delhi NCR are common, with Mumbai for finance and sales." },
  { q: "Does stamp duty differ by state?", a: "Yes, for the charter documents, leases and many agreements." },
  { q: "Is GIFT City suitable for a software company?", a: "Usually no. It is designed for international financial services." },
  { q: "Should I choose by incentive?", a: "No. Incentives change and carry conditions, and talent availability matters more." },
  { q: "Do I need separate registrations in each state?", a: "Goods and services tax, payroll and shops registrations are state-specific, so a team in a second state needs its own." },
  { q: "How many cities should I start with?", a: "One. Add a second when the first is stable." },
]

const relatedCards = [
  { title: "Setting Up a Global Capability Centre in India as a US Company: Captive, Build-Operate-Transfer and Hybrid Models, Cost-Plus Pricing, State Policies and Key Risks", desc: "How a US company builds a captive engineering, finance or operations centre in India: the three delivery models, entity and tax choices, cost-plus transfer pricing and safe harbour questions, permanent establishment, intellectual property, state incentives and a 12-month roadmap.", href: "/usa-to-india/gcc-for-us-companies" },
  { title: "Incorporation process", desc: "The online steps from name approval to the certificate.", href: "/usa-to-india/incorporation-process" },
  { title: "Subsidiary, branch, liaison office or LLP", desc: "Choosing the right Indian entity.", href: "/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" },
  { title: "Hiring and payroll in India", desc: "Contracts, statutory benefits and the monthly payroll cycle.", href: "/usa-to-india/hiring-and-payroll" },
]

export default function ChoosingAnIndianStateAndCityForUsCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Where Should a US Company Set Up in India? Comparing Bengaluru, Hyderabad, Pune, Chennai, Delhi NCR, Mumbai and GIFT City on Talent, Stamp Duty, Labour Rules and Incentives"
        description="How to choose the state and city for the registered office and the team: a decision framework, a comparison table of major hubs by function, how state law changes stamp duty, professional tax and shops rules, what GIFT City offers, and the order of questions that matter most."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-US"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/usa-to-india" },
          { label: "Choosing an Indian State and City for a US Company: Talent, Cost, Rules and Incentives" },
        ]}
      />

      <GuideHero
        eyebrow="Location: where to set up"
        title="Where Should a US Company Set Up in India? Comparing Bengaluru, Hyderabad, Pune, Chennai, Delhi NCR, Mumbai and GIFT City on Talent, Stamp Duty, Labour Rules and Incentives"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A US company choosing where to set up in India is choosing two things at once: a state, which decides
          stamp duty, shops and establishments rules, professional tax, incentives and the registrar&apos;s
          jurisdiction, and a city, which decides talent, attrition, cost and quality of life. The state of the
          registered office is fixed in the incorporation filing and can be changed later only by a formal
          shift. The best answer starts with the function. Engineering and product teams look at Bengaluru,
          Hyderabad, Pune and Chennai; finance, shared services and operations look at Hyderabad, Pune, Chennai
          and Delhi NCR; sales and market-facing teams look at Mumbai and Delhi NCR; and financial services and
          international finance units look at GIFT City. This page offers a framework and a first comparison
          that your own search for people should test.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the US
          </Link>
        </p>

        <GuideCountryContext country="usa" topic="state-and-city" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["State decides", "Stamp duty, shops and establishments act, professional tax, labour welfare fund, incentives and registrar"],
                ["City decides", "Talent pool, attrition, rent, commute and the cost of hiring"],
                ["Registered office", "Stated in the incorporation form; moving between states needs a formal procedure"],
                ["Common engineering hubs", "Bengaluru, Hyderabad, Pune, Chennai"],
                ["Common operations hubs", "Hyderabad, Pune, Chennai, Delhi NCR (Gurugram and Noida)"],
                ["Finance hub", "Mumbai; GIFT City for international financial services"],
                ["Incentives", "State policies change; verify current terms; do not choose on a subsidy alone"],
                ["Decision order", "Function, talent, leadership location, cost, then incentives"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="start" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Start from the function, not the state</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Most location decisions go wrong because the question is asked in reverse. A company asks which state
          has the best incentive and then tries to hire there. The sequence that works is to decide what the
          team will do, find where people with those skills live and want to work, locate the leader, and only
          then compare costs and incentives. A centre that cannot hire loses more in a year than any capital
          subsidy gives back.
        </p>

        <h2 id="table" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A first comparison of the main hubs</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Hub</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">State</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typically strong for</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Points to check</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Bengaluru", "Karnataka", "Software, product, data and AI, start-up ecosystem", "Competition for talent and attrition; rent and commute"],
                ["Hyderabad", "Telangana", "Software, life sciences, shared services, large GCC base", "Specific micro-markets; growth of rents"],
                ["Pune", "Maharashtra", "Engineering, automotive, shared services", "Infrastructure of the chosen area"],
                ["Chennai", "Tamil Nadu", "Manufacturing, automotive, software and shared services", "Climate and logistics; state policy terms"],
                ["Gurugram and Noida", "Haryana and Uttar Pradesh", "Operations, consulting, sales and corporate offices", "Two states with different rules even within one metropolitan area"],
                ["Mumbai", "Maharashtra", "Finance, media, sales and corporate headquarters", "Highest rents; commute"],
                ["GIFT City", "Gujarat", "International financial services and fund activities", "Separate regulator and rules; limited scope for non-financial companies"],
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

        <p className="text-gray-600 leading-relaxed mb-10">
          The table is a starting map and not a ranking. Each hub has sub-markets with different rents and
          talent, and conditions shift as companies move. Visit at least two before deciding, and speak to
          recruiters who will say how long a given role takes to fill.
        </p>

        <h2 id="state" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What the state changes</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Stamp duty</strong> on the Memorandum and Articles of Association and on leases and agreements varies by state and, for the charter, by authorised capital.</li>
          <li><strong>Shops and establishments rules</strong> set working hours, holidays, registration and employee records.</li>
          <li><strong>Professional tax and the labour welfare fund</strong> apply in some states and not others, with different rates.</li>
          <li><strong>Goods and services tax</strong> is registered by state, so a team in a second state needs a second registration if it supplies there.</li>
          <li><strong>Incentives and land policy</strong> differ, and some states offer concessions for specified sectors or for centres above a headcount threshold.</li>
          <li><strong>The registrar&apos;s jurisdiction</strong> decides which regional office handles your filings.</li>
        </ul>

        <h2 id="gift" className="text-2xl font-bold text-gray-900 mt-12 mb-4">GIFT City in brief</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          GIFT City in Gujarat is India&apos;s international financial services centre, with its own regulator
          and a regime designed for financial institutions, fund managers and related activities that deal in
          foreign currency. It suits banks, insurers, fund and treasury operations and some fintech businesses,
          and it is not a general location for a US software or manufacturing company. If your business is in
          financial services, check the current rules and the regulator&apos;s authorisation process before
          deciding. See{" "}
          <Link href="/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp" className="text-blue-800 font-semibold hover:underline">entity choices</Link>{" "}
          for the general options.
        </p>

        <h2 id="multi" className="text-2xl font-bold text-gray-900 mt-12 mb-4">One state or several</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A first team of ten to thirty people is usually best in one city, with one registered office and one
          set of registrations. Opening a second city early doubles registrations and splits the culture, so
          wait until the first site is stable. When a second city is needed for talent or customers, register
          the second branch or unit with the state authorities and add goods and services tax and payroll
          registrations in that state. A change of registered office between states later is possible but
          requires shareholder and regulatory steps, so choose with some care at the start.
        </p>

        <h2 id="questions" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Ten questions before you decide</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>What will the team do in the first year, and in year three?</li>
          <li>Where do the people with those skills live today?</li>
          <li>Who will lead the centre, and where do they want to be?</li>
          <li>What are the typical times to fill each role in the shortlisted cities?</li>
          <li>What is the all-in cost per desk, including deposits and fit-out?</li>
          <li>How is the commute and what do staff think of the area?</li>
          <li>Which state rules and registrations apply?</li>
          <li>Is there an incentive, and what are its conditions and duration?</li>
          <li>How close are customers, regulators and airports?</li>
          <li>What is the plan if the first site does not work?</li>
        </ol>

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

        <GuideServiceBox path="/usa-to-india/choosing-an-indian-state-and-city-for-us-companies" />
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
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
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
        title="Choosing Where to Set Up in India?"
        description="Tell us the functions and team size you plan, and we'll compare the states and cities that fit, with stamp duty and labour rules."
      />
    </main>
  )
}
