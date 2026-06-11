import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade — Mulher Tech Sim Senhor",
  description: "Como coletamos, usamos e protegemos seus dados em conformidade com a LGPD.",
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

function Table({ rows }: { rows: [string, string, string][] }) {
  return (
    <div style={{ overflowX: "auto", marginBottom: 16 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
        <thead>
          <tr style={{ background: "var(--cream-100)" }}>
            {["Dado", "Finalidade", "Base legal (LGPD)"].map((h) => (
              <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, color: "var(--ink-700)", borderBottom: "1px solid var(--cream-200)" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([dado, fim, base], i) => (
            <tr key={i} style={{ borderBottom: "1px solid var(--cream-200)" }}>
              <td style={{ padding: "10px 14px", color: "var(--ink-900)", fontWeight: 500 }}>{dado}</td>
              <td style={{ padding: "10px 14px", color: "var(--ink-700)" }}>{fim}</td>
              <td style={{ padding: "10px 14px", color: "var(--ink-500)", fontSize: 13 }}>{base}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--cream-50)", flex: 1 }}>
        {/* Hero */}
        <div style={{ background: "var(--teal-700)", padding: "72px 32px 64px", position: "relative", overflow: "hidden" }}>
          <div aria-hidden style={{
            position: "absolute", bottom: -80, left: -80, width: 280, height: 280,
            borderRadius: "50%", background: "var(--teal-400)", opacity: 0.2, filter: "blur(40px)",
          }} />
          <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>LGPD · LEI 13.709/2018</div>
            <h1 className="display" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "white", lineHeight: 0.98, marginBottom: 16 }}>
              Política de Privacidade
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
              Transparência sobre como coletamos e usamos seus dados. Última atualização: junho de 2026.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 32px 100px" }}>

          <Section title="Quem somos (controlador)">
            <P>
              <strong>Associação Mulher Tech Sim Senhor</strong><br />
              CNPJ: 58.178.383/0001-72<br />
              Sede: João Pessoa, PB — Brasil<br />
              E-mail de contato:{" "}
              <a href="mailto:mulhertechsimsr@gmail.com" style={{ color: "var(--coral-500)" }}>
                mulhertechsimsr@gmail.com
              </a>
            </P>
            <P>
              Somos uma associação sem fins lucrativos. Esta política explica como tratamos seus dados
              pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).
            </P>
          </Section>

          <Section title="Dados que coletamos e por quê">
            <Table rows={[
              ["Nome completo e apelido", "Identificação e personalização", "Execução de contrato / Legítimo interesse"],
              ["E-mail", "Comunicação e acesso à área de associadas", "Execução de contrato"],
              ["WhatsApp", "Comunicação sobre eventos e comunidade", "Consentimento"],
              ["CPF", "Identificação legal para carteirinha oficial", "Execução de contrato"],
              ["Data de nascimento", "Perfil demográfico e censo da comunidade", "Consentimento"],
              ["Cidade e estado", "Análise geográfica da comunidade", "Consentimento / Legítimo interesse"],
              ["Faixa etária", "Perfil demográfico e censo", "Consentimento"],
              ["Raça/Cor, gênero, PcD", "Censo de diversidade — nunca divulgados individualmente", "Consentimento explícito"],
              ["Formação e carreira", "Censo e personalização de conteúdo", "Consentimento"],
              ["Faixa salarial", "Censo anônimo de gap salarial em tech", "Consentimento explícito"],
              ["Dados de navegação (cookies)", "Funcionamento do site e análise de uso", "Consentimento / Legítimo interesse"],
            ]} />
          </Section>

          <Section title="Com quem compartilhamos">
            <P>
              <strong>Não vendemos seus dados.</strong> Podemos compartilhá-los apenas com:
            </P>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              {[
                "Prestadores de serviço técnico (hospedagem, e-mail transacional) — apenas o mínimo necessário.",
                "Autoridades públicas, quando exigido por lei.",
                "Parceiros, somente com seu consentimento expresso e apenas para fins específicos informados no momento.",
              ].map((item, i) => (
                <li key={i} style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-700)", marginBottom: 6 }}>{item}</li>
              ))}
            </ul>
            <P>
              Dados de diversidade (raça/cor, identidade de gênero, PcD, faixa salarial) são utilizados
              exclusivamente de forma <strong>agregada e anônima</strong> em relatórios de censo da comunidade.
            </P>
          </Section>

          <Section title="Por quanto tempo guardamos seus dados">
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              {[
                "Dados de associada ativa: enquanto a associação estiver ativa ou até você solicitar exclusão.",
                "Dados de diversidade: anonimizados após 12 meses da coleta.",
                "Logs de acesso: até 6 meses (obrigação legal — Marco Civil da Internet).",
                "Dados de cookies analíticos: até 13 meses.",
              ].map((item, i) => (
                <li key={i} style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-700)", marginBottom: 6 }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Seus direitos (LGPD — Art. 18)">
            <P>Você tem direito a:</P>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              {[
                "Confirmar a existência do tratamento dos seus dados.",
                "Acessar os dados que temos sobre você.",
                "Corrigir dados incompletos, inexatos ou desatualizados.",
                "Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.",
                "Solicitar a portabilidade dos seus dados.",
                "Revogar o consentimento a qualquer momento.",
                "Solicitar a exclusão completa da sua conta e dados.",
              ].map((item, i) => (
                <li key={i} style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-700)", marginBottom: 6 }}>{item}</li>
              ))}
            </ul>
            <P>
              Para exercer qualquer direito, envie um e-mail para{" "}
              <a href="mailto:mulhertechsimsr@gmail.com" style={{ color: "var(--coral-500)" }}>
                mulhertechsimsr@gmail.com
              </a>{" "}
              com o assunto <strong>"Direitos LGPD"</strong>. Respondemos em até 15 dias úteis.
            </P>
          </Section>

          <Section title="Segurança">
            <P>
              Adotamos medidas técnicas e organizacionais para proteger seus dados: comunicação
              criptografada (HTTPS/TLS), senhas armazenadas com hash seguro, acesso restrito por
              funções e monitoramento de acessos suspeitos.
            </P>
            <P>
              Em caso de incidente de segurança que possa afetar seus dados, notificaremos você e a
              ANPD (Autoridade Nacional de Proteção de Dados) nos prazos previstos pela LGPD.
            </P>
          </Section>

          <Section title="Cookies">
            <P>
              Utilizamos cookies para o funcionamento do site e análise de uso. Consulte nossa{" "}
              <a href="/politica-de-cookies" style={{ color: "var(--coral-500)" }}>
                Política de Cookies
              </a>{" "}
              para mais detalhes.
            </P>
          </Section>

          <Section title="Alterações nesta política">
            <P>
              Podemos atualizar esta política periodicamente. Quando fizermos alterações relevantes,
              notificaremos as associadas por e-mail ou via aviso na área de associadas.
              A data de revisão no topo deste documento sempre refletirá a versão atual.
            </P>
          </Section>

        </div>
      </main>
      <Footer />
    </>
  );
}
