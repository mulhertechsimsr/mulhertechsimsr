import { SectionHeader } from "@/components/SectionHeader";

const PILLARS = [
  {
    pill: "01 · CONEXÃO",
    icon: "◉",
    color: "var(--coral-500)",
    title: "Onde mulheres de tech se encontram",
    desc: "Promovemos a interação entre mulheres da área criando espaços seguros de troca — porque carreira em tecnologia se faz em rede, e nenhuma rede se sustenta sozinha.",
  },
  {
    pill: "02 · APRENDIZADO",
    icon: "▲",
    color: "var(--teal-600)",
    title: "Cursos, workshops e mentorias",
    desc: "Organizamos atividades formativas ao longo do ano em áreas como engenharia de software, dados, cloud, segurança e produto — sempre conduzidas por mulheres da própria comunidade.",
  },
  {
    pill: "03 · CELEBRAÇÃO",
    icon: "✦",
    color: "var(--teal-500)",
    title: "O evento anual: Mulher Tech Sim Senhor",
    desc: "Nosso evento mais imponente, que em 2026 chega à 11ª edição. A cada ano um tema diferente, um universo visual próprio, e um único objetivo: celebrar quem somos.",
  },
];

export function Sobre() {
  return (
    <section
      id="sobre"
      style={{ padding: "100px 0" }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <SectionHeader
          eyebrow="A ASSOCIAÇÃO"
          title="Três pilares que sustentam essa comunidade."
          subtitle="Somos uma associação sem fins lucrativos. Todo o nosso trabalho existe graças ao tempo e à energia de mulheres que acreditam — assim como você — que a tecnologia precisa ser feita por todas nós."
        />

        <div
          className="sobre-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {PILLARS.map((p, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: 20,
                border: "1px solid var(--cream-200)",
                padding: 36,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: p.color,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  fontWeight: 700,
                  marginBottom: 28,
                }}
              >
                {p.icon}
              </div>
              <div
                className="eyebrow"
                style={{ color: p.color, marginBottom: 12 }}
              >
                {p.pill}
              </div>
              <h3
                className="display"
                style={{ fontSize: 26, marginBottom: 14, color: "var(--ink-900)" }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-500)" }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sobre-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) and (min-width: 500px) {
          .sobre-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
