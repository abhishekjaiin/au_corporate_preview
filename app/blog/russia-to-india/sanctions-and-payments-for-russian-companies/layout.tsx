import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Sanctions and Payments for Russian Companies in India",
  },
  description:
    "The practical gate for Russian investors in India: US, EU and UK sanctions screening, the 50% ownership rule, Indian bank due diligence, settlement channels.",
  alternates: guideAlternates("russia", "sanctions-payments"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Sanctions%20and%20Payments%20for%20Russian%20Companies%20in%20India", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Sanctions and Payments for Russian Companies in India",
    description:
      "The practical gate for Russian investors in India: US, EU and UK sanctions screening, the 50% ownership rule, Indian bank due diligence, settlement channels.",
    url: "https://www.theaucorp.com/russia-to-india/sanctions-and-payments-for-russian-companies",
    locale: "en_RU",
  },
  twitter: {
    title: "Sanctions and Payments for Russian Companies in India",
    description:
      "The practical gate for Russian investors in India: US, EU and UK sanctions screening, the 50% ownership rule, Indian bank due diligence, settlement channels.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
