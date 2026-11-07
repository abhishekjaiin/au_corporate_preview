import type { GuideCountryKey, GuideTopic } from "@/lib/guides/countries"

/**
 * Country-specific points for each guide topic, rendered by
 * GuideCountryContext as a "What's different for <country> companies" box.
 *
 * The topic pages share India-side rules across countries, so these points
 * are what makes each country's version genuinely its own: the home-country
 * law, treaty, documents, calendar and working practice that change the
 * answer. Keep each point factual and specific to the country; generic India
 * rules belong in the page body, not here.
 */
export const COUNTRY_CONTEXT: Record<GuideCountryKey, Partial<Record<GuideTopic, string[]>>> = {
  usa: {
    "incorporation-process": [
      "US parents are usually a Delaware or other state corporation, or an LLC. An LLC parent provides its certificate of formation and operating agreement in place of a charter and bylaws.",
      "Each state's documents are apostilled by that state's Secretary of State, so a Delaware parent with directors notarizing in California may need apostilles from two states. Start the document chase first.",
      "India is between 9.5 and 13.5 hours ahead of the mainland US, depending on time zone and daylight saving, so book digital signature verification and bank KYC calls for the US morning.",
    ],
    "subsidiary-vs-branch-vs-liaison-office-vs-llp": [
      "For US tax, an Indian private limited company is an eligible entity, so a US parent can elect to treat it as a corporation or a disregarded entity on Form 8832 (check-the-box). An Indian public limited company is a per se corporation and cannot elect.",
      "A branch or liaison office is part of the US company itself, so its Indian results flow straight into the US return, while an LLP's US classification needs its own review.",
      "The US does not share a land border with India, so Press Note 3's prior-approval rule does not apply to a US investor, unless a beneficial owner is from a land-border country.",
    ],
    "documents-and-apostille": [
      "State documents, such as the certificate of incorporation and good standing, are apostilled by the issuing state's Secretary of State. Federal documents are apostilled by the US Department of State.",
      "Notarized documents, such as board resolutions and passport copies, are apostilled by the Secretary of State of the state where the notary is commissioned, not where the company is formed.",
      "Order the certificate of good standing close to the filing date, because Indian authorities generally expect recent documents.",
    ],
    "resident-director": [
      "US executives rarely spend 182 days a year in India, so most US parents appoint an Indian employee or a trusted professional as the resident director.",
      "A US citizen who does meet the 182-day test can become tax resident in India and still remains taxable in the US on worldwide income, because the US taxes by citizenship.",
      "A US director needs a Director Identification Number and a Digital Signature Certificate, obtained with an apostilled passport and address proof.",
    ],
    "funding-fema-fc-gpr": [
      "The parent remits US dollars, and the Indian bank converts them to rupees and issues the foreign inward remittance certificate. Shares are priced in rupees, so allow an exchange-rate buffer when fixing the USD amount.",
      "Press Note 3 does not apply to US investors, so most sectors stay on the Automatic Route, unless a beneficial owner is from a country sharing a land border with India.",
      "Cash contributions to a foreign corporation above US thresholds can trigger US reporting such as Form 926. Your US CPA confirms the position.",
    ],
    "share-valuation": [
      "The FEMA floor is a rupee value. A US parent may also need a fair-value measure for US GAAP reporting, which is a separate exercise from the Indian valuation certificate.",
      "Fix the number of shares against the rupee amount actually credited, so that a USD exchange movement never takes the issue price below fair value.",
    ],
    "repatriating-profits": [
      "The India-US treaty caps Indian tax at 15% on dividends to a parent with at least 10% of the voting power (25% otherwise), 10% on bank interest and 15% on other interest, and 15% on royalties and fees for included services (10% for equipment royalties).",
      "A US corporate parent owning at least 10% can generally deduct the foreign-source part of dividends from its Indian subsidiary (Section 245A), but cannot claim a foreign tax credit for the Indian tax on them, so that tax is usually a final cost.",
      "Service fees and royalties are taxable US income for the parent, and the Indian withholding on them is generally creditable within US foreign tax credit limits.",
    ],
    "eor-vs-subsidiary": [
      "Indian business hours barely overlap with the US, so US teams often run Indian staff on shifted hours. Night work can need state shops-and-establishments permission, which your EOR or entity must handle.",
      "India has no at-will employment. Termination needs notice under the contract and the law, so US-style offer letters must be adapted for either route.",
      "If US managers direct an India team in a way that looks like the US company doing business in India, use the India-US treaty's 90-day service permanent establishment test as a check.",
    ],
    "transfer-pricing": [
      "The same transaction is tested on both sides: by India under its arm's length rules and by the IRS under Section 482 of the Internal Revenue Code, so align the method and margin in both files.",
      "India has signed bilateral Advance Pricing Agreements with the US, which can fix pricing for up to five future years with a roll-back to four earlier years.",
      "Most US groups close their year on 31 December and India on 31 March, so plan year-end true-ups across two reporting years.",
    ],
    "dtaa-pe-risk": [
      "Under the India-US treaty, services furnished in India through employees or other personnel create a permanent establishment if they continue for more than 90 days in any 12-month period.",
      "The US Tax Residency Certificate is IRS Form 6166. With Form 41 (previously Form 10F), it supports a claim to treaty rates on payments to the US parent.",
      "Technical fees are fees for included services only if they make technical knowledge or skills available, or are ancillary to a royalty. Other service fees are business profits, taxable in India only through a permanent establishment.",
    ],
    "compliance-calendar": [
      "Most US parents report on a calendar year, while the Indian subsidiary must close its statutory year on 31 March, so the January to March quarter falls in a different Indian year and needs a reporting bridge.",
      "US-side dates that depend on Indian numbers include Form 5471 with the parent's US return and the FBAR, due 15 April with an automatic extension to 15 October.",
      "Indian deadlines run on Indian Standard Time and Indian bank holidays, so set approval deadlines in the US a week ahead.",
    ],
    "audit-icofr": [
      "A US-listed parent's SOX 404 assessment can bring a material Indian subsidiary into scope, with control testing by the group auditor under PCAOB standards alongside the Indian statutory audit.",
      "The Indian statutory audit must be signed by an Indian Chartered Accountant. A US CPA cannot sign it, though an Indian member firm of the group auditor's network can act.",
      "The Indian books follow Indian GAAP or Ind AS, so US GAAP differences are usually adjusted in the group reporting pack.",
    ],
    "tax-notices-and-litigation": [
      "A transfer pricing adjustment on a US-related transaction can be taken to the Mutual Agreement Procedure under the India-US treaty, so that the IRS gives a matching adjustment and the profit is not taxed twice.",
      "India and the US have signed bilateral Advance Pricing Agreements, which can stop the same transfer pricing dispute recurring each year.",
      "Indian notices often allow 7 to 30 days for a reply, so agree in advance who in the US approves a response.",
    ],
    "contracts-and-arbitration": [
      "The US is not a reciprocating territory under Section 44A of the Code of Civil Procedure, so a US court judgment cannot be executed directly in India and needs a fresh suit.",
      "The US is a New York Convention country notified by India, so an award from a US-seated arbitration can be enforced in India under Part II of the Arbitration and Conciliation Act, 1996.",
      "Agreements signed in the US and later brought into India attract Indian stamp duty, so plan where and how the intercompany agreement is executed.",
    ],
    esop: [
      "Indian employees of a US parent are taxed in India at exercise (for RSUs, at vesting), with USD values converted to rupees at the SBI telegraphic transfer buying rate.",
      "Indian residents who hold US shares must report them in Schedule FA of their Indian return, and US withholding on any dividends can be credited under the treaty.",
      "If the US parent recharges the plan cost to the Indian subsidiary, put a recharge agreement in place and price it at arm's length.",
    ],
    "restructuring-and-exit": [
      "The India-US treaty leaves capital gains to each country's domestic law, so a sale of the Indian subsidiary's shares by the US parent is taxable in India.",
      "A US buyer or seller may also need US tax steps, such as a check-the-box election or a Section 338(g) election, which should be coordinated before signing.",
      "A transfer of shares between the US parent and an Indian resident is reported in Form FC-TRS within 60 days and must meet FEMA pricing rules.",
    ],
    "expat-visa": [
      "US citizens stay taxable in the US on worldwide income, so a US executive in India files in both countries and uses the foreign earned income exclusion (Form 2555) or foreign tax credits.",
      "There is no India-US social security agreement, so the executive can face Indian provident fund as an international worker as well as US Social Security.",
      "A US executive usually needs an Employment Visa, and a stay longer than 180 days requires FRRO registration within 14 days of arrival.",
    ],
    "global-vat": [
      "The US has no federal VAT and taxes sales at state level under economic nexus rules, so US companies are often registering for VAT or GST abroad for the first time.",
      "US software or digital services sold to Indian consumers are OIDAR supplies: the US company must register for Indian GST at 18% even without an Indian entity.",
      "EU sales to consumers are usually handled through the non-Union One Stop Shop, and the UK applies VAT from the first sale for non-established sellers.",
    ],
    "hiring-and-payroll": [
      "India has no at-will employment: termination follows the contract, notice and the labour codes, and gratuity becomes payable after five years of continuous service.",
      "Benefits that US employees expect have Indian equivalents: provident fund is mandatory for most employees, and health cover is usually group medical insurance.",
      "Teams working US hours need shift allowances and, for night work, state shops-and-establishments compliance, including transport and safety rules.",
    ],
    "common-mistakes": [
      "Using US-style at-will offer letters and termination practices for Indian employees.",
      "Sending a Delaware certificate without a recent, apostilled good standing certificate, which delays the incorporation filing.",
      "Paying the India team through US payroll or as US contractors, which can create permanent establishment and Indian payroll exposure.",
    ],
    gcc: [
      "A US GCC is usually a wholly owned Indian subsidiary paid by the US parent on a cost-plus basis, with safe harbour rules available for some IT services.",
      "Assign IP created by the centre to the US parent in writing, and keep contract and strategy decisions in the US to limit permanent establishment risk.",
    ],
    "data-protection": [
      "The US has sector privacy laws (HIPAA, Gramm-Leach-Bliley) and state laws such as California's, but no general federal privacy statute.",
      "India's DPDP Act exempts some duties when Indian teams process data of people outside India under a contract with a foreign party; security duties remain.",
    ],
    "setup-cost": [
      "US-side costs include notarisation and state apostille of the parent's documents, courier, and the US tax work such as Form 5471.",
      "AU Corporate's set-up fee is USD 750 to USD 1,000 for share capital up to INR 10 lakh, covering the incorporation work.",
    ],
    "setup-timeline": [
      "Notarising and apostilling US documents usually takes 1 to 3 weeks depending on the state, and runs alongside director credentials and name approval.",
      "India is 9.5 to 12.5 hours ahead of US time zones, so plan signature, bank and filing calls for the US evening or Indian morning.",
    ],
    "state-and-city": [
      "Engineering teams usually choose Bengaluru, Hyderabad, Pune or Chennai; Mumbai is the finance hub and GIFT City serves international financial services.",
      "The registered office state decides stamp duty, professional tax and shops rules, and moving it later needs a formal procedure.",
    ],
    "anti-bribery-export-controls": [
      "The FCPA reaches US companies and their agents, and India's Prevention of Corruption Act makes companies liable for associated persons unless adequate procedures exist.",
      "US export controls (EAR) apply to technology and software shared with the Indian team, including deemed exports to foreign nationals.",
    ],
    "labour-codes": [
      "There is no at-will employment in India: notice, cause and procedure depend on the contract, the establishment size and the role.",
      "Under the labour codes, wages should be at least 50% of total pay, which affects provident fund, gratuity and bonus costs.",
    ],
    "ip-ownership": [
      "Work made in the course of employment belongs to the employer under the Copyright Act, but write assignment terms clearly, because silent terms default to five years and India only.",
      "Filing a patent abroad for an invention made in India needs foreign filing permission unless it was first filed in India six weeks earlier.",
    ],
    "nri-oci-founders": [
      "Investment by a US company owned by NRI or OCI founders is foreign investment under the FDI route, even if the founders hold Indian ties.",
      "Founders who spend 182 days or more in India can become Indian tax residents, so track days and the treaty tie-breaker.",
    ],
    "manufacturing-incentives": [
      "Production-linked incentive schemes pay on incremental sales of eligible products, within thresholds, windows and caps.",
      "BIS certification and quality control orders can restrict imported components, so check them before choosing suppliers.",
    ],
    "digital-sales-gst": [
      "A US supplier of online services to Indian consumers registers for GST and pays 18%; Indian business customers pay under reverse charge.",
      "The India-US treaty rate on royalties and fees for included services is generally 15%, and the equalisation levies have been removed.",
    ],
    "home-country-tax": [
      "Indian profits can be taxed in the US before any dividend through Subpart F and net CFC tested income (formerly GILTI).",
      "Indian company tax of about 25.17% is usually above the high-tax exclusion threshold, and foreign tax credits are claimed on Form 1118 or Form 1116.",
    ],
  },
  australia: {
    "incorporation-process": [
      "Australian parents are usually a Pty Ltd. Provide the ASIC company extract and constitution, and use the exact legal name and ACN on every Indian form.",
      "Apostilles are issued federally by DFAT, so there is one process for the whole country rather than a state-by-state one.",
      "India is 4.5 to 5.5 hours behind Sydney and Melbourne, depending on daylight saving, so filings and bank calls fit inside the Australian working afternoon.",
    ],
    "subsidiary-vs-branch-vs-liaison-office-vs-llp": [
      "A branch is part of the Australian company. Its Indian profits may be non-assessable in Australia under the foreign branch profits rules (section 23AH, Income Tax Assessment Act 1936), subject to conditions.",
      "Australia does not share a land border with India, so Press Note 3's prior-approval rule does not apply to an Australian investor, unless a beneficial owner is from a land-border country.",
      "The India-Australia Economic Cooperation and Trade Agreement (in force since 29 December 2022) cuts tariffs on goods, but does not change the FDI or company law rules for choosing a structure.",
    ],
    "documents-and-apostille": [
      "DFAT issues apostilles for the whole country and must be able to verify the notary, so use a notary public whose signature DFAT holds.",
      "Order the ASIC company extract close to the filing date, because recent documents are usually expected.",
      "Australian directors' passports and address proofs are notarised and then apostilled by DFAT before they are used for digital signatures in India.",
    ],
    "resident-director": [
      "Australian executives rarely spend 182 days a year in India, so most Australian parents appoint an Indian employee or a trusted professional as the resident director.",
      "An Australian who meets the 182-day test can become tax resident in India while remaining Australian resident under the domicile test, so the treaty's tie-breaker rule in Article 4 decides where they are taxed.",
      "An Australian director needs a Director Identification Number and a Digital Signature Certificate, obtained with a DFAT-apostilled passport and address proof.",
    ],
    "funding-fema-fc-gpr": [
      "The parent remits Australian dollars (or US dollars), and the Indian bank converts them and issues the foreign inward remittance certificate. Shares are priced in rupees, so allow an exchange-rate buffer.",
      "Press Note 3 does not apply to Australian investors, so most sectors stay on the Automatic Route, unless a beneficial owner is from a country sharing a land border with India.",
      "If the subsidiary is funded by a loan from the parent, India limits interest deductions on debt from non-resident associated enterprises to 30% of EBITDA, and Australia's thin capitalisation rules apply to the parent's own debt.",
    ],
    "share-valuation": [
      "The FEMA floor is a rupee value. The Australian parent may also need a fair-value measure under Australian Accounting Standards, which is a separate exercise from the Indian valuation certificate.",
      "Fix the number of shares against the rupee amount actually credited, so that an AUD exchange movement never takes the issue price below fair value.",
    ],
    "repatriating-profits": [
      "The India-Australia treaty caps Indian tax at 15% on dividends, interest and royalties, and at 10% on equipment royalties.",
      "Dividends from a wholly owned Indian subsidiary are generally non-assessable non-exempt income for an Australian company with at least a 10% direct voting interest (section 768-5), so the Indian tax on them is a final cost.",
      "Service fees and royalties are assessable in Australia, and the Indian tax on them can generally be claimed as a foreign income tax offset.",
    ],
    "eor-vs-subsidiary": [
      "India's working day overlaps well with Australia's: Indian staff working standard hours cover most of the Australian afternoon without night shifts.",
      "Australian Fair Work rules do not apply to staff employed in India. Indian contracts follow the labour codes and state rules, whether the employer is an EOR or your own entity.",
      "If you second Australian staff to India instead of hiring locally, an ATO certificate of coverage under the India-Australia Social Security Agreement keeps them in superannuation and out of Indian provident fund.",
    ],
    "transfer-pricing": [
      "The same transaction is tested on both sides: by India under its arm's length rules and by the ATO under Division 815 of the Income Tax Assessment Act 1997, so align the method and margin in both files.",
      "Australia's 30 June year end and India's 31 March year end do not match, so plan year-end true-ups across two reporting years.",
      "Significant global entities (global income of A$1 billion or more) have extra ATO obligations, including country-by-country reporting.",
    ],
    "dtaa-pe-risk": [
      "Under the India-Australia treaty, services furnished in India by your personnel for more than 183 days in any 12-month period can create a permanent establishment.",
      "Claim treaty rates with an ATO certificate of residency as the Tax Residency Certificate, plus Form 41 (previously Form 10F).",
      "The treaty treats many technical service fees as royalties, taxable in India at up to 15% (10% for equipment).",
    ],
    "compliance-calendar": [
      "The Australian parent closes on 30 June and the Indian subsidiary on 31 March, so the Indian statutory year spans two Australian years and needs a reporting bridge.",
      "Australian-side filings that depend on Indian numbers include the International Dealings Schedule, lodged with the parent's company tax return.",
      "Do not use the Australian 30 June year end for Indian filing dates: every Indian deadline runs from 31 March.",
    ],
    "audit-icofr": [
      "An ASX-listed parent's CEO and CFO declaration under section 295A of the Corporations Act relies on the controls of material subsidiaries, including the Indian one.",
      "The group auditor directs component auditors under ASA 600, so the Indian statutory auditor may receive group audit instructions alongside the Indian audit.",
      "The Indian statutory audit must be signed by an Indian Chartered Accountant, whatever audit firm the Australian group uses.",
    ],
    "tax-notices-and-litigation": [
      "A transfer pricing adjustment on an Australian-related transaction can be taken to the Mutual Agreement Procedure under Article 25 of the India-Australia treaty, so that the ATO gives a matching adjustment.",
      "Keep the ATO-side Division 815 documentation consistent with the Indian file, because the competent authorities compare both in a MAP case.",
      "Indian notices often allow 7 to 30 days for a reply, so agree in advance who in Australia approves a response.",
    ],
    "contracts-and-arbitration": [
      "Australia is not a reciprocating territory under Section 44A of the Code of Civil Procedure, so an Australian court judgment cannot be executed directly in India and needs a fresh suit.",
      "Arbitration is usually the better route. Australia is a New York Convention party; confirm the seat country is notified by India before relying on Part II of the Arbitration and Conciliation Act, 1996.",
      "Agreements signed in Australia and later brought into India attract Indian stamp duty, so plan where and how the intercompany agreement is executed.",
    ],
    esop: [
      "Indian employees of an Australian parent are taxed in India at exercise (for RSUs, at vesting), with AUD values converted to rupees at the SBI telegraphic transfer buying rate.",
      "Indian residents who hold Australian shares must report them in Schedule FA of their Indian return.",
      "Your Australian counsel should confirm the securities-law position for offering equity to employees in India, as the Corporations Act disclosure rules mainly cover offers made in Australia.",
    ],
    "restructuring-and-exit": [
      "A sale of the Indian subsidiary's shares by the Australian parent is generally taxable in India, so check the India-Australia treaty and Indian capital gains rules before pricing the deal.",
      "On the Australian side, the active foreign business asset reduction (Subdivision 768-G) can reduce or remove the capital gain on selling shares in an active foreign company.",
      "A transfer of shares between the Australian parent and an Indian resident is reported in Form FC-TRS within 60 days and must meet FEMA pricing rules.",
    ],
    "expat-visa": [
      "An ATO certificate of coverage under the India-Australia Social Security Agreement keeps a seconded Australian in superannuation and out of Indian provident fund for up to five years.",
      "An Australian executive may stay Australian tax resident under the domicile test while working in India, so the Indian tax paid is claimed back through a foreign income tax offset.",
      "A stay longer than 180 days on an Employment Visa requires FRRO registration within 14 days of arrival.",
    ],
    "global-vat": [
      "Australian GST is 10%, and services exported to overseas customers are generally GST-free, so the question is mainly registration in the customers' countries.",
      "Australian software or digital services sold to Indian consumers are OIDAR supplies: the Australian company must register for Indian GST at 18% even without an Indian entity.",
      "New Zealand applies GST to remote services sold to its consumers, so Australian SaaS companies selling into New Zealand often register there too.",
    ],
    "hiring-and-payroll": [
      "Provident fund replaces superannuation for staff employed in India, and gratuity becomes payable after five years of continuous service.",
      "Australian awards and Fair Work standards do not apply: Indian employment terms follow the labour codes and state shops-and-establishments rules.",
      "India's working day overlaps with Australian afternoons, so most roles can work standard Indian hours without shift allowances.",
    ],
    "common-mistakes": [
      "Using the Australian 30 June year end for Indian filing dates.",
      "Sending an Australian employee to India without a certificate of coverage, and paying provident fund on full wages as well as superannuation.",
      "Assuming the India-Australia trade agreement relaxes FDI or company law rules: it mainly cuts tariffs on goods.",
    ],
  },
  uk: {
    "incorporation-process": [
      "The UK parent's papers come from Companies House: a certified certificate of incorporation, the articles and a current company profile or certificate of good standing.",
      "UK documents are notarised where needed and then apostilled by the FCDO Legalisation Office, one process for the whole UK, with e-apostilles available.",
      "India is 4.5 hours ahead of the UK in summer and 5.5 hours in winter, so most filings and bank calls fit inside a UK morning.",
    ],
    "subsidiary-vs-branch-vs-liaison-office-vs-llp": [
      "Dividends from an Indian subsidiary usually fall within the UK distribution exemption (Part 9A, Corporation Tax Act 2009), which is one reason most UK groups choose a subsidiary.",
      "A branch is part of the UK company itself, so its Indian profits sit in the UK company's corporation tax return unless the company elects for the foreign branch exemption.",
      "The UK does not share a land border with India, so Press Note 3's prior-approval rule does not apply to a UK investor, unless a beneficial owner is from a land-border country.",
    ],
    "documents-and-apostille": [
      "Companies House documents and notarised papers are apostilled by the FCDO Legalisation Office, online for e-apostilles or by post for paper ones.",
      "Use the exact name and company number from the Companies House register on every Indian form.",
      "Allow for the notary appointment, Companies House copy times and the FCDO turnaround when you set the incorporation timetable.",
    ],
    "funding-fema-fc-gpr": [
      "The parent remits sterling (or another currency), and the Indian bank converts it and issues the foreign inward remittance certificate. Shares are priced in rupees, so allow an exchange-rate buffer.",
      "Press Note 3 does not apply to UK investors, so most sectors stay on the Automatic Route, unless a beneficial owner is from a country sharing a land border with India.",
    ],
    "repatriating-profits": [
      "The India-UK treaty caps Indian tax at 10% on dividends (15% only for certain property investment vehicles), 15% on interest (10% for banks), and 15% on royalties and technical fees (10% for equipment).",
      "Most dividends are exempt in the UK under the distribution exemption, so the Indian tax on them is generally a final cost rather than a credit.",
      "Claim treaty rates with an HMRC certificate of residence that covers the payment date, plus Form 41 (previously Form 10F).",
    ],
    "transfer-pricing": [
      "The same transaction is tested on both sides: by India under its arm's length rules and by HMRC under Part 4 of the Taxation (International and Other Provisions) Act 2010, so align the method and margin in both files.",
      "Most UK groups close their year on 31 March, like India, so the Indian and UK transfer pricing years usually line up.",
    ],
    "compliance-calendar": [
      "Most UK groups also close on 31 March, so the Indian audit, the UK consolidation and the Companies House and corporation tax dates can run as one timetable.",
      "A private UK company files its accounts at Companies House within 9 months of the year end, so a 31 March group needs the audited Indian accounts well before 31 December.",
    ],
    "contracts-and-arbitration": [
      "The UK is a reciprocating territory under Section 44A of the Code of Civil Procedure, so a money judgment of a UK superior court can be filed for execution in India, subject to the statutory exceptions.",
      "A London-seated arbitration, such as under the LCIA rules, produces an award that can be enforced in India under the New York Convention.",
    ],
    "restructuring-and-exit": [
      "On a sale of the Indian subsidiary, the UK substantial shareholding exemption may exempt the UK parent's gain, while India can still tax it under its own law.",
      "A transfer of shares between the UK parent and an Indian resident is reported in Form FC-TRS within 60 days and must meet FEMA pricing rules.",
    ],
    "expat-visa": [
      "Since the India-UK trade agreement came into force on 15 July 2026, an intra-corporate transferee can be posted to India for up to three years, with limited renewal.",
      "The India-UK Double Contributions Convention lets a temporary assignee stay in UK National Insurance, with a certificate of coverage, instead of paying Indian provident fund as well.",
      "A stay longer than 180 days on an Employment Visa requires FRRO registration within 14 days of arrival.",
    ],
    "hiring-and-payroll": [
      "There is no UK-style statutory redundancy or TUPE in India: termination follows the contract, notice and the labour codes, and gratuity becomes payable after five years of service.",
      "A UK handbook is a useful base, but notice, benefits, IP, restrictive covenants and termination terms must be rebuilt under Indian law.",
      "India's working afternoon overlaps with the UK morning, so most roles can work standard Indian hours.",
    ],
    "common-mistakes": [
      "Assuming India has UK GDPR adequacy: transfers to an Indian subsidiary need the International Data Transfer Agreement or the UK Addendum.",
      "Using an HMRC certificate of residence that does not cover the payment date when claiming treaty rates.",
      "Copying English employment terms into Indian contracts without rebuilding notice, termination and restrictive covenants.",
    ],
    "foreign-employee-treaty-ssa": [
      "Under Article 16 of the India-UK treaty, a UK employee is exempt from Indian tax for up to 183 days in the Indian tax year if a UK employer pays and no Indian entity bears the cost.",
      "The India-UK Double Contributions Convention has been in force since 15 July 2026: with a certificate of coverage, a temporary assignee pays UK National Insurance instead of Indian provident fund.",
    ],
  },
  japan: {
    "incorporation-process": [
      "A Japanese parent is usually a kabushiki kaisha (KK) or a godo kaisha (GK). Its core document is the certificate of registered matters from the Legal Affairs Bureau, with the articles of incorporation and a board or member resolution.",
      "Japanese documents need certified English translations, and private documents go through a notary and Legal Affairs Bureau certification before the MOFA apostille, so start the document set first.",
      "India is 3.5 hours behind Japan all year (neither country uses daylight saving), so digital signature and bank KYC calls fit a Japanese afternoon.",
    ],
    "subsidiary-vs-branch-vs-liaison-office-vs-llp": [
      "Most Japanese groups use a subsidiary so that dividends can qualify for Japan's foreign dividend exemption (95% exempt for a holding of 25% or more for six months); a branch's profits are taxed in the Japanese company's own return instead.",
      "Japan does not share a land border with India, so Press Note 3's prior-approval rule does not apply to a Japanese investor, unless a beneficial owner is from a land-border country.",
      "A liaison office suits a representative presence before a decision, but it cannot earn income, so most Japanese companies move to a subsidiary once India sales or delivery begins.",
    ],
    "documents-and-apostille": [
      "The certificate of registered matters and other official records are apostilled by the Ministry of Foreign Affairs of Japan (MOFA). Private documents, such as board resolutions, are notarized, certified by the Legal Affairs Bureau and then apostilled.",
      "Japanese documents need an English translation, and MOFA expects official documents to be issued within three months of the apostille application.",
      "MOFA's Tokyo desk works by appointment from 5 October 2026, and documents come back by post, so build both into the timetable.",
    ],
    "resident-director": [
      "Chuzaiin (seconded managers) posted to India for a full year usually meet the 182-day test and can act as the resident director, which many Japanese groups prefer to a third-party nominee.",
      "A Japanese director needs a Director Identification Number and a Digital Signature Certificate, obtained with an apostilled passport and an address proof with an English translation.",
    ],
    "funding-fema-fc-gpr": [
      "The parent can remit yen or US dollars, and the Indian bank converts them to rupees and issues the foreign inward remittance certificate. Shares are priced in rupees, so allow an exchange-rate buffer.",
      "Press Note 3 does not apply to Japanese investors, so most sectors stay on the Automatic Route.",
      "Japan's Foreign Exchange and Foreign Trade Act can require a report on the outward investment on the Japanese side; your Japanese adviser confirms the filing.",
    ],
    "repatriating-profits": [
      "The India-Japan tax treaty caps Indian tax at 10% on dividends, interest, royalties and fees for technical services, against a domestic rate of generally 20% plus surcharge and cess.",
      "Claim the treaty rate with a Certificate of Residence from the Japanese tax office that covers the payment date, plus Form 41 (previously Form 10F).",
      "Dividends that qualify for Japan's foreign dividend exemption are 95% exempt in Japan, so the Indian Withholding Tax on them is largely a final cost.",
    ],
    "transfer-pricing": [
      "The same transaction is tested by India and by the Japanese National Tax Agency, so align the method and margin in the Indian report and the parent's Japanese local file.",
      "Most Japanese groups close their year on 31 March, like India, so the Indian and Japanese transfer pricing years usually line up.",
    ],
    "dtaa-pe-risk": [
      "Under the India-Japan treaty, PE risk comes mainly from a fixed place, dependent agents and construction or installation projects beyond the treaty period, so watch chuzaiin who negotiate or sign contracts in India.",
      "Fees for technical services to a Japanese company are taxed in India at up to 10% under the treaty even without a PE, so price and document intra-group services carefully.",
    ],
    "compliance-calendar": [
      "Most Japanese groups also close on 31 March, so the Indian audit and the Japanese consolidation can run on one timetable, with the Indian numbers needed early for the parent's May results.",
      "A parent with a 31 December year-end needs a bridge between India's April-to-March year and its own.",
    ],
    "audit-icofr": [
      "A listed Japanese parent reports on internal control under J-SOX, and a material Indian subsidiary can fall within its scope, so document the Indian controls the parent's auditor will test.",
      "Group packs usually follow J-GAAP or IFRS, while the Indian statutory accounts follow Ind AS or Indian GAAP, so plan the conversion schedule with the parent's accounting team.",
    ],
    "contracts-and-arbitration": [
      "Japan is not a reciprocating territory under Section 44A of the Code of Civil Procedure, so a Japanese court judgment cannot simply be executed in India; it needs a fresh suit.",
      "India and Japan are both parties to the New York Convention, so an arbitration seated in Japan, for example under the JCAA rules, produces an award that can be enforced in India.",
    ],
    "expat-visa": [
      "Chuzaiin usually come on an Employment Visa; a stay longer than 180 days requires FRRO registration within 14 days of arrival.",
      "With a Certificate of Coverage under the Japan-India Social Security Agreement, a seconded employee stays in Japanese pension insurance for up to five years and is exempt from Indian provident fund.",
    ],
    "hiring-and-payroll": [
      "Japanese lifetime-employment practice does not carry over: Indian termination follows the contract, notice and the labour codes, and gratuity becomes payable after five years of service.",
      "Japanese work rules (shugyo kisoku) are a useful base, but leave, notice, benefits and termination terms must be rebuilt under Indian law.",
    ],
    "esop": [
      "Shares of a Japanese parent granted to Indian employees are taxed in India as a perquisite at vesting or exercise, and the Indian company withholds tax through payroll.",
      "Any recharge of the plan cost from the Japanese parent to the Indian subsidiary needs an agreement and transfer pricing support.",
    ],
    "common-mistakes": [
      "Using a Japanese Certificate of Residence that does not cover the payment date when claiming the 10% treaty rate.",
      "Sending Japanese-language documents without certified English translations, or letting the certificate of registered matters go stale before the apostille.",
      "Not applying for the Certificate of Coverage before a chuzaiin starts in India, so Indian provident fund applies from day one.",
    ],
    "parent-obligations": [
      "A Japanese company holding 10% or more of the Indian subsidiary must check the CFC rules each year; the Indian effective tax rate is a key test.",
      "Japanese local file requirements apply to transactions with the Indian subsidiary above specified yen thresholds.",
    ],
    "share-valuation": [
      "Shares issued to the Japanese parent must be priced at or above fair value under FEMA, certified by a Chartered Accountant or SEBI-registered merchant banker; the parent's own valuation for its Japanese books is a separate exercise.",
      "A later transfer between the Japanese parent and an Indian resident needs a fresh FEMA valuation and Form FC-TRS within 60 days.",
    ],
    "tax-notices-and-litigation": [
      "Notices often question payments to the Japanese parent, such as service fees and royalties, so keep the intercompany agreement and the 10% treaty rate support ready.",
      "Where an Indian transfer pricing adjustment causes double taxation, the mutual agreement procedure under the India-Japan treaty is available alongside the Indian appeal route.",
    ],
    "global-vat": [
      "Sales of digital services to Japanese customers fall under Japan's own consumption tax rules for cross-border electronic services, separate from Indian GST.",
      "An Indian subsidiary supplying services to its Japanese parent usually treats them as zero-rated exports under GST, subject to the export conditions.",
    ],
    "eor-vs-subsidiary": [
      "Japanese groups often test India with an Employer of Record before posting chuzaiin, then move to a subsidiary once headcount or customer contracts grow.",
      "Staff hired through an EOR who negotiate contracts for the Japanese parent can still create PE risk under the India-Japan treaty.",
    ],
    "restructuring-and-exit": [
      "A transfer of shares between the Japanese parent and an Indian resident is reported in Form FC-TRS within 60 days and must meet FEMA pricing rules.",
      "On a sale of the Indian subsidiary, India can tax the gain under its own law, and the Japanese parent claims a foreign tax credit under Japanese rules.",
    ],
  },
  singapore: {
    "incorporation-process": [
      "A Singapore parent's core papers come from ACRA through BizFile+: the business profile, certificate of incorporation and constitution, with a board resolution approving the Indian investment.",
      "Private documents are notarised and then apostilled by the Singapore Academy of Law; Singapore joined the Apostille Convention on 16 September 2021, so no Indian High Commission legalisation is needed.",
      "India is 2.5 hours behind Singapore, so digital signature, bank KYC and filing calls fit easily into a Singapore working day.",
    ],
    "subsidiary-vs-branch-vs-liaison-office-vs-llp": [
      "Singapore groups also weigh a GIFT City unit for fund management, fintech or treasury, which runs under IFSCA licensing with its own FEMA and tax rules.",
      "Singapore does not share a land border with India, so Press Note 3's prior-approval rule does not apply, unless a beneficial owner further up the chain is from a land-border country.",
      "Whether to hold India directly or through a Singapore holding company is a separate decision, driven by treaty access and substance rather than by the Indian entity type.",
    ],
    "documents-and-apostille": [
      "The Singapore Academy of Law issues the apostille under the Apostille Act 2020; the notary signs first, then the Academy apostilles the notary's signature.",
      "Use the latest ACRA business profile from BizFile+, and keep the register of registrable controllers extract ready to show the Indian bank who owns the parent.",
      "Singapore documents are in English, so no translation is needed, unlike parents from many other Asian countries.",
    ],
    "funding-fema-fc-gpr": [
      "The parent usually remits SGD or USD from its own account; the Indian bank converts it and issues the foreign inward remittance certificate, and shares must be allotted within 60 days.",
      "Press Note 3 does not apply to Singapore investors, but Indian banks check the full ownership chain, so be ready to show ultimate owners behind a Singapore holding company.",
    ],
    "repatriating-profits": [
      "The India-Singapore treaty caps Indian tax at 10% on dividends for a 25% or larger holding (15% otherwise), 10% on bank interest (15% otherwise) and 10% on royalties and technical fees.",
      "Singapore taxes companies on a territorial basis and has no capital gains tax, so dividends received from India can often be exempt in Singapore, which makes the Indian withholding the main cost.",
      "Claim treaty rates with an IRAS certificate of residence covering the payment date, plus Form 41 (previously Form 10F).",
    ],
    "transfer-pricing": [
      "IRAS accepts a fixed cost mark-up on routine support services, but India has no small-company exemption and tests the same transaction under its own rules, so set one margin both sides can defend.",
      "Most Singapore parents close on 31 December while India closes on 31 March, so the two transfer pricing years need a bridge.",
    ],
    "india-dtaa": [
      "Since the Third Protocol, India can tax gains on Indian shares acquired on or after 1 April 2017; shares acquired before that date stay taxable only in Singapore, unless the holder is a shell.",
      "Services through employees create a permanent establishment after 90 days in a fiscal year, and after only 30 days for services to an associated enterprise.",
    ],
    "parent-obligations": [
      "The Singapore parent files its own Form C with IRAS and its annual return with ACRA; the Indian subsidiary's audited numbers feed the group accounts.",
      "Foreign-sourced dividends can be exempt in Singapore when the headline tax rate and subject-to-tax conditions are met, so keep the Indian tax evidence on file.",
    ],
    "compliance-calendar": [
      "Most Singapore parents close on 31 December, so the Indian audit (for the year to 31 March) and the Singapore consolidation run on different timetables that need a bridge.",
      "The Indian FLA return to the RBI is due by 15 July every year, which falls in the middle of a Singapore group's half-year close.",
    ],
    "contracts-and-arbitration": [
      "Singapore is a reciprocating territory under Section 44A of the Code of Civil Procedure, so a money judgment of a Singapore superior court can be filed for execution in India.",
      "An SIAC award is a foreign award enforceable in India under the New York Convention, which makes Singapore one of the most common seats for India-related contracts.",
    ],
    "restructuring-and-exit": [
      "A sale of Indian shares acquired on or after 1 April 2017 is taxable in India under the treaty, while Singapore has no capital gains tax on it.",
      "A transfer between the Singapore parent and an Indian resident is reported in Form FC-TRS within 60 days and must meet FEMA pricing rules.",
    ],
    "expat-visa": [
      "Singapore staff on the Indian payroll need an Employment Visa (salary floor generally USD 25,000), and FRRO registration within 14 days for stays over 180 days.",
      "Staff of Indian origin may be able to use an OCI card instead of a visa, but it does not change tax residence or provident fund rules.",
    ],
    "hiring-and-payroll": [
      "Singapore citizens employed in India are exempt from Indian provident fund under the CECA; Singapore permanent residents and other nationals are not, and there is no social security agreement.",
      "Singapore employment terms and CPF-based benefits do not carry over: Indian contracts need their own notice terms, gratuity after five years and compliance with the labour codes.",
    ],
    "common-mistakes": [
      "Assuming a Singapore holding company automatically gets treaty benefits: without real substance, the limitation of benefits and anti-avoidance rules can deny them.",
      "Treating Singapore permanent residents like citizens for EPF: only citizens are exempt under the CECA.",
      "Using an IRAS certificate of residence that does not cover the payment date when claiming treaty rates.",
    ],
    "foreign-employee-treaty-ssa": [
      "India has no social security agreement with Singapore; the CECA exempts Singapore citizens from EPF by nationality, with no certificate of coverage.",
      "CPF continues only where a Singapore employer keeps employing a Singapore citizen or PR; confirm overseas postings with the CPF Board.",
    ],
    "trade-agreement": [
      "The India-Singapore CECA (2005) covers goods, services, investment and movement of people; its third review has been open since 2018.",
      "CECA does not change FDI rules for an Indian subsidiary: sector caps, FEMA pricing and RBI reporting still apply.",
    ],
    "data-protection": [
      "Singapore's PDPA requires comparable protection for personal data sent to India, usually through contract clauses with the Indian subsidiary.",
      "India's DPDP Rules were notified in November 2025, with the main duties from 13 May 2027, so build consent and breach processes in India now.",
    ],
    gcc: [
      "Singapore headquarters often run regional finance, technology or operations teams in India as a captive centre billing the parent at cost plus a mark-up.",
      "The 30-day service PE test for associated enterprises makes travel by Singapore managers to the Indian centre worth tracking.",
    ],
    holdco: [
      "Treaty access for a Singapore holding company depends on substance: Article 24A of the treaty denies the share-gains benefit to shell or conduit companies.",
      "India's GAAR and the MLI's principal purpose test can also deny treaty benefits where obtaining them was a main purpose of the structure.",
    ],
  },
  germany: {
    "incorporation-process": [
      "A German parent's core papers are a current Handelsregister extract, the articles of association (Gesellschaftsvertrag or Satzung) and a shareholder or management board resolution approving the Indian investment.",
      "Private documents are notarised, apostilled by the competent Landgericht and then given a sworn English translation, so allow several working days on the German side before the Indian filing.",
      "India is 3.5 hours ahead of Germany in summer and 4.5 hours in winter, so digital signature, bank KYC and filing calls fit a German morning.",
    ],
    "subsidiary-vs-branch-vs-liaison-office-vs-llp": [
      "A branch office needs the German company to show a net worth of at least USD 100,000 and a five-year profit record; a liaison office needs USD 50,000 and three years.",
      "Germany does not share a land border with India, so Press Note 3's prior-approval rule does not apply, unless a beneficial owner further up the chain is from a land-border country.",
      "A subsidiary keeps Indian liabilities inside an Indian company and lets dividends reach Germany under the 95% participation exemption, which a branch's profits do not use in the same way.",
    ],
    "documents-and-apostille": [
      "Germany has no single apostille office: the Landgericht for the notary's district apostilles notarised documents, and the Landgericht of the register court apostilles Handelsregister extracts.",
      "German documents need a sworn (beeidigte) translation into English, and the translator's certificate should be kept with the apostilled original.",
      "Order the Handelsregister extract close to the filing date, because Indian authorities generally expect recent documents.",
    ],
    "funding-fema-fc-gpr": [
      "The parent usually remits EUR from its German account; the Indian bank converts it and issues the foreign inward remittance certificate, and shares must be allotted within 60 days.",
      "Press Note 3 does not apply to German investors, so most sectors stay on the Automatic Route.",
      "Interest on loans from KfW or DEG, and on Hermes-guaranteed loans, is reported as exempt in India under the treaty, which can make development-bank debt cheaper than ordinary group loans.",
    ],
    "repatriating-profits": [
      "The India-Germany treaty caps Indian tax at a flat 10% on dividends, interest, royalties and fees for technical services.",
      "A German corporation holding at least 10% exempts 95% of the dividend under Section 8b of the Corporation Tax Act, so the effective German cost is small.",
      "Claim treaty rates with a certificate of residence from the German tax office covering the payment date, plus Form 41 (previously Form 10F).",
    ],
    "transfer-pricing": [
      "German rules tax a function transfer (Funktionsverlagerung): moving a function, with its profit potential, from Germany to India can trigger an exit charge in Germany.",
      "Most German parents close on 31 December while India closes on 31 March, so the two transfer pricing years need a bridge.",
    ],
    "india-dtaa": [
      "The India-Germany DTAA was signed on 19 June 1995 and has been in force since 26 October 1996, with a flat 10% rate on dividends, interest, royalties and technical fees.",
      "Germany relieves double tax on Indian income through the participation exemption for dividends and a credit for other income, so keep Indian tax payment evidence for the German return.",
    ],
    "parent-obligations": [
      "The German parent reports the Indian holding to its tax office, applies the Section 8b participation exemption, and checks the controlled foreign company rules if Indian income is passive and lightly taxed.",
      "Groups with consolidated revenue of EUR 750 million or more also fall under the Pillar Two minimum tax rules.",
    ],
    "compliance-calendar": [
      "Most German parents close on 31 December, so the Indian audit (for the year to 31 March) and the German consolidation run on different timetables that need a bridge.",
      "The Indian FLA return to the RBI is due by 15 July every year, in the middle of a German group's half-year close.",
    ],
    "contracts-and-arbitration": [
      "Germany is not a reciprocating territory under Section 44A of the Code of Civil Procedure, so a German judgment is only a cause of action for a fresh suit in India, normally within three years.",
      "Arbitration is the safer route: a DIS or other New York Convention award made in Germany is enforceable in India as a foreign award.",
    ],
    "restructuring-and-exit": [
      "On a sale of the Indian subsidiary, India can tax the gain under its own law, while a German corporation exempts 95% of the gain under Section 8b.",
      "A transfer between the German parent and an Indian resident is reported in Form FC-TRS within 60 days and must meet FEMA pricing rules.",
    ],
    "expat-visa": [
      "German staff on the Indian payroll need an Employment Visa (salary floor generally USD 25,000), and FRRO registration within 14 days for stays over 180 days.",
      "Get the social security certificate of coverage before the posting starts, so the employee stays in German schemes from day one.",
    ],
    "hiring-and-payroll": [
      "Indian employment is contract and statute driven with no works council, but moving German work to India can need works council consultation in Germany first.",
      "German employment terms do not carry over: Indian contracts need their own notice terms, gratuity after five years and compliance with the labour codes.",
    ],
    "common-mistakes": [
      "Moving work or HR systems to India without consulting the German works council.",
      "Starting a posting before the social security certificate of coverage is issued.",
      "Missing the Landgericht apostille or the sworn translation, which sends documents back to Germany.",
    ],
    "foreign-employee-treaty-ssa": [
      "The India-Germany Social Security Agreement, signed on 8 October 2008 and applied from 1 October 2009, lets a posted employee stay in German schemes for up to 48 months, extendable by 12 months.",
      "The certificate of coverage comes from the German side and should be obtained before the posting starts.",
    ],
    "trade-agreement": [
      "India and the EU concluded a free trade agreement on 27 January 2026; it is not yet in force and has no investment protection chapter.",
      "The agreement does not change FDI rules for an Indian subsidiary: sector caps, FEMA pricing and RBI reporting still apply.",
    ],
    "data-protection": [
      "There is no GDPR adequacy decision for India, so personal data sent to the Indian subsidiary needs the 2021 standard contractual clauses or binding corporate rules, plus a transfer impact assessment.",
      "The works council has a co-determination right over technical systems that can monitor staff, so group HR and collaboration tools used in India can need a works council agreement in Germany.",
    ],
    gcc: [
      "German groups often run engineering, IT or finance teams in India as a captive centre billing the parent at cost plus a mark-up.",
      "Moving a function from Germany to the Indian centre can be a taxable function transfer in Germany, so document what moves and why.",
    ],
    "esg-supply-chain": [
      "The German Supply Chain Due Diligence Act (LkSG) applies to companies with 1,000 or more employees in Germany and covers risk analysis of their own Indian operations and Indian suppliers.",
      "Indian exporters of steel, aluminium, cement, fertiliser, electricity and hydrogen to the EU face CBAM reporting, and EU sustainability reporting can pull Indian subsidiary data into the group report.",
    ],
  },
  china: {
    "incorporation-process": [
      "Government approval under Press Note 3 comes before incorporation, because China shares a land border with India. Plan the Chinese outbound filings (NDRC, MOFCOM and SAFE) on the same timeline.",
      "A Chinese citizen proposed as a director needs security clearance from the Ministry of Home Affairs, so many groups appoint an Indian resident director first.",
      "India is 2.5 hours behind China, so digital signature, bank KYC and filing calls fit a Chinese afternoon.",
    ],
    "subsidiary-vs-branch-vs-liaison-office-vs-llp": [
      "Every structure needs approval for the Chinese stake: a subsidiary or JV under Press Note 3, and a branch or liaison office through the RBI with a land-border security review.",
      "Holding India through a Hong Kong, Singapore or other third-country company does not avoid Press Note 3 where the beneficial owner is Chinese.",
      "In the fast-track manufacturing sectors, Indian majority ownership and control is reportedly expected, which makes a joint venture the usual route.",
    ],
    "documents-and-apostille": [
      "The Apostille Convention does not apply between China and India, because India objected to China's accession on 8 September 2023.",
      "Chinese documents follow a three-step chain: a Chinese notary, authentication by the Ministry of Foreign Affairs or a provincial foreign affairs office, and attestation by the Indian Embassy in Beijing or the Consulate in Shanghai or Guangzhou.",
      "Chinese documents need an English translation, certified or notarised as the Registrar and the bank require.",
    ],
    "funding-fema-fc-gpr": [
      "No money can be remitted for shares until the Press Note 3 approval is granted, and the Chinese side needs its approvals and SAFE registration through the bank first.",
      "Allot shares within 60 days of receiving the funds and file FC-GPR within 30 days of allotment, and track any conditions in the approval letter.",
    ],
    "repatriating-profits": [
      "The India-China treaty caps Indian tax at 10% on dividends, interest, royalties and fees for technical services.",
      "Claim treaty rates with a Chinese tax residence certificate, Form 41 (previously Form 10F) and a no-PE declaration.",
      "Related-party payments to China draw extra questions from banks and tax officers, so keep the agreements and evidence of services ready.",
    ],
    "transfer-pricing": [
      "Components, machinery and technology from China are the usual intercompany flows, and the transfer price of imported goods should match the customs value declared at the border.",
      "Most Chinese parents close on 31 December while India closes on 31 March, so the two transfer pricing years need a bridge.",
    ],
    "india-dtaa": [
      "The India-China DTAA was signed on 18 July 1994 and amended by the 2018 protocol, with a 10% rate on dividends, interest, royalties and fees for technical services.",
      "Services through employees create a permanent establishment after 183 days, so track the days Chinese engineers spend in India.",
    ],
    "parent-obligations": [
      "The Chinese parent needs NDRC approval or filing, MOFCOM approval or filing and SAFE registration for the overseas investment, with new State Council outbound rules reported effective 1 July 2026.",
      "China taxes the parent at 25% on worldwide income with credit for Indian tax, and state-owned groups face extra supervision.",
    ],
    "compliance-calendar": [
      "Most Chinese parents close on 31 December, so the Indian audit (for the year to 31 March) and the Chinese consolidation run on different timetables.",
      "Track the reporting and shareholding conditions in the Press Note 3 approval letter alongside the usual ROC, tax and FEMA dates.",
    ],
    "contracts-and-arbitration": [
      "India notified China, Hong Kong and Macao under the New York Convention on 19 March 2012, so arbitration awards made there from that date can be enforced in India.",
      "Mainland China is not a reciprocating territory under Section 44A of the Code of Civil Procedure, so a Chinese court judgment needs a fresh suit in India.",
    ],
    "restructuring-and-exit": [
      "A buyer from a land-border country also needs approval, and the exit must not breach the conditions of the original Press Note 3 approval.",
      "The Chinese parent must update its overseas investment filings on a disposal, and China taxes the gain with credit for Indian tax.",
    ],
    "expat-visa": [
      "Chinese nationals typically need an additional security review for visas, so plan for delay, and a business visa does not allow hands-on installation work.",
      "Employment visas need a salary above USD 25,000 a year, and FRRO registration is due within 14 days of arrival for stays over 180 days.",
    ],
    "hiring-and-payroll": [
      "Indian employment runs on written contracts, the labour codes, provident fund, ESI and gratuity, with no carry-over of Chinese social insurance terms.",
      "Factories need clean wage, PF and contract-labour records, because Chinese-owned units draw closer inspection.",
    ],
    "common-mistakes": [
      "Remitting money or incorporating before the Press Note 3 approval is granted.",
      "Getting Chinese documents apostilled instead of notarised, authenticated and attested by the Indian mission.",
      "Using a Hong Kong or Singapore company to hide Chinese beneficial ownership.",
    ],
    "foreign-employee-treaty-ssa": [
      "India and China have no social security agreement, so Chinese staff on the Indian payroll generally fall under the international worker provident fund rules.",
      "Salary for work done in India is taxed in India, with treaty relief only if all three Article 15 conditions are met.",
    ],
    "data-protection": [
      "Exporting personal data from China needs a security assessment, a filed standard contract or certification, depending on the volume and type of data.",
      "India's DPDP Rules were notified in November 2025 with the main duties from 13 May 2027, and Chinese-linked apps also face blocking under Section 69A of the IT Act.",
    ],
    "press-note-3": [
      "Any investor from China, or with a Chinese beneficial owner, needs prior Government approval in every sector, whatever the amount.",
      "The 2026 amendment lets a non-land-border investor with up to 10% non-controlling Chinese beneficial ownership use the Automatic Route, but a Chinese-incorporated investor still needs approval.",
    ],
    "manufacturing-jv": [
      "A 60-day approval target is reported for capital goods, electronic components, polysilicon and ingot-wafer, with Indian majority ownership and control expected.",
      "Production-linked incentive schemes have their own eligibility rules and can scrutinise Chinese-linked applicants, so check each scheme before relying on it.",
    ],
    "restricted-sectors": [
      "Bidders from land-border countries must register with a competent authority before bidding for central government contracts.",
      "Telecom, critical infrastructure and app businesses face trusted-source rules, security reviews and possible blocking, on top of anti-dumping duties on many imports from China.",
    ],
  },
  hongkong: {
    "incorporation-process": [
      "Press Note 3 approval is expected before incorporation and funding, because Hong Kong-registered investors are treated with China under India's land-border rules.",
      "A director who is a citizen of a land-border country needs Ministry of Home Affairs clearance first, so many groups appoint an Indian resident director at the start.",
      "India is 2.5 hours behind Hong Kong, so digital signature, bank KYC and filing calls fit a Hong Kong afternoon.",
    ],
    "subsidiary-vs-branch-vs-liaison-office-vs-llp": [
      "A Hong Kong company is still treated as a land-border investor, so a subsidiary or JV needs Press Note 3 approval and a branch or liaison office goes through the RBI with a security review.",
      "Map the full ownership chain behind the Hong Kong company first: the approval question turns on where the company is registered and who its beneficial owners are.",
    ],
    "documents-and-apostille": [
      "Hong Kong applies the Apostille Convention in its own right, with apostilles issued by the High Court registry. India's 2023 objection covered only mainland China's accession.",
      "Confirm with the Registrar and the bank that a Hong Kong apostille will be accepted; legalisation through the Indian Consulate General in Hong Kong is the fallback.",
      "Hong Kong company documents are usually in English, so translation is needed only for Chinese-language papers.",
    ],
    "funding-fema-fc-gpr": [
      "No money can be remitted for shares until the Press Note 3 approval is granted. Hong Kong has no exchange controls or outbound approvals of its own.",
      "Allot shares within 60 days of receiving the funds and file FC-GPR within 30 days of allotment, and track any conditions in the approval letter.",
    ],
    "repatriating-profits": [
      "The India-Hong Kong treaty caps Indian tax at 5% on dividends and 10% on interest, royalties and fees for technical services.",
      "Claim treaty rates with a Tax Residency Certificate from the Hong Kong Inland Revenue Department, Form 41 (previously Form 10F) and a beneficial ownership and no-PE declaration, and expect the anti-abuse test to be applied.",
    ],
    "transfer-pricing": [
      "Hong Kong trading and procurement hubs are the usual intercompany counterparty, so the Indian file must show what the hub actually does and earns.",
      "The transfer price of goods bought through Hong Kong should match the customs value declared at the Indian border.",
    ],
    "india-dtaa": [
      "The India-Hong Kong DTAA was signed on 19 March 2018 and applies in India from 1 April 2019: 5% on dividends and 10% on interest, royalties and fees for technical services.",
      "Services through employees create a permanent establishment after 183 days, and a principal purpose test can deny benefits to structures set up mainly for the treaty.",
    ],
    "parent-obligations": [
      "Hong Kong taxes profits at 8.25% on the first HK$2 million and 16.5% above, on a territorial basis, with the FSIE regime covering foreign-sourced dividends and gains.",
      "Large groups also fall under Hong Kong's Pillar Two minimum top-up tax, so the Indian subsidiary's effective tax rate feeds the group calculation.",
    ],
    "compliance-calendar": [
      "Hong Kong parents often close on 31 December or 31 March, so check whether the Indian 31 March year lines up with the group.",
      "Track the reporting and shareholding conditions in the Press Note 3 approval letter alongside the usual ROC, tax and FEMA dates.",
    ],
    "contracts-and-arbitration": [
      "Hong Kong is a reciprocating territory under Section 44A of the Code of Civil Procedure, so its superior court judgments can be executed in India, unlike mainland China's.",
      "HKIAC awards are enforceable in India under the New York Convention, following India's 2012 notification covering Hong Kong.",
    ],
    "restructuring-and-exit": [
      "A buyer from a land-border country also needs approval, and the exit must not breach the conditions of the original Press Note 3 approval.",
      "Hong Kong does not tax capital gains, but India taxes the gain on Indian shares, so plan the Indian withholding and filings.",
    ],
    "expat-visa": [
      "Employment visas need a salary above USD 25,000 a year, and FRRO registration is due within 14 days of arrival for stays over 180 days.",
      "Processing differs by passport: Hong Kong SAR passport holders are treated differently from other passport holders, and land-border citizens face extra security checks, so confirm with the Indian mission before fixing a start date.",
    ],
    "hiring-and-payroll": [
      "Indian employment runs on written contracts, the labour codes, provident fund, ESI and gratuity, with no carry-over of Hong Kong employment terms or MPF.",
    ],
    "common-mistakes": [
      "Assuming a Hong Kong company is outside Press Note 3 and remitting money before approval.",
      "Treating Hong Kong like mainland China on documents and courts: Hong Kong uses the apostille and is a Section 44A reciprocating territory.",
      "Re-invoicing goods through Hong Kong and assuming the origin, and the duty, changes.",
    ],
    "foreign-employee-treaty-ssa": [
      "India and Hong Kong have no social security agreement, so Hong Kong staff on the Indian payroll generally fall under the international worker provident fund rules.",
      "MPF is 5% each from employer and employee on income up to HK$30,000 a month, and a secondee employed in Hong Kong generally stays in MPF, so budget for MPF and Indian provident fund together.",
    ],
    "data-protection": [
      "Section 33 of the PDPO, on cross-border transfers, is not in force, but the Privacy Commissioner recommends model clauses and due diligence.",
      "India's DPDP Rules were notified on 13 November 2025 with the main duties from 13 May 2027, and transfers from India are allowed except to restricted countries.",
    ],
    "press-note-3": [
      "Firms registered in Hong Kong are expected to need prior Government approval, whatever the ownership behind them, because Hong Kong is treated with China.",
      "Approval also turns on beneficial ownership, so map every shareholder above the Hong Kong company before you apply.",
    ],
    holdco: [
      "A Hong Kong holding, trading or treasury company is taxed on a territorial basis, but India looks through to substance and the treaty's anti-abuse test.",
      "Holding India through Hong Kong does not avoid Press Note 3, and the hub's role must match its transfer pricing and customs position.",
    ],
    "trade-origin": [
      "Indian customs looks at where goods were made or last substantially transformed, so re-invoicing or transhipping through Hong Kong does not change their origin.",
      "India has no free trade agreement with Hong Kong, and anti-dumping duties on Chinese-origin goods follow the origin whichever route the goods take.",
    ],
  },
  russia: {
    "incorporation-process": [
      "Press Note 3 does not apply to Russia, so most sectors use the Automatic Route, unless a land-border country beneficial owner sits in the ownership chain.",
      "Opening the Indian bank account is usually the slowest step: banks apply enhanced due diligence to Russian-owned companies, so prepare the ownership chart and source of funds early.",
      "India is 2.5 hours ahead of Moscow, so digital signature, bank KYC and filing calls fit a Moscow morning.",
    ],
    "subsidiary-vs-branch-vs-liaison-office-vs-llp": [
      "A Russian company can use the Automatic Route for a subsidiary in most sectors; a branch or liaison office still goes through the RBI.",
      "On the Russian side, Bank of Russia approval is reported to be needed for share investments above RUB 30 million per counterparty, so size the first tranche with that in mind.",
    ],
    "documents-and-apostille": [
      "Russia and India are both parties to the Apostille Convention, so Russian documents need a notary and an apostille, not consular legalisation.",
      "Russian documents need a certified English translation, normally notarised, and names must be transliterated exactly as in passports.",
    ],
    "funding-fema-fc-gpr": [
      "Choose a remitting bank the Indian bank will accept: many Russian banks are sanctioned or cut off from SWIFT.",
      "Allot shares within 60 days of receiving the funds and file FC-GPR within 30 days of allotment, with source-of-funds evidence for every inflow.",
    ],
    "repatriating-profits": [
      "The India-Russia treaty caps Indian tax at 10% on dividends, interest, royalties and fees for technical services.",
      "Claim treaty rates with a tax residency certificate from the Russian Federal Tax Service, Form 41 (previously Form 10F) and a beneficial ownership and no-PE declaration, and check the payment route before declaring the dividend.",
    ],
    "transfer-pricing": [
      "Most Russian parents report on the calendar year while India closes on 31 March, so the two transfer pricing years need a bridge.",
      "Service, engineering and supply-chain charges to Russia draw bank and tax questions, so keep agreements and evidence of the work ready.",
    ],
    "india-dtaa": [
      "The India-Russia DTAA was signed on 25 March 1997 and in force from 11 April 1998: 10% on dividends, interest, royalties and fees for technical services.",
      "A building or installation project creates a permanent establishment after 12 months, and gains on shares of an Indian company are taxable in India.",
    ],
    "parent-obligations": [
      "Bank of Russia approval is reported to be needed above RUB 30 million per counterparty from 1 July 2026, alongside currency control rules and tax notifications of foreign participations.",
      "Russia's controlled foreign company rules can tax the Indian subsidiary's profits, and the profit tax rate is reported at 25% from 2025.",
    ],
    "compliance-calendar": [
      "Russian parents report on the calendar year, so the Indian audit for the year to 31 March runs on a different timetable.",
      "Re-screen owners and counterparties against sanctions lists at least quarterly and refresh bank KYC alongside the usual ROC, tax and FEMA dates.",
    ],
    "contracts-and-arbitration": [
      "Russia is not known to be a reciprocating territory under Section 44A of the Code of Civil Procedure, so a Russian court judgment needs a fresh suit in India.",
      "Russian law can give Russian courts exclusive jurisdiction over sanctions-related disputes, so take advice on the arbitration clause and seat.",
    ],
    "restructuring-and-exit": [
      "Sale proceeds have to reach Russia through a bank and route both sides accept, so plan the payment channel before signing.",
      "Gains on shares of an Indian company are taxable in India under the treaty, so plan the Indian withholding and filings.",
    ],
    "expat-visa": [
      "Russian nationals do not need the land-border security clearance; employment visas need a salary above USD 25,000 a year.",
      "FRRO registration is due within 14 days of arrival for stays over 180 days.",
    ],
    "hiring-and-payroll": [
      "Indian employment runs on written contracts, the labour codes, provident fund, ESI and gratuity, with no carry-over of Russian employment terms.",
    ],
    "common-mistakes": [
      "Treating the Indian FDI rule as the hurdle, when banking access and sanctions screening are what actually decide the timeline.",
      "Remitting through a bank the Indian bank will not accept.",
      "Missing Bank of Russia approval or currency control filings on the Russian side.",
    ],
    "foreign-employee-treaty-ssa": [
      "India and Russia have no social security agreement, so Russian staff on the Indian payroll generally fall under the international worker provident fund rules.",
      "Russian contributions may continue under Russian law, so budget for both systems.",
    ],
    "data-protection": [
      "Russia's 152-FZ requires initial collection and storage of Russian citizens' personal data in Russia, and notice to Roskomnadzor before cross-border transfers.",
      "India's DPDP Rules were notified on 13 November 2025 with the main duties from 13 May 2027.",
    ],
    "trade-agreement": [
      "No India-Russia trade agreement is in force; India and the Eurasian Economic Union are negotiating a free trade agreement.",
      "Dual-use, technology and financing restrictions can bar a supply even where Indian law allows it.",
    ],
    "fdi-rules": [
      "Press Note 3 covers investors from countries sharing a land border with India; Russia is not one.",
      "A land-border country beneficial owner in the Russian company can still bring the investment under approval, and sector caps apply as for any investor.",
    ],
    "sanctions-payments": [
      "Indian law does not single out Russia, but US, EU and UK sanctions lists drive bank, insurer and counterparty decisions.",
      "Rupee vostro accounts and third-currency settlement exist, but they are not a sanctions safe harbour: get specialist sanctions advice before structuring.",
    ],
  },
  spain: {
    "incorporation-process": [
      "Press Note 3 does not apply to Spanish investors, so most sectors use the Automatic Route, and incorporation through SPICe+ takes two to three weeks from a complete file.",
      "India is 3.5 hours ahead of Spain in summer and 4.5 hours in winter, so signature and bank calls fit a Spanish morning.",
    ],
    "subsidiary-vs-branch-vs-liaison-office-vs-llp": [
      "A Spanish company can own 100% of an Indian subsidiary under the Automatic Route in most sectors; a branch or liaison office still goes through the RBI.",
    ],
    "documents-and-apostille": [
      "Spain and India are both parties to the Apostille Convention: public documents are apostilled, and private documents such as board resolutions are notarised first.",
      "Spanish documents need a sworn translation into English, and names and NIE or DNI numbers must match across every document.",
    ],
    "funding-fema-fc-gpr": [
      "Allot shares within 60 days of receiving the money and file FC-GPR within 30 days of allotment.",
      "On the Spanish side, Form D-5A is due within one month for investments of 10% or more.",
    ],
    "repatriating-profits": [
      "The India-Spain treaty caps Indian tax at 15% on dividends and interest, and 10% on royalties and fees for technical services.",
      "Claim treaty rates with a tax residency certificate from the Agencia Tributaria, Form 41 (previously Form 10F), and beneficial ownership and no-PE declarations, citing the MFN clause where the 10% rate is claimed.",
    ],
    "transfer-pricing": [
      "Keep the Indian transfer pricing documentation and Form 3CEB aligned with the Spanish group's related-party files.",
    ],
    "india-dtaa": [
      "The India-Spain DTAA was signed on 8 February 1993 and in force from 12 January 1995, amended in 2012 and modified by the MLI.",
      "Royalties and fees for technical services are taxed at 10% through the most-favoured-nation clause, from assessment year 2024-25.",
    ],
    "parent-obligations": [
      "No prior approval is needed for ordinary investments abroad, but Form D-5A is due within one month and Form D-8 annually where thresholds are met.",
      "Spain's general corporate income tax rate is 25%, with participation exemption rules for qualifying foreign dividends.",
    ],
    "compliance-calendar": [
      "The Spanish D-8 report falls within seven months of the Indian company's year end, alongside the Spanish corporate tax return.",
    ],
    "contracts-and-arbitration": [
      "Spanish groups usually choose arbitration seated in Madrid, Singapore, London or Paris, enforced under the New York Convention.",
      "Confirm whether Spain is notified as a reciprocating territory before relying on enforcing a Spanish court judgment in India.",
    ],
    "restructuring-and-exit": [
      "File Form D-5B in Spain on a disposal, and plan the Indian withholding on any gain on the Indian shares.",
    ],
    "expat-visa": [
      "Employment visas need a salary above USD 25,000 a year, and FRRO registration is due within 14 days of arrival for stays over 180 days.",
      "Spain exempts income from work abroad up to EUR 60,100 a year if its conditions are met.",
    ],
    "hiring-and-payroll": [
      "Indian employment runs on written contracts, the labour codes, provident fund, ESI and gratuity, with no carry-over of Spanish employment terms.",
    ],
    "foreign-employee-treaty-ssa": [
      "No India-Spain social security agreement is in operation, so Spanish staff on the Indian payroll generally fall under the international worker provident fund rules.",
      "Spanish personal income tax exempts income from work abroad for a non-resident entity up to EUR 60,100 a year, subject to conditions.",
    ],
    "data-protection": [
      "There is no EU adequacy decision for India, so transfers from Spain usually rely on standard contractual clauses plus a transfer impact assessment.",
      "The Spanish regulator is the Agencia Española de Protección de Datos, and India's DPDP duties start from 13 May 2027.",
    ],
    "trade-agreement": [
      "The India-EU agreement was concluded on 27 January 2026, with signature expected in December 2026 and entry into force reported for early 2027.",
      "Until it is in force, current Indian duties apply, so don't price a project on tariff cuts yet.",
    ],
    "setup-cost": [
      "Spanish-side costs include notarisation, apostille and sworn translation of the parent's documents.",
      "AU Corporate's set-up fee is USD 750 to USD 1,000 for share capital up to INR 10 lakh, covering the incorporation work.",
    ],
    "setup-timeline": [
      "Spanish documents and the apostille usually take 2 to 4 weeks from final drafts, and the bank account is often the longest step.",
    ],
    "resident-director": [
      "Spanish groups usually choose between relocating a Spanish executive, an Indian managing director or a professional resident director.",
    ],
  },
}

