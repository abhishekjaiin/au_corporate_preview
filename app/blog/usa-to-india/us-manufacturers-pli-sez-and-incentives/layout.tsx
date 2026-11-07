import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "US Manufacturers in India: PLI, SEZ and Customs",
  },
  description:
    "What a US manufacturer should check before building or contracting a plant in India: how PLI and zone incentives work and what they require, customs and GST.",
  alternates: guideAlternates("usa", "manufacturing-incentives"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=US%20Manufacturers%20in%20India%3A%20PLI%2C%20SEZ%20and%20Customs", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "US Manufacturers in India: PLI, SEZ and Customs",
    description:
      "What a US manufacturer should check before building or contracting a plant in India: how PLI and zone incentives work and what they require, customs and GST.",
    url: "https://www.theaucorp.com/usa-to-india/us-manufacturers-pli-sez-and-incentives",
    locale: "en_US",
  },
  twitter: {
    title: "US Manufacturers in India: PLI, SEZ and Customs",
    description:
      "What a US manufacturer should check before building or contracting a plant in India: how PLI and zone incentives work and what they require, customs and GST.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
