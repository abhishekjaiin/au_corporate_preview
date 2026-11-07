import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Tax Residency for US Expats in India: Treaty and Credits",
  },
  description:
    "Which country taxes a US expat in India: Indian residency tests, US worldwide tax, the treaty tie-breaker, foreign tax credit and exclusion.",
  alternates: guideAlternates("usa", "expat-tax-residency"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Tax%20Residency%20for%20US%20Expats%20in%20India%3A%20Treaty%20and%20Credits", width: 1200, height: 630, alt: "Tax Residency for US Expats in India: Treaty and Credits" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Tax Residency for US Expats in India: Treaty and Credits",
    description:
      "Which country taxes a US expat in India: Indian residency tests, US worldwide tax, the treaty tie-breaker, foreign tax credit and exclusion.",
    url: "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties/expat-tax-residency-india-us",
  },
  twitter: {
    title: "Tax Residency for US Expats in India: Treaty and Credits",
    description:
      "Which country taxes a US expat in India: Indian residency tests, US worldwide tax, the treaty tie-breaker, foreign tax credit and exclusion.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
