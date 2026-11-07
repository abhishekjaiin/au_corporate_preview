import { guideServiceFor, type GuideServiceKey } from "@/lib/guides/guide-services"

/** Options for the enquiry form's "What do you need?" field. */
export const LEAD_NEEDS = [
  "Set up an Indian subsidiary",
  "Branch, liaison or project office",
  "Accounting, tax and compliance for an existing Indian entity",
  "FEMA / RBI filings, or fixing a missed filing",
  "Payroll, EOR or expat staff",
  "GCC / captive centre setup",
  "OIDAR GST registration",
  "Something else",
] as const

export const LEAD_TIMELINES = ["As soon as possible", "Within 1 to 3 months", "In 3 to 6 months", "Just researching for now"] as const

const COUNTRY_BY_PREFIX: Record<string, string> = {
  "usa-to-india": "USA",
  "uk-to-india": "United Kingdom",
  "australia-to-india": "Australia",
  "japan-to-india": "Japan",
  "singapore-to-india": "Singapore",
  "germany-to-india": "Germany",
  "china-to-india": "China",
  "hong-kong-to-india": "Hong Kong",
  "russia-to-india": "Russia",
  "spain-to-india": "Spain",
}

const NEED_BY_GUIDE_SERVICE: Record<GuideServiceKey, (typeof LEAD_NEEDS)[number]> = {
  subsidiary: LEAD_NEEDS[0],
  fema: LEAD_NEEDS[3],
  tax: LEAD_NEEDS[2],
  payroll: LEAD_NEEDS[4],
  accounting: LEAD_NEEDS[2],
  secretarial: LEAD_NEEDS[2],
  gcc: LEAD_NEEDS[5],
}

function topSegment(pathname: string) {
  return pathname.replace(/^\/blog/, "").split("/").filter(Boolean)[0] ?? ""
}

/** Country to prefill, from a country guide URL. Empty when the page is not country-specific. */
export function countryFromPath(pathname: string): string {
  return COUNTRY_BY_PREFIX[topSegment(pathname)] ?? ""
}

/** Need to preselect, from the page the visitor is on. Empty when it can't be inferred. */
export function needFromPath(pathname: string): string {
  const top = topSegment(pathname)
  if (COUNTRY_BY_PREFIX[top]) return NEED_BY_GUIDE_SERVICE[guideServiceFor(pathname).key]
  if (top === "india-subsidiary-registration") return LEAD_NEEDS[0]
  if (/^(branch|liaison|project)-office-registration$/.test(top)) return LEAD_NEEDS[1]
  if (/fema-rbi-compliance$/.test(top)) return LEAD_NEEDS[3]
  if (/payroll/.test(top)) return LEAD_NEEDS[4]
  if (top === "gcc-setup-india") return LEAD_NEEDS[5]
  if (top === "oidar-gst-registration-india") return LEAD_NEEDS[6]
  if (/accounting|tax|secretarial|roc-compliance|audit/.test(top)) return LEAD_NEEDS[2]
  return ""
}

type GtagParams = Record<string, string | number | undefined>

/** Sends a GA4 event through the gtag.js tag loaded in app/layout.tsx; a no-op if it hasn't loaded. */
export function trackEvent(name: string, params: GtagParams = {}) {
  if (typeof window === "undefined") return
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag === "function") gtag("event", name, params)
}
