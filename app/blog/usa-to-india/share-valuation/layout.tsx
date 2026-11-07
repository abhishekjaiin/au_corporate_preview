import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Share Valuation for Foreign Investment in India",
  },
  description:
    "Why shares issued to a US parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation.",
  alternates: guideAlternates("usa", "share-valuation"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Share%20Valuation%20for%20Foreign%20Investment%20in%20India", width: 1200, height: 630, alt: "Share Valuation for Foreign Investment in India" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Share Valuation for Foreign Investment in India",
    description:
      "Why shares issued to a US parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation.",
    url: "https://www.theaucorp.com/usa-to-india/share-valuation",
  },
  twitter: {
    title: "Share Valuation for Foreign Investment in India",
    description:
      "Why shares issued to a US parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
