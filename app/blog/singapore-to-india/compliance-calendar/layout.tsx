import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Subsidiary Compliance Calendar: Singapore",
  },
  description:
    "A calendar of Indian monthly, quarterly and annual filings for a subsidiary of a Singapore company, with the Singapore parent's ACRA and IRAS dates.",
  alternates: guideAlternates("singapore", "compliance-calendar"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Subsidiary%20Compliance%20Calendar%3A%20Singapore", width: 1200, height: 630, alt: "India Subsidiary Compliance Calendar: Singapore" }],
    siteName: "AU Corporate",
    title: "India Subsidiary Compliance Calendar: Singapore",
    description:
      "A calendar of Indian monthly, quarterly and annual filings for a subsidiary of a Singapore company, with the Singapore parent's ACRA and IRAS dates.",
    url: "https://www.theaucorp.com/singapore-to-india/compliance-calendar",
    locale: "en_SG",
  },
  twitter: {
    title: "India Subsidiary Compliance Calendar: Singapore",
    description:
      "A calendar of Indian monthly, quarterly and annual filings for a subsidiary of a Singapore company, with the Singapore parent's ACRA and IRAS dates.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
