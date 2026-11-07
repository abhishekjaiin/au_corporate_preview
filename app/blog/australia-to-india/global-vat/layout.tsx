import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Global VAT and GST for Australian Companies Selling Abroad",
  },
  description:
    "How VAT and GST work for Australian companies selling digital services and goods into Europe, the UK, New Zealand, India and beyond: registration, B2B.",
  alternates: guideAlternates("australia", "global-vat"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Global%20VAT%20and%20GST%20for%20Australian%20Companies%20Selling%20Abroad", width: 1200, height: 630, alt: "Global VAT and GST for Australian Companies Selling Abroad" }],
    siteName: "AU Corporate",
    title: "Global VAT and GST for Australian Companies Selling Abroad",
    description:
      "How VAT and GST work for Australian companies selling digital services and goods into Europe, the UK, New Zealand, India and beyond: registration, B2B.",
    url: "https://www.theaucorp.com/australia-to-india/global-vat",
    locale: "en_AU",
  },
  twitter: {
    title: "Global VAT and GST for Australian Companies Selling Abroad",
    description:
      "How VAT and GST work for Australian companies selling digital services and goods into Europe, the UK, New Zealand, India and beyond: registration, B2B.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
