// FILE: src/components/About.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

const orbitItems = [
  { label: "AI/ML", color: "#D35528", angle: 0, ring: 1 },
  { label: "Cloud", color: "#2D6BE4", angle: 60, ring: 1 },
  { label: "DevOps", color: "#0E8A7D", angle: 120, ring: 1 },
  { label: "Security", color: "#7048D6", angle: 180, ring: 1 },
  { label: "Mobile", color: "#E8A317", angle: 240, ring: 1 },
  { label: "Data", color: "#DC2626", angle: 300, ring: 1 },
  { label: "IoT", color: "#059669", angle: 30, ring: 2 },
  { label: "Web3", color: "#8B5CF6", angle: 150, ring: 2 },
  { label: "API", color: "#0891B2", angle: 270, ring: 2 },
];

const points = [
  "Full-cycle product development from ideation to launch",
  "Dedicated engineering teams with domain expertise",
  "Agile methodology with bi-weekly sprint reviews",
  "Post-launch support and continuous optimization",
  "SOC 2, GDPR, and HIPAA compliant workflows",
];

export default function About() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="about" style={{ padding: "100px 0 120px", background: "var(--cream)" }}>
      <div className="container-x">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* ── LEFT: Animated Orbital Diagram ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative", aspectRatio: "1", maxWidth: 520, margin: "0 auto", width: "100%" }}
          >
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute", inset: "4%", borderRadius: "50%",
                border: "1.5px dashed var(--border)", opacity: 0.6,
              }}
            />

            {/* Middle ring */}
            <motion.div
              style={{
                position: "absolute", inset: "18%", borderRadius: "50%",
                border: "1.5px solid var(--border)",
              }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Inner ring */}
            <motion.div
              style={{
                position: "absolute", inset: "32%", borderRadius: "50%",
                border: "1.5px solid var(--border-light)",
                background: "rgba(211,85,40,0.03)",
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Center logo */}
            <motion.div
              style={{
                position: "absolute", inset: "40%", borderRadius: 20,
                background: "linear-gradient(135deg, var(--accent), var(--amber))",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 8px 32px rgba(211,85,40,0.2)",
                zIndex: 10, cursor: "pointer",
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
            >
              <span style={{ color: "#fff", fontFamily: "var(--serif)", fontSize: 32, fontWeight: 700 }}>S</span>
            </motion.div>

            {/* Orbiting items */}
            {orbitItems.map((item, i) => {
              const radius = item.ring === 1 ? 42 : 48;
              const radians = (item.angle * Math.PI) / 180;
              const x = 50 + radius * Math.cos(radians);
              const y = 50 + radius * Math.sin(radians);
              const isHovered = hovered === i;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    position: "absolute",
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                    zIndex: 20,
                    cursor: "pointer",
                  }}
                >
                  <motion.div
                    animate={isHovered ? { scale: 1.25, y: -4 } : { scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    style={{
                      background: "#fff",
                      border: `2px solid ${isHovered ? item.color : "var(--border-light)"}`,
                      borderRadius: 100,
                      padding: "8px 16px",
                      boxShadow: isHovered
                        ? `0 8px 28px ${item.color}25, 0 0 0 4px ${item.color}10`
                        : "0 2px 8px rgba(0,0,0,0.05)",
                      display: "flex", alignItems: "center", gap: 6,
                      whiteSpace: "nowrap",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                  >
                    <span style={{
                      width: 8, height: 8, borderRadius: "50%",
                      background: item.color,
                      boxShadow: isHovered ? `0 0 8px ${item.color}60` : "none",
                      transition: "box-shadow 0.3s",
                    }} />
                    <span style={{
                      fontSize: 12, fontWeight: 700,
                      color: isHovered ? item.color : "var(--ink-secondary)",
                      transition: "color 0.3s",
                    }}>
                      {item.label}
                    </span>
                  </motion.div>

                  {/* Connection line to center */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      exit={{ opacity: 0 }}
                      style={{
                        position: "absolute",
                        top: "50%", left: "50%",
                        width: 1, height: `${radius * 0.6}%`,
                        background: item.color,
                        transformOrigin: "top center",
                        transform: `rotate(${item.angle + 180}deg)`,
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </motion.div>
              );
            })}

            {/* Decorative pulse circles */}
            <motion.div
              style={{
                position: "absolute", inset: "25%", borderRadius: "50%",
                border: "1px solid rgba(211,85,40,0.1)",
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-tag">Why Solven</span>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: 18 }}>
              Your technology partner from first commit to global scale
            </h2>
            <p style={{ fontSize: 17, color: "var(--ink-secondary)", lineHeight: 1.75, marginBottom: 32 }}>
              We don't just write code — we architect solutions. With deep domain
              expertise across fintech, healthcare, logistics, and e-commerce,
              our teams embed into your workflow and deliver outcomes that matter.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              {points.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                >
                  <div style={{
                    marginTop: 3, width: 22, height: 22, borderRadius: "50%",
                    background: "var(--accent-bg)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Check size={12} style={{ color: "var(--accent)" }} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: 15, color: "var(--ink-secondary)" }}>{p}</span>
                </motion.div>
              ))}
            </div>

            <button className="btn-fill">
              Learn about us <ArrowUpRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 1023px) {
          #about > div > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}