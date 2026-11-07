import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Global Capability Centre in India for US Companies",
  },
  description:
    "How a US company builds a captive engineering, finance or operations centre in India: the three delivery models, entity and tax choices, cost-plus transfer.",
  alternates: guideAlternates("usa", "gcc"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Global%20Capability%20Centre%20in%20India%20for%20US%20Companies", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Global Capability Centre in India for US Companies",
    description:
      "How a US company builds a captive engineering, finance or operations centre in India: the three delivery models, entity and tax choices, cost-plus transfer.",
    url: "https://www.theaucorp.com/usa-to-india/gcc-for-us-companies",
    locale: "en_US",
  },
  twitter: {
    title: "Global Capability Centre in India for US Companies",
    description:
      "How a US company builds a captive engineering, finance or operations centre in India: the three delivery models, entity and tax choices, cost-plus transfer.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
