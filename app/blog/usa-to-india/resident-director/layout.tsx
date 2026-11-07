import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Resident Director Requirement for an Indian Company",
  },
  description:
    "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for US parents, and duties.",
  alternates: guideAlternates("usa", "resident-director"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Resident%20Director%20Requirement%20for%20an%20Indian%20Company", width: 1200, height: 630, alt: "Resident Director Requirement for an Indian Company" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Resident Director Requirement for an Indian Company",
    description:
      "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for US parents, and duties.",
    url: "https://www.theaucorp.com/usa-to-india/resident-director",
  },
  twitter: {
    title: "Resident Director Requirement for an Indian Company",
    description:
      "Every Indian company needs a Resident Director who has stayed in India 182 days in the financial year. Who qualifies, options for US parents, and duties.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
