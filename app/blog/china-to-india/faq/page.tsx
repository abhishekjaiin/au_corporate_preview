import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideServiceBox } from "@/components/guide/GuideServiceBox"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/china-to-india/faq"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "general", label: "Before you start: structure, cost and approvals" },
  { id: "chinese-employees-in-india", label: "Chinese Employees in India: Income Tax, Provident Fund and the Missing Social Security Agreement" },
  { id: "chinese-parent-obligations", label: "Chinese Parent Obligations: ODI Filings, Foreign Exchange Registration and Tax Reporting" },
  { id: "common-mistakes", label: "Common Mistakes Chinese Companies Make When Entering India" },
  { id: "compliance-calendar", label: "Compliance Calendar for an Indian Subsidiary of a Chinese Company" },
  { id: "contracts-courts-arbitration", label: "Contracts, Courts and Arbitration: Protecting a Chinese Parent and Enforcing in India" },
  { id: "data-protection-pipl-dpdp", label: "Data Protection for Chinese Companies in India: PIPL Export Rules and India's DPDP Act" },
  { id: "documents-notarisation-legalisation", label: "Documents for an Indian Subsidiary from China: Notary, Chinese Authentication and Indian Embassy Attestation" },
  { id: "exit-and-restructuring", label: "Exit and Restructuring: Selling, Winding Up or Reorganising an Indian Subsidiary Owned from China" },
  { id: "funding-and-fema", label: "Funding the Indian Subsidiary: Equity, ECB Loans and RBI Reporting for Chinese Investors" },
  { id: "hiring-in-india", label: "Hiring in India for a Chinese-Owned Company: Contracts, Provident Fund, Labour Codes and Local Management" },
  { id: "incorporation-steps", label: "Incorporation Steps for a Chinese-Owned Indian Subsidiary: Who Does What" },
  { id: "india-china-dtaa", label: "India-China DTAA: Article-by-Article Guide with Tax Rates, PE and Relief" },
  { id: "india-press-note-3-and-chinese-investors", label: "Press Note 3 and Chinese Investors: Government Approval for an Indian Subsidiary" },
  { id: "manufacturing-and-jv-for-chinese-companies", label: "Manufacturing and Joint Ventures in India for Chinese Companies: Electronics, Components and Capital Goods" },
  { id: "relocate-chinese-staff", label: "Sending Chinese Employees to India: Visas, Security Clearance, FRRO and Practical Planning" },
  { id: "repatriating-profits", label: "Repatriating Profits from India to China: Dividends, Fees, Royalties and Loans" },
  { id: "restricted-sectors-procurement-and-trade", label: "Restricted Sectors, Public Procurement and Trade Rules for Chinese-Linked Companies in India" },
  { id: "structure-options", label: "Subsidiary, Joint Venture, Branch or EOR: Choosing the Structure for a Chinese Investor" },
  { id: "transfer-pricing", label: "Transfer Pricing Between China and India: Form 48, Documentation and Technology Charges" },
]

type FaqItem = { n: number; id: string; q: string; a: string }
type FaqGroup = { id: string; label: string; readMore?: { href: string; label: string }; items: FaqItem[] }

