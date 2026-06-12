import Link from "next/link";

const STEPS = [
  {
    n: "01",
    color: "var(--orange-500)",
    title: "Preencha o cadastro",
    desc: "Conta um pouco sobre você, sua área e o que te trouxe até aqui. Leva alguns minutos.",
  },
  {
    n: "02",
    color: "var(--teal-600)",
    title: "Entre no WhatsApp",
    desc: "Logo após o cadastro, você recebe o link para entrar na nossa comunidade no WhatsApp.",
  },
  {
    n: "03",
    color: "var(--coral-500)",
    title: "Participe das trocas",
    desc: "Conheça os grupos por área de interesse, mentorias, cursos e os encontros da comunidade.",
  },
];

const VANTAGENS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    color: "var(--orange-500)",
    bg: "rgba(240,132,74,0.1)",
    titulo: "Rede de +1.000 mulheres em tech",
    desc: "Conexão com profissionais de diferentes áreas, níveis e empresas — da estudante à CTO.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    color: "var(--teal-600)",
    bg: "rgba(92,160,148,0.1)",
    titulo: "Mural exclusivo de oportunidades",
    desc: "Vagas e indicações compartilhadas pelas próprias associadas antes de qualquer outro canal.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    color: "var(--coral-500)",
    bg: "rgba(226,72,122,0.08)",
    titulo: "Mentorias e workshops",
    desc: "Encontros exclusivos sobre carreira, transição para tech, liderança e tecnologia.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    color: "var(--teal-600)",
    bg: "rgba(92,160,148,0.1)",
    titulo: "Ingresso prioritário ao evento",
    desc: "Acesso antecipado às inscrições do evento anual — que costuma esgotar em horas.",
  },
];

export function Participante() {
  return (
    <section id="participante" style={{ padding: "100px 0", background: "var(--cream-50)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>

        {/* Top: copy + steps */}
        <div
          className="participante-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "center", marginBottom: 56 }}
        >
          {/* Left: copy */}
          <div>
            <div className="eyebrow" style={{ color: "var(--coral-500)", marginBottom: 16 }}>
              COMO PARTICIPAR
            </div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "var(--ink-900)", marginBottom: 24 }}>
              Quer fazer parte?
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink-700)", marginBottom: 32 }}>
              A entrada é gratuita e aberta a qualquer mulher que atue, estude ou esteja em
              transição para tecnologia. Pedimos apenas alinhamento com nossos valores e
              disposição para trocar.
            </p>
            <Link href="/cadastro" className="btn btn-coral">
              Fazer meu cadastro <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Right: steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{
                background: "white", borderRadius: 20, padding: 28,
                display: "flex", gap: 24, alignItems: "flex-start",
              }}>
                <div className="display" style={{ fontSize: 44, color: s.color, lineHeight: 1, flexShrink: 0 }}>
                  {s.n}
                </div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--ink-900)", marginBottom: 6 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.5, color: "var(--ink-500)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: benefit cards */}
        <div className="eyebrow" style={{ color: "var(--coral-500)", marginBottom: 16 }}>
              VANTAGENS EM SER ASSOCIADA
            </div>
        <div
          className="vantagens-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}
        >
          {VANTAGENS.map((v, i) => (
            <div key={i} style={{
              background: "white", borderRadius: 20,
              border: "1px solid var(--cream-200)", padding: "24px 22px",
            }}>
              <div style={{
                width: 46, height: 46, borderRadius: 12,
                background: v.bg, color: v.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16,
              }}>
                {v.icon}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--ink-900)", marginBottom: 6, lineHeight: 1.3 }}>
                {v.titulo}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--ink-500)" }}>{v.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .participante-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .vantagens-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .vantagens-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
