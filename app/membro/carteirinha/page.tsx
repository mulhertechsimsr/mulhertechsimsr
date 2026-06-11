"use client";

import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import QRCode from "react-qr-code";
import { getAuth, type Member } from "@/lib/auth";
import { API_URL } from "@/lib/config";

const BENEFICIOS = [
  { emoji: "🎟️", titulo: "Ingresso prioritário",    desc: "Acesso antecipado às inscrições do evento anual MTSS antes da abertura geral." },
  { emoji: "💼", titulo: "Mural de oportunidades",  desc: "Vagas e oportunidades de emprego compartilhadas exclusivamente para associadas." },
  { emoji: "🎓", titulo: "Mentorias e workshops",   desc: "Encontros exclusivos com profissionais da comunidade sobre carreira e tecnologia." },
  { emoji: "🤝", titulo: "Rede de parceiras",       desc: "Desconto e benefícios em empresas e cursos parceiros do MTSS." },
  { emoji: "📣", titulo: "Voz ativa",               desc: "Participação nas assembleias e decisões da associação." },
  { emoji: "🏷️", titulo: "Carteirinha oficial",    desc: "Documento digital que comprova sua associação e dá acesso às vantagens com parceiros." },
];

function formatCPF(cpf: string) {
  const d = cpf.replace(/\D/g, "");
  if (d.length !== 11) return cpf;
  return `${d.slice(0,3)}.${d.slice(3,6)}.${d.slice(6,9)}-${d.slice(9)}`;
}

function formatDate(iso: string) {
  if (!iso) return iso;
  const [y, m, d] = iso.split("-");
  if (!y || !m || !d) return iso;
  const months = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
  return `${d} ${months[parseInt(m) - 1]} ${y}`;
}

function Avatar({ member, size = 96 }: { member: Member; size?: number }) {
  const initials = (member.apelido || member.nome || "A")
    .split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  if (member.foto) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={member.foto} alt={member.nome}
        style={{ width: size, height: size, borderRadius: "50%", objectFit: "cover",
          border: "3px solid #E2487A", display: "block" }} />
    );
  }

  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: "linear-gradient(135deg, #E2487A 0%, #F0844A 100%)",
      color: "white", display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.34, fontWeight: 800, letterSpacing: "-0.02em",
      fontFamily: "system-ui, sans-serif", flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

function StatBlock({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <div style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#C8B0B8", marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: 13, fontWeight: 700, color: "#0F2A28", fontFamily: mono ? "monospace" : undefined }}>
        {value}
      </div>
    </div>
  );
}

