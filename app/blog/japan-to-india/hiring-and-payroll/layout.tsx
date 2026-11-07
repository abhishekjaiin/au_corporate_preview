import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring in India for a Japanese Company",
  },
  description:
    "How Japanese companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.",
  alternates: guideAlternates("japan", "hiring-and-payroll"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hiring%20in%20India%20for%20a%20Japanese%20Company", width: 1200, height: 630, alt: "Hiring in India for a Japanese Company" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Hiring in India for a Japanese Company",
    description:
      "How Japanese companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.",
    url: "https://www.theaucorp.com/japan-to-india/hiring-and-payroll",
  },
  twitter: {
    title: "Hiring in India for a Japanese Company",
    description:
      "How Japanese companies hire in India: employment contracts, provident fund, ESI, gratuity, professional tax, payroll steps and India's labour codes.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
