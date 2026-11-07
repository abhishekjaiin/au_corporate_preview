import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Repatriating Profits from India to Russia",
  },
  description:
    "How a Russian parent receives money from an Indian subsidiary: 10% treaty withholding, Section 393, Forms 41, 145 and 146, Russian tax treatment, payment.",
  alternates: guideAlternates("russia", "repatriating-profits"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Repatriating%20Profits%20from%20India%20to%20Russia", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Repatriating Profits from India to Russia",
    description:
      "How a Russian parent receives money from an Indian subsidiary: 10% treaty withholding, Section 393, Forms 41, 145 and 146, Russian tax treatment, payment.",
    url: "https://www.theaucorp.com/russia-to-india/repatriating-profits",
    locale: "en_RU",
  },
  twitter: {
    title: "Repatriating Profits from India to Russia",
    description:
      "How a Russian parent receives money from an Indian subsidiary: 10% treaty withholding, Section 393, Forms 41, 145 and 146, Russian tax treatment, payment.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
