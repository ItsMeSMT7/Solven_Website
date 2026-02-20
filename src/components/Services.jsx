// FILE: src/components/Services.jsx
// REPLACE YOUR ENTIRE Services.jsx WITH THIS
import { motion } from "framer-motion";
import { Code2, Brain, Cloud, Smartphone, BarChart3, ShieldCheck } from "lucide-react";

const services = [
  { icon: Code2, title: "Custom Software Development", desc: "End-to-end product engineering — from architecture to deployment. Scalable, maintainable systems tailored for your business.", color: "#2D6BE4", bg: "#EFF6FF" },
  { icon: Brain, title: "AI & Machine Learning", desc: "Transform raw data into actionable intelligence. Computer vision, NLP, predictive analytics, and generative AI.", color: "#D35528", bg: "#FEF3ED" },
  { icon: Cloud, title: "Cloud Infrastructure", desc: "Multi-cloud on AWS, Azure, and GCP. Migration, optimization, and managed infrastructure with 99.9% uptime.", color: "#0E8A7D", bg: "#F0FDFA" },
  { icon: Smartphone, title: "Mobile Applications", desc: "Native and cross-platform mobile experiences. iOS, Android, React Native, and Flutter expertise.", color: "#7048D6", bg: "#F5F3FF" },
  { icon: BarChart3, title: "Data Analytics", desc: "Unlock insights from your data. Warehousing, real-time pipelines, dashboards, and business intelligence.", color: "#CA8A04", bg: "#FEFCE8" },
  { icon: ShieldCheck, title: "Cybersecurity Solutions", desc: "Protect your digital assets. Penetration testing, compliance audits, SOC operations, zero-trust architecture.", color: "#DC2626", bg: "#FEF2F2" },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "100px 0 120px" }}>
      <div className="container-x">
        {/* ═══ CENTERED Header ═══ */}
        <div style={{
          maxWidth: 660,
          margin: "0 auto 64px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">What We Do</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Solutions crafted for every layer of your technology stack
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: 17,
              color: "var(--ink-secondary)",
              lineHeight: 1.7,
              maxWidth: 540,
              textAlign: "center",
            }}
          >
            From intelligent automation to robust infrastructure — enterprise-grade
            solutions that adapt and scale with you.
          </motion.p>
        </div>

        {/* ═══ Card Grid ═══ */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 20,
        }}>
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card-base"
              style={{ padding: 32, cursor: "default" }}
            >
              <div
                style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: svc.bg,
                  display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: 20,
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.15) rotate(-5deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) rotate(0)";
                }}
              >
                <svc.icon size={24} style={{ color: svc.color }} strokeWidth={1.6} />
              </div>

              <h3 style={{
                fontFamily: "var(--serif)",
                fontSize: 20,
                marginBottom: 10,
              }}>
                {svc.title}
              </h3>

              <p style={{
                fontSize: 15,
                color: "var(--ink-secondary)",
                lineHeight: 1.65,
              }}>
                {svc.desc}
              </p>

              <div
                style={{
                  marginTop: 20,
                  display: "flex", alignItems: "center", gap: 6,
                  fontSize: 14, fontWeight: 600, color: svc.color,
                  opacity: 0.6,
                  transition: "opacity 0.3s, gap 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.gap = "10px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.6";
                  e.currentTarget.style.gap = "6px";
                }}
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke={svc.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}