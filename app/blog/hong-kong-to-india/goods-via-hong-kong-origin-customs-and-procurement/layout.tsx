import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Goods via Hong Kong: Origin, Customs and Procurement",
  },
  description:
    "What Hong Kong traders must know when goods go to India: origin versus port of shipment, no India-Hong Kong trade agreement, customs value on related-party.",
  alternates: guideAlternates("hongkong", "trade-origin"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Goods%20via%20Hong%20Kong%3A%20Origin%2C%20Customs%20and%20Procurement", width: 1200, height: 630, alt: "Goods via Hong Kong: Origin, Customs and Procurement" }],
    siteName: "AU Corporate",
    title: "Goods via Hong Kong: Origin, Customs and Procurement",
    description:
      "What Hong Kong traders must know when goods go to India: origin versus port of shipment, no India-Hong Kong trade agreement, customs value on related-party.",
    url: "https://www.theaucorp.com/hong-kong-to-india/goods-via-hong-kong-origin-customs-and-procurement",
    locale: "en_HK",
  },
  twitter: {
    title: "Goods via Hong Kong: Origin, Customs and Procurement",
    description:
      "What Hong Kong traders must know when goods go to India: origin versus port of shipment, no India-Hong Kong trade agreement, customs value on related-party.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
