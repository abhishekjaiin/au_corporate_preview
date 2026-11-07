import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Repatriating Profits from India to China",
  },
  description:
    "How a Chinese parent receives money from an Indian subsidiary: 10% treaty withholding, Section 393, Forms 41, 145 and 146, Chinese tax credit, scrutiny.",
  alternates: guideAlternates("china", "repatriating-profits"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Repatriating%20Profits%20from%20India%20to%20China", width: 1200, height: 630, alt: "Repatriating Profits from India to China" }],
    siteName: "AU Corporate",
    title: "Repatriating Profits from India to China",
    description:
      "How a Chinese parent receives money from an Indian subsidiary: 10% treaty withholding, Section 393, Forms 41, 145 and 146, Chinese tax credit, scrutiny.",
    url: "https://www.theaucorp.com/china-to-india/repatriating-profits",
    locale: "en_CN",
  },
  twitter: {
    title: "Repatriating Profits from India to China",
    description:
      "How a Chinese parent receives money from an Indian subsidiary: 10% treaty withholding, Section 393, Forms 41, 145 and 146, Chinese tax credit, scrutiny.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
