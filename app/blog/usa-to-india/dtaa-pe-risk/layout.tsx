import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-US Tax Treaty and Permanent Establishment Risk",
  },
  description:
    "How the India-US tax treaty applies to payments to your US parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.",
  alternates: guideAlternates("usa", "dtaa-pe-risk"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-US%20Tax%20Treaty%20and%20Permanent%20Establishment%20Risk", width: 1200, height: 630, alt: "India-US Tax Treaty and Permanent Establishment Risk" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "India-US Tax Treaty and Permanent Establishment Risk",
    description:
      "How the India-US tax treaty applies to payments to your US parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.",
    url: "https://www.theaucorp.com/usa-to-india/dtaa-pe-risk",
  },
  twitter: {
    title: "India-US Tax Treaty and Permanent Establishment Risk",
    description:
      "How the India-US tax treaty applies to payments to your US parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
