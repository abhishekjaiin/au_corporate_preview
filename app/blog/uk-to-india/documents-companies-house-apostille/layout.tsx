import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Documents for an Indian Subsidiary from the UK",
  },
  description:
    "The documents a UK company needs to incorporate an Indian subsidiary, how Companies House papers, notarisation and the UK apostille work, and the mistakes.",
  alternates: guideAlternates("uk", "documents-and-apostille"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Documents%20for%20an%20Indian%20Subsidiary%20from%20the%20UK", width: 1200, height: 630, alt: "Documents for an Indian Subsidiary from the UK" }],
    siteName: "AU Corporate",
    title: "Documents for an Indian Subsidiary from the UK",
    description:
      "The documents a UK company needs to incorporate an Indian subsidiary, how Companies House papers, notarisation and the UK apostille work, and the mistakes.",
    url: "https://www.theaucorp.com/uk-to-india/documents-companies-house-apostille",
    locale: "en_GB",
  },
  twitter: {
    title: "Documents for an Indian Subsidiary from the UK",
    description:
      "The documents a UK company needs to incorporate an Indian subsidiary, how Companies House papers, notarisation and the UK apostille work, and the mistakes.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
