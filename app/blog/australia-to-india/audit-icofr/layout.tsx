import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Audit and ICOFR for Australian Companies",
  },
  description:
    "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of an Australian group.",
  alternates: guideAlternates("australia", "audit-icofr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Audit%20and%20ICOFR%20for%20Australian%20Companies", width: 1200, height: 630, alt: "Audit and ICOFR for Australian Companies" }],
    siteName: "AU Corporate",
    title: "Audit and ICOFR for Australian Companies",
    description:
      "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of an Australian group.",
    url: "https://www.theaucorp.com/australia-to-india/audit-icofr",
    locale: "en_AU",
  },
  twitter: {
    title: "Audit and ICOFR for Australian Companies",
    description:
      "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of an Australian group.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
