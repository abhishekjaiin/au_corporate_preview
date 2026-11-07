import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Spanish Documents for India: Apostille and Translation",
  },
  description:
    "How to prepare Spanish company and director documents for Indian filings: why Spain and India both accept the apostille, notarial deeds and Mercantile.",
  alternates: guideAlternates("spain", "documents-and-apostille"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Spanish%20Documents%20for%20India%3A%20Apostille%20and%20Translation", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Spanish Documents for India: Apostille and Translation",
    description:
      "How to prepare Spanish company and director documents for Indian filings: why Spain and India both accept the apostille, notarial deeds and Mercantile.",
    url: "https://www.theaucorp.com/spain-to-india/documents-apostille-and-sworn-translation",
    locale: "en_ES",
  },
  twitter: {
    title: "Spanish Documents for India: Apostille and Translation",
    description:
      "How to prepare Spanish company and director documents for Indian filings: why Spain and India both accept the apostille, notarial deeds and Mercantile.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
