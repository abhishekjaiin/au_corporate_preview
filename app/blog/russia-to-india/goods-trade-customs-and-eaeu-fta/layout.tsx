import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Goods, Trade and Procurement for Russian Companies in India",
  },
  description:
    "What Russian companies and their Indian subsidiaries must know about goods: no India-Russia preferential agreement in force, EAEU free trade negotiations.",
  alternates: guideAlternates("russia", "trade-agreement"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Goods%2C%20Trade%20and%20Procurement%20for%20Russian%20Companies%20in%20India", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Goods, Trade and Procurement for Russian Companies in India",
    description:
      "What Russian companies and their Indian subsidiaries must know about goods: no India-Russia preferential agreement in force, EAEU free trade negotiations.",
    url: "https://www.theaucorp.com/russia-to-india/goods-trade-customs-and-eaeu-fta",
    locale: "en_RU",
  },
  twitter: {
    title: "Goods, Trade and Procurement for Russian Companies in India",
    description:
      "What Russian companies and their Indian subsidiaries must know about goods: no India-Russia preferential agreement in force, EAEU free trade negotiations.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
