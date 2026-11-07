import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "GDPR and India's DPDP Act for Spanish Companies",
  },
  description:
    "How a Spanish group lawfully moves employee and customer data to and from India: the GDPR transfer regime and the lack of an EU adequacy decision for India.",
  alternates: guideAlternates("spain", "data-protection"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=GDPR%20and%20India's%20DPDP%20Act%20for%20Spanish%20Companies", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "GDPR and India's DPDP Act for Spanish Companies",
    description:
      "How a Spanish group lawfully moves employee and customer data to and from India: the GDPR transfer regime and the lack of an EU adequacy decision for India.",
    url: "https://www.theaucorp.com/spain-to-india/data-protection-gdpr-dpdp",
    locale: "en_ES",
  },
  twitter: {
    title: "GDPR and India's DPDP Act for Spanish Companies",
    description:
      "How a Spanish group lawfully moves employee and customer data to and from India: the GDPR transfer regime and the lack of an EU adequacy decision for India.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
