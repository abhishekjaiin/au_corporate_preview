import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Manufacturing Company Setup in India for Foreign Companies" },
  description: "How a foreign company sets up manufacturing in India: own plant or contract manufacturing, FDI route, land, approvals, PLI incentives and tax.",
  alternates: { canonical: "https://www.theaucorp.com/manufacturing-company-setup-in-india" },
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Manufacturing%20Company%20Setup%20in%20India%20for%20Foreign%20Companies", width: 1200, height: 630, alt: "Manufacturing Company Setup in India for Foreign Companies" }],
    siteName: "AU Corporate",
    title: "Manufacturing Company Setup in India for Foreign Companies",
    description: "How a foreign company sets up manufacturing in India: own plant or contract manufacturing, FDI route, land, approvals, PLI incentives and tax.",
    url: "https://www.theaucorp.com/manufacturing-company-setup-in-india",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: "Manufacturing Company Setup in India for Foreign Companies", description: "How a foreign company sets up manufacturing in India: own plant or contract manufacturing, FDI route, land, approvals, PLI incentives and tax." },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
