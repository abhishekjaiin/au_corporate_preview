import Link from "next/link"
import { Check } from "lucide-react"
import { Breadcrumb } from "@/components/Breadcrumb"
import { LeadForm } from "@/components/LeadForm"
import { FaqAccordion } from "@/components/FaqAccordion"
import { AuthorLink } from "@/components/AuthorLink"

const heroFacts = [
  {
    "title": "No Turnover Threshold",
    "body": "Registration from the first Indian sale"
  },
  {
    "title": "18% IGST on B2C Sales",
    "body": "Paid in Indian rupees"
  },
  {
    "title": "GSTR-5A Every Month",
    "body": "Due by the 20th, nil months included"
  },
  {
    "title": "Payment Facilitation",
    "body": "Pay GST through AU Corporate's Indian bank account"
  }
]

const faqs = [
  {
    "q": "What is OIDAR under GST in India?",
    "a": "OIDAR means Online Information and Database Access or Retrieval services. Under the IGST Act, it covers services whose delivery is mediated by information technology over the internet or an electronic network. AI tools, SaaS subscriptions, cloud services, apps, digital content and online advertising are typical examples, and a foreign supplier of OIDAR to Indian consumers must register and pay GST."
  },
  {
    "q": "What is the full form of OIDAR?",
    "a": "OIDAR stands for Online Information and Database Access or Retrieval. The term is defined in Section 2(17) of the Integrated Goods and Services Tax (IGST) Act, 2017, and it is used for digital services supplied over the internet, such as software, cloud storage, streaming, e-books, online games and AI tools."
  },
  {
    "q": "Which services are treated as OIDAR services?",
    "a": "Services treated as OIDAR include SaaS and AI subscriptions, cloud computing and storage, software and app downloads, online games, e-books, music and video streaming, online courses delivered through platforms, digital advertising, website hosting and database access. AU Corporate reviews your product to confirm whether it falls within OIDAR."
  },
  {
    "q": "Is an AI chatbot or AI tool subscription an OIDAR service?",
    "a": "An AI chatbot, AI writing tool or AI image generator that Indian users access online for a subscription is generally an OIDAR service, because the service is delivered through the internet. A foreign company selling it to Indian consumers must register under the OIDAR scheme and pay 18 percent IGST. AU Corporate checks your exact product and billing."
  },
  {
    "q": "Is SaaS an OIDAR service under GST?",
    "a": "SaaS delivered over the internet to users in India is generally an OIDAR service. When the buyer is an unregistered person in India, the foreign SaaS company must register for GST and pay IGST at 18 percent. When the buyer is a GST-registered business, the business pays the tax under reverse charge."
  },
  {
    "q": "Are mobile apps, games and in-app purchases OIDAR services?",
    "a": "Mobile apps, downloadable software, online games and in-app purchases supplied over the internet to Indian users are generally OIDAR services. If an app store sells to the user on your behalf, the GST position depends on who is the seller. AU Corporate checks your distribution model before advising."
  },
  {
    "q": "Are online courses, webinars and e-books OIDAR services?",
    "a": "Online courses, e-books, recorded content and similar digital content supplied over the internet to Indian consumers are generally OIDAR services. Live teaching may need a closer review, because the test is how the service is delivered. AU Corporate reviews each product and applies the right treatment."
  },
  {
    "q": "Is online advertising an OIDAR service?",
    "a": "Online advertising sold by a foreign company, such as advertising space or ad services delivered through the internet, is treated as an OIDAR service in the GST framework. Whether GST is payable by the foreign supplier or by the Indian business depends on whether the Indian customer is registered. AU Corporate analyses each case."
  },
  {
    "q": "Is cloud storage or web hosting an OIDAR service?",
    "a": "Cloud storage, cloud computing, web hosting and online database access supplied over the internet are standard examples of OIDAR services. A foreign provider that sells them to unregistered Indian users must register under the OIDAR scheme and pay 18 percent IGST on those sales."
  },
  {
    "q": "Is an API or token-based credit sold to Indian users an OIDAR service?",
    "a": "API access, usage-based credits or tokens sold to Indian users and delivered through the internet are generally OIDAR services. GST applies on the value charged, and the foreign supplier pays it if the buyer is unregistered. AU Corporate maps your pricing plans and billing events to the GST position."
  },
  {
    "q": "Is custom software development or consulting an OIDAR service?",
    "a": "Custom software development and bespoke consulting involve human effort and are often outside OIDAR, although the 2023 amendment widened the definition. The answer depends on how the service is delivered. AU Corporate reviews the contract and the delivery model before concluding whether OIDAR or another GST treatment applies."
  },
  {
    "q": "Did the OIDAR definition change in October 2023?",
    "a": "Yes. With effect from 1 October 2023, India widened the OIDAR definition so that it covers services whose delivery is mediated by information technology over the internet, and it treated any unregistered person in India as a non-taxable online recipient. The change brought many B2C and small business sales by foreign digital companies into the net."
  },
  {
    "q": "How can I register for OIDAR GST online?",
    "a": "A foreign company applies on the GST portal using Form GST REG-10, with its company details, a description of its services and the signatory's details. Many foreign companies hire an Indian professional to file it. AU Corporate prepares and files the application online, answers the officer's queries and delivers the GSTIN."
  },
  {
    "q": "Where can I get OIDAR GST registration services in India?",
    "a": "AU Corporate, a pan-India firm of Chartered Accountants, Company Secretaries and lawyers, provides OIDAR GST registration, monthly GSTR-5A filing and GST payment facilitation for foreign AI, SaaS and digital companies. You can book a call or request a quote on this page, and we start with a review of your Indian revenue."
  },
  {
    "q": "How do I choose an OIDAR GST consultant?",
    "a": "Choose a consultant who is qualified to represent you before the GST department, who has handled OIDAR registrations and monthly GSTR-5A filings, who explains how the tax is paid in rupees, who gives a written quote and who can handle a DGGI or GST notice. AU Corporate is Chartered Accountant-led and meets each of these."
  },
  {
    "q": "What is the government fee for OIDAR GST registration?",
    "a": "The government charges no fee to register for GST in India, including under the OIDAR scheme. The costs are the professional fees for preparing the application and filing the monthly returns, and the GST itself. AU Corporate quotes its fees in writing before work begins."
  },
  {
    "q": "How much does a monthly GSTR-5A filing service cost?",
    "a": "AU Corporate charges reasonable monthly fees for GSTR-5A filing and payment facilitation, quoted in US dollars before work begins. The fee depends on the volume of Indian sales, the number of products and whether past months need to be filed. The GST amount is paid separately and is not part of the fee."
  },
  {
    "q": "Do you offer a package for registration and monthly filing together?",
    "a": "Yes. AU Corporate offers OIDAR GST registration with monthly GSTR-5A filing and GST payment facilitation as one engagement, so the registration, the monthly calendar and the payments are handled by the same team. Ask for a quote on this page, and we will confirm what is included."
  },
  {
    "q": "How quickly can AU Corporate start my OIDAR registration?",
    "a": "AU Corporate can start as soon as it has your company documents and a description of your product, usually within a few working days of your approval. After a short exposure review, we file the registration. The time to receive the GSTIN depends on the tax officer."
  },
  {
    "q": "Can I get a quote for OIDAR GST registration and GSTR-5A filing?",
    "a": "Yes. Fill in the form on this page or book a call with your company details, what you sell and your approximate Indian revenue, and AU Corporate will reply with a clear written quote. The quote covers registration, monthly filing and payment facilitation, and any catch-up returns."
  },
  {
    "q": "Can we register for OIDAR GST ourselves instead of hiring a consultant?",
    "a": "A foreign company can apply on the GST portal itself, but it must then manage the form, officer queries, rupee payments, state-wise data and monthly returns. Mistakes lead to late fees and interest. AU Corporate takes over these tasks, and you keep your own GSTIN and ledger."
  },
  {
    "q": "Is OIDAR GST registration done online or offline?",
    "a": "OIDAR GST registration is done online on the GST portal, with no visit to a tax office. The application is verified electronically, and any officer query is answered online. AU Corporate handles it end to end and sends you the registration certificate."
  },
  {
    "q": "Can a US company register for OIDAR GST in India?",
    "a": "Yes. A company in the USA that sells AI, SaaS, app or digital services to unregistered users in India must register for OIDAR GST, with no threshold. AU Corporate works in US time zones and in US dollars, and the registration and returns follow the same Indian rules."
  },
  {
    "q": "Can a UK company register for OIDAR GST in India?",
    "a": "Yes. A company in the UK that sells online services to unregistered users in India must register for OIDAR GST. The rules are the same for every foreign supplier. AU Corporate prepares the application from your UK company documents and handles the monthly returns and payments."
  },
  {
    "q": "Can a European or EU company register for OIDAR GST in India?",
    "a": "Yes. A company in Germany, France, Spain or any other EU country that sells online services to unregistered Indian users must register for OIDAR GST. This is separate from EU VAT. AU Corporate handles the Indian side and coordinates with your EU advisers."
  },
  {
    "q": "Can a Singapore company register for OIDAR GST in India?",
    "a": "Yes. A company in Singapore that sells digital services to unregistered Indian customers must register under the OIDAR scheme. Registration for Singapore GST is separate. AU Corporate files the Indian registration and the monthly GSTR-5A and arranges payment in Indian rupees."
  },
  {
    "q": "Can an Australian company register for OIDAR GST in India?",
    "a": "Yes. An Australian company that supplies online services to unregistered users in India must register for OIDAR GST, even though it pays Australian GST on its Australian sales. AU Corporate handles the Indian registration, returns and payments in your time zone."
  },
  {
    "q": "Can a UAE company register for OIDAR GST in India?",
    "a": "Yes. A company in the UAE that supplies online services to unregistered customers in India must register for OIDAR GST. UAE VAT is separate. AU Corporate prepares the application from your UAE documents and files the monthly returns and payments."
  },
  {
    "q": "Can a startup or solo founder register for OIDAR GST?",
    "a": "Yes. The OIDAR rules apply to any person located outside India, including a startup, a sole proprietor or an independent developer, from the first sale to an unregistered Indian customer. AU Corporate offers a simple engagement for small suppliers, and quotes it in writing."
  },
  {
    "q": "Does GST apply to AI startups selling subscriptions in India?",
    "a": "Yes. An AI startup outside India that sells subscriptions, credits or API access to unregistered customers in India must register under OIDAR and pay 18 percent IGST. Selling only to GST-registered businesses changes the position to reverse charge. AU Corporate reviews your customer mix."
  },
  {
    "q": "What is the GST on a monthly AI chatbot subscription sold in India?",
    "a": "The GST on a monthly AI chatbot or AI tool subscription sold to an unregistered customer in India is 18 percent IGST, charged by the foreign supplier on top of the price or included in it. A GST-registered business pays the 18 percent under reverse charge. AU Corporate sets up the billing."
  },
  {
    "q": "Does an online education or edtech platform abroad need OIDAR GST registration?",
    "a": "A foreign edtech platform that sells recorded courses, subscriptions or digital content to unregistered Indian users is generally supplying OIDAR services and must register. Live teaching may need a closer review. AU Corporate reviews each product and registers the platform if it is in scope."
  },
  {
    "q": "Does an online advertising platform need OIDAR GST registration?",
    "a": "A foreign platform that sells advertising services online to Indian customers is treated as supplying OIDAR services. If the Indian advertiser is GST-registered, it pays under reverse charge, and if not, the platform pays. AU Corporate reviews your customer base before advising."
  },
  {
    "q": "Does a freelancer or sole proprietor outside India need GST for digital products sold to Indians?",
    "a": "Yes. OIDAR applies to any person located outside India that supplies online services to unregistered persons in India, regardless of the legal form or size. A freelancer who sells digital products or subscriptions to Indian buyers must register. AU Corporate offers an engagement for small suppliers."
  },
  {
    "q": "What is the difference between OIDAR registration (REG-10) and NRTP registration (REG-09)?",
    "a": "REG-10 is the simplified registration for foreign suppliers of online services to unregistered persons in India. REG-09 is for a non-resident taxable person who occasionally supplies goods or services in India, with a temporary registration and a security deposit. AU Corporate tells you which one applies."
  },
  {
    "q": "Can we use our home country tax ID to register for OIDAR GST?",
    "a": "A foreign OIDAR supplier does not need an Indian PAN, and the registration can generally be made with the company's details and its foreign tax identification number. AU Corporate checks what the form and the officer currently require for your country."
  },
  {
    "q": "If we are an Indian company buying foreign SaaS, do we pay GST on it?",
    "a": "An Indian business with a GSTIN that buys SaaS or other OIDAR services from a foreign supplier pays 18 percent IGST under reverse charge, and may claim input tax credit if the service is used for business. AU Corporate helps Indian businesses with reverse charge, and this page is mainly for foreign suppliers."
  },
  {
    "q": "Who must register for OIDAR GST in India?",
    "a": "A person located outside India who supplies OIDAR services to an unregistered person in India must register for GST, under Section 24 of the CGST Act and Section 14 of the IGST Act. It applies to AI, SaaS, app, cloud, content and advertising companies that sell to Indian customers who have no GST registration."
  },
  {
    "q": "Is there a turnover threshold for OIDAR registration?",
    "a": "No. A foreign OIDAR supplier does not get the turnover threshold of INR 20 lakh that applies to many Indian businesses. Registration is required from the first sale to an unregistered Indian customer. AU Corporate recommends registering as soon as you start selling to Indian consumers."
  },
  {
    "q": "Does a foreign company with no office in India need to register?",
    "a": "Yes. OIDAR rules tax the supply, so having no office, staff or entity in India does not place a foreign company outside GST. A foreign supplier registers through a simplified scheme and pays tax in India on sales to unregistered Indian customers."
  },
  {
    "q": "What is a non-taxable online recipient (NTOR)?",
    "a": "A non-taxable online recipient is any unregistered person in India who receives OIDAR services. After the October 2023 amendment, the term covers individuals, unregistered businesses and other unregistered recipients. When your customer is an NTOR, the foreign supplier is liable to pay IGST."
  },
  {
    "q": "Are unregistered Indian businesses treated as B2C customers?",
    "a": "Yes. After the October 2023 amendment, an Indian business without a GST registration is treated like a consumer for OIDAR purposes, so the foreign supplier must charge and pay GST on the sale. If the business has a GSTIN, the sale is B2B and the reverse charge applies."
  },
  {
    "q": "What if all my customers in India are businesses with a GSTIN?",
    "a": "If every Indian customer is a GST-registered business, the Indian customer pays the tax under reverse charge and you may not need to pay IGST yourself. You must be able to prove each customer's GST registration, and a single unregistered customer brings you back into the OIDAR scheme."
  },
  {
    "q": "What if I have only a few customers in India?",
    "a": "The number of customers does not matter. Registration is required from the first sale to an unregistered Indian customer, because there is no threshold. If your Indian sales are very small, AU Corporate can explain the cost of compliance against the risk of non-compliance."
  },
  {
    "q": "Do free users or free trials trigger GST in India?",
    "a": "A free plan with no consideration is generally not a taxable supply, but a paid upgrade, a trial that converts to a paid plan, or any sale of credits or subscriptions to an Indian user is taxable. AU Corporate reviews your plans, trials and conversions to identify the taxable events."
  },
  {
    "q": "Does GST apply when Indian users pay in US dollars?",
    "a": "Yes. GST applies on the value of the supply and not on the currency in which the customer pays. If a customer in India pays in US dollars, the value is converted to Indian rupees using the applicable exchange rate, and 18 percent IGST is calculated on it."
  },
  {
    "q": "How is a customer's location in India decided?",
    "a": "The place of supply of OIDAR is the location of the recipient. Indicators include the billing address, IP address, the country of the payment card or bank account, the SIM country code and other commercially relevant information. AU Corporate helps you set a consistent rule in your checkout and billing system."
  },
  {
    "q": "What if an Indian customer uses a VPN?",
    "a": "A VPN can hide an IP address, so a supplier should not rely on a single data point. Billing address, the payment card or bank country and other records help confirm the customer's location. AU Corporate helps you keep a rule that is consistent and that you can explain to the tax department."
  },
  {
    "q": "Does the OIDAR regime apply if I sell only through an app store?",
    "a": "If the app store acts as the seller to the end customer, the store may handle the tax for those sales, but you should confirm this in writing. Sales you make directly, such as through your website, are still your obligation. AU Corporate reviews each channel to find your exposure."
  },
  {
    "q": "Does OIDAR apply to a company that has an Indian subsidiary?",
    "a": "If the supplier is an Indian company, the supply is domestic and normal GST rules apply, with CGST and SGST or IGST and the regular returns. OIDAR registration is for suppliers located outside India. AU Corporate reviews structures where a foreign parent and an Indian subsidiary both sell to Indian users."
  },
  {
    "q": "Do I need to register if I sell through a reseller or distributor in India?",
    "a": "If an Indian reseller buys from you and sells to the end users, your sale is to the reseller, not to the consumer, and the position depends on whether the reseller is a registered business. If you sell directly to end users in India, OIDAR applies. AU Corporate reviews your contracts."
  },
  {
    "q": "How does a foreign company register for OIDAR GST?",
    "a": "A foreign company registers through the simplified registration scheme for OIDAR suppliers, by filing Form GST REG-10 on the GST portal with its legal details, a description of its services and the details of its authorised signatory. AU Corporate prepares and files the application and answers any query from the tax officer."
  },
  {
    "q": "What is Form GST REG-10?",
    "a": "Form GST REG-10 is the application for registration of a person supplying OIDAR services from outside India to non-taxable online recipients. It is filed on the GST portal under the simplified scheme for non-resident online service providers. AU Corporate fills it from your company documents and submits it."
  },
  {
    "q": "What documents are needed for OIDAR registration?",
    "a": "The documents usually include the company's name and address, incorporation details, a description of the services, the website address, an email and phone number, details of the authorised signatory, and bank details. AU Corporate sends a checklist and tells you if a document needs notarisation."
  },
  {
    "q": "Is an Indian PAN required to register under OIDAR?",
    "a": "A PAN is not compulsory for the overseas entity under the simplified OIDAR registration, and the form asks for it only if the entity has one. The authorised representative's details are usually required. AU Corporate checks what is needed for your structure."
  },
  {
    "q": "Do I need an Indian representative or authorised signatory?",
    "a": "If the foreign supplier has no physical presence or representative in India, Section 14 of the IGST Act requires it to appoint a person in India to pay the tax. AU Corporate can act in this role under an agreed engagement, and we explain the responsibilities before you appoint anyone."
  },
  {
    "q": "How long does OIDAR registration take?",
    "a": "Registration is often completed within a few working days after the application is complete, but the tax officer may raise queries that add time. AU Corporate prepares the application carefully and answers queries quickly, but no timeline can be guaranteed."
  },
  {
    "q": "What does an OIDAR GSTIN look like?",
    "a": "The GSTIN issued to a foreign OIDAR supplier under the simplified scheme starts with 99 and is a 15-character number. You show it on your GST invoices or receipts and use it to file GSTR-5A and pay tax. AU Corporate shares the registration certificate with you once it is issued."
  },
  {
    "q": "Do I need a physical office in India to register for OIDAR GST?",
    "a": "No. The OIDAR scheme is designed for suppliers with no presence in India, and an office is not required. You need an authorised representative, a way to pay tax in rupees and the details of your services. AU Corporate manages the Indian side."
  },
  {
    "q": "Can AU Corporate register us for OIDAR GST?",
    "a": "AU Corporate prepares and files Form GST REG-10 for foreign AI, SaaS and digital companies, answers queries from the tax officer, and delivers the GSTIN. We can then file the monthly GSTR-5A and pay the GST on your behalf, so that all compliance is handled in one place."
  },
  {
    "q": "Do I need a separate GST registration in every Indian state?",
    "a": "No. A foreign OIDAR supplier takes a single registration under the simplified scheme and not a separate registration in each state. The GSTR-5A return shows the sales by state where the customer is located. AU Corporate prepares the state-wise details from your billing data."
  },
  {
    "q": "How much does OIDAR GST registration cost?",
    "a": "AU Corporate charges reasonable fees for OIDAR registration and monthly filing, and confirms a clear written quote before work begins. The fee depends on the number of products, the volume of Indian sales and whether past months must be regularised. Government registration itself carries no fee."
  },
  {
    "q": "What happens after OIDAR registration is granted?",
    "a": "After registration you charge IGST to unregistered Indian customers, pay the tax in rupees, and file GSTR-5A every month by the 20th, even if you made no sales. AU Corporate sets up a calendar, collects your sales data and files each return on time."
  },
  {
    "q": "Can I register after I have already earned revenue from India?",
    "a": "Yes. Registration can be taken at any time, but the tax on past sales to unregistered Indian customers remains payable with interest, and penalties may apply. AU Corporate reviews your past Indian revenue, calculates the exposure and files the registration and the past returns in the right order."
  },
  {
    "q": "What is GSTR-5A?",
    "a": "GSTR-5A is the monthly GST return that foreign OIDAR suppliers file in India under Rule 64 of the CGST Rules. It reports the supplies made to unregistered persons in India, the IGST payable and the tax paid. It is the main return obligation of a registered foreign OIDAR supplier."
  },
  {
    "q": "Who must file GSTR-5A?",
    "a": "Every foreign supplier registered under the OIDAR scheme must file GSTR-5A each month, including months with no sales. A foreign company that supplies only to GST-registered Indian businesses, which pay under reverse charge, may have no GSTR-5A liability on those sales."
  },
  {
    "q": "What is the due date for GSTR-5A?",
    "a": "GSTR-5A is due by the 20th of the month following the month of supply. For example, the return for April is due by 20 May. AU Corporate tracks the dates and files each return a few days before the due date."
  },
  {
    "q": "Is a nil GSTR-5A required if there were no Indian sales?",
    "a": "Yes. A registered OIDAR supplier must file a nil GSTR-5A for every month in which it made no taxable supplies in India. A missed nil return attracts a late fee. AU Corporate files nil returns on schedule."
  },
  {
    "q": "What information goes into GSTR-5A?",
    "a": "GSTR-5A reports the taxable value of OIDAR supplies to unregistered customers in India, state by state according to the customer's location, along with the rate and the IGST payable. The tax must be paid before the return is filed. AU Corporate builds this from your billing export."
  },
  {
    "q": "What is the late fee for filing GSTR-5A late?",
    "a": "Published guidance states a late fee of INR 200 per day for a normal GSTR-5A, and INR 100 per day for a nil return, up to a maximum per return, in addition to interest on unpaid tax. AU Corporate confirms the current notified amount when it advises on late returns."
  },
  {
    "q": "Can GSTR-5A be filed before the tax is paid?",
    "a": "No. GSTR-5A can be filed only after the tax and dues for the period are paid in full. The payment must therefore be made through the challan on the GST portal first. AU Corporate arranges the payment before filing so the return is not delayed."
  },
  {
    "q": "Can an OIDAR supplier claim input tax credit in GSTR-5A?",
    "a": "No. A foreign OIDAR supplier cannot claim input tax credit in GSTR-5A, so the IGST it collects and pays is a cost to be built into its pricing, and GST paid on its own purchases cannot be set off. AU Corporate explains the pricing effect."
  },
  {
    "q": "Is an annual GST return required for OIDAR suppliers?",
    "a": "GSTR-5A is the main return of a foreign OIDAR supplier, and it is not currently required to file the annual return that regular taxpayers file. AU Corporate confirms the current position whenever the law changes and informs you of any new filing."
  },
  {
    "q": "Can GSTR-5A be revised after filing?",
    "a": "GSTR-5A cannot generally be revised after it is filed, so mistakes are corrected in a later period. It is therefore important to check the data before filing. AU Corporate reconciles your billing data and payments before submitting each return."
  },
  {
    "q": "Is there a time limit for filing old GSTR-5A returns?",
    "a": "The GST portal restricts the filing of returns after three years from the due date, with effect from 2025 periods, so very old returns may not be accepted. AU Corporate checks the position before filing past returns and plans the order of filing."
  },
  {
    "q": "What exchange rate is used in GSTR-5A?",
    "a": "The value of supplies made in foreign currency is converted to Indian rupees using the exchange rate prescribed by the GST rules, which is based on the reference rate of the RBI on the relevant date. AU Corporate applies the rate consistently and keeps a working for each month."
  },
  {
    "q": "How does AU Corporate file GSTR-5A for a foreign company?",
    "a": "AU Corporate collects your monthly Indian sales data, computes the IGST by state, arranges payment of the tax, files GSTR-5A on the GST portal and sends you the return, the challan and a summary. We do this every month and track the due date."
  },
  {
    "q": "Can several past months of GSTR-5A be filed together?",
    "a": "Past months have to be filed one by one, in order, with the tax and late fee for each month paid first, although AU Corporate can file them in a single exercise. The order and the three-year limit are checked first. AU Corporate plans the catch-up so the portal accepts each return."
  },
  {
    "q": "How does a foreign company pay GST in India?",
    "a": "GST is paid in Indian rupees by generating a challan on the GST portal against the supplier's GSTIN, and paying it through the modes offered by the portal. AU Corporate generates the challan, pays it and files the return, so a foreign company does not have to deal with the portal."
  },
  {
    "q": "Is an Indian bank account required to pay GST?",
    "a": "The usual payment modes on the GST portal, such as net banking, cards and NEFT or RTGS, need an Indian bank account, and many foreign companies do not have one. Other channels for non-residents may exist, but they can be slow. AU Corporate's payment facilitation removes this problem."
  },
  {
    "q": "In which currency is GST paid in India?",
    "a": "GST must be deposited in Indian rupees. A foreign company that collects in dollars, euros or another currency must convert the tax amount into rupees using the applicable rate and make sure it reaches the Indian government on time. AU Corporate handles the conversion and the deposit."
  },
  {
    "q": "Can AU Corporate accept the GST amount in its bank account and pay it for us?",
    "a": "Yes. AU Corporate facilitates the payment: you remit the GST amount for the month to AU Corporate's designated bank account, and AU Corporate deposits it against your GSTIN through the challan and files your return. AU Corporate uses the amount only for your GST and gives you a statement."
  },
  {
    "q": "Is it safe to pay GST through AU Corporate's bank account?",
    "a": "AU Corporate applies the amount only to pay your GST liability, generates the challan against your own GSTIN and gives you the challan receipt and a statement, so you can verify each payment on the GST portal. Please read the engagement terms before sending funds, and use the bank details given in writing."
  },
  {
    "q": "Which GSTIN is the GST challan generated against?",
    "a": "The challan is generated against the foreign supplier's own GSTIN, even when someone else pays it. Paying from another person's bank account does not make that person the supplier, and the credit appears in your electronic cash ledger. AU Corporate shows you the ledger entry."
  },
  {
    "q": "How long does it take to pay GST after we remit the funds?",
    "a": "Once the money reaches AU Corporate's account, AU Corporate pays the challan and files the return before the due date, as long as the funds arrive a few working days in advance. We tell you the date by which to remit each month."
  },
  {
    "q": "What proof of GST payment do we get?",
    "a": "You receive the GST challan with its payment confirmation, the filed GSTR-5A with its acknowledgement and a monthly summary from AU Corporate. These match the entries in your electronic cash ledger on the GST portal. Keep them for your records and for your auditors."
  },
  {
    "q": "Can the money collected from Indian customers abroad be used to pay the GST?",
    "a": "Yes. The GST you collect from Indian customers, or the amount you set aside from their payments, can be used to fund the GST payment, provided it reaches the Indian government in rupees on time. AU Corporate explains how to remit it for payment."
  },
  {
    "q": "What is the due date for paying OIDAR GST?",
    "a": "The IGST for a month must be paid by the due date of GSTR-5A, which is the 20th of the next month, and the return can be filed only after the payment. AU Corporate asks you to remit the amount early enough to pay a few days before."
  },
  {
    "q": "What if we overpay GST on a month?",
    "a": "An excess payment stays in the electronic cash ledger of the supplier and can be used for a later month, and a refund can be sought in the cases the law allows. AU Corporate adjusts the excess against the next month's tax or advises on a refund claim."
  },
  {
    "q": "Is interest payable if GST is paid late?",
    "a": "Yes. Interest at 18 percent per annum applies to tax that is not paid by the due date, calculated from the day after the due date until the day of payment. AU Corporate calculates the interest for past periods before you pay."
  },
  {
    "q": "What is the GST rate on OIDAR services?",
    "a": "The rate of GST on OIDAR services supplied by a foreign company to unregistered Indian customers is 18 percent, charged as Integrated GST (IGST). The rate applies on the full value of the supply. AU Corporate confirms the rate for your product and tracks changes."
  },
  {
    "q": "Is GST charged on top of the price or included in it?",
    "a": "The price of a supply is exclusive of GST unless it is stated to be inclusive. A foreign supplier may add 18 percent to the price shown to Indian customers or keep the price and absorb the tax. AU Corporate helps you choose and set the price display."
  },
  {
    "q": "How is GST calculated on a subscription charged to an Indian customer?",
    "a": "If you charge INR 1,000 excluding GST, the IGST is INR 180 and the customer pays INR 1,180. If INR 1,000 is the final price including GST, the taxable value is INR 847.46 and the IGST is INR 152.54. AU Corporate sets up the calculation in your billing system."
  },
  {
    "q": "Is IGST or CGST and SGST charged on OIDAR services from abroad?",
    "a": "A foreign supplier charges Integrated GST (IGST), and it does not charge CGST or SGST separately, because the supply is made from outside India. The return shows the tax by the state of the customer. AU Corporate prepares the state-wise data."
  },
  {
    "q": "Does GST apply to refunds and chargebacks?",
    "a": "When a customer is refunded, the tax on that sale can be reduced through a credit note or an adjustment in the return, subject to the GST rules. AU Corporate reviews refunds and chargebacks each month and adjusts the tax payable, with the supporting documents."
  },
  {
    "q": "Is GST charged on enterprise contracts with Indian companies?",
    "a": "If the Indian company has a GST registration, it pays the GST under reverse charge and you do not charge it. If it has no registration, you charge IGST as for any other unregistered customer. AU Corporate sets up a check for every enterprise contract."
  },
  {
    "q": "What should we do if a customer gives us a GSTIN?",
    "a": "Verify the GSTIN on the GST portal, check that it is active and belongs to the customer, and keep the record. If it is valid, the sale is B2B and the customer pays under reverse charge. AU Corporate designs the GSTIN check for your checkout."
  },
  {
    "q": "Is there any exemption or lower rate for AI services?",
    "a": "India has not announced a separate GST exemption for AI services as a category, and OIDAR services are generally taxed at 18 percent. Certain educational or other services may be treated differently. AU Corporate reviews your product against the current notifications."
  },
  {
    "q": "Must we show GST on the invoice or receipt to Indian customers?",
    "a": "A foreign supplier should give Indian customers a receipt or invoice that shows the GST charged, and the GSTIN. The exact format and fields should follow the GST rules. AU Corporate drafts a compliant template for your platform."
  },
  {
    "q": "Can we pass the GST on to Indian customers?",
    "a": "Yes. A supplier may add GST to its price and collect it from the customer, and many foreign suppliers do so. If the price shown is already final, the tax comes out of your margin. AU Corporate models both options for you."
  },
  {
    "q": "What is reverse charge on OIDAR B2B services?",
    "a": "Under reverse charge, when a foreign supplier sells OIDAR services to a GST-registered business in India, the Indian business and not the foreign supplier pays the 18 percent IGST. The Indian business can usually claim input tax credit on it. The foreign supplier needs only proof of the GSTIN."
  },
  {
    "q": "Who is liable for GST when the customer is GST-registered?",
    "a": "The Indian customer is liable under reverse charge, because it is registered. The foreign supplier is liable only for supplies to unregistered persons. AU Corporate recommends keeping a record of each customer's GSTIN and a clear invoice."
  },
  {
    "q": "How do I verify a customer's GSTIN?",
    "a": "You can verify a GSTIN on the GST portal's taxpayer search tool by entering the number, which shows the legal name, status and state. AU Corporate can build this check into your checkout through the GST verification interfaces available to you."
  },
  {
    "q": "What if a business customer has no GSTIN?",
    "a": "A business without a GSTIN is treated like any other unregistered person, so you charge IGST and pay it yourself as an OIDAR supplier. The business may later ask for an invoice with its details, but it cannot claim credit unless it is registered."
  },
  {
    "q": "Can the Indian customer claim input tax credit on our invoice?",
    "a": "A GST-registered Indian business that pays IGST under reverse charge can generally claim input tax credit, if the service is used for business. An unregistered customer cannot. AU Corporate explains this to enterprise customers who ask for tax invoices."
  },
  {
    "q": "Are B2B sales reported in GSTR-5A?",
    "a": "No. GSTR-5A reports supplies to unregistered persons. Sales to GST-registered Indian businesses are taxed under reverse charge in the hands of the customer, so they are not part of the foreign supplier's GSTR-5A tax. AU Corporate separates B2B and B2C sales in the monthly data."
  },
  {
    "q": "What is a Merchant of Record (MoR)?",
    "a": "A Merchant of Record is a company that legally sells your product to the customer, collects the payment, handles taxes and invoicing, and then pays you. Platforms such as software resellers and subscription billing providers act as MoR. The GST outcome depends on who is treated as the supplier."
  },
  {
    "q": "If I use an MoR, do I still need Indian GST registration?",
    "a": "If the MoR is the legal seller to Indian customers and itself registers for GST and pays the tax, your own sale is to the MoR, and you may not need an OIDAR registration. You must confirm in writing that the MoR does this for India. AU Corporate reviews the MoR agreement."
  },
  {
    "q": "How is a payment gateway different from an MoR?",
    "a": "A payment gateway such as Stripe or Razorpay only processes the payment for you, and you remain the seller, so the GST liability stays with you. An MoR becomes the seller of record. AU Corporate explains the difference before you decide how to sell."
  },
  {
    "q": "Do Stripe, PayPal or Razorpay collect or pay India GST for me?",
    "a": "A payment gateway does not become responsible for your GST because it processes your payments. Some tools help calculate the tax, but registration, payment and filing remain your own duty unless a seller of record takes it over. AU Corporate checks your setup."
  },
  {
    "q": "What should I ask my MoR about India GST?",
    "a": "Ask whether the MoR is registered under India's OIDAR scheme, whether it charges and pays GST on sales to Indian customers, whether it covers business customers, and which party issues the invoice. Get the answers in writing. AU Corporate reviews them and tells you if a gap remains."
  },
  {
    "q": "Who is liable for GST when an app store sells my app?",
    "a": "When an app store is the legal seller to the user and handles the tax, the store may be liable for the GST on those sales, while your sales to the store are a separate matter. Direct sales remain your responsibility. AU Corporate reviews the app store terms."
  },
  {
    "q": "What if my MoR is already registered for OIDAR in India?",
    "a": "If your MoR is registered, pays GST on the sales it makes to Indian consumers and is the seller, your exposure may be small for those sales. You still need to check sales you make outside the MoR. AU Corporate reconciles your sales channels against the MoR's reports."
  },
  {
    "q": "Can Indian payment gateways stop payments to unregistered foreign companies?",
    "a": "Media reports in 2025 said that DGGI asked Indian payment gateways to stop processing payments for foreign companies that are not registered for GST. If your gateway receives such an instruction, your Indian collections can be interrupted. AU Corporate recommends registration before this happens."
  },
  {
    "q": "Is payment aggregator (PA-CB) compliance the same as GST compliance?",
    "a": "No. Payment aggregator cross-border (PA-CB) rules govern how a provider collects money from Indian customers for foreign merchants, while GST governs the tax on your revenue. Being compliant with one does not satisfy the other. AU Corporate handles the GST side."
  },
  {
    "q": "Does selling through a marketplace or reseller change my OIDAR position?",
    "a": "If a marketplace or reseller buys from you and resells, you sell to a business, and if it sells on your behalf, you may be the supplier. The contract and the flow of money decide the position. AU Corporate reviews your marketplace and reseller contracts."
  },
  {
    "q": "What is DGGI and what is its full form?",
    "a": "DGGI stands for the Directorate General of GST Intelligence. It is the intelligence and investigation arm of the Central Board of Indirect Taxes and Customs (CBIC) that detects and investigates GST evasion across India. It is headquartered in New Delhi and works through zonal units."
  },
  {
    "q": "What did DGCEI and DGAE stand for?",
    "a": "DGCEI stood for the Directorate General of Central Excise Intelligence, and DGAE stood for the Directorate General of Anti-Evasion. DGAE was founded in 1979 and later became DGCEI, which was renamed the Directorate General of GST Intelligence (DGGI) after GST began in 2017."
  },
  {
    "q": "Where is DGGI headquartered?",
    "a": "The headquarters of the Directorate General of GST Intelligence is in New Delhi. It oversees zonal units across the country, including Delhi, Mumbai, Chennai, Bengaluru, Kolkata, Ahmedabad and Hyderabad. The page lists the zonal units published by the department."
  },
  {
    "q": "Where are DGGI's zonal units located?",
    "a": "DGGI zonal units are located in cities including Ahmedabad, Bengaluru, Belagavi, Bhopal, Bhubaneswar, Chandigarh, Chennai, Coimbatore, Delhi, Gurugram, Guwahati, Hyderabad, Jaipur, Kochi, Kolkata, Lucknow, Ludhiana, Meerut, Mumbai, Nagpur, Patna, Pune, Raipur, Siliguri, Surat and Visakhapatnam. Units can be reorganised, so check dggi.gov.in."
  },
  {
    "q": "Is DGGI investigating AI and SaaS companies that earn Indian revenue without registering?",
    "a": "Media reports in 2025 said that DGGI was scrutinising foreign digital platforms, including AI tools, cloud software, edtech and content platforms, that serve Indian users without GST registration. The reports also said that notices were sent and many companies registered afterwards. AU Corporate advises registering before a notice."
  },
  {
    "q": "How does DGGI find unregistered foreign digital companies?",
    "a": "Reports say DGGI works with Indian payment gateways and with Indian businesses that deal with the platforms, and it has recommended information sharing with foreign governments. Foreign companies should assume that Indian revenue can be traced through payment flows."
  },
  {
    "q": "What happens if a foreign company receives a DGGI notice?",
    "a": "A DGGI notice typically asks for information about the company's Indian customers, revenue and registration, and may later propose a demand for tax, interest and penalty. The company should reply within the time given, with proper records. AU Corporate prepares replies and handles registration and past returns."
  },
  {
    "q": "Can I register voluntarily before DGGI sends a notice?",
    "a": "Yes, and it is the best course. Voluntary registration, payment of the past tax with interest and filing of the returns before any notice can reduce penalties, and it removes the risk of a payment gateway being stopped. AU Corporate reviews your Indian revenue first, and then registers you."
  },
  {
    "q": "Is there an amnesty for past unregistered sales in India?",
    "a": "India has not announced a general amnesty for foreign OIDAR suppliers. Paying the tax and interest voluntarily, before a notice is issued, can reduce or avoid penalties under the GST law's provisions. AU Corporate explains the options and the likely cost before you decide."
  },
  {
    "q": "Can DGGI block my website or payments in India?",
    "a": "The reports said DGGI asked for legal powers to block the websites of non-compliant foreign providers, and that the existing law did not give it that power, while it has put pressure on Indian payment gateways. The position can change. AU Corporate recommends registration to avoid disruption."
  },
  {
    "q": "Can the directors of a foreign company be prosecuted in India for GST non-compliance?",
    "a": "GST law has provisions for prosecution in serious cases, such as large evasion or fraud, and it can reach officers of a company. For an ordinary compliance lapse, tax, interest and penalty are the usual outcomes. AU Corporate recommends legal advice if a notice alleges fraud."
  },
  {
    "q": "How far back can a GST demand go for a foreign supplier?",
    "a": "The law sets time limits for issuing a demand notice, measured from the due date of the relevant return, and they differ under Sections 73, 74 and 74A. A foreign supplier with long-running Indian sales can therefore face several years of tax. AU Corporate calculates the exposure for each year."
  },
  {
    "q": "What penalties apply if a foreign company does not register under OIDAR?",
    "a": "Non-registration can lead to a demand for the unpaid IGST with interest at 18 percent, and a penalty of at least INR 10,000 or the amount of tax involved, whichever is higher, and higher penalties if fraud or suppression is alleged. AU Corporate estimates your exposure."
  },
  {
    "q": "What is interest on unpaid GST in India?",
    "a": "Interest on unpaid GST is 18 percent per annum, calculated from the due date to the date of payment. For a foreign supplier with several years of unpaid IGST on Indian sales, interest can be a large part of the total. AU Corporate calculates it for each period."
  },
  {
    "q": "What is the penalty under Section 122 of the CGST Act?",
    "a": "Section 122 lists offences, such as failing to register or collecting tax and not paying it, and provides a penalty of INR 10,000 or the amount of tax involved, whichever is higher, for many of them. AU Corporate reviews which provisions could apply to your case."
  },
  {
    "q": "What is the difference between Sections 73, 74 and 74A?",
    "a": "Sections 73 and 74 deal with demands for unpaid tax for the years up to 2023-24, without fraud and with fraud, wilful misstatement or suppression. Section 74A applies to demands from 2024-25 onwards. Penalties are lower where there is no fraud. AU Corporate advises on the section that applies."
  },
  {
    "q": "Can the GST registration of an OIDAR supplier be cancelled for non-filing?",
    "a": "Yes. Persistent non-filing of GSTR-5A can lead to cancellation of the registration by the tax officer, and the dues remain payable. A cancelled supplier that continues to sell to Indian customers must register again. AU Corporate files nil and regular returns on time."
  },
  {
    "q": "Can unpaid GST be recovered from a foreign company's Indian customers or bank accounts?",
    "a": "The GST law allows recovery of dues from persons who owe money to the defaulter, from bank accounts and from other assets in India. Indian payment channels and customers can therefore be affected. AU Corporate recommends settling dues before recovery steps start."
  },
  {
    "q": "Is prosecution possible for non-payment of GST by a foreign supplier?",
    "a": "Prosecution is possible in serious cases, such as large evasion or fraud, but ordinary failure to register or to file usually leads to tax, interest and penalty. The law sets monetary thresholds for prosecution. AU Corporate recommends a legal review if the case is serious."
  },
  {
    "q": "Do we have to pay income tax in India on revenue from Indian customers?",
    "a": "GST is separate from income tax. Whether a foreign company has income tax liability in India on its digital revenue depends on India's tax law and any tax treaty with its country. AU Corporate's tax team reviews this separately from the GST registration."
  },
  {
    "q": "Is equalisation levy still applicable to digital sales to India?",
    "a": "The 2 percent equalisation levy on e-commerce supply was withdrawn from 1 August 2024, and the 6 percent levy on online advertising was withdrawn from 1 April 2025, according to the Finance Acts. AU Corporate confirms the current position for your business."
  },
  {
    "q": "Do I need to register for VAT or sales tax in other countries?",
    "a": "Many countries tax digital services supplied to their consumers, including the EU, the UK, Australia, Singapore and others. Each has its own registration rules. AU Corporate coordinates with local advisers."
  },
  {
    "q": "What if we stop selling to India?",
    "a": "If you stop selling to Indian consumers, you can apply to cancel the OIDAR registration after filing all pending returns and paying the dues. Until it is cancelled, you must keep filing GSTR-5A, including nil returns. AU Corporate handles the cancellation."
  },
  {
    "q": "How do we cancel an OIDAR GST registration?",
    "a": "A registered supplier applies for cancellation on the GST portal, after filing all pending GSTR-5A returns and paying all tax and dues. The tax officer then reviews the application. AU Corporate files the application and the final return and tracks the order."
  },
  {
    "q": "What records must an OIDAR supplier keep?",
    "a": "A supplier should keep its sales data by customer location, the evidence of each customer's location, GSTIN checks, invoices and receipts, the challans, the returns and the exchange rate workings, for the period the law requires, which is several years. AU Corporate keeps a file for each month."
  },
  {
    "q": "How should we price our product for India after GST?",
    "a": "Many foreign suppliers show Indian customers the price including GST, and some keep the price in dollars and add the tax at checkout. The choice affects your margin and conversion. AU Corporate models the margin impact of each option before you decide."
  },
  {
    "q": "Do we need to change our checkout to collect GST?",
    "a": "Your checkout should detect the customer's location in India, ask whether the customer has a GSTIN, add the GST for unregistered customers and show the tax on the receipt. AU Corporate gives your developers a specification, and you decide how to build it."
  },
  {
    "q": "What data do we need from our billing system for GSTR-5A?",
    "a": "You need the sales by month, the customer's location by state, the amount before tax, the currency, the date, the GST charged and any refunds or credit notes, with the customer's GSTIN for B2B sales. AU Corporate gives you a template to export the data."
  },
  {
    "q": "What happens to existing Indian customers when we register?",
    "a": "Existing customers continue as before, and from the date of registration you charge IGST to unregistered customers and keep GSTIN checks for business customers. For past sales, AU Corporate advises whether tax is due and how to deal with it, which may include paying it yourself."
  },
  {
    "q": "What does AU Corporate do for foreign AI and SaaS companies under OIDAR?",
    "a": "AU Corporate reviews your Indian revenue and product, registers you under OIDAR, files GSTR-5A every month, pays the GST through its payment facilitation, handles tax officer queries, and advises on MoR and checkout. We also help with notices from DGGI and the GST department."
  },
  {
    "q": "Why choose a Chartered Accountant-led firm for OIDAR compliance?",
    "a": "GST registration and returns carry penalties, and a notice from DGGI needs a careful reply. A Chartered Accountant-led firm can calculate the tax, handle the tax officer and represent you if a dispute arises. AU Corporate has served foreign parents since 2016."
  },
  {
    "q": "How does AU Corporate charge for OIDAR GST services?",
    "a": "AU Corporate charges reasonable fees, in US dollars, for registration, monthly GSTR-5A filing and payment facilitation, and confirms a clear written quote before work begins. The fee depends on the volume of Indian sales and the number of past months to regularise. GST itself is paid separately."
  },
  {
    "q": "How do we get started with OIDAR registration through AU Corporate?",
    "a": "Send AU Corporate your company details, a description of your product and an export of your Indian sales. AU Corporate then reviews your exposure, sends a quote and a checklist, files the registration and sets up the monthly calendar. You can start by booking a call."
  },
  {
    "q": "What documents should we send AU Corporate first?",
    "a": "Send your certificate of incorporation, the details of your authorised signatory, a description of your services with pricing, your Indian sales by month, details of your payment providers or MoR and any notice received. AU Corporate adds anything else it needs."
  },
  {
    "q": "Can AU Corporate check our exposure for past Indian sales?",
    "a": "Yes. AU Corporate reviews your Indian sales for past periods, calculates the IGST, interest and likely penalty, and tells you the cost of registering and regularising. You decide how to proceed, and AU Corporate can also reply to a notice."
  },
  {
    "q": "Can AU Corporate also set up an Indian subsidiary for our company?",
    "a": "Yes. If you plan to hire staff or sell in India through an entity, AU Corporate can incorporate an Indian subsidiary and run its accounting, tax, payroll and compliance. The subsidiary then follows regular GST rules, and AU Corporate can plan the move from the OIDAR scheme."
  },
  {
    "q": "Does AU Corporate serve foreign AI and SaaS companies from my country?",
    "a": "AU Corporate serves parent companies from more than 10 countries, including the USA, UK, Singapore, Australia, Germany, Japan, China, Hong Kong, Spain, France and the UAE. The OIDAR rules are the same for every foreign supplier, and we work in your time zone and currency."
  },
  {
    "q": "Who reviews the OIDAR work at AU Corporate?",
    "a": "Every OIDAR engagement is handled by a named manager and reviewed by Chartered Accountants before registrations, returns and payments are made. Abhishek Jaiin, Chartered Accountant, reviews the content of this page. Returns are filed only after you approve the figures."
  },
  {
    "q": "What is the difference between OIDAR registration and regular GST registration?",
    "a": "OIDAR registration is a simplified registration for foreign suppliers of online services, with no turnover threshold, one return (GSTR-5A) and no input tax credit. Regular registration is for suppliers in India, with a threshold, several returns and input tax credit. AU Corporate advises which one applies."
  },
  {
    "q": "What is the difference between GSTR-5 and GSTR-5A?",
    "a": "GSTR-5 is the return of a non-resident taxable person who makes taxable supplies in India temporarily, while GSTR-5A is the return of a foreign OIDAR supplier. GSTR-5A is filed monthly by the 20th, and the OIDAR supplier files it even with no sales. AU Corporate files the right one."
  },
  {
    "q": "Can a foreign company claim a refund of GST paid by mistake?",
    "a": "A refund of GST paid by mistake is possible within the time and conditions set by the GST law, for example by claiming the balance in the electronic cash ledger. AU Corporate reviews the amount, the reason and the time limit before applying."
  },
  {
    "q": "What is the Place of Supply rule for OIDAR in India?",
    "a": "Under Section 13(12) of the IGST Act, the place of supply of OIDAR services is the location of the recipient. If the recipient is in India, the supply is taxable in India. AU Corporate sets the rule you use to decide the customer's location."
  },
  {
    "q": "How often is GST on OIDAR paid?",
    "a": "GST on OIDAR is paid every month, by the 20th of the following month, together with the filing of GSTR-5A. Even a month with no sales needs a nil return. AU Corporate arranges the monthly payment cycle and reminds you of the amount."
  },
  {
    "q": "Can AU Corporate act as our authorised representative in India for OIDAR?",
    "a": "AU Corporate can act as the person in India that Section 14 of the IGST Act requires, under an agreed engagement, and explains the responsibilities before you appoint it. The foreign company remains the supplier, and the GST is paid against its own GSTIN."
  },
  {
    "q": "Is OIDAR GST registration public information?",
    "a": "The GSTIN, the legal name and the registration status of a registered supplier can be searched on the GST portal, which is how business customers verify a supplier. AU Corporate recommends that you show your GSTIN on invoices and on your website."
  },
  {
    "q": "Does registering for GST in India create a permanent establishment?",
    "a": "An OIDAR registration is a tax registration and does not by itself create a permanent establishment for income tax purposes. The income tax position depends on the facts and any treaty. AU Corporate's tax team reviews this separately."
  },
  {
    "q": "What are the other sources of Indian rules on OIDAR?",
    "a": "The main rules are in the IGST Act, 2017 (Sections 2(17), 13(12) and 14), the CGST Act, 2017 (Sections 24 and 39), and the CGST Rules, 2017 (Rules 14 and 64), with notifications and circulars from the CBIC and the GST Council. AU Corporate follows each update."
  }
]
const faqsLeft = faqs.slice(0, Math.ceil(faqs.length / 2))
const faqsRight = faqs.slice(Math.ceil(faqs.length / 2))

