import type { ReactNode } from "react"
import Header from "../header/Header"
import Footer from "../footer/Footer"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}