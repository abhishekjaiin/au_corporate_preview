import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Subsidiary Compliance Calendar for UK Companies",
  },
  description:
    "A month-by-month compliance calendar for an Indian subsidiary: GST, TDS, provident fund, advance tax, AGM, ROC and RBI filings.",
  alternates: guideAlternates("uk", "compliance-calendar"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Subsidiary%20Compliance%20Calendar%20for%20UK%20Companies", width: 1200, height: 630, alt: "India Subsidiary Compliance Calendar for UK Companies" }],
    siteName: "AU Corporate",
    title: "India Subsidiary Compliance Calendar for UK Companies",
    description:
      "A month-by-month compliance calendar for an Indian subsidiary: GST, TDS, provident fund, advance tax, AGM, ROC and RBI filings.",
    url: "https://www.theaucorp.com/uk-to-india/compliance-calendar",
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image",
    title: "India Subsidiary Compliance Calendar for UK Companies",
    description:
      "A month-by-month compliance calendar for an Indian subsidiary: GST, TDS, provident fund, advance tax, AGM, ROC and RBI filings.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
