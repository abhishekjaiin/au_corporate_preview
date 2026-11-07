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
import { GuideCountryProfile } from "@/components/guide/GuideCountryContext"
import { InquiryTrigger } from "@/components/InquiryTrigger"

const PAGE_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "at-a-glance", label: "India subsidiary at a glance" },
  { id: "approval", label: "Step one: the investment route and why Press Note 3 does not apply" },
  { id: "why-now", label: "What has changed in 2025 and 2026" },
  { id: "structure", label: "Which structure should a Spanish company choose?" },
  { id: "steps", label: "How to incorporate, step by step" },
  { id: "resident", label: "The Resident Director and the board" },
  { id: "money", label: "How money moves between Spain and the Indian subsidiary" },
  { id: "treaty", label: "The India-Spain tax treaty in one page" },
  { id: "tax", label: "Tax and transfer pricing: what the Spanish parent should know" },
  { id: "spain-law", label: "Spanish rules that follow the group into India" },
  { id: "compliance", label: "Annual compliance: what the subsidiary files" },
  { id: "people", label: "People: hiring, visas and provident fund" },
  { id: "cost", label: "What it costs and how long it takes" },
  { id: "mistakes", label: "Eight mistakes Spanish companies make" },
  { id: "sectors", label: "Sector notes for Spanish investors" },
  { id: "banking", label: "Banking and onboarding: the step that decides the timetable" },
  { id: "board", label: "Questions a Spanish board usually asks" },
  { id: "series", label: "The full guide series" },
  { id: "help", label: "How AU Corporate can help" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "sources", label: "Sources and how this page is maintained" },
]

const seriesCards = [
  { title: "India-Spain tax treaty, article by article", desc: "Rates, PE, share gains, relief and anti-abuse rules, with India as the source state.", href: "/spain-to-india/india-spain-dtaa" },
  { title: "Spanish employees in India", desc: "Indian salary tax, the Spanish exemption for work abroad and provident fund.", href: "/spain-to-india/spanish-employees-in-india" },
  { title: "Spanish parent obligations", desc: "Registro de Inversiones Exteriores filings, tax treatment and records.", href: "/spain-to-india/spanish-parent-obligations" },
  { title: "Documents, apostille and sworn translation", desc: "How to prepare Spanish papers for Indian filings.", href: "/spain-to-india/documents-apostille-and-sworn-translation" },
  { title: "Cost of setting up", desc: "A fee framework, running costs and a budget template.", href: "/spain-to-india/cost-of-setting-up-a-subsidiary-in-india-from-spain" },
  { title: "How long it takes", desc: "A week-by-week timeline and the causes of delay.", href: "/spain-to-india/how-long-it-takes-to-set-up-from-spain" },
  { title: "Resident director", desc: "The 182-day rule, options, duties and liability.", href: "/spain-to-india/resident-director-service-for-spanish-companies" },
  { title: "Incorporation steps", desc: "SPICe+, DIN, PAN, bank account and the first 180 days.", href: "/spain-to-india/incorporation-steps" },
  { title: "Structure options", desc: "Subsidiary, LLP, branch, liaison office or joint venture, with sector notes.", href: "/spain-to-india/structure-options" },
  { title: "Funding and FEMA", desc: "Equity, loans, pricing rules and the 60-day and 30-day deadlines.", href: "/spain-to-india/funding-and-fema" },
  { title: "Repatriating profits", desc: "Dividends, fees, royalties and interest compared.", href: "/spain-to-india/repatriating-profits" },
  { title: "Transfer pricing", desc: "Form 3CEB, benchmarking and matching the Spanish file.", href: "/spain-to-india/transfer-pricing" },
  { title: "Hiring in India", desc: "Contracts, payroll, labour codes and employer of record.", href: "/spain-to-india/hiring-in-india" },
  { title: "GDPR and the DPDP Act", desc: "Moving personal data between Spain and India.", href: "/spain-to-india/data-protection-gdpr-dpdp" },
  { title: "Contracts and arbitration", desc: "Governing law, seats, enforcement and investment treaty status.", href: "/spain-to-india/contracts-courts-arbitration" },
  { title: "Two-country compliance calendar", desc: "Indian and Spanish deadlines side by side.", href: "/spain-to-india/compliance-calendar" },
  { title: "EU-India trade agreement", desc: "Status, scope and how to plan before it is in force.", href: "/spain-to-india/eu-india-fta-and-spanish-exporters" },
  { title: "Relocating Spanish staff", desc: "Visa, FRRO registration, tax residence and family.", href: "/spain-to-india/relocate-spanish-staff" },
  { title: "Exit and restructuring", desc: "Share sale, buyback, liquidation and merger.", href: "/spain-to-india/exit-and-restructuring" },
  { title: "179 FAQs on setting up an India subsidiary", desc: "From pre-incorporation to closure.", href: "/spain-to-india/faq" },
]

