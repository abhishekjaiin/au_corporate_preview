import type { Metadata } from "next"

/**
 * Registry of the country-entry guide clusters under /<country>-to-india.
 *
 * Every cluster covers the same topics for a different home country, so to
 * Google they are regional variants of each other. Registering a cluster here
 * makes `guideAlternates` emit reciprocal hreflang links between every
 * country's version of a topic, which is what stops the clusters being read
 * as duplicates. Adding a new country (UK, Singapore, ...) means: add it to
 * GUIDE_COUNTRIES, list the topics it covers, and call guideAlternates() in
 * each of its layouts. See docs/COUNTRY_CLUSTER_PLAYBOOK.md.
 */

export type GuideTopic =
  | "hub"
  | "faq"
  | "incorporation-process"
  | "subsidiary-vs-branch-vs-liaison-office-vs-llp"
  | "documents-and-apostille"
  | "resident-director"
  | "funding-fema-fc-gpr"
  | "share-valuation"
  | "repatriating-profits"
  | "eor-vs-subsidiary"
  | "transfer-pricing"
  | "dtaa-pe-risk"
  | "parent-obligations"
  | "compliance-calendar"
  | "audit-icofr"
  | "tax-notices-and-litigation"
  | "contracts-and-arbitration"
  | "esop"
  | "restructuring-and-exit"
  | "expat-visa"
  | "global-vat"
  | "hiring-and-payroll"
  | "common-mistakes"
  | "india-dtaa"
  | "foreign-employee-treaty-ssa"
  | "treaties-hub"
  | "treaties-faq"
  | "dtaa-withholding-rates"
  | "epf-international-workers"
  | "expat-tax-residency"
  | "social-security-agreement"
  | "treaty-benefits-documents"
  | "home-social-security"
  | "trade-agreement"
  | "data-protection"
  | "gcc"
  | "holdco"
  | "esg-supply-chain"
  | "press-note-3"
  | "manufacturing-jv"
  | "restricted-sectors"
  | "trade-origin"
  | "fdi-rules"
  | "sanctions-payments"
  | "setup-cost"
  | "setup-timeline"
  | "state-and-city"
  | "anti-bribery-export-controls"
  | "labour-codes"
  | "ip-ownership"
  | "nri-oci-founders"
  | "manufacturing-incentives"
  | "digital-sales-gst"
  | "home-country-tax"

export type GuideCountryKey = "usa" | "australia" | "uk" | "japan" | "singapore" | "germany" | "china" | "hongkong" | "russia" | "spain"

export type GuideCountry = {
  /** "the USA" / "Australia", as used in "from {name}". */
  name: string
  /** "US" / "Australian", as used in "{adjective} companies". */
  adjective: string
  /** BCP 47 tag used for hreflang and inLanguage. */
  locale: string
  basePath: string
  /** Topic -> URL slug under basePath. Topics a country doesn't cover are omitted. */
  slugs: Partial<Record<GuideTopic, string>>
}

const SITE = "https://www.theaucorp.com"

const SHARED_TOPICS: GuideTopic[] = [
  "incorporation-process",
  "subsidiary-vs-branch-vs-liaison-office-vs-llp",
  "documents-and-apostille",
  "resident-director",
  "funding-fema-fc-gpr",
  "share-valuation",
  "repatriating-profits",
  "eor-vs-subsidiary",
  "transfer-pricing",
  "dtaa-pe-risk",
  "compliance-calendar",
  "audit-icofr",
  "tax-notices-and-litigation",
  "contracts-and-arbitration",
  "esop",
  "restructuring-and-exit",
  "expat-visa",
  "global-vat",
  "hiring-and-payroll",
  "common-mistakes",
  "faq",
]

const sameSlugs = (topics: GuideTopic[]) => Object.fromEntries(topics.map((t) => [t, t]))

