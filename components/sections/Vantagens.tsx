import Link from "next/link";

const VANTAGENS = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
    color: "var(--coral-500)",
    bg: "rgba(226,72,122,0.08)",
    titulo: "Carteirinha digital oficial",
    desc: "Documento que comprova sua associação e dá acesso a benefícios com parceiros — disponível para baixar a qualquer momento.",
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
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    color: "var(--orange-500)",
    bg: "rgba(240,132,74,0.1)",
    titulo: "Descontos com parceiros",
    desc: "Benefícios em cursos, plataformas de ensino e empresas parceiras que apoiam a missão do MTSS.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    color: "var(--coral-500)",
    bg: "rgba(226,72,122,0.08)",
    titulo: "Voz ativa na associação",
    desc: "Participação nas assembleias e nas decisões que moldam os próximos passos da comunidade.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    color: "var(--teal-600)",
    bg: "rgba(92,160,148,0.1)",
    titulo: "Área exclusiva de associada",
    desc: "Portal com sua carteirinha digital, mural de vagas, perfil e todos os benefícios acessíveis em qualquer dispositivo.",
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
