import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideServiceBox } from "@/components/guide/GuideServiceBox"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"

const PAGE_URL = "https://www.theaucorp.com/usa-to-india/faq"
const PARENT_URL = "https://www.theaucorp.com/usa-to-india"

const toc = [
  { id: "cost-time-and-tax", label: "Cost, time and tax: the questions every CFO asks first" },
  { id: "before-you-start", label: "Before you start: deciding on India" },
  { id: "structure-and-control", label: "Structure, ownership and control" },
  { id: "incorporation-and-documents", label: "Incorporation and documents" },
  { id: "funding-and-fema", label: "Funding, FEMA and RBI reporting" },
  { id: "banking-and-hiring", label: "Banking, registrations and hiring" },
  { id: "tax-and-transfer-pricing", label: "Tax, GST and transfer pricing" },
  { id: "compliance-and-audit", label: "Compliance, audit and reporting" },
  { id: "repatriation", label: "Repatriating funds to the US" },
  { id: "growth-esops-and-ma", label: "Growth: capital increases, ESOPs and M&A" },
  { id: "disputes-closure-and-exit", label: "Disputes, closure and exit" },
  { id: "audit-icofr", label: "Audit of a US Company's Indian Subsidiary and ICOFR" },
  { id: "common-mistakes", label: "10 Common Mistakes US Companies Make Setting Up in India" },
  { id: "compliance-calendar", label: "India Subsidiary Compliance Calendar for US Companies" },
  { id: "contracts-and-arbitration", label: "Contracts and Arbitration in India for US Companies" },
  { id: "documents-and-apostille", label: "Documents and Apostille for an India Subsidiary (US Parent)" },
  { id: "dtaa-pe-risk", label: "India-US Tax Treaty and Permanent Establishment Risk" },
  { id: "eor-vs-subsidiary", label: "EOR vs Subsidiary in India: Which Is Right for a US Company?" },
  { id: "ESOP", label: "ESOPs for Indian Employees of a US Parent Company" },
  { id: "expat-visa", label: "Sending a US Executive to India: Visa, Housing and Tax" },
  { id: "funding-fema-fc-gpr", label: "Funding an Indian Subsidiary: FEMA and Form FC-GPR" },
  { id: "global-vat", label: "Global VAT for US Companies Selling Abroad" },
  { id: "hiring-and-payroll", label: "Hiring in India: Contracts, Payroll and Statutory Compliance" },
  { id: "incorporation-process", label: "Incorporation Process for an Indian Subsidiary, Step by Step" },
  { id: "repatriating-profits", label: "Repatriating Profits from India to the US: Forms and Tax" },
  { id: "resident-director", label: "Resident Director Requirement for an Indian Company" },
  { id: "restructuring-and-exit", label: "Restructuring, Mergers and Exit for an Indian Subsidiary" },
  { id: "share-valuation", label: "Share Valuation for Foreign Investment in India" },
  { id: "subsidiary-vs-branch-vs-liaison-office-vs-llp", label: "Subsidiary vs Branch vs Liaison Office vs LLP in India" },
  { id: "tax-notices-and-litigation", label: "Handling Indian Tax Notices for a US-Owned Subsidiary" },
  { id: "transfer-pricing", label: "Transfer Pricing in India for US-Owned Subsidiaries" },
  { id: "us-parent-obligations", label: "US Reporting for an Indian Subsidiary: Form 5471, FBAR" },
  { id: "esop", label: "More on ESOPs for Indian Employees of a US Parent Company" },
  { id: "choosing-an-indian-state-and-city-for-us-companies", label: "Choosing an Indian State and City for a US Company: Talent, Cost, Rules and Incentives" },
  { id: "cost-of-setting-up-a-subsidiary-in-india-from-the-us", label: "Cost of Setting Up a Subsidiary in India from the US: Budget Framework and Fee Questions" },
  { id: "fcpa-anti-bribery-and-export-controls-for-indian-subsidiaries", label: "FCPA, Indian Anti-Bribery Law and US Export Controls for an Indian Subsidiary" },
  { id: "gcc-for-us-companies", label: "Global Capability Centre in India for US Companies: Models, Transfer Pricing and Setup" },
  { id: "how-long-it-takes-to-set-up-from-the-us", label: "How Long It Takes to Set Up an Indian Subsidiary from the US: Timeline and Time Zones" },
  { id: "indian-labour-codes-for-us-employers", label: "India's Labour Codes for US Employers: Wages, Notice, Termination and Working Hours" },
  { id: "ip-ownership-and-copyright-assignment-for-indian-teams", label: "Who Owns the Work? IP Assignment, Copyright and Patent Filing Rules for Indian Teams of US Companies" },
  { id: "nri-and-oci-founders-of-us-companies-investing-in-india", label: "NRI and OCI Founders of US Companies: FEMA Status, Investment Routes and Tax Residency" },
  { id: "us-manufacturers-pli-sez-and-incentives", label: "US Manufacturers in India: PLI, Special Economic Zones, Customs Duty and Product Standards" },
  { id: "us-privacy-hipaa-ccpa-and-dpdp", label: "US Privacy Law and India's DPDP Act: HIPAA, CCPA and Offshore Data Teams" },
  { id: "us-saas-and-digital-sales-into-india", label: "US SaaS and Digital Sales into India: GST on Online Services, Withholding and Treaty Issues" },
  { id: "us-tax-on-indian-subsidiary-ncti-subpart-f-and-foreign-tax-credit", label: "US Tax on an Indian Subsidiary: NCTI (Formerly GILTI), Subpart F, Section 245A and Foreign Tax Credits" },
]

type FaqItem = { n: number; id: string; q: string; a: string }
type FaqGroup = { id: string; label: string; readMore?: { href: string; label: string }; items: FaqItem[] }

