import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Japan-India Social Security Agreement: Rules for Expats",
  },
  description:
    "How the Japan-India Social Security Agreement works: detached workers, five-year coverage, Certificate of Coverage, pension systems covered and totalization.",
  alternates: guideAlternates("japan", "social-security-agreement"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Japan-India%20Social%20Security%20Agreement%3A%20Rules%20for%20Expats", width: 1200, height: 630, alt: "Japan-India Social Security Agreement: Rules for Expats" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Japan-India Social Security Agreement: Rules for Expats",
    description:
      "How the Japan-India Social Security Agreement works: detached workers, five-year coverage, Certificate of Coverage, pension systems covered and totalization.",
    url: "https://www.theaucorp.com/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement",
  },
  twitter: {
    title: "Japan-India Social Security Agreement: Rules for Expats",
    description:
      "How the Japan-India Social Security Agreement works: detached workers, five-year coverage, Certificate of Coverage, pension systems covered and totalization.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
