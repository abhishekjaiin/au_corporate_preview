import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "266 FAQs: Setting Up an India Subsidiary from Australia",
  },
  description:
    "266 plain answers for Australian companies: incorporation, FEMA, tax, the India-Australia treaty, hiring, compliance, repatriation, ESOPs, M&A and closing.",
  alternates: guideAlternates("australia", "faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=266%20FAQs%3A%20Setting%20Up%20an%20India%20Subsidiary%20from%20Australia", width: 1200, height: 630, alt: "266 FAQs: Setting Up an India Subsidiary from Australia" }],
    siteName: "AU Corporate",
    title: "266 FAQs: Setting Up an India Subsidiary from Australia",
    description:
      "266 plain answers for Australian companies: incorporation, FEMA, tax, the India-Australia treaty, hiring, compliance, repatriation, ESOPs, M&A and closing.",
    url: "https://www.theaucorp.com/australia-to-india/faq",
    locale: "en_AU",
  },
  twitter: {
    title: "266 FAQs: Setting Up an India Subsidiary from Australia",
    description:
      "266 plain answers for Australian companies: incorporation, FEMA, tax, the India-Australia treaty, hiring, compliance, repatriation, ESOPs, M&A and closing.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
