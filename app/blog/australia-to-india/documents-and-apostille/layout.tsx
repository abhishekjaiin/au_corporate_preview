import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Subsidiary Documents and Apostille, Australia",
  },
  description:
    "Which documents an Australian parent must prepare to incorporate an Indian subsidiary, and how notarisation and a DFAT apostille work.",
  alternates: guideAlternates("australia", "documents-and-apostille"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Subsidiary%20Documents%20and%20Apostille%2C%20Australia", width: 1200, height: 630, alt: "India Subsidiary Documents and Apostille, Australia" }],
    siteName: "AU Corporate",
    title: "India Subsidiary Documents and Apostille, Australia",
    description:
      "Which documents an Australian parent must prepare to incorporate an Indian subsidiary, and how notarisation and a DFAT apostille work.",
    url: "https://www.theaucorp.com/australia-to-india/documents-and-apostille",
    locale: "en_AU",
  },
  twitter: {
    title: "India Subsidiary Documents and Apostille, Australia",
    description:
      "Which documents an Australian parent must prepare to incorporate an Indian subsidiary, and how notarisation and a DFAT apostille work.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
