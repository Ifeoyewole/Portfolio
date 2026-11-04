import { ImageResponse } from "next/og";

export const alt = "OrbitNode — Oyewole Victor Ifeoluwa, Frontend & Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        background: "#111017",
        color: "#F5F0E8",
        padding: "68px 78px",
        fontFamily: "sans-serif",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", right: "-140px", top: "-160px",
          width: "650px", height: "650px",
          border: "2px solid rgba(245,240,232,.27)", borderRadius: "50%"
        }} />
        <div style={{
          position: "absolute", right: "20px", top: "52px",
          width: "450px", height: "450px",
          border: "24px solid rgba(245,240,232,.09)", borderRadius: "50%",
          transform: "rotate(-22deg)"
        }} />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: 66, height: 66, borderRadius: "50%",
            border: "2px solid #F5F0E8",
            fontSize: 30, fontWeight: 800
          }}>OV</div>
          <div style={{ display: "flex", fontWeight: 800, fontSize: 30, letterSpacing: "-.04em" }}>
            ORBITNODE
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 20, letterSpacing: "0.16em", opacity: 0.7 }}>
            DIGITAL CRAFT MEETS ENGINEERING
          </div>
          <div style={{ display: "flex", fontSize: 66, lineHeight: 1.06, letterSpacing: "-.06em", fontWeight: 800 }}>
            Oyewole Victor
          </div>
          <div style={{ display: "flex", fontSize: 66, lineHeight: 1.06, letterSpacing: "-.06em", fontWeight: 800 }}>
            Ifeoluwa.
          </div>
          <div style={{ display: "flex", fontSize: 27, marginTop: 8, opacity: 0.83 }}>
            Frontend & Full-Stack Developer
          </div>
        </div>
        <div style={{
          display: "flex", justifyContent: "space-between",
          fontSize: 20, opacity: 0.67, letterSpacing: "0.05em"
        }}>
          <span>PORTFOLIO · NIGERIA</span>
          <span>OV-ORBITNODE.DEV</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
