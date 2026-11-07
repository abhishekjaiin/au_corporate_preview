import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Common Mistakes Chinese Companies Make When Entering India",
  },
  description:
    "The most frequent mistakes Chinese companies make when setting up in India: investing before Press Note 3 approval, assuming an apostille works, hidden.",
  alternates: guideAlternates("china", "common-mistakes"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Common%20Mistakes%20Chinese%20Companies%20Make%20When%20Entering%20India", width: 1200, height: 630, alt: "Common Mistakes Chinese Companies Make When Entering India" }],
    siteName: "AU Corporate",
    title: "Common Mistakes Chinese Companies Make When Entering India",
    description:
      "The most frequent mistakes Chinese companies make when setting up in India: investing before Press Note 3 approval, assuming an apostille works, hidden.",
    url: "https://www.theaucorp.com/china-to-india/common-mistakes",
    locale: "en_CN",
  },
  twitter: {
    title: "Common Mistakes Chinese Companies Make When Entering India",
    description:
      "The most frequent mistakes Chinese companies make when setting up in India: investing before Press Note 3 approval, assuming an apostille works, hidden.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
