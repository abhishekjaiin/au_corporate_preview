import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "IP Ownership for Indian Teams of US Companies",
  },
  description:
    "A guide to making sure the US parent owns what the Indian team creates: employment and assignment contracts, the duration and territory defaults in Indian.",
  alternates: guideAlternates("usa", "ip-ownership"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=IP%20Ownership%20for%20Indian%20Teams%20of%20US%20Companies", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "IP Ownership for Indian Teams of US Companies",
    description:
      "A guide to making sure the US parent owns what the Indian team creates: employment and assignment contracts, the duration and territory defaults in Indian.",
    url: "https://www.theaucorp.com/usa-to-india/ip-ownership-and-copyright-assignment-for-indian-teams",
    locale: "en_US",
  },
  twitter: {
    title: "IP Ownership for Indian Teams of US Companies",
    description:
      "A guide to making sure the US parent owns what the Indian team creates: employment and assignment contracts, the duration and territory defaults in Indian.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
