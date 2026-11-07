import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from the USA: 2026 Guide",
  },
  description:
    "How US companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, tax and compliance. By a Chartered Accountant.",
  alternates: guideAlternates("usa", "hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Set%20Up%20a%20Subsidiary%20in%20India%20from%20the%20USA%3A%202026%20Guide", width: 1200, height: 630, alt: "Set Up a Subsidiary in India from the USA: 2026 Guide" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from the USA: 2026 Guide",
    description:
      "How US companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, tax and compliance. By a Chartered Accountant.",
    url: "https://www.theaucorp.com/usa-to-india",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from the USA: 2026 Guide",
    description:
      "How US companies set up a subsidiary in India: structure, FDI rules, incorporation steps, RBI/FEMA filings, tax and compliance. By a Chartered Accountant.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
