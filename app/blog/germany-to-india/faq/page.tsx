import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideServiceBox } from "@/components/guide/GuideServiceBox"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/faq"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "general", label: "Before you start: structure, cost and approvals" },
  { id: "common-mistakes", label: "Common Mistakes German Companies Make When Entering India" },
  { id: "compliance-calendar", label: "Compliance Calendar for an Indian Subsidiary of a German Company" },
  { id: "contracts-courts-arbitration", label: "Contracts, Courts and Arbitration: Protecting a German Parent and Enforcing in India" },
  { id: "data-protection-gdpr-dpdp", label: "Data Protection for German Companies in India: GDPR Transfers and India's DPDP Act" },
  { id: "documents-handelsregister-apostille", label: "Documents for an Indian Subsidiary: Handelsregister Extract, Notary and Apostille from Germany" },
  { id: "exit-and-restructuring", label: "Exit and Restructuring: Selling, Winding Up or Reorganising an Indian Subsidiary" },
  { id: "funding-and-fema", label: "Funding an Indian Subsidiary from Germany: Equity, ECB, Hermes-Covered Loans and FEMA Reporting" },
  { id: "gcc-for-german-companies", label: "Global Capability Centres in India for German Companies: Engineering, IT and Shared Services" },
  { id: "german-employees-in-india-ssa", label: "German Employees in India: Treaty, Social Security Agreement and Certificate of Coverage" },
  { id: "german-parent-obligations", label: "German Parent Obligations: Tax, Reporting and Law for a Company with an Indian Subsidiary" },
  { id: "hiring-in-india", label: "Hiring in India for a German Company: Contracts, Provident Fund, Labour Codes and Share Plans" },
  { id: "incorporation-steps", label: "Incorporating an Indian Subsidiary from Germany: Who Does What, and When" },
  { id: "india-eu-fta-and-germany", label: "India-EU Free Trade Agreement: What It Means for German Companies Entering India" },
  { id: "india-germany-dtaa", label: "India-Germany DTAA: Article-by-Article Guide to the Tax Treaty for German Companies" },
  { id: "relocate-german-staff", label: "Sending German Employees to India: Visas, Tax, Social Security and Permanent Establishment" },
  { id: "repatriating-profits", label: "Repatriating Profits from India to Germany: Dividends, Fees, Royalties and Loans" },
  { id: "structure-options", label: "Choosing an Indian Structure from Germany: Subsidiary, Joint Venture, Branch, LLP or EOR" },
  { id: "supply-chain-and-esg-duties", label: "Supply Chain, ESG and Customs: What German Rules Mean for Your Indian Operations" },
  { id: "transfer-pricing", label: "Transfer Pricing Between Germany and India: Form 48, Documentation and Function Transfers" },
]

type FaqItem = { n: number; id: string; q: string; a: string }
type FaqGroup = { id: string; label: string; readMore?: { href: string; label: string }; items: FaqItem[] }

