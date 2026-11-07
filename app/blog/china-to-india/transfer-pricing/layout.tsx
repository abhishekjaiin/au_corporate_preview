import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing Between China and India",
  },
  description:
    "How transfer pricing works between China and India: Indian arm's length rules and Form 48, pricing of components, equipment and technology, customs value.",
  alternates: guideAlternates("china", "transfer-pricing"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Transfer%20Pricing%20Between%20China%20and%20India", width: 1200, height: 630, alt: "Transfer Pricing Between China and India" }],
    siteName: "AU Corporate",
    title: "Transfer Pricing Between China and India",
    description:
      "How transfer pricing works between China and India: Indian arm's length rules and Form 48, pricing of components, equipment and technology, customs value.",
    url: "https://www.theaucorp.com/china-to-india/transfer-pricing",
    locale: "en_CN",
  },
  twitter: {
    title: "Transfer Pricing Between China and India",
    description:
      "How transfer pricing works between China and India: Indian arm's length rules and Form 48, pricing of components, equipment and technology, customs value.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
