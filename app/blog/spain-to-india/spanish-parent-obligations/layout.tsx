import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Spanish Parent Obligations for an Indian Subsidiary",
  },
  description:
    "The Spanish-side steps for a parent investing in India: declarations to the Registro de Inversiones Exteriores (forms D-5A and D-8), board and notarial.",
  alternates: guideAlternates("spain", "parent-obligations"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Spanish%20Parent%20Obligations%20for%20an%20Indian%20Subsidiary", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Spanish Parent Obligations for an Indian Subsidiary",
    description:
      "The Spanish-side steps for a parent investing in India: declarations to the Registro de Inversiones Exteriores (forms D-5A and D-8), board and notarial.",
    url: "https://www.theaucorp.com/spain-to-india/spanish-parent-obligations",
    locale: "en_ES",
  },
  twitter: {
    title: "Spanish Parent Obligations for an Indian Subsidiary",
    description:
      "The Spanish-side steps for a parent investing in India: declarations to the Registro de Inversiones Exteriores (forms D-5A and D-8), board and notarial.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
