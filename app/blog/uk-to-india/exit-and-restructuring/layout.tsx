import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Selling, Restructuring or Closing an Indian Subsidiary",
  },
  description:
    "How a UK parent can sell, merge, restructure or close an Indian subsidiary: share sale, slump sale, merger, buyback and winding up, with Indian tax, RBI.",
  alternates: guideAlternates("uk", "restructuring-and-exit"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Selling%2C%20Restructuring%20or%20Closing%20an%20Indian%20Subsidiary", width: 1200, height: 630, alt: "Selling, Restructuring or Closing an Indian Subsidiary" }],
    siteName: "AU Corporate",
    title: "Selling, Restructuring or Closing an Indian Subsidiary",
    description:
      "How a UK parent can sell, merge, restructure or close an Indian subsidiary: share sale, slump sale, merger, buyback and winding up, with Indian tax, RBI.",
    url: "https://www.theaucorp.com/uk-to-india/exit-and-restructuring",
    locale: "en_GB",
  },
  twitter: {
    title: "Selling, Restructuring or Closing an Indian Subsidiary",
    description:
      "How a UK parent can sell, merge, restructure or close an Indian subsidiary: share sale, slump sale, merger, buyback and winding up, with Indian tax, RBI.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
