import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Exit and Restructuring from India for Spanish Groups",
  },
  description:
    "How a Spanish parent can sell, wind up or restructure an Indian subsidiary: the tax on share gains under the India-Spain treaty, FEMA pricing, buyback.",
  alternates: guideAlternates("spain", "restructuring-and-exit"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Exit%20and%20Restructuring%20from%20India%20for%20Spanish%20Groups", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Exit and Restructuring from India for Spanish Groups",
    description:
      "How a Spanish parent can sell, wind up or restructure an Indian subsidiary: the tax on share gains under the India-Spain treaty, FEMA pricing, buyback.",
    url: "https://www.theaucorp.com/spain-to-india/exit-and-restructuring",
    locale: "en_ES",
  },
  twitter: {
    title: "Exit and Restructuring from India for Spanish Groups",
    description:
      "How a Spanish parent can sell, wind up or restructure an Indian subsidiary: the tax on share gains under the India-Spain treaty, FEMA pricing, buyback.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
