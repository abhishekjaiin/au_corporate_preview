import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Restructuring, Mergers and Exit for an Indian Subsidiary",
  },
  description:
    "Options to restructure, sell, merge or close an Indian subsidiary: share sale, slump sale, merger, buyback, strike-off and liquidation, with tax and RBI steps.",
  alternates: guideAlternates("usa", "restructuring-and-exit"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Restructuring%2C%20Mergers%20and%20Exit%20for%20an%20Indian%20Subsidiary", width: 1200, height: 630, alt: "Restructuring, Mergers and Exit for an Indian Subsidiary" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Restructuring, Mergers and Exit for an Indian Subsidiary",
    description:
      "Options to restructure, sell, merge or close an Indian subsidiary: share sale, slump sale, merger, buyback, strike-off and liquidation, with tax and RBI steps.",
    url: "https://www.theaucorp.com/usa-to-india/restructuring-and-exit",
  },
  twitter: {
    title: "Restructuring, Mergers and Exit for an Indian Subsidiary",
    description:
      "Options to restructure, sell, merge or close an Indian subsidiary: share sale, slump sale, merger, buyback, strike-off and liquidation, with tax and RBI steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
