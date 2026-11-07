import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "ROC Compliance for Foreign Companies in India: FC-1 to FC-4",
  },
  description:
    "Form FC-1 registration, FC-2 changes, FC-3 accounts and the FC-4 annual return for a foreign company's India branch office.",
  alternates: {
    canonical: "https://www.theaucorp.com/foreign-company-roc-compliance",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=ROC%20Compliance%20for%20Foreign%20Companies%20in%20India%3A%20FC-1%20to%20FC-4", width: 1200, height: 630, alt: "ROC Compliance for Foreign Companies in India: FC-1 to FC-4" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "ROC Compliance for Foreign Companies in India: FC-1 to FC-4",
    description:
      "Form FC-1 registration, FC-2 changes, FC-3 accounts and the FC-4 annual return for a foreign company's India branch office.",
    url: "https://www.theaucorp.com/foreign-company-roc-compliance",
  },
  twitter: {
    title: "ROC Compliance for Foreign Companies in India: FC-1 to FC-4",
    description:
      "Form FC-1 registration, FC-2 changes, FC-3 accounts and the FC-4 annual return for a foreign company's India branch office.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
