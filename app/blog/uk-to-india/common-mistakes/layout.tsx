import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Mistakes UK Companies Make Setting Up in India",
  },
  description:
    "The 13 most common and costly mistakes UK companies make setting up an Indian subsidiary, with the fix for each and a pre-filing checklist.",
  alternates: guideAlternates("uk", "common-mistakes"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Mistakes%20UK%20Companies%20Make%20Setting%20Up%20in%20India", width: 1200, height: 630, alt: "Mistakes UK Companies Make Setting Up in India" }],
    siteName: "AU Corporate",
    title: "Mistakes UK Companies Make Setting Up in India",
    description:
      "The 13 most common and costly mistakes UK companies make setting up an Indian subsidiary, with the fix for each and a pre-filing checklist.",
    url: "https://www.theaucorp.com/uk-to-india/common-mistakes",
    locale: "en_GB",
  },
  twitter: {
    title: "Mistakes UK Companies Make Setting Up in India",
    description:
      "The 13 most common and costly mistakes UK companies make setting up an Indian subsidiary, with the fix for each and a pre-filing checklist.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
