import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Australia DTAA and Permanent Establishment",
  },
  description:
    "How the India-Australia DTAA applies to payments to your Australian parent: withholding rates, the ATO residency certificate (NAT 75442), Form 41 and PE risk.",
  alternates: guideAlternates("australia", "dtaa-pe-risk"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-Australia%20DTAA%20and%20Permanent%20Establishment", width: 1200, height: 630, alt: "India-Australia DTAA and Permanent Establishment" }],
    siteName: "AU Corporate",
    title: "India-Australia DTAA and Permanent Establishment",
    description:
      "How the India-Australia DTAA applies to payments to your Australian parent: withholding rates, the ATO residency certificate (NAT 75442), Form 41 and PE risk.",
    url: "https://www.theaucorp.com/australia-to-india/dtaa-pe-risk",
    locale: "en_AU",
  },
  twitter: {
    title: "India-Australia DTAA and Permanent Establishment",
    description:
      "How the India-Australia DTAA applies to payments to your Australian parent: withholding rates, the ATO residency certificate (NAT 75442), Form 41 and PE risk.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
