import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from Australia: 2026 Guide",
  },
  description:
    "How Australian companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, the India-Australia tax treaty.",
  alternates: guideAlternates("australia", "hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Set%20Up%20a%20Subsidiary%20in%20India%20from%20Australia%3A%202026%20Guide", width: 1200, height: 630, alt: "Set Up a Subsidiary in India from Australia: 2026 Guide" }],
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from Australia: 2026 Guide",
    description:
      "How Australian companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, the India-Australia tax treaty.",
    url: "https://www.theaucorp.com/australia-to-india",
    locale: "en_AU",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from Australia: 2026 Guide",
    description:
      "How Australian companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, the India-Australia tax treaty.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
