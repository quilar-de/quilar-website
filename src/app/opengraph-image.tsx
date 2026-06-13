import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
            borderRadius: "2px",
          }}
        />

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: "700",
              color: "#f8fafc",
              letterSpacing: "-2px",
              lineHeight: 1.1,
            }}
          >
            Quilar
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: "400",
              color: "#94a3b8",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}
          >
            3D-Visualisierung &amp; Virtuelle Touren für Immobilien
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "8px",
            }}
          >
            {["HomeTour", "3D-Visualisierung", "Architektur"].map((tag) => (
              <div
                key={tag}
                style={{
                  background: "rgba(99, 102, 241, 0.15)",
                  border: "1px solid rgba(99, 102, 241, 0.4)",
                  borderRadius: "999px",
                  padding: "8px 20px",
                  fontSize: "16px",
                  color: "#a5b4fc",
                  fontWeight: "500",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            fontSize: "18px",
            color: "#475569",
            fontWeight: "500",
          }}
        >
          kila.de
        </div>
      </div>
    ),
    { ...size }
  );
}
