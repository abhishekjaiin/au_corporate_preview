import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "SIAC Arbitration and Enforcing Awards in India",
  },
  description:
    "How a Singapore parent protects its Indian subsidiary contracts: choice of law, SIAC arbitration, enforcing Singapore awards and judgments in India.",
  alternates: guideAlternates("singapore", "contracts-and-arbitration"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=SIAC%20Arbitration%20and%20Enforcing%20Awards%20in%20India", width: 1200, height: 630, alt: "SIAC Arbitration and Enforcing Awards in India" }],
    siteName: "AU Corporate",
    title: "SIAC Arbitration and Enforcing Awards in India",
    description:
      "How a Singapore parent protects its Indian subsidiary contracts: choice of law, SIAC arbitration, enforcing Singapore awards and judgments in India.",
    url: "https://www.theaucorp.com/singapore-to-india/contracts-courts-siac",
    locale: "en_SG",
  },
  twitter: {
    title: "SIAC Arbitration and Enforcing Awards in India",
    description:
      "How a Singapore parent protects its Indian subsidiary contracts: choice of law, SIAC arbitration, enforcing Singapore awards and judgments in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
