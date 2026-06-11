"use client";

import { useEffect, useState } from "react";
import { getAuth } from "@/lib/auth";
import { API_URL } from "@/lib/config";

type Status = "aprovada" | "pendente" | "rejeitada";

type Oportunidade = {
  id: string;
  empresa: string;
  cargo: string;
  local: string;
  tipo: "Remoto" | "Híbrido" | "Presencial";
  area: string;
  nivel: string;
  descricao: string;
  link: string;
  dataPublicacao: string;
  status: Status;
  autorId?: string;
};

type NovaVagaForm = {
  empresa: string;
  cargo: string;
  local: string;
  tipo: "Remoto" | "Híbrido" | "Presencial" | "";
  area: string;
  nivel: string;
  descricao: string;
  link: string;
};

const FORM_VAZIO: NovaVagaForm = {
  empresa: "", cargo: "", local: "", tipo: "",
  area: "", nivel: "", descricao: "", link: "",
};

const TIPO_COLOR: Record<string, string> = {
  Remoto: "var(--teal-600)",
  Híbrido: "var(--orange-500)",
  Presencial: "var(--coral-500)",
};

const STATUS_CONFIG: Record<Status, { label: string; bg: string; color: string }> = {
  aprovada:  { label: "Aprovada",              bg: "#F0FDF4", color: "#15803D" },
  pendente:  { label: "Aguardando aprovação",  bg: "#FFFBEB", color: "#B45309" },
  rejeitada: { label: "Não aprovada",          bg: "#FEF2F2", color: "#B91C1C" },
};

const MOCK_APROVADAS: Oportunidade[] = [
  {
    id: "1", status: "aprovada",
    empresa: "Stone Co.", cargo: "Engenheira de Software Júnior",
    local: "Remoto, Brasil", tipo: "Remoto", area: "Engenharia de Software", nivel: "Júnior",
    descricao: "Desenvolvimento backend em Go e Python para sistemas de pagamento de alta disponibilidade.",
    link: "#", dataPublicacao: "2026-06-08",
  },
  {
    id: "2", status: "aprovada",
    empresa: "iFood", cargo: "Analista de Dados Pleno",
    local: "Campinas, SP", tipo: "Híbrido", area: "Dados / IA / ML", nivel: "Pleno",
    descricao: "Análise de comportamento de usuários e modelagem de dados para o time de growth.",
    link: "#", dataPublicacao: "2026-06-07",
  },
  {
    id: "3", status: "aprovada",
    empresa: "Stefanini", cargo: "UX Designer Sênior",
    local: "João Pessoa, PB", tipo: "Presencial", area: "Produto / Design / UX", nivel: "Sênior",
    descricao: "Liderar processos de design centrado no usuário para produtos financeiros.",
    link: "#", dataPublicacao: "2026-06-06",
  },
  {
    id: "4", status: "aprovada",
    empresa: "AWS", cargo: "Cloud Solutions Architect",
    local: "Remoto, Brasil", tipo: "Remoto", area: "Cloud / DevOps / Infra", nivel: "Pleno/Sênior",
    descricao: "Apoio técnico a clientes na adoção de serviços AWS.",
    link: "#", dataPublicacao: "2026-06-05",
  },
  {
    id: "5", status: "aprovada",
    empresa: "TOTVS", cargo: "QA Engineer",
    local: "Recife, PE", tipo: "Híbrido", area: "QA / Testes", nivel: "Júnior/Pleno",
    descricao: "Automação de testes em Cypress e Selenium para sistemas ERP.",
    link: "#", dataPublicacao: "2026-06-04",
  },
  {
    id: "6", status: "aprovada",
    empresa: "Governo do Estado da PB", cargo: "Desenvolvedora Full Stack",
    local: "João Pessoa, PB", tipo: "Presencial", area: "Engenharia de Software", nivel: "Pleno",
    descricao: "Desenvolvimento de sistemas públicos digitais usando React e Node.js.",
    link: "#", dataPublicacao: "2026-06-03",
  },
];

const TIPOS = ["Todos", "Remoto", "Híbrido", "Presencial"] as const;