const serviceSchema = {
  "@type": "Service",
  "@id": "https://www.theaucorp.com/oidar-gst-registration-india#service",
  "name": "OIDAR GST Registration and GSTR-5A Filing Service",
  "serviceType": "OIDAR GST registration, GSTR-5A filing and GST payment facilitation for foreign AI, SaaS and digital companies",
  "description": "GST registration under the OIDAR scheme, monthly GSTR-5A filing, payment of IGST in Indian rupees through AU Corporate, and support with DGGI and GST notices for foreign digital companies selling to Indian customers.",
  "provider": {
    "@id": "https://www.theaucorp.com/#organization"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "India"
    },
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "United Kingdom"
    },
    {
      "@type": "Country",
      "name": "Singapore"
    },
    {
      "@type": "Country",
      "name": "Australia"
    },
    {
      "@type": "Country",
      "name": "Germany"
    },
    {
      "@type": "Country",
      "name": "Japan"
    },
    {
      "@type": "Country",
      "name": "Hong Kong"
    },
    {
      "@type": "Country",
      "name": "Spain"
    },
    {
      "@type": "Country",
      "name": "France"
    },
    {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  ],
  "audience": {
    "@type": "BusinessAudience",
    "name": "Foreign AI, SaaS and digital companies selling to customers in India"
  },
  "url": "https://www.theaucorp.com/oidar-gst-registration-india",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "OIDAR GST Registration and GSTR-5A Filing Service",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exposure Review of Past Indian Revenue"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "OIDAR GST Registration (Form GST REG-10)"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Monthly GSTR-5A Filing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "GST Payment Facilitation in Indian Rupees"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Authorised Representative in India"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Replies to DGGI and GST Notices"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Merchant of Record and Checkout Review"
        }
      }
    ]
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.theaucorp.com/oidar-gst-registration-india#contact",
    "description": "Reasonable fees, quoted in writing before work begins. Government registration fee: nil.",
    "priceCurrency": "USD"
  },
  "@context": "https://schema.org"
}

