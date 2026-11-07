import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Subsidiary Compliance Calendar: Australia",
  },
  description:
    "The recurring compliance of an Australian-owned Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA.",
  alternates: guideAlternates("australia", "compliance-calendar"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Subsidiary%20Compliance%20Calendar%3A%20Australia", width: 1200, height: 630, alt: "India Subsidiary Compliance Calendar: Australia" }],
    siteName: "AU Corporate",
    title: "India Subsidiary Compliance Calendar: Australia",
    description:
      "The recurring compliance of an Australian-owned Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA.",
    url: "https://www.theaucorp.com/australia-to-india/compliance-calendar",
    locale: "en_AU",
  },
  twitter: {
    title: "India Subsidiary Compliance Calendar: Australia",
    description:
      "The recurring compliance of an Australian-owned Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
