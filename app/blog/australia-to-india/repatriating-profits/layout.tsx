import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Repatriating Profits from India to Australia: Forms and Tax",
  },
  description:
    "How an Australian parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans.",
  alternates: guideAlternates("australia", "repatriating-profits"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Repatriating%20Profits%20from%20India%20to%20Australia%3A%20Forms%20and%20Tax", width: 1200, height: 630, alt: "Repatriating Profits from India to Australia: Forms and Tax" }],
    siteName: "AU Corporate",
    title: "Repatriating Profits from India to Australia: Forms and Tax",
    description:
      "How an Australian parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans.",
    url: "https://www.theaucorp.com/australia-to-india/repatriating-profits",
    locale: "en_AU",
  },
  twitter: {
    title: "Repatriating Profits from India to Australia: Forms and Tax",
    description:
      "How an Australian parent receives money from its Indian subsidiary: dividends, service fees, royalties, loans.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