export const GUIDE_COUNTRIES: Record<GuideCountryKey, GuideCountry> = {
  usa: {
    name: "the USA",
    adjective: "US",
    locale: "en-US",
    basePath: "/usa-to-india",
    slugs: {
      hub: "",
      ...sameSlugs(SHARED_TOPICS),
      "parent-obligations": "us-parent-obligations",
      "treaties-hub": "tax-and-social-security-treaties",
      "treaties-faq": "tax-and-social-security-treaties/faq",
      "india-dtaa": "tax-and-social-security-treaties/india-us-dtaa-guide",
      "dtaa-withholding-rates": "tax-and-social-security-treaties/dtaa-withholding-rates",
      "epf-international-workers": "tax-and-social-security-treaties/epf-international-workers",
      "expat-tax-residency": "tax-and-social-security-treaties/expat-tax-residency-india-us",
      "social-security-agreement": "tax-and-social-security-treaties/social-security-us-expats-india",
      "treaty-benefits-documents": "tax-and-social-security-treaties/treaty-benefits-documents",
      "home-social-security": "tax-and-social-security-treaties/us-social-security-for-americans-in-india",
      // Added November 2026 as US-specific guides; gcc, data-protection,
      // setup-cost and setup-timeline pair with other clusters' versions.
      gcc: "gcc-for-us-companies",
      "data-protection": "us-privacy-hipaa-ccpa-and-dpdp",
      "setup-cost": "cost-of-setting-up-a-subsidiary-in-india-from-the-us",
      "setup-timeline": "how-long-it-takes-to-set-up-from-the-us",
      "state-and-city": "choosing-an-indian-state-and-city-for-us-companies",
      "anti-bribery-export-controls": "fcpa-anti-bribery-and-export-controls-for-indian-subsidiaries",
      "labour-codes": "indian-labour-codes-for-us-employers",
      "ip-ownership": "ip-ownership-and-copyright-assignment-for-indian-teams",
      "nri-oci-founders": "nri-and-oci-founders-of-us-companies-investing-in-india",
      "manufacturing-incentives": "us-manufacturers-pli-sez-and-incentives",
      "digital-sales-gst": "us-saas-and-digital-sales-into-india",
      "home-country-tax": "us-tax-on-indian-subsidiary-ncti-subpart-f-and-foreign-tax-credit",
    },
  },
  australia: {
    name: "Australia",
    adjective: "Australian",
    locale: "en-AU",
    basePath: "/australia-to-india",
    slugs: {
      hub: "",
      ...sameSlugs(SHARED_TOPICS),
      "parent-obligations": "australian-parent-obligations",
      "india-dtaa": "india-australia-dtaa",
      "foreign-employee-treaty-ssa": "foreign-employee-treaty-ssa",
    },
  },
  uk: {
    name: "the UK",
    adjective: "UK",
    locale: "en-GB",
    basePath: "/uk-to-india",
    // The UK cluster was written with its own slugs and angles, so topics
    // map to differently named pages rather than reusing the shared slugs.
    slugs: {
      hub: "",
      faq: "faq",
      "incorporation-process": "incorporation-steps",
      "subsidiary-vs-branch-vs-liaison-office-vs-llp": "structure-options",
      "documents-and-apostille": "documents-companies-house-apostille",
      "funding-fema-fc-gpr": "funding-and-fema",
      "repatriating-profits": "repatriating-profits",
      "transfer-pricing": "transfer-pricing",
      "india-dtaa": "india-uk-dtaa",
      "parent-obligations": "uk-parent-reporting",
      "compliance-calendar": "compliance-calendar",
      "contracts-and-arbitration": "contracts-courts-arbitration",
      "restructuring-and-exit": "exit-and-restructuring",
      "expat-visa": "relocate-uk-staff",
      "hiring-and-payroll": "hiring-in-india",
      "common-mistakes": "common-mistakes",
      "foreign-employee-treaty-ssa": "uk-employees-in-india-dcc",
      "trade-agreement": "india-uk-ceta",
      "data-protection": "data-protection-uk-gdpr-dpdp",
      gcc: "gcc-for-uk-companies",
    },
  },
  singapore: {
    name: "Singapore",
    adjective: "Singapore",
    locale: "en-SG",
    basePath: "/singapore-to-india",
    // Written with its own slugs, like the UK cluster.
    slugs: {
      hub: "",
      faq: "faq",
      "incorporation-process": "incorporation-steps",
      "subsidiary-vs-branch-vs-liaison-office-vs-llp": "structure-options",
      "documents-and-apostille": "documents-acra-apostille",
      "funding-fema-fc-gpr": "funding-and-fema",
      "repatriating-profits": "repatriating-profits",
      "transfer-pricing": "transfer-pricing",
      "india-dtaa": "india-singapore-dtaa",
      "parent-obligations": "singapore-parent-obligations",
      "compliance-calendar": "compliance-calendar",
      "contracts-and-arbitration": "contracts-courts-siac",
      "restructuring-and-exit": "exit-and-restructuring",
      "expat-visa": "relocate-singapore-staff",
      "hiring-and-payroll": "hiring-in-india",
      "common-mistakes": "common-mistakes",
      "foreign-employee-treaty-ssa": "singapore-employees-in-india-epf-cpf",
      "trade-agreement": "india-singapore-ceca",
      "data-protection": "data-protection-pdpa-dpdp",
      gcc: "gcc-for-singapore-companies",
      holdco: "singapore-holdco-for-india",
    },
  },
  germany: {
    name: "Germany",
    adjective: "German",
    locale: "en-DE",
    basePath: "/germany-to-india",
    // Written with its own slugs, like the UK and Singapore clusters.
    slugs: {
      hub: "",
      faq: "faq",
      "incorporation-process": "incorporation-steps",
      "subsidiary-vs-branch-vs-liaison-office-vs-llp": "structure-options",
      "documents-and-apostille": "documents-handelsregister-apostille",
      "funding-fema-fc-gpr": "funding-and-fema",
      "repatriating-profits": "repatriating-profits",
      "transfer-pricing": "transfer-pricing",
      "india-dtaa": "india-germany-dtaa",
      "parent-obligations": "german-parent-obligations",
      "compliance-calendar": "compliance-calendar",
      "contracts-and-arbitration": "contracts-courts-arbitration",
      "restructuring-and-exit": "exit-and-restructuring",
      "expat-visa": "relocate-german-staff",
      "hiring-and-payroll": "hiring-in-india",
      "common-mistakes": "common-mistakes",
      "foreign-employee-treaty-ssa": "german-employees-in-india-ssa",
      "trade-agreement": "india-eu-fta-and-germany",
      "data-protection": "data-protection-gdpr-dpdp",
      gcc: "gcc-for-german-companies",
      "esg-supply-chain": "supply-chain-and-esg-duties",
    },
  },
  china: {
    name: "China",
    adjective: "Chinese",
    locale: "en-CN",
    basePath: "/china-to-india",
    // Written with its own slugs. Press Note 3, manufacturing JVs and
    // restricted sectors are China-only topics: land-border investors face
    // rules no other cluster country does.
    slugs: {
      hub: "",
      faq: "faq",
      "incorporation-process": "incorporation-steps",
      "subsidiary-vs-branch-vs-liaison-office-vs-llp": "structure-options",
      "documents-and-apostille": "documents-notarisation-legalisation",
      "funding-fema-fc-gpr": "funding-and-fema",
      "repatriating-profits": "repatriating-profits",
      "transfer-pricing": "transfer-pricing",
      "india-dtaa": "india-china-dtaa",
      "parent-obligations": "chinese-parent-obligations",
      "compliance-calendar": "compliance-calendar",
      "contracts-and-arbitration": "contracts-courts-arbitration",
      "restructuring-and-exit": "exit-and-restructuring",
      "expat-visa": "relocate-chinese-staff",
      "hiring-and-payroll": "hiring-in-india",
      "common-mistakes": "common-mistakes",
      "foreign-employee-treaty-ssa": "chinese-employees-in-india",
      "data-protection": "data-protection-pipl-dpdp",
      "press-note-3": "india-press-note-3-and-chinese-investors",
      "manufacturing-jv": "manufacturing-and-jv-for-chinese-companies",
      "restricted-sectors": "restricted-sectors-procurement-and-trade",
    },
  },
  hongkong: {
    name: "Hong Kong",
    adjective: "Hong Kong",
    locale: "en-HK",
    basePath: "/hong-kong-to-india",
    // Written with its own slugs. Kept apart from the China cluster: Hong Kong
    // has its own treaty, apostille, courts and data law, so shared topics
    // (Press Note 3 included) are regional alternates, not duplicates. Goods
    // routed via Hong Kong (origin, customs value) is a Hong Kong-only topic.
    slugs: {
      hub: "",
      faq: "faq",
      "incorporation-process": "incorporation-steps",
      "subsidiary-vs-branch-vs-liaison-office-vs-llp": "structure-options",
      "documents-and-apostille": "documents-hong-kong-apostille",
      "funding-fema-fc-gpr": "funding-and-fema",
      "repatriating-profits": "repatriating-profits",
      "transfer-pricing": "transfer-pricing",
      "india-dtaa": "india-hong-kong-dtaa",
      "parent-obligations": "hong-kong-parent-obligations",
      "compliance-calendar": "compliance-calendar",
      "contracts-and-arbitration": "contracts-courts-arbitration",
      "restructuring-and-exit": "exit-and-restructuring",
      "expat-visa": "relocate-hong-kong-staff",
      "hiring-and-payroll": "hiring-in-india",
      "common-mistakes": "common-mistakes",
      "foreign-employee-treaty-ssa": "hong-kong-employees-in-india",
      "data-protection": "data-protection-pdpo-dpdp",
      "press-note-3": "india-press-note-3-and-hong-kong-entities",
      holdco: "hong-kong-as-regional-hub-for-india",
      "trade-origin": "goods-via-hong-kong-origin-customs-and-procurement",
    },
  },
  russia: {
    name: "Russia",
    adjective: "Russian",
    locale: "en-RU",
    basePath: "/russia-to-india",
    // Written with its own slugs. The FDI-route page (Press Note 3 does not
    // apply to Russia) and sanctions and payments are Russia-only topics.
    slugs: {
      hub: "",
      faq: "faq",
      "incorporation-process": "incorporation-steps",
      "subsidiary-vs-branch-vs-liaison-office-vs-llp": "structure-options",
      "documents-and-apostille": "documents-apostille-and-translation",
      "funding-fema-fc-gpr": "funding-and-fema",
      "repatriating-profits": "repatriating-profits",
      "transfer-pricing": "transfer-pricing",
      "india-dtaa": "india-russia-dtaa",
      "parent-obligations": "russian-parent-obligations",
      "compliance-calendar": "compliance-calendar",
      "contracts-and-arbitration": "contracts-courts-arbitration",
      "restructuring-and-exit": "exit-and-restructuring",
      "expat-visa": "relocate-russian-staff",
      "hiring-and-payroll": "hiring-in-india",
      "common-mistakes": "common-mistakes",
      "foreign-employee-treaty-ssa": "russian-employees-in-india",
      "data-protection": "data-protection-152fz-dpdp",
      "trade-agreement": "goods-trade-customs-and-eaeu-fta",
      "fdi-rules": "india-fdi-rules-for-russian-companies",
      "sanctions-payments": "sanctions-and-payments-for-russian-companies",
    },
  },
  spain: {
    name: "Spain",
    adjective: "Spanish",
    locale: "en-ES",
    basePath: "/spain-to-india",
    // Written with its own slugs. Cost, timeline and the resident director
    // service pair with the USA (and, for the resident director, Australia
    // and Japan) as regional versions.
    slugs: {
      hub: "",
      faq: "faq",
      "incorporation-process": "incorporation-steps",
      "subsidiary-vs-branch-vs-liaison-office-vs-llp": "structure-options",
      "documents-and-apostille": "documents-apostille-and-sworn-translation",
      "funding-fema-fc-gpr": "funding-and-fema",
      "repatriating-profits": "repatriating-profits",
      "transfer-pricing": "transfer-pricing",
      "india-dtaa": "india-spain-dtaa",
      "parent-obligations": "spanish-parent-obligations",
      "compliance-calendar": "compliance-calendar",
      "contracts-and-arbitration": "contracts-courts-arbitration",
      "restructuring-and-exit": "exit-and-restructuring",
      "expat-visa": "relocate-spanish-staff",
      "hiring-and-payroll": "hiring-in-india",
      "foreign-employee-treaty-ssa": "spanish-employees-in-india",
      "data-protection": "data-protection-gdpr-dpdp",
      "trade-agreement": "eu-india-fta-and-spanish-exporters",
      "setup-cost": "cost-of-setting-up-a-subsidiary-in-india-from-spain",
      "setup-timeline": "how-long-it-takes-to-set-up-from-spain",
      "resident-director": "resident-director-service-for-spanish-companies",
    },
  },
  japan: {
    name: "Japan",
    adjective: "Japanese",
    locale: "en-JP",
    basePath: "/japan-to-india",
    // Same topic set and treaty sub-hub as the USA cluster, with Japan's own
    // slugs for the treaty and parent pages.
    slugs: {
      hub: "",
      ...sameSlugs(SHARED_TOPICS),
      "parent-obligations": "japan-parent-obligations",
      "treaties-hub": "tax-and-social-security-treaties",
      "treaties-faq": "tax-and-social-security-treaties/faq",
      "india-dtaa": "tax-and-social-security-treaties/india-japan-dtaa-guide",
      "dtaa-withholding-rates": "tax-and-social-security-treaties/dtaa-withholding-rates",
      "epf-international-workers": "tax-and-social-security-treaties/epf-international-workers",
      "expat-tax-residency": "tax-and-social-security-treaties/expat-tax-residency-india-japan",
      "social-security-agreement": "tax-and-social-security-treaties/india-japan-social-security-agreement",
      "treaty-benefits-documents": "tax-and-social-security-treaties/treaty-benefits-documents",
      "home-social-security": "tax-and-social-security-treaties/japan-social-insurance-for-expats-in-india",
    },
  },
}

