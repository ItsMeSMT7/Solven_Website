import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{ padding: "120px 0 60px" }}>
      <div className="container-x" style={{ textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: 100,
              backgroundColor: "var(--cream)",
              border: "1px solid var(--border-light)",
              color: "var(--ink-muted)",
              fontSize: 12,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 32,
            }}
          >
            Platform
          </span>
          <h1
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: "clamp(48px, 8vw, 80px)",
              lineHeight: 1.1,
              color: "var(--ink-secondary)",
              letterSpacing: "-0.02em",
            }}
          >
            Everything you need
            <br />
            <span style={{ color: "var(--ink-muted)" }}>to ship AI.</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}