/**
 * Single source of truth for every static public page on the site.
 *
 * Both app/sitemap.ts and app/llms-full.txt/route.ts read from this one
 * array. Before this existed, the two were maintained as separate lists
 * that had already drifted — llms-full.txt was missing several
 * high-priority pages that were present here. Add a new static page here
 * once and it appears correctly in both places; nothing else needs
 * updating for a page to stop being invisible to AI crawlers.
 *
 * This array intentionally contains ONLY genuinely public, indexable
 * pages — never /admin, /api, or anything disallowed in robots.txt.
 * Published Insights are not listed here: they come from Postgres and are
 * fetched separately (with the same safe empty-array fallback) by both
 * consumers, exactly as sitemap.ts already did before this refactor.
 */

import { caseStudies } from "@/lib/case-studies"

export type PublicPage = {
  path: string
  priority: number
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never"
  lastModified: string // ISO date, e.g. "2026-07-27"
}

export const publicPages: PublicPage[] = [
  // Homepage - Highest Priority
  { path: "/", priority: 1.0, changeFrequency: "daily", lastModified: "2026-10-23" },

  // Core Service Hub

  // 10 Service Pillars

  // Main Pages
  { path: "/about", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-23" },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-23" },
  { path: "/career", priority: 0.75, changeFrequency: "monthly", lastModified: "2026-08-26" },
  { path: "/compliance-calendar", priority: 0.8, changeFrequency: "yearly", lastModified: "2026-10-26" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-10-26" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-10-26" },

  // Doing Business in India Hub + cluster

  // GCC Setup
  { path: "/gcc-setup-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-23" },

  // Entity-Type Pages
  { path: "/branch-office-registration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/branch-office-fema-rbi-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/foreign-company-roc-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/branch-office-tax-gst-transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/branch-office-accounting-audit", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/branch-office-payroll-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/project-office-registration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/project-office-fema-rbi-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/project-office-tax-gst-transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/project-office-accounting-audit", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/project-office-payroll-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/liaison-office-registration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/liaison-office-fema-rbi-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/liaison-office-tax-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/liaison-office-accounting-audit", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/liaison-office-payroll-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },

  // AI/SaaS Tax Compliance & India Entry Pair

  // India Business Setup Cluster
  { path: "/india-subsidiary-registration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/accounting-reporting-audit-support", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/fema-rbi-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-27" },
  { path: "/corporate-tax-gst-transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-20" },
  { path: "/oidar-gst-registration-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-27" },
  { path: "/secretarial-roc-compliance", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-20" },
  { path: "/payroll-expat-services", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-27" },


  // Service Pages

  // Partners
  { path: "/partners/uniproasia", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-10" },

  // Blog Hub + Articles
  { path: "/blog", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-10-21" },

  // USA to India guide cluster
  { path: "/usa-to-india", priority: 0.97, changeFrequency: "weekly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/incorporation-process", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/documents-and-apostille", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/resident-director", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/funding-fema-fc-gpr", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/share-valuation", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/repatriating-profits", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/eor-vs-subsidiary", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/dtaa-pe-risk", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/us-parent-obligations", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/compliance-calendar", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/audit-icofr", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/tax-notices-and-litigation", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/contracts-and-arbitration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/esop", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/restructuring-and-exit", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/expat-visa", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/global-vat", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/hiring-and-payroll", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/common-mistakes", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/faq", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/tax-and-social-security-treaties", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/tax-and-social-security-treaties/india-us-dtaa-guide", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/usa-to-india/tax-and-social-security-treaties/dtaa-withholding-rates", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/tax-and-social-security-treaties/treaty-benefits-documents", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/tax-and-social-security-treaties/expat-tax-residency-india-us", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/tax-and-social-security-treaties/social-security-us-expats-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/tax-and-social-security-treaties/epf-international-workers", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/tax-and-social-security-treaties/us-social-security-for-americans-in-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/tax-and-social-security-treaties/faq", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-14" },
  { path: "/usa-to-india/choosing-an-indian-state-and-city-for-us-companies", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/usa-to-india/cost-of-setting-up-a-subsidiary-in-india-from-the-us", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/usa-to-india/fcpa-anti-bribery-and-export-controls-for-indian-subsidiaries", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/usa-to-india/gcc-for-us-companies", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/usa-to-india/how-long-it-takes-to-set-up-from-the-us", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/usa-to-india/indian-labour-codes-for-us-employers", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/usa-to-india/ip-ownership-and-copyright-assignment-for-indian-teams", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/usa-to-india/nri-and-oci-founders-of-us-companies-investing-in-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/usa-to-india/us-manufacturers-pli-sez-and-incentives", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/usa-to-india/us-privacy-hipaa-ccpa-and-dpdp", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/usa-to-india/us-saas-and-digital-sales-into-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/usa-to-india/us-tax-on-indian-subsidiary-ncti-subpart-f-and-foreign-tax-credit", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },

  // Australia to India guide cluster
  { path: "/australia-to-india", priority: 0.97, changeFrequency: "weekly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/incorporation-process", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/documents-and-apostille", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/australia-to-india/resident-director", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/funding-fema-fc-gpr", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/share-valuation", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/repatriating-profits", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/eor-vs-subsidiary", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/india-australia-dtaa", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/australia-to-india/dtaa-pe-risk", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/foreign-employee-treaty-ssa", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/australia-to-india/australian-parent-obligations", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/australia-to-india/compliance-calendar", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/audit-icofr", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/tax-notices-and-litigation", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/contracts-and-arbitration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/esop", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/restructuring-and-exit", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/expat-visa", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/global-vat", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-15" },
  { path: "/australia-to-india/hiring-and-payroll", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/common-mistakes", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/australia-to-india/faq", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-15" },

  // UK to India guide cluster
  { path: "/uk-to-india", priority: 0.97, changeFrequency: "weekly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/common-mistakes", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/compliance-calendar", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/contracts-courts-arbitration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/data-protection-uk-gdpr-dpdp", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/documents-companies-house-apostille", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/exit-and-restructuring", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/funding-and-fema", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/gcc-for-uk-companies", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/hiring-in-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/incorporation-steps", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/india-uk-ceta", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/india-uk-dtaa", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/relocate-uk-staff", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/repatriating-profits", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/structure-options", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/uk-employees-in-india-dcc", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/uk-parent-reporting", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-19" },
  { path: "/uk-to-india/faq", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-19" },

  // Japan to India guide cluster
  { path: "/japan-to-india", priority: 0.97, changeFrequency: "weekly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/audit-icofr", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/common-mistakes", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/compliance-calendar", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/contracts-and-arbitration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/documents-and-apostille", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-20" },
  { path: "/japan-to-india/dtaa-pe-risk", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-20" },
  { path: "/japan-to-india/eor-vs-subsidiary", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/esop", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/expat-visa", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/funding-fema-fc-gpr", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/global-vat", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/hiring-and-payroll", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/incorporation-process", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/japan-parent-obligations", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-20" },
  { path: "/japan-to-india/repatriating-profits", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/resident-director", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/restructuring-and-exit", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/share-valuation", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/tax-and-social-security-treaties", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-20" },
  { path: "/japan-to-india/tax-and-social-security-treaties/dtaa-withholding-rates", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-20" },
  { path: "/japan-to-india/tax-and-social-security-treaties/epf-international-workers", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/tax-and-social-security-treaties/expat-tax-residency-india-japan", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-20" },
  { path: "/japan-to-india/tax-and-social-security-treaties/faq", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-20" },
  { path: "/japan-to-india/tax-and-social-security-treaties/india-japan-dtaa-guide", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-20" },
  { path: "/japan-to-india/tax-and-social-security-treaties/japan-social-insurance-for-expats-in-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-20" },
  { path: "/japan-to-india/tax-and-social-security-treaties/treaty-benefits-documents", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/tax-notices-and-litigation", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/japan-to-india/faq", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-02" },

  // Singapore to India guide cluster
  { path: "/singapore-to-india", priority: 0.97, changeFrequency: "weekly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/common-mistakes", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/compliance-calendar", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/contracts-courts-siac", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/data-protection-pdpa-dpdp", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/documents-acra-apostille", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/exit-and-restructuring", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/funding-and-fema", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/gcc-for-singapore-companies", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/hiring-in-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/incorporation-steps", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/india-singapore-ceca", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/india-singapore-dtaa", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/relocate-singapore-staff", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/repatriating-profits", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/singapore-employees-in-india-epf-cpf", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/singapore-holdco-for-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/singapore-parent-obligations", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/structure-options", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/singapore-to-india/faq", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-21" },
  { path: "/germany-to-india", priority: 0.97, changeFrequency: "weekly", lastModified: "2026-11-02" },
  { path: "/germany-to-india/common-mistakes", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/germany-to-india/compliance-calendar", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/germany-to-india/contracts-courts-arbitration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/germany-to-india/data-protection-gdpr-dpdp", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/germany-to-india/documents-handelsregister-apostille", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/germany-to-india/exit-and-restructuring", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/germany-to-india/funding-and-fema", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/germany-to-india/gcc-for-german-companies", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/germany-to-india/german-employees-in-india-ssa", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/germany-to-india/german-parent-obligations", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/germany-to-india/hiring-in-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/germany-to-india/incorporation-steps", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/germany-to-india/india-eu-fta-and-germany", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/germany-to-india/india-germany-dtaa", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/germany-to-india/relocate-german-staff", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/germany-to-india/repatriating-profits", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/germany-to-india/structure-options", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/germany-to-india/supply-chain-and-esg-duties", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/germany-to-india/transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/germany-to-india/faq", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india", priority: 0.97, changeFrequency: "weekly", lastModified: "2026-10-26" },
  { path: "/china-to-india/chinese-employees-in-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india/chinese-parent-obligations", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india/common-mistakes", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india/compliance-calendar", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/china-to-india/contracts-courts-arbitration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india/data-protection-pipl-dpdp", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india/documents-notarisation-legalisation", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india/exit-and-restructuring", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india/funding-and-fema", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india/hiring-in-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india/incorporation-steps", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india/india-china-dtaa", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/china-to-india/india-press-note-3-and-chinese-investors", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india/manufacturing-and-jv-for-chinese-companies", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india/relocate-chinese-staff", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india/repatriating-profits", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india/restricted-sectors-procurement-and-trade", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india/structure-options", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india/transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/china-to-india/faq", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india", priority: 0.97, changeFrequency: "weekly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/common-mistakes", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/compliance-calendar", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/contracts-courts-arbitration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/data-protection-pdpo-dpdp", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/documents-hong-kong-apostille", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/exit-and-restructuring", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/funding-and-fema", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/goods-via-hong-kong-origin-customs-and-procurement", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/hiring-in-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/hong-kong-as-regional-hub-for-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/hong-kong-employees-in-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/hong-kong-parent-obligations", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/incorporation-steps", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/india-hong-kong-dtaa", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/hong-kong-to-india/india-press-note-3-and-hong-kong-entities", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/relocate-hong-kong-staff", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/repatriating-profits", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/structure-options", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/hong-kong-to-india/faq", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/russia-to-india", priority: 0.97, changeFrequency: "weekly", lastModified: "2026-10-26" },
  { path: "/russia-to-india/common-mistakes", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/russia-to-india/compliance-calendar", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/russia-to-india/contracts-courts-arbitration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/russia-to-india/data-protection-152fz-dpdp", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/russia-to-india/documents-apostille-and-translation", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/russia-to-india/exit-and-restructuring", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/russia-to-india/funding-and-fema", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/russia-to-india/goods-trade-customs-and-eaeu-fta", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/russia-to-india/hiring-in-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/russia-to-india/incorporation-steps", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/russia-to-india/india-fdi-rules-for-russian-companies", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/russia-to-india/india-russia-dtaa", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/russia-to-india/relocate-russian-staff", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/russia-to-india/repatriating-profits", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/russia-to-india/russian-employees-in-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/russia-to-india/russian-parent-obligations", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/russia-to-india/sanctions-and-payments-for-russian-companies", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/russia-to-india/structure-options", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/russia-to-india/transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/russia-to-india/faq", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-10-26" },
  { path: "/spain-to-india", priority: 0.97, changeFrequency: "weekly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/compliance-calendar", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/contracts-courts-arbitration", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/cost-of-setting-up-a-subsidiary-in-india-from-spain", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/data-protection-gdpr-dpdp", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/documents-apostille-and-sworn-translation", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/eu-india-fta-and-spanish-exporters", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/exit-and-restructuring", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/funding-and-fema", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/hiring-in-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/how-long-it-takes-to-set-up-from-spain", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/incorporation-steps", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/india-spain-dtaa", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/relocate-spanish-staff", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/repatriating-profits", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/resident-director-service-for-spanish-companies", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/spanish-employees-in-india", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/spanish-parent-obligations", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/structure-options", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/transfer-pricing", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-11-02" },
  { path: "/spain-to-india/faq", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-02" },

  // Insights Hub (Postgres-backed) — individual published Insight URLs are
  // fetched live by each consumer (see getPublishedInsights()). The index
  // page itself is static here since it exists regardless of how many
  // Insights are published.
  { path: "/insights", priority: 0.85, changeFrequency: "weekly", lastModified: "2026-10-06" },

  // Case Studies — the index and each individual case study only appear
  // here once real entries exist in lib/case-studies.ts; an empty listing
  // page isn't worth indexing, and there is nothing to list yet.
  ...(caseStudies.length > 0
    ? [
        { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-10-20" },
        ...caseStudies.map((c) => ({
          path: `/case-studies/${c.slug}`,
          priority: 0.75,
          changeFrequency: "yearly" as const,
          lastModified: c.dateModified,
        })),
      ]
    : []),
]
