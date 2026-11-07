import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Russian Documents for India: Apostille and Translation",
  },
  description:
    "How to prepare Russian company and director documents for Indian filings: both countries are parties to the Apostille Convention, which authority issues.",
  alternates: guideAlternates("russia", "documents-and-apostille"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Russian%20Documents%20for%20India%3A%20Apostille%20and%20Translation", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Russian Documents for India: Apostille and Translation",
    description:
      "How to prepare Russian company and director documents for Indian filings: both countries are parties to the Apostille Convention, which authority issues.",
    url: "https://www.theaucorp.com/russia-to-india/documents-apostille-and-translation",
    locale: "en_RU",
  },
  twitter: {
    title: "Russian Documents for India: Apostille and Translation",
    description:
      "How to prepare Russian company and director documents for Indian filings: both countries are parties to the Apostille Convention, which authority issues.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
