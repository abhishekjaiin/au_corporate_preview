import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Funding an Indian Subsidiary from the UK",
  },
  description:
    "How a UK parent puts money into an Indian subsidiary legally: equity, convertible preference shares and loans, the fair-value pricing floor, the 60-day.",
  alternates: guideAlternates("uk", "funding-fema-fc-gpr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Funding%20an%20Indian%20Subsidiary%20from%20the%20UK", width: 1200, height: 630, alt: "Funding an Indian Subsidiary from the UK" }],
    siteName: "AU Corporate",
    title: "Funding an Indian Subsidiary from the UK",
    description:
      "How a UK parent puts money into an Indian subsidiary legally: equity, convertible preference shares and loans, the fair-value pricing floor, the 60-day.",
    url: "https://www.theaucorp.com/uk-to-india/funding-and-fema",
    locale: "en_GB",
  },
  twitter: {
    title: "Funding an Indian Subsidiary from the UK",
    description:
      "How a UK parent puts money into an Indian subsidiary legally: equity, convertible preference shares and loans, the fair-value pricing floor, the 60-day.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
