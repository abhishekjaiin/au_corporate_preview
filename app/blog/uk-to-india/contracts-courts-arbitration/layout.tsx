import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Contracts, Courts and Arbitration for UK Companies in India",
  },
  description:
    "How a UK company should draft contracts with its Indian subsidiary and customers, choose governing law and seat, and enforce English court judgments.",
  alternates: guideAlternates("uk", "contracts-and-arbitration"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Contracts%2C%20Courts%20and%20Arbitration%20for%20UK%20Companies%20in%20India", width: 1200, height: 630, alt: "Contracts, Courts and Arbitration for UK Companies in India" }],
    siteName: "AU Corporate",
    title: "Contracts, Courts and Arbitration for UK Companies in India",
    description:
      "How a UK company should draft contracts with its Indian subsidiary and customers, choose governing law and seat, and enforce English court judgments.",
    url: "https://www.theaucorp.com/uk-to-india/contracts-courts-arbitration",
    locale: "en_GB",
  },
  twitter: {
    title: "Contracts, Courts and Arbitration for UK Companies in India",
    description:
      "How a UK company should draft contracts with its Indian subsidiary and customers, choose governing law and seat, and enforce English court judgments.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
