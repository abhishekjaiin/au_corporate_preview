import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hong Kong PDPO and India's DPDP Act",
  },
  description:
    "How Hong Kong's Personal Data (Privacy) Ordinance and India's Digital Personal Data Protection Act apply to a group with staff and customers in both.",
  alternates: guideAlternates("hongkong", "data-protection"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hong%20Kong%20PDPO%20and%20India's%20DPDP%20Act", width: 1200, height: 630, alt: "Hong Kong PDPO and India's DPDP Act" }],
    siteName: "AU Corporate",
    title: "Hong Kong PDPO and India's DPDP Act",
    description:
      "How Hong Kong's Personal Data (Privacy) Ordinance and India's Digital Personal Data Protection Act apply to a group with staff and customers in both.",
    url: "https://www.theaucorp.com/hong-kong-to-india/data-protection-pdpo-dpdp",
    locale: "en_HK",
  },
  twitter: {
    title: "Hong Kong PDPO and India's DPDP Act",
    description:
      "How Hong Kong's Personal Data (Privacy) Ordinance and India's Digital Personal Data Protection Act apply to a group with staff and customers in both.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
