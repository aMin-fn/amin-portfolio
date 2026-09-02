import { ImageResponse } from "next/og";

export const alt = "Amin FOROUZANDEH — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#f1f0e9",
        color: "#171816",
        display: "flex",
        height: "100%",
        padding: "64px",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "2px solid #171816",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, justifyContent: "space-between" }}>
          <span>AMIN FOROUZANDEH</span>
          <span>FRONTEND / 2026</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 93, fontWeight: 650, letterSpacing: "-6px", lineHeight: 0.95 }}>
            Clear, fast products
          </span>
          <span style={{ color: "#6356f6", fontSize: 93, fontWeight: 650, letterSpacing: "-6px", lineHeight: 0.95 }}>
            for real people.
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 22, justifyContent: "space-between" }}>
          <span>React · Next.js · TypeScript</span>
          <span>Isfahan ,  tehran ,  tehran, Iran</span>
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          background: "#dfff56",
          border: "2px solid #171816",
          borderLeft: "0px",
          display: "flex",
          fontSize: 38,
          fontWeight: 750,
          justifyContent: "center",
          width: 128,
        }}
      >
        AF
      </div>
    </div>,
    size,
  );
}
