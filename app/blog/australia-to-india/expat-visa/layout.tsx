import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Sending an Australian Executive to India",
  },
  description:
    "How to relocate an Australian executive to India: employment visa, FRRO registration, housing, banking.",
  alternates: guideAlternates("australia", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Sending%20an%20Australian%20Executive%20to%20India", width: 1200, height: 630, alt: "Sending an Australian Executive to India" }],
    siteName: "AU Corporate",
    title: "Sending an Australian Executive to India",
    description:
      "How to relocate an Australian executive to India: employment visa, FRRO registration, housing, banking.",
    url: "https://www.theaucorp.com/australia-to-india/expat-visa",
    locale: "en_AU",
  },
  twitter: { card: "summary_large_image",
    title: "Sending an Australian Executive to India",
    description:
      "How to relocate an Australian executive to India: employment visa, FRRO registration, housing, banking.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
