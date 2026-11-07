import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing for Spanish Groups in India",
  },
  description:
    "How India and Spain test related-party prices: methods, thresholds, Form 3CEB, the master and local files, intra-group services and royalties, loans, safe.",
  alternates: guideAlternates("spain", "transfer-pricing"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Transfer%20Pricing%20for%20Spanish%20Groups%20in%20India", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Transfer Pricing for Spanish Groups in India",
    description:
      "How India and Spain test related-party prices: methods, thresholds, Form 3CEB, the master and local files, intra-group services and royalties, loans, safe.",
    url: "https://www.theaucorp.com/spain-to-india/transfer-pricing",
    locale: "en_ES",
  },
  twitter: {
    title: "Transfer Pricing for Spanish Groups in India",
    description:
      "How India and Spain test related-party prices: methods, thresholds, Form 3CEB, the master and local files, intra-group services and royalties, loans, safe.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
