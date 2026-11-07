import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideServiceBox } from "@/components/guide/GuideServiceBox"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/spain-to-india/faq"
const PARENT_URL = "https://www.theaucorp.com/spain-to-india"

const toc = [
  { id: "general", label: "Before you start: structure, cost and approvals" },
  { id: "compliance-calendar", label: "Compliance Calendar for a Spanish-Owned Indian Company: Indian and Spanish Deadlines Side by Side" },
  { id: "contracts-courts-arbitration", label: "Contracts, Courts and Arbitration in India for Spanish Companies" },
  { id: "cost-of-setting-up-a-subsidiary-in-india-from-spain", label: "Cost of Setting Up a Subsidiary in India from Spain: Fee Framework and Budget Checklist" },
  { id: "data-protection-gdpr-dpdp", label: "GDPR and India's DPDP Act: Data Transfers Between a Spanish Parent and an Indian Subsidiary" },
  { id: "documents-apostille-and-sworn-translation", label: "Spanish Documents for India: Notary, Apostille and Sworn Translation" },
  { id: "eu-india-fta-and-spanish-exporters", label: "EU-India Trade Agreement and Spanish Exporters: What Is Concluded, What Is Pending" },
  { id: "exit-and-restructuring", label: "Exit and Restructuring from India for Spanish Groups: Share Sale, Buyback, Liquidation and Merger" },
  { id: "funding-and-fema", label: "Funding an Indian Subsidiary from Spain: Equity, Loans, FEMA Pricing and Filings" },
  { id: "hiring-in-india", label: "Hiring in India for Spanish Companies: Contracts, Payroll, Labour Codes and Employer of Record" },
  { id: "how-long-it-takes-to-set-up-from-spain", label: "How Long It Takes to Set Up an Indian Subsidiary from Spain: Week-by-Week Timeline" },
  { id: "incorporation-steps", label: "Incorporation Steps for a Spanish Company in India: SPICe+, DIN, PAN and the Bank" },
  { id: "india-spain-dtaa", label: "India-Spain DTAA: Article-by-Article Guide with Tax Rates, PE, Share Gains and Anti-Abuse Rules" },
  { id: "relocate-spanish-staff", label: "Relocating Spanish Staff to India: Visa, FRRO Registration, Tax Residency and Family Practicalities" },
  { id: "repatriating-profits", label: "Repatriating Profits from India to Spain: Dividends, Fees, Royalties, Loans and Tax Cost" },
  { id: "resident-director-service-for-spanish-companies", label: "Resident Director in India for Spanish Companies: Rules, Options and Liability" },
  { id: "spanish-employees-in-india", label: "Spanish Employees in India: Income Tax, the Spanish Foreign-Work Exemption and Provident Fund" },
  { id: "spanish-parent-obligations", label: "Spanish Parent Obligations: Foreign Investment Declarations, Tax Treatment and Reporting" },
  { id: "structure-options", label: "Structure Options for Spanish Companies in India: Subsidiary, LLP, Branch, Liaison or JV" },
  { id: "transfer-pricing", label: "Transfer Pricing for Spanish Groups in India: Documentation, Form 3CEB and Benchmarking" },
]

type FaqItem = { n: number; id: string; q: string; a: string }
type FaqGroup = { id: string; label: string; readMore?: { href: string; label: string }; items: FaqItem[] }

