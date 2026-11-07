import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Global VAT for US Companies Selling Abroad",
  },
  description:
    "How VAT works for US companies selling digital services and goods into Europe, the UK and beyond: registration, B2B and B2C rules and compliance.",
  alternates: guideAlternates("usa", "global-vat"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Global%20VAT%20for%20US%20Companies%20Selling%20Abroad", width: 1200, height: 630, alt: "Global VAT for US Companies Selling Abroad" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Global VAT for US Companies Selling Abroad",
    description:
      "How VAT works for US companies selling digital services and goods into Europe, the UK and beyond: registration, B2B and B2C rules and compliance.",
    url: "https://www.theaucorp.com/usa-to-india/global-vat",
  },
  twitter: {
    title: "Global VAT for US Companies Selling Abroad",
    description:
      "How VAT works for US companies selling digital services and goods into Europe, the UK and beyond: registration, B2B and B2C rules and compliance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
