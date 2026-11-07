import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Singapore DTAA for Singapore Companies",
  },
  description:
    "The India-Singapore double taxation agreement explained article by article from the Singapore parent's point of view: rates table, permanent establishment.",
  alternates: guideAlternates("singapore", "india-dtaa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-Singapore%20DTAA%20for%20Singapore%20Companies", width: 1200, height: 630, alt: "India-Singapore DTAA for Singapore Companies" }],
    siteName: "AU Corporate",
    title: "India-Singapore DTAA for Singapore Companies",
    description:
      "The India-Singapore double taxation agreement explained article by article from the Singapore parent's point of view: rates table, permanent establishment.",
    url: "https://www.theaucorp.com/singapore-to-india/india-singapore-dtaa",
    locale: "en_SG",
  },
  twitter: {
    title: "India-Singapore DTAA for Singapore Companies",
    description:
      "The India-Singapore double taxation agreement explained article by article from the Singapore parent's point of view: rates table, permanent establishment.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
