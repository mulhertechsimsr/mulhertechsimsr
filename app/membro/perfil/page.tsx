"use client";

import { useEffect, useState } from "react";
import { getAuth, updateMember, type Member } from "@/lib/auth";
import { API_URL } from "@/lib/config";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="field">
      <label htmlFor={id} style={{ color: "var(--ink-700)" }}>{label}</label>
      {children}
    </div>
  );
}

export default function PerfilPage() {
  const [member, setMember] = useState<Member | null>(null);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<Member | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const auth = getAuth();
    if (auth) {
      setMember(auth.member);
      setDraft(auth.member);
    }
  }, []);

  function startEdit() {
    setDraft(member);
    setEditing(true);
    setSaved(false);
    setError(null);
  }

  function cancelEdit() {
    setDraft(member);
    setEditing(false);
    setError(null);
  }

  async function save() {
    if (!draft) return;
    setSaving(true);
    setError(null);

    try {
      const auth = getAuth();
      // TODO: PATCH /membros/me with auth token
      const res = await fetch(`${API_URL}/membros/me`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth?.token ?? ""}`,
        },
        body: JSON.stringify(draft),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({})) as { message?: string };
        throw new Error(data.message ?? "Erro ao salvar. Tente novamente.");
      }

      const updated = await res.json() as Member;
      updateMember(updated);
      setMember(updated);
      setDraft(updated);
      setEditing(false);
      setSaved(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao salvar.");
    } finally {
      setSaving(false);
    }
  }

  function setField(key: keyof Member, value: string) {
    setDraft((prev) => prev ? { ...prev, [key]: value } : prev);
  }

  if (!member || !draft) {
    return <div style={{ color: "var(--ink-500)" }}>Carregando…</div>;
  }

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
        <div>
          <div className="eyebrow" style={{ color: "var(--teal-600)", marginBottom: 8 }}>
            MEU PERFIL
          </div>
          <h1 className="display" style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "var(--ink-900)" }}>
            Seus dados
          </h1>
        </div>

        {!editing ? (
          <button onClick={startEdit} className="btn btn-outline" style={{ fontSize: 14 }}>
            Editar perfil
          </button>
        ) : (
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={cancelEdit} className="btn btn-ghost" style={{ fontSize: 14 }}>
              Cancelar
            </button>
            <button
              onClick={save}
              disabled={saving}
              className="btn btn-coral"
              style={{ fontSize: 14, opacity: saving ? 0.7 : 1 }}
            >
              {saving ? "Salvando…" : "Salvar alterações"}
            </button>
          </div>
        )}
      </div>

      {saved && (
        <div
          style={{
            background: "#F0FDF4", border: "1px solid #BBF7D0",
            borderRadius: 10, padding: "12px 16px", marginBottom: 24,
            fontSize: 14, color: "#15803D",
          }}
        >
          Perfil atualizado com sucesso.
        </div>
      )}
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

      {/* Form card */}
      <div style={{ background: "white", borderRadius: 20, border: "1px solid var(--cream-200)", padding: 36 }}>

        {/* Section: Dados pessoais */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--coral-500)", marginBottom: 20 }}>
            Dados pessoais
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="perfil-grid">
            <Field id="p-nome" label="Nome completo">
              <input id="p-nome" readOnly={!editing} value={draft.nome} onChange={(e) => setField("nome", e.target.value)}
                style={{ background: editing ? undefined : "var(--cream-100)", cursor: editing ? undefined : "default" }}
              />
            </Field>
            <Field id="p-apelido" label="Como prefere ser chamada">
              <input id="p-apelido" readOnly={!editing} value={draft.apelido} onChange={(e) => setField("apelido", e.target.value)}
                style={{ background: editing ? undefined : "var(--cream-100)", cursor: editing ? undefined : "default" }}
              />
            </Field>
            <Field id="p-email" label="E-mail">
              <input id="p-email" type="email" readOnly value={draft.email}
                style={{ background: "var(--cream-100)", cursor: "not-allowed", color: "var(--ink-500)" }}
              />
            </Field>
            <Field id="p-whatsapp" label="WhatsApp">
              <input id="p-whatsapp" readOnly={!editing} value={draft.whatsapp ?? ""} onChange={(e) => setField("whatsapp", e.target.value)}
                style={{ background: editing ? undefined : "var(--cream-100)", cursor: editing ? undefined : "default" }}
              />
            </Field>
            <Field id="p-cidade" label="Cidade">
              <input id="p-cidade" readOnly={!editing} value={draft.cidade ?? ""} onChange={(e) => setField("cidade", e.target.value)}
                style={{ background: editing ? undefined : "var(--cream-100)", cursor: editing ? undefined : "default" }}
              />
            </Field>
            <Field id="p-faixa" label="Faixa etária">
              {editing ? (
                <select id="p-faixa" value={draft.faixaEtaria ?? ""} onChange={(e) => setField("faixaEtaria", e.target.value)}>
                  <option value="">Prefiro não informar</option>
                  <option>Até 17</option>
                  <option>18 a 24</option>
                  <option>25 a 34</option>
                  <option>35 a 44</option>
                  <option>45+</option>
                </select>
              ) : (
                <input id="p-faixa" readOnly value={draft.faixaEtaria ?? "Não informado"}
                  style={{ background: "var(--cream-100)", cursor: "default" }}
                />
              )}
            </Field>
            <Field id="p-cpf" label="CPF">
              <input id="p-cpf" readOnly={!editing} value={draft.cpf ?? ""} onChange={(e) => setField("cpf", e.target.value)}
                placeholder={editing ? "000.000.000-00" : "—"}
                style={{ background: editing ? undefined : "var(--cream-100)", cursor: editing ? undefined : "default" }}
              />
            </Field>
            <Field id="p-nasc" label="Data de nascimento">
              <input id="p-nasc" type={editing ? "date" : "text"} readOnly={!editing}
                value={draft.dataNascimento ?? ""}
                onChange={(e) => setField("dataNascimento", e.target.value)}
                style={{ background: editing ? undefined : "var(--cream-100)", cursor: editing ? undefined : "default" }}
              />
            </Field>
          </div>
        </div>

        <div style={{ height: 1, background: "var(--cream-200)", margin: "0 0 28px" }} />

        {/* Section: Carreira */}
        <div>
          <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--coral-500)", marginBottom: 20 }}>
            Tecnologia &amp; carreira
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="perfil-grid">
            <Field id="p-momento" label="Momento de carreira">
              {editing ? (
                <select id="p-momento" value={draft.momento ?? ""} onChange={(e) => setField("momento", e.target.value)}>
                  <option value="">Selecione...</option>
                  <option>Estudante</option>
                  <option>Em transição para a área</option>
                  <option>Atuando na área (júnior)</option>
                  <option>Atuando na área (pleno/sênior)</option>
                  <option>Liderança / gestão</option>
                  <option>Empreendedora</option>
                </select>
              ) : (
                <input id="p-momento" readOnly value={draft.momento ?? "—"}
                  style={{ background: "var(--cream-100)", cursor: "default" }}
                />
              )}
            </Field>
            <Field id="p-area" label="Área de interesse">
              {editing ? (
                <select id="p-area" value={draft.area ?? ""} onChange={(e) => setField("area", e.target.value)}>
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
              ) : (
                <input id="p-area" readOnly value={draft.area ?? "—"}
                  style={{ background: "var(--cream-100)", cursor: "default" }}
                />
              )}
            </Field>
            <Field id="p-empresa" label="Empresa / Instituição">
              <input id="p-empresa" readOnly={!editing} value={draft.empresa ?? ""} onChange={(e) => setField("empresa", e.target.value)}
                style={{ background: editing ? undefined : "var(--cream-100)", cursor: editing ? undefined : "default" }}
              />
            </Field>
            <Field id="p-redes" label="LinkedIn ou Instagram">
              <input id="p-redes" readOnly={!editing} value={draft.redes ?? ""} onChange={(e) => setField("redes", e.target.value)}
                style={{ background: editing ? undefined : "var(--cream-100)", cursor: editing ? undefined : "default" }}
              />
            </Field>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .perfil-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
