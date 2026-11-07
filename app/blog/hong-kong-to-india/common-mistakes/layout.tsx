import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Common Mistakes Hong Kong Companies Make When Entering India",
  },
  description:
    "The most common mistakes of Hong Kong companies entering India: skipping Press Note 3, thin hub structures, late FEMA filings, weak treaty paperwork.",
  alternates: guideAlternates("hongkong", "common-mistakes"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Common%20Mistakes%20Hong%20Kong%20Companies%20Make%20When%20Entering%20India", width: 1200, height: 630, alt: "Common Mistakes Hong Kong Companies Make When Entering India" }],
    siteName: "AU Corporate",
    title: "Common Mistakes Hong Kong Companies Make When Entering India",
    description:
      "The most common mistakes of Hong Kong companies entering India: skipping Press Note 3, thin hub structures, late FEMA filings, weak treaty paperwork.",
    url: "https://www.theaucorp.com/hong-kong-to-india/common-mistakes",
    locale: "en_HK",
  },
  twitter: {
    title: "Common Mistakes Hong Kong Companies Make When Entering India",
    description:
      "The most common mistakes of Hong Kong companies entering India: skipping Press Note 3, thin hub structures, late FEMA filings, weak treaty paperwork.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