/** Country facts shown as a profile table on each country's hub page. */
export const COUNTRY_PROFILE: Record<GuideCountryKey, [string, string][]> = {
  usa: [
    ["Tax treaty", "India-US DTAA: 15% on dividends (10%+ voting power; 25% otherwise), 10% to 15% on interest, 15% on royalties and fees for included services (10% for equipment)"],
    ["Service permanent establishment", "More than 90 days of services in India in any 12-month period"],
    ["Tax residency certificate", "IRS Form 6166, with Form 41 (previously Form 10F)"],
    ["Social security agreement", "None: secondees can face Indian provident fund and US Social Security"],
    ["Apostille", "Secretary of State of the issuing or notarizing state; US Department of State for federal documents"],
    ["Parent's financial year", "Usually 31 December, against India's 31 March"],
    ["Time difference", "India is 9.5 to 13.5 hours ahead of the mainland US"],
    ["Court judgments", "The US is not a reciprocating territory under Section 44A CPC; arbitration awards are enforceable under the New York Convention"],
    ["FDI route", "Automatic Route in most sectors; Press Note 3 does not apply"],
  ],
  australia: [
    ["Tax treaty", "India-Australia DTAA (1991, amended 2011): 15% on dividends, interest and royalties (10% for equipment)"],
    ["Service permanent establishment", "More than 183 days of services in India in any 12-month period"],
    ["Tax residency certificate", "ATO certificate of residency, with Form 41 (previously Form 10F)"],
    ["Social security agreement", "In force since 1 January 2016: an ATO certificate of coverage keeps secondees in superannuation for up to five years"],
    ["Apostille", "DFAT, one federal process"],
    ["Parent's financial year", "30 June, against India's 31 March"],
    ["Time difference", "India is 4.5 to 5.5 hours behind Australian east coast time"],
    ["Trade agreement", "India-Australia ECTA, in force since 29 December 2022 (goods tariffs; FDI rules unchanged)"],
    ["FDI route", "Automatic Route in most sectors; Press Note 3 does not apply"],
  ],
  uk: [
    ["Tax treaty", "India-UK DTAA (1993): 10% on dividends (15% for certain property vehicles), 15% on interest (10% for banks), 15% on royalties and technical fees (10% for equipment)"],
    ["Service permanent establishment", "A 90-day services test, much shorter than in many treaties"],
    ["Tax residency certificate", "HMRC certificate of residence, with Form 41 (previously Form 10F)"],
    ["Social security agreement", "India-UK Double Contributions Convention, in force since 15 July 2026: a certificate of coverage keeps temporary assignees in their home scheme"],
    ["Apostille", "FCDO Legalisation Office, one UK process, with e-apostilles available"],
    ["Parent's financial year", "Usually 31 March, the same as India"],
    ["Time difference", "India is 4.5 hours ahead of the UK in summer and 5.5 hours in winter"],
    ["Court judgments", "The UK is a reciprocating territory under Section 44A CPC: UK superior court money judgments can be executed in India"],
    ["Trade agreement", "India-UK CETA, in force since 15 July 2026"],
    ["Data transfers", "No UK adequacy for India: use the International Data Transfer Agreement or the UK Addendum"],
    ["FDI route", "Automatic Route in most sectors; Press Note 3 does not apply"],
  ],
  japan: [
    ["Tax treaty", "India-Japan DTAA (1989, amended by the 2006 protocol): 10% on dividends, interest, royalties and fees for technical services"],
    ["Permanent establishment", "Fixed place, dependent agents, and construction or installation projects beyond the treaty period"],
    ["Tax residency certificate", "Certificate of Residence from the Japanese tax office, with Form 41 (previously Form 10F)"],
    ["Social security agreement", "In force since 1 October 2016: a Certificate of Coverage keeps seconded staff in Japanese pension insurance for up to five years"],
    ["Apostille", "Ministry of Foreign Affairs of Japan; private documents are notarized and certified by the Legal Affairs Bureau first"],
    ["Parent's financial year", "Usually 31 March, the same as India; some groups close on 31 December"],
    ["Time difference", "India is 3.5 hours behind Japan all year"],
    ["Court judgments", "Japan is not a reciprocating territory under Section 44A CPC; arbitration awards are enforceable under the New York Convention"],
    ["Trade agreement", "India-Japan CEPA, in force since 1 August 2011"],
    ["FDI route", "Automatic Route in most sectors; Press Note 3 does not apply"],
  ],
  singapore: [
    ["Tax treaty", "India-Singapore DTAA (1994, with protocols and the MLI): 10% on dividends for a 25% holding (15% otherwise), 10% or 15% on interest, 10% on royalties and technical fees"],
    ["Service permanent establishment", "More than 90 days of services in a fiscal year, or 30 days for services to an associated enterprise"],
    ["Share gains", "India can tax gains on shares acquired on or after 1 April 2017; Singapore has no capital gains tax"],
    ["Tax residency certificate", "IRAS certificate of residence, with Form 41 (previously Form 10F)"],
    ["Social security", "No agreement; Singapore citizens are exempt from Indian EPF under the CECA"],
    ["Apostille", "Singapore Academy of Law, since 16 September 2021"],
    ["Parent's financial year", "Usually 31 December, against India's 31 March"],
    ["Time difference", "India is 2.5 hours behind Singapore"],
    ["Court judgments", "Singapore is a reciprocating territory under Section 44A CPC; SIAC awards are enforceable under the New York Convention"],
    ["Trade agreement", "India-Singapore CECA, in force since 2005"],
    ["FDI route", "Automatic Route in most sectors; Press Note 3 does not apply"],
  ],
  germany: [
    ["Tax treaty", "India-Germany DTAA (signed 19 June 1995, in force 26 October 1996): a flat 10% on dividends, interest, royalties and fees for technical services"],
    ["German tax on dividends", "95% exempt under Section 8b of the Corporation Tax Act for a corporation holding at least 10%"],
    ["Tax residency certificate", "Certificate of residence from the German tax office, with Form 41 (previously Form 10F)"],
    ["Social security agreement", "Applied from 1 October 2009: a certificate of coverage keeps posted staff in German schemes for up to 48 months, plus 12"],
    ["Apostille", "The Landgericht for the notary's district, or of the register court for Handelsregister extracts; sworn translation needed"],
    ["Parent's financial year", "Usually 31 December, against India's 31 March"],
    ["Time difference", "India is 3.5 hours ahead of Germany in summer and 4.5 hours in winter"],
    ["Court judgments", "Germany is not a reciprocating territory under Section 44A CPC; arbitration awards are enforceable under the New York Convention"],
    ["Trade agreement", "India-EU FTA concluded on 27 January 2026, not yet in force"],
    ["Data transfers", "No GDPR adequacy for India: 2021 standard contractual clauses or binding corporate rules, plus a transfer impact assessment"],
    ["FDI route", "Automatic Route in most sectors; Press Note 3 does not apply"],
  ],
  china: [
    ["Investment approval", "Press Note 3: prior Government approval for any investment by a Chinese entity or with a Chinese beneficial owner"],
    ["Tax treaty", "India-China DTAA (1994, amended by the 2018 protocol): 10% on dividends, interest, royalties and fees for technical services"],
    ["Service permanent establishment", "Services through employees for more than 183 days"],
    ["Tax residency certificate", "Chinese tax residence certificate, with Form 41 (previously Form 10F)"],
    ["Social security agreement", "None"],
    ["Documents", "No apostille between China and India: notary, Chinese authentication and Indian Embassy attestation"],
    ["Directors", "Chinese citizens need Ministry of Home Affairs security clearance"],
    ["Parent's financial year", "31 December, against India's 31 March"],
    ["Time difference", "India is 2.5 hours behind China"],
    ["Court judgments", "China is not a reciprocating territory under Section 44A CPC; awards from China, Hong Kong and Macao are enforceable under the New York Convention"],
    ["Chinese outbound filings", "NDRC, MOFCOM and SAFE approvals or filings before the money leaves China"],
  ],
  hongkong: [
    ["Investment approval", "Press Note 3: prior Government approval is expected for a Hong Kong-registered investor"],
    ["Tax treaty", "India-Hong Kong DTAA (signed 2018, in force 30 November 2018, effective in India from 1 April 2019): 5% on dividends, 10% on interest, royalties and fees for technical services"],
    ["Service permanent establishment", "Services through employees for more than 183 days"],
    ["Tax residency certificate", "Tax Residency Certificate from the Hong Kong Inland Revenue Department, with Form 41 (previously Form 10F)"],
    ["Social security agreement", "None; MPF is 5% each on income up to HK$30,000 a month"],
    ["Documents", "Hong Kong notary and High Court apostille; consular legalisation as fallback"],
    ["Directors", "Citizens of land-border countries need Ministry of Home Affairs clearance"],
    ["Parent's financial year", "Often 31 December or 31 March, against India's 31 March"],
    ["Time difference", "India is 2.5 hours behind Hong Kong"],
    ["Court judgments", "Hong Kong is a reciprocating territory under Section 44A CPC; HKIAC awards are enforceable under the New York Convention"],
    ["Trade agreement", "None; goods keep their country of origin when routed through Hong Kong"],
  ],
  russia: [
    ["Investment approval", "Automatic Route in most sectors; Press Note 3 does not apply to Russia by nationality"],
    ["Tax treaty", "India-Russia DTAA (signed 1997, in force 11 April 1998): 10% on dividends, interest, royalties and fees for technical services"],
    ["Project permanent establishment", "Building or installation projects over 12 months"],
    ["Tax residency certificate", "Tax residency certificate from the Russian Federal Tax Service, with Form 41 (previously Form 10F)"],
    ["Social security agreement", "None"],
    ["Documents", "Russian notary, apostille and certified English translation"],
    ["Banking", "Enhanced due diligence by Indian banks; remit through a bank the Indian bank accepts"],
    ["Parent's financial year", "Calendar year, against India's 31 March"],
    ["Time difference", "India is 2.5 hours ahead of Moscow"],
    ["Court judgments", "Russia is not known to be a reciprocating territory under Section 44A CPC"],
    ["Russian outbound approvals", "Bank of Russia approval reported above RUB 30 million per counterparty; currency control and tax notifications"],
  ],
  spain: [
    ["Investment approval", "Automatic Route in most sectors; Press Note 3 does not apply"],
    ["Tax treaty", "India-Spain DTAA (in force 12 January 1995, amended 2012): 15% on dividends and interest, 10% on royalties and fees for technical services"],
    ["Construction permanent establishment", "Building, construction or assembly projects over six months"],
    ["Tax residency certificate", "Tax residency certificate from the Agencia Tributaria, with Form 41 (previously Form 10F)"],
    ["Social security agreement", "None in operation"],
    ["Documents", "Spanish notary, apostille and sworn translation into English"],
    ["Spanish declarations", "Form D-5A within one month for 10% or more; Form D-8 annually where thresholds are met"],
    ["Time difference", "India is 3.5 hours ahead of Spain in summer and 4.5 hours in winter"],
    ["Data transfers", "No EU adequacy for India: standard contractual clauses and a transfer impact assessment"],
    ["Trade agreement", "India-EU agreement concluded 27 January 2026, not yet in force"],
  ],
}
