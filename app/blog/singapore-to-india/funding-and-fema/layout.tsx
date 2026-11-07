import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Funding an Indian Subsidiary from Singapore",
  },
  description:
    "How a Singapore parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, remittance.",
  alternates: guideAlternates("singapore", "funding-fema-fc-gpr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Funding%20an%20Indian%20Subsidiary%20from%20Singapore", width: 1200, height: 630, alt: "Funding an Indian Subsidiary from Singapore" }],
    siteName: "AU Corporate",
    title: "Funding an Indian Subsidiary from Singapore",
    description:
      "How a Singapore parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, remittance.",
    url: "https://www.theaucorp.com/singapore-to-india/funding-and-fema",
    locale: "en_SG",
  },
  twitter: {
    title: "Funding an Indian Subsidiary from Singapore",
    description:
      "How a Singapore parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, remittance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
