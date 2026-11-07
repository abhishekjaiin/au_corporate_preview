import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "EPF for International Workers: Rules for Japanese Expats",
  },
  description:
    "How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, the Japan agreement exclusion and the 2026 EPF Scheme.",
  alternates: guideAlternates("japan", "epf-international-workers"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=EPF%20for%20International%20Workers%3A%20Rules%20for%20Japanese%20Expats", width: 1200, height: 630, alt: "EPF for International Workers: Rules for Japanese Expats" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "EPF for International Workers: Rules for Japanese Expats",
    description:
      "How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, the Japan agreement exclusion and the 2026 EPF Scheme.",
    url: "https://www.theaucorp.com/japan-to-india/tax-and-social-security-treaties/epf-international-workers",
  },
  twitter: {
    title: "EPF for International Workers: Rules for Japanese Expats",
    description:
      "How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, the Japan agreement exclusion and the 2026 EPF Scheme.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
