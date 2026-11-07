import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Indian Tax Notices for an Australian-Owned Subsidiary",
  },
  description:
    "What an Australian-owned Indian subsidiary should do on receiving an income tax, GST or transfer pricing notice: first steps, DRP, ITAT, treaty MAP and APAs.",
  alternates: guideAlternates("australia", "tax-notices-and-litigation"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Indian%20Tax%20Notices%20for%20an%20Australian-Owned%20Subsidiary", width: 1200, height: 630, alt: "Indian Tax Notices for an Australian-Owned Subsidiary" }],
    siteName: "AU Corporate",
    title: "Indian Tax Notices for an Australian-Owned Subsidiary",
    description:
      "What an Australian-owned Indian subsidiary should do on receiving an income tax, GST or transfer pricing notice: first steps, DRP, ITAT, treaty MAP and APAs.",
    url: "https://www.theaucorp.com/australia-to-india/tax-notices-and-litigation",
    locale: "en_AU",
  },
  twitter: {
    title: "Indian Tax Notices for an Australian-Owned Subsidiary",
    description:
      "What an Australian-owned Indian subsidiary should do on receiving an income tax, GST or transfer pricing notice: first steps, DRP, ITAT, treaty MAP and APAs.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