const faqGroups: FaqGroup[] = [
  {
    id: "general",
    label: "Before you start: structure, cost and approvals",
    items: [
      { n: 1, id: "can-a-german-company-own-100-of-an-indian-subsidiary", q: "Can a German company own 100% of an Indian subsidiary?", a: "Yes, in most sectors. India allows 100% foreign ownership under the Automatic Route for most activities. A few sectors have caps, conditions or need approval, so check your activity against the FDI Policy before committing." },
      { n: 2, id: "does-a-german-company-need-to-send-anyone-to-india-to-set-up", q: "Does a German company need to send anyone to India to set up a subsidiary?", a: "No. The filing is online. Directors need Digital Signature Certificates and identity documents that are notarised and apostilled. India is three and a half to four and a half hours ahead of Germany, depending on daylight saving, so calls need planning but are easy." },
      { n: 3, id: "how-long-does-it-take-to-set-up-an-indian-subsidiary-from-ge", q: "How long does it take to set up an Indian subsidiary from Germany?", a: "Usually four to six weeks from complete documents, and around twelve weeks to a working bank account, payroll and first filings. German documents with an apostille and a sworn translation are the usual cause of delay." },
      { n: 4, id: "what-does-it-cost-to-set-up-a-subsidiary-in-india", q: "What does it cost to set up a subsidiary in India?", a: "AU Corporate's fee for setting up the subsidiary is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about €9,400 at an indicative ₹106.31 per euro on 23 October 2026). The costing depends on your plan." },
      { n: 5, id: "is-there-a-minimum-share-capital-for-an-indian-private-limit", q: "Is there a minimum share capital for an Indian private limited company?", a: "No statutory minimum. The practical amount depends on your first 12 to 18 months of costs and on any sector rule." },
      { n: 6, id: "what-is-the-automatic-route", q: "What is the Automatic Route?", a: "The route under the FDI Policy that lets a foreign investor invest in a permitted sector without government approval, subject to reporting to the RBI." },
      { n: 7, id: "which-sectors-restrict-foreign-investment-in-india", q: "Which sectors restrict foreign investment in India?", a: "Some sectors have caps or need approval, such as defence, insurance, multi-brand retail, some media, and certain financial and telecom activities. Check the current FDI Policy for your activity." },
      { n: 8, id: "what-is-a-resident-director", q: "What is a Resident Director?", a: "A director who has stayed in India for 182 days or more in the financial year. Every Indian company needs at least one." },
      { n: 9, id: "can-a-german-resident-be-a-director-of-an-indian-company", q: "Can a German resident be a director of an Indian company?", a: "Yes, once they hold a Director Identification Number and a Digital Signature Certificate. The company still needs at least one Resident Director." },
      { n: 10, id: "what-is-spice", q: "What is SPICe+?", a: "The integrated online incorporation form of the Ministry of Corporate Affairs, which can also apply for PAN, TAN and other registrations together." },
      { n: 11, id: "what-accounting-standards-does-an-indian-subsidiary-follow", q: "What accounting standards does an Indian subsidiary follow?", a: "The Companies Act, 2013 and, above the thresholds, Indian Accounting Standards (Ind AS), which are converged with IFRS. A German parent preparing HGB or IFRS group accounts will need a bridge for consolidation." },
      { n: 12, id: "does-an-indian-subsidiary-need-an-audit", q: "Does an Indian subsidiary need an audit?", a: "Yes. Every company must have its accounts audited by a Chartered Accountant firm each year, whatever its size, and appoint the auditor within 30 days of incorporation." },
      { n: 13, id: "what-corporate-tax-rate-does-an-indian-subsidiary-pay", q: "What corporate tax rate does an Indian subsidiary pay?", a: "Under the concessional regime without incentives, a domestic company pays 22% plus surcharge and cess, about 25.17%. Other regimes and rates apply to specific cases." },
      { n: 14, id: "must-the-indian-subsidiary-register-for-gst", q: "Must the Indian subsidiary register for GST?", a: "Registration is required above turnover thresholds and in some other cases, such as interstate supplies and reverse-charge liabilities. Services exported to the German parent can be zero-rated where the conditions are met." },
      { n: 15, id: "can-the-indian-subsidiary-send-profits-to-germany-freely", q: "Can the Indian subsidiary send profits to Germany freely?", a: "Yes, through dividends, fees, royalties and loan repayments, with the tax and RBI formalities for each route. See the guide on getting money out of India." },
      { n: 16, id: "is-there-a-tax-treaty-between-india-and-germany", q: "Is there a tax treaty between India and Germany?", a: "Yes, the India-Germany double taxation agreement signed on 19 June 1995 and in force since 26 October 1996. It sets a flat 10% rate on dividends, interest, royalties and fees for technical services. Confirm the current text and any protocol with your adviser." },
      { n: 17, id: "is-there-a-social-security-agreement-between-india-and-germa", q: "Is there a social security agreement between India and Germany?", a: "Yes. It was signed on 8 October 2008 and in force from 1 October 2009. A detached employee can stay in the home system for up to 48 months, with a 12-month extension, on a certificate of coverage." },
      { n: 18, id: "does-the-india-eu-free-trade-agreement-change-how-i-set-up", q: "Does the India-EU free trade agreement change how I set up?", a: "Not yet. It was concluded on 27 January 2026 but is not in force, and it has no investment protection chapter. Company law, FEMA and tax rules for the subsidiary are unchanged." },
      { n: 19, id: "can-the-indian-subsidiary-employ-german-nationals", q: "Can the Indian subsidiary employ German nationals?", a: "Yes, with an employment visa and registration, and with attention to tax and the Social Security Agreement. See the guides on relocating staff and the employees guide." },
      { n: 20, id: "what-documents-does-the-german-parent-need", q: "What documents does the German parent need?", a: "Its current Handelsregister extract, articles of association, a board or shareholder resolution and identity and address proof for directors and signatories, notarised, apostilled by the competent Landgericht and sworn-translated into English where needed." },
      { n: 21, id: "can-a-gmbh-co-kg-or-an-individual-set-up-an-indian-subsidiar", q: "Can a GmbH & Co. KG or an individual set up an Indian subsidiary?", a: "Yes. A partnership or an individual can be a shareholder, with additional documents and review. The tax and treaty position depends on the structure, so confirm it before investing." },
      { n: 22, id: "who-files-the-rbi-forms-for-the-investment", q: "Who files the RBI forms for the investment?", a: "The Indian subsidiary files Form FC-GPR with its authorised dealer bank and advisers, using the documents the German parent provides. The annual FLA return is filed by 15 July." },
      { n: 23, id: "what-happens-if-the-indian-subsidiary-is-sued", q: "What happens if the Indian subsidiary is sued?", a: "The claim is against the subsidiary, not the German parent, subject to the usual exceptions. The contract terms, insurance and arbitration clause shape how the dispute is handled." },
      { n: 24, id: "can-i-close-the-indian-subsidiary-later", q: "Can I close the Indian subsidiary later?", a: "Yes, by strike-off for a dormant company or voluntary liquidation for one with assets, after clearing tax, employee and RBI matters." },
    ],
  },
  {
    id: "common-mistakes",
    label: "Common Mistakes German Companies Make When Entering India",
    readMore: { href: "/germany-to-india/common-mistakes", label: "Read the full guide: Common Mistakes German Companies Make When Entering India" },
    items: [
      { n: 25, id: "what-is-the-most-common-mistake-german-companies-make-in-ind", q: "What is the most common mistake German companies make in India?", a: "Missing FEMA timelines: allotting shares more than 60 days after receipt of funds or filing FC-GPR more than 30 days after allotment." },
      { n: 26, id: "do-german-documents-need-an-apostille-for-india", q: "Do German documents need an apostille for India?", a: "Public documents generally need an apostille from the competent German authority, usually the Landgericht for court and register documents, plus a sworn translation where the document is not in English." },
      { n: 27, id: "what-do-i-need-before-the-first-dividend-is-paid", q: "What do I need before the first dividend is paid?", a: "A German certificate of residence, Form 41, and any no-PE declaration the payer requires." },
      { n: 28, id: "can-seconded-engineers-work-on-a-business-visa", q: "Can seconded engineers work on a business visa?", a: "A business visa is for meetings and talks, not productive work. Choose the visa category that matches the real work." },
      { n: 29, id: "why-do-intercompany-charges-attract-disputes", q: "Why do intercompany charges attract disputes?", a: "Because there is no contract, no proof of service or no benchmark. Fix these before the first invoice." },
      { n: 30, id: "where-do-i-start-to-avoid-these-mistakes", q: "Where do I start to avoid these mistakes?", a: "With the structure and documents pages, then the compliance calendar and an adviser in each country." },
    ],
  },
  {
    id: "compliance-calendar",
    label: "Compliance Calendar for an Indian Subsidiary of a German Company",
    readMore: { href: "/germany-to-india/compliance-calendar", label: "Read the full guide: Compliance Calendar for an Indian Subsidiary of a German Company" },
    items: [
      { n: 31, id: "when-is-the-agm-of-an-indian-subsidiary-due", q: "When is the AGM of an Indian subsidiary due?", a: "Within six months of the 31 March year end, which is by 30 September in most cases." },
      { n: 32, id: "what-is-due-after-the-agm", q: "What is due after the AGM?", a: "AOC-4 (financial statements) within 30 days and MGT-7 (annual return) within 60 days of the AGM." },
      { n: 33, id: "when-is-the-fla-return-due", q: "When is the FLA return due?", a: "By 15 July each year." },
      { n: 34, id: "when-must-tds-be-deposited", q: "When must TDS be deposited?", a: "By the 7th of the month following the deduction, with returns filed quarterly." },
      { n: 35, id: "what-are-the-advance-tax-dates", q: "What are the advance tax dates?", a: "15 June, 15 September, 15 December and 15 March." },
      { n: 36, id: "what-is-the-filing-deadline-for-fc-gpr", q: "What is the filing deadline for FC-GPR?", a: "Within 30 days of allotting shares to the foreign investor." },
      { n: 37, id: "how-do-german-and-indian-calendars-fit-together", q: "How do German and Indian calendars fit together?", a: "Agree a fixed date each quarter for the Indian numbers to reach Germany for consolidation, and keep the German foreign-reporting items on the German adviser's calendar." },
    ],
  },
  {
    id: "contracts-courts-arbitration",
    label: "Contracts, Courts and Arbitration: Protecting a German Parent and Enforcing in India",
    readMore: { href: "/germany-to-india/contracts-courts-arbitration", label: "Read the full guide: Contracts, Courts and Arbitration: Protecting a German Parent and Enforcing in India" },
    items: [
      { n: 38, id: "can-a-german-arbitral-award-be-enforced-in-india", q: "Can a German arbitral award be enforced in India?", a: "Generally yes, as a foreign award under Part II of the Arbitration and Conciliation Act, 1996, on narrow grounds, if Germany is a notified New York Convention territory. Have Indian counsel confirm the current notification." },
      { n: 39, id: "can-i-enforce-a-german-court-judgment-in-india", q: "Can I enforce a German court judgment in India?", a: "Not directly. Germany is not among India's reciprocating territories, so the judgment is the basis for a fresh suit in an Indian court, normally within three years." },
      { n: 40, id: "can-an-indian-court-judgment-be-enforced-in-germany", q: "Can an Indian court judgment be enforced in Germany?", a: "Recognition depends on reciprocity under German procedure law, which has been difficult to show for India. Arbitration avoids the problem." },
      { n: 41, id: "does-an-unstamped-contract-hold-in-indian-courts", q: "Does an unstamped contract hold in Indian courts?", a: "It is not void, but it cannot be used as evidence until stamped and any penalty is paid." },
      { n: 42, id: "is-indian-law-excluded-if-my-contract-is-governed-by-german-", q: "Is Indian law excluded if my contract is governed by German law?", a: "No. FEMA, the Companies Act and other mandatory Indian laws still apply to the Indian subsidiary and its contracts." },
      { n: 43, id: "is-there-an-investment-treaty-protecting-german-investors-in", q: "Is there an investment treaty protecting German investors in India?", a: "None is in force today. The EU-India free trade agreement has no investment chapter, and a separate agreement is under negotiation." },
    ],
  },
  {
    id: "data-protection-gdpr-dpdp",
    label: "Data Protection for German Companies in India: GDPR Transfers and India's DPDP Act",
    readMore: { href: "/germany-to-india/data-protection-gdpr-dpdp", label: "Read the full guide: Data Protection for German Companies in India: GDPR Transfers and India's DPDP Act" },
    items: [
      { n: 44, id: "can-a-german-company-send-personal-data-to-its-indian-subsid", q: "Can a German company send personal data to its Indian subsidiary?", a: "Yes, with a transfer mechanism such as the 2021 standard contractual clauses and a transfer impact assessment, because India has no EU adequacy decision." },
      { n: 45, id: "does-the-gdpr-apply-when-indian-staff-only-view-data-remotel", q: "Does the GDPR apply when Indian staff only view data remotely?", a: "Yes. Remote access from India to data held in Germany is a transfer, so it needs a mechanism." },
      { n: 46, id: "do-i-need-to-involve-the-works-council-before-giving-indian-", q: "Do I need to involve the works council before giving Indian staff access to an HR system?", a: "Often yes. A technical system that can monitor behaviour or performance is subject to co-determination, so check with the works council before rollout." },
      { n: 47, id: "when-do-india-s-dpdp-duties-start", q: "When do India's DPDP duties start?", a: "The Rules were notified on 13 November 2025 and the main duties take effect on 13 May 2027." },
      { n: 48, id: "what-is-the-penalty-under-the-gdpr-and-the-dpdp-act", q: "What is the penalty under the GDPR and the DPDP Act?", a: "The GDPR allows up to EUR 20 million or 4% of worldwide turnover. The DPDP Act allows up to INR 250 crore for serious failures." },
      { n: 49, id: "how-quickly-must-a-data-breach-be-reported-in-germany", q: "How quickly must a data breach be reported in Germany?", a: "To the data protection authority within 72 hours of becoming aware, where there is a risk to individuals." },
      { n: 50, id: "do-i-need-a-data-protection-officer-in-germany", q: "Do I need a data protection officer in Germany?", a: "Yes if 20 or more people are constantly engaged in automated processing of personal data, and in some other cases by risk. Many groups appoint one anyway." },
    ],
  },
  {
    id: "documents-handelsregister-apostille",
    label: "Documents for an Indian Subsidiary: Handelsregister Extract, Notary and Apostille from Germany",
    readMore: { href: "/germany-to-india/documents-handelsregister-apostille", label: "Read the full guide: Documents for an Indian Subsidiary: Handelsregister Extract, Notary and Apostille from Germany" },
    items: [
      { n: 51, id: "what-documents-does-a-german-company-need-to-incorporate-a-s", q: "What documents does a German company need to incorporate a subsidiary in India?", a: "A current Handelsregister extract, the articles of association, a resolution approving the investment and the director appointments, a certificate of representation and identity and address proof for foreign directors, notarised, apostilled and translated into English." },
      { n: 52, id: "which-german-documents-need-an-apostille-and-who-issues-it", q: "Which German documents need an apostille for an Indian subsidiary, and who issues it?", a: "The German parent's Handelsregister extract, its articles of association, the resolution approving the investment, and the notarised passports and address proofs of its directors and authorised signatory all need an apostille. Germany has no central apostille office: the Landgericht for the notary's district apostilles notarised documents, and the Landgericht of the register court apostilles Handelsregister extracts. Each document then needs a sworn English translation, and India and Germany are both parties to the Apostille Convention, so no Indian embassy legalisation is needed." },
      { n: 53, id: "does-india-accept-a-german-apostille", q: "Does India accept a German apostille?", a: "Yes. India and Germany are both parties to the Hague Apostille Convention, so no consular legalisation by the Indian embassy is needed." },
      { n: 54, id: "do-my-german-documents-need-to-be-translated-into-english", q: "Do my German documents need to be translated into English?", a: "Usually yes. Indian authorities need English, so use a sworn translator and attach the translation to the apostilled original." },
      { n: 55, id: "what-is-a-vertretungsbescheinigung", q: "What is a Vertretungsbescheinigung?", a: "A notary's certificate, based on the register, that confirms who may represent the company. It helps the Indian bank and the Registrar verify the signatory." },
      { n: 56, id: "does-a-german-parent-have-to-declare-its-beneficial-owners-i", q: "Does a German parent have to declare its beneficial owners in India?", a: "Yes. The Indian subsidiary must identify significant beneficial owners (10% or more) and file Form BEN-2. The Transparenzregister extract and an ownership chart support it." },
    ],
  },
  {
    id: "exit-and-restructuring",
    label: "Exit and Restructuring: Selling, Winding Up or Reorganising an Indian Subsidiary",
    readMore: { href: "/germany-to-india/exit-and-restructuring", label: "Read the full guide: Exit and Restructuring: Selling, Winding Up or Reorganising an Indian Subsidiary" },
    items: [
      { n: 57, id: "how-can-a-german-parent-exit-an-indian-subsidiary", q: "How can a German parent exit an Indian subsidiary?", a: "By selling the shares, buyback, voluntary liquidation or, for a dormant company, strike off. The sale route is the most common." },
      { n: 58, id: "what-pricing-rules-apply-to-a-share-sale", q: "What pricing rules apply to a share sale?", a: "A transfer from a non-resident to a resident must be at or above fair value; a transfer from a resident to a non-resident at or below it, supported by a valuation." },
      { n: 59, id: "how-is-the-gain-taxed-in-india", q: "How is the gain taxed in India?", a: "Long-term gains on unlisted shares held more than 24 months are taxed at 12.5%. Check the treaty position on share gains with your adviser." },
      { n: 60, id: "how-is-the-gain-taxed-in-germany", q: "How is the gain taxed in Germany?", a: "Gains on shares in a foreign subsidiary are generally 95% exempt for a corporation, subject to the conditions. Confirm with your German adviser." },
      { n: 61, id: "is-strike-off-available-for-an-active-subsidiary", q: "Is strike off available for an active subsidiary?", a: "No. It is for dormant companies with no assets or liabilities." },
      { n: 62, id: "what-happens-to-employees-on-a-closure", q: "What happens to employees on a closure?", a: "Notice, retrenchment compensation and gratuity rules apply, and state rules may add requirements. Plan these costs before deciding to close." },
    ],
  },
  {
    id: "funding-and-fema",
    label: "Funding an Indian Subsidiary from Germany: Equity, ECB, Hermes-Covered Loans and FEMA Reporting",
    readMore: { href: "/germany-to-india/funding-and-fema", label: "Read the full guide: Funding an Indian Subsidiary from Germany: Equity, ECB, Hermes-Covered Loans and FEMA Reporting" },
    items: [
      { n: 63, id: "how-should-a-german-parent-fund-its-indian-subsidiary", q: "How should a German parent fund its Indian subsidiary?", a: "Usually through equity or compulsorily convertible instruments, which are FDI. Loans from the parent or a bank are ECB and follow separate rules. A mix is common." },
      { n: 64, id: "what-is-the-deadline-to-allot-shares-after-funds-arrive", q: "What is the deadline to allot shares after funds arrive?", a: "Within 60 days of receiving the money. If shares are not allotted, the funds must be refunded." },
      { n: 65, id: "when-must-fc-gpr-be-filed", q: "When must FC-GPR be filed?", a: "Within 30 days of the allotment of shares, through the authorised dealer bank." },
      { n: 66, id: "can-a-german-parent-lend-to-its-indian-subsidiary", q: "Can a German parent lend to its Indian subsidiary?", a: "Yes, as an ECB, with a loan registration number before drawdown, minimum average maturity, an all-in-cost ceiling and monthly ECB-2 returns." },
      { n: 67, id: "is-there-a-minimum-price-for-shares-issued-to-a-german-inves", q: "Is there a minimum price for shares issued to a German investor?", a: "Yes. Unlisted shares must be issued at or above fair value from a valuation by a registered valuer, a chartered accountant or a merchant banker." },
      { n: 68, id: "is-interest-on-a-kfw-or-hermes-covered-loan-taxed-in-india", q: "Is interest on a KfW or Hermes-covered loan taxed in India?", a: "The treaty is reported to exempt interest paid to KfW, DEG, the Bundesbank and the German Government and on Hermes-guaranteed loans. Confirm the text and the documents needed." },
      { n: 69, id: "what-is-the-fla-return", q: "What is the FLA return?", a: "The annual return on foreign liabilities and assets that any Indian company with foreign investment files with the RBI by 15 July." },
    ],
  },
  {
    id: "gcc-for-german-companies",
    label: "Global Capability Centres in India for German Companies: Engineering, IT and Shared Services",
    readMore: { href: "/germany-to-india/gcc-for-german-companies", label: "Read the full guide: Global Capability Centres in India for German Companies: Engineering, IT and Shared Services" },
    items: [
      { n: 70, id: "why-do-german-companies-set-up-captive-centres-in-india", q: "Why do German companies set up captive centres in India?", a: "For engineering and IT talent, time-zone cover and scalable teams, usually serving the German group at cost plus a mark-up." },
      { n: 71, id: "does-shifting-work-from-germany-to-india-involve-the-works-c", q: "Does shifting work from Germany to India involve the works council?", a: "Often yes. A move of operations abroad can be a change in operations that requires information and consultation, and sometimes a social plan. Speak to German labour counsel early." },
      { n: 72, id: "how-is-a-captive-centre-priced-for-tax", q: "How is a captive centre priced for tax?", a: "Normally cost plus a benchmarked mark-up, documented under Indian transfer pricing rules and checked against German documentation duties." },
      { n: 73, id: "is-a-build-operate-transfer-arrangement-better-than-a-subsid", q: "Is a build-operate-transfer arrangement better than a subsidiary?", a: "It helps companies without Indian experience, but you must agree the transfer terms, staff continuity and price in advance." },
      { n: 74, id: "can-the-indian-centre-sign-contracts-for-the-german-company", q: "Can the Indian centre sign contracts for the German company?", a: "It should not. If it habitually concludes contracts on behalf of the German company, it can create a permanent establishment." },
      { n: 75, id: "is-gst-charged-on-services-the-indian-centre-exports-to-germ", q: "Is GST charged on services the Indian centre exports to Germany?", a: "If the export of services conditions are met, the supply is zero-rated. Confirm the conditions with your adviser." },
    ],
  },
  {
    id: "german-employees-in-india-ssa",
    label: "German Employees in India: Treaty, Social Security Agreement and Certificate of Coverage",
    readMore: { href: "/germany-to-india/german-employees-in-india-ssa", label: "Read the full guide: German Employees in India: Treaty, Social Security Agreement and Certificate of Coverage" },
    items: [
      { n: 76, id: "does-the-india-germany-social-security-agreement-apply-to-my", q: "Does the India-Germany social security agreement apply to my employee in India?", a: "It applies to workers posted from a German employer to an Indian branch or subsidiary for up to 48 months, extendable by 12, if the certificate of coverage is obtained before the posting begins." },
      { n: 77, id: "who-issues-the-german-certificate-of-coverage", q: "Who issues the German certificate of coverage?", a: "The implementing body in Germany is the DVKA, and the employer applies through the social insurer. In India the EPFO receives the certificate to grant exemption." },
      { n: 78, id: "what-happens-if-a-german-employee-has-no-certificate-of-cove", q: "What happens if a German employee has no certificate of coverage?", a: "The employee is an international worker and must contribute to the Employees' Provident Fund from the first day, with no wage ceiling." },
      { n: 79, id: "how-many-days-can-a-german-employee-stay-in-india-without-in", q: "How many days can a German employee stay in India without Indian tax?", a: "Up to 183 days in the fiscal year, but only if the employer is not Indian and the cost is not borne by an Indian PE. A recharge to the Indian subsidiary can defeat the exemption." },
      { n: 80, id: "does-a-german-employee-stay-german-tax-resident-while-workin", q: "Does a German employee stay German tax resident while working in India?", a: "Usually, if they keep a home in Germany. The treaty tie-breaker decides if both countries claim them as resident." },
      { n: 81, id: "what-is-the-minimum-salary-for-an-indian-employment-visa", q: "What is the minimum salary for an Indian employment visa?", a: "Generally USD 25,000 a year, with limited exceptions." },
      { n: 82, id: "does-india-tax-the-fees-of-a-german-managing-director-of-the", q: "Does India tax the fees of a German managing director of the Indian subsidiary?", a: "Directors' fees are taxable in the state where the paying company is resident, which is India for an Indian subsidiary, even if the director never visits." },
    ],
  },
  {
    id: "german-parent-obligations",
    label: "German Parent Obligations: Tax, Reporting and Law for a Company with an Indian Subsidiary",
    readMore: { href: "/germany-to-india/german-parent-obligations", label: "Read the full guide: German Parent Obligations: Tax, Reporting and Law for a Company with an Indian Subsidiary" },
    items: [
      { n: 83, id: "is-a-dividend-from-an-indian-subsidiary-taxable-in-germany", q: "Is a dividend from an Indian subsidiary taxable in Germany?", a: "For a corporation holding at least 10% at the start of the calendar year, 95% of the dividend is exempt and 5% is treated as non-deductible expense, which comes to roughly 1.5% effective tax. Confirm with your German adviser." },
      { n: 84, id: "does-a-german-parent-have-to-notify-the-tax-office-of-an-ind", q: "Does a German parent have to notify the tax office of an Indian subsidiary?", a: "Yes. Acquiring a foreign participation of the stated size must be notified under Section 138 of the Fiscal Code. Confirm the form and timing for your year." },
      { n: 85, id: "does-the-indian-subsidiary-have-to-be-consolidated-in-the-ge", q: "Does the Indian subsidiary have to be consolidated in the German accounts?", a: "Above the size thresholds, a parent consolidates controlled subsidiaries under German commercial law or IFRS. The Indian year end of 31 March needs a bridge to the German reporting date." },
      { n: 86, id: "do-the-german-cfc-rules-apply-to-an-indian-operating-subsidi", q: "Do the German CFC rules apply to an Indian operating subsidiary?", a: "Generally not for active income taxed at Indian rates above 15%, but passive income, incentives and special regimes can change the result." },
      { n: 87, id: "does-germany-tax-the-sale-of-the-indian-subsidiary", q: "Does Germany tax the sale of the Indian subsidiary?", a: "A corporation's gain on shares is 95% exempt under Section 8b, so the German cost is small. The Indian tax position under the treaty is the main question." },
      { n: 88, id: "does-pillar-two-affect-a-german-parent-with-an-indian-subsid", q: "Does Pillar Two affect a German parent with an Indian subsidiary?", a: "Only if the group has consolidated revenue of EUR 750 million or more. The Indian rate is usually above 15%, but incentives can lower the effective rate." },
    ],
  },
  {
    id: "hiring-in-india",
    label: "Hiring in India for a German Company: Contracts, Provident Fund, Labour Codes and Share Plans",
    readMore: { href: "/germany-to-india/hiring-in-india", label: "Read the full guide: Hiring in India for a German Company: Contracts, Provident Fund, Labour Codes and Share Plans" },
    items: [
      { n: 89, id: "what-is-the-difference-between-german-social-insurance-and-i", q: "What is the difference between German social insurance and India's provident fund?", a: "Germany has several statutory insurance branches. India's EPF is a retirement and pension scheme for covered employees, with ESI for health cover below a wage ceiling and gratuity paid on exit." },
      { n: 90, id: "does-an-indian-subsidiary-need-a-works-council", q: "Does an Indian subsidiary need a works council?", a: "No. India has no statutory works council. Trade unions, grievance processes and state inspections take its place, and larger establishments have extra duties." },
      { n: 91, id: "do-i-need-a-written-employment-contract-in-india", q: "Do I need a written employment contract in India?", a: "Yes. Issue a written appointment letter covering role, pay structure, notice, confidentiality and termination, and check state shops and establishment rules." },
      { n: 92, id: "what-is-gratuity", q: "What is gratuity?", a: "A lump sum paid on exit after a minimum period of continuous service, calculated from the last drawn basic pay and years of service." },
      { n: 93, id: "when-did-the-labour-codes-come-into-force", q: "When did the labour codes come into force?", a: "The four labour codes were reported to have come into force on 21 November 2025. Rules and state implementation are still developing, so confirm the current position." },
      { n: 94, id: "can-i-give-indian-employees-shares-in-the-german-parent", q: "Can I give Indian employees shares in the German parent?", a: "Yes, subject to the foreign investment rules for residents. They are taxed as a perquisite on exercise, and the employee reports foreign assets in the Indian return. Virtual plans are a common alternative." },
      { n: 95, id: "is-an-employer-of-record-a-long-term-solution", q: "Is an Employer of Record a long-term solution?", a: "Not usually. It suits a pilot. For a stable team, a subsidiary gives control, brand and a clean legal position." },
    ],
  },
  {
    id: "incorporation-steps",
    label: "Incorporating an Indian Subsidiary from Germany: Who Does What, and When",
    readMore: { href: "/germany-to-india/incorporation-steps", label: "Read the full guide: Incorporating an Indian Subsidiary from Germany: Who Does What, and When" },
    items: [
      { n: 96, id: "do-german-directors-need-to-visit-india-to-incorporate-the-s", q: "Do German directors need to visit India to incorporate the subsidiary?", a: "No. The filing is online. Directors need digital signatures and notarised identity documents, and the time difference is only three and a half to four and a half hours." },
      { n: 97, id: "what-are-the-two-rbi-deadlines-after-the-capital-arrives", q: "What are the two RBI deadlines after the capital arrives?", a: "Allot the shares within 60 days of receiving the funds, then file Form FC-GPR within 30 days of allotment." },
      { n: 98, id: "when-must-the-indian-subsidiary-file-inc-20a", q: "When must the Indian subsidiary file INC-20A?", a: "Within 180 days of incorporation, confirming that the subscribers have paid for their shares." },
      { n: 99, id: "can-the-german-parent-be-the-only-shareholder-of-the-indian-", q: "Can the German parent be the only shareholder of the Indian company?", a: "A private limited company needs at least two shareholders, so a wholly owned subsidiary uses a nominee or a group company as the second, holding one share." },
      { n: 100, id: "what-is-the-fee-for-setting-up-an-indian-subsidiary", q: "What is the fee for setting up an Indian subsidiary?", a: "AU Corporate's fee is USD 750 to USD 1,000 for share capital up to ₹10 lakh (₹10 lakh is about €9,400 at an indicative ₹106.3 per euro on 23 October 2026). The costing depends on your plan." },
      { n: 101, id: "does-the-capital-have-to-come-from-the-parent-s-own-bank-acc", q: "Does the capital have to come from the parent's own bank account?", a: "Yes. Remit from the account of the foreign investor through the banking channel. A payment from a third party can cause the bank to reject the receipt for FEMA purposes." },
    ],
  },
  {
    id: "india-eu-fta-and-germany",
    label: "India-EU Free Trade Agreement: What It Means for German Companies Entering India",
    readMore: { href: "/germany-to-india/india-eu-fta-and-germany", label: "Read the full guide: India-EU Free Trade Agreement: What It Means for German Companies Entering India" },
    items: [
      { n: 102, id: "is-the-india-eu-free-trade-agreement-in-force", q: "Is the India-EU free trade agreement in force?", a: "Not yet. It was concluded on 27 January 2026. The Commission asked the Council on 11 September 2026 to authorise signing, signature is being reported for December 2026, and entry into force is targeted for early 2027." },
      { n: 103, id: "does-the-india-eu-fta-change-how-a-german-company-sets-up-an", q: "Does the India-EU FTA change how a German company sets up an Indian subsidiary?", a: "No. Company law, FEMA, the FDI Policy and tax rules for the subsidiary are unchanged. The FTA affects tariffs, services access and staff mobility." },
      { n: 104, id: "does-the-fta-protect-german-investments-in-india", q: "Does the FTA protect German investments in India?", a: "No. It has no investment protection chapter. A separate EU-India Investment Protection Agreement is under negotiation, so rely on contracts and arbitration for now." },
      { n: 105, id: "will-the-fta-lower-tariffs-on-german-machinery-and-component", q: "Will the FTA lower tariffs on German machinery and components?", a: "Yes, over phased periods once it is in force, including automotive components over five to ten years. The detailed schedules decide each product." },
      { n: 106, id: "does-the-fta-reduce-indian-withholding-tax-on-dividends-paid", q: "Does the FTA reduce Indian Withholding Tax on dividends paid to a German parent?", a: "No. Withholding Tax is governed by the Income-tax Act, 2025 and the 1995 India-Germany tax treaty, which caps dividends at 10%." },
    ],
  },
  {
    id: "india-germany-dtaa",
    label: "India-Germany DTAA: Article-by-Article Guide to the Tax Treaty for German Companies",
    readMore: { href: "/germany-to-india/india-germany-dtaa", label: "Read the full guide: India-Germany DTAA: Article-by-Article Guide to the Tax Treaty for German Companies" },
    items: [
      { n: 107, id: "what-is-the-withholding-rate-on-dividends-from-india-to-germ", q: "What is the withholding rate on dividends from India to Germany?", a: "Under the treaty, 10% of the gross amount, with no shareholding tiers. The Indian payer applies it under Section 393 on receipt of the German certificate of residence and Form 41." },
      { n: 108, id: "does-the-india-germany-treaty-have-a-services-permanent-esta", q: "Does the India-Germany treaty have a services permanent establishment clause?", a: "The summaries we checked say it does not. Fixed-place and dependent-agent PE risk still applies, so track days and authority anyway." },
      { n: 109, id: "how-long-can-a-german-construction-project-run-in-india-befo", q: "How long can a German construction project run in India before a PE arises?", a: "More than six months, counting connected supervisory activity, as summarised in the sources we checked." },
      { n: 110, id: "what-documents-does-a-german-company-need-to-claim-treaty-be", q: "What documents does a German company need to claim treaty benefits?", a: "A certificate of residence from the German tax office, Form 41 (previously Form 10F), a no-PE declaration and a beneficial-ownership declaration, given to the Indian payer before payment." },
      { n: 111, id: "can-india-tax-a-german-company-on-the-sale-of-indian-shares", q: "Can India tax a German company on the sale of Indian shares?", a: "That depends on Article 13, where the sources we checked disagree. Confirm against the consolidated text before planning an exit." },
      { n: 112, id: "does-the-mli-change-the-india-germany-treaty", q: "Does the MLI change the India-Germany treaty?", a: "It was reported not to, because the treaty was not listed as a covered agreement, so the principal purpose test does not apply. India's domestic GAAR can still apply, and Germany's 2026 amendment of its MLI consent act should be watched." },
      { n: 113, id: "are-royalties-and-technical-fees-taxed-at-the-same-rate", q: "Are royalties and technical fees taxed at the same rate?", a: "Yes, at 10% each under the treaty. Whether a payment is a technical fee depends on the treaty definition." },
      { n: 114, id: "how-is-indian-tax-relieved-in-germany", q: "How is Indian tax relieved in Germany?", a: "Under Article 23 by credit or exemption depending on the income, and domestic law exempts 95% of qualifying dividends and share gains of corporations. Your German adviser should confirm the result for your structure." },
      { n: 115, id: "is-there-a-mutual-agreement-procedure", q: "Is there a mutual agreement procedure?", a: "Yes. A case can be presented within three years of the first notification of the action. The EU Arbitration Convention does not apply to India." },
    ],
  },
  {
    id: "relocate-german-staff",
    label: "Sending German Employees to India: Visas, Tax, Social Security and Permanent Establishment",
    readMore: { href: "/germany-to-india/relocate-german-staff", label: "Read the full guide: Sending German Employees to India: Visas, Tax, Social Security and Permanent Establishment" },
    items: [
      { n: 116, id: "what-visa-does-a-german-employee-need-to-work-in-india", q: "What visa does a German employee need to work in India?", a: "An employment visa for a skilled role with a contract and a salary floor of USD 25,000 a year, with exceptions. A business visa is for meetings, not for productive work." },
      { n: 117, id: "is-frro-registration-needed", q: "Is FRRO registration needed?", a: "Yes, within 14 days of arrival for stays of more than 180 days." },
      { n: 118, id: "is-a-german-employee-in-india-taxed-in-india", q: "Is a German employee in India taxed in India?", a: "Possibly. The treaty's 183-day rule can leave salary taxable only in Germany for short stays, but a secondment to the Indian subsidiary at its cost usually fails that test and the employer must withhold under Section 392." },
      { n: 119, id: "can-a-seconded-german-employee-stay-in-the-german-social-ins", q: "Can a seconded German employee stay in the German social insurance system?", a: "Yes, under the Social Security Agreement with a certificate of coverage, normally for up to 48 months plus a 12-month extension." },
      { n: 120, id: "does-a-secondment-create-a-permanent-establishment", q: "Does a secondment create a permanent establishment?", a: "It can, for example if the person concludes contracts for the German company or works from a fixed place at its disposal. Review each assignment." },
      { n: 121, id: "is-a-local-indian-contract-better-than-a-secondment", q: "Is a local Indian contract better than a secondment?", a: "It is cleaner for Indian tax and labour law but changes the person's German status, so plan the return as well." },
    ],
  },
  {
    id: "repatriating-profits",
    label: "Repatriating Profits from India to Germany: Dividends, Fees, Royalties and Loans",
    readMore: { href: "/germany-to-india/repatriating-profits", label: "Read the full guide: Repatriating Profits from India to Germany: Dividends, Fees, Royalties and Loans" },
    items: [
      { n: 122, id: "how-is-a-dividend-from-india-taxed-on-its-way-to-a-german-pa", q: "How is a dividend from India taxed on its way to a German parent?", a: "India withholds 10% under the treaty, on receipt of the German certificate of residence and Form 41. In Germany, 95% of a qualifying dividend is exempt, so the effective German cost is about 1.5%." },
      { n: 123, id: "what-forms-are-needed-to-send-money-from-india-to-germany", q: "What forms are needed to send money from India to Germany?", a: "Form 145 (previously 15CA) and, where required, Form 146 (previously 15CB) for the remittance, plus the treaty documents." },
      { n: 124, id: "are-management-fees-to-a-german-parent-taxable-in-india", q: "Are management fees to a German parent taxable in India?", a: "Only if they are fees for technical services under the treaty definition or the parent has a PE in India. The payment must also be at arm's length and supported by evidence of service." },
      { n: 125, id: "does-the-german-parent-charge-vat-on-services-to-the-indian-", q: "Does the German parent charge VAT on services to the Indian subsidiary?", a: "Generally not. Services to a business customer in India are supplied outside Germany, but keep proof of the customer's status and confirm with your German adviser." },
      { n: 126, id: "when-is-withholding-tax-deposited", q: "When is Withholding Tax deposited?", a: "By the 7th of the month following the payment or credit." },
      { n: 127, id: "can-an-indian-subsidiary-repay-a-loan-from-its-german-parent", q: "Can an Indian subsidiary repay a loan from its German parent at any time?", a: "Principal repayment follows the ECB agreement and the RBI's minimum maturity. Early repayment before the minimum maturity needs care." },
      { n: 128, id: "does-india-limit-interest-to-a-foreign-parent", q: "Does India limit interest to a foreign parent?", a: "Yes. Interest paid to an associated enterprise abroad is capped under the interest limitation rule and must also meet the RBI cost ceiling and arm's length tests." },
    ],
  },
  {
    id: "structure-options",
    label: "Choosing an Indian Structure from Germany: Subsidiary, Joint Venture, Branch, LLP or EOR",
    readMore: { href: "/germany-to-india/structure-options", label: "Read the full guide: Choosing an Indian Structure from Germany: Subsidiary, Joint Venture, Branch, LLP or EOR" },
    items: [
      { n: 129, id: "what-is-the-best-way-for-a-german-company-to-enter-india", q: "What is the best way for a German company to enter India?", a: "For most, a wholly owned private limited company. A joint venture suits partner-led entry, a project office suits a single contract, and branches and liaison offices need RBI approval and track records." },
      { n: 130, id: "what-net-worth-does-a-german-company-need-for-an-indian-bran", q: "What net worth does a German company need for an Indian branch office?", a: "A net worth of at least USD 100,000 and a profit record in each of the last five years. For a liaison office the tests are USD 50,000 and three years." },
      { n: 131, id: "does-a-gmbh-co-kg-need-special-care-when-it-invests-in-india", q: "Does a GmbH & Co. KG need special care when it invests in India?", a: "Yes. A transparent partnership affects who claims the treaty and whether the 95% exemption applies. Have your German adviser review it, and consider a corporate holding company." },
      { n: 132, id: "can-a-liaison-office-earn-income-in-india", q: "Can a liaison office earn income in India?", a: "No. A liaison office can only liaise. It cannot invoice or earn income, and its costs are met from remittances from the parent." },
      { n: 133, id: "do-i-need-a-dutch-or-singapore-holding-company-between-germa", q: "Do I need a Dutch or Singapore holding company between Germany and India?", a: "Usually not. The treaty already gives a flat 10%, so an intermediate holding adds cost and anti-abuse questions without a rate benefit." },
      { n: 134, id: "can-a-german-parent-use-an-employer-of-record-to-start", q: "Can a German parent use an Employer of Record to start?", a: "Yes, for a first few hires. The EOR is the legal employer, so control is limited, and your staff in India can still create a permanent establishment if they conclude contracts." },
    ],
  },
  {
    id: "supply-chain-and-esg-duties",
    label: "Supply Chain, ESG and Customs: What German Rules Mean for Your Indian Operations",
    readMore: { href: "/germany-to-india/supply-chain-and-esg-duties", label: "Read the full guide: Supply Chain, ESG and Customs: What German Rules Mean for Your Indian Operations" },
    items: [
      { n: 135, id: "does-the-german-supply-chain-act-apply-to-my-indian-subsidia", q: "Does the German Supply Chain Act apply to my Indian subsidiary?", a: "If your German group has 1,000 or more employees in Germany, the Indian subsidiary is part of the group's own business area for the risk analysis. A smaller group is not directly covered but may receive duties through customer contracts." },
      { n: 136, id: "has-the-german-supply-chain-act-changed", q: "Has the German Supply Chain Act changed?", a: "A cabinet draft of 3 September 2025 proposes to abolish the reporting duty and limit fines. Confirm the current status before building your programme." },
      { n: 137, id: "what-do-german-customers-ask-indian-suppliers-for", q: "What do German customers ask Indian suppliers for?", a: "A supplier code of conduct, records on wages and safety, environmental permits and emission data, a complaints channel and audit reports." },
      { n: 138, id: "what-is-cbam", q: "What is CBAM?", a: "The EU Carbon Border Adjustment Mechanism, which puts a carbon price on imports of certain goods such as steel, aluminium, cement, fertilisers, electricity and hydrogen." },
      { n: 139, id: "will-the-india-eu-free-trade-agreement-remove-customs-duty-i", q: "Will the India-EU free trade agreement remove customs duty immediately?", a: "No. The agreement was concluded on 27 January 2026 and is not yet in force. Rely on current duties until it applies and your goods meet its origin rules." },
      { n: 140, id: "should-a-small-indian-company-prepare-an-evidence-file", q: "Should a small Indian company prepare an evidence file?", a: "Yes. A single file of policies, audit reports and emission data saves time when several German customers send questionnaires." },
    ],
  },
  {
    id: "transfer-pricing",
    label: "Transfer Pricing Between Germany and India: Form 48, Documentation and Function Transfers",
    readMore: { href: "/germany-to-india/transfer-pricing", label: "Read the full guide: Transfer Pricing Between Germany and India: Form 48, Documentation and Function Transfers" },
    items: [
      { n: 141, id: "does-india-have-a-small-company-exemption-from-transfer-pric", q: "Does India have a small-company exemption from transfer pricing?", a: "No. Form 48 is needed for any international transaction with an associated enterprise, whatever the value. Detailed documentation is required above prescribed value thresholds, which your Indian adviser should confirm each year." },
      { n: 142, id: "what-is-form-48", q: "What is Form 48?", a: "The accountant's report on international transactions, previously Form 3CEB, filed with the tax return under the Income-tax Act, 2025." },
      { n: 143, id: "what-is-a-function-transfer-under-german-tax-rules", q: "What is a function transfer under German tax rules?", a: "Moving a function with profit potential from a German company to a foreign related party, which can trigger a charge for the transferred package. Model it before moving work from Germany to India." },
      { n: 144, id: "can-a-german-parent-get-an-advance-pricing-agreement-for-ind", q: "Can a German parent get an advance pricing agreement for India?", a: "Yes. India has a unilateral and bilateral APA program, and a bilateral agreement involves both competent authorities." },
      { n: 145, id: "is-a-management-fee-from-germany-deductible-in-india", q: "Is a management fee from Germany deductible in India?", a: "Only to the extent it is at arm's length and supported by proof that the Indian entity received a service it needed." },
      { n: 146, id: "what-happens-if-india-makes-a-transfer-pricing-adjustment", q: "What happens if India makes a transfer pricing adjustment?", a: "The Indian income rises, penalty may apply, and the German side may seek relief through the mutual agreement procedure within three years of first notice." },
    ],
  },
]

const allFaqs = faqGroups.flatMap((group) => group.items)

export default function GermanyToIndiaFaqPage() {
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
        headline="146 Questions About Setting Up and Running a Subsidiary in India"
        description="146 plain answers for German companies: incorporation, FEMA, the India-Germany tax treaty, social security agreement, staff, data protection, compliance, repatriation and exit."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "146 FAQs" },
        ]}
      />

      <GuideHero
        eyebrow="FAQ for German companies"
        title="146 Questions About Setting Up and Running a Subsidiary in India"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideAnswerBox title="How to use this page">
          The questions are grouped by topic, starting with the decisions before you commit and then following
          each guide in the series. Answers are short; the{" "}
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">complete guide</Link>{" "}
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

        <GuideServiceBox path="/germany-to-india/faq" />
        <GuideCTA
          title="Have a question that is not here?"
          description="Tell us about your plan and we will answer it on a call."
        />

        <p className="mb-10">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and German
          rules change often; confirm current requirements before acting.
        </p>
      </article>

      <GuideLeadForm
        title="A Question the FAQ Doesn't Answer?"
        description="Tell us what is specific to your German parent, and we'll answer it directly on a call."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  )
}
