import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Liaison Office Registration in India for Foreign Companies",
  },
  description:
    "Register a liaison office of your foreign company in India: eligibility, Form FNC, UIN, ROC Form FC-1, PAN, TAN, permitted tasks and FAQs, with a fixed-fee.",
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
      "Register a liaison office of your foreign company in India: eligibility, Form FNC, UIN, ROC Form FC-1, PAN, TAN, permitted tasks and FAQs, with a fixed-fee.",
    url: "https://www.theaucorp.com/liaison-office-registration",
  },
  twitter: {
    title: "Liaison Office Registration in India for Foreign Companies",
    description:
      "Register a liaison office of your foreign company in India: eligibility, Form FNC, UIN, ROC Form FC-1, PAN, TAN, permitted tasks and FAQs, with a fixed-fee.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
