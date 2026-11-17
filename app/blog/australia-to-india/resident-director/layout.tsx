import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Resident Director in India for Australian Companies",
  },
  description:
    "Every Indian company needs a resident director who stayed in India for 182 days in the year. How Australian groups meet the rule, and the tax points.",
  alternates: guideAlternates("australia", "resident-director"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Resident%20Director%20for%20an%20Australian-Owned%20Company", width: 1200, height: 630, alt: "Resident Director in India for Australian Companies" }],
    siteName: "AU Corporate",
    title: "Resident Director in India for Australian Companies",
    description:
      "Every Indian company needs a resident director who stayed in India for 182 days in the year. How Australian groups meet the rule, and the tax points.",
    url: "https://www.theaucorp.com/australia-to-india/resident-director",
    locale: "en_AU",
  },
  twitter: { card: "summary_large_image",
    title: "Resident Director in India for Australian Companies",
    description:
      "Every Indian company needs a resident director who stayed in India for 182 days in the year. How Australian groups meet the rule, and the tax points.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
