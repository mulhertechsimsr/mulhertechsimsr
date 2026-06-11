import Image from "next/image";

interface LogoProps {
  size?: number;
  chip?: boolean;
  spinning?: boolean;
}

export function Logo({ size = 56, chip = false, spinning = false }: LogoProps) {
  const pad = chip ? Math.round(size * 0.08) : 0;
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: chip ? "#fff" : "transparent",
        padding: pad,
        boxShadow: chip ? "0 2px 10px rgba(0,0,0,0.12)" : "none",
        flexShrink: 0,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className={spinning ? "animate-spin-slow" : undefined}
        style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden" }}
      >
        <Image
          src="/logo-mtss.png"
          alt="Mulher Tech Sim Senhor"
          width={size}
          height={size}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
          priority
        />
      </div>
    </div>
  );
}

interface WordmarkProps {
  dark?: boolean;
  chip?: boolean;
}

export function Wordmark({ dark = false, chip = false }: WordmarkProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Logo size={44} chip={chip} />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: dark ? "white" : "var(--ink-900)",
          }}
        >
          Mulher Tech
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: dark ? "rgba(255,255,255,0.6)" : "var(--ink-500)",
            marginTop: 4,
          }}
        >
          Sim Senhor · Associação
        </span>
      </div>
    </div>
  );
}
