import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

/* ── Orbit Data ── */
const orbitItems = [
  { label: "AI/ML", color: "#D35528" },
  { label: "Cloud", color: "#2D6BE4" },
  { label: "DevOps", color: "#0E8A7D" },
  { label: "Security", color: "#7048D6" },
  { label: "Mobile", color: "#E8A317" },
  { label: "Data", color: "#DC2626" },
  { label: "IoT", color: "#059669" },
  { label: "Web3", color: "#8B5CF6" },
  { label: "API", color: "#0891B2" },
  { label: "SaaS", color: "#D946EF" },
];

const ORBIT_RADIUS = 42;
const ITEM_COUNT = orbitItems.length;
const PARTICLE_COUNT = 220;

const dotColors = [
  "#D35528", "#2D6BE4", "#0E8A7D", "#7048D6",
  "#E8A317", "#DC2626", "#059669", "#8B5CF6",
  "#0891B2", "#D946EF",
];

const points = [
  "Full-cycle product development from ideation to launch",
  "Dedicated engineering teams with domain expertise",
  "Agile methodology with bi-weekly sprint reviews",
  "Post-launch support and continuous optimization",
  "SOC 2, GDPR, and HIPAA compliant workflows",
];

/* ═══════════════════════════════════════════
   PARTICLE CANVAS
   ═══════════════════════════════════════════ */
function ParticleField({ isHovered, containerSize }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animIdRef = useRef(null);
  const hoveredRef = useRef(false);

  useEffect(() => {
    hoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    if (!containerSize || containerSize < 10) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;
    canvas.width = containerSize * dpr;
    canvas.height = containerSize * dpr;
    canvas.style.width = containerSize + "px";
    canvas.style.height = containerSize + "px";
    ctx.scale(dpr, dpr);

    // ═══ TRUE CENTER ═══
    const cx = containerSize / 2;
    const cy = containerSize / 2;

    // ── Default clustered radius — visible sphere ──
    const homeR = containerSize * 0.15;

    // ── Spread boundaries — stays inside orbit ring ──
    const spreadMinR = containerSize * 0.12;
    const spreadMaxR = containerSize * 0.37;

    // ═══ Create particles around TRUE center ═══
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => {
      // Home: arranged as a visible sphere cluster at center
      const hAngle = Math.random() * Math.PI * 2;
      const hDist = Math.pow(Math.random(), 0.5) * homeR;
      const homeX = cx + Math.cos(hAngle) * hDist;
      const homeY = cy + Math.sin(hAngle) * hDist;

      // Spread: scattered outward
      const sAngle = Math.random() * Math.PI * 2;
      const sDist = spreadMinR + Math.random() * (spreadMaxR - spreadMinR);
      const spreadX = cx + Math.cos(sAngle) * sDist;
      const spreadY = cy + Math.sin(sAngle) * sDist;

      return {
        homeX,
        homeY,
        spreadX,
        spreadY,
        x: homeX,
        y: homeY,
        size: 1.5 + Math.random() * 3,
        baseOpacity: 0.5 + Math.random() * 0.5,
        color: dotColors[Math.floor(Math.random() * dotColors.length)],
        speed: 0.018 + Math.random() * 0.035,
        oscAngle: Math.random() * Math.PI * 2,
        oscSpeed: 0.004 + Math.random() * 0.01,
        oscAmp: 1 + Math.random() * 3,
        pulsePhase: Math.random() * Math.PI * 2,
      };
    });

    const LINE_DIST = containerSize * 0.085;

    const draw = () => {
      ctx.clearRect(0, 0, containerSize, containerSize);
      const spread = hoveredRef.current;
      const particles = particlesRef.current;

      // ── Update & draw each particle ──
      particles.forEach((p) => {
        const tX = spread ? p.spreadX : p.homeX;
        const tY = spread ? p.spreadY : p.homeY;

        p.oscAngle += p.oscSpeed;
        const ox = Math.cos(p.oscAngle) * p.oscAmp;
        const oy = Math.sin(p.oscAngle * 1.3) * p.oscAmp;

        p.x += (tX + ox - p.x) * p.speed;
        p.y += (tY + oy - p.y) * p.speed;

        p.pulsePhase += 0.025;
        const pulse = 0.85 + 0.15 * Math.sin(p.pulsePhase);
        const alpha = p.baseOpacity * pulse * (spread ? 0.85 : 0.75);

        // ── Dot ──
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        // ── Glow halo (always on larger dots, stronger when spread) ──
        if (p.size > 2) {
          const glowMul = spread ? 3.5 : 2.5;
          const glowAlpha = spread ? 0.14 : 0.08;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * glowMul, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(
            p.x, p.y, p.size * 0.3,
            p.x, p.y, p.size * glowMul
          );
          grad.addColorStop(0, p.color);
          grad.addColorStop(1, "transparent");
          ctx.fillStyle = grad;
          ctx.globalAlpha = glowAlpha;
          ctx.fill();
        }
      });

      // ── Connecting lines between nearby particles ──
      ctx.lineWidth = 0.6;
      const checkStep = spread ? 2 : 3;
      for (let i = 0; i < particles.length; i += checkStep) {
        for (let j = i + 1; j < particles.length; j += checkStep) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DIST) {
            const lineAlpha = (1 - dist / LINE_DIST) * (spread ? 0.14 : 0.06);
            ctx.strokeStyle = a.color;
            ctx.globalAlpha = lineAlpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // ── Central ambient glow ──
      const glowAlpha = spread ? 0.05 : 0.12;
      const glowR = spread ? containerSize * 0.18 : containerSize * 0.12;
      const centerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
      centerGrad.addColorStop(0, `rgba(211, 85, 40, ${glowAlpha * 1.5})`);
      centerGrad.addColorStop(0.4, `rgba(232, 163, 23, ${glowAlpha})`);
      centerGrad.addColorStop(1, "transparent");
      ctx.globalAlpha = 1;
      ctx.fillStyle = centerGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = 1;
      animIdRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
    };
  }, [containerSize]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 5,
      }}
    />
  );
}

