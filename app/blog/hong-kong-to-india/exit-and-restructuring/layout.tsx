import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Exit and Restructuring in India for a Hong Kong Parent",
  },
  description:
    "How a Hong Kong parent exits or restructures an Indian business: sale of shares, FEMA pricing, FC-TRS, capital gains tax, buy-back, merger, voluntary.",
  alternates: guideAlternates("hongkong", "restructuring-and-exit"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Exit%20and%20Restructuring%20in%20India%20for%20a%20Hong%20Kong%20Parent", width: 1200, height: 630, alt: "Exit and Restructuring in India for a Hong Kong Parent" }],
    siteName: "AU Corporate",
    title: "Exit and Restructuring in India for a Hong Kong Parent",
    description:
      "How a Hong Kong parent exits or restructures an Indian business: sale of shares, FEMA pricing, FC-TRS, capital gains tax, buy-back, merger, voluntary.",
    url: "https://www.theaucorp.com/hong-kong-to-india/exit-and-restructuring",
    locale: "en_HK",
  },
  twitter: {
    title: "Exit and Restructuring in India for a Hong Kong Parent",
    description:
      "How a Hong Kong parent exits or restructures an Indian business: sale of shares, FEMA pricing, FC-TRS, capital gains tax, buy-back, merger, voluntary.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
