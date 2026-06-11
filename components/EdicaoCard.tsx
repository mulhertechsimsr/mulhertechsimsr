"use client";

import { EDICAO_URL } from "@/lib/config";
import type { Edition } from "@/lib/editions";

export function EdicaoCard({
  edition: e,
  imageHeight = 240,
}: {
  edition: Edition;
  imageHeight?: number;
}) {
  const Wrapper = e.current ? "a" : "div";
  const wrapperProps = e.current
    ? { href: EDICAO_URL, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...(wrapperProps as Record<string, string>)}
      style={{
        background: "white",
        borderRadius: 20,
        border: e.current ? "2px solid var(--orange-500)" : "1px solid var(--cream-200)",
        overflow: "hidden",
        cursor: e.current ? "pointer" : "default",
        display: "block",
        textDecoration: "none",
        transition: e.current ? "transform 0.2s, box-shadow 0.2s" : undefined,
        boxShadow: e.current ? "0 8px 32px -8px rgba(240,132,74,0.30)" : undefined,
      }}
      onMouseEnter={(ev: React.MouseEvent<HTMLElement>) => {
        if (e.current) {
          (ev.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
          (ev.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px -12px rgba(240,132,74,0.42)";
        }
      }}
      onMouseLeave={(ev: React.MouseEvent<HTMLElement>) => {
        if (e.current) {
          (ev.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (ev.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px -8px rgba(240,132,74,0.30)";
        }
      }}
    >
      {/* Image area */}
      <div
        style={{
          position: "relative",
          height: imageHeight,
          background: `linear-gradient(135deg, ${e.color}, rgba(0,0,0,0.2))`,
          overflow: "hidden",
        }}
      >
        <div
          className="img-placeholder img-placeholder-dark"
          style={{ height: "100%", borderRadius: 0 }}
        >
          foto · MTSS {e.year}
        </div>

        {/* Large edition number */}
        <div
          className="display"
          style={{
            position: "absolute",
            bottom: 16,
            left: 20,
            fontSize: "clamp(60px, 8vw, 88px)",
            color: "rgba(255,255,255,0.95)",
            lineHeight: 0.9,
            pointerEvents: "none",
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
            {e.theme ? `${e.year}` : e.year}
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
  );
}
