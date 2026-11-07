import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Documents and Apostille for a Japanese Parent Company",
  },
  description:
    "Which documents a Japanese parent must prepare to incorporate an Indian subsidiary, and how notarization, translation and apostille work in Japan.",
  alternates: guideAlternates("japan", "documents-and-apostille"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Documents%20and%20Apostille%20for%20a%20Japanese%20Parent%20Company", width: 1200, height: 630, alt: "Documents and Apostille for a Japanese Parent Company" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Documents and Apostille for a Japanese Parent Company",
    description:
      "Which documents a Japanese parent must prepare to incorporate an Indian subsidiary, and how notarization, translation and apostille work in Japan.",
    url: "https://www.theaucorp.com/japan-to-india/documents-and-apostille",
  },
  twitter: {
    title: "Documents and Apostille for a Japanese Parent Company",
    description:
      "Which documents a Japanese parent must prepare to incorporate an Indian subsidiary, and how notarization, translation and apostille work in Japan.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
