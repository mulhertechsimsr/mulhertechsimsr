import { SectionHeader } from "@/components/SectionHeader";

// TODO: replace [ano] with the actual year of the first edition
const MILESTONES = [
  {
    year: "2016",
    title: "A primeira edição",
    desc: "O Mulher Tech Sim Senhor nasce como evento em João Pessoa, reunindo mulheres da tecnologia da Paraíba.",
  },
  {
    year: "2020",
    title: "Pandemia e expansão digital",
    subtitle: "Evento 100% online · Covid-19",
    desc: "A comunidade cresce e ultrapassa mil mulheres conectadas — trocas, mentorias e cursos ao longo do ano.",
  },
  {
    year: "2025",
    title: "Associação formalizada",
    desc: "O Mulher Tech Sim Senhor se constitui oficialmente como associação sem fins lucrativos, sediada em João Pessoa (PB).",
  },
  {
    year: "2026",
    title: "11ª edição · Dados",
    desc: "A 11ª edição do evento explora como dados, IA e cloud estão remodelando as carreiras femininas em tecnologia.",
  },
];

export function Historia() {
  return (
    <section
      id="historia"
      style={{
        background: "var(--cream-100)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <SectionHeader
          eyebrow="DE ONDE VIEMOS"
          title="Uma comunidade construída em camadas."
          subtitle="Não somos um evento que acontece uma vez por ano. Somos uma rede contínua de trocas — o MTSS é apenas a celebração mais visível disso."
        />

        <div style={{ position: "relative", paddingLeft: 40 }}>
          {/* Vertical timeline line */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: 12,
              top: 12,
              bottom: 12,
              width: 2,
              background: "var(--cream-200)",
            }}
          />

          {MILESTONES.map((m, i) => {
            const isLast = i === MILESTONES.length - 1;
            return (
              <div
                key={i}
                style={{ position: "relative", paddingBottom: 48, paddingLeft: 32 }}
              >
                {/* Dot */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: -34,
                    top: 6,
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: isLast ? "var(--coral-500)" : "var(--teal-600)",
                    border: "4px solid var(--cream-100)",
                    boxShadow: isLast ? "0 0 0 6px rgba(240,132,74,0.18)" : "none",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 16,
                    marginBottom: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    className="display"
                    style={{
                      fontSize: 36,
                      color: isLast ? "var(--coral-500)" : "var(--ink-900)",
                    }}
                  >
                    {m.year}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--ink-900)" }}>
                    {m.title}
                  </h3>
                  {"subtitle" in m && (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--teal-600)",
                        background: "var(--cream-200)",
                        padding: "3px 10px",
                        borderRadius: 999,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {(m as typeof m & { subtitle: string }).subtitle}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: "var(--ink-700)",
                    maxWidth: 560,
                  }}
                >
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
