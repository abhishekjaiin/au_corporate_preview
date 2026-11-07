import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Subsidiary Compliance Calendar for US Companies",
  },
  description:
    "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.",
  alternates: guideAlternates("usa", "compliance-calendar"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Subsidiary%20Compliance%20Calendar%20for%20US%20Companies", width: 1200, height: 630, alt: "India Subsidiary Compliance Calendar for US Companies" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "India Subsidiary Compliance Calendar for US Companies",
    description:
      "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.",
    url: "https://www.theaucorp.com/usa-to-india/compliance-calendar",
  },
  twitter: {
    title: "India Subsidiary Compliance Calendar for US Companies",
    description:
      "The recurring compliance of an Indian subsidiary: monthly, quarterly, annual and event-based filings under company, tax, GST, FEMA and labour law.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
