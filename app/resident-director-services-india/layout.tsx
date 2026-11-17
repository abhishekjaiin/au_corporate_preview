import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Resident Director Services in India for Foreign Companies" },
  description: "Resident director services for foreign-owned Indian companies: the Section 149(3) rule, the director's role, liability, safeguards and appointment.",
  alternates: { canonical: "https://www.theaucorp.com/resident-director-services-india" },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Resident%20Director%20Services%20in%20India%20for%20Foreign%20Companies", width: 1200, height: 630, alt: "Resident Director Services in India for Foreign Companies" }],
    siteName: "AU Corporate",
    title: "Resident Director Services in India for Foreign Companies",
    description: "Resident director services for foreign-owned Indian companies: the Section 149(3) rule, the director's role, liability, safeguards and appointment.",
    url: "https://www.theaucorp.com/resident-director-services-india",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: "Resident Director Services in India for Foreign Companies", description: "Resident director services for foreign-owned Indian companies: the Section 149(3) rule, the director's role, liability, safeguards and appointment." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
