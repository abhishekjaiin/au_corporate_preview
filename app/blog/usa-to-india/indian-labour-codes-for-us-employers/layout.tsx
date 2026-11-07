import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India's Labour Codes for US Employers",
  },
  description:
    "What a US company used to at-will employment needs to know about India's consolidated labour codes: the wage definition and its effect on provident fund.",
  alternates: guideAlternates("usa", "labour-codes"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India's%20Labour%20Codes%20for%20US%20Employers", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "India's Labour Codes for US Employers",
    description:
      "What a US company used to at-will employment needs to know about India's consolidated labour codes: the wage definition and its effect on provident fund.",
    url: "https://www.theaucorp.com/usa-to-india/indian-labour-codes-for-us-employers",
    locale: "en_US",
  },
  twitter: {
    title: "India's Labour Codes for US Employers",
    description:
      "What a US company used to at-will employment needs to know about India's consolidated labour codes: the wage definition and its effect on provident fund.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
