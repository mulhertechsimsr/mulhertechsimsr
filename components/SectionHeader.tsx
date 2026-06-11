interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  dark = false,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      style={{
        textAlign: align,
        marginBottom: 56,
        maxWidth: align === "center" ? 720 : 800,
        marginLeft: align === "center" ? "auto" : 0,
        marginRight: align === "center" ? "auto" : 0,
      }}
    >
      <div
        className="eyebrow"
        style={{
          color: dark ? "var(--coral-400)" : "var(--coral-500)",
          marginBottom: 16,
        }}
      >
        {eyebrow}
      </div>
      <h2
        className="display"
        style={{
          fontSize: "clamp(36px, 5vw, 56px)",
          color: dark ? "white" : "var(--ink-900)",
          marginBottom: subtitle ? 20 : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.5,
            color: dark ? "rgba(255,255,255,0.7)" : "var(--ink-500)",
            maxWidth: 650,
            marginLeft: align === "center" ? "auto" : 0,
            marginRight: align === "center" ? "auto" : 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
