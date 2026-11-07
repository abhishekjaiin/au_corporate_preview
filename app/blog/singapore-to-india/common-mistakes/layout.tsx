import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Common Mistakes Singapore Companies Make in India",
  },
  description:
    "The twelve mistakes we see most often when a Singapore company sets up an Indian subsidiary: treaty assumptions, holdco substance, EPF for PRs, services PE.",
  alternates: guideAlternates("singapore", "common-mistakes"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Common%20Mistakes%20Singapore%20Companies%20Make%20in%20India", width: 1200, height: 630, alt: "Common Mistakes Singapore Companies Make in India" }],
    siteName: "AU Corporate",
    title: "Common Mistakes Singapore Companies Make in India",
    description:
      "The twelve mistakes we see most often when a Singapore company sets up an Indian subsidiary: treaty assumptions, holdco substance, EPF for PRs, services PE.",
    url: "https://www.theaucorp.com/singapore-to-india/common-mistakes",
    locale: "en_SG",
  },
  twitter: {
    title: "Common Mistakes Singapore Companies Make in India",
    description:
      "The twelve mistakes we see most often when a Singapore company sets up an Indian subsidiary: treaty assumptions, holdco substance, EPF for PRs, services PE.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
