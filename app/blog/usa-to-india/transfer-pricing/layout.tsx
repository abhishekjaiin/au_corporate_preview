import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing in India for US-Owned Subsidiaries",
  },
  description:
    "How transfer pricing works for an Indian subsidiary of a US company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.",
  alternates: guideAlternates("usa", "transfer-pricing"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Transfer%20Pricing%20in%20India%20for%20US-Owned%20Subsidiaries", width: 1200, height: 630, alt: "Transfer Pricing in India for US-Owned Subsidiaries" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Transfer Pricing in India for US-Owned Subsidiaries",
    description:
      "How transfer pricing works for an Indian subsidiary of a US company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.",
    url: "https://www.theaucorp.com/usa-to-india/transfer-pricing",
  },
  twitter: {
    title: "Transfer Pricing in India for US-Owned Subsidiaries",
    description:
      "How transfer pricing works for an Indian subsidiary of a US company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
