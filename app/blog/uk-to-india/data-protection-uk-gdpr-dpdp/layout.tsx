import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Data Protection for UK Companies in India",
  },
  description:
    "How a UK company moves personal data to and from an Indian subsidiary: UK GDPR transfer rules, India's Digital Personal Data Protection Act and Rules.",
  alternates: guideAlternates("uk", "data-protection"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Data%20Protection%20for%20UK%20Companies%20in%20India", width: 1200, height: 630, alt: "Data Protection for UK Companies in India" }],
    siteName: "AU Corporate",
    title: "Data Protection for UK Companies in India",
    description:
      "How a UK company moves personal data to and from an Indian subsidiary: UK GDPR transfer rules, India's Digital Personal Data Protection Act and Rules.",
    url: "https://www.theaucorp.com/uk-to-india/data-protection-uk-gdpr-dpdp",
    locale: "en_GB",
  },
  twitter: {
    title: "Data Protection for UK Companies in India",
    description:
      "How a UK company moves personal data to and from an Indian subsidiary: UK GDPR transfer rules, India's Digital Personal Data Protection Act and Rules.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
