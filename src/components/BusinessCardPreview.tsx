import type { CardData } from "@/lib/businessCardPdf";

// 85×55 mm card rendered at ~4.6 px/mm
const SCALE = 4.6;
const W = 85 * SCALE;
const H = 55 * SCALE;

export function CardFront({ data }: { data: CardData }) {
  const pairs = (
    [
      ["Phone", data.phone],
      ["Email", data.email],
      ["Website", data.web],
    ] as [string, string][]
  ).filter(([, v]) => v);

  const addrLines = [data.company, ...(data.address ? [data.address] : [])].filter(
    Boolean
  );

  const fs = (pt: number) => pt * (SCALE / 3.6);

  return (
    <div
      className="relative shrink-0 overflow-hidden"
      style={{
        width: W,
        height: H,
        background: "#050505",
        padding: 4 * SCALE,
        boxShadow: "0 20px 60px -20px rgba(0,0,0,0.7)",
      }}
    >
      {/* Logo mark, top-left */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/lunalec-white.svg"
        alt="LunaLEC"
        style={{ width: 9 * SCALE, height: 9 * SCALE }}
      />

      {/* Contact label/value pairs, upper-right */}
      <div
        className="absolute flex flex-col"
        style={{ left: 47 * SCALE, top: 4.5 * SCALE, gap: 2.1 * SCALE, width: 34 * SCALE }}
      >
        {pairs.map(([label, value]) => (
          <div key={label}>
            <div
              style={{ color: "#8a8a8a", fontSize: fs(4.2), letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              {label}
            </div>
            <div className="text-white" style={{ fontSize: fs(6.5), marginTop: 0.3 * SCALE }}>
              {value}
            </div>
          </div>
        ))}
        {addrLines.length > 0 && (
          <div>
            <div style={{ color: "#8a8a8a", fontSize: fs(4.2), letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Address
            </div>
            <div
              className="text-white"
              style={{ fontSize: fs(6.5), marginTop: 0.3 * SCALE, lineHeight: 1.25 }}
            >
              {addrLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Name + title, lower-left */}
      <div className="absolute" style={{ left: 4 * SCALE, bottom: 4 * SCALE, right: 4 * SCALE }}>
        <div
          className="font-medium text-white leading-none"
          style={{ fontSize: fs(12) }}
        >
          {data.name || "Förnamn Efternamn"}
        </div>
        <div
          style={{
            color: "#a8a8a8",
            fontSize: fs(5.5),
            letterSpacing: "0.1em",
            marginTop: 1.2 * SCALE,
          }}
        >
          {(data.title || "TITEL").toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export function CardBack() {
  return (
    <div
      className="relative shrink-0 overflow-hidden flex flex-col items-center justify-center"
      style={{
        width: W,
        height: H,
        background: "#050505",
        boxShadow: "0 20px 60px -20px rgba(0,0,0,0.7)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/lunalec-white.svg"
        alt="LunaLEC"
        style={{ width: 30 * SCALE, height: 30 * SCALE }}
      />
    </div>
  );
}
