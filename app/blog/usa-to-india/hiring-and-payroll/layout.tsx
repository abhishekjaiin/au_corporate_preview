import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring in India: Contracts, Payroll and Statutory Compliance",
  },
  description:
    "How US companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.",
  alternates: guideAlternates("usa", "hiring-and-payroll"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hiring%20in%20India%3A%20Contracts%2C%20Payroll%20and%20Statutory%20Compliance", width: 1200, height: 630, alt: "Hiring in India: Contracts, Payroll and Statutory Compliance" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Hiring in India: Contracts, Payroll and Statutory Compliance",
    description:
      "How US companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.",
    url: "https://www.theaucorp.com/usa-to-india/hiring-and-payroll",
  },
  twitter: {
    title: "Hiring in India: Contracts, Payroll and Statutory Compliance",
    description:
      "How US companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
