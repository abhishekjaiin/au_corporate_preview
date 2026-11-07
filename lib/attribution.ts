const STORAGE_KEY = "au_corp_attribution"

const TRACKED_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "msclkid"] as const

type Attribution = Partial<Record<(typeof TRACKED_PARAMS)[number] | "landing_page" | "referrer", string>>

function readStored(): Attribution | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Attribution) : null
  } catch {
    return null
  }
}

/**
 * Captures ad click IDs and UTM params on landing. Overwrites stored
 * attribution only when the current URL carries new tracked params, so a
 * visitor who lands from an ad and browses several pages before submitting
 * an inquiry keeps that ad's attribution rather than losing it to a bare
 * internal link.
 */
export function captureAttribution() {
  if (typeof window === "undefined") return
  const params = new URLSearchParams(window.location.search)
  const found: Attribution = {}
  for (const key of TRACKED_PARAMS) {
    const value = params.get(key)
    if (value) found[key] = value
  }
  if (Object.keys(found).length === 0) {
    // No campaign parameters: record the first page and referrer of the
    // visit once, so organic, AI-assistant and referral leads also show
    // where the visitor arrived from. Never overwrites earlier attribution.
    if (readStored()) return
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ landing_page: window.location.href, referrer: document.referrer || "" }),
      )
    } catch {
      // localStorage unavailable — attribution is best-effort
    }
    return
  }

  found.landing_page = window.location.href
  found.referrer = document.referrer || ""

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(found))
  } catch {
    // localStorage unavailable (private browsing, etc.) — attribution is best-effort
  }
}

export function getStoredAttribution(): Attribution {
  if (typeof window === "undefined") return {}
  return readStored() ?? {}
}
