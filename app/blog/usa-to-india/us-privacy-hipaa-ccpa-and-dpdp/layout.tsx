import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "US Privacy Law and India's DPDP Act",
  },
  description:
    "How a US company handles personal data when an Indian subsidiary or vendor processes it: what US federal and state privacy laws require, HIPAA business.",
  alternates: guideAlternates("usa", "data-protection"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=US%20Privacy%20Law%20and%20India's%20DPDP%20Act", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "US Privacy Law and India's DPDP Act",
    description:
      "How a US company handles personal data when an Indian subsidiary or vendor processes it: what US federal and state privacy laws require, HIPAA business.",
    url: "https://www.theaucorp.com/usa-to-india/us-privacy-hipaa-ccpa-and-dpdp",
    locale: "en_US",
  },
  twitter: {
    title: "US Privacy Law and India's DPDP Act",
    description:
      "How a US company handles personal data when an Indian subsidiary or vendor processes it: what US federal and state privacy laws require, HIPAA business.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
