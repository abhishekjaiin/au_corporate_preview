import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Can a Foreign Company Own 100% of an Indian Company? (100% FDI)" },
  description: "Yes, in most sectors. How 100% FDI works in India: the Automatic Route, capped and prohibited sectors, Press Note 3, two shareholders and filings.",
  alternates: { canonical: "https://www.theaucorp.com/can-a-foreign-company-own-100-percent-of-an-indian-company" },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Can%20a%20Foreign%20Company%20Own%20100%25%20of%20an%20Indian%20Company%3F%20%28100%25%20FDI%29", width: 1200, height: 630, alt: "Can a Foreign Company Own 100% of an Indian Company? (100% FDI)" }],
    siteName: "AU Corporate",
    title: "Can a Foreign Company Own 100% of an Indian Company? (100% FDI)",
    description: "Yes, in most sectors. How 100% FDI works in India: the Automatic Route, capped and prohibited sectors, Press Note 3, two shareholders and filings.",
    url: "https://www.theaucorp.com/can-a-foreign-company-own-100-percent-of-an-indian-company",
    locale: "en_IN",
  },
  twitter: { title: "Can a Foreign Company Own 100% of an Indian Company? (100% FDI)", description: "Yes, in most sectors. How 100% FDI works in India: the Automatic Route, capped and prohibited sectors, Press Note 3, two shareholders and filings." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
