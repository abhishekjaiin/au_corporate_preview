/** @type {import('next').NextConfig} */
const jurisdictionSlugs = ["usa","uk","japan","germany","singapore","australia","china","hong-kong","russia","spain"]

const nextConfig = {
  // Inline the (Tailwind, so small) CSS into each page's <head>: removes the
  // render-blocking stylesheet request that PageSpeed flagged on mobile.
  experimental: {
    inlineCss: true,
  },
  images: {
    // No remotePatterns: every image on the public site — including new
    // Insights managed through the Postgres-backed dashboard — is
    // self-hosted from public/images/ or CSS/SVG. This lockdown was added
    // 2026-09-21 after hotlinked Unsplash images 404'd in production.
    // Sanity's cdn.sanity.io exception (added 2026-10-06) was removed when
    // Sanity was decommissioned in favor of the custom dashboard — do not
    // re-add an external image host without the same explicit
    // confirmation that exception required.
    formats: ["image/avif", "image/webp"],

    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://tagmanager.google.com https://www.clarity.ms https://scripts.clarity.ms https://*.clarity.ms https://assets.apollo.io",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://www.google.com https://www.clarity.ms https://*.clarity.ms https://scripts.clarity.ms https://assets.apollo.io https://aplo-evnt.com https://api.web3forms.com",
              "frame-src https://www.googletagmanager.com",
              "form-action 'self' https://api.web3forms.com",
              "object-src 'none'",
              "base-uri 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ]
  },

  // NON-WWW → WWW REDIRECT
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "theaucorp.com",
          },
        ],
        destination: "https://www.theaucorp.com/:path*",
        permanent: true,
      },
      // Retired pages: each old URL points to the page that replaced it, so
      // links and search rankings carry over instead of hitting a 404. Keep
      // specific paths above the ":path*" fallback for the same prefix.
      // Retired: the older content pages, replaced by the newer service,
      // setup and country guide pages.
      {
        source: "/india-business-setup/company-formation",
        destination: "/india-subsidiary-registration",
        permanent: true,
      },
      {
        source: "/services/accounting-assurance",
        destination: "/accounting-reporting-audit-support",
        permanent: true,
      },
      {
        source: "/hr-services",
        destination: "/payroll-expat-services",
        permanent: true,
      },
      {
        source: "/services/taxation-regulatory",
        destination: "/corporate-tax-gst-transfer-pricing",
        permanent: true,
      },
      {
        source: "/india-business-setup/regulatory-compliance",
        destination: "/secretarial-roc-compliance",
        permanent: true,
      },
      {
        source: "/india-business-setup/banking-taxation",
        destination: "/corporate-tax-gst-transfer-pricing",
        permanent: true,
      },
      {
        source: "/india-business-setup/timeline-resources",
        destination: "/india-subsidiary-registration",
        permanent: true,
      },
      {
        source: "/blog/wholly-owned-subsidiary",
        destination: "/india-subsidiary-registration",
        permanent: true,
      },
      {
        source: "/blog/doing-business-india",
        destination: "/india-subsidiary-registration",
        permanent: true,
      },
      {
        source: "/blog/fdi-green-vs-brown-channel",
        destination: "/fema-rbi-compliance",
        permanent: true,
      },
      {
        source: "/doing-business-in-india/entry-process",
        destination: "/india-subsidiary-registration",
        permanent: true,
      },
      {
        source: "/doing-business-in-india/pre-incorporation",
        destination: "/india-subsidiary-registration",
        permanent: true,
      },
      {
        source: "/doing-business-in-india",
        destination: "/india-subsidiary-registration",
        permanent: true,
      },
      {
        source: "/doing-business-in-india/why-india",
        destination: "/india-subsidiary-registration",
        permanent: true,
      },
      {
        source: "/doing-business-in-india/incorporation",
        destination: "/india-subsidiary-registration",
        permanent: true,
      },
      {
        source: "/doing-business-in-india/post-incorporation",
        destination: "/compliance-calendar",
        permanent: true,
      },
      {
        source: "/india-business-setup/fdi-channels",
        destination: "/fema-rbi-compliance",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/risk-management",
        destination: "/accounting-reporting-audit-support",
        permanent: true,
      },
      {
        source: "/services/transaction-advisory",
        destination: "/fema-rbi-compliance",
        permanent: true,
      },
      {
        source: "/services/training-workshops",
        destination: "/",
        permanent: true,
      },
      {
        source: "/arbitration-services",
        destination: "/usa-to-india/contracts-and-arbitration",
        permanent: true,
      },
      {
        source: "/blog/arbitration-enforcement-india",
        destination: "/usa-to-india/contracts-and-arbitration",
        permanent: true,
      },
      {
        source: "/blog/construction-arbitration-india",
        destination: "/usa-to-india/contracts-and-arbitration",
        permanent: true,
      },
      {
        source: "/blog/india-japan-bis-exemption-high-tech-investment",
        destination: "/japan-to-india",
        permanent: true,
      },
      {
        source: "/blog/mail-box-dtaa-benefits",
        destination: "/usa-to-india/dtaa-pe-risk",
        permanent: true,
      },
      {
        source: "/blog/tax-loan-waiver-india",
        destination: "/corporate-tax-gst-transfer-pricing",
        permanent: true,
      },
      {
        source: "/blog/india-safe-harbour-rules-2026",
        destination: "/corporate-tax-gst-transfer-pricing",
        permanent: true,
      },
      {
        source: "/blog/best-state-to-register-company-in-india",
        destination: "/india-subsidiary-registration",
        permanent: true,
      },
      // Retired: one positioning, so no separate outsourcing page.
      {
        source: "/outsourcing",
        destination: "/accounting-reporting-audit-support",
        permanent: true,
      },
      {
        source: "/liaison-office-roc-compliance",
        destination: "/foreign-company-roc-compliance",
        permanent: true,
      },
      {
        source: "/project-office-roc-compliance",
        destination: "/foreign-company-roc-compliance",
        permanent: true,
      },
      {
        source: "/branch-office-in-india",
        destination: "/branch-office-registration",
        permanent: true,
      },
      {
        source: "/liaison-office-in-india",
        destination: "/liaison-office-registration",
        permanent: true,
      },
      {
        source: "/project-office-in-india",
        destination: "/project-office-registration",
        permanent: true,
      },
      {
        source: "/india-business-setup",
        destination: "/india-subsidiary-registration",
        permanent: true,
      },
      {
        source: "/india-business-setup/foreign-subsidiary-india",
        destination: "/india-subsidiary-registration",
        permanent: true,
      },
      {
        source: "/accounting-outsourcing-firm-for-united-states-cpas-firm",
        destination: "/accounting-reporting-audit-support",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies",
        destination: "/usa-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/annual-compliance-calendar",
        destination: "/usa-to-india/compliance-calendar",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/close-indian-subsidiary-strike-off-voluntary-liquidation",
        destination: "/usa-to-india/restructuring-and-exit",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/cost-timeline-incorporate-company-india-from-us",
        destination: "/usa-to-india/incorporation-process",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/fema-compliance-us-company-india-subsidiary",
        destination: "/usa-to-india/funding-fema-fc-gpr",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/how-to-incorporate-subsidiary-india-from-us",
        destination: "/usa-to-india/incorporation-process",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/permanent-establishment-risk-india",
        destination: "/usa-to-india/dtaa-pe-risk",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/register-company-in-india-from-usa",
        destination: "/usa-to-india/incorporation-process",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/repatriating-profits-indian-subsidiary-dtaa-withholding-tax",
        destination: "/usa-to-india/repatriating-profits",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/transfer-pricing-us-india-subsidiary",
        destination: "/usa-to-india/transfer-pricing",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/us-subsidiary-vs-branch-office-india",
        destination: "/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp",
        permanent: true,
      },
      {
        source: "/india-entry-for-us-companies/:path*",
        destination: "/usa-to-india/:path*",
        permanent: true,
      },
      {
        source: "/india-entry-for-uk-companies",
        destination: "/uk-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-uk-companies/cost-timeline-incorporate-company-india-from-uk",
        destination: "/uk-to-india/incorporation-steps",
        permanent: true,
      },
      {
        source: "/india-entry-for-uk-companies/fema-compliance-uk-company-india-subsidiary",
        destination: "/uk-to-india/funding-and-fema",
        permanent: true,
      },
      {
        source: "/india-entry-for-uk-companies/how-to-incorporate-subsidiary-india-from-uk",
        destination: "/uk-to-india/incorporation-steps",
        permanent: true,
      },
      {
        source: "/india-entry-for-uk-companies/india-uk-dtaa-withholding-tax",
        destination: "/uk-to-india/india-uk-dtaa",
        permanent: true,
      },
      {
        source: "/india-entry-for-uk-companies/uk-subsidiary-vs-branch-office-india",
        destination: "/uk-to-india/structure-options",
        permanent: true,
      },
      {
        source: "/india-entry-for-uk-companies/:path*",
        destination: "/uk-to-india/:path*",
        permanent: true,
      },
      {
        source: "/india-entry-for-australian-companies",
        destination: "/australia-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-australian-companies/australia-subsidiary-vs-branch-office-india",
        destination: "/australia-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp",
        permanent: true,
      },
      {
        source: "/india-entry-for-australian-companies/:path*",
        destination: "/australia-to-india/:path*",
        permanent: true,
      },
      {
        source: "/india-entry-for-japan-companies",
        destination: "/japan-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-japan-companies/:path*",
        destination: "/japan-to-india/:path*",
        permanent: true,
      },
      {
        source: "/india-entry-for-japanese-companies",
        destination: "/japan-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-japanese-companies/:path*",
        destination: "/japan-to-india/:path*",
        permanent: true,
      },
      {
        source: "/india-entry-for-singapore-companies",
        destination: "/singapore-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-singapore-companies/:path*",
        destination: "/singapore-to-india/:path*",
        permanent: true,
      },
      {
        source: "/llp-in-india",
        destination: "/india-subsidiary-registration",
        permanent: true,
      },
      {
        source: "/india-entry-for-saas-companies",
        destination: "/india-subsidiary-registration",
        permanent: true,
      },
      {
        source: "/global-vat-compliance-ai-saas-companies",
        destination: "/corporate-tax-gst-transfer-pricing",
        permanent: true,
      },
      {
        source: "/india-entry-for-german-companies",
        destination: "/germany-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-german-companies/:path*",
        destination: "/germany-to-india/:path*",
        permanent: true,
      },
      {
        source: "/india-entry-for-china-companies",
        destination: "/china-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-china-companies/:path*",
        destination: "/china-to-india/:path*",
        permanent: true,
      },
      {
        source: "/india-entry-for-chinese-companies",
        destination: "/china-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-chinese-companies/:path*",
        destination: "/china-to-india/:path*",
        permanent: true,
      },
      {
        source: "/india-entry-for-hong-kong-companies",
        destination: "/hong-kong-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-hong-kong-companies/:path*",
        destination: "/hong-kong-to-india/:path*",
        permanent: true,
      },
      {
        source: "/india-entry-for-russian-companies",
        destination: "/russia-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-russian-companies/:path*",
        destination: "/russia-to-india/:path*",
        permanent: true,
      },
      {
        source: "/india-entry-for-spanish-companies",
        destination: "/spain-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-spanish-companies/:path*",
        destination: "/spain-to-india/:path*",
        permanent: true,
      },
      {
        source: "/india-entry-for-spain-companies",
        destination: "/spain-to-india",
        permanent: true,
      },
      {
        source: "/india-entry-for-spain-companies/:path*",
        destination: "/spain-to-india/:path*",
        permanent: true,
      },
      {
        source: "/india-business-setup/why-india",
        destination: "/india-subsidiary-registration",
        permanent: true,
      },
      {
        source: "/india-business-setup/post-incorporation",
        destination: "/compliance-calendar",
        permanent: true,
      },
      {
        source: "/blog/accounting-outsourcing-india-us-businesses",
        destination: "/accounting-reporting-audit-support",
        permanent: true,
      },
      ...jurisdictionSlugs.map((slug) => ({
        source: `/blog/${slug}-to-india/:path*`,
        destination: `/${slug}-to-india/:path*`,
        permanent: true,
      })),
    ]
  },

  async rewrites() {
    return {
      afterFiles: jurisdictionSlugs.map((slug) => ({
        source: `/${slug}-to-india/:path*`,
        destination: `/blog/${slug}-to-india/:path*`,
      })),
    }
  },

  trailingSlash: false,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
}

export default nextConfig
