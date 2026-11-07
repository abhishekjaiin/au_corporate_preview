import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "OIDAR GST Registration and GSTR-5A Filing Service in India",
  },
  description:
    "OIDAR GST registration, GSTR-5A filing and GST payment service for foreign AI and SaaS companies selling in India. CA-led, 18% IGST, no threshold. Get a quote.",
  alternates: {
    canonical: "https://www.theaucorp.com/oidar-gst-registration-india",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=OIDAR%20GST%20Registration%20and%20GSTR-5A%20Filing%20Service%20in%20India", width: 1200, height: 630, alt: "OIDAR GST Registration and GSTR-5A Filing Service in India" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "OIDAR GST Registration and GSTR-5A Filing Service in India",
    description:
      "OIDAR GST registration, GSTR-5A filing and GST payment service for foreign AI and SaaS companies selling in India. CA-led, 18% IGST, no threshold. Get a quote.",
    url: "https://www.theaucorp.com/oidar-gst-registration-india",
  },
  twitter: {
    title: "OIDAR GST Registration and GSTR-5A Filing Service in India",
    description:
      "OIDAR GST registration, GSTR-5A filing and GST payment service for foreign AI and SaaS companies selling in India. CA-led, 18% IGST, no threshold. Get a quote.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
