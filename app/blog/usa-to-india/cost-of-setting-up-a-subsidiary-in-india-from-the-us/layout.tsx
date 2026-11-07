import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Cost of Setting Up a Subsidiary in India from the US",
  },
  description:
    "A budgeting guide for US companies: what the one-time set-up costs, what the subsidiary costs every year to keep compliant, how to size the capital you.",
  alternates: guideAlternates("usa", "setup-cost"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Cost%20of%20Setting%20Up%20a%20Subsidiary%20in%20India%20from%20the%20US", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Cost of Setting Up a Subsidiary in India from the US",
    description:
      "A budgeting guide for US companies: what the one-time set-up costs, what the subsidiary costs every year to keep compliant, how to size the capital you.",
    url: "https://www.theaucorp.com/usa-to-india/cost-of-setting-up-a-subsidiary-in-india-from-the-us",
    locale: "en_US",
  },
  twitter: {
    title: "Cost of Setting Up a Subsidiary in India from the US",
    description:
      "A budgeting guide for US companies: what the one-time set-up costs, what the subsidiary costs every year to keep compliant, how to size the capital you.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