const faqs = [
  { q: "Can a Spanish company own 100% of an Indian subsidiary?", a: "Yes, in sectors under the Automatic Route. Spain has no land border with India, so Press Note 3 does not apply by nationality. Sector caps still apply, for example in retail, insurance and defence." },
  { q: "Does a Spanish company need Indian government approval to invest?", a: "Not because it is Spanish. Approval is needed only in sectors or above caps that require it for any foreign investor, or if a beneficial owner is from a land-border country." },
  { q: "Does a Spanish company need Spanish permission to invest in India?", a: "The official guide to Spanish investment abroad describes no prior authorisation for ordinary investments, but a declaration to the Registro de Inversiones Exteriores is required afterwards." },
  { q: "How long does it take to set up an Indian subsidiary from Spain?", a: "About two to three months from board decision to a company that can bill. Incorporation itself takes two to three weeks from a complete file; Spanish documents and the bank account take longer." },
  { q: "What does it cost to set up a subsidiary in India?", a: "AU Corporate's fee for setting up the subsidiary is USD 750 to USD 1,000 for share capital up to ₹10 lakh (₹10 lakh is about EUR 9,400 at an indicative ₹106 per euro (2 November 2026 market rate; check the live rate before remitting)). It covers the incorporation work only; the total depends on your structure, sector and plan." },
  { q: "Is there a tax treaty between India and Spain?", a: "Yes. It was signed on 8 February 1993 and entered into force on 12 January 1995, was amended by a 2012 Protocol, and is modified by the Multilateral Instrument." },
  { q: "Why is the royalty and technical fee rate 10% when the treaty text says otherwise?", a: "The 10% comes through the most-favoured-nation clause, which imports the lower India-Germany rate. India gave effect to it by Notification 33/2024, applying from assessment year 2024-25. Keep a copy of the notification." },
  { q: "Does India accept a Spanish apostille?", a: "Spain and India are both parties to the Apostille Convention, so an apostille from the competent Spanish authority is the normal route and consular legalisation is not usually needed." },
  { q: "Is there a social security agreement between India and Spain?", a: "Not in the 2022 list of operating Indian agreements, so a certificate of coverage is not available. Spanish staff in India are generally covered by the Indian provident fund rules for international workers from the first day." },
  { q: "Can a Spanish company send personal data to India?", a: "Yes, using a GDPR transfer tool. India has no adequacy decision, so standard contractual clauses with a transfer impact assessment are the usual choice." },
  { q: "Should I choose arbitration or court for an Indian contract?", a: "Arbitration is usually more reliable, because awards are enforceable under the New York Convention while foreign court judgments are hard to enforce." },
  { q: "How should a Spanish parent fund an Indian subsidiary?", a: "Usually with equity shares under the Automatic Route, issued at or above fair value, with the money sent through an authorised dealer bank." },
  { q: "How can a Spanish parent take money out of an Indian subsidiary?", a: "Through dividends, service fees, royalties, loan interest and repayment, or a buyback or capital reduction. Each has a different tax and documentation profile." },
  { q: "Has the EU-India trade agreement been concluded?", a: "Negotiations were concluded on 27 January 2026 at the 16th India-EU Summit, according to reports. Signature and ratification are still to come." },
]

