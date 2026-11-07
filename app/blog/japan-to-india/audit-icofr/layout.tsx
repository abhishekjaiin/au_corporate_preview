import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Audit and ICOFR for Japanese Companies",
  },
  description:
    "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of a Japanese group.",
  alternates: guideAlternates("japan", "audit-icofr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Audit%20and%20ICOFR%20for%20Japanese%20Companies", width: 1200, height: 630, alt: "Audit and ICOFR for Japanese Companies" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Audit and ICOFR for Japanese Companies",
    description:
      "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of a Japanese group.",
    url: "https://www.theaucorp.com/japan-to-india/audit-icofr",
  },
  twitter: {
    title: "Audit and ICOFR for Japanese Companies",
    description:
      "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of a Japanese group.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