const faqGroups: FaqGroup[] = [
  {
    id: "general",
    label: "Before you start: structure, cost and approvals",
    items: [
      { n: 1, id: "can-a-spanish-company-own-100-of-an-indian-subsidiary", q: "Can a Spanish company own 100% of an Indian subsidiary?", a: "Yes, in sectors under the Automatic Route. Spain has no land border with India, so Press Note 3 does not apply by nationality. Sector caps still apply, for example in retail, insurance and defence." },
      { n: 2, id: "does-a-spanish-company-need-indian-government-approval-to-in", q: "Does a Spanish company need Indian government approval to invest?", a: "Not because it is Spanish. Approval is needed only in sectors or above caps that require it for any foreign investor, or if a beneficial owner is from a land-border country." },
      { n: 3, id: "does-a-spanish-company-need-spanish-permission-to-invest-in-", q: "Does a Spanish company need Spanish permission to invest in India?", a: "The official guide to Spanish investment abroad describes no prior authorisation for ordinary investments, but a declaration to the Registro de Inversiones Exteriores is required afterwards." },
      { n: 4, id: "how-long-does-it-take-to-set-up-an-indian-subsidiary-from-sp", q: "How long does it take to set up an Indian subsidiary from Spain?", a: "About two to three months from board decision to a company that can bill. Incorporation itself takes two to three weeks from a complete file; Spanish documents and the bank account take longer." },
      { n: 5, id: "what-does-it-cost-to-set-up-a-subsidiary-in-india", q: "What does it cost to set up a subsidiary in India?", a: "AU Corporate's fee for setting up the subsidiary is USD 750 to USD 1,000 for share capital up to ₹10 lakh (₹10 lakh is about EUR 9,400 at an indicative ₹106 per euro (2 November 2026 market rate; check the live rate before remitting)). It covers the incorporation work only; the total depends on your structure, sector and plan." },
      { n: 6, id: "is-there-a-minimum-share-capital", q: "Is there a minimum share capital?", a: "No statutory minimum for a private limited company. Size the capital to your 12 to 18 month plan and any sector rule." },
      { n: 7, id: "what-is-the-automatic-route", q: "What is the Automatic Route?", a: "The route under the FDI Policy that lets a foreign investor invest in a permitted sector without government approval, subject to reporting to the Reserve Bank." },
      { n: 8, id: "what-is-a-resident-director", q: "What is a Resident Director?", a: "A director who has stayed in India for 182 days or more in the financial year. Every Indian company needs at least one." },
      { n: 9, id: "can-a-spanish-citizen-be-a-director-of-an-indian-company", q: "Can a Spanish citizen be a director of an Indian company?", a: "Yes, once they hold a Director Identification Number and a Digital Signature Certificate." },
      { n: 10, id: "what-is-spice", q: "What is SPICe+?", a: "The integrated online incorporation form of the Ministry of Corporate Affairs, which can also apply for PAN, TAN and other registrations." },
      { n: 11, id: "does-india-accept-spanish-documents", q: "Does India accept Spanish documents?", a: "Yes, with a notarial or registry document, an apostille and a sworn English translation. Spain and India are both parties to the Apostille Convention." },
      { n: 12, id: "is-there-a-tax-treaty-between-india-and-spain", q: "Is there a tax treaty between India and Spain?", a: "Yes, signed in 1993 and in force since 1995, amended by a 2012 Protocol and the MLI." },
      { n: 13, id: "what-accounting-standards-does-an-indian-subsidiary-follow", q: "What accounting standards does an Indian subsidiary follow?", a: "The Companies Act, 2013 and, above the thresholds, Indian Accounting Standards (Ind AS), which are converged with IFRS. A Spanish parent reporting under Spanish GAAP or IFRS will need a bridge for consolidation." },
      { n: 14, id: "what-is-the-indian-financial-year", q: "What is the Indian financial year?", a: "1 April to 31 March, which does not match the Spanish calendar year." },
    ],
  },
  {
    id: "compliance-calendar",
    label: "Compliance Calendar for a Spanish-Owned Indian Company: Indian and Spanish Deadlines Side by Side",
    readMore: { href: "/spain-to-india/compliance-calendar", label: "Read the full guide: Compliance Calendar for a Spanish-Owned Indian Company: Indian and Spanish Deadlines Side by Side" },
    items: [
      { n: 15, id: "when-is-the-annual-general-meeting-due", q: "When is the annual general meeting due?", a: "Within six months of the year end, so by 30 September for a March year end." },
      { n: 16, id: "when-must-aoc-4-and-mgt-7-be-filed", q: "When must AOC-4 and MGT-7 be filed?", a: "AOC-4 within 30 days and MGT-7 within 60 days of the annual general meeting." },
      { n: 17, id: "when-is-tax-deducted-at-source-due", q: "When is tax deducted at source due?", a: "By the 7th of the following month, with a quarterly return." },
      { n: 18, id: "when-is-the-income-tax-return-due", q: "When is the income tax return due?", a: "31 October for a company that needs an audit, extended to 30 November where transfer pricing applies. Confirm the date each year." },
      { n: 19, id: "what-is-the-fla-return", q: "What is the FLA return?", a: "The annual Foreign Liabilities and Assets return to the Reserve Bank, due by 15 July." },
      { n: 20, id: "what-does-the-spanish-parent-file-each-year", q: "What does the Spanish parent file each year?", a: "The D-8 report within seven months of the Indian year end where it applies, its corporate tax return and related-party documentation." },
      { n: 21, id: "can-due-dates-change", q: "Can due dates change?", a: "Yes, by notification. Confirm each date before it falls." },
      { n: 22, id: "how-do-i-deal-with-the-different-year-ends", q: "How do I deal with the different year ends?", a: "Prepare a management account to the Spanish year end for consolidation and agree an audit timetable that allows it." },
    ],
  },
  {
    id: "contracts-courts-arbitration",
    label: "Contracts, Courts and Arbitration in India for Spanish Companies",
    readMore: { href: "/spain-to-india/contracts-courts-arbitration", label: "Read the full guide: Contracts, Courts and Arbitration in India for Spanish Companies" },
    items: [
      { n: 23, id: "should-i-choose-arbitration-or-court-for-an-indian-contract", q: "Should I choose arbitration or court for an Indian contract?", a: "Arbitration is usually more reliable, because awards are enforceable under the New York Convention while foreign court judgments are hard to enforce." },
      { n: 24, id: "which-seat-is-common-for-spanish-groups", q: "Which seat is common for Spanish groups?", a: "Madrid, Singapore, London and Paris." },
      { n: 25, id: "is-spain-a-party-to-the-new-york-convention", q: "Is Spain a party to the New York Convention?", a: "Yes. India applies Part II of its Arbitration Act to awards from countries it has notified, so confirm the notification at the time." },
      { n: 26, id: "can-i-enforce-a-spanish-court-judgment-in-india", q: "Can I enforce a Spanish court judgment in India?", a: "Directly only if Spain is a reciprocating territory under Section 44A, which to our knowledge it is not. A fresh suit may be needed." },
      { n: 27, id: "which-law-should-govern-the-contract", q: "Which law should govern the contract?", a: "Indian or Spanish law, stated expressly, with the dispute clause matched to it. Indian law is practical where the assets are in India." },
      { n: 28, id: "do-indian-courts-support-arbitration", q: "Do Indian courts support arbitration?", a: "Generally yes, including interim measures in some cases, but delays are common." },
      { n: 29, id: "does-an-unstamped-contract-have-value", q: "Does an unstamped contract have value?", a: "It cannot be relied on as evidence until stamped. Plan the stamping." },
      { n: 30, id: "is-there-a-bilateral-investment-treaty-with-spain", q: "Is there a bilateral investment treaty with Spain?", a: "A treaty was signed in 1997, but India terminated many treaties. Confirm the status from an official source." },
      { n: 31, id: "how-do-i-protect-payment", q: "How do I protect payment?", a: "Use advance payment, bank guarantees or escrow, and clear termination rights." },
    ],
  },
  {
    id: "cost-of-setting-up-a-subsidiary-in-india-from-spain",
    label: "Cost of Setting Up a Subsidiary in India from Spain: Fee Framework and Budget Checklist",
    readMore: { href: "/spain-to-india/cost-of-setting-up-a-subsidiary-in-india-from-spain", label: "Read the full guide: Cost of Setting Up a Subsidiary in India from Spain: Fee Framework and Budget Checklist" },
    items: [
      { n: 32, id: "how-much-does-it-cost-to-set-up-a-subsidiary-in-india-from-s", q: "How much does it cost to set up a subsidiary in India from Spain?", a: "AU Corporate's fee for the set-up is USD 750 to USD 1,000 for share capital up to ₹10 lakh. Government charges, stamp duty, bank charges, office, audit and compliance are separate, and the total depends on your plan." },
      { n: 33, id: "is-there-a-minimum-capital", q: "Is there a minimum capital?", a: "There is no statutory minimum for a private limited company. Size it to your 12 to 18 month plan and any sector rule." },
      { n: 34, id: "what-is-10-lakh-in-euros", q: "What is ₹10 lakh in euros?", a: "₹10 lakh is about EUR 9,400 at an indicative ₹106 per euro (2 November 2026 market rate; check the live rate before remitting)." },
      { n: 35, id: "does-the-set-up-fee-include-annual-compliance", q: "Does the set-up fee include annual compliance?", a: "No. The set-up fee covers incorporation only. Accounting, tax, payroll and audit are priced against your plan." },
      { n: 36, id: "what-recurring-costs-start-in-the-first-year", q: "What recurring costs start in the first year?", a: "Registered office, accounting, GST and TDS returns, payroll compliance, the statutory audit, annual company filings and the tax return, plus a transfer pricing report where thresholds are crossed." },
      { n: 37, id: "do-i-pay-indian-stamp-duty", q: "Do I pay Indian stamp duty?", a: "Yes, on the charter documents and on some agreements. The rate depends on the state and on the document." },
      { n: 38, id: "are-bank-charges-included-in-a-quote", q: "Are bank charges included in a quote?", a: "Usually not. Ask who bears remittance charges and the conversion spread." },
      { n: 39, id: "does-spanish-notary-and-translation-cost-extra", q: "Does Spanish notary and translation cost extra?", a: "Yes. Notary, apostille and sworn translation in Spain are separate from the Indian fee." },
      { n: 40, id: "can-i-reduce-the-cost-by-choosing-a-branch", q: "Can I reduce the cost by choosing a branch?", a: "A branch has its own conditions and a net worth test, and it is usually not cheaper in the long run. See the structure guide." },
      { n: 41, id: "how-do-i-get-a-costing-for-my-plan", q: "How do I get a costing for my plan?", a: "Use the costing tool on the main guide or send us the structure, headcount, sector and shareholders." },
    ],
  },
  {
    id: "data-protection-gdpr-dpdp",
    label: "GDPR and India's DPDP Act: Data Transfers Between a Spanish Parent and an Indian Subsidiary",
    readMore: { href: "/spain-to-india/data-protection-gdpr-dpdp", label: "Read the full guide: GDPR and India's DPDP Act: Data Transfers Between a Spanish Parent and an Indian Subsidiary" },
    items: [
      { n: 42, id: "can-a-spanish-company-send-personal-data-to-india", q: "Can a Spanish company send personal data to India?", a: "Yes, using a GDPR transfer tool. India has no adequacy decision, so standard contractual clauses with a transfer impact assessment are the usual choice." },
      { n: 43, id: "is-there-an-eu-adequacy-decision-for-india", q: "Is there an EU adequacy decision for India?", a: "No, as far as we know. Check the European Commission's list before relying on this." },
      { n: 44, id: "who-regulates-data-protection-in-spain", q: "Who regulates data protection in Spain?", a: "The Agencia Española de Protección de Datos, under the GDPR and the Spanish organic law." },
      { n: 45, id: "what-is-the-dpdp-act", q: "What is the DPDP Act?", a: "India's Digital Personal Data Protection Act, 2023, with Rules notified on 13 November 2025." },
      { n: 46, id: "when-do-the-main-dpdp-duties-start", q: "When do the main DPDP duties start?", a: "On 13 May 2027, in stages under the Rules." },
      { n: 47, id: "what-is-the-dpdp-penalty", q: "What is the DPDP penalty?", a: "Up to INR 250 crore for the most serious breaches, as set in the Act's schedule." },
      { n: 48, id: "does-dpdp-block-transfers-to-spain", q: "Does DPDP block transfers to Spain?", a: "No blanket ban. The Act permits transfers except to countries the government restricts, subject to sector laws." },
      { n: 49, id: "do-standard-contractual-clauses-cover-staff-data", q: "Do standard contractual clauses cover staff data?", a: "Yes, if the module and annexes describe the real flows. A transfer impact assessment is also needed." },
      { n: 50, id: "does-gdpr-apply-to-the-indian-subsidiary", q: "Does GDPR apply to the Indian subsidiary?", a: "Directly, only if it offers goods or services to people in the EU or monitors their behaviour. Otherwise the clauses carry the obligations." },
    ],
  },
  {
    id: "documents-apostille-and-sworn-translation",
    label: "Spanish Documents for India: Notary, Apostille and Sworn Translation",
    readMore: { href: "/spain-to-india/documents-apostille-and-sworn-translation", label: "Read the full guide: Spanish Documents for India: Notary, Apostille and Sworn Translation" },
    items: [
      { n: 51, id: "does-india-accept-a-spanish-apostille", q: "Does India accept a Spanish apostille?", a: "Spain and India are both parties to the Apostille Convention, so an apostille from the competent Spanish authority is the normal route and consular legalisation is not usually needed." },
      { n: 52, id: "which-spanish-authority-issues-the-apostille", q: "Which Spanish authority issues the apostille?", a: "It depends on the document: notarial documents are generally apostilled through the notarial college, and other documents by the competent judicial or administrative body. Ask the notary." },
      { n: 53, id: "do-i-need-a-sworn-translation", q: "Do I need a sworn translation?", a: "Yes for Spanish-language documents. A sworn translator appointed by the Spanish Ministry of Foreign Affairs is the usual choice." },
      { n: 54, id: "do-i-need-a-notary-for-a-board-resolution", q: "Do I need a notary for a board resolution?", a: "Usually for the signatures, so that the document can be apostilled. The notary also helps with the power of attorney." },
      { n: 55, id: "how-recent-must-a-mercantile-registry-certificate-be", q: "How recent must a Mercantile Registry certificate be?", a: "Indian banks and the Registrar commonly accept certificates issued within three to six months. Ask each recipient." },
      { n: 56, id: "do-the-directors-need-indian-credentials", q: "Do the directors need Indian credentials?", a: "Yes. Each proposed director needs a DIN and a Digital Signature Certificate before the incorporation form is filed." },
      { n: 57, id: "what-if-the-indian-recipient-refuses-an-apostille", q: "What if the Indian recipient refuses an apostille?", a: "Ask it to state the requirement in writing and approach the Indian Embassy in Madrid or the Consulate General in Barcelona." },
      { n: 58, id: "can-a-lawyer-in-india-sign-for-my-company", q: "Can a lawyer in India sign for my company?", a: "Only under a power of attorney that has been notarised, apostilled, translated and stamped in India." },
    ],
  },
  {
    id: "eu-india-fta-and-spanish-exporters",
    label: "EU-India Trade Agreement and Spanish Exporters: What Is Concluded, What Is Pending",
    readMore: { href: "/spain-to-india/eu-india-fta-and-spanish-exporters", label: "Read the full guide: EU-India Trade Agreement and Spanish Exporters: What Is Concluded, What Is Pending" },
    items: [
      { n: 59, id: "has-the-eu-india-trade-agreement-been-concluded", q: "Has the EU-India trade agreement been concluded?", a: "Negotiations were concluded on 27 January 2026 at the 16th India-EU Summit, according to reports. Signature and ratification are still to come." },
      { n: 60, id: "when-will-it-be-signed", q: "When will it be signed?", a: "Reported as expected in December 2026, after the Commission asked the Council on 11 September 2026 to authorise signing." },
      { n: 61, id: "when-will-it-enter-into-force", q: "When will it enter into force?", a: "Reported as early 2027, subject to European Parliament consent and Indian ratification. The date can move." },
      { n: 62, id: "what-does-it-cover", q: "What does it cover?", a: "Reported coverage includes goods, services, temporary movement of professionals, financial services and telecoms." },
      { n: 63, id: "is-investment-protection-included", q: "Is investment protection included?", a: "A separate investment protection agreement is being negotiated alongside it." },
      { n: 64, id: "do-i-wait-for-the-agreement-before-setting-up", q: "Do I wait for the agreement before setting up?", a: "No. Plan on current rules and treat the agreement as upside." },
      { n: 65, id: "will-duties-on-spanish-goods-fall-immediately", q: "Will duties on Spanish goods fall immediately?", a: "Not necessarily. Tariff cuts are usually phased in by product line and need the rules of origin to be met." },
      { n: 66, id: "does-the-agreement-replace-fdi-rules", q: "Does the agreement replace FDI rules?", a: "No. A Spanish investor still follows the FDI route, FEMA filings and company law." },
      { n: 67, id: "where-can-i-check-the-latest-status", q: "Where can I check the latest status?", a: "On the European Commission trade pages and the Indian Ministry of Commerce, which publish the signing and ratification steps." },
    ],
  },
  {
    id: "exit-and-restructuring",
    label: "Exit and Restructuring from India for Spanish Groups: Share Sale, Buyback, Liquidation and Merger",
    readMore: { href: "/spain-to-india/exit-and-restructuring", label: "Read the full guide: Exit and Restructuring from India for Spanish Groups: Share Sale, Buyback, Liquidation and Merger" },
    items: [
      { n: 68, id: "how-can-a-spanish-parent-exit-an-indian-subsidiary", q: "How can a Spanish parent exit an Indian subsidiary?", a: "By selling the shares, a buyback, voluntary liquidation or strike-off, or a merger or conversion." },
      { n: 69, id: "how-is-a-gain-on-shares-taxed-in-india", q: "How is a gain on shares taxed in India?", a: "Long-term gains on unlisted shares held more than 24 months are taxed at 12.5%, and the treaty lets India tax a Spanish seller who holds at least 10%." },
      { n: 70, id: "is-the-gain-taxed-again-in-spain", q: "Is the gain taxed again in Spain?", a: "Usually largely exempt for a qualifying holding. Where not, Spain gives a credit for Indian tax. Confirm with a Spanish adviser." },
      { n: 71, id: "what-is-the-fema-pricing-rule-on-a-sale", q: "What is the FEMA pricing rule on a sale?", a: "A sale by a non-resident to a resident cannot be above fair value, and a valuation certificate is needed." },
      { n: 72, id: "which-forms-are-needed", q: "Which forms are needed?", a: "FC-TRS within 60 days of the transfer, and Forms 145 and 146 for the remittance. In Spain, D-5B within one month." },
      { n: 73, id: "how-long-does-a-liquidation-take", q: "How long does a liquidation take?", a: "Often a year or more, depending on creditors, tax clearance and approvals." },
      { n: 74, id: "what-is-strike-off", q: "What is strike-off?", a: "A quicker closure for a dormant company with no liabilities and no business for two years." },
      { n: 75, id: "can-i-merge-the-indian-company-into-another-group-company", q: "Can I merge the Indian company into another group company?", a: "Yes, with approvals. It can be tax-neutral if the conditions are met." },
      { n: 76, id: "can-i-stop-filing-for-a-dormant-company", q: "Can I stop filing for a dormant company?", a: "No. A company that stops filing faces penalties and its directors can be disqualified. Close it properly." },
    ],
  },
  {
    id: "funding-and-fema",
    label: "Funding an Indian Subsidiary from Spain: Equity, Loans, FEMA Pricing and Filings",
    readMore: { href: "/spain-to-india/funding-and-fema", label: "Read the full guide: Funding an Indian Subsidiary from Spain: Equity, Loans, FEMA Pricing and Filings" },
    items: [
      { n: 77, id: "how-should-a-spanish-parent-fund-an-indian-subsidiary", q: "How should a Spanish parent fund an Indian subsidiary?", a: "Usually with equity shares under the Automatic Route, issued at or above fair value, with the money sent through an authorised dealer bank." },
      { n: 78, id: "by-when-must-shares-be-allotted-after-the-money-arrives", q: "By when must shares be allotted after the money arrives?", a: "Within 60 days. After that the money may have to be refunded or regularised." },
      { n: 79, id: "what-is-form-fc-gpr", q: "What is Form FC-GPR?", a: "The filing that reports the allotment of shares to a foreign investor, due within 30 days of allotment." },
      { n: 80, id: "what-is-form-fc-trs", q: "What is Form FC-TRS?", a: "The filing for a transfer of shares between a resident and a non-resident, due within 60 days." },
      { n: 81, id: "what-is-the-pricing-rule", q: "What is the pricing rule?", a: "A non-resident cannot buy or subscribe below fair value, and cannot sell above it. Fair value is supported by a valuation." },
      { n: 82, id: "can-the-parent-lend-instead-of-investing", q: "Can the parent lend instead of investing?", a: "Yes, under the external commercial borrowing rules, with limits on lender, cost, maturity and use. Interest bears 15% withholding under the treaty." },
      { n: 83, id: "are-convertible-instruments-equity", q: "Are convertible instruments equity?", a: "Only if fully and mandatorily convertible. Optionally convertible or redeemable instruments are treated as debt." },
      { n: 84, id: "does-spain-need-to-be-told", q: "Does Spain need to be told?", a: "Yes. A Spanish investor declares an acquisition of 10% or more within one month on form D-5A, and intra-group loans above EUR 1 million over a year." },
      { n: 85, id: "what-if-the-filing-is-late", q: "What if the filing is late?", a: "A late submission fee applies and, for larger delays, compounding with the Reserve Bank. Avoid it by diarising each date." },
    ],
  },
  {
    id: "hiring-in-india",
    label: "Hiring in India for Spanish Companies: Contracts, Payroll, Labour Codes and Employer of Record",
    readMore: { href: "/spain-to-india/hiring-in-india", label: "Read the full guide: Hiring in India for Spanish Companies: Contracts, Payroll, Labour Codes and Employer of Record" },
    items: [
      { n: 86, id: "can-a-spanish-company-hire-in-india-without-a-subsidiary", q: "Can a Spanish company hire in India without a subsidiary?", a: "Yes, through an employer of record or as contractors, but the employer-of-record fee and the permanent establishment risk need to be managed." },
      { n: 87, id: "what-deductions-does-an-indian-employer-make", q: "What deductions does an Indian employer make?", a: "Tax on salary, provident fund, state insurance for lower wages and professional tax in some states." },
      { n: 88, id: "when-are-the-labour-codes-in-force", q: "When are the labour codes in force?", a: "They were reported in force from 21 November 2025, with rules and state implementation still developing. Confirm the current position." },
      { n: 89, id: "when-is-payroll-tax-due", q: "When is payroll tax due?", a: "By the 7th of the next month. Provident fund and state insurance are due by the 15th." },
      { n: 90, id: "is-a-non-compete-enforceable-in-india", q: "Is a non-compete enforceable in India?", a: "Post-employment non-competes are narrowly enforced. Confidentiality and intellectual property clauses are enforceable." },
      { n: 91, id: "do-i-need-an-employee-handbook", q: "Do I need an employee handbook?", a: "Policies on conduct, anti-bribery and harassment are required or advisable, and an internal committee is needed above a size threshold." },
      { n: 92, id: "how-long-is-a-typical-notice-period", q: "How long is a typical notice period?", a: "It depends on the contract and the role. One to three months is common for professionals." },
      { n: 93, id: "are-share-awards-from-the-parent-taxable-in-india", q: "Are share awards from the parent taxable in India?", a: "Yes, as a perquisite when they vest or are exercised, and the Indian company must withhold tax." },
      { n: 94, id: "is-gratuity-compulsory", q: "Is gratuity compulsory?", a: "It is payable after five years of service where the law applies, and the employer should provide for it." },
    ],
  },
  {
    id: "how-long-it-takes-to-set-up-from-spain",
    label: "How Long It Takes to Set Up an Indian Subsidiary from Spain: Week-by-Week Timeline",
    readMore: { href: "/spain-to-india/how-long-it-takes-to-set-up-from-spain", label: "Read the full guide: How Long It Takes to Set Up an Indian Subsidiary from Spain: Week-by-Week Timeline" },
    items: [
      { n: 95, id: "what-is-the-slowest-step", q: "What is the slowest step?", a: "Usually the bank account and the first remittance, followed by the Spanish apostille and translation." },
      { n: 96, id: "by-when-must-shares-be-allotted", q: "By when must shares be allotted?", a: "Within 60 days of receiving the money from the Spanish parent." },
      { n: 97, id: "by-when-must-the-foreign-investment-be-reported", q: "By when must the foreign investment be reported?", a: "Form FC-GPR within 30 days of allotting the shares." },
      { n: 98, id: "when-must-the-company-file-the-commencement-declaration", q: "When must the company file the commencement declaration?", a: "Form INC-20A within 180 days of incorporation." },
      { n: 99, id: "when-must-the-first-auditor-be-appointed", q: "When must the first auditor be appointed?", a: "Within 30 days of incorporation, by board resolution, with Form ADT-1 filed." },
      { n: 100, id: "can-the-spanish-and-indian-steps-run-in-parallel", q: "Can the Spanish and Indian steps run in parallel?", a: "Yes. The Spanish documents, the Indian director and name steps and the bank conversation can all start in week one." },
      { n: 101, id: "what-if-i-need-the-company-by-a-fixed-date", q: "What if I need the company by a fixed date?", a: "Tell us on day one. We can sequence the steps and tell you if the date is realistic, and discuss interim options." },
      { n: 102, id: "do-the-directors-need-to-travel-to-india", q: "Do the directors need to travel to India?", a: "Not for the incorporation filing, which is online, but some banks ask for a director to attend or to verify identity." },
    ],
  },
  {
    id: "incorporation-steps",
    label: "Incorporation Steps for a Spanish Company in India: SPICe+, DIN, PAN and the Bank",
    readMore: { href: "/spain-to-india/incorporation-steps", label: "Read the full guide: Incorporation Steps for a Spanish Company in India: SPICe+, DIN, PAN and the Bank" },
    items: [
      { n: 103, id: "how-many-directors-and-shareholders-does-a-private-company-n", q: "How many directors and shareholders does a private company need?", a: "Two shareholders and two directors, with at least one Resident Director." },
      { n: 104, id: "can-a-spanish-company-be-the-shareholder", q: "Can a Spanish company be the shareholder?", a: "Yes. A foreign company may subscribe to shares, provided the sector allows foreign investment. Documents are apostilled and translated." },
      { n: 105, id: "do-the-directors-need-to-be-in-india-to-incorporate", q: "Do the directors need to be in India to incorporate?", a: "No. The filing is online, with Digital Signature Certificates. Some banks ask a director to attend." },
      { n: 106, id: "what-is-agile-pro-s", q: "What is AGILE-PRO-S?", a: "An attached form to SPICe+ that applies for PAN, TAN, provident fund, state insurance and other registrations, and for the bank account." },
      { n: 107, id: "how-soon-must-the-first-auditor-be-appointed", q: "How soon must the first auditor be appointed?", a: "Within 30 days of incorporation, by the board, with Form ADT-1." },
      { n: 108, id: "what-is-form-inc-20a", q: "What is Form INC-20A?", a: "The declaration of commencement of business, to be filed within 180 days of incorporation." },
      { n: 109, id: "can-i-change-the-name-later", q: "Can I change the name later?", a: "Yes, with a special resolution and Registrar approval, but choosing a good name at the start avoids the delay and cost." },
    ],
  },
  {
    id: "india-spain-dtaa",
    label: "India-Spain DTAA: Article-by-Article Guide with Tax Rates, PE, Share Gains and Anti-Abuse Rules",
    readMore: { href: "/spain-to-india/india-spain-dtaa", label: "Read the full guide: India-Spain DTAA: Article-by-Article Guide with Tax Rates, PE, Share Gains and Anti-Abuse Rules" },
    items: [
      { n: 110, id: "what-is-the-indian-withholding-tax-on-dividends-paid-to-a-sp", q: "What is the Indian withholding tax on dividends paid to a Spanish parent?", a: "15% of the gross amount under the treaty, flat, if the Spanish company is the beneficial owner and holds the paperwork on the payment date. The domestic rate is about 20% plus surcharge and cess." },
      { n: 111, id: "why-is-the-royalty-and-technical-fee-rate-10-when-the-treaty", q: "Why is the royalty and technical fee rate 10% when the treaty text says otherwise?", a: "The 10% comes through the most-favoured-nation clause, which imports the lower India-Germany rate. India gave effect to it by Notification 33/2024, applying from assessment year 2024-25. Keep a copy of the notification." },
      { n: 112, id: "when-does-a-building-or-installation-site-become-a-permanent", q: "When does a building or installation site become a permanent establishment?", a: "After more than six months. The treaty has no separate clause that turns services by employees into a permanent establishment after a set number of days." },
      { n: 113, id: "are-gains-on-indian-shares-taxable-in-india-for-a-spanish-se", q: "Are gains on Indian shares taxable in India for a Spanish seller?", a: "If the seller held at least 10%, India may tax the gain, at 12.5% for unlisted shares held more than 24 months. For holdings below 10% the residual rule leaves the gain taxable only in Spain." },
      { n: 114, id: "does-spain-tax-the-dividend-again", q: "Does Spain tax the dividend again?", a: "Usually not for a qualifying holding, because the Spanish participation exemption removes most of the dividend from Spanish tax. Where it does not apply, Spain gives a credit for Indian tax up to the Spanish tax on that income." },
      { n: 115, id: "what-documents-prove-treaty-eligibility", q: "What documents prove treaty eligibility?", a: "A tax residency certificate from the Agencia Tributaria, Form 41, a beneficial ownership declaration and a no-PE declaration, plus a note on the MFN clause where the 10% rate is claimed." },
      { n: 116, id: "does-the-principal-purpose-test-affect-spanish-groups", q: "Does the principal purpose test affect Spanish groups?", a: "Yes. It has applied to Spain since 1 January 2022. A Spanish company with real people and decisions is at low risk; a pass-through company with no substance is exposed." },
      { n: 117, id: "does-the-treaty-remove-the-need-for-any-indian-approval", q: "Does the treaty remove the need for any Indian approval?", a: "No. It deals only with tax. India's foreign investment rules, RBI reporting and sector caps apply separately." },
      { n: 118, id: "can-i-get-relief-if-the-wrong-rate-was-deducted", q: "Can I get relief if the wrong rate was deducted?", a: "You can claim a refund through the Indian return, but it is slow. It is far easier to hold the documents before the payment date." },
    ],
  },
  {
    id: "relocate-spanish-staff",
    label: "Relocating Spanish Staff to India: Visa, FRRO Registration, Tax Residency and Family Practicalities",
    readMore: { href: "/spain-to-india/relocate-spanish-staff", label: "Read the full guide: Relocating Spanish Staff to India: Visa, FRRO Registration, Tax Residency and Family Practicalities" },
    items: [
      { n: 119, id: "what-visa-does-a-spanish-employee-need-to-work-in-india", q: "What visa does a Spanish employee need to work in India?", a: "An employment visa, applied for with an offer or employment letter and documents about the Indian company. Productive work on a business visa is not permitted." },
      { n: 120, id: "is-there-a-salary-floor", q: "Is there a salary floor?", a: "A minimum annual salary of USD 25,000 applies to the main employment category. Confirm exceptions." },
      { n: 121, id: "do-i-need-to-register-after-arrival", q: "Do I need to register after arrival?", a: "Yes, with the Foreigners Regional Registration Office within 14 days if the stay will exceed 180 days." },
      { n: 122, id: "when-does-a-spanish-employee-become-an-indian-tax-resident", q: "When does a Spanish employee become an Indian tax resident?", a: "At 182 days or more in a financial year, or 60 days plus 365 days in the previous four years. Special categories may differ." },
      { n: 123, id: "is-there-a-social-security-agreement", q: "Is there a social security agreement?", a: "None found between India and Spain. Confirm with an adviser." },
      { n: 124, id: "can-family-members-come", q: "Can family members come?", a: "Yes on dependant visas, which the main applicant should request at the same time." },
      { n: 125, id: "where-do-i-apply", q: "Where do I apply?", a: "Online, with attendance where needed at the Embassy of India in Madrid or the Consulate General in Barcelona." },
      { n: 126, id: "how-early-should-i-start", q: "How early should I start?", a: "Eight to twelve weeks before the planned move." },
      { n: 127, id: "does-the-spanish-exemption-for-work-abroad-apply", q: "Does the Spanish exemption for work abroad apply?", a: "Possibly, up to EUR 60,100 a year if the conditions are met. A Spanish adviser must confirm." },
    ],
  },
  {
    id: "repatriating-profits",
    label: "Repatriating Profits from India to Spain: Dividends, Fees, Royalties, Loans and Tax Cost",
    readMore: { href: "/spain-to-india/repatriating-profits", label: "Read the full guide: Repatriating Profits from India to Spain: Dividends, Fees, Royalties, Loans and Tax Cost" },
    items: [
      { n: 128, id: "how-can-a-spanish-parent-take-money-out-of-an-indian-subsidi", q: "How can a Spanish parent take money out of an Indian subsidiary?", a: "Through dividends, service fees, royalties, loan interest and repayment, or a buyback or capital reduction. Each has a different tax and documentation profile." },
      { n: 129, id: "what-is-the-withholding-tax-on-dividends-to-spain", q: "What is the withholding tax on dividends to Spain?", a: "15% under the treaty, if the documents are in place on the payment date." },
      { n: 130, id: "what-is-the-rate-on-technical-fees-and-royalties", q: "What is the rate on technical fees and royalties?", a: "10%, through the most-favoured-nation clause and Notification 33/2024." },
      { n: 131, id: "is-a-dividend-taxed-again-in-spain", q: "Is a dividend taxed again in Spain?", a: "Usually not for a qualifying holding, because of the participation exemption. Confirm the conditions with a Spanish adviser." },
      { n: 132, id: "can-the-subsidiary-pay-a-management-fee-from-day-one", q: "Can the subsidiary pay a management fee from day one?", a: "Yes if there is a contract and real services at an arm's length price. Indian officers will test it." },
      { n: 133, id: "why-are-shareholder-costs-disallowed", q: "Why are shareholder costs disallowed?", a: "Services that only protect the parent's investment are the parent's own cost, not a service to the subsidiary." },
      { n: 134, id: "does-the-fee-attract-goods-and-services-tax", q: "Does the fee attract goods and services tax?", a: "Often yes, under reverse charge for services received from abroad. The Indian company pays it and may claim credit." },
      { n: 135, id: "how-is-interest-taxed", q: "How is interest taxed?", a: "15% withholding under the treaty, with deductibility subject to the interest limitation rule and transfer pricing." },
      { n: 136, id: "what-documents-does-the-bank-need", q: "What documents does the bank need?", a: "Forms 145 and 146, the contract, invoices, the residency certificate and sometimes proof of tax paid." },
    ],
  },
  {
    id: "resident-director-service-for-spanish-companies",
    label: "Resident Director in India for Spanish Companies: Rules, Options and Liability",
    readMore: { href: "/spain-to-india/resident-director-service-for-spanish-companies", label: "Read the full guide: Resident Director in India for Spanish Companies: Rules, Options and Liability" },
    items: [
      { n: 137, id: "who-is-a-resident-director-in-india", q: "Who is a Resident Director in India?", a: "A director who has stayed in India for 182 days or more in the financial year. Every Indian company must have at least one." },
      { n: 138, id: "can-a-spanish-citizen-be-the-resident-director", q: "Can a Spanish citizen be the Resident Director?", a: "Yes, if the person stays in India long enough and holds a DIN and a Digital Signature Certificate, and has the right visa. A Spanish citizen resident in India for 182 days qualifies." },
      { n: 139, id: "how-many-directors-does-a-private-company-need", q: "How many directors does a private company need?", a: "At least two, one of whom must be a Resident Director." },
      { n: 140, id: "can-an-adviser-supply-a-resident-director", q: "Can an adviser supply a Resident Director?", a: "Yes, as a professional director on a written scope. The director must have a real role and the ability to decide. AU Corporate can discuss what arrangement fits your plan." },
      { n: 141, id: "is-a-resident-director-personally-liable", q: "Is a Resident Director personally liable?", a: "Yes. Directors are personally liable for statutory defaults and for fraud, and a formal seat does not remove it." },
      { n: 142, id: "what-if-the-resident-director-leaves-india", q: "What if the Resident Director leaves India?", a: "The company may default on the requirement if no director meets the 182-day test. Track the days and appoint a replacement in good time." },
      { n: 143, id: "does-the-director-need-annual-kyc", q: "Does the director need annual KYC?", a: "Yes, each director with a DIN completes an annual KYC. Late KYC can lead to deactivation of the DIN." },
      { n: 144, id: "how-often-must-the-board-meet", q: "How often must the board meet?", a: "At least four times a year with no more than 120 days between meetings, subject to relaxations for small companies." },
      { n: 145, id: "should-the-spanish-parent-insure-its-directors", q: "Should the Spanish parent insure its directors?", a: "It is worth pricing directors' and officers' cover for the Indian company, especially with a professional or relocated director." },
    ],
  },
  {
    id: "spanish-employees-in-india",
    label: "Spanish Employees in India: Income Tax, the Spanish Foreign-Work Exemption and Provident Fund",
    readMore: { href: "/spain-to-india/spanish-employees-in-india", label: "Read the full guide: Spanish Employees in India: Income Tax, the Spanish Foreign-Work Exemption and Provident Fund" },
    items: [
      { n: 146, id: "is-there-a-social-security-agreement-between-india-and-spain", q: "Is there a social security agreement between India and Spain?", a: "Not in the 2022 list of operating Indian agreements, so a certificate of coverage is not available. Spanish staff in India are generally covered by the Indian provident fund rules for international workers from the first day." },
      { n: 147, id: "is-a-spanish-employee-s-salary-for-work-in-india-taxable-in-", q: "Is a Spanish employee's salary for work in India taxable in India?", a: "Yes, unless the treaty's employment article conditions are met, which a secondee whose cost is borne by the Indian subsidiary normally does not meet." },
      { n: 148, id: "what-is-the-spanish-exemption-for-work-abroad", q: "What is the Spanish exemption for work abroad?", a: "Spanish personal income tax law exempts income from work effectively performed abroad for a non-resident entity, up to EUR 60,100 a year, if the conditions are met. A Spanish adviser must confirm eligibility for each person." },
      { n: 149, id: "does-a-secondee-pay-spanish-social-security-as-well-as-india", q: "Does a secondee pay Spanish social security as well as Indian provident fund?", a: "Possibly. Without an agreement both systems can apply, depending on the posting terms and Spanish rules. Decide and write it into the contract." },
      { n: 150, id: "who-deducts-indian-tax-on-the-salary", q: "Who deducts Indian tax on the salary?", a: "The Indian employer, under Section 392 of the Income-tax Act, 2025, by the 7th of the following month." },
      { n: 151, id: "do-share-awards-from-the-spanish-parent-create-indian-tax", q: "Do share awards from the Spanish parent create Indian tax?", a: "Yes for the portion earned while working in India. The Indian employer should be told about the awards so that it can withhold tax." },
      { n: 152, id: "can-a-short-business-trip-avoid-indian-tax", q: "Can a short business trip avoid Indian tax?", a: "Only if the employee stays below the treaty day count, the employer is Spanish and bears the cost, and no productive work is done for the Indian company. Keep a travel record." },
      { n: 153, id: "how-do-i-avoid-paying-twice", q: "How do I avoid paying twice?", a: "Not through an agreement. Use the Spanish exemption where it applies, structure the posting carefully and budget for both systems where they overlap." },
    ],
  },
  {
    id: "spanish-parent-obligations",
    label: "Spanish Parent Obligations: Foreign Investment Declarations, Tax Treatment and Reporting",
    readMore: { href: "/spain-to-india/spanish-parent-obligations", label: "Read the full guide: Spanish Parent Obligations: Foreign Investment Declarations, Tax Treatment and Reporting" },
    items: [
      { n: 154, id: "does-a-spanish-company-need-permission-to-invest-in-india", q: "Does a Spanish company need permission to invest in India?", a: "The official guide to Spanish investment abroad describes no prior authorisation for ordinary investments. A declaration to the Registro de Inversiones Exteriores is required after the investment." },
      { n: 155, id: "when-must-the-spanish-investment-be-declared", q: "When must the Spanish investment be declared?", a: "Within one month of the transaction for acquisitions of 10% or more, on form D-5A, and disposals on D-5B." },
      { n: 156, id: "what-is-the-annual-d-8-report", q: "What is the annual D-8 report?", a: "A report on the foreign company filed within seven months of its year end, where the Spanish holder has at least 10% and the foreign capital or net equity exceeds EUR 1.5 million, or the company is a holding." },
      { n: 157, id: "do-intra-group-loans-need-a-declaration", q: "Do intra-group loans need a declaration?", a: "Loans from a Spanish company above EUR 1 million with a term over one year are declared, and so are repayments." },
      { n: 158, id: "are-indian-dividends-taxed-in-spain", q: "Are Indian dividends taxed in Spain?", a: "Generally largely exempt for a qualifying holding under the participation exemption. Confirm the current percentage and conditions with a Spanish adviser." },
      { n: 159, id: "do-cfc-rules-apply-to-an-indian-operating-company", q: "Do CFC rules apply to an Indian operating company?", a: "Rarely, because an operating company that pays normal Indian tax is not the usual target, but passive income and holding entities should be reviewed." },
      { n: 160, id: "what-spanish-records-does-india-ask-for", q: "What Spanish records does India ask for?", a: "Mercantile Registry extracts, the bylaws, a board resolution, beneficial ownership information and recent accounts." },
      { n: 161, id: "who-prepares-the-spanish-declarations", q: "Who prepares the Spanish declarations?", a: "Your Spanish adviser or the bank handling the transfer. The Indian adviser supplies the Indian evidence." },
    ],
  },
  {
    id: "structure-options",
    label: "Structure Options for Spanish Companies in India: Subsidiary, LLP, Branch, Liaison or JV",
    readMore: { href: "/spain-to-india/structure-options", label: "Read the full guide: Structure Options for Spanish Companies in India: Subsidiary, LLP, Branch, Liaison or JV" },
    items: [
      { n: 162, id: "which-structure-do-most-spanish-companies-use-in-india", q: "Which structure do most Spanish companies use in India?", a: "A private limited company, wholly owned or in a joint venture. It limits liability and allows the full range of activity." },
      { n: 163, id: "can-a-spanish-company-own-100-of-an-indian-company", q: "Can a Spanish company own 100% of an Indian company?", a: "Yes in sectors under the Automatic Route. Caps and conditions apply in retail, insurance, defence, media and some other sectors." },
      { n: 164, id: "does-press-note-3-apply-to-spanish-investors", q: "Does Press Note 3 apply to Spanish investors?", a: "Not by nationality. Spain has no land border with India, so the approval requirement for land-border countries does not apply unless a beneficial owner is from such a country." },
      { n: 165, id: "what-are-the-conditions-for-a-branch-office", q: "What are the conditions for a branch office?", a: "A net worth of USD 100,000 and profits in the five preceding years, with a limited list of permitted activities." },
      { n: 166, id: "what-are-the-conditions-for-a-liaison-office", q: "What are the conditions for a liaison office?", a: "A net worth of USD 50,000 and profits in the three preceding years; it cannot earn income." },
      { n: 167, id: "is-an-llp-better-than-a-company", q: "Is an LLP better than a company?", a: "Only for services in sectors with no FDI conditions. Many banks and investors prefer a company." },
      { n: 168, id: "is-a-subsidiary-a-permanent-establishment-of-the-parent", q: "Is a subsidiary a permanent establishment of the parent?", a: "Not by itself. The risk arises if the parent runs it as a department or if its people conclude contracts in India for the parent." },
      { n: 169, id: "what-tax-does-a-branch-pay", q: "What tax does a branch pay?", a: "Indian tax at the higher foreign company rate on its profits, plus remittance of the profits without dividend withholding tax." },
      { n: 170, id: "can-i-change-structure-later", q: "Can I change structure later?", a: "Yes, by converting, transferring the business or merging, but each route has tax and FEMA consequences. Plan the end state at the start." },
    ],
  },
  {
    id: "transfer-pricing",
    label: "Transfer Pricing for Spanish Groups in India: Documentation, Form 3CEB and Benchmarking",
    readMore: { href: "/spain-to-india/transfer-pricing", label: "Read the full guide: Transfer Pricing for Spanish Groups in India: Documentation, Form 3CEB and Benchmarking" },
    items: [
      { n: 171, id: "what-is-transfer-pricing", q: "What is transfer pricing?", a: "The rules that require prices between related companies to be what independent parties would agree. India and Spain both apply them." },
      { n: 172, id: "what-is-form-3ceb", q: "What is Form 3CEB?", a: "An accountant's report on international transactions with associated enterprises, filed with the Indian tax return." },
      { n: 173, id: "does-a-subsidiary-with-no-revenue-need-documentation", q: "Does a subsidiary with no revenue need documentation?", a: "Yes, if it has international transactions such as service fees or loans from the parent." },
      { n: 174, id: "which-transactions-are-the-highest-risk", q: "Which transactions are the highest risk?", a: "Management fees, royalties, intra-group loans, guarantees and cost allocations." },
      { n: 175, id: "what-is-the-benefit-test-for-services", q: "What is the benefit test for services?", a: "Whether an independent party would have paid for the service. Duplicate and shareholder services fail it." },
      { n: 176, id: "does-spain-also-require-documentation", q: "Does Spain also require documentation?", a: "Yes. Larger groups prepare a master file, a local file and country-by-country reporting." },
      { n: 177, id: "can-i-agree-the-method-in-advance", q: "Can I agree the method in advance?", a: "Yes, through an advance pricing agreement, which takes time and cost but fixes the method for several years." },
      { n: 178, id: "what-if-spain-and-india-disagree", q: "What if Spain and India disagree?", a: "The treaty's mutual agreement procedure lets the competent authorities try to resolve double taxation from an adjustment." },
      { n: 179, id: "what-is-a-safe-harbour", q: "What is a safe harbour?", a: "A rule that accepts a stated margin for certain transactions. It gives certainty at the cost of flexibility." },
    ],
  },
]

