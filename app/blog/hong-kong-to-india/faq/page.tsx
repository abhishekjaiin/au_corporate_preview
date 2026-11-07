import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideServiceBox } from "@/components/guide/GuideServiceBox"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/faq"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "general", label: "Before you start: structure, cost and approvals" },
  { id: "common-mistakes", label: "Common Mistakes Hong Kong Companies Make When Entering India" },
  { id: "compliance-calendar", label: "Compliance Calendar for an Indian Subsidiary of a Hong Kong Company" },
  { id: "contracts-courts-arbitration", label: "Contracts, Courts and Arbitration between India and Hong Kong: HKIAC, Section 44A and the New York Convention" },
  { id: "data-protection-pdpo-dpdp", label: "Data Protection: Hong Kong PDPO and India DPDP Act for Cross-Border Groups" },
  { id: "documents-hong-kong-apostille", label: "Hong Kong Documents for India: Notarisation, Apostille and Legalisation" },
  { id: "exit-and-restructuring", label: "Exit and Restructuring in India for a Hong Kong Parent: Share Sale, Buy-Back, Liquidation and Strike-Off" },
  { id: "funding-and-fema", label: "Funding an Indian Subsidiary from Hong Kong: FEMA, FC-GPR and Pricing Rules" },
  { id: "goods-via-hong-kong-origin-customs-and-procurement", label: "Goods via Hong Kong: Rules of Origin, Customs Value and Procurement Restrictions for India" },
  { id: "hiring-in-india", label: "Hiring in India for a Hong Kong-Owned Company: Contracts, Payroll and Labour Codes" },
  { id: "hong-kong-as-regional-hub-for-india", label: "Using Hong Kong as a Regional Hub for India: Holding, Trading and Treasury Structures" },
  { id: "hong-kong-employees-in-india", label: "Hong Kong Employees in India: Income Tax, MPF and Indian Provident Fund" },
  { id: "hong-kong-parent-obligations", label: "Hong Kong Parent Obligations: Companies Ordinance, Profits Tax, FSIE and Reporting" },
  { id: "incorporation-steps", label: "Incorporating an Indian Subsidiary from Hong Kong: Step-by-Step with Timeline" },
  { id: "india-hong-kong-dtaa", label: "India-Hong Kong DTAA: Article-by-Article Guide with Tax Rates, PE and Anti-Abuse Test" },
  { id: "india-press-note-3-and-hong-kong-entities", label: "Press Note 3 and Hong Kong Companies: Why a Hong Kong Parent Still Needs Government Approval" },
  { id: "relocate-hong-kong-staff", label: "Relocating Hong Kong Staff to India: Visas, Registration and Family" },
  { id: "repatriating-profits", label: "Repatriating Profits from India to Hong Kong: Dividends, Fees, Royalties and Loans" },
  { id: "structure-options", label: "Structure Options in India for a Hong Kong Company: Subsidiary, LLP, Branch, Liaison, Project Office or JV" },
  { id: "transfer-pricing", label: "Transfer Pricing for Hong Kong Groups in India: Trading Hubs, Re-Invoicing and Services" },
]

type FaqItem = { n: number; id: string; q: string; a: string }
type FaqGroup = { id: string; label: string; readMore?: { href: string; label: string }; items: FaqItem[] }

