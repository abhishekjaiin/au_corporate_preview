import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from the UK: 2026 Guide",
  },
  description:
    "How UK companies set up a subsidiary in India: structure, FDI rules, incorporation, FEMA filings, the India-UK tax treaty, CETA, staff and compliance.",
  alternates: guideAlternates("uk", "hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Set%20Up%20a%20Subsidiary%20in%20India%20from%20the%20UK%3A%202026%20Guide", width: 1200, height: 630, alt: "Set Up a Subsidiary in India from the UK: 2026 Guide" }],
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from the UK: 2026 Guide",
    description:
      "How UK companies set up a subsidiary in India: structure, FDI rules, incorporation, FEMA filings, the India-UK tax treaty, CETA, staff and compliance.",
    url: "https://www.theaucorp.com/uk-to-india",
    locale: "en_GB",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from the UK: 2026 Guide",
    description:
      "How UK companies set up a subsidiary in India: structure, FDI rules, incorporation, FEMA filings, the India-UK tax treaty, CETA, staff and compliance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
