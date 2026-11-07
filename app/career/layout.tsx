import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Careers at AU Corporate | Join Our Advisory Team",
  },
  description:
    "Explore career opportunities at AU Corporate, a professional services firm specializing in India entry, taxation, and regulatory advisory.",
  alternates: {
    canonical: "https://www.theaucorp.com/career",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Careers%20at%20AU%20Corporate%20%7C%20Join%20Our%20Advisory%20Team", width: 1200, height: 630, alt: "Careers at AU Corporate | Join Our Advisory Team" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Careers at AU Corporate | Join Our Advisory Team",
    description:
      "Explore career opportunities at AU Corporate, a professional services firm specializing in India entry, taxation, and regulatory advisory.",
    url: "https://www.theaucorp.com/career",
  },
  twitter: {
    title: "Careers at AU Corporate | Join Our Advisory Team",
    description:
      "Explore career opportunities at AU Corporate, a professional services firm specializing in India entry, taxation, and regulatory advisory.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