export default function SpainToIndiaHubPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="How to Set Up a Subsidiary in India from Spain: The 2026 Guide"
        description="How Spanish companies set up a subsidiary in India: FDI route, structure, incorporation, FEMA filings, the India-Spain tax treaty, Spanish declarations, staff, data and compliance. By a Chartered Accountant."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain" },
        ]}
      />

      <GuideHero
        eyebrow="Guide for Spanish companies"
        title="How to Set Up a Subsidiary in India from Spain: The 2026 Guide"
        dek="Structure, incorporation, FEMA/RBI filings, the India-Spain treaty, the apostille and sworn translation, costs and timelines for Spanish companies entering India, in plain terms."
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="The short answer">
          A Spanish company can set up an Indian subsidiary under India&apos;s normal foreign investment rules.
          Spain has no land border with India, so Press Note 3 (2020) does not apply by nationality, and most
          sectors allow 100% ownership under the Automatic Route, with approval needed only in sectors or above
          caps that need it for every foreign investor. The company is incorporated online through SPICe+,
          funded with shares issued at or above fair value, and the investment is reported to the Reserve Bank
          within 30 days of allotment. At home, the Spanish parent declares an investment of 10% or more to the
          Registro de Inversiones Exteriores within a month. The India-Spain tax treaty caps withholding at 15%
          on dividends and interest and 10% on royalties and technical fees. Plan on two to three months to a
          company that can bill.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="text-gray-600 leading-relaxed mb-10">
          This guide is written for the founders, finance directors and operations leads of Spanish companies
          deciding how to enter India, including groups in renewable energy, infrastructure, auto components,
          industrial engineering, ceramics, fashion and retail, and technology. It follows the order of the
          decisions: the investment route, the structure, the incorporation, the money, the tax treaty, the
          Spanish-side duties, annual compliance and people. Each section links to a deeper guide. Indian tax
          law changed on 1 April 2026, when the Income-tax Act, 2025 replaced the 1961 Act, so where a form has
          a new name we show the new name with the earlier one in brackets.
        </p>

        <h2 id="at-a-glance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">India subsidiary at a glance</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What to know</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Typical structure", "Private limited company under the Companies Act, 2013, wholly owned or as a joint venture"],
                ["Foreign investment route", "Automatic Route in most sectors; sector caps and approvals for some, whatever the investor's nationality"],
                ["Press Note 3", "Does not apply by nationality to a Spanish investor, because Spain has no land border with India"],
                ["Minimum people", "Two shareholders, two directors, one of them a Resident Director (182 days in India)"],
                ["Incorporation", "Online through SPICe+ with AGILE-PRO-S; two to three weeks from a complete file"],
                ["Funding deadlines", "Allot shares within 60 days of receiving the money; file FC-GPR within 30 days of allotment"],
                ["Treaty with Spain", "Dividends 15%, interest 15%, royalties and technical fees 10%; six-month site PE; 10% rule on share gains"],
                ["Spanish declarations", "Form D-5A within one month for 10% or more; D-8 annual report where thresholds are met"],
                ["Indian financial year", "1 April to 31 March"],
                ["Typical timeline", "Two to three months from board decision to a company that can bill"],
                ["Set-up fee (AU Corporate)", "USD 750 to USD 1,000 for share capital up to ₹10 lakh; incorporation work only"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="approval" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Step one: the investment route and why Press Note 3 does not apply</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          India lets foreign investors put money into most sectors without asking the government first. This is
          the Automatic Route under the Consolidated FDI Policy and the Non-Debt Instruments Rules, 2019 made
          under the Foreign Exchange Management Act. A Spanish company that invests in a sector under the
          Automatic Route needs no approval, and only has to report the investment to the Reserve Bank of India
          after the shares are issued. Some sectors have caps or conditions that apply to every foreign
          investor: defence above 74% needs approval, multi-brand retail is restricted, insurance and some media
          activities have limits, and a few activities are closed to foreign investment altogether. The first
          job on any project is therefore to identify the sector code of the Indian business and check the route
          against the current policy.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          Press Note 3 of 2020 is the rule that worries many first-time investors. It requires government
          approval for an investment from a country that shares a land border with India, or where the
          beneficial owner of the investor is a citizen of or based in such a country. Spain shares no land
          border with India, so a Spanish company is not caught by nationality. It can be caught by ownership:
          if a Spanish holding company is ultimately owned by a person or fund from a land-border country, the
          rule looks through the structure. Indian banks and the authorised dealer bank ask for the full
          ownership chain to individuals for this reason, and the Spanish parent should prepare an up-to-date
          chart before the first filing.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          What does matter for a Spanish investor is the pricing and reporting discipline that follows. Shares
          issued to a non-resident cannot be priced below fair value, shares sold by a non-resident to a
          resident cannot be priced above fair value, and every step is reported on a form with a deadline.
          These rules are set out in the guide on{" "}
          <Link href="/spain-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">Funding and FEMA</Link>,
          and they decide most of the practical work.
        </p>

        <h2 id="why-now" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What has changed in 2025 and 2026</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Five developments make 2026 a good moment to plan, and each affects a Spanish group differently.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>The EU-India trade agreement.</strong> Negotiations were concluded on 27 January 2026. According to a September 2026 law firm briefing, signature is expected in December 2026 and entry into force in early 2027, after European Parliament consent and Indian ratification. It is reported to cover goods, services and the temporary movement of professionals, with investment protection negotiated separately. Plan on current rules and treat the agreement as upside. See <Link href="/spain-to-india/eu-india-fta-and-spanish-exporters" className="text-blue-800 font-semibold hover:underline">EU-India trade agreement</Link>.</li>
          <li><strong>The Income-tax Act, 2025.</strong> It replaced the 1961 Act from 1 April 2026. Withholding on payments to non-residents now sits in Section 393 and salary tax in Section 392, and several forms were renamed: Form 41 replaces Form 10F, and Forms 145 and 146 replace Forms 15CA and 15CB. The treaty rates are unchanged.</li>
          <li><strong>The labour codes.</strong> India&apos;s four labour codes were reported in force from 21 November 2025, with rules and state implementation following. They change wage definitions, fixed-term employment and social security coverage. See <Link href="/spain-to-india/hiring-in-india" className="text-blue-800 font-semibold hover:underline">Hiring in India</Link>.</li>
          <li><strong>Data protection.</strong> The Digital Personal Data Protection Rules were notified on 13 November 2025, and the main duties start on 13 May 2027, with penalties of up to INR 250 crore. A Spanish group already working under the GDPR has a head start, but the two regimes differ. See <Link href="/spain-to-india/data-protection-gdpr-dpdp" className="text-blue-800 font-semibold hover:underline">GDPR and the DPDP Act</Link>.</li>
          <li><strong>The treaty notification on royalties and technical fees.</strong> A notification in March 2024 gave effect to a 10% rate under the most-favoured-nation clause, applying from assessment year 2024-25. A Spanish group that is still deducting at a higher rate should review its files. See <Link href="/spain-to-india/india-spain-dtaa" className="text-blue-800 font-semibold hover:underline">India-Spain tax treaty, article by article</Link>.</li>
        </ul>

        <GuideCountryProfile country="spain" />

        <h2 id="structure" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Which structure should a Spanish company choose?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          For most operating businesses the answer is a private limited company. It is a separate legal person,
          it limits the parent&apos;s liability, it can hire, lease, borrow and hold licences, and its tax
          position is clear. The shareholders can be the Spanish parent alone, or the parent together with an
          Indian partner in a joint venture. A limited liability partnership can suit professional services in
          sectors with no foreign investment conditions. A branch office is available only to a company with a
          net worth of USD 100,000 and five years of profit, can carry out a limited list of activities and is
          taxed at the higher foreign-company rate. A liaison office needs USD 50,000 and three years of profit
          and cannot earn income. A project office serves a single contract.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          Spanish groups often come with a sector in mind, and the sector shapes the structure. Renewable energy
          and infrastructure developers usually form a special purpose company for each project, with a holding
          company above. Auto-component and engineering suppliers tend to follow a customer and use a
          manufacturing subsidiary. Fashion and retail groups need to check the single-brand retail conditions,
          including local sourcing rules above a threshold. Technology and services groups often start with a
          small team and an employer-of-record arrangement, then move to a subsidiary. The detailed comparison,
          with the tax and permanent establishment consequences of each option, is in{" "}
          <Link href="/spain-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">Structure options</Link>.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          One more point on structure belongs here. Indian officers apply the General Anti-Avoidance Rule, and
          the treaty applies a limitation of benefits clause and the principal purpose test. A Spanish company
          that holds the Indian shares because it has real management and people in Spain is on safe ground. A
          Spanish shell inserted only to reach the treaty is not. If your group has an intermediate holding
          company, document why it exists.
        </p>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to incorporate, step by step</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Incorporation is online and does not require anyone to travel to India. The Ministry of Corporate
          Affairs&apos; SPICe+ form reserves the name, registers the company and, with AGILE-PRO-S, applies for
          the tax account numbers, provident fund and state insurance registrations at the same time. The steps
          in order are:
        </p>

        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
          <li>Confirm the sector and the route, and choose the structure.</li>
          <li>Prepare the Spanish documents: Mercantile Registry certificate, board resolution, power of attorney, beneficial ownership papers and passport copies, with apostille and sworn English translation.</li>
          <li>Obtain a Director Identification Number and a Digital Signature Certificate for each director, including the Resident Director.</li>
          <li>Reserve the name and draft the Memorandum and Articles of Association with an object clause that matches the business.</li>
          <li>File SPICe+ with AGILE-PRO-S and answer any registrar queries.</li>
          <li>Receive the certificate of incorporation, PAN and TAN, then hold the first board meeting and appoint the first auditor within 30 days.</li>
          <li>Open the bank account and remit the share capital from Spain.</li>
          <li>Allot the shares within 60 days of receiving the money, and file FC-GPR within 30 days of allotment.</li>
          <li>File the declaration of commencement of business, Form INC-20A, within 180 days of incorporation.</li>
        </ol>

        <p className="text-gray-600 leading-relaxed mb-10">
          The calendar is simple but unforgiving, because each deadline starts from a different event. The full
          walk-through is in{" "}
          <Link href="/spain-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">Incorporation steps</Link>,
          and a week-by-week schedule with the causes of delay is in{" "}
          <Link href="/spain-to-india/how-long-it-takes-to-set-up-from-spain" className="text-blue-800 font-semibold hover:underline">How long it takes</Link>.
          The two steps that slow most Spanish projects are the apostille and translation of the Spanish
          documents, which take two to four weeks, and the opening of the Indian bank account, which can take a
          month. Start both in the first week, in parallel with the name and director steps. The documents
          guide,{" "}
          <Link href="/spain-to-india/documents-apostille-and-sworn-translation" className="text-blue-800 font-semibold hover:underline">Documents, apostille and sworn translation</Link>,
          explains how to keep names and numbers consistent across every paper, which is the most common cause
          of rework.
        </p>

        <h2 id="resident" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Resident Director and the board</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Every Indian company needs at least one director who has stayed in India for 182 days or more in the
          financial year, and a private company needs at least two directors. A Spanish group has four ways to
          meet the rule: relocate a Spanish executive, hire an Indian managing director, use a professional
          director supplied by an adviser, or appoint an Indian partner or co-founder. The seat carries personal
          liability under the Companies Act, so choose the person for their real role in the business. A
          professional director must have a written scope, access to information and the ability to refuse a
          decision; a signature without a role is not a safe arrangement for anyone. The board must meet at
          least four times a year, with no more than 120 days between meetings, subject to relaxations for small
          companies. See{" "}
          <Link href="/spain-to-india/resident-director-service-for-spanish-companies" className="text-blue-800 font-semibold hover:underline">Resident director</Link>.
        </p>

        <h2 id="money" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How money moves between Spain and the Indian subsidiary</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Money goes into India as equity in nearly every case. The Spanish parent remits euros through an
          authorised dealer bank, the Indian bank issues an inward remittance certificate, and the company
          allots shares at or above fair value within 60 days. At incorporation the face value is usually the
          fair value. For a later round a valuation by a Chartered Accountant or merchant banker is needed.
          Loans are possible under the external commercial borrowing framework, with limits on the lender, the
          cost, the minimum maturity and the use of the money, and interest bears 15% withholding tax under the
          treaty. Convertible preference shares and debentures count as equity only if they are fully and
          mandatorily convertible.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          Money comes out of India by five routes: dividends, service fees, royalties, interest and loan
          repayment, and a buyback or capital reduction on exit. Dividends can be paid only from distributable
          profit after audit, so a young subsidiary pays none. Service fees and royalties give the parent cash
          earlier but need a contract, evidence of delivery and an arm&apos;s length price. Each payment needs
          Forms 145 and 146 and withholding at the treaty rate, and the Indian company can apply the treaty only
          if it holds the Spanish tax residency certificate and Form 41 on the payment date. ₹10 lakh is about
          EUR 9,400 at an indicative ₹106 per euro (2 November 2026 market rate; check the live rate before
          remitting). The comparison of the routes, with a suggested mix over the first five years, is in{" "}
          <Link href="/spain-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">Repatriating profits</Link>.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The key point for planning is that the pricing rule works in both directions. A non-resident cannot
          subscribe below fair value and cannot sell above it. That rule, and the deadlines of 60 days for
          allotment, 30 days for FC-GPR and 60 days for FC-TRS, explain most of the penalties that foreign
          investors pay. A late filing is cured by a late submission fee or by compounding, but a missed date is
          easy to avoid with a diary.
        </p>

        <h2 id="treaty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The India-Spain tax treaty in one page</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The treaty was signed on 8 February 1993 and entered into force on 12 January 1995. It was amended by
          a Protocol in 2012 and is modified by the Multilateral Instrument, which took effect for India on 1
          October 2019 and for Spain on 1 January 2022. Read with India as the source state and Spain as the
          residence state, it gives the following rates on payments from India to a Spanish beneficial owner:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Income</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treaty rate</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Comment</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dividends", "15%", "Flat, whatever the shareholding; the domestic rate is about 20% plus surcharge and cess"],
                ["Interest", "15%", "0% for the Spanish Government and central bank"],
                ["Royalties", "10%", "Through the most-favoured-nation clause; Notification 33/2024"],
                ["Fees for technical services", "10%", "Same route"],
                ["Business profits", "Only if there is a permanent establishment", "Building or installation site: more than six months; no services PE clause"],
                ["Gains on Indian shares", "Taxable in India if the seller holds at least 10%", "Domestic rate 12.5% on unlisted shares held over 24 months"],
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

        <p className="text-gray-600 leading-relaxed mb-10">
          Three practical points follow from the table. First, the dividend rate has no lower tier for large
          shareholders, so a parent should not expect the 10% found in some newer treaties. Second, the rate on
          royalties and technical fees depends on a clause and a notification, so keep both in the file. Third,
          the treaty gives relief only if the paperwork is in place on the day of payment: a tax residency
          certificate from the Agencia Tributaria, Form 41, a beneficial ownership declaration and a declaration
          of no permanent establishment in India. Spain relieves double taxation by credit, and its
          participation exemption usually removes the dividend and exit gain from Spanish tax for a qualifying
          holding. The treaty figures in this guide come from secondary summaries of the treaty and its
          notifications; confirm them against the treaty text before you rely on them. The full
          article-by-article guide is{" "}
          <Link href="/spain-to-india/india-spain-dtaa" className="text-blue-800 font-semibold hover:underline">India-Spain tax treaty, article by article</Link>.
        </p>

        <h2 id="tax" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax and transfer pricing: what the Spanish parent should know</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          An Indian company pays corporate income tax at about 25.17% once surcharge and cess are included, on
          profits computed under Indian rules. It deducts tax at source from salary, from payments to
          contractors and from cross-border payments, and it collects and pays goods and services tax on its
          supplies. Advance tax is paid on 15 June, 15 September, 15 December and 15 March. The company files a
          tax return, and where it has international transactions with the Spanish group it files Form 3CEB, an
          accountant&apos;s report on transfer pricing.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Transfer pricing is the area of highest scrutiny. Both India and Spain test related-party prices
          against the arm&apos;s length principle, and the Indian officer will look first at management fees,
          royalties, loans and guarantees. The protection is a written agreement for each flow, evidence that
          the service was delivered and a benchmarking study, kept in line with the file the Spanish parent
          prepares under Spanish rules. If the Spanish group is large enough for country-by-country reporting,
          the Indian subsidiary should know what the parent files. The Spanish side also matters for tax: the
          Spanish parent&apos;s controlled foreign company rules, its documentation duties and the EU minimum
          tax regime sit outside Indian law but affect the net result. See{" "}
          <Link href="/spain-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">Transfer pricing</Link>{" "}
          and{" "}
          <Link href="/spain-to-india/spanish-parent-obligations" className="text-blue-800 font-semibold hover:underline">Spanish parent obligations</Link>.
        </p>

        <h2 id="spain-law" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Spanish rules that follow the group into India</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A Spanish company does not need prior permission to invest in India, but it must declare the
          investment. The official guide to Spanish foreign investment describes a declaration to the Registro
          de Inversiones Exteriores for an investment of 10% or more of the capital or votes of a foreign
          company, made on form D-5A within one month of the transaction. Disposals are declared on D-5B.
          Intra-group loans above EUR 1 million with a term over a year are declared, and so are repayments. An
          annual report on form D-8 is due within seven months of the foreign company&apos;s year end where the
          holding is at least 10% and the foreign capital or net equity exceeds EUR 1.5 million, or where the
          investee is a holding company. Because the Indian year ends on 31 March, the D-8 date falls on 31
          October. The guide is not binding and thresholds change, so a Spanish adviser must confirm them.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The Spanish parent also needs a board decision that records the commercial reason for the investment,
          the correct corporate records and notarial documents for the powers of attorney used in India. The
          data side matters too: moving employee or customer data to India needs a GDPR transfer tool, and India
          has no EU adequacy decision, so standard contractual clauses are the usual choice. See{" "}
          <Link href="/spain-to-india/data-protection-gdpr-dpdp" className="text-blue-800 font-semibold hover:underline">GDPR and the DPDP Act</Link>.
          For disputes, a Spanish court judgment is hard to enforce in India, so contracts normally use
          arbitration with a seat such as Madrid, Singapore, London or Paris. See{" "}
          <Link href="/spain-to-india/contracts-courts-arbitration" className="text-blue-800 font-semibold hover:underline">Contracts and arbitration</Link>.
        </p>

        <h2 id="compliance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Annual compliance: what the subsidiary files</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          An Indian subsidiary has a steady rhythm of filings, whether or not it earns revenue. Tax deducted at
          source is deposited by the 7th of each month. Goods and services tax returns fall on the 11th and the
          20th. Provident fund and state insurance are due by the 15th. Advance tax follows the four dates
          above. After the 31 March year end, the Foreign Liabilities and Assets return is due by 15 July, the
          annual general meeting by 30 September, the financial statements within 30 days and the annual return
          within 60 days of the meeting, and the tax return by 31 October (30 November where transfer pricing
          applies). Each director completes an annual KYC by 30 September.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The Spanish parent has its own calendar, with the D-8 report, its corporate tax return and
          related-party documentation. The two calendars collide in three places: the Indian and Spanish year
          ends differ, the D-8 date matches the Indian tax return date, and Indian dividends arrive after the
          Indian audit and the annual meeting. Put both calendars in one file, with an owner against every line.
          The combined calendar is in{" "}
          <Link href="/spain-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">Two-country compliance calendar</Link>.
        </p>

        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">People: hiring, visas and provident fund</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A Spanish company can hire through its Indian subsidiary or through an employer of record. The
          subsidiary is the employer, deducts tax under Section 392, contributes to provident fund and, for
          lower wage levels, to state insurance, and follows the four labour codes reported in force from 21
          November 2025. Notice, probation, bonus, working hours and termination rules differ from Spain&apos;s,
          and a post-employment non-compete is narrowly enforced in India. The guide{" "}
          <Link href="/spain-to-india/hiring-in-india" className="text-blue-800 font-semibold hover:underline">Hiring in India</Link>{" "}
          covers contracts and payroll.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          A Spanish employee who moves to India needs an employment visa, with a minimum annual salary of USD
          25,000 for the main category, and must register with the Foreigners Regional Registration Office
          within 14 days if the stay exceeds 180 days. Salary for work done in India is taxed in India from the
          first day in most secondments, and a stay of 182 days or more can make the employee an Indian tax
          resident. Spain&apos;s personal income tax law has an exemption for qualifying work abroad up to EUR
          60,100 a year, which may offset the double tax. The list of operating Indian social security
          agreements published by the provident fund organisation in 2022 does not include Spain, so Spanish
          staff are generally covered by the Indian provident fund rules for international workers and may also
          stay in the Spanish system. Budget for both. See{" "}
          <Link href="/spain-to-india/spanish-employees-in-india" className="text-blue-800 font-semibold hover:underline">Spanish employees in India</Link>{" "}
          and{" "}
          <Link href="/spain-to-india/relocate-spanish-staff" className="text-blue-800 font-semibold hover:underline">Relocating Spanish staff</Link>.
        </p>

        <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What it costs and how long it takes</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Cost has three parts that should not be added together: the one-time cost of setting up the company,
          the recurring cost of keeping it compliant, and the capital you invest in shares. One-time costs
          include the professional fee, government and stamp charges, digital signatures, Spanish notary,
          apostille and translation, and bank charges on the first remittance. Recurring costs include the
          registered office, accounting, goods and services tax and payroll filings, the statutory audit, annual
          company filings, the tax return and, where it applies, the transfer pricing report. The capital is
          sized from a 12 to 18 month cash plan; there is no statutory minimum.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Indicative set-up fee:</strong> AU Corporate&apos;s fee for setting up the subsidiary is USD
          750 to USD 1,000 for share capital up to ₹10 lakh (₹10 lakh is about EUR 9,400 at an indicative ₹106
          per euro (2 November 2026 market rate; check the live rate before remitting)). It covers incorporation
          only. We quote the other lines against your plan, so please ask for a costing and not a rate card.
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-between bg-[#fffbe6] border border-gold-dark rounded-xl p-5 mb-10">
          <div>
            <strong className="block text-gray-900">Get a costing for your plan</strong>
            <p className="text-sm text-gray-600 mt-0.5">Tell us what you plan to set up and we will prepare a costing and book a call.</p>
          </div>
          <InquiryTrigger className="inline-block rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-[#081a42] hover:bg-gold-dark transition-colors whitespace-nowrap">
            Discuss your costing with our team
          </InquiryTrigger>
        </div>

        <p className="text-gray-600 leading-relaxed mb-10">
          On timing, allow two to four weeks for the Spanish documents, two to three weeks for incorporation and
          one to four weeks for the bank account, with much of it in parallel, for a total of about two to three
          months. The detail is in{" "}
          <Link href="/spain-to-india/cost-of-setting-up-a-subsidiary-in-india-from-spain" className="text-blue-800 font-semibold hover:underline">Cost of setting up</Link>{" "}
          and{" "}
          <Link href="/spain-to-india/how-long-it-takes-to-set-up-from-spain" className="text-blue-800 font-semibold hover:underline">How long it takes</Link>.
        </p>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Eight mistakes Spanish companies make</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>Starting the bank account late.</strong> The remittance cannot begin until the account is open, and onboarding takes weeks. Start the conversation before incorporation.</li>
          <li><strong>Inconsistent names and numbers.</strong> A director&apos;s name that differs between passport, registry certificate and power of attorney stops filings. Use the passport spelling everywhere.</li>
          <li><strong>Missing the 60-day and 30-day deadlines.</strong> Shares must be allotted within 60 days of receiving the money and FC-GPR filed within 30 days of allotment.</li>
          <li><strong>Deducting at the wrong rate.</strong> Without the residency certificate and Form 41 on the payment date, the Indian payer must deduct at the domestic rate. Treaty relief cannot be added afterwards without a slow refund claim.</li>
          <li><strong>Paying fees without evidence.</strong> Management fees with no contract, time records or deliverables are disallowed, and the Spanish parent still suffered the tax.</li>
          <li><strong>Forgetting the Spanish declaration.</strong> The D-5A is due within one month and the D-8 within seven months of the Indian year end; both should agree with the Indian filings.</li>
          <li><strong>A nominee Resident Director.</strong> A director who signs but takes no part in decisions is a risk to the director, the company and the group. Choose a real role.</li>
          <li><strong>Planning the exit last.</strong> The 10% share-gain rule, the pricing rule and the structure chosen at entry decide which exit routes are open. See <Link href="/spain-to-india/exit-and-restructuring" className="text-blue-800 font-semibold hover:underline">Exit and restructuring</Link>.</li>
        </ol>

        <h2 id="sectors" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sector notes for Spanish investors</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Spanish investment in India is concentrated in a few sectors, and each has its own pressure points.
          Reported figures for 2023 put bilateral trade at about USD 8.25 billion and cumulative Spanish
          investment at about USD 3.94 billion to December 2023, with roughly 280 to 300 Spanish companies
          operating in India. The list of names includes groups in renewables, auto components, ceramics,
          infrastructure, industrial engineering, information technology and fashion. These numbers come from a
          secondary source and are given only for context.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Sector</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Usual structure</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">First question to answer</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Renewable energy and infrastructure", "Holding company with a project company for each asset", "Which state and central licences apply, and does the contract make the site a permanent establishment after six months?"],
                ["Auto components and industrial engineering", "Manufacturing subsidiary near the customer", "Where will land, power and skilled staff come from, and what is the duty on imported machinery?"],
                ["Ceramics and building products", "Manufacturing or import and distribution company", "Can the product compete with local clusters on cost?"],
                ["Fashion and retail", "Single-brand retail company, franchise or joint venture", "Do the single-brand retail conditions, including local sourcing above a threshold, fit the plan?"],
                ["Technology and services", "Small subsidiary, sometimes through an employer of record first", "How will fees, transfer pricing and data transfers be documented?"],
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

        <p className="text-gray-600 leading-relaxed mb-10">
          If your sector is not listed, the first step is the same: identify the sector under the FDI Policy,
          confirm the route and any cap, and check whether a licence is needed before the company can trade. The
          structure guide,{" "}
          <Link href="/spain-to-india/structure-options" className="text-blue-800 font-semibold hover:underline">Structure options</Link>,
          gives more sector notes.
        </p>

        <h2 id="banking" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Banking and onboarding: the step that decides the timetable</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Opening the Indian bank account is the least predictable step of the project. Indian banks apply
          know-your-customer checks to the company, to each director and to the beneficial owners of the Spanish
          parent, and they ask for the source of the funds, the purpose of the account and evidence of the
          registered office. Some banks ask a director to attend in person or to verify identity at a branch or
          through a video call. The authorised dealer bank must also be able to receive euros and issue the
          inward remittance certificate that supports FC-GPR.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Choose the bank early and ask for its checklist before incorporation.</li>
          <li>Prepare a beneficial ownership chart that runs from the Indian company to the individuals who ultimately own the Spanish parent.</li>
          <li>Keep the Spanish bank informed so that it does not hold the remittance for questions about purpose.</li>
          <li>Use consistent names across every document, as the bank will compare them line by line.</li>
          <li>Plan a second account, for example in a different currency or with a different bank, once the first is working.</li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-10">
          A Spanish group with a relationship with a bank that has Indian branches can sometimes speed the
          process, but the regulatory checks are the same. We usually start the conversation in week one, in
          parallel with the apostille, so that the account is open when the certificate of incorporation
          arrives.
        </p>

        <h2 id="board" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Questions a Spanish board usually asks</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Boards tend to ask the same five questions at the approval stage, and the answers are worth having in
          the paper that goes to them.
        </p>

        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>What can go wrong, and what does it cost?</strong> The main risks are late filings, the wrong treaty rate, disallowed fees and a weak Resident Director arrangement. Each is avoidable with a calendar and a documented policy.</li>
          <li><strong>How much cash do we need, and when does it come back?</strong> Size capital from a 12 to 18 month plan. Expect fees and royalties before dividends, and dividends only after audited profit.</li>
          <li><strong>Who runs it?</strong> Decide the Resident Director and the managing director before filing, and write down their authority limits.</li>
          <li><strong>Do we need to tell anyone in Spain?</strong> Yes: the D-5A declaration within one month, the D-8 report where it applies and the group&apos;s tax and transfer pricing files.</li>
          <li><strong>What if it does not work?</strong> A solvent company can be sold, bought back, merged or wound up, each with tax and pricing rules. The exit routes are set out in <Link href="/spain-to-india/exit-and-restructuring" className="text-blue-800 font-semibold hover:underline">Exit and restructuring</Link>.</li>
        </ol>

        <h2 id="series" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The full guide series</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Each guide stands alone and links to the others. Start with the one that matches your next decision.
        </p>

        <div className="mb-10">
          <GuideRelatedCards cards={seriesCards} />
        </div>

        <h2 id="help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate can help</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          AU Corporate is a pan-India advisory firm, established in 2016, that supports foreign companies
          at every stage of an Indian subsidiary. We work with Spanish finance teams and advisers so that the
          Indian and Spanish positions agree.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { n: "1", title: "Set up", desc: "Choose the structure and incorporate.", chips: ["Entity structuring", "Wholly owned subsidiary", "SPICe+ incorporation", "Bank account support"], href: "/india-subsidiary-registration" },
            { n: "2", title: "Fund and FEMA", desc: "Bring capital in and report it.", chips: ["FEMA", "FC-GPR", "Share valuation", "ECB"] },
            { n: "3", title: "Operate", desc: "Books, payroll and indirect taxes, with a Spanish reporting pack.", chips: ["Accounting and bookkeeping", "GST", "Withholding Tax", "Payroll", "Monthly MIS", "Spanish consolidation support"], href: "/accounting-reporting-audit-support" },
            { n: "4", title: "People and relocation", desc: "Hire, pay and relocate your team.", chips: ["Employer of Record", "HR services", "Expat visa", "Visa and EPF planning"], href: "/payroll-expat-services" },
            { n: "5", title: "Repatriate funds", desc: "Move money to Spain with the paperwork and treaty position in order.", chips: ["Forms 145 and 146", "India-Spain treaty relief", "Dividends", "Royalties and service fees", "Intercompany agreements"], highlight: true },
            { n: "6", title: "Tax and transfer pricing", desc: "Keep the India position defensible.", chips: ["Direct and indirect tax", "Transfer pricing", "Form 48", "PE review", "CbCR filing (parent-prepared report)"], href: "/corporate-tax-gst-transfer-pricing" },
            { n: "7", title: "Audit and assurance", desc: "Satisfy Indian law and your Spanish auditors.", chips: ["Statutory audit", "Internal audit", "Internal financial controls", "GST and tax audit"], href: "/accounting-reporting-audit-support" },
            { n: "8", title: "Legal, disputes and arbitration", desc: "Defend your position and protect contracts.", chips: ["Tax litigation", "Arbitration support", "Agreement drafting and vetting"], href: "/spain-to-india/contracts-courts-arbitration" },
            { n: "9", title: "Restructure and exit", desc: "Scale, reorganise or leave.", chips: ["Restructuring", "Mergers and acquisitions", "Due diligence", "Valuation", "Winding up"], href: "/fema-rbi-compliance" },
          ].map((stage) => (
            <div key={stage.n} className={`relative rounded-xl border p-5 bg-white ${stage.highlight ? "border-2 border-gold bg-[#fffbe6]" : ""}`}>
              <span className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#081a42] text-gold text-xs font-bold">{stage.n}</span>
              <h3 className="font-bold text-gray-900 mb-1 pr-8">{stage.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{stage.desc}</p>
              <ul className="flex flex-wrap gap-1.5 mb-2">
                {stage.chips.map((chip) => (
                  <li key={chip} className="text-xs font-semibold bg-secondary/50 text-[#081a42] rounded-full px-2.5 py-1">{chip}</li>
                ))}
              </ul>
              {stage.href && (
                <Link href={stage.href} className="text-sm font-bold text-blue-800 hover:underline">View service &rarr;</Link>
              )}
            </div>
          ))}
        </div>

        <p className="text-gray-600 leading-relaxed mb-10">
          <strong>Scope note:</strong> we handle the Indian side. Spanish tax, Spanish company law and the
          Spanish foreign investment declarations come from your Spanish advisers, and we coordinate with them.
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

        <GuideServiceBox path="/spain-to-india" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/spain-to-india/faq"
          seeAllLabel="See all 179 questions"
          seeAllDescription="Plain answers from pre-incorporation to closure, including the FDI route, the treaty, documents, staff, data and exit."
        />

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources and how this page is maintained</h2>
        <GuideSources
          note="This guide is based on Press Note 3 (2020), the Companies Act, 2013, FEMA and the Non-Debt Instruments Rules, 2019, the Consolidated FDI Policy, the Income-tax Act, 2025, the India-Spain tax treaty and the MLI as reported by secondary sources, the Spanish Ministry of Economy's guide to foreign investment declarations, the EPFO list of social security agreements, and India's Digital Personal Data Protection Rules, 2025. Rules change often. We review this page at least quarterly and show the review date at the top."
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Agencia Tributaria", href: "https://sede.agenciatributaria.gob.es/" },
            { label: "Spanish Ministry of Economy, Trade and Business", href: "https://comercio.gob.es/" },
          ]}
        />

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and Spanish
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Planning an Indian Subsidiary from Spain?"
        description="Tell us about your company, your sector and your timeline, and we'll reply with a recommended structure, the document plan and a compliance overview."
      />
    </main>
  )
}
