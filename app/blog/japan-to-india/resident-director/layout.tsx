import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Resident Director Rules for a Japanese-Owned Indian Company",
  },
  description:
    "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for Japanese parents, and duties.",
  alternates: guideAlternates("japan", "resident-director"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Resident%20Director%20Rules%20for%20a%20Japanese-Owned%20Indian%20Company", width: 1200, height: 630, alt: "Resident Director Rules for a Japanese-Owned Indian Company" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Resident Director Rules for a Japanese-Owned Indian Company",
    description:
      "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for Japanese parents, and duties.",
    url: "https://www.theaucorp.com/japan-to-india/resident-director",
  },
  twitter: {
    title: "Resident Director Rules for a Japanese-Owned Indian Company",
    description:
      "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for Japanese parents, and duties.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
