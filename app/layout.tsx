import type { Metadata, Viewport } from "next"
import { Inter, Manrope } from "next/font/google"
import Script from "next/script"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/PageTransition"
import { FloatingInquiryCTA } from "@/components/FloatingInquiryCTA"
import { StickyInquirySidebar } from "@/components/StickyInquirySidebar"

import { AUTHOR_LINKEDIN, OFFICE_ADDRESSES_SCHEMA } from "@/lib/site"
import { HTML_LANG_SCRIPT } from "@/lib/seo/public-path"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theaucorp.com"),

  applicationName: "AU Corporate",

  title: {
    default:
      "AU Corporate: Company Registration in India & Compliance",
    template: "%s | AU Corporate",
  },

  description:
    "AU Corporate is an India-based, CA-led professional services firm supporting foreign companies with India entry, subsidiary setup, tax and ongoing compliance.",

  // No site-wide canonical: an inherited one would declare every page that
  // forgets its own canonical a copy of the homepage. Each page sets its own;
  // the homepage's is in app/page.tsx. No site-wide hreflang either: the
  // country guides set theirs through guideAlternates().

  authors: [
    {
      name: "AU Corporate",
      url: "https://www.theaucorp.com",
    },
  ],

  creator: "AU Corporate",
  publisher: "AU Corporate",

  category: "Business Consulting",

  verification: {
    google: "EaFWAr0fJDtIHQPX6pyk38j3Y3ms9bv149_AOASj8MI",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: "https://www.theaucorp.com/",

    siteName: "AU Corporate",

    title: "AU Corporate: Company Registration in India & Compliance",

    description:
      "CA-led firm for company incorporation and registration in India, serving clients across India and worldwide, with accounting, tax and FEMA compliance.",

    images: [
      {
        url: "https://www.theaucorp.com/og?title=AU%20Corporate%3A%20Company%20Registration%20in%20India%20%26%20Compliance",
        width: 1200,
        height: 630,
        alt: "AU Corporate: Company Registration in India & Compliance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "AU Corporate: Company Registration in India & Compliance",

    description:
      "AU Corporate is an India-based, CA-led professional services firm supporting foreign companies with India entry, subsidiary setup, tax and ongoing compliance.",

    images: ["https://www.theaucorp.com/og?title=AU%20Corporate%3A%20Company%20Registration%20in%20India%20%26%20Compliance"],
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" className="bg-white scroll-smooth">
      <head>
        <script id="html-lang" dangerouslySetInnerHTML={{ __html: HTML_LANG_SCRIPT }} />

        {/* BRAND META (application-name comes from metadata.applicationName) */}
        <meta
          name="apple-mobile-web-app-title"
          content="AU Corporate"
        />

        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />


        {/* GOOGLE TAG MANAGER — lazyOnload: GTM and gtag.js together are ~290 KB of
            script, and loading them during page load held back the headline font and
            page code on slow mobile networks (PageSpeed LCP 7.8s). They now start
            once the page has loaded; tags still fire on every page view. */}
        <Script id="gtm-container" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N23Z4X6Z');
          `}
        </Script>

        {/* GOOGLE TAG (gtag.js) — direct GA4 tag, separate from the GTM container above. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XHJD1NV447"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XHJD1NV447');
          `}
        </Script>

        {/* BING CLARITY TRACKING — lazyOnload for the same reason */}
        <Script
          id="clarity-tracking"
          strategy="lazyOnload"
        >
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "z778z6v5zb");
          `}
        </Script>

        {/* SITEWIDE ORGANIZATION + WEBSITE SCHEMA
            Keep global structured data intentionally small and valid. Page-specific
            schemas (BreadcrumbList, FAQPage, Article, Service, etc.) belong on the
            relevant page/layout instead of being emitted on every URL. */}
        <script
          id="site-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.theaucorp.com/#organization",
                  name: "AU Corporate",
                  alternateName: ["AU Corp", "A U Corporate"],
                  url: "https://www.theaucorp.com/",
                  logo: "https://www.theaucorp.com/logo.png",
                  slogan: "Growing Together",
                  foundingDate: "2016",
                  description:
                    "CA-led firm for company incorporation and registration in India, and the accounting, FEMA/RBI, tax, secretarial and payroll compliance that follows.",
                  address: OFFICE_ADDRESSES_SCHEMA,
                  founder: { "@id": "https://www.theaucorp.com/#abhishek-jaiin" },
                  areaServed: { "@type": "Country", name: "India" },
                  knowsAbout: [
                    "Company incorporation in India",
                    "Company registration in India",
                    "Private limited company registration",
                    "Foreign subsidiary registration in India",
                    "FEMA and RBI compliance",
                    "Indian tax, GST and transfer pricing",
                    "Company secretarial and ROC compliance",
                    "Payroll and expat tax in India",
                    "Global Capability Centres in India",
                  ],
                  sameAs: [
                    "https://www.linkedin.com/company/aucorporate/",
                    "https://www.instagram.com/aucorporate/",
                    "https://www.facebook.com/profile.php?id=61593816719018",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    telephone: "+91-9999010513",
                    email: "partner@theaucorp.com",
                  },
                },
                {
                  "@type": "Person",
                  "@id": "https://www.theaucorp.com/#abhishek-jaiin",
                  name: "Abhishek Jaiin",
                  jobTitle: "Chartered Accountant",
                  award: "All India Rank 44",
                  worksFor: { "@id": "https://www.theaucorp.com/#organization" },
                  url: "https://www.theaucorp.com/about",
                  image: "https://www.theaucorp.com/images/authors/abhishek-jaiin.jpg",
                  sameAs: [AUTHOR_LINKEDIN],
                  hasCredential: {
                    "@type": "EducationalOccupationalCredential",
                    name: "Chartered Accountant, ICAI membership no. 544646",
                    credentialCategory: "Professional certification",
                    recognizedBy: { "@type": "Organization", name: "The Institute of Chartered Accountants of India" },
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.theaucorp.com/#website",
                  // Google's site name for search results: name, alternateName
                  // and url must match the homepage exactly (with the slash).
                  name: "AU Corporate",
                  alternateName: ["AU Corp", "A U Corporate"],
                  url: "https://www.theaucorp.com/",
                  inLanguage: "en-IN",
                  publisher: {
                    "@id": "https://www.theaucorp.com/#organization",
                  },
                },
              ],
            }),
          }}
        />

    </head>

    <body
      className={`${inter.variable} ${manrope.variable} font-sans antialiased m-0 p-0 overflow-x-hidden`}
    >
      {/* GOOGLE TAG MANAGER (noscript) — must be immediately after the opening <body>
          tag per Google's own installation requirement, for the no-JS fallback to work. */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N23Z4X6Z"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* NAVBAR */}
      <div className="relative z-60">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 pt-16 sm:pt-20">
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer />
      </div>

      {/* SITEWIDE LEAD-GENERATION CTA — floating "Talk to an Expert" trigger (lg-2xl)
          and sticky bar (mobile) that open the enquiry form in a modal on every page,
          not just the handful of pages that already embed it inline. */}
      <FloatingInquiryCTA />

      {/* SITEWIDE LEAD-GENERATION SIDEBAR — a slim, click-to-open "Quick Enquiry"
          tab docked to the right edge on large desktop viewports (2xl+), replacing
          the floating trigger at that breakpoint. Starts collapsed (doesn't reserve
          any page width or open itself) and only expands into the form as a
          floating overlay when clicked. */}
      <StickyInquirySidebar />

      {/* APOLLO TRACKER */}
            <Script
        id="apollo"
        strategy="lazyOnload"
      >
        {`
          function initApollo() {
            var n = Math.random().toString(36).substring(7),
                o = document.createElement("script");

            o.src =
              "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" +
              n;

            o.async = true;
            o.defer = true;

            o.onload = function () {
              if (window.trackingFunctions) {
                window.trackingFunctions.onLoad({
                  appId: "69ef2f72e61a0c000d596f8e",
                });
              }
            };

            document.head.appendChild(o);
          }

          initApollo();
        `}
      </Script>
    </body>
  </html>
  )
}
