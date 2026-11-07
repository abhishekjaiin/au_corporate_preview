import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Relocating UK Staff to India",
  },
  description:
    "How to move a UK employee to India: employment or short-stay visa, CETA intra-corporate transfers, FRRO registration, housing, banking and family.",
  alternates: guideAlternates("uk", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Relocating%20UK%20Staff%20to%20India", width: 1200, height: 630, alt: "Relocating UK Staff to India" }],
    siteName: "AU Corporate",
    title: "Relocating UK Staff to India",
    description:
      "How to move a UK employee to India: employment or short-stay visa, CETA intra-corporate transfers, FRRO registration, housing, banking and family.",
    url: "https://www.theaucorp.com/uk-to-india/relocate-uk-staff",
    locale: "en_GB",
  },
  twitter: {
    title: "Relocating UK Staff to India",
    description:
      "How to move a UK employee to India: employment or short-stay visa, CETA intra-corporate transfers, FRRO registration, housing, banking and family.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
