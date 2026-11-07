import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-UK DTAA for UK Companies",
  },
  description:
    "The India-UK double taxation convention explained article by article from the UK parent's point of view: rates table, permanent establishment, royalties.",
  alternates: guideAlternates("uk", "india-dtaa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-UK%20DTAA%20for%20UK%20Companies", width: 1200, height: 630, alt: "India-UK DTAA for UK Companies" }],
    siteName: "AU Corporate",
    title: "India-UK DTAA for UK Companies",
    description:
      "The India-UK double taxation convention explained article by article from the UK parent's point of view: rates table, permanent establishment, royalties.",
    url: "https://www.theaucorp.com/uk-to-india/india-uk-dtaa",
    locale: "en_GB",
  },
  twitter: {
    title: "India-UK DTAA for UK Companies",
    description:
      "The India-UK double taxation convention explained article by article from the UK parent's point of view: rates table, permanent establishment, royalties.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
