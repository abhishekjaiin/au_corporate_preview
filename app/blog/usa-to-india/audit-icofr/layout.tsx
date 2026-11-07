import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Audit of a US Company's Indian Subsidiary and ICOFR",
  },
  description:
    "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of a US group. What to expect and how to prepare.",
  alternates: guideAlternates("usa", "audit-icofr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Audit%20of%20a%20US%20Company's%20Indian%20Subsidiary%20and%20ICOFR", width: 1200, height: 630, alt: "Audit of a US Company's Indian Subsidiary and ICOFR" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Audit of a US Company's Indian Subsidiary and ICOFR",
    description:
      "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of a US group. What to expect and how to prepare.",
    url: "https://www.theaucorp.com/usa-to-india/audit-icofr",
  },
  twitter: {
    title: "Audit of a US Company's Indian Subsidiary and ICOFR",
    description:
      "Statutory audit, tax audit, GST audit and internal controls over financial reporting for an Indian subsidiary of a US group. What to expect and how to prepare.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
