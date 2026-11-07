import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Press Note 3 for Hong Kong Companies in India",
  },
  description:
    "How India's Press Note 3 applies to a Hong Kong parent: the March 2026 government statement that Hong Kong-registered firms still need prior approval.",
  alternates: guideAlternates("hongkong", "press-note-3"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Press%20Note%203%20for%20Hong%20Kong%20Companies%20in%20India", width: 1200, height: 630, alt: "Press Note 3 for Hong Kong Companies in India" }],
    siteName: "AU Corporate",
    title: "Press Note 3 for Hong Kong Companies in India",
    description:
      "How India's Press Note 3 applies to a Hong Kong parent: the March 2026 government statement that Hong Kong-registered firms still need prior approval.",
    url: "https://www.theaucorp.com/hong-kong-to-india/india-press-note-3-and-hong-kong-entities",
    locale: "en_HK",
  },
  twitter: {
    title: "Press Note 3 for Hong Kong Companies in India",
    description:
      "How India's Press Note 3 applies to a Hong Kong parent: the March 2026 government statement that Hong Kong-registered firms still need prior approval.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
