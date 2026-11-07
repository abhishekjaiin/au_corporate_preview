import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Hong Kong Contracts, Courts and Arbitration",
  },
  description:
    "How to draft and enforce contracts between a Hong Kong company and Indian counterparties: governing law, HKIAC or SIAC seats, Hong Kong as a reciprocating.",
  alternates: guideAlternates("hongkong", "contracts-and-arbitration"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-Hong%20Kong%20Contracts%2C%20Courts%20and%20Arbitration", width: 1200, height: 630, alt: "India-Hong Kong Contracts, Courts and Arbitration" }],
    siteName: "AU Corporate",
    title: "India-Hong Kong Contracts, Courts and Arbitration",
    description:
      "How to draft and enforce contracts between a Hong Kong company and Indian counterparties: governing law, HKIAC or SIAC seats, Hong Kong as a reciprocating.",
    url: "https://www.theaucorp.com/hong-kong-to-india/contracts-courts-arbitration",
    locale: "en_HK",
  },
  twitter: {
    title: "India-Hong Kong Contracts, Courts and Arbitration",
    description:
      "How to draft and enforce contracts between a Hong Kong company and Indian counterparties: governing law, HKIAC or SIAC seats, Hong Kong as a reciprocating.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
