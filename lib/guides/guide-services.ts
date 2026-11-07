/**
 * Maps every country guide page to the AU Corporate service that actually
 * delivers what the guide explains, plus a real case study as proof. Used by
 * GuideServiceBox (visible HTML) and GuideArticleSchema (Article.about →
 * Service), so search engines and AI assistants read each guide as backed by
 * a service AU Corporate provides, not as information alone.
 */

const SITE = "https://www.theaucorp.com"

export type GuideServiceKey = "subsidiary" | "fema" | "tax" | "payroll" | "accounting" | "secretarial" | "gcc"

type CaseRef = { href: string; label: string }

export type GuideService = {
  key: GuideServiceKey
  name: string
  path: string
  blurb: string
  caseStudy: CaseRef
}

const CASE_SUBSIDIARY: CaseRef = {
  href: "/case-studies/us-longevity-company-india-subsidiary-14-days",
  label: "An Indian subsidiary incorporated in 14 days",
}
const CASE_FEMA: CaseRef = {
  href: "/case-studies/china-subsidiary-fema-compounding",
  label: "14 FEMA contraventions compounded by the RBI",
}
const CASE_CAPTIVE: CaseRef = {
  href: "/case-studies/us-saas-captive-centre-india",
  label: "Finance and HR for a 40+ person Indian team since 2018",
}

export const GUIDE_SERVICES: Record<GuideServiceKey, GuideService> = {
  subsidiary: {
    key: "subsidiary",
    name: "India Subsidiary Registration",
    path: "/india-subsidiary-registration",
    blurb:
      "We incorporate the Indian company for you: structure and FDI check, name approval, DIN and digital signatures, MCA filing, PAN and TAN, bank account, share issue to the parent and the FC-GPR filing with the RBI.",
    caseStudy: CASE_SUBSIDIARY,
  },
  fema: {
    key: "fema",
    name: "FEMA and RBI Compliance",
    path: "/fema-rbi-compliance",
    blurb:
      "We handle the money moving in and out: share valuation, FC-GPR and FC-TRS, ECB and loan reporting, the annual FLA return, dividend and fee remittances, and compounding when an earlier filing was missed.",
    caseStudy: CASE_FEMA,
  },
  tax: {
    key: "tax",
    name: "Corporate Tax, GST and Transfer Pricing",
    path: "/corporate-tax-gst-transfer-pricing",
    blurb:
      "We run the subsidiary's tax: income tax and TDS returns, GST registration and filing, treaty relief and withholding on payments abroad, the transfer pricing report and Form 3CEB, and replies to tax and GST notices.",
    caseStudy: CASE_CAPTIVE,
  },
  payroll: {
    key: "payroll",
    name: "Payroll, PF, ESI and Expat Services",
    path: "/payroll-expat-services",
    blurb:
      "We run Indian payroll and the people filings: monthly salary processing, PF, ESI and professional tax, TDS on salaries, expat tax and visa paperwork, and social security certificates for staff sent from abroad.",
    caseStudy: CASE_CAPTIVE,
  },
  accounting: {
    key: "accounting",
    name: "Accounting, Reporting and Audit Support",
    path: "/accounting-reporting-audit-support",
    blurb:
      "We keep the books and the parent's reporting pack: monthly bookkeeping and reconciliations, MIS in your group format, statutory audit coordination, internal financial controls and support for the group auditor.",
    caseStudy: CASE_CAPTIVE,
  },
  secretarial: {
    key: "secretarial",
    name: "Secretarial and ROC Compliance",
    path: "/secretarial-roc-compliance",
    blurb:
      "We keep the company in good standing: board and shareholder meetings, statutory registers, director KYC, annual AOC-4 and MGT-7 filings, and the event-based ROC forms that follow changes in directors, shares or address.",
    caseStudy: CASE_SUBSIDIARY,
  },
  gcc: {
    key: "gcc",
    name: "GCC Setup in India",
    path: "/gcc-setup-india",
    blurb:
      "We set up and run captive and global capability centres: entity choice, location, cost-plus transfer pricing, SEZ or STPI registration, payroll and the compliance calendar for a growing Indian team.",
    caseStudy: CASE_CAPTIVE,
  },
}

/** Ordered rules: first match on the topic slug wins. */
const RULES: [RegExp, GuideServiceKey][] = [
  [/gcc-for-/, "gcc"],
  [/funding|fema|share-valuation|press-note|fdi-rules|sanctions|repatriat|exit|restructur|esop/, "fema"],
  [/hiring|relocate|employees-in-india|expat|foreign-employee|labour-codes|epf|social-security|social-insurance|eor-vs/, "payroll"],
  [/dtaa|transfer-pricing|tax-notices|global-vat|digital-sales|ceca|ceta|fta|customs|trade|ncti|treat|pe-risk|tax-on-indian/, "tax"],
  [/audit|parent-obligations|parent-reporting|supply-chain/, "accounting"],
  [/compliance-calendar|contracts|data-protection|privacy|anti-bribery|resident-director/, "secretarial"],
]

/** Resolve the service for a guide URL or path (either /x-to-india/... or /blog/x-to-india/...). */
export function guideServiceFor(urlOrPath: string): GuideService {
  const path = urlOrPath.replace(SITE, "").replace(/^\/blog/, "")
  const parts = path.split("/").slice(2)
  // Treaty sub-hub and its FAQ are tax content; its child pages are matched on their own slug.
  if (parts[0] === "tax-and-social-security-treaties" && (parts.length === 1 || parts[1] === "faq")) {
    return GUIDE_SERVICES.tax
  }
  const topic = parts[parts.length - 1] ?? ""
  for (const [re, key] of RULES) if (re.test(topic)) return GUIDE_SERVICES[key]
  return GUIDE_SERVICES.subsidiary
}

export function guideServiceSchemaId(service: GuideService): string {
  return `${SITE}${service.path}#service`
}
