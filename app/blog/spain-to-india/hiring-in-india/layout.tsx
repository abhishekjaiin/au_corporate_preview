import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring in India for Spanish Companies",
  },
  description:
    "How a Spanish company hires in India: the entity or employer-of-record choice, offer letters and contracts, salary structure, payroll deductions, the labour.",
  alternates: guideAlternates("spain", "hiring-and-payroll"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hiring%20in%20India%20for%20Spanish%20Companies", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Hiring in India for Spanish Companies",
    description:
      "How a Spanish company hires in India: the entity or employer-of-record choice, offer letters and contracts, salary structure, payroll deductions, the labour.",
    url: "https://www.theaucorp.com/spain-to-india/hiring-in-india",
    locale: "en_ES",
  },
  twitter: {
    title: "Hiring in India for Spanish Companies",
    description:
      "How a Spanish company hires in India: the entity or employer-of-record choice, offer letters and contracts, salary structure, payroll deductions, the labour.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
