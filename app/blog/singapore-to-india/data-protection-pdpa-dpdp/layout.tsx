import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Data Protection for Singapore Companies in India",
  },
  description:
    "How Singapore's PDPA and India's Digital Personal Data Protection Act apply when a Singapore company has an Indian subsidiary: transfer limitation.",
  alternates: guideAlternates("singapore", "data-protection"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Data%20Protection%20for%20Singapore%20Companies%20in%20India", width: 1200, height: 630, alt: "Data Protection for Singapore Companies in India" }],
    siteName: "AU Corporate",
    title: "Data Protection for Singapore Companies in India",
    description:
      "How Singapore's PDPA and India's Digital Personal Data Protection Act apply when a Singapore company has an Indian subsidiary: transfer limitation.",
    url: "https://www.theaucorp.com/singapore-to-india/data-protection-pdpa-dpdp",
    locale: "en_SG",
  },
  twitter: {
    title: "Data Protection for Singapore Companies in India",
    description:
      "How Singapore's PDPA and India's Digital Personal Data Protection Act apply when a Singapore company has an Indian subsidiary: transfer limitation.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
