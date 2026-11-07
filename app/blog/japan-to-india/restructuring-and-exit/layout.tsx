import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Exit Options for a Japanese Group's Indian Subsidiary",
  },
  description:
    "How a Japanese parent can restructure, sell, merge or close its Indian subsidiary: share sale, slump sale, merger, buyback and winding up.",
  alternates: guideAlternates("japan", "restructuring-and-exit"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Exit%20Options%20for%20a%20Japanese%20Group's%20Indian%20Subsidiary", width: 1200, height: 630, alt: "Exit Options for a Japanese Group's Indian Subsidiary" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Exit Options for a Japanese Group's Indian Subsidiary",
    description:
      "How a Japanese parent can restructure, sell, merge or close its Indian subsidiary: share sale, slump sale, merger, buyback and winding up.",
    url: "https://www.theaucorp.com/japan-to-india/restructuring-and-exit",
  },
  twitter: {
    title: "Exit Options for a Japanese Group's Indian Subsidiary",
    description:
      "How a Japanese parent can restructure, sell, merge or close its Indian subsidiary: share sale, slump sale, merger, buyback and winding up.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
