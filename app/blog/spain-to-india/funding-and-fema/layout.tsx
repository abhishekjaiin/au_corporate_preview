import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Funding an Indian Subsidiary from Spain",
  },
  description:
    "How a Spanish parent can put money into an Indian company: equity under the Automatic Route, convertible instruments, external commercial borrowing.",
  alternates: guideAlternates("spain", "funding-fema-fc-gpr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Funding%20an%20Indian%20Subsidiary%20from%20Spain", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Funding an Indian Subsidiary from Spain",
    description:
      "How a Spanish parent can put money into an Indian company: equity under the Automatic Route, convertible instruments, external commercial borrowing.",
    url: "https://www.theaucorp.com/spain-to-india/funding-and-fema",
    locale: "en_ES",
  },
  twitter: {
    title: "Funding an Indian Subsidiary from Spain",
    description:
      "How a Spanish parent can put money into an Indian company: equity under the Automatic Route, convertible instruments, external commercial borrowing.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
