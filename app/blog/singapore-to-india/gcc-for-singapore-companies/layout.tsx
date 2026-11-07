import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Global Capability Centres in India for Singapore Companies",
  },
  description:
    "How Singapore headquartered groups build captive centres in India: build-operate-transfer, captive subsidiary and hybrid models, cost-plus pricing, GST.",
  alternates: guideAlternates("singapore", "gcc"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Global%20Capability%20Centres%20in%20India%20for%20Singapore%20Companies", width: 1200, height: 630, alt: "Global Capability Centres in India for Singapore Companies" }],
    siteName: "AU Corporate",
    title: "Global Capability Centres in India for Singapore Companies",
    description:
      "How Singapore headquartered groups build captive centres in India: build-operate-transfer, captive subsidiary and hybrid models, cost-plus pricing, GST.",
    url: "https://www.theaucorp.com/singapore-to-india/gcc-for-singapore-companies",
    locale: "en_SG",
  },
  twitter: {
    title: "Global Capability Centres in India for Singapore Companies",
    description:
      "How Singapore headquartered groups build captive centres in India: build-operate-transfer, captive subsidiary and hybrid models, cost-plus pricing, GST.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
