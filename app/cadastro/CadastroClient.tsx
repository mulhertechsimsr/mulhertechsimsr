"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { EDICAO_URL, WHATSAPP_URL } from "@/lib/config";

/* ── Shared sub-components ── */

function FormSection({
  title,
  n,
  children,
}: {
  title: string;
  n: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}
      >
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: 9,
            background: "var(--teal-600)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          {n}
        </span>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--ink-900)" }}>
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{ height: 1, background: "var(--cream-200)", margin: "32px 0" }}
    />
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.25 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

/* ── Success screen ── */

function Sucesso() {
  return (
    <div
      style={{
        maxWidth: 640,
        margin: "0 auto",
        textAlign: "center",
        padding: "20px 0",
      }}
    >
      {/* Checkmark badge */}
      <div
        style={{
          width: 92,
          height: 92,
          borderRadius: "50%",
          background: "var(--teal-600)",
          color: "white",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 44,
          marginBottom: 28,
          boxShadow: "0 0 0 8px rgba(15,117,112,0.12)",
        }}
      >
        ✓
      </div>

      <h1
        className="display"
        style={{
          fontSize: "clamp(36px, 5vw, 56px)",
          lineHeight: 0.98,
          color: "var(--ink-900)",
          marginBottom: 18,
        }}
      >
        Cadastro{" "}
        <span style={{ color: "var(--coral-500)" }}>concluído!</span>
      </h1>

      <p
        style={{
          fontSize: 18,
          lineHeight: 1.55,
          color: "var(--ink-700)",
          marginBottom: 40,
        }}
      >
        Que alegria ter você com a gente! O último passo é entrar na nossa comunidade no
        WhatsApp — é lá que acontecem as trocas, avisos de eventos, vagas e mentorias.
      </p>

      {/* WhatsApp CTA */}
      {/* TODO: replace WHATSAPP_URL with the real community invite link */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 14,
          padding: "18px 32px",
          borderRadius: 999,
          background: "#25D366",
          color: "white",
          fontFamily: "var(--font-body)",
          fontWeight: 700,
          fontSize: 18,
          boxShadow: "0 8px 24px -6px rgba(37,211,102,0.5)",
          transition: "transform 0.15s",
          textDecoration: "none",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.transform = "translateY(-2px)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")
        }
      >
        <WhatsAppIcon />
        Entrar na comunidade do WhatsApp
      </a>

      <p style={{ fontSize: 13, color: "var(--ink-500)", marginTop: 16 }}>
        Você também receberá o link por e-mail. Demora? Confira a caixa de spam.
      </p>

      <div
        style={{
          marginTop: 48,
          paddingTop: 32,
          borderTop: "1px solid var(--cream-200)",
          display: "flex",
          gap: 14,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          href={EDICAO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          Conhecer a 11ª edição
        </a>
        <Link href="/" className="btn btn-ghost">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}

/* ── Form ── */

interface FormData {
  nome: string;
  apelido: string;
  email: string;
  whatsapp: string;
  cidade: string;
  faixaEtaria: string;
  momento: string;
  area: string;
  empresa: string;
  redes: string;
  comoConheceu: string;
  expectativas: string;
  conduta: boolean;
}

function Formulario({ onSubmit }: { onSubmit: () => void }) {
  const [form, setForm] = useState<FormData>({
    nome: "",
    apelido: "",
    email: "",
    whatsapp: "",
    cidade: "João Pessoa, PB",
    faixaEtaria: "",
    momento: "",
    area: "",
    empresa: "",
    redes: "",
    comoConheceu: "",
    expectativas: "",
    conduta: false,
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: send form data to API route / CRM / email service
    onSubmit();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const set = (key: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const value =
      e.target.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      {/* Header */}
      <div style={{ maxWidth: 680, marginBottom: 44 }}>
        <div className="eyebrow" style={{ color: "var(--coral-500)", marginBottom: 16 }}>
          FAZER PARTE DA COMUNIDADE
        </div>
        <h1
          className="display"
          style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: 0.95,
            color: "var(--ink-900)",
            marginBottom: 20,
          }}
        >
          Cadastro de participante
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--ink-700)" }}>
          A entrada é <strong>gratuita</strong> e aberta a qualquer mulher que atue, estude
          ou esteja em transição para a tecnologia. Preencha abaixo — leva 3 minutos — e no
          final você recebe o link para entrar no nosso WhatsApp.
        </p>
      </div>

      {/* Form card */}
      <form onSubmit={handleSubmit}>
        <div
          style={{
            background: "white",
            borderRadius: 20,
            border: "1px solid var(--cream-200)",
            padding: 40,
          }}
        >
          {/* Block 01 — Sobre você */}
          <FormSection title="Sobre você" n="01">
            <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div className="field">
                <label htmlFor="nome">Nome completo *</label>
                <input
                  id="nome"
                  required
                  placeholder="Como aparece no documento"
                  value={form.nome}
                  onChange={set("nome")}
                />
              </div>
              <div className="field">
                <label htmlFor="apelido">Como prefere ser chamada *</label>
                <input
                  id="apelido"
                  required
                  placeholder="Nome social ou apelido"
                  value={form.apelido}
                  onChange={set("apelido")}
                />
              </div>
              <div className="field">
                <label htmlFor="email">E-mail *</label>
                <input
                  id="email"
                  required
                  type="email"
                  placeholder="email@exemplo.com"
                  value={form.email}
                  onChange={set("email")}
                />
              </div>
              <div className="field">
                <label htmlFor="whatsapp">WhatsApp *</label>
                <input
                  id="whatsapp"
                  required
                  placeholder="(83) 99999-9999"
                  value={form.whatsapp}
                  onChange={set("whatsapp")}
                />
              </div>
              <div className="field">
                <label htmlFor="cidade">Cidade *</label>
                <input
                  id="cidade"
                  required
                  placeholder="Ex: João Pessoa, PB"
                  value={form.cidade}
                  onChange={set("cidade")}
                />
              </div>
              <div className="field">
                <label htmlFor="faixaEtaria">Faixa etária</label>
                <select
                  id="faixaEtaria"
                  value={form.faixaEtaria}
                  onChange={set("faixaEtaria")}
                >
                  <option value="">Prefiro não informar</option>
                  <option>Até 17</option>
                  <option>18 a 24</option>
                  <option>25 a 34</option>
                  <option>35 a 44</option>
                  <option>45+</option>
                </select>
              </div>
            </div>
          </FormSection>

          <Divider />

          {/* Block 02 — Relação com a tecnologia */}
          <FormSection title="Sua relação com a tecnologia" n="02">
            <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div className="field">
                <label htmlFor="momento">Momento de carreira *</label>
                <select
                  id="momento"
                  required
                  value={form.momento}
                  onChange={set("momento")}
                >
                  <option value="">Selecione...</option>
                  <option>Estudante</option>
                  <option>Em transição para a área</option>
                  <option>Atuando na área (júnior)</option>
                  <option>Atuando na área (pleno/sênior)</option>
                  <option>Liderança / gestão</option>
                  <option>Empreendedora</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="area">Área de interesse principal *</label>
                <select
                  id="area"
                  required
                  value={form.area}
                  onChange={set("area")}
                >
                  <option value="">Selecione...</option>
                  <option>Engenharia de Software</option>
                  <option>Dados / IA / ML</option>
                  <option>Cloud / DevOps / Infra</option>
                  <option>Produto / Design / UX</option>
                  <option>Segurança</option>
                  <option>QA / Testes</option>
                  <option>Ainda explorando</option>
                  <option>Outra</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="empresa">Empresa / Instituição</label>
                <input
                  id="empresa"
                  placeholder="Opcional"
                  value={form.empresa}
                  onChange={set("empresa")}
                />
              </div>
              <div className="field">
                <label htmlFor="redes">LinkedIn ou Instagram</label>
                <input
                  id="redes"
                  placeholder="@seuusuario"
                  value={form.redes}
                  onChange={set("redes")}
                />
              </div>
            </div>
          </FormSection>

          <Divider />

          {/* Block 03 — Quase lá */}
          <FormSection title="Quase lá" n="03">
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div className="field">
                <label htmlFor="comoConheceu">
                  Como você conheceu o Mulher Tech Sim Senhor?
                </label>
                <select
                  id="comoConheceu"
                  value={form.comoConheceu}
                  onChange={set("comoConheceu")}
                >
                  <option value="">Selecione...</option>
                  <option>Indicação de uma amiga</option>
                  <option>Instagram</option>
                  <option>LinkedIn</option>
                  <option>Em uma edição do evento</option>
                  <option>Faculdade / curso</option>
                  <option>Outro</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="expectativas">
                  O que você espera da comunidade? (opcional)
                </label>
                <textarea
                  id="expectativas"
                  rows={3}
                  placeholder="Networking, mentoria, aprender, ensinar, fazer amigas, oportunidades..."
                  value={form.expectativas}
                  onChange={set("expectativas")}
                />
              </div>

              {/* Conduct checkbox */}
              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  padding: "16px 18px",
                  background: "var(--cream-100)",
                  borderRadius: 12,
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  required
                  checked={form.conduta}
                  onChange={set("conduta")}
                  style={{
                    marginTop: 3,
                    width: 18,
                    height: 18,
                    accentColor: "var(--coral-500)",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 14, lineHeight: 1.5, color: "var(--ink-700)" }}>
                  Li e concordo com o{" "}
                  <a
                    href="#"
                    style={{ color: "var(--coral-500)", textDecoration: "underline" }}
                  >
                    Código de Conduta
                  </a>{" "}
                  da comunidade e autorizo o tratamento dos meus dados conforme a{" "}
                  <a
                    href="#"
                    style={{ color: "var(--coral-500)", textDecoration: "underline" }}
                  >
                    Política de Privacidade
                  </a>
                  . *
                </span>
              </label>
            </div>
          </FormSection>

          {/* Form actions */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 32,
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <Link href="/#participante" className="btn btn-ghost">
              <span aria-hidden>←</span> Voltar
            </Link>
            <button
              type="submit"
              className="btn btn-coral"
              style={{ fontSize: 16, padding: "16px 28px" }}
            >
              Concluir cadastro
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </form>

      <style>{`
        @media (max-width: 600px) {
          .form-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

/* ── Page shell ── */

export function CadastroClient() {
  const [done, setDone] = useState(false);

  return (
    <>
      <Nav />
      <main style={{ background: "var(--cream-50)", flex: 1 }}>
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "72px 0 100px",
          }}
        >
          {/* Decorative blurs */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: -120,
              right: -120,
              width: 360,
              height: 360,
              borderRadius: "50%",
              background: "var(--coral-300)",
              opacity: 0.45,
              filter: "blur(50px)",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: -100,
              left: -120,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "var(--teal-400)",
              opacity: 0.3,
              filter: "blur(50px)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              maxWidth: 920,
              margin: "0 auto",
              padding: "0 32px",
              position: "relative",
            }}
          >
            {done ? (
              <Sucesso />
            ) : (
              <Formulario onSubmit={() => setDone(true)} />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
