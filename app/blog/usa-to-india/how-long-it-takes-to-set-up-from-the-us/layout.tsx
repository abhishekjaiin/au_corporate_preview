import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "How Long It Takes to Set Up an Indian Subsidiary from the US",
  },
  description:
    "A schedule for a US parent: US documents and apostille, Indian incorporation, bank onboarding across the time difference, and the capital remittance.",
  alternates: guideAlternates("usa", "setup-timeline"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=How%20Long%20It%20Takes%20to%20Set%20Up%20an%20Indian%20Subsidiary%20from%20the%20US", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "How Long It Takes to Set Up an Indian Subsidiary from the US",
    description:
      "A schedule for a US parent: US documents and apostille, Indian incorporation, bank onboarding across the time difference, and the capital remittance.",
    url: "https://www.theaucorp.com/usa-to-india/how-long-it-takes-to-set-up-from-the-us",
    locale: "en_US",
  },
  twitter: {
    title: "How Long It Takes to Set Up an Indian Subsidiary from the US",
    description:
      "A schedule for a US parent: US documents and apostille, Indian incorporation, bank onboarding across the time difference, and the capital remittance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
