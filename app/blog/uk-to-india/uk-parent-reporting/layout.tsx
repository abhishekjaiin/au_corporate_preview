import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "UK Parent Obligations for an Indian Subsidiary",
  },
  description:
    "The UK-side tax and compliance duties of a parent with an Indian subsidiary: dividend exemption, CFC rules, foreign tax credit, UK transfer pricing, Pillar.",
  alternates: guideAlternates("uk", "parent-obligations"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=UK%20Parent%20Obligations%20for%20an%20Indian%20Subsidiary", width: 1200, height: 630, alt: "UK Parent Obligations for an Indian Subsidiary" }],
    siteName: "AU Corporate",
    title: "UK Parent Obligations for an Indian Subsidiary",
    description:
      "The UK-side tax and compliance duties of a parent with an Indian subsidiary: dividend exemption, CFC rules, foreign tax credit, UK transfer pricing, Pillar.",
    url: "https://www.theaucorp.com/uk-to-india/uk-parent-reporting",
    locale: "en_GB",
  },
  twitter: {
    title: "UK Parent Obligations for an Indian Subsidiary",
    description:
      "The UK-side tax and compliance duties of a parent with an Indian subsidiary: dividend exemption, CFC rules, foreign tax credit, UK transfer pricing, Pillar.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
