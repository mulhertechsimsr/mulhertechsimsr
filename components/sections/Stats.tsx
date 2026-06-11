const STATS = [
  { n: "1.000+", l: "mulheres na comunidade" },
  { n: "11ª", l: "edição em 2026" },
  { n: "10", l: "edições já realizadas" },
  { n: "2025", l: "associação formalizada" },
];

export function Stats() {
  return (
    <section style={{ background: "var(--ink-900)", color: "white", padding: "48px 0" }}>
      <div
        className="stats-grid"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            style={{
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
              paddingLeft: i > 0 ? 32 : 0,
            }}
          >
            <div
              className="display"
              style={{ fontSize: "clamp(36px, 4vw, 52px)", color: "var(--coral-400)", marginBottom: 4 }}
            >
              {s.n}
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", letterSpacing: "0.02em" }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div { border-left: none !important; padding-left: 0 !important; }
        }
      `}</style>
    </section>
  );
}
