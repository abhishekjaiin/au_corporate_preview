import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Compliance Calendar for a Spanish-Owned Indian Company",
  },
  description:
    "One calendar for the whole year showing what the Indian subsidiary files with Indian authorities and what the Spanish parent files in Spain, with the Indian.",
  alternates: guideAlternates("spain", "compliance-calendar"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Compliance%20Calendar%20for%20a%20Spanish-Owned%20Indian%20Company", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Compliance Calendar for a Spanish-Owned Indian Company",
    description:
      "One calendar for the whole year showing what the Indian subsidiary files with Indian authorities and what the Spanish parent files in Spain, with the Indian.",
    url: "https://www.theaucorp.com/spain-to-india/compliance-calendar",
    locale: "en_ES",
  },
  twitter: {
    title: "Compliance Calendar for a Spanish-Owned Indian Company",
    description:
      "One calendar for the whole year showing what the Indian subsidiary files with Indian authorities and what the Spanish parent files in Spain, with the Indian.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
