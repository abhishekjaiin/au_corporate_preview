import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideServiceBox } from "@/components/guide/GuideServiceBox"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/faq"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "deciding-on-india", label: "Deciding on India from Japan" },
  { id: "ownership-board-control", label: "Ownership, the board and control" },
  { id: "banking-registrations-first-hires", label: "Banking, registrations and first hires" },
  { id: "tax-basics-japanese-parent", label: "Tax basics for a Japanese parent" },
  { id: "growth-disputes-exit", label: "Growth, disputes and exit" },
  { id: "incorporation-process", label: "Incorporation Process for an Indian Subsidiary, Step by Step" },
  { id: "subsidiary-vs-branch-vs-liaison-office-vs-llp", label: "Subsidiary vs Branch vs Liaison Office vs LLP in India" },
  { id: "resident-director", label: "Resident Director Requirement for an Indian Company" },
  { id: "funding-fema-fc-gpr", label: "Funding an Indian Subsidiary: FEMA and Form FC-GPR" },
  { id: "share-valuation", label: "Share Valuation for Foreign Investment in India" },
  { id: "eor-vs-subsidiary", label: "EOR vs Subsidiary in India: Right for a Japanese Company?" },
  { id: "hiring-and-payroll", label: "Hiring in India: Contracts, Payroll and Statutory Compliance" },
  { id: "expat-visa", label: "Sending a Japanese Executive to India: Visa, Housing and Tax" },
  { id: "esop", label: "ESOPs for Indian Employees of a Japanese Parent Company" },
  { id: "transfer-pricing", label: "Transfer Pricing in India for Japanese-Owned Subsidiaries" },
  { id: "repatriating-profits", label: "Repatriating Profits from India to Japan: Forms and Tax" },
  { id: "compliance-calendar", label: "India Subsidiary Compliance Calendar for Japanese Companies" },
  { id: "audit-icofr", label: "Audit and ICOFR for Indian Subsidiaries of Japanese Companies" },
  { id: "tax-notices-and-litigation", label: "Handling Indian Tax Notices for a Japanese-Owned Subsidiary" },
  { id: "contracts-and-arbitration", label: "Contracts and Arbitration in India for Japanese Companies" },
  { id: "global-vat", label: "Global VAT for Japanese Companies Selling Abroad" },
  { id: "restructuring-and-exit", label: "Restructuring, Mergers and Exit for an Indian Subsidiary" },
  { id: "common-mistakes", label: "10 Common Mistakes Japanese Companies Make Setting Up in India" },
  { id: "dtaa-pe-risk", label: "India-Japan Tax Treaty and Permanent Establishment Risk" },
  { id: "documents-and-apostille", label: "Documents and Apostille for a Japanese Parent Company" },
  { id: "japan-parent-obligations", label: "Japanese Parent Reporting for an Indian Subsidiary" },
]

type FaqItem = { n: number; id: string; q: string; a: string }
type FaqGroup = { id: string; label: string; readMore?: { href: string; label: string }; items: FaqItem[] }

