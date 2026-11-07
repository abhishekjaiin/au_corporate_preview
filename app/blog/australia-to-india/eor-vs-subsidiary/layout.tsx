import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "EOR vs Subsidiary in India for an Australian Company?",
  },
  description:
    "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for Australian companies.",
  alternates: guideAlternates("australia", "eor-vs-subsidiary"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=EOR%20vs%20Subsidiary%20in%20India%20for%20an%20Australian%20Company%3F", width: 1200, height: 630, alt: "EOR vs Subsidiary in India for an Australian Company?" }],
    siteName: "AU Corporate",
    title: "EOR vs Subsidiary in India for an Australian Company?",
    description:
      "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for Australian companies.",
    url: "https://www.theaucorp.com/australia-to-india/eor-vs-subsidiary",
    locale: "en_AU",
  },
  twitter: {
    title: "EOR vs Subsidiary in India for an Australian Company?",
    description:
      "Compare an Employer of Record with your own Indian subsidiary: speed, control, compliance, tax presence and when to convert. A guide for Australian companies.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
