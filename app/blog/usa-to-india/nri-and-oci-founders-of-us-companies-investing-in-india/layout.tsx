import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "NRI and OCI Founders of US Companies in India",
  },
  description:
    "How the status of the founder changes the plan: how FEMA treats NRIs, OCI cardholders and US citizens of Indian origin, the repatriable and non-repatriable.",
  alternates: guideAlternates("usa", "nri-oci-founders"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=NRI%20and%20OCI%20Founders%20of%20US%20Companies%20in%20India", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "NRI and OCI Founders of US Companies in India",
    description:
      "How the status of the founder changes the plan: how FEMA treats NRIs, OCI cardholders and US citizens of Indian origin, the repatriable and non-repatriable.",
    url: "https://www.theaucorp.com/usa-to-india/nri-and-oci-founders-of-us-companies-investing-in-india",
    locale: "en_US",
  },
  twitter: {
    title: "NRI and OCI Founders of US Companies in India",
    description:
      "How the status of the founder changes the plan: how FEMA treats NRIs, OCI cardholders and US citizens of Indian origin, the repatriable and non-repatriable.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
