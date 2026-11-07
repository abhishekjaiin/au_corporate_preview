import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Repatriating Profits from India to the UK",
  },
  description:
    "The routes a UK parent has for taking money out of its Indian subsidiary, with the Indian tax, UK tax, forms and timing for each route.",
  alternates: guideAlternates("uk", "repatriating-profits"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Repatriating%20Profits%20from%20India%20to%20the%20UK", width: 1200, height: 630, alt: "Repatriating Profits from India to the UK" }],
    siteName: "AU Corporate",
    title: "Repatriating Profits from India to the UK",
    description:
      "The routes a UK parent has for taking money out of its Indian subsidiary, with the Indian tax, UK tax, forms and timing for each route.",
    url: "https://www.theaucorp.com/uk-to-india/repatriating-profits",
    locale: "en_GB",
  },
  twitter: {
    title: "Repatriating Profits from India to the UK",
    description:
      "The routes a UK parent has for taking money out of its Indian subsidiary, with the Indian tax, UK tax, forms and timing for each route.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
