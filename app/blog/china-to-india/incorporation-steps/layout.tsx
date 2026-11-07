import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Incorporation Steps for a Chinese-Owned Indian Subsidiary",
  },
  description:
    "The step-by-step plan for incorporating an Indian private limited company owned by a Chinese parent: Press Note 3 approval, documents, director clearance.",
  alternates: guideAlternates("china", "incorporation-process"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Incorporation%20Steps%20for%20a%20Chinese-Owned%20Indian%20Subsidiary", width: 1200, height: 630, alt: "Incorporation Steps for a Chinese-Owned Indian Subsidiary" }],
    siteName: "AU Corporate",
    title: "Incorporation Steps for a Chinese-Owned Indian Subsidiary",
    description:
      "The step-by-step plan for incorporating an Indian private limited company owned by a Chinese parent: Press Note 3 approval, documents, director clearance.",
    url: "https://www.theaucorp.com/china-to-india/incorporation-steps",
    locale: "en_CN",
  },
  twitter: {
    title: "Incorporation Steps for a Chinese-Owned Indian Subsidiary",
    description:
      "The step-by-step plan for incorporating an Indian private limited company owned by a Chinese parent: Press Note 3 approval, documents, director clearance.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
