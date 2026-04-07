import escudo from "../../assets/Escudotmt.svg"

export default function StorySection() {
  return (
    <section
      id="historia"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at center, var(--glow), transparent 60%)",
          opacity: 0.18,
        }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div
          className="absolute h-[260px] w-[260px] rounded-full blur-3xl sm:h-[380px] sm:w-[380px] lg:h-[520px] lg:w-[520px]"
          style={{
            background: "var(--glow)",
            opacity: 0.22,
          }}
        />

        <img
          src={escudo}
          alt="Escudo da Tiamat Esports"
          className="relative w-[220px] select-none opacity-[0.05] sm:w-[320px] md:w-[420px] lg:w-[520px]"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center lg:mb-16">
          <span
            className="inline-flex rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] sm:text-xs"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--surface)",
              color: "var(--text-muted)",
            }}
          >
            Nossa trajetória
          </span>

          <h2
            className="mt-6 text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            A história por trás da
            <span className="mt-2 block" style={{ color: "var(--primary)" }}>
              Tiamat Esports
            </span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8"
            style={{ color: "var(--text-muted)" }}
          >
            Mais do que resultados, uma organização é construída por visão,
            identidade, ambição e tudo aquilo que sustenta sua caminhada.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:gap-8">
          <article
            className="rounded-[2rem] border p-6 sm:p-8 lg:p-10"
            style={{
              borderColor: "var(--border)",
              background:
                "linear-gradient(180deg, var(--surface), rgba(255,255,255,0.02))",
              boxShadow: "0 0 40px var(--glow)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.3em] sm:text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  Capítulo inicial
                </span>

                <h3
                  className="mt-2 text-2xl font-black uppercase sm:text-3xl"
                  style={{ color: "var(--text)" }}
                >
                  Onde tudo começou
                </h3>
              </div>

              <div
                className="hidden h-14 w-14 items-center justify-center rounded-2xl border sm:flex"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                  color: "var(--primary)",
                }}
              >
                <span className="text-xl font-black">01</span>
              </div>
            </div>

            <div
              className="rounded-[1.5rem] border p-5 sm:p-6"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "rgba(255,255,255,0.02)",
              }}
            >
              <p
                className="text-sm leading-7 sm:text-base sm:leading-8"
                style={{ color: "var(--text-muted)" }}
              >
                Nossa equipe começou do simples, do zero, a partir de ideias ambiciosas de jovens que estavam dispostos à mudar
                o cenário competitivo brasileiro e mundial, iniciamos nossa trajetória no Mobile Legends: Bang Bang com uma seletiva
                para players que até então não tiveram suas devidas oportunidades no cenário, do amador brasileiro estamos expandindo
                para uma marca global, que inspire cada vez mais histórias de superação e vitória.
              </p>

              <p
                className="mt-5 text-sm leading-7 sm:text-base sm:leading-8"
                style={{ color: "var(--text-muted)" }}
              >
                O nome Tiamat vem da deusa mesopotâmica Tiamate que surgiu no território da Mesopotâmia que corresponde atualmente 
                ao territorio principalmente do Iraque, esse território que foi o berço da humanidade ficou conhecido principalmente
                pelos seus solos férteis, e a deusa Tiamate era associada ao caos primordial, criação do cosmos, forças oceânicas, 
                fertilidade e a destruição regeneradora, nossa equipe assim como ela vem construindo solos ferteis para produção 
                de novos talentos, viemos como a força oceânica impossível de parar, com o poder de regenerar todo um cenário. Nossa 
                está representada pelo dragão chinês, que representa força, poder, o que a Tiamat almeja alcançar.
              </p>

              <p
                className="mt-5 text-sm leading-7 sm:text-base sm:leading-8"
                style={{ color: "var(--text-muted)" }}
              >
                Esperamos que você possa se juntar a nós nessa jornada de sucesso, poder e ambição, e que nossa história inspire 
                muitos, porque todos somos sonhadores, e se somos sonhadores somos vencedores.
              </p>
            </div>
          </article>

          <aside className="grid gap-6">
            <div
              className="rounded-[2rem] border p-6 sm:p-7"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.3em] sm:text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                Essência
              </span>

              <h3
                className="mt-3 text-xl font-black uppercase sm:text-2xl"
                style={{ color: "var(--primary)" }}
              >
                Visão. Constância. Evolução.
              </h3>

              <p
                className="mt-4 text-sm leading-7 sm:text-base"
                style={{ color: "var(--text-muted)" }}
              >
                Nossa essência é de buscar a vitória mesmo quando ela parece impossível, somos o retrato da disciplina, da evolução e da 
                constância no alto desempenho.
              </p>
            </div>

            <div
              className="rounded-[2rem] border p-6 sm:p-7"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.3em] sm:text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                Propósito
              </span>

              <p
                className="mt-3 text-lg font-bold uppercase leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                Construir uma trajetória que inspire respeito dentro e fora do
                game.
              </p>
            </div>

            <div
              className="rounded-[2rem] border p-6 sm:p-7"
              style={{
                borderColor: "var(--border)",
                background:
                  "linear-gradient(180deg, var(--surface), rgba(255,255,255,0.02))",
                backdropFilter: "blur(10px)",
              }}
            >
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.3em] sm:text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                Destaque
              </span>

              <p
                className="mt-3 text-sm leading-7 sm:text-base"
                style={{ color: "var(--text-muted)" }}
              >
                Essa área pode receber depois uma frase forte da organização,
                uma citação, um marco importante ou até uma data simbólica da
                fundação da equipe.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}