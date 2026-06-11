"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Wordmark } from "@/components/Logo";
import { API_URL } from "@/lib/config";
import { setAuth } from "@/lib/auth";
import type { Member } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const redirect = params.get("redirect") ?? "/membro";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // TODO: replace with real API call — POST /auth/login
    setAuth({
      token: "mock-token",
      member: {
        id: "1",
        nome: email.split("@")[0],
        apelido: email.split("@")[0],
        email,
        anoIngresso: "2026",
      },
    });
    router.push(redirect);
    setLoading(false);
  }

  return (
    <>
      <div className="login-shell" style={{ display: "flex", minHeight: "100vh" }}>

        {/* ── Left panel ── */}
        <div
          className="login-brand"
          style={{
            flex: "0 0 52%",
            background: "var(--teal-700)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            padding: "44px 56px",
          }}
        >
          {/* Decorative circles */}
          <div aria-hidden style={{
            position: "absolute", top: -120, right: -120,
            width: 420, height: 420, borderRadius: "50%",
            border: "70px solid rgba(255,255,255,0.05)",
            pointerEvents: "none",
          }} />
          <div aria-hidden style={{
            position: "absolute", bottom: -80, left: -80,
            width: 320, height: 320, borderRadius: "50%",
            border: "50px solid rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }} />
          <div aria-hidden style={{
            position: "absolute", bottom: 120, right: -40,
            width: 180, height: 180, borderRadius: "50%",
            background: "var(--coral-500)", opacity: 0.18,
            filter: "blur(40px)", pointerEvents: "none",
          }} />
          <div aria-hidden style={{
            position: "absolute", top: 160, left: -60,
            width: 200, height: 200, borderRadius: "50%",
            background: "var(--orange-500)", opacity: 0.14,
            filter: "blur(48px)", pointerEvents: "none",
          }} />

          {/* Top: logo */}
          <div style={{ position: "relative" }}>
            <Link href="/" aria-label="Voltar ao site">
              <Wordmark dark />
            </Link>
          </div>

          {/* Center: headline */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
            <div
              className="eyebrow"
              style={{ color: "rgba(255,255,255,0.45)", marginBottom: 20 }}
            >
              ÁREA EXCLUSIVA
            </div>
            <h1
              className="display"
              style={{
                fontSize: "clamp(40px, 4vw, 60px)",
                lineHeight: 0.96,
                color: "white",
                marginBottom: 28,
              }}
            >
              Um espaço só{" "}
              <span
                style={{
                  color: "var(--coral-500)",
                  fontStyle: "italic",
                  textDecoration: "underline",
                  textDecorationStyle: "wavy",
                  textDecorationColor: "var(--teal-400)",
                  textUnderlineOffset: "0.18em",
                }}
              >
                nosso
              </span>
              .
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.65)", maxWidth: 380 }}>
              Aqui você encontra sua carteirinha digital, oportunidades de emprego
              e todos os benefícios de ser associada do MTSS.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", gap: 32, marginTop: 44 }}>
              {[
                { n: "1.000+", l: "associadas" },
                { n: "11ª", l: "edição em 2026" },
                { n: "10", l: "anos de comunidade" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="display"
                    style={{ fontSize: 28, color: "var(--orange-500)", lineHeight: 1 }}
                  >
                    {s.n}
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: back link */}
          <div style={{ position: "relative" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.08em",
              }}
            >
              ← VOLTAR AO SITE
            </Link>
          </div>
        </div>

        {/* ── Right panel ── */}
        <div
          className="login-form-panel"
          style={{
            flex: 1,
            background: "var(--cream-50)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 40px",
          }}
        >
          <div style={{ width: "100%", maxWidth: 400 }}>
            {/* Header */}
            <div style={{ marginBottom: 36 }}>
              <h2
                className="display"
                style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "var(--ink-900)", marginBottom: 10 }}
              >
                Bem-vinda de volta
              </h2>
              <p style={{ fontSize: 15, color: "var(--ink-500)", lineHeight: 1.5 }}>
                Entre na sua conta para acessar a área de associadas.
              </p>
            </div>

            {/* Error */}
            {error && (
              <div
                style={{
                  background: "#FEF2F2", border: "1px solid #FECACA",
                  borderRadius: 10, padding: "12px 16px", marginBottom: 24,
                  fontSize: 14, color: "#B91C1C",
                }}
              >
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div className="field">
                <label htmlFor="login-email">E-mail</label>
                <input
                  id="login-email"
                  type="email"
                  required
                  placeholder="email@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>

              <div className="field">
                <label htmlFor="login-pass">Senha</label>
                <input
                  id="login-pass"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-coral"
                style={{ fontSize: 16, padding: "16px", justifyContent: "center", marginTop: 4, opacity: loading ? 0.7 : 1 }}
              >
                {loading ? "Entrando…" : "Entrar na minha conta"}
              </button>
            </form>

            <div
              style={{
                textAlign: "center",
                marginTop: 28,
                paddingTop: 24,
                borderTop: "1px solid var(--cream-200)",
                fontSize: 14,
                color: "var(--ink-500)",
              }}
            >
              Ainda não é associada?{" "}
              <Link href="/cadastro" style={{ color: "var(--teal-600)", fontWeight: 700 }}>
                Fazer cadastro gratuito
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .login-brand { display: none !important; }
          .login-form-panel { padding: 48px 24px !important; }
        }
      `}</style>
    </>
  );
}
