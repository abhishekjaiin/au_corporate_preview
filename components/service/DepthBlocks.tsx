import Link from "next/link"
import type { ReactNode } from "react"

/**
 * Plain server-rendered building blocks for the in-depth sections on the
 * registration service pages (tables, step lists, callouts). Kept visually in
 * line with the existing service page sections.
 */

export function DepthSection({
  id,
  title,
  intro,
  tint = false,
  children,
}: {
  id?: string
  title: string
  intro?: ReactNode
  tint?: boolean
  children: ReactNode
}) {
  return (
    <section id={id} className={`py-16 ${tint ? "bg-secondary/30" : "bg-white"}`}>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        {intro ? <p className="text-gray-600 leading-relaxed mb-6">{intro}</p> : null}
        {children}
      </div>
    </section>
  )
}

export function DepthTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse border border-gray-300 bg-white text-sm">
        <thead className="bg-[#081a42] text-white">
          <tr>
            {head.map((h) => (
              <th key={h} className="border border-gray-300 p-3 text-left font-bold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 ? "bg-gray-50" : ""}>
              {row.map((cell, j) => (
                <td key={j} className={`border border-gray-300 p-3 align-top ${j === 0 ? "font-semibold text-gray-900" : "text-gray-700"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function DepthP({ children }: { children: ReactNode }) {
  return <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
}

export function DepthH3({ children }: { children: ReactNode }) {
  return <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">{children}</h3>
}

export function DepthList({ items, ordered = false }: { items: ReactNode[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul"
  return (
    <Tag className={`${ordered ? "list-decimal" : "list-disc"} pl-6 space-y-2 text-gray-700 leading-relaxed mb-6`}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </Tag>
  )
}

export function DepthNote({ children }: { children: ReactNode }) {
  return <div className="rounded-xl border-l-4 border-gold bg-[#fffbe6] p-5 text-gray-800 leading-relaxed mb-6">{children}</div>
}

export function DepthLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-blue-800 hover:underline">
      {children}
    </Link>
  )
}
