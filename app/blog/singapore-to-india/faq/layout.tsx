import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "143 FAQs: Setting Up an India Subsidiary from Singapore",
  },
  description:
    "143 plain answers for Singapore companies: incorporation, FEMA, the India-Singapore tax treaty, holding companies, staff and provident fund, data.",
  alternates: guideAlternates("singapore", "faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=143%20FAQs%3A%20Setting%20Up%20an%20India%20Subsidiary%20from%20Singapore", width: 1200, height: 630, alt: "143 FAQs: Setting Up an India Subsidiary from Singapore" }],
    siteName: "AU Corporate",
    title: "143 FAQs: Setting Up an India Subsidiary from Singapore",
    description:
      "143 plain answers for Singapore companies: incorporation, FEMA, the India-Singapore tax treaty, holding companies, staff and provident fund, data.",
    url: "https://www.theaucorp.com/singapore-to-india/faq",
    locale: "en_SG",
  },
  twitter: {
    title: "143 FAQs: Setting Up an India Subsidiary from Singapore",
    description:
      "143 plain answers for Singapore companies: incorporation, FEMA, the India-Singapore tax treaty, holding companies, staff and provident fund, data.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
