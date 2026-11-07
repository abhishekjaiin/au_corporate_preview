import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-US DTAA: Tax Treaty Between the US and India Explained",
  },
  description:
    "The India-US DTAA, the income tax treaty between the USA and India, explained: who qualifies, taxes covered, residency, relief from double tax and disputes.",
  alternates: guideAlternates("usa", "india-dtaa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-US%20DTAA%3A%20Tax%20Treaty%20Between%20the%20US%20and%20India%20Explained", width: 1200, height: 630, alt: "India-US DTAA: Tax Treaty Between the US and India Explained" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "India-US DTAA: Tax Treaty Between the US and India Explained",
    description:
      "The India-US DTAA, the income tax treaty between the USA and India, explained: who qualifies, taxes covered, residency, relief from double tax and disputes.",
    url: "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties/india-us-dtaa-guide",
  },
  twitter: {
    title: "India-US DTAA: Tax Treaty Between the US and India Explained",
    description:
      "The India-US DTAA, the income tax treaty between the USA and India, explained: who qualifies, taxes covered, residency, relief from double tax and disputes.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
