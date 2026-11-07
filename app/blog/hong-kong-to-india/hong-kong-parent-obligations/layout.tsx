import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hong Kong Parent Obligations: Tax and Reporting",
  },
  description:
    "The Hong Kong-side steps for a parent investing in India: no outbound approval or exchange controls, company secretary and registers, significant.",
  alternates: guideAlternates("hongkong", "parent-obligations"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hong%20Kong%20Parent%20Obligations%3A%20Tax%20and%20Reporting", width: 1200, height: 630, alt: "Hong Kong Parent Obligations: Tax and Reporting" }],
    siteName: "AU Corporate",
    title: "Hong Kong Parent Obligations: Tax and Reporting",
    description:
      "The Hong Kong-side steps for a parent investing in India: no outbound approval or exchange controls, company secretary and registers, significant.",
    url: "https://www.theaucorp.com/hong-kong-to-india/hong-kong-parent-obligations",
    locale: "en_HK",
  },
  twitter: {
    title: "Hong Kong Parent Obligations: Tax and Reporting",
    description:
      "The Hong Kong-side steps for a parent investing in India: no outbound approval or exchange controls, company secretary and registers, significant.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