const faqGroups: FaqGroup[] = [
  {
    id: "cost-time-and-tax",
    label: "Cost, time and tax: the questions every CFO asks first",
    items: [
      { n: 1, id: "what-is-the-cost-of-incorporating-a-subsidiary-company-in-in", q: "What is the cost of incorporating a subsidiary company in India?", a: "The cost of incorporating a subsidiary in India has three parts: government fees (MCA filing fees and state stamp duty, which depend on the authorized capital and the state), the cost of notarizing and apostilling US documents, and professional fees. AU Corporate's indicative setup fee is USD 750 to USD 1,000 for share capital up to ₹10 lakh (about USD 10,300). Annual running costs are additional." },
      { n: 2, id: "what-is-the-time-period-for-registering-a-company-in-india", q: "What is the time period for registering a company in India?", a: "Registering a company in India typically takes 4 to 6 weeks from receipt of complete documents. The MCA incorporation itself is usually the shortest step, and the main variable is how quickly the apostilled US parent documents are ready. Name approval and digital signatures can run in parallel." },
      { n: 3, id: "what-is-the-annual-compliance-cost-of-an-indian-subsidiary", q: "What is the annual compliance cost of an Indian subsidiary?", a: "The annual compliance cost of an Indian subsidiary depends on its size and scope. It covers bookkeeping, statutory audit, income tax and ROC filings, GST returns, payroll compliance, RBI reporting and, where there are transactions with the US parent, a transfer pricing report. Pricing a fixed annual scope up front is practical, because missed filings cost more than staying current." },
      { n: 4, id: "what-is-the-effective-tax-rate-for-a-subsidiary-company-in-i", q: "What is the effective tax rate for a subsidiary company in India?", a: "The effective tax rate for an Indian subsidiary under the concessional regime for domestic companies is about 25.17% (precisely 25.168%). The regime is in Section 200 of the Income-tax Act, 2025 (previously Section 115BAA of the Income-tax Act, 1961). It is the 22% tax rate plus a 10% surcharge on the tax and 4% health and education cess on tax plus surcharge. A company taking this regime cannot claim most deductions and incentives, and does not pay Minimum Alternate Tax." },
      { n: 5, id: "how-many-directors-and-shareholders-does-an-indian-subsidiar", q: "How many directors and shareholders does an Indian subsidiary need?", a: "A private limited company in India needs at least two directors (Section 149(1) of the Companies Act, 2013) and two shareholders (Section 3(1)(b)), and at least one director must be resident in India, meaning a stay of 182 days or more in the year (Section 149(3)). In a wholly owned subsidiary, the US parent holds nearly all the shares and a nominee holds the balance." },
      { n: 6, id: "what-are-the-gst-rates-in-india-and-which-rate-applies-to-an", q: "What are the GST rates in India, and which rate applies to an Indian subsidiary?", a: "GST in India has rates of 5%, 18% and 40%, plus 0% for exempt items, under the CGST Act, 2017 and IGST Act, 2017. Since 22 September 2025 the earlier 12% and 28% slabs have been largely removed. Most business services supplied by an Indian subsidiary, including IT and most professional services, attract the standard rate of 18%. Services exported to the US parent can be zero-rated if the conditions are met, such as the recipient being outside India and the payment arriving in foreign exchange." },
      { n: 7, id: "is-a-statutory-audit-mandatory-for-an-indian-subsidiary", q: "Is a statutory audit mandatory for an Indian subsidiary?", a: "A statutory audit is mandatory for every company in India under Section 139 of the Companies Act, 2013, irrespective of turnover. The first Auditor is appointed by the board within 30 days of incorporation (Section 139(6)), and later Auditors are appointed by shareholders." },
    ],
  },
  {
    id: "before-you-start",
    label: "Before you start: deciding on India",
    items: [
      { n: 8, id: "why-do-us-companies-set-up-subsidiaries-in-india", q: "Why do US companies set up subsidiaries in India?", a: "US companies set up subsidiaries in India for access to a large pool of engineering, finance and support talent, lower operating costs, round-the-clock coverage across time zones, and the Indian market itself. Many groups build a Global Capability Center that works as an extension of the US team under their own control." },
      { n: 9, id: "what-is-a-global-capability-center-gcc", q: "What is a Global Capability Center (GCC)?", a: "A GCC is a captive center that a foreign parent owns in India to deliver engineering, analytics, finance, HR or support work for the group. It is usually a wholly owned subsidiary that charges the parent for its services at arm's-length prices." },
      { n: 10, id: "should-we-use-a-subsidiary-an-employer-of-record-or-an-outso", q: "Should we use a subsidiary, an Employer of Record or a third-party vendor?", a: "A US company should use an Employer of Record to hire quickly without an entity, a third-party vendor to buy a service without managing people, and a subsidiary for direct control, a larger team or long-term ownership of the operation. Many companies start with an EOR and convert to a subsidiary later." },
      { n: 11, id: "what-should-we-decide-before-starting-incorporation", q: "What should we decide before starting incorporation?", a: "Before starting incorporation, a US company should decide the business activity in India, which group entity will hold the shares, how much it will fund, who the directors will be (including one resident in India), the registered office address and the first hires. Having these ready avoids rework when forms are filed." },
      { n: 12, id: "does-the-us-parent-need-its-board-s-approval-first", q: "Does the US parent need its board's approval first?", a: "A US parent usually needs its board's approval before setting up an Indian subsidiary. The board passes a resolution approving the investment, naming the authorized signatory and directors, and authorizing documents to be signed for India. The charter, shareholder agreements and any investor consent rights should be checked before the resolution is drafted." },
      { n: 13, id: "does-the-us-parent-have-to-travel-to-india", q: "Does the US parent have to travel to India?", a: "A US parent does not have to travel to India to set up a subsidiary. Incorporation can be completed online using apostilled documents and digital signatures. Banks set their own KYC rules, so the bank's verification requirements should be confirmed early." },
      { n: 14, id: "can-a-us-llc-set-up-a-subsidiary-in-india", q: "Can a US LLC set up a subsidiary in India?", a: "A US LLC can set up a subsidiary in India as the shareholder of an Indian company, with its formation documents and authorizations apostilled. The LLC's US tax classification (disregarded entity, partnership or corporation) affects US reporting and treaty access, so it should be confirmed with a US tax adviser before choosing the holding entity." },
      { n: 15, id: "which-sectors-are-restricted-for-foreign-investment", q: "Which sectors are restricted for foreign investment?", a: "Most services and technology sectors in India allow 100% foreign ownership under the Automatic Route. A few activities are prohibited, and some sectors have ownership caps, conditions or government approval requirements, so the exact activity should be checked against the FDI Policy before committing." },
    ],
  },
  {
    id: "structure-and-control",
    label: "Structure, ownership and control",
    items: [
      { n: 16, id: "what-is-a-wholly-owned-subsidiary", q: "What is a wholly owned subsidiary?", a: "A wholly owned subsidiary in India is an Indian company whose shares are 100% held by the foreign parent, directly or through group entities. It is a separate legal entity with its own tax registrations, bank account and employees, and the parent's liability is generally limited to its investment." },
      { n: 17, id: "can-a-us-company-own-100-of-an-indian-subsidiary", q: "Can a US company own 100% of an Indian subsidiary?", a: "A US company can own 100% of an Indian subsidiary in most sectors. India permits 100% foreign ownership under the Automatic Route, which needs no prior government approval. A few sectors have ownership caps, conditions or an approval requirement, so the sector position should be checked against the business activity before choosing a structure." },
      { n: 18, id: "what-is-the-difference-between-the-automatic-route-and-the-g", q: "What is the difference between the Automatic Route and the Government Route?", a: "Under the Automatic Route, the investor needs no prior government approval and only reports the investment to the RBI afterward. Under the Government Route, approval from the relevant ministry must be obtained first through the Foreign Investment Facilitation Portal." },
      { n: 19, id: "why-does-a-private-company-need-two-shareholders-and-how-doe", q: "Why does a private company need two shareholders, and how does a wholly owned subsidiary meet this?", a: "A private limited company must have at least two members. In a wholly owned subsidiary, the second share is usually held by a nominee or another group entity on behalf of the parent, and the beneficial ownership is declared as the Companies Act requires." },
      { n: 20, id: "what-is-the-difference-between-a-private-and-a-public-limite", q: "What is the difference between a private and a public limited company?", a: "A private company restricts the transfer of its shares, needs at least two directors and two members, and has lighter compliance. A public company needs at least three directors and seven members and faces more compliance. Most wholly owned subsidiaries use the private form." },
      { n: 21, id: "who-controls-the-indian-subsidiary-the-board-or-the-us-paren", q: "Who controls the Indian subsidiary: the board or the US parent?", a: "The Board of Directors manages the company, and the parent controls the board by appointing and removing directors as its shareholder. Matters that need parent approval can be written into the Articles or an intercompany agreement. Directors still owe legal duties to the Indian company." },
      { n: 22, id: "can-us-executives-be-directors-of-the-indian-subsidiary", q: "Can US executives be directors of the Indian subsidiary?", a: "US executives can be directors of the Indian subsidiary. Foreign nationals can be directors once they obtain a digital signature and a Director Identification Number, but at least one director must be a resident of India. Directors carry statutory duties and liabilities, so they should be chosen with that in mind." },
      { n: 23, id: "does-the-indian-subsidiary-need-a-director-who-lives-in-indi", q: "Does the Indian subsidiary need a director who lives in India?", a: "An Indian subsidiary needs at least one director who has stayed in India for 182 days or more in the financial year (Section 149(3) of the Companies Act, 2013). A private limited company also needs at least two directors in total (Section 149(1)). Directors can be foreign nationals, but at least one must meet the residency test." },
      { n: 24, id: "does-the-company-need-a-company-secretary", q: "Does the company need a Company Secretary?", a: "Smaller private companies do not need a whole-time Company Secretary. One becomes mandatory above a paid-up capital threshold, which you should confirm with your adviser. A practicing professional is still needed for certain filings and certificates, such as those for RBI reporting." },
      { n: 25, id: "can-we-hold-the-indian-subsidiary-through-a-holding-company-", q: "Can we hold the Indian subsidiary through a holding company in another country?", a: "A foreign group can hold an Indian subsidiary through a holding company in another country, and many groups use a regional holding company. Tax residence, treaty access, substance and anti-avoidance rules need review, and the choice affects how dividends and exit gains are taxed, so it should be decided before capital goes in." },
    ],
  },
  {
    id: "incorporation-and-documents",
    label: "Incorporation and documents",
    items: [
      { n: 26, id: "what-are-the-steps-to-incorporate-an-indian-subsidiary", q: "What are the steps to incorporate an Indian subsidiary?", a: "Incorporating an Indian subsidiary takes eight steps: confirm FDI eligibility, prepare apostilled US documents, obtain digital signatures, file SPICe+ with the MCA, open the bank account, transfer the funds for share capital, allot shares and report to the RBI, then begin operations." },
      { n: 27, id: "what-documents-does-the-us-parent-need-to-provide", q: "What documents does the US parent need to provide?", a: "A US parent typically provides its Certificate of Incorporation and good standing, a board resolution, identity and address proofs of the signatory and directors, and its charter documents. Foreign documents are notarized and apostilled. The exact checklist depends on the parent's entity type." },
      { n: 28, id: "what-is-an-apostille-and-how-do-we-get-one", q: "What is an apostille and how do we get one?", a: "An apostille is a certificate under the Hague Convention that makes a US public document valid in India. State-issued documents are apostilled by the Secretary of State, and federal documents by the US Department of State. Notarized documents are apostilled by the Secretary of State of the notary's state." },
      { n: 29, id: "can-documents-be-notarized-and-apostilled-electronically", q: "Can documents be notarized and apostilled electronically?", a: "Some US states allow remote online notarization and electronic apostilles, but acceptance of the electronic versions in India varies. The format the Indian filing will accept should be confirmed before notarization to avoid repeating the process." },
      { n: 30, id: "what-is-a-digital-signature-certificate-and-how-does-a-forei", q: "What is a Digital Signature Certificate and how does a foreign director get one?", a: "A Digital Signature Certificate (DSC) lets a director sign MCA filings electronically. A foreign director obtains one using a passport and address proof, usually with attestation or apostille and a verification step, and the process can be completed remotely." },
      { n: 31, id: "what-is-spice", q: "What is SPICe+?", a: "SPICe+ is the MCA's single online form for incorporation. It carries the Memorandum and Articles of Association and can also apply for PAN, TAN, GST, EPFO and ESIC registrations and a bank account, replacing several separate forms." },
      { n: 32, id: "how-is-the-company-name-chosen-and-approved", q: "How is the company name chosen and approved?", a: "A company name in India is chosen by proposing names on the MCA portal, which approves one if it is not identical or too similar to an existing company or trademark and follows the naming rules. Approval is time-bound, so the incorporation form should be filed soon after the name is cleared." },
      { n: 33, id: "what-are-the-memorandum-and-articles-of-association", q: "What are the Memorandum and Articles of Association?", a: "The Memorandum of Association states the company's name, objects, registered office and capital. The Articles of Association set the internal rules, such as board powers, share transfers and parent approval rights, and can be drafted so that parent controls are built in." },
      { n: 34, id: "what-kind-of-address-can-be-the-registered-office", q: "What kind of address can be the registered office?", a: "Any premises in India that you own or lease, with proof such as a rent agreement and a utility bill. Virtual and shared offices can work if they meet MCA and GST address requirements. The state of the address also affects stamp duty and registrations." },
      { n: 35, id: "what-do-we-receive-when-the-company-is-incorporated", q: "What do we receive when the company is incorporated?", a: "On incorporation, the company receives the Certificate of Incorporation with the Corporate Identification Number (CIN), the company's PAN and TAN, and the filed Memorandum and Articles. The bank account, share capital transfer and RBI reporting follow." },
    ],
  },
  {
    id: "funding-and-fema",
    label: "Funding, FEMA and RBI reporting",
    items: [
      { n: 36, id: "how-can-the-us-parent-fund-the-indian-subsidiary", q: "How can the US parent fund the Indian subsidiary?", a: "A US parent can fund an Indian subsidiary through equity shares, compulsorily convertible preference shares or debentures, or an external commercial borrowing (a loan). Equity is the most common because it is simple to report and carries no repayment obligation. Each route has its own pricing, tax and reporting rules." },
      { n: 37, id: "is-there-a-minimum-capital-requirement", q: "Is there a minimum capital requirement?", a: "There is no statutory minimum for a private limited company. The practical amount depends on your first-year expenses, activity and the bank's expectations. Regulated sectors can have their own minimum capital rules." },
      { n: 38, id: "how-much-capital-should-the-us-parent-put-in", q: "How much capital should the US parent put in?", a: "A US parent should put in enough capital to cover the first year's expenses and set-up costs, with room for growth. Too little strains working capital, and funding mostly by loan can raise transfer pricing and interest-cost issues. The amount should be sized against the business plan." },
      { n: 39, id: "what-is-form-fc-gpr-and-when-is-it-due", q: "What is Form FC-GPR and when is it due?", a: "Form FC-GPR is the report an Indian company files with the RBI after issuing shares to a foreign investor. It must be filed within 30 days of the share allotment through the RBI's FIRMS portal, with supporting valuation and Company Secretary certificates. Late filing attracts a Late Submission Fee or compounding." },
      { n: 40, id: "what-is-the-60-day-rule-for-allotting-shares", q: "What is the 60-day rule for allotting shares?", a: "The company must allot shares within 60 days of receiving the foreign investment. If it does not, the money must be refunded to the investor within the prescribed period unless approval to retain it is obtained. So allot promptly after the funds arrive." },
      { n: 41, id: "what-is-a-valuation-certificate-and-when-is-it-required", q: "What is a valuation certificate and when is it required?", a: "Shares issued to a non-resident cannot be priced below fair value. A Chartered Accountant or other eligible professional certifies the value using an internationally accepted method. It supports the FC-GPR filing and later share issues and transfers." },
      { n: 42, id: "can-the-parent-lend-money-instead-of-investing-equity", q: "Can the parent lend money instead of investing equity?", a: "A US parent can lend money to its Indian subsidiary instead of investing equity through an external commercial borrowing (ECB). An ECB must meet conditions on eligible lender, minimum maturity, interest ceilings and end use, and be registered with the RBI through the bank. Interest payments attract Withholding Tax and transfer pricing scrutiny." },
      { n: 43, id: "what-are-ccps-and-ccds-and-why-use-them", q: "What are CCPS and CCDs, and why use them?", a: "Compulsorily convertible preference shares and debentures must convert into equity, so they are treated as equity under FDI rules. They suit staged funding or investor rights, but the conversion price or formula must be fixed upfront and comply with pricing rules." },
      { n: 44, id: "can-we-send-money-before-the-company-is-incorporated", q: "Can we send money before the company is incorporated?", a: "A US parent cannot send money before the Indian company is incorporated, because foreign investment can only be received by an existing company. Funds sent early may have to be returned and can create a reporting problem, so the parent should wait until the bank account is open." },
      { n: 45, id: "what-is-the-firms-portal", q: "What is the FIRMS portal?", a: "The FIRMS portal is the RBI's Foreign Investment Reporting and Management System, where Indian companies file foreign investment reports such as FC-GPR through the Single Master Form. The company needs portal access and supporting certificates from a Company Secretary or Chartered Accountant." },
    ],
  },
  {
    id: "banking-and-hiring",
    label: "Banking, registrations and hiring",
    items: [
      { n: 46, id: "how-do-we-open-the-bank-account", q: "How do we open the bank account?", a: "An Indian subsidiary opens its bank account after incorporation with an authorized dealer bank, using the company's documents and the directors' and parent's KYC. The bank should be able to receive foreign inward remittances and issue the remittance certificate needed for reporting." },
      { n: 47, id: "what-registrations-does-the-company-need-after-incorporation", q: "What registrations does the company need after incorporation?", a: "Depending on the business: GST, provident fund, ESI, professional tax, state shops and establishment registration, and an import-export code if you trade goods. Some can be applied for through SPICe+, and others follow once you hire or start billing." },
      { n: 48, id: "when-does-the-subsidiary-need-to-register-for-gst", q: "When does the subsidiary need to register for GST?", a: "An Indian subsidiary needs to register for GST when its aggregate turnover crosses ₹20 lakh for services (₹10 lakh in special category states), or earlier for certain supplies, or voluntarily (Section 22 of the CGST Act, 2017). Companies exporting services to a US parent often register early so they can claim input tax credit and refunds under the zero-rated export route." },
      { n: 49, id: "can-we-hire-before-incorporation-is-complete", q: "Can we hire before incorporation is complete?", a: "A US company cannot hire directly in India before incorporation is complete, because until the company exists it cannot employ anyone. An Employer of Record can be used to hire in the meantime, and payroll registrations should be completed after incorporation before the first employees start." },
      { n: 50, id: "what-is-an-employer-of-record-and-how-does-it-work", q: "What is an Employer of Record and how does it work?", a: "An EOR is the legal employer of your India team. It issues the employment contracts, runs payroll, pays statutory dues and handles compliance, while you direct the day-to-day work. You pay a service fee on top of the employee cost." },
      { n: 51, id: "can-eor-employees-move-into-the-subsidiary-later", q: "Can EOR employees move into the subsidiary later?", a: "EOR employees can move into the subsidiary later with planning. Employees must agree to the transfer, their service history and benefits such as gratuity and provident fund should carry over, and contracts and notice periods need to be handled, with timing planned so that there is no gap in employment." },
      { n: 52, id: "what-statutory-benefits-apply-to-employees-in-india", q: "What statutory benefits apply to employees in India?", a: "Employees in India typically receive provident fund, ESI for eligible wages, gratuity after the qualifying service period, bonus where applicable, professional tax in some states, and leave benefits. India's labour codes are consolidating these, so the current position for the state and headcount should be confirmed." },
      { n: 53, id: "what-are-the-employer-s-payroll-obligations", q: "What are the employer's payroll obligations?", a: "Pay salaries, deduct and deposit Withholding Tax on salaries, contribute to provident fund and ESI, issue payslips and file the periodic returns. Salary structures should be designed to be both tax-efficient and compliant." },
      { n: 54, id: "can-we-send-us-employees-to-work-in-india", q: "Can we send US employees to work in India?", a: "A US company can send US employees to work in India with the right visa and registrations. Taxes, social security and permanent establishment risk all need planning. India and the US do not have a social security agreement, so foreign workers can face provident fund contributions in India alongside US contributions." },
      { n: 55, id: "what-visa-does-a-us-executive-need", q: "What visa does a US executive need?", a: "A US executive needs an employment visa to work in India, because a business visa suits only short meetings. An employment visa typically has a minimum salary condition, and longer stays require registration with the Foreigners Regional Registration Office." },
    ],
  },
  {
    id: "tax-and-transfer-pricing",
    label: "Tax, GST and transfer pricing",
    items: [
      { n: 56, id: "how-is-an-indian-subsidiary-taxed", q: "How is an Indian subsidiary taxed?", a: "As an Indian company, on its income at the corporate tax rates under the Income-tax Act, 2025 (previously the Income-tax Act, 1961), with surcharge and cess where applicable. The Act applies from 1 April 2026. The rate depends on the tax regime the company opts for." },
      { n: 57, id: "what-is-transfer-pricing-and-why-does-it-matter", q: "What is transfer pricing and why does it matter?", a: "Transfer pricing requires transactions between related parties, such as the Indian subsidiary and the US parent, to be priced as if between independent parties (the arm's length principle, Section 161 of the Income-tax Act, 2025, previously Section 92). Tax officers review it closely, so agreements and benchmarking should exist from day one." },
      { n: 58, id: "what-is-form-48-previously-form-3ceb", q: "What is Form 48 (previously Form 3CEB)?", a: "Form 48 (previously Form 3CEB) is the Chartered Accountant's report on a company's international transactions with associated enterprises (Section 172 of the Income-tax Act, 2025, previously Section 92E of the Income-tax Act, 1961). Form 48 applies from tax year 2026-27, and earlier years continue to use Form 3CEB under the Income-tax Act, 1961." },
      { n: 59, id: "which-intercompany-transactions-must-be-at-arm-s-length", q: "Which intercompany transactions must be at arm's length?", a: "Service fees, royalties, cost sharing, loans and interest, guarantees, reimbursements, and the purchase or sale of goods or assets between the subsidiary and any group company abroad. Each needs a written agreement and a pricing method you can defend." },
      { n: 60, id: "how-is-a-captive-services-subsidiary-usually-priced", q: "How is a captive services subsidiary usually priced?", a: "Commonly on a cost-plus basis, where the parent pays the subsidiary its costs plus a margin set by benchmarking against comparable companies. The margin is tested each year. Safe harbour rules, which prescribe accepted margins for some activities, may offer an alternative." },
      { n: 61, id: "does-an-indian-subsidiary-create-us-tax-obligations-for-the-", q: "Does an Indian subsidiary create US tax obligations for the parent?", a: "An Indian subsidiary can create US tax obligations for the parent. A US company that owns a foreign subsidiary may have US reporting such as Form 5471, and its income may be affected by US international tax rules. These depend on the structure, so the position should be confirmed with a US tax adviser." },
      { n: 62, id: "what-is-permanent-establishment-risk", q: "What is permanent establishment risk?", a: "A permanent establishment (PE) is a taxable presence of a foreign company in India. It can arise from a fixed place of business, dependent agents who conclude contracts, or staff providing services in India for long enough. A PE exposes the US parent's profits to Indian tax." },
      { n: 63, id: "what-is-the-india-us-tax-treaty-dtaa", q: "What is the India-US tax treaty (DTAA)?", a: "The India-US tax treaty (DTAA) is an agreement that avoids double taxation between the two countries. It reduces withholding rates on dividends, interest, royalties and fees for included services (Articles 10 to 12) and defines when a permanent establishment exists (Article 5). Claiming its benefits needs a Tax Residency Certificate and treaty details in Form 41 (previously Form 10F)." },
      { n: 64, id: "what-is-a-tax-residency-certificate-and-form-41", q: "What is a Tax Residency Certificate and Form 41?", a: "A Tax Residency Certificate shows that the US parent is a US tax resident, and the IRS issues it. Form 41 (previously Form 10F) is the electronic statement of details that the foreign payee gives to claim treaty benefits. Both should be ready before the first payment." },
      { n: 65, id: "how-does-gst-apply-to-services-the-subsidiary-provides-to-th", q: "How does GST apply to services the subsidiary provides to the US parent?", a: "GST applies to services an Indian subsidiary provides to its US parent as zero-rated exports if the conditions are met (Section 16 of the IGST Act, 2017), such as the recipient being outside India and the payment arriving in foreign exchange. The subsidiary can supply under a letter of undertaking without paying GST and claim refunds of related input credit. Intermediary services are treated differently." },
    ],
  },
  {
    id: "compliance-and-audit",
    label: "Compliance, audit and reporting",
    items: [
      { n: 66, id: "what-annual-compliance-does-the-subsidiary-have", q: "What annual compliance does the subsidiary have?", a: "Statutory audit, an AGM, filing financial statements and the annual return with the Registrar, income tax return and advance tax, GST and Withholding Tax filings, payroll returns, the FLA return to the RBI, and transfer pricing reporting where applicable." },
      { n: 67, id: "does-the-subsidiary-need-a-statutory-audit", q: "Does the subsidiary need a statutory audit?", a: "An Indian subsidiary needs a statutory audit, because every company must have its accounts audited by a Chartered Accountant appointed as Statutory Auditor, regardless of turnover (Section 139 of the Companies Act, 2013). The audited financial statements are approved at the AGM and filed with the Registrar." },
      { n: 68, id: "when-must-the-first-auditor-be-appointed", q: "When must the first Auditor be appointed?", a: "The board appoints the first Auditor within 30 days of incorporation, and the appointment is notified to the Registrar. If the board does not, shareholders must appoint one at a general meeting within the next 90 days." },
      { n: 69, id: "what-are-aoc-4-and-mgt-7", q: "What are AOC-4 and MGT-7?", a: "AOC-4 is the form for filing the company's financial statements with the Registrar, and MGT-7 is the annual return of shareholders, directors and other details. Both are due after the AGM, and late filing attracts additional fees per day." },
      { n: 70, id: "what-are-the-agm-requirements", q: "What are the AGM requirements?", a: "The first AGM must be held within nine months of the first financial year-end and later ones within six months of each year-end. The AGM approves the audited accounts and other annual business. Shorter notice is possible with member consent." },
      { n: 71, id: "what-is-form-inc-20a", q: "What is Form INC-20A?", a: "Form INC-20A is the declaration of commencement of business (Section 10A of the Companies Act, 2013), filed within 180 days of incorporation, confirming that shareholders have paid for their shares. Missing it brings penalties and can lead to the company being struck off." },
      { n: 72, id: "what-is-the-fla-return", q: "What is the FLA return?", a: "The Annual Return on Foreign Liabilities and Assets is filed online with the RBI by 15 July each year by Indian companies that have received foreign investment or hold overseas assets. It reports the company's foreign investment holdings and related details." },
      { n: 73, id: "what-are-withholding-tax-returns-and-when-are-they-due", q: "What are Withholding Tax returns and when are they due?", a: "Withholding Tax deducted on salaries and payments is deposited by the 7th of the following month. Quarterly statements are filed in Form 138 for salaries, Form 140 for resident payments and Form 144 for non-resident payments (previously Forms 24Q, 26Q and 27Q)." },
      { n: 74, id: "what-is-icofr-and-does-the-india-subsidiary-need-it", q: "What is ICOFR and does the India subsidiary need it?", a: "ICOFR is internal control over financial reporting, which a US-listed parent must assess under the Sarbanes-Oxley Act. Material subsidiaries are often brought into scope, so the Indian entity may need documented controls and testing. Indian company law also has its own internal financial controls reporting by the Auditor." },
      { n: 75, id: "how-is-the-subsidiary-s-performance-reported-to-the-us-paren", q: "How is the subsidiary's performance reported to the US parent?", a: "The Indian subsidiary reports its results to the US parent through monthly reporting packages. The Indian books follow Indian accounting standards for statutory purposes, while the parent usually needs packages mapped to US GAAP with reconciliations, aligned to the parent's close calendar." },
    ],
  },
  {
    id: "repatriation",
    label: "Repatriating funds to the US",
    items: [
      { n: 76, id: "how-can-profits-be-repatriated-from-india-to-the-us", q: "How can profits be repatriated from India to the US?", a: "Profits can be repatriated from India to the US through dividends, service fees, royalties and loan repayments. Each involves Indian Withholding Tax (Section 393 of the Income-tax Act, 2025, previously Section 195 of the Income-tax Act, 1961), which the India-US tax treaty can reduce, and fees and royalties must meet transfer pricing rules. Remittances abroad usually need Form 145 and, where required, Form 146 (previously Forms 15CA and 15CB)." },
      { n: 77, id: "how-are-dividends-paid-and-taxed", q: "How are dividends paid and taxed?", a: "The board recommends and shareholders approve a dividend out of distributable profits. Withholding Tax applies on payment to the US parent under the Income-tax Act, 2025 (previously the Income-tax Act, 1961), with possible treaty relief. The parent may claim a US foreign tax credit." },
      { n: 78, id: "what-documents-are-needed-to-remit-dividends", q: "What documents are needed to remit dividends?", a: "Board and shareholder approvals, the audited accounts showing distributable profits, a Withholding Tax computation with treaty documents (Tax Residency Certificate and Form 41, previously Form 10F), and Form 145 and, where required, Form 146 (previously Forms 15CA and 15CB)." },
      { n: 79, id: "what-is-form-145-previously-form-15ca", q: "What is Form 145 (previously Form 15CA)?", a: "Form 145 (previously Form 15CA) is the online declaration the remitting party files before paying a non-resident, giving details of the payment and its tax position. Banks need it to process most foreign remittances. It applies to payments from 1 April 2026 under the Income-tax Rules, 2026." },
      { n: 80, id: "what-is-form-146-previously-form-15cb", q: "What is Form 146 (previously Form 15CB)?", a: "Form 146 (previously Form 15CB) is a Chartered Accountant's certificate on the nature of a foreign payment, its taxability and the Withholding Tax rate, including treaty relief. It is required for taxable payments above the prescribed limit, and each certificate carries a UDIN from the ICAI portal." },
      { n: 81, id: "how-are-service-fees-and-management-charges-paid-to-the-us-p", q: "How are service fees and management charges paid to the US parent?", a: "Service fees and management charges are paid to the US parent under a written agreement, backed by evidence that the services were received and benefit the Indian company. They must be at arm's length and bear Withholding Tax (Section 393 of the Income-tax Act, 2025, previously Section 195 of the Income-tax Act, 1961) and GST under reverse charge, with Forms 145 and 146 filed." },
      { n: 82, id: "how-are-royalties-and-software-license-fees-treated", q: "How are royalties and software license fees treated?", a: "Royalty payments to the parent attract Withholding Tax at the applicable domestic or treaty rate, transfer pricing review and GST on reverse charge. The agreement should define the licensed IP, the rate and the basis for it, and the payment needs the same documents as other foreign remittances." },
      { n: 83, id: "can-an-intercompany-loan-be-repaid-to-the-us-parent", q: "Can an intercompany loan be repaid to the US parent?", a: "An intercompany loan can be repaid to the US parent under the ECB terms. Principal and interest are paid through the bank, interest attracts Withholding Tax subject to treaty relief, and the repayment is reported to the RBI. Repaying outside the approved terms can be a FEMA violation, so the schedule should be followed." },
      { n: 84, id: "why-do-we-need-a-contract-with-the-us-parent", q: "Why do we need a contract with the US parent?", a: "A contract with the US parent is needed because an intercompany agreement is the foundation for deductions, transfer pricing, GST, FEMA compliance and any later tax dispute. It should cover the scope of services, pricing, IP ownership, payment terms, confidentiality and termination, be signed before services begin, and match what actually happens." },
      { n: 85, id: "what-withholding-tax-rate-applies-to-payments-to-the-us-pare", q: "What Withholding Tax rate applies to payments to the US parent?", a: "Withholding Tax on payments from an Indian subsidiary to its US parent is 15% on dividends under the India-US treaty where the parent holds at least 10% of the voting power (25% otherwise), 10% on interest paid to banks and 15% on other interest, and 15% on royalties and fees for included services (10% for equipment royalties). The domestic rate for non-residents is 20% plus surcharge and cess, and the lower rate applies where the treaty conditions are met (Section 393 of the Income-tax Act, 2025, previously Section 195 of the Income-tax Act, 1961)." },
    ],
  },
  {
    id: "growth-esops-and-ma",
    label: "Growth: capital increases, ESOPs and M&A",
    items: [
      { n: 86, id: "how-do-we-increase-the-share-capital-of-the-subsidiary", q: "How do we increase the share capital of the subsidiary?", a: "The share capital of an Indian subsidiary is increased by raising the authorized capital if needed (with stamp duty), passing board and shareholder resolutions, obtaining the valuation, receiving the funds, allotting the shares, filing the return of allotment with the Registrar, and reporting to the RBI through FC-GPR within 30 days of allotment under the FEMA (Non-debt Instruments) Rules, 2019." },
      { n: 87, id: "do-we-need-a-valuation-for-every-new-share-issue", q: "Do we need a valuation for every new share issue?", a: "A valuation is needed for every new share issue to a non-resident, because the price cannot be below fair value, certified by an eligible professional. A registered valuer's report may also be needed under company law for private placements. The valuation should be done before issuing, not after." },
      { n: 88, id: "can-an-existing-loan-be-converted-into-equity", q: "Can an existing loan be converted into equity?", a: "Conversion of an external commercial borrowing into equity is permitted subject to FEMA conditions on pricing, eligibility and reporting. The conversion has tax and valuation consequences, so plan the terms before you convert." },
      { n: 89, id: "how-do-esops-for-indian-employees-of-a-us-parent-work", q: "How do ESOPs for Indian employees of a US parent work?", a: "The US parent grants options or restricted stock units to employees of the Indian subsidiary under its plan. FEMA overseas investment rules and reporting apply to the employees, and tax arises on exercise or vesting as salary, with Withholding Tax, and again as capital gains on sale." },
      { n: 90, id: "does-the-subsidiary-reimburse-the-parent-for-esop-costs", q: "Does the subsidiary reimburse the parent for ESOP costs?", a: "An Indian subsidiary often reimburses the parent for ESOP costs through a cost recharge under an agreement. Deductibility, transfer pricing and Withholding Tax on these recharges are frequently disputed, so the arrangement should be documented carefully from the start." },
      { n: 91, id: "can-the-indian-subsidiary-issue-its-own-esops", q: "Can the Indian subsidiary issue its own ESOPs?", a: "An Indian subsidiary can issue its own ESOPs under Section 62(1)(b) of the Companies Act, 2013, with a special resolution and a scheme setting out eligibility, vesting and exercise. A valuation is needed for pricing and tax, and FEMA conditions apply when employees or shareholders are non-residents." },
      { n: 92, id: "how-do-we-sell-the-shares-of-the-indian-subsidiary", q: "How do we sell the shares of the Indian subsidiary?", a: "Selling the shares of an Indian subsidiary to an Indian resident follows FEMA pricing and reporting rules, and the seller pays capital gains tax subject to treaty relief. A sale to another non-resident has its own tax and reporting rules. Selling the US parent itself can also trigger Indian tax under the indirect transfer rules." },
      { n: 93, id: "what-is-a-slump-sale", q: "What is a slump sale?", a: "A slump sale is the transfer of an undertaking or business as a going concern for a lump sum, without values assigned to individual assets and liabilities. The gain is taxed as capital gains on the net worth transferred, and the tax treatment depends on the holding period." },
      { n: 94, id: "how-do-mergers-and-demergers-work-in-india", q: "How do mergers and demergers work in India?", a: "Mergers and demergers are carried out through a scheme approved by the National Company Law Tribunal. A fast-track route is available for mergers between a holding company and its wholly owned subsidiary. Cross-border mergers are permitted under FEMA rules and follow specific conditions." },
      { n: 95, id: "how-does-an-acquisition-of-an-indian-company-by-the-us-group", q: "How does an acquisition of an Indian company by the US group work?", a: "A US group acquires an Indian company by conducting due diligence, valuing the target, following FEMA pricing and reporting rules for the share purchase, checking approvals such as competition filings above thresholds, and planning stamp duty and tax. The acquirer is often the Indian subsidiary or the US parent directly." },
    ],
  },
  {
    id: "disputes-closure-and-exit",
    label: "Disputes, closure and exit",
    items: [
      { n: 96, id: "what-should-we-do-if-the-tax-department-sends-a-notice", q: "What should we do if the tax department sends a notice?", a: "If the tax department sends a notice, it should not be ignored, because notices have strict response deadlines. It should be shared with a tax adviser immediately so that a reply is prepared with evidence. Most notices can be resolved at the first level, and unresolved matters go to appeals." },
      { n: 97, id: "what-is-a-transfer-pricing-audit-and-how-do-we-prepare", q: "What is a transfer pricing audit and how do we prepare?", a: "A transfer pricing audit is a review by a Transfer Pricing Officer of whether intercompany transactions were at arm's length. Preparation means a current transfer pricing study, signed agreements, evidence of services and consistent filings in Form 48 (previously Form 3CEB). Good documentation is the best defense." },
      { n: 98, id: "what-are-the-drp-and-the-itat", q: "What are the DRP and the ITAT?", a: "The Dispute Resolution Panel (DRP) hears objections to a draft assessment order and is available to foreign companies and transfer pricing cases. The Income Tax Appellate Tribunal (ITAT) is the main appellate forum on facts and law, with further appeals to the High Court." },
      { n: 99, id: "can-disputes-with-the-parent-or-vendors-go-to-arbitration", q: "Can disputes with the parent or vendors go to arbitration?", a: "Disputes with the parent or vendors can go to arbitration if the contract has an arbitration clause. The seat, rules and governing law should be chosen carefully. India and the US are both parties to the New York Convention, so a foreign arbitral award is generally enforceable in India under Part II of the Arbitration and Conciliation Act, 1996, subject to its conditions." },
      { n: 100, id: "what-are-map-and-apa", q: "What are MAP and APA?", a: "The Mutual Agreement Procedure lets the Indian and US tax authorities resolve double taxation under the treaty. An Advance Pricing Agreement fixes your transfer pricing method with the authority in advance for several years, giving certainty on large or recurring intercompany transactions." },
      { n: 101, id: "can-we-sell-or-close-the-indian-subsidiary-later", q: "Can we sell or close the Indian subsidiary later?", a: "A US parent can sell or close the Indian subsidiary later by selling the shares or the business, merging the subsidiary into another group company, or closing it through strike-off or voluntary liquidation. Each route has its own tax and RBI reporting steps, so the exit should be planned before investing." },
      { n: 102, id: "how-does-striking-off-a-company-work", q: "How does striking off a company work?", a: "A company that has not carried on business for the previous two financial years can apply to the Registrar for removal, after clearing its dues and filing pending returns. The Registrar publishes a notice and, if there is no objection, removes the name from the register." },
      { n: 103, id: "how-are-residual-funds-sent-to-the-us-on-closure", q: "How are residual funds sent to the US on closure?", a: "Residual funds are sent to the US on closure after liabilities and taxes are settled and accounts are finalized. The surplus is distributed to the parent through the bank with the closing certificates and remittance forms (Forms 145 and 146, previously Forms 15CA and 15CB), and the closure is then reported to the RBI." },
      { n: 104, id: "can-we-buy-back-shares-or-reduce-capital-to-return-funds", q: "Can we buy back shares or reduce capital to return funds?", a: "A subsidiary can return funds to its parent by buyback or capital reduction. A buyback under Section 68 of the Companies Act, 2013 is limited by size, timing and solvency conditions, and a capital reduction under Section 66 normally needs Tribunal approval. Tax rules for buybacks have changed recently, so the tax cost for the parent should be checked before choosing between dividends, buyback and capital reduction." },
      { n: 105, id: "what-happens-if-the-subsidiary-stops-filing-or-misses-deadli", q: "What happens if the subsidiary stops filing or misses deadlines?", a: "If a subsidiary stops filing or misses deadlines, late fees accrue daily, directors can be disqualified after continued non-filing, the Registrar can strike the company off, and FEMA defaults need compounding with the RBI. Regularizing a lapsed company is possible but costs more than staying current, so a compliance calendar helps." },
    ],
  },
  {
    id: "audit-icofr",
    label: "Audit of a US Company's Indian Subsidiary and ICOFR",
    readMore: { href: "/usa-to-india/audit-icofr", label: "Read the full guide: Audit of a US Company's Indian Subsidiary and ICOFR" },
    items: [
      { n: 106, id: "is-audit-mandatory-for-a-small-indian-subsidiary", q: "Is audit mandatory for a small Indian subsidiary?", a: "Audit is mandatory for a small Indian subsidiary, because every company must have its financial statements audited each year, whatever its size (Section 139 of the Companies Act, 2013)." },
      { n: 107, id: "does-india-require-internal-controls-reporting", q: "Does India require internal controls reporting?", a: "India requires internal controls reporting: the Auditor of the company reports on internal financial controls for most companies (Section 143(3)(i) of the Companies Act, 2013). A US parent's ICOFR requirement under the Sarbanes-Oxley Act is separate." },
      { n: 108, id: "can-the-same-firm-do-the-books-and-the-audit", q: "Can the same firm do the books and the audit?", a: "The same firm cannot do the books and the audit of a company, because the Auditor must be independent of the accounting work." },
      { n: 109, id: "can-a-us-gaap-reporting-package-be-prepared-from-the-indian-", q: "Can a US GAAP reporting package be prepared from the Indian books?", a: "A US GAAP reporting package can be prepared from the Indian books in the format the group needs." },
      { n: 110, id: "is-an-internal-audit-mandatory-for-an-indian-subsidiary", q: "Is an internal audit mandatory for an Indian subsidiary?", a: "An internal audit is mandatory under Section 138 of the Companies Act, 2013 for a private company with turnover of ₹200 crore or more or outstanding borrowings above ₹100 crore from banks or financial institutions. The internal Auditor can be an employee but cannot be the Statutory Auditor." },
      { n: 111, id: "does-the-auditor-have-to-report-on-internal-financial-contro", q: "Does the Auditor have to report on internal financial controls for a small private company?", a: "A private company is exempt from the Auditor's internal financial controls report under Section 143(3)(i) of the Companies Act, 2013 if its turnover is below ₹50 crore and its borrowings are below ₹25 crore, with no default in filing. The Board must still maintain internal financial controls." },
    ],
  },
  {
    id: "common-mistakes",
    label: "10 Common Mistakes US Companies Make Setting Up in India",
    readMore: { href: "/usa-to-india/common-mistakes", label: "Read the full guide: 10 Common Mistakes US Companies Make Setting Up in India" },
    items: [
      { n: 112, id: "what-is-the-most-expensive-mistake", q: "What is the most expensive mistake?", a: "Missing the FEMA timelines for allotment and reporting, because regularization takes time and can involve compounding." },
      { n: 113, id: "can-mistakes-be-fixed-later", q: "Can mistakes be fixed later?", a: "Many mistakes in Indian compliance can be fixed later through late filing, regularization or compounding, but at extra cost and effort. Prevention is cheaper." },
      { n: 114, id: "is-a-checklist-needed-for-every-filing", q: "Is a checklist needed for every filing?", a: "A single plan with owners and dates works better than a checklist for every filing, and it should be set up at the start of the engagement." },
      { n: 115, id: "what-is-the-most-common-mistake-foreign-companies-make-when-", q: "What is the most common mistake foreign companies make when setting up in India?", a: "The most common mistake foreign companies make in India is treating setup as a series of separate filings instead of one plan. Incorporation is only the start, and the FEMA, tax, transfer pricing and payroll steps that follow are where most breaches arise." },
      { n: 116, id: "what-is-the-penalty-for-not-filing-form-inc-20a", q: "What is the penalty for not filing Form INC-20A?", a: "The penalty for not filing Form INC-20A is ₹50,000 on the company and ₹1,000 per day on each officer in default, up to ₹1,00,000 each, under Section 10A of the Companies Act, 2013. The company also cannot commence business or borrow until the form is filed." },
      { n: 117, id: "what-happens-if-form-fc-gpr-is-filed-late", q: "What happens if Form FC-GPR is filed late?", a: "If Form FC-GPR is filed late, the delay is generally regularized by paying a Late Submission Fee, which depends on the amount involved and the length of the delay. Delays outside what the fee route covers, or related breaches, need compounding with the RBI under FEMA, which takes more time and cost than filing on time." },
      { n: 118, id: "can-a-foreign-parent-be-reimbursed-for-pre-incorporation-exp", q: "Can a foreign parent be reimbursed for pre-incorporation expenses?", a: "A foreign parent can recover pre-incorporation expenses by receiving equity in the subsidiary against them, up to 5% of the authorized capital or USD 500,000, whichever is less, subject to conditions in the RBI's foreign investment rules. Costs outside these conditions can create a FEMA issue, so the recovery route should be decided before the costs are incurred." },
      { n: 119, id: "why-do-foreign-companies-face-fema-problems-after-incorporat", q: "Why do foreign companies face FEMA problems after incorporation?", a: "Foreign companies face FEMA problems after incorporation mostly because of sequence and timing: funds are received, shares allotted and reports filed in the wrong order or after the deadline. These contraventions usually arise from misunderstanding the steps rather than intent." },
    ],
  },
  {
    id: "compliance-calendar",
    label: "India Subsidiary Compliance Calendar for US Companies",
    readMore: { href: "/usa-to-india/compliance-calendar", label: "Read the full guide: India Subsidiary Compliance Calendar for US Companies" },
    items: [
      { n: 120, id: "what-is-the-first-compliance-after-incorporation", q: "What is the first compliance after incorporation?", a: "Appointing the first Auditor within 30 days, filing the commencement declaration (INC-20A) within 180 days, and reporting the received funds (FC-GPR) within 30 days of allotment." },
      { n: 121, id: "when-is-the-annual-return-due", q: "When is the annual return due?", a: "Form MGT-7 is due within 60 days of the AGM. Form AOC-4 for financial statements is due within 30 days of the AGM." },
      { n: 122, id: "when-must-the-fla-return-be-filed", q: "When must the FLA return be filed?", a: "The FLA return must be filed by 15 July each year on the RBI portal." },
      { n: 123, id: "what-happens-if-a-filing-deadline-is-missed", q: "What happens if a filing deadline is missed?", a: "Late fees, penalties and, for some company filings, director disqualification can follow. Regular compliance avoids all of these." },
      { n: 124, id: "do-the-new-tax-forms-change-due-dates", q: "Do the new tax forms change due dates?", a: "The new tax forms change the names and numbers, and the notified due dates should be confirmed for each tax year." },
      { n: 125, id: "what-are-the-monthly-due-dates-for-gst-withholding-tax-pf-an", q: "What are the monthly due dates for GST, Withholding Tax, PF and ESI in India?", a: "For regular monthly filers, GSTR-1 is due by the 11th and GSTR-3B by the 20th of the following month, Withholding Tax is deposited by the 7th, and PF and ESI contributions are paid by the 15th." },
    ],
  },
  {
    id: "contracts-and-arbitration",
    label: "Contracts and Arbitration in India for US Companies",
    readMore: { href: "/usa-to-india/contracts-and-arbitration", label: "Read the full guide: Contracts and Arbitration in India for US Companies" },
    items: [
      { n: 126, id: "are-foreign-arbitral-awards-enforceable-in-india", q: "Are foreign arbitral awards enforceable in India?", a: "Awards from notified reciprocating countries can be enforced under the New York Convention framework, subject to the conditions in Indian law." },
      { n: 127, id: "what-is-section-34", q: "What is Section 34?", a: "The section of the Arbitration and Conciliation Act that allows an award made in India to be challenged on limited grounds." },
      { n: 128, id: "does-stamp-duty-apply-to-agreements", q: "Does stamp duty apply to agreements?", a: "Stamp duty applies to many agreements in India, with rates set by the state. Unstamped documents can cause trouble in evidence." },
      { n: 129, id: "is-a-written-agreement-needed-between-parent-and-subsidiary", q: "Is a written agreement needed between parent and subsidiary?", a: "Yes. It supports transfer pricing, tax and legal positions and should be in place before services begin." },
      { n: 130, id: "can-us-law-be-chosen-for-a-contract-with-an-indian-customer", q: "Can US law be chosen for a contract with an Indian customer?", a: "US law can often be chosen for a contract with an Indian customer, but certain Indian laws apply regardless. Advice should be taken on the clause." },
      { n: 131, id: "is-there-a-time-limit-for-arbitration-awards-in-india", q: "Is there a time limit for arbitration awards in India?", a: "A domestic arbitration award in India must be made within 12 months of the completion of pleadings, extendable by 6 months with the parties' consent (Section 29A of the Arbitration and Conciliation Act, 1996). International commercial arbitration is not covered by this limit." },
    ],
  },
  {
    id: "documents-and-apostille",
    label: "Documents and Apostille for an India Subsidiary (US Parent)",
    readMore: { href: "/usa-to-india/documents-and-apostille", label: "Read the full guide: Documents and Apostille for an India Subsidiary (US Parent)" },
    items: [
      { n: 132, id: "which-us-documents-need-an-apostille-and-who-issues-it", q: "Which US documents need an apostille for an Indian subsidiary, and who issues it?", a: "The US parent's Certificate of Incorporation, Certificate of Good Standing, board resolution and charter documents, and the notarized passports and address proofs of its directors and authorized signatory, all need an apostille before they are used in India. The Secretary of State of the state that issued the document, or of the state where the notary is commissioned, issues the apostille, and the US Department of State apostilles federal documents. India and the US are both Hague Convention members, so no Indian embassy legalization is needed." },
      { n: 133, id: "are-india-and-the-us-both-members-of-the-hague-apostille-con", q: "Are India and the US both members of the Hague Apostille Convention?", a: "India and the US are both members of the Hague Apostille Convention. Documents apostilled in the US are accepted in India without further consular legalization." },
      { n: 134, id: "how-long-does-an-apostille-take", q: "How long does an apostille take?", a: "An apostille takes from a few days to a few weeks, depending on the state and the service level chosen. This is usually the main variable in the overall incorporation timeline." },
      { n: 135, id: "what-does-an-apostille-cost-in-the-us", q: "What does an apostille cost in the US?", a: "A US state apostille typically costs $10 to $20 per document (for example $15 in Texas, $20 in California and $10 in New York), and a federal document costs $20 at the US Department of State. Processing ranges from same-day at some state counters to 20 or more business days by mail." },
    ],
  },
  {
    id: "dtaa-pe-risk",
    label: "India-US Tax Treaty and Permanent Establishment Risk",
    readMore: { href: "/usa-to-india/dtaa-pe-risk", label: "Read the full guide: India-US Tax Treaty and Permanent Establishment Risk" },
    items: [
      { n: 136, id: "what-is-a-dtaa", q: "What is a DTAA?", a: "A double taxation avoidance agreement. It allocates taxing rights between two countries and can reduce Withholding Tax on cross-border payments." },
      { n: 137, id: "what-does-the-parent-need-to-claim-treaty-rates", q: "What does the parent need to claim treaty rates?", a: "A US Tax Residency Certificate, Form 41 (previously Form 10F) and, where asked, a declaration of no permanent establishment in India." },
      { n: 138, id: "is-an-indian-subsidiary-a-permanent-establishment-of-the-us-", q: "Is an Indian subsidiary a permanent establishment of the US parent?", a: "An Indian subsidiary is not a permanent establishment of the US parent by itself. The risk arises if the subsidiary acts as the parent's dependent agent, or if the parent's own staff operate from India." },
      { n: 139, id: "which-section-governs-withholding-tax-on-payments-to-a-non-r", q: "Which section governs Withholding Tax on payments to a non-resident?", a: "Section 393 of the Income-tax Act, 2025 (previously Section 195 of the 1961 Act)." },
      { n: 140, id: "can-the-indian-tax-be-credited-in-the-us", q: "Can the Indian tax be credited in the US?", a: "Indian tax can usually be credited in the US as a foreign tax credit under US rules. This should be confirmed with a US tax adviser." },
      { n: 141, id: "how-many-days-of-work-in-india-create-a-permanent-establishm", q: "How many days of work in India create a permanent establishment under the India-US treaty?", a: "Under Article 5 of the India-US treaty, services furnished in India through employees or other personnel create a permanent establishment if the activities continue for more than 90 days within any 12-month period. A building, construction, installation or assembly project creates one after more than 120 days within any 12-month period." },
      { n: 142, id: "what-are-the-india-us-treaty-withholding-rates", q: "What are the India-US treaty withholding rates?", a: "The India-US treaty caps Indian withholding at 15% on dividends where the US company holds at least 10% of the voting power (25% otherwise), 10% on interest paid to banks and 15% on other interest, and 15% on royalties and fees for included services (10% for equipment royalties). The treaty rate applies only with a US Tax Residency Certificate and Form 41 (previously Form 10F)." },
    ],
  },
  {
    id: "eor-vs-subsidiary",
    label: "EOR vs Subsidiary in India: Which Is Right for a US Company?",
    readMore: { href: "/usa-to-india/eor-vs-subsidiary", label: "Read the full guide: EOR vs Subsidiary in India: Which Is Right for a US Company?" },
    items: [
      { n: 143, id: "does-an-eor-remove-tax-risk-for-the-us-company", q: "Does an EOR remove tax risk for the US company?", a: "An Employer of Record does not remove tax risk for the US company. An EOR handles employment compliance, but a permanent establishment can still arise if staff in India conclude contracts or act as the company's fixed place of business." },
      { n: 144, id: "how-quickly-can-a-us-company-hire-through-an-eor", q: "How quickly can a US company hire through an EOR?", a: "Usually within weeks, because no company needs to be incorporated first. The timing depends on the EOR's onboarding and the candidate's notice period with their current employer." },
      { n: 145, id: "can-an-eor-team-be-converted-into-a-subsidiary", q: "Can an EOR team be converted into a subsidiary?", a: "Yes. Employees agree to move to the new company, service history is carried over and payroll is switched on an agreed date. Planning the transfer avoids gaps in employment and benefits." },
      { n: 146, id: "is-an-eor-cheaper-than-a-subsidiary", q: "Is an EOR cheaper than a subsidiary?", a: "An EOR is usually cheaper than a subsidiary for a small team and a short period. As headcount grows, an own subsidiary can be cheaper, so both should be compared against the hiring plan." },
    ],
  },
  {
    id: "ESOP",
    label: "ESOPs for Indian Employees of a US Parent Company",
    readMore: { href: "/usa-to-india/esop", label: "Read the full guide: ESOPs for Indian Employees of a US Parent Company" },
    items: [
      { n: 147, id: "can-indian-employees-receive-us-parent-shares", q: "Can Indian employees receive US parent shares?", a: "Indian employees can receive US parent shares under the parent's plan, subject to FEMA overseas investment rules and reporting. The tax and withholding treatment needs to be set up in advance." },
      { n: 148, id: "when-are-esops-taxed-in-india", q: "When are ESOPs taxed in India?", a: "Twice. The benefit is taxed as salary at exercise or vesting, and capital gains tax applies when the shares are sold." },
      { n: 149, id: "does-the-subsidiary-pay-for-the-parent-s-esop-cost", q: "Does the subsidiary pay for the parent's ESOP cost?", a: "An Indian subsidiary often pays for the parent's ESOP cost through a cost recharge under an agreement. Deductibility and Withholding Tax on the recharge are frequently disputed, so it should be documented from the start." },
    ],
  },
  {
    id: "expat-visa",
    label: "Sending a US Executive to India: Visa, Housing and Tax",
    readMore: { href: "/usa-to-india/expat-visa", label: "Read the full guide: Sending a US Executive to India: Visa, Housing and Tax" },
    items: [
      { n: 150, id: "can-a-us-executive-work-on-a-business-visa", q: "Can a US executive work on a business visa?", a: "A US executive cannot work in India on a business visa. A business visa is for meetings and similar activities, and working for an Indian company needs an employment visa." },
      { n: 151, id: "who-sponsors-the-visa", q: "Who sponsors the visa?", a: "The Indian company that will employ or host the executive sponsors the application. Conditions such as minimum salary can apply." },
      { n: 152, id: "do-expats-pay-indian-income-tax", q: "Do expats pay Indian income tax?", a: "Income earned for work done in India is taxable in India. The treatment of other income depends on tax residency and the India-US tax treaty." },
      { n: 153, id: "does-sending-an-executive-create-a-permanent-establishment", q: "Does sending an executive create a permanent establishment?", a: "Sending an executive to India can create a permanent establishment, particularly if the executive negotiates or concludes contracts for the US company. The structure should be reviewed before the move." },
      { n: 154, id: "what-is-the-minimum-salary-for-an-indian-employment-visa", q: "What is the minimum salary for an Indian employment visa?", a: "An Indian employment visa generally needs the foreign national to earn at least USD 25,000 a year, with limited exceptions. A foreigner staying more than 180 days must register with the FRRO within 14 days of arrival." },
    ],
  },
  {
    id: "funding-fema-fc-gpr",
    label: "Funding an Indian Subsidiary: FEMA and Form FC-GPR",
    readMore: { href: "/usa-to-india/funding-fema-fc-gpr", label: "Read the full guide: Funding an Indian Subsidiary: FEMA and Form FC-GPR" },
    items: [
      { n: 155, id: "what-is-form-fc-gpr", q: "What is Form FC-GPR?", a: "The report an Indian company files with the RBI after issuing shares to a foreign investor, within 30 days of the allotment, through the FIRMS portal." },
      { n: 156, id: "what-if-shares-are-not-allotted-within-60-days", q: "What if shares are not allotted within 60 days?", a: "The money must be refunded to the investor within the prescribed period, unless approval to retain it is obtained." },
      { n: 157, id: "what-is-the-late-submission-fee-for-fc-gpr", q: "What is the Late Submission Fee for FC-GPR?", a: "The Late Submission Fee for a late FC-GPR is ₹7,500 plus 0.025% of the amount involved for each year of delay, and the facility is available for up to three years from the due date. Cases outside this route need compounding with the RBI under FEMA." },
      { n: 158, id: "what-are-the-fema-deadlines-for-share-capital-received-from-", q: "What are the FEMA deadlines for share capital received from a US parent?", a: "A US parent's investment should be reported on the FIRMS portal within 30 days of receipt, shares must be allotted within 60 days of receipt or the money refunded within a further 15 days, and Form FC-GPR is filed within 30 days of allotment. Share transfers between a resident and a non-resident are reported in Form FC-TRS within 60 days." },
    ],
  },
  {
    id: "global-vat",
    label: "Global VAT for US Companies Selling Abroad",
    readMore: { href: "/usa-to-india/global-vat", label: "Read the full guide: Global VAT for US Companies Selling Abroad" },
    items: [
      { n: 159, id: "does-a-us-company-without-an-overseas-office-need-to-registe", q: "Does a US company without an overseas office need to register for VAT?", a: "A US company without an overseas office often needs to register for VAT if it supplies taxable goods or services to customers there. The rules and thresholds vary by country." },
      { n: 160, id: "what-is-the-reverse-charge", q: "What is the reverse charge?", a: "A mechanism where the business customer, not the seller, accounts for VAT on a cross-border supply." },
      { n: 161, id: "is-there-a-single-registration-for-eu-digital-sales", q: "Is there a single registration for EU digital sales?", a: "The EU offers one-stop schemes that let eligible sellers report VAT on B2C digital sales through one return." },
      { n: 162, id: "is-gst-in-india-the-same-as-vat", q: "Is GST in India the same as VAT?", a: "They are similar consumption taxes, but they are separate regimes with separate registration and returns." },
      { n: 163, id: "what-are-the-vat-registration-thresholds-for-selling-service", q: "What are the VAT registration thresholds for selling services abroad from India?", a: "The UK threshold is £90,000 for UK-established businesses but none for non-UK businesses, and the EU €10,000 micro-threshold applies to EU-established sellers only. Australia is AUD 75,000, Canada is CAD 30,000, Singapore is SGD 1 million (plus SGD 100,000 of B2C sales for overseas vendors), and the UAE is AED 375,000 for resident businesses with no threshold for foreign businesses." },
    ],
  },
  {
    id: "hiring-and-payroll",
    label: "Hiring in India: Contracts, Payroll and Statutory Compliance",
    readMore: { href: "/usa-to-india/hiring-and-payroll", label: "Read the full guide: Hiring in India: Contracts, Payroll and Statutory Compliance" },
    items: [
      { n: 164, id: "what-is-the-notice-period-in-india", q: "What is the notice period in India?", a: "The notice period in India is set by the employment contract, commonly one to three months for professional roles. State and statutory rules also apply, so it should be written clearly into each contract." },
      { n: 165, id: "what-is-gratuity", q: "What is gratuity?", a: "A lump sum paid to an employee on leaving after the qualifying period of service, typically five years. The rules are being consolidated in the labour codes, so confirm the current position." },
      { n: 166, id: "does-an-indian-subsidiary-have-to-register-for-provident-fun", q: "Does an Indian subsidiary have to register for provident fund?", a: "Establishments above the prescribed employee limit must register, and many companies register earlier. Confirm the position for your headcount and state." },
      { n: 167, id: "can-us-style-at-will-employment-be-used-in-india", q: "Can US-style at-will employment be used in India?", a: "US-style at-will employment cannot be used in India. Employment in India is contract based, and termination must follow the contract and applicable law." },
      { n: 168, id: "what-are-the-employer-contributions-for-pf-and-esi-in-india", q: "What are the employer contributions for PF and ESI in India?", a: "Employers in India contribute 12% of wages to the provident fund (8.33% to pension and 3.67% to provident fund within the wage ceiling), 0.5% to the EDLI scheme, and 3.25% of wages to ESI for employees earning up to ₹21,000 a month. Employees contribute 12% to the provident fund and 0.75% to ESI." },
    ],
  },
  {
    id: "incorporation-process",
    label: "Incorporation Process for an Indian Subsidiary, Step by Step",
    readMore: { href: "/usa-to-india/incorporation-process", label: "Read the full guide: Incorporation Process for an Indian Subsidiary, Step by Step" },
    items: [
      { n: 169, id: "how-long-does-incorporation-take", q: "How long does incorporation take?", a: "Incorporation of an Indian subsidiary typically takes 4 to 6 weeks from receipt of complete documents. The main variable is how quickly the apostilled US documents are ready." },
      { n: 170, id: "what-happens-right-after-the-certificate-of-incorporation", q: "What happens right after the Certificate of Incorporation?", a: "You open the bank account, transfer the funds for share capital, allot shares, file FC-GPR with the RBI, and complete the commencement and registration steps." },
      { n: 171, id: "does-the-us-parent-need-to-visit-india", q: "Does the US parent need to visit India?", a: "A US parent does not need to visit India to incorporate a subsidiary. The process runs online using apostilled documents and digital signatures." },
      { n: 172, id: "can-the-company-name-be-rejected", q: "Can the company name be rejected?", a: "A company name can be rejected if it is identical or too similar to an existing company or trademark, or breaks the naming rules. Checking availability and proposing alternatives in advance avoids delay." },
      { n: 173, id: "what-are-the-mca-fee-and-stamp-duty-for-incorporating-a-comp", q: "What are the MCA fee and stamp duty for incorporating a company in India?", a: "The MCA filing fee for SPICe+ is nil where the authorized capital is up to ₹15 lakh, and slab fees apply above that. Name reservation costs ₹1,000 for up to two names, PAN and TAN are issued through SPICe+, and stamp duty on the Memorandum and Articles is a state levy, for example ₹1,010 in Rajasthan and ₹620 in Gujarat at ₹1 lakh of authorized capital." },
      { n: 174, id: "how-long-does-the-mca-take-to-incorporate-a-company-in-india", q: "How long does the MCA take to incorporate a company in India?", a: "The MCA stage of incorporating a company in India typically takes 7 to 15 working days, covering digital signatures, name approval, filing SPICe+ and receiving the Certificate of Incorporation. The overall timeline is usually 4 to 6 weeks, because the apostilled US documents, the bank account and the FEMA steps run alongside." },
    ],
  },
  {
    id: "repatriating-profits",
    label: "Repatriating Profits from India to the US: Forms and Tax",
    readMore: { href: "/usa-to-india/repatriating-profits", label: "Read the full guide: Repatriating Profits from India to the US: Forms and Tax" },
    items: [
      { n: 175, id: "can-dividends-be-sent-freely-to-the-us", q: "Can dividends be sent freely to the US?", a: "Dividends can be remitted through the authorized dealer bank from distributable profits after tax, with the Withholding Tax and documentation in place." },
      { n: 176, id: "does-the-treaty-reduce-withholding-tax", q: "Does the treaty reduce Withholding Tax?", a: "The India-US tax treaty can reduce Withholding Tax if the parent is a US tax resident and satisfies the conditions, which requires a Tax Residency Certificate and treaty details in Form 41 (previously Form 10F)." },
    ],
  },
  {
    id: "resident-director",
    label: "Resident Director Requirement for an Indian Company",
    readMore: { href: "/usa-to-india/resident-director", label: "Read the full guide: Resident Director Requirement for an Indian Company" },
    items: [
      { n: 177, id: "can-a-foreign-national-be-the-resident-director", q: "Can a foreign national be the Resident Director?", a: "A foreign national can be the Resident Director if they have stayed in India for at least 182 days in the financial year (Section 149(3) of the Companies Act, 2013). Citizenship is not the test." },
      { n: 178, id: "how-many-directors-does-a-private-company-need", q: "How many directors does a private company need?", a: "At least two, and at least one must be resident in India." },
      { n: 179, id: "can-the-us-parent-s-ceo-be-a-director", q: "Can the US parent's CEO be a director?", a: "The US parent's CEO can be a director of the Indian subsidiary, because foreign nationals can be directors. They need a Digital Signature Certificate and a Director Identification Number." },
      { n: 180, id: "what-if-no-director-meets-the-residency-requirement-during-t", q: "What if no director meets the residency requirement during the year?", a: "The company is not compliant with the Companies Act and can face penalties, so the board should be reconstituted before the year ends." },
    ],
  },
  {
    id: "restructuring-and-exit",
    label: "Restructuring, Mergers and Exit for an Indian Subsidiary",
    readMore: { href: "/usa-to-india/restructuring-and-exit", label: "Read the full guide: Restructuring, Mergers and Exit for an Indian Subsidiary" },
    items: [
      { n: 181, id: "how-is-a-dormant-indian-company-closed", q: "How is a dormant Indian company closed?", a: "A dormant Indian company is closed by applying to the Registrar for strike-off under Section 248 of the Companies Act, 2013, after clearing dues and filing pending returns, if the company has not carried on business for the relevant period." },
      { n: 182, id: "can-the-indian-subsidiary-be-merged-into-another-group-compa", q: "Can the Indian subsidiary be merged into another group company?", a: "The Indian subsidiary can be merged into another group company through a scheme, and a fast-track route exists for a holding company and its wholly owned subsidiary (Section 233 of the Companies Act, 2013)." },
      { n: 183, id: "what-are-the-fee-and-time-to-strike-off-an-indian-company", q: "What are the fee and time to strike off an Indian company?", a: "Striking off an Indian company under Section 248 of the Companies Act, 2013 uses Form STK-2 with a government fee of ₹10,000 and typically takes 3 to 6 months. The company must have carried on no business for the two preceding financial years, or not started within a year, and have no liabilities." },
      { n: 184, id: "what-tax-applies-when-selling-the-shares-of-an-indian-subsid", q: "What tax applies when selling the shares of an Indian subsidiary?", a: "Long-term capital gains on unlisted shares of an Indian subsidiary are taxed at 12.5% where the shares are held for more than 24 months, plus surcharge and cess, subject to treaty relief. A sale between a resident and a non-resident is reported in Form FC-TRS within 60 days." },
    ],
  },
  {
    id: "share-valuation",
    label: "Share Valuation for Foreign Investment in India",
    readMore: { href: "/usa-to-india/share-valuation", label: "Read the full guide: Share Valuation for Foreign Investment in India" },
    items: [
      { n: 185, id: "who-can-issue-the-valuation-certificate", q: "Who can issue the valuation certificate?", a: "An eligible professional as defined in the FEMA rules, such as a Chartered Accountant or a merchant banker, depending on the transaction." },
      { n: 186, id: "is-a-valuation-needed-for-a-wholly-owned-subsidiary-at-incor", q: "Is a valuation needed for a wholly owned subsidiary at incorporation?", a: "A valuation is needed for a wholly owned subsidiary at incorporation for shares issued to the foreign parent, because the pricing must comply with the valuation rules and the filing is supported by a certificate." },
      { n: 187, id: "can-shares-be-issued-at-a-premium", q: "Can shares be issued at a premium?", a: "Shares can be issued at a premium in India. The price cannot be below fair value, but it can be higher." },
      { n: 188, id: "how-long-is-a-valuation-valid", q: "How long is a valuation valid?", a: "There is no single validity that fits every case, so obtain one close to the transaction date." },
      { n: 189, id: "how-old-can-a-valuation-certificate-be-for-fema-filings", q: "How old can a valuation certificate be for FEMA filings?", a: "A valuation certificate for FEMA filings should not be more than 90 days old at the time of the transaction or filing. It is issued by a Chartered Accountant or a SEBI-registered merchant banker." },
    ],
  },
  {
    id: "subsidiary-vs-branch-vs-liaison-office-vs-llp",
    label: "Subsidiary vs Branch vs Liaison Office vs LLP in India",
    readMore: { href: "/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp", label: "Read the full guide: Subsidiary vs Branch vs Liaison Office vs LLP in India" },
    items: [
      { n: 190, id: "can-a-liaison-office-earn-revenue", q: "Can a liaison office earn revenue?", a: "A liaison office cannot earn revenue. It can only represent the parent and coordinate with Indian parties, cannot undertake commercial activity or earn income, and its costs are met by remittances from abroad." },
      { n: 191, id: "can-a-branch-office-be-converted-into-a-subsidiary-later", q: "Can a branch office be converted into a subsidiary later?", a: "A business can be moved into a new Indian subsidiary, usually by transferring the activity and assets to the new company. The tax, FEMA and contract consequences should be planned in advance." },
      { n: 192, id: "is-an-llp-cheaper-than-a-private-limited-company", q: "Is an LLP cheaper than a private limited company?", a: "Compliance for an LLP can be lighter, but eligibility for foreign investment, funding options and US tax treatment usually matter more for a US parent than compliance cost." },
      { n: 193, id: "which-structure-do-most-us-companies-choose", q: "Which structure do most US companies choose?", a: "A wholly owned subsidiary incorporated as a private limited company, because it is a separate entity with limited liability that can carry on full business." },
      { n: 194, id: "what-is-the-tax-rate-for-a-branch-office-in-india", q: "What is the tax rate for a branch office in India?", a: "A branch office of a US company is taxed as a foreign company at 35% on its India profits, plus a 2% surcharge where income is between ₹1 crore and ₹10 crore or 5% above ₹10 crore, plus 4% cess, which gives up to 38.22%. After-tax profits can generally be remitted to the head office without a further layer of Indian tax." },
      { n: 195, id: "what-is-the-tax-rate-for-an-llp-in-india", q: "What is the tax rate for an LLP in India?", a: "An LLP in India is taxed at 30%, plus a 12% surcharge where income exceeds ₹1 crore and 4% cess, which gives 34.944%. An Alternate Minimum Tax of 18.5% of adjusted total income applies where it is higher than the normal tax." },
      { n: 196, id: "does-a-liaison-office-pay-tax-in-india", q: "Does a liaison office pay tax in India?", a: "A liaison office does not pay income tax on business profits because it cannot earn income or carry on commercial activity in India. It still needs a PAN and must file an Annual Activity Certificate from a Chartered Accountant, and commercial activity could create a permanent establishment and tax exposure." },
      { n: 197, id: "what-are-the-eligibility-requirements-for-a-liaison-office-o", q: "What are the eligibility requirements for a liaison office or branch office in India?", a: "A US company needs a net worth of at least USD 50,000 and a profit-making record in the preceding three financial years to open a liaison office, and a net worth of at least USD 100,000 and a profit-making record in the preceding five financial years to open a branch office. Both need RBI approval through an authorized dealer bank." },
    ],
  },
  {
    id: "tax-notices-and-litigation",
    label: "Handling Indian Tax Notices for a US-Owned Subsidiary",
    readMore: { href: "/usa-to-india/tax-notices-and-litigation", label: "Read the full guide: Handling Indian Tax Notices for a US-Owned Subsidiary" },
    items: [
      { n: 198, id: "what-is-the-mutual-agreement-procedure", q: "What is the Mutual Agreement Procedure?", a: "A treaty process in which the Indian and US tax authorities resolve a double taxation case." },
      { n: 199, id: "what-should-be-done-first-on-getting-a-tax-notice", q: "What should be done first on getting a tax notice?", a: "On getting a tax notice, the deadline should be noted, the notice sent to the tax adviser the same day and the supporting records collected." },
      { n: 200, id: "can-a-transfer-pricing-order-be-appealed", q: "Can a transfer pricing order be appealed?", a: "A transfer pricing order can be appealed through the Dispute Resolution Panel route or the first appeal, followed by the tribunal." },
      { n: 201, id: "is-a-gst-notice-handled-differently", q: "Is a GST notice handled differently?", a: "A GST notice is handled differently from an income tax notice, because GST has its own portal, forms and appeal path." },
      { n: 202, id: "do-notices-come-to-the-us-parent", q: "Do notices come to the US parent?", a: "Tax notices are issued to the Indian company, not to the US parent. The parent should be kept informed of anything significant." },
      { n: 203, id: "what-is-the-deadline-to-appeal-an-income-tax-order-in-india", q: "What is the deadline to appeal an income tax order in India?", a: "An appeal to the Commissioner (Appeals) is generally due within 30 days of the order, objections to the Dispute Resolution Panel against a transfer pricing draft assessment order are due within 30 days of receiving it, and an appeal to the Income Tax Appellate Tribunal is generally due within 60 days." },
    ],
  },
  {
    id: "transfer-pricing",
    label: "Transfer Pricing in India for US-Owned Subsidiaries",
    readMore: { href: "/usa-to-india/transfer-pricing", label: "Read the full guide: Transfer Pricing in India for US-Owned Subsidiaries" },
    items: [
      { n: 204, id: "what-is-transfer-pricing-in-simple-terms", q: "What is transfer pricing in simple terms?", a: "Transfer pricing is the price charged between related companies. For a US parent and its Indian subsidiary, that price must be one that independent parties would have agreed." },
      { n: 205, id: "which-form-reports-transfer-pricing-transactions", q: "Which form reports transfer pricing transactions?", a: "Form 48 (previously Form 3CEB under the 1961 Act), certified by a Chartered Accountant." },
      { n: 206, id: "can-a-transfer-pricing-adjustment-cause-double-taxation", q: "Can a transfer pricing adjustment cause double taxation?", a: "A transfer pricing adjustment can cause double taxation. The Mutual Agreement Procedure under the India-US treaty exists to resolve it." },
      { n: 207, id: "does-a-small-subsidiary-need-transfer-pricing-documentation", q: "Does a small subsidiary need transfer pricing documentation?", a: "A small subsidiary needs transfer pricing compliance for any international transaction with an associated enterprise, which must be at arm's length. Documentation and the accountant's report depend on prescribed thresholds, which should be confirmed for the transaction values." },
      { n: 208, id: "can-the-price-be-agreed-with-the-tax-authority-in-advance", q: "Can the price be agreed with the tax authority in advance?", a: "The price can be agreed in advance through an Advance Pricing Agreement, which gives certainty for several years but takes time to negotiate." },
      { n: 209, id: "what-are-the-transfer-pricing-documentation-thresholds-in-in", q: "What are the transfer pricing documentation thresholds in India?", a: "Transfer pricing documentation must be maintained in India where international transactions together exceed ₹1 crore, and the accountant's report in Form 48 (previously Form 3CEB) is filed for any international transaction. A master file is needed where group revenue exceeds ₹500 crore and international transactions exceed ₹50 crore, and country-by-country reporting applies at consolidated group revenue of ₹6,400 crore or more." },
    ],
  },
  {
    id: "us-parent-obligations",
    label: "US Reporting for an Indian Subsidiary: Form 5471, FBAR",
    readMore: { href: "/usa-to-india/us-parent-obligations", label: "Read the full guide: US Reporting for an Indian Subsidiary: Form 5471, FBAR" },
    items: [
      { n: 210, id: "does-a-us-company-have-to-report-its-indian-subsidiary-to-th", q: "Does a US company have to report its Indian subsidiary to the IRS?", a: "A US company generally has to report its Indian subsidiary to the IRS, commonly on Form 5471 under Section 6038 of the Internal Revenue Code, filed with the US tax return. This should be confirmed with a US CPA." },
      { n: 211, id: "will-the-indian-financial-year-cause-problems", q: "Will the Indian financial year cause problems?", a: "The Indian financial year needs planning, because the Indian year ends 31 March and a US parent often reports on a different year-end. A reporting bridge solves this." },
      { n: 212, id: "who-prepares-form-5471", q: "Who prepares Form 5471?", a: "Form 5471 is prepared by the US parent's CPA, because US filings are outside the scope of the Indian adviser. The Indian financial information the CPA needs is supplied by the subsidiary's accountants." },
      { n: 213, id: "is-an-fbar-required-for-the-indian-bank-account", q: "Is an FBAR required for the Indian bank account?", a: "A US person with a financial interest in or signature authority over foreign accounts must file an FBAR if the combined value exceeds $10,000 at any time in the year. It is due on 15 April with an automatic extension to 15 October, and a non-willful failure can attract a penalty of up to $10,000." },
      { n: 214, id: "what-is-the-penalty-for-not-filing-form-5471", q: "What is the penalty for not filing Form 5471?", a: "The penalty for not filing Form 5471 is $10,000 per foreign corporation for each year, plus $10,000 for each 30 days the failure continues beyond 90 days after IRS notice, up to $50,000 more." },
    ],
  },
  {
    id: "esop",
    label: "More on ESOPs for Indian Employees of a US Parent Company",
    readMore: { href: "/usa-to-india/esop", label: "Read the full guide: ESOPs for Indian Employees of a US Parent Company" },
    items: [
      { n: 215, id: "how-is-an-esop-taxed-for-employees-in-india", q: "How is an ESOP taxed for employees in India?", a: "An Indian employee is taxed on ESOP shares twice: as salary on the fair market value at exercise less the exercise price (for RSUs, at vesting), with tax withheld by the employer, and as capital gains on sale, where the long-term rate is 12.5% for shares held more than 24 months. Employees must disclose foreign shares in Schedule FA and can claim foreign tax credit using Form 67." },
      { n: 216, id: "what-are-the-companies-act-conditions-for-esops-in-india", q: "What are the Companies Act conditions for ESOPs in India?", a: "An Indian company issues ESOPs under Section 62(1)(b) of the Companies Act, 2013 and Rule 12 of the Companies (Share Capital and Debentures) Rules, 2014, which require a special resolution of shareholders (filed in Form MGT-14 within 30 days) and a minimum of one year between grant and vesting." },
    ],
  },
  {
    id: "choosing-an-indian-state-and-city-for-us-companies",
    label: "Choosing an Indian State and City for a US Company: Talent, Cost, Rules and Incentives",
    readMore: { href: "/usa-to-india/choosing-an-indian-state-and-city-for-us-companies", label: "Read the full guide: Choosing an Indian State and City for a US Company: Talent, Cost, Rules and Incentives" },
    items: [
      { n: 217, id: "which-indian-state-is-best-for-a-us-company", q: "Which Indian state is best for a US company?", a: "There is no single best. Choose by function and talent first, then compare cost and state rules." },
      { n: 218, id: "can-i-change-the-registered-office-state-later", q: "Can I change the registered office state later?", a: "Yes, but it needs shareholder and regulatory steps, so decide with care at the start." },
      { n: 219, id: "which-cities-are-common-for-engineering-teams", q: "Which cities are common for engineering teams?", a: "Bengaluru, Hyderabad, Pune and Chennai are common choices." },
      { n: 220, id: "which-cities-suit-operations-and-finance-teams", q: "Which cities suit operations and finance teams?", a: "Hyderabad, Pune, Chennai and Delhi NCR are common, with Mumbai for finance and sales." },
      { n: 221, id: "does-stamp-duty-differ-by-state", q: "Does stamp duty differ by state?", a: "Yes, for the charter documents, leases and many agreements." },
      { n: 222, id: "is-gift-city-suitable-for-a-software-company", q: "Is GIFT City suitable for a software company?", a: "Usually no. It is designed for international financial services." },
      { n: 223, id: "should-i-choose-by-incentive", q: "Should I choose by incentive?", a: "No. Incentives change and carry conditions, and talent availability matters more." },
      { n: 224, id: "do-i-need-separate-registrations-in-each-state", q: "Do I need separate registrations in each state?", a: "Goods and services tax, payroll and shops registrations are state-specific, so a team in a second state needs its own." },
      { n: 225, id: "how-many-cities-should-i-start-with", q: "How many cities should I start with?", a: "One. Add a second when the first is stable." },
    ],
  },
  {
    id: "cost-of-setting-up-a-subsidiary-in-india-from-the-us",
    label: "Cost of Setting Up a Subsidiary in India from the US: Budget Framework and Fee Questions",
    readMore: { href: "/usa-to-india/cost-of-setting-up-a-subsidiary-in-india-from-the-us", label: "Read the full guide: Cost of Setting Up a Subsidiary in India from the US: Budget Framework and Fee Questions" },
    items: [
      { n: 226, id: "how-much-does-it-cost-to-set-up-a-subsidiary-in-india-from-t", q: "How much does it cost to set up a subsidiary in India from the US?", a: "AU Corporate's fee is USD 750 to USD 1,000 for share capital up to ₹10 lakh, for the incorporation work only. Government charges, bank charges, office, audit and compliance are separate." },
      { n: 227, id: "what-is-10-lakh-in-dollars", q: "What is ₹10 lakh in dollars?", a: "₹10 lakh is roughly USD 10,500 at an indicative ₹95 per dollar (late-2026 level; check the live rate before remitting)." },
      { n: 228, id: "does-the-set-up-fee-cover-annual-compliance", q: "Does the set-up fee cover annual compliance?", a: "No. Accounting, tax, payroll and audit are priced against your plan." },
      { n: 229, id: "are-there-us-side-costs", q: "Are there US-side costs?", a: "Yes: notary and apostille for documents, and the US CPA's work on Form 5471 and the foreign tax credit." },
      { n: 230, id: "what-recurring-costs-start-in-year-one", q: "What recurring costs start in year one?", a: "Registered office, accounting, GST and TDS, payroll, statutory audit, annual filings, the tax return and, where it applies, a transfer pricing report." },
      { n: 231, id: "are-bank-charges-included", q: "Are bank charges included?", a: "Usually not. Ask who bears remittance charges and the conversion spread." },
      { n: 232, id: "why-is-the-audit-due-with-no-revenue", q: "Why is the audit due with no revenue?", a: "A company must have its accounts audited and filed every year whether or not it trades." },
      { n: 233, id: "how-do-i-get-a-costing-for-my-plan", q: "How do I get a costing for my plan?", a: "Use the costing tool on the main guide or send us the structure, headcount, sector and shareholders." },
    ],
  },
  {
    id: "fcpa-anti-bribery-and-export-controls-for-indian-subsidiaries",
    label: "FCPA, Indian Anti-Bribery Law and US Export Controls for an Indian Subsidiary",
    readMore: { href: "/usa-to-india/fcpa-anti-bribery-and-export-controls-for-indian-subsidiaries", label: "Read the full guide: FCPA, Indian Anti-Bribery Law and US Export Controls for an Indian Subsidiary" },
    items: [
      { n: 234, id: "does-the-fcpa-apply-to-an-indian-subsidiary", q: "Does the FCPA apply to an Indian subsidiary?", a: "Directly to US persons and agents, and indirectly to the subsidiary when a US person is involved or when its books are consolidated into a US issuer. Treat it as applicable." },
      { n: 235, id: "does-india-have-its-own-anti-bribery-law", q: "Does India have its own anti-bribery law?", a: "Yes. The Prevention of Corruption Act, 1988 as amended in 2018 punishes giving a bribe and makes a commercial organisation liable for bribery by an associated person, with an adequate-procedures defence." },
      { n: 236, id: "are-facilitation-payments-allowed", q: "Are facilitation payments allowed?", a: "They are not a safe harbour in India and the FCPA exception is narrow. Avoid them." },
      { n: 237, id: "what-do-we-need-to-do-for-agents-and-distributors", q: "What do we need to do for agents and distributors?", a: "Run due diligence, write the scope and fees into a contract with an anti-bribery clause, and monitor payments." },
      { n: 238, id: "is-sharing-source-code-with-the-indian-team-an-export", q: "Is sharing source code with the Indian team an export?", a: "Yes, releasing controlled technology or source code to a foreign national, including in India, is an export under the EAR. Most commercial software needs no licence, but classify first." },
      { n: 239, id: "which-technologies-need-special-care", q: "Which technologies need special care?", a: "Encryption, aerospace, defence, advanced semiconductors and some dual-use items. Check the Commerce Control List." },
      { n: 240, id: "can-us-sanctions-affect-an-indian-subsidiary", q: "Can US sanctions affect an Indian subsidiary?", a: "In some programmes yes. Screen customers and vendors and take advice before doing business with sanctioned parties or territories." },
      { n: 241, id: "does-the-2025-change-in-us-enforcement-relax-the-rules", q: "Does the 2025 change in US enforcement relax the rules?", a: "No. The statutes remain in force, enforcement priorities can change again, and Indian law is independent." },
      { n: 242, id: "who-should-own-the-programme", q: "Who should own the programme?", a: "A named person in the US compliance function with a local owner in India, plus an annual report to the board." },
    ],
  },
  {
    id: "gcc-for-us-companies",
    label: "Global Capability Centre in India for US Companies: Models, Transfer Pricing and Setup",
    readMore: { href: "/usa-to-india/gcc-for-us-companies", label: "Read the full guide: Global Capability Centre in India for US Companies: Models, Transfer Pricing and Setup" },
    items: [
      { n: 243, id: "what-is-a-gcc", q: "What is a GCC?", a: "A global capability centre is an Indian entity owned by a foreign group that performs work for the group, such as engineering, analytics, finance or operations." },
      { n: 244, id: "what-models-can-a-us-company-use", q: "What models can a US company use?", a: "A wholly owned subsidiary, a build-operate-transfer arrangement with a partner, or a hybrid with a managed team while the entity is built." },
      { n: 245, id: "how-is-a-gcc-taxed-in-india", q: "How is a GCC taxed in India?", a: "As a contract service provider to the parent, usually on cost plus a mark-up that is supported by benchmarking." },
      { n: 246, id: "is-there-a-safe-harbour-for-gcc-margins", q: "Is there a safe harbour for GCC margins?", a: "Indian rules provide safe harbour margins for some IT services, reportedly revised in 2025. Confirm the current margins and thresholds before electing." },
      { n: 247, id: "does-a-gcc-create-a-permanent-establishment-of-the-us-parent", q: "Does a GCC create a permanent establishment of the US parent?", a: "Not by itself. The risk rises if the centre concludes contracts for the parent or operates as its fixed place of business." },
      { n: 248, id: "who-owns-the-intellectual-property-made-in-india", q: "Who owns the intellectual property made in India?", a: "It belongs to the US parent only if assigned in writing through the Indian company, with terms that satisfy Indian law." },
      { n: 249, id: "do-states-offer-incentives-for-gccs", q: "Do states offer incentives for GCCs?", a: "Several states have announced GCC policies, with terms that vary and change. Confirm current terms before relying on any." },
      { n: 250, id: "how-long-does-it-take-to-set-up-a-gcc", q: "How long does it take to set up a GCC?", a: "Incorporation takes weeks, but a functioning centre with a first team usually takes six to twelve months." },
      { n: 251, id: "should-we-use-build-operate-transfer", q: "Should we use build-operate-transfer?", a: "It suits a fast start and a clean transfer. Agree the transfer price, staff consent and intellectual property ownership up front." },
    ],
  },
  {
    id: "how-long-it-takes-to-set-up-from-the-us",
    label: "How Long It Takes to Set Up an Indian Subsidiary from the US: Timeline and Time Zones",
    readMore: { href: "/usa-to-india/how-long-it-takes-to-set-up-from-the-us", label: "Read the full guide: How Long It Takes to Set Up an Indian Subsidiary from the US: Timeline and Time Zones" },
    items: [
      { n: 252, id: "how-long-does-it-take-a-us-company-to-set-up-in-india", q: "How long does it take a US company to set up in India?", a: "About two to three months from board decision to a company that can invoice. Incorporation takes two to three weeks from a complete file." },
      { n: 253, id: "what-is-the-slowest-step", q: "What is the slowest step?", a: "Usually the bank account and the first remittance, followed by the US notary and apostille." },
      { n: 254, id: "when-must-shares-be-allotted", q: "When must shares be allotted?", a: "Within 60 days of receiving the money." },
      { n: 255, id: "when-is-inc-20a-due", q: "When is INC-20A due?", a: "Within 180 days of incorporation." },
      { n: 256, id: "how-does-the-time-difference-affect-the-project", q: "How does the time difference affect the project?", a: "India is 9.5 to 12.5 hours ahead, so a query can lose a day. Name owners on both sides and use one weekly call." },
      { n: 257, id: "can-some-steps-run-in-parallel", q: "Can some steps run in parallel?", a: "Yes. US documents, Indian director credentials and name, and the bank discussion can all start in week one." },
      { n: 258, id: "what-if-i-need-the-company-by-a-fixed-date", q: "What if I need the company by a fixed date?", a: "Tell us at the start so that the long steps start first and an interim arrangement can be considered." },
    ],
  },
  {
    id: "indian-labour-codes-for-us-employers",
    label: "India's Labour Codes for US Employers: Wages, Notice, Termination and Working Hours",
    readMore: { href: "/usa-to-india/indian-labour-codes-for-us-employers", label: "Read the full guide: India's Labour Codes for US Employers: Wages, Notice, Termination and Working Hours" },
    items: [
      { n: 259, id: "is-there-at-will-employment-in-india", q: "Is there at-will employment in India?", a: "No. Notice, cause and, for larger establishments, formal procedure apply, depending on the contract, the role and the state." },
      { n: 260, id: "when-did-the-labour-codes-come-into-force", q: "When did the labour codes come into force?", a: "They were reported in force from 21 November 2025, with central and state rules still developing. Confirm the current position." },
      { n: 261, id: "what-is-the-50-wage-rule", q: "What is the 50% wage rule?", a: "Excluded allowances are capped so that wages make up at least half of total remuneration, which raises the base for provident fund, gratuity and bonus." },
      { n: 262, id: "can-i-hire-staff-on-fixed-term-contracts", q: "Can I hire staff on fixed-term contracts?", a: "Yes, with wages and benefits equal to permanent staff and gratuity after one year. Do not use them to avoid permanent status for ongoing roles." },
      { n: 263, id: "what-is-the-retrenchment-threshold", q: "What is the retrenchment threshold?", a: "The industrial relations code, as reported, requires prior government permission for lay-off, retrenchment and closure in establishments with 300 or more workers." },
      { n: 264, id: "how-much-overtime-is-paid", q: "How much overtime is paid?", a: "Twice the ordinary wage rate in the code as reported." },
      { n: 265, id: "do-managers-have-the-same-protection-as-workers", q: "Do managers have the same protection as workers?", a: "Not in the same way. Managers and supervisors are generally governed by contract and state law, but the classification depends on duties." },
      { n: 266, id: "are-gig-workers-covered", q: "Are gig workers covered?", a: "The social security code extends coverage to gig and platform workers through a fund. Confirm the rules if you use them." },
    ],
  },
  {
    id: "ip-ownership-and-copyright-assignment-for-indian-teams",
    label: "Who Owns the Work? IP Assignment, Copyright and Patent Filing Rules for Indian Teams of US Companies",
    readMore: { href: "/usa-to-india/ip-ownership-and-copyright-assignment-for-indian-teams", label: "Read the full guide: Who Owns the Work? IP Assignment, Copyright and Patent Filing Rules for Indian Teams of US Companies" },
    items: [
      { n: 267, id: "who-owns-software-written-by-employees-in-india", q: "Who owns software written by employees in India?", a: "The employer owns works made in the course of employment under a contract of service, but a written assignment from the Indian company to the US parent is still needed." },
      { n: 268, id: "what-are-the-default-terms-of-an-indian-copyright-assignment", q: "What are the default terms of an Indian copyright assignment?", a: "If the duration is not stated it is five years, and if the territory is not stated it is India. State both clearly." },
      { n: 269, id: "can-an-assignment-lapse", q: "Can an assignment lapse?", a: "Yes, if the assignee does not exercise the rights within the stated period, or within one year if none is stated, unless the contract says otherwise." },
      { n: 270, id: "do-i-need-indian-permission-to-file-a-us-patent", q: "Do I need Indian permission to file a US patent?", a: "Yes, for an invention made in India, unless it was first filed in India at least six weeks earlier or the Controller has given written permission." },
      { n: 271, id: "are-post-employment-non-competes-enforceable", q: "Are post-employment non-competes enforceable?", a: "Generally not, as a restraint of trade. Use confidentiality, notice and non-solicitation terms." },
      { n: 272, id: "is-there-a-trade-secret-law-in-india", q: "Is there a trade secret law in India?", a: "No separate statute. Protection comes from contract and the law of confidence." },
      { n: 273, id: "do-contractors-assign-their-work-automatically", q: "Do contractors assign their work automatically?", a: "No. A contractor under a contract for service is not an employee for ownership, so a written assignment is needed." },
      { n: 274, id: "does-open-source-use-matter", q: "Does open-source use matter?", a: "Yes. Copyleft licences can reach the parent product, so review licences and keep a bill of materials." },
      { n: 275, id: "does-the-assignment-need-stamp-duty", q: "Does the assignment need stamp duty?", a: "It can, depending on the state and the document. Check before signing." },
    ],
  },
  {
    id: "nri-and-oci-founders-of-us-companies-investing-in-india",
    label: "NRI and OCI Founders of US Companies: FEMA Status, Investment Routes and Tax Residency",
    readMore: { href: "/usa-to-india/nri-and-oci-founders-of-us-companies-investing-in-india", label: "Read the full guide: NRI and OCI Founders of US Companies: FEMA Status, Investment Routes and Tax Residency" },
    items: [
      { n: 276, id: "is-an-oci-cardholder-treated-as-an-nri", q: "Is an OCI cardholder treated as an NRI?", a: "For most investment purposes, yes. An OCI cardholder is a foreign citizen of Indian origin and is generally treated like an NRI for foreign exchange investment rules." },
      { n: 277, id: "can-an-nri-invest-in-india-without-foreign-direct-investment", q: "Can an NRI invest in India without foreign direct investment conditions?", a: "On a non-repatriable basis, an NRI's investment is treated as a domestic investment. The repatriable basis follows the foreign direct investment route." },
      { n: 278, id: "if-my-us-company-is-owned-by-indian-origin-founders-is-it-an", q: "If my US company is owned by Indian-origin founders, is it an NRI investor?", a: "The company is a non-resident entity and invests under the foreign direct investment route. Special rules for NRI-owned entities should be checked." },
      { n: 279, id: "when-does-a-founder-become-an-indian-tax-resident", q: "When does a founder become an Indian tax resident?", a: "At 182 days or more in a financial year, or the multi-year test, with higher thresholds for some visitors of Indian origin. Confirm your own case." },
      { n: 280, id: "what-if-both-india-and-the-us-treat-me-as-a-resident", q: "What if both India and the US treat me as a resident?", a: "The India-US treaty's tie-breaker looks at permanent home, vital interests, habitual abode and nationality." },
      { n: 281, id: "can-an-oci-be-a-director-of-an-indian-company", q: "Can an OCI be a director of an Indian company?", a: "Yes, with a Director Identification Number and Digital Signature Certificate. The Resident Director rule needs 182 days in India." },
      { n: 282, id: "do-us-citizens-report-indian-holdings", q: "Do US citizens report Indian holdings?", a: "Yes. Form 5471, the FBAR and Form 8938 may apply, depending on the holding and the thresholds." },
      { n: 283, id: "can-i-send-the-sale-proceeds-of-indian-property-abroad", q: "Can I send the sale proceeds of Indian property abroad?", a: "Subject to limits and tax conditions for NRIs. Take advice before the sale." },
      { n: 284, id: "should-the-founder-hold-the-shares-or-the-us-company", q: "Should the founder hold the shares or the US company?", a: "It depends on the plan for ownership, exit and return to India. Decide before the first remittance." },
    ],
  },
  {
    id: "us-manufacturers-pli-sez-and-incentives",
    label: "US Manufacturers in India: PLI, Special Economic Zones, Customs Duty and Product Standards",
    readMore: { href: "/usa-to-india/us-manufacturers-pli-sez-and-incentives", label: "Read the full guide: US Manufacturers in India: PLI, Special Economic Zones, Customs Duty and Product Standards" },
    items: [
      { n: 285, id: "does-india-offer-incentives-for-us-manufacturers", q: "Does India offer incentives for US manufacturers?", a: "Yes, in the form of production-linked incentives for listed sectors, zone and export unit benefits, and state concessions, each with conditions." },
      { n: 286, id: "what-is-a-pli-scheme", q: "What is a PLI scheme?", a: "A scheme that pays a percentage of incremental sales of eligible products over a base year, for a limited period, subject to investment and sales thresholds." },
      { n: 287, id: "do-special-economic-zones-still-have-a-tax-holiday", q: "Do special economic zones still have a tax holiday?", a: "Income-tax holidays ended for units that began operations after March 2020. Zone benefits now rest mainly on indirect tax and logistics." },
      { n: 288, id: "is-manufacturing-open-to-100-foreign-ownership", q: "Is manufacturing open to 100% foreign ownership?", a: "Generally yes under the Automatic Route, with exceptions in a few sectors. Confirm for your product." },
      { n: 289, id: "what-are-quality-control-orders", q: "What are quality control orders?", a: "Rules that make BIS certification compulsory for listed products and sometimes their inputs, which can restrict imports of components." },
      { n: 290, id: "how-is-machinery-taxed-on-import", q: "How is machinery taxed on import?", a: "Customs duty depends on the tariff line and any concession, and goods and services tax applies with input credit if conditions are met." },
      { n: 291, id: "should-i-choose-a-location-only-for-incentives", q: "Should I choose a location only for incentives?", a: "No. Talent, logistics, power and approvals matter more, and schemes change." },
      { n: 292, id: "does-the-us-parent-need-to-do-anything-for-a-manufacturing-s", q: "Does the US parent need to do anything for a manufacturing subsidiary?", a: "The usual Form 5471 and credit work applies, and transfer pricing needs care. See the US tax guide." },
      { n: 293, id: "when-should-the-subsidiary-be-set-up", q: "When should the subsidiary be set up?", a: "Early, so that it can sign contracts, hold licences and apply for schemes." },
    ],
  },
  {
    id: "us-privacy-hipaa-ccpa-and-dpdp",
    label: "US Privacy Law and India's DPDP Act: HIPAA, CCPA and Offshore Data Teams",
    readMore: { href: "/usa-to-india/us-privacy-hipaa-ccpa-and-dpdp", label: "Read the full guide: US Privacy Law and India's DPDP Act: HIPAA, CCPA and Offshore Data Teams" },
    items: [
      { n: 294, id: "does-the-us-have-one-federal-privacy-law", q: "Does the US have one federal privacy law?", a: "No. Duties come from sector laws such as HIPAA and the Gramm-Leach-Bliley Act, state laws such as California's, and customer contracts." },
      { n: 295, id: "do-i-need-a-business-associate-agreement-with-my-indian-subs", q: "Do I need a business associate agreement with my Indian subsidiary?", a: "If it handles protected health information for a US covered entity or business associate, yes. It is a subcontractor business associate." },
      { n: 296, id: "when-does-the-dpdp-act-take-full-effect", q: "When does the DPDP Act take full effect?", a: "The Rules were notified on 13 November 2025 and the main duties apply from 13 May 2027, in stages." },
      { n: 297, id: "what-is-the-dpdp-exemption-for-outsourced-foreign-data", q: "What is the DPDP exemption for outsourced foreign data?", a: "Section 17(1) exempts certain obligations when personal data of people outside India is processed in India under a contract with a person outside India. Security duties remain, and Indian counsel should confirm the scope." },
      { n: 298, id: "does-dpdp-apply-to-my-indian-employees-data", q: "Does DPDP apply to my Indian employees' data?", a: "Yes. The foreign-data exemption does not cover the Indian company's own employees or customers." },
      { n: 299, id: "can-us-consumer-data-be-stored-in-india", q: "Can US consumer data be stored in India?", a: "Usually yes, with a service provider contract and the controls the US law and the customer require, unless the customer forbids offshore processing." },
      { n: 300, id: "do-customers-ask-for-soc-2", q: "Do customers ask for SOC 2?", a: "Often. SOC 2 Type II or ISO 27001 reports are common requirements in enterprise contracts." },
      { n: 301, id: "what-is-the-dpdp-penalty", q: "What is the DPDP penalty?", a: "Up to INR 250 crore for the most serious failures such as failing to take reasonable security safeguards." },
      { n: 302, id: "is-india-a-country-of-concern-for-the-us-bulk-data-rule", q: "Is India a country of concern for the US bulk data rule?", a: "India is not on the list of countries of concern, but onward transfers from India to those countries would still need controls." },
    ],
  },
  {
    id: "us-saas-and-digital-sales-into-india",
    label: "US SaaS and Digital Sales into India: GST on Online Services, Withholding and Treaty Issues",
    readMore: { href: "/usa-to-india/us-saas-and-digital-sales-into-india", label: "Read the full guide: US SaaS and Digital Sales into India: GST on Online Services, Withholding and Treaty Issues" },
    items: [
      { n: 303, id: "does-a-us-saas-company-need-to-register-for-gst-in-india", q: "Does a US SaaS company need to register for GST in India?", a: "If it sells online services to non-taxable persons in India, yes, under the simplified OIDAR registration for foreign suppliers. For sales to GST-registered businesses, the customer pays under reverse charge." },
      { n: 304, id: "what-is-the-gst-rate-on-online-services", q: "What is the GST rate on online services?", a: "18%." },
      { n: 305, id: "do-indian-customers-withhold-tax-on-saas-fees", q: "Do Indian customers withhold tax on SaaS fees?", a: "It depends on whether the payment is a royalty or technical fee. The India-US treaty rate is 15% in the general case. Many subscription fees are argued to be business income, so the facts and contract matter." },
      { n: 306, id: "is-the-equalisation-levy-still-charged", q: "Is the equalisation levy still charged?", a: "No. The 6% levy on online advertising ceased from 1 April 2025 and the 2% levy on e-commerce supply from 1 August 2024. Confirm against the current Finance Act." },
      { n: 307, id: "does-the-us-company-have-a-permanent-establishment-in-india", q: "Does the US company have a permanent establishment in India?", a: "Not from remote sales alone. A fixed place of business or a dependent agent could create one." },
      { n: 308, id: "what-is-significant-economic-presence", q: "What is significant economic presence?", a: "A domestic law concept based on revenue or users in India. The India-US treaty has no equivalent, so the treaty normally prevails." },
      { n: 309, id: "can-i-invoice-in-us-dollars", q: "Can I invoice in US dollars?", a: "Yes for B2B sales, but consumer sales are normally in rupees for practical reasons. Foreign exchange rules apply to the customer's payment." },
      { n: 310, id: "when-should-i-set-up-a-local-company", q: "When should I set up a local company?", a: "When Indian customers need a local contracting party, support or data residency, or when you plan a team in India." },
      { n: 311, id: "what-documents-should-i-give-indian-customers-for-the-treaty", q: "What documents should I give Indian customers for the treaty?", a: "A US tax residency certificate and Form 41, with a beneficial ownership declaration." },
    ],
  },
  {
    id: "us-tax-on-indian-subsidiary-ncti-subpart-f-and-foreign-tax-credit",
    label: "US Tax on an Indian Subsidiary: NCTI (Formerly GILTI), Subpart F, Section 245A and Foreign Tax Credits",
    readMore: { href: "/usa-to-india/us-tax-on-indian-subsidiary-ncti-subpart-f-and-foreign-tax-credit", label: "Read the full guide: US Tax on an Indian Subsidiary: NCTI (Formerly GILTI), Subpart F, Section 245A and Foreign Tax Credits" },
    items: [
      { n: 312, id: "does-the-us-tax-profits-of-an-indian-subsidiary-before-they-", q: "Does the US tax profits of an Indian subsidiary before they are paid?", a: "In part. Subpart F income and net CFC tested income (formerly GILTI) are included in the US shareholder's income each year, whether or not cash is distributed." },
      { n: 313, id: "what-was-gilti-renamed", q: "What was GILTI renamed?", a: "Net CFC tested income, or NCTI, for tax years beginning after 2025 under the July 2025 tax act. Confirm the current deduction and credit percentages with a US adviser." },
      { n: 314, id: "can-a-us-company-deduct-dividends-from-india", q: "Can a US company deduct dividends from India?", a: "A US C corporation may claim a 100% dividends-received deduction under Section 245A if the ownership and holding period conditions are met." },
      { n: 315, id: "is-indian-tax-creditable-in-the-us", q: "Is Indian tax creditable in the US?", a: "Indian income tax paid by the subsidiary, and Indian withholding tax, can be credited subject to the foreign tax credit limits and baskets." },
      { n: 316, id: "what-is-the-high-tax-exclusion", q: "What is the high-tax exclusion?", a: "An election to exclude income taxed abroad above a stated share of the US rate. Indian company tax of about 25.17% is above that level, but the election is group-wide." },
      { n: 317, id: "does-the-owner-type-matter", q: "Does the owner type matter?", a: "Yes. A C corporation, an S corporation, a partnership and an individual are taxed differently, and pass-through owners may consider a Section 962 election." },
      { n: 318, id: "can-the-us-owner-choose-how-the-indian-company-is-classified", q: "Can the US owner choose how the Indian company is classified?", a: "Often yes, because an Indian private limited company is not a per se corporation. The choice has consequences and should be made before incorporation." },
      { n: 319, id: "which-forms-does-the-us-owner-file-every-year", q: "Which forms does the US owner file every year?", a: "Form 5471 for the foreign corporation, and where relevant Forms 926, 8992, 8993, 1118 or 1116 and 8858." },
      { n: 320, id: "why-does-the-indian-year-end-matter", q: "Why does the Indian year end matter?", a: "The Indian year ends on 31 March and many US owners use a calendar year, so the Indian data has to be re-cut for the US return." },
    ],
  },
]