/* ═══════════════════════════════════════════
   ABOUT COMPONENT
   ═══════════════════════════════════════════ */
export default function About() {
  const [paused, setPaused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [containerSize, setContainerSize] = useState(0);
  const orbitRef = useRef(null);

  useEffect(() => {
    const measure = () => {
      if (orbitRef.current) {
        const rect = orbitRef.current.getBoundingClientRect();
        setContainerSize(Math.min(rect.width, rect.height));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section id="about" style={{ padding: "100px 0 120px", background: "var(--cream)" }}>
      <div className="container-x">
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* ── LEFT: Orbital Diagram ── */}
          <motion.div
            ref={orbitRef}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "relative",
              aspectRatio: "1",
              maxWidth: 520,
              margin: "0 auto",
              width: "100%",
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => {
              setPaused(false);
              setHoveredItem(null);
            }}
          >
            {/* ── Static decorative rings ── */}
            <div
              style={{
                position: "absolute",
                inset: "6%",
                borderRadius: "50%",
                border: "1px dashed var(--border)",
                opacity: 0.25,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "20%",
                borderRadius: "50%",
                border: "1px solid var(--border)",
                opacity: 0.3,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "35%",
                borderRadius: "50%",
                border: "1px solid var(--border-light)",
                background: "rgba(211,85,40,0.02)",
                pointerEvents: "none",
              }}
            />

            {/* Pulse ring */}
            <div
              className="orbit-pulse-ring"
              style={{
                position: "absolute",
                inset: "6%",
                borderRadius: "50%",
                border: "1.5px solid rgba(211,85,40,0.12)",
                pointerEvents: "none",
              }}
            />

            {/* ═══ PARTICLE FIELD ═══ */}
            <ParticleField isHovered={paused} containerSize={containerSize} />

            {/* ── Single Orbit Ring ── */}
            <div
              className="orbit-container"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                animationPlayState: paused ? "paused" : "running",
              }}
            >
              {orbitItems.map((item, i) => {
                const angleDeg = (360 / ITEM_COUNT) * i;
                const angleRad = (angleDeg * Math.PI) / 180;
                const x = 50 + ORBIT_RADIUS * Math.cos(angleRad);
                const y = 50 + ORBIT_RADIUS * Math.sin(angleRad);
                const isH = hoveredItem === i;

                return (
                  <div
                    key={item.label}
                    className="orbit-item"
                    onMouseEnter={() => setHoveredItem(i)}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{
                      position: "absolute",
                      left: `${x}%`,
                      top: `${y}%`,
                      zIndex: isH ? 40 : 20,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  >
                    <motion.div
                      animate={isH ? { scale: 1.4, y: -6 } : { scale: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      style={{
                        transform: "translate(-50%, -50%)",
                        background: "#fff",
                        border: `2px solid ${isH ? item.color : "var(--border-light)"}`,
                        borderRadius: 100,
                        padding: "8px 18px",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        whiteSpace: "nowrap",
                        cursor: "pointer",
                        boxShadow: isH
                          ? `0 12px 36px ${item.color}30, 0 0 0 5px ${item.color}10`
                          : "0 2px 8px rgba(0,0,0,0.04)",
                        transition: "border-color 0.3s, box-shadow 0.3s",
                      }}
                    >
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: item.color,
                          boxShadow: isH ? `0 0 14px ${item.color}90` : "none",
                          transition: "box-shadow 0.3s",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: isH ? item.color : "var(--ink-secondary)",
                          transition: "color 0.3s",
                        }}
                      >
                        {item.label}
                      </span>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-tag">Why Solven</span>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                marginBottom: 18,
              }}
            >
              Your technology partner from first commit to global scale
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "var(--ink-secondary)",
                lineHeight: 1.75,
                marginBottom: 32,
              }}
            >
              We don't just write code — we architect solutions. With deep domain
              expertise across fintech, healthcare, logistics, and e-commerce, our
              teams embed into your workflow and deliver outcomes that matter.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginBottom: 36,
              }}
            >
              {points.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                >
                  <div
                    style={{
                      marginTop: 3,
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "var(--accent-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
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

      <style>{`
        .orbit-container {
          animation: orbitSpin 40s linear infinite;
        }
        .orbit-item {
          animation: orbitCounterSpin 40s linear infinite;
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes orbitCounterSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        .orbit-pulse-ring {
          animation: orbitPulseAnim 3.5s ease-in-out infinite;
        }
        @keyframes orbitPulseAnim {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50%      { transform: scale(1.06); opacity: 0; }
        }
        @media (max-width: 1023px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}