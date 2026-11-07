import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "FCPA and US Export Controls for an Indian Subsidiary",
  },
  description:
    "The compliance rules that follow US law into India: how the Foreign Corrupt Practices Act reaches an Indian subsidiary and its agents, how Indian.",
  alternates: guideAlternates("usa", "anti-bribery-export-controls"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=FCPA%20and%20US%20Export%20Controls%20for%20an%20Indian%20Subsidiary", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "FCPA and US Export Controls for an Indian Subsidiary",
    description:
      "The compliance rules that follow US law into India: how the Foreign Corrupt Practices Act reaches an Indian subsidiary and its agents, how Indian.",
    url: "https://www.theaucorp.com/usa-to-india/fcpa-anti-bribery-and-export-controls-for-indian-subsidiaries",
    locale: "en_US",
  },
  twitter: {
    title: "FCPA and US Export Controls for an Indian Subsidiary",
    description:
      "The compliance rules that follow US law into India: how the Foreign Corrupt Practices Act reaches an Indian subsidiary and its agents, how Indian.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
