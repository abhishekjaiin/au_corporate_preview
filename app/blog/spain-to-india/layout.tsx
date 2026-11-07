import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from Spain: 2026 Guide",
  },
  description:
    "How Spanish companies set up a subsidiary in India: FDI route, structure, incorporation, FEMA filings, the India-Spain tax treaty, Spanish declarations.",
  alternates: guideAlternates("spain", "hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Set%20Up%20a%20Subsidiary%20in%20India%20from%20Spain%3A%202026%20Guide", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from Spain: 2026 Guide",
    description:
      "How Spanish companies set up a subsidiary in India: FDI route, structure, incorporation, FEMA filings, the India-Spain tax treaty, Spanish declarations.",
    url: "https://www.theaucorp.com/spain-to-india",
    locale: "en_ES",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from Spain: 2026 Guide",
    description:
      "How Spanish companies set up a subsidiary in India: FDI route, structure, incorporation, FEMA filings, the India-Spain tax treaty, Spanish declarations.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
