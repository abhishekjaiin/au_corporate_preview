import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Spain DTAA for Spanish Companies",
  },
  description:
    "The India-Spain tax treaty explained for a Spanish parent with India as source state and Spain as residence state: dividend, interest, royalty and technical.",
  alternates: guideAlternates("spain", "india-dtaa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-Spain%20DTAA%20for%20Spanish%20Companies", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "India-Spain DTAA for Spanish Companies",
    description:
      "The India-Spain tax treaty explained for a Spanish parent with India as source state and Spain as residence state: dividend, interest, royalty and technical.",
    url: "https://www.theaucorp.com/spain-to-india/india-spain-dtaa",
    locale: "en_ES",
  },
  twitter: {
    title: "India-Spain DTAA for Spanish Companies",
    description:
      "The India-Spain tax treaty explained for a Spanish parent with India as source state and Spain as residence state: dividend, interest, royalty and technical.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
