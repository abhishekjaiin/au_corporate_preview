/**
 * Timed lead popup: on money pages the sitewide enquiry form opens by itself
 * after AUTO_POPUP_DELAY_MS. Shown at most once per POPUP_COOLDOWN_DAYS per
 * browser, and never again once the visitor has sent an enquiry. Blog posts,
 * legal pages and the contact page are left alone.
 */
export const AUTO_POPUP_DELAY_MS = 6000
export const POPUP_COOLDOWN_DAYS = 7

const SEEN_KEY = "au_lead_popup_seen"
const SUBMITTED_KEY = "au_lead_submitted"

/** Service, entry and commercial pages (exact paths). */
const LEAD_PAGES = new Set([
  "/",
  "/free-consultation",
  "/india-subsidiary-registration",
  "/branch-office-registration",
  "/liaison-office-registration",
  "/project-office-registration",
  "/foreign-company-roc-compliance",
  "/accounting-reporting-audit-support",
  "/fema-rbi-compliance",
  "/corporate-tax-gst-transfer-pricing",
  "/oidar-gst-registration-india",
  "/secretarial-roc-compliance",
  "/payroll-expat-services",
  "/gcc-setup-india",
  "/compliance-calendar",
  "/case-studies",
  "/resident-director-services-india",
  "/company-registration-in-india-for-nri",
  "/cost-of-setting-up-a-subsidiary-in-india",
  "/how-long-to-set-up-a-subsidiary-in-india",
  "/can-a-foreign-company-own-100-percent-of-an-indian-company",
  "/cost-of-hiring-employees-in-india",
  "/employee-benefits-in-india-for-foreign-companies",
  "/manufacturing-company-setup-in-india",
  "/press-note-3-approval-india",
  "/share-valuation-india-registered-valuer-fema",
  "/esop-india-foreign-owned-companies",
  "/funding-instruments-india-ccd-ccps-convertible-notes",
  "/japan-alliance",
  "/ja/japan-alliance",
])

/** True on the pages where the timed popup should run. */
export function isLeadPage(pathname: string): boolean {
  const path = pathname.replace(/\/+$/, "") || "/"
  if (LEAD_PAGES.has(path)) return true
  // Branch / liaison / project office service sub-pages
  if (/^\/(branch|liaison|project)-office-[a-z-]+$/.test(path)) return true
  // City registration pages
  if (/^\/company-registration-in-[a-z-]+$/.test(path)) return true
  // Country hubs only (e.g. /japan-to-india), not the guide posts beneath them
  if (/^\/[a-z-]+-to-india$/.test(path)) return true
  return false
}

function read(key: string): string | null {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

function write(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    /* storage blocked: the popup may show again, which is acceptable */
  }
}

/** Whether this browser should see the timed popup now. */
export function shouldAutoPopup(): boolean {
  if (read(SUBMITTED_KEY)) return false
  const seen = Number(read(SEEN_KEY) || 0)
  return !seen || Date.now() - seen > POPUP_COOLDOWN_DAYS * 86_400_000
}

export function markPopupSeen() {
  write(SEEN_KEY, String(Date.now()))
}

export function markLeadSubmitted() {
  write(SUBMITTED_KEY, String(Date.now()))
}
