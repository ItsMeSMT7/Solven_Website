import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain,
  Code2,
  BarChart3,
  Globe,
  Megaphone,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Zap,
  Users,
  Clock,
  Shield,
} from "lucide-react";

/* ═══ SERVICE DATA ═══ */
const services = [
  {
    icon: Brain,
    title: "AI/ML & Data Science",
    slug: "ai-ml",
    tagline: "Transform raw data into strategic advantage",
    desc: "End-to-end AI solutions from data collection to deployment. We build custom machine learning models, NLP engines, computer vision systems, and predictive analytics platforms that drive real business outcomes.",
    color: "#D35528",
    bg: "#FEF3ED",
    gradient: "linear-gradient(135deg, #D35528, #F59E0B)",
    features: [
      "Custom ML model development & training",
      "Natural Language Processing (NLP)",
      "Computer Vision & image recognition",
      "Predictive analytics & forecasting",
      "AI chatbots & virtual assistants",
      "Data pipeline architecture",
    ],
    stats: { projects: "80+", accuracy: "97%", models: "200+" },
  },
  {
    icon: Code2,
    title: "Custom Software Solutions",
    slug: "custom-software",
    tagline: "Enterprise-grade software built for your workflow",
    desc: "From ERP systems to CRM platforms and custom web applications — we architect, develop, and maintain software that scales with your business. Full-stack expertise across modern frameworks.",
    color: "#2D6BE4",
    bg: "#EFF6FF",
    gradient: "linear-gradient(135deg, #2D6BE4, #60A5FA)",
    features: [
      "Custom ERP & CRM development",
      "Web application development",
      "API design & integration",
      "Legacy system modernization",
      "Microservices architecture",
      "Cloud-native applications",
    ],
    stats: { projects: "120+", uptime: "99.9%", clients: "60+" },
  },
  {
    icon: BarChart3,
    title: "Business Intelligence & Dashboards",
    slug: "bi-dashboards",
    tagline: "Data-driven decisions at every level",
    desc: "Interactive dashboards and reporting systems that give your team real-time visibility. From KPI tracking to advanced analytics — we turn your data into actionable intelligence.",
    color: "#0E8A7D",
    bg: "#F0FDFA",
    gradient: "linear-gradient(135deg, #0E8A7D, #34D399)",
    features: [
      "Real-time KPI dashboards",
      "Custom reporting systems",
      "Data warehouse design",
      "ETL pipeline development",
      "Automated report generation",
      "Embedded analytics",
    ],
    stats: { dashboards: "200+", dataPoints: "50M+", savings: "40%" },
  },
  {
    icon: Globe,
    title: "Business Perfect Websites",
    slug: "websites",
    tagline: "Pixel-perfect websites that convert",
    desc: "Static landing pages, dynamic web platforms, and e-commerce solutions. Performance-optimized, SEO-ready, and designed to convert visitors into customers.",
    color: "#7048D6",
    bg: "#F5F3FF",
    gradient: "linear-gradient(135deg, #7048D6, #A78BFA)",
    features: [
      "Static & dynamic websites",
      "E-commerce platforms",
      "Progressive Web Apps (PWA)",
      "CMS integration (WordPress, Strapi)",
      "Performance optimization",
      "SEO-ready architecture",
    ],
    stats: { websites: "150+", speed: "<2s", conversion: "+45%" },
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    slug: "digital-marketing",
    tagline: "Grow your digital presence strategically",
    desc: "Full-spectrum digital marketing — from search engine optimization and paid ads to WhatsApp Business API integration. Data-driven campaigns that deliver measurable ROI.",
    color: "#CA8A04",
    bg: "#FEFCE8",
    gradient: "linear-gradient(135deg, #CA8A04, #FBBF24)",
    features: [
      "Search Engine Optimization (SEO)",
      "Google & Meta Ads management",
      "WhatsApp Business API setup",
      "Content marketing strategy",
      "Social media management",
      "Analytics & conversion tracking",
    ],
    stats: { campaigns: "300+", roi: "5.2x", leads: "100K+" },
  },
];

const processSteps = [
  { icon: Users, title: "Discovery", desc: "Deep-dive into your business needs, goals, and technical requirements." },
  { icon: Sparkles, title: "Strategy", desc: "Architecture planning, tech stack selection, and roadmap creation." },
  { icon: Code2, title: "Development", desc: "Agile sprints with bi-weekly reviews, continuous integration and testing." },
  { icon: Zap, title: "Launch & Scale", desc: "Deployment, monitoring, optimization, and ongoing support." },
];

const whyChoose = [
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2, GDPR, and HIPAA compliant processes." },
  { icon: Clock, title: "On-Time Delivery", desc: "98% on-time delivery rate across 200+ projects." },
  { icon: Users, title: "Dedicated Teams", desc: "Full-stack engineers embedded in your workflow." },
  { icon: Zap, title: "Agile Process", desc: "Sprint-based development with continuous feedback." },
];