export default function OidarGstRegistrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "OIDAR GST Registration and GSTR-5A Filing" }]} />

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
            <div className="flex-[1.4] min-w-0">
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">For AI and SaaS Companies</span>
              <h1 className="mb-5 mt-3 text-4xl font-bold md:text-5xl leading-tight">
                OIDAR GST Registration and GSTR-5A Filing Service for AI and SaaS Companies Selling in India
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-white/85 max-w-2xl">
                If your AI tool, SaaS product, app or digital service is sold to consumers in India, Indian GST applies to you, wherever your company is based. AU Corporate registers you, files your monthly GSTR-5A and pays the GST in Indian rupees on your behalf.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://cal.com/abhishek-jaiin-ybbklq/30min" className="inline-block px-5 py-3 rounded-lg font-bold text-sm bg-gold text-[#081a42] hover:bg-gold-dark transition">Book Consultation with an Expert</a>
                <a href="#contact" className="inline-block px-5 py-3 rounded-lg font-bold text-sm border-2 border-white text-white hover:bg-white/10 transition">Get a Quote</a>
              </div>
            </div>
            <aside className="flex-1 min-w-[280px] rounded-2xl border border-white/20 bg-white/5 p-6 md:p-7" aria-label="OIDAR summary">
              <ul className="space-y-5">
                {heroFacts.map((f) => (
                  <li key={f.title} className="flex gap-3">
                    <span className="mt-0.5 flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-gold">
                      <Check size={13} strokeWidth={3} className="text-[#081a42]" />
                    </span>
                    <div>
                      <strong className="block text-white font-bold">{f.title}</strong>
                      <span className="block text-sm text-white/70">{f.body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-8 rounded-r-xl border-l-4 border-gold bg-[#fffbe6] p-6 md:p-7"><h2 className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-2xl">The Short Answer</h2><p className="mb-4 leading-relaxed text-gray-700">A company outside India that sells online services to unregistered persons in India, such as AI tools, SaaS, apps, cloud services, digital content or advertising, supplies OIDAR (Online Information and Database Access or Retrieval) services. It must register for GST under Form GST REG-10 with no turnover threshold, charge 18 percent IGST, pay it in Indian rupees and file GSTR-5A by the 20th of every month. AU Corporate, a pan-India firm of Chartered Accountants, Company Secretaries and lawyers serving foreign companies since 2016, does all of this at reasonable fees.</p></div>
          <div className="mb-12 rounded-r-xl border-l-4 border-red-600 bg-red-50 p-6 md:p-7"><h2 className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-2xl">DGGI Is Scrutinising Foreign Digital Companies That Earn Indian Revenue Without Registering</h2><p className="mb-4 leading-relaxed text-gray-700">The Directorate General of GST Intelligence (DGGI) has been reported to be scrutinising foreign platforms, including AI tools and cloud software, that serve Indian users without GST registration. Voluntary registration before a notice arrives is the safer route. See the section on DGGI below. Information on this page is as at 20 October 2026.</p></div>
          <h2 id="key-takeaways" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">Key Takeaways</h2>
          <ul className="mb-6 space-y-3"><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">A company outside India that sells AI, SaaS, apps or digital content to unregistered users in India must register for GST as an OIDAR supplier.</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">There is no turnover threshold. Registration is needed from the first sale.</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">The rate is 18 percent IGST on B2C sales. GST-registered Indian businesses pay under reverse charge.</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">The monthly return is GSTR-5A, due by the 20th, including nil months. There is no input tax credit.</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">GST is paid in Indian rupees, and the usual payment modes need an Indian bank account. AU Corporate facilitates the payment.</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">DGGI has been reported to be scrutinising unregistered foreign digital companies. Late registration can mean tax, 18 percent interest and penalties.</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">A Merchant of Record removes your GST duty only if it is the legal seller and is registered for GST in India.</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">AU Corporate registers you, files every GSTR-5A and pays the GST for you, at reasonable fees.</span></li></ul>
          <div className="mt-6 flex flex-wrap gap-3"><a href="https://cal.com/abhishek-jaiin-ybbklq/30min" className="inline-block rounded-lg bg-gold px-5 py-3 text-sm font-bold text-[#081a42] transition hover:bg-gold-dark">Book Consultation with an Expert</a><a href="#contact" className="inline-block rounded-lg border-2 border-[#081a42] px-5 py-3 text-sm font-bold text-[#081a42] transition hover:bg-[#081a42]/5">Get a Quote</a></div>
          <h2 id="on-this-page" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">On This Page</h2>
          <ul className="mb-10 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-4"><li><a href="#what-is-oidar" className="text-gold-dark font-semibold hover:underline">What Is OIDAR?</a></li><li><a href="#services" className="text-gold-dark font-semibold hover:underline">Which Services Are OIDAR?</a></li><li><a href="#who-needs" className="text-gold-dark font-semibold hover:underline">Who Needs to Register</a></li><li><a href="#gst-on-ai" className="text-gold-dark font-semibold hover:underline">GST on AI Services</a></li><li><a href="#applicability" className="text-gold-dark font-semibold hover:underline">Applicability and Threshold</a></li><li><a href="#rates" className="text-gold-dark font-semibold hover:underline">GST Rates</a></li><li><a href="#registration" className="text-gold-dark font-semibold hover:underline">Registration Service</a></li><li><a href="#gstr-5a" className="text-gold-dark font-semibold hover:underline">GSTR-5A Filing</a></li><li><a href="#payment" className="text-gold-dark font-semibold hover:underline">Payment Mechanism</a></li><li><a href="#mor" className="text-gold-dark font-semibold hover:underline">MoR and Payment Gateways</a></li><li><a href="#dggi" className="text-gold-dark font-semibold hover:underline">DGGI and Locations</a></li><li><a href="#penalties" className="text-gold-dark font-semibold hover:underline">Penalties</a></li><li><a href="#cost" className="text-gold-dark font-semibold hover:underline">Cost and Fees</a></li><li><a href="#compare" className="text-gold-dark font-semibold hover:underline">Compare Your Options</a></li><li><a href="#countries" className="text-gold-dark font-semibold hover:underline">By Country</a></li><li><a href="#faq" className="text-gold-dark font-semibold hover:underline">FAQs</a></li></ul>
          <h2 id="key-facts" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">Key Facts at a Glance</h2>
          <div className="mb-8 overflow-x-auto"><table className="w-full border-collapse text-sm"><caption className="mb-2 caption-top text-left text-sm font-semibold text-gray-800">OIDAR GST at a Glance</caption><thead><tr><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Item</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Position</th></tr></thead><tbody><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Governing law</td><td className="border border-gray-300 p-3 align-top text-gray-700">IGST Act, 2017 (Sections 2(17), 13(12), 14); CGST Act, 2017 (Sections 24, 39); CGST Rules, 2017 (Rules 14, 64)</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Who must register</td><td className="border border-gray-300 p-3 align-top text-gray-700">A person outside India supplying OIDAR to unregistered persons in India</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Turnover threshold</td><td className="border border-gray-300 p-3 align-top text-gray-700">None. Registration is required from the first sale</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Registration form</td><td className="border border-gray-300 p-3 align-top text-gray-700">Form GST REG-10 (simplified registration for OIDAR)</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">GST rate</td><td className="border border-gray-300 p-3 align-top text-gray-700">18% IGST on B2C sales</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Return</td><td className="border border-gray-300 p-3 align-top text-gray-700">GSTR-5A, monthly, due by the 20th of the next month, nil returns included</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Input tax credit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Not available to the foreign supplier</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Payment</td><td className="border border-gray-300 p-3 align-top text-gray-700">In Indian rupees through a challan on the GST portal, before the return is filed</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Interest on late payment</td><td className="border border-gray-300 p-3 align-top text-gray-700">18% per annum</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Late fee (published guidance)</td><td className="border border-gray-300 p-3 align-top text-gray-700">INR 200 per day for a normal return and INR 100 per day for a nil return, up to a cap</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Penalty (Section 122)</td><td className="border border-gray-300 p-3 align-top text-gray-700">INR 10,000 or the tax involved, whichever is higher, for many offences</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Reported registrations</td><td className="border border-gray-300 p-3 align-top text-gray-700">About 574 foreign companies had registered by 2025, as reported in the press</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Reported collections</td><td className="border border-gray-300 p-3 align-top text-gray-700">GST from overseas digital services rose from about INR 80 crore (2017-18) to about INR 2,675 crore (2023-24), as reported</td></tr></tbody></table></div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="what-is-oidar" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">What Is OIDAR and Why Does It Apply to AI and SaaS Companies?</h2><p className="mb-4 leading-relaxed text-gray-700">OIDAR stands for Online Information and Database Access or Retrieval. Under Section 2(17) of the IGST Act, 2017, it covers services whose delivery is mediated by information technology over the internet or an electronic network. Since 1 October 2023, the definition is wider and any unregistered person in India is a non-taxable online recipient.</p><p className="mb-4 leading-relaxed text-gray-700">In practice, an AI assistant, an image generator, a SaaS dashboard, a cloud tool, an app or an e-learning product sold to a user in India is an OIDAR service. The place of supply is the location of the recipient, so Indian GST applies even if the seller has no office, staff or bank account in India.</p>
          <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">You Are Likely in Scope If</h3><ul className="mb-6 space-y-3"><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">You sell subscriptions, credits or apps to users in India</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">Indian customers pay by card, UPI or any other method</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">Your customers include individuals or businesses without a GSTIN</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">You have never registered for GST in India</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">You earn Indian revenue through your own website or checkout</span></li></ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="services" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">Which Services Are OIDAR Services?</h2>
          <p className="mb-6 text-gray-600">A guide for AI, SaaS and digital companies. AU Corporate confirms the treatment of your exact product.</p>
          <div className="mb-8 overflow-x-auto"><table className="w-full border-collapse text-sm"><caption className="mb-2 caption-top text-left text-sm font-semibold text-gray-800">Examples of OIDAR Services for AI and SaaS Companies</caption><thead><tr><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Product or Service</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Treated as OIDAR?</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Why</th></tr></thead><tbody><tr><td className="border border-gray-300 p-3 align-top text-gray-700">AI chatbot or assistant subscription</td><td className="border border-gray-300 p-3 align-top text-gray-700">Yes</td><td className="border border-gray-300 p-3 align-top text-gray-700">Delivered over the internet to the user</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">SaaS subscription (web or app)</td><td className="border border-gray-300 p-3 align-top text-gray-700">Yes</td><td className="border border-gray-300 p-3 align-top text-gray-700">Software accessed online</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">API access and usage credits</td><td className="border border-gray-300 p-3 align-top text-gray-700">Yes</td><td className="border border-gray-300 p-3 align-top text-gray-700">Delivered electronically on demand</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Cloud storage, hosting and databases</td><td className="border border-gray-300 p-3 align-top text-gray-700">Yes</td><td className="border border-gray-300 p-3 align-top text-gray-700">Online data storage and database access</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Mobile apps, games and in-app purchases</td><td className="border border-gray-300 p-3 align-top text-gray-700">Yes</td><td className="border border-gray-300 p-3 align-top text-gray-700">Digital content delivered through the internet</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">E-books, music, video and recorded courses</td><td className="border border-gray-300 p-3 align-top text-gray-700">Yes</td><td className="border border-gray-300 p-3 align-top text-gray-700">Digital content</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Online advertising</td><td className="border border-gray-300 p-3 align-top text-gray-700">Yes</td><td className="border border-gray-300 p-3 align-top text-gray-700">Treated as an OIDAR service</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Bespoke consulting or custom development</td><td className="border border-gray-300 p-3 align-top text-gray-700">Case by case</td><td className="border border-gray-300 p-3 align-top text-gray-700">Human effort is involved, so the delivery model is reviewed</td></tr></tbody></table></div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="who-needs" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">Who Needs OIDAR GST Registration?</h2>
          <p className="mb-6 text-gray-600">If you sell online to Indian users who have no GST registration, you are likely in scope.</p>
          <ol className="mb-8 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3"><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">AI</span><h3 className="mb-2 text-lg font-bold text-gray-900">AI Startups and Chatbot Companies</h3><p className="text-sm leading-relaxed text-gray-600">Subscriptions, credits and API access sold to Indian users.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">SaaS</span><h3 className="mb-2 text-lg font-bold text-gray-900">SaaS and Software Companies</h3><p className="text-sm leading-relaxed text-gray-600">Web and app subscriptions, including self-serve plans.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Apps</span><h3 className="mb-2 text-lg font-bold text-gray-900">Mobile App and Game Developers</h3><p className="text-sm leading-relaxed text-gray-600">Downloads, in-app purchases and subscriptions sold directly.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Edtech</span><h3 className="mb-2 text-lg font-bold text-gray-900">Online Education Platforms</h3><p className="text-sm leading-relaxed text-gray-600">Recorded courses, subscriptions and digital content.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Advertising</span><h3 className="mb-2 text-lg font-bold text-gray-900">Advertising and Ad-Tech Platforms</h3><p className="text-sm leading-relaxed text-gray-600">Online advertising services sold to Indian advertisers.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Cloud</span><h3 className="mb-2 text-lg font-bold text-gray-900">Cloud and Hosting Providers</h3><p className="text-sm leading-relaxed text-gray-600">Cloud computing, storage and database access.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Content</span><h3 className="mb-2 text-lg font-bold text-gray-900">Content and Streaming Platforms</h3><p className="text-sm leading-relaxed text-gray-600">Music, video, e-books and other digital content.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Individuals</span><h3 className="mb-2 text-lg font-bold text-gray-900">Freelancers and Solo Founders</h3><p className="text-sm leading-relaxed text-gray-600">Digital products and subscriptions sold by an individual.</p></li></ol>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="gst-on-ai" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">GST on AI Services in India</h2>
          <p className="mb-6 text-gray-600">How the rules apply to common AI business models.</p>
          <ol className="mb-8 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3"><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Subscriptions</span><h3 className="mb-2 text-lg font-bold text-gray-900">AI Plans Sold to Indian Users</h3><p className="text-sm leading-relaxed text-gray-600">A monthly or annual AI plan sold to an unregistered user in India attracts 18 percent IGST, paid by the foreign supplier.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Usage</span><h3 className="mb-2 text-lg font-bold text-gray-900">API Access and Credits</h3><p className="text-sm leading-relaxed text-gray-600">Usage-based credits and tokens are taxed on the value charged to the Indian customer.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Free</span><h3 className="mb-2 text-lg font-bold text-gray-900">Free Tiers and Trials</h3><p className="text-sm leading-relaxed text-gray-600">A free plan with no payment is generally not a taxable supply, but the paid upgrade is.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Business</span><h3 className="mb-2 text-lg font-bold text-gray-900">Customers with a GSTIN</h3><p className="text-sm leading-relaxed text-gray-600">A GST-registered business pays the 18 percent under reverse charge, and you keep proof of its GSTIN.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Channels</span><h3 className="mb-2 text-lg font-bold text-gray-900">Resellers, App Stores and MoR</h3><p className="text-sm leading-relaxed text-gray-600">The legal seller decides who owes the GST, so check each channel in writing.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Pricing</span><h3 className="mb-2 text-lg font-bold text-gray-900">Tax Is a Cost to Plan For</h3><p className="text-sm leading-relaxed text-gray-600">A foreign supplier cannot claim input tax credit, so the 18 percent must be built into the price or absorbed.</p></li></ol>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="applicability" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">Applicability and Threshold</h2>
          <p className="mb-6 text-gray-600">There is no safe minimum for a foreign OIDAR supplier.</p>
          <ol className="mb-8 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3"><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Who</span><h3 className="mb-2 text-lg font-bold text-gray-900">Foreign Suppliers of Online Services</h3><p className="text-sm leading-relaxed text-gray-600">Any person located outside India who supplies OIDAR services to an unregistered person in India must register under Section 24 of the CGST Act and Section 14 of the IGST Act.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Threshold</span><h3 className="mb-2 text-lg font-bold text-gray-900">No Turnover Threshold</h3><p className="text-sm leading-relaxed text-gray-600">The threshold of INR 20 lakh (INR 10 lakh in special category states) that applies to many Indian businesses does not apply. One sale to an unregistered Indian customer is enough.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Customer</span><h3 className="mb-2 text-lg font-bold text-gray-900">Non-Taxable Online Recipient</h3><p className="text-sm leading-relaxed text-gray-600">Any unregistered person in India who receives OIDAR services. Since October 2023 this includes unregistered businesses and not only individuals.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Location</span><h3 className="mb-2 text-lg font-bold text-gray-900">Place of Supply Is the Customer&apos;s Location</h3><p className="text-sm leading-relaxed text-gray-600">The place of supply of OIDAR is the location of the recipient, judged from indicators such as billing address, IP address, payment card or bank country and SIM country code.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">B2B</span><h3 className="mb-2 text-lg font-bold text-gray-900">Registered Businesses Pay Under Reverse Charge</h3><p className="text-sm leading-relaxed text-gray-600">If the Indian customer has a GSTIN, it pays the 18 percent IGST under reverse charge, and you need proof of the GSTIN.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Presence</span><h3 className="mb-2 text-lg font-bold text-gray-900">No Office in India Needed</h3><p className="text-sm leading-relaxed text-gray-600">The scheme is built for suppliers with no presence in India. You appoint a person in India to pay the tax, and AU Corporate can act in that role.</p></li></ol>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="rates" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">GST Rates: Who Pays and How Much</h2>
          <p className="mb-6 text-gray-600">The rate on OIDAR services is 18 percent. What changes is who pays it.</p>
          <div className="mb-8 overflow-x-auto"><table className="w-full border-collapse text-sm"><caption className="mb-2 caption-top text-left text-sm font-semibold text-gray-800">GST on OIDAR: Who Pays and at What Rate</caption><thead><tr><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Scenario</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Who Pays GST</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Rate</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Return</th></tr></thead><tbody><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Foreign supplier to an unregistered person in India (B2C)</td><td className="border border-gray-300 p-3 align-top text-gray-700">The foreign supplier</td><td className="border border-gray-300 p-3 align-top text-gray-700">18% IGST</td><td className="border border-gray-300 p-3 align-top text-gray-700">GSTR-5A</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Foreign supplier to an unregistered Indian business</td><td className="border border-gray-300 p-3 align-top text-gray-700">The foreign supplier (treated as B2C)</td><td className="border border-gray-300 p-3 align-top text-gray-700">18% IGST</td><td className="border border-gray-300 p-3 align-top text-gray-700">GSTR-5A</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Foreign supplier to a GST-registered Indian business (B2B)</td><td className="border border-gray-300 p-3 align-top text-gray-700">The Indian customer, under reverse charge</td><td className="border border-gray-300 p-3 align-top text-gray-700">18% IGST</td><td className="border border-gray-300 p-3 align-top text-gray-700">Customer&apos;s own returns</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Indian company supplying online services in India</td><td className="border border-gray-300 p-3 align-top text-gray-700">The Indian supplier, as a normal taxpayer</td><td className="border border-gray-300 p-3 align-top text-gray-700">18% (CGST and SGST, or IGST)</td><td className="border border-gray-300 p-3 align-top text-gray-700">GSTR-1 and GSTR-3B</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Foreign supplier selling to customers outside India</td><td className="border border-gray-300 p-3 align-top text-gray-700">No Indian GST</td><td className="border border-gray-300 p-3 align-top text-gray-700">Not applicable</td><td className="border border-gray-300 p-3 align-top text-gray-700">None in India</td></tr></tbody></table></div>
          <p className="mt-4 text-sm text-gray-600">Example: if you charge INR 1,000 excluding GST, the IGST is INR 180 and the customer pays INR 1,180. If INR 1,000 is the final price including GST, the taxable value is INR 847.46 and the IGST is INR 152.54. A foreign OIDAR supplier cannot claim input tax credit, so the tax is a cost that must be built into pricing. Rates can change, and AU Corporate confirms the current rate.</p>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="registration" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">OIDAR GST Registration Service: How It Works</h2>
          <p className="mb-6 text-gray-600">Six steps from the first call to your GSTIN.</p>
          <ol className="mb-8 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3"><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Step 1</span><h3 className="mb-2 text-lg font-bold text-gray-900">Exposure Review</h3><p className="text-sm leading-relaxed text-gray-600">We review your product, your Indian sales and your payment providers.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Step 2</span><h3 className="mb-2 text-lg font-bold text-gray-900">Documents</h3><p className="text-sm leading-relaxed text-gray-600">You send the company documents and signatory details we list for you.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Step 3</span><h3 className="mb-2 text-lg font-bold text-gray-900">Form REG-10</h3><p className="text-sm leading-relaxed text-gray-600">We file the simplified OIDAR registration application on the GST portal.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Step 4</span><h3 className="mb-2 text-lg font-bold text-gray-900">Officer Queries</h3><p className="text-sm leading-relaxed text-gray-600">We answer any query raised by the tax officer.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Step 5</span><h3 className="mb-2 text-lg font-bold text-gray-900">GSTIN</h3><p className="text-sm leading-relaxed text-gray-600">You receive your GSTIN and registration certificate.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Step 6</span><h3 className="mb-2 text-lg font-bold text-gray-900">Monthly Calendar</h3><p className="text-sm leading-relaxed text-gray-600">We set up the monthly GSTR-5A and payment cycle.</p></li></ol>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">What We Need from You</h2>
          <p className="mb-6 text-gray-600">Five items to begin.</p>
          <ol className="mb-8 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-5"><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-[#081a42]">1</span><h3 className="mb-2 text-lg font-bold text-gray-900">Company Documents</h3><p className="text-sm leading-relaxed text-gray-600">Certificate of incorporation and the name and address of the company.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-[#081a42]">2</span><h3 className="mb-2 text-lg font-bold text-gray-900">Signatory Details</h3><p className="text-sm leading-relaxed text-gray-600">Name, identity and contact details of the person who authorises the registration.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-[#081a42]">3</span><h3 className="mb-2 text-lg font-bold text-gray-900">Product and Pricing</h3><p className="text-sm leading-relaxed text-gray-600">A description of your services, plans and prices, and your website address.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-[#081a42]">4</span><h3 className="mb-2 text-lg font-bold text-gray-900">Indian Sales Data</h3><p className="text-sm leading-relaxed text-gray-600">An export of sales to customers in India by month, with the customer&apos;s location and GSTIN where B2B.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-[#081a42]">5</span><h3 className="mb-2 text-lg font-bold text-gray-900">Payment Providers</h3><p className="text-sm leading-relaxed text-gray-600">The gateways, MoR or app stores you use to sell, and any notice you have received.</p></li></ol>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="gstr-5a" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">GSTR-5A Filing Service: The Monthly Return for Foreign OIDAR Suppliers</h2>
          <p className="mb-6 text-gray-600">The one return a registered foreign supplier files, under Rule 64 of the CGST Rules and Section 39(5) of the CGST Act.</p>
          <ol className="mb-8 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3"><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Due Date</span><h3 className="mb-2 text-lg font-bold text-gray-900">By the 20th</h3><p className="text-sm leading-relaxed text-gray-600">GSTR-5A is due by the 20th of the month after the month of supply. The return for April is due by 20 May.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Nil Months</span><h3 className="mb-2 text-lg font-bold text-gray-900">Nil Returns Are Mandatory</h3><p className="text-sm leading-relaxed text-gray-600">A registered supplier must file GSTR-5A even in a month with no Indian sales.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Contents</span><h3 className="mb-2 text-lg font-bold text-gray-900">Supplies by State</h3><p className="text-sm leading-relaxed text-gray-600">The return reports the taxable value of supplies to unregistered customers, state by state, with the rate and the IGST.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Payment</span><h3 className="mb-2 text-lg font-bold text-gray-900">Pay Before You File</h3><p className="text-sm leading-relaxed text-gray-600">The return can be filed only after the tax and dues are paid in full.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Credit</span><h3 className="mb-2 text-lg font-bold text-gray-900">No Input Tax Credit</h3><p className="text-sm leading-relaxed text-gray-600">A foreign OIDAR supplier cannot claim input tax credit in GSTR-5A.</p></li><li className="rounded-xl border border-gray-200 bg-white p-5"><span className="mb-3 inline-block rounded-full bg-[#081a42] px-3 py-1 text-xs font-semibold text-gold">Time Limit</span><h3 className="mb-2 text-lg font-bold text-gray-900">Three-Year Window</h3><p className="text-sm leading-relaxed text-gray-600">The portal restricts filing a return after three years from its due date, so old months must be filed in good time.</p></li></ol>
          <p className="mt-4 text-sm text-gray-600">The late fee published for GSTR-5A is INR 200 per day for a normal return and INR 100 per day for a nil return, up to a cap per return, and interest of 18 percent per annum applies to unpaid tax. AU Corporate confirms the current notified amounts before it advises on late returns.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="payment" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">Payment Mechanism: Paying GST in India</h2>
          <p className="mb-6 text-gray-600">GST is paid in Indian rupees through a challan on the GST portal, and the usual payment modes need an Indian bank account.</p>
          <div className="mb-8 grid gap-10 md:grid-cols-2"><div><h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">The Problem for Foreign Companies</h3><p className="mb-4 leading-relaxed text-gray-700">The GST portal accepts payment by net banking, cards and NEFT or RTGS, and these modes need an Indian bank account or an Indian payer. Most foreign AI and SaaS companies have neither. Opening an Indian bank account takes time and needs an Indian presence, and other channels for non-residents can be slow.</p><p className="mb-4 leading-relaxed text-gray-700">AU Corporate solves this with a payment facilitation service. You remit the GST amount to AU Corporate&apos;s designated Indian bank account, and AU Corporate deposits it against your own GSTIN and files your return.</p></div><div><h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">How the Payment Facilitation Works</h3><ul className="mb-6 space-y-3"><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">We compute the IGST for the month and tell you the amount in your currency</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">You remit it to AU Corporate&apos;s bank account in writing-confirmed details</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">We generate the challan against your GSTIN and pay it in rupees</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">We file GSTR-5A and send you the challan, the return and a statement</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">The amount is used only for your GST, and any excess is adjusted or returned</span></li></ul></div></div>
          <p className="mt-4 text-sm text-gray-600">Paying from another person&apos;s bank account does not make that person the supplier. The challan and the credit stay in your own GSTIN and electronic cash ledger, which you can check on the GST portal. Read the engagement terms and use only the bank details that AU Corporate gives you in writing.</p>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="mor" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">Merchant of Record (MoR), Payment Gateways and App Stores</h2>
          <p className="mb-6 text-gray-600">Who the legal seller is decides who owes the GST. Check this before you assume a platform has covered you.</p>
          <div className="mb-8 overflow-x-auto"><table className="w-full border-collapse text-sm"><caption className="mb-2 caption-top text-left text-sm font-semibold text-gray-800">Selling Models and Who Is Liable for India GST</caption><thead><tr><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Model</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Who Is the Seller to the Customer</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">GST Position</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">What to Confirm</th></tr></thead><tbody><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Direct sales through your website and a payment gateway</td><td className="border border-gray-300 p-3 align-top text-gray-700">You</td><td className="border border-gray-300 p-3 align-top text-gray-700">You must register and pay GST</td><td className="border border-gray-300 p-3 align-top text-gray-700">Your own registration, checkout and returns</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Merchant of Record (MoR)</td><td className="border border-gray-300 p-3 align-top text-gray-700">The MoR</td><td className="border border-gray-300 p-3 align-top text-gray-700">The MoR may handle the tax on its sales</td><td className="border border-gray-300 p-3 align-top text-gray-700">That the MoR is registered in India and pays GST on Indian sales, in writing</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">App store or marketplace</td><td className="border border-gray-300 p-3 align-top text-gray-700">Usually the store</td><td className="border border-gray-300 p-3 align-top text-gray-700">The store may handle the tax on its sales</td><td className="border border-gray-300 p-3 align-top text-gray-700">The seller of record and any direct sales you make</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Indian reseller or distributor</td><td className="border border-gray-300 p-3 align-top text-gray-700">The reseller (it buys from you)</td><td className="border border-gray-300 p-3 align-top text-gray-700">Depends on whether the reseller is registered</td><td className="border border-gray-300 p-3 align-top text-gray-700">Contract terms and the reseller&apos;s GSTIN</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Payment gateway only (Stripe, PayPal, Razorpay)</td><td className="border border-gray-300 p-3 align-top text-gray-700">You</td><td className="border border-gray-300 p-3 align-top text-gray-700">The gateway does not take over your GST duty</td><td className="border border-gray-300 p-3 align-top text-gray-700">Your registration and filing</td></tr></tbody></table></div>
          <p className="mt-4 text-sm text-gray-600">A Merchant of Record legally sells your product, collects the payment, handles tax and invoicing, and pays you. A payment gateway only processes the payment, so your GST duty stays with you. Payment aggregator (PA-CB) rules for collecting rupees are separate from GST. AU Corporate reviews your agreements and tells you where a gap remains.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="dggi" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">DGGI: Directorate General of GST Intelligence</h2>
          <p className="mb-6 text-gray-600">What it is, what has been reported about foreign digital companies, and where it is located.</p>
          <div className="mb-8 grid gap-10 md:grid-cols-2"><div><h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">What DGGI Is</h3><p className="mb-4 leading-relaxed text-gray-700">DGGI stands for the Directorate General of GST Intelligence. It is the intelligence and investigation arm of the Central Board of Indirect Taxes and Customs (CBIC), responsible for detecting and investigating GST evasion across India. It was earlier the Directorate General of Central Excise Intelligence (DGCEI), and before that the Directorate General of Anti-Evasion (DGAE), and it is headquartered in New Delhi.</p><p className="mb-4 leading-relaxed text-gray-700">The Directorate works through zonal units across India, and each unit is headed by an Additional Director General.</p></div><div><h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">What Has Been Reported</h3><ul className="mb-6 space-y-3"><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">DGGI has been reported to be scrutinising foreign platforms in AI, cloud, edtech, content, advertising and crypto that serve Indian users without registration</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">DGGI has been reported to have asked Indian businesses that work with these platforms for transaction details</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">DGGI has been reported to have asked Indian payment gateways to stop processing payments for unregistered foreign companies</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">DGGI&apos;s report on GST evasion for 2023-24 recommended information sharing with foreign governments and the blocking of non-compliant websites</span></li></ul></div></div>
          <p className="mt-4 text-sm text-gray-600">These points come from press reports and DGGI&apos;s published report, and enforcement can change. A foreign company that earns revenue from Indian customers and collects it without registering should assume that the revenue can be traced. If you receive a DGGI notice, reply within the time given and ask AU Corporate to help.</p>
          <h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">DGGI Locations</h3>
          <div className="mb-8 overflow-x-auto"><table className="w-full border-collapse text-sm"><caption className="mb-2 caption-top text-left text-sm font-semibold text-gray-800">DGGI Headquarters, Zonal Units and Regional Units</caption><thead><tr><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Location</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Type</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Region Covered</th></tr></thead><tbody><tr><td className="border border-gray-300 p-3 align-top text-gray-700">New Delhi</td><td className="border border-gray-300 p-3 align-top text-gray-700">Headquarters</td><td className="border border-gray-300 p-3 align-top text-gray-700">All India</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Delhi</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Delhi</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Gurugram</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Haryana</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Meerut</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Uttar Pradesh, Uttarakhand</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Lucknow</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Uttar Pradesh</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Jaipur</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Rajasthan</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Ludhiana</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Punjab</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Chandigarh</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Chandigarh, Jammu and Kashmir, Himachal Pradesh, Ladakh</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Mumbai</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Maharashtra</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Pune</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Maharashtra, Goa</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Nagpur</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Maharashtra</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Ahmedabad</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Gujarat</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Surat</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Gujarat, Dadra and Nagar Haveli and Daman and Diu</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Bhopal</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Madhya Pradesh</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Raipur</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Chhattisgarh</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Bengaluru</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Karnataka</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Belagavi</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Karnataka</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Chennai</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Tamil Nadu</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Coimbatore</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Tamil Nadu</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Hyderabad</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Telangana</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Visakhapatnam</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Andhra Pradesh</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Kochi</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Kerala, Lakshadweep</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Kolkata</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">West Bengal</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Siliguri</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">North Bengal</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Bhubaneswar</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Odisha</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Patna</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Bihar, Jharkhand</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Guwahati</td><td className="border border-gray-300 p-3 align-top text-gray-700">Zonal unit</td><td className="border border-gray-300 p-3 align-top text-gray-700">Assam and the north-east</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Shillong, Dimapur, Agartala, Itanagar, Aizawl, Imphal</td><td className="border border-gray-300 p-3 align-top text-gray-700">Regional units</td><td className="border border-gray-300 p-3 align-top text-gray-700">Meghalaya, Nagaland, Tripura, Arunachal Pradesh, Mizoram, Manipur</td></tr></tbody></table></div>
          <p className="mt-4 text-sm text-gray-600">The list shows the headquarters and the zonal and regional units published by the department and in CBIC listings. Units can be reorganised, so confirm the current list and contact details at dggi.gov.in.</p>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="penalties" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">Penalties and Consequences of Non-Compliance</h2>
          <p className="mb-6 text-gray-600">What can follow if a foreign supplier collects Indian revenue without registering or filing.</p>
          <div className="mb-8 overflow-x-auto"><table className="w-full border-collapse text-sm"><caption className="mb-2 caption-top text-left text-sm font-semibold text-gray-800">What Can Happen If a Foreign Supplier Does Not Register or File</caption><thead><tr><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Consequence</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Detail</th></tr></thead><tbody><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Tax demand</td><td className="border border-gray-300 p-3 align-top text-gray-700">IGST on all past sales to unregistered Indian customers</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Interest</td><td className="border border-gray-300 p-3 align-top text-gray-700">18% per annum from the due date to the date of payment</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Penalty</td><td className="border border-gray-300 p-3 align-top text-gray-700">INR 10,000 or the tax involved, whichever is higher, for many offences, and up to 100% of the tax where fraud or suppression is alleged</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Late fee</td><td className="border border-gray-300 p-3 align-top text-gray-700">For each GSTR-5A filed late, per published guidance</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Recovery</td><td className="border border-gray-300 p-3 align-top text-gray-700">From bank accounts, customers who owe money to the supplier and other assets in India</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Registration cancellation</td><td className="border border-gray-300 p-3 align-top text-gray-700">For persistent non-filing, with the dues still payable</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Payment disruption</td><td className="border border-gray-300 p-3 align-top text-gray-700">Indian payment gateways may be asked to stop payments, as reported in 2025</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Prosecution</td><td className="border border-gray-300 p-3 align-top text-gray-700">In serious cases, such as large evasion or fraud</td></tr></tbody></table></div>
          <p className="mt-4 text-sm text-gray-600">For demands up to 2023-24, Sections 73 and 74 apply, and from 2024-25 Section 74A applies. Penalties are lower where fraud is not alleged, and paying within the time allowed can reduce them. AU Corporate calculates your exposure before you decide how to proceed.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="cost" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">OIDAR GST Registration Cost and Fees</h2>
          <p className="mb-6 text-gray-600">The government charges nothing to register. The costs are professional fees and the GST itself.</p>
          <div className="mb-8 overflow-x-auto"><table className="w-full border-collapse text-sm"><caption className="mb-2 caption-top text-left text-sm font-semibold text-gray-800">Cost components of OIDAR GST registration and monthly compliance</caption><thead><tr><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Cost</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Paid to</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Amount</th></tr></thead><tbody><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Government fee for GST registration</td><td className="border border-gray-300 p-3 align-top text-gray-700">Government of India</td><td className="border border-gray-300 p-3 align-top text-gray-700">Nil</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Professional fees for registration</td><td className="border border-gray-300 p-3 align-top text-gray-700">AU Corporate</td><td className="border border-gray-300 p-3 align-top text-gray-700">Reasonable fees, quoted in writing before work begins</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Monthly GSTR-5A filing and payment facilitation</td><td className="border border-gray-300 p-3 align-top text-gray-700">AU Corporate</td><td className="border border-gray-300 p-3 align-top text-gray-700">Reasonable monthly fees, quoted in writing</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">GST on Indian B2C sales</td><td className="border border-gray-300 p-3 align-top text-gray-700">Government of India</td><td className="border border-gray-300 p-3 align-top text-gray-700">18% IGST on the taxable value</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Remittance and bank charges</td><td className="border border-gray-300 p-3 align-top text-gray-700">Your bank</td><td className="border border-gray-300 p-3 align-top text-gray-700">Varies by bank and currency</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Late fee, interest and penalty</td><td className="border border-gray-300 p-3 align-top text-gray-700">Government of India</td><td className="border border-gray-300 p-3 align-top text-gray-700">Avoidable with timely registration and filing</td></tr></tbody></table></div>
          <div className="mb-8 grid gap-10 md:grid-cols-2"><div><h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">What Drives the Professional Fee</h3><ul className="mb-6 space-y-3"><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">The volume of your Indian sales</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">The number of products, plans and currencies</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">The number of past months to file</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">The number of sales channels, such as MoR and app stores</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">Any notice that needs a reply</span></li></ul></div><div><h3 className="mb-3 mt-6 text-xl font-bold text-gray-900">How to Choose an OIDAR GST Consultant</h3><ul className="mb-6 space-y-3"><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">Qualified to represent you before the GST department</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">Experience with OIDAR registration and GSTR-5A filing</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">A clear way for you to pay GST in rupees</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">A written quote with no hidden charges</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">Ability to handle DGGI and GST notices</span></li><li className="flex gap-3"><span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" /><span className="leading-relaxed text-gray-700">One named contact in your time zone</span></li></ul></div></div>
          <div className="mt-6 flex flex-wrap gap-3"><a href="https://cal.com/abhishek-jaiin-ybbklq/30min" className="inline-block rounded-lg bg-gold px-5 py-3 text-sm font-bold text-[#081a42] transition hover:bg-gold-dark">Book Consultation with an Expert</a><a href="#contact" className="inline-block rounded-lg border-2 border-[#081a42] px-5 py-3 text-sm font-bold text-[#081a42] transition hover:bg-[#081a42]/5">Get a Quote</a></div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="compare" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">Register Yourself, Use an MoR or Hire AU Corporate?</h2>
          <p className="mb-6 text-gray-600">Three ways to meet your India GST duty and what to watch for in each.</p>
          <div className="mb-8 overflow-x-auto"><table className="w-full border-collapse text-sm"><caption className="mb-2 caption-top text-left text-sm font-semibold text-gray-800">Comparison of options for OIDAR GST compliance</caption><thead><tr><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Option</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Who Files</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Who Pays GST in Rupees</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Best For</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Watch Out For</th></tr></thead><tbody><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Register and file yourself</td><td className="border border-gray-300 p-3 align-top text-gray-700">You</td><td className="border border-gray-300 p-3 align-top text-gray-700">You, through an Indian bank account or a payer</td><td className="border border-gray-300 p-3 align-top text-gray-700">Companies with in-house India GST skills</td><td className="border border-gray-300 p-3 align-top text-gray-700">Officer queries, rupee payment, state-wise returns and late fees</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Use a Merchant of Record</td><td className="border border-gray-300 p-3 align-top text-gray-700">The MoR</td><td className="border border-gray-300 p-3 align-top text-gray-700">The MoR, if it is the seller and is registered in India</td><td className="border border-gray-300 p-3 align-top text-gray-700">Companies that accept the MoR&apos;s pricing and customer terms</td><td className="border border-gray-300 p-3 align-top text-gray-700">MoR fees, no India cover, and direct sales that the MoR does not cover</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Hire AU Corporate</td><td className="border border-gray-300 p-3 align-top text-gray-700">AU Corporate</td><td className="border border-gray-300 p-3 align-top text-gray-700">AU Corporate, against your own GSTIN, through payment facilitation</td><td className="border border-gray-300 p-3 align-top text-gray-700">Companies that sell directly and want their own registration and compliance</td><td className="border border-gray-300 p-3 align-top text-gray-700">You must still send accurate sales data each month</td></tr></tbody></table></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">What AU Corporate Does for You</h2>
          <p className="mb-6 text-gray-600">Reasonable fees, confirmed in writing before we start.</p>
          <ul className="grid gap-3 sm:grid-cols-2"><li className="flex gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800"><Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-600" aria-hidden="true" /><span>Review of Past Indian Revenue and Exposure</span></li><li className="flex gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800"><Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-600" aria-hidden="true" /><span>OIDAR GST Registration (Form GST REG-10)</span></li><li className="flex gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800"><Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-600" aria-hidden="true" /><span>Authorised Representative in India</span></li><li className="flex gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800"><Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-600" aria-hidden="true" /><span>Monthly GSTR-5A Filing, Including Nil Returns</span></li><li className="flex gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800"><Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-600" aria-hidden="true" /><span>GST Payment Facilitation in Indian Rupees</span></li><li className="flex gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800"><Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-600" aria-hidden="true" /><span>Catch-Up Returns for Past Months</span></li><li className="flex gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800"><Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-600" aria-hidden="true" /><span>Replies to DGGI and GST Notices</span></li><li className="flex gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800"><Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-600" aria-hidden="true" /><span>MoR, Checkout and GSTIN Check Review</span></li><li className="flex gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800"><Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-600" aria-hidden="true" /><span>Cancellation of Registration, When Needed</span></li><li className="flex gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800"><Check size={16} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-green-600" aria-hidden="true" /><span>Link to Your Indian Subsidiary, If You Set One Up</span></li></ul>
          <p className="mt-4 text-sm text-gray-600"><strong>Not Included:</strong> the GST itself, interest and penalties, which are paid to the government, and income tax and equalisation levy advice, which is quoted separately by AU Corporate&apos;s tax team.</p>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="countries" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">OIDAR GST for Companies in the USA, UK, EU, Singapore, Australia and the UAE</h2>
          <p className="mb-6 text-gray-600">The Indian rules are the same for every foreign supplier. Only the paperwork, currency and home-country taxes differ.</p>
          <div className="mb-8 overflow-x-auto"><table className="w-full border-collapse text-sm"><caption className="mb-2 caption-top text-left text-sm font-semibold text-gray-800">OIDAR GST by supplier country</caption><thead><tr><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Your Country</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Indian OIDAR Rules</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Usual Billing Currency</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Home-Country Tax (Separate)</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">What AU Corporate Adjusts</th></tr></thead><tbody><tr><td className="border border-gray-300 p-3 align-top text-gray-700">USA</td><td className="border border-gray-300 p-3 align-top text-gray-700">Same</td><td className="border border-gray-300 p-3 align-top text-gray-700">USD</td><td className="border border-gray-300 p-3 align-top text-gray-700">US state sales tax</td><td className="border border-gray-300 p-3 align-top text-gray-700">US time zones, US company documents and USD remittance</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">UK</td><td className="border border-gray-300 p-3 align-top text-gray-700">Same</td><td className="border border-gray-300 p-3 align-top text-gray-700">GBP</td><td className="border border-gray-300 p-3 align-top text-gray-700">UK VAT</td><td className="border border-gray-300 p-3 align-top text-gray-700">UK company documents and GBP remittance</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">EU (Germany, France, Spain and others)</td><td className="border border-gray-300 p-3 align-top text-gray-700">Same</td><td className="border border-gray-300 p-3 align-top text-gray-700">EUR</td><td className="border border-gray-300 p-3 align-top text-gray-700">EU VAT and One Stop Shop</td><td className="border border-gray-300 p-3 align-top text-gray-700">EU company documents and EUR remittance</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Singapore</td><td className="border border-gray-300 p-3 align-top text-gray-700">Same</td><td className="border border-gray-300 p-3 align-top text-gray-700">SGD</td><td className="border border-gray-300 p-3 align-top text-gray-700">Singapore GST</td><td className="border border-gray-300 p-3 align-top text-gray-700">Singapore company documents and SGD remittance</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Australia</td><td className="border border-gray-300 p-3 align-top text-gray-700">Same</td><td className="border border-gray-300 p-3 align-top text-gray-700">AUD</td><td className="border border-gray-300 p-3 align-top text-gray-700">Australian GST</td><td className="border border-gray-300 p-3 align-top text-gray-700">Australian company documents and AUD remittance</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">UAE</td><td className="border border-gray-300 p-3 align-top text-gray-700">Same</td><td className="border border-gray-300 p-3 align-top text-gray-700">AED</td><td className="border border-gray-300 p-3 align-top text-gray-700">UAE VAT</td><td className="border border-gray-300 p-3 align-top text-gray-700">UAE company documents and AED remittance</td></tr></tbody></table></div>
          <p className="mt-4 text-sm text-gray-600">OIDAR registration in India does not replace VAT or sales tax in your own country. If your country is not listed, contact us. We serve foreign companies from many countries.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">Ready to Register for OIDAR GST?</h2><p className="mb-4 leading-relaxed text-gray-700">Start in three steps: share your company details and Indian sales, receive a written quote and exposure review, and we register you and start monthly GSTR-5A filing and payment.</p><div className="mt-6 flex flex-wrap gap-3"><a href="https://cal.com/abhishek-jaiin-ybbklq/30min" className="inline-block rounded-lg bg-gold px-5 py-3 text-sm font-bold text-[#081a42] transition hover:bg-gold-dark">Book Consultation with an Expert</a><a href="#contact" className="inline-block rounded-lg border-2 border-[#081a42] px-5 py-3 text-sm font-bold text-[#081a42] transition hover:bg-[#081a42]/5">Get a Quote</a></div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="calendar" className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">The Monthly OIDAR Compliance Calendar</h2>
          <p className="mb-6 text-gray-600">The same steps every month, so your GST is always paid and filed on time.</p>
          <div className="mb-8 overflow-x-auto"><table className="w-full border-collapse text-sm"><caption className="mb-2 caption-top text-left text-sm font-semibold text-gray-800">Monthly OIDAR GST Calendar for a Foreign Supplier</caption><thead><tr><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">When</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">What</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Who</th></tr></thead><tbody><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Days 1 to 7</td><td className="border border-gray-300 p-3 align-top text-gray-700">Export of Indian sales for the previous month</td><td className="border border-gray-300 p-3 align-top text-gray-700">You</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">Days 7 to 12</td><td className="border border-gray-300 p-3 align-top text-gray-700">Computation of IGST by state and review of B2B sales and refunds</td><td className="border border-gray-300 p-3 align-top text-gray-700">AU Corporate</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">By the 14th</td><td className="border border-gray-300 p-3 align-top text-gray-700">Remittance of the GST amount to AU Corporate&apos;s account</td><td className="border border-gray-300 p-3 align-top text-gray-700">You</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">By the 18th</td><td className="border border-gray-300 p-3 align-top text-gray-700">Payment of the challan in Indian rupees</td><td className="border border-gray-300 p-3 align-top text-gray-700">AU Corporate</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">By the 20th</td><td className="border border-gray-300 p-3 align-top text-gray-700">Filing of GSTR-5A, including nil returns</td><td className="border border-gray-300 p-3 align-top text-gray-700">AU Corporate</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">After filing</td><td className="border border-gray-300 p-3 align-top text-gray-700">Challan, return and monthly statement sent to you</td><td className="border border-gray-300 p-3 align-top text-gray-700">AU Corporate</td></tr></tbody></table></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">Official Links and Further Reading</h2>
          <p className="mb-6 text-gray-600">Primary sources for the rules described on this page.</p>
          <ul className="mb-10 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-4"><li><a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="text-gold-dark font-semibold hover:underline">GST Portal</a>Registration, returns, challans and taxpayer search</li><li><a href="https://www.cbic.gov.in" target="_blank" rel="noopener noreferrer" className="text-gold-dark font-semibold hover:underline">CBIC</a>Central Board of Indirect Taxes and Customs</li><li><a href="https://cbic-gst.gov.in" target="_blank" rel="noopener noreferrer" className="text-gold-dark font-semibold hover:underline">CBIC GST Acts and Rules</a>The CGST Act, IGST Act, rules, notifications and circulars</li><li><a href="https://dggi.gov.in" target="_blank" rel="noopener noreferrer" className="text-gold-dark font-semibold hover:underline">DGGI</a>Directorate General of GST Intelligence</li><li><a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-gold-dark font-semibold hover:underline">Reserve Bank of India</a>Foreign exchange and payment rules</li></ul>
          <h2 className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">Related Pages from AU Corporate</h2><p className="mb-4 leading-relaxed text-gray-700">If you plan to hire in India or want to look at your other global tax obligations, these pages help.</p><div className="flex flex-wrap gap-3"><Link href="/india-subsidiary-registration" className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-[#081a42] transition hover:border-gold">India Subsidiary Registration</Link><Link href="/corporate-tax-gst-transfer-pricing" className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-[#081a42] transition hover:border-gold">Corporate Tax, GST and Transfer Pricing</Link><Link href="/accounting-reporting-audit-support" className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-[#081a42] transition hover:border-gold">Accounting, Reporting and Audit Support</Link><Link href="/fema-rbi-compliance" className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-[#081a42] transition hover:border-gold">FEMA and RBI Compliance</Link></div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">Full Forms of the Terms on This Page</h2>
          <div className="mb-8 overflow-x-auto"><table className="w-full border-collapse text-sm"><caption className="mb-2 caption-top text-left text-sm font-semibold text-gray-800">Full Forms of the Terms Used on This Page</caption><thead><tr><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Term</th><th scope="col" className="border border-gray-300 bg-gray-100 p-3 text-left font-semibold text-gray-900">Full Form</th></tr></thead><tbody><tr><td className="border border-gray-300 p-3 align-top text-gray-700">DGGI</td><td className="border border-gray-300 p-3 align-top text-gray-700">Directorate General of GST Intelligence</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">DGCEI</td><td className="border border-gray-300 p-3 align-top text-gray-700">Directorate General of Central Excise Intelligence (the former name of DGGI)</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">DGAE</td><td className="border border-gray-300 p-3 align-top text-gray-700">Directorate General of Anti-Evasion (the earlier name)</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">CBIC</td><td className="border border-gray-300 p-3 align-top text-gray-700">Central Board of Indirect Taxes and Customs</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">DRI</td><td className="border border-gray-300 p-3 align-top text-gray-700">Directorate of Revenue Intelligence</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">ADG</td><td className="border border-gray-300 p-3 align-top text-gray-700">Additional Director General</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">GSTN</td><td className="border border-gray-300 p-3 align-top text-gray-700">Goods and Services Tax Network</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">GST</td><td className="border border-gray-300 p-3 align-top text-gray-700">Goods and Services Tax</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">IGST</td><td className="border border-gray-300 p-3 align-top text-gray-700">Integrated Goods and Services Tax</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">CGST</td><td className="border border-gray-300 p-3 align-top text-gray-700">Central Goods and Services Tax</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">SGST</td><td className="border border-gray-300 p-3 align-top text-gray-700">State Goods and Services Tax</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">OIDAR</td><td className="border border-gray-300 p-3 align-top text-gray-700">Online Information and Database Access or Retrieval</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">NROSP</td><td className="border border-gray-300 p-3 align-top text-gray-700">Non-Resident Online Service Provider</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">NTOR</td><td className="border border-gray-300 p-3 align-top text-gray-700">Non-Taxable Online Recipient</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">RCM</td><td className="border border-gray-300 p-3 align-top text-gray-700">Reverse Charge Mechanism</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">GSTIN</td><td className="border border-gray-300 p-3 align-top text-gray-700">GST Identification Number</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">GST REG-10</td><td className="border border-gray-300 p-3 align-top text-gray-700">Application for registration of a person supplying OIDAR from outside India</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">GSTR-5A</td><td className="border border-gray-300 p-3 align-top text-gray-700">Monthly return of a non-resident OIDAR supplier</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">ITC</td><td className="border border-gray-300 p-3 align-top text-gray-700">Input Tax Credit</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">LUT</td><td className="border border-gray-300 p-3 align-top text-gray-700">Letter of Undertaking</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">MoR</td><td className="border border-gray-300 p-3 align-top text-gray-700">Merchant of Record</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">PA-CB</td><td className="border border-gray-300 p-3 align-top text-gray-700">Payment Aggregator, Cross-Border</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">FIRC</td><td className="border border-gray-300 p-3 align-top text-gray-700">Foreign Inward Remittance Certificate</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">RBI</td><td className="border border-gray-300 p-3 align-top text-gray-700">Reserve Bank of India</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">FEMA</td><td className="border border-gray-300 p-3 align-top text-gray-700">Foreign Exchange Management Act, 1999</td></tr><tr><td className="border border-gray-300 p-3 align-top text-gray-700">PAN</td><td className="border border-gray-300 p-3 align-top text-gray-700">Permanent Account Number</td></tr></tbody></table></div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="mb-4 scroll-mt-24 text-2xl font-bold text-gray-900 md:text-3xl">Questions About OIDAR GST for AI and SaaS Companies</h2>
          <p className="mb-6 text-gray-600">163 straight answers to the questions foreign finance teams ask. Can&apos;t find yours? Ask us in the form below.</p>
          <p className="mb-1 text-sm text-gray-600">Written and reviewed by <AuthorLink className="font-semibold text-[#081a42] hover:underline" />, Chartered Accountant (All India Rank 44; ICAI Membership No. 544646) · Last reviewed: <time dateTime="2026-10-20">20 October 2026</time></p>
          <p className="mb-10 text-sm text-gray-500">This is general guidance based on Indian law and practice as at the date above. It is not advice for your specific case, and rules can change.</p>
          <div className="grid gap-x-10 sm:grid-cols-2"><FaqAccordion faqs={faqsLeft} /><FaqAccordion faqs={faqsRight} /></div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="py-16 bg-secondary/30" id="contact">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Register Before a Notice Arrives"
            description="Tell us what you sell, where your company is and roughly how much Indian revenue you have had. We will review your exposure and reply with a clear plan and quote."
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </main>
  )
}
