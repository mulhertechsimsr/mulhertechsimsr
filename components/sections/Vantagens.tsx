import Link from "next/link";

const VANTAGENS = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    color: "var(--orange-500)",
    bg: "rgba(240,132,74,0.1)",
    titulo: "Rede de +1.000 mulheres em tech",
    desc: "Conexão direta com profissionais de diferentes áreas, níveis e empresas — da estudante à CTO.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    color: "var(--teal-600)",
    bg: "rgba(92,160,148,0.1)",
    titulo: "Mural exclusivo de oportunidades",
    desc: "Vagas, freelas e indicações de emprego compartilhadas pelas próprias associadas — antes de qualquer outro canal.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    color: "var(--coral-500)",
    bg: "rgba(226,72,122,0.08)",
    titulo: "Mentorias e workshops",
    desc: "Encontros exclusivos com profissionais da comunidade sobre carreira, transição, liderança e tecnologia.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    color: "var(--teal-600)",
    bg: "rgba(92,160,148,0.1)",
    titulo: "Ingresso prioritário ao evento",
    desc: "Acesso antecipado às inscrições do evento anual MTSS — que costuma esgotar em horas — antes da abertura ao público geral.",
  },
];

export function Vantagens() {
  return (
    <section id="vantagens" style={{ padding: "100px 0", background: "white" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, gap: 32, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 560 }}>
            <div className="eyebrow" style={{ color: "var(--coral-500)", marginBottom: 16 }}>
              POR QUE SER ASSOCIADA
            </div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "var(--ink-900)", lineHeight: 0.98 }}>
              O que você ganha fazendo parte.
            </h2>
          </div>
          <div style={{ maxWidth: 360 }}>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--ink-500)", marginBottom: 20 }}>
              A associação é gratuita e aberta. Os benefícios são reais — construídos por quem já está aqui.
            </p>
            <Link href="/cadastro" className="btn btn-coral" style={{ fontSize: 14 }}>
              Quero me associar <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div
          className="vantagens-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}
        >
          {VANTAGENS.map((v, i) => (
            <div
              key={i}
              style={{
                background: "var(--cream-50)",
                borderRadius: 20,
                border: "1px solid var(--cream-200)",
                padding: "28px 24px",
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: v.bg, color: v.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 18, flexShrink: 0,
              }}>
                {v.icon}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--ink-900)", marginBottom: 8, lineHeight: 1.3 }}>
                {v.titulo}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-500)" }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .vantagens-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .vantagens-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
