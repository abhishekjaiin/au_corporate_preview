import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Relocating Russian Staff to India",
  },
  description:
    "How to relocate Russian staff to an Indian subsidiary: e-visa and business visa limits, employment visa and the salary floor, FRRO registration within 14.",
  alternates: guideAlternates("russia", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Relocating%20Russian%20Staff%20to%20India", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Relocating Russian Staff to India",
    description:
      "How to relocate Russian staff to an Indian subsidiary: e-visa and business visa limits, employment visa and the salary floor, FRRO registration within 14.",
    url: "https://www.theaucorp.com/russia-to-india/relocate-russian-staff",
    locale: "en_RU",
  },
  twitter: {
    title: "Relocating Russian Staff to India",
    description:
      "How to relocate Russian staff to an Indian subsidiary: e-visa and business visa limits, employment visa and the salary floor, FRRO registration within 14.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
