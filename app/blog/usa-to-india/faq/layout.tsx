import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "216 FAQs: Setting Up an India Subsidiary from the USA",
  },
  description:
    "216 plain answers for US companies: incorporation, FEMA, tax, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary.",
  alternates: guideAlternates("usa", "faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=216%20FAQs%3A%20Setting%20Up%20an%20India%20Subsidiary%20from%20the%20USA", width: 1200, height: 630, alt: "216 FAQs: Setting Up an India Subsidiary from the USA" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "216 FAQs: Setting Up an India Subsidiary from the USA",
    description:
      "216 plain answers for US companies: incorporation, FEMA, tax, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary.",
    url: "https://www.theaucorp.com/usa-to-india/faq",
  },
  twitter: {
    title: "216 FAQs: Setting Up an India Subsidiary from the USA",
    description:
      "216 plain answers for US companies: incorporation, FEMA, tax, hiring, compliance, repatriation, ESOPs, M&A and closing an Indian subsidiary.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
