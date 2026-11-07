import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "EU-India Trade Agreement and Spanish Exporters",
  },
  description:
    "The EU-India trade agreement as it affects a Spanish company exporting to or investing in India: the 27 January 2026 conclusion, the signature.",
  alternates: guideAlternates("spain", "trade-agreement"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=EU-India%20Trade%20Agreement%20and%20Spanish%20Exporters", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "EU-India Trade Agreement and Spanish Exporters",
    description:
      "The EU-India trade agreement as it affects a Spanish company exporting to or investing in India: the 27 January 2026 conclusion, the signature.",
    url: "https://www.theaucorp.com/spain-to-india/eu-india-fta-and-spanish-exporters",
    locale: "en_ES",
  },
  twitter: {
    title: "EU-India Trade Agreement and Spanish Exporters",
    description:
      "The EU-India trade agreement as it affects a Spanish company exporting to or investing in India: the 27 January 2026 conclusion, the signature.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
