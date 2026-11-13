import type { Metadata } from "next"

const URL = "https://www.theaucorp.com/free-consultation"
const TITLE = "Free Consultation: India Company Setup | AU Corporate"
const DESCRIPTION =
  "Book a free consultation with a Chartered Accountant on setting up and running your company in India: structure, timeline, compliance and a fixed quote."

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=" + encodeURIComponent("Free consultation"), width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
