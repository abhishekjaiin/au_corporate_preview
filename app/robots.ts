import { MetadataRoute } from "next"

const privatePaths = ["/api/", "/admin/", "/private/", "/cdn-cgi/"]

function allowPublic(userAgent: string) {
  return {
    userAgent,
    allow: "/",
    disallow: privatePaths,
  }
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      allowPublic("*"),

      // Search engines. A named group replaces the * group, so the private
      // paths have to be repeated here or Google and Bing will crawl them.
      allowPublic("Googlebot"),
      allowPublic("Googlebot-Image"),
      allowPublic("Bingbot"),
      allowPublic("Slurp"),
      allowPublic("DuckDuckBot"),

      // AI / LLM crawlers. Public pages stay available for AI search.
      allowPublic("OAI-SearchBot"),
      allowPublic("OAI-AdsBot"),
      allowPublic("GPTBot"),
      allowPublic("ChatGPT-User"),
      allowPublic("ClaudeBot"),
      allowPublic("Claude-SearchBot"),
      allowPublic("Perplexity-User"),
      allowPublic("PerplexityBot"),
      allowPublic("Google-Extended"),
      allowPublic("Applebot-Extended"),
      allowPublic("CCBot"),

      // SEO crawlers may fetch public pages. Private paths stay disallowed.
      allowPublic("AhrefsBot"),
      allowPublic("SemrushBot"),
      allowPublic("MJ12bot"),
      allowPublic("DotBot"),
    ],
    sitemap: ["https://www.theaucorp.com/sitemap.xml"],
  }
}