const allFaqs = faqGroups.flatMap((group) => group.items)

export default function SpainToIndiaFaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }

  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="179 Questions About Setting Up and Running a Subsidiary in India"
        description="179 plain answers for Spanish companies: FDI route, incorporation, FEMA, the India-Spain tax treaty, Spanish declarations, documents, staff, data protection, compliance, repatriation and exit."
        datePublished="2026-11-02"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-ES"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Spain", href: "/spain-to-india" },
          { label: "179 FAQs" },
        ]}
      />

      <GuideHero
        eyebrow="FAQ for Spanish companies"
        title="179 Questions About Setting Up and Running a Subsidiary in India"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <p className="mb-8">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <GuideAnswerBox title="How to use this page">
          The questions are grouped by topic, starting with the decisions before you commit and then following
          each guide in the series. Answers are short; the{" "}
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">complete guide</Link>{" "}
          and the linked pages go deeper.
        </GuideAnswerBox>

        <p className="text-gray-600 leading-relaxed mb-8">
          Indian tax law changed on 1 April 2026: the Income-tax Act, 2025 and the Income-tax Rules, 2026
          replace the 1961 Act. Where a form has a new name, we give the new name with the earlier one in
          brackets. General information only; confirm current requirements before acting.
        </p>

        <GuideTOC items={toc} />

        {faqGroups.map((group, groupIndex) => (
          <section key={`${group.id}-${groupIndex}`}>
            <h2 id={group.id} className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              {group.label}
            </h2>
            <div className="divide-y divide-gray-200">
              {group.items.map((item) => (
                <div key={item.id} id={item.id} className="py-4">
                  <h3 className="font-bold text-gray-900 mb-1.5">
                    <span className="text-blue-800 font-semibold mr-1.5">{item.n}.</span>
                    {item.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
            {group.readMore && (
              <p className="mt-3">
                <Link href={group.readMore.href} className="text-sm font-bold text-blue-800 hover:underline">
                  {group.readMore.label} &rarr;
                </Link>
              </p>
            )}
          </section>
        ))}

        <GuideServiceBox path="/spain-to-india/faq" />
        <GuideCTA
          title="Have a question that is not here?"
          description="Tell us about your plan and we will answer it on a call."
        />

        <p className="mb-10">
          <Link href="/spain-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Spain
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and Spanish
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="A Question the FAQ Doesn't Answer?"
        description="Tell us what is specific to your Spanish parent, and we'll answer it directly on a call."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  )
}