/* ═══ COMPONENT ═══ */
export default function ServicesPage() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [expandedIdx, setExpandedIdx] = useState(null);

  return (
    <>
      {/* ═══ HERO SECTION ═══ */}
      <section
        style={{
          position: "relative",
          paddingTop: 160,
          paddingBottom: 80,
          overflow: "hidden",
          background:
            "linear-gradient(180deg, #FFF9F5 0%, #FFF5EE 30%, #FFFBF7 60%, #FFFFFF 100%)",
        }}
      >
        {/* Background blobs */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "5%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(211,85,40,0.06), transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            left: "-5%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(232,163,23,0.05), transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div
          className="dot-bg"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.15,
            pointerEvents: "none",
          }}
        />

        <div className="container-x" style={{ position: "relative", zIndex: 5 }}>
          <div
            style={{
              maxWidth: 720,
              margin: "0 auto",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-tag">Our Services</span>
            </motion.div>

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
                fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              Solutions crafted for{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), var(--amber))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                every layer
              </span>{" "}
              of your business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                color: "var(--ink-secondary)",
                maxWidth: 560,
                marginBottom: 36,
                lineHeight: 1.75,
              }}
            >
              From AI-powered automation to stunning websites — we deliver
              enterprise-grade solutions tailored to your unique needs and
              growth goals.
            </motion.p>

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
              <Link
                to="/#contactus"
                className="btn-fill"
                style={{ textDecoration: "none" }}
              >
                Discuss your project <ArrowRight size={16} />
              </Link>
              <Link
                to="/products"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 32px",
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
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--ink)";
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.transform = "translateY(-2px)";
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
                View Products
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES GRID ═══ */}
      <section style={{ padding: "80px 0 100px" }}>
        <div className="container-x">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            {services.map((svc, i) => {
              const isH = hoveredIdx === i;
              const isExpanded = expandedIdx === i;

              return (
                <motion.div
                  key={svc.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() =>
                    setExpandedIdx(isExpanded ? null : i)
                  }
                  className="card-base"
                  style={{
                    overflow: "hidden",
                    cursor: "pointer",
                    position: "relative",
                    transition:
                      "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: isH ? "translateY(-4px)" : "translateY(0)",
                    boxShadow: isH
                      ? `0 20px 48px ${svc.color}12, 0 8px 20px rgba(0,0,0,0.05)`
                      : "0 1px 4px rgba(0,0,0,0.04)",
                    borderColor: isH
                      ? `${svc.color}30`
                      : "var(--border-light)",
                  }}
                >
                  {/* Top accent line */}
                  <div
                    style={{
                      height: 3,
                      background: svc.gradient,
                      transform: isH ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition:
                        "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  />

                  {/* Glow blob */}
                  <div
                    style={{
                      position: "absolute",
                      top: -60,
                      right: -60,
                      width: 200,
                      height: 200,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${svc.color}06, transparent 70%)`,
                      opacity: isH ? 1 : 0,
                      transition: "opacity 0.4s",
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    className="svc-card-inner"
                    style={{
                      padding: "32px 36px",
                      display: "grid",
                      gridTemplateColumns: "auto 1fr auto",
                      gap: 28,
                      alignItems: "center",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    {/* Icon */}
                    <motion.div
                      // animate={
                      //   isH
                      //     ? { scale: 1.12, rotate: -6 }
                      //     : { scale: 1, rotate: 0 }
                      // }
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 16,
                        background: isH ? svc.gradient : svc.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: isH
                          ? `0 8px 24px ${svc.color}25`
                          : "none",
                        transition:
                          "background 0.4s ease, box-shadow 0.4s ease",
                        flexShrink: 0,
                      }}
                    >
                      <svc.icon
                        size={28}
                        style={{
                          color: isH ? "#fff" : svc.color,
                          transition: "color 0.3s",
                        }}
                        strokeWidth={1.6}
                      />
                    </motion.div>

                    {/* Text */}
                    <div style={{ minWidth: 0 }}>
                      <h3
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: 22,
                          marginBottom: 6,
                          color: isH ? svc.color : "var(--ink)",
                          transition: "color 0.3s",
                        }}
                      >
                        {svc.title}
                      </h3>
                      <p
                        style={{
                          fontSize: 15,
                          color: "var(--ink-secondary)",
                          lineHeight: 1.6,
                        }}
                      >
                        {svc.tagline}
                      </p>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      animate={
                        isExpanded
                          ? { rotate: 90 }
                          : { rotate: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      style={{ flexShrink: 0 }}
                    >
                      <ArrowRight
                        size={20}
                        style={{
                          color: isH
                            ? svc.color
                            : "var(--ink-muted)",
                          transition: "color 0.3s",
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* ── Expanded Content ── */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      style={{
                        padding: "0 36px 36px",
                        borderTop: "1px solid var(--border-light)",
                        paddingTop: 28,
                      }}
                    >
                      <div
                        className="svc-expanded-grid"
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: 36,
                        }}
                      >
                        {/* Left: Description + Stats */}
                        <div>
                          <p
                            style={{
                              fontSize: 15,
                              color: "var(--ink-secondary)",
                              lineHeight: 1.75,
                              marginBottom: 28,
                            }}
                          >
                            {svc.desc}
                          </p>

                          <div
                            style={{
                              display: "flex",
                              gap: 20,
                              flexWrap: "wrap",
                            }}
                          >
                            {Object.entries(svc.stats).map(
                              ([key, val]) => (
                                <div
                                  key={key}
                                  style={{
                                    padding: "14px 20px",
                                    borderRadius: 14,
                                    background: svc.bg,
                                    border: `1px solid ${svc.color}15`,
                                    textAlign: "center",
                                    minWidth: 90,
                                  }}
                                >
                                  <div
                                    style={{
                                      fontFamily: "var(--serif)",
                                      fontSize: 22,
                                      fontWeight: 700,
                                      color: svc.color,
                                    }}
                                  >
                                    {val}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: 11,
                                      textTransform: "uppercase",
                                      letterSpacing: "0.08em",
                                      color: "var(--ink-muted)",
                                      fontWeight: 700,
                                      marginTop: 4,
                                    }}
                                  >
                                    {key}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        {/* Right: Features list */}
                        <div>
                          <div
                            style={{
                              fontSize: 13,
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                              color: "var(--ink-muted)",
                              marginBottom: 16,
                            }}
                          >
                            What's included
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 12,
                            }}
                          >
                            {svc.features.map((f, fi) => (
                              <motion.div
                                key={f}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: fi * 0.05,
                                  duration: 0.3,
                                }}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 10,
                                }}
                              >
                                <CheckCircle2
                                  size={16}
                                  style={{ color: svc.color, flexShrink: 0 }}
                                />
                                <span
                                  style={{
                                    fontSize: 14,
                                    color: "var(--ink-secondary)",
                                  }}
                                >
                                  {f}
                                </span>
                              </motion.div>
                            ))}
                          </div>

                          <Link
                            to="/#contactus"
                            className="btn-fill"
                            style={{
                              marginTop: 28,
                              textDecoration: "none",
                              display: "inline-flex",
                              background: svc.gradient,
                            }}
                          >
                            Get a Quote{" "}
                            <ArrowUpRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS SECTION ═══ */}
      <section
        style={{
          padding: "80px 0 100px",
          background: "var(--cream)",
        }}
      >
        <div className="container-x">
          <div
            style={{
              maxWidth: 560,
              margin: "0 auto 60px",
              textAlign: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">How We Work</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
              }}
            >
              Our proven delivery process
            </motion.h2>
          </div>

          <div
            className="process-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card-base"
                style={{
                  padding: 28,
                  textAlign: "center",
                  position: "relative",
                  cursor: "default",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 20,
                    fontSize: 48,
                    fontFamily: "var(--serif)",
                    fontWeight: 700,
                    color: "var(--border-light)",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "var(--accent-bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <step.icon
                    size={22}
                    style={{ color: "var(--accent)" }}
                    strokeWidth={1.6}
                  />
                </div>

                <h4
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 18,
                    marginBottom: 8,
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--ink-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section style={{ padding: "80px 0 100px" }}>
        <div className="container-x">
          <div
            style={{
              maxWidth: 560,
              margin: "0 auto 60px",
              textAlign: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Why Solven</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
              }}
            >
              Built different. Delivered better.
            </motion.h2>
          </div>

          <div
            className="why-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
          >
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-base"
                style={{
                  padding: 28,
                  textAlign: "center",
                  cursor: "default",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "var(--accent-bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <item.icon
                    size={22}
                    style={{ color: "var(--accent)" }}
                    strokeWidth={1.6}
                  />
                </div>
                <h4
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 17,
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--ink-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section style={{ padding: "0 0 100px" }}>
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 28,
              background:
                "linear-gradient(135deg, #1a0f07, #2d1810, #1a1005)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.06,
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 350,
                height: 350,
                borderRadius: "50%",
                background: "rgba(211,85,40,0.12)",
                filter: "blur(80px)",
              }}
            />

            <div
              style={{
                position: "relative",
                padding: "64px 32px",
                textAlign: "center",
              }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{
                  fontFamily: "var(--serif)",
                  color: "#fff",
                  fontSize: "clamp(2rem, 4.5vw, 2.8rem)",
                  maxWidth: 580,
                  margin: "0 auto 20px",
                }}
              >
                Ready to start your next project?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.5)",
                  maxWidth: 440,
                  margin: "0 auto 32px",
                }}
              >
                Let's discuss how our services can transform your business.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/#contactus"
                  className="btn-fill"
                  style={{
                    background: "#fff",
                    color: "var(--ink)",
                    textDecoration: "none",
                  }}
                >
                  Schedule a consultation{" "}
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ RESPONSIVE STYLES ═══ */}
      <style>{`
        @media (max-width: 900px) {
          .svc-card-inner {
            grid-template-columns: auto 1fr !important;
            gap: 16px !important;
            padding: 24px !important;
          }
          .svc-card-inner > div:last-child {
            display: none;
          }
          .svc-expanded-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 768px) {
          .process-grid,
          .why-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .process-grid,
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}