// FILE: src/components/Footer.jsx
// REPLACE YOUR ENTIRE Footer.jsx WITH THIS
import { Mail, MapPin } from "lucide-react";

const linkGroups = {
  Services: ["Custom Software", "AI & Machine Learning", "Cloud Infrastructure", "Mobile Apps", "Data Analytics", "Cybersecurity"],
  Company: ["About Us", "Careers", "Blog", "Case Studies", "Press"],
  Resources: ["Documentation", "API Reference", "Community", "Support", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
};

export default function Footer() {
  return (
    <footer
      className="footer-section"
      style={{ position: "relative", overflow: "hidden", paddingTop: 60 }}
    >
      <div
        className="container-x"
        style={{ paddingTop: 40, paddingBottom: 64, position: "relative", zIndex: 3 }}
      >
        <div
          className="footer-links-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            gap: 32,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{
              display: "flex", alignItems: "center", gap: 10, marginBottom: 20,
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: "linear-gradient(135deg, var(--accent), var(--amber))",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{
                  color: "#fff", fontFamily: "var(--serif)",
                  fontSize: 18, fontWeight: 700,
                }}>
                  S
                </span>
              </div>
              <span style={{
                fontFamily: "var(--serif)", fontSize: 22, color: "#fff",
              }}>
                Solven
              </span>
            </div>

            <p style={{
              fontSize: 14, color: "#888", lineHeight: 1.65,
              maxWidth: 260, marginBottom: 24,
            }}>
              Building tomorrow's technology, today. Enterprise-grade solutions for
              businesses ready to transform.
            </p>

            <div style={{
              display: "flex", flexDirection: "column", gap: 8, marginBottom: 24,
            }}>
              <a
                href="mailto:hello@solven.in"
                style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}
              >
                <Mail size={14} /> hello@solven.in
              </a>
              <span style={{
                display: "flex", alignItems: "center", gap: 8,
                fontSize: 13, color: "#888",
              }}>
                <MapPin size={14} /> Bangalore, India
              </span>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              {["X", "LI", "GH", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "#222", border: "1px solid #333",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontFamily: "monospace", color: "#888",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#333";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#222";
                    e.currentTarget.style.color = "#888";
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(linkGroups).map(([heading, items]) => (
            <div key={heading}>
              <h4 style={{
                fontSize: 11, fontWeight: 700, textTransform: "uppercase",
                letterSpacing: "0.12em", color: "#666", marginBottom: 16,
                fontFamily: "var(--sans)",
              }}>
                {heading}
              </h4>
              <ul style={{
                listStyle: "none",
                display: "flex", flexDirection: "column", gap: 10,
              }}>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" style={{ fontSize: 14 }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #2a2a2a" }}>
        <div
          className="container-x"
          style={{
            padding: "20px 0",
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between", gap: 16,
          }}
        >
          <p style={{ fontSize: 13, color: "#555" }}>
            © {new Date().getFullYear()} Solven Technologies Pvt. Ltd. All rights reserved.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
                <span style={{
                  position: "absolute", inset: 0, borderRadius: "50%",
                  background: "#22C55E",
                  animation: "ping 1.5s infinite",
                  opacity: 0.5,
                }} />
                <span style={{
                  position: "relative", width: 8, height: 8,
                  borderRadius: "50%", background: "#22C55E",
                }} />
              </span>
              <span style={{ fontSize: 12, color: "#555" }}>All systems operational</span>
            </div>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{ fontSize: 12, color: "#555" }}
            >
              ↑ Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}