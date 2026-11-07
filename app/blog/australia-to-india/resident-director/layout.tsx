import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Resident Director for an Australian-Owned Company",
  },
  description:
    "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year.",
  alternates: guideAlternates("australia", "resident-director"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Resident%20Director%20for%20an%20Australian-Owned%20Company", width: 1200, height: 630, alt: "Resident Director for an Australian-Owned Company" }],
    siteName: "AU Corporate",
    title: "Resident Director for an Australian-Owned Company",
    description:
      "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year.",
    url: "https://www.theaucorp.com/australia-to-india/resident-director",
    locale: "en_AU",
  },
  twitter: {
    title: "Resident Director for an Australian-Owned Company",
    description:
      "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
