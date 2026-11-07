import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from Russia: 2026 Guide",
  },
  description:
    "How Russian companies set up a subsidiary in India: FDI route, sanctions and banking, structure, incorporation, FEMA filings, the India-Russia tax treaty.",
  alternates: guideAlternates("russia", "hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Set%20Up%20a%20Subsidiary%20in%20India%20from%20Russia%3A%202026%20Guide", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from Russia: 2026 Guide",
    description:
      "How Russian companies set up a subsidiary in India: FDI route, sanctions and banking, structure, incorporation, FEMA filings, the India-Russia tax treaty.",
    url: "https://www.theaucorp.com/russia-to-india",
    locale: "en_RU",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from Russia: 2026 Guide",
    description:
      "How Russian companies set up a subsidiary in India: FDI route, sanctions and banking, structure, incorporation, FEMA filings, the India-Russia tax treaty.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
