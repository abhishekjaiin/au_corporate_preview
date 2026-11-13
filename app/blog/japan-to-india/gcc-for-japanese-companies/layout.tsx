import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: { absolute: "GCC Setup in India for Japanese Companies (2026 Guide)" },
  description: "How Japanese companies set up a GCC in India: own centre or BOT, Japanese-speaking bridge roles, cities, cost-plus pricing and the ringi timeline.",
  alternates: guideAlternates("japan", "gcc"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=GCC%20Setup%20in%20India%20for%20Japanese%20Companies%20%282026%20Guide%29", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "GCC Setup in India for Japanese Companies (2026 Guide)",
    description: "How Japanese companies set up a GCC in India: own centre or BOT, Japanese-speaking bridge roles, cities, cost-plus pricing and the ringi timeline.",
    url: "https://www.theaucorp.com/japan-to-india/gcc-for-japanese-companies",
    locale: "en_JP",
  },
  twitter: { title: "GCC Setup in India for Japanese Companies (2026 Guide)", description: "How Japanese companies set up a GCC in India: own centre or BOT, Japanese-speaking bridge roles, cities, cost-plus pricing and the ringi timeline." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
