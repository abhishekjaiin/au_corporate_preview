import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Subsidiary Compliance Calendar: Germany",
  },
  description:
    "A month-by-month compliance calendar for an Indian subsidiary of a German parent: TDS, GST, PF, ESI, advance tax, AGM, AOC-4, MGT-7 and the FLA return.",
  alternates: guideAlternates("germany", "compliance-calendar"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Subsidiary%20Compliance%20Calendar%3A%20Germany", width: 1200, height: 630, alt: "India Subsidiary Compliance Calendar: Germany" }],
    siteName: "AU Corporate",
    title: "India Subsidiary Compliance Calendar: Germany",
    description:
      "A month-by-month compliance calendar for an Indian subsidiary of a German parent: TDS, GST, PF, ESI, advance tax, AGM, AOC-4, MGT-7 and the FLA return.",
    url: "https://www.theaucorp.com/germany-to-india/compliance-calendar",
    locale: "en_DE",
  },
  twitter: {
    title: "India Subsidiary Compliance Calendar: Germany",
    description:
      "A month-by-month compliance calendar for an Indian subsidiary of a German parent: TDS, GST, PF, ESI, advance tax, AGM, AOC-4, MGT-7 and the FLA return.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
