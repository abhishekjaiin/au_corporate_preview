import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Claiming India-US Treaty Benefits: Form 6166 and Form 41",
  },
  description:
    "Documents needed to claim India-US treaty rates: IRS Form 6166, Form 41 (previously Form 10F), no-PE declaration and beneficial ownership.",
  alternates: guideAlternates("usa", "treaty-benefits-documents"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Claiming%20India-US%20Treaty%20Benefits%3A%20Form%206166%20and%20Form%2041", width: 1200, height: 630, alt: "Claiming India-US Treaty Benefits: Form 6166 and Form 41" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Claiming India-US Treaty Benefits: Form 6166 and Form 41",
    description:
      "Documents needed to claim India-US treaty rates: IRS Form 6166, Form 41 (previously Form 10F), no-PE declaration and beneficial ownership.",
    url: "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties/treaty-benefits-documents",
  },
  twitter: {
    title: "Claiming India-US Treaty Benefits: Form 6166 and Form 41",
    description:
      "Documents needed to claim India-US treaty rates: IRS Form 6166, Form 41 (previously Form 10F), no-PE declaration and beneficial ownership.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
