import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Cloud, Smartphone, BarChart3, ShieldCheck } from "lucide-react";

const services = [
  { icon: Code2, title: "Custom Software Development", desc: "End-to-end product engineering — from architecture to deployment. Scalable, maintainable systems tailored for your business.", color: "#2D6BE4", bg: "#EFF6FF", gradient: "linear-gradient(135deg, #2D6BE4, #60A5FA)" },
  { icon: Brain, title: "AI & Machine Learning", desc: "Transform raw data into actionable intelligence. Computer vision, NLP, predictive analytics, and generative AI.", color: "#D35528", bg: "#FEF3ED", gradient: "linear-gradient(135deg, #D35528, #F59E0B)" },
  { icon: Cloud, title: "Cloud Infrastructure", desc: "Multi-cloud on AWS, Azure, and GCP. Migration, optimization, and managed infrastructure with 99.9% uptime.", color: "#0E8A7D", bg: "#F0FDFA", gradient: "linear-gradient(135deg, #0E8A7D, #34D399)" },
  { icon: Smartphone, title: "Mobile Applications", desc: "Native and cross-platform mobile experiences. iOS, Android, React Native, and Flutter expertise.", color: "#7048D6", bg: "#F5F3FF", gradient: "linear-gradient(135deg, #7048D6, #A78BFA)" },
  { icon: BarChart3, title: "Data Analytics", desc: "Unlock insights from your data. Warehousing, real-time pipelines, dashboards, and business intelligence.", color: "#CA8A04", bg: "#FEFCE8", gradient: "linear-gradient(135deg, #CA8A04, #FBBF24)" },
  { icon: ShieldCheck, title: "Cybersecurity Solutions", desc: "Protect your digital assets. Penetration testing, compliance audits, SOC operations, zero-trust architecture.", color: "#DC2626", bg: "#FEF2F2", gradient: "linear-gradient(135deg, #DC2626, #F87171)" },
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="services" style={{ padding: "100px 0 120px" }}>
      <div className="container-x">
        {/* ═══ CENTERED Header ═══ */}
        <div style={{ maxWidth: 660, margin: "0 auto 64px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-tag">What We Do</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", marginBottom: 16, textAlign: "center" }}
          >
            Solutions crafted for every layer of your technology stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: 17, color: "var(--ink-secondary)", lineHeight: 1.7, maxWidth: 540, textAlign: "center" }}
          >
            From intelligent automation to robust infrastructure — enterprise-grade
            solutions that adapt and scale with you.
          </motion.p>
        </div>

        {/* ═══ Card Grid ═══ */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {services.map((svc, i) => {
            const isHovered = hoveredIdx === i;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="card-base"
                style={{
                  padding: 0,
                  cursor: "default",
                  overflow: "hidden",
                  position: "relative",
                  transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                  boxShadow: isHovered
                    ? `0 20px 48px ${svc.color}15, 0 8px 20px rgba(0,0,0,0.06)`
                    : "0 1px 4px rgba(0,0,0,0.04)",
                  borderColor: isHovered ? `${svc.color}30` : "var(--border-light)",
                }}
              >
                {/* Top gradient line */}
                <div
                  style={{
                    height: 3,
                    background: svc.gradient,
                    transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                />

                {/* Hover glow blob */}
                <div
                  style={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 160,
                    height: 160,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${svc.color}08, transparent 70%)`,
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    pointerEvents: "none",
                  }}
                />

                <div style={{ padding: 32, position: "relative", zIndex: 2 }}>
                  {/* Icon */}
                  <motion.div
                    // animate={isHovered ? { scale: 1.15, rotate: -8, y: -4 } : { scale: 1, rotate: 0, y: 0 }}
                    // transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    style={{
                      width: 52, height: 52, borderRadius: 14,
                      background: isHovered ? svc.gradient : svc.bg,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 20,
                      boxShadow: isHovered ? `0 8px 24px ${svc.color}25` : "none",
                      transition: "background 0.4s ease, box-shadow 0.4s ease",
                    }}
                  >
                    <svc.icon
                      size={24}
                      style={{
                        color: isHovered ? "#fff" : svc.color,
                        transition: "color 0.3s ease",
                      }}
                      strokeWidth={1.6}
                    />
                  </motion.div>

                  <h3 style={{
                    fontFamily: "var(--serif)", fontSize: 20, marginBottom: 10,
                    color: isHovered ? svc.color : "var(--ink)",
                    transition: "color 0.3s ease",
                  }}>
                    {svc.title}
                  </h3>

                  <p style={{ fontSize: 15, color: "var(--ink-secondary)", lineHeight: 1.65 }}>
                    {svc.desc}
                  </p>

                  {/* Learn more */}
                  <motion.div
                    animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.5, x: -4 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      marginTop: 24,
                      display: "flex", alignItems: "center",
                      gap: isHovered ? 10 : 6,
                      fontSize: 14, fontWeight: 600, color: svc.color,
                      cursor: "pointer",
                      transition: "gap 0.3s ease",
                    }}
                  >
                    Learn more
                    <motion.svg
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                      animate={isHovered ? { x: 4 } : { x: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    >
                      <path d="M1 7h12M8 2l5 5-5 5" stroke={svc.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}