const faqGroups: FaqGroup[] = [
  {
    id: "deciding-on-india",
    label: "Deciding on India from Japan",
    items: [
      { n: 1, id: "why-do-japanese-companies-set-up-subsidiaries-in-india", q: "Why do Japanese companies set up subsidiaries in India?", a: "Mainly for engineering and IT talent, a large domestic market, manufacturing under India's incentive schemes, and as a second base in Asia alongside existing operations in China or Southeast Asia." },
      { n: 2, id: "which-indian-cities-do-japanese-companies-usually-choose", q: "Which Indian cities do Japanese companies usually choose?", a: "Delhi NCR (Gurugram and Noida), Bengaluru, Chennai, Pune and Ahmedabad are common, often near Japanese industrial townships, schools and community services." },
      { n: 3, id: "does-india-have-a-trade-agreement-with-japan", q: "Does India have a trade agreement with Japan?", a: "Yes. The India-Japan Comprehensive Economic Partnership Agreement has been in force since 1 August 2011 and reduces tariffs on many goods traded between the two countries." },
      { n: 4, id: "is-government-approval-needed-for-a-japanese-company-to-inve", q: "Is government approval needed for a Japanese company to invest in India?", a: "Not in most sectors. Investment is under the Automatic Route, and Press Note 3 applies only to investors linked to countries sharing a land border with India." },
      { n: 5, id: "can-a-japanese-company-test-india-before-forming-a-subsidiar", q: "Can a Japanese company test India before forming a subsidiary?", a: "Yes, through a liaison office for representation and market study, or an employer of record for a small team, before committing to a full entity." },
      { n: 6, id: "what-should-a-japanese-head-office-decide-before-approving-i", q: "What should a Japanese head office decide before approving India?", a: "The activity of the Indian company, who will sit in India as the resident director, the first-round capital, and how profits will return to Japan." },
      { n: 7, id: "how-long-should-a-japanese-company-plan-for-the-whole-setup", q: "How long should a Japanese company plan for the whole setup?", a: "Allow two to three months from the internal decision to an operating company, of which incorporation takes about 4 to 6 weeks once documents are ready." },
      { n: 8, id: "can-a-japanese-company-enter-india-with-an-indian-partner", q: "Can a Japanese company enter India with an Indian partner?", a: "Yes. A joint venture company with an Indian partner is common in manufacturing and distribution; the shareholders' agreement sets board seats, funding and exit rights." },
      { n: 9, id: "do-japanese-trading-companies-need-a-special-structure", q: "Do Japanese trading companies need a special structure?", a: "Not usually. A subsidiary can trade, import and export, subject to sector rules; some use a branch or project office for specific contracts." },
      { n: 10, id: "is-english-accepted-for-indian-filings", q: "Is English accepted for Indian filings?", a: "Yes. Indian company law filings are in English, so Japanese documents need certified English translations." },
      { n: 11, id: "can-a-gk-be-the-shareholder-of-an-indian-company", q: "Can a GK be the shareholder of an Indian company?", a: "Yes. A godo kaisha can invest like a kabushiki kaisha, using its certificate of registered matters and a member resolution." },
    ],
  },
  {
    id: "ownership-board-control",
    label: "Ownership, the board and control",
    items: [
      { n: 12, id: "how-many-shareholders-does-the-indian-company-need", q: "How many shareholders does the Indian company need?", a: "At least two. In a wholly owned subsidiary the Japanese parent holds almost all the shares and a group company or nominee holds one share." },
      { n: 13, id: "how-many-directors-are-required", q: "How many directors are required?", a: "At least two, and at least one must have stayed in India for 182 days or more in the financial year." },
      { n: 14, id: "can-all-directors-except-one-live-in-japan", q: "Can all directors except one live in Japan?", a: "Yes. Only one director needs to meet the residence test; the others can live in Japan and sign electronically." },
      { n: 15, id: "how-does-the-japanese-parent-control-the-indian-company", q: "How does the Japanese parent control the Indian company?", a: "As shareholder, it appoints and removes directors; reserved matters and approval limits can be set in the articles or an authority matrix." },
      { n: 16, id: "can-the-japanese-parent-approve-budgets-and-senior-hires", q: "Can the Japanese parent approve budgets and senior hires?", a: "Yes, if those matters are reserved for the shareholder or the board in the articles or a board-approved policy." },
      { n: 17, id: "what-duties-do-indian-directors-have", q: "What duties do Indian directors have?", a: "To act in good faith for the company, avoid conflicts, exercise care and ensure statutory compliance; some defaults carry personal liability." },
      { n: 18, id: "can-a-company-seal-or-hanko-be-used-in-india", q: "Can a company seal or hanko be used in India?", a: "Indian companies are not required to use a common seal, and filings are signed with digital signatures rather than seals." },
      { n: 19, id: "who-can-sign-contracts-for-the-indian-company", q: "Who can sign contracts for the Indian company?", a: "Directors or officers authorised by a board resolution or power of attorney, within the limits the board sets." },
      { n: 20, id: "should-directors-and-officers-insurance-be-bought-in-india", q: "Should directors and officers insurance be bought in India?", a: "It is advisable, especially for the resident director and local managers, and can be arranged locally or under the group policy." },
      { n: 21, id: "can-the-board-meet-by-video-from-japan", q: "Can the board meet by video from Japan?", a: "Yes. Board meetings can be held by video conference, with the required quorum and minutes." },
      { n: 22, id: "can-the-parent-s-articles-of-incorporation-be-used-for-the-i", q: "Can the parent's articles of incorporation be used for the Indian company?", a: "No. The Indian company has its own memorandum and articles under the Companies Act, 2013, though reserved matters can mirror group policy." },
    ],
  },
  {
    id: "banking-registrations-first-hires",
    label: "Banking, registrations and first hires",
    items: [
      { n: 23, id: "which-banks-do-japanese-subsidiaries-use-in-india", q: "Which banks do Japanese subsidiaries use in India?", a: "Many use Japanese banks with Indian branches, such as MUFG, SMBC and Mizuho, alongside Indian banks for local payments." },
      { n: 24, id: "what-does-the-bank-need-from-the-japanese-parent", q: "What does the bank need from the Japanese parent?", a: "KYC documents for the parent and its beneficial owners, the board resolution, and identity documents for the authorised signatories." },
      { n: 25, id: "which-registrations-follow-incorporation", q: "Which registrations follow incorporation?", a: "GST if the business requires it, provident fund and ESI as headcount grows, professional tax in some states, and shops and establishments registration." },
      { n: 26, id: "is-gst-registration-always-needed", q: "Is GST registration always needed?", a: "When turnover exceeds the threshold, or immediately for exports of services, interstate supplies and some other categories." },
      { n: 27, id: "when-can-the-subsidiary-hire-its-first-employee", q: "When can the subsidiary hire its first employee?", a: "Once it is incorporated and has a bank account and payroll set up, usually within weeks of incorporation." },
      { n: 28, id: "do-indian-employees-need-written-contracts", q: "Do Indian employees need written contracts?", a: "Yes. A written appointment letter or contract with pay, hours, leave and notice is expected under the labour codes." },
      { n: 29, id: "can-chuzaiin-start-working-before-their-visa", q: "Can chuzaiin start working before their visa?", a: "No. A chuzaiin needs an Employment Visa before starting work in India; business visas do not allow productive work." },
      { n: 30, id: "does-the-subsidiary-need-an-office-before-incorporation", q: "Does the subsidiary need an office before incorporation?", a: "It needs a registered office address with proof; a virtual or serviced office can be used until permanent premises are leased." },
      { n: 31, id: "what-is-a-tan", q: "What is a TAN?", a: "The tax deduction account number, issued at incorporation, used to deduct and deposit tax on salaries and payments." },
      { n: 32, id: "can-payroll-be-run-from-japan", q: "Can payroll be run from Japan?", a: "Indian payroll must apply Indian tax, provident fund and ESI rules, so it is normally run in India with reporting to Japan." },
      { n: 33, id: "how-long-does-bank-account-opening-take", q: "How long does bank account opening take?", a: "Usually one to three weeks after incorporation, depending on the bank's KYC on the Japanese parent." },
    ],
  },
  {
    id: "tax-basics-japanese-parent",
    label: "Tax basics for a Japanese parent",
    items: [
      { n: 34, id: "what-is-the-corporate-tax-rate-for-an-indian-subsidiary", q: "What is the corporate tax rate for an Indian subsidiary?", a: "About 25.17% including surcharge and cess under the concessional regime for domestic companies that forgo certain incentives." },
      { n: 35, id: "is-the-indian-subsidiary-taxed-on-its-worldwide-income", q: "Is the Indian subsidiary taxed on its worldwide income?", a: "Yes. As an Indian company it is taxed in India on its worldwide income." },
      { n: 36, id: "does-the-japanese-parent-pay-tax-in-india", q: "Does the Japanese parent pay tax in India?", a: "Only on Indian-source income such as dividends, royalties, fees and interest through withholding, or if it has a permanent establishment in India." },
      { n: 37, id: "what-is-the-treaty-rate-on-interest-paid-to-japan", q: "What is the treaty rate on interest paid to Japan?", a: "10% under the India-Japan treaty, with a Certificate of Residence and Form 41." },
      { n: 38, id: "do-japanese-cfc-rules-affect-an-indian-subsidiary", q: "Do Japanese CFC rules affect an Indian subsidiary?", a: "They must be tested each year, but at Indian tax rates an operating subsidiary rarely triggers Japanese CFC income." },
      { n: 39, id: "is-gst-charged-on-services-the-subsidiary-provides-to-japan", q: "Is GST charged on services the subsidiary provides to Japan?", a: "Exports of services that meet the conditions are zero-rated, so no GST is charged and input tax can be refunded." },
      { n: 40, id: "does-the-subsidiary-pay-gst-on-fees-to-the-japanese-parent", q: "Does the subsidiary pay GST on fees to the Japanese parent?", a: "Usually yes, under reverse charge, with input credit where the services are used for taxable business." },
      { n: 41, id: "what-is-the-minimum-alternate-tax", q: "What is the minimum alternate tax?", a: "Companies on the concessional regime are outside minimum alternate tax; others pay it where book profit tax exceeds normal tax." },
      { n: 42, id: "when-is-advance-tax-paid", q: "When is advance tax paid?", a: "In four instalments on 15 June, 15 September, 15 December and 15 March." },
      { n: 43, id: "can-losses-be-carried-forward-in-india", q: "Can losses be carried forward in India?", a: "Business losses can generally be carried forward for eight years, subject to filing the return on time." },
      { n: 44, id: "is-there-tax-on-dividends-paid-by-the-indian-company-itself", q: "Is there tax on dividends paid by the Indian company itself?", a: "No. Since 2020 dividends are taxed in the shareholder's hands, so the company only withholds tax on dividends to the Japanese parent." },
    ],
  },
  {
    id: "growth-disputes-exit",
    label: "Growth, disputes and exit",
    items: [
      { n: 45, id: "how-does-the-japanese-parent-add-capital-later", q: "How does the Japanese parent add capital later?", a: "Through a further issue of shares at no less than fair value, with a fresh valuation, allotment within 60 days and a new FC-GPR." },
      { n: 46, id: "can-the-indian-subsidiary-acquire-another-indian-company", q: "Can the Indian subsidiary acquire another Indian company?", a: "Yes. Downstream investment by a foreign-owned Indian company follows FEMA pricing and reporting rules." },
      { n: 47, id: "can-the-subsidiary-open-branches-in-other-indian-states", q: "Can the subsidiary open branches in other Indian states?", a: "Yes. It can open offices anywhere in India, registering for GST and local labour rules in each state." },
      { n: 48, id: "how-are-disputes-with-indian-customers-usually-resolved", q: "How are disputes with Indian customers usually resolved?", a: "By arbitration under the contract, often seated in Singapore, Tokyo or India, because Japanese court judgments cannot be executed directly in India." },
      { n: 49, id: "can-an-indian-joint-venture-partner-be-bought-out", q: "Can an Indian joint venture partner be bought out?", a: "Yes, at no less than fair value under FEMA, reported in Form FC-TRS within 60 days." },
      { n: 50, id: "what-happens-if-the-subsidiary-stops-trading", q: "What happens if the subsidiary stops trading?", a: "It must keep filing until it is struck off or liquidated; late filing fees accrue and directors can be disqualified for continued non-filing." },
      { n: 51, id: "can-the-indian-company-be-merged-with-another-group-company", q: "Can the Indian company be merged with another group company?", a: "Yes, through a tribunal-approved scheme, or the fast-track route for a holding company and its wholly owned subsidiary." },
      { n: 52, id: "how-long-does-closing-an-indian-subsidiary-take", q: "How long does closing an Indian subsidiary take?", a: "Strike-off usually takes three to six months after filing; voluntary liquidation takes longer because assets and creditors must be settled." },
      { n: 53, id: "can-the-japanese-parent-get-its-capital-back-without-closing", q: "Can the Japanese parent get its capital back without closing?", a: "Through a buyback or capital reduction within company-law limits, or through dividends once there are distributable profits." },
      { n: 54, id: "does-selling-the-indian-subsidiary-need-rbi-approval", q: "Does selling the Indian subsidiary need RBI approval?", a: "Not usually. A sale follows FEMA pricing rules and is reported in Form FC-TRS through the bank." },
    ],
  },
  {
    id: "incorporation-process",
    label: "Incorporation Process for an Indian Subsidiary, Step by Step",
    readMore: { href: "/japan-to-india/incorporation-process", label: "Read the full guide: Incorporation Process for an Indian Subsidiary, Step by Step" },
    items: [
      { n: 55, id: "how-long-does-it-take-to-incorporate-an-indian-subsidiary-fr", q: "How long does it take to incorporate an Indian subsidiary from Japan?", a: "Typically 4 to 6 weeks from the day the apostilled Japanese documents reach India, with the SPICe+ filing itself taking 7 to 15 working days." },
      { n: 56, id: "which-japanese-documents-are-needed", q: "Which Japanese documents are needed?", a: "A certificate of registered matters, the articles of incorporation, a board or member resolution and identity documents for the directors, with certified English translations." },
      { n: 57, id: "who-apostilles-japanese-documents", q: "Who apostilles Japanese documents?", a: "The Ministry of Foreign Affairs of Japan. Private documents are notarised and certified by the Legal Affairs Bureau first." },
      { n: 58, id: "do-japanese-directors-need-to-come-to-india", q: "Do Japanese directors need to come to India?", a: "No. Their digital signatures are issued on apostilled passports and translated address proofs, and they sign electronically." },
      { n: 59, id: "does-a-japanese-company-need-government-approval", q: "Does a Japanese company need government approval?", a: "Not in most sectors. Press Note 3 does not apply to Japan, so the Automatic Route is available unless the sector requires approval." },
      { n: 60, id: "what-comes-after-the-certificate-of-incorporation", q: "What comes after the Certificate of Incorporation?", a: "Bank account opening, the capital remittance, share allotment within 60 days, FC-GPR within 30 days of allotment, the first auditor and INC-20A." },
      { n: 61, id: "can-the-indian-forms-be-prepared-before-the-documents-arrive", q: "Can the Indian forms be prepared before the documents arrive?", a: "Yes. Running the Indian drafting in parallel with the Japanese document steps is the main way to keep to the timeline." },
      { n: 62, id: "what-causes-most-delays", q: "What causes most delays?", a: "Name mismatches between Japanese documents and passports, expired certificates, and the internal approval of the capital remittance." },
    ],
  },
  {
    id: "subsidiary-vs-branch-vs-liaison-office-vs-llp",
    label: "Subsidiary vs Branch vs Liaison Office vs LLP in India",
    readMore: { href: "/japan-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp", label: "Read the full guide: Subsidiary vs Branch vs Liaison Office vs LLP in India" },
    items: [
      { n: 63, id: "which-structure-do-most-japanese-companies-use-in-india", q: "Which structure do most Japanese companies use in India?", a: "A wholly owned private limited subsidiary, sometimes with an Indian partner as a joint venture." },
      { n: 64, id: "can-a-japanese-company-own-100-of-an-indian-subsidiary", q: "Can a Japanese company own 100% of an Indian subsidiary?", a: "Yes, in most sectors under the Automatic Route. A few sectors cap foreign ownership or require government approval." },
      { n: 65, id: "does-a-liaison-office-need-rbi-approval", q: "Does a liaison office need RBI approval?", a: "Yes, through an authorised dealer bank, and the Japanese company must meet profit and net worth track-record tests." },
      { n: 66, id: "how-are-branch-profits-taxed", q: "How are branch profits taxed?", a: "In India at the foreign company rate, and again in Japan as part of the Japanese company's income, with credit for the Indian tax." },
      { n: 67, id: "why-are-dividends-from-a-subsidiary-attractive-for-a-japanes", q: "Why are dividends from a subsidiary attractive for a Japanese parent?", a: "Because 95% of qualifying foreign dividends are exempt from Japanese tax when the parent holds 25% or more for six months." },
      { n: 68, id: "can-a-liaison-office-be-converted-into-a-subsidiary", q: "Can a liaison office be converted into a subsidiary?", a: "Not directly. The subsidiary is incorporated, the business moves to it, and the liaison office is closed with RBI and Registrar filings." },
      { n: 69, id: "does-press-note-3-apply-to-japanese-investors", q: "Does Press Note 3 apply to Japanese investors?", a: "No, unless a beneficial owner in the Japanese company's chain is from a country sharing a land border with India." },
      { n: 70, id: "is-an-llp-a-good-option-for-a-japanese-company", q: "Is an LLP a good option for a Japanese company?", a: "Rarely. Foreign investment in LLPs is limited to certain sectors and the Japanese tax treatment needs separate review." },
    ],
  },
  {
    id: "resident-director",
    label: "Resident Director Requirement for an Indian Company",
    readMore: { href: "/japan-to-india/resident-director", label: "Read the full guide: Resident Director Requirement for an Indian Company" },
    items: [
      { n: 71, id: "does-the-resident-director-have-to-be-an-indian-citizen", q: "Does the resident director have to be an Indian citizen?", a: "No. Any individual who stayed in India for 182 days or more in the financial year qualifies, including a Japanese national posted to India." },
      { n: 72, id: "can-a-chuzaiin-be-the-resident-director", q: "Can a chuzaiin be the resident director?", a: "Yes, if the chuzaiin is in India for at least 182 days in the financial year. A full-year posting usually meets the test." },
      { n: 73, id: "what-if-the-chuzaiin-arrives-after-incorporation", q: "What if the chuzaiin arrives after incorporation?", a: "The company can appoint a professional resident director at incorporation and replace that director once the chuzaiin meets the test." },
      { n: 74, id: "does-a-professional-resident-director-control-the-company", q: "Does a professional resident director control the company?", a: "No. A professional resident director signs statutory documents only and has no authority over the bank account or commercial contracts." },
      { n: 75, id: "do-directors-living-in-japan-need-to-travel-to-india", q: "Do directors living in Japan need to travel to India?", a: "No. They need a DIN and digital signature, obtained with an apostilled passport and translated address proof, and can attend board meetings by video." },
      { n: 76, id: "what-is-dir-3-kyc", q: "What is DIR-3 KYC?", a: "An annual identity update every director files with the Ministry of Corporate Affairs by 30 September; a missed filing deactivates the DIN until a late fee is paid." },
      { n: 77, id: "can-a-resident-director-create-tax-risk-for-the-parent", q: "Can a resident director create tax risk for the parent?", a: "A director who acts for the parent, rather than the Indian company, in concluding contracts can raise permanent establishment questions, so roles should be documented." },
      { n: 78, id: "how-many-directors-does-an-indian-private-company-need", q: "How many directors does an Indian private company need?", a: "At least two, of whom at least one must meet the 182-day residence test." },
    ],
  },
  {
    id: "funding-fema-fc-gpr",
    label: "Funding an Indian Subsidiary: FEMA and Form FC-GPR",
    readMore: { href: "/japan-to-india/funding-fema-fc-gpr", label: "Read the full guide: Funding an Indian Subsidiary: FEMA and Form FC-GPR" },
    items: [
      { n: 79, id: "can-a-japanese-parent-remit-in-yen", q: "Can a Japanese parent remit in yen?", a: "Yes. The parent can send yen or US dollars. The Indian authorised dealer bank converts the money into rupees on arrival and issues a foreign inward remittance certificate (FIRC), which supports the later RBI filing." },
      { n: 80, id: "when-must-the-indian-company-allot-shares-to-the-japanese-pa", q: "When must the Indian company allot shares to the Japanese parent?", a: "Within 60 days of the money reaching the Indian bank account. If shares are not allotted in time, the amount has to be returned to the parent within the following 15 days unless the RBI allows otherwise." },
      { n: 81, id: "what-is-form-fc-gpr", q: "What is Form FC-GPR?", a: "FC-GPR is the RBI report of shares issued to a foreign investor. The Indian company files it on the FIRMS portal within 30 days of allotment, with a valuation certificate and a Company Secretary's certificate." },
      { n: 82, id: "does-the-exchange-rate-affect-the-number-of-shares", q: "Does the exchange rate affect the number of shares?", a: "Yes. Shares are priced in rupees, so the number allotted depends on the rupee amount actually credited after conversion. Fix the share count after the FIRC arrives, not from the yen amount sent." },
      { n: 83, id: "does-press-note-3-apply-to-a-japanese-investor", q: "Does Press Note 3 apply to a Japanese investor?", a: "No. Press Note 3 covers investors from countries that share a land border with India. A Japanese company uses the Automatic Route in most sectors, unless a beneficial owner in its chain is from a land-border country." },
      { n: 84, id: "can-the-japanese-parent-lend-instead-of-investing-equity", q: "Can the Japanese parent lend instead of investing equity?", a: "Yes, through an external commercial borrowing that meets the RBI's conditions on the lender, average maturity, cost and end use. The interest is subject to Indian Withholding Tax (10% under the India-Japan treaty) and transfer pricing." },
      { n: 85, id: "is-there-a-japanese-filing-for-the-investment", q: "Is there a Japanese filing for the investment?", a: "Japan's Foreign Exchange and Foreign Trade Act can require a report on an outward direct investment. The parent's Japanese adviser confirms whether one is due and the deadline." },
      { n: 86, id: "what-does-a-late-fc-gpr-cost", q: "What does a late FC-GPR cost?", a: "A Late Submission Fee of ₹7,500 plus 0.025% of the amount involved for each year of delay, for delays of up to three years. Longer or more complex cases go to compounding with the RBI." },
      { n: 87, id: "how-much-capital-do-japanese-subsidiaries-usually-start-with", q: "How much capital do Japanese subsidiaries usually start with?", a: "There is no legal minimum. Japanese groups usually fund 12 to 18 months of planned costs, so the subsidiary can hire and operate without coming back to Japan for a second approval too soon." },
      { n: 88, id: "what-is-the-fla-return", q: "What is the FLA return?", a: "An annual return of foreign liabilities and assets that every Indian company with foreign investment files with the RBI by 15 July." },
    ],
  },
  {
    id: "share-valuation",
    label: "Share Valuation for Foreign Investment in India",
    readMore: { href: "/japan-to-india/share-valuation", label: "Read the full guide: Share Valuation for Foreign Investment in India" },
    items: [
      { n: 89, id: "who-can-certify-the-value-of-shares-issued-to-a-japanese-par", q: "Who can certify the value of shares issued to a Japanese parent?", a: "A Chartered Accountant or a SEBI-registered merchant banker, using an internationally accepted pricing method." },
      { n: 90, id: "can-shares-be-issued-to-the-japanese-parent-at-face-value", q: "Can shares be issued to the Japanese parent at face value?", a: "At incorporation, usually yes, because face value equals fair value for a new company. Later issues must be at or above the fair value at that time." },
      { n: 91, id: "is-a-valuation-needed-for-every-capital-increase", q: "Is a valuation needed for every capital increase?", a: "Yes. Each issue of shares or convertible instruments to a non-resident needs a valuation supporting the price." },
      { n: 92, id: "which-method-is-used-for-an-operating-indian-subsidiary", q: "Which method is used for an operating Indian subsidiary?", a: "Usually discounted cash flow, based on the approved business plan." },
      { n: 93, id: "what-if-the-share-price-is-below-fair-value", q: "What if the share price is below fair value?", a: "The issue breaches FEMA pricing rules and needs to be corrected, often through compounding with the RBI." },
      { n: 94, id: "does-the-yen-value-of-the-investment-affect-the-indian-price", q: "Does the yen value of the investment affect the Indian price?", a: "No. The Indian price is fixed in rupees; the yen amount only decides how many shares the rupees buy." },
      { n: 95, id: "is-a-valuation-needed-when-the-parent-sells-shares-to-an-ind", q: "Is a valuation needed when the parent sells shares to an Indian buyer?", a: "Yes. The price cannot exceed fair value, and the transfer is reported in Form FC-TRS." },
      { n: 96, id: "does-the-group-s-own-impairment-test-replace-the-fema-valuat", q: "Does the group's own impairment test replace the FEMA valuation?", a: "No. The accounting review and the FEMA certificate are separate exercises with different purposes." },
    ],
  },
  {
    id: "eor-vs-subsidiary",
    label: "EOR vs Subsidiary in India: Right for a Japanese Company?",
    readMore: { href: "/japan-to-india/eor-vs-subsidiary", label: "Read the full guide: EOR vs Subsidiary in India: Right for a Japanese Company?" },
    items: [
      { n: 97, id: "what-is-an-employer-of-record-in-india", q: "What is an employer of record in India?", a: "An Indian company that legally employs staff on behalf of a foreign business, which directs the work and pays a service fee." },
      { n: 98, id: "is-an-eor-cheaper-than-a-subsidiary-for-a-japanese-company", q: "Is an EOR cheaper than a subsidiary for a Japanese company?", a: "For a few employees, usually yes. As the team grows, the per-employee fees usually make a subsidiary cheaper." },
      { n: 99, id: "can-an-eor-create-tax-risk-for-the-japanese-company", q: "Can an EOR create tax risk for the Japanese company?", a: "Yes. If the staff work as the Japanese company's fixed place of business or dependent agent, it may have a permanent establishment in India." },
      { n: 100, id: "can-chuzaiin-be-employed-through-an-eor", q: "Can chuzaiin be employed through an EOR?", a: "It is not a good fit. Posted managers are normally employed or seconded through the group's own subsidiary, which can sponsor visas." },
      { n: 101, id: "do-indian-labour-laws-apply-to-eor-staff", q: "Do Indian labour laws apply to EOR staff?", a: "Yes. The staff are Indian employees, with Indian contracts, provident fund, ESI and gratuity." },
      { n: 102, id: "how-long-does-it-take-to-form-a-subsidiary-instead", q: "How long does it take to form a subsidiary instead?", a: "About 4 to 6 weeks from receiving the apostilled Japanese documents." },
      { n: 103, id: "can-staff-move-from-the-eor-to-the-subsidiary-later", q: "Can staff move from the EOR to the subsidiary later?", a: "Yes, through new contracts with the subsidiary and an agreed settlement or transfer of benefits." },
      { n: 104, id: "who-owns-ip-created-by-eor-staff", q: "Who owns IP created by EOR staff?", a: "It depends on the EOR contract, so the agreement should assign IP to the Japanese company or the group entity that needs it." },
    ],
  },
  {
    id: "hiring-and-payroll",
    label: "Hiring in India: Contracts, Payroll and Statutory Compliance",
    readMore: { href: "/japan-to-india/hiring-and-payroll", label: "Read the full guide: Hiring in India: Contracts, Payroll and Statutory Compliance" },
    items: [
      { n: 105, id: "does-every-indian-employee-need-a-written-contract", q: "Does every Indian employee need a written contract?", a: "Yes. A written contract or appointment letter setting out pay, hours, leave and notice is expected under the labour codes." },
      { n: 106, id: "when-does-provident-fund-become-compulsory", q: "When does provident fund become compulsory?", a: "From 20 employees, though many Japanese-owned companies register earlier voluntarily." },
      { n: 107, id: "what-is-esi", q: "What is ESI?", a: "Employees' State Insurance, a medical and social security scheme for employees earning up to ₹21,000 a month." },
      { n: 108, id: "when-is-gratuity-payable", q: "When is gratuity payable?", a: "After five years of continuous service, or one year for fixed-term employees under the labour codes." },
      { n: 109, id: "can-japanese-retirement-allowances-be-offered-in-india", q: "Can Japanese retirement allowances be offered in India?", a: "They can be added, but Indian gratuity and provident fund already apply by law, so most groups do not duplicate them." },
      { n: 110, id: "is-at-will-employment-possible-in-india", q: "Is at-will employment possible in India?", a: "No. Termination follows the contract, notice and the procedures in the labour codes." },
      { n: 111, id: "when-is-tax-on-salaries-deposited", q: "When is tax on salaries deposited?", a: "By the 7th of the following month, with quarterly TDS returns." },
      { n: 112, id: "do-the-labour-codes-change-salary-structures", q: "Do the labour codes change salary structures?", a: "Yes. Wages must be at least 50% of total pay for provident fund and gratuity, so allowance-heavy structures may need changing." },
    ],
  },
  {
    id: "expat-visa",
    label: "Sending a Japanese Executive to India: Visa, Housing and Tax",
    readMore: { href: "/japan-to-india/expat-visa", label: "Read the full guide: Sending a Japanese Executive to India: Visa, Housing and Tax" },
    items: [
      { n: 113, id: "what-visa-does-a-japanese-chuzaiin-need-for-india", q: "What visa does a Japanese chuzaiin need for India?", a: "An Employment Visa sponsored by the Indian company, with family members on dependant visas." },
      { n: 114, id: "when-must-a-chuzaiin-register-with-the-frro", q: "When must a chuzaiin register with the FRRO?", a: "Within 14 days of arrival, if the stay will exceed 180 days." },
      { n: 115, id: "does-a-chuzaiin-pay-into-the-indian-provident-fund", q: "Does a chuzaiin pay into the Indian provident fund?", a: "Not if the Japan Pension Service has issued a Certificate of Coverage under the India-Japan Social Security Agreement, which keeps the employee in Japanese pension insurance for up to five years." },
      { n: 116, id: "when-does-a-chuzaiin-become-tax-resident-in-india", q: "When does a chuzaiin become tax resident in India?", a: "Usually after staying 182 days or more in the Indian financial year." },
      { n: 117, id: "is-salary-paid-in-japan-taxed-in-india", q: "Is salary paid in Japan taxed in India?", a: "Yes, to the extent it relates to work done in India." },
      { n: 118, id: "can-a-chuzaiin-create-tax-risk-for-the-japanese-parent", q: "Can a chuzaiin create tax risk for the Japanese parent?", a: "Yes, if he or she concludes contracts for the parent in India; the role should be with the Indian company." },
      { n: 119, id: "are-housing-allowances-taxable-in-india", q: "Are housing allowances taxable in India?", a: "Generally yes, as perquisites, under the valuation rules for employer-provided accommodation." },
      { n: 120, id: "can-a-chuzaiin-be-the-resident-director-2", q: "Can a chuzaiin be the resident director?", a: "Yes, once he or she meets the 182-day test in the financial year." },
    ],
  },
  {
    id: "esop",
    label: "ESOPs for Indian Employees of a Japanese Parent Company",
    readMore: { href: "/japan-to-india/esop", label: "Read the full guide: ESOPs for Indian Employees of a Japanese Parent Company" },
    items: [
      { n: 121, id: "can-indian-employees-join-a-japanese-parent-s-stock-option-p", q: "Can Indian employees join a Japanese parent's stock option plan?", a: "Yes. Indian residents can acquire shares of a foreign parent under an employee plan, subject to FEMA conditions and reporting." },
      { n: 122, id: "when-are-indian-employees-taxed-on-parent-plan-awards", q: "When are Indian employees taxed on parent-plan awards?", a: "At exercise of an option or vesting of an RSU, on the fair market value less the price paid, as salary; and again on sale, as capital gains." },
      { n: 123, id: "who-withholds-the-tax-on-exercise", q: "Who withholds the tax on exercise?", a: "The Indian employer, through payroll, in the month of the taxable event." },
      { n: 124, id: "how-is-the-value-of-japanese-listed-shares-set-for-indian-ta", q: "How is the value of Japanese-listed shares set for Indian tax?", a: "From the market price on the exercise or vesting date, converted into rupees at the prescribed exchange rate." },
      { n: 125, id: "can-the-japanese-parent-recharge-the-cost-to-the-indian-subs", q: "Can the Japanese parent recharge the cost to the Indian subsidiary?", a: "Yes, under a written agreement priced at arm's length, with Withholding Tax reviewed." },
      { n: 126, id: "do-employees-need-to-report-japanese-shares-in-india", q: "Do employees need to report Japanese shares in India?", a: "Yes, in Schedule FA of the Indian income tax return, along with any dividends." },
      { n: 127, id: "what-is-the-long-term-capital-gains-rate-on-the-shares", q: "What is the long-term capital gains rate on the shares?", a: "12.5% for shares held more than 24 months, plus surcharge and cess." },
      { n: 128, id: "what-does-an-indian-esop-need-under-company-law", q: "What does an Indian ESOP need under company law?", a: "A shareholders' special resolution filed in Form MGT-14 and a minimum one-year gap between grant and vesting." },
    ],
  },
  {
    id: "transfer-pricing",
    label: "Transfer Pricing in India for Japanese-Owned Subsidiaries",
    readMore: { href: "/japan-to-india/transfer-pricing", label: "Read the full guide: Transfer Pricing in India for Japanese-Owned Subsidiaries" },
    items: [
      { n: 129, id: "which-transactions-with-the-japanese-parent-need-transfer-pr", q: "Which transactions with the Japanese parent need transfer pricing?", a: "Services, goods, royalties, management fees, cost allocations, loans and guarantees between the subsidiary and any group company outside India." },
      { n: 130, id: "what-is-form-48", q: "What is Form 48?", a: "The accountant's report on international transactions under the Income-tax Act, 2025, previously Form 3CEB, certified by a Chartered Accountant." },
      { n: 131, id: "when-is-documentation-required", q: "When is documentation required?", a: "When international transactions in a year exceed ₹1 crore in total." },
      { n: 132, id: "how-are-captive-service-centres-priced", q: "How are captive service centres priced?", a: "Usually at cost plus a mark-up benchmarked against independent service companies." },
      { n: 133, id: "does-the-japanese-tax-authority-check-the-same-price", q: "Does the Japanese tax authority check the same price?", a: "Yes. Japan's National Tax Agency reviews the parent's side, so both files should use the same method and margin." },
      { n: 134, id: "has-india-signed-bilateral-apas-with-japan", q: "Has India signed bilateral APAs with Japan?", a: "India and Japan negotiate bilateral Advance Pricing Agreements for groups that apply, fixing the method for future years." },
      { n: 135, id: "what-is-the-penalty-for-missing-documentation", q: "What is the penalty for missing documentation?", a: "2% of the value of each international transaction, and ₹1 lakh for not filing Form 48." },
      { n: 136, id: "when-should-a-year-end-adjustment-be-made", q: "When should a year-end adjustment be made?", a: "Before the books close on 31 March, so GST, Withholding Tax and customs can follow it." },
    ],
  },
  {
    id: "repatriating-profits",
    label: "Repatriating Profits from India to Japan: Forms and Tax",
    readMore: { href: "/japan-to-india/repatriating-profits", label: "Read the full guide: Repatriating Profits from India to Japan: Forms and Tax" },
    items: [
      { n: 137, id: "what-is-the-indian-tax-on-dividends-paid-to-a-japanese-paren", q: "What is the Indian tax on dividends paid to a Japanese parent?", a: "10% under the India-Japan treaty, with a Japanese Certificate of Residence and Form 41, against a higher domestic rate." },
      { n: 138, id: "are-dividends-from-india-taxed-in-japan", q: "Are dividends from India taxed in Japan?", a: "If the parent holds 25% or more for six months, 95% of the dividend is exempt under Japan's foreign dividend exemption." },
      { n: 139, id: "what-rate-applies-to-royalties-paid-to-japan", q: "What rate applies to royalties paid to Japan?", a: "10% under the treaty, against higher domestic rates." },
      { n: 140, id: "are-service-fees-to-the-japanese-parent-taxed-in-india", q: "Are service fees to the Japanese parent taxed in India?", a: "Fees for technical services are taxed at up to 10% under the treaty; other service fees are business profits, taxed in India only if the parent has a permanent establishment." },
      { n: 141, id: "what-is-a-certificate-of-residence", q: "What is a Certificate of Residence?", a: "A certificate from the Japanese tax office confirming the parent is resident in Japan for the treaty, needed to claim the 10% rate." },
      { n: 142, id: "what-are-forms-145-and-146", q: "What are Forms 145 and 146?", a: "The remittance declarations that replaced Forms 15CA and 15CB under the Income-tax Act, 2025." },
      { n: 143, id: "can-a-loss-making-subsidiary-pay-a-dividend", q: "Can a loss-making subsidiary pay a dividend?", a: "No. Dividends need distributable profits after the audited accounts are approved." },
      { n: 144, id: "is-gst-due-on-fees-and-royalties-paid-to-japan", q: "Is GST due on fees and royalties paid to Japan?", a: "Yes, usually under reverse charge by the Indian subsidiary, with input credit where eligible." },
    ],
  },
  {
    id: "compliance-calendar",
    label: "India Subsidiary Compliance Calendar for Japanese Companies",
    readMore: { href: "/japan-to-india/compliance-calendar", label: "Read the full guide: India Subsidiary Compliance Calendar for Japanese Companies" },
    items: [
      { n: 145, id: "does-a-japanese-parent-with-a-31-march-year-end-avoid-a-repo", q: "Does a Japanese parent with a 31 March year end avoid a reporting bridge?", a: "Mostly, because both years end on 31 March. The Indian accounts still follow Indian standards, so the group pack maps them to J-GAAP or IFRS." },
      { n: 146, id: "when-must-the-indian-agm-be-held", q: "When must the Indian AGM be held?", a: "Within six months of the year end, so by 30 September for a 31 March year." },
      { n: 147, id: "when-is-the-indian-income-tax-return-due", q: "When is the Indian income tax return due?", a: "By 31 October, or 30 November where the company must file a transfer pricing report." },
      { n: 148, id: "what-is-the-fla-return-2", q: "What is the FLA return?", a: "An annual RBI return of foreign liabilities and assets, due by 15 July from every Indian company with foreign investment." },
      { n: 149, id: "when-is-withholding-tax-on-payments-to-japan-deposited", q: "When is Withholding Tax on payments to Japan deposited?", a: "By the 7th of the following month, with the treaty rate supported by a Certificate of Residence and Form 41." },
      { n: 150, id: "how-many-board-meetings-are-needed", q: "How many board meetings are needed?", a: "Four a year with no more than 120 days between two meetings, with relaxations for small companies." },
      { n: 151, id: "what-is-inc-20a", q: "What is INC-20A?", a: "A declaration that the subscribers have paid for their shares, filed within 180 days of incorporation before the company starts business." },
      { n: 152, id: "who-files-dir-3-kyc", q: "Who files DIR-3 KYC?", a: "Every director with a DIN, including directors living in Japan, by 30 September each year." },
    ],
  },
  {
    id: "audit-icofr",
    label: "Audit and ICOFR for Indian Subsidiaries of Japanese Companies",
    readMore: { href: "/japan-to-india/audit-icofr", label: "Read the full guide: Audit and ICOFR for Indian Subsidiaries of Japanese Companies" },
    items: [
      { n: 153, id: "does-every-indian-subsidiary-need-an-audit", q: "Does every Indian subsidiary need an audit?", a: "Yes. Every company must have its financial statements audited each year by a Chartered Accountant, whatever its size." },
      { n: 154, id: "when-is-the-first-auditor-appointed", q: "When is the first auditor appointed?", a: "By the board within 30 days of incorporation; shareholders then appoint the auditor for a five-year term." },
      { n: 155, id: "is-an-indian-subsidiary-within-j-sox-scope", q: "Is an Indian subsidiary within J-SOX scope?", a: "It can be, if it is significant to the listed Japanese parent's financial reporting, in which case its controls are documented and tested." },
      { n: 156, id: "which-accounting-standards-apply-in-india", q: "Which accounting standards apply in India?", a: "Indian GAAP for most private companies, or Ind AS where thresholds or group requirements apply." },
      { n: 157, id: "how-do-the-indian-accounts-reach-the-japanese-parent", q: "How do the Indian accounts reach the Japanese parent?", a: "Through a group reporting pack prepared under J-GAAP or IFRS, with adjustments from the Indian statutory accounts." },
      { n: 158, id: "is-a-tax-audit-always-required", q: "Is a tax audit always required?", a: "Only once turnover crosses the threshold in the Income-tax Act." },
      { n: 159, id: "what-is-form-48-2", q: "What is Form 48?", a: "The accountant's report on international transactions with associated enterprises, previously Form 3CEB." },
      { n: 160, id: "does-the-same-year-end-make-the-audit-easier", q: "Does the same year end make the audit easier?", a: "It aligns the timetables, but the parent usually needs Indian figures within weeks of 31 March, so the close must be fast." },
    ],
  },
  {
    id: "tax-notices-and-litigation",
    label: "Handling Indian Tax Notices for a Japanese-Owned Subsidiary",
    readMore: { href: "/japan-to-india/tax-notices-and-litigation", label: "Read the full guide: Handling Indian Tax Notices for a Japanese-Owned Subsidiary" },
    items: [
      { n: 161, id: "what-should-a-japanese-owned-subsidiary-do-first-on-receivin", q: "What should a Japanese-owned subsidiary do first on receiving a notice?", a: "Note the section, the tax year and the response date, collect the documents asked for, and inform the parent's tax team if payments to Japan are involved." },
      { n: 162, id: "why-do-withholding-tax-queries-arise-on-payments-to-japan", q: "Why do Withholding Tax queries arise on payments to Japan?", a: "Usually because the 10% treaty rate was applied without a Japanese Certificate of Residence and Form 41 on file for that period." },
      { n: 163, id: "what-is-the-dispute-resolution-panel", q: "What is the Dispute Resolution Panel?", a: "A panel that hears objections to a draft assessment for foreign-owned companies, often in transfer pricing cases, before the final order." },
      { n: 164, id: "can-india-and-japan-resolve-double-taxation", q: "Can India and Japan resolve double taxation?", a: "Yes, through the Mutual Agreement Procedure in the India-Japan treaty, where the two tax authorities negotiate a solution." },
      { n: 165, id: "what-is-a-bilateral-advance-pricing-agreement", q: "What is a bilateral Advance Pricing Agreement?", a: "An agreement with both the Indian and Japanese tax authorities that fixes the transfer pricing method for future years." },
      { n: 166, id: "how-long-is-there-to-file-a-first-income-tax-appeal", q: "How long is there to file a first income tax appeal?", a: "Generally 30 days from the order, before the Commissioner (Appeals)." },
      { n: 167, id: "do-gst-notices-follow-the-same-route", q: "Do GST notices follow the same route?", a: "No. GST disputes have their own show cause, adjudication and appellate stages." },
      { n: 168, id: "how-can-notices-be-reduced", q: "How can notices be reduced?", a: "Reconcile tax data each quarter, keep treaty documents current and keep intercompany agreements and evidence ready." },
    ],
  },
  {
    id: "contracts-and-arbitration",
    label: "Contracts and Arbitration in India for Japanese Companies",
    readMore: { href: "/japan-to-india/contracts-and-arbitration", label: "Read the full guide: Contracts and Arbitration in India for Japanese Companies" },
    items: [
      { n: 169, id: "can-a-japanese-court-judgment-be-enforced-in-india", q: "Can a Japanese court judgment be enforced in India?", a: "Not directly. Japan is not a reciprocating territory under Section 44A of the Code of Civil Procedure, so the winning party must file a fresh suit in India, using the Japanese judgment as evidence." },
      { n: 170, id: "is-a-jcaa-arbitration-award-enforceable-in-india", q: "Is a JCAA arbitration award enforceable in India?", a: "Yes. Japan and India are both parties to the New York Convention, so an award seated in Japan can be enforced in India under Part II of the Arbitration and Conciliation Act, 1996, on limited grounds of refusal." },
      { n: 171, id: "can-japanese-law-govern-a-contract-with-an-indian-customer", q: "Can Japanese law govern a contract with an Indian customer?", a: "Usually yes for commercial terms, but Indian mandatory rules still apply, including stamp duty, employment law, data protection and competition law." },
      { n: 172, id: "does-stamp-duty-apply-to-an-intercompany-agreement", q: "Does stamp duty apply to an intercompany agreement?", a: "Yes, in most states. Rates depend on the state and the type of document, and an unstamped agreement can be impounded or rejected as evidence until duty and penalty are paid." },
      { n: 173, id: "which-seat-do-japanese-groups-usually-choose", q: "Which seat do Japanese groups usually choose?", a: "Tokyo under JCAA rules when the Japanese side wants a familiar forum, Singapore under SIAC rules as a neutral seat, and an Indian seat when the counterparty's assets are in India." },
      { n: 174, id: "do-intercompany-agreements-need-to-be-signed-before-services", q: "Do intercompany agreements need to be signed before services start?", a: "Yes. A signed agreement before the first invoice supports the transfer pricing method, the Withholding Tax position and the deduction of the expense in India." },
      { n: 175, id: "can-a-liquidated-damages-clause-be-enforced-as-written-in-in", q: "Can a liquidated damages clause be enforced as written in India?", a: "An Indian court awards reasonable compensation up to the agreed amount, not the agreed amount automatically, so draft the figure as a genuine pre-estimate." },
      { n: 176, id: "is-there-a-time-limit-for-an-arbitration-in-india", q: "Is there a time limit for an arbitration in India?", a: "A domestic award must be made within 12 months of the completion of pleadings, extendable by six months by consent. International commercial arbitration is outside this limit." },
    ],
  },
  {
    id: "global-vat",
    label: "Global VAT for Japanese Companies Selling Abroad",
    readMore: { href: "/japan-to-india/global-vat", label: "Read the full guide: Global VAT for Japanese Companies Selling Abroad" },
    items: [
      { n: 177, id: "does-a-japanese-app-seller-need-indian-gst-registration", q: "Does a Japanese app seller need Indian GST registration?", a: "Yes, if it sells online services to Indian consumers. There is no threshold for OIDAR services, and the rate is 18% IGST." },
      { n: 178, id: "what-if-the-indian-customers-are-businesses", q: "What if the Indian customers are businesses?", a: "Indian businesses registered for GST account for the tax under reverse charge, so the Japanese seller usually does not register for those sales." },
      { n: 179, id: "what-return-does-an-oidar-supplier-file-in-india", q: "What return does an OIDAR supplier file in India?", a: "GSTR-5A, monthly, with payment of the IGST collected." },
      { n: 180, id: "is-income-tax-also-due-in-india-on-software-sales", q: "Is income tax also due in India on software sales?", a: "Possibly. Depending on the facts, software payments can be royalties or fees for technical services taxed at up to 10% under the India-Japan treaty, or business income with no Indian tax if there is no permanent establishment." },
      { n: 181, id: "can-the-indian-subsidiary-handle-gst-for-the-parent-s-sales", q: "Can the Indian subsidiary handle GST for the parent's sales?", a: "Only if the subsidiary itself sells to Indian customers. Otherwise the registration belongs to the Japanese seller." },
      { n: 182, id: "is-an-export-of-services-by-the-indian-subsidiary-taxed", q: "Is an export of services by the Indian subsidiary taxed?", a: "Exports of services that meet the GST conditions are zero-rated, so the subsidiary charges no GST to the Japanese parent and can claim refunds of input tax." },
      { n: 183, id: "how-is-the-customer-s-location-proved", q: "How is the customer's location proved?", a: "With evidence such as the billing address, IP address, bank or card country, or SIM country, depending on each country's rules." },
      { n: 184, id: "do-these-rules-apply-to-physical-goods", q: "Do these rules apply to physical goods?", a: "No. Physical goods are taxed on import through customs and import VAT or GST, which follow different rules." },
    ],
  },
  {
    id: "restructuring-and-exit",
    label: "Restructuring, Mergers and Exit for an Indian Subsidiary",
    readMore: { href: "/japan-to-india/restructuring-and-exit", label: "Read the full guide: Restructuring, Mergers and Exit for an Indian Subsidiary" },
    items: [
      { n: 185, id: "can-a-japanese-parent-move-its-indian-subsidiary-under-a-sin", q: "Can a Japanese parent move its Indian subsidiary under a Singapore regional headquarters?", a: "Yes, by transferring the shares to the regional company. It is a sale between two non-residents, so FEMA pricing is not tested the same way as a sale to a resident, but Indian capital gains tax and the treaty position of both the seller and the new holder must be checked first." },
      { n: 186, id: "how-are-two-indian-subsidiaries-of-the-same-japanese-group-c", q: "How are two Indian subsidiaries of the same Japanese group combined?", a: "Through a merger scheme approved by the National Company Law Tribunal, or the fast-track route under Section 233 of the Companies Act, 2013 where one is the wholly owned subsidiary of the other." },
      { n: 187, id: "what-tax-applies-when-the-japanese-parent-sells-the-indian-s", q: "What tax applies when the Japanese parent sells the Indian shares?", a: "Long-term capital gains on unlisted Indian shares held for more than 24 months are taxed at 12.5% plus surcharge and cess under Indian law, subject to the India-Japan treaty. The buyer usually withholds tax from the price." },
      { n: 188, id: "which-form-reports-a-share-sale-to-the-rbi", q: "Which form reports a share sale to the RBI?", a: "Form FC-TRS, filed within 60 days of the transfer or the receipt of the consideration, whichever is earlier, when shares move between a resident and a non-resident." },
      { n: 189, id: "how-long-does-a-strike-off-take", q: "How long does a strike-off take?", a: "Usually three to six months after Form STK-2 is filed. The company must have had no business for the two previous financial years, or never started, and must have cleared its liabilities." },
      { n: 190, id: "when-is-voluntary-liquidation-used-instead-of-strike-off", q: "When is voluntary liquidation used instead of strike-off?", a: "When the company has traded, holds assets or has employees, contracts or tax matters to settle. A liquidator realises the assets, pays creditors and distributes the surplus under the Insolvency and Bankruptcy Code." },
      { n: 191, id: "how-is-the-final-surplus-sent-to-japan", q: "How is the final surplus sent to Japan?", a: "After taxes and creditors are paid and the accounts are final, the bank remits the surplus with Forms 145 and 146 (previously 15CA and 15CB), and the change is reported to the RBI." },
      { n: 192, id: "does-selling-the-japanese-parent-create-indian-tax", q: "Does selling the Japanese parent create Indian tax?", a: "It can. India's indirect transfer rules can tax a sale of a foreign company whose value comes substantially from Indian assets, so a group-level transaction needs an Indian review." },
    ],
  },
  {
    id: "common-mistakes",
    label: "10 Common Mistakes Japanese Companies Make Setting Up in India",
    readMore: { href: "/japan-to-india/common-mistakes", label: "Read the full guide: 10 Common Mistakes Japanese Companies Make Setting Up in India" },
    items: [
      { n: 193, id: "what-is-the-most-common-mistake-japanese-companies-make-in-i", q: "What is the most common mistake Japanese companies make in India?", a: "Running internal approvals and Indian deadlines on separate tracks, so that allotment, reporting or auditor appointments miss their fixed windows." },
      { n: 194, id: "why-do-japanese-documents-get-rejected", q: "Why do Japanese documents get rejected?", a: "Usually because the steps were done out of order, the translation is uncertified, or the certificate of registered matters is older than MOFA accepts for an apostille." },
      { n: 195, id: "can-a-chuzaiin-sign-contracts-for-the-japanese-parent-in-ind", q: "Can a chuzaiin sign contracts for the Japanese parent in India?", a: "It is risky. A person in India who habitually concludes contracts for the parent can create a permanent establishment, so contracts should be signed by the Indian company." },
      { n: 196, id: "do-japanese-employment-practices-apply-to-indian-staff", q: "Do Japanese employment practices apply to Indian staff?", a: "No. Indian employees are covered by Indian contracts, the labour codes and state rules, including notice, leave and gratuity after five years." },
      { n: 197, id: "is-a-certificate-of-coverage-needed-for-every-seconded-emplo", q: "Is a Certificate of Coverage needed for every seconded employee?", a: "It is needed for each employee who should stay in Japanese pension insurance and be exempt from Indian provident fund, for up to five years." },
      { n: 198, id: "what-happens-if-shares-are-not-allotted-within-60-days", q: "What happens if shares are not allotted within 60 days?", a: "The money must be returned to the Japanese parent within the next 15 days unless the RBI allows otherwise, and the remittance has to be repeated." },
      { n: 199, id: "does-the-parent-s-31-march-year-end-remove-all-reporting-wor", q: "Does the parent's 31 March year end remove all reporting work?", a: "It aligns the years, but the Indian accounts still follow Indian standards and timelines, so group packs need a mapping to J-GAAP or IFRS." },
      { n: 200, id: "when-should-the-resident-director-be-decided", q: "When should the resident director be decided?", a: "Before incorporation, because the director's DIN and digital signature are needed for the SPICe+ filing." },
    ],
  },
  {
    id: "dtaa-pe-risk",
    label: "India-Japan Tax Treaty and Permanent Establishment Risk",
    readMore: { href: "/japan-to-india/dtaa-pe-risk", label: "Read the full guide: India-Japan Tax Treaty and Permanent Establishment Risk" },
    items: [
      { n: 201, id: "what-is-a-dtaa", q: "What is a DTAA?", a: "A double taxation avoidance agreement. It allocates taxing rights between two countries and can reduce Withholding Tax on cross-border payments." },
      { n: 202, id: "what-does-the-parent-need-to-claim-treaty-rates", q: "What does the parent need to claim treaty rates?", a: "A Japanese certificate of residence, Form 41 (previously Form 10F) and, where asked, a declaration of no permanent establishment in India." },
      { n: 203, id: "is-an-indian-subsidiary-a-permanent-establishment-of-the-jap", q: "Is an Indian subsidiary a permanent establishment of the Japanese parent?", a: "An Indian subsidiary is not a permanent establishment of the Japanese parent by itself. The risk arises if the subsidiary acts as the parent's dependent agent, or if the parent's own staff operate from India." },
      { n: 204, id: "which-section-governs-withholding-tax-on-payments-to-a-non-r", q: "Which section governs Withholding Tax on payments to a non-resident?", a: "Section 393 of the Income-tax Act, 2025 (previously Section 195 of the 1961 Act)." },
      { n: 205, id: "can-the-indian-tax-be-credited-in-japan", q: "Can the Indian tax be credited in Japan?", a: "Indian tax can usually be credited in Japan as a foreign tax credit under Japanese rules. This should be confirmed with a Japanese tax adviser." },
      { n: 206, id: "how-many-days-of-work-in-india-create-a-permanent-establishm", q: "How many days of work in India create a permanent establishment under the India-Japan treaty?", a: "Under Article 5 of the India-Japan treaty, services furnished in India through employees or other personnel create a permanent establishment if the activities continue for more than 90 days within any 12-month period. A building, construction, installation or assembly project creates one after more than 120 days within any 12-month period." },
      { n: 207, id: "what-are-the-india-japan-treaty-withholding-rates", q: "What are the India-Japan treaty withholding rates?", a: "The India-Japan treaty caps Indian withholding at 15% on dividends where the Japanese company holds at least 10% of the voting power (25% otherwise), 10% on interest paid to banks and 15% on other interest, and 15% on royalties and fees for included services (10% for equipment royalties). The treaty rate applies only with a Japanese certificate of residence and Form 41 (previously Form 10F)." },
    ],
  },
  {
    id: "documents-and-apostille",
    label: "Documents and Apostille for a Japanese Parent Company",
    readMore: { href: "/japan-to-india/documents-and-apostille", label: "Read the full guide: Documents and Apostille for a Japanese Parent Company" },
    items: [
      { n: 208, id: "which-japanese-documents-need-an-apostille-for-an-indian-sub", q: "Which Japanese documents need an apostille for an Indian subsidiary, and who issues it?", a: "The Japanese parent's certificate of registered matters and seal certificate, its articles of incorporation, the board resolution authorizing the investment, and the passports and address proofs of its directors and authorized signatory all need an apostille, with English translations. The Ministry of Foreign Affairs of Japan issues apostilles. Official documents from the Legal Affairs Bureau are apostilled directly, while private documents such as board resolutions are notarized and certified by the Legal Affairs Bureau first. No Indian embassy legalization is needed." },
      { n: 209, id: "are-india-and-japan-both-members-of-the-hague-apostille-conv", q: "Are India and Japan both members of the Hague Apostille Convention?", a: "India and Japan are both members of the Hague Apostille Convention. Documents apostilled in Japan are accepted in India without further consular legalization." },
      { n: 210, id: "how-long-does-an-apostille-take", q: "How long does an apostille take?", a: "An apostille takes from some days to a few weeks, depending on the documents and the steps involved: private documents need notarization and Legal Affairs Bureau certification before the Ministry of Foreign Affairs apostille, and postal time is added. This is usually the main variable in the overall incorporation timeline." },
      { n: 211, id: "what-does-an-apostille-cost-in-japan", q: "What does an apostille cost in Japan?", a: "The Ministry of Foreign Affairs charges a fee per apostille, and notarization, Legal Affairs Bureau certification and English translation are charged separately by the notary, the Bureau and the translator. Confirm the current fees on the Ministry's website before ordering." },
    ],
  },
  {
    id: "japan-parent-obligations",
    label: "Japanese Parent Reporting for an Indian Subsidiary",
    readMore: { href: "/japan-to-india/japan-parent-obligations", label: "Read the full guide: Japanese Parent Reporting for an Indian Subsidiary" },
    items: [
      { n: 212, id: "does-a-japanese-company-have-to-report-its-indian-subsidiary", q: "Does a Japanese company have to report its Indian subsidiary to Japan's National Tax Agency?", a: "A Japanese company generally reflects its Indian subsidiary in its Japanese corporate tax return, including tests under the CFC rules, the foreign dividend exemption and transfer pricing documentation. This should be confirmed with a Japanese tax adviser." },
      { n: 213, id: "will-the-indian-financial-year-cause-problems", q: "Will the Indian financial year cause problems?", a: "The Indian financial year needs planning, because the Indian year ends 31 March and a Japanese parent often reports on a different year-end. A reporting bridge solves this." },
      { n: 214, id: "who-prepares-the-japanese-filings-for-an-indian-subsidiary", q: "Who prepares the Japanese filings for an Indian subsidiary?", a: "The Japanese parent's tax adviser (zeirishi) prepares them, because Japanese filings are outside the scope of the Indian adviser. The Indian financial information the Japanese adviser needs is supplied by the subsidiary's accountants." },
      { n: 215, id: "does-japan-require-reporting-of-the-indian-bank-account", q: "Does Japan require reporting of the Indian bank account?", a: "Japan has overseas asset reporting for individuals above specified thresholds, and a company includes the subsidiary and its accounts in its financial statements and tax return. Whether any separate report applies depends on who holds the account and the amounts, so confirm it with a Japanese tax adviser." },
      { n: 216, id: "what-happens-if-japanese-reporting-on-the-subsidiary-is-miss", q: "What happens if Japanese reporting on the subsidiary is missed?", a: "Penalties and tax adjustments under Japanese law can apply for missed returns, schedules or documentation, and the amounts depend on the failure. This is why the Japanese side should be set up at the start with a Japanese tax adviser." },
    ],
  },
]

