import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Código de Conduta — Mulher Tech Sim Senhor",
  description: "Nosso compromisso com um espaço seguro, inclusivo e respeitoso para todas.",
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

function Ul({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-700)", marginBottom: 6 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function CodigoDeCondutaPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--cream-50)", flex: 1 }}>
        {/* Hero */}
        <div style={{ background: "var(--teal-700)", padding: "72px 32px 64px", position: "relative", overflow: "hidden" }}>
          <div aria-hidden style={{
            position: "absolute", top: -80, right: -80, width: 300, height: 300,
            borderRadius: "50%", background: "var(--coral-500)", opacity: 0.12, filter: "blur(40px)",
          }} />
          <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>COMUNIDADE MTSS</div>
            <h1 className="display" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "white", lineHeight: 0.98, marginBottom: 16 }}>
              Código de Conduta
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
              O MTSS é um espaço construído por mulheres, para mulheres. Este código define como cuidamos umas das outras.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 32px 100px" }}>

          <Section title="Nosso compromisso">
            <P>
              A Associação Mulher Tech Sim Senhor tem o compromisso de proporcionar um ambiente livre de assédio,
              discriminação e qualquer forma de violência para todas as participantes — independentemente de identidade
              de gênero, orientação sexual, raça, etnia, religião, deficiência, aparência física, idade ou nível
              de experiência profissional.
            </P>
            <P>
              Este código se aplica a todos os espaços da comunidade: evento presencial, grupos de WhatsApp,
              redes sociais, fóruns online, carteirinha digital e qualquer outro canal oficial do MTSS.
            </P>
          </Section>

          <Section title="Comportamentos esperados">
            <P>Esperamos de todas as participantes:</P>
            <Ul items={[
              "Tratar todas as pessoas com respeito, empatia e cordialidade.",
              "Usar linguagem acolhedora e inclusiva — respeitar pronomes e nomes sociais.",
              "Aceitar críticas construtivas com abertura.",
              "Priorizar o bem-estar coletivo da comunidade.",
              "Ser solidária com quem está começando ou em transição de carreira.",
              "Respeitar os limites e a privacidade das demais participantes.",
              "Comunicar conflitos ou desconfortos pelos canais indicados, sem escalada pública.",
            ]} />
          </Section>

          <Section title="Comportamentos inaceitáveis">
            <P>São consideradas violações deste código:</P>
            <Ul items={[
              "Assédio de qualquer natureza: comentários ofensivos, piadas discriminatórias, linguagem sexualizada.",
              "Ataques pessoais, insultos ou perseguição (online ou presencial).",
              "Publicação de informações privadas de terceiros sem consentimento (doxing).",
              "Interrupção deliberada e repetida de apresentações, conversas ou atividades.",
              "Contato físico ou atenção sexual não solicitada.",
              "Discriminação com base em raça, gênero, classe social, religião, deficiência, orientação sexual ou qualquer outra característica.",
              "Qualquer comportamento que crie um ambiente hostil ou intimidador.",
            ]} />
          </Section>

          <Section title="Consequências">
            <P>
              Quem violar este código poderá sofrer as seguintes consequências, a critério da equipe organizadora:
            </P>
            <Ul items={[
              "Aviso formal e solicitação de mudança de comportamento.",
              "Remoção temporária de espaços da comunidade.",
              "Banimento permanente de todos os canais e eventos do MTSS.",
              "Comunicação às autoridades competentes em casos de violação da lei.",
            ]} />
          </Section>

          <Section title="Como denunciar">
            <P>
              Se você testemunhar ou sofrer um comportamento que viole este código, entre em contato com a equipe
              organizadora pelo e-mail{" "}
              <a href="mailto:mulhertechsimsr@gmail.com" style={{ color: "var(--coral-500)" }}>
                mulhertechsimsr@gmail.com
              </a>{" "}
              com o assunto <strong>"Código de Conduta"</strong>.
            </P>
            <P>
              Todas as denúncias serão tratadas com confidencialidade e respeito. Nunca haverá retaliação
              contra quem denunciar de boa-fé.
            </P>
          </Section>

          <Section title="Atribuição">
            <P>
              Este Código de Conduta é inspirado no{" "}
              <a href="https://www.contributor-covenant.org" target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--coral-500)" }}>
                Contributor Covenant
              </a>{" "}
              e adaptado para a realidade da comunidade Mulher Tech Sim Senhor.
              Última revisão: junho de 2026.
            </P>
          </Section>

        </div>
      </main>
      <Footer />
    </>
  );
}
