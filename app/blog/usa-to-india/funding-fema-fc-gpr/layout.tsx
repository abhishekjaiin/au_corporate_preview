import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Funding an Indian Subsidiary: FEMA and Form FC-GPR",
  },
  description:
    "How a US parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.",
  alternates: guideAlternates("usa", "funding-fema-fc-gpr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Funding%20an%20Indian%20Subsidiary%3A%20FEMA%20and%20Form%20FC-GPR", width: 1200, height: 630, alt: "Funding an Indian Subsidiary: FEMA and Form FC-GPR" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Funding an Indian Subsidiary: FEMA and Form FC-GPR",
    description:
      "How a US parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.",
    url: "https://www.theaucorp.com/usa-to-india/funding-fema-fc-gpr",
  },
  twitter: {
    title: "Funding an Indian Subsidiary: FEMA and Form FC-GPR",
    description:
      "How a US parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
