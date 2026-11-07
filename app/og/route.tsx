import { ImageResponse } from "next/og"

export const runtime = "nodejs"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = (searchParams.get("title") || "AU Corporate").replace(/\s+/g, " ").trim().slice(0, 140)
  const fontSize = title.length > 90 ? 46 : title.length > 60 ? 54 : 62

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#081a42",
          padding: "64px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 16, height: 16, background: "#FFD21F", marginRight: 16 }} />
          <div style={{ fontSize: 28, letterSpacing: 2, color: "#FFD21F" }}>AU CORPORATE</div>
        </div>
        <div style={{ fontSize, fontWeight: 700, lineHeight: 1.15, display: "flex" }}>{title}</div>
        <div style={{ fontSize: 24, color: "#d6dbe8", display: "flex" }}>
          Company registration and compliance in India
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  )
}
