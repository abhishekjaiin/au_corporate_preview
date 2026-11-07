import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Subsidiary Compliance Calendar: Russia",
  },
  description:
    "A month-by-month compliance calendar for an Indian subsidiary of a Russian parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return.",
  alternates: guideAlternates("russia", "compliance-calendar"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Subsidiary%20Compliance%20Calendar%3A%20Russia", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "India Subsidiary Compliance Calendar: Russia",
    description:
      "A month-by-month compliance calendar for an Indian subsidiary of a Russian parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return.",
    url: "https://www.theaucorp.com/russia-to-india/compliance-calendar",
    locale: "en_RU",
  },
  twitter: {
    title: "India Subsidiary Compliance Calendar: Russia",
    description:
      "A month-by-month compliance calendar for an Indian subsidiary of a Russian parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
