import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Using a Singapore Holding Company for India",
  },
  description:
    "How a Singapore holdco is used to own Indian subsidiaries: treaty positions on dividends and gains, grandfathering, Article 24A limitation of benefits.",
  alternates: guideAlternates("singapore", "holdco"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Using%20a%20Singapore%20Holding%20Company%20for%20India", width: 1200, height: 630, alt: "Using a Singapore Holding Company for India" }],
    siteName: "AU Corporate",
    title: "Using a Singapore Holding Company for India",
    description:
      "How a Singapore holdco is used to own Indian subsidiaries: treaty positions on dividends and gains, grandfathering, Article 24A limitation of benefits.",
    url: "https://www.theaucorp.com/singapore-to-india/singapore-holdco-for-india",
    locale: "en_SG",
  },
  twitter: {
    title: "Using a Singapore Holding Company for India",
    description:
      "How a Singapore holdco is used to own Indian subsidiaries: treaty positions on dividends and gains, grandfathering, Article 24A limitation of benefits.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
