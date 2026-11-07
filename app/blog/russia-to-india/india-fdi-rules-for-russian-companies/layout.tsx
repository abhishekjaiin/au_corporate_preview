import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India FDI Rules for Russian Companies",
  },
  description:
    "How India's FDI rules apply to a Russian parent: Press Note 3 covers land-border countries and Russia is not one, the Automatic Route and sector caps.",
  alternates: guideAlternates("russia", "fdi-rules"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20FDI%20Rules%20for%20Russian%20Companies", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "India FDI Rules for Russian Companies",
    description:
      "How India's FDI rules apply to a Russian parent: Press Note 3 covers land-border countries and Russia is not one, the Automatic Route and sector caps.",
    url: "https://www.theaucorp.com/russia-to-india/india-fdi-rules-for-russian-companies",
    locale: "en_RU",
  },
  twitter: {
    title: "India FDI Rules for Russian Companies",
    description:
      "How India's FDI rules apply to a Russian parent: Press Note 3 covers land-border countries and Russia is not one, the Automatic Route and sector caps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
