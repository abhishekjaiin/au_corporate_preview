import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Contracts and Arbitration in India for Spanish Companies",
  },
  description:
    "How to draft and enforce contracts with Indian counterparties from Spain: governing law, the choice of arbitration seat (Madrid, Singapore, London.",
  alternates: guideAlternates("spain", "contracts-and-arbitration"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Contracts%20and%20Arbitration%20in%20India%20for%20Spanish%20Companies", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Contracts and Arbitration in India for Spanish Companies",
    description:
      "How to draft and enforce contracts with Indian counterparties from Spain: governing law, the choice of arbitration seat (Madrid, Singapore, London.",
    url: "https://www.theaucorp.com/spain-to-india/contracts-courts-arbitration",
    locale: "en_ES",
  },
  twitter: {
    title: "Contracts and Arbitration in India for Spanish Companies",
    description:
      "How to draft and enforce contracts with Indian counterparties from Spain: governing law, the choice of arbitration seat (Madrid, Singapore, London.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
