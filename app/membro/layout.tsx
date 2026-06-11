"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { getAuth, clearAuth, type AuthState } from "@/lib/auth";
import { Wordmark } from "@/components/Logo";

const NAV_ITEMS = [
  {
    href: "/membro",
    label: "Início",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    href: "/membro/perfil",
    label: "Meu perfil",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
  },
  {
    href: "/membro/oportunidades",
    label: "Oportunidades",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    href: "/membro/carteirinha",
    label: "Carteirinha",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
  },
];

function Sidebar({ auth, pathname }: { auth: AuthState; pathname: string }) {
  const router = useRouter();

  function logout() {
    clearAuth();
    router.push("/");
  }

  return (
    <aside
      style={{
        width: 240,
        minWidth: 240,
        background: "var(--teal-700)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "sticky",
        top: 0,
      }}
    >
      {/* Logo */}
      <div style={{ padding: "28px 24px 0" }}>
        <Link href="/" aria-label="Voltar ao site">
          <Wordmark dark />
        </Link>
        <div
          style={{
            marginTop: 24,
            paddingTop: 20,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div style={{ fontSize: 11, letterSpacing: "0.12em", fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", marginBottom: 6 }}>
            Associada
          </div>
          <div style={{ fontWeight: 700, fontSize: 15, color: "white", lineHeight: 1.3 }}>
            {auth.member.apelido || auth.member.nome}
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
            {auth.member.area || "Comunidade MTSS"}
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "24px 12px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "11px 14px",
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: active ? 600 : 400,
                  color: active ? "white" : "rgba(255,255,255,0.6)",
                  background: active ? "rgba(255,255,255,0.12)" : "transparent",
                  transition: "all 0.15s",
                  textDecoration: "none",
                }}
              >
                <span style={{ opacity: active ? 1 : 0.7 }}>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Logout */}
      <div style={{ padding: "16px 12px 28px" }}>
        <button
          onClick={logout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            width: "100%",
            padding: "10px 14px",
            borderRadius: 10,
            fontSize: 13,
            color: "rgba(255,255,255,0.5)",
            background: "none",
            border: "none",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Sair
        </button>
      </div>
    </aside>
  );
}

export default function MembroLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [auth, setAuthState] = useState<AuthState | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const a = getAuth();
    if (!a) {
      router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
    } else {
      setAuthState(a);
    }
    setChecking(false);
  }, [router, pathname]);

  if (checking || !auth) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--cream-100)" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--ink-500)", letterSpacing: "0.1em" }}>
          CARREGANDO…
        </div>
      </div>
    );
  }

  return (
    <div className="membro-shell" style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar auth={auth} pathname={pathname} />
      <main
        style={{
          flex: 1,
          background: "var(--cream-100)",
          padding: "48px 48px",
          minWidth: 0,
        }}
      >
        {children}
      </main>

      <style>{`
        @media (max-width: 768px) {
          .membro-shell { flex-direction: column; }
          .membro-shell aside {
            width: 100% !important;
            min-width: unset !important;
            min-height: unset !important;
            position: static !important;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 16px !important;
            gap: 8px;
          }
          .membro-shell main { padding: 24px 16px !important; }
        }
      `}</style>
    </div>
  );
}
