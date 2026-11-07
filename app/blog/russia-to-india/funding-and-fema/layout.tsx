import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Funding an Indian Subsidiary from Russia",
  },
  description:
    "How a Russian parent can fund an Indian company: equity and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return.",
  alternates: guideAlternates("russia", "funding-fema-fc-gpr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Funding%20an%20Indian%20Subsidiary%20from%20Russia", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Funding an Indian Subsidiary from Russia",
    description:
      "How a Russian parent can fund an Indian company: equity and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return.",
    url: "https://www.theaucorp.com/russia-to-india/funding-and-fema",
    locale: "en_RU",
  },
  twitter: {
    title: "Funding an Indian Subsidiary from Russia",
    description:
      "How a Russian parent can fund an Indian company: equity and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
