import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hong Kong Documents for India: Apostille",
  },
  description:
    "How to prepare Hong Kong company and director documents for Indian filings: certified copies, notary public, Hong Kong apostille.",
  alternates: guideAlternates("hongkong", "documents-and-apostille"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hong%20Kong%20Documents%20for%20India%3A%20Apostille", width: 1200, height: 630, alt: "Hong Kong Documents for India: Apostille" }],
    siteName: "AU Corporate",
    title: "Hong Kong Documents for India: Apostille",
    description:
      "How to prepare Hong Kong company and director documents for Indian filings: certified copies, notary public, Hong Kong apostille.",
    url: "https://www.theaucorp.com/hong-kong-to-india/documents-hong-kong-apostille",
    locale: "en_HK",
  },
  twitter: { card: "summary_large_image",
    title: "Hong Kong Documents for India: Apostille",
    description:
      "How to prepare Hong Kong company and director documents for Indian filings: certified copies, notary public, Hong Kong apostille.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
