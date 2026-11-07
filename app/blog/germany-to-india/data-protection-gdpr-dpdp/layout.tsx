import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Data Protection for German Companies in India",
  },
  description:
    "How the GDPR and India's Digital Personal Data Protection Act apply when a German company has an Indian subsidiary: standard contractual clauses, transfer.",
  alternates: guideAlternates("germany", "data-protection"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Data%20Protection%20for%20German%20Companies%20in%20India", width: 1200, height: 630, alt: "Data Protection for German Companies in India" }],
    siteName: "AU Corporate",
    title: "Data Protection for German Companies in India",
    description:
      "How the GDPR and India's Digital Personal Data Protection Act apply when a German company has an Indian subsidiary: standard contractual clauses, transfer.",
    url: "https://www.theaucorp.com/germany-to-india/data-protection-gdpr-dpdp",
    locale: "en_DE",
  },
  twitter: {
    title: "Data Protection for German Companies in India",
    description:
      "How the GDPR and India's Digital Personal Data Protection Act apply when a German company has an Indian subsidiary: standard contractual clauses, transfer.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
