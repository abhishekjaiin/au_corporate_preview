import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "UK Board Resolution and Companies House Apostille for India",
  },
  description:
    "The documents a UK company needs to incorporate an Indian subsidiary, how Companies House papers, notarisation and the UK apostille work.",
  alternates: guideAlternates("uk", "documents-and-apostille"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Documents%20for%20an%20Indian%20Subsidiary%20from%20the%20UK", width: 1200, height: 630, alt: "UK Board Resolution and Companies House Apostille for India" }],
    siteName: "AU Corporate",
    title: "UK Board Resolution and Companies House Apostille for India",
    description:
      "The documents a UK company needs to incorporate an Indian subsidiary, how Companies House papers, notarisation and the UK apostille work.",
    url: "https://www.theaucorp.com/uk-to-india/documents-companies-house-apostille",
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image",
    title: "UK Board Resolution and Companies House Apostille for India",
    description:
      "The documents a UK company needs to incorporate an Indian subsidiary, how Companies House papers, notarisation and the UK apostille work.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
