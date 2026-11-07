import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Singapore Parent Obligations for an Indian Subsidiary",
  },
  description:
    "Singapore-side duties for a parent with an Indian subsidiary: territorial tax, foreign-sourced income exemption, no capital gains tax, GST, ACRA filings.",
  alternates: guideAlternates("singapore", "parent-obligations"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Singapore%20Parent%20Obligations%20for%20an%20Indian%20Subsidiary", width: 1200, height: 630, alt: "Singapore Parent Obligations for an Indian Subsidiary" }],
    siteName: "AU Corporate",
    title: "Singapore Parent Obligations for an Indian Subsidiary",
    description:
      "Singapore-side duties for a parent with an Indian subsidiary: territorial tax, foreign-sourced income exemption, no capital gains tax, GST, ACRA filings.",
    url: "https://www.theaucorp.com/singapore-to-india/singapore-parent-obligations",
    locale: "en_SG",
  },
  twitter: {
    title: "Singapore Parent Obligations for an Indian Subsidiary",
    description:
      "Singapore-side duties for a parent with an Indian subsidiary: territorial tax, foreign-sourced income exemption, no capital gains tax, GST, ACRA filings.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
