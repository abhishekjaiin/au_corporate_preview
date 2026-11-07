import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring in India for a Chinese-Owned Company",
  },
  description:
    "A guide for Chinese HR teams hiring in India: written contracts, provident fund, ESI, gratuity, labour codes, notice and termination, working hours.",
  alternates: guideAlternates("china", "hiring-and-payroll"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hiring%20in%20India%20for%20a%20Chinese-Owned%20Company", width: 1200, height: 630, alt: "Hiring in India for a Chinese-Owned Company" }],
    siteName: "AU Corporate",
    title: "Hiring in India for a Chinese-Owned Company",
    description:
      "A guide for Chinese HR teams hiring in India: written contracts, provident fund, ESI, gratuity, labour codes, notice and termination, working hours.",
    url: "https://www.theaucorp.com/china-to-india/hiring-in-india",
    locale: "en_CN",
  },
  twitter: {
    title: "Hiring in India for a Chinese-Owned Company",
    description:
      "A guide for Chinese HR teams hiring in India: written contracts, provident fund, ESI, gratuity, labour codes, notice and termination, working hours.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
