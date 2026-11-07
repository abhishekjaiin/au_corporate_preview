import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Documents for an Indian Subsidiary from China",
  },
  description:
    "How to prepare Chinese company documents for an Indian subsidiary: notarisation in China, authentication by the Chinese foreign affairs authority.",
  alternates: guideAlternates("china", "documents-and-apostille"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Documents%20for%20an%20Indian%20Subsidiary%20from%20China", width: 1200, height: 630, alt: "Documents for an Indian Subsidiary from China" }],
    siteName: "AU Corporate",
    title: "Documents for an Indian Subsidiary from China",
    description:
      "How to prepare Chinese company documents for an Indian subsidiary: notarisation in China, authentication by the Chinese foreign affairs authority.",
    url: "https://www.theaucorp.com/china-to-india/documents-notarisation-legalisation",
    locale: "en_CN",
  },
  twitter: {
    title: "Documents for an Indian Subsidiary from China",
    description:
      "How to prepare Chinese company documents for an Indian subsidiary: notarisation in China, authentication by the Chinese foreign affairs authority.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
