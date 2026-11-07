import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Global Capability Centres in India for UK Companies",
  },
  description:
    "How a UK company can build a captive Global Capability Centre (GCC) in India: models, stages, regulated-firm third-party rules, transfer pricing, PE risk.",
  alternates: guideAlternates("uk", "gcc"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Global%20Capability%20Centres%20in%20India%20for%20UK%20Companies", width: 1200, height: 630, alt: "Global Capability Centres in India for UK Companies" }],
    siteName: "AU Corporate",
    title: "Global Capability Centres in India for UK Companies",
    description:
      "How a UK company can build a captive Global Capability Centre (GCC) in India: models, stages, regulated-firm third-party rules, transfer pricing, PE risk.",
    url: "https://www.theaucorp.com/uk-to-india/gcc-for-uk-companies",
    locale: "en_GB",
  },
  twitter: {
    title: "Global Capability Centres in India for UK Companies",
    description:
      "How a UK company can build a captive Global Capability Centre (GCC) in India: models, stages, regulated-firm third-party rules, transfer pricing, PE risk.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
