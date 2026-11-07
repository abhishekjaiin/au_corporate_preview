import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Structure Options for Spanish Companies in India",
  },
  description:
    "Compare the ways a Spanish group can enter India: a wholly owned private limited company, a joint venture, a limited liability partnership, a branch.",
  alternates: guideAlternates("spain", "subsidiary-vs-branch-vs-liaison-office-vs-llp"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Structure%20Options%20for%20Spanish%20Companies%20in%20India", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Structure Options for Spanish Companies in India",
    description:
      "Compare the ways a Spanish group can enter India: a wholly owned private limited company, a joint venture, a limited liability partnership, a branch.",
    url: "https://www.theaucorp.com/spain-to-india/structure-options",
    locale: "en_ES",
  },
  twitter: {
    title: "Structure Options for Spanish Companies in India",
    description:
      "Compare the ways a Spanish group can enter India: a wholly owned private limited company, a joint venture, a limited liability partnership, a branch.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
