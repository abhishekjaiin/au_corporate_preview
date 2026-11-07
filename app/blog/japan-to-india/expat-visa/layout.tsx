import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Sending a Japanese Executive to India: Visa, Housing and Tax",
  },
  description:
    "How to relocate a Japanese executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk.",
  alternates: guideAlternates("japan", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Sending%20a%20Japanese%20Executive%20to%20India%3A%20Visa%2C%20Housing%20and%20Tax", width: 1200, height: 630, alt: "Sending a Japanese Executive to India: Visa, Housing and Tax" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Sending a Japanese Executive to India: Visa, Housing and Tax",
    description:
      "How to relocate a Japanese executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk.",
    url: "https://www.theaucorp.com/japan-to-india/expat-visa",
  },
  twitter: {
    title: "Sending a Japanese Executive to India: Visa, Housing and Tax",
    description:
      "How to relocate a Japanese executive to India: employment visa, FRRO registration, housing, banking, tax residency and permanent establishment risk.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
