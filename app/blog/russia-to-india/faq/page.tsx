import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideServiceBox } from "@/components/guide/GuideServiceBox"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/faq"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "general", label: "Before you start: structure, cost and approvals" },
  { id: "common-mistakes", label: "Common Mistakes Russian Companies Make When Entering India" },
  { id: "compliance-calendar", label: "Compliance Calendar for an Indian Subsidiary of a Russian Company" },
  { id: "contracts-courts-arbitration", label: "Contracts, Courts and Arbitration between India and Russia: Seats, Awards and Judgments" },
  { id: "data-protection-152fz-dpdp", label: "Data Protection: Russia's Federal Law 152-FZ and India's DPDP Act for Cross-Border Groups" },
  { id: "documents-apostille-and-translation", label: "Russian Documents for India: Apostille, Notarised Translation and Checklist" },
  { id: "exit-and-restructuring", label: "Exit and Restructuring in India for a Russian Parent: Share Sale, Buy-Back, Liquidation and Strike-Off" },
  { id: "funding-and-fema", label: "Funding an Indian Subsidiary from Russia: FEMA, FC-GPR, Pricing Rules and Payment Routes" },
  { id: "goods-trade-customs-and-eaeu-fta", label: "Goods, Trade and Procurement for Russian Companies in India: Customs, EAEU Talks and Sensitive Sectors" },
  { id: "hiring-in-india", label: "Hiring in India for a Russian-Owned Company: Contracts, Payroll and Labour Codes" },
  { id: "incorporation-steps", label: "Incorporating an Indian Subsidiary from Russia: Step-by-Step with Timeline" },
  { id: "india-fdi-rules-for-russian-companies", label: "India FDI Rules for Russian Companies: Automatic Route, Sector Caps and Why Press Note 3 Does Not Apply" },
  { id: "india-russia-dtaa", label: "India-Russia DTAA: Article-by-Article Guide with Tax Rates, PE and Share Gains" },
  { id: "relocate-russian-staff", label: "Relocating Russian Staff to India: Visas, Registration and Family" },
  { id: "repatriating-profits", label: "Repatriating Profits from India to Russia: Dividends, Fees, Royalties and Loans" },
  { id: "russian-employees-in-india", label: "Russian Employees in India: Income Tax, Provident Fund and Russian Social Contributions" },
  { id: "russian-parent-obligations", label: "Russian Parent Obligations: Bank of Russia Approval, Currency Control and Tax Reporting" },
  { id: "sanctions-and-payments-for-russian-companies", label: "Sanctions and Payments for Russian Companies in India: Banking, Screening and Settlement Channels" },
  { id: "structure-options", label: "Structure Options in India for a Russian Company: Subsidiary, LLP, Branch, Liaison, Project Office or JV" },
  { id: "transfer-pricing", label: "Transfer Pricing for Russian Groups in India: Services, Supply Chains and Documentation" },
]

type FaqItem = { n: number; id: string; q: string; a: string }
type FaqGroup = { id: string; label: string; readMore?: { href: string; label: string }; items: FaqItem[] }

