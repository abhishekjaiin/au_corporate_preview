import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Case Studies: Indian Subsidiaries",
  },
  description:
    "How foreign parents set up, run and fix the compliance of Indian subsidiaries with AU Corporate: a US SaaS captive, 14-day incorporation, FEMA compounding.",
  alternates: {
    canonical: "https://www.theaucorp.com/case-studies",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Case%20Studies%3A%20Indian%20Subsidiaries", width: 1200, height: 630, alt: "Case Studies: Indian Subsidiaries" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Case Studies: Indian Subsidiaries",
    description:
      "How foreign parents set up, run and fix the compliance of Indian subsidiaries with AU Corporate: a US SaaS captive, 14-day incorporation, FEMA compounding.",
    url: "https://www.theaucorp.com/case-studies",
  },
  twitter: {
    title: "Case Studies: Indian Subsidiaries",
    description:
      "How foreign parents set up, run and fix the compliance of Indian subsidiaries with AU Corporate: a US SaaS captive, 14-day incorporation, FEMA compounding.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
