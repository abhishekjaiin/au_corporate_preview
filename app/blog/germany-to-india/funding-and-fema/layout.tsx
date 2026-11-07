import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Funding an Indian Subsidiary from Germany",
  },
  description:
    "How a German parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, euro remittance.",
  alternates: guideAlternates("germany", "funding-fema-fc-gpr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Funding%20an%20Indian%20Subsidiary%20from%20Germany", width: 1200, height: 630, alt: "Funding an Indian Subsidiary from Germany" }],
    siteName: "AU Corporate",
    title: "Funding an Indian Subsidiary from Germany",
    description:
      "How a German parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, euro remittance.",
    url: "https://www.theaucorp.com/germany-to-india/funding-and-fema",
    locale: "en_DE",
  },
  twitter: {
    title: "Funding an Indian Subsidiary from Germany",
    description:
      "How a German parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, euro remittance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
