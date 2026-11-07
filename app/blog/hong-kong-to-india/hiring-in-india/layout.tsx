import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring in India for a Hong Kong-Owned Company",
  },
  description:
    "How a Hong Kong-owned Indian subsidiary hires locally: offer and employment contracts, payroll taxes, provident fund, ESI, gratuity, labour codes, shops.",
  alternates: guideAlternates("hongkong", "hiring-and-payroll"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hiring%20in%20India%20for%20a%20Hong%20Kong-Owned%20Company", width: 1200, height: 630, alt: "Hiring in India for a Hong Kong-Owned Company" }],
    siteName: "AU Corporate",
    title: "Hiring in India for a Hong Kong-Owned Company",
    description:
      "How a Hong Kong-owned Indian subsidiary hires locally: offer and employment contracts, payroll taxes, provident fund, ESI, gratuity, labour codes, shops.",
    url: "https://www.theaucorp.com/hong-kong-to-india/hiring-in-india",
    locale: "en_HK",
  },
  twitter: {
    title: "Hiring in India for a Hong Kong-Owned Company",
    description:
      "How a Hong Kong-owned Indian subsidiary hires locally: offer and employment contracts, payroll taxes, provident fund, ESI, gratuity, labour codes, shops.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
