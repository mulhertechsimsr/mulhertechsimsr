"use client";

import Link from "next/link";
import { useState } from "react";
import { Wordmark } from "./Logo";
import { EDICAO_URL } from "@/lib/config";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#historia", label: "História" },
  { href: "/#edicoes", label: "Edições" },
  { href: "/#equipe", label: "Equipe" },
  { href: "/#contato", label: "Contato" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: "rgba(244,247,246,0.85)",
        borderBottom: "1px solid var(--cream-200)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 32px",
          maxWidth: 1440,
          margin: "0 auto",
        }}
      >
        {/* Wordmark */}
        <Link href="/" aria-label="Mulher Tech Sim Senhor — página inicial">
          <Wordmark />
        </Link>

        {/* Desktop links */}
        <div
          className="nav-desktop"
          style={{ display: "flex", alignItems: "center", gap: 4 }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                padding: "10px 14px",
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 8,
                color: "var(--ink-900)",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--cream-100)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "transparent")
              }
            >
              {l.label}
            </Link>
          ))}

          <a
            href={EDICAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-coral"
            style={{ marginLeft: 12, padding: "10px 18px", fontSize: 13 }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "white",
                boxShadow: "0 0 0 3px rgba(255,255,255,0.3)",
                flexShrink: 0,
              }}
            />
            11ª Edição · 01 Ago
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            padding: 8,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: "var(--ink-900)",
              borderRadius: 2,
              transition: "transform 0.2s",
              transform: open ? "rotate(45deg) translate(5px,5px)" : undefined,
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: "var(--ink-900)",
              borderRadius: 2,
              transition: "opacity 0.2s",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: "var(--ink-900)",
              borderRadius: 2,
              transition: "transform 0.2s",
              transform: open ? "rotate(-45deg) translate(5px,-5px)" : undefined,
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: "1px solid var(--cream-200)",
            background: "rgba(244,247,246,0.97)",
            padding: "16px 24px 24px",
          }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "12px 8px",
                fontSize: 16,
                fontWeight: 500,
                color: "var(--ink-900)",
                borderBottom: "1px solid var(--cream-200)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={EDICAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-coral"
            onClick={() => setOpen(false)}
            style={{ marginTop: 16, width: "100%", justifyContent: "center" }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "white",
                boxShadow: "0 0 0 3px rgba(255,255,255,0.3)",
              }}
            />
            11ª Edição · 01 Ago
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
