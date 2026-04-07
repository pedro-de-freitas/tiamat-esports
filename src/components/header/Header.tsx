import logoRed from "../../assets/LogoTmTVerme.svg"
import logoDark from "../../assets/Logo-tmt.svg"
import { useTheme } from "../../context/useTheme"
import ThemeToggle from "../theme/ThemeToggle"
import Navbar from "../navbar/Navbar"

export default function Header() {
  const { theme } = useTheme()

  const logo = theme === "red" ? logoRed : logoDark

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-xl transition-colors duration-300"
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 85%, transparent)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-5 sm:px-6 lg:px-8">
        <a href="#inicio" className="group flex flex-col items-center">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-2xl transition duration-300"
              style={{ backgroundColor: "var(--glow)" }}
            />
            <img
              src={logo}
              alt="Logo da Tiamat Esports"
              className="relative h-20 w-auto object-contain sm:h-24 lg:h-28"
            />
          </div>

          <span
            className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.45em] sm:text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            Tiamat Esports
          </span>
        </a>

        <ThemeToggle />

        <div className="mt-5 w-full">
          <Navbar />
        </div>
      </div>
    </header>
  )
}