const allFaqs = faqGroups.flatMap((group) => group.items)

export default function UsaToIndiaFaqPage() {
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
        description="216 plain answers for US companies: incorporation, FEMA, tax, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary."
        datePublished="2026-10-07"
        dateModified="2026-10-14"
        isPartOfUrl={PARENT_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/usa-to-india" },
          { label: "216 FAQs" },
        ]}
      />

      <GuideHero
        eyebrow="FAQ for US companies"
        title="216 Questions About Setting Up and Running a Subsidiary in India"
        updated="14 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <p className="mb-8">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the USA
          </Link>
        </p>

        <GuideAnswerBox title="How to use this page">
          These are the questions US companies ask, in the order they usually arise: from deciding on India,
          through incorporation, funding, hiring, tax and compliance, to repatriating funds, growing, selling,
          and closing the subsidiary. Each answer is short; the{" "}
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">complete guide</Link>{" "}
          explains the process in depth.
        </GuideAnswerBox>

        <p className="text-gray-600 leading-relaxed mb-8">
          Indian tax law changed on 1 April 2026: the Income-tax Act, 2025 and Income-tax Rules, 2026 replace
          the 1961 Act. Where a form or section has a new name, we give the new name with the earlier one in
          brackets. General information only; confirm current requirements before acting.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
          Looking for the tax treaty or social security for US expats? See the dedicated{" "}
          <Link href="/usa-to-india/tax-and-social-security-treaties/faq" className="text-blue-800 font-semibold hover:underline">treaty and social security FAQs</Link>{" "}
          and the{" "}
          <Link href="/usa-to-india/tax-and-social-security-treaties" className="text-blue-800 font-semibold hover:underline">complete treaty guide</Link>.
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

        <GuideServiceBox path="/usa-to-india/faq" />
        <GuideCTA
          title="Have a question that is not here?"
          description="Tell us about your plan and we will answer it on a call."
        />

        <p className="mb-10">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the USA
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 14 October 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
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