const allFaqs = faqGroups.flatMap((group) => group.items)

export default function JapanToIndiaFaqPage() {
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
        headline="216 Questions About Setting Up and Running a Subsidiary in India"
        description="216 plain answers for Japanese companies: incorporation, FEMA, tax, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "216 FAQs" },
        ]}
      />

      <GuideHero
        eyebrow="FAQ for Japanese companies"
        title="216 Questions About Setting Up and Running a Subsidiary in India"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideAnswerBox title="How to use this page">
          The first five groups answer the general questions Japanese head offices raise when planning India.
          The groups after them follow each topic guide in the series, from incorporation to exit, with a link
          to the full guide at the end of each group. For the step-by-step picture, start with the{" "}
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">complete guide</Link>{" "}
          for Japanese companies.
        </GuideAnswerBox>

        <p className="text-gray-600 leading-relaxed mb-8">
          Indian tax law changed on 1 April 2026: the Income-tax Act, 2025 and Income-tax Rules, 2026 replace
          the 1961 Act. Where a form or section has a new name, we give the new name with the earlier one in
          brackets. General information only; confirm current requirements before acting.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
          Looking for the tax treaty or social security for Japanese expats? See the dedicated{" "}
          <Link href="/japan-to-india/tax-and-social-security-treaties/faq" className="text-blue-800 font-semibold hover:underline">treaty and social security FAQs</Link>{" "}
          and the{" "}
          <Link href="/japan-to-india/tax-and-social-security-treaties" className="text-blue-800 font-semibold hover:underline">complete treaty guide</Link>.
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

        <GuideServiceBox path="/japan-to-india/faq" />
        <GuideCTA
          title="Have a question that is not here?"
          description="Tell us about your plan and we will answer it on a call."
        />

        <p className="mb-10">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 20 October 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="A Question the 216 Answers Don't Cover?"
        description="Tell us what is specific to your Japanese parent, and we'll answer it directly on a call."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  )
}
