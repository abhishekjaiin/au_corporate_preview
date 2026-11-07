import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "EPF for International Workers in India: Rules for US Expats",
  },
  description:
    "How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, withdrawal, court rulings and the 2026 EPF Scheme.",
  alternates: guideAlternates("usa", "epf-international-workers"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=EPF%20for%20International%20Workers%20in%20India%3A%20Rules%20for%20US%20Expats", width: 1200, height: 630, alt: "EPF for International Workers in India: Rules for US Expats" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "EPF for International Workers in India: Rules for US Expats",
    description:
      "How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, withdrawal, court rulings and the 2026 EPF Scheme.",
    url: "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties/epf-international-workers",
  },
  twitter: {
    title: "EPF for International Workers in India: Rules for US Expats",
    description:
      "How Indian provident fund applies to foreign nationals: international worker rules, no wage ceiling, withdrawal, court rulings and the 2026 EPF Scheme.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
