import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Resident Director in India for Spanish Companies",
  },
  description:
    "Every Indian company needs a director who has lived in India for 182 days. This guide explains the rule, the four ways a Spanish group can meet it.",
  alternates: guideAlternates("spain", "resident-director"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Resident%20Director%20in%20India%20for%20Spanish%20Companies", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Resident Director in India for Spanish Companies",
    description:
      "Every Indian company needs a director who has lived in India for 182 days. This guide explains the rule, the four ways a Spanish group can meet it.",
    url: "https://www.theaucorp.com/spain-to-india/resident-director-service-for-spanish-companies",
    locale: "en_ES",
  },
  twitter: {
    title: "Resident Director in India for Spanish Companies",
    description:
      "Every Indian company needs a director who has lived in India for 182 days. This guide explains the rule, the four ways a Spanish group can meet it.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
