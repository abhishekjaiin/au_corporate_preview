import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Relocating Singapore Staff to India",
  },
  description:
    "How to move employees from Singapore to India: e-Business and employment visas, the USD 25,000 salary floor, dependants, OCI for people of Indian origin.",
  alternates: guideAlternates("singapore", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Relocating%20Singapore%20Staff%20to%20India", width: 1200, height: 630, alt: "Relocating Singapore Staff to India" }],
    siteName: "AU Corporate",
    title: "Relocating Singapore Staff to India",
    description:
      "How to move employees from Singapore to India: e-Business and employment visas, the USD 25,000 salary floor, dependants, OCI for people of Indian origin.",
    url: "https://www.theaucorp.com/singapore-to-india/relocate-singapore-staff",
    locale: "en_SG",
  },
  twitter: {
    title: "Relocating Singapore Staff to India",
    description:
      "How to move employees from Singapore to India: e-Business and employment visas, the USD 25,000 salary floor, dependants, OCI for people of Indian origin.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
