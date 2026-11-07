"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"
import { canonicalPathname } from "@/lib/seo/public-path"

export type BreadcrumbItem = {
  label: string
  href?: string // omit on the last (current page) item
}

const JURISDICTION_NAMES: Record<string, string> = {
  usa: "USA",
  uk: "UK",
  japan: "Japan",
  germany: "Germany",
  singapore: "Singapore",
  australia: "Australia",
  china: "China",
  "hong-kong": "Hong Kong",
  russia: "Russia",
  spain: "Spain",
}

/**
 * Renders a visible breadcrumb trail AND the matching BreadcrumbList
 * JSON-LD in one place, so the two can't drift out of sync.
 * Rewrites serve /blog/{country}-to-india on the server and the clean URL
 * in the browser. Canonicalizing both keeps the markup identical.
 */
export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const pathname = canonicalPathname(usePathname() || "/")
  const firstPathSegment = pathname.split("/").filter(Boolean)[0] ?? ""
  const jurisdiction = firstPathSegment.match(/^(usa|uk|japan|germany|singapore|australia|china|hong-kong|russia|spain)-to-india$/)?.[1]
  const jurisdictionBase = jurisdiction ? `/${jurisdiction}-to-india` : null
  const currentItems = jurisdiction && jurisdictionBase
    ? items.flatMap((item) => item.href === "/blog"
        ? (pathname === jurisdictionBase ? [] : [{ label: `${JURISDICTION_NAMES[jurisdiction]} to India`, href: jurisdictionBase }])
        : [item])
    : items
  const withHome: BreadcrumbItem[] = [{ label: "AU Corporate", href: "/" }, ...currentItems]
  const currentUrl = pathname === "/" ? "https://www.theaucorp.com/" : `https://www.theaucorp.com${pathname}`

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: withHome.map((item, i) => {
      const isLast = i === withHome.length - 1
      const url = isLast
        ? currentUrl
        : item.href === "/"
          ? "https://www.theaucorp.com/"
          : `https://www.theaucorp.com${item.href}`
      return {
        "@type": "ListItem",
        position: i + 1,
        name: item.label,
        item: url,
      }
    }),
  }

  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-gray-500">
          {withHome.map((item, i) => (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={14} className="text-gray-300" aria-hidden="true" />}
              {item.href && i < withHome.length - 1 ? (
                <Link href={item.href} className="hover:text-yellow-600 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-700 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  )
}
