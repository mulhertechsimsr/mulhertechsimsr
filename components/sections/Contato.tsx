"use client";

import { useState, FormEvent } from "react";

const CONTACT_INFO = [
  { label: "EMAIL", value: "mulhertechsimsr@gmail.com" },
  { label: "INSTAGRAM", value: "@mulhertechsimsenhor" },
  { label: "SEDE", value: "João Pessoa, PB" },
  { label: "PRÓXIMA EDIÇÃO", value: "11ª edição · 01 de agosto de 2026" },
];

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        paddingBottom: 16,
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="eyebrow" style={{ color: "var(--ink-300)", marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ fontSize: 17, fontWeight: 600, color: "white" }}>{value}</div>
    </div>
  );
}

export function Contato() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: connect to API route / email service / CRM
    alert("Mensagem enviada! Em breve entraremos em contato.");
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <section
      id="contato"
      style={{ background: "var(--teal-700)", color: "white", padding: "100px 0" }}
    >
      <div
        className="contato-grid"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Left: contact info */}
        <div>
          <div className="eyebrow" style={{ color: "var(--coral-400)", marginBottom: 16 }}>
            FALE COM A GENTE
          </div>
          <h2
            className="display"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "white",
              marginBottom: 24,
            }}
          >
            Parceria, imprensa, dúvida?
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.65)",
              marginBottom: 40,
              maxWidth: 480,
            }}
          >
            Respondemos em até 3 dias úteis. Patrocínio para a 11ª edição? Use o assunto
            "Patrocínio · 11ª edição".
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {CONTACT_INFO.map((c) => (
              <ContactRow key={c.label} label={c.label} value={c.value} />
            ))}
          </div>
        </div>

        {/* Right: contact form */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 24,
            padding: 36,
          }}
        >
          <h3 style={{ fontSize: 22, fontWeight: 700, color: "white", marginBottom: 24 }}>
            Envie uma mensagem
          </h3>
          <form
            onSubmit={handleSubmit}
            className="field-dark"
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <div className="field">
              <label htmlFor="contato-nome">Nome</label>
              <input
                id="contato-nome"
                placeholder="Seu nome completo"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="contato-email">Email</label>
              <input
                id="contato-email"
                type="email"
                placeholder="email@exemplo.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="contato-assunto">Assunto</label>
              <select
                id="contato-assunto"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              >
                <option value="">Selecione...</option>
                <option>Patrocínio · 11ª edição</option>
                <option>Imprensa</option>
                <option>Parceria</option>
                <option>Outro</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="contato-mensagem">Mensagem</label>
              <textarea
                id="contato-mensagem"
                rows={4}
                placeholder="Conta pra gente..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="btn btn-coral"
              style={{ justifyContent: "center", marginTop: 6 }}
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contato-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
