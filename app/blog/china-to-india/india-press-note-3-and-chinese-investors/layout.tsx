import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Press Note 3 Approval for Chinese Investors",
  },
  description:
    "How India's Press Note 3 (2020) applies to a Chinese parent: prior government approval for investors incorporated in China, the 2026 easing for passive.",
  alternates: guideAlternates("china", "press-note-3"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Press%20Note%203%20Approval%20for%20Chinese%20Investors", width: 1200, height: 630, alt: "Press Note 3 Approval for Chinese Investors" }],
    siteName: "AU Corporate",
    title: "Press Note 3 Approval for Chinese Investors",
    description:
      "How India's Press Note 3 (2020) applies to a Chinese parent: prior government approval for investors incorporated in China, the 2026 easing for passive.",
    url: "https://www.theaucorp.com/china-to-india/india-press-note-3-and-chinese-investors",
    locale: "en_CN",
  },
  twitter: {
    title: "Press Note 3 Approval for Chinese Investors",
    description:
      "How India's Press Note 3 (2020) applies to a Chinese parent: prior government approval for investors incorporated in China, the 2026 easing for passive.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
