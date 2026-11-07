import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Singapore ACRA Documents and Apostille for India",
  },
  description:
    "The document checklist for a Singapore parent forming an Indian subsidiary: ACRA business profile, constitution, board resolution, director identity papers.",
  alternates: guideAlternates("singapore", "documents-and-apostille"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Singapore%20ACRA%20Documents%20and%20Apostille%20for%20India", width: 1200, height: 630, alt: "Singapore ACRA Documents and Apostille for India" }],
    siteName: "AU Corporate",
    title: "Singapore ACRA Documents and Apostille for India",
    description:
      "The document checklist for a Singapore parent forming an Indian subsidiary: ACRA business profile, constitution, board resolution, director identity papers.",
    url: "https://www.theaucorp.com/singapore-to-india/documents-acra-apostille",
    locale: "en_SG",
  },
  twitter: {
    title: "Singapore ACRA Documents and Apostille for India",
    description:
      "The document checklist for a Singapore parent forming an Indian subsidiary: ACRA business profile, constitution, board resolution, director identity papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
