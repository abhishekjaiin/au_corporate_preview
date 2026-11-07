import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Structure Options in India for a Hong Kong Company",
  },
  description:
    "Compare Indian structures for a Hong Kong company: wholly owned private limited company, LLP, branch, liaison and project office, and joint venture.",
  alternates: guideAlternates("hongkong", "subsidiary-vs-branch-vs-liaison-office-vs-llp"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Structure%20Options%20in%20India%20for%20a%20Hong%20Kong%20Company", width: 1200, height: 630, alt: "Structure Options in India for a Hong Kong Company" }],
    siteName: "AU Corporate",
    title: "Structure Options in India for a Hong Kong Company",
    description:
      "Compare Indian structures for a Hong Kong company: wholly owned private limited company, LLP, branch, liaison and project office, and joint venture.",
    url: "https://www.theaucorp.com/hong-kong-to-india/structure-options",
    locale: "en_HK",
  },
  twitter: {
    title: "Structure Options in India for a Hong Kong Company",
    description:
      "Compare Indian structures for a Hong Kong company: wholly owned private limited company, LLP, branch, liaison and project office, and joint venture.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
