import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Global Capability Centres in India for German Companies",
  },
  description:
    "How German companies set up captive engineering, IT and shared service centres in India: entity choice, cost-plus transfer pricing, export of services.",
  alternates: guideAlternates("germany", "gcc"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Global%20Capability%20Centres%20in%20India%20for%20German%20Companies", width: 1200, height: 630, alt: "Global Capability Centres in India for German Companies" }],
    siteName: "AU Corporate",
    title: "Global Capability Centres in India for German Companies",
    description:
      "How German companies set up captive engineering, IT and shared service centres in India: entity choice, cost-plus transfer pricing, export of services.",
    url: "https://www.theaucorp.com/germany-to-india/gcc-for-german-companies",
    locale: "en_DE",
  },
  twitter: {
    title: "Global Capability Centres in India for German Companies",
    description:
      "How German companies set up captive engineering, IT and shared service centres in India: entity choice, cost-plus transfer pricing, export of services.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
