import logoRed from "../../assets/LogoTmTVerme.svg"
import logoDark from "../../assets/Logo-tmt.svg"
import { useTheme } from "../../context/useTheme"

export default function HeroSection() {
  const { theme } = useTheme()

  const logo = theme === "red" ? logoRed : logoDark

  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            theme === "red"
              ? "radial-gradient(circle at top, rgba(90,0,0,0.35), transparent 45%)"
              : "radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 40%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <span
            className="inline-flex rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] sm:text-xs"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--surface)",
              color: "var(--text-muted)",
            }}
          >
            Mobile Legends • Esports • Competitivo
          </span>

          <h1
            className="mt-6 text-4xl font-black uppercase leading-[0.95] sm:text-5xl md:text-6xl xl:text-7xl"
            style={{ color: "var(--text)" }}
          >
            Tiamat
            <span
              className="block"
              style={{ color: "var(--primary)" }}
            >
              Esports
            </span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8 lg:mx-0 lg:max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            Performance, identidade e mentalidade competitiva. Uma organização
            criada para evoluir dentro e fora do jogo, com presença forte,
            comunidade ativa e ambição de dominar o cenário.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#equipe"
              className="rounded-2xl px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--primary)",
                color: "#ffffff",
                boxShadow: "0 0 25px var(--glow)",
              }}
            >
              Conhecer a equipe
            </a>

            <a
              href="#comunidade"
              className="rounded-2xl border px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
                color: "var(--text)",
              }}
            >
              Subir de nível com a Tiamat
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div
              className="rounded-3xl border p-5 backdrop-blur-md"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
              }}
            >
              <strong
                className="block text-2xl font-black sm:text-3xl"
                style={{ color: "var(--primary)" }}
              >
                +100%
              </strong>
              <span
                className="mt-2 block text-xs uppercase tracking-[0.22em] sm:text-[11px]"
                style={{ color: "var(--text-muted)" }}
              >
                Foco em evolução
              </span>
            </div>

            <div
              className="rounded-3xl border p-5 backdrop-blur-md"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
              }}
            >
              <strong
                className="block text-2xl font-black sm:text-3xl"
                style={{ color: "var(--primary)" }}
              >
                Pro
              </strong>
              <span
                className="mt-2 block text-xs uppercase tracking-[0.22em] sm:text-[11px]"
                style={{ color: "var(--text-muted)" }}
              >
                Identidade competitiva
              </span>
            </div>

            <div
              className="rounded-3xl border p-5 backdrop-blur-md"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
              }}
            >
              <strong
                className="block text-2xl font-black sm:text-3xl"
                style={{ color: "var(--primary)" }}
              >
                BR
              </strong>
              <span
                className="mt-2 block text-xs uppercase tracking-[0.22em] sm:text-[11px]"
                style={{ color: "var(--text-muted)" }}
              >
                Presença nacional
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[560px]">
            <div
              className="absolute inset-0 rounded-[2rem] blur-3xl"
              style={{
                background:
                  theme === "red"
                    ? "radial-gradient(circle, rgba(80,0,0,0.45), transparent 70%)"
                    : "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)",
              }}
            />

            <div
              className="relative rounded-[2rem] border p-6 sm:p-8"
              style={{
                borderColor: "var(--border)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                boxShadow: "0 0 40px var(--glow)",
              }}
            >
              <div className="flex justify-center">
                <img
                  src={logo}
                  alt="Logo da Tiamat Esports"
                  className="h-44 w-auto object-contain sm:h-56 md:h-64 lg:h-72"
                />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div
                  className="rounded-2xl border p-4"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Identidade
                  </p>
                  <p
                    className="mt-2 text-sm font-bold uppercase sm:text-base"
                    style={{ color: "var(--text)" }}
                  >
                    construídos para impactar
                  </p>
                </div>

                <div
                  className="rounded-2xl border p-4"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Objetivo
                  </p>
                  <p
                    className="mt-2 text-sm font-bold uppercase sm:text-base"
                    style={{ color: "var(--text)" }}
                  >
                    Construídos para dominar o cenário
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}