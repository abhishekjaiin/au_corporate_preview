import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "147 FAQs: Setting Up an India Subsidiary from China",
  },
  description:
    "147 plain answers for Chinese companies: Press Note 3 approval, incorporation, FEMA, the India-China tax treaty, documents, staff, data protection.",
  alternates: guideAlternates("china", "faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=147%20FAQs%3A%20Setting%20Up%20an%20India%20Subsidiary%20from%20China", width: 1200, height: 630, alt: "147 FAQs: Setting Up an India Subsidiary from China" }],
    siteName: "AU Corporate",
    title: "147 FAQs: Setting Up an India Subsidiary from China",
    description:
      "147 plain answers for Chinese companies: Press Note 3 approval, incorporation, FEMA, the India-China tax treaty, documents, staff, data protection.",
    url: "https://www.theaucorp.com/china-to-india/faq",
    locale: "en_CN",
  },
  twitter: {
    title: "147 FAQs: Setting Up an India Subsidiary from China",
    description:
      "147 plain answers for Chinese companies: Press Note 3 approval, incorporation, FEMA, the India-China tax treaty, documents, staff, data protection.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
