import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from Hong Kong: 2026 Guide",
  },
  description:
    "How Hong Kong companies set up a subsidiary in India: Press Note 3 approval, structure, incorporation, FEMA filings, the India-Hong Kong tax treaty.",
  alternates: guideAlternates("hongkong", "hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Set%20Up%20a%20Subsidiary%20in%20India%20from%20Hong%20Kong%3A%202026%20Guide", width: 1200, height: 630, alt: "Set Up a Subsidiary in India from Hong Kong: 2026 Guide" }],
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from Hong Kong: 2026 Guide",
    description:
      "How Hong Kong companies set up a subsidiary in India: Press Note 3 approval, structure, incorporation, FEMA filings, the India-Hong Kong tax treaty.",
    url: "https://www.theaucorp.com/hong-kong-to-india",
    locale: "en_HK",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from Hong Kong: 2026 Guide",
    description:
      "How Hong Kong companies set up a subsidiary in India: Press Note 3 approval, structure, incorporation, FEMA filings, the India-Hong Kong tax treaty.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
