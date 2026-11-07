import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring in India as a UK Employer",
  },
  description:
    "How a UK company should hire in India through its subsidiary: contracts, provident fund, ESI, gratuity, the labour codes, payroll, and how to extend share.",
  alternates: guideAlternates("uk", "hiring-and-payroll"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hiring%20in%20India%20as%20a%20UK%20Employer", width: 1200, height: 630, alt: "Hiring in India as a UK Employer" }],
    siteName: "AU Corporate",
    title: "Hiring in India as a UK Employer",
    description:
      "How a UK company should hire in India through its subsidiary: contracts, provident fund, ESI, gratuity, the labour codes, payroll, and how to extend share.",
    url: "https://www.theaucorp.com/uk-to-india/hiring-in-india",
    locale: "en_GB",
  },
  twitter: {
    title: "Hiring in India as a UK Employer",
    description:
      "How a UK company should hire in India through its subsidiary: contracts, provident fund, ESI, gratuity, the labour codes, payroll, and how to extend share.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
