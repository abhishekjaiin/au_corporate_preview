import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Exit Options for a Singapore-Owned Indian Subsidiary",
  },
  description:
    "Exit routes for a Singapore parent: sale of Indian shares and treaty position by acquisition date, FEMA pricing and reporting, indirect transfer, buyback.",
  alternates: guideAlternates("singapore", "restructuring-and-exit"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Exit%20Options%20for%20a%20Singapore-Owned%20Indian%20Subsidiary", width: 1200, height: 630, alt: "Exit Options for a Singapore-Owned Indian Subsidiary" }],
    siteName: "AU Corporate",
    title: "Exit Options for a Singapore-Owned Indian Subsidiary",
    description:
      "Exit routes for a Singapore parent: sale of Indian shares and treaty position by acquisition date, FEMA pricing and reporting, indirect transfer, buyback.",
    url: "https://www.theaucorp.com/singapore-to-india/exit-and-restructuring",
    locale: "en_SG",
  },
  twitter: {
    title: "Exit Options for a Singapore-Owned Indian Subsidiary",
    description:
      "Exit routes for a Singapore parent: sale of Indian shares and treaty position by acquisition date, FEMA pricing and reporting, indirect transfer, buyback.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
