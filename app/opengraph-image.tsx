import { ImageResponse } from "next/og";

export const alt = "Amin FOROUZANDEH — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#101011",
        color: "#f1f1ef",
        display: "flex",
        height: "100%",
        padding: "48px",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "1px solid #3b3b40",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, justifyContent: "space-between", letterSpacing: "0.12em" }}>
          <span>AMIN FOROUZANDEH</span>
          <span>FRONTEND</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 72, fontWeight: 650, letterSpacing: "-4px", lineHeight: 0.95 }}>
            Production frontends
          </span>
          <span style={{ color: "#9f95ff", fontSize: 72, fontWeight: 650, letterSpacing: "-4px", lineHeight: 0.95 }}>
            for real products.
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 22, justifyContent: "space-between" }}>
          <span>React · Next.js · TypeScript</span>
          <span>Isfahan, Iran</span>
        </div>
      </div>
    </div>,
    size,
  );
}
