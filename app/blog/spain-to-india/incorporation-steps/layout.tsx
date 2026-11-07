import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Incorporation Steps for a Spanish Company in India",
  },
  description:
    "The exact steps to incorporate an Indian private limited company when the shareholder is Spanish: name, DIN and DSC, the SPICe+ form with AGILE-PRO-S.",
  alternates: guideAlternates("spain", "incorporation-process"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Incorporation%20Steps%20for%20a%20Spanish%20Company%20in%20India", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Incorporation Steps for a Spanish Company in India",
    description:
      "The exact steps to incorporate an Indian private limited company when the shareholder is Spanish: name, DIN and DSC, the SPICe+ form with AGILE-PRO-S.",
    url: "https://www.theaucorp.com/spain-to-india/incorporation-steps",
    locale: "en_ES",
  },
  twitter: {
    title: "Incorporation Steps for a Spanish Company in India",
    description:
      "The exact steps to incorporate an Indian private limited company when the shareholder is Spanish: name, DIN and DSC, the SPICe+ form with AGILE-PRO-S.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
