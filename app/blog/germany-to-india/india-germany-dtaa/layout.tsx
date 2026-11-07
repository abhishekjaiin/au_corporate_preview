import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Germany DTAA for German Companies",
  },
  description:
    "The India-Germany double taxation agreement explained article by article from the German parent's point of view: the flat 10% rates table, permanent.",
  alternates: guideAlternates("germany", "india-dtaa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-Germany%20DTAA%20for%20German%20Companies", width: 1200, height: 630, alt: "India-Germany DTAA for German Companies" }],
    siteName: "AU Corporate",
    title: "India-Germany DTAA for German Companies",
    description:
      "The India-Germany double taxation agreement explained article by article from the German parent's point of view: the flat 10% rates table, permanent.",
    url: "https://www.theaucorp.com/germany-to-india/india-germany-dtaa",
    locale: "en_DE",
  },
  twitter: {
    title: "India-Germany DTAA for German Companies",
    description:
      "The India-Germany double taxation agreement explained article by article from the German parent's point of view: the flat 10% rates table, permanent.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
