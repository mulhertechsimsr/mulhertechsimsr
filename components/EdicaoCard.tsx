"use client";

import { useState, useEffect } from "react";
import { EDICAO_URL } from "@/lib/config";
import type { Edition } from "@/lib/editions";

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.88)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24, cursor: "zoom-out",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "100%", maxHeight: "90vh",
          borderRadius: 12, cursor: "default",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
        }}
      />
      <button
        onClick={onClose}
        aria-label="Fechar"
        style={{
          position: "fixed", top: 20, right: 20,
          width: 40, height: 40, borderRadius: "50%",
          background: "rgba(255,255,255,0.15)", border: "none",
          color: "white", fontSize: 20, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          backdropFilter: "blur(4px)",
        }}
      >
        ×
      </button>
    </div>
  );
}

export function EdicaoCard({
  edition: e,
  imageHeight = 240,
}: {
  edition: Edition;
  imageHeight?: number;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const Wrapper = e.current ? "a" : "div";
  const wrapperProps = e.current
    ? { href: EDICAO_URL, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <>
      <Wrapper
        {...(wrapperProps as Record<string, string>)}
        style={{
          background: "white",
          borderRadius: 20,
          border: e.current ? "2px solid var(--orange-500)" : "1px solid var(--cream-200)",
          overflow: "hidden",
          cursor: e.current ? "pointer" : e.photo ? "zoom-in" : "default",
          display: "block",
          textDecoration: "none",
          transition: "transform 0.2s, box-shadow 0.2s",
          boxShadow: e.current ? "0 8px 32px -8px rgba(240,132,74,0.30)" : undefined,
        }}
        onMouseEnter={(ev: React.MouseEvent<HTMLElement>) => {
          (ev.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
          (ev.currentTarget as HTMLElement).style.boxShadow = e.current
            ? "0 16px 48px -12px rgba(240,132,74,0.42)"
            : "0 12px 36px -8px rgba(0,0,0,0.14)";
        }}
        onMouseLeave={(ev: React.MouseEvent<HTMLElement>) => {
          (ev.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (ev.currentTarget as HTMLElement).style.boxShadow = e.current
            ? "0 8px 32px -8px rgba(240,132,74,0.30)"
            : "none";
        }}
      >
        {/* Image area */}
        <div
          onClick={e.photo && !e.current ? () => setLightboxOpen(true) : undefined}
          style={{
            position: "relative",
            height: imageHeight,
            background: `linear-gradient(135deg, ${e.color}, rgba(0,0,0,0.2))`,
            overflow: "hidden",
          }}
        >
          {e.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={e.photo}
              alt={`MTSS ${e.year}`}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          ) : (
            <div
              className="img-placeholder img-placeholder-dark"
              style={{ height: "100%", borderRadius: 0 }}
            >
              foto · MTSS {e.year}
            </div>
          )}

          {/* Gradient overlay so the number is always legible */}
          {e.photo && (
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)",
              pointerEvents: "none",
            }} />
          )}

          {/* Large edition number */}
          <div
            className="display"
            style={{
              position: "absolute",
              bottom: 16,
              left: 20,
              fontSize: "clamp(60px, 8vw, 88px)",
              color: "white",
              lineHeight: 0.9,
              pointerEvents: "none",
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
            }}
          >
            {e.n}
          </div>

          {/* "Em destaque" pill */}
          {e.current && (
            <div
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                borderRadius: 999,
                background: "white",
                color: "var(--orange-500)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--orange-500)",
                  flexShrink: 0,
                }}
              />
              Em destaque
            </div>
          )}
        </div>

        {/* Card footer */}
        <div
          style={{
            padding: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div className="eyebrow" style={{ color: "var(--ink-500)", marginBottom: 6 }}>
              {e.theme ? `${e.year} · TEMA` : e.year}
            </div>
            {e.theme && (
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: e.current ? "var(--orange-500)" : "var(--ink-900)",
                }}
              >
                {e.theme}
              </div>
            )}
          </div>
          {e.current && <div style={{ fontSize: 22, color: "var(--ink-300)" }}>→</div>}
        </div>
      </Wrapper>

      {lightboxOpen && e.photo && (
        <Lightbox
          src={e.photo}
          alt={`MTSS ${e.year}`}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
