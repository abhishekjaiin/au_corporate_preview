import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring and Employee Benefits in India for Singapore Firms",
  },
  description:
    "A comparison for Singapore HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and termination.",
  alternates: guideAlternates("singapore", "hiring-and-payroll"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hiring%20in%20India%20for%20a%20Singapore%20Company", width: 1200, height: 630, alt: "Hiring and Employee Benefits in India for Singapore Firms" }],
    siteName: "AU Corporate",
    title: "Hiring and Employee Benefits in India for Singapore Firms",
    description:
      "A comparison for Singapore HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and termination.",
    url: "https://www.theaucorp.com/singapore-to-india/hiring-in-india",
    locale: "en_SG",
  },
  twitter: { card: "summary_large_image",
    title: "Hiring and Employee Benefits in India for Singapore Firms",
    description:
      "A comparison for Singapore HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and termination.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
