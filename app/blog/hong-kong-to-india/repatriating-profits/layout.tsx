import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Repatriating Profits from India to Hong Kong",
  },
  description:
    "How a Hong Kong parent receives money from an Indian subsidiary: 5% treaty withholding on dividends, 10% on interest, royalties and fees, Section 393, Forms.",
  alternates: guideAlternates("hongkong", "repatriating-profits"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Repatriating%20Profits%20from%20India%20to%20Hong%20Kong", width: 1200, height: 630, alt: "Repatriating Profits from India to Hong Kong" }],
    siteName: "AU Corporate",
    title: "Repatriating Profits from India to Hong Kong",
    description:
      "How a Hong Kong parent receives money from an Indian subsidiary: 5% treaty withholding on dividends, 10% on interest, royalties and fees, Section 393, Forms.",
    url: "https://www.theaucorp.com/hong-kong-to-india/repatriating-profits",
    locale: "en_HK",
  },
  twitter: {
    title: "Repatriating Profits from India to Hong Kong",
    description:
      "How a Hong Kong parent receives money from an Indian subsidiary: 5% treaty withholding on dividends, 10% on interest, royalties and fees, Section 393, Forms.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
