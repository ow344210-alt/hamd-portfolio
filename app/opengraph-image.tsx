import { ImageResponse } from "next/og";

export const alt = "Hamd Ali — WordPress Developer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbfaf9",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              background: "#1f5cd6",
              color: "#ffffff",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            HA
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, color: "#10141c" }}>
            Hamd Ali
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              fontSize: 74,
              fontWeight: 800,
              color: "#10141c",
              letterSpacing: "-0.02em",
            }}
          >
            WordPress Developer
          </div>
          <div style={{ fontSize: 32, color: "#5c6572" }}>
            Software Engineering Undergraduate
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              height: 6,
              width: 160,
              background: "#1f5cd6",
              borderRadius: 3,
            }}
          />
          <div style={{ fontSize: 24, color: "#8b93a1" }}>
            Karachi, Pakistan
          </div>
        </div>
      </div>
    ),
    size,
  );
}
