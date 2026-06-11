import Link from "next/link";
import { Logo } from "@/components/Logo";
import { EDICAO_URL } from "@/lib/config";

export function Hero() {
  return (
    <section
      style={{ position: "relative", overflow: "hidden", padding: "80px 0 120px" }}
    >
      {/* Decorative blurs */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "var(--coral-300)",
          opacity: 0.5,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "var(--teal-400)",
          opacity: 0.35,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="hero-grid"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Left: copy */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              borderRadius: 999,
              background: "white",
              border: "1px solid var(--cream-200)",
              marginBottom: 32,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--teal-500)",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-700)" }}>
              +1.000 mulheres de tech, juntas em João Pessoa
            </span>
          </div>

          {/* Headline */}
          <h1
            className="display hero-title"
            style={{
              fontSize: "clamp(48px, 7vw, 92px)",
              lineHeight: 1.05,
              marginBottom: 28,
            }}
          >
            <span style={{ color: "var(--teal-700)" }}>Mulher</span>{" "}
            <span
              style={{
                fontStyle: "italic",
                color: "var(--coral-500)",
              }}
            >
              Tech
            </span>
            <br />
            <span style={{ color: "var(--coral-500)" }}>Sim </span>
            <span style={{ color: "var(--teal-700)" }}>
              Senhor
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 1.8vw, 21px)",
              lineHeight: 1.5,
              color: "var(--ink-700)",
              maxWidth: 540,
              marginBottom: 40,
            }}
          >
            Uma comunidade que existe para que nenhuma mulher na tecnologia precise caminhar
            sozinha. Trocamos conhecimento, ocupamos espaços e construímos pontes — uma edição
            por vez.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href={EDICAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-coral"
            >
              Conhecer a 11ª edição
              <span aria-hidden>→</span>
            </a>
            <Link href="/#participante" className="btn btn-outline">
              Como virar participante
            </Link>
          </div>
        </div>

        {/* Right: logo + floating chips */}
        <div
          className="hero-visual"
          style={{ position: "relative", height: 540 }}
        >
          {/* Big rotating logo */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Logo size={360} spinning />
          </div>

          {/* Chip — top right */}
          <div
            className="animate-float"
            style={{
              position: "absolute",
              top: 24,
              right: 0,
              padding: "14px 18px",
              borderRadius: 14,
              background: "white",
              border: "1px solid var(--cream-200)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              boxShadow: "0 12px 32px -12px rgba(26,17,41,0.18)",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "var(--orange-500)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 800,
                fontSize: 14,
                flexShrink: 0,
              }}
            >
              11
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontFamily: "var(--font-mono)",
                  color: "var(--ink-500)",
                  letterSpacing: "0.1em",
                }}
              >
                EDIÇÃO 2026
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink-900)" }}>
                Tema: Dados
              </div>
            </div>
          </div>

          {/* Chip — bottom left */}
          <div
            className="animate-float"
            style={{
              position: "absolute",
              bottom: 60,
              left: -20,
              padding: "14px 18px",
              borderRadius: 14,
              background: "white",
              border: "1px solid var(--cream-200)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              boxShadow: "0 12px 32px -12px rgba(26,17,41,0.18)",
              animationDelay: "1s",
            }}
          >
            <div style={{ display: "flex" }}>
              {(["var(--orange-500)", "var(--teal-500)", "var(--pink-500)"] as const).map(
                (c, i) => (
                  <div
                    key={i}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: c,
                      border: "2px solid white",
                      marginLeft: i > 0 ? -8 : 0,
                    }}
                  />
                )
              )}
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontFamily: "var(--font-mono)",
                  color: "var(--ink-500)",
                  letterSpacing: "0.1em",
                }}
              >
                COMUNIDADE ATIVA
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink-900)" }}>
                1.000+ mulheres
              </div>
            </div>
          </div>

          {/* Pill — bottom right */}
          <div
            className="animate-float"
            style={{
              position: "absolute",
              bottom: 0,
              right: 40,
              padding: "10px 16px",
              borderRadius: 999,
              background: "var(--teal-600)",
              color: "white",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.08em",
              animationDelay: "1.6s",
            }}
          >
            João Pessoa · PB
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-visual { height: 320px !important; }
        }
        @media (max-width: 600px) {
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
