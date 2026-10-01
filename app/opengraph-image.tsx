import { ImageResponse } from "next/og";
export const alt =
  "Dekker Auto Clinic — Bodywork with care. Paintwork with character.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "65px 80px",
        background: "#07055a",
        color: "#ffffff",
      }}
    >
      <div style={{ display: "flex", fontSize: 24, letterSpacing: 5 }}>
        DEKKER AUTO CLINIC · NAIROBI
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 86,
          fontWeight: 700,
          lineHeight: 1.05,
        }}
      >
        <span>Back to beautiful.</span>
        <span style={{ color: "#e87bb8" }}>Beyond repair.</span>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "2px solid #d03a8a",
          paddingTop: 25,
          fontSize: 23,
        }}
      >
        BODY REPAIR · PAINT · DETAILING
      </div>
    </div>,
    size,
  );
}
