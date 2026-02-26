// FILE: src/components/Testimonials.jsx
// REPLACE YOUR ENTIRE Testimonials.jsx WITH THIS
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Solven rebuilt our entire logistics platform in 4 months. The performance gains were immediate — 3x faster load times, 60% cost reduction on cloud spend.",
    author: "Priya Kapoor", role: "CTO", company: "SwiftLogix",
    initials: "PK", color: "#2D6BE4",
  },
  {
    quote: "We needed an AI recommendation engine handling 10M+ daily requests. Solven delivered a production system that exceeded our accuracy targets from day one.",
    author: "Arjun Desai", role: "VP Engineering", company: "FinEdge",
    initials: "AD", color: "#D35528",
  },
  {
    quote: "Migrating from legacy monolith to microservices seemed daunting. Solven made it seamless — zero downtime, phased rollout, full observability.",
    author: "Sarah Lin", role: "Head of Platform", company: "MediTrack",
    initials: "SL", color: "#0E8A7D",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "100px 0 120px", background: "var(--cream)" }}>
      <div className="container-x">

        {/* ═══ CENTERED Header ═══ */}
        <div style={{
          maxWidth: 620,
          margin: "0 auto 60px",
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
            <span className="section-tag">Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              textAlign: "center",
            }}
          >
            Hear from the teams we've partnered with
          </motion.h2>
        </div>

        {/* ═══ Cards ═══ */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card-base"
              style={{
                padding: 32,
                display: "flex",
                flexDirection: "column",
                cursor: "default",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} viewBox="0 0 20 20" style={{ width: 18, height: 18, fill: "#E8A317" }}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p style={{
                fontSize: 15,
                color: "var(--ink-secondary)",
                lineHeight: 1.75,
                flex: 1,
                marginBottom: 24,
              }}>
                "{t.quote}"
              </p>

              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                paddingTop: 20,
                borderTop: "1px solid var(--border-light)",
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: "50%",
                  background: t.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontSize: 13, fontWeight: 700,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{t.author}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-muted)" }}>
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}