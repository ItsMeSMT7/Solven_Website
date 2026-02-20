// FILE: src/components/Hero.jsx
// REPLACE YOUR ENTIRE Hero.jsx WITH THIS
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const words = ["Innovation", "Growth", "Impact", "Scale"];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, []);

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
      <div
        style={{
          position: "absolute",
          top: "-5%",
          right: "10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(211,85,40,0.07), transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "-8%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,163,23,0.06), transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "20%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14,138,125,0.04), transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* Dot grid */}
      <div
        className="dot-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />

      <div
        className="container-x"
        style={{ position: "relative", zIndex: 10 }}
      >
        {/* ═══ CENTERED TEXT BLOCK ═══ */}
        <div
          style={{
            maxWidth: 780,
            margin: "0 auto 64px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              borderRadius: 100,
              background: "rgba(211,85,40,0.08)",
              border: "1px solid rgba(211,85,40,0.12)",
              marginBottom: 36,
            }}
          >
            <Sparkles size={14} style={{ color: "var(--accent)" }} />
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--accent)",
              }}
            >
              Now available — Solven Platform v3.0
            </span>
          </motion.div> */}

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.8rem, 6.5vw, 5rem)",
              lineHeight: 1.08,
              marginBottom: 24,
              textAlign: "center",
            }}
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
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    display: "inline-block",
                    background:
                      "linear-gradient(135deg, var(--accent), var(--amber))",
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
                transition={{
                  delay: 0.7,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  position: "absolute",
                  bottom: -2,
                  left: 0,
                  right: 0,
                  height: 4,
                  borderRadius: 4,
                  transformOrigin: "left",
                  background:
                    "linear-gradient(90deg, var(--accent), var(--amber))",
                }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "var(--ink-secondary)",
              maxWidth: 560,
              marginBottom: 40,
              lineHeight: 1.75,
              textAlign: "center",
            }}
          >
            We are a digital agency dedicated to helping businesses thrive in the online world 
            through innovative technology and strategic marketing.
          </motion.p>

          {/* ═══ ROUNDED CTAs ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              justifyContent: "center",
            }}
          >
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 36px",
                fontSize: 15,
                fontWeight: 700,
                fontFamily: "var(--sans)",
                borderRadius: 100,
                border: "none",
                cursor: "pointer",
                background: "var(--accent)",
                color: "#fff",
                transition: "all 0.35s ease",
                boxShadow: "0 4px 16px rgba(211,85,40,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent-dark)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(211,85,40,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(211,85,40,0.2)";
              }}
            >
              Start building free
              <ArrowRight size={16} />
            </button>

            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 36px",
                fontSize: 15,
                fontWeight: 700,
                fontFamily: "var(--sans)",
                borderRadius: 100,
                border: "2px solid var(--border)",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(8px)",
                color: "var(--ink)",
                cursor: "pointer",
                transition: "all 0.35s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--ink)";
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 28px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "rgba(255,255,255,0.7)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Book a demo
            </button>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              marginTop: 44,
              display: "flex",
              alignItems: "center",
              gap: 12,
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex" }}>
              {["#D35528", "#2D6BE4", "#0E8A7D", "#7048D6"].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: c,
                    border: "2.5px solid white",
                    marginLeft: i ? -8 : 0,
                    zIndex: 4 - i,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                  }}
                >
                  {["R", "A", "S", "K"][i]}
                </div>
              ))}
            </div>
            <div>
              <div style={{ display: "flex", gap: 2 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    viewBox="0 0 20 20"
                    style={{ width: 14, height: 14, fill: "#E8A317" }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: 12, color: "var(--ink-muted)" }}>
                Trusted by 200+ enterprises
              </span>
            </div>
          </motion.div>
        </div>

        {/* ═══ FULL-WIDTH DASHBOARD MOCKUP ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ position: "relative", width: "100%" }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              inset: -20,
              top: 20,
              background:
                "linear-gradient(135deg, rgba(211,85,40,0.08), rgba(232,163,23,0.05), transparent)",
              borderRadius: 32,
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          <div
            className="card-base"
            style={{
              overflow: "hidden",
              borderRadius: 20,
              position: "relative",
            }}
          >
            {/* Browser chrome */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 20px",
                background: "var(--cream)",
                borderBottom: "1px solid var(--border-light)",
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#FF5F57",
                  }}
                />
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#FEBC2E",
                  }}
                />
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#28C840",
                  }}
                />
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: "monospace",
                    color: "var(--ink-muted)",
                    background: "#fff",
                    padding: "3px 14px",
                    borderRadius: 6,
                    border: "1px solid var(--border-light)",
                  }}
                >
                  dashboard.solven.in
                </span>
              </div>
              <div style={{ width: 40 }} />
            </div>

            {/* Dashboard content */}
            <div style={{ padding: 24, background: "var(--cream)" }}>
              {/* 4 stat cards */}
              <div
                className="hero-stats-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 14,
                  marginBottom: 16,
                }}
              >
                {[
                  {
                    label: "API Calls",
                    val: "2.4M",
                    trend: "+18%",
                    clr: "var(--accent)",
                  },
                  {
                    label: "Latency",
                    val: "12ms",
                    trend: "-23%",
                    clr: "var(--teal)",
                  },
                  {
                    label: "Uptime",
                    val: "99.98%",
                    trend: "+0.1%",
                    clr: "var(--blue)",
                  },
                  {
                    label: "Models Live",
                    val: "36",
                    trend: "+5",
                    clr: "var(--violet)",
                  },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.08 }}
                    style={{
                      background: "#fff",
                      borderRadius: 14,
                      padding: 16,
                      border: "1px solid var(--border-light)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 10,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--ink-muted)",
                        fontWeight: 700,
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        marginTop: 6,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: 24,
                        }}
                      >
                        {s.val}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: s.clr,
                        }}
                      >
                        {s.trend}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chart + Activity */}
              <div
                className="hero-main-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 320px",
                  gap: 14,
                }}
              >
                {/* Chart */}
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    padding: 20,
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 16,
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--ink-secondary)",
                      }}
                    >
                      Performance Overview
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        color: "var(--ink-muted)",
                        background: "var(--cream)",
                        padding: "3px 10px",
                        borderRadius: 6,
                      }}
                    >
                      Last 30 days
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      gap: 4,
                      height: 140,
                    }}
                  >
                    {[
                      30, 50, 38, 65, 48, 80, 55, 72, 42, 88, 62, 76, 50, 92,
                      68, 84, 58, 94, 66, 78, 54, 86, 60, 90, 72, 85, 48, 95,
                      70, 82,
                    ].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{
                          duration: 0.6,
                          delay: 1.1 + i * 0.025,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                          flex: 1,
                          borderRadius: "3px 3px 0 0",
                          background:
                            h > 75
                              ? "var(--accent)"
                              : h > 50
                              ? "rgba(211,85,40,0.35)"
                              : "rgba(211,85,40,0.12)",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Activity feed */}
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    padding: 16,
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--ink-secondary)",
                      marginBottom: 14,
                    }}
                  >
                    Recent Activity
                  </div>
                  {[
                    {
                      text: "API v3.2 deployed",
                      time: "2m ago",
                      dot: "var(--teal)",
                    },
                    {
                      text: "Security audit passed",
                      time: "1h ago",
                      dot: "var(--blue)",
                    },
                    {
                      text: "New client onboarded",
                      time: "3h ago",
                      dot: "var(--accent)",
                    },
                    {
                      text: "ML model retrained",
                      time: "5h ago",
                      dot: "var(--violet)",
                    },
                    {
                      text: "Infra scaled to 4x",
                      time: "8h ago",
                      dot: "var(--amber)",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3 + i * 0.08 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "10px 0",
                        borderBottom:
                          i < 4 ? "1px solid var(--border-light)" : "none",
                      }}
                    >
                      <span
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          background: item.dot,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: 13,
                          color: "var(--ink-secondary)",
                          flex: 1,
                        }}
                      >
                        {item.text}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          color: "var(--ink-muted)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.time}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}