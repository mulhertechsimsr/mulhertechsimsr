const STATS = [
  { n: "1.000+", l: "mulheres na comunidade",  accent: "var(--orange-500)" },
  { n: "11ª",    l: "edição em 2026",           accent: "var(--coral-500)"  },
  { n: "10",     l: "edições já realizadas",    accent: "var(--teal-400)"   },
  { n: "2025",   l: "associação formalizada",   accent: "var(--yellow-500)" },
];

export function Stats() {
  return (
    <section style={{ background: "var(--teal-700)", padding: "56px 0" }}>
      <div
        className="stats-grid"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              padding: "28px 24px 24px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Accent bar no topo */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: s.accent,
                borderRadius: "16px 16px 0 0",
              }}
            />

            <div
              className="display"
              style={{
                fontSize: "clamp(36px, 3.5vw, 52px)",
                color: "white",
                marginBottom: 8,
                lineHeight: 1,
              }}
            >
              {s.n}
            </div>
            <div
              style={{
                fontSize: 13,
                color: s.accent,
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontFamily: "var(--font-mono)",
              }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
