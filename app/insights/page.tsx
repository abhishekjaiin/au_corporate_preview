import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

import { Breadcrumb } from "@/components/Breadcrumb"
import { getPublishedInsights } from "@/lib/public/insights"

const NAVY = "#081a42"
const GOLD = "#facc15"

// ISR instead of force-dynamic: force-dynamic ran the Postgres query and
// re-sent the whole page from the function on EVERY request, which counted
// against Vercel's Fast Origin Transfer. Both DB calls below already catch
// errors (same pattern as app/sitemap.ts), so the build-time render works
// without a database and simply shows the empty state. publishInsight() /
// unpublishInsight() call revalidatePath("/insights"), so a publish shows up
// immediately; the hourly window is only a safety net.
export const revalidate = 3600

const insightsMetadata: Metadata = {
  title: {
    absolute: "Insights: Regulatory Updates | AU Corporate",
  },
  description:
    "Articles and updates from AU Corporate on India market entry, taxation, compliance, and global business advisory.",
  alternates: {
    canonical: "https://www.theaucorp.com/insights",
  },
  openGraph: {
    title: "Insights: Regulatory Updates | AU Corporate",
    description:
      "Articles and updates from AU Corporate on India market entry, taxation, compliance, and global business advisory.",
    url: "https://www.theaucorp.com/insights",
    images: [{ url: "https://www.theaucorp.com/og?title=Insights%3A%20Regulatory%20Updates%20%7C%20AU%20Corporate%20%7C%20AU%20Corporate", width: 1200, height: 630, alt: "Insights: Regulatory Updates | AU Corporate" }],
  },
  twitter: {
    title: "Insights: Regulatory Updates | AU Corporate",
    description:
      "Articles and updates from AU Corporate on India market entry, taxation, compliance, and global business advisory.",
    images: ["https://www.theaucorp.com/og?title=Insights%3A%20Regulatory%20Updates%20%7C%20AU%20Corporate%20%7C%20AU%20Corporate"],
  },
}

// Until at least one article is published, the listing is an empty page:
// keep it out of Google's index (links still followed) so it is not
// recorded as thin content. It becomes indexable automatically on the
// first published article.
export async function generateMetadata(): Promise<Metadata> {
  const posts = await getPublishedInsights().catch(() => [])
  if (posts.length === 0) {
    return { ...insightsMetadata, robots: { index: false, follow: true } }
  }
  return insightsMetadata
}

export default async function InsightsIndexPage() {
  // A database hiccup should show the empty state, not a 500 error page
  // that crawlers record against the sitemap.
  const posts = await getPublishedInsights().catch((error) => {
    console.error("[insights] failed to load published insights", error)
    return []
  })

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Insights" }]} />
        </div>
      </div>

      <section
        className="relative overflow-hidden py-16 sm:py-20"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0d2a5c 100%)` }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", border: `1px solid ${GOLD}` }}
          >
            Insights
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-white">Insights</h1>
          <p className="mt-3 text-white/70 text-lg max-w-2xl">
            Articles and updates from AU Corporate.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {posts.length === 0 ? (
          <p className="text-center text-gray-400 py-16">
            No insights published yet — check back soon.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/insights/${post.slug}`}
                className="group flex h-full flex-col rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all overflow-hidden"
              >
                {post.featuredImage && (
                  <div className="relative h-44 w-full">
                    <Image
                      src={post.featuredImage}
                      alt={post.imageAlt || post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  {post.categoryName && (
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold w-fit mb-3 bg-blue-50 text-blue-700">
                      {post.categoryName}
                    </span>
                  )}
                  <h2 className="font-semibold mb-2 group-hover:text-[#081a42] line-clamp-2">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-sm text-gray-500 mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                  )}
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <span className="text-xs text-gray-400">
                      {post.publishedAt &&
                        new Date(post.publishedAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
