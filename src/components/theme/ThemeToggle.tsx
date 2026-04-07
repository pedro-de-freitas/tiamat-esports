import { useTheme } from "../../context/useTheme"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const isRed = theme === "red"

  return (
    <button
      onClick={toggleTheme}
      className="mt-4 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:bg-white/10"
    >
      <div className="relative h-5 w-10 rounded-full bg-zinc-700 transition">
        <div
          className={`absolute top-1 h-3 w-3 rounded-full transition-all duration-300 ${
            isRed ? "left-6 bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.8)]" : "left-1 bg-white"
          }`}
        />
      </div>

      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-300">
        {isRed ? "Red Mode" : "Dark Mode"}
      </span>
    </button>
  )
}