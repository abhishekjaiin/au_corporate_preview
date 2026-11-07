import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Common Mistakes Australian Companies Make in India",
  },
  description:
    "The 13 most common and costly mistakes Australian companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.",
  alternates: guideAlternates("australia", "common-mistakes"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Common%20Mistakes%20Australian%20Companies%20Make%20in%20India", width: 1200, height: 630, alt: "Common Mistakes Australian Companies Make in India" }],
    siteName: "AU Corporate",
    title: "Common Mistakes Australian Companies Make in India",
    description:
      "The 13 most common and costly mistakes Australian companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.",
    url: "https://www.theaucorp.com/australia-to-india/common-mistakes",
    locale: "en_AU",
  },
  twitter: {
    title: "Common Mistakes Australian Companies Make in India",
    description:
      "The 13 most common and costly mistakes Australian companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
