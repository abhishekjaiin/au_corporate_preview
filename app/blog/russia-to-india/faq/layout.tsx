import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "157 FAQs: Setting Up an India Subsidiary from Russia",
  },
  description:
    "157 plain answers for Russian companies: FDI route, sanctions, incorporation, FEMA, the India-Russia tax treaty, documents, staff, data protection.",
  alternates: guideAlternates("russia", "faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=157%20FAQs%3A%20Setting%20Up%20an%20India%20Subsidiary%20from%20Russia", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "157 FAQs: Setting Up an India Subsidiary from Russia",
    description:
      "157 plain answers for Russian companies: FDI route, sanctions, incorporation, FEMA, the India-Russia tax treaty, documents, staff, data protection.",
    url: "https://www.theaucorp.com/russia-to-india/faq",
    locale: "en_RU",
  },
  twitter: {
    title: "157 FAQs: Setting Up an India Subsidiary from Russia",
    description:
      "157 plain answers for Russian companies: FDI route, sanctions, incorporation, FEMA, the India-Russia tax treaty, documents, staff, data protection.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
