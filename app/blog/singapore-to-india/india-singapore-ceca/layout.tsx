import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Singapore CECA for Singapore Companies",
  },
  description:
    "What the India-Singapore Comprehensive Economic Cooperation Agreement (CECA) means for a Singapore company with an Indian subsidiary: investment, services.",
  alternates: guideAlternates("singapore", "trade-agreement"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-Singapore%20CECA%20for%20Singapore%20Companies", width: 1200, height: 630, alt: "India-Singapore CECA for Singapore Companies" }],
    siteName: "AU Corporate",
    title: "India-Singapore CECA for Singapore Companies",
    description:
      "What the India-Singapore Comprehensive Economic Cooperation Agreement (CECA) means for a Singapore company with an Indian subsidiary: investment, services.",
    url: "https://www.theaucorp.com/singapore-to-india/india-singapore-ceca",
    locale: "en_SG",
  },
  twitter: {
    title: "India-Singapore CECA for Singapore Companies",
    description:
      "What the India-Singapore Comprehensive Economic Cooperation Agreement (CECA) means for a Singapore company with an Indian subsidiary: investment, services.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
