import { useState } from "react"

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Equipe", href: "#equipe" },
  { label: "Conquistas", href: "#conquistas" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Contato", href: "#contato" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full">
      <div className="hidden md:flex items-center justify-center">
        <ul
          className="flex items-center gap-3 rounded-full px-3 py-2 backdrop-blur-md transition-colors duration-300"
          style={{
            border: "1px solid var(--border)",
            backgroundColor: "var(--surface)",
          }}
        >
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block rounded-full px-4 py-2 text-sm font-medium uppercase tracking-[0.16em] transition-all duration-300"
                style={{
                  color: "var(--text-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--primary)"
                  e.currentTarget.style.color = "#ffffff"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.color = "var(--text-muted)"
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden">
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] backdrop-blur-md transition"
            style={{
              border: "1px solid var(--border)",
              backgroundColor: "var(--surface)",
              color: "var(--text)",
            }}
          >
            <span>{isOpen ? "Fechar" : "Menu"}</span>
            <span className="text-base">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        <div
          className={`grid transition-all duration-300 ${
            isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul
              className="mx-auto flex max-w-sm flex-col gap-2 rounded-3xl p-3 transition-colors duration-300"
              style={{
                border: "1px solid var(--border)",
                backgroundColor: "var(--bg-secondary)",
                boxShadow: `0 0 30px var(--glow)`,
              }}
            >
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-center text-sm font-medium uppercase tracking-[0.16em] transition"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--primary)"
                      e.currentTarget.style.color = "#ffffff"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.color = "var(--text-muted)"
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}