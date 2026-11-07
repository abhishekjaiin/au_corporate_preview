import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideServiceBox } from "@/components/guide/GuideServiceBox"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/australia-to-india/faq"
const HUB_URL = "https://www.theaucorp.com/australia-to-india"

const toc = [
  { id: "deciding-on-india", label: "Deciding on India from Australia" },
  { id: "ownership-board", label: "Ownership, the board and control" },
  { id: "banking-registrations", label: "Banking, registrations and first hires" },
  { id: "tax-basics", label: "Tax basics for an Australian parent" },
  { id: "growth", label: "Growth and new investment" },
  { id: "disputes-exit", label: "Disputes and exit" },
  { id: "incorporation-process", label: "Incorporation Process for an Indian Subsidiary, Step by Step" },
  { id: "subsidiary-vs-branch-vs-liaison-office-vs-llp", label: "Subsidiary vs Branch vs Liaison Office vs LLP in India" },
  { id: "resident-director", label: "Resident Director Requirement for an Indian Company" },
  { id: "funding-fema-fc-gpr", label: "Funding an Indian Subsidiary: FEMA and Form FC-GPR" },
  { id: "share-valuation", label: "Share Valuation for Foreign Investment in India" },
  { id: "eor-vs-subsidiary", label: "EOR vs Subsidiary in India: Which Is Right for an Australian Company?" },
  { id: "hiring-and-payroll", label: "Hiring in India: Contracts, Payroll and Statutory Compliance" },
  { id: "expat-visa", label: "Sending an Australian Executive to India: Visa, Housing and Tax" },
  { id: "esop", label: "ESOPs for Indian Employees of an Australian Parent Company" },
  { id: "transfer-pricing", label: "Transfer Pricing in India for Australian-Owned Subsidiaries" },
  { id: "repatriating-profits", label: "Repatriating Profits from India to Australia: Forms and Tax" },
  { id: "compliance-calendar", label: "India Subsidiary Compliance Calendar for Australian Companies" },
  { id: "audit-icofr", label: "Audit and Internal Controls (ICOFR) for Indian Subsidiaries of Australian Companies" },
  { id: "tax-notices-and-litigation", label: "Handling Indian Tax Notices and Disputes for an Australian-Owned Subsidiary" },
  { id: "contracts-and-arbitration", label: "Contracts and Arbitration in India for Australian Companies" },
  { id: "restructuring-and-exit", label: "Restructuring, Mergers and Exit for an Indian Subsidiary" },
  { id: "common-mistakes", label: "13 Common Mistakes Australian Companies Make Setting Up in India" },
  { id: "documents-and-apostille", label: "Documents and Apostille for an India Subsidiary (Australian Parent)" },
  { id: "dtaa-pe-risk", label: "India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk" },
  { id: "india-australia-dtaa", label: "India-Australia DTAA: A Guide to the Tax Treaty for Australian Companies" },
  { id: "foreign-employee-treaty-ssa", label: "Treaty and Social Security for Foreign Employees in India: DTAA Article 15 and the India-Australia SSA" },
  { id: "australian-parent-obligations", label: "Australian Parent Reporting for an Indian Subsidiary: CFC Rules, IDS and More" },
  { id: "global-vat", label: "Global VAT and GST for Australian Companies Selling Abroad" },
]

type FaqItem = { n: number; id: string; q: string; a: string }
type FaqGroup = { id: string; label: string; readMore?: { href: string; label: string }; items: FaqItem[] }

