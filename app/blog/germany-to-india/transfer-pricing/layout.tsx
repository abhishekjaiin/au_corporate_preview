import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing Between Germany and India",
  },
  description:
    "How transfer pricing works between Germany and India: Indian arm's length rules and Form 48, German documentation duties, the function transfer rules, APAs.",
  alternates: guideAlternates("germany", "transfer-pricing"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Transfer%20Pricing%20Between%20Germany%20and%20India", width: 1200, height: 630, alt: "Transfer Pricing Between Germany and India" }],
    siteName: "AU Corporate",
    title: "Transfer Pricing Between Germany and India",
    description:
      "How transfer pricing works between Germany and India: Indian arm's length rules and Form 48, German documentation duties, the function transfer rules, APAs.",
    url: "https://www.theaucorp.com/germany-to-india/transfer-pricing",
    locale: "en_DE",
  },
  twitter: {
    title: "Transfer Pricing Between Germany and India",
    description:
      "How transfer pricing works between Germany and India: Indian arm's length rules and Form 48, German documentation duties, the function transfer rules, APAs.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
