import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Sending German Employees to India: Visas and Tax",
  },
  description:
    "What a German company must plan when sending staff to India: employment visa rules, FRRO registration, 183-day tax test, Section 392 salary tax, the Social.",
  alternates: guideAlternates("germany", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Sending%20German%20Employees%20to%20India%3A%20Visas%20and%20Tax", width: 1200, height: 630, alt: "Sending German Employees to India: Visas and Tax" }],
    siteName: "AU Corporate",
    title: "Sending German Employees to India: Visas and Tax",
    description:
      "What a German company must plan when sending staff to India: employment visa rules, FRRO registration, 183-day tax test, Section 392 salary tax, the Social.",
    url: "https://www.theaucorp.com/germany-to-india/relocate-german-staff",
    locale: "en_DE",
  },
  twitter: {
    title: "Sending German Employees to India: Visas and Tax",
    description:
      "What a German company must plan when sending staff to India: employment visa rules, FRRO registration, 183-day tax test, Section 392 salary tax, the Social.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
