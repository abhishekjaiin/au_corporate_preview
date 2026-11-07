import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from China: 2026 Guide",
  },
  description:
    "How Chinese companies set up a subsidiary in India: Press Note 3 approval, structure, incorporation, FEMA filings, the India-China tax treaty, documents.",
  alternates: guideAlternates("china", "hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Set%20Up%20a%20Subsidiary%20in%20India%20from%20China%3A%202026%20Guide", width: 1200, height: 630, alt: "Set Up a Subsidiary in India from China: 2026 Guide" }],
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from China: 2026 Guide",
    description:
      "How Chinese companies set up a subsidiary in India: Press Note 3 approval, structure, incorporation, FEMA filings, the India-China tax treaty, documents.",
    url: "https://www.theaucorp.com/china-to-india",
    locale: "en_CN",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from China: 2026 Guide",
    description:
      "How Chinese companies set up a subsidiary in India: Press Note 3 approval, structure, incorporation, FEMA filings, the India-China tax treaty, documents.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
