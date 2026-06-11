import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { EDICAO_URL } from "@/lib/config";

const ALL_EDITIONS = [
  { n: "11ª", year: "2026", theme: "Dados",          color: "#F0844A", current: true  },
  { n: "10ª", year: "2025", theme: "Caminhos",       color: "var(--teal-600)"          },
  { n: "9ª",  year: "2024", theme: "Ecossistemas",   color: "var(--pink-500)"          },
  { n: "8ª",  year: "2023", theme: "Construir Junto",color: "#4A2E8E"                  },
  { n: "7ª",  year: "2022", theme: "Reconexão",      color: "var(--coral-500)"         },
  { n: "6ª",  year: "2021", theme: "Resiliência",    color: "var(--teal-600)"          },
  { n: "5ª",  year: "2020", theme: "—",              color: "var(--ink-300)"           },
  { n: "4ª",  year: "2019", theme: "—",              color: "var(--ink-300)"           },
  { n: "3ª",  year: "2018", theme: "—",              color: "var(--ink-300)"           },
  { n: "2ª",  year: "2017", theme: "—",              color: "var(--ink-300)"           },
  { n: "1ª",  year: "2016", theme: "—",              color: "var(--ink-300)"           },
];

export const metadata = {
  title: "Edições — Mulher Tech Sim Senhor",
  description: "Todas as edições do evento Mulher Tech Sim Senhor desde 2016.",
};

export default function EdicoesPage() {
  return (
    <>
      <Nav />

      <main style={{ minHeight: "100vh", background: "var(--cream-100)" }}>
        {/* Hero */}
        <div
          style={{
            background: "var(--teal-700)",
            color: "white",
            padding: "80px 32px 72px",
          }}
        >
          <div style={{ maxWidth: 1240, margin: "0 auto" }}>
            <Link
              href="/#edicoes"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                marginBottom: 32,
              }}
            >
              ← VOLTAR
            </Link>
            <div
              className="eyebrow"
              style={{ color: "rgba(255,255,255,0.5)", marginBottom: 16 }}
            >
              UMA EDIÇÃO POR ANO
            </div>
            <h1
              className="display"
              style={{ fontSize: "clamp(40px, 6vw, 72px)", marginBottom: 16 }}
            >
              Todas as edições
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", maxWidth: 560 }}>
              Desde 2016, cada encontro tem tema, identidade visual e programação próprios.
              O que permanece é o porquê de estarmos juntas.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 32px" }}>
          <div
            className="edicoes-all-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {ALL_EDITIONS.map((e) => {
              const Wrapper = e.current ? "a" : "div";
              const wrapperProps = e.current
                ? { href: EDICAO_URL, target: "_blank", rel: "noopener noreferrer" }
                : {};

              return (
                <Wrapper
                  key={e.n}
                  {...(wrapperProps as Record<string, string>)}
                  style={{
                    background: "white",
                    borderRadius: 20,
                    border: e.current ? "2px solid #F0844A" : "1px solid var(--cream-200)",
                    overflow: "hidden",
                    display: "block",
                    textDecoration: "none",
                    boxShadow: e.current ? "0 8px 32px -8px rgba(240,132,74,0.30)" : undefined,
                    cursor: e.current ? "pointer" : "default",
                  }}
                >
                  {/* Image area */}
                  <div
                    style={{
                      position: "relative",
                      height: 200,
                      background: `linear-gradient(135deg, ${e.color}, rgba(0,0,0,0.2))`,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className="img-placeholder img-placeholder-dark"
                      style={{ height: "100%", borderRadius: 0 }}
                    >
                      foto · MTSS {e.year}
                    </div>
                    <div
                      className="display"
                      style={{
                        position: "absolute",
                        bottom: 12,
                        left: 18,
                        fontSize: "clamp(52px, 7vw, 80px)",
                        color: "rgba(255,255,255,0.95)",
                        lineHeight: 0.9,
                        pointerEvents: "none",
                      }}
                    >
                      {e.n}
                    </div>
                    {e.current && (
                      <div
                        style={{
                          position: "absolute",
                          top: 14,
                          right: 14,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "5px 12px",
                          borderRadius: 999,
                          background: "white",
                          color: "#F0844A",
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#F0844A",
                            flexShrink: 0,
                          }}
                        />
                        Em destaque
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div
                    style={{
                      padding: "20px 22px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div
                        className="eyebrow"
                        style={{ color: "var(--ink-500)", marginBottom: 5 }}
                      >
                        {e.year} · TEMA
                      </div>
                      <div
                        style={{
                          fontSize: 20,
                          fontWeight: 700,
                          color: e.current ? "#F0844A" : "var(--ink-900)",
                        }}
                      >
                        {e.theme}
                      </div>
                    </div>
                    {e.current && (
                      <div style={{ fontSize: 20, color: "var(--ink-300)" }}>→</div>
                    )}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .edicoes-all-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .edicoes-all-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
