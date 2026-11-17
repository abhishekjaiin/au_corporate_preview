import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Contracts and Arbitration for a German Parent",
  },
  description:
    "How a German parent protects its Indian subsidiary contracts: choice of law, DIS and other arbitration.",
  alternates: guideAlternates("germany", "contracts-and-arbitration"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Contracts%20and%20Arbitration%20for%20a%20German%20Parent", width: 1200, height: 630, alt: "Contracts and Arbitration for a German Parent" }],
    siteName: "AU Corporate",
    title: "Contracts and Arbitration for a German Parent",
    description:
      "How a German parent protects its Indian subsidiary contracts: choice of law, DIS and other arbitration.",
    url: "https://www.theaucorp.com/germany-to-india/contracts-courts-arbitration",
    locale: "en_DE",
  },
  twitter: { card: "summary_large_image",
    title: "Contracts and Arbitration for a German Parent",
    description:
      "How a German parent protects its Indian subsidiary contracts: choice of law, DIS and other arbitration.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
