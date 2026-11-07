import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Japanese Social Insurance for Employees Sent to India",
  },
  description:
    "What happens to Japanese pension, health and employment insurance when an employee is sent to India: the Certificate of Coverage and who pays what.",
  alternates: guideAlternates("japan", "home-social-security"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Japanese%20Social%20Insurance%20for%20Employees%20Sent%20to%20India", width: 1200, height: 630, alt: "Japanese Social Insurance for Employees Sent to India" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Japanese Social Insurance for Employees Sent to India",
    description:
      "What happens to Japanese pension, health and employment insurance when an employee is sent to India: the Certificate of Coverage and who pays what.",
    url: "https://www.theaucorp.com/japan-to-india/tax-and-social-security-treaties/japan-social-insurance-for-expats-in-india",
  },
  twitter: {
    title: "Japanese Social Insurance for Employees Sent to India",
    description:
      "What happens to Japanese pension, health and employment insurance when an employee is sent to India: the Certificate of Coverage and who pays what.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
