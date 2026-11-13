import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Liaison Office Registration in India for Foreign Companies",
  },
  description:
    "Register a liaison office of your foreign company in India: eligibility, Form FNC, UIN, Form FC-1, PAN, TAN and permitted tasks. Free consultation.",
  alternates: {
    canonical: "https://www.theaucorp.com/liaison-office-registration",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Liaison%20Office%20Registration%20in%20India%20for%20Foreign%20Companies", width: 1200, height: 630, alt: "Liaison Office Registration in India for Foreign Companies" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Liaison Office Registration in India for Foreign Companies",
    description:
      "Register a liaison office of your foreign company in India: eligibility, Form FNC, UIN, Form FC-1, PAN, TAN and permitted tasks. Free consultation.",
    url: "https://www.theaucorp.com/liaison-office-registration",
  },
  twitter: { card: "summary_large_image",
    title: "Liaison Office Registration in India for Foreign Companies",
    description:
      "Register a liaison office of your foreign company in India: eligibility, Form FNC, UIN, Form FC-1, PAN, TAN and permitted tasks. Free consultation.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
