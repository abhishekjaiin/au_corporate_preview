import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "German Documents and Apostille for an India Subsidiary",
  },
  description:
    "The document checklist for a German parent forming an Indian subsidiary: Handelsregister extract, articles of association, shareholder resolution.",
  alternates: guideAlternates("germany", "documents-and-apostille"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=German%20Documents%20and%20Apostille%20for%20an%20India%20Subsidiary", width: 1200, height: 630, alt: "German Documents and Apostille for an India Subsidiary" }],
    siteName: "AU Corporate",
    title: "German Documents and Apostille for an India Subsidiary",
    description:
      "The document checklist for a German parent forming an Indian subsidiary: Handelsregister extract, articles of association, shareholder resolution.",
    url: "https://www.theaucorp.com/germany-to-india/documents-handelsregister-apostille",
    locale: "en_DE",
  },
  twitter: {
    title: "German Documents and Apostille for an India Subsidiary",
    description:
      "The document checklist for a German parent forming an Indian subsidiary: Handelsregister extract, articles of association, shareholder resolution.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
