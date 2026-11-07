import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-China DTAA for Chinese Companies",
  },
  description:
    "The India-China DTAA explained for a Chinese parent: 10% rates on dividends, interest, royalties and technical fees, permanent establishment rules, business.",
  alternates: guideAlternates("china", "india-dtaa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-China%20DTAA%20for%20Chinese%20Companies", width: 1200, height: 630, alt: "India-China DTAA for Chinese Companies" }],
    siteName: "AU Corporate",
    title: "India-China DTAA for Chinese Companies",
    description:
      "The India-China DTAA explained for a Chinese parent: 10% rates on dividends, interest, royalties and technical fees, permanent establishment rules, business.",
    url: "https://www.theaucorp.com/china-to-india/india-china-dtaa",
    locale: "en_CN",
  },
  twitter: {
    title: "India-China DTAA for Chinese Companies",
    description:
      "The India-China DTAA explained for a Chinese parent: 10% rates on dividends, interest, royalties and technical fees, permanent establishment rules, business.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