const faqGroups: FaqGroup[] = [
  {
    id: "deciding-on-india",
    label: "Deciding on India from Australia",
    items: [
      { n: 1, id: "why-do-australian-companies-set-up-in-india", q: "Why do Australian companies set up in India?", a: "For engineering, technology and finance talent, time-zone overlap with Australian afternoons, a growing Indian market, and sourcing under the India-Australia trade agreement." },
      { n: 2, id: "which-indian-cities-do-australian-companies-choose", q: "Which Indian cities do Australian companies choose?", a: "Bengaluru, Hyderabad, Pune, Chennai, Mumbai and Delhi NCR are common, depending on talent and customers." },
      { n: 3, id: "what-does-the-india-australia-ecta-change-for-investors", q: "What does the India-Australia ECTA change for investors?", a: "It has cut tariffs on many goods since 29 December 2022, but it does not change India's FDI rules or company law." },
      { n: 4, id: "does-an-australian-company-need-government-approval-to-inves", q: "Does an Australian company need government approval to invest in India?", a: "Not in most sectors; investment is on the Automatic Route and Press Note 3 does not apply to Australia." },
      { n: 5, id: "can-an-australian-company-test-india-before-setting-up", q: "Can an Australian company test India before setting up?", a: "Yes, through an employer of record for a small team or a liaison office for representation." },
      { n: 6, id: "how-much-time-should-be-planned-for-the-whole-setup", q: "How much time should be planned for the whole setup?", a: "About two months from the decision to an operating company, with incorporation taking 4 to 6 weeks once documents arrive." },
      { n: 7, id: "is-there-a-ceca-between-india-and-australia", q: "Is there a CECA between India and Australia?", a: "A broader Comprehensive Economic Cooperation Agreement has been under negotiation to build on the ECTA." },
      { n: 8, id: "can-an-australian-trust-or-partnership-invest-in-india", q: "Can an Australian trust or partnership invest in India?", a: "It can, but the investor's legal form affects FEMA reporting and treaty access, so confirm the structure first." },
      { n: 9, id: "do-indian-filings-need-to-be-in-english", q: "Do Indian filings need to be in English?", a: "Yes. Indian company filings are in English, which suits Australian documents." },
      { n: 10, id: "can-an-australian-start-up-set-up-in-india", q: "Can an Australian start-up set up in India?", a: "Yes. There is no minimum capital, and an indicative incorporation fee of USD 750 to USD 1,000 applies for capital up to ₹10 lakh." },
      { n: 11, id: "what-should-the-australian-board-decide-first", q: "What should the Australian board decide first?", a: "The Indian company's activity, who will be the resident director, the first capital, and how profits will return to Australia." },
    ],
  },
  {
    id: "ownership-board",
    label: "Ownership, the board and control",
    items: [
      { n: 12, id: "how-many-shareholders-are-needed", q: "How many shareholders are needed?", a: "At least two; a group company or nominee usually holds one share alongside the Australian parent." },
      { n: 13, id: "how-many-directors-are-needed", q: "How many directors are needed?", a: "At least two, one of whom has stayed in India for 182 days or more in the financial year." },
      { n: 14, id: "can-australian-based-directors-sit-on-the-indian-board", q: "Can Australian-based directors sit on the Indian board?", a: "Yes. Only one director needs to meet the Indian residence test." },
      { n: 15, id: "how-does-the-australian-parent-control-the-indian-company", q: "How does the Australian parent control the Indian company?", a: "Through its right as shareholder to appoint and remove directors, plus reserved matters in the articles." },
      { n: 16, id: "can-the-parent-require-approval-for-large-spending", q: "Can the parent require approval for large spending?", a: "Yes, through reserved matters, an authority matrix and bank mandate limits." },
      { n: 17, id: "can-board-meetings-be-held-by-video-from-australia", q: "Can board meetings be held by video from Australia?", a: "Yes, with the required quorum and minutes." },
      { n: 18, id: "is-a-common-seal-needed", q: "Is a common seal needed?", a: "No. Indian companies are not required to use a common seal." },
      { n: 19, id: "who-signs-contracts-for-the-indian-company", q: "Who signs contracts for the Indian company?", a: "Directors or officers authorised by board resolution or power of attorney." },
      { n: 20, id: "do-indian-directors-have-personal-liability", q: "Do Indian directors have personal liability?", a: "Some statutory defaults carry personal liability, so directors need clear processes and insurance." },
      { n: 21, id: "can-the-australian-constitution-be-reused", q: "Can the Australian constitution be reused?", a: "No. The Indian company has its own memorandum and articles, though reserved matters can follow group policy." },
      { n: 22, id: "should-directors-and-officers-insurance-cover-india", q: "Should directors and officers insurance cover India?", a: "Yes, either through the group policy or a local policy." },
    ],
  },
  {
    id: "banking-registrations",
    label: "Banking, registrations and first hires",
    items: [
      { n: 23, id: "which-banks-do-australian-subsidiaries-use-in-india", q: "Which banks do Australian subsidiaries use in India?", a: "Indian banks for local payments, often alongside banks with Australian relationships for treasury." },
      { n: 24, id: "what-does-the-bank-need-from-the-australian-parent", q: "What does the bank need from the Australian parent?", a: "KYC on the parent and its beneficial owners, the board resolution and identity documents of signatories." },
      { n: 25, id: "which-registrations-follow-incorporation", q: "Which registrations follow incorporation?", a: "GST where required, provident fund and ESI as the team grows, professional tax in some states and shops and establishments registration." },
      { n: 26, id: "when-is-gst-registration-needed", q: "When is GST registration needed?", a: "Above the turnover threshold, and immediately for exports of services and certain other supplies." },
      { n: 27, id: "when-can-the-first-employee-be-hired", q: "When can the first employee be hired?", a: "Once the company is incorporated and payroll and bank accounts are set up." },
      { n: 28, id: "do-indian-employees-need-written-contracts", q: "Do Indian employees need written contracts?", a: "Yes, setting out pay, hours, leave and notice under the labour codes." },
      { n: 29, id: "can-an-australian-secondee-start-before-the-visa", q: "Can an Australian secondee start before the visa?", a: "No. An Employment Visa is needed before productive work starts." },
      { n: 30, id: "is-a-registered-office-needed-before-incorporation", q: "Is a registered office needed before incorporation?", a: "Yes, an address with proof; a serviced office can be used initially." },
      { n: 31, id: "what-is-a-tan", q: "What is a TAN?", a: "The number used to deduct and deposit tax, issued at incorporation." },
      { n: 32, id: "can-payroll-be-run-from-australia", q: "Can payroll be run from Australia?", a: "Indian payroll applies Indian tax and social security rules, so it is run in India with reporting to Australia." },
      { n: 33, id: "how-long-does-bank-account-opening-take", q: "How long does bank account opening take?", a: "Usually one to three weeks after incorporation." },
    ],
  },
  {
    id: "tax-basics",
    label: "Tax basics for an Australian parent",
    items: [
      { n: 34, id: "what-is-the-indian-corporate-tax-rate", q: "What is the Indian corporate tax rate?", a: "About 25.17% including surcharge and cess under the concessional regime for domestic companies." },
      { n: 35, id: "does-the-australian-parent-pay-indian-tax", q: "Does the Australian parent pay Indian tax?", a: "On Indian-source dividends, interest, royalties and fees through withholding, or on business profits if it has a PE in India." },
      { n: 36, id: "what-treaty-rate-applies-to-interest-paid-to-australia", q: "What treaty rate applies to interest paid to Australia?", a: "Up to 15% under the India-Australia treaty." },
      { n: 37, id: "are-services-exported-to-australia-subject-to-gst", q: "Are services exported to Australia subject to GST?", a: "Exports of services meeting the conditions are zero-rated in India." },
      { n: 38, id: "is-gst-due-on-fees-paid-to-the-australian-parent", q: "Is GST due on fees paid to the Australian parent?", a: "Usually yes, under reverse charge in India, with input credit where eligible." },
      { n: 39, id: "do-australian-cfc-rules-affect-the-indian-subsidiary", q: "Do Australian CFC rules affect the Indian subsidiary?", a: "They must be considered, but active income of an operating Indian company is generally outside attributable income." },
      { n: 40, id: "when-is-indian-advance-tax-paid", q: "When is Indian advance tax paid?", a: "On 15 June, 15 September, 15 December and 15 March." },
      { n: 41, id: "can-indian-tax-losses-be-carried-forward", q: "Can Indian tax losses be carried forward?", a: "Business losses generally for eight years, if returns are filed on time." },
      { n: 42, id: "is-there-tax-on-dividends-paid-by-the-indian-company-itself", q: "Is there tax on dividends paid by the Indian company itself?", a: "No. The company withholds tax on dividends to the Australian parent, and the shareholder bears it." },
      { n: 43, id: "what-is-the-service-pe-test-under-the-treaty", q: "What is the service PE test under the treaty?", a: "Services furnished in India by personnel for more than 183 days in any 12-month period." },
      { n: 44, id: "where-is-the-treaty-claimed", q: "Where is the treaty claimed?", a: "With an ATO certificate of residency and Form 41 given to the Indian payer." },
    ],
  },
  {
    id: "growth",
    label: "Growth and new investment",
    items: [
      { n: 45, id: "how-does-the-parent-add-capital-later", q: "How does the parent add capital later?", a: "Through a further share issue at no less than fair value, allotted within 60 days and reported in FC-GPR." },
      { n: 46, id: "can-the-indian-company-invest-in-another-indian-company", q: "Can the Indian company invest in another Indian company?", a: "Yes, as downstream investment under FEMA pricing and reporting rules." },
      { n: 47, id: "can-the-subsidiary-open-offices-in-other-states", q: "Can the subsidiary open offices in other states?", a: "Yes, with GST and labour registrations in each state." },
      { n: 48, id: "can-the-indian-company-export-services-to-australian-custome", q: "Can the Indian company export services to Australian customers directly?", a: "Yes, at arm's length if the customers are related, with zero-rated GST where conditions are met." },
      { n: 49, id: "can-the-subsidiary-borrow-locally", q: "Can the subsidiary borrow locally?", a: "Yes, from Indian banks, often with a parent guarantee that needs transfer pricing support." },
      { n: 50, id: "can-indian-employees-join-the-australian-share-plan", q: "Can Indian employees join the Australian share plan?", a: "Yes, subject to Indian tax, FEMA and Australian securities law." },
      { n: 51, id: "can-the-subsidiary-import-goods-from-australia-at-ecta-rates", q: "Can the subsidiary import goods from Australia at ECTA rates?", a: "Yes, if the goods meet the agreement's rules of origin and are supported by origin documents." },
      { n: 52, id: "does-a-capital-increase-need-a-new-valuation", q: "Does a capital increase need a new valuation?", a: "Yes, each issue to the Australian parent needs one." },
      { n: 53, id: "can-the-australian-parent-guarantee-the-subsidiary-s-bank-lo", q: "Can the Australian parent guarantee the subsidiary's bank loans?", a: "Yes, subject to FEMA rules and an arm's length guarantee fee." },
      { n: 54, id: "can-the-subsidiary-acquire-an-indian-business", q: "Can the subsidiary acquire an Indian business?", a: "Yes, by share or asset purchase, with FEMA, tax and competition checks." },
      { n: 55, id: "can-profits-be-reinvested-instead-of-paid-as-dividends", q: "Can profits be reinvested instead of paid as dividends?", a: "Yes. Retained profits stay in the subsidiary with no further Indian tax until distributed." },
    ],
  },
  {
    id: "disputes-exit",
    label: "Disputes and exit",
    items: [
      { n: 56, id: "how-are-disputes-with-indian-customers-usually-resolved", q: "How are disputes with Indian customers usually resolved?", a: "By arbitration, often seated in Singapore or India, because Australian court judgments are not directly executable in India." },
      { n: 57, id: "can-a-joint-venture-partner-be-bought-out", q: "Can a joint venture partner be bought out?", a: "Yes, at no less than fair value under FEMA, reported in Form FC-TRS." },
      { n: 58, id: "what-happens-if-the-subsidiary-stops-trading", q: "What happens if the subsidiary stops trading?", a: "It must keep filing until it is struck off or liquidated." },
      { n: 59, id: "how-long-does-a-strike-off-take", q: "How long does a strike-off take?", a: "Usually three to six months after filing Form STK-2." },
      { n: 60, id: "can-capital-be-returned-without-closing-the-company", q: "Can capital be returned without closing the company?", a: "Through a buyback or capital reduction within company-law limits, or dividends from profits." },
      { n: 61, id: "does-selling-the-indian-company-need-rbi-approval", q: "Does selling the Indian company need RBI approval?", a: "Usually not; the sale follows FEMA pricing and is reported in Form FC-TRS." },
      { n: 62, id: "is-the-australian-gain-on-sale-taxed", q: "Is the Australian gain on sale taxed?", a: "Possibly reduced under the active foreign business asset reduction in Subdivision 768-G." },
      { n: 63, id: "can-two-indian-group-companies-merge", q: "Can two Indian group companies merge?", a: "Yes, through a tribunal scheme or the fast-track route for a wholly owned subsidiary." },
      { n: 64, id: "what-happens-to-employees-on-closure", q: "What happens to employees on closure?", a: "Their dues, including gratuity, must be paid before the company can close." },
      { n: 65, id: "who-handles-the-final-remittance-to-australia", q: "Who handles the final remittance to Australia?", a: "The Indian bank, with Forms 145 and 146 and an RBI report." },
    ],
  },
  {
    id: "incorporation-process",
    label: "Incorporation Process for an Indian Subsidiary, Step by Step",
    readMore: { href: "/australia-to-india/incorporation-process", label: "Read the full guide: Incorporation Process for an Indian Subsidiary, Step by Step" },
    items: [
      { n: 66, id: "how-long-does-incorporation-take-from-australia", q: "How long does incorporation take from Australia?", a: "Usually 4 to 6 weeks from receipt of the apostilled documents in India." },
      { n: 67, id: "who-apostilles-australian-documents", q: "Who apostilles Australian documents?", a: "The Department of Foreign Affairs and Trade, through one federal process." },
      { n: 68, id: "what-australian-documents-are-needed", q: "What Australian documents are needed?", a: "An ASIC company extract, the constitution, a board resolution and directors' identity documents." },
      { n: 69, id: "why-must-the-acn-match", q: "Why must the ACN match?", a: "Indian forms and the bank compare the legal name and ACN with the ASIC extract, and differences cause queries." },
      { n: 70, id: "do-australian-directors-need-to-visit-india", q: "Do Australian directors need to visit India?", a: "No. They sign with digital signatures obtained using apostilled identity documents." },
      { n: 71, id: "does-an-australian-investor-need-government-approval", q: "Does an Australian investor need government approval?", a: "Not in most sectors; Press Note 3 does not apply." },
      { n: 72, id: "what-is-the-best-time-for-calls-with-india", q: "What is the best time for calls with India?", a: "Australian early afternoon, which is Indian morning." },
      { n: 73, id: "what-follows-incorporation", q: "What follows incorporation?", a: "Bank account, capital remittance, allotment, FC-GPR, first auditor, INC-20A and registrations." },
    ],
  },
  {
    id: "subsidiary-vs-branch-vs-liaison-office-vs-llp",
    label: "Subsidiary vs Branch vs Liaison Office vs LLP in India",
    readMore: { href: "/australia-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp", label: "Read the full guide: Subsidiary vs Branch vs Liaison Office vs LLP in India" },
    items: [
      { n: 74, id: "what-structure-do-most-australian-companies-use-in-india", q: "What structure do most Australian companies use in India?", a: "A private limited subsidiary, wholly owned or as a joint venture." },
      { n: 75, id: "are-indian-branch-profits-taxed-in-australia", q: "Are Indian branch profits taxed in Australia?", a: "They may be non-assessable under section 23AH, subject to conditions, but they are taxed in India at the foreign company rate." },
      { n: 76, id: "are-dividends-from-an-indian-subsidiary-taxed-in-australia", q: "Are dividends from an Indian subsidiary taxed in Australia?", a: "Generally not for a company with at least a 10% voting interest; they are non-assessable non-exempt income under section 768-5." },
      { n: 77, id: "does-a-branch-need-approval", q: "Does a branch need approval?", a: "Yes, from the RBI through an authorised dealer bank, with track-record conditions." },
      { n: 78, id: "can-a-liaison-office-earn-income", q: "Can a liaison office earn income?", a: "No. It can only represent the Australian company and promote its business." },
      { n: 79, id: "does-the-trade-agreement-change-entity-choice", q: "Does the trade agreement change entity choice?", a: "No. The India-Australia ECTA mainly cuts goods tariffs." },
      { n: 80, id: "can-an-australian-company-own-100-of-an-indian-subsidiary", q: "Can an Australian company own 100% of an Indian subsidiary?", a: "Yes, in most sectors under the Automatic Route." },
      { n: 81, id: "is-an-llp-a-good-option", q: "Is an LLP a good option?", a: "Rarely for Australian groups; foreign investment is limited to eligible sectors and the Australian treatment needs review." },
    ],
  },
  {
    id: "resident-director",
    label: "Resident Director Requirement for an Indian Company",
    readMore: { href: "/australia-to-india/resident-director", label: "Read the full guide: Resident Director Requirement for an Indian Company" },
    items: [
      { n: 82, id: "can-an-australian-be-the-resident-director", q: "Can an Australian be the resident director?", a: "Yes, if he or she is in India for 182 days or more in the Indian financial year." },
      { n: 83, id: "which-year-is-the-182-day-test-counted-over", q: "Which year is the 182-day test counted over?", a: "The Indian financial year, 1 April to 31 March." },
      { n: 84, id: "what-do-most-australian-parents-do", q: "What do most Australian parents do?", a: "Appoint the Indian country manager or a professional resident director, because Australian executives rarely spend 182 days in India." },
      { n: 85, id: "does-a-professional-resident-director-control-the-bank-accou", q: "Does a professional resident director control the bank account?", a: "No. A professional director signs statutory documents only." },
      { n: 86, id: "can-a-resident-director-become-tax-resident-in-both-countrie", q: "Can a resident director become tax resident in both countries?", a: "Yes. Article 4 of the India-Australia treaty then decides residence for treaty purposes." },
      { n: 87, id: "what-do-australian-non-resident-directors-need", q: "What do Australian non-resident directors need?", a: "A DIN and Digital Signature Certificate obtained with a DFAT-apostilled passport and address proof." },
      { n: 88, id: "when-is-director-kyc-due", q: "When is director KYC due?", a: "By 30 September each year, for every director with a DIN." },
      { n: 89, id: "how-many-directors-does-the-company-need", q: "How many directors does the company need?", a: "At least two, one of whom meets the residence test." },
    ],
  },
  {
    id: "funding-fema-fc-gpr",
    label: "Funding an Indian Subsidiary: FEMA and Form FC-GPR",
    readMore: { href: "/australia-to-india/funding-fema-fc-gpr", label: "Read the full guide: Funding an Indian Subsidiary: FEMA and Form FC-GPR" },
    items: [
      { n: 90, id: "can-the-australian-parent-send-australian-dollars", q: "Can the Australian parent send Australian dollars?", a: "Yes. The Indian bank converts Australian or US dollars into rupees and issues the foreign inward remittance certificate." },
      { n: 91, id: "how-long-does-the-indian-company-have-to-allot-shares", q: "How long does the Indian company have to allot shares?", a: "60 days from the date the money is credited; otherwise it must be refunded to Australia within the following 15 days." },
      { n: 92, id: "when-is-fc-gpr-filed", q: "When is FC-GPR filed?", a: "Within 30 days of the share allotment, on the RBI's FIRMS portal." },
      { n: 93, id: "does-press-note-3-apply-to-an-australian-investor", q: "Does Press Note 3 apply to an Australian investor?", a: "No, unless a beneficial owner in the ownership chain is from a country sharing a land border with India." },
      { n: 94, id: "what-is-the-indian-tax-on-interest-paid-to-australia", q: "What is the Indian tax on interest paid to Australia?", a: "Up to 15% under the India-Australia treaty, with an ATO certificate of residency and Form 41." },
      { n: 95, id: "is-there-a-limit-on-interest-deductions-in-india", q: "Is there a limit on interest deductions in India?", a: "Yes. Interest on debt from non-resident associated enterprises is deductible only up to 30% of EBITDA." },
      { n: 96, id: "is-a-minimum-capital-required", q: "Is a minimum capital required?", a: "No. Plan enough to cover 12 to 18 months of the subsidiary's costs." },
      { n: 97, id: "what-does-a-late-fc-gpr-cost", q: "What does a late FC-GPR cost?", a: "₹7,500 plus 0.025% of the amount involved for each year of delay, for up to three years." },
    ],
  },
  {
    id: "share-valuation",
    label: "Share Valuation for Foreign Investment in India",
    readMore: { href: "/australia-to-india/share-valuation", label: "Read the full guide: Share Valuation for Foreign Investment in India" },
    items: [
      { n: 98, id: "who-values-shares-issued-to-an-australian-parent", q: "Who values shares issued to an Australian parent?", a: "A Chartered Accountant or a SEBI-registered merchant banker." },
      { n: 99, id: "can-the-first-shares-be-issued-at-face-value", q: "Can the first shares be issued at face value?", a: "Usually yes at incorporation, because face value equals fair value for a new company." },
      { n: 100, id: "is-a-new-valuation-needed-for-each-capital-increase", q: "Is a new valuation needed for each capital increase?", a: "Yes. Each issue to a non-resident needs a valuation supporting the price." },
      { n: 101, id: "is-the-valuation-in-rupees-or-australian-dollars", q: "Is the valuation in rupees or Australian dollars?", a: "In rupees; the Australian dollar amount only decides how many shares are bought." },
      { n: 102, id: "does-the-australian-auditor-rely-on-the-fema-certificate", q: "Does the Australian auditor rely on the FEMA certificate?", a: "Not necessarily. Australian Accounting Standards may require a separate fair value or impairment analysis." },
      { n: 103, id: "what-limit-applies-when-the-parent-sells-to-an-indian-buyer", q: "What limit applies when the parent sells to an Indian buyer?", a: "The price cannot exceed fair value." },
      { n: 104, id: "what-happens-if-shares-are-issued-below-fair-value", q: "What happens if shares are issued below fair value?", a: "The issue breaches FEMA pricing and needs correction, often through compounding." },
      { n: 105, id: "which-method-is-used-for-a-captive-centre", q: "Which method is used for a captive centre?", a: "Often discounted cash flow or net assets, reflecting its cost-plus remuneration." },
    ],
  },
  {
    id: "eor-vs-subsidiary",
    label: "EOR vs Subsidiary in India: Which Is Right for an Australian Company?",
    readMore: { href: "/australia-to-india/eor-vs-subsidiary", label: "Read the full guide: EOR vs Subsidiary in India: Which Is Right for an Australian Company?" },
    items: [
      { n: 106, id: "is-an-eor-a-good-way-for-an-australian-company-to-start-in-i", q: "Is an EOR a good way for an Australian company to start in India?", a: "Yes for a small first team; it allows hiring within days without an entity." },
      { n: 107, id: "does-fair-work-apply-to-staff-employed-through-an-indian-eor", q: "Does Fair Work apply to staff employed through an Indian EOR?", a: "No. Indian labour law applies." },
      { n: 108, id: "can-eor-staff-create-a-pe-for-the-australian-company", q: "Can EOR staff create a PE for the Australian company?", a: "Possibly, for example if services are furnished in India for more than 183 days in a 12-month period." },
      { n: 109, id: "when-does-a-subsidiary-become-cheaper", q: "When does a subsidiary become cheaper?", a: "Usually once the team passes about 10 to 15 people." },
      { n: 110, id: "do-indian-staff-need-to-work-night-shifts-for-australia", q: "Do Indian staff need to work night shifts for Australia?", a: "Generally not; standard Indian hours overlap with the Australian afternoon." },
      { n: 111, id: "who-owns-ip-created-by-eor-staff", q: "Who owns IP created by EOR staff?", a: "It depends on the EOR contract, so assign IP to the right group company in writing." },
      { n: 112, id: "how-long-does-a-subsidiary-take-to-set-up", q: "How long does a subsidiary take to set up?", a: "About 4 to 6 weeks from receipt of apostilled documents." },
      { n: 113, id: "can-staff-move-from-the-eor-to-the-subsidiary", q: "Can staff move from the EOR to the subsidiary?", a: "Yes, through new contracts and an agreed treatment of benefits." },
    ],
  },
  {
    id: "hiring-and-payroll",
    label: "Hiring in India: Contracts, Payroll and Statutory Compliance",
    readMore: { href: "/australia-to-india/hiring-and-payroll", label: "Read the full guide: Hiring in India: Contracts, Payroll and Statutory Compliance" },
    items: [
      { n: 114, id: "does-superannuation-apply-to-indian-employees", q: "Does superannuation apply to Indian employees?", a: "No. Indian employees join the provident fund instead." },
      { n: 115, id: "do-modern-awards-apply-in-india", q: "Do modern awards apply in India?", a: "No. The labour codes and state rules set minimum terms." },
      { n: 116, id: "when-is-gratuity-payable", q: "When is gratuity payable?", a: "After five years of continuous service, or one year for fixed-term staff under the codes." },
      { n: 117, id: "is-there-payroll-tax-in-india", q: "Is there payroll tax in India?", a: "There is no state payroll tax, but some states levy a small professional tax." },
      { n: 118, id: "what-is-esi", q: "What is ESI?", a: "A medical and social security scheme for employees earning up to ₹21,000 a month." },
      { n: 119, id: "when-must-provident-fund-be-paid", q: "When must provident fund be paid?", a: "By the 15th of the following month." },
      { n: 120, id: "can-indian-staff-join-the-australian-share-plan", q: "Can Indian staff join the Australian share plan?", a: "Yes, subject to Indian tax and FEMA rules and Australian securities law." },
      { n: 121, id: "are-non-competes-enforceable-in-india", q: "Are non-competes enforceable in India?", a: "Post-employment restraints are narrowly enforced, so confidentiality terms matter more." },
    ],
  },
  {
    id: "expat-visa",
    label: "Sending an Australian Executive to India: Visa, Housing and Tax",
    readMore: { href: "/australia-to-india/expat-visa", label: "Read the full guide: Sending an Australian Executive to India: Visa, Housing and Tax" },
    items: [
      { n: 122, id: "what-visa-does-an-australian-executive-need", q: "What visa does an Australian executive need?", a: "An Employment Visa sponsored by the Indian company." },
      { n: 123, id: "when-is-frro-registration-required", q: "When is FRRO registration required?", a: "Within 14 days of arrival, for stays longer than 180 days." },
      { n: 124, id: "does-an-australian-secondee-pay-into-the-indian-provident-fu", q: "Does an Australian secondee pay into the Indian provident fund?", a: "Not with an ATO certificate of coverage under the India-Australia Social Security Agreement, for up to five years." },
      { n: 125, id: "when-does-the-executive-become-tax-resident-in-india", q: "When does the executive become tax resident in India?", a: "Usually after 182 days in the Indian financial year." },
      { n: 126, id: "can-the-executive-stay-australian-resident", q: "Can the executive stay Australian resident?", a: "Possibly, under the domicile test; the treaty's Article 4 then decides residence." },
      { n: 127, id: "how-is-double-tax-avoided", q: "How is double tax avoided?", a: "The executive claims a foreign income tax offset in Australia for Indian tax on Indian salary." },
      { n: 128, id: "are-allowances-taxable-in-india", q: "Are allowances taxable in India?", a: "Housing and school allowances are generally taxable." },
      { n: 129, id: "can-the-executive-create-a-pe-for-the-australian-parent", q: "Can the executive create a PE for the Australian parent?", a: "Yes, if he or she concludes contracts for the parent; the role should sit with the Indian company." },
    ],
  },
  {
    id: "esop",
    label: "ESOPs for Indian Employees of an Australian Parent Company",
    readMore: { href: "/australia-to-india/esop", label: "Read the full guide: ESOPs for Indian Employees of an Australian Parent Company" },
    items: [
      { n: 130, id: "when-are-indian-employees-taxed-on-australian-share-rights", q: "When are Indian employees taxed on Australian share rights?", a: "At vesting or exercise, on the value less any amount paid, as salary income." },
      { n: 131, id: "how-are-asx-share-values-converted-for-indian-tax", q: "How are ASX share values converted for Indian tax?", a: "At the SBI telegraphic transfer buying rate prescribed by the Indian rules." },
      { n: 132, id: "who-withholds-the-indian-tax", q: "Who withholds the Indian tax?", a: "The Indian employer, through payroll." },
      { n: 133, id: "do-indian-employees-report-australian-shares", q: "Do Indian employees report Australian shares?", a: "Yes, in Schedule FA of the Indian income tax return." },
      { n: 134, id: "can-the-parent-recharge-award-costs-to-india", q: "Can the parent recharge award costs to India?", a: "Yes, under a written arm's length agreement, with Withholding Tax reviewed." },
      { n: 135, id: "what-tax-applies-when-the-shares-are-sold", q: "What tax applies when the shares are sold?", a: "Capital gains; 12.5% for shares held more than 24 months, plus surcharge and cess." },
      { n: 136, id: "do-australian-disclosure-rules-apply-to-offers-in-india", q: "Do Australian disclosure rules apply to offers in India?", a: "They mainly cover offers in Australia; Australian counsel should confirm the position." },
      { n: 137, id: "can-indian-residents-hold-shares-of-an-australian-parent", q: "Can Indian residents hold shares of an Australian parent?", a: "Yes, under an employee plan within FEMA's overseas investment rules." },
    ],
  },
  {
    id: "transfer-pricing",
    label: "Transfer Pricing in India for Australian-Owned Subsidiaries",
    readMore: { href: "/australia-to-india/transfer-pricing", label: "Read the full guide: Transfer Pricing in India for Australian-Owned Subsidiaries" },
    items: [
      { n: 138, id: "which-australian-rules-apply-to-transfer-pricing", q: "Which Australian rules apply to transfer pricing?", a: "Division 815 of the Income Tax Assessment Act 1997." },
      { n: 139, id: "what-is-the-indian-transfer-pricing-report", q: "What is the Indian transfer pricing report?", a: "Form 48, previously Form 3CEB, certified by a Chartered Accountant." },
      { n: 140, id: "when-is-indian-documentation-required", q: "When is Indian documentation required?", a: "When international transactions exceed ₹1 crore in the year." },
      { n: 141, id: "how-are-indian-service-centres-for-australian-groups-priced", q: "How are Indian service centres for Australian groups priced?", a: "Usually at cost plus a mark-up." },
      { n: 142, id: "when-should-a-year-end-true-up-be-booked", q: "When should a year-end true-up be booked?", a: "Before the Indian books close on 31 March." },
      { n: 143, id: "what-is-a-significant-global-entity", q: "What is a significant global entity?", a: "A group with global income of A$1 billion or more, which has extra ATO obligations." },
      { n: 144, id: "can-india-and-australia-agree-a-method-in-advance", q: "Can India and Australia agree a method in advance?", a: "Yes, through a bilateral Advance Pricing Agreement." },
      { n: 145, id: "what-happens-if-both-countries-tax-the-same-profit", q: "What happens if both countries tax the same profit?", a: "The taxpayer can request the Mutual Agreement Procedure under Article 25 of the treaty." },
    ],
  },
  {
    id: "repatriating-profits",
    label: "Repatriating Profits from India to Australia: Forms and Tax",
    readMore: { href: "/australia-to-india/repatriating-profits", label: "Read the full guide: Repatriating Profits from India to Australia: Forms and Tax" },
    items: [
      { n: 146, id: "what-is-the-indian-tax-on-dividends-to-an-australian-parent", q: "What is the Indian tax on dividends to an Australian parent?", a: "Up to 15% under the India-Australia treaty, with an ATO certificate of residency and Form 41." },
      { n: 147, id: "are-indian-dividends-taxed-in-australia", q: "Are Indian dividends taxed in Australia?", a: "Generally not for an Australian company with at least a 10% voting interest; they are non-assessable non-exempt income." },
      { n: 148, id: "what-rate-applies-to-royalties", q: "What rate applies to royalties?", a: "Up to 15%, or 10% for equipment royalties." },
      { n: 149, id: "are-fees-for-technical-services-taxed-in-india", q: "Are fees for technical services taxed in India?", a: "The treaty treats many of them as royalties, taxable at up to 15%." },
      { n: 150, id: "how-is-indian-tax-on-fees-relieved-in-australia", q: "How is Indian tax on fees relieved in Australia?", a: "Through a foreign income tax offset." },
      { n: 151, id: "can-a-new-subsidiary-pay-a-dividend", q: "Can a new subsidiary pay a dividend?", a: "Only from distributable profits after audited accounts are approved." },
      { n: 152, id: "what-are-forms-145-and-146", q: "What are Forms 145 and 146?", a: "The remittance declarations that replaced Forms 15CA and 15CB." },
      { n: 153, id: "when-is-withholding-tax-deposited", q: "When is Withholding Tax deposited?", a: "By the 7th of the following month." },
    ],
  },
  {
    id: "compliance-calendar",
    label: "India Subsidiary Compliance Calendar for Australian Companies",
    readMore: { href: "/australia-to-india/compliance-calendar", label: "Read the full guide: India Subsidiary Compliance Calendar for Australian Companies" },
    items: [
      { n: 154, id: "can-the-indian-subsidiary-use-a-30-june-year-end", q: "Can the Indian subsidiary use a 30 June year end?", a: "No. Indian companies generally use the 1 April to 31 March financial year." },
      { n: 155, id: "when-is-the-indian-agm-due", q: "When is the Indian AGM due?", a: "By 30 September for a 31 March year end." },
      { n: 156, id: "when-is-the-indian-income-tax-return-due", q: "When is the Indian income tax return due?", a: "By 31 October, or 30 November where a transfer pricing report is required." },
      { n: 157, id: "what-is-the-fla-return", q: "What is the FLA return?", a: "An annual RBI return of foreign liabilities and assets, due by 15 July." },
      { n: 158, id: "how-does-the-group-consolidate-an-indian-company-with-a-diff", q: "How does the group consolidate an Indian company with a different year?", a: "Using management accounts to 30 June or audited 31 March accounts adjusted for April to June, applied consistently." },
      { n: 159, id: "which-australian-filing-uses-indian-figures", q: "Which Australian filing uses Indian figures?", a: "The International Dealings Schedule with the parent's company tax return, and Division 815 documentation." },
      { n: 160, id: "when-is-withholding-tax-on-payments-to-australia-deposited", q: "When is Withholding Tax on payments to Australia deposited?", a: "By the 7th of the following month." },
      { n: 161, id: "how-many-board-meetings-are-needed", q: "How many board meetings are needed?", a: "At least four a year, with no more than 120 days between them, subject to small company relaxations." },
    ],
  },
  {
    id: "audit-icofr",
    label: "Audit and Internal Controls (ICOFR) for Indian Subsidiaries of Australian Companies",
    readMore: { href: "/australia-to-india/audit-icofr", label: "Read the full guide: Audit and Internal Controls (ICOFR) for Indian Subsidiaries of Australian Companies" },
    items: [
      { n: 162, id: "can-the-australian-group-auditor-sign-the-indian-statutory-a", q: "Can the Australian group auditor sign the Indian statutory audit?", a: "Only through an Indian Chartered Accountant; the Indian report must be signed by one." },
      { n: 163, id: "what-is-asa-600", q: "What is ASA 600?", a: "The Australian auditing standard on group audits, under which the group auditor directs component auditors." },
      { n: 164, id: "why-does-an-asx-parent-care-about-indian-controls", q: "Why does an ASX parent care about Indian controls?", a: "Because the CEO and CFO declaration under section 295A relies on controls of material subsidiaries." },
      { n: 165, id: "which-period-does-the-indian-statutory-audit-cover", q: "Which period does the Indian statutory audit cover?", a: "The Indian financial year to 31 March." },
      { n: 166, id: "how-are-indian-figures-reported-to-australia", q: "How are Indian figures reported to Australia?", a: "Through a group reporting pack mapped to Australian Accounting Standards." },
      { n: 167, id: "when-is-the-first-indian-auditor-appointed", q: "When is the first Indian auditor appointed?", a: "By the board within 30 days of incorporation." },
      { n: 168, id: "is-a-tax-audit-always-needed", q: "Is a tax audit always needed?", a: "Only when turnover crosses the threshold in the Income-tax Act." },
      { n: 169, id: "what-is-form-48", q: "What is Form 48?", a: "The accountant's report on international transactions, previously Form 3CEB." },
    ],
  },
  {
    id: "tax-notices-and-litigation",
    label: "Handling Indian Tax Notices and Disputes for an Australian-Owned Subsidiary",
    readMore: { href: "/australia-to-india/tax-notices-and-litigation", label: "Read the full guide: Handling Indian Tax Notices and Disputes for an Australian-Owned Subsidiary" },
    items: [
      { n: 170, id: "how-long-is-there-to-reply-to-an-indian-tax-notice", q: "How long is there to reply to an Indian tax notice?", a: "Often between 7 and 30 days, depending on the notice." },
      { n: 171, id: "why-do-queries-arise-on-royalties-paid-to-australia", q: "Why do queries arise on royalties paid to Australia?", a: "Usually because the treaty rate was applied without an ATO certificate of residency and Form 41." },
      { n: 172, id: "can-double-tax-with-australia-be-resolved", q: "Can double tax with Australia be resolved?", a: "Yes, through the Mutual Agreement Procedure under Article 25 of the India-Australia treaty." },
      { n: 173, id: "why-should-australian-documentation-match-the-indian-file", q: "Why should Australian documentation match the Indian file?", a: "Because the competent authorities compare both in a MAP case." },
      { n: 174, id: "what-is-the-dispute-resolution-panel", q: "What is the Dispute Resolution Panel?", a: "A panel that hears objections to draft assessments of foreign-owned companies before the final order." },
      { n: 175, id: "where-does-a-first-income-tax-appeal-go", q: "Where does a first income tax appeal go?", a: "To the Commissioner (Appeals), generally within 30 days of the order." },
      { n: 176, id: "do-gst-notices-follow-the-same-route", q: "Do GST notices follow the same route?", a: "No. GST has its own adjudication and appellate stages." },
      { n: 177, id: "how-can-notices-be-reduced", q: "How can notices be reduced?", a: "Keep treaty documents current, sign intercompany agreements and reconcile tax credits each quarter." },
    ],
  },
  {
    id: "contracts-and-arbitration",
    label: "Contracts and Arbitration in India for Australian Companies",
    readMore: { href: "/australia-to-india/contracts-and-arbitration", label: "Read the full guide: Contracts and Arbitration in India for Australian Companies" },
    items: [
      { n: 178, id: "can-an-australian-court-judgment-be-enforced-in-india", q: "Can an Australian court judgment be enforced in India?", a: "Not directly. Australia is not a reciprocating territory under Section 44A, so a fresh suit is needed in India." },
      { n: 179, id: "are-arbitration-awards-from-australia-enforceable-in-india", q: "Are arbitration awards from Australia enforceable in India?", a: "Yes, if the seat country is notified by India under the New York Convention framework; confirm the notification for your seat." },
      { n: 180, id: "which-arbitration-seat-do-australian-groups-use-with-indian", q: "Which arbitration seat do Australian groups use with Indian parties?", a: "Often Singapore under SIAC rules, Sydney under ACICA rules, or an Indian seat when assets are in India." },
      { n: 181, id: "is-stamp-duty-payable-on-an-agreement-signed-in-australia", q: "Is stamp duty payable on an agreement signed in Australia?", a: "Yes, when the agreement is brought into India and relied on there, at the relevant state rate." },
      { n: 182, id: "does-fair-work-apply-to-staff-in-india", q: "Does Fair Work apply to staff in India?", a: "No. Indian employees are covered by the labour codes and state shops and establishments rules." },
      { n: 183, id: "what-royalty-rate-applies-under-the-treaty", q: "What royalty rate applies under the treaty?", a: "Up to 15% on royalties, or 10% for equipment royalties, under the India-Australia treaty." },
      { n: 184, id: "will-an-indian-court-enforce-a-liquidated-damages-clause", q: "Will an Indian court enforce a liquidated damages clause?", a: "It awards reasonable compensation up to the agreed amount, so the figure should be a genuine pre-estimate of loss." },
      { n: 185, id: "should-the-intercompany-agreement-be-signed-before-services", q: "Should the intercompany agreement be signed before services start?", a: "Yes, to support transfer pricing, Withholding Tax and the deduction of the expense." },
    ],
  },
  {
    id: "restructuring-and-exit",
    label: "Restructuring, Mergers and Exit for an Indian Subsidiary",
    readMore: { href: "/australia-to-india/restructuring-and-exit", label: "Read the full guide: Restructuring, Mergers and Exit for an Indian Subsidiary" },
    items: [
      { n: 186, id: "is-a-sale-of-indian-shares-by-an-australian-company-taxed-in", q: "Is a sale of Indian shares by an Australian company taxed in India?", a: "Generally yes. Long-term gains on unlisted shares held over 24 months are taxed at 12.5% plus surcharge and cess, subject to the treaty." },
      { n: 187, id: "can-australian-tax-on-the-gain-be-reduced", q: "Can Australian tax on the gain be reduced?", a: "Possibly, under the active foreign business asset reduction in Subdivision 768-G, if the Indian company is an active foreign company." },
      { n: 188, id: "which-form-reports-a-share-sale-to-an-indian-buyer", q: "Which form reports a share sale to an Indian buyer?", a: "Form FC-TRS, within 60 days, through the authorised dealer bank." },
      { n: 189, id: "can-two-indian-subsidiaries-of-an-australian-group-merge", q: "Can two Indian subsidiaries of an Australian group merge?", a: "Yes, through a tribunal scheme or the fast-track route for a holding company and its wholly owned subsidiary." },
      { n: 190, id: "how-is-a-dormant-indian-company-closed", q: "How is a dormant Indian company closed?", a: "By strike-off under Section 248 using Form STK-2, once it has had no business for two financial years and has no liabilities." },
      { n: 191, id: "how-long-does-strike-off-take", q: "How long does strike-off take?", a: "Usually three to six months after filing." },
      { n: 192, id: "how-does-surplus-cash-reach-australia-on-closure", q: "How does surplus cash reach Australia on closure?", a: "Through the bank with Forms 145 and 146 after taxes and creditors are paid." },
      { n: 193, id: "does-the-different-year-end-matter-for-an-exit", q: "Does the different year end matter for an exit?", a: "Yes. The Indian 31 March and Australian 30 June years affect when gains are recognised and returns lodged." },
    ],
  },
  {
    id: "common-mistakes",
    label: "13 Common Mistakes Australian Companies Make Setting Up in India",
    readMore: { href: "/australia-to-india/common-mistakes", label: "Read the full guide: 13 Common Mistakes Australian Companies Make Setting Up in India" },
    items: [
      { n: 194, id: "what-is-the-most-common-mistake-australian-companies-make-in", q: "What is the most common mistake Australian companies make in India?", a: "Running Indian deadlines from the Australian 30 June year end instead of India's 31 March." },
      { n: 195, id: "does-superannuation-replace-the-indian-provident-fund", q: "Does superannuation replace the Indian provident fund?", a: "Only with an ATO certificate of coverage under the India-Australia Social Security Agreement." },
      { n: 196, id: "does-the-india-australia-trade-agreement-make-investing-easi", q: "Does the India-Australia trade agreement make investing easier?", a: "It cuts tariffs on goods; FDI and company law rules are unchanged." },
      { n: 197, id: "why-are-dfat-apostilles-sometimes-refused", q: "Why are DFAT apostilles sometimes refused?", a: "Usually because DFAT cannot verify the notary's signature." },
      { n: 198, id: "can-an-australian-director-be-the-resident-director", q: "Can an Australian director be the resident director?", a: "Only if he or she stays in India for 182 days or more in the Indian financial year." },
      { n: 199, id: "what-creates-a-pe-for-an-australian-company-in-india", q: "What creates a PE for an Australian company in India?", a: "Among other things, services furnished in India by its personnel for more than 183 days in any 12 months." },
      { n: 200, id: "do-australian-employment-templates-work-in-india", q: "Do Australian employment templates work in India?", a: "No. Indian contracts must follow the labour codes and state rules." },
      { n: 201, id: "when-should-the-indian-accounts-close", q: "When should the Indian accounts close?", a: "After 31 March, with a bridge to the Australian 30 June year for group reporting." },
    ],
  },
  {
    id: "documents-and-apostille",
    label: "Documents and Apostille for an India Subsidiary (Australian Parent)",
    readMore: { href: "/australia-to-india/documents-and-apostille", label: "Read the full guide: Documents and Apostille for an India Subsidiary (Australian Parent)" },
    items: [
      { n: 202, id: "which-australian-documents-need-an-apostille-for-an-indian-s", q: "Which Australian documents need an apostille for an Indian subsidiary, and who issues it?", a: "The Australian parent's ASIC company extract or certificate of registration, its constitution, the directors' resolution approving the Indian subsidiary, and the notarised passports and address proofs of its directors and authorised signatory all need an apostille. In Australia the Department of Foreign Affairs and Trade (DFAT) issues apostilles, through one national process whichever state the company is registered in. Private documents are signed before an Australian notary public first, and no Indian High Commission legalisation is needed." },
      { n: 203, id: "can-documents-be-signed-and-apostilled-electronically", q: "Can documents be signed and apostilled electronically?", a: "Notarisation practice varies by state and territory, and not every document can be notarised or apostilled electronically. Acceptance of electronic versions in India also varies, so the format the Indian filing will accept should be confirmed before notarisation to avoid repeating the process." },
      { n: 204, id: "how-long-does-incorporation-take", q: "How long does incorporation take?", a: "Incorporation of an Indian subsidiary typically takes 4 to 6 weeks from receipt of complete documents. The main variable is how quickly the apostilled Australian documents are ready." },
      { n: 205, id: "what-is-an-apostille-in-australia", q: "What is an apostille in Australia?", a: "An apostille is a certificate issued by DFAT under the Hague Apostille Convention that confirms the signature, seal or stamp on a document, so that India accepts it without further legalisation. For a private document it is normally issued after a notary public has signed." },
      { n: 206, id: "are-india-and-australia-both-members-of-the-hague-apostille", q: "Are India and Australia both members of the Hague Apostille Convention?", a: "Yes. India and Australia are both parties to the Hague Apostille Convention, so a DFAT apostille is accepted for Australian documents used to incorporate a subsidiary in India." },
      { n: 207, id: "how-long-does-an-apostille-take-in-australia", q: "How long does an apostille take in Australia?", a: "It depends on DFAT's current processing time and on how quickly the notary appointment and any ASIC documents are ready. Plan for this step to be the longest in the incorporation timeline and start it first. We confirm the current turnaround before you order." },
      { n: 208, id: "what-does-an-apostille-cost-in-australia", q: "What does an apostille cost in Australia?", a: "DFAT charges a fee for each document it apostilles, and notaries charge their own fees for the notarisation. Fees change, so check DFAT's current schedule. The cost is small next to the cost of a delayed incorporation." },
      { n: 209, id: "does-dfat-apostille-an-asic-company-extract", q: "Does DFAT apostille an ASIC company extract?", a: "It depends on the form of the extract and whether DFAT can verify the issuer's signature. If it cannot, the extract is certified by a notary public and the notary's signature is apostilled. We confirm the route before you order." },
      { n: 210, id: "can-a-notary-in-any-australian-state-sign-the-documents", q: "Can a notary in any Australian state sign the documents?", a: "Notaries are regulated by each state or territory. Any notary public can notarise, but DFAT must be able to verify the notary's signature and seal, so use a notary on DFAT's records and confirm before the appointment." },
    ],
  },
  {
    id: "dtaa-pe-risk",
    label: "India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk",
    readMore: { href: "/australia-to-india/dtaa-pe-risk", label: "Read the full guide: India-Australia Tax Treaty (DTAA) and Permanent Establishment Risk" },
    items: [
      { n: 211, id: "what-is-a-dtaa", q: "What is a DTAA?", a: "A double taxation avoidance agreement. It allocates taxing rights between two countries and can reduce Withholding Tax on cross-border payments." },
      { n: 212, id: "what-does-the-parent-need-to-claim-treaty-rates", q: "What does the parent need to claim treaty rates?", a: "An Australian certificate of residency from the ATO (the Tax Residency Certificate), Form 41 (previously Form 10F) and, where asked, a declaration of no permanent establishment in India." },
      { n: 213, id: "is-an-indian-subsidiary-a-permanent-establishment-of-the-aus", q: "Is an Indian subsidiary a permanent establishment of the Australian parent?", a: "An Indian subsidiary is not a permanent establishment of the Australian parent by itself. The risk arises if the subsidiary acts as the parent's dependent agent, or if the parent's own staff operate from India." },
      { n: 214, id: "which-section-governs-withholding-tax-on-payments-to-a-non-r", q: "Which section governs Withholding Tax on payments to a non-resident?", a: "Section 393 of the Income-tax Act, 2025 (previously Section 195 of the 1961 Act)." },
      { n: 215, id: "can-the-indian-tax-be-credited-in-australia", q: "Can the Indian tax be credited in Australia?", a: "It depends on the income. Dividends from a wholly owned Indian subsidiary are generally exempt in Australia, so there is no credit for the Indian tax on them. For interest, royalties and fees that are assessable in Australia, the Indian tax can usually be claimed as a foreign income tax offset under Division 770 of the Income Tax Assessment Act 1997. This should be confirmed with an Australian tax adviser." },
      { n: 216, id: "does-the-treaty-reduce-withholding-tax", q: "Does the treaty reduce Withholding Tax?", a: "The India-Australia tax treaty can reduce Withholding Tax if the parent is an Australian tax resident and satisfies the conditions, which requires a Tax Residency Certificate and treaty details in Form 41 (previously Form 10F)." },
      { n: 217, id: "how-many-days-of-work-in-india-create-a-permanent-establishm", q: "How many days of work in India create a permanent establishment under the India-Australia treaty?", a: "Under Article 5 of the India-Australia treaty, as amended in 2013, services furnished in India through employees or other personnel create a permanent establishment if the activities continue for the same or a connected project for more than 183 days in any 12-month period. A building site or a construction, installation or assembly project creates one after more than 6 months. Confirm the current text for your case." },
      { n: 218, id: "what-are-the-india-australia-treaty-withholding-rates", q: "What are the India-Australia treaty withholding rates?", a: "The India-Australia treaty caps Indian withholding at 15% on dividends and on interest, and at 15% on royalties and fees for services that make technical knowledge available (10% for equipment royalties). The treaty rate applies only with an Australian certificate of residency and Form 41 (previously Form 10F)." },
    ],
  },
  {
    id: "india-australia-dtaa",
    label: "India-Australia DTAA: A Guide to the Tax Treaty for Australian Companies",
    readMore: { href: "/australia-to-india/india-australia-dtaa", label: "Read the full guide: India-Australia DTAA: A Guide to the Tax Treaty for Australian Companies" },
    items: [
      { n: 219, id: "what-are-the-india-australia-dtaa-withholding-rates", q: "What are the India-Australia DTAA withholding rates?", a: "The India-Australia DTAA caps Indian withholding at 15% on dividends, 15% on interest, and 15% on royalties and fees for services that make technical knowledge available, with 10% for equipment royalties. The domestic rate for non-residents is 20% plus surcharge and cess. The treaty rate applies only with an ATO certificate of residency and Form 41 (previously Form 10F)." },
      { n: 220, id: "is-dividend-income-from-an-indian-subsidiary-taxed-again-in", q: "Is dividend income from an Indian subsidiary taxed again in Australia?", a: "Dividends from a wholly owned Indian subsidiary are generally exempt in Australia for a company with a direct voting interest of at least 10% (section 768-5, Income Tax Assessment Act 1997). The 15% Indian Withholding Tax is therefore usually a final cost, and no foreign income tax offset is available for it." },
      { n: 221, id: "how-does-an-australian-company-get-a-certificate-of-residenc", q: "How does an Australian company get a certificate of residency?", a: "The Australian Taxation Office issues it. Companies use the certificate of residency request form for non-individuals (NAT 75442), and the certificate confirms residency for a specific period. Ask for the period that covers the payments, and renew it as needed." },
      { n: 222, id: "what-is-form-41-and-why-is-it-needed", q: "What is Form 41 and why is it needed?", a: "Form 41 (previously Form 10F) is the electronic statement of the non-resident payee’s details that supports a claim for treaty benefits, filed with the Indian payer or on the Indian tax portal. It is given together with the certificate of residency before the first payment." },
      { n: 223, id: "what-is-the-principal-purpose-test-in-the-india-australia-tr", q: "What is the principal purpose test in the India-Australia treaty?", a: "The principal purpose test comes from the Multilateral Instrument, which both countries have signed. It can deny a treaty benefit where obtaining it was one of the principal purposes of an arrangement, unless granting it is in line with the treaty’s object. A commercially genuine parent-subsidiary relationship is normally outside its concern." },
      { n: 224, id: "are-fees-for-technical-services-taxed-in-india-under-the-tre", q: "Are fees for technical services taxed in India under the treaty?", a: "Under Article 12, fees for services that make technical knowledge, experience, skill, know-how or processes available to the payer are taxed at up to 15% in India. Other service fees are business profits, taxable in India only if the Australian parent has a permanent establishment there. The facts of each service decide which applies." },
      { n: 225, id: "how-many-days-of-service-in-india-create-a-permanent-establi", q: "How many days of service in India create a permanent establishment under the DTAA?", a: "Under Article 5 as amended in 2013, services furnished through employees or other personnel create a permanent establishment if the activities continue for the same or a connected project for more than 183 days in any 12-month period. A construction or installation project creates one after more than 6 months, and substantial equipment after more than 183 days." },
      { n: 226, id: "how-is-tax-on-the-sale-of-shares-in-an-indian-subsidiary-tre", q: "How is tax on the sale of shares in an Indian subsidiary treated under the DTAA?", a: "India taxes the gain on shares of an Indian company under domestic law, with a long-term rate of 12.5% for unlisted shares held more than 24 months, and the treaty preserves this right. Australia can reduce the parent’s capital gain under the participation exemption where the parent held at least 10% and the company has an active business. Plan the exit with both advisers." },
      { n: 227, id: "how-does-australia-give-relief-for-indian-tax", q: "How does Australia give relief for Indian tax?", a: "Australia gives a foreign income tax offset (Division 770 of the Income Tax Assessment Act 1997) for Indian tax on income that is assessable in Australia, up to a cap. Dividends that are exempt in Australia do not qualify. India gives a credit for Australian tax limited to the Indian tax attributable to the income." },
      { n: 228, id: "what-is-the-mutual-agreement-procedure-under-the-india-austr", q: "What is the Mutual Agreement Procedure under the India-Australia treaty?", a: "Under Article 25, a taxpayer taxed in a way that does not follow the treaty can ask the competent authorities of India and Australia to resolve it. The case must be presented within three years of the first notification of the action." },
      { n: 229, id: "did-the-2011-protocol-change-the-india-australia-treaty", q: "Did the 2011 Protocol change the India-Australia treaty?", a: "Yes. The protocol, notified in India on 20 September 2013, changed the services and equipment permanent establishment tests in Article 5, the business profits article, the exchange of information article, and added non-discrimination (Article 24A) and assistance in tax collection (Article 26A)." },
      { n: 230, id: "which-country-taxes-what-under-the-india-australia-dtaa", q: "Which country taxes what under the India-Australia DTAA?", a: "India, as the source state, can tax income that arises in India, within the treaty caps: dividends and interest at up to 15%, royalties and technical fees at up to 15% (10% for equipment), and business profits only if there is a permanent establishment. Australia, as the residence state, taxes the Australian company on its worldwide income and gives relief for the Indian tax by exemption (most dividends) or a foreign income tax offset." },
      { n: 231, id: "how-many-days-create-a-permanent-establishment-under-the-ind", q: "How many days create a permanent establishment under the India-Australia treaty?", a: "Services furnished in India through employees for the same or a connected project create a PE after more than 183 days in any 12-month period. A building site or construction, installation or assembly project creates one after more than 6 months, substantial equipment after more than 183 days, and natural resources activities after more than 90 days." },
      { n: 232, id: "does-a-subsidiary-create-a-permanent-establishment-for-its-a", q: "Does a subsidiary create a permanent establishment for its Australian parent?", a: "Not by itself. Article 5(7) says that control of a subsidiary, or being controlled by one, does not make either company a permanent establishment of the other. A PE can still arise if the subsidiary acts as a dependent agent that habitually concludes contracts for the parent, or if the parent has its own fixed place or staff in India above the thresholds." },
      { n: 233, id: "what-is-the-royalty-rate-under-the-india-australia-dtaa", q: "What is the royalty rate under the India-Australia DTAA?", a: "Up to 10% for royalties for the use of industrial, commercial or scientific equipment and ancillary services, and up to 15% for other royalties, including fees for services that make technical knowledge available. Service fees where no knowledge is made available are business profits and are not taxable in India without a permanent establishment." },
      { n: 234, id: "is-interest-paid-to-an-australian-parent-taxed-in-india", q: "Is interest paid to an Australian parent taxed in India?", a: "Yes. India may tax interest on a loan from the Australian parent at up to 15% of the gross amount under Article 11, against the higher domestic rate. The parent needs its ATO certificate of residency and Form 41, and the interest must be at arm's length. Australia taxes the interest and gives a foreign income tax offset for the Indian tax." },
      { n: 235, id: "which-article-of-the-india-australia-dtaa-covers-capital-gai", q: "Which article of the India-Australia DTAA covers capital gains?", a: "Article 13. India may tax gains on Indian immovable property, business property of an Indian PE and shares of an Indian company, including the subsidiary, as the state where the company is resident. Each country otherwise applies its own law, and Australia can reduce the gain on a sale of a foreign subsidiary through the CGT participation exemption." },
      { n: 236, id: "does-the-india-australia-dtaa-cover-employees-and-directors", q: "Does the India-Australia DTAA cover employees and directors?", a: "Yes. Article 15 covers employees (salary for work in India is exempt in India for a short visit of up to 183 days if the employer is Australian and no Indian entity bears the cost), Article 14 covers independent consultants, and Article 16 lets India tax directors fees paid by an Indian company. See the guide on treaty and social security for foreign employees." },
      { n: 237, id: "is-there-a-limitation-on-benefits-clause-in-the-india-austra", q: "Is there a limitation on benefits clause in the India-Australia treaty?", a: "No separate clause. Instead the principal purpose test from the Multilateral Instrument, which both countries have signed, denies a treaty benefit where obtaining it was one of the principal purposes of an arrangement, unless granting it is in line with the purpose of the treaty." },
      { n: 238, id: "can-either-country-end-the-india-australia-dtaa", q: "Can either country end the India-Australia DTAA?", a: "Yes. The treaty has no end date, but either country can end it by written notice given on or before 30 June in any calendar year, effective from 1 July (Australia) or 1 April (India) of the following year." },
      { n: 239, id: "is-australian-gst-or-indian-gst-covered-by-the-india-austral", q: "Is Australian GST or Indian GST covered by the India-Australia DTAA?", a: "No. Article 2 covers income taxes only. Indian GST, Australian GST and stamp duty follow domestic law." },
    ],
  },
  {
    id: "foreign-employee-treaty-ssa",
    label: "Treaty and Social Security for Foreign Employees in India: DTAA Article 15 and the India-Australia SSA",
    readMore: { href: "/australia-to-india/foreign-employee-treaty-ssa", label: "Read the full guide: Treaty and Social Security for Foreign Employees in India: DTAA Article 15 and the India-Australia SSA" },
    items: [
      { n: 240, id: "is-there-a-social-security-agreement-between-india-and-austr", q: "Is there a social security agreement between India and Australia?", a: "Yes. The India-Australia Social Security Agreement came into force on 1 January 2016. It prevents double coverage for employees on temporary assignment, with a certificate of coverage valid for up to five years, and it protects pension rights across the two countries." },
      { n: 241, id: "who-issues-the-certificate-of-coverage-for-an-australian-emp", q: "Who issues the certificate of coverage for an Australian employee going to India?", a: "The Australian Taxation Office issues it to the Australian employer, which applies for it before or as the assignment starts. The Indian subsidiary keeps a copy to show that the employee is excluded from provident fund." },
      { n: 242, id: "how-long-does-a-certificate-of-coverage-last", q: "How long does a certificate of coverage last?", a: "Up to five years from the assignment date. An extension is possible if both countries’ authorities agree, so diarise the end date and ask in good time." },
      { n: 243, id: "can-an-employee-who-takes-a-job-with-the-indian-subsidiary-g", q: "Can an employee who takes a job with the Indian subsidiary get a certificate of coverage?", a: "No. The agreement covers an employee who is sent on a temporary assignment by the Australian employer and remains employed by it. An employee who takes a new job with the Indian company, or who is self-employed, is not eligible." },
      { n: 244, id: "what-does-article-15-of-the-india-australia-dtaa-say", q: "What does Article 15 of the India-Australia DTAA say?", a: "Article 15 says employment income is taxed in the country of residence unless the work is done in the other country. It exempts the other country’s tax if the employee is present for no more than 183 days in the year of income, the employer is not resident in that country and the cost is not borne by a permanent establishment there." },
      { n: 245, id: "does-the-183-day-rule-apply-per-calendar-year-or-per-indian", q: "Does the 183-day rule apply per calendar year or per Indian tax year?", a: "Article 15 refers to the year of income of the country where the work is done, so for work in India the count is made over the Indian tax year, 1 April to 31 March, not the calendar year. Keep a day-count that follows the Indian year." },
      { n: 246, id: "does-an-australian-employee-seconded-to-the-indian-subsidiar", q: "Does an Australian employee seconded to the Indian subsidiary pay Indian tax?", a: "Usually yes for the work done in India. The Article 15 exemption is available only for short visits where the employer is Australian and no Indian entity bears the cost. If the Indian subsidiary is the economic employer or bears the salary, the exemption is likely to be denied." },
      { n: 247, id: "what-is-an-excluded-international-worker-in-india", q: "What is an excluded international worker in India?", a: "An international worker from a country that has a social security agreement with India and who holds a valid certificate of coverage from that country is excluded from the Indian provident fund for the covered period." },
      { n: 248, id: "do-directors-fees-get-the-183-day-exemption", q: "Do directors’ fees get the 183-day exemption?", a: "No. Article 16 allows India to tax fees paid to a member of the board of directors of a company resident in India, whatever the number of days spent in India." },
      { n: 249, id: "can-an-australian-employee-claim-indian-tax-paid-against-aus", q: "Can an Australian employee claim Indian tax paid against Australian tax?", a: "Yes, generally. An Australian resident can claim a foreign income tax offset for Indian tax paid on Indian-source income that is assessable in Australia (Division 770 of the Income Tax Assessment Act 1997), up to a cap. Confirm the position with an Australian tax adviser." },
      { n: 250, id: "what-happens-to-the-provident-fund-when-an-australian-employ", q: "What happens to the provident fund when an Australian employee leaves India?", a: "For members covered by the agreement, the Employees’ Provident Fund Organisation rules allow withdrawal of the balance on leaving employment in an EPF-covered establishment. Confirm the withdrawal procedure and tax treatment at the time." },
      { n: 251, id: "are-indian-employees-sent-to-australia-covered-by-the-same-a", q: "Are Indian employees sent to Australia covered by the same agreement?", a: "Yes. An Indian employer can obtain a certificate of coverage through the EPFO’s international worker process so that the employee stays in the Indian provident fund scheme and the employer is exempt from Australian superannuation guarantee for up to five years." },
    ],
  },
  {
    id: "australian-parent-obligations",
    label: "Australian Parent Reporting for an Indian Subsidiary: CFC Rules, IDS and More",
    readMore: { href: "/australia-to-india/australian-parent-obligations", label: "Read the full guide: Australian Parent Reporting for an Indian Subsidiary: CFC Rules, IDS and More" },
    items: [
      { n: 252, id: "does-an-australian-company-have-to-report-its-indian-subsidi", q: "Does an Australian company have to report its Indian subsidiary to the ATO?", a: "An Australian company that owns an Indian subsidiary has to consider the controlled foreign company (CFC) rules in Part X of the Income Tax Assessment Act 1936, report international related-party dealings in the International Dealings Schedule where thresholds are met, and include any attributable or assessable foreign income in its company tax return. This should be confirmed with an Australian tax adviser." },
      { n: 253, id: "will-the-indian-financial-year-cause-problems", q: "Will the Indian financial year cause problems?", a: "The Indian financial year needs planning, because the Indian year ends 31 March while most Australian companies report to 30 June. A reporting bridge solves this." },
      { n: 254, id: "who-prepares-the-australian-cfc-and-international-dealings-s", q: "Who prepares the Australian CFC and International Dealings Schedule disclosures?", a: "They are prepared by the Australian parent's tax adviser as part of the company tax return, because Australian filings are outside the scope of the Indian adviser. The Indian financial information the adviser needs is supplied by the subsidiary's accountants." },
      { n: 255, id: "do-we-have-to-report-the-indian-bank-account-to-the-ato", q: "Do we have to report the Indian bank account to the ATO?", a: "Australia has no foreign bank account report like the US FBAR. The Indian subsidiary's bank account belongs to the subsidiary, and its results reach the parent's return through the CFC and foreign income rules. If the parent itself holds an Indian account, the interest is assessable foreign income and should be disclosed in the company tax return." },
      { n: 256, id: "what-happens-if-the-australian-parent-does-not-lodge-the-req", q: "What happens if the Australian parent does not lodge the required foreign income disclosures?", a: "The ATO can apply administrative penalties for late or incorrect lodgement of the company tax return and its schedules, and shortfall penalties if foreign income is understated. Large multinational groups face higher penalties for late lodgement. Your Australian tax adviser can confirm the exposure for your structure." },
      { n: 257, id: "are-dividends-from-an-indian-subsidiary-taxable-in-australia", q: "Are dividends from an Indian subsidiary taxable in Australia?", a: "Dividends from a foreign company in which an Australian company holds a direct voting interest of at least 10% are generally non-assessable non-exempt income (section 768-5, Income Tax Assessment Act 1997), so they are not taxed in Australia. The Indian Withholding Tax on them is therefore usually a final cost. Confirm with your Australian tax adviser." },
      { n: 258, id: "is-an-indian-subsidiary-a-controlled-foreign-company", q: "Is an Indian subsidiary a controlled foreign company?", a: "An Indian subsidiary controlled by Australian entities is a controlled foreign company. Whether any of its income is attributed to the Australian parent depends on the active income test and the tainted income categories. India is not a listed country, so the full tests apply and a captive services company should be reviewed." },
      { n: 259, id: "does-the-ato-apply-transfer-pricing-rules-to-payments-to-an", q: "Does the ATO apply transfer pricing rules to payments to an Indian subsidiary?", a: "Yes. Division 815 of the Income Tax Assessment Act 1997 applies the arm's length principle to cross-border dealings between related parties, and documentation requirements apply. Large groups also file the local file, master file and country-by-country report. A fair, documented price protects you in both countries." },
    ],
  },
  {
    id: "global-vat",
    label: "Global VAT and GST for Australian Companies Selling Abroad",
    readMore: { href: "/australia-to-india/global-vat", label: "Read the full guide: Global VAT and GST for Australian Companies Selling Abroad" },
    items: [
      { n: 260, id: "does-an-australian-company-without-an-overseas-office-need-t", q: "Does an Australian company without an overseas office need to register for VAT?", a: "An Australian company without an overseas office may still need to register for VAT or GST in the countries where its customers are, especially for sales to consumers. Registration thresholds and rules differ by country and by whether the seller is established there, so the position should be checked for each market before the first sale." },
      { n: 261, id: "what-is-the-reverse-charge", q: "What is the reverse charge?", a: "The reverse charge shifts the duty to account for VAT or GST from the supplier to the business customer. The supplier invoices without local tax and the customer reports and, where eligible, recovers the tax in its own return. It commonly applies to cross-border business-to-business services." },
      { n: 262, id: "is-there-a-single-registration-for-eu-digital-sales", q: "Is there a single registration for EU digital sales?", a: "Yes. The EU one-stop shop lets a non-EU seller of digital services to EU consumers register in one member state and report VAT for all EU sales in one return. Registration is still needed in other cases, for example for goods held in stock in another country." },
      { n: 263, id: "is-gst-in-india-the-same-as-vat", q: "Is GST in India the same as VAT?", a: "Indian GST is a destination-based tax similar in principle to VAT, but it has its own rates, registration and filing rules. It is separate from overseas VAT and from Australian GST, and each is filed in its own country." },
      { n: 264, id: "are-exports-gst-free-in-australia", q: "Are exports GST-free in Australia?", a: "Exports of goods and most services to overseas customers are generally GST-free in Australia, which means no GST is charged but you can still claim input tax credits for the GST on your costs. You need evidence of the export. GST-free treatment in Australia does not remove any VAT or GST obligation in the customer's country." },
      { n: 265, id: "does-an-australian-company-need-to-register-for-gst-in-india", q: "Does an Australian company need to register for GST in India?", a: "An Australian company needs to register for GST in India if it supplies online information and database access or retrieval (OIDAR) services, such as software, apps or cloud services, to consumers in India. The simplified OIDAR registration applies, 18% GST is charged and a monthly return is filed. Supplies to business customers in India are usually under reverse charge." },
      { n: 266, id: "what-are-the-vat-registration-thresholds-for-selling-service", q: "What are the VAT registration thresholds for selling services abroad from Australia?", a: "Thresholds differ by country and by whether the seller is established there: the UK has none for non-UK businesses, the EU micro-threshold of €10,000 applies only to EU-established sellers, New Zealand is NZ$60,000 for remote services, Singapore overseas vendors register at SGD 100,000 of B2C sales (and SGD 1 million overall), and the UAE has none for foreign businesses. Thresholds change, so confirm before relying on them." },
    ],
  },
]

