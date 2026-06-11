import Link from "next/link";
import { Wordmark } from "./Logo";
import { EDICAO_URL } from "@/lib/config";

const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com/mulhertechsimsenhor", initial: "I" },
  { label: "LinkedIn", href: "#", initial: "L" },
  { label: "YouTube", href: "#", initial: "Y" },
  { label: "Discord", href: "#", initial: "D" },
];

const COLS = [
  {
    title: "Comunidade",
    links: [
      { label: "Sobre", href: "/#sobre" },
      { label: "História", href: "/#historia" },
      { label: "Como participar", href: "/#membra" },
      { label: "Diretoria", href: "/#equipe" },
    ],
  },
  {
    title: "Evento",
    links: [
      { label: "11ª Edição", href: EDICAO_URL, external: true },
      { label: "Programação", href: EDICAO_URL, external: true },
      { label: "Inscrição", href: "/cadastro" },
      { label: "Patrocinadores", href: EDICAO_URL, external: true },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "mulhertechsimsr@gmail.com", href: "mailto:mulhertechsimsr@gmail.com" },
      { label: "João Pessoa, PB", href: "#" },
      { label: "@mulhertechsimsenhor", href: "https://instagram.com/mulhertechsimsenhor", external: true },
      { label: "Parcerias", href: "/#contato" },
    ],
  },
];

function FooterCol({ title, links }: { title: string; links: { label: string; href: string; external?: boolean }[] }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--coral-400)",
          marginBottom: 18,
        }}
      >
        {title}
      </div>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
        {links.map((l) => (
          <li key={l.label}>
            {l.external ? (
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}
              >
                {l.label}
              </a>
            ) : (
              <Link href={l.href} style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      style={{ background: "var(--teal-700)", color: "white", position: "relative", overflow: "hidden" }}
    >
      <div
        className="container"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "80px 32px 40px",
        }}
      >
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 64,
          }}
        >
          {/* Brand */}
          <div>
            <Wordmark dark chip />
            <p
              style={{
                marginTop: 20,
                color: "rgba(255,255,255,0.65)",
                fontSize: 14,
                lineHeight: 1.6,
                maxWidth: 320,
              }}
            >
              Associação sem fins lucrativos sediada em João Pessoa (PB), dedicada a conectar,
              formar e celebrar mulheres na tecnologia.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    fontSize: 11,
                    fontWeight: 600,
                  }}
                >
                  {s.initial}
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <FooterCol key={col.title} title={col.title} links={col.links} />
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            fontSize: 12,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          {/* TODO: fill in real CNPJ */}
          <span>© 2026 Mulher Tech Sim Senhor · Associação sem fins lucrativos · CNPJ XX.XXX.XXX/0001-XX</span>
          <span>feito com 🧡 pela comunidade</span>
        </div>
      </div>

      {/* Mobile footer grid override */}
      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
