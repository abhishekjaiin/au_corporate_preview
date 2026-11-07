import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Contracts, Courts and Arbitration between India and Russia",
  },
  description:
    "How to draft and enforce contracts between a Russian company and Indian counterparties: governing law, arbitration seat and institution, enforcing awards.",
  alternates: guideAlternates("russia", "contracts-and-arbitration"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Contracts%2C%20Courts%20and%20Arbitration%20between%20India%20and%20Russia", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Contracts, Courts and Arbitration between India and Russia",
    description:
      "How to draft and enforce contracts between a Russian company and Indian counterparties: governing law, arbitration seat and institution, enforcing awards.",
    url: "https://www.theaucorp.com/russia-to-india/contracts-courts-arbitration",
    locale: "en_RU",
  },
  twitter: {
    title: "Contracts, Courts and Arbitration between India and Russia",
    description:
      "How to draft and enforce contracts between a Russian company and Indian counterparties: governing law, arbitration seat and institution, enforcing awards.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
