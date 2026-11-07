import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring in India for a Singapore Company",
  },
  description:
    "A comparison for Singapore HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and termination, payroll tax.",
  alternates: guideAlternates("singapore", "hiring-and-payroll"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hiring%20in%20India%20for%20a%20Singapore%20Company", width: 1200, height: 630, alt: "Hiring in India for a Singapore Company" }],
    siteName: "AU Corporate",
    title: "Hiring in India for a Singapore Company",
    description:
      "A comparison for Singapore HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and termination, payroll tax.",
    url: "https://www.theaucorp.com/singapore-to-india/hiring-in-india",
    locale: "en_SG",
  },
  twitter: {
    title: "Hiring in India for a Singapore Company",
    description:
      "A comparison for Singapore HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and termination, payroll tax.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
