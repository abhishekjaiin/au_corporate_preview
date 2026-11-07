import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "157 FAQs: Setting Up an India Subsidiary from Hong Kong",
  },
  description:
    "157 plain answers for Hong Kong companies: Press Note 3 approval, incorporation, FEMA, the India-Hong Kong tax treaty, documents, staff, data protection.",
  alternates: guideAlternates("hongkong", "faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=157%20FAQs%3A%20Setting%20Up%20an%20India%20Subsidiary%20from%20Hong%20Kong", width: 1200, height: 630, alt: "157 FAQs: Setting Up an India Subsidiary from Hong Kong" }],
    siteName: "AU Corporate",
    title: "157 FAQs: Setting Up an India Subsidiary from Hong Kong",
    description:
      "157 plain answers for Hong Kong companies: Press Note 3 approval, incorporation, FEMA, the India-Hong Kong tax treaty, documents, staff, data protection.",
    url: "https://www.theaucorp.com/hong-kong-to-india/faq",
    locale: "en_HK",
  },
  twitter: {
    title: "157 FAQs: Setting Up an India Subsidiary from Hong Kong",
    description:
      "157 plain answers for Hong Kong companies: Press Note 3 approval, incorporation, FEMA, the India-Hong Kong tax treaty, documents, staff, data protection.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
