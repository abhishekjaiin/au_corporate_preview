import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing Between Singapore and India",
  },
  description:
    "How transfer pricing works between Singapore and India: Indian arm's length rules, Form 48, documentation, master file, safe harbours, IRAS routine support.",
  alternates: guideAlternates("singapore", "transfer-pricing"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Transfer%20Pricing%20Between%20Singapore%20and%20India", width: 1200, height: 630, alt: "Transfer Pricing Between Singapore and India" }],
    siteName: "AU Corporate",
    title: "Transfer Pricing Between Singapore and India",
    description:
      "How transfer pricing works between Singapore and India: Indian arm's length rules, Form 48, documentation, master file, safe harbours, IRAS routine support.",
    url: "https://www.theaucorp.com/singapore-to-india/transfer-pricing",
    locale: "en_SG",
  },
  twitter: {
    title: "Transfer Pricing Between Singapore and India",
    description:
      "How transfer pricing works between Singapore and India: Indian arm's length rules, Form 48, documentation, master file, safe harbours, IRAS routine support.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
