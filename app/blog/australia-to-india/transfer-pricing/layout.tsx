import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing in India for Australian-Owned Subsidiaries",
  },
  description:
    "How transfer pricing works for an Indian subsidiary of an Australian company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.",
  alternates: guideAlternates("australia", "transfer-pricing"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Transfer%20Pricing%20in%20India%20for%20Australian-Owned%20Subsidiaries", width: 1200, height: 630, alt: "Transfer Pricing in India for Australian-Owned Subsidiaries" }],
    siteName: "AU Corporate",
    title: "Transfer Pricing in India for Australian-Owned Subsidiaries",
    description:
      "How transfer pricing works for an Indian subsidiary of an Australian company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.",
    url: "https://www.theaucorp.com/australia-to-india/transfer-pricing",
    locale: "en_AU",
  },
  twitter: {
    title: "Transfer Pricing in India for Australian-Owned Subsidiaries",
    description:
      "How transfer pricing works for an Indian subsidiary of an Australian company: arm's length pricing, documentation, Form 48, methods, safe harbour and audits.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
