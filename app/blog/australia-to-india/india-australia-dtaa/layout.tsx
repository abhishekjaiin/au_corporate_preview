import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Australia DTAA for Australian Companies",
  },
  description:
    "The India-Australia double taxation avoidance agreement (DTAA) explained article by article, with India as the source state and Australia as the residence.",
  alternates: guideAlternates("australia", "india-dtaa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-Australia%20DTAA%20for%20Australian%20Companies", width: 1200, height: 630, alt: "India-Australia DTAA for Australian Companies" }],
    siteName: "AU Corporate",
    title: "India-Australia DTAA for Australian Companies",
    description:
      "The India-Australia double taxation avoidance agreement (DTAA) explained article by article, with India as the source state and Australia as the residence.",
    url: "https://www.theaucorp.com/australia-to-india/india-australia-dtaa",
    locale: "en_AU",
  },
  twitter: {
    title: "India-Australia DTAA for Australian Companies",
    description:
      "The India-Australia double taxation avoidance agreement (DTAA) explained article by article, with India as the source state and Australia as the residence.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
