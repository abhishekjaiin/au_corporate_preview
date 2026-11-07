import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Funding an Indian Subsidiary from Australia",
  },
  description:
    "How an Australian parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.",
  alternates: guideAlternates("australia", "funding-fema-fc-gpr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Funding%20an%20Indian%20Subsidiary%20from%20Australia", width: 1200, height: 630, alt: "Funding an Indian Subsidiary from Australia" }],
    siteName: "AU Corporate",
    title: "Funding an Indian Subsidiary from Australia",
    description:
      "How an Australian parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.",
    url: "https://www.theaucorp.com/australia-to-india/funding-fema-fc-gpr",
    locale: "en_AU",
  },
  twitter: {
    title: "Funding an Indian Subsidiary from Australia",
    description:
      "How an Australian parent invests in an Indian subsidiary: equity, CCPS, ECB, the 60-day allotment rule, pricing, and RBI reporting through Form FC-GPR on FIRMS.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
