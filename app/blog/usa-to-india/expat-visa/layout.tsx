import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Sending a US Executive to India: Visa, Housing and Tax",
  },
  description:
    "How to relocate a US executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.",
  alternates: guideAlternates("usa", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Sending%20a%20US%20Executive%20to%20India%3A%20Visa%2C%20Housing%20and%20Tax", width: 1200, height: 630, alt: "Sending a US Executive to India: Visa, Housing and Tax" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Sending a US Executive to India: Visa, Housing and Tax",
    description:
      "How to relocate a US executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.",
    url: "https://www.theaucorp.com/usa-to-india/expat-visa",
  },
  twitter: {
    title: "Sending a US Executive to India: Visa, Housing and Tax",
    description:
      "How to relocate a US executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk for the parent.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
