import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "US Social Security (FICA) for Americans Working in India",
  },
  description:
    "When Social Security and Medicare tax apply to Americans working in India: US employer, Indian subsidiary, Section 3121(l) agreements and self-employment.",
  alternates: guideAlternates("usa", "home-social-security"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=US%20Social%20Security%20(FICA)%20for%20Americans%20Working%20in%20India", width: 1200, height: 630, alt: "US Social Security (FICA) for Americans Working in India" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "US Social Security (FICA) for Americans Working in India",
    description:
      "When Social Security and Medicare tax apply to Americans working in India: US employer, Indian subsidiary, Section 3121(l) agreements and self-employment.",
    url: "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties/us-social-security-for-americans-in-india",
  },
  twitter: {
    title: "US Social Security (FICA) for Americans Working in India",
    description:
      "When Social Security and Medicare tax apply to Americans working in India: US employer, Indian subsidiary, Section 3121(l) agreements and self-employment.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
