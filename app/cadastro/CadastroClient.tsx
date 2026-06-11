"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WHATSAPP_URL } from "@/lib/config";
import { setAuth } from "@/lib/auth";

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

/* ── Success screen ── */

function Sucesso({ nome }: { nome: string }) {
  return (
    <div
      style={{
        maxWidth: 640,
        margin: "0 auto",
        textAlign: "center",
        padding: "20px 0",
      }}
    >
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
        Bem-vinda,{" "}
        <span style={{ color: "var(--coral-500)" }}>{nome || "associada"}!</span>
      </h1>

      <p
        style={{
          fontSize: 18,
          lineHeight: 1.55,
          color: "var(--ink-700)",
          marginBottom: 40,
        }}
      >
        Seu cadastro está pronto. Redirecionando para a área de associadas…
      </p>

      <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/membro" className="btn btn-coral" style={{ fontSize: 16, padding: "16px 28px" }}>
          Ir para área de associadas
          <span aria-hidden>→</span>
        </Link>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          Entrar no WhatsApp
        </a>
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
  senha: string;
  senhaConfirm: string;
}

function Formulario({ onSuccess }: { onSuccess: (nome: string) => void }) {
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
    senha: "",
    senhaConfirm: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setError(null);

    if (form.senha.length < 8) {
      setError("A senha precisa ter pelo menos 8 caracteres.");
      return;
    }
    if (form.senha !== form.senhaConfirm) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);
    // TODO: replace with real API call — POST /auth/register
    setAuth({
      token: "mock-token",
      member: {
        id: "1",
        nome: form.nome,
        apelido: form.apelido,
        email: form.email,
        whatsapp: form.whatsapp,
        cidade: form.cidade,
        faixaEtaria: form.faixaEtaria,
        momento: form.momento,
        area: form.area,
        empresa: form.empresa,
        redes: form.redes,
        comoConheceu: form.comoConheceu,
        expectativas: form.expectativas,
        anoIngresso: "2026",
      },
    });
    onSuccess(form.apelido || form.nome);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(false);
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
          ou esteja em transição para a tecnologia. Preencha abaixo — leva 3 minutos.
        </p>
      </div>

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
                  autoComplete="email"
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
                <select id="faixaEtaria" value={form.faixaEtaria} onChange={set("faixaEtaria")}>
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
                <select id="momento" required value={form.momento} onChange={set("momento")}>
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
                <select id="area" required value={form.area} onChange={set("area")}>
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
                <input id="empresa" placeholder="Opcional" value={form.empresa} onChange={set("empresa")} />
              </div>
              <div className="field">
                <label htmlFor="redes">LinkedIn ou Instagram</label>
                <input id="redes" placeholder="@seuusuario" value={form.redes} onChange={set("redes")} />
              </div>
            </div>
          </FormSection>

          <Divider />

          {/* Block 03 — Quase lá */}
          <FormSection title="Quase lá" n="03">
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div className="field">
                <label htmlFor="comoConheceu">Como você conheceu o Mulher Tech Sim Senhor?</label>
                <select id="comoConheceu" value={form.comoConheceu} onChange={set("comoConheceu")}>
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
                <label htmlFor="expectativas">O que você espera da comunidade? (opcional)</label>
                <textarea
                  id="expectativas"
                  rows={3}
                  placeholder="Networking, mentoria, aprender, ensinar, fazer amigas, oportunidades..."
                  value={form.expectativas}
                  onChange={set("expectativas")}
                />
              </div>

              <label
                style={{
                  display: "flex", alignItems: "flex-start", gap: 14,
                  padding: "16px 18px", background: "var(--cream-100)", borderRadius: 12, cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  required
                  checked={form.conduta}
                  onChange={set("conduta")}
                  style={{ marginTop: 3, width: 18, height: 18, accentColor: "var(--coral-500)", flexShrink: 0 }}
                />
                <span style={{ fontSize: 14, lineHeight: 1.5, color: "var(--ink-700)" }}>
                  Li e concordo com o{" "}
                  <a href="#" style={{ color: "var(--coral-500)", textDecoration: "underline" }}>
                    Código de Conduta
                  </a>{" "}
                  da comunidade e autorizo o tratamento dos meus dados conforme a{" "}
                  <a href="#" style={{ color: "var(--coral-500)", textDecoration: "underline" }}>
                    Política de Privacidade
                  </a>
                  . *
                </span>
              </label>
            </div>
          </FormSection>

          <Divider />

          {/* Block 04 — Crie sua conta */}
          <FormSection title="Crie sua conta" n="04">
            <p style={{ fontSize: 14, color: "var(--ink-500)", marginBottom: 20, lineHeight: 1.5 }}>
              Crie uma senha para acessar sua área exclusiva — carteirinha digital,
              mural de oportunidades e benefícios de associada.
            </p>
            <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div className="field" style={{ gridColumn: "1 / -1" }}>
                <label htmlFor="reg-email">E-mail (será usado no login)</label>
                <input
                  id="reg-email"
                  type="email"
                  readOnly
                  value={form.email}
                  style={{ background: "var(--cream-100)", cursor: "not-allowed", color: "var(--ink-500)" }}
                />
              </div>
              <div className="field">
                <label htmlFor="reg-senha">Senha *</label>
                <input
                  id="reg-senha"
                  type="password"
                  required
                  placeholder="Mínimo 8 caracteres"
                  value={form.senha}
                  onChange={set("senha")}
                  autoComplete="new-password"
                  minLength={8}
                />
              </div>
              <div className="field">
                <label htmlFor="reg-senha-confirm">Confirmar senha *</label>
                <input
                  id="reg-senha-confirm"
                  type="password"
                  required
                  placeholder="Repita a senha"
                  value={form.senhaConfirm}
                  onChange={set("senhaConfirm")}
                  autoComplete="new-password"
                />
              </div>
            </div>
          </FormSection>

          {/* Error message */}
          {error && (
            <div
              style={{
                marginTop: 24,
                background: "#FEF2F2", border: "1px solid #FECACA",
                borderRadius: 10, padding: "12px 16px",
                fontSize: 14, color: "#B91C1C",
              }}
            >
              {error}
            </div>
          )}

          {/* Form actions */}
          <div
            style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              marginTop: 32, gap: 16, flexWrap: "wrap",
            }}
          >
            <Link href="/#participante" className="btn btn-ghost">
              <span aria-hidden>←</span> Voltar
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-coral"
              style={{ fontSize: 16, padding: "16px 28px", opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "Criando sua conta…" : "Concluir cadastro"}
              {!loading && <span aria-hidden>→</span>}
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
  const router = useRouter();
  const [successName, setSuccessName] = useState<string | null>(null);

  function handleSuccess(nome: string) {
    setSuccessName(nome);
    setTimeout(() => router.push("/membro"), 3000);
  }

  return (
    <>
      <Nav />
      <main style={{ background: "var(--cream-50)", flex: 1 }}>
        <section
          style={{ position: "relative", overflow: "hidden", padding: "72px 0 100px" }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute", top: -120, right: -120,
              width: 360, height: 360, borderRadius: "50%",
              background: "var(--coral-300)", opacity: 0.45, filter: "blur(50px)", pointerEvents: "none",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute", bottom: -100, left: -120,
              width: 300, height: 300, borderRadius: "50%",
              background: "var(--teal-400)", opacity: 0.3, filter: "blur(50px)", pointerEvents: "none",
            }}
          />
          <div
            style={{ maxWidth: 920, margin: "0 auto", padding: "0 32px", position: "relative" }}
          >
            {successName !== null ? (
              <Sucesso nome={successName} />
            ) : (
              <Formulario onSuccess={handleSuccess} />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
