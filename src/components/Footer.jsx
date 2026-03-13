// FILE: src/components/Footer.jsx
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
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: 60,
        /* ── Same diagonal gradient as CTA ── */
        background:
          "linear-gradient(135deg, #00174A 0%, #0B3D91 40%, #2DA7FF 100%)",
      }}
    >
      {/* ── Blob: top-right bright boost ── */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(45, 167, 255, 0.20)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Blob: center mid glow ── */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "40%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "rgba(11, 61, 145, 0.15)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Blob: bottom-left dark anchor ── */}
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(0, 15, 50, 0.40)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Dot grid overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-x"
        style={{
          paddingTop: 40,
          paddingBottom: 64,
          position: "relative",
          zIndex: 3,
        }}
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #0B3D91, #2DA7FF)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                    fontFamily: "var(--serif)",
                    fontSize: 18,
                    fontWeight: 700,
                  }}
                >
                  S
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  color: "#fff",
                }}
              >
                Solven
              </span>
            </div>

            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.50)",
                lineHeight: 1.65,
                maxWidth: 260,
                marginBottom: 24,
              }}
            >
              Building tomorrow's technology, today. Enterprise-grade solutions
              for businesses ready to transform.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginBottom: 24,
              }}
            >
              <a
                href="mailto:hello@solven.in"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                }}
              >
                <Mail size={14} /> hello@solven.in
              </a>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                <MapPin size={14} /> Pune, India
              </span>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              {["X", "LI", "GH", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontFamily: "monospace",
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.12)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.20)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.06)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.10)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.45)";
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
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.40)",
                  marginBottom: 16,
                  fontFamily: "var(--sans)",
                }}
              >
                {heading}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.55)",
                        textDecoration: "none",
                        transition: "color 0.25s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color =
                          "rgba(255,255,255,0.55)";
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="container-x"
          style={{
            padding: "20px 0",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            position: "relative",
            zIndex: 3,
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Solven Technologies Pvt. Ltd. All
            rights reserved.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  position: "relative",
                  display: "inline-flex",
                  width: 8,
                  height: 8,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "#22C55E",
                    animation: "ping 1.5s infinite",
                    opacity: 0.5,
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#22C55E",
                  }}
                />
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                All systems operational
              </span>
            </div>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
                transition: "color 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.35)";
              }}
            >
              ↑ Back to top
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .footer-links-grid > div:first-child {
            grid-column: span 2;
          }
        }
        @media (max-width: 640px) {
          .footer-links-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .footer-links-grid > div:first-child {
            grid-column: span 1;
          }
        }
      `}</style>
    </footer>
  );
}






// FILE: src/components/Footer.jsx

// import { Mail, MapPin } from "lucide-react";

// const linkGroups = {
//   Services: ["Custom Software", "AI & Machine Learning", "Cloud Infrastructure", "Mobile Apps", "Data Analytics", "Cybersecurity"],
//   Company: ["About Us", "Careers", "Blog", "Case Studies", "Press"],
//   Resources: ["Documentation", "API Reference", "Community", "Support", "Status"],
//   Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
// };

// export default function Footer() {
//   return (
//     <footer
//       className="footer-section"
//       style={{ position: "relative", overflow: "hidden", paddingTop: 60 }}
//     >
//       <div
//         className="container-x"
//         style={{ paddingTop: 40, paddingBottom: 64, position: "relative", zIndex: 3 }}
//       >
//         <div
//           className="footer-links-grid"
//           style={{
//             display: "grid",
//             gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
//             gap: 32,
//           }}
//         >
//           {/* Brand */}
//           <div>
//             <div style={{
//               display: "flex", alignItems: "center", gap: 10, marginBottom: 20,
//             }}>
//               <div style={{
//                 width: 38, height: 38, borderRadius: 10,
//                 background: "linear-gradient(135deg, var(--accent), var(--amber))",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//               }}>
//                 <span style={{
//                   color: "#fff", fontFamily: "var(--serif)",
//                   fontSize: 18, fontWeight: 700,
//                 }}>
//                   S
//                 </span>
//               </div>
//               <span style={{
//                 fontFamily: "var(--serif)", fontSize: 22, color: "#fff",
//               }}>
//                 Solven
//               </span>
//             </div>

//             <p style={{
//               fontSize: 14, color: "#888", lineHeight: 1.65,
//               maxWidth: 260, marginBottom: 24,
//             }}>
//               Building tomorrow's technology, today. Enterprise-grade solutions for
//               businesses ready to transform.
//             </p>

//             <div style={{
//               display: "flex", flexDirection: "column", gap: 8, marginBottom: 24,
//             }}>
//               <a
//                 href="mailto:hello@solven.in"
//                 style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}
//               >
//                 <Mail size={14} /> hello@solven.in
//               </a>
//               <span style={{
//                 display: "flex", alignItems: "center", gap: 8,
//                 fontSize: 13, color: "#888",
//               }}>
//                 <MapPin size={14} /> Pune, India
//               </span>
//             </div>

//             <div style={{ display: "flex", gap: 8 }}>
//               {["X", "LI", "GH", "YT"].map((s) => (
//                 <a
//                   key={s}
//                   href="#"
//                   style={{
//                     width: 36, height: 36, borderRadius: 10,
//                     background: "#222", border: "1px solid #333",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     fontSize: 11, fontFamily: "monospace", color: "#888",
//                     transition: "all 0.25s",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = "#333";
//                     e.currentTarget.style.color = "#fff";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = "#222";
//                     e.currentTarget.style.color = "#888";
//                   }}
//                 >
//                   {s}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Link columns */}
//           {Object.entries(linkGroups).map(([heading, items]) => (
//             <div key={heading}>
//               <h4 style={{
//                 fontSize: 11, fontWeight: 700, textTransform: "uppercase",
//                 letterSpacing: "0.12em", color: "#666", marginBottom: 16,
//                 fontFamily: "var(--sans)",
//               }}>
//                 {heading}
//               </h4>
//               <ul style={{
//                 listStyle: "none",
//                 display: "flex", flexDirection: "column", gap: 10,
//               }}>
//                 {items.map((item) => (
//                   <li key={item}>
//                     <a href="#" style={{ fontSize: 14 }}>{item}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div style={{ borderTop: "1px solid #2a2a2a" }}>
//         <div
//           className="container-x"
//           style={{
//             padding: "20px 0",
//             display: "flex", flexWrap: "wrap",
//             alignItems: "center", justifyContent: "space-between", gap: 16,
//           }}
//         >
//           <p style={{ fontSize: 13, color: "#555" }}>
//             © {new Date().getFullYear()} Solven Technologies Pvt. Ltd. All rights reserved.
//           </p>

//           <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//               <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
//                 <span style={{
//                   position: "absolute", inset: 0, borderRadius: "50%",
//                   background: "#22C55E",
//                   animation: "ping 1.5s infinite",
//                   opacity: 0.5,
//                 }} />
//                 <span style={{
//                   position: "relative", width: 8, height: 8,
//                   borderRadius: "50%", background: "#22C55E",
//                 }} />
//               </span>
//               <span style={{ fontSize: 12, color: "#555" }}>All systems operational</span>
//             </div>

//             <a
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 window.scrollTo({ top: 0, behavior: "smooth" });
//               }}
//               style={{ fontSize: 12, color: "#555" }}
//             >
//               ↑ Back to top
//             </a>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @media (max-width: 1024px) {
//           .footer-links-grid {
//             grid-template-columns: repeat(2, 1fr) !important;
//           }
//           .footer-links-grid > div:first-child {
//             grid-column: span 2;
//           }
//         }
//         @media (max-width: 640px) {
//           .footer-links-grid {
//             grid-template-columns: 1fr !important;
//             gap: 40px !important;
//           }
//           .footer-links-grid > div:first-child {
//             grid-column: span 1;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// }