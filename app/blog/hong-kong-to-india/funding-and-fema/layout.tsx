import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Funding an Indian Subsidiary from Hong Kong",
  },
  description:
    "How a Hong Kong parent can fund an Indian company: equity share and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return.",
  alternates: guideAlternates("hongkong", "funding-fema-fc-gpr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Funding%20an%20Indian%20Subsidiary%20from%20Hong%20Kong", width: 1200, height: 630, alt: "Funding an Indian Subsidiary from Hong Kong" }],
    siteName: "AU Corporate",
    title: "Funding an Indian Subsidiary from Hong Kong",
    description:
      "How a Hong Kong parent can fund an Indian company: equity share and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return.",
    url: "https://www.theaucorp.com/hong-kong-to-india/funding-and-fema",
    locale: "en_HK",
  },
  twitter: {
    title: "Funding an Indian Subsidiary from Hong Kong",
    description:
      "How a Hong Kong parent can fund an Indian company: equity share and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
