"use client";

import { EDICAO_URL } from "@/lib/config";

const EDITIONS = [
  { n: "11ª", year: "2026", theme: "Dados", color: "var(--coral-500)", current: true },
  { n: "10ª", year: "2025", theme: "Caminhos", color: "var(--teal-600)" },
  { n: "9ª", year: "2024", theme: "Ecossistemas", color: "var(--pink-500)" },
  { n: "8ª", year: "2023", theme: "Construir Junto", color: "#4A2E8E" },
  { n: "7ª", year: "2022", theme: "Reconexão", color: "var(--coral-500)" },
  { n: "6ª", year: "2021", theme: "Resiliência", color: "var(--teal-600)" },
];

export function Edicoes() {
  return (
    <section id="edicoes" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        {/* Header row */}
        <div
          className="edicoes-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 56,
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: 640 }}>
            <div
              className="eyebrow"
              style={{ color: "var(--coral-500)", marginBottom: 16 }}
            >
              UMA EDIÇÃO POR ANO
            </div>
            <h2
              className="display"
              style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "var(--ink-900)" }}
            >
              Cada edição é um universo próprio.
            </h2>
          </div>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--ink-500)",
              maxWidth: 380,
            }}
          >
            Tema, identidade visual, programação — tudo muda. O que permanece é o porquê de
            estarmos juntas.
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="edicoes-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {EDITIONS.map((e) => {
            const CardWrapper = e.current ? "a" : "div";
            const cardProps = e.current
              ? { href: EDICAO_URL, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <CardWrapper
                key={e.n}
                {...(cardProps as Record<string, string>)}
                style={{
                  background: "white",
                  borderRadius: 20,
                  border: e.current ? "2px solid #F0844A" : "1px solid var(--cream-200)",
                  overflow: "hidden",
                  cursor: e.current ? "pointer" : "default",
                  display: "block",
                  textDecoration: "none",
                  transition: e.current ? "transform 0.2s, box-shadow 0.2s" : undefined,
                  boxShadow: e.current ? "0 8px 32px -8px rgba(240,132,74,0.30)" : undefined,
                }}
                onMouseEnter={(ev: React.MouseEvent<HTMLElement>) => {
                  if (e.current) {
                    (ev.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    (ev.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px -12px rgba(240,132,74,0.42)";
                  }
                }}
                onMouseLeave={(ev: React.MouseEvent<HTMLElement>) => {
                  if (e.current) {
                    (ev.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (ev.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px -8px rgba(240,132,74,0.30)";
                  }
                }}
              >
                {/* Image area */}
                <div
                  style={{
                    position: "relative",
                    height: 240,
                    background: `linear-gradient(135deg, ${e.color}, rgba(0,0,0,0.2))`,
                    overflow: "hidden",
                  }}
                >
                  {/* Placeholder stripes */}
                  <div
                    className="img-placeholder img-placeholder-dark"
                    style={{ height: "100%", borderRadius: 0 }}
                  >
                    {/* TODO: replace with real edition photos */}
                    foto · MTSS {e.year}
                  </div>

                  {/* Large edition number */}
                  <div
                    className="display"
                    style={{
                      position: "absolute",
                      bottom: 16,
                      left: 20,
                      fontSize: "clamp(60px, 8vw, 88px)",
                      color: "rgba(255,255,255,0.95)",
                      lineHeight: 0.9,
                      pointerEvents: "none",
                    }}
                  >
                    {e.n}
                  </div>

                  {/* "Em destaque" pill */}
                  {e.current && (
                    <div
                      style={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "6px 14px",
                        borderRadius: 999,
                        background: "white",
                        color: e.color,
                        fontSize: 12,
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
                          background: e.color,
                          flexShrink: 0,
                        }}
                      />
                      Em destaque
                    </div>
                  )}
                </div>

                {/* Card footer */}
                <div
                  style={{
                    padding: 24,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      className="eyebrow"
                      style={{ color: "var(--ink-500)", marginBottom: 6 }}
                    >
                      {e.year} · TEMA
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: "var(--ink-900)" }}>
                      {e.theme}
                    </div>
                  </div>
                  {e.current && <div style={{ fontSize: 22, color: "var(--ink-300)" }}>→</div>}
                </div>
              </CardWrapper>
            );
          })}
        </div>

        {/* View all CTA */}
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <button className="btn btn-outline">Ver todas as 10 edições anteriores</button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .edicoes-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .edicoes-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
