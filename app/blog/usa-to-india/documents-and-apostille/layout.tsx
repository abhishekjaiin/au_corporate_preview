import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Documents and Apostille for an India Subsidiary (US Parent)",
  },
  description:
    "Which documents a US parent must prepare to incorporate an Indian subsidiary, and how notarization and apostille work for US state and federal documents.",
  alternates: guideAlternates("usa", "documents-and-apostille"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Documents%20and%20Apostille%20for%20an%20India%20Subsidiary%20(US%20Parent)", width: 1200, height: 630, alt: "Documents and Apostille for an India Subsidiary (US Parent)" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Documents and Apostille for an India Subsidiary (US Parent)",
    description:
      "Which documents a US parent must prepare to incorporate an Indian subsidiary, and how notarization and apostille work for US state and federal documents.",
    url: "https://www.theaucorp.com/usa-to-india/documents-and-apostille",
  },
  twitter: {
    title: "Documents and Apostille for an India Subsidiary (US Parent)",
    description:
      "Which documents a US parent must prepare to incorporate an Indian subsidiary, and how notarization and apostille work for US state and federal documents.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
