// FILE: src/components/Clients.jsx
import { motion } from "framer-motion";

const clients = [
  "Accenture", "Deloitte", "Razorpay", "Freshworks",
  "Infosys", "Wipro", "TCS", "HCL Tech",
  "Zoho", "PhonePe", "Zerodha", "Swiggy",
];

function Badge({ name }) {
  const hue = name.charCodeAt(0) * 7 % 360;
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10,
      padding: "10px 20px", borderRadius: 100,
      background: "#fff", border: "1px solid var(--border-light)",
      boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
      margin: "0 8px", whiteSpace: "nowrap", cursor: "default",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
      e.currentTarget.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.03)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
    >
      <div style={{
        width: 28, height: 28, borderRadius: 8,
        background: `hsl(${hue}, 45%, 55%)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#fff", fontSize: 11, fontWeight: 700,
      }}>
        {name[0]}
      </div>
      <span style={{ fontSize: 14, fontWeight: 500, color: "var(--ink-secondary)" }}>{name}</span>
    </div>
  );
}

export default function Clients() {
  const doubled = [...clients, ...clients];

  return (
    <section style={{ padding: "56px 0", background: "var(--cream)" }}>
      <div className="container-x" style={{ marginBottom: 28 }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center", fontSize: 12, fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--ink-muted)",
          }}
        >
          Trusted by leading enterprises worldwide
        </motion.p>
      </div>

      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 80,
          background: "linear-gradient(90deg, var(--cream), transparent)",
          zIndex: 2, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 80,
          background: "linear-gradient(270deg, var(--cream), transparent)",
          zIndex: 2, pointerEvents: "none",
        }} />

        <div className="marquee-strip" style={{ paddingTop: 4, paddingBottom: 4 }}>
          {doubled.map((n, i) => <Badge key={`${n}-${i}`} name={n} />)}
        </div>
      </div>
    </section>
  );
}