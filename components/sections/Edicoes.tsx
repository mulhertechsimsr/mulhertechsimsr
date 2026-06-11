import Link from "next/link";
import { EDITIONS } from "@/lib/editions";
import { EdicaoCard } from "@/components/EdicaoCard";

export function Edicoes() {
  const preview = EDITIONS.slice(0, 6);

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
            <div className="eyebrow" style={{ color: "var(--coral-500)", marginBottom: 16 }}>
              UMA EDIÇÃO POR ANO
            </div>
            <h2
              className="display"
              style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "var(--ink-900)" }}
            >
              Cada edição é um universo próprio.
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--ink-500)", maxWidth: 380 }}>
            Tema, identidade visual, programação — tudo muda. O que permanece é o porquê de
            estarmos juntas.
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="edicoes-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
        >
          {preview.map((e) => (
            <EdicaoCard key={e.n} edition={e} />
          ))}
        </div>

        {/* View all CTA */}
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <Link href="/edicoes" className="btn btn-outline">
            Ver todas as edições anteriores
          </Link>
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
