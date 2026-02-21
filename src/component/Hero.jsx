import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const words = ["Innovation", "Growth", "Impact", "Scale"];

const dashboards = [
  {
    id: "analytics",
    url: "analytics.solven.in",
    stats: [
      { label: "API Calls", val: "2.4M", trend: "+18%", clr: "#D35528" },
      { label: "Latency", val: "12ms", trend: "-23%", clr: "#0E8A7D" },
      { label: "Uptime", val: "99.98%", trend: "+0.1%", clr: "#2D6BE4" },
      { label: "Models Live", val: "36", trend: "+5", clr: "#7048D6" },
    ],
    chartTitle: "Performance Overview",
    bars: [30, 50, 38, 65, 48, 80, 55, 72, 42, 88, 62, 76, 50, 92, 68, 84, 58, 94, 66, 78, 54, 86, 60, 90, 72, 85, 48, 95, 70, 82],
    barHigh: "#D35528", barMid: "rgba(211,85,40,0.35)", barLow: "rgba(211,85,40,0.12)",
    activities: [
      { text: "API v3.2 deployed", time: "2m ago", dot: "#0E8A7D" },
      { text: "Security audit passed", time: "1h ago", dot: "#2D6BE4" },
      { text: "New client onboarded", time: "3h ago", dot: "#D35528" },
      { text: "ML model retrained", time: "5h ago", dot: "#7048D6" },
      { text: "Infra scaled to 4x", time: "8h ago", dot: "#E8A317" },
    ],
  },
  {
    id: "revenue",
    url: "revenue.solven.in",
    stats: [
      { label: "Revenue", val: "$1.2M", trend: "+24%", clr: "#0E8A7D" },
      { label: "Orders", val: "45.8K", trend: "+12%", clr: "#2D6BE4" },
      { label: "Conversion", val: "4.2%", trend: "+0.8%", clr: "#D35528" },
      { label: "Avg Order", val: "$128", trend: "+7%", clr: "#E8A317" },
    ],
    chartTitle: "Revenue Trends",
    bars: [45, 52, 60, 55, 70, 65, 75, 80, 72, 85, 78, 90, 82, 95, 88, 70, 75, 82, 90, 85, 92, 88, 78, 95, 90, 85, 92, 88, 95, 98],
    barHigh: "#0E8A7D", barMid: "rgba(14,138,125,0.35)", barLow: "rgba(14,138,125,0.12)",
    activities: [
      { text: "New subscription added", time: "5m ago", dot: "#0E8A7D" },
      { text: "Payment processed", time: "30m ago", dot: "#2D6BE4" },
      { text: "Invoice #1847 sent", time: "2h ago", dot: "#D35528" },
      { text: "Refund approved", time: "4h ago", dot: "#E8A317" },
      { text: "Pricing tier updated", time: "6h ago", dot: "#7048D6" },
    ],
  },
  {
    id: "marketing",
    url: "marketing.solven.in",
    stats: [
      { label: "Impressions", val: "8.6M", trend: "+32%", clr: "#2D6BE4" },
      { label: "CTR", val: "3.8%", trend: "+0.6%", clr: "#D35528" },
      { label: "Leads", val: "12.4K", trend: "+18%", clr: "#0E8A7D" },
      { label: "CAC", val: "$24", trend: "-15%", clr: "#E8A317" },
    ],
    chartTitle: "Campaign Performance",
    bars: [60, 45, 72, 55, 80, 68, 90, 75, 85, 92, 78, 65, 88, 70, 95, 82, 76, 90, 84, 72, 88, 95, 80, 70, 86, 92, 78, 85, 90, 88],
    barHigh: "#2D6BE4", barMid: "rgba(45,107,228,0.35)", barLow: "rgba(45,107,228,0.12)",
    activities: [
      { text: "Campaign A/B test live", time: "3m ago", dot: "#2D6BE4" },
      { text: "Email blast sent 50K", time: "1h ago", dot: "#0E8A7D" },
      { text: "Landing page updated", time: "2h ago", dot: "#D35528" },
      { text: "SEO audit completed", time: "5h ago", dot: "#E8A317" },
      { text: "Social ads optimized", time: "7h ago", dot: "#7048D6" },
    ],
  },
  {
    id: "devops",
    url: "devops.solven.in",
    stats: [
      { label: "Deployments", val: "847", trend: "+42", clr: "#7048D6" },
      { label: "Success Rate", val: "99.2%", trend: "+0.3%", clr: "#0E8A7D" },
      { label: "Build Time", val: "2.3m", trend: "-18%", clr: "#2D6BE4" },
      { label: "Containers", val: "156", trend: "+12", clr: "#D35528" },
    ],
    chartTitle: "Deployment Frequency",
    bars: [40, 65, 50, 75, 60, 85, 70, 90, 55, 80, 95, 72, 88, 60, 78, 92, 68, 82, 95, 74, 86, 90, 65, 88, 76, 92, 80, 95, 84, 90],
    barHigh: "#7048D6", barMid: "rgba(112,72,214,0.35)", barLow: "rgba(112,72,214,0.12)",
    activities: [
      { text: "Prod deploy v4.8.2", time: "1m ago", dot: "#7048D6" },
      { text: "CI pipeline passed", time: "15m ago", dot: "#0E8A7D" },
      { text: "Docker image built", time: "1h ago", dot: "#2D6BE4" },
      { text: "K8s pods scaled up", time: "3h ago", dot: "#D35528" },
      { text: "SSL certs renewed", time: "6h ago", dot: "#E8A317" },
    ],
  },
];

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 500 : -500, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -500 : 500, opacity: 0 }),
};

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [activeDb, setActiveDb] = useState(0);
  const [slideDir, setSlideDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setSlideDir(1);
      setActiveDb((p) => (p + 1) % dashboards.length);
    }, 5000);
    return () => clearInterval(t);
  }, [activeDb]);

  const paginate = useCallback((dir) => {
    setSlideDir(dir);
    setActiveDb((p) => (p + dir + dashboards.length) % dashboards.length);
  }, []);

  const db = dashboards[activeDb];

  return (
    <section
      style={{
        position: "relative",
        paddingTop: 160,
        paddingBottom: 60,
        overflow: "hidden",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #FFF9F5 0%, #FFF5EE 30%, #FFFBF7 60%, #FFFFFF 100%)",
      }}
    >
      {/* Background blobs */}
      <div style={{ position: "absolute", top: "-5%", right: "10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(211,85,40,0.07), transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "40%", left: "-8%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,163,23,0.06), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", right: "20%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,138,125,0.04), transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />
      <div className="dot-bg" style={{ position: "absolute", inset: 0, opacity: 0.2, pointerEvents: "none" }} />

      <div className="container-x" style={{ position: "relative", zIndex: 10 }}>
        {/* ═══ CENTERED TEXT BLOCK ═══ */}
        <div style={{ maxWidth: 780, margin: "0 auto 64px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.8rem, 6.5vw, 5rem)", lineHeight: 1.08, marginBottom: 24, textAlign: "center" }}
          >
            Build intelligent
            <br />
            <span style={{ position: "relative", display: "inline-block" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[idx]}
                  initial={{ y: 40, opacity: 0, rotateX: -30 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -40, opacity: 0, rotateX: 30 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(135deg, var(--accent), var(--amber))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  systems that {words[idx]}
                </motion.span>
              </AnimatePresence>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute", bottom: -2, left: 0, right: 0, height: 4, borderRadius: 4,
                  transformOrigin: "left", background: "linear-gradient(90deg, var(--accent), var(--amber))",
                }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "var(--ink-secondary)", maxWidth: 560, marginBottom: 40, lineHeight: 1.75, textAlign: "center" }}
          >
            We are a digital agency dedicated to helping businesses thrive in the online world
            through innovative technology and strategic marketing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}
          >
            <button
              style={{
                display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px",
                fontSize: 15, fontWeight: 700, fontFamily: "var(--sans)", borderRadius: 100,
                border: "none", cursor: "pointer", background: "var(--accent)", color: "#fff",
                transition: "all 0.35s ease", boxShadow: "0 4px 16px rgba(211,85,40,0.2)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent-dark)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(211,85,40,0.35)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(211,85,40,0.2)"; }}
            >
              Start building free <ArrowRight size={16} />
            </button>
            <button
              style={{
                display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px",
                fontSize: 15, fontWeight: 700, fontFamily: "var(--sans)", borderRadius: 100,
                border: "2px solid var(--border)", background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(8px)", color: "var(--ink)", cursor: "pointer", transition: "all 0.35s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--ink)"; e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "rgba(255,255,255,0.7)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Book a demo
            </button>
          </motion.div>

          {/* Trust line */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            style={{ marginTop: 44, display: "flex", alignItems: "center", gap: 12, justifyContent: "center" }}>
            <div style={{ display: "flex" }}>
              {["#D35528", "#2D6BE4", "#0E8A7D", "#7048D6"].map((c, i) => (
                <div key={i} style={{ width: 32, height: 32, borderRadius: "50%", background: c, border: "2.5px solid white", marginLeft: i ? -8 : 0, zIndex: 4 - i, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 10, fontWeight: 700 }}>
                  {["R", "A", "S", "K"][i]}
                </div>
              ))}
            </div>
            <div>
              <div style={{ display: "flex", gap: 2 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} viewBox="0 0 20 20" style={{ width: 14, height: 14, fill: "#E8A317" }}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: 12, color: "var(--ink-muted)" }}>Trusted by 200+ enterprises</span>
            </div>
          </motion.div>
        </div>

        {/* ═══ DASHBOARD CAROUSEL ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative", width: "100%" }}
        >
          {/* Glow */}
          <div style={{ position: "absolute", inset: -20, top: 20, background: "linear-gradient(135deg, rgba(211,85,40,0.08), rgba(232,163,23,0.05), transparent)", borderRadius: 32, filter: "blur(40px)", pointerEvents: "none" }} />

          <div className="card-base" style={{ overflow: "hidden", borderRadius: 20, position: "relative" }}>
            {/* Browser chrome */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 20px", background: "var(--cream)", borderBottom: "1px solid var(--border-light)" }}>
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F57" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FEBC2E" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28C840" }} />
              </div>
              <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={db.url}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    style={{ fontSize: 11, fontFamily: "monospace", color: "var(--ink-muted)", background: "#fff", padding: "3px 14px", borderRadius: 6, border: "1px solid var(--border-light)" }}
                  >
                    {db.url}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div style={{ width: 40 }} />
            </div>

            {/* Dashboard content area */}
            <div style={{ position: "relative", overflow: "hidden", minHeight: 340 }}>
              <AnimatePresence initial={false} custom={slideDir} mode="wait">
                <motion.div
                  key={activeDb}
                  custom={slideDir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{ padding: 24, background: "var(--cream)" }}
                >
                  {/* 4 stat cards */}
                  <div className="hero-stats-row" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 16 }}>
                    {db.stats.map((s, i) => (
                      <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 + i * 0.06 }}
                        style={{ background: "#fff", borderRadius: 14, padding: 16, border: "1px solid var(--border-light)" }}
                      >
                        <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-muted)", fontWeight: 700 }}>{s.label}</div>
                        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 6 }}>
                          <span style={{ fontFamily: "var(--serif)", fontSize: 24 }}>{s.val}</span>
                          <span style={{ fontSize: 11, fontWeight: 700, color: s.clr }}>{s.trend}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart + Activity */}
                  <div className="hero-main-grid" style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 14 }}>
                    {/* Chart */}
                    <div style={{ background: "#fff", borderRadius: 14, padding: 20, border: "1px solid var(--border-light)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, alignItems: "center" }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-secondary)" }}>{db.chartTitle}</span>
                        <span style={{ fontSize: 10, color: "var(--ink-muted)", background: "var(--cream)", padding: "3px 10px", borderRadius: 6 }}>Last 30 days</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 140 }}>
                        {db.bars.map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 0.5, delay: 0.08 + i * 0.018, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                              flex: 1, borderRadius: "3px 3px 0 0",
                              background: h > 75 ? db.barHigh : h > 50 ? db.barMid : db.barLow,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Activity feed */}
                    <div style={{ background: "#fff", borderRadius: 14, padding: 16, border: "1px solid var(--border-light)" }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-secondary)", marginBottom: 14 }}>Recent Activity</div>
                      {db.activities.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + i * 0.06 }}
                          style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: i < 4 ? "1px solid var(--border-light)" : "none" }}
                        >
                          <span style={{ width: 7, height: 7, borderRadius: "50%", background: item.dot, flexShrink: 0 }} />
                          <span style={{ fontSize: 13, color: "var(--ink-secondary)", flex: 1 }}>{item.text}</span>
                          <span style={{ fontSize: 11, color: "var(--ink-muted)", whiteSpace: "nowrap" }}>{item.time}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Navigation Buttons ── */}
            <button
              onClick={() => paginate(-1)}
              style={{
                position: "absolute", left: -20, top: "55%", transform: "translateY(-50%)",
                width: 44, height: 44, borderRadius: "50%", border: "1px solid var(--border-light)",
                background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease", zIndex: 20, color: "var(--ink)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(211,85,40,0.25)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.95)"; e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)"; }}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => paginate(1)}
              style={{
                position: "absolute", right: -20, top: "55%", transform: "translateY(-50%)",
                width: 44, height: 44, borderRadius: "50%", border: "1px solid var(--border-light)",
                background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease", zIndex: 20, color: "var(--ink)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(211,85,40,0.25)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.95)"; e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)"; }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* ── Dot Indicators ── */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
            {dashboards.map((d, i) => (
              <button
                key={d.id}
                onClick={() => { setSlideDir(i > activeDb ? 1 : -1); setActiveDb(i); }}
                style={{
                  width: activeDb === i ? 28 : 8, height: 8, borderRadius: 100,
                  background: activeDb === i ? "var(--accent)" : "var(--border)",
                  border: "none", cursor: "pointer", padding: 0,
                  transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}