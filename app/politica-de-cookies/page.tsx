import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Cookies — Mulher Tech Sim Senhor",
  description: "Como usamos cookies e como você pode gerenciá-los.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--ink-900)", marginBottom: 16 }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-700)", marginBottom: 12 }}>{children}</p>;
}

type CookieRow = { nome: string; tipo: string; finalidade: string; duracao: string };

function CookieTable({ rows }: { rows: CookieRow[] }) {
  return (
    <div style={{ overflowX: "auto", marginBottom: 16 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
        <thead>
          <tr style={{ background: "var(--cream-100)" }}>
            {["Nome", "Tipo", "Finalidade", "Duração"].map((h) => (
              <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, color: "var(--ink-700)", borderBottom: "1px solid var(--cream-200)" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: "1px solid var(--cream-200)" }}>
              <td style={{ padding: "10px 14px", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--ink-900)" }}>{r.nome}</td>
              <td style={{ padding: "10px 14px" }}>
                <span style={{
                  display: "inline-block", padding: "2px 8px", borderRadius: 4, fontSize: 11,
                  fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.06em",
                  background: r.tipo === "Essencial" ? "rgba(92,160,148,0.15)" : "rgba(226,72,122,0.1)",
                  color: r.tipo === "Essencial" ? "var(--teal-600)" : "var(--coral-500)",
                }}>
                  {r.tipo}
                </span>
              </td>
              <td style={{ padding: "10px 14px", color: "var(--ink-700)" }}>{r.finalidade}</td>
              <td style={{ padding: "10px 14px", color: "var(--ink-500)", fontSize: 13 }}>{r.duracao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PoliticaDeCookiesPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--cream-50)", flex: 1 }}>
        {/* Hero */}
        <div style={{ background: "var(--teal-700)", padding: "72px 32px 64px", position: "relative", overflow: "hidden" }}>
          <div aria-hidden style={{
            position: "absolute", top: -80, right: -80, width: 260, height: 260,
            borderRadius: "50%", background: "var(--orange-500)", opacity: 0.15, filter: "blur(40px)",
          }} />
          <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>TRANSPARÊNCIA</div>
            <h1 className="display" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "white", lineHeight: 0.98, marginBottom: 16 }}>
              Política de Cookies
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
              O que são cookies, quais usamos e como você pode gerenciá-los. Última atualização: junho de 2026.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 32px 100px" }}>

          <Section title="O que são cookies?">
            <P>
              Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita
              um site. Eles permitem que o site lembre suas preferências, mantenha sessões ativas e
              colete informações sobre como o site é usado.
            </P>
          </Section>

          <Section title="Cookies que usamos">
            <CookieTable rows={[
              {
                nome: "mtss_auth",
                tipo: "Essencial",
                finalidade: "Mantém sua sessão ativa na área de associadas (token de autenticação)",
                duracao: "Sessão / até logout",
              },
              {
                nome: "mtss_cookie_consent",
                tipo: "Essencial",
                finalidade: "Armazena sua escolha sobre o uso de cookies para não exibir o aviso repetidamente",
                duracao: "12 meses",
              },
              {
                nome: "_ga, _ga_*",
                tipo: "Analítico",
                finalidade: "Google Analytics — contagem de visitantes e análise de uso do site (dados anonimizados)",
                duracao: "13 meses",
              },
              {
                nome: "_gid",
                tipo: "Analítico",
                finalidade: "Google Analytics — distingue usuários em um período de 24 horas",
                duracao: "24 horas",
              },
            ]} />
            <P>
              Cookies essenciais são necessários para o funcionamento básico do site e não podem ser
              desativados. Cookies analíticos só são ativados com o seu consentimento.
            </P>
          </Section>

          <Section title="Como gerenciar seus cookies">
            <P>
              Você pode gerenciar suas preferências de cookies de duas formas:
            </P>
            <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
              <li style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-700)", marginBottom: 8 }}>
                <strong>Pelo aviso do site:</strong> ao acessar o site pela primeira vez (ou após limpar os dados
                do navegador), o banner de cookies permite que você aceite todos ou somente os essenciais.
              </li>
              <li style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-700)", marginBottom: 8 }}>
                <strong>Pelo navegador:</strong> a maioria dos navegadores permite bloquear ou excluir cookies
                nas configurações. Consulte a ajuda do seu navegador:
              </li>
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 16 }}>
              {[
                { label: "Google Chrome", href: "https://support.google.com/chrome/answer/95647" },
                { label: "Firefox", href: "https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-armazenamento-local-de-s" },
                { label: "Safari", href: "https://support.apple.com/pt-br/guide/safari/sfri11471/mac" },
                { label: "Edge", href: "https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
              ].map((b) => (
                <a key={b.label} href={b.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600,
                    background: "white", border: "1px solid var(--cream-200)",
                    color: "var(--teal-600)", textDecoration: "none",
                  }}>
                  {b.label}
                </a>
              ))}
            </div>
            <P>
              Atenção: desativar cookies essenciais pode impedir o acesso à área de associadas.
            </P>
          </Section>

          <Section title="Cookies de terceiros">
            <P>
              Utilizamos o Google Analytics para analisar o uso do site. Esse serviço é operado pela
              Google LLC e possui sua própria política de privacidade. Você pode opt-out do Google
              Analytics instalando o{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--coral-500)" }}>
                add-on de desativação do GA
              </a>.
            </P>
          </Section>

          <Section title="Mais informações">
            <P>
              Para dúvidas sobre cookies ou sobre como tratamos seus dados, consulte nossa{" "}
              <a href="/politica-de-privacidade" style={{ color: "var(--coral-500)" }}>
                Política de Privacidade
              </a>{" "}
              ou entre em contato em{" "}
              <a href="mailto:mulhertechsimsr@gmail.com" style={{ color: "var(--coral-500)" }}>
                mulhertechsimsr@gmail.com
              </a>.
            </P>
          </Section>

        </div>
      </main>
      <Footer />
    </>
  );
}
