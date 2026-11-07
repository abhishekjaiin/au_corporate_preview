import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "122 FAQs: Setting Up an India Subsidiary from the UK",
  },
  description:
    "122 plain answers for UK companies: incorporation, FEMA, the India-UK tax treaty, CETA, staff and social security, data protection, compliance, repatriation.",
  alternates: guideAlternates("uk", "faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=122%20FAQs%3A%20Setting%20Up%20an%20India%20Subsidiary%20from%20the%20UK", width: 1200, height: 630, alt: "122 FAQs: Setting Up an India Subsidiary from the UK" }],
    siteName: "AU Corporate",
    title: "122 FAQs: Setting Up an India Subsidiary from the UK",
    description:
      "122 plain answers for UK companies: incorporation, FEMA, the India-UK tax treaty, CETA, staff and social security, data protection, compliance, repatriation.",
    url: "https://www.theaucorp.com/uk-to-india/faq",
    locale: "en_GB",
  },
  twitter: {
    title: "122 FAQs: Setting Up an India Subsidiary from the UK",
    description:
      "122 plain answers for UK companies: incorporation, FEMA, the India-UK tax treaty, CETA, staff and social security, data protection, compliance, repatriation.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
