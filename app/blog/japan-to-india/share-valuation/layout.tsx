import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Share Valuation for Japanese Investment in India",
  },
  description:
    "Why shares issued to a Japanese parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation.",
  alternates: guideAlternates("japan", "share-valuation"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Share%20Valuation%20for%20Japanese%20Investment%20in%20India", width: 1200, height: 630, alt: "Share Valuation for Japanese Investment in India" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Share Valuation for Japanese Investment in India",
    description:
      "Why shares issued to a Japanese parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation.",
    url: "https://www.theaucorp.com/japan-to-india/share-valuation",
  },
  twitter: {
    title: "Share Valuation for Japanese Investment in India",
    description:
      "Why shares issued to a Japanese parent need a valuation, who can certify it, the pricing floor under FEMA, and when you need a fresh valuation.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
