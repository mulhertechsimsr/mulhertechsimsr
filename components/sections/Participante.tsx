import Link from "next/link";

const STEPS = [
  {
    n: "01",
    color: "var(--coral-500)",
    title: "Preencha o cadastro",
    desc: "Conta um pouco sobre você, sua área e o que te trouxe até aqui. Leva 3 minutos.",
  },
  {
    n: "02",
    color: "var(--teal-600)",
    title: "Entre no WhatsApp",
    desc: "Logo após o cadastro, você recebe o link para entrar na nossa comunidade no WhatsApp.",
  },
  {
    n: "03",
    color: "var(--orange-500)",
    title: "Participe das trocas",
    desc: "Conheça os grupos por área de interesse, mentorias, cursos e os encontros da comunidade.",
  },
];

export function Participante() {
  return (
    <section id="participante" style={{ padding: "100px 0", background: "var(--cream-50)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div
          className="participante-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* Left: copy */}
          <div>
            <div
              className="eyebrow"
              style={{ color: "var(--coral-500)", marginBottom: 16 }}
            >
              COMO PARTICIPAR
            </div>
            <h2
              className="display"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                color: "var(--ink-900)",
                marginBottom: 24,
              }}
            >
              Quer fazer parte?
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: "var(--ink-700)",
                marginBottom: 32,
              }}
            >
              A entrada é gratuita e aberta a qualquer mulher que atue, estude ou esteja em
              transição para tecnologia. Pedimos apenas alinhamento com nossos valores e
              disposição para trocar.
            </p>
            <Link href="/cadastro" className="btn btn-coral">
              Fazer meu cadastro
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Right: steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {STEPS.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: 20,
                  border: "1px solid var(--cream-200)",
                  padding: 28,
                  display: "flex",
                  gap: 24,
                  alignItems: "flex-start",
                }}
              >
                <div
                  className="display"
                  style={{
                    fontSize: 44,
                    color: s.color,
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  {s.n}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--ink-900)",
                      marginBottom: 6,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.5, color: "var(--ink-500)" }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .participante-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
