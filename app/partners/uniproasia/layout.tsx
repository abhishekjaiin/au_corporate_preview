import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "UniproAsia: Hong Kong, Singapore and China",
  },
  description:
    "AU Corporate partners with UniproAsia to help clients expand beyond India into Hong Kong, Singapore and China — formation, tax and compliance in one engagement.",
  keywords: ["UniproAsia", "Unipro Consulting", "Hong Kong company formation", "Singapore company formation", "China business setup", "AU Corporate partner", "expand into Hong Kong from India", "expand into Singapore from India"],
  alternates: {
    canonical: "https://www.theaucorp.com/partners/uniproasia",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=UniproAsia%3A%20Hong%20Kong%2C%20Singapore%20and%20China", width: 1200, height: 630, alt: "UniproAsia: Hong Kong, Singapore and China" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "UniproAsia: Hong Kong, Singapore and China",
    description:
      "AU Corporate partners with UniproAsia to help clients expand beyond India into Hong Kong, Singapore and China — formation, tax and compliance in one engagement.",
    url: "https://www.theaucorp.com/partners/uniproasia",
  },
  twitter: {
    title: "UniproAsia: Hong Kong, Singapore and China",
    description:
      "AU Corporate partners with UniproAsia to help clients expand beyond India into Hong Kong, Singapore and China — formation, tax and compliance in one engagement.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
