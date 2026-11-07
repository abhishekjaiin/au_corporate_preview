import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from Germany: 2026 Guide",
  },
  description:
    "How German companies set up a subsidiary in India: structure, FDI rules, incorporation, FEMA filings, the India-Germany tax treaty, social security.",
  alternates: guideAlternates("germany", "hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Set%20Up%20a%20Subsidiary%20in%20India%20from%20Germany%3A%202026%20Guide", width: 1200, height: 630, alt: "Set Up a Subsidiary in India from Germany: 2026 Guide" }],
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from Germany: 2026 Guide",
    description:
      "How German companies set up a subsidiary in India: structure, FDI rules, incorporation, FEMA filings, the India-Germany tax treaty, social security.",
    url: "https://www.theaucorp.com/germany-to-india",
    locale: "en_DE",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from Germany: 2026 Guide",
    description:
      "How German companies set up a subsidiary in India: structure, FDI rules, incorporation, FEMA filings, the India-Germany tax treaty, social security.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
