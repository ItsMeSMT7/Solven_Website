import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import dashboard1 from "../assets/1dashboard.png";
import dashboard2 from "../assets/4dashboard.png";
import dashboard3 from "../assets/2dashboard.png";
import dashboard4 from "../assets/3dashboard.png";

import heroVideo from "../assets/background_Home.mp4";

const words = ["Growth", "Impact", "Scale"];

const dashboards = [
  {
    id: "analytics",
    url: "analytics.solven.in",
    img: dashboard1,
  },
  {
    id: "revenue",
    url: "revenue.solven.in",
    img: dashboard2,
  },
  {
    id: "marketing",
    url: "marketing.solven.in",
    img: dashboard3,
  },
  {
    id: "devops",
    url: "devops.solven.in",
    img: dashboard4,
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
      className="hero-section"
      style={{
        position: "relative", paddingTop: 160, paddingBottom: 60,
        overflow: "hidden", minHeight: "100vh",
      }}
    >
      {/* Video Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <video
          autoPlay loop muted playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.85)" }} />
      </div>

      <div className="container-x" style={{ position: "relative", zIndex: 10 }}>
        {/* Text block */}
        <div style={{ maxWidth: 780, margin: "0 auto 64px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.2rem, 6.5vw, 5rem)", lineHeight: 1.08, marginBottom: 24 }}
          >
            Build intelligent<br />
            <span style={{ position: "relative", display: "inline-block" }}>
              <AnimatePresence mode="wait">
                <motion.span key={words[idx]}
                  initial={{ y: 40, opacity: 0, rotateX: -30 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -40, opacity: 0, rotateX: 30 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: "inline-block", background: "linear-gradient(135deg, var(--accent), var(--amber))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                >
                  systems that {words[idx]}
                </motion.span>
              </AnimatePresence>
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7, duration: 0.6 }}
                style={{ position: "absolute", bottom: -2, left: 0, right: 0, height: 4, borderRadius: 4, transformOrigin: "left", background: "linear-gradient(90deg, var(--accent), var(--amber))" }}
              />
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "var(--ink-secondary)", maxWidth: 560, marginBottom: 40, lineHeight: 1.75 }}
          >
            We are a digital agency dedicated to helping businesses thrive in the online world through innovative technology and strategic marketing.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}
          >
            <button
              style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px", fontSize: 15, fontWeight: 700, fontFamily: "var(--sans)", borderRadius: 100, border: "none", cursor: "pointer", background: "var(--accent)", color: "#fff", transition: "all 0.35s ease", boxShadow: "0 4px 16px rgba(211,85,40,0.2)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent-dark)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(211,85,40,0.35)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(211,85,40,0.2)"; }}
            >
              Start building free <ArrowRight size={16} />
            </button>
            <button
              style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 36px", fontSize: 15, fontWeight: 700, fontFamily: "var(--sans)", borderRadius: 100, border: "2px solid var(--border)", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(8px)", color: "var(--ink)", cursor: "pointer", transition: "all 0.35s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--ink)"; e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "rgba(255,255,255,0.7)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Book a demo
            </button>
          </motion.div>

          {/* Trust line */}
          {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            style={{ marginTop: 44, display: "flex", alignItems: "center", gap: 12, justifyContent: "center" }}
          >
            <div style={{ display: "flex" }}>
              {["#D35528", "#2D6BE4", "#0E8A7D", "#7048D6"].map((c, i) => (
                <div key={i} style={{ width: 32, height: 32, borderRadius: "50%", background: c, border: "2.5px solid white", marginLeft: i ? -8 : 0, zIndex: 4 - i, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 10, fontWeight: 700 }}>
                  {["R", "A", "S", "K"][i]}
                </div>
              ))}
            </div>
            <div>
              <div style={{ display: "flex", gap: 2 }}>
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} viewBox="0 0 20 20" style={{ width: 14, height: 14, fill: "#E8A317" }}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: 12, color: "var(--ink-muted)" }}>Trusted by 200+ enterprises</span>
            </div>
          </motion.div> */}
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

          {/* ── Outer wrapper with padding for buttons ── */}
          <div style={{ position: "relative", padding: "0 32px" }}>

            {/* ── Left Nav Button ── */}
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous dashboard"
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: "1.5px solid var(--border)",
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                zIndex: 30,
                color: "var(--ink)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(211,85,40,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.95)";
                e.currentTarget.style.color = "var(--ink)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
              }}
            >
              <ChevronLeft size={22} />
            </button>

            {/* ── Right Nav Button ── */}
            <button
              onClick={() => paginate(1)}
              aria-label="Next dashboard"
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: "1.5px solid var(--border)",
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                zIndex: 30,
                color: "var(--ink)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(211,85,40,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.95)";
                e.currentTarget.style.color = "var(--ink)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
              }}
            >
              <ChevronRight size={22} />
            </button>

            {/* ── Dashboard Card ── */}
            <div className="card-base" style={{ overflow: "hidden", borderRadius: 20, position: "relative", width: "100%",}}>

              {/* Browser chrome */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 20px", background: "var(--cream)", borderBottom: "1px solid var(--border-light)" }}>
                <div style={{ display: "flex", gap: 6 }}>
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F57" }} />
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FEBC2E" }} />
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28C840" }} />
                </div>
                <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                  <AnimatePresence mode="wait">
                    <motion.span key={db.url}
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      style={{ fontSize: 11, fontFamily: "monospace", color: "var(--ink-muted)", background: "#fff", padding: "3px 14px", borderRadius: 6, border: "1px solid var(--border-light)" }}
                    >
                      {db.url}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <div style={{ width: 40 }} />
              </div>

              {/* Dashboard slide area */}
              <div style={{ position: "relative", overflow: "hidden", minHeight: 340 }}>
                <AnimatePresence initial={false} custom={slideDir} mode="wait">
                  <motion.div
                    key={activeDb}
                    custom={slideDir}
                    variants={slideVariants}
                    initial="enter" animate="center" exit="exit"
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    style={{ background: "var(--cream)" }}
                  >
                    <img
                      src={db.img}
                      alt="Dashboard"
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
            {dashboards.map((d, i) => (
              <button key={d.id}
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

      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 120px !important;
          }
        }
      `}</style>
    </section>
  );
}