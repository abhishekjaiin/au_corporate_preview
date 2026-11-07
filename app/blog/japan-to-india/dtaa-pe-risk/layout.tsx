import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India-Japan Tax Treaty and Permanent Establishment Risk",
  },
  description:
    "How the India-Japan tax treaty applies to payments to your Japanese parent: 10% Withholding Tax rates, residence certificate, Form 41 and permanent.",
  alternates: guideAlternates("japan", "dtaa-pe-risk"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-Japan%20Tax%20Treaty%20and%20Permanent%20Establishment%20Risk", width: 1200, height: 630, alt: "India-Japan Tax Treaty and Permanent Establishment Risk" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "India-Japan Tax Treaty and Permanent Establishment Risk",
    description:
      "How the India-Japan tax treaty applies to payments to your Japanese parent: 10% Withholding Tax rates, residence certificate, Form 41 and permanent.",
    url: "https://www.theaucorp.com/japan-to-india/dtaa-pe-risk",
  },
  twitter: {
    title: "India-Japan Tax Treaty and Permanent Establishment Risk",
    description:
      "How the India-Japan tax treaty applies to payments to your Japanese parent: 10% Withholding Tax rates, residence certificate, Form 41 and permanent.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
