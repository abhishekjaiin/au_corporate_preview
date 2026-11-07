import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "How Long It Takes to Set Up an Indian Subsidiary from Spain",
  },
  description:
    "A realistic schedule for a Spanish parent: documents and apostille in Spain, incorporation in India, the bank account and share capital.",
  alternates: guideAlternates("spain", "setup-timeline"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=How%20Long%20It%20Takes%20to%20Set%20Up%20an%20Indian%20Subsidiary%20from%20Spain", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "How Long It Takes to Set Up an Indian Subsidiary from Spain",
    description:
      "A realistic schedule for a Spanish parent: documents and apostille in Spain, incorporation in India, the bank account and share capital.",
    url: "https://www.theaucorp.com/spain-to-india/how-long-it-takes-to-set-up-from-spain",
    locale: "en_ES",
  },
  twitter: {
    title: "How Long It Takes to Set Up an Indian Subsidiary from Spain",
    description:
      "A realistic schedule for a Spanish parent: documents and apostille in Spain, incorporation in India, the bank account and share capital.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
