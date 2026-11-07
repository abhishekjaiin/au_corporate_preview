import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Contracts and Arbitration in India for Australian Companies",
  },
  description:
    "Contracts between an Australian parent and its Indian subsidiary: governing law, arbitration clauses, the New York Convention and enforcing awards in India.",
  alternates: guideAlternates("australia", "contracts-and-arbitration"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Contracts%20and%20Arbitration%20in%20India%20for%20Australian%20Companies", width: 1200, height: 630, alt: "Contracts and Arbitration in India for Australian Companies" }],
    siteName: "AU Corporate",
    title: "Contracts and Arbitration in India for Australian Companies",
    description:
      "Contracts between an Australian parent and its Indian subsidiary: governing law, arbitration clauses, the New York Convention and enforcing awards in India.",
    url: "https://www.theaucorp.com/australia-to-india/contracts-and-arbitration",
    locale: "en_AU",
  },
  twitter: {
    title: "Contracts and Arbitration in India for Australian Companies",
    description:
      "Contracts between an Australian parent and its Indian subsidiary: governing law, arbitration clauses, the New York Convention and enforcing awards in India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
