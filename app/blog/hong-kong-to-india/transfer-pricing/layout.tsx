import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing for Hong Kong Groups in India",
  },
  description:
    "Transfer pricing for a Hong Kong group with an Indian subsidiary: arm's length rules, Form 3CEB, master file and local file, Hong Kong trading.",
  alternates: guideAlternates("hongkong", "transfer-pricing"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Transfer%20Pricing%20for%20Hong%20Kong%20Groups%20in%20India", width: 1200, height: 630, alt: "Transfer Pricing for Hong Kong Groups in India" }],
    siteName: "AU Corporate",
    title: "Transfer Pricing for Hong Kong Groups in India",
    description:
      "Transfer pricing for a Hong Kong group with an Indian subsidiary: arm's length rules, Form 3CEB, master file and local file, Hong Kong trading.",
    url: "https://www.theaucorp.com/hong-kong-to-india/transfer-pricing",
    locale: "en_HK",
  },
  twitter: {
    title: "Transfer Pricing for Hong Kong Groups in India",
    description:
      "Transfer pricing for a Hong Kong group with an Indian subsidiary: arm's length rules, Form 3CEB, master file and local file, Hong Kong trading.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
