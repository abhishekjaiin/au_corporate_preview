import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Contracts and Arbitration in India for Japanese Companies",
  },
  description:
    "Contracts for a Japanese-owned Indian subsidiary: intercompany agreements, adapting Japanese templates, JCAA or SIAC arbitration.",
  alternates: guideAlternates("japan", "contracts-and-arbitration"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Contracts%20and%20Arbitration%20in%20India%20for%20Japanese%20Companies", width: 1200, height: 630, alt: "Contracts and Arbitration in India for Japanese Companies" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Contracts and Arbitration in India for Japanese Companies",
    description:
      "Contracts for a Japanese-owned Indian subsidiary: intercompany agreements, adapting Japanese templates, JCAA or SIAC arbitration.",
    url: "https://www.theaucorp.com/japan-to-india/contracts-and-arbitration",
  },
  twitter: { card: "summary_large_image",
    title: "Contracts and Arbitration in India for Japanese Companies",
    description:
      "Contracts for a Japanese-owned Indian subsidiary: intercompany agreements, adapting Japanese templates, JCAA or SIAC arbitration.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
