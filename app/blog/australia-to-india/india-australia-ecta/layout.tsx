import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: { absolute: "India-Australia ECTA: What It Means for Australian Companies" },
  description: "How the India-Australia ECTA affects Australian companies: tariff cuts, rules of origin, services, the technical services tax change and the CECA talks.",
  alternates: guideAlternates("australia", "trade-agreement"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-Australia%20ECTA%3A%20What%20It%20Means%20for%20Australian%20Companies", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "India-Australia ECTA: What It Means for Australian Companies",
    description: "How the India-Australia ECTA affects Australian companies: tariff cuts, rules of origin, services, the technical services tax change and the CECA talks.",
    url: "https://www.theaucorp.com/australia-to-india/india-australia-ecta",
    locale: "en_AU",
  },
  twitter: { card: "summary_large_image", title: "India-Australia ECTA: What It Means for Australian Companies", description: "How the India-Australia ECTA affects Australian companies: tariff cuts, rules of origin, services, the technical services tax change and the CECA talks." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
