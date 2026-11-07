import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "179 FAQs: Setting Up an India Subsidiary from Spain",
  },
  description:
    "179 plain answers for Spanish companies: FDI route, incorporation, FEMA, the India-Spain tax treaty, Spanish declarations, documents, staff, data.",
  alternates: guideAlternates("spain", "faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=179%20FAQs%3A%20Setting%20Up%20an%20India%20Subsidiary%20from%20Spain", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "179 FAQs: Setting Up an India Subsidiary from Spain",
    description:
      "179 plain answers for Spanish companies: FDI route, incorporation, FEMA, the India-Spain tax treaty, Spanish declarations, documents, staff, data.",
    url: "https://www.theaucorp.com/spain-to-india/faq",
    locale: "en_ES",
  },
  twitter: {
    title: "179 FAQs: Setting Up an India Subsidiary from Spain",
    description:
      "179 plain answers for Spanish companies: FDI route, incorporation, FEMA, the India-Spain tax treaty, Spanish declarations, documents, staff, data.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