function VagaCard({ o, mostrarStatus = false }: { o: Oportunidade; mostrarStatus?: boolean }) {
  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
  }
  const sc = STATUS_CONFIG[o.status];

  return (
    <div
      style={{
        background: "white",
        borderRadius: 16,
        border: "1px solid var(--cream-200)",
        padding: "24px 28px",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Chips */}
          <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span
              style={{
                padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700,
                fontFamily: "var(--font-mono)", letterSpacing: "0.06em",
                background: `color-mix(in srgb, ${TIPO_COLOR[o.tipo]} 12%, transparent)`,
                color: TIPO_COLOR[o.tipo],
              }}
            >
              {o.tipo.toUpperCase()}
            </span>
            <span style={{ padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 600, background: "var(--cream-100)", color: "var(--ink-500)" }}>
              {o.nivel}
            </span>
            <span style={{ padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 600, background: "var(--cream-100)", color: "var(--ink-500)" }}>
              {o.area}
            </span>
            {mostrarStatus && (
              <span style={{ padding: "3px 12px", borderRadius: 999, fontSize: 11, fontWeight: 700, background: sc.bg, color: sc.color, marginLeft: "auto" }}>
                {sc.label}
              </span>
            )}
          </div>

          <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--ink-900)", marginBottom: 4 }}>
            {o.cargo}
          </h2>
          <div style={{ fontSize: 14, color: "var(--ink-500)", marginBottom: 10 }}>
            {o.empresa} · {o.local}
          </div>
          <p style={{ fontSize: 14, color: "var(--ink-700)", lineHeight: 1.6, margin: 0 }}>
            {o.descricao}
          </p>
        </div>

        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontSize: 12, color: "var(--ink-300)", marginBottom: 12 }}>
            {formatDate(o.dataPublicacao)}
          </div>
          {o.status === "aprovada" && (
            <a href={o.link} target="_blank" rel="noopener noreferrer"
              className="btn btn-coral" style={{ fontSize: 13, padding: "10px 18px" }}>
              Ver vaga →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function OportunidadesPage() {
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>(MOCK_APROVADAS);
  const [minhasVagas, setMinhasVagas] = useState<Oportunidade[]>([]);
  const [filtro, setFiltro] = useState<typeof TIPOS[number]>("Todos");
  const [formAberto, setFormAberto] = useState(false);
  const [form, setForm] = useState<NovaVagaForm>(FORM_VAZIO);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    if (!auth) return;

    // TODO: fetch from real API — GET /oportunidades (retorna só as aprovadas)
    fetch(`${API_URL}/oportunidades`, {
      headers: { Authorization: `Bearer ${auth.token}` },
    })
      .then((r) => r.json())
      .then((data: Oportunidade[]) => {
        if (Array.isArray(data) && data.length > 0) setOportunidades(data);
      })
      .catch(() => {});

    // TODO: GET /oportunidades/minhas — vagas que a própria membro submeteu (qualquer status)
    fetch(`${API_URL}/oportunidades/minhas`, {
      headers: { Authorization: `Bearer ${auth.token}` },
    })
      .then((r) => r.json())
      .then((data: Oportunidade[]) => {
        if (Array.isArray(data)) setMinhasVagas(data);
      })
      .catch(() => {});
  }, []);

  function setField(key: keyof NovaVagaForm, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setEnviando(true);

    const auth = getAuth();

    // TODO: POST /oportunidades — envia para fila de aprovação
    try {
      await fetch(`${API_URL}/oportunidades`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth?.token ?? ""}`,
        },
        body: JSON.stringify(form),
      });
    } catch {
      // Em modo mock, apenas simula o envio
    }

    // Adiciona localmente com status pendente para feedback imediato
    const nova: Oportunidade = {
      id: `mock-${Date.now()}`,
      ...form,
      tipo: form.tipo as Oportunidade["tipo"],
      status: "pendente",
      autorId: auth?.member.id,
      dataPublicacao: new Date().toISOString().split("T")[0],
    };
    setMinhasVagas((prev) => [nova, ...prev]);
    setForm(FORM_VAZIO);
    setFormAberto(false);
    setEnviado(true);
    setEnviando(false);
    setTimeout(() => setEnviado(false), 5000);
  }

  const visíveis =
    filtro === "Todos"
      ? oportunidades
      : oportunidades.filter((o) => o.tipo === filtro);

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 36 }}>
        <div>
          <div className="eyebrow" style={{ color: "var(--coral-500)", marginBottom: 8 }}>
            MURAL DE OPORTUNIDADES
          </div>
          <h1 className="display" style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "var(--ink-900)", marginBottom: 10 }}>
            Vagas &amp; oportunidades
          </h1>
          <p style={{ fontSize: 15, color: "var(--ink-500)", lineHeight: 1.5 }}>
            Compartilhadas pela comunidade Mulher Tech Sim Senhor.
          </p>
        </div>
        <button
          onClick={() => { setFormAberto(!formAberto); setEnviado(false); }}
          className="btn btn-coral"
          style={{ fontSize: 14, padding: "12px 22px", flexShrink: 0 }}
        >
          {formAberto ? "Cancelar" : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Publicar vaga
            </>
          )}
        </button>
      </div>

      {/* Confirmation banner */}
      {enviado && (
        <div style={{
          background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 12,
          padding: "14px 20px", marginBottom: 24,
          fontSize: 14, color: "#15803D", display: "flex", alignItems: "center", gap: 10,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          Vaga enviada! Ela ficará visível para a comunidade após aprovação da administração.
        </div>
      )}

      {/* Submission form */}
      {formAberto && (
        <div style={{
          background: "white", borderRadius: 20, border: "1px solid var(--cream-200)",
          padding: "32px", marginBottom: 36,
        }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "var(--ink-900)", marginBottom: 24 }}>
            Nova oportunidade
          </div>
          <form onSubmit={handleSubmit}>
            <div className="vaga-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
              <div className="field">
                <label htmlFor="v-cargo">Cargo / título da vaga *</label>
                <input id="v-cargo" required placeholder="Ex: Engenheira de Software Pleno"
                  value={form.cargo} onChange={(e) => setField("cargo", e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="v-empresa">Empresa *</label>
                <input id="v-empresa" required placeholder="Nome da empresa"
                  value={form.empresa} onChange={(e) => setField("empresa", e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="v-local">Local *</label>
                <input id="v-local" required placeholder="Ex: Remoto, Brasil · João Pessoa, PB"
                  value={form.local} onChange={(e) => setField("local", e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="v-tipo">Modalidade *</label>
                <select id="v-tipo" required value={form.tipo} onChange={(e) => setField("tipo", e.target.value)}>
                  <option value="">Selecione...</option>
                  <option>Remoto</option>
                  <option>Híbrido</option>
                  <option>Presencial</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="v-area">Área *</label>
                <select id="v-area" required value={form.area} onChange={(e) => setField("area", e.target.value)}>
                  <option value="">Selecione...</option>
                  <option>Engenharia de Software</option>
                  <option>Dados / IA / ML</option>
                  <option>Cloud / DevOps / Infra</option>
                  <option>Produto / Design / UX</option>
                  <option>Segurança</option>
                  <option>QA / Testes</option>
                  <option>Outra</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="v-nivel">Nível *</label>
                <select id="v-nivel" required value={form.nivel} onChange={(e) => setField("nivel", e.target.value)}>
                  <option value="">Selecione...</option>
                  <option>Estágio</option>
                  <option>Júnior</option>
                  <option>Pleno</option>
                  <option>Sênior</option>
                  <option>Júnior/Pleno</option>
                  <option>Pleno/Sênior</option>
                  <option>Liderança</option>
                </select>
              </div>
              <div className="field" style={{ gridColumn: "1 / -1" }}>
                <label htmlFor="v-descricao">Descrição *</label>
                <textarea id="v-descricao" required rows={3}
                  placeholder="Resumo das responsabilidades, requisitos principais e diferenciais da vaga."
                  value={form.descricao} onChange={(e) => setField("descricao", e.target.value)} />
              </div>
              <div className="field" style={{ gridColumn: "1 / -1" }}>
                <label htmlFor="v-link">Link para candidatura *</label>
                <input id="v-link" required type="url" placeholder="https://..."
                  value={form.link} onChange={(e) => setField("link", e.target.value)} />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
              <button type="button" onClick={() => setFormAberto(false)} className="btn btn-ghost" style={{ fontSize: 14 }}>
                Cancelar
              </button>
              <button type="submit" disabled={enviando} className="btn btn-coral"
                style={{ fontSize: 14, opacity: enviando ? 0.7 : 1 }}>
                {enviando ? "Enviando…" : "Enviar para aprovação"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Minhas publicações */}
      {minhasVagas.length > 0 && (
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 13, fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-500)", marginBottom: 14 }}>
            Minhas publicações
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {minhasVagas.map((o) => (
              <VagaCard key={o.id} o={o} mostrarStatus />
            ))}
          </div>
          <div style={{ height: 1, background: "var(--cream-200)", margin: "36px 0 0" }} />
        </div>
      )}

      {/* Filters */}
      <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap", marginTop: minhasVagas.length > 0 ? 28 : 0 }}>
        {TIPOS.map((t) => (
          <button
            key={t}
            onClick={() => setFiltro(t)}
            style={{
              padding: "8px 18px", borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: "pointer",
              border: filtro === t ? "2px solid var(--teal-600)" : "1.5px solid var(--cream-200)",
              background: filtro === t ? "var(--teal-600)" : "white",
              color: filtro === t ? "white" : "var(--ink-700)",
              transition: "all 0.15s",
            }}
          >
            {t}
          </button>
        ))}
        <span style={{ fontSize: 13, color: "var(--ink-300)", alignSelf: "center", marginLeft: "auto" }}>
          {visíveis.length} vaga{visíveis.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Approved list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {visíveis.map((o) => (
          <VagaCard key={o.id} o={o} />
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .vaga-grid { grid-template-columns: 1fr !important; }
          .vaga-grid .field { grid-column: 1 !important; }
        }
      `}</style>
    </div>
  );
}
