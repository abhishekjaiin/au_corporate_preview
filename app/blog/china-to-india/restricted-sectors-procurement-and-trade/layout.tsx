import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Restricted Sectors and Trade Rules for Chinese Companies",
  },
  description:
    "Beyond Press Note 3: sector limits, the registration rule for land-border-country bidders in government procurement, blocked apps and security reviews.",
  alternates: guideAlternates("china", "restricted-sectors"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Restricted%20Sectors%20and%20Trade%20Rules%20for%20Chinese%20Companies", width: 1200, height: 630, alt: "Restricted Sectors and Trade Rules for Chinese Companies" }],
    siteName: "AU Corporate",
    title: "Restricted Sectors and Trade Rules for Chinese Companies",
    description:
      "Beyond Press Note 3: sector limits, the registration rule for land-border-country bidders in government procurement, blocked apps and security reviews.",
    url: "https://www.theaucorp.com/china-to-india/restricted-sectors-procurement-and-trade",
    locale: "en_CN",
  },
  twitter: {
    title: "Restricted Sectors and Trade Rules for Chinese Companies",
    description:
      "Beyond Press Note 3: sector limits, the registration rule for land-border-country bidders in government procurement, blocked apps and security reviews.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
