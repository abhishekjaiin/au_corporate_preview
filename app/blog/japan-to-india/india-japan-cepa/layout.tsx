import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: { absolute: "India-Japan CEPA: What It Means for Japanese Companies" },
  description: "How the India-Japan CEPA affects Japanese companies: tariff cuts, rules of origin, certificates, services and investment, and what it does not change.",
  alternates: guideAlternates("japan", "trade-agreement"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-Japan%20CEPA%3A%20What%20It%20Means%20for%20Japanese%20Companies", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "India-Japan CEPA: What It Means for Japanese Companies",
    description: "How the India-Japan CEPA affects Japanese companies: tariff cuts, rules of origin, certificates, services and investment, and what it does not change.",
    url: "https://www.theaucorp.com/japan-to-india/india-japan-cepa",
    locale: "en_JP",
  },
  twitter: { card: "summary_large_image", title: "India-Japan CEPA: What It Means for Japanese Companies", description: "How the India-Japan CEPA affects Japanese companies: tariff cuts, rules of origin, certificates, services and investment, and what it does not change." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
