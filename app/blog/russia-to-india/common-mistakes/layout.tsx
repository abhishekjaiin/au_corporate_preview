import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Common Mistakes Russian Companies Make When Entering India",
  },
  description:
    "The most common mistakes of Russian companies entering India: ignoring banking and sanctions, skipping Russian clearance, late FEMA filings, weak treaty.",
  alternates: guideAlternates("russia", "common-mistakes"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Common%20Mistakes%20Russian%20Companies%20Make%20When%20Entering%20India", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Common Mistakes Russian Companies Make When Entering India",
    description:
      "The most common mistakes of Russian companies entering India: ignoring banking and sanctions, skipping Russian clearance, late FEMA filings, weak treaty.",
    url: "https://www.theaucorp.com/russia-to-india/common-mistakes",
    locale: "en_RU",
  },
  twitter: {
    title: "Common Mistakes Russian Companies Make When Entering India",
    description:
      "The most common mistakes of Russian companies entering India: ignoring banking and sanctions, skipping Russian clearance, late FEMA filings, weak treaty.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
