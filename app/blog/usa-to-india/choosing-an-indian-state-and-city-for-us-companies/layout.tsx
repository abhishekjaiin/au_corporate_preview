import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Choosing an Indian State and City for a US Company",
  },
  description:
    "How to choose the state and city for the registered office and the team: a decision framework, a comparison table of major hubs by function, how state law.",
  alternates: guideAlternates("usa", "state-and-city"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Choosing%20an%20Indian%20State%20and%20City%20for%20a%20US%20Company", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Choosing an Indian State and City for a US Company",
    description:
      "How to choose the state and city for the registered office and the team: a decision framework, a comparison table of major hubs by function, how state law.",
    url: "https://www.theaucorp.com/usa-to-india/choosing-an-indian-state-and-city-for-us-companies",
    locale: "en_US",
  },
  twitter: {
    title: "Choosing an Indian State and City for a US Company",
    description:
      "How to choose the state and city for the registered office and the team: a decision framework, a comparison table of major hubs by function, how state law.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
