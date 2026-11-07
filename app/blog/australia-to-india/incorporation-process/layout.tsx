import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Incorporating an Indian Subsidiary from Australia",
  },
  description:
    "The eight steps to incorporate a wholly owned subsidiary in India from Australia: forms, order of steps, typical 4 to 6 week timeline and first 90 days.",
  alternates: guideAlternates("australia", "incorporation-process"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Incorporating%20an%20Indian%20Subsidiary%20from%20Australia", width: 1200, height: 630, alt: "Incorporating an Indian Subsidiary from Australia" }],
    siteName: "AU Corporate",
    title: "Incorporating an Indian Subsidiary from Australia",
    description:
      "The eight steps to incorporate a wholly owned subsidiary in India from Australia: forms, order of steps, typical 4 to 6 week timeline and first 90 days.",
    url: "https://www.theaucorp.com/australia-to-india/incorporation-process",
    locale: "en_AU",
  },
  twitter: {
    title: "Incorporating an Indian Subsidiary from Australia",
    description:
      "The eight steps to incorporate a wholly owned subsidiary in India from Australia: forms, order of steps, typical 4 to 6 week timeline and first 90 days.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
