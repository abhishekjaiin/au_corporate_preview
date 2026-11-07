import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-UK CETA for UK Companies Entering India",
  },
  description:
    "What the India-UK CETA means for a UK company that wants to set up, staff or sell through an Indian subsidiary: services access, staff mobility, the Double.",
  alternates: guideAlternates("uk", "trade-agreement"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-UK%20CETA%20for%20UK%20Companies%20Entering%20India", width: 1200, height: 630, alt: "India-UK CETA for UK Companies Entering India" }],
    siteName: "AU Corporate",
    title: "India-UK CETA for UK Companies Entering India",
    description:
      "What the India-UK CETA means for a UK company that wants to set up, staff or sell through an Indian subsidiary: services access, staff mobility, the Double.",
    url: "https://www.theaucorp.com/uk-to-india/india-uk-ceta",
    locale: "en_GB",
  },
  twitter: {
    title: "India-UK CETA for UK Companies Entering India",
    description:
      "What the India-UK CETA means for a UK company that wants to set up, staff or sell through an Indian subsidiary: services access, staff mobility, the Double.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
