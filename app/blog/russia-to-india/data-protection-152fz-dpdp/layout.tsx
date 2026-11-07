import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Russia 152-FZ and India's DPDP Act",
  },
  description:
    "How Russia's personal data law (152-FZ), with its localisation rule and cross-border transfer notification, and India's Digital Personal Data Protection Act.",
  alternates: guideAlternates("russia", "data-protection"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Russia%20152-FZ%20and%20India's%20DPDP%20Act", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Russia 152-FZ and India's DPDP Act",
    description:
      "How Russia's personal data law (152-FZ), with its localisation rule and cross-border transfer notification, and India's Digital Personal Data Protection Act.",
    url: "https://www.theaucorp.com/russia-to-india/data-protection-152fz-dpdp",
    locale: "en_RU",
  },
  twitter: {
    title: "Russia 152-FZ and India's DPDP Act",
    description:
      "How Russia's personal data law (152-FZ), with its localisation rule and cross-border transfer notification, and India's Digital Personal Data Protection Act.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
