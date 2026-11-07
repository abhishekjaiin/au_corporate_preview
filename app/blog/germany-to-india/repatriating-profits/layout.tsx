import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Repatriating Profits from India to Germany",
  },
  description:
    "How a German parent receives money from an Indian subsidiary: the flat 10% treaty rate, Section 393 withholding, Forms 41, 145 and 146, German 95%.",
  alternates: guideAlternates("germany", "repatriating-profits"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Repatriating%20Profits%20from%20India%20to%20Germany", width: 1200, height: 630, alt: "Repatriating Profits from India to Germany" }],
    siteName: "AU Corporate",
    title: "Repatriating Profits from India to Germany",
    description:
      "How a German parent receives money from an Indian subsidiary: the flat 10% treaty rate, Section 393 withholding, Forms 41, 145 and 146, German 95%.",
    url: "https://www.theaucorp.com/germany-to-india/repatriating-profits",
    locale: "en_DE",
  },
  twitter: {
    title: "Repatriating Profits from India to Germany",
    description:
      "How a German parent receives money from an Indian subsidiary: the flat 10% treaty rate, Section 393 withholding, Forms 41, 145 and 146, German 95%.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
