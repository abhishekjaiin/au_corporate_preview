import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Project Office Registration in India for Foreign Companies",
  },
  description:
    "Set up a project office in India for a contract from an Indian company: conditions, Form FNC, Form FC-1, PAN and TAN. CA-led, free consultation.",
  alternates: {
    canonical: "https://www.theaucorp.com/project-office-registration",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Project%20Office%20Registration%20in%20India%20for%20Foreign%20Companies", width: 1200, height: 630, alt: "Project Office Registration in India for Foreign Companies" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Project Office Registration in India for Foreign Companies",
    description:
      "Set up a project office in India for a contract from an Indian company: conditions, Form FNC, Form FC-1, PAN and TAN. CA-led, free consultation.",
    url: "https://www.theaucorp.com/project-office-registration",
  },
  twitter: { card: "summary_large_image",
    title: "Project Office Registration in India for Foreign Companies",
    description:
      "Set up a project office in India for a contract from an Indian company: conditions, Form FNC, Form FC-1, PAN and TAN. CA-led, free consultation.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