const faqGroups: FaqGroup[] = [
  {
    id: "general",
    label: "Before you start: structure, cost and approvals",
    items: [
      { n: 1, id: "can-a-hong-kong-company-own-100-of-an-indian-subsidiary", q: "Can a Hong Kong company own 100% of an Indian subsidiary?", a: "Yes, in sectors that allow 100% foreign investment, but a Hong Kong-registered investor is reported to need the Government of India's prior approval under Press Note 3, because India treats Hong Kong with China. The sector cap still applies." },
      { n: 2, id: "did-the-2026-changes-remove-the-need-for-approval-for-hong-k", q: "Did the 2026 changes remove the need for approval for Hong Kong investors?", a: "No, as reported. After the March 2026 Cabinet decision a DPIIT official was reported to say that firms registered in China and Hong Kong still need prior approval. The 10% passive-ownership easing is for investors from non-land-border countries." },
      { n: 3, id: "does-a-hong-kong-company-need-to-send-anyone-to-india-to-set", q: "Does a Hong Kong company need to send anyone to India to set up a subsidiary?", a: "No. Filing is online. Directors need Digital Signature Certificates, and Hong Kong documents are notarised and apostilled or legalised. A director who is a land-border country citizen needs Ministry of Home Affairs clearance first." },
      { n: 4, id: "how-long-does-it-take-to-set-up-an-indian-subsidiary-from-ho", q: "How long does it take to set up an Indian subsidiary from Hong Kong?", a: "Incorporation takes two to three weeks from complete documents, but the Press Note 3 approval comes first and can take months, except for a reported 60-day target in specified manufacturing sectors." },
      { n: 5, id: "what-does-it-cost-to-set-up-a-subsidiary-in-india", q: "What does it cost to set up a subsidiary in India?", a: "AU Corporate's fee for setting up the subsidiary is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about HK$83,000 at an indicative ₹12.07 per Hong Kong dollar, 15 October 2026 rate). The costing depends on your plan, and it does not include the Press Note 3 approval work, which depends on the sector and structure." },
      { n: 6, id: "is-there-a-minimum-share-capital-for-an-indian-private-limit", q: "Is there a minimum share capital for an Indian private limited company?", a: "No statutory minimum. The practical amount depends on your first 12 to 18 months of costs and on any sector rule." },
      { n: 7, id: "what-is-the-automatic-route", q: "What is the Automatic Route?", a: "The route under the FDI Policy that lets a foreign investor invest in a permitted sector without government approval, subject to reporting to the RBI. A Hong Kong-registered investor should not assume it is available." },
      { n: 8, id: "which-sectors-restrict-foreign-investment-in-india", q: "Which sectors restrict foreign investment in India?", a: "Some sectors have caps or need approval for all foreign investors, such as defence, insurance, multi-brand retail, some media, and certain financial and telecom activities. Press Note 3 applies on top for Hong Kong investors." },
      { n: 9, id: "what-is-a-resident-director", q: "What is a Resident Director?", a: "A director who has stayed in India for 182 days or more in the financial year. Every Indian company needs at least one." },
      { n: 10, id: "can-a-hong-kong-resident-be-a-director-of-an-indian-company", q: "Can a Hong Kong resident be a director of an Indian company?", a: "Yes, with a Director Identification Number and a Digital Signature Certificate. Clearance requirements for land-border country citizens should be confirmed for the director's passport." },
      { n: 11, id: "what-is-spice", q: "What is SPICe+?", a: "The integrated online incorporation form of the Ministry of Corporate Affairs, which can also apply for PAN, TAN and other registrations together." },
      { n: 12, id: "what-accounting-standards-does-an-indian-subsidiary-follow", q: "What accounting standards does an Indian subsidiary follow?", a: "The Companies Act, 2013 and, above the thresholds, Indian Accounting Standards (Ind AS), which are converged with IFRS. A Hong Kong parent reporting under Hong Kong Financial Reporting Standards will need a bridge for consolidation." },
      { n: 13, id: "does-an-indian-subsidiary-need-an-audit", q: "Does an Indian subsidiary need an audit?", a: "Yes. Every company must have its accounts audited by a Chartered Accountant firm each year, whatever its size, and appoint the auditor within 30 days of incorporation." },
      { n: 14, id: "what-corporate-tax-rate-does-an-indian-subsidiary-pay", q: "What corporate tax rate does an Indian subsidiary pay?", a: "Under the concessional regime without incentives, a domestic company pays 22% plus surcharge and cess, about 25.17%. Other regimes and rates apply to specific cases." },
      { n: 15, id: "must-the-indian-subsidiary-register-for-gst", q: "Must the Indian subsidiary register for GST?", a: "Registration is required above turnover thresholds and in some other cases, such as interstate supplies and reverse-charge liabilities. Services exported to the Hong Kong parent can be zero-rated where the conditions are met." },
      { n: 16, id: "can-the-indian-subsidiary-send-profits-to-hong-kong-freely", q: "Can the Indian subsidiary send profits to Hong Kong freely?", a: "Yes, through dividends, fees, royalties and loan repayments, with the tax and RBI formalities for each route. Related-party payments get closer checks, so keep contracts and evidence. See the guide on getting money out of India." },
      { n: 17, id: "is-there-a-tax-treaty-between-india-and-hong-kong", q: "Is there a tax treaty between India and Hong Kong?", a: "Yes, signed on 19 March 2018, in force from 30 November 2018 and applicable in India from 1 April 2019. It caps Indian tax at 5% on dividends and 10% on interest, royalties and fees for technical services. Confirm the current text." },
      { n: 18, id: "is-there-a-social-security-agreement-between-india-and-hong-", q: "Is there a social security agreement between India and Hong Kong?", a: "No. A Hong Kong employee in India generally falls under the Indian provident fund rules for international workers, so budget for EPF alongside any MPF obligation." },
      { n: 19, id: "is-there-an-india-hong-kong-free-trade-agreement-or-investme", q: "Is there an India-Hong Kong free trade agreement or investment treaty?", a: "There is no free trade agreement and no investment protection agreement was found. Check the facts before relying on any treaty protection, because India terminated many older investment treaties from 2016 and 2017." },
      { n: 20, id: "do-hong-kong-documents-need-an-apostille-for-india", q: "Do Hong Kong documents need an apostille for India?", a: "Hong Kong applies the Apostille Convention in its own right and India is a party, so a Hong Kong apostille is generally expected to work. Because India objected to China's accession, confirm with the Indian mission before relying on it, and use consular legalisation if refused." },
      { n: 21, id: "can-the-indian-subsidiary-employ-hong-kong-nationals", q: "Can the Indian subsidiary employ Hong Kong nationals?", a: "Yes, with an employment visa (salary floor USD 25,000 a year, with exceptions) and registration. A business visa is not for hands-on work. See the guide on relocating staff." },
      { n: 22, id: "does-the-hong-kong-parent-need-approval-in-hong-kong", q: "Does the Hong Kong parent need approval in Hong Kong?", a: "No outbound approval or exchange control applies. You need a board resolution, a company secretary and registers, and your Hong Kong tax position, including the foreign-sourced income rules, checked with a Hong Kong adviser." },
      { n: 23, id: "who-files-the-rbi-forms-for-the-investment", q: "Who files the RBI forms for the investment?", a: "The Indian subsidiary files Form FC-GPR with its authorised dealer bank and advisers, using the documents the Hong Kong parent provides. The annual FLA return is filed by 15 July." },
      { n: 24, id: "can-i-close-the-indian-subsidiary-later", q: "Can I close the Indian subsidiary later?", a: "Yes, by strike-off for a dormant company or voluntary liquidation for one with assets, after clearing tax, employee and RBI matters. A Hong Kong buyer of the shares would itself need Press Note 3 approval." },
    ],
  },
  {
    id: "common-mistakes",
    label: "Common Mistakes Hong Kong Companies Make When Entering India",
    readMore: { href: "/hong-kong-to-india/common-mistakes", label: "Read the full guide: Common Mistakes Hong Kong Companies Make When Entering India" },
    items: [
      { n: 25, id: "what-is-the-biggest-mistake-hong-kong-companies-make-in-indi", q: "What is the biggest mistake Hong Kong companies make in India?", a: "Assuming they can use the Automatic Route. Hong Kong-registered investors are reported to need prior approval under Press Note 3." },
      { n: 26, id: "why-is-a-shell-hong-kong-company-risky", q: "Why is a shell Hong Kong company risky?", a: "The principal purpose test, India's anti-avoidance rule and transfer pricing can deny treaty benefits and adjust profits." },
      { n: 27, id: "what-happens-if-fc-gpr-is-late", q: "What happens if FC-GPR is late?", a: "The company must regularise by compounding and may pay a penalty." },
      { n: 28, id: "can-i-claim-the-5-dividend-rate-without-paperwork", q: "Can I claim the 5% dividend rate without paperwork?", a: "No. The payer needs Form 41, the residency certificate and a beneficial ownership declaration." },
      { n: 29, id: "does-a-secondee-pay-both-epf-and-mpf", q: "Does a secondee pay both EPF and MPF?", a: "Possibly, because there is no social security agreement. Budget for both and take advice." },
      { n: 30, id: "why-do-contracts-need-stamping", q: "Why do contracts need stamping?", a: "Unstamped documents are not admissible in evidence in India until stamped and penalty paid." },
      { n: 31, id: "how-do-i-stay-on-top-of-deadlines", q: "How do I stay on top of deadlines?", a: "Use a compliance calendar with owners, and review it each quarter." },
    ],
  },
  {
    id: "compliance-calendar",
    label: "Compliance Calendar for an Indian Subsidiary of a Hong Kong Company",
    readMore: { href: "/hong-kong-to-india/compliance-calendar", label: "Read the full guide: Compliance Calendar for an Indian Subsidiary of a Hong Kong Company" },
    items: [
      { n: 32, id: "when-is-the-agm-of-an-indian-subsidiary-due", q: "When is the AGM of an Indian subsidiary due?", a: "Within six months of the 31 March year end, which is by 30 September in most cases." },
      { n: 33, id: "what-is-due-after-the-agm", q: "What is due after the AGM?", a: "AOC-4 (financial statements) within 30 days and MGT-7 (annual return) within 60 days of the AGM." },
      { n: 34, id: "when-is-the-fla-return-due", q: "When is the FLA return due?", a: "By 15 July each year." },
      { n: 35, id: "when-must-tds-be-deposited", q: "When must TDS be deposited?", a: "By the 7th of the month following the deduction, with returns filed quarterly." },
      { n: 36, id: "what-are-the-advance-tax-dates", q: "What are the advance tax dates?", a: "15 June, 15 September, 15 December and 15 March." },
      { n: 37, id: "what-is-the-filing-deadline-for-fc-gpr", q: "What is the filing deadline for FC-GPR?", a: "Within 30 days of allotting shares to the foreign investor." },
      { n: 38, id: "do-approval-conditions-need-tracking", q: "Do approval conditions need tracking?", a: "Yes. If the Press Note 3 approval attached conditions, such as reporting or shareholding terms, track them on the same calendar as statutory filings." },
    ],
  },
  {
    id: "contracts-courts-arbitration",
    label: "Contracts, Courts and Arbitration between India and Hong Kong: HKIAC, Section 44A and the New York Convention",
    readMore: { href: "/hong-kong-to-india/contracts-courts-arbitration", label: "Read the full guide: Contracts, Courts and Arbitration between India and Hong Kong: HKIAC, Section 44A and the New York Convention" },
    items: [
      { n: 39, id: "can-a-hong-kong-arbitral-award-be-enforced-in-india", q: "Can a Hong Kong arbitral award be enforced in India?", a: "Yes. India has notified Hong Kong for the New York Convention route, so an award with a Hong Kong seat is enforced as a foreign award, subject to the limited grounds for refusal." },
      { n: 40, id: "is-hong-kong-a-reciprocating-territory-under-section-44a", q: "Is Hong Kong a reciprocating territory under Section 44A?", a: "Yes. A decree from a superior Hong Kong court can be filed for execution in India as if it were an Indian decree, subject to the exceptions in Section 13." },
      { n: 41, id: "how-do-i-enforce-an-indian-judgment-in-hong-kong", q: "How do I enforce an Indian judgment in Hong Kong?", a: "Usually by a common law action on the judgment. Confirm the current route with Hong Kong counsel." },
      { n: 42, id: "should-i-choose-hkiac-or-siac", q: "Should I choose HKIAC or SIAC?", a: "Both are respected. Choose on cost, familiarity, the counterparty's acceptance and the enforcement path, and name the rules and seat clearly." },
      { n: 43, id: "does-stamp-duty-matter", q: "Does stamp duty matter?", a: "Yes. Unstamped or under-stamped agreements are not admissible in evidence in India until the duty and penalty are paid." },
      { n: 44, id: "can-i-choose-hong-kong-law", q: "Can I choose Hong Kong law?", a: "For commercial terms, yes, but local assets, security and regulatory points are governed by Indian law." },
      { n: 45, id: "can-indian-courts-help-a-hong-kong-seated-arbitration", q: "Can Indian courts help a Hong Kong-seated arbitration?", a: "Yes for interim measures in aid of arbitration unless the parties excluded it." },
    ],
  },
  {
    id: "data-protection-pdpo-dpdp",
    label: "Data Protection: Hong Kong PDPO and India DPDP Act for Cross-Border Groups",
    readMore: { href: "/hong-kong-to-india/data-protection-pdpo-dpdp", label: "Read the full guide: Data Protection: Hong Kong PDPO and India DPDP Act for Cross-Border Groups" },
    items: [
      { n: 46, id: "does-the-pdpo-apply-to-my-indian-subsidiary", q: "Does the PDPO apply to my Indian subsidiary?", a: "The PDPO applies to data users who control the collection, holding, processing or use of data in or from Hong Kong. Indian processing for a Hong Kong group still needs contractual protections. Take Hong Kong advice on scope." },
      { n: 47, id: "when-do-the-indian-data-protection-duties-start", q: "When do the Indian data protection duties start?", a: "The Rules were notified on 13 November 2025 and the main duties apply from 13 May 2027." },
      { n: 48, id: "can-i-send-indian-personal-data-to-hong-kong", q: "Can I send Indian personal data to Hong Kong?", a: "Generally yes, because the Act restricts transfers only to countries the government notifies. Sector rules can be stricter." },
      { n: 49, id: "what-is-the-maximum-penalty-in-india", q: "What is the maximum penalty in India?", a: "Up to INR 250 crore for failing to take reasonable security safeguards to prevent a personal data breach." },
      { n: 50, id: "is-hong-kong-s-cross-border-transfer-rule-in-force", q: "Is Hong Kong's cross-border transfer rule in force?", a: "Section 33 of the PDPO has not been brought into force. The Commissioner has issued guidance and model clauses." },
      { n: 51, id: "do-i-need-a-data-processing-agreement", q: "Do I need a data processing agreement?", a: "Yes. A written contract with the processor covers purpose, security, breach and return or deletion of data." },
      { n: 52, id: "who-regulates-data-protection", q: "Who regulates data protection?", a: "The Privacy Commissioner for Personal Data in Hong Kong and the Data Protection Board of India." },
    ],
  },
  {
    id: "documents-hong-kong-apostille",
    label: "Hong Kong Documents for India: Notarisation, Apostille and Legalisation",
    readMore: { href: "/hong-kong-to-india/documents-hong-kong-apostille", label: "Read the full guide: Hong Kong Documents for India: Notarisation, Apostille and Legalisation" },
    items: [
      { n: 53, id: "does-india-accept-a-hong-kong-apostille", q: "Does India accept a Hong Kong apostille?", a: "Hong Kong applies the Apostille Convention in its own right and India is a party, so it is generally expected to work. Because India objected to China's accession, confirm with the Indian mission or the receiving authority before relying on it." },
      { n: 54, id: "who-issues-apostilles-in-hong-kong", q: "Who issues apostilles in Hong Kong?", a: "The High Court registry issues Hong Kong apostilles, after a notary public or solicitor certifies private documents." },
      { n: 55, id: "when-do-i-need-consular-legalisation-instead", q: "When do I need consular legalisation instead?", a: "If the receiving Indian body will not accept the apostille, the Indian Consulate General in Hong Kong can legalise the document." },
      { n: 56, id: "do-i-need-a-notary", q: "Do I need a notary?", a: "Usually yes for copies of private documents, signatures on resolutions and powers of attorney, before the apostille." },
      { n: 57, id: "must-chinese-language-documents-be-translated", q: "Must Chinese-language documents be translated?", a: "Yes. Provide a certified English translation, and authenticate the translation as the receiving body requires." },
      { n: 58, id: "how-recent-must-the-documents-be", q: "How recent must the documents be?", a: "Banks and the Registrar commonly want good standing and similar documents within three to six months. Ask each recipient." },
      { n: 59, id: "do-directors-need-indian-credentials", q: "Do directors need Indian credentials?", a: "Yes. Each proposed director needs a Director Identification Number and a Digital Signature Certificate." },
    ],
  },
  {
    id: "exit-and-restructuring",
    label: "Exit and Restructuring in India for a Hong Kong Parent: Share Sale, Buy-Back, Liquidation and Strike-Off",
    readMore: { href: "/hong-kong-to-india/exit-and-restructuring", label: "Read the full guide: Exit and Restructuring in India for a Hong Kong Parent: Share Sale, Buy-Back, Liquidation and Strike-Off" },
    items: [
      { n: 60, id: "how-is-a-share-sale-by-a-hong-kong-parent-taxed-in-india", q: "How is a share sale by a Hong Kong parent taxed in India?", a: "The gain is taxed in India. For unlisted shares held more than 24 months the long-term rate is 12.5%; a shorter holding is taxed at the normal rate." },
      { n: 61, id: "does-hong-kong-tax-the-gain", q: "Does Hong Kong tax the gain?", a: "Generally not, but group disposal gains can be caught by the foreign-sourced income exemption rules without economic substance." },
      { n: 62, id: "what-is-the-fema-pricing-rule-on-exit", q: "What is the FEMA pricing rule on exit?", a: "A sale to an Indian resident cannot be above fair value for a purchase from a non-resident, and a sale to another non-resident cannot be below it." },
      { n: 63, id: "which-form-reports-the-transfer", q: "Which form reports the transfer?", a: "Form FC-TRS within 60 days of the transfer." },
      { n: 64, id: "can-i-do-a-buy-back", q: "Can I do a buy-back?", a: "Yes, within Companies Act limits. The tax treatment has changed in recent budgets, so confirm the current rule." },
      { n: 65, id: "how-long-does-voluntary-liquidation-take", q: "How long does voluntary liquidation take?", a: "Usually several months, depending on tax clearances and the creditor process." },
      { n: 66, id: "can-i-strike-off-an-operating-company", q: "Can I strike off an operating company?", a: "Strike-off is for dormant companies without liabilities and is not a substitute for a proper liquidation." },
    ],
  },
  {
    id: "funding-and-fema",
    label: "Funding an Indian Subsidiary from Hong Kong: FEMA, FC-GPR and Pricing Rules",
    readMore: { href: "/hong-kong-to-india/funding-and-fema", label: "Read the full guide: Funding an Indian Subsidiary from Hong Kong: FEMA, FC-GPR and Pricing Rules" },
    items: [
      { n: 67, id: "how-can-a-hong-kong-company-fund-its-indian-subsidiary", q: "How can a Hong Kong company fund its Indian subsidiary?", a: "By equity, compulsorily convertible preference shares or a compliant external commercial borrowing, always through a bank." },
      { n: 68, id: "how-soon-must-shares-be-allotted", q: "How soon must shares be allotted?", a: "Within 60 days of receiving the money." },
      { n: 69, id: "when-is-fc-gpr-due", q: "When is FC-GPR due?", a: "Within 30 days of allotment of shares." },
      { n: 70, id: "what-is-the-fla-return", q: "What is the FLA return?", a: "An annual return on foreign liabilities and assets filed by 15 July with the RBI." },
      { n: 71, id: "is-there-a-pricing-rule", q: "Is there a pricing rule?", a: "Yes. An issue or sale of shares to a non-resident cannot be below fair value, and a purchase from a non-resident cannot be above it." },
      { n: 72, id: "can-a-hong-kong-group-company-lend-to-the-indian-subsidiary", q: "Can a Hong Kong group company lend to the Indian subsidiary?", a: "Yes if it meets the external commercial borrowing conditions, with Withholding Tax on interest and arm's length pricing." },
      { n: 73, id: "is-press-note-3-approval-needed-before-the-money-comes-in", q: "Is Press Note 3 approval needed before the money comes in?", a: "For Hong Kong investors, yes. Funding before approval is a contravention." },
      { n: 74, id: "can-money-come-from-a-third-party", q: "Can money come from a third party?", a: "No. It should come from the Hong Kong parent's own account to avoid KYC and reporting problems." },
    ],
  },
  {
    id: "goods-via-hong-kong-origin-customs-and-procurement",
    label: "Goods via Hong Kong: Rules of Origin, Customs Value and Procurement Restrictions for India",
    readMore: { href: "/hong-kong-to-india/goods-via-hong-kong-origin-customs-and-procurement", label: "Read the full guide: Goods via Hong Kong: Rules of Origin, Customs Value and Procurement Restrictions for India" },
    items: [
      { n: 75, id: "does-shipping-through-hong-kong-change-the-origin-of-goods", q: "Does shipping through Hong Kong change the origin of goods?", a: "No. Origin is where the goods were wholly obtained or last substantially transformed, not where they were shipped from or invoiced." },
      { n: 76, id: "is-there-a-trade-agreement-between-india-and-hong-kong", q: "Is there a trade agreement between India and Hong Kong?", a: "No. Normal customs duties apply." },
      { n: 77, id: "do-anti-dumping-duties-apply-to-goods-routed-via-hong-kong", q: "Do anti-dumping duties apply to goods routed via Hong Kong?", a: "Yes if the goods are of Chinese origin. Duties follow the origin of the goods." },
      { n: 78, id: "how-does-customs-treat-related-party-sales", q: "How does customs treat related-party sales?", a: "Customs may test whether the relationship influenced the price. Keep the transfer pricing and customs files consistent." },
      { n: 79, id: "can-a-hong-kong-company-bid-in-indian-public-procurement", q: "Can a Hong Kong company bid in Indian public procurement?", a: "Land-border country restrictions apply to bidders with ties to those countries. Hong Kong's treatment should be confirmed in writing before bidding." },
      { n: 80, id: "is-a-certificate-of-origin-enough", q: "Is a certificate of origin enough?", a: "It helps but customs can verify the origin. Keep production and shipping records." },
      { n: 81, id: "what-is-the-penalty-for-false-origin", q: "What is the penalty for false origin?", a: "Penalties, seizure of goods, possible prosecution and loss of import privileges." },
    ],
  },
  {
    id: "hiring-in-india",
    label: "Hiring in India for a Hong Kong-Owned Company: Contracts, Payroll and Labour Codes",
    readMore: { href: "/hong-kong-to-india/hiring-in-india", label: "Read the full guide: Hiring in India for a Hong Kong-Owned Company: Contracts, Payroll and Labour Codes" },
    items: [
      { n: 82, id: "do-i-need-an-employment-contract-in-india", q: "Do I need an employment contract in India?", a: "Yes, a written appointment letter is standard and needed for clarity on pay, notice and confidentiality." },
      { n: 83, id: "is-provident-fund-mandatory", q: "Is provident fund mandatory?", a: "For covered establishments, yes. Check the thresholds and apply for registration early." },
      { n: 84, id: "who-deducts-income-tax-on-salary", q: "Who deducts income tax on salary?", a: "The employer, under Section 392 of the Income-tax Act, 2025, depositing by the 7th of the following month." },
      { n: 85, id: "can-i-include-a-non-compete-clause", q: "Can I include a non-compete clause?", a: "A post-employment non-compete is generally not enforceable in India, so use confidentiality and carefully drafted non-solicitation terms." },
      { n: 86, id: "have-the-labour-codes-taken-effect", q: "Have the labour codes taken effect?", a: "They were reported to be in force from 21 November 2025. Confirm the rules and state notifications that apply to you." },
      { n: 87, id: "do-i-need-a-sexual-harassment-committee", q: "Do I need a sexual harassment committee?", a: "Employers with 10 or more employees must form an Internal Committee under the POSH Act." },
      { n: 88, id: "how-does-this-differ-from-hong-kong", q: "How does this differ from Hong Kong?", a: "Provident fund, termination, leave and wage-payment rules differ. Use Indian counsel for the handbook and contracts." },
    ],
  },
  {
    id: "hong-kong-as-regional-hub-for-india",
    label: "Using Hong Kong as a Regional Hub for India: Holding, Trading and Treasury Structures",
    readMore: { href: "/hong-kong-to-india/hong-kong-as-regional-hub-for-india", label: "Read the full guide: Using Hong Kong as a Regional Hub for India: Holding, Trading and Treasury Structures" },
    items: [
      { n: 89, id: "is-hong-kong-a-good-holding-location-for-india", q: "Is Hong Kong a good holding location for India?", a: "It offers a 5% treaty dividend rate and a territorial tax system, but a Hong Kong holding company needs prior approval under Press Note 3, as reported, and real substance to keep treaty benefits." },
      { n: 90, id: "can-i-use-hong-kong-as-a-trading-hub-for-india", q: "Can I use Hong Kong as a trading hub for India?", a: "Yes, if the Hong Kong entity has the people, premises and risk control to earn the profit and transfer pricing is documented." },
      { n: 91, id: "what-is-the-principal-purpose-test", q: "What is the principal purpose test?", a: "A treaty rule that denies a benefit when obtaining it was a principal purpose of the arrangement and granting it would be contrary to the treaty's object." },
      { n: 92, id: "does-hong-kong-tax-indian-dividends", q: "Does Hong Kong tax Indian dividends?", a: "Generally not as Hong Kong-sourced, but foreign-sourced income exemption rules can tax certain foreign dividends received by group members without substance." },
      { n: 93, id: "what-substance-is-needed-in-hong-kong", q: "What substance is needed in Hong Kong?", a: "Directors and staff in Hong Kong who make the decisions and carry out the functions, with premises and spend that match the activity." },
      { n: 94, id: "does-pillar-two-apply", q: "Does Pillar Two apply?", a: "The Hong Kong Minimum Top-up Tax applies to groups with consolidated revenue of at least EUR 750 million." },
      { n: 95, id: "are-there-alternatives-to-a-hong-kong-hub", q: "Are there alternatives to a Hong Kong hub?", a: "Yes. Another genuine holding jurisdiction or direct holding by the ultimate parent. Compare treaty, approval and substance for each." },
    ],
  },
  {
    id: "hong-kong-employees-in-india",
    label: "Hong Kong Employees in India: Income Tax, MPF and Indian Provident Fund",
    readMore: { href: "/hong-kong-to-india/hong-kong-employees-in-india", label: "Read the full guide: Hong Kong Employees in India: Income Tax, MPF and Indian Provident Fund" },
    items: [
      { n: 96, id: "does-a-hong-kong-secondee-still-pay-mpf", q: "Does a Hong Kong secondee still pay MPF?", a: "Employees employed in Hong Kong generally remain within MPF, subject to its exemptions. Confirm the position for your assignment with the MPF Authority or a Hong Kong adviser." },
      { n: 97, id: "how-much-is-the-mandatory-mpf-contribution", q: "How much is the mandatory MPF contribution?", a: "5% of relevant income each for employer and employee, with a ceiling of HK$30,000 of monthly income, so at most HK$1,500 each. The income limits change from time to time." },
      { n: 98, id: "is-salary-for-work-in-india-taxable-in-india", q: "Is salary for work in India taxable in India?", a: "Yes, unless the treaty's employment article conditions are met. A secondee whose cost is borne by the Indian subsidiary normally does not meet them." },
      { n: 99, id: "who-deducts-indian-tax-on-the-salary", q: "Who deducts Indian tax on the salary?", a: "The Indian employer, under Section 392 of the Income-tax Act, 2025, by the 7th of the following month." },
      { n: 100, id: "can-i-avoid-double-contributions", q: "Can I avoid double contributions?", a: "Not through an agreement. Structure the assignment, for example as a local contract or a short trip, only where the facts support it, and budget for both schemes where they apply." },
    ],
  },
  {
    id: "hong-kong-parent-obligations",
    label: "Hong Kong Parent Obligations: Companies Ordinance, Profits Tax, FSIE and Reporting",
    readMore: { href: "/hong-kong-to-india/hong-kong-parent-obligations", label: "Read the full guide: Hong Kong Parent Obligations: Companies Ordinance, Profits Tax, FSIE and Reporting" },
    items: [
      { n: 101, id: "does-a-hong-kong-company-need-permission-to-invest-in-india", q: "Does a Hong Kong company need permission to invest in India?", a: "Not under Hong Kong law. There are no exchange controls or outbound approval. The Indian approval under Press Note 3 is the main gate." },
      { n: 102, id: "does-a-hong-kong-company-need-a-company-secretary", q: "Does a Hong Kong company need a company secretary?", a: "Yes. Every Hong Kong company must have a company secretary who is a Hong Kong-resident individual or a Hong Kong-registered company." },
      { n: 103, id: "are-indian-dividends-taxable-in-hong-kong", q: "Are Indian dividends taxable in Hong Kong?", a: "Ordinarily not, because they are not Hong Kong-sourced, but the foreign-sourced income exemption rules can tax certain foreign dividends received by multinational group members that lack economic substance." },
      { n: 104, id: "does-hong-kong-tax-capital-gains-on-indian-shares", q: "Does Hong Kong tax capital gains on Indian shares?", a: "Not in general, but frequent trading may be treated as business income. The gain is taxed in India under the treaty and domestic law." },
      { n: 105, id: "what-is-the-hong-kong-profits-tax-rate", q: "What is the Hong Kong profits tax rate?", a: "For corporations, 8.25% on the first HK$2 million of assessable profits and 16.5% on the rest, with one company in a connected group able to use the lower tier." },
      { n: 106, id: "what-is-a-significant-controllers-register", q: "What is a significant controllers register?", a: "A register kept by a Hong Kong company of individuals or entities with more than 25% of shares or votes or with control. It aligns with the beneficial owner information India asks for." },
      { n: 107, id: "do-i-need-an-audit-for-a-hong-kong-company", q: "Do I need an audit for a Hong Kong company?", a: "Yes. Hong Kong companies generally prepare audited financial statements by a certified public accountant, which also support Indian banking and net worth evidence." },
    ],
  },
  {
    id: "incorporation-steps",
    label: "Incorporating an Indian Subsidiary from Hong Kong: Step-by-Step with Timeline",
    readMore: { href: "/hong-kong-to-india/incorporation-steps", label: "Read the full guide: Incorporating an Indian Subsidiary from Hong Kong: Step-by-Step with Timeline" },
    items: [
      { n: 108, id: "how-long-does-it-take-to-set-up-an-indian-company-from-hong-", q: "How long does it take to set up an Indian company from Hong Kong?", a: "After the approval and documents are ready, about two to three weeks for incorporation. The Press Note 3 approval is the long step." },
      { n: 109, id: "what-form-is-used-to-incorporate", q: "What form is used to incorporate?", a: "SPICe+ with AGILE-PRO-S, which also gives PAN, TAN, GST, EPFO and ESIC registrations where applicable." },
      { n: 110, id: "do-i-need-a-resident-director", q: "Do I need a resident director?", a: "Yes. At least one director must have stayed in India for 182 days or more in the previous financial year." },
      { n: 111, id: "can-a-hong-kong-company-be-the-shareholder", q: "Can a Hong Kong company be the shareholder?", a: "Yes, subject to the sector cap and Press Note 3 approval. A private limited company needs at least two shareholders." },
      { n: 112, id: "when-must-shares-be-allotted-after-the-money-arrives", q: "When must shares be allotted after the money arrives?", a: "Within 60 days of receipt. Form FC-GPR is due within 30 days of allotment." },
      { n: 113, id: "when-is-the-declaration-of-commencement-due", q: "When is the declaration of commencement due?", a: "Form INC-20A within 180 days of incorporation, before starting business or using the subscription money." },
      { n: 114, id: "do-directors-need-a-din-and-dsc", q: "Do directors need a DIN and DSC?", a: "Yes. Each director needs a Director Identification Number and a Digital Signature Certificate." },
      { n: 115, id: "can-a-branch-be-used-instead-of-a-subsidiary", q: "Can a branch be used instead of a subsidiary?", a: "Only with a large track record and Reserve Bank approval. See the structure options." },
    ],
  },
  {
    id: "india-hong-kong-dtaa",
    label: "India-Hong Kong DTAA: Article-by-Article Guide with Tax Rates, PE and Anti-Abuse Test",
    readMore: { href: "/hong-kong-to-india/india-hong-kong-dtaa", label: "Read the full guide: India-Hong Kong DTAA: Article-by-Article Guide with Tax Rates, PE and Anti-Abuse Test" },
    items: [
      { n: 116, id: "what-is-the-indian-withholding-rate-on-dividends-paid-to-a-h", q: "What is the Indian withholding rate on dividends paid to a Hong Kong parent?", a: "5% of the gross amount under the treaty, if the beneficial owner is a Hong Kong resident and the paperwork is in place. The domestic rate is higher." },
      { n: 117, id: "what-are-the-treaty-rates-on-interest-royalties-and-technica", q: "What are the treaty rates on interest, royalties and technical fees?", a: "10% of the gross amount for each, with 0% on interest paid to the government, the RBI and designated bodies such as the HKMA." },
      { n: 118, id: "when-does-a-hong-kong-company-have-a-permanent-establishment", q: "When does a Hong Kong company have a permanent establishment in India?", a: "Through a fixed place, a building site or installation over six months, services through personnel for more than 183 days in any 12-month period, or a dependent agent." },
      { n: 119, id: "are-gains-on-indian-shares-taxable-in-india-for-a-hong-kong-", q: "Are gains on Indian shares taxable in India for a Hong Kong seller?", a: "Yes. Summaries of the treaty say gains on shares of an Indian company are taxable in India, and Hong Kong does not tax capital gains in general." },
      { n: 120, id: "does-the-treaty-remove-the-need-for-press-note-3-approval", q: "Does the treaty remove the need for Press Note 3 approval?", a: "No. The treaty deals with tax. Press Note 3 is a separate foreign investment approval rule." },
      { n: 121, id: "what-documents-prove-treaty-eligibility", q: "What documents prove treaty eligibility?", a: "A Tax Residency Certificate from the Hong Kong Inland Revenue Department, Form 41, and a declaration of beneficial ownership and no PE." },
      { n: 122, id: "how-long-do-i-have-to-bring-a-mutual-agreement-case", q: "How long do I have to bring a mutual agreement case?", a: "Three years from the first notification of the action that gives rise to the taxation, under Article 25." },
    ],
  },
  {
    id: "india-press-note-3-and-hong-kong-entities",
    label: "Press Note 3 and Hong Kong Companies: Why a Hong Kong Parent Still Needs Government Approval",
    readMore: { href: "/hong-kong-to-india/india-press-note-3-and-hong-kong-entities", label: "Read the full guide: Press Note 3 and Hong Kong Companies: Why a Hong Kong Parent Still Needs Government Approval" },
    items: [
      { n: 123, id: "does-a-hong-kong-company-need-government-approval-to-invest-", q: "Does a Hong Kong company need government approval to invest in India?", a: "Treat it as yes. India has treated Hong Kong with China for Press Note 3, and after the March 2026 Cabinet decision a DPIIT official was reported to say that firms registered in China and Hong Kong still need prior approval." },
      { n: 124, id: "does-the-2026-easing-help-a-hong-kong-parent", q: "Does the 2026 easing help a Hong Kong parent?", a: "No, as reported. The 10% passive-ownership route is for entities from non-land-border countries with minority land-border beneficial owners." },
      { n: 125, id: "my-hong-kong-company-is-owned-by-non-chinese-shareholders-do", q: "My Hong Kong company is owned by non-Chinese shareholders. Do I still need approval?", a: "The reported government position is that Hong Kong-registered firms need approval. Take written advice from Indian counsel on your facts before assuming otherwise." },
      { n: 126, id: "can-i-invest-through-a-non-hong-kong-group-company-instead", q: "Can I invest through a non-Hong Kong group company instead?", a: "That can change the analysis if the entity is genuine, non-land-border and has no controlling land-border ownership. The structure must be commercial and disclosed." },
      { n: 127, id: "how-long-does-press-note-3-approval-take", q: "How long does Press Note 3 approval take?", a: "Historically months. A 60-day target is reported for specified manufacturing sectors." },
      { n: 128, id: "do-chinese-or-hong-kong-directors-need-clearance", q: "Do Chinese or Hong Kong directors need clearance?", a: "A citizen of a land-border country proposed as a director needs Ministry of Home Affairs security clearance." },
      { n: 129, id: "what-happens-if-i-invest-without-approval", q: "What happens if I invest without approval?", a: "It is a FEMA contravention, with penalties and the possibility of compounding or unwinding. Obtain approval first." },
    ],
  },
  {
    id: "relocate-hong-kong-staff",
    label: "Relocating Hong Kong Staff to India: Visas, Registration and Family",
    readMore: { href: "/hong-kong-to-india/relocate-hong-kong-staff", label: "Read the full guide: Relocating Hong Kong Staff to India: Visas, Registration and Family" },
    items: [
      { n: 130, id: "what-visa-does-a-hong-kong-employee-need-to-work-in-an-india", q: "What visa does a Hong Kong employee need to work in an Indian subsidiary?", a: "An employment visa, with a minimum salary of USD 25,000 a year and an appointment letter from the Indian company. A business visa does not allow productive work." },
      { n: 131, id: "do-hong-kong-staff-need-to-register-in-india", q: "Do Hong Kong staff need to register in India?", a: "A foreign national staying more than 180 days must register with the FRRO within 14 days of arrival." },
      { n: 132, id: "can-i-use-a-business-visa-to-run-the-indian-subsidiary", q: "Can I use a business visa to run the Indian subsidiary?", a: "No. A business visa covers meetings and negotiations, not employment or management work." },
      { n: 133, id: "do-dependants-get-a-visa", q: "Do dependants get a visa?", a: "Yes. Dependant visas follow the employment visa with proof of relationship." },
      { n: 134, id: "does-security-clearance-apply-to-hong-kong-passport-holders", q: "Does security clearance apply to Hong Kong passport holders?", a: "Citizens of land-border countries face extra scrutiny. How it applies to a Hong Kong SAR passport holder should be confirmed with the Indian mission." },
      { n: 135, id: "how-long-do-visas-take", q: "How long do visas take?", a: "Processing varies. Apply well before the start date and confirm the requirements with the consulate." },
      { n: 136, id: "do-i-need-tax-clearance-on-exit", q: "Do I need tax clearance on exit?", a: "Not in every case, but long stays and large equity payouts should be planned with a tax adviser." },
    ],
  },
  {
    id: "repatriating-profits",
    label: "Repatriating Profits from India to Hong Kong: Dividends, Fees, Royalties and Loans",
    readMore: { href: "/hong-kong-to-india/repatriating-profits", label: "Read the full guide: Repatriating Profits from India to Hong Kong: Dividends, Fees, Royalties and Loans" },
    items: [
      { n: 137, id: "what-is-the-withholding-tax-on-dividends-paid-from-india-to-", q: "What is the withholding tax on dividends paid from India to a Hong Kong parent?", a: "5% of the gross amount under the treaty if the Hong Kong company is the beneficial owner and the paperwork is in place. The domestic rate on dividends to non-residents is about 20% plus surcharge and cess." },
      { n: 138, id: "which-forms-do-i-need-to-send-money-to-hong-kong", q: "Which forms do I need to send money to Hong Kong?", a: "Form 145 for the remittance, and Form 146 where a chartered accountant's certificate is needed, along with Form 41 and the tax residency certificate for treaty rates." },
      { n: 139, id: "can-i-pay-a-management-fee-to-hong-kong", q: "Can I pay a management fee to Hong Kong?", a: "Yes if it is for real services at an arm's length price, with Withholding Tax at 10% where treated as fees for technical services under the treaty and GST on reverse charge." },
      { n: 140, id: "can-the-subsidiary-pay-dividends-from-capital", q: "Can the subsidiary pay dividends from capital?", a: "No. Dividends must come from distributable profits as the Companies Act requires." },
      { n: 141, id: "can-i-repay-a-loan-to-hong-kong", q: "Can I repay a loan to Hong Kong?", a: "Yes, following the registered ECB schedule through the bank. Principal is not taxed, but interest is subject to Withholding Tax." },
      { n: 142, id: "are-indian-dividends-taxed-in-hong-kong", q: "Are Indian dividends taxed in Hong Kong?", a: "Generally not as Hong Kong-sourced, but the foreign-sourced income exemption rules can apply to multinational group members that lack economic substance." },
      { n: 143, id: "what-if-the-hong-kong-company-is-only-a-conduit", q: "What if the Hong Kong company is only a conduit?", a: "The principal purpose test and the general anti-avoidance rule can deny treaty relief. Build commercial substance in Hong Kong." },
    ],
  },
  {
    id: "structure-options",
    label: "Structure Options in India for a Hong Kong Company: Subsidiary, LLP, Branch, Liaison, Project Office or JV",
    readMore: { href: "/hong-kong-to-india/structure-options", label: "Read the full guide: Structure Options in India for a Hong Kong Company: Subsidiary, LLP, Branch, Liaison, Project Office or JV" },
    items: [
      { n: 144, id: "what-is-the-best-structure-for-a-hong-kong-company-in-india", q: "What is the best structure for a Hong Kong company in India?", a: "For most, a wholly owned private limited company, because it limits liability and is easy to fund and exit." },
      { n: 145, id: "can-i-use-an-llp", q: "Can I use an LLP?", a: "In sectors with 100% automatic FDI and no performance-linked conditions, subject to the Press Note 3 approval for Hong Kong investors." },
      { n: 146, id: "what-do-i-need-for-a-branch-office", q: "What do I need for a branch office?", a: "A net worth of USD 100,000 and a profit record for the preceding five years, with RBI approval." },
      { n: 147, id: "what-do-i-need-for-a-liaison-office", q: "What do I need for a liaison office?", a: "A net worth of USD 50,000 and a profit record for three years, with RBI approval. It cannot earn income." },
      { n: 148, id: "can-a-liaison-office-sell-products", q: "Can a liaison office sell products?", a: "No. It can only represent the parent, promote exports and imports and communicate." },
      { n: 149, id: "is-a-joint-venture-easier", q: "Is a joint venture easier?", a: "It can open access to a partner and market, but it needs strong governance terms and pricing compliance." },
      { n: 150, id: "how-are-branches-taxed", q: "How are branches taxed?", a: "As foreign companies on Indian profits at the higher foreign company rate, with surcharge and cess; check the current rates." },
    ],
  },
  {
    id: "transfer-pricing",
    label: "Transfer Pricing for Hong Kong Groups in India: Trading Hubs, Re-Invoicing and Services",
    readMore: { href: "/hong-kong-to-india/transfer-pricing", label: "Read the full guide: Transfer Pricing for Hong Kong Groups in India: Trading Hubs, Re-Invoicing and Services" },
    items: [
      { n: 151, id: "does-india-apply-transfer-pricing-to-hong-kong-related-parti", q: "Does India apply transfer pricing to Hong Kong related parties?", a: "Yes. International transactions with associated enterprises, including Hong Kong affiliates, must be at arm's length and documented." },
      { n: 152, id: "can-i-use-a-hong-kong-re-invoicing-company", q: "Can I use a Hong Kong re-invoicing company?", a: "Only with real functions and risk control in Hong Kong. A thin re-invoicing layer can be disallowed or recharacterised." },
      { n: 153, id: "are-management-fees-to-hong-kong-deductible", q: "Are management fees to Hong Kong deductible?", a: "Yes if they are for services actually received at an arm's length price, with Withholding Tax and evidence of benefit." },
      { n: 154, id: "what-report-must-be-filed", q: "What report must be filed?", a: "An accountant's report on international transactions in the prescribed form, by the due date. Check the form number and date under the 2025 Act." },
      { n: 155, id: "do-i-need-a-master-file", q: "Do I need a master file?", a: "Only if the group meets the revenue and transaction thresholds in the rules. Confirm against your numbers." },
      { n: 156, id: "can-i-get-certainty-in-advance", q: "Can I get certainty in advance?", a: "An advance pricing agreement or a safe harbour for eligible transactions can reduce disputes." },
      { n: 157, id: "what-if-both-india-and-hong-kong-tax-the-same-profit", q: "What if both India and Hong Kong tax the same profit?", a: "The treaty's mutual agreement procedure and credit mechanisms can relieve it. Align the documentation on both sides." },
    ],
  },
]

const allFaqs = faqGroups.flatMap((group) => group.items)

export default function HongKongToIndiaFaqPage() {
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
        description="157 plain answers for Hong Kong companies: Press Note 3 approval, incorporation, FEMA, the India-Hong Kong tax treaty, documents, staff, data protection, compliance, repatriation and exit."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "157 FAQs" },
        ]}
      />

      <GuideHero
        eyebrow="FAQ for Hong Kong companies"
        title="157 Questions About Setting Up and Running a Subsidiary in India"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideAnswerBox title="How to use this page">
          The questions are grouped by topic, starting with the decisions before you commit and then following
          each guide in the series. Answers are short; the{" "}
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">complete guide</Link>{" "}
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

        <GuideServiceBox path="/hong-kong-to-india/faq" />
        <GuideCTA
          title="Have a question that is not here?"
          description="Tell us about your plan and we will answer it on a call."
        />

        <p className="mb-10">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Hong Kong
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="A Question the FAQ Doesn't Answer?"
        description="Tell us what is specific to your Hong Kong parent, and we'll answer it directly on a call."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  )
}
