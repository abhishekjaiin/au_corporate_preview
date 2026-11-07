import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Relocating Hong Kong Staff to India",
  },
  description:
    "How to relocate Hong Kong staff to an Indian subsidiary: employment and business visa categories, the salary floor, FRRO registration within 14 days.",
  alternates: guideAlternates("hongkong", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Relocating%20Hong%20Kong%20Staff%20to%20India", width: 1200, height: 630, alt: "Relocating Hong Kong Staff to India" }],
    siteName: "AU Corporate",
    title: "Relocating Hong Kong Staff to India",
    description:
      "How to relocate Hong Kong staff to an Indian subsidiary: employment and business visa categories, the salary floor, FRRO registration within 14 days.",
    url: "https://www.theaucorp.com/hong-kong-to-india/relocate-hong-kong-staff",
    locale: "en_HK",
  },
  twitter: {
    title: "Relocating Hong Kong Staff to India",
    description:
      "How to relocate Hong Kong staff to an Indian subsidiary: employment and business visa categories, the salary floor, FRRO registration within 14 days.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
