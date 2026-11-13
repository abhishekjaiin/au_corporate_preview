import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: { absolute: "Data Protection for Japanese Companies in India: APPI and DPDP" },
  description: "How Japan's APPI and India's DPDP Act apply when a Japanese company runs an Indian subsidiary: transfers, contracts and the 2027 timeline.",
  alternates: guideAlternates("japan", "data-protection"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Data%20Protection%20for%20Japanese%20Companies%20in%20India%3A%20APPI%20and%20DPDP", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Data Protection for Japanese Companies in India: APPI and DPDP",
    description: "How Japan's APPI and India's DPDP Act apply when a Japanese company runs an Indian subsidiary: transfers, contracts and the 2027 timeline.",
    url: "https://www.theaucorp.com/japan-to-india/data-protection-appi-dpdp",
    locale: "en_JP",
  },
  twitter: { title: "Data Protection for Japanese Companies in India: APPI and DPDP", description: "How Japan's APPI and India's DPDP Act apply when a Japanese company runs an Indian subsidiary: transfers, contracts and the 2027 timeline." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
