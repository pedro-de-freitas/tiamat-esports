export default function Footer() {
  return (
    <footer
      className="mt-20 py-6 transition-colors duration-300"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p
          className="text-xs uppercase tracking-[0.3em]"
          style={{ color: "var(--text-muted)" }}
        >
          © Tiamat Esports 2026
        </p>
      </div>
    </footer>
  )
}