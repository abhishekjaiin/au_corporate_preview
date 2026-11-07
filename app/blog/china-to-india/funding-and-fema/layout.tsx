import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Funding an Indian Subsidiary from China",
  },
  description:
    "How a Chinese parent funds an Indian subsidiary: equity pricing and valuation, compulsorily convertible instruments, external commercial borrowing.",
  alternates: guideAlternates("china", "funding-fema-fc-gpr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Funding%20an%20Indian%20Subsidiary%20from%20China", width: 1200, height: 630, alt: "Funding an Indian Subsidiary from China" }],
    siteName: "AU Corporate",
    title: "Funding an Indian Subsidiary from China",
    description:
      "How a Chinese parent funds an Indian subsidiary: equity pricing and valuation, compulsorily convertible instruments, external commercial borrowing.",
    url: "https://www.theaucorp.com/china-to-india/funding-and-fema",
    locale: "en_CN",
  },
  twitter: {
    title: "Funding an Indian Subsidiary from China",
    description:
      "How a Chinese parent funds an Indian subsidiary: equity pricing and valuation, compulsorily convertible instruments, external commercial borrowing.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