const allFaqs = faqGroups.flatMap((group) => group.items)

export default function AustraliaToIndiaFaqPage() {
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
        headline="266 Questions About Setting Up and Running a Subsidiary in India"
        description="266 plain answers for Australian companies: incorporation, FEMA, tax, the India-Australia treaty, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary."
        datePublished="2026-10-15"
        dateModified="2026-10-15"
        isPartOfUrl={HUB_URL}
        inLanguage="en-AU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Australia", href: "/australia-to-india" },
          { label: "266 FAQs" },
        ]}
      />

      <GuideHero
        eyebrow="FAQ for Australian companies"
        title="266 Questions About Setting Up and Running a Subsidiary in India"
        updated="15 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <p className="mb-8">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>

        <GuideAnswerBox title="How to use this page">
          Start with the six general groups for the questions Australian boards raise first, then use the topic
          groups, which follow each guide in the series and end with a link to it. For the full walkthrough,
          read the{" "}
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">complete guide</Link>{" "}
          for Australian companies.
        </GuideAnswerBox>

        <p className="text-gray-600 leading-relaxed mb-8">
          Indian tax law changed on 1 April 2026: the Income-tax Act, 2025 and Income-tax Rules, 2026 replace
          the 1961 Act. Where a form or section has a new name, we give the new name with the earlier one in
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

        <GuideServiceBox path="/australia-to-india/faq" />
        <GuideCTA
          title="Have a question that is not here?"
          description="Tell us about your plan and we will answer it on a call."
        />

        <p className="mb-10">
          <Link href="/australia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Australia
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 15 October 2026. General information only, not legal or tax advice. Indian and Australian
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="Still Have Questions About India Entry?"
        description="Tell us what's specific to your case — we'll answer directly instead of pointing you back to a FAQ."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  )
}
