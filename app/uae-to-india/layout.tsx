import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: { absolute: "Set Up a Company in India from Dubai and the UAE: 2026 Guide" },
  description: "How UAE and Dubai companies and NRI founders set up a company in India: structure, documents, the tax treaty, CEPA, banking, compliance and cost.",
  alternates: guideAlternates("uae", "hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Set%20Up%20a%20Company%20in%20India%20from%20Dubai%20and%20the%20UAE%3A%202026%20Guide", width: 1200, height: 630, alt: "Set Up a Company in India from Dubai and the UAE: 2026 Guide" }],
    siteName: "AU Corporate",
    title: "Set Up a Company in India from Dubai and the UAE: 2026 Guide",
    description: "How UAE and Dubai companies and NRI founders set up a company in India: structure, documents, the tax treaty, CEPA, banking, compliance and cost.",
    url: "https://www.theaucorp.com/uae-to-india",
    locale: "en_IN",
  },
  twitter: { title: "Set Up a Company in India from Dubai and the UAE: 2026 Guide", description: "How UAE and Dubai companies and NRI founders set up a company in India: structure, documents, the tax treaty, CEPA, banking, compliance and cost." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
