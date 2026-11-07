import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "146 FAQs: Setting Up an India Subsidiary from Germany",
  },
  description:
    "146 plain answers for German companies: incorporation, FEMA, the India-Germany tax treaty, social security agreement, staff, data protection, compliance.",
  alternates: guideAlternates("germany", "faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=146%20FAQs%3A%20Setting%20Up%20an%20India%20Subsidiary%20from%20Germany", width: 1200, height: 630, alt: "146 FAQs: Setting Up an India Subsidiary from Germany" }],
    siteName: "AU Corporate",
    title: "146 FAQs: Setting Up an India Subsidiary from Germany",
    description:
      "146 plain answers for German companies: incorporation, FEMA, the India-Germany tax treaty, social security agreement, staff, data protection, compliance.",
    url: "https://www.theaucorp.com/germany-to-india/faq",
    locale: "en_DE",
  },
  twitter: {
    title: "146 FAQs: Setting Up an India Subsidiary from Germany",
    description:
      "146 plain answers for German companies: incorporation, FEMA, the India-Germany tax treaty, social security agreement, staff, data protection, compliance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
