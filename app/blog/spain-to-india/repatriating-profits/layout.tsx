import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Repatriating Profits from India to Spain",
  },
  description:
    "A comparison of the five routes a Spanish parent can use to take cash from an Indian subsidiary, with the Indian withholding tax, Indian conditions, Spanish.",
  alternates: guideAlternates("spain", "repatriating-profits"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Repatriating%20Profits%20from%20India%20to%20Spain", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Repatriating Profits from India to Spain",
    description:
      "A comparison of the five routes a Spanish parent can use to take cash from an Indian subsidiary, with the Indian withholding tax, Indian conditions, Spanish.",
    url: "https://www.theaucorp.com/spain-to-india/repatriating-profits",
    locale: "en_ES",
  },
  twitter: {
    title: "Repatriating Profits from India to Spain",
    description:
      "A comparison of the five routes a Spanish parent can use to take cash from an Indian subsidiary, with the Indian withholding tax, Indian conditions, Spanish.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
