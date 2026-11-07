import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Contracts and Arbitration in India for US Companies",
  },
  description:
    "Intercompany and customer contracts for an Indian subsidiary, governing law, arbitration clauses, the New York Convention and enforcing awards in India.",
  alternates: guideAlternates("usa", "contracts-and-arbitration"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Contracts%20and%20Arbitration%20in%20India%20for%20US%20Companies", width: 1200, height: 630, alt: "Contracts and Arbitration in India for US Companies" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Contracts and Arbitration in India for US Companies",
    description:
      "Intercompany and customer contracts for an Indian subsidiary, governing law, arbitration clauses, the New York Convention and enforcing awards in India.",
    url: "https://www.theaucorp.com/usa-to-india/contracts-and-arbitration",
  },
  twitter: {
    title: "Contracts and Arbitration in India for US Companies",
    description:
      "Intercompany and customer contracts for an Indian subsidiary, governing law, arbitration clauses, the New York Convention and enforcing awards in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
