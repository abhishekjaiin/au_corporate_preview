import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "US-India Totalization Agreement: Social Security for Expats",
  },
  description:
    "Is there a US-India social security agreement? What applies to a US expat in India: provident fund, US FICA, double coverage and planning.",
  alternates: guideAlternates("usa", "social-security-agreement"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=US-India%20Totalization%20Agreement%3A%20Social%20Security%20for%20Expats", width: 1200, height: 630, alt: "US-India Totalization Agreement: Social Security for Expats" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "US-India Totalization Agreement: Social Security for Expats",
    description:
      "Is there a US-India social security agreement? What applies to a US expat in India: provident fund, US FICA, double coverage and planning.",
    url: "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties/social-security-us-expats-india",
  },
  twitter: {
    title: "US-India Totalization Agreement: Social Security for Expats",
    description:
      "Is there a US-India social security agreement? What applies to a US expat in India: provident fund, US FICA, double coverage and planning.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
