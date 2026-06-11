"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAuth, type Member } from "@/lib/auth";

const QUICK_LINKS = [
  {
    href: "/membro/carteirinha",
    label: "Minha carteirinha",
    desc: "Baixe sua carteirinha digital de associada.",
    color: "var(--teal-600)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
  },
  {
    href: "/membro/oportunidades",
    label: "Mural de oportunidades",
    desc: "Vagas e oportunidades compartilhadas pela comunidade.",
    color: "var(--coral-500)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
  },
  {
    href: "/membro/perfil",
    label: "Meu perfil",
    desc: "Atualize suas informações e área de atuação.",
    color: "var(--orange-500)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
  },
];

export default function MembroDashboard() {
  const [member, setMember] = useState<Member | null>(null);

  useEffect(() => {
    const auth = getAuth();
    if (auth) setMember(auth.member);
  }, []);

  const hora = new Date().getHours();
  const saudacao = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";

  return (
    <div>
      {/* Welcome */}
      <div style={{ marginBottom: 48 }}>
        <div
          className="eyebrow"
          style={{ color: "var(--teal-600)", marginBottom: 12 }}
        >
          ÁREA DE ASSOCIADAS
        </div>
        <h1
          className="display"
          style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "var(--ink-900)", marginBottom: 10 }}
        >
          {saudacao},{" "}
          <span style={{ color: "var(--coral-500)" }}>
            {member?.apelido || member?.nome || "associada"}
          </span>
          !
        </h1>
        <p style={{ fontSize: 16, color: "var(--ink-500)", lineHeight: 1.5 }}>
          Bem-vinda à sua área exclusiva. Aqui você encontra sua carteirinha, oportunidades
          de emprego e todas as vantagens de ser associada do MTSS.
        </p>
      </div>

      {/* Status card */}
      <div
        style={{
          background: "white",
          borderRadius: 20,
          border: "1px solid var(--cream-200)",
          marginBottom: 36,
          overflow: "hidden",
        }}
      >
        {/* Coral accent bar */}
        <div style={{ height: 4, background: "linear-gradient(90deg, var(--coral-500), var(--orange-500))" }} />

        <div style={{ padding: "28px 32px", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          {/* Status pill */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: 9, height: 9, borderRadius: "50%", flexShrink: 0,
                background: "#22C55E", boxShadow: "0 0 0 3px rgba(34,197,94,0.2)",
              }}
            />
            <span style={{ fontSize: 17, fontWeight: 700, color: "var(--ink-900)" }}>
              Associada ativa
            </span>
          </div>

          {/* Divider */}
          <div style={{ width: 1, height: 36, background: "var(--cream-200)", flexShrink: 0 }} className="stat-divider" />

          {/* Stats */}
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[
              { label: "Ingresso", value: member?.anoIngresso ?? "2026" },
              { label: "Área", value: member?.area ?? "—" },
              { label: "Cidade", value: member?.cidade ?? "—" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-300)", marginBottom: 4 }}>
                  {s.label}
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink-900)" }}>
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick links */}
      <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--ink-700)", marginBottom: 16 }}>
        Acesso rápido
      </h2>
      <div
        className="membro-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
      >
        {QUICK_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              display: "block",
              background: "white",
              borderRadius: 16,
              border: "1px solid var(--cream-200)",
              padding: "24px 22px",
              textDecoration: "none",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px -8px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: link.color,
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              {link.icon}
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ink-900)", marginBottom: 6 }}>
              {link.label}
            </div>
            <div style={{ fontSize: 13, color: "var(--ink-500)", lineHeight: 1.5 }}>
              {link.desc}
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .membro-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
