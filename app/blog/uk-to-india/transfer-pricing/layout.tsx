import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing for UK-Owned Indian Subsidiaries",
  },
  description:
    "How Indian transfer pricing applies to an Indian subsidiary of a UK group: arm's length pricing, Form 48, documentation, methods, safe harbours, audits.",
  alternates: guideAlternates("uk", "transfer-pricing"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Transfer%20Pricing%20for%20UK-Owned%20Indian%20Subsidiaries", width: 1200, height: 630, alt: "Transfer Pricing for UK-Owned Indian Subsidiaries" }],
    siteName: "AU Corporate",
    title: "Transfer Pricing for UK-Owned Indian Subsidiaries",
    description:
      "How Indian transfer pricing applies to an Indian subsidiary of a UK group: arm's length pricing, Form 48, documentation, methods, safe harbours, audits.",
    url: "https://www.theaucorp.com/uk-to-india/transfer-pricing",
    locale: "en_GB",
  },
  twitter: {
    title: "Transfer Pricing for UK-Owned Indian Subsidiaries",
    description:
      "How Indian transfer pricing applies to an Indian subsidiary of a UK group: arm's length pricing, Form 48, documentation, methods, safe harbours, audits.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
