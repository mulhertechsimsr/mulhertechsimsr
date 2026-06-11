"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "mtss_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(KEY, "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9000,
        background: "var(--ink-900)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "20px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 24, flexWrap: "wrap",
      }}
    >
      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.5, margin: 0, flex: 1, minWidth: 260 }}>
        Usamos cookies essenciais para o funcionamento do site e cookies analíticos para
        entender como ele é usado.{" "}
        <Link href="/politica-de-cookies" style={{ color: "var(--coral-500)", textDecoration: "underline" }}>
          Saiba mais
        </Link>
        .
      </p>
      <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
        <button
          onClick={reject}
          style={{
            padding: "9px 18px", borderRadius: 8, fontSize: 13, fontWeight: 600,
            background: "transparent", border: "1px solid rgba(255,255,255,0.2)",
            color: "rgba(255,255,255,0.6)", cursor: "pointer",
          }}
        >
          Somente essenciais
        </button>
        <button
          onClick={accept}
          style={{
            padding: "9px 18px", borderRadius: 8, fontSize: 13, fontWeight: 600,
            background: "var(--coral-500)", border: "none",
            color: "white", cursor: "pointer",
          }}
        >
          Aceitar todos
        </button>
      </div>
    </div>
  );
}
