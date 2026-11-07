import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Common Mistakes German Companies Make When Entering India",
  },
  description:
    "The most frequent mistakes German companies make when setting up in India: late FEMA filings, missing forms for treaty relief, works council surprises.",
  alternates: guideAlternates("germany", "common-mistakes"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Common%20Mistakes%20German%20Companies%20Make%20When%20Entering%20India", width: 1200, height: 630, alt: "Common Mistakes German Companies Make When Entering India" }],
    siteName: "AU Corporate",
    title: "Common Mistakes German Companies Make When Entering India",
    description:
      "The most frequent mistakes German companies make when setting up in India: late FEMA filings, missing forms for treaty relief, works council surprises.",
    url: "https://www.theaucorp.com/germany-to-india/common-mistakes",
    locale: "en_DE",
  },
  twitter: {
    title: "Common Mistakes German Companies Make When Entering India",
    description:
      "The most frequent mistakes German companies make when setting up in India: late FEMA filings, missing forms for treaty relief, works council surprises.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
