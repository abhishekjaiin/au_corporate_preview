import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring in India for Australian Companies",
  },
  description:
    "How Australian companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.",
  alternates: guideAlternates("australia", "hiring-and-payroll"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hiring%20in%20India%20for%20Australian%20Companies", width: 1200, height: 630, alt: "Hiring in India for Australian Companies" }],
    siteName: "AU Corporate",
    title: "Hiring in India for Australian Companies",
    description:
      "How Australian companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.",
    url: "https://www.theaucorp.com/australia-to-india/hiring-and-payroll",
    locale: "en_AU",
  },
  twitter: {
    title: "Hiring in India for Australian Companies",
    description:
      "How Australian companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
