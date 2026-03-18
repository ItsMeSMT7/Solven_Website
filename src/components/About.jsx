import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

/* ── Orbit Data ── */
const innerRingItems = [
  { label: "AI/ML", color: "#D35528" },
  { label: "Cloud", color: "#2D6BE4" },
  { label: "DevOps", color: "#0E8A7D" },
  { label: "Security", color: "#7048D6" },
  { label: "Mobile", color: "#E8A317" },
];

const outerRingItems = [
  { label: "Data", color: "#DC2626" },
  { label: "IoT", color: "#059669" },
  { label: "Web3", color: "#8B5CF6" },
  { label: "API", color: "#0891B2" },
  { label: "SaaS", color: "#D946EF" },
];

const PARTICLE_COUNT = 240;

const INNER_CIRCLE_R = 15;
const MIDDLE_CIRCLE_R = 30;
const OUTER_CIRCLE_R = 44;

const INNER_SPEED = 0.18;
const OUTER_SPEED = 0.12;

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
function ParticleField({ isHovered, containerSize, innerR, outerR }) {
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

    const actualW = canvas.clientWidth;
    const actualH = canvas.clientHeight;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = actualW * dpr;
    canvas.height = actualH * dpr;
    ctx.scale(dpr, dpr);

    const cx = actualW / 2;
    const cy = actualH / 2;
    const size = Math.min(actualW, actualH);

    const homeR = size * (innerR / 100);
    const spreadMaxR = size * (outerR / 100);

    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => {
      const hAngle = Math.random() * Math.PI * 2;
      const hDist = Math.pow(Math.random(), 0.45) * homeR;
      const homeX = cx + Math.cos(hAngle) * hDist;
      const homeY = cy + Math.sin(hAngle) * hDist;

      const sAngle = Math.random() * Math.PI * 2;
      const sDist = Math.pow(Math.random(), 0.6) * spreadMaxR;
      const spreadX = cx + Math.cos(sAngle) * sDist;
      const spreadY = cy + Math.sin(sAngle) * sDist;

      return {
        homeX, homeY, spreadX, spreadY,
        x: homeX, y: homeY,
        size: 1.8 + Math.random() * 3.5,
        baseOpacity: 0.55 + Math.random() * 0.45,
        color: dotColors[Math.floor(Math.random() * dotColors.length)],
        speed: 0.016 + Math.random() * 0.032,
        oscAngle: Math.random() * Math.PI * 2,
        oscSpeed: 0.003 + Math.random() * 0.008,
        oscAmp: 0.8 + Math.random() * 2.5,
        pulsePhase: Math.random() * Math.PI * 2,
      };
    });

    const LINE_DIST = size * 0.075;

    const draw = () => {
      ctx.clearRect(0, 0, actualW, actualH);
      const spread = hoveredRef.current;
      const particles = particlesRef.current;

      particles.forEach((p) => {
        const tX = spread ? p.spreadX : p.homeX;
        const tY = spread ? p.spreadY : p.homeY;

        p.oscAngle += p.oscSpeed;
        const ox = Math.cos(p.oscAngle) * p.oscAmp;
        const oy = Math.sin(p.oscAngle * 1.3) * p.oscAmp;

        p.x += (tX + ox - p.x) * p.speed;
        p.y += (tY + oy - p.y) * p.speed;

        const dx = p.x - cx;
        const dy = p.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > spreadMaxR) {
          const scale = spreadMaxR / dist;
          p.x = cx + dx * scale;
          p.y = cy + dy * scale;
        }

        p.pulsePhase += 0.025;
        const pulse = 0.85 + 0.15 * Math.sin(p.pulsePhase);
        const alpha = p.baseOpacity * pulse * (spread ? 0.82 : 0.72);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        if (p.size > 2.2) {
          const glowMul = spread ? 3.5 : 2.8;
          const glowAlpha = spread ? 0.13 : 0.08;
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

      ctx.lineWidth = 0.5;
      const checkStep = spread ? 2 : 3;
      for (let i = 0; i < particles.length; i += checkStep) {
        for (let j = i + 1; j < particles.length; j += checkStep) {
          const a = particles[i];
          const b = particles[j];
          const ddx = a.x - b.x;
          const ddy = a.y - b.y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          if (d < LINE_DIST) {
            const lineAlpha = (1 - d / LINE_DIST) * (spread ? 0.12 : 0.05);
            ctx.strokeStyle = a.color;
            ctx.globalAlpha = lineAlpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      const glowAlpha = spread ? 0.04 : 0.12;
      const glowR = spread ? spreadMaxR * 0.5 : homeR * 0.9;
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
  }, [containerSize, innerR, outerR]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
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
  const [isMobile, setIsMobile] = useState(false);

  const orbitRef = useRef(null);
  const innerItemRefs = useRef([]);
  const outerItemRefs = useRef([]);
  const animRef = useRef(null);
  const timeRef = useRef(0);
  const pausedRef = useRef(false);
  const isMobileRef = useRef(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    isMobileRef.current = isMobile;
  }, [isMobile]);

  useEffect(() => {
    const measure = () => {
      if (orbitRef.current) {
        const rect = orbitRef.current.getBoundingClientRect();
        setContainerSize(Math.min(rect.width, rect.height));
      }
      setIsMobile(window.innerWidth < 768);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const orbitRadii = isMobile
    ? { innerCircle: 12, middleCircle: 22, outerCircle: 34 }
    : {
        innerCircle: INNER_CIRCLE_R,
        middleCircle: MIDDLE_CIRCLE_R,
        outerCircle: OUTER_CIRCLE_R,
      };

  const outerInset = `${50 - orbitRadii.outerCircle}%`;
  const middleInset = `${50 - orbitRadii.middleCircle}%`;
  const innerInset = `${50 - orbitRadii.innerCircle}%`;

  /* ── JS-driven orbit ── */
  useEffect(() => {
    let prev = null;

    const tick = (now) => {
      if (prev === null) prev = now;
      const dt = (now - prev) / 1000;
      prev = now;

      if (!pausedRef.current) {
        timeRef.current += dt;
      }

      const t = timeRef.current;
      const mobile = isMobileRef.current;
      const mR = mobile ? 22 : MIDDLE_CIRCLE_R;
      const oR = mobile ? 34 : OUTER_CIRCLE_R;

      innerRingItems.forEach((_, i) => {
        const el = innerItemRefs.current[i];
        if (!el) return;
        const baseAngle = ((2 * Math.PI) / innerRingItems.length) * i;
        const angle = baseAngle + t * INNER_SPEED;
        el.style.left = `${50 + mR * Math.cos(angle)}%`;
        el.style.top = `${50 + mR * Math.sin(angle)}%`;
      });

      outerRingItems.forEach((_, i) => {
        const el = outerItemRefs.current[i];
        if (!el) return;
        const baseAngle = ((2 * Math.PI) / outerRingItems.length) * i;
        const angle = baseAngle - t * OUTER_SPEED;
        el.style.left = `${50 + oR * Math.cos(angle)}%`;
        el.style.top = `${50 + oR * Math.sin(angle)}%`;
      });

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isMobile]);

  return (
    <section
      id="about"
      className="about-section"
      style={{
        padding: isMobile ? "60px 0 80px" : "100px 0 120px",
        background: "var(--cream)",
      }}
    >
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
          <div className="orbit-centering-wrapper">
            <motion.div
              ref={orbitRef}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="orbit-container"
              style={{
                position: "relative",
                aspectRatio: "1",
                width: "100%",
              }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => {
                setPaused(false);
                setHoveredItem(null);
              }}
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => {
                setTimeout(() => {
                  setPaused(false);
                  setHoveredItem(null);
                }, 2000);
              }}
            >
              {/* ── Decorative circles ── */}
              <div
                style={{
                  position: "absolute",
                  inset: outerInset,
                  borderRadius: "50%",
                  border: "1px dashed var(--border)",
                  opacity: 0.25,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: middleInset,
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  opacity: 0.3,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: innerInset,
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
                  inset: outerInset,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(211,85,40,0.12)",
                  pointerEvents: "none",
                }}
              />

              {/* ═══ PARTICLES ═══ */}
              <ParticleField
                isHovered={paused}
                containerSize={containerSize}
                innerR={orbitRadii.innerCircle}
                outerR={orbitRadii.outerCircle}
              />

              {/* ── INNER RING ITEMS ── */}
              {innerRingItems.map((item, i) => {
                const key = `inner-${item.label}`;
                const isH = hoveredItem === key;
                const initAngle =
                  ((2 * Math.PI) / innerRingItems.length) * i;
                const initX =
                  50 + orbitRadii.middleCircle * Math.cos(initAngle);
                const initY =
                  50 + orbitRadii.middleCircle * Math.sin(initAngle);

                return (
                  <div
                    key={key}
                    ref={(el) => (innerItemRefs.current[i] = el)}
                    onMouseEnter={() => setHoveredItem(key)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onTouchStart={() => setHoveredItem(key)}
                    style={{
                      position: "absolute",
                      left: `${initX}%`,
                      top: `${initY}%`,
                      zIndex: isH ? 40 : 20,
                      willChange: "left, top",
                    }}
                  >
                    <motion.div
                      animate={
                        isH
                          ? {
                              scale: isMobile ? 1.15 : 1.35,
                              y: isMobile ? -2 : -5,
                            }
                          : { scale: 1, y: 0 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      className="orbit-pill"
                      style={{
                        transform: "translate(-50%, -50%)",
                        background: "#fff",
                        border: `${isMobile ? 1.5 : 2}px solid ${
                          isH ? item.color : "var(--border-light)"
                        }`,
                        borderRadius: 100,
                        padding: isMobile ? "3px 7px" : "7px 15px",
                        display: "flex",
                        alignItems: "center",
                        gap: isMobile ? 3 : 7,
                        whiteSpace: "nowrap",
                        cursor: "pointer",
                        boxShadow: isH
                          ? `0 10px 30px ${item.color}30, 0 0 0 4px ${item.color}10`
                          : "0 2px 8px rgba(0,0,0,0.04)",
                        transition: "border-color 0.3s, box-shadow 0.3s",
                      }}
                    >
                      <span
                        style={{
                          width: isMobile ? 5 : 9,
                          height: isMobile ? 5 : 9,
                          borderRadius: "50%",
                          background: item.color,
                          boxShadow: isH
                            ? `0 0 12px ${item.color}90`
                            : "none",
                          transition: "box-shadow 0.3s",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: isMobile ? 8 : 12,
                          fontWeight: 700,
                          color: isH
                            ? item.color
                            : "var(--ink-secondary)",
                          transition: "color 0.3s",
                          lineHeight: 1,
                        }}
                      >
                        {item.label}
                      </span>
                    </motion.div>
                  </div>
                );
              })}

              {/* ── OUTER RING ITEMS ── */}
              {outerRingItems.map((item, i) => {
                const key = `outer-${item.label}`;
                const isH = hoveredItem === key;
                const initAngle =
                  ((2 * Math.PI) / outerRingItems.length) * i;
                const initX =
                  50 + orbitRadii.outerCircle * Math.cos(initAngle);
                const initY =
                  50 + orbitRadii.outerCircle * Math.sin(initAngle);

                return (
                  <div
                    key={key}
                    ref={(el) => (outerItemRefs.current[i] = el)}
                    onMouseEnter={() => setHoveredItem(key)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onTouchStart={() => setHoveredItem(key)}
                    style={{
                      position: "absolute",
                      left: `${initX}%`,
                      top: `${initY}%`,
                      zIndex: isH ? 40 : 20,
                      willChange: "left, top",
                    }}
                  >
                    <motion.div
                      animate={
                        isH
                          ? {
                              scale: isMobile ? 1.15 : 1.4,
                              y: isMobile ? -2 : -6,
                            }
                          : { scale: 1, y: 0 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      className="orbit-pill"
                      style={{
                        transform: "translate(-50%, -50%)",
                        background: "#fff",
                        border: `${isMobile ? 1.5 : 2}px solid ${
                          isH ? item.color : "var(--border-light)"
                        }`,
                        borderRadius: 100,
                        padding: isMobile ? "3px 8px" : "8px 18px",
                        display: "flex",
                        alignItems: "center",
                        gap: isMobile ? 4 : 8,
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
                          width: isMobile ? 6 : 10,
                          height: isMobile ? 6 : 10,
                          borderRadius: "50%",
                          background: item.color,
                          boxShadow: isH
                            ? `0 0 14px ${item.color}90`
                            : "none",
                          transition: "box-shadow 0.3s",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: isMobile ? 9 : 13,
                          fontWeight: 700,
                          color: isH
                            ? item.color
                            : "var(--ink-secondary)",
                          transition: "color 0.3s",
                          lineHeight: 1,
                        }}
                      >
                        {item.label}
                      </span>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
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
              We don't just write code — we architect solutions. With deep
              domain expertise across fintech, healthcare, logistics, and
              e-commerce, our teams embed into your workflow and deliver
              outcomes that matter.
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
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                  }}
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
                    <Check
                      size={12}
                      style={{ color: "var(--accent)" }}
                      strokeWidth={3}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: 15,
                      color: "var(--ink-secondary)",
                    }}
                  >
                    {p}
                  </span>
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
        .orbit-pulse-ring {
          animation: orbitPulseAnim 3.5s ease-in-out infinite;
        }
        @keyframes orbitPulseAnim {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50%      { transform: scale(1.06); opacity: 0; }
        }

        /* ── Section-level overflow control ── */
        .about-section {
          overflow-x: clip;
          overflow-y: visible;
        }

        /* ── Desktop: orbit visible, centered ── */
        .orbit-centering-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .orbit-container {
          max-width: 520px;
          overflow: visible !important;
        }

        /* ── Tablet ── */
        @media (max-width: 1023px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .orbit-centering-wrapper {
            max-width: 480px;
            margin: 0 auto;
          }
        }

        /* ── Mobile: clip only this wrapper ── */
        @media (max-width: 767px) {
          .orbit-centering-wrapper {
            max-width: 100%;
            margin: 0 auto;
            padding: 0;
            overflow: hidden;
            border-radius: 12px;
          }
          .orbit-container {
            max-width: 100% !important;
            width: 100% !important;
            overflow: hidden !important;
          }
        }

        @media (max-width: 374px) {
          .orbit-pill {
            padding: 2px 5px !important;
            gap: 2px !important;
          }
        }
      `}</style>
    </section>
  );
}