// FILE: src/components/Stats.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered", sub: "across 14 industries" },
  { value: 50, suffix: "+", label: "Enterprise Clients", sub: "in 8 countries" },
  { value: 99.8, suffix: "%", label: "Uptime Guarantee", sub: "SLA-backed reliability" },
  { value: 15, suffix: "+", label: "Technology Partners", sub: "AWS, Azure, GCP & more" },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let curr = 0;
    const dec = target % 1 !== 0;
    const step = target / 120;
    const t = setInterval(() => {
      curr += step;
      if (curr >= target) {
        setCount(target);
        clearInterval(t);
      } else {
        setCount(dec ? Math.round(curr * 10) / 10 : Math.floor(curr));
      }
    }, 16);
    return () => clearInterval(t);
  }, [inView, target]);

  return (
    <span ref={ref} className="stat-num">
      {count % 1 !== 0 ? count.toFixed(1) : count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container-x">
        <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ textAlign: "center" }}
            >
              <Counter target={s.value} suffix={s.suffix} />
              <div style={{ marginTop: 8, fontSize: 15, fontWeight: 600 }}>{s.label}</div>
              <div style={{ marginTop: 4, fontSize: 13, color: "var(--ink-muted)" }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}