import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Russian Parent Obligations: Currency Control and Tax",
  },
  description:
    "The Russian-side steps for a parent investing in India: Bank of Russia thresholds and approval for share investments abroad, currency control.",
  alternates: guideAlternates("russia", "parent-obligations"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Russian%20Parent%20Obligations%3A%20Currency%20Control%20and%20Tax", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Russian Parent Obligations: Currency Control and Tax",
    description:
      "The Russian-side steps for a parent investing in India: Bank of Russia thresholds and approval for share investments abroad, currency control.",
    url: "https://www.theaucorp.com/russia-to-india/russian-parent-obligations",
    locale: "en_RU",
  },
  twitter: {
    title: "Russian Parent Obligations: Currency Control and Tax",
    description:
      "The Russian-side steps for a parent investing in India: Bank of Russia thresholds and approval for share investments abroad, currency control.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