const faqGroups: FaqGroup[] = [
  {
    id: "general",
    label: "Before you start: structure, cost and approvals",
    items: [
      { n: 1, id: "can-a-chinese-company-own-100-of-an-indian-subsidiary", q: "Can a Chinese company own 100% of an Indian subsidiary?", a: "Only with the Government of India's prior approval. Under Press Note 3 (2020), an investor from a country sharing a land border with India, including China, needs approval to invest in any sector. The sector's own cap still applies." },
      { n: 2, id: "did-the-2026-changes-remove-the-need-for-approval-for-chines", q: "Did the 2026 changes remove the need for approval for Chinese investors?", a: "No. The 2026 amendments let a non-land-border investor with up to 10% passive, non-controlling land-border beneficial ownership use the Automatic Route with reporting. An investor incorporated in China still needs approval whatever the amount." },
      { n: 3, id: "does-a-chinese-company-need-to-send-anyone-to-india-to-set-u", q: "Does a Chinese company need to send anyone to India to set up a subsidiary?", a: "No. Filing is online. Directors need Digital Signature Certificates, and Chinese documents go through notarisation, Chinese authentication and Indian mission attestation. A Chinese director needs Ministry of Home Affairs clearance before appointment." },
      { n: 4, id: "how-long-does-it-take-to-set-up-an-indian-subsidiary-from-ch", q: "How long does it take to set up an Indian subsidiary from China?", a: "Incorporation takes four to six weeks from complete documents, but the Press Note 3 approval comes first and can take months, except for a reported 60-day target in specified manufacturing sectors. Plan the approval into the project calendar." },
      { n: 5, id: "what-does-it-cost-to-set-up-a-subsidiary-in-india", q: "What does it cost to set up a subsidiary in India?", a: "AU Corporate's fee for setting up the subsidiary is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about CNY 70,000 at an indicative ₹14.30 per yuan, July 2026 rate). The costing depends on your plan, and it does not include the Press Note 3 approval work, which depends on the sector and structure." },
      { n: 6, id: "is-there-a-minimum-share-capital-for-an-indian-private-limit", q: "Is there a minimum share capital for an Indian private limited company?", a: "No statutory minimum. The practical amount depends on your first 12 to 18 months of costs and on any sector rule." },
      { n: 7, id: "what-is-the-automatic-route", q: "What is the Automatic Route?", a: "The route under the FDI Policy that lets a foreign investor invest in a permitted sector without government approval, subject to reporting to the RBI. It is not available to an investor from a land-border country such as China." },
      { n: 8, id: "which-sectors-restrict-foreign-investment-in-india", q: "Which sectors restrict foreign investment in India?", a: "Some sectors have caps or need approval for all foreign investors, such as defence, insurance, multi-brand retail, some media, and certain financial and telecom activities. Chinese investors face Press Note 3 on top of this." },
      { n: 9, id: "what-is-a-resident-director", q: "What is a Resident Director?", a: "A director who has stayed in India for 182 days or more in the financial year. Every Indian company needs at least one." },
      { n: 10, id: "can-a-chinese-citizen-be-a-director-of-an-indian-company", q: "Can a Chinese citizen be a director of an Indian company?", a: "Yes, once they hold a Director Identification Number and a Digital Signature Certificate, but a citizen of a land-border country needs security clearance from the Ministry of Home Affairs before appointment." },
      { n: 11, id: "what-is-spice", q: "What is SPICe+?", a: "The integrated online incorporation form of the Ministry of Corporate Affairs, which can also apply for PAN, TAN and other registrations together." },
      { n: 12, id: "what-accounting-standards-does-an-indian-subsidiary-follow", q: "What accounting standards does an Indian subsidiary follow?", a: "The Companies Act, 2013 and, above the thresholds, Indian Accounting Standards (Ind AS), which are converged with IFRS. A Chinese parent reporting under Chinese accounting standards or IFRS will need a bridge for consolidation." },
      { n: 13, id: "does-an-indian-subsidiary-need-an-audit", q: "Does an Indian subsidiary need an audit?", a: "Yes. Every company must have its accounts audited by a Chartered Accountant firm each year, whatever its size, and appoint the auditor within 30 days of incorporation." },
      { n: 14, id: "what-corporate-tax-rate-does-an-indian-subsidiary-pay", q: "What corporate tax rate does an Indian subsidiary pay?", a: "Under the concessional regime without incentives, a domestic company pays 22% plus surcharge and cess, about 25.17%. Other regimes and rates apply to specific cases." },
      { n: 15, id: "must-the-indian-subsidiary-register-for-gst", q: "Must the Indian subsidiary register for GST?", a: "Registration is required above turnover thresholds and in some other cases, such as interstate supplies and reverse-charge liabilities. Services exported to the Chinese parent can be zero-rated where the conditions are met." },
      { n: 16, id: "can-the-indian-subsidiary-send-profits-to-china-freely", q: "Can the Indian subsidiary send profits to China freely?", a: "Yes, through dividends, fees, royalties and loan repayments, with the tax and RBI formalities for each route. Payments to Chinese related parties get closer checks, so keep contracts and evidence. See the guide on getting money out of India." },
      { n: 17, id: "is-there-a-tax-treaty-between-india-and-china", q: "Is there a tax treaty between India and China?", a: "Yes, the India-China double taxation agreement signed on 18 July 1994 and in force since November 1994, amended by protocols. It caps Indian tax at 10% on dividends, interest, royalties and fees for technical services. Confirm the current consolidated text." },
      { n: 18, id: "is-there-a-social-security-agreement-between-india-and-china", q: "Is there a social security agreement between India and China?", a: "No. A Chinese employee in India generally falls under the Indian provident fund rules for international workers, so budget for EPF." },
      { n: 19, id: "is-there-an-india-china-free-trade-agreement-or-investment-t", q: "Is there an India-China free trade agreement or investment treaty?", a: "There is no free trade agreement. Whether any investment treaty still protects a Chinese investment in India must be checked on the facts, because India terminated many older treaties from 2016 and 2017." },
      { n: 20, id: "do-chinese-documents-need-an-apostille-for-india", q: "Do Chinese documents need an apostille for India?", a: "No. China joined the Apostille Convention from 7 November 2023, but India objected to its accession, so the Convention does not operate between them. Use notarisation, Chinese authentication and attestation by the Indian Embassy or Consulate." },
      { n: 21, id: "can-the-indian-subsidiary-employ-chinese-nationals", q: "Can the Indian subsidiary employ Chinese nationals?", a: "Yes, with an employment visa (salary floor USD 25,000 a year, with exceptions), security clearance and registration. A business visa is not for hands-on work. See the guide on relocating staff." },
      { n: 22, id: "does-the-chinese-parent-need-approval-in-china", q: "Does the Chinese parent need approval in China?", a: "Generally yes: NDRC, MOFCOM and SAFE approval, filing or registration for outbound investment, depending on the project. New State Council regulations were reported to take effect on 1 July 2026. Confirm with Chinese counsel." },
      { n: 23, id: "who-files-the-rbi-forms-for-the-investment", q: "Who files the RBI forms for the investment?", a: "The Indian subsidiary files Form FC-GPR with its authorised dealer bank and advisers, using the documents the Chinese parent provides. The annual FLA return is filed by 15 July." },
      { n: 24, id: "can-i-close-the-indian-subsidiary-later", q: "Can I close the Indian subsidiary later?", a: "Yes, by strike-off for a dormant company or voluntary liquidation for one with assets, after clearing tax, employee and RBI matters. A Chinese buyer of the shares would itself need Press Note 3 approval." },
    ],
  },
  {
    id: "chinese-employees-in-india",
    label: "Chinese Employees in India: Income Tax, Provident Fund and the Missing Social Security Agreement",
    readMore: { href: "/china-to-india/chinese-employees-in-india", label: "Read the full guide: Chinese Employees in India: Income Tax, Provident Fund and the Missing Social Security Agreement" },
    items: [
      { n: 25, id: "does-a-chinese-employee-in-india-have-to-join-the-provident-", q: "Does a Chinese employee in India have to join the provident fund?", a: "As the EPF rules for international workers are generally applied, a foreign national from a country without a social security agreement is covered and contributions are on full wages. Confirm the current position, as the rule has been litigated." },
      { n: 26, id: "is-a-chinese-employee-s-salary-taxable-in-india", q: "Is a Chinese employee's salary taxable in India?", a: "Salary for work done in India is taxable in India unless the three Article 15 conditions are met, including that the cost is not borne by the Indian subsidiary. A secondee usually fails this." },
      { n: 27, id: "who-deducts-tax-on-the-salary", q: "Who deducts tax on the salary?", a: "The Indian employer, under Section 392 of the Income-tax Act, 2025, by the 7th of the following month." },
      { n: 28, id: "does-china-give-credit-for-indian-tax", q: "Does China give credit for Indian tax?", a: "China gives a credit for Indian tax paid on income taxable in India under the treaty, subject to Chinese rules. A Chinese adviser must confirm the mechanics." },
      { n: 29, id: "can-i-keep-my-chinese-employee-on-the-chinese-payroll-while-", q: "Can I keep my Chinese employee on the Chinese payroll while working in India?", a: "It is possible for short trips. For a long assignment, the work is done for the Indian subsidiary and Indian tax and provident fund normally apply." },
    ],
  },
  {
    id: "chinese-parent-obligations",
    label: "Chinese Parent Obligations: ODI Filings, Foreign Exchange Registration and Tax Reporting",
    readMore: { href: "/china-to-india/chinese-parent-obligations", label: "Read the full guide: Chinese Parent Obligations: ODI Filings, Foreign Exchange Registration and Tax Reporting" },
    items: [
      { n: 30, id: "does-a-chinese-company-need-approval-in-china-to-invest-in-i", q: "Does a Chinese company need approval in China to invest in India?", a: "Generally yes. Outbound investment needs an NDRC approval or filing, a MOFCOM approval or filing and SAFE foreign exchange registration through the bank, depending on the project. Confirm the current rules with Chinese counsel." },
      { n: 31, id: "what-are-the-new-chinese-outbound-investment-regulations", q: "What are the new Chinese outbound investment regulations?", a: "State Council regulations (Order 837) on overseas investment were reported to take effect on 1 July 2026. They sit above the existing departmental rules, which continue to apply." },
      { n: 32, id: "which-approval-comes-first-the-chinese-or-the-indian", q: "Which approval comes first, the Chinese or the Indian?", a: "Prepare both in parallel, but do not remit funds or incorporate until the Indian Press Note 3 approval is received and the Chinese filings allow the transfer." },
      { n: 33, id: "can-i-send-technology-or-engineers-to-india-freely", q: "Can I send technology or engineers to India freely?", a: "Not always. Controlled technology and some equipment transfers may need authorisation in China, and some manufacturers have reported difficulties. Check before planning delivery." },
      { n: 34, id: "how-is-the-indian-subsidiary-s-dividend-taxed-in-china", q: "How is the Indian subsidiary's dividend taxed in China?", a: "Generally taxable, with credit for Indian Withholding Tax and, for qualifying holdings, indirect credit for underlying Indian tax. Your Chinese adviser must confirm the position." },
      { n: 35, id: "do-state-owned-enterprises-face-extra-steps", q: "Do state-owned enterprises face extra steps?", a: "Usually yes. The controlling shareholder or SASAC may need to approve overseas investments." },
    ],
  },
  {
    id: "common-mistakes",
    label: "Common Mistakes Chinese Companies Make When Entering India",
    readMore: { href: "/china-to-india/common-mistakes", label: "Read the full guide: Common Mistakes Chinese Companies Make When Entering India" },
    items: [
      { n: 36, id: "what-is-the-most-common-mistake-chinese-companies-make-in-in", q: "What is the most common mistake Chinese companies make in India?", a: "Investing or incorporating before the Press Note 3 approval, or in a structure that does not match what was approved." },
      { n: 37, id: "can-a-hong-kong-or-singapore-holding-company-avoid-the-appro", q: "Can a Hong Kong or Singapore holding company avoid the approval?", a: "No. The policy looks at beneficial ownership and control. A mis-described structure is a FEMA risk." },
      { n: 38, id: "can-chinese-engineers-work-on-a-business-visa", q: "Can Chinese engineers work on a business visa?", a: "A business visa is for meetings and talks, not hands-on work. Choose the right visa and allow time for clearance." },
      { n: 39, id: "what-do-i-need-before-the-first-dividend-is-paid", q: "What do I need before the first dividend is paid?", a: "A Chinese tax residence certificate, Form 41 and any no-PE declaration the payer requires." },
      { n: 40, id: "where-do-i-start-to-avoid-these-mistakes", q: "Where do I start to avoid these mistakes?", a: "With the Press Note 3 and documents pages, then the compliance calendar and an adviser in each country." },
    ],
  },
  {
    id: "compliance-calendar",
    label: "Compliance Calendar for an Indian Subsidiary of a Chinese Company",
    readMore: { href: "/china-to-india/compliance-calendar", label: "Read the full guide: Compliance Calendar for an Indian Subsidiary of a Chinese Company" },
    items: [
      { n: 41, id: "when-is-the-agm-of-an-indian-subsidiary-due", q: "When is the AGM of an Indian subsidiary due?", a: "Within six months of the 31 March year end, which is by 30 September in most cases." },
      { n: 42, id: "what-is-due-after-the-agm", q: "What is due after the AGM?", a: "AOC-4 (financial statements) within 30 days and MGT-7 (annual return) within 60 days of the AGM." },
      { n: 43, id: "when-is-the-fla-return-due", q: "When is the FLA return due?", a: "By 15 July each year." },
      { n: 44, id: "when-must-tds-be-deposited", q: "When must TDS be deposited?", a: "By the 7th of the month following the deduction, with returns filed quarterly." },
      { n: 45, id: "what-are-the-advance-tax-dates", q: "What are the advance tax dates?", a: "15 June, 15 September, 15 December and 15 March." },
      { n: 46, id: "what-is-the-filing-deadline-for-fc-gpr", q: "What is the filing deadline for FC-GPR?", a: "Within 30 days of allotting shares to the foreign investor." },
      { n: 47, id: "do-approval-conditions-need-tracking", q: "Do approval conditions need tracking?", a: "Yes. If the Press Note 3 approval attached conditions, such as reporting or shareholding terms, track them on the same calendar as statutory filings." },
    ],
  },
  {
    id: "contracts-courts-arbitration",
    label: "Contracts, Courts and Arbitration: Protecting a Chinese Parent and Enforcing in India",
    readMore: { href: "/china-to-india/contracts-courts-arbitration", label: "Read the full guide: Contracts, Courts and Arbitration: Protecting a Chinese Parent and Enforcing in India" },
    items: [
      { n: 48, id: "can-a-hong-kong-or-singapore-arbitral-award-be-enforced-in-i", q: "Can a Hong Kong or Singapore arbitral award be enforced in India?", a: "A foreign award from a notified New York Convention territory can be enforced in India under Part II of the Arbitration and Conciliation Act, 1996, on narrow grounds. Awards made in China, Hong Kong and Macao are covered by a 19 March 2012 notification." },
      { n: 49, id: "can-a-chinese-court-judgment-be-enforced-directly-in-india", q: "Can a Chinese court judgment be enforced directly in India?", a: "As far as we can confirm, no. Mainland China is not on India's list of reciprocating territories, so a Chinese judgment would be evidence in a fresh suit. Confirm with counsel." },
      { n: 50, id: "can-an-indian-judgment-be-enforced-in-china", q: "Can an Indian judgment be enforced in China?", a: "Recognition depends on Chinese procedure rules and reciprocity, which has been hard to show in practice. Arbitration avoids the problem." },
      { n: 51, id: "is-an-unstamped-contract-valid-in-india", q: "Is an unstamped contract valid in India?", a: "It is not void, but it cannot be used as evidence until stamped and any penalty is paid." },
      { n: 52, id: "does-indian-law-still-apply-if-my-contract-is-governed-by-ch", q: "Does Indian law still apply if my contract is governed by Chinese law?", a: "Mandatory Indian laws such as FEMA, the Companies Act and the Press Note 3 conditions still apply to the Indian subsidiary and the investment." },
      { n: 53, id: "is-there-an-investment-treaty-protecting-chinese-investors-i", q: "Is there an investment treaty protecting Chinese investors in India?", a: "It must be checked on the facts. India terminated many older treaties from 2016 and 2017, so do not assume protection." },
    ],
  },
  {
    id: "data-protection-pipl-dpdp",
    label: "Data Protection for Chinese Companies in India: PIPL Export Rules and India's DPDP Act",
    readMore: { href: "/china-to-india/data-protection-pipl-dpdp", label: "Read the full guide: Data Protection for Chinese Companies in India: PIPL Export Rules and India's DPDP Act" },
    items: [
      { n: 54, id: "can-a-chinese-company-send-personal-data-from-china-to-its-i", q: "Can a Chinese company send personal data from China to its Indian subsidiary?", a: "Only through an approved route unless an exemption applies: a security assessment, a standard contract filing or certification, depending on the type and volume of data." },
      { n: 55, id: "does-remote-access-from-india-count-as-an-export-from-china", q: "Does remote access from India count as an export from China?", a: "Generally yes. Access from outside China to data held in China is treated as a transfer, so a route is needed." },
      { n: 56, id: "when-do-india-s-dpdp-duties-start", q: "When do India's DPDP duties start?", a: "The Rules were notified on 13 November 2025 and the main duties take effect on 13 May 2027." },
      { n: 57, id: "what-is-the-penalty-under-the-dpdp-act", q: "What is the penalty under the DPDP Act?", a: "Up to INR 250 crore for serious failures such as inadequate security safeguards." },
      { n: 58, id: "can-indian-user-data-be-accessed-from-china", q: "Can Indian user data be accessed from China?", a: "Legally it can be, subject to the DPDP Act and any customer or sector restrictions, but access is a security concern in India and may be restricted by contract or regulation. Limit and document it." },
      { n: 59, id: "do-indian-app-blocks-affect-a-new-chinese-owned-company", q: "Do Indian app blocks affect a new Chinese-owned company?", a: "Blocks apply to listed apps. A new company is not blocked automatically, but data and security reviews can be strict, so be ready to explain the data location and access." },
      { n: 60, id: "are-the-chinese-transfer-thresholds-fixed", q: "Are the Chinese transfer thresholds fixed?", a: "No. They are cumulative from 1 January each year and the regulations have changed, so confirm the current figures with Chinese counsel." },
    ],
  },
  {
    id: "documents-notarisation-legalisation",
    label: "Documents for an Indian Subsidiary from China: Notary, Chinese Authentication and Indian Embassy Attestation",
    readMore: { href: "/china-to-india/documents-notarisation-legalisation", label: "Read the full guide: Documents for an Indian Subsidiary from China: Notary, Chinese Authentication and Indian Embassy Attestation" },
    items: [
      { n: 61, id: "can-chinese-documents-be-apostilled-for-use-in-india", q: "Can Chinese documents be apostilled for use in India?", a: "No. India objected to China's accession to the Apostille Convention, so the Convention does not apply between them. Use the consular legalisation chain instead." },
      { n: 62, id: "what-is-the-route-for-chinese-documents-to-be-used-in-india", q: "What is the route for Chinese documents to be used in India?", a: "Notarisation by a Chinese notary, authentication by the Ministry of Foreign Affairs or the authorised provincial foreign affairs office, and attestation by the Indian Embassy in Beijing or the Consulates General in Shanghai or Guangzhou." },
      { n: 63, id: "does-the-indian-embassy-check-the-contents-of-the-document", q: "Does the Indian Embassy check the contents of the document?", a: "No. Its attestation covers the seal and signature, and states that the mission is not responsible for the contents." },
      { n: 64, id: "do-i-need-an-english-translation", q: "Do I need an English translation?", a: "Yes. The Registrar and the Indian bank need English. Use a certified translator and keep names consistent." },
      { n: 65, id: "how-long-does-it-take-to-prepare-chinese-documents", q: "How long does it take to prepare Chinese documents?", a: "Plan several weeks for notarisation, authentication and attestation. Confirm current processing times with each office." },
      { n: 66, id: "do-documents-from-hong-kong-follow-the-same-route", q: "Do documents from Hong Kong follow the same route?", a: "Hong Kong and Macao have their own arrangements. Confirm the route with your adviser if a Hong Kong company is in the ownership chain." },
      { n: 67, id: "can-i-sign-the-incorporation-forms-electronically-from-china", q: "Can I sign the incorporation forms electronically from China?", a: "Directors sign with Digital Signature Certificates. The supporting corporate documents still go through the chain above." },
    ],
  },
  {
    id: "exit-and-restructuring",
    label: "Exit and Restructuring: Selling, Winding Up or Reorganising an Indian Subsidiary Owned from China",
    readMore: { href: "/china-to-india/exit-and-restructuring", label: "Read the full guide: Exit and Restructuring: Selling, Winding Up or Reorganising an Indian Subsidiary Owned from China" },
    items: [
      { n: 68, id: "how-can-a-chinese-parent-exit-an-indian-subsidiary", q: "How can a Chinese parent exit an Indian subsidiary?", a: "By selling the shares, buyback, voluntary liquidation or, for a dormant company, strike off. The sale route is the most common." },
      { n: 69, id: "what-pricing-rules-apply-to-a-share-sale", q: "What pricing rules apply to a share sale?", a: "FEMA pricing guidelines apply in both directions: a sale to a non-resident cannot be below fair value and a purchase from a non-resident cannot be above it, supported by a valuation. Confirm the current rule wording." },
      { n: 70, id: "does-a-buyer-from-china-need-approval", q: "Does a buyer from China need approval?", a: "Yes. A buyer that is itself from a land-border country, or whose beneficial owners are above the threshold, needs Press Note 3 approval." },
      { n: 71, id: "how-is-the-gain-taxed-in-india", q: "How is the gain taxed in India?", a: "Long-term gains on unlisted shares held more than 24 months are taxed at 12.5%. Check the treaty position on share gains with your adviser." },
      { n: 72, id: "do-i-need-chinese-approvals-to-sell", q: "Do I need Chinese approvals to sell?", a: "Possibly. Changes to or disposal of an overseas investment can require NDRC, MOFCOM or SAFE filings. Ask Chinese counsel before signing." },
      { n: 73, id: "is-strike-off-available-for-an-active-subsidiary", q: "Is strike off available for an active subsidiary?", a: "No. It is for dormant companies with no assets or liabilities." },
      { n: 74, id: "what-happens-to-employees-on-a-closure", q: "What happens to employees on a closure?", a: "Notice, retrenchment compensation and gratuity rules apply, and state rules may add requirements. Plan these costs before deciding to close." },
    ],
  },
  {
    id: "funding-and-fema",
    label: "Funding the Indian Subsidiary: Equity, ECB Loans and RBI Reporting for Chinese Investors",
    readMore: { href: "/china-to-india/funding-and-fema", label: "Read the full guide: Funding the Indian Subsidiary: Equity, ECB Loans and RBI Reporting for Chinese Investors" },
    items: [
      { n: 75, id: "how-do-i-fund-an-indian-subsidiary-from-china", q: "How do I fund an Indian subsidiary from China?", a: "Remit equity from the parent's own account after the Press Note 3 approval and the Chinese SAFE registration, then allot shares within 60 days and file FC-GPR within 30 days of allotment." },
      { n: 76, id: "does-the-chinese-side-need-to-approve-the-remittance", q: "Does the Chinese side need to approve the remittance?", a: "Yes. Outbound investment needs NDRC and MOFCOM approval or filing and foreign exchange registration through the bank before funds go out. Confirm with Chinese counsel." },
      { n: 77, id: "what-is-the-pricing-rule-for-shares-issued-to-a-chinese-pare", q: "What is the pricing rule for shares issued to a Chinese parent?", a: "At or above fair value, supported by a valuation from a Chartered Accountant or merchant banker." },
      { n: 78, id: "can-the-indian-subsidiary-borrow-from-the-chinese-parent", q: "Can the Indian subsidiary borrow from the Chinese parent?", a: "Yes, as an ECB, within the RBI's rules on lender, maturity and cost, and subject to the Press Note 3 and Chinese rules." },
      { n: 79, id: "what-happens-if-i-miss-the-60-day-allotment-limit", q: "What happens if I miss the 60-day allotment limit?", a: "The funds must be refunded through the same channel, otherwise the receipt is a FEMA contravention to be regularised." },
      { n: 80, id: "is-the-fla-return-required-every-year", q: "Is the FLA return required every year?", a: "Yes. The annual return on foreign liabilities and assets is due by 15 July." },
      { n: 81, id: "can-funds-come-from-a-related-company-that-is-not-the-invest", q: "Can funds come from a related company that is not the investor?", a: "Not safely. Remit from the approved investor's own account, to match the approval and the bank records." },
    ],
  },
  {
    id: "hiring-in-india",
    label: "Hiring in India for a Chinese-Owned Company: Contracts, Provident Fund, Labour Codes and Local Management",
    readMore: { href: "/china-to-india/hiring-in-india", label: "Read the full guide: Hiring in India for a Chinese-Owned Company: Contracts, Provident Fund, Labour Codes and Local Management" },
    items: [
      { n: 82, id: "what-is-the-difference-between-chinese-social-insurance-and-", q: "What is the difference between Chinese social insurance and India's provident fund?", a: "China has mandatory social insurance and housing fund contributions. India's EPF is a retirement and pension scheme for covered employees, with ESI for health cover below a wage ceiling and gratuity on exit." },
      { n: 83, id: "do-i-need-a-written-employment-contract-in-india", q: "Do I need a written employment contract in India?", a: "Yes. Issue a written appointment letter covering role, pay structure, notice, confidentiality and termination, and check state shops and establishment rules." },
      { n: 84, id: "what-is-gratuity", q: "What is gratuity?", a: "A lump sum paid on exit after a minimum period of continuous service, calculated from the last drawn basic pay and years of service." },
      { n: 85, id: "when-did-the-labour-codes-come-into-force", q: "When did the labour codes come into force?", a: "The four labour codes were reported to have come into force on 21 November 2025. Rules and state implementation are still developing, so confirm the current position." },
      { n: 86, id: "do-indian-employees-have-a-trade-union", q: "Do Indian employees have a trade union?", a: "Trade unions exist and may be recognised in larger establishments. There is no statutory structure like a Chinese employee congress, but grievance processes and inspections apply." },
      { n: 87, id: "is-an-employer-of-record-a-long-term-solution", q: "Is an Employer of Record a long-term solution?", a: "Not usually. It suits a pilot. For a stable team a subsidiary gives control, brand and a clean legal position." },
      { n: 88, id: "should-a-chinese-owned-employer-expect-extra-scrutiny", q: "Should a Chinese-owned employer expect extra scrutiny?", a: "Often yes. Keep full records of wages, hours, provident fund and ESI, and written policies, because inspectors and customers look closely at foreign-owned firms." },
    ],
  },
  {
    id: "incorporation-steps",
    label: "Incorporation Steps for a Chinese-Owned Indian Subsidiary: Who Does What",
    readMore: { href: "/china-to-india/incorporation-steps", label: "Read the full guide: Incorporation Steps for a Chinese-Owned Indian Subsidiary: Who Does What" },
    items: [
      { n: 89, id: "how-long-does-it-take-to-incorporate-an-indian-subsidiary-fo", q: "How long does it take to incorporate an Indian subsidiary for a Chinese parent?", a: "Four to six weeks from complete documents, but only after the Press Note 3 approval and the Chinese filings. Add time for approvals and document legalisation." },
      { n: 90, id: "can-i-incorporate-before-press-note-3-approval", q: "Can I incorporate before Press Note 3 approval?", a: "The approval is needed before the investment. Do not incorporate or fund until you have confirmed with Indian counsel that the approval covers the entity and the structure." },
      { n: 91, id: "do-chinese-directors-need-a-clearance", q: "Do Chinese directors need a clearance?", a: "Yes. A citizen of a land-border country proposed as a director needs Ministry of Home Affairs security clearance." },
      { n: 92, id: "who-files-the-rbi-forms", q: "Who files the RBI forms?", a: "The Indian subsidiary files Form FC-GPR within 30 days of allotment, with advisers and the authorised dealer bank, using the documents the Chinese parent provides." },
      { n: 93, id: "what-are-the-two-post-funding-clocks", q: "What are the two post-funding clocks?", a: "Allot shares within 60 days of receiving the funds, and file Form FC-GPR within 30 days of the allotment." },
      { n: 94, id: "what-is-inc-20a", q: "What is INC-20A?", a: "The declaration of commencement of business. File it within 180 days of incorporation, after the share capital is paid in." },
      { n: 95, id: "does-the-bank-treat-a-chinese-owned-company-differently", q: "Does the bank treat a Chinese-owned company differently?", a: "Expect enhanced due diligence on the ownership chain and requests for the approval letter. Prepare the documents early." },
    ],
  },
  {
    id: "india-china-dtaa",
    label: "India-China DTAA: Article-by-Article Guide with Tax Rates, PE and Relief",
    readMore: { href: "/china-to-india/india-china-dtaa", label: "Read the full guide: India-China DTAA: Article-by-Article Guide with Tax Rates, PE and Relief" },
    items: [
      { n: 96, id: "what-is-the-indian-withholding-rate-on-dividends-paid-to-a-c", q: "What is the Indian withholding rate on dividends paid to a Chinese parent under the treaty?", a: "10% of the gross amount, on receipt of the Chinese tax residence certificate, Form 41 and other declarations." },
      { n: 97, id: "what-is-the-treaty-rate-on-royalties-and-technical-fees", q: "What is the treaty rate on royalties and technical fees?", a: "10% of the gross amount under Article 12, where the Chinese company is the beneficial owner and has no PE in India connected with the payment." },
      { n: 98, id: "when-does-a-chinese-company-have-a-permanent-establishment-i", q: "When does a Chinese company have a permanent establishment in India?", a: "Through a fixed place of business, a building site or installation project over 183 days, services through personnel for more than 183 days in a year, or a dependent agent who concludes contracts. Confirm the exact text for your facts." },
      { n: 99, id: "who-gives-relief-from-double-tax", q: "Who gives relief from double tax?", a: "China gives a credit for Indian tax paid on income taxable in India under the treaty, subject to Chinese rules and limits. Keep the Withholding Tax certificate." },
      { n: 100, id: "does-the-treaty-exempt-share-gains", q: "Does the treaty exempt share gains?", a: "Sources differ on Article 13. Domestic law taxes long-term gains on unlisted shares at 12.5%. Confirm the treaty position with the official text before planning an exit." },
      { n: 101, id: "do-i-need-a-certificate-from-the-chinese-tax-office", q: "Do I need a certificate from the Chinese tax office?", a: "Yes. A certificate of tax residence is the basic document for the treaty claim, together with Form 41 and a no-PE declaration." },
      { n: 102, id: "does-press-note-3-apply-even-though-a-treaty-exists", q: "Does Press Note 3 apply even though a treaty exists?", a: "Yes. The treaty deals with tax. Press Note 3 is a separate foreign investment approval rule and applies whatever the treaty says." },
      { n: 103, id: "where-can-i-read-the-treaty-text", q: "Where can I read the treaty text?", a: "On the Income Tax Department of India website under tax treaties, and the Chinese State Taxation Administration site. Use the consolidated version with all protocols." },
    ],
  },
  {
    id: "india-press-note-3-and-chinese-investors",
    label: "Press Note 3 and Chinese Investors: Government Approval for an Indian Subsidiary",
    readMore: { href: "/china-to-india/india-press-note-3-and-chinese-investors", label: "Read the full guide: Press Note 3 and Chinese Investors: Government Approval for an Indian Subsidiary" },
    items: [
      { n: 104, id: "does-a-chinese-company-need-government-approval-to-set-up-an", q: "Does a Chinese company need government approval to set up an Indian subsidiary?", a: "Yes. Under Press Note 3 (2020), an entity of a country sharing a land border with India, including China, needs the Government of India's prior approval to invest, in every sector." },
      { n: 105, id: "what-changed-in-press-note-3-in-2026", q: "What changed in Press Note 3 in 2026?", a: "Cabinet approved amendments on 10 March 2026. A non-land-border investor with passive, non-controlling land-border beneficial ownership of up to 10% can use the Automatic Route with reporting. An investor incorporated in China is not helped by this." },
      { n: 106, id: "can-a-hong-kong-or-singapore-vehicle-avoid-the-approval", q: "Can a Hong Kong or Singapore vehicle avoid the approval?", a: "No. The policy looks at beneficial ownership and control, so a vehicle owned or controlled by Chinese citizens or entities above the threshold is still caught. Get written advice for Hong Kong vehicles." },
      { n: 107, id: "how-long-does-press-note-3-approval-take", q: "How long does Press Note 3 approval take?", a: "Historically several months. A 60-day target is reported for specified manufacturing sectors such as capital goods and electronic components, subject to the final procedure." },
      { n: 108, id: "do-chinese-directors-need-clearance", q: "Do Chinese directors need clearance?", a: "Yes. A citizen of a land-border country proposed as a director needs security clearance from the Ministry of Home Affairs." },
      { n: 109, id: "does-the-10-threshold-apply-to-a-chinese-incorporated-parent", q: "Does the 10% threshold apply to a Chinese-incorporated parent?", a: "No. The 10% test applies to land-border ownership of a non-land-border investor. An investor incorporated in China needs approval whatever the amount." },
      { n: 110, id: "what-happens-if-i-invest-without-approval", q: "What happens if I invest without approval?", a: "The investment is a FEMA contravention, with penalties and the possibility of compounding or unwinding. Always get the approval first." },
    ],
  },
  {
    id: "manufacturing-and-jv-for-chinese-companies",
    label: "Manufacturing and Joint Ventures in India for Chinese Companies: Electronics, Components and Capital Goods",
    readMore: { href: "/china-to-india/manufacturing-and-jv-for-chinese-companies", label: "Read the full guide: Manufacturing and Joint Ventures in India for Chinese Companies: Electronics, Components and Capital Goods" },
    items: [
      { n: 111, id: "which-sectors-have-the-60-day-fast-track-under-the-amended-p", q: "Which sectors have the 60-day fast track under the amended Press Note 3?", a: "Reports name capital goods, electronic capital goods, electronic components, polysilicon and ingot-wafer, and the list can be revised by a committee of secretaries. Check the current notification." },
      { n: 112, id: "does-a-chinese-manufacturer-need-an-indian-partner", q: "Does a Chinese manufacturer need an Indian partner?", a: "Not legally in every sector, but reports say Indian majority ownership and control is expected in the fast-track sectors, so a joint venture is the usual model." },
      { n: 113, id: "can-a-chinese-company-license-technology-to-an-indian-jv", q: "Can a Chinese company license technology to an Indian JV?", a: "Yes, under a written agreement priced at arm's length, subject to Chinese export controls, Indian customs and tax rules, and the Press Note 3 approval conditions." },
      { n: 114, id: "do-production-linked-incentive-schemes-accept-chinese-linked", q: "Do production-linked incentive schemes accept Chinese-linked applicants?", a: "Each scheme has its own conditions and may scrutinise or restrict land-border-country ownership. Read the scheme notice before budgeting." },
      { n: 115, id: "how-should-the-exit-be-planned", q: "How should the exit be planned?", a: "Agree call and put options, valuation and the arbitration seat before entry, and keep within FEMA pricing rules. See the exit guide." },
      { n: 116, id: "can-chinese-engineers-be-sent-to-a-jv-plant", q: "Can Chinese engineers be sent to a JV plant?", a: "Yes, with the right visa and, for Chinese nationals, security clearance. Some manufacturers have reported delays, so plan buffers." },
    ],
  },
  {
    id: "relocate-chinese-staff",
    label: "Sending Chinese Employees to India: Visas, Security Clearance, FRRO and Practical Planning",
    readMore: { href: "/china-to-india/relocate-chinese-staff", label: "Read the full guide: Sending Chinese Employees to India: Visas, Security Clearance, FRRO and Practical Planning" },
    items: [
      { n: 117, id: "can-chinese-engineers-work-on-a-business-visa-in-india", q: "Can Chinese engineers work on a business visa in India?", a: "No. A business visa is for meetings and talks. Hands-on installation or production work needs an employment or project visa." },
      { n: 118, id: "what-is-the-salary-floor-for-an-indian-employment-visa", q: "What is the salary floor for an Indian employment visa?", a: "USD 25,000 a year for skilled roles, with exceptions for some categories." },
      { n: 119, id: "has-india-made-visas-easier-for-chinese-professionals", q: "Has India made visas easier for Chinese professionals?", a: "Press reports in December 2025 described business visas for Chinese professionals being processed in about four weeks and wider e-visa access for company-sponsored staff, but the scope appears limited. Confirm the current procedure." },
      { n: 120, id: "do-chinese-nationals-need-security-clearance", q: "Do Chinese nationals need security clearance?", a: "Applications from Chinese nationals typically receive additional security review, and a Chinese citizen appointed as a director needs Ministry of Home Affairs clearance." },
      { n: 121, id: "is-frro-registration-needed", q: "Is FRRO registration needed?", a: "Yes, within 14 days of arrival for visas of more than 180 days." },
      { n: 122, id: "does-a-long-secondment-create-a-permanent-establishment", q: "Does a long secondment create a permanent establishment?", a: "It can, for example if the person concludes contracts for the Chinese company or the services last more than 183 days in a year. Review each assignment." },
    ],
  },
  {
    id: "repatriating-profits",
    label: "Repatriating Profits from India to China: Dividends, Fees, Royalties and Loans",
    readMore: { href: "/china-to-india/repatriating-profits", label: "Read the full guide: Repatriating Profits from India to China: Dividends, Fees, Royalties and Loans" },
    items: [
      { n: 123, id: "how-is-a-dividend-from-india-taxed-on-its-way-to-a-chinese-p", q: "How is a dividend from India taxed on its way to a Chinese parent?", a: "India withholds at 10% under the treaty on receipt of the Chinese tax residence certificate and Form 41. China generally taxes the receipt with credit for Indian tax, subject to Chinese rules." },
      { n: 124, id: "what-forms-are-needed-to-send-money-from-india-to-china", q: "What forms are needed to send money from India to China?", a: "Form 145 (previously 15CA) and, where required, Form 146 (previously 15CB) for the remittance, plus the treaty documents and the evidence of the underlying transaction." },
      { n: 125, id: "are-management-fees-to-a-chinese-parent-taxable-in-india", q: "Are management fees to a Chinese parent taxable in India?", a: "Fees for managerial, technical or consultancy services are taxable at up to 10% under Article 12 unless the payee has a PE, and the payment must be supported by evidence and arm's length pricing." },
      { n: 126, id: "when-is-withholding-tax-deposited", q: "When is Withholding Tax deposited?", a: "By the 7th of the month following the payment or credit." },
      { n: 127, id: "can-an-indian-subsidiary-repay-a-loan-from-its-chinese-paren", q: "Can an Indian subsidiary repay a loan from its Chinese parent at any time?", a: "Principal repayment follows the ECB agreement and the RBI's minimum maturity. Early repayment before the minimum maturity needs care." },
      { n: 128, id: "why-are-payments-to-chinese-related-parties-scrutinised", q: "Why are payments to Chinese related parties scrutinised?", a: "Banks and tax officers apply closer checks to such outflows. Keep a contract, proof of service and a benchmark for each payment." },
      { n: 129, id: "does-the-press-note-3-approval-affect-repatriation", q: "Does the Press Note 3 approval affect repatriation?", a: "If the approval contains conditions, such as technology or sourcing commitments, repatriation must not breach them. Review the approval letter before agreeing payments." },
    ],
  },
  {
    id: "restricted-sectors-procurement-and-trade",
    label: "Restricted Sectors, Public Procurement and Trade Rules for Chinese-Linked Companies in India",
    readMore: { href: "/china-to-india/restricted-sectors-procurement-and-trade", label: "Read the full guide: Restricted Sectors, Public Procurement and Trade Rules for Chinese-Linked Companies in India" },
    items: [
      { n: 130, id: "does-a-chinese-owned-indian-company-face-restrictions-on-gov", q: "Does a Chinese-owned Indian company face restrictions on government contracts?", a: "Bidders from land-border countries must register with a competent authority before bidding for central government contracts under the 2020 procurement rules. Check the current rule and any state conditions." },
      { n: 131, id: "are-chinese-apps-blocked-in-india", q: "Are Chinese apps blocked in India?", a: "Many Chinese-linked apps have been blocked under Section 69A of the IT Act since 2020. A new product is not automatically blocked but may face security and data questions." },
      { n: 132, id: "do-anti-dumping-duties-apply-to-imports-from-china", q: "Do anti-dumping duties apply to imports from China?", a: "Many products from China face anti-dumping or safeguard duties notified by the customs authority. Check the list for your inputs." },
      { n: 133, id: "is-there-a-free-trade-agreement-between-india-and-china", q: "Is there a free trade agreement between India and China?", a: "No. No preference applies, so normal customs duty and any trade remedies apply." },
      { n: 134, id: "are-chinese-linked-companies-scrutinised-by-indian-agencies", q: "Are Chinese-linked companies scrutinised by Indian agencies?", a: "Press reports describe investigations into several such companies. Keep full records and respond to notices promptly." },
      { n: 135, id: "where-should-i-start", q: "Where should I start?", a: "With the sector, Press Note 3 and procurement checks, then the structure and partner." },
    ],
  },
  {
    id: "structure-options",
    label: "Subsidiary, Joint Venture, Branch or EOR: Choosing the Structure for a Chinese Investor",
    readMore: { href: "/china-to-india/structure-options", label: "Read the full guide: Subsidiary, Joint Venture, Branch or EOR: Choosing the Structure for a Chinese Investor" },
    items: [
      { n: 136, id: "which-structure-suits-a-chinese-company-entering-india", q: "Which structure suits a Chinese company entering India?", a: "A private limited company, wholly owned or as a joint venture with an Indian partner, is the most common. All routes need government approval where the investor is Chinese." },
      { n: 137, id: "can-a-chinese-company-open-a-branch-office-in-india", q: "Can a Chinese company open a branch office in India?", a: "Yes, with RBI approval, a net worth of USD 100,000 and a five-year profit record, plus a security review for land-border-country applicants." },
      { n: 138, id: "what-can-a-liaison-office-do", q: "What can a liaison office do?", a: "Liaison and market research only, with no income or invoicing. It needs RBI approval and USD 50,000 net worth with a three-year record." },
      { n: 139, id: "is-an-employer-of-record-a-way-around-press-note-3", q: "Is an Employer of Record a way around Press Note 3?", a: "No. It is a hiring vehicle for a pilot. If the real business is in a restricted sector or Chinese-controlled, the approval requirement still applies." },
      { n: 140, id: "does-a-joint-venture-with-an-indian-partner-avoid-press-note", q: "Does a joint venture with an Indian partner avoid Press Note 3?", a: "No. The Chinese stake still needs approval. A structure with Indian majority ownership and control may help in the fast-track sectors." },
      { n: 141, id: "can-i-use-a-hong-kong-or-singapore-holding-company", q: "Can I use a Hong Kong or Singapore holding company?", a: "It does not avoid Press Note 3 where Chinese beneficial ownership or control exists, and mis-describing the structure is a FEMA risk." },
    ],
  },
  {
    id: "transfer-pricing",
    label: "Transfer Pricing Between China and India: Form 48, Documentation and Technology Charges",
    readMore: { href: "/china-to-india/transfer-pricing", label: "Read the full guide: Transfer Pricing Between China and India: Form 48, Documentation and Technology Charges" },
    items: [
      { n: 142, id: "does-india-have-a-small-company-exemption-from-transfer-pric", q: "Does India have a small-company exemption from transfer pricing?", a: "No. Form 48 is needed for any international transaction with an associated enterprise, whatever the value. Detailed documentation applies above prescribed thresholds that your adviser should confirm each year." },
      { n: 143, id: "what-is-form-48", q: "What is Form 48?", a: "The accountant's report on international transactions, previously Form 3CEB, filed with the tax return under the Income-tax Act, 2025." },
      { n: 144, id: "how-are-components-bought-from-a-chinese-parent-priced", q: "How are components bought from a Chinese parent priced?", a: "At arm's length, usually with the resale price, cost plus or comparable price method, with documents that also support the customs value." },
      { n: 145, id: "can-customs-value-and-transfer-price-differ", q: "Can customs value and transfer price differ?", a: "They can, but the authorities may test both. Keep the same documents and explain differences." },
      { n: 146, id: "can-a-chinese-parent-charge-a-royalty-to-its-indian-subsidia", q: "Can a Chinese parent charge a royalty to its Indian subsidiary?", a: "Yes, at arm's length, under a written licence and within the 10% treaty rate for withholding. The payment must be supported by a benchmark and by evidence that the technology is used." },
      { n: 147, id: "what-happens-if-india-adjusts-the-price", q: "What happens if India adjusts the price?", a: "Indian income rises, penalty may apply, and the Chinese side may seek relief under the mutual agreement procedure of the treaty." },
    ],
  },
]

const allFaqs = faqGroups.flatMap((group) => group.items)

export default function ChinaToIndiaFaqPage() {
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
        headline="147 Questions About Setting Up and Running a Subsidiary in India"
        description="147 plain answers for Chinese companies: Press Note 3 approval, incorporation, FEMA, the India-China tax treaty, documents, staff, data protection, compliance, repatriation and exit."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "147 FAQs" },
        ]}
      />

      <GuideHero
        eyebrow="FAQ for Chinese companies"
        title="147 Questions About Setting Up and Running a Subsidiary in India"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideAnswerBox title="How to use this page">
          The questions are grouped by topic, starting with the decisions before you commit and then following
          each guide in the series. Answers are short; the{" "}
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">complete guide</Link>{" "}
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

        <GuideServiceBox path="/china-to-india/faq" />
        <GuideCTA
          title="Have a question that is not here?"
          description="Tell us about your plan and we will answer it on a call."
        />

        <p className="mb-10">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Chinese
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="A Question the FAQ Doesn't Answer?"
        description="Tell us what is specific to your Chinese parent, and we'll answer it directly on a call."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  )
}
