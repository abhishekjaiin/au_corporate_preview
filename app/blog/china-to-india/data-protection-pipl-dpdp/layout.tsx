import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Data Protection for Chinese Companies in India",
  },
  description:
    "How China's PIPL and data export rules and India's DPDP Act apply when a Chinese company runs an Indian subsidiary, and what each side must do.",
  alternates: guideAlternates("china", "data-protection"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Data%20Protection%20for%20Chinese%20Companies%20in%20India", width: 1200, height: 630, alt: "Data Protection for Chinese Companies in India" }],
    siteName: "AU Corporate",
    title: "Data Protection for Chinese Companies in India",
    description:
      "How China's PIPL and data export rules and India's DPDP Act apply when a Chinese company runs an Indian subsidiary, and what each side must do.",
    url: "https://www.theaucorp.com/china-to-india/data-protection-pipl-dpdp",
    locale: "en_CN",
  },
  twitter: {
    title: "Data Protection for Chinese Companies in India",
    description:
      "How China's PIPL and data export rules and India's DPDP Act apply when a Chinese company runs an Indian subsidiary, and what each side must do.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