const faqGroups: FaqGroup[] = [
  {
    id: "general",
    label: "Before you start: structure, cost and approvals",
    items: [
      { n: 1, id: "can-a-russian-company-own-100-of-an-indian-subsidiary", q: "Can a Russian company own 100% of an Indian subsidiary?", a: "Yes, in sectors that allow 100% foreign investment under the Automatic Route. Russia does not share a land border with India, so Press Note 3 does not apply by nationality. Sector caps still apply, for example defence above 74% needs approval." },
      { n: 2, id: "does-a-russian-company-need-government-approval-to-invest-in", q: "Does a Russian company need government approval to invest in India?", a: "Not by reason of being Russian. Approval applies only in sectors or above caps that need it for any foreign investor, or if a beneficial owner is from a land-border country. The practical hurdles are banking, sanctions and Russian outbound controls." },
      { n: 3, id: "does-a-russian-company-need-to-send-anyone-to-india-to-set-u", q: "Does a Russian company need to send anyone to India to set up a subsidiary?", a: "No. Filing is online. Directors need Digital Signature Certificates, and Russian documents are notarised, apostilled and translated into English. At least one director must be resident in India." },
      { n: 4, id: "how-long-does-it-take-to-set-up-an-indian-subsidiary-from-ru", q: "How long does it take to set up an Indian subsidiary from Russia?", a: "Incorporation takes two to three weeks from complete documents. Bank onboarding for a Russian-owned company can take weeks longer, so start the banking conversation early." },
      { n: 5, id: "what-does-it-cost-to-set-up-a-subsidiary-in-india", q: "What does it cost to set up a subsidiary in India?", a: "AU Corporate's fee for setting up the subsidiary is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about RUB 845,000 at an indicative ₹1.18 per rouble, 27 October 2026 rate). The costing depends on your plan, and it does not include sanctions, banking or approval work, which depends on the sector, structure and parties." },
      { n: 6, id: "is-there-a-minimum-share-capital-for-an-indian-private-limit", q: "Is there a minimum share capital for an Indian private limited company?", a: "No statutory minimum. The practical amount depends on your first 12 to 18 months of costs and on any sector rule." },
      { n: 7, id: "what-is-the-automatic-route", q: "What is the Automatic Route?", a: "The route under the FDI Policy that lets a foreign investor invest in a permitted sector without government approval, subject to reporting to the RBI. It is generally available to Russian investors." },
      { n: 8, id: "which-sectors-restrict-foreign-investment-in-india", q: "Which sectors restrict foreign investment in India?", a: "Some sectors have caps or need approval for all foreign investors, such as defence above 74%, multi-brand retail and certain media and financial activities. Some are prohibited." },
      { n: 9, id: "what-is-a-resident-director", q: "What is a Resident Director?", a: "A director who has stayed in India for 182 days or more in the financial year. Every Indian company needs at least one." },
      { n: 10, id: "can-a-russian-citizen-be-a-director-of-an-indian-company", q: "Can a Russian citizen be a director of an Indian company?", a: "Yes, once they hold a Director Identification Number and a Digital Signature Certificate. Russia is not a land-border country, so no security clearance is required by nationality." },
      { n: 11, id: "what-is-spice", q: "What is SPICe+?", a: "The integrated online incorporation form of the Ministry of Corporate Affairs, which can also apply for PAN, TAN and other registrations together." },
      { n: 12, id: "what-accounting-standards-does-an-indian-subsidiary-follow", q: "What accounting standards does an Indian subsidiary follow?", a: "The Companies Act, 2013 and, above the thresholds, Indian Accounting Standards (Ind AS), which are converged with IFRS. A Russian parent reporting under Russian or international standards will need a bridge for consolidation." },
      { n: 13, id: "does-an-indian-subsidiary-need-an-audit", q: "Does an Indian subsidiary need an audit?", a: "Yes. Every company must have its accounts audited by a Chartered Accountant firm each year, whatever its size, and appoint the auditor within 30 days of incorporation." },
      { n: 14, id: "what-corporate-tax-rate-does-an-indian-subsidiary-pay", q: "What corporate tax rate does an Indian subsidiary pay?", a: "Under the concessional regime without incentives, a domestic company pays 22% plus surcharge and cess, about 25.17%. Other regimes and rates apply to specific cases." },
      { n: 15, id: "must-the-indian-subsidiary-register-for-gst", q: "Must the Indian subsidiary register for GST?", a: "Registration is required above turnover thresholds and in some other cases, such as interstate supplies and reverse-charge liabilities. Services exported to the Russian parent can be zero-rated where the conditions are met." },
      { n: 16, id: "can-the-indian-subsidiary-send-profits-to-russia-freely", q: "Can the Indian subsidiary send profits to Russia freely?", a: "Yes in law, through dividends, fees, royalties and loan repayments, with the tax and RBI formalities for each route. In practice the receiving bank and payment route must be acceptable to the Indian bank. See the guide on getting money out of India." },
      { n: 17, id: "is-there-a-tax-treaty-between-india-and-russia", q: "Is there a tax treaty between India and Russia?", a: "Yes, signed on 25 March 1997 and in force from 11 April 1998. It caps Indian tax at 10% on dividends, interest, royalties and fees for technical services. The MLI principal purpose test also applies. Confirm the current text." },
      { n: 18, id: "is-there-a-social-security-agreement-between-india-and-russi", q: "Is there a social security agreement between India and Russia?", a: "We found none. A Russian employee in India generally falls under the Indian provident fund rules for international workers, so budget for EPF." },
      { n: 19, id: "is-there-an-india-russia-free-trade-agreement-or-investment-", q: "Is there an India-Russia free trade agreement or investment treaty?", a: "No free trade agreement is in force, though India and the Eurasian Economic Union are negotiating one. A 1994 investment treaty is listed, but its current status must be checked." },
      { n: 20, id: "do-russian-documents-need-an-apostille-for-india", q: "Do Russian documents need an apostille for India?", a: "Both countries are parties to the Apostille Convention, so an apostille from the competent Russian authority is the normal route. Russian-language documents need a certified English translation." },
      { n: 21, id: "can-the-indian-subsidiary-employ-russian-nationals", q: "Can the Indian subsidiary employ Russian nationals?", a: "Yes, with an employment visa (salary floor USD 25,000 a year, with exceptions) and FRRO registration for stays over 180 days. A business visa is not for hands-on work." },
      { n: 22, id: "does-the-russian-parent-need-approval-in-russia", q: "Does the Russian parent need approval in Russia?", a: "Russian residents face restrictions on paying for shares abroad. As reported, from 1 July 2026 transactions up to RUB 30 million in aggregate per counterparty need no individual Bank of Russia approval, and larger ones do. Confirm with Russian counsel." },
      { n: 23, id: "who-files-the-rbi-forms-for-the-investment", q: "Who files the RBI forms for the investment?", a: "The Indian subsidiary files Form FC-GPR with its authorised dealer bank and advisers, using the documents the Russian parent provides. The annual FLA return is filed by 15 July." },
      { n: 24, id: "are-sanctions-a-problem-for-investing-in-india-from-russia", q: "Are sanctions a problem for investing in India from Russia?", a: "Indian law does not apply US, EU or UK sanctions, but Indian banks and counterparties screen against them. Banking access is the main practical risk." },
      { n: 25, id: "can-i-close-the-indian-subsidiary-later", q: "Can I close the Indian subsidiary later?", a: "Yes, by strike-off for a dormant company or voluntary liquidation for one with assets, after clearing tax, employee and RBI matters." },
    ],
  },
  {
    id: "common-mistakes",
    label: "Common Mistakes Russian Companies Make When Entering India",
    readMore: { href: "/russia-to-india/common-mistakes", label: "Read the full guide: Common Mistakes Russian Companies Make When Entering India" },
    items: [
      { n: 26, id: "what-is-the-biggest-mistake-russian-companies-make-in-india", q: "What is the biggest mistake Russian companies make in India?", a: "Treating the Indian FDI rules as the only gate. Banking access and sanctions exposure decide whether the investment works in practice." },
      { n: 27, id: "does-press-note-3-apply-to-russian-investors", q: "Does Press Note 3 apply to Russian investors?", a: "Not by nationality, because Russia does not share a land border with India, but a land-border beneficial owner can bring it into play." },
      { n: 28, id: "what-happens-if-fc-gpr-is-late", q: "What happens if FC-GPR is late?", a: "The company must regularise by compounding and may pay a penalty." },
      { n: 29, id: "can-i-claim-the-10-dividend-rate-without-paperwork", q: "Can I claim the 10% dividend rate without paperwork?", a: "No. The payer needs Form 41, the residency certificate and a beneficial ownership declaration." },
      { n: 30, id: "does-a-secondee-pay-both-epf-and-russian-contributions", q: "Does a secondee pay both EPF and Russian contributions?", a: "Possibly, because there is no social security agreement. Budget for both and take advice." },
      { n: 31, id: "why-do-contracts-need-stamping", q: "Why do contracts need stamping?", a: "Unstamped documents are not admissible in evidence in India until stamped and penalty paid." },
      { n: 32, id: "how-do-i-stay-on-top-of-deadlines-and-screening", q: "How do I stay on top of deadlines and screening?", a: "Use a compliance calendar with owners, and review it each quarter." },
    ],
  },
  {
    id: "compliance-calendar",
    label: "Compliance Calendar for an Indian Subsidiary of a Russian Company",
    readMore: { href: "/russia-to-india/compliance-calendar", label: "Read the full guide: Compliance Calendar for an Indian Subsidiary of a Russian Company" },
    items: [
      { n: 33, id: "when-is-the-agm-of-an-indian-subsidiary-due", q: "When is the AGM of an Indian subsidiary due?", a: "Within six months of the 31 March year end, which is by 30 September in most cases." },
      { n: 34, id: "what-is-due-after-the-agm", q: "What is due after the AGM?", a: "AOC-4 (financial statements) within 30 days and MGT-7 (annual return) within 60 days of the AGM." },
      { n: 35, id: "when-is-the-fla-return-due", q: "When is the FLA return due?", a: "By 15 July each year." },
      { n: 36, id: "when-must-tds-be-deposited", q: "When must TDS be deposited?", a: "By the 7th of the month following the deduction, with returns filed quarterly." },
      { n: 37, id: "what-are-the-advance-tax-dates", q: "What are the advance tax dates?", a: "15 June, 15 September, 15 December and 15 March." },
      { n: 38, id: "what-is-the-filing-deadline-for-fc-gpr", q: "What is the filing deadline for FC-GPR?", a: "Within 30 days of allotting shares to the foreign investor." },
      { n: 39, id: "how-often-should-sanctions-screening-be-repeated", q: "How often should sanctions screening be repeated?", a: "At least quarterly and whenever a list or the ownership changes. Keep the results on file for the bank and auditor." },
    ],
  },
  {
    id: "contracts-courts-arbitration",
    label: "Contracts, Courts and Arbitration between India and Russia: Seats, Awards and Judgments",
    readMore: { href: "/russia-to-india/contracts-courts-arbitration", label: "Read the full guide: Contracts, Courts and Arbitration between India and Russia: Seats, Awards and Judgments" },
    items: [
      { n: 40, id: "can-a-russian-arbitral-award-be-enforced-in-india", q: "Can a Russian arbitral award be enforced in India?", a: "A foreign award from a convention seat can be enforced under Part II of the Arbitration and Conciliation Act, 1996 if the seat country is notified. Check the notification for your seat." },
      { n: 41, id: "can-an-indian-award-be-enforced-in-russia", q: "Can an Indian award be enforced in Russia?", a: "Russia is a party to the New York Convention and recognises awards subject to limited grounds, including public policy. Confirm with Russian counsel." },
      { n: 42, id: "can-i-enforce-a-russian-court-judgment-in-india", q: "Can I enforce a Russian court judgment in India?", a: "As far as we know Russia is not a reciprocating territory under Section 44A, so a fresh suit in India is needed." },
      { n: 43, id: "do-russian-courts-take-jurisdiction-over-sanctions-disputes", q: "Do Russian courts take jurisdiction over sanctions disputes?", a: "Russian rules give Russian courts jurisdiction over many sanctions-related disputes and can restrain foreign proceedings. Take advice on clause design." },
      { n: 44, id: "which-arbitration-seat-is-best", q: "Which arbitration seat is best?", a: "Choose a convention seat and an institution acceptable to both sides and able to operate with the parties' banks. Indian and neutral institutions are common." },
      { n: 45, id: "does-stamp-duty-matter", q: "Does stamp duty matter?", a: "Yes. Unstamped or under-stamped agreements are not admissible in evidence in India until the duty and penalty are paid." },
      { n: 46, id: "is-there-an-investment-treaty-between-india-and-russia", q: "Is there an investment treaty between India and Russia?", a: "A 1994 treaty is listed, but its current status needs checking, and a new agreement has been discussed." },
    ],
  },
  {
    id: "data-protection-152fz-dpdp",
    label: "Data Protection: Russia's Federal Law 152-FZ and India's DPDP Act for Cross-Border Groups",
    readMore: { href: "/russia-to-india/data-protection-152fz-dpdp", label: "Read the full guide: Data Protection: Russia's Federal Law 152-FZ and India's DPDP Act for Cross-Border Groups" },
    items: [
      { n: 47, id: "does-russian-data-localisation-affect-an-indian-subsidiary", q: "Does Russian data localisation affect an Indian subsidiary?", a: "It can, if the group handles personal data of Russian citizens. The initial collection and storage must be in Russia, so India should receive copies only as the law permits. Confirm with Russian counsel." },
      { n: 48, id: "must-i-notify-the-russian-regulator-before-sending-data-to-i", q: "Must I notify the Russian regulator before sending data to India?", a: "Russian rules require notification of the regulator before cross-border transfers and an assessment of the recipient country's protection. Confirm the current procedure." },
      { n: 49, id: "when-do-the-indian-data-protection-duties-start", q: "When do the Indian data protection duties start?", a: "The Rules were notified on 13 November 2025 and the main duties apply from 13 May 2027." },
      { n: 50, id: "can-i-send-indian-personal-data-to-russia", q: "Can I send Indian personal data to Russia?", a: "Generally yes, because the Act restricts transfers only to countries the government notifies. Sector rules can be stricter." },
      { n: 51, id: "what-is-the-maximum-penalty-in-india", q: "What is the maximum penalty in India?", a: "Up to INR 250 crore for failing to take reasonable security safeguards to prevent a personal data breach." },
      { n: 52, id: "do-i-need-a-data-processing-agreement", q: "Do I need a data processing agreement?", a: "Yes. A written contract with the processor covers purpose, security, breach and return or deletion of data." },
      { n: 53, id: "who-regulates-data-protection", q: "Who regulates data protection?", a: "Roskomnadzor in Russia and the Data Protection Board of India." },
    ],
  },
  {
    id: "documents-apostille-and-translation",
    label: "Russian Documents for India: Apostille, Notarised Translation and Checklist",
    readMore: { href: "/russia-to-india/documents-apostille-and-translation", label: "Read the full guide: Russian Documents for India: Apostille, Notarised Translation and Checklist" },
    items: [
      { n: 54, id: "does-india-accept-a-russian-apostille", q: "Does India accept a Russian apostille?", a: "Both countries are parties to the Apostille Convention, so an apostille from the competent Russian authority is the normal route and consular legalisation is not usually required." },
      { n: 55, id: "who-issues-apostilles-in-russia", q: "Who issues apostilles in Russia?", a: "It depends on the document. Notarised documents, registry extracts and certificates each have a competent authority; your Russian notary can tell you which." },
      { n: 56, id: "do-i-need-a-translation", q: "Do I need a translation?", a: "Yes for documents in Russian. Use a certified English translation, normally notarised, and make sure the apostille covers it." },
      { n: 57, id: "do-i-need-a-notary", q: "Do I need a notary?", a: "Usually for copies of private documents, signatures on decisions and powers of attorney, before the apostille." },
      { n: 58, id: "how-recent-must-the-documents-be", q: "How recent must the documents be?", a: "Banks and the Registrar commonly want registry extracts and similar documents within three to six months. Ask each recipient." },
      { n: 59, id: "do-directors-need-indian-credentials", q: "Do directors need Indian credentials?", a: "Yes. Each proposed director needs a Director Identification Number and a Digital Signature Certificate." },
      { n: 60, id: "why-do-names-matter-so-much", q: "Why do names matter so much?", a: "Indian systems and banks reject near matches, so the transliteration of names must be identical in every document." },
    ],
  },
  {
    id: "exit-and-restructuring",
    label: "Exit and Restructuring in India for a Russian Parent: Share Sale, Buy-Back, Liquidation and Strike-Off",
    readMore: { href: "/russia-to-india/exit-and-restructuring", label: "Read the full guide: Exit and Restructuring in India for a Russian Parent: Share Sale, Buy-Back, Liquidation and Strike-Off" },
    items: [
      { n: 61, id: "how-is-a-share-sale-by-a-russian-parent-taxed-in-india", q: "How is a share sale by a Russian parent taxed in India?", a: "The gain is taxed in India. For unlisted shares held more than 24 months the long-term rate is 12.5%; a shorter holding is taxed at the normal rate." },
      { n: 62, id: "what-is-the-fema-pricing-rule-on-exit", q: "What is the FEMA pricing rule on exit?", a: "A purchase from a non-resident cannot be above fair value, and a sale to another non-resident cannot be below it." },
      { n: 63, id: "which-form-reports-the-transfer", q: "Which form reports the transfer?", a: "Form FC-TRS within 60 days of the transfer." },
      { n: 64, id: "can-i-do-a-buy-back", q: "Can I do a buy-back?", a: "Yes, within Companies Act limits. The tax treatment has changed in recent budgets, so confirm the current rule." },
      { n: 65, id: "how-long-does-voluntary-liquidation-take", q: "How long does voluntary liquidation take?", a: "Usually several months, depending on tax clearances and the creditor process." },
      { n: 66, id: "can-i-strike-off-an-operating-company", q: "Can I strike off an operating company?", a: "Strike-off is for dormant companies without liabilities and is not a substitute for a proper liquidation." },
      { n: 67, id: "can-the-sale-proceeds-be-sent-to-russia", q: "Can the sale proceeds be sent to Russia?", a: "Through the authorised dealer bank with the tax forms, if the receiving bank route is acceptable. Plan the route before signing." },
    ],
  },
  {
    id: "funding-and-fema",
    label: "Funding an Indian Subsidiary from Russia: FEMA, FC-GPR, Pricing Rules and Payment Routes",
    readMore: { href: "/russia-to-india/funding-and-fema", label: "Read the full guide: Funding an Indian Subsidiary from Russia: FEMA, FC-GPR, Pricing Rules and Payment Routes" },
    items: [
      { n: 68, id: "how-can-a-russian-company-fund-its-indian-subsidiary", q: "How can a Russian company fund its Indian subsidiary?", a: "By equity, compulsorily convertible preference shares or a compliant external commercial borrowing, always through a bank." },
      { n: 69, id: "how-soon-must-shares-be-allotted", q: "How soon must shares be allotted?", a: "Within 60 days of receiving the money." },
      { n: 70, id: "when-is-fc-gpr-due", q: "When is FC-GPR due?", a: "Within 30 days of allotment of shares." },
      { n: 71, id: "what-is-the-fla-return", q: "What is the FLA return?", a: "An annual return on foreign liabilities and assets filed by 15 July with the RBI." },
      { n: 72, id: "is-there-a-pricing-rule", q: "Is there a pricing rule?", a: "Yes. An issue or sale of shares to a non-resident cannot be below fair value, and a purchase from a non-resident cannot be above it." },
      { n: 73, id: "can-money-come-from-any-russian-bank", q: "Can money come from any Russian bank?", a: "It should come from the parent's own account through a bank the Indian bank accepts. Sanctions and correspondent banking constraints can limit the choice." },
      { n: 74, id: "can-a-russian-group-company-lend-to-the-indian-subsidiary", q: "Can a Russian group company lend to the Indian subsidiary?", a: "Yes if it meets the external commercial borrowing conditions, passes sanctions screening and the loan is priced at arm's length with Withholding Tax on interest." },
      { n: 75, id: "can-money-come-from-a-third-party", q: "Can money come from a third party?", a: "No. It should come from the Russian parent's own account to avoid KYC and reporting problems." },
    ],
  },
  {
    id: "goods-trade-customs-and-eaeu-fta",
    label: "Goods, Trade and Procurement for Russian Companies in India: Customs, EAEU Talks and Sensitive Sectors",
    readMore: { href: "/russia-to-india/goods-trade-customs-and-eaeu-fta", label: "Read the full guide: Goods, Trade and Procurement for Russian Companies in India: Customs, EAEU Talks and Sensitive Sectors" },
    items: [
      { n: 76, id: "is-there-a-free-trade-agreement-between-india-and-russia", q: "Is there a free trade agreement between India and Russia?", a: "No agreement is in force. India and the Eurasian Economic Union have begun free trade negotiations, with reports of advanced-stage talks." },
      { n: 77, id: "do-russian-goods-get-lower-customs-duty-in-india", q: "Do Russian goods get lower customs duty in India?", a: "Not at present. Normal customs duties and IGST apply unless and until an agreement is notified." },
      { n: 78, id: "how-does-customs-treat-related-party-sales", q: "How does customs treat related-party sales?", a: "Customs may test whether the relationship influenced the price. Keep the transfer pricing and customs files consistent." },
      { n: 79, id: "can-a-russian-company-bid-in-indian-public-procurement", q: "Can a Russian company bid in Indian public procurement?", a: "The land-border bidder restrictions do not apply by nationality, but a land-border beneficial owner can change that. Check tender terms." },
      { n: 80, id: "do-sanctions-limit-supply-to-or-from-an-indian-subsidiary", q: "Do sanctions limit supply to or from an Indian subsidiary?", a: "They can, through dual-use, technology, finance, insurance and shipping restrictions. Screen goods, counterparties and routes." },
      { n: 81, id: "what-is-the-india-eaeu-trade-target", q: "What is the India-EAEU trade target?", a: "Reports describe a bilateral trade target of USD 100 billion by 2030." },
      { n: 82, id: "what-is-the-penalty-for-false-origin-or-value", q: "What is the penalty for false origin or value?", a: "Penalties, seizure of goods, possible prosecution and loss of import privileges." },
    ],
  },
  {
    id: "hiring-in-india",
    label: "Hiring in India for a Russian-Owned Company: Contracts, Payroll and Labour Codes",
    readMore: { href: "/russia-to-india/hiring-in-india", label: "Read the full guide: Hiring in India for a Russian-Owned Company: Contracts, Payroll and Labour Codes" },
    items: [
      { n: 83, id: "do-i-need-an-employment-contract-in-india", q: "Do I need an employment contract in India?", a: "Yes, a written appointment letter is standard and needed for clarity on pay, notice and confidentiality." },
      { n: 84, id: "is-provident-fund-mandatory", q: "Is provident fund mandatory?", a: "For covered establishments, yes. Check the thresholds and apply for registration early." },
      { n: 85, id: "who-deducts-income-tax-on-salary", q: "Who deducts income tax on salary?", a: "The employer, under Section 392 of the Income-tax Act, 2025, depositing by the 7th of the following month." },
      { n: 86, id: "can-i-include-a-non-compete-clause", q: "Can I include a non-compete clause?", a: "A post-employment non-compete is generally not enforceable in India, so use confidentiality and carefully drafted non-solicitation terms." },
      { n: 87, id: "have-the-labour-codes-taken-effect", q: "Have the labour codes taken effect?", a: "They were reported to be in force from 21 November 2025. Confirm the rules and state notifications that apply to you." },
      { n: 88, id: "do-i-need-a-sexual-harassment-committee", q: "Do I need a sexual harassment committee?", a: "Employers with 10 or more employees must form an Internal Committee under the POSH Act." },
      { n: 89, id: "how-does-this-differ-from-russia", q: "How does this differ from Russia?", a: "Termination, leave, provident fund and wage-payment rules differ. Use Indian counsel for the handbook and contracts." },
    ],
  },
  {
    id: "incorporation-steps",
    label: "Incorporating an Indian Subsidiary from Russia: Step-by-Step with Timeline",
    readMore: { href: "/russia-to-india/incorporation-steps", label: "Read the full guide: Incorporating an Indian Subsidiary from Russia: Step-by-Step with Timeline" },
    items: [
      { n: 90, id: "how-long-does-it-take-to-set-up-an-indian-company-from-russi", q: "How long does it take to set up an Indian company from Russia?", a: "Incorporation takes about two to three weeks from complete documents, but bank onboarding for a Russian-owned company can take longer." },
      { n: 91, id: "does-a-russian-company-need-government-approval-in-india", q: "Does a Russian company need government approval in India?", a: "Not under Press Note 3 as such, because Russia does not share a land border with India. Approval applies only in sectors or above caps that need it for any foreign investor." },
      { n: 92, id: "what-form-is-used-to-incorporate", q: "What form is used to incorporate?", a: "SPICe+ with AGILE-PRO-S, which also gives PAN, TAN, GST, EPFO and ESIC registrations where applicable." },
      { n: 93, id: "do-i-need-a-resident-director", q: "Do I need a resident director?", a: "Yes. At least one director must have stayed in India for 182 days or more in the previous financial year." },
      { n: 94, id: "when-must-shares-be-allotted-after-the-money-arrives", q: "When must shares be allotted after the money arrives?", a: "Within 60 days of receipt. Form FC-GPR is due within 30 days of allotment." },
      { n: 95, id: "when-is-the-declaration-of-commencement-due", q: "When is the declaration of commencement due?", a: "Form INC-20A within 180 days of incorporation." },
      { n: 96, id: "can-a-branch-be-used-instead-of-a-subsidiary", q: "Can a branch be used instead of a subsidiary?", a: "Only with a large track record and Reserve Bank approval. See the structure options." },
      { n: 97, id: "will-the-bank-open-an-account-for-a-russian-owned-company", q: "Will the bank open an account for a Russian-owned company?", a: "Often, after enhanced due diligence. Prepare ownership, source of funds and a business plan." },
    ],
  },
  {
    id: "india-fdi-rules-for-russian-companies",
    label: "India FDI Rules for Russian Companies: Automatic Route, Sector Caps and Why Press Note 3 Does Not Apply",
    readMore: { href: "/russia-to-india/india-fdi-rules-for-russian-companies", label: "Read the full guide: India FDI Rules for Russian Companies: Automatic Route, Sector Caps and Why Press Note 3 Does Not Apply" },
    items: [
      { n: 98, id: "does-press-note-3-apply-to-russian-companies", q: "Does Press Note 3 apply to Russian companies?", a: "Not by reason of Russian nationality, because Russia does not share a land border with India. It can apply if a beneficial owner is from a land-border country." },
      { n: 99, id: "which-sectors-need-approval-for-russian-investors", q: "Which sectors need approval for Russian investors?", a: "The same as for other foreign investors: sectors or caps requiring approval, such as defence above 74%." },
      { n: 100, id: "is-investment-from-russia-restricted-by-india", q: "Is investment from Russia restricted by India?", a: "Indian FDI rules do not single out Russia. Practical limits come from sanctions exposure, banking and Russian outbound controls." },
      { n: 101, id: "is-a-russian-investor-treated-like-any-other-foreign-investo", q: "Is a Russian investor treated like any other foreign investor?", a: "Under the FDI Policy, yes. Indian banks and counterparties may apply extra due diligence." },
      { n: 102, id: "what-documents-prove-beneficial-ownership", q: "What documents prove beneficial ownership?", a: "An ownership chart to natural persons, passports, shareholder registers and extracts from the Russian company register, authenticated for India." },
      { n: 103, id: "do-i-need-approval-to-invest-in-a-defence-joint-venture", q: "Do I need approval to invest in a defence joint venture?", a: "Above 74% yes, and licences and security clearance apply at any level." },
    ],
  },
  {
    id: "india-russia-dtaa",
    label: "India-Russia DTAA: Article-by-Article Guide with Tax Rates, PE and Share Gains",
    readMore: { href: "/russia-to-india/india-russia-dtaa", label: "Read the full guide: India-Russia DTAA: Article-by-Article Guide with Tax Rates, PE and Share Gains" },
    items: [
      { n: 104, id: "what-is-the-indian-withholding-tax-on-dividends-paid-to-a-ru", q: "What is the Indian withholding tax on dividends paid to a Russian parent?", a: "10% of the gross amount under the treaty if the beneficial owner is taxable in Russia and the paperwork is in place. The domestic rate is about 20% plus surcharge and cess." },
      { n: 105, id: "what-are-the-treaty-rates-on-interest-royalties-and-technica", q: "What are the treaty rates on interest, royalties and technical fees?", a: "10% each, with 0% interest for governments, local authorities and the Central Bank." },
      { n: 106, id: "when-does-a-russian-company-have-a-permanent-establishment-i", q: "When does a Russian company have a permanent establishment in India?", a: "Through a fixed place, a building or installation project over 12 months, or a dependent agent. The treaty has no separate day-count services PE clause." },
      { n: 107, id: "are-gains-on-indian-shares-taxable-in-india-for-a-russian-se", q: "Are gains on Indian shares taxable in India for a Russian seller?", a: "Yes. Article 13 allows India to tax gains on shares of an Indian company." },
      { n: 108, id: "does-the-mli-affect-the-treaty", q: "Does the MLI affect the treaty?", a: "Yes. Both countries are covered parties, and the principal purpose test applies to Indian withholding from 1 April 2021." },
      { n: 109, id: "what-documents-prove-treaty-eligibility", q: "What documents prove treaty eligibility?", a: "A tax residency certificate from the Russian Federal Tax Service, Form 41 and a declaration of beneficial ownership and no PE." },
      { n: 110, id: "does-the-treaty-remove-sanctions-risk", q: "Does the treaty remove sanctions risk?", a: "No. It deals only with tax. Sanctions and banking questions are separate." },
    ],
  },
  {
    id: "relocate-russian-staff",
    label: "Relocating Russian Staff to India: Visas, Registration and Family",
    readMore: { href: "/russia-to-india/relocate-russian-staff", label: "Read the full guide: Relocating Russian Staff to India: Visas, Registration and Family" },
    items: [
      { n: 111, id: "what-visa-does-a-russian-employee-need-to-work-in-an-indian-", q: "What visa does a Russian employee need to work in an Indian subsidiary?", a: "An employment visa, with a minimum salary of USD 25,000 a year and an appointment letter from the Indian company. A business visa or e-visa does not allow productive work." },
      { n: 112, id: "do-russian-staff-need-to-register-in-india", q: "Do Russian staff need to register in India?", a: "A foreign national staying more than 180 days must register with the FRRO within 14 days of arrival." },
      { n: 113, id: "can-i-use-a-business-visa-to-run-the-indian-subsidiary", q: "Can I use a business visa to run the Indian subsidiary?", a: "No. A business visa covers meetings and negotiations, not employment or management work." },
      { n: 114, id: "do-dependants-get-a-visa", q: "Do dependants get a visa?", a: "Yes. Dependant visas follow the employment visa with proof of relationship." },
      { n: 115, id: "do-russian-nationals-need-security-clearance", q: "Do Russian nationals need security clearance?", a: "Not by reason of nationality, because Russia does not share a land border with India. Other visa checks still apply." },
      { n: 116, id: "how-do-relocated-staff-send-money-home", q: "How do relocated staff send money home?", a: "Through banks and routes acceptable on both sides. Plan this before the move." },
      { n: 117, id: "do-i-need-tax-clearance-on-exit", q: "Do I need tax clearance on exit?", a: "Not in every case, but long stays and large equity payouts should be planned with a tax adviser." },
    ],
  },
  {
    id: "repatriating-profits",
    label: "Repatriating Profits from India to Russia: Dividends, Fees, Royalties and Loans",
    readMore: { href: "/russia-to-india/repatriating-profits", label: "Read the full guide: Repatriating Profits from India to Russia: Dividends, Fees, Royalties and Loans" },
    items: [
      { n: 118, id: "what-is-the-withholding-tax-on-dividends-paid-from-india-to-", q: "What is the withholding tax on dividends paid from India to a Russian parent?", a: "10% of the gross amount under the treaty if the Russian company is the beneficial owner and the paperwork is in place. The domestic rate is about 20% plus surcharge and cess." },
      { n: 119, id: "which-forms-do-i-need-to-send-money-to-russia", q: "Which forms do I need to send money to Russia?", a: "Form 145 for the remittance, and Form 146 where a chartered accountant's certificate is needed, along with Form 41 and the tax residency certificate for treaty rates." },
      { n: 120, id: "can-i-pay-a-management-fee-to-russia", q: "Can I pay a management fee to Russia?", a: "Yes if it is for real services at an arm's length price, with Withholding Tax at 10% as fees for technical services under the treaty and GST on reverse charge." },
      { n: 121, id: "can-the-subsidiary-pay-dividends-from-capital", q: "Can the subsidiary pay dividends from capital?", a: "No. Dividends must come from distributable profits as the Companies Act requires." },
      { n: 122, id: "can-i-repay-a-loan-to-russia", q: "Can I repay a loan to Russia?", a: "Yes, following the registered ECB schedule through the bank. Principal is not taxed, but interest is subject to Withholding Tax." },
      { n: 123, id: "can-any-bank-receive-the-money-in-russia", q: "Can any bank receive the money in Russia?", a: "The Indian bank must be willing to send to the receiving bank and currency. Sanctions screening can restrict the options." },
      { n: 124, id: "what-if-the-russian-company-is-only-a-conduit", q: "What if the Russian company is only a conduit?", a: "The MLI principal purpose test and the general anti-avoidance rule can deny treaty relief. Keep commercial substance in Russia." },
    ],
  },
  {
    id: "russian-employees-in-india",
    label: "Russian Employees in India: Income Tax, Provident Fund and Russian Social Contributions",
    readMore: { href: "/russia-to-india/russian-employees-in-india", label: "Read the full guide: Russian Employees in India: Income Tax, Provident Fund and Russian Social Contributions" },
    items: [
      { n: 125, id: "does-a-russian-secondee-still-pay-russian-contributions", q: "Does a Russian secondee still pay Russian contributions?", a: "Possibly, depending on the contract and Russian rules. Take Russian advice." },
      { n: 126, id: "is-salary-for-work-in-india-taxable-in-india", q: "Is salary for work in India taxable in India?", a: "Yes, unless the treaty's employment article conditions are met. A secondee whose cost is borne by the Indian subsidiary normally does not meet them." },
      { n: 127, id: "who-deducts-indian-tax-on-the-salary", q: "Who deducts Indian tax on the salary?", a: "The Indian employer, under Section 392 of the Income-tax Act, 2025, by the 7th of the following month." },
      { n: 128, id: "can-i-avoid-double-contributions", q: "Can I avoid double contributions?", a: "Not through an agreement. Structure the assignment, for example as a local contract or a short trip, only where the facts support it, and budget for both systems." },
      { n: 129, id: "does-the-india-russia-mobility-agreement-change-this", q: "Does the India-Russia mobility agreement change this?", a: "A manpower mobility agreement was reported as finalised in December 2025 for Indian workers going to Russia. It does not replace the tax and provident fund rules above." },
    ],
  },
  {
    id: "russian-parent-obligations",
    label: "Russian Parent Obligations: Bank of Russia Approval, Currency Control and Tax Reporting",
    readMore: { href: "/russia-to-india/russian-parent-obligations", label: "Read the full guide: Russian Parent Obligations: Bank of Russia Approval, Currency Control and Tax Reporting" },
    items: [
      { n: 130, id: "does-a-russian-company-need-approval-to-invest-in-india", q: "Does a Russian company need approval to invest in India?", a: "Russian residents face restrictions on paying for shares abroad. As reported, transactions up to RUB 30 million in aggregate per counterparty need no individual Bank of Russia approval from 1 July 2026, and larger ones do. Confirm with Russian counsel." },
      { n: 131, id: "how-is-the-rub-30-million-threshold-calculated", q: "How is the RUB 30 million threshold calculated?", a: "Transactions with the same non-resident entity are added together, counting those made on or after 1 April 2024, with foreign currency converted at the Bank of Russia rate." },
      { n: 132, id: "are-indian-dividends-taxed-in-russia", q: "Are Indian dividends taxed in Russia?", a: "Foreign dividends can be taxed at 0% for qualifying holdings under conditions, otherwise at the normal rate with credit for Indian tax. Confirm with a Russian adviser." },
      { n: 133, id: "do-controlled-foreign-company-rules-apply", q: "Do controlled foreign company rules apply?", a: "They can, to undistributed profits of foreign subsidiaries unless an exemption applies. Check the position for the Indian subsidiary." },
      { n: 134, id: "must-i-tell-the-russian-tax-authority", q: "Must I tell the Russian tax authority?", a: "Russian rules require notification of foreign participation and accounts. Confirm the forms and deadlines with Russian counsel." },
      { n: 135, id: "what-is-the-russian-profit-tax-rate", q: "What is the Russian profit tax rate?", a: "Reported as 25% from 2025, with credit for foreign tax. Confirm the current rate." },
      { n: 136, id: "can-money-go-to-india-through-any-bank", q: "Can money go to India through any bank?", a: "Only through banks acceptable to both the Russian and Indian sides. See the sanctions and payments guide." },
    ],
  },
  {
    id: "sanctions-and-payments-for-russian-companies",
    label: "Sanctions and Payments for Russian Companies in India: Banking, Screening and Settlement Channels",
    readMore: { href: "/russia-to-india/sanctions-and-payments-for-russian-companies", label: "Read the full guide: Sanctions and Payments for Russian Companies in India: Banking, Screening and Settlement Channels" },
    items: [
      { n: 137, id: "does-india-apply-us-or-eu-sanctions-on-russia", q: "Does India apply US or EU sanctions on Russia?", a: "The Government of India has not adopted unilateral sanctions, but Indian banks and companies with dollar, euro or sterling exposure screen against them in practice." },
      { n: 138, id: "can-a-russian-company-open-an-indian-bank-account", q: "Can a Russian company open an Indian bank account?", a: "Yes in principle, but expect enhanced due diligence and possible refusals. Prepare ownership, source of funds and a business plan." },
      { n: 139, id: "can-i-pay-in-roubles-or-rupees-to-avoid-sanctions", q: "Can I pay in roubles or rupees to avoid sanctions?", a: "Non-dollar settlement is possible through channels such as rupee vostro accounts, but it is not a sanctions safe harbour. Parties and banks still matter." },
      { n: 140, id: "are-indian-banks-refusing-russian-payments", q: "Are Indian banks refusing Russian payments?", a: "Some have, after new US sanctions, particularly on oil-related payments. The position changes, so ask your bank." },
      { n: 141, id: "what-is-the-50-rule", q: "What is the 50% rule?", a: "Under US sanctions, entities owned 50% or more in aggregate by blocked persons are also blocked. EU and UK rules use ownership and control tests." },
      { n: 142, id: "who-is-responsible-for-sanctions-screening", q: "Who is responsible for sanctions screening?", a: "The Indian subsidiary and its directors, with support from advisers. The parent should also screen its own side." },
      { n: 143, id: "does-the-treaty-or-fdi-route-help-with-sanctions", q: "Does the treaty or FDI route help with sanctions?", a: "No. Tax treaties and the FDI route do not remove sanctions or banking restrictions." },
    ],
  },
  {
    id: "structure-options",
    label: "Structure Options in India for a Russian Company: Subsidiary, LLP, Branch, Liaison, Project Office or JV",
    readMore: { href: "/russia-to-india/structure-options", label: "Read the full guide: Structure Options in India for a Russian Company: Subsidiary, LLP, Branch, Liaison, Project Office or JV" },
    items: [
      { n: 144, id: "what-is-the-best-structure-for-a-russian-company-in-india", q: "What is the best structure for a Russian company in India?", a: "For most, a wholly owned private limited company, because it limits liability and is easier to bank, fund and exit." },
      { n: 145, id: "can-i-use-an-llp", q: "Can I use an LLP?", a: "In sectors with 100% automatic FDI and no performance-linked conditions." },
      { n: 146, id: "what-do-i-need-for-a-branch-office", q: "What do I need for a branch office?", a: "A net worth of USD 100,000 and a profit record for the preceding five years, with RBI approval." },
      { n: 147, id: "what-do-i-need-for-a-liaison-office", q: "What do I need for a liaison office?", a: "A net worth of USD 50,000 and a profit record for three years, with RBI approval. It cannot earn income." },
      { n: 148, id: "is-a-joint-venture-easier", q: "Is a joint venture easier?", a: "It can open access to a partner, licences and a market, but needs strong governance and sanctions terms." },
      { n: 149, id: "why-is-a-branch-harder-to-bank", q: "Why is a branch harder to bank?", a: "The Russian parent itself is the account holder, which attracts the strongest due diligence." },
      { n: 150, id: "how-are-branches-taxed", q: "How are branches taxed?", a: "As foreign companies on Indian profits at a higher rate, with surcharge and cess; check the current rates." },
    ],
  },
  {
    id: "transfer-pricing",
    label: "Transfer Pricing for Russian Groups in India: Services, Supply Chains and Documentation",
    readMore: { href: "/russia-to-india/transfer-pricing", label: "Read the full guide: Transfer Pricing for Russian Groups in India: Services, Supply Chains and Documentation" },
    items: [
      { n: 151, id: "does-india-apply-transfer-pricing-to-russian-related-parties", q: "Does India apply transfer pricing to Russian related parties?", a: "Yes. International transactions with associated enterprises, including Russian affiliates, must be at arm's length and documented." },
      { n: 152, id: "are-management-fees-to-russia-deductible", q: "Are management fees to Russia deductible?", a: "Yes if they are for services actually received at an arm's length price, with Withholding Tax and evidence of benefit." },
      { n: 153, id: "what-report-must-be-filed", q: "What report must be filed?", a: "An accountant's report on international transactions in the prescribed form, by the due date. Check the form number and date under the 2025 Act." },
      { n: 154, id: "do-i-need-a-master-file", q: "Do I need a master file?", a: "Only if the group meets the revenue and transaction thresholds in the rules. Confirm against your numbers." },
      { n: 155, id: "can-i-get-certainty-in-advance", q: "Can I get certainty in advance?", a: "An advance pricing agreement or a safe harbour for eligible transactions can reduce disputes." },
      { n: 156, id: "why-does-customs-value-matter", q: "Why does customs value matter?", a: "The price declared at import and the transfer price should be consistent; differences invite questions from both customs and the tax department." },
      { n: 157, id: "what-if-both-india-and-russia-tax-the-same-profit", q: "What if both India and Russia tax the same profit?", a: "The treaty's mutual agreement procedure and the credit method can relieve it. Align the documentation on both sides." },
    ],
  },
]

const allFaqs = faqGroups.flatMap((group) => group.items)

export default function RussiaToIndiaFaqPage() {
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
        headline="157 Questions About Setting Up and Running a Subsidiary in India"
        description="157 plain answers for Russian companies: FDI route, sanctions, incorporation, FEMA, the India-Russia tax treaty, documents, staff, data protection, compliance, repatriation and exit."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "157 FAQs" },
        ]}
      />

      <GuideHero
        eyebrow="FAQ for Russian companies"
        title="157 Questions About Setting Up and Running a Subsidiary in India"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideAnswerBox title="How to use this page">
          The questions are grouped by topic, starting with the decisions before you commit and then following
          each guide in the series. Answers are short; the{" "}
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">complete guide</Link>{" "}
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

        <GuideServiceBox path="/russia-to-india/faq" />
        <GuideCTA
          title="Have a question that is not here?"
          description="Tell us about your plan and we will answer it on a call."
        />

        <p className="mb-10">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Russian
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="A Question the FAQ Doesn't Answer?"
        description="Tell us what is specific to your Russian parent, and we'll answer it directly on a call."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  )
}
