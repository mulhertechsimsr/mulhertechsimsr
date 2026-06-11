import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { EDITIONS } from "@/lib/editions";
import { EdicaoCard } from "@/components/EdicaoCard";

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
        <div style={{ background: "var(--teal-700)", color: "white", padding: "80px 32px 72px" }}>
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
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>
              UMA EDIÇÃO POR ANO
            </div>
            <h1
              className="display"
              style={{ fontSize: "clamp(40px, 6vw, 72px)", marginBottom: 16 }}
            >
              Todas as edições
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", maxWidth: 560 }}>
              Desde 2022, cada encontro tem tema, identidade visual e programação próprios.
              Tudo muda. O que permanece é o porquê de estarmos juntas.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 32px" }}>
          <div
            className="edicoes-all-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
          >
            {EDITIONS.map((e) => (
              <EdicaoCard key={e.n} edition={e} imageHeight={200} />
            ))}
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
