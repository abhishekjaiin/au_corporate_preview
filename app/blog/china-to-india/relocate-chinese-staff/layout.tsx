import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Sending Chinese Employees to India: Visas and FRRO",
  },
  description:
    "What a Chinese company must plan when sending staff to India: business visa limits, employment visa rules and salary floor, security clearance, the reported.",
  alternates: guideAlternates("china", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Sending%20Chinese%20Employees%20to%20India%3A%20Visas%20and%20FRRO", width: 1200, height: 630, alt: "Sending Chinese Employees to India: Visas and FRRO" }],
    siteName: "AU Corporate",
    title: "Sending Chinese Employees to India: Visas and FRRO",
    description:
      "What a Chinese company must plan when sending staff to India: business visa limits, employment visa rules and salary floor, security clearance, the reported.",
    url: "https://www.theaucorp.com/china-to-india/relocate-chinese-staff",
    locale: "en_CN",
  },
  twitter: {
    title: "Sending Chinese Employees to India: Visas and FRRO",
    description:
      "What a Chinese company must plan when sending staff to India: business visa limits, employment visa rules and salary floor, security clearance, the reported.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
