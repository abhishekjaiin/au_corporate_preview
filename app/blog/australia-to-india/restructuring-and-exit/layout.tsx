import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Exit Options for an Australian-Owned Subsidiary",
  },
  description:
    "Options for an Australian parent to restructure, sell, merge or close its Indian subsidiary: share sale, slump sale, merger, buyback, strike-off.",
  alternates: guideAlternates("australia", "restructuring-and-exit"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Exit%20Options%20for%20an%20Australian-Owned%20Subsidiary", width: 1200, height: 630, alt: "Exit Options for an Australian-Owned Subsidiary" }],
    siteName: "AU Corporate",
    title: "Exit Options for an Australian-Owned Subsidiary",
    description:
      "Options for an Australian parent to restructure, sell, merge or close its Indian subsidiary: share sale, slump sale, merger, buyback, strike-off.",
    url: "https://www.theaucorp.com/australia-to-india/restructuring-and-exit",
    locale: "en_AU",
  },
  twitter: {
    title: "Exit Options for an Australian-Owned Subsidiary",
    description:
      "Options for an Australian parent to restructure, sell, merge or close its Indian subsidiary: share sale, slump sale, merger, buyback, strike-off.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
