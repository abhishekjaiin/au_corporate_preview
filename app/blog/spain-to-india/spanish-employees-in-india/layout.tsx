import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Spanish Employees in India: Tax and Provident Fund",
  },
  description:
    "What a Spanish employer must plan when staff work in India: Indian salary tax and the treaty test, the Spanish IRPF exemption for work abroad, Indian.",
  alternates: guideAlternates("spain", "foreign-employee-treaty-ssa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Spanish%20Employees%20in%20India%3A%20Tax%20and%20Provident%20Fund", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Spanish Employees in India: Tax and Provident Fund",
    description:
      "What a Spanish employer must plan when staff work in India: Indian salary tax and the treaty test, the Spanish IRPF exemption for work abroad, Indian.",
    url: "https://www.theaucorp.com/spain-to-india/spanish-employees-in-india",
    locale: "en_ES",
  },
  twitter: {
    title: "Spanish Employees in India: Tax and Provident Fund",
    description:
      "What a Spanish employer must plan when staff work in India: Indian salary tax and the treaty test, the Spanish IRPF exemption for work abroad, Indian.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
