"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";

// TODO: adicione as fotos em public/equipe/ com os nomes abaixo
// Formatos aceitos: .jpg, .jpeg, .png ou .webp
const TEAM = [
  { role: "Presidência",    name: "Vanessa Dantas",    photo: "/equipe/vanessa-dantas.jpg",    highlight: true  },
  { role: "Vice-Presidência", name: "Nicoly Almeida",  photo: "/equipe/nicoly-almeida.jpg",    highlight: false },
  { role: "1ª Secretaria",  name: "Cleonice Celestino",photo: "/equipe/cleonice-celestino.jpg",highlight: false },
  { role: "2ª Secretaria",  name: "Laryssa Farias",    photo: "/equipe/laryssa-farias.jpg",    highlight: false },
  { role: "Tesouraria",     name: "Mariana Linhares",  photo: "/equipe/mariana-linhares.jpg",  highlight: false },
  { role: "Diretoria",      name: "Julyana Alencar",   photo: "/equipe/julyana-alencar.jpg",   highlight: false },
  { role: "Diretoria",      name: "Sáskya Gurgel",     photo: "/equipe/saskya-gurgel.jpg",     highlight: false },
  { role: "Diretoria",      name: "Raissa Melo",       photo: "/equipe/raissa-melo.jpg",       highlight: false },
  { role: "Diretoria",      name: "Liliane",            photo: "/equipe/liliane.jpg",           highlight: false },
  { role: "Diretoria",      name: "Bianca Melo",       photo: "/equipe/bianca-melo.jpg",       highlight: false },
];

function MemberPhoto({
  src,
  name,
  highlight,
}: {
  src: string;
  name: string;
  highlight: boolean;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="img-placeholder img-placeholder-dark"
        style={{
          height: 160,
          borderRadius: 12,
          marginBottom: 16,
          background: highlight ? "rgba(255,255,255,0.18)" : undefined,
        }}
      >
        foto
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        height: 160,
        borderRadius: 12,
        marginBottom: 16,
        overflow: "hidden",
      }}
    >
      <Image
        src={src}
        alt={name}
        fill
        style={{ objectFit: "cover", objectPosition: "center top" }}
        onError={() => setError(true)}
        sizes="(max-width: 600px) 50vw, (max-width: 1100px) 25vw, 20vw"
      />
    </div>
  );
}

export function Equipe() {
  return (
    <section
      id="equipe"
      style={{
        background: "var(--teal-700)",
        color: "white",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative rings */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.1)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.08)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px", position: "relative" }}
      >
        <SectionHeader
          eyebrow="QUEM CONDUZ"
          title="A diretoria que tira tudo do papel."
          subtitle="Dez mulheres da própria comunidade que dedicam seu tempo para que a associação exista — cinco em cargos estatutários e cinco na diretoria."
          dark
        />

        <div
          className="equipe-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}
        >
          {TEAM.map((t, i) => (
            <div
              key={i}
              style={{
                background: t.highlight ? "var(--coral-500)" : "rgba(255,255,255,0.04)",
                border: t.highlight ? "none" : "1px solid rgba(255,255,255,0.1)",
                borderRadius: 18,
                padding: 24,
                transition: "transform 0.2s",
              }}
            >
              <MemberPhoto src={t.photo} name={t.name} highlight={t.highlight} />
              <div
                className="eyebrow"
                style={{
                  color: t.highlight ? "rgba(255,255,255,0.9)" : "var(--coral-400)",
                  marginBottom: 6,
                }}
              >
                {t.role}
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "white" }}>
                {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .equipe-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 800px) {
          .equipe-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .equipe-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
