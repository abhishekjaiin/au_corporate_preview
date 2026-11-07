import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Common Mistakes Japanese Companies Make in India",
  },
  description:
    "The ten most common and costly mistakes Japanese companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.",
  alternates: guideAlternates("japan", "common-mistakes"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Common%20Mistakes%20Japanese%20Companies%20Make%20in%20India", width: 1200, height: 630, alt: "Common Mistakes Japanese Companies Make in India" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Common Mistakes Japanese Companies Make in India",
    description:
      "The ten most common and costly mistakes Japanese companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.",
    url: "https://www.theaucorp.com/japan-to-india/common-mistakes",
  },
  twitter: {
    title: "Common Mistakes Japanese Companies Make in India",
    description:
      "The ten most common and costly mistakes Japanese companies make when setting up an Indian subsidiary, and how to avoid each. Includes a pre-filing checklist.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
