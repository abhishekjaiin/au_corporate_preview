import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Russia DTAA for Russian Companies",
  },
  description:
    "The India-Russia tax treaty explained for a Russian parent: 10% dividends, interest, royalties and fees for technical services, permanent establishment.",
  alternates: guideAlternates("russia", "india-dtaa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-Russia%20DTAA%20for%20Russian%20Companies", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "India-Russia DTAA for Russian Companies",
    description:
      "The India-Russia tax treaty explained for a Russian parent: 10% dividends, interest, royalties and fees for technical services, permanent establishment.",
    url: "https://www.theaucorp.com/russia-to-india/india-russia-dtaa",
    locale: "en_RU",
  },
  twitter: {
    title: "India-Russia DTAA for Russian Companies",
    description:
      "The India-Russia tax treaty explained for a Russian parent: 10% dividends, interest, royalties and fees for technical services, permanent establishment.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