export function guideUrl(country: GuideCountryKey, topic: GuideTopic): string | undefined {
  const c = GUIDE_COUNTRIES[country]
  const slug = c.slugs[topic]
  if (slug === undefined) return undefined
  return `${SITE}${c.basePath}${slug ? `/${slug}` : ""}`
}

/**
 * `alternates` metadata for a guide page: its canonical URL plus hreflang
 * links to every registered country's version of the same topic (including
 * itself, as Google requires), plus an x-default fallback. A topic only one
 * country covers gets just the canonical.
 */
export function guideAlternates(country: GuideCountryKey, topic: GuideTopic): Metadata["alternates"] {
  const canonical = guideUrl(country, topic)
  if (!canonical) throw new Error(`Guide topic "${topic}" is not registered for ${country}`)
  const languages: Record<string, string> = {}
  for (const key of Object.keys(GUIDE_COUNTRIES) as GuideCountryKey[]) {
    const url = guideUrl(key, topic)
    if (url) languages[GUIDE_COUNTRIES[key].locale] = url
  }
  if (Object.keys(languages).length < 2) return { canonical }
  // Searchers outside every registered country (India included) get the
  // USA version, the most complete cluster, or this page if the USA has none.
  languages["x-default"] = guideUrl("usa", topic) ?? canonical
  return { canonical, languages }
}
