import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring in India for a German Company",
  },
  description:
    "A comparison for German HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and dismissal, no works council.",
  alternates: guideAlternates("germany", "hiring-and-payroll"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hiring%20in%20India%20for%20a%20German%20Company", width: 1200, height: 630, alt: "Hiring in India for a German Company" }],
    siteName: "AU Corporate",
    title: "Hiring in India for a German Company",
    description:
      "A comparison for German HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and dismissal, no works council.",
    url: "https://www.theaucorp.com/germany-to-india/hiring-in-india",
    locale: "en_DE",
  },
  twitter: {
    title: "Hiring in India for a German Company",
    description:
      "A comparison for German HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and dismissal, no works council.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
