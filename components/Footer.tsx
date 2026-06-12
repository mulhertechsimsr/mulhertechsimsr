import Link from "next/link";
import { Wordmark } from "./Logo";
import { EDICAO_URL } from "@/lib/config";

const SOCIAL = [
  {
    label: "Instagram",
    href: "https://instagram.com/mulhertechsimsr",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mulher-tech-sim-senhor/",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@mulhertechsimsenhorpb",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.gg/UCE8mkmpR",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.075.11 18.092.12 18.1a19.88 19.88 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
  },
];

const COLS = [
  {
    title: "Comunidade",
    links: [
      { label: "Sobre", href: "/#sobre" },
      { label: "História", href: "/#historia" },
      { label: "Como participar", href: "/#participante" },
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
      { label: "@mulhertechsimsr", href: "https://instagram.com/mulhertechsimsenhor", external: true },
      { label: "Parcerias", href: "/#contato" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Código de Conduta", href: "/codigo-de-conduta" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
      { label: "Política de Cookies", href: "/politica-de-cookies" },
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
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            gap: 40,
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
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  {s.icon}
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
          <span>© 2026 Mulher Tech Sim Senhor · Associação sem fins lucrativos · CNPJ 58.178.383/0001-72</span>
          <span>feito com 🧡 pela comunidade</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; }
        }
        @media (max-width: 700px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
