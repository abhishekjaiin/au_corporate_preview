import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Repatriating Profits from India to Singapore",
  },
  description:
    "How a Singapore parent receives money from an Indian subsidiary: dividends at the treaty rate, fees and royalties at arm's length, interest and ECB.",
  alternates: guideAlternates("singapore", "repatriating-profits"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Repatriating%20Profits%20from%20India%20to%20Singapore", width: 1200, height: 630, alt: "Repatriating Profits from India to Singapore" }],
    siteName: "AU Corporate",
    title: "Repatriating Profits from India to Singapore",
    description:
      "How a Singapore parent receives money from an Indian subsidiary: dividends at the treaty rate, fees and royalties at arm's length, interest and ECB.",
    url: "https://www.theaucorp.com/singapore-to-india/repatriating-profits",
    locale: "en_SG",
  },
  twitter: {
    title: "Repatriating Profits from India to Singapore",
    description:
      "How a Singapore parent receives money from an Indian subsidiary: dividends at the treaty rate, fees and royalties at arm's length, interest and ECB.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