function MembershipCard({ member }: { member: Member }) {
  const id = String(member.numeroCarteirinha ?? member.id).padStart(5, "0");
  const validationUrl = `https://mulhertechsimsenhor.org/verificar?id=MTSS-${id}`;
  const geradaEm = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });

  return (
    <div style={{
      width: 780, height: 480,
      borderRadius: 20,
      background: "#FFFFFF",
      border: "1.5px solid #F0E4E8",
      overflow: "hidden",
      position: "relative",
      fontFamily: "system-ui, -apple-system, sans-serif",
      display: "flex",
      flexShrink: 0,
      boxShadow: "0 20px 60px -16px rgba(226,72,122,0.18), 0 4px 16px -4px rgba(0,0,0,0.06)",
    }}>
      {/* Decorative blurs — inspired by site Hero */}
      <div aria-hidden style={{ position: "absolute", top: -100, right: -80, width: 320, height: 320, borderRadius: "50%", background: "#F5C0D0", opacity: 0.55, filter: "blur(48px)", pointerEvents: "none" }} />
      <div aria-hidden style={{ position: "absolute", bottom: -80, left: -80, width: 260, height: 260, borderRadius: "50%", background: "#93CCC5", opacity: 0.35, filter: "blur(40px)", pointerEvents: "none" }} />
      <div aria-hidden style={{ position: "absolute", bottom: 20, right: 60, width: 160, height: 160, borderRadius: "50%", background: "#F0844A", opacity: 0.18, filter: "blur(36px)", pointerEvents: "none" }} />

      {/* Top accent bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #E2487A 0%, #F0844A 60%, #D5D73C 100%)" }} />

      {/* ── LEFT panel: logo + data + QR ── */}
      <div style={{
        width: 480, padding: "28px 32px 50px",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        flexShrink: 0,
      }}>
        {/* Logo + org name */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mtss.png" alt="MTSS" style={{ width: 64, height: 64, objectFit: "contain", flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#0F2A28", letterSpacing: "0.03em", textTransform: "uppercase" as const, lineHeight: 1.2 }}>
              Mulher Tech Sim Senhor
            </div>
            <div style={{ fontSize: 9, color: "#A6BAB7", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginTop: 3 }}>
              Associação Comunitária · João Pessoa, PB
            </div>
            <div style={{
              display: "inline-block", marginTop: 8,
              padding: "3px 10px", borderRadius: 999,
              background: "linear-gradient(90deg, #E2487A, #F0844A)",
              fontSize: 8, fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase" as const, color: "white",
            }}>
              ✦ Carteirinha de associada
            </div>
          </div>
        </div>

        {/* Member name */}
        <div>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#0F2A28", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 4 }}>
            {member.nome}
          </div>
          {member.area && (
            <div style={{ fontSize: 11, color: "#5E7B77", letterSpacing: "0.02em" }}>{member.area}</div>
          )}
        </div>

        {/* CPF + Nascimento */}
        <div>
          <div style={{ height: 1, background: "#FAF0F3", marginBottom: 12 }} />
          <div style={{ display: "flex", gap: 32 }}>
            <StatBlock label="CPF" value={member.cpf ? formatCPF(member.cpf) : "•••.•••.•••-••"} />
            <StatBlock label="Nascimento" value={member.dataNascimento ? formatDate(member.dataNascimento) : "—"} />
          </div>
          <div style={{ height: 1, background: "#FAF0F3", margin: "12px 0" }} />
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#C8B0B8", marginBottom: 3 }}>Nº Associada</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#F0844A", letterSpacing: "0.08em", fontFamily: "monospace" }}>MTSS‑{id}</div>
            </div>
            <div style={{ width: 1, height: 24, background: "#FAF0F3" }} />
            <StatBlock label="Desde" value={member.anoIngresso ?? "2026"} />
            {member.cidade && (
              <>
                <div style={{ width: 1, height: 24, background: "#FAF0F3" }} />
                <StatBlock label="Cidade" value={member.cidade} />
              </>
            )}
          </div>
        </div>

        {/* QR code */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ padding: 7, background: "white", border: "1.5px solid #F0E4E8", borderRadius: 10 }}>
            <QRCode value={validationUrl} size={60} fgColor="#0F2A28" bgColor="white" level="M" />
          </div>
          <div>
            <div style={{ fontSize: 9, fontWeight: 600, color: "#A6BAB7", letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: 2 }}>
              Validar carteirinha
            </div>
            <div style={{ fontSize: 8, color: "#C8B0B8", lineHeight: 1.4 }}>
              Escaneie o QR code para<br />confirmar a autenticidade
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom footer strip (absolute, full width) ── */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: 26,
        background: "#FAF0F3",
        borderTop: "1px solid #F0E4E8",
        display: "flex", alignItems: "center",
        paddingLeft: 32, paddingRight: 24,
        justifyContent: "space-between",
      }}>
        <span style={{ fontSize: 8, color: "#C8B0B8", letterSpacing: "0.1em", textTransform: "uppercase" as const, fontFamily: "monospace" }}>
          Gerada em {geradaEm}
        </span>
        <span style={{ fontSize: 8, color: "#C8B0B8", letterSpacing: "0.08em", fontFamily: "monospace" }}>
          mulhertechsimsenhor.org
        </span>
      </div>

      {/* ── RIGHT panel: photo ── */}
      <div style={{
        flex: 1,
        borderLeft: "1.5px solid #FAF0F3",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "32px 24px 58px", gap: 14,
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 5,
          padding: "3px 11px", borderRadius: 999,
          background: "#FFFFFF", border: "1px solid #FCCDD9",
          fontSize: 9, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase" as const, color: "#E2487A",
          boxShadow: "0 2px 8px rgba(226,72,122,0.18)",
        }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E", flexShrink: 0 }} />
          ATIVA
        </div>
        <Avatar member={member} size={130} />
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: "#0F2A28", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
            {member.apelido || member.nome.split(" ")[0]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CarteirinhaPage() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [member, setMember] = useState<Member | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [walletMsg, setWalletMsg] = useState<"apple" | "google" | null>(null);

  useEffect(() => {
    const auth = getAuth();
    if (auth) setMember(auth.member);
  }, []);

  async function handleDownload() {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 2, cacheBust: true });
      const link = document.createElement("a");
      link.download = `carteirinha-mtss-${member?.id ?? "associada"}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      alert("Erro ao gerar imagem. Tente novamente.");
    } finally {
      setDownloading(false);
    }
  }

  async function handleAppleWallet() {
    const auth = getAuth();
    try {
      // TODO: backend deve implementar GET /carteirinha/apple-wallet
      // retorna um arquivo .pkpass assinado com certificado Apple Developer
      const res = await fetch(`${API_URL}/carteirinha/apple-wallet`, {
        headers: { Authorization: `Bearer ${auth?.token ?? ""}` },
      });
      if (!res.ok) throw new Error();
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      window.location.href = url; // iOS abre o .pkpass automaticamente
    } catch {
      setWalletMsg("apple");
      setTimeout(() => setWalletMsg(null), 5000);
    }
  }

  async function handleGoogleWallet() {
    const auth = getAuth();
    try {
      // TODO: backend deve implementar POST /carteirinha/google-wallet
      // retorna { saveUrl: string } com JWT assinado pela conta de serviço Google
      const res = await fetch(`${API_URL}/carteirinha/google-wallet`, {
        method: "POST",
        headers: { Authorization: `Bearer ${auth?.token ?? ""}` },
      });
      if (!res.ok) throw new Error();
      const { saveUrl } = await res.json() as { saveUrl: string };
      window.open(saveUrl, "_blank");
    } catch {
      setWalletMsg("google");
      setTimeout(() => setWalletMsg(null), 5000);
    }
  }

  if (!member) return <div style={{ color: "var(--ink-500)" }}>Carregando…</div>;

  return (
    <div>
      {/* Header + download button */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
        <div>
          <div className="eyebrow" style={{ color: "var(--coral-500)", marginBottom: 8 }}>CARTEIRINHA DIGITAL</div>
          <h1 className="display" style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "var(--ink-900)", marginBottom: 10 }}>
            Sua carteirinha de associada
          </h1>
          <p style={{ fontSize: 15, color: "var(--ink-500)", lineHeight: 1.5 }}>
            Apresente nos eventos e parceiros para acessar suas vantagens. O QR code leva à página de validação oficial.
          </p>
        </div>

        <button onClick={handleDownload} disabled={downloading} className="btn btn-coral"
          style={{ fontSize: 14, padding: "12px 22px", flexShrink: 0, opacity: downloading ? 0.7 : 1 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          {downloading ? "Gerando…" : "Baixar carteirinha (PNG)"}
        </button>
      </div>

      {/* Card preview */}
      <div style={{
        background: "linear-gradient(135deg, #FFF5F8 0%, #F4F7F6 60%, #FFF8F2 100%)",
        borderRadius: 24, border: "1px solid var(--cream-200)",
        padding: "36px 28px", marginBottom: 20, overflowX: "auto",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div ref={cardRef} style={{ display: "inline-block" }}>
          <MembershipCard member={member} />
        </div>
      </div>

      {/* Wallet buttons */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
          {/* Apple Wallet */}
          <button onClick={handleAppleWallet} style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "12px 20px", borderRadius: 12,
            background: "#000000", color: "white",
            border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
            transition: "opacity 0.15s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span>Adicionar ao Apple Wallet</span>
          </button>

          {/* Google Wallet */}
          <button onClick={handleGoogleWallet} style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "12px 20px", borderRadius: 12,
            background: "white", color: "#1A1A1A",
            border: "1.5px solid #E5E7EB", cursor: "pointer", fontSize: 13, fontWeight: 600,
            transition: "background 0.15s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F9FAFB")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#4285F4"/>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="none"/>
              <path fill="#34A853" d="M7.77 15.68l-1.41-1.41 5.65-5.66 1.41 1.42z"/>
              <path fill="#FBBC04" d="M16.24 15.68 10.6 10.03l1.4-1.42 5.66 5.66z"/>
              <path fill="#EA4335" d="M12 2v4l-2 2-2-2V2h4z"/>
              <path fill="#4285F4" d="M12 22v-4l2-2 2 2v4h-4z"/>
            </svg>
            <span>Salvar no Google Wallet</span>
          </button>
        </div>

        {/* "Coming soon" notice */}
        {walletMsg && (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "10px 16px", borderRadius: 10,
            background: "#FFFBEB", border: "1px solid #FDE68A",
            fontSize: 13, color: "#92400E",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            {walletMsg === "apple"
              ? "Apple Wallet disponível em breve — requer configuração de certificado no backend."
              : "Google Wallet disponível em breve — requer configuração de conta de serviço no backend."}
          </div>
        )}
      </div>

      {/* Benefits */}
      <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--ink-900)", marginBottom: 18 }}>Vantagens de associada</h2>
      <div className="beneficios-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {BENEFICIOS.map((b) => (
          <div key={b.titulo} style={{ background: "white", borderRadius: 14, border: "1px solid var(--cream-200)", padding: "20px" }}>
            <div style={{ fontSize: 26, marginBottom: 10 }}>{b.emoji}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink-900)", marginBottom: 6 }}>{b.titulo}</div>
            <div style={{ fontSize: 13, color: "var(--ink-500)", lineHeight: 1.5 }}>{b.desc}</div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) { .beneficios-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 420px) { .beneficios-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
