import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Relocating Spanish Staff to India",
  },
  description:
    "A step-by-step relocation guide for a Spanish employee posted to an Indian subsidiary: the employment visa and its conditions, FRRO registration within 14.",
  alternates: guideAlternates("spain", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Relocating%20Spanish%20Staff%20to%20India", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Relocating Spanish Staff to India",
    description:
      "A step-by-step relocation guide for a Spanish employee posted to an Indian subsidiary: the employment visa and its conditions, FRRO registration within 14.",
    url: "https://www.theaucorp.com/spain-to-india/relocate-spanish-staff",
    locale: "en_ES",
  },
  twitter: {
    title: "Relocating Spanish Staff to India",
    description:
      "A step-by-step relocation guide for a Spanish employee posted to an Indian subsidiary: the employment visa and its conditions, FRRO registration within 14.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
