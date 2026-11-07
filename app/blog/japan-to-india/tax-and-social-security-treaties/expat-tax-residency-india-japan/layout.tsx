import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Tax Residency for Japanese Expats in India: Treaty Rules",
  },
  description:
    "Which country taxes a Japanese expat in India: Indian residency tests, Japanese residency, treaty tie-breaker, the 183-day rule and foreign tax credit.",
  alternates: guideAlternates("japan", "expat-tax-residency"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Tax%20Residency%20for%20Japanese%20Expats%20in%20India%3A%20Treaty%20Rules", width: 1200, height: 630, alt: "Tax Residency for Japanese Expats in India: Treaty Rules" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Tax Residency for Japanese Expats in India: Treaty Rules",
    description:
      "Which country taxes a Japanese expat in India: Indian residency tests, Japanese residency, treaty tie-breaker, the 183-day rule and foreign tax credit.",
    url: "https://www.theaucorp.com/japan-to-india/tax-and-social-security-treaties/expat-tax-residency-india-japan",
  },
  twitter: {
    title: "Tax Residency for Japanese Expats in India: Treaty Rules",
    description:
      "Which country taxes a Japanese expat in India: Indian residency tests, Japanese residency, treaty tie-breaker, the 183-day rule and foreign tax credit.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
