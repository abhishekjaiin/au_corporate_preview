import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Structure Options in India for a Russian Company",
  },
  description:
    "Compare Indian structures for a Russian company: wholly owned private limited company, LLP, branch, liaison and project office, and joint venture, with tax.",
  alternates: guideAlternates("russia", "subsidiary-vs-branch-vs-liaison-office-vs-llp"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Structure%20Options%20in%20India%20for%20a%20Russian%20Company", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Structure Options in India for a Russian Company",
    description:
      "Compare Indian structures for a Russian company: wholly owned private limited company, LLP, branch, liaison and project office, and joint venture, with tax.",
    url: "https://www.theaucorp.com/russia-to-india/structure-options",
    locale: "en_RU",
  },
  twitter: {
    title: "Structure Options in India for a Russian Company",
    description:
      "Compare Indian structures for a Russian company: wholly owned private limited company, LLP, branch, liaison and project office, and joint venture, with tax.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
