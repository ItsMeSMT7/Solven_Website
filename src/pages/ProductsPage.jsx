import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Bot,
  PhoneCall,
  LayoutDashboard,
  Gem,
  FileText,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Star,
  ExternalLink,
} from "lucide-react";

/* ═══ PRODUCT DATA ═══ */
const products = [
  {
    icon: Bot,
    title: "AI Digital Marketing Tool",
    tagline: "Your AI-powered marketing command center",
    desc: "Automate Google My Business responses with AI, get intelligent ad campaign recommendations, and manage your entire digital presence from a single dashboard. Our AI consultant analyzes your campaigns in real-time and suggests optimizations that maximize ROI.",
    color: "#D35528",
    bg: "#FEF3ED",
    gradient: "linear-gradient(135deg, #D35528, #F59E0B)",
    features: [
      "GMB auto-reply with AI intelligence",
      "AI ads consultant & optimizer",
      "Multi-platform campaign management",
      "Real-time performance analytics",
      "Competitor analysis dashboard",
      "Automated reporting & insights",
    ],
    highlights: [
      { label: "Response Time", value: "<30s" },
      { label: "ROI Increase", value: "3.2x" },
      { label: "Time Saved", value: "15h/week" },
    ],
    badge: "Most Popular",
  },
  {
    icon: PhoneCall,
    title: "AI Calling Agent",
    tagline: "Human-like AI conversations at scale",
    desc: "A 2-way conversational AI calling system that handles inbound and outbound calls with natural language understanding. Perfect for customer support, appointment scheduling, lead qualification, and follow-up calls — all running 24/7 without human intervention.",
    color: "#2D6BE4",
    bg: "#EFF6FF",
    gradient: "linear-gradient(135deg, #2D6BE4, #60A5FA)",
    features: [
      "2-way natural conversation AI",
      "Inbound & outbound call handling",
      "Appointment scheduling automation",
      "Lead qualification & scoring",
      "Multi-language support",
      "CRM integration & call logging",
    ],
    highlights: [
      { label: "Calls/Day", value: "10K+" },
      { label: "Resolution", value: "89%" },
      { label: "Cost Saving", value: "70%" },
    ],
    badge: "AI Powered",
  },
  {
    icon: LayoutDashboard,
    title: "Project Management Software",
    tagline: "Built for teams that ship fast",
    desc: "A custom-built project management platform designed for modern development teams. Sprint planning, resource allocation, time tracking, Kanban boards, Gantt charts, and integrated communication — everything your team needs to deliver on time.",
    color: "#0E8A7D",
    bg: "#F0FDFA",
    gradient: "linear-gradient(135deg, #0E8A7D, #34D399)",
    features: [
      "Sprint planning & backlog management",
      "Kanban boards & Gantt charts",
      "Time tracking & resource allocation",
      "Team communication & file sharing",
      "Automated status reports",
      "Client portal & access control",
    ],
    highlights: [
      { label: "Productivity", value: "+40%" },
      { label: "On-Time", value: "98%" },
      { label: "Teams Using", value: "500+" },
    ],
    badge: "Enterprise",
  },
  {
    icon: Gem,
    title: "Jewellery Retail Software",
    tagline: "Complete retail management for jewellers",
    desc: "Purpose-built software for the jewellery industry. Manage inventory with detailed item tracking (weight, purity, making charges), handle billing with dynamic gold rate updates, customer relationship management, and comprehensive reporting for your jewellery business.",
    color: "#CA8A04",
    bg: "#FEFCE8",
    gradient: "linear-gradient(135deg, #CA8A04, #FBBF24)",
    features: [
      "Inventory management with purity tracking",
      "Dynamic gold/silver rate billing",
      "Customer CRM & purchase history",
      "Making charge calculator",
      "GST-compliant invoicing",
      "Barcode & tag printing",
    ],
    highlights: [
      { label: "Accuracy", value: "99.9%" },
      { label: "Time Saved", value: "60%" },
      { label: "Retailers", value: "200+" },
    ],
    badge: "Industry Specific",
  },
  {
    icon: FileText,
    title: "Document Generator Dynamic",
    tagline: "Automate legal & audit documents instantly",
    desc: "A powerful dynamic document generation platform for legal professionals and auditors. Create contracts, compliance reports, audit documents, and legal notices from customizable templates with auto-fill fields, digital signatures, and version control.",
    color: "#7048D6",
    bg: "#F5F3FF",
    gradient: "linear-gradient(135deg, #7048D6, #A78BFA)",
    features: [
      "Dynamic template engine",
      "Legal document auto-generation",
      "Audit report builder",
      "Digital signature integration",
      "Version control & history",
      "Bulk document generation",
    ],
    highlights: [
      { label: "Templates", value: "500+" },
      { label: "Docs/Day", value: "1K+" },
      { label: "Time Saved", value: "80%" },
    ],
    badge: "Professional",
  },
];

/* ═══ COMPONENT ═══ */
export default function ProductsPage() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

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
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "10%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(45,107,228,0.06), transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "-5%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(211,85,40,0.05), transparent 70%)",
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

        <div
          className="container-x"
          style={{ position: "relative", zIndex: 5 }}
        >
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
              <span className="section-tag">Our Products</span>
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
              Products that{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), var(--amber))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                redefine
              </span>{" "}
              how you work
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
              Ready-to-deploy SaaS products powered by AI and built for
              scale. From marketing automation to document generation —
              tools your team will love.
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
                Request a Demo <Sparkles size={16} />
              </Link>
              <Link
                to="/services"
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
                View Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PRODUCTS GRID ═══ */}
      <section style={{ padding: "60px 0 100px" }}>
        <div className="container-x">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 32,
            }}
          >
            {products.map((product, i) => {
              const isH = hoveredIdx === i;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    delay: 0.1,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="card-base"
                  style={{
                    overflow: "hidden",
                    position: "relative",
                    transition:
                      "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: isH
                      ? "translateY(-6px)"
                      : "translateY(0)",
                    boxShadow: isH
                      ? `0 24px 56px ${product.color}10, 0 8px 24px rgba(0,0,0,0.05)`
                      : "0 1px 4px rgba(0,0,0,0.04)",
                    borderColor: isH
                      ? `${product.color}25`
                      : "var(--border-light)",
                  }}
                >
                  {/* Top accent */}
                  <div
                    style={{
                      height: 3,
                      background: product.gradient,
                      transform: isH
                        ? "scaleX(1)"
                        : "scaleX(0)",
                      transformOrigin: isEven ? "left" : "right",
                      transition:
                        "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  />

                  {/* Glow */}
                  <div
                    style={{
                      position: "absolute",
                      top: -80,
                      [isEven ? "right" : "left"]: -80,
                      width: 300,
                      height: 300,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${product.color}06, transparent 70%)`,
                      opacity: isH ? 1 : 0,
                      transition: "opacity 0.4s",
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    className="product-card-inner"
                    style={{
                      padding: "40px 44px",
                      display: "grid",
                      gridTemplateColumns: isEven
                        ? "1fr 1fr"
                        : "1fr 1fr",
                      gap: 48,
                      alignItems: "center",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    {/* Content side */}
                    <div
                      style={{
                        order: isEven ? 1 : 2,
                      }}
                    >
                      {/* Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "5px 14px",
                          borderRadius: 100,
                          background: product.bg,
                          border: `1px solid ${product.color}20`,
                          marginBottom: 20,
                        }}
                      >
                        <Star
                          size={12}
                          style={{ color: product.color }}
                          fill={product.color}
                        />
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: product.color,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {product.badge}
                        </span>
                      </motion.div>

                      {/* Icon + Title */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                          marginBottom: 14,
                        }}
                      >
                        <motion.div
                          // animate={
                          //   isH
                          //     ? { scale: 1.1, rotate: -6 }
                          //     : { scale: 1, rotate: 0 }
                          // }
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                          style={{
                            width: 56,
                            height: 56,
                            borderRadius: 16,
                            background: isH
                              ? product.gradient
                              : product.bg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: isH
                              ? `0 8px 24px ${product.color}25`
                              : "none",
                            transition:
                              "background 0.4s, box-shadow 0.4s",
                            flexShrink: 0,
                          }}
                        >
                          <product.icon
                            size={26}
                            style={{
                              color: isH ? "#fff" : product.color,
                              transition: "color 0.3s",
                            }}
                            strokeWidth={1.6}
                          />
                        </motion.div>
                        <div>
                          <h3
                            style={{
                              fontFamily: "var(--serif)",
                              fontSize: 24,
                              color: isH
                                ? product.color
                                : "var(--ink)",
                              transition: "color 0.3s",
                              marginBottom: 2,
                            }}
                          >
                            {product.title}
                          </h3>
                          <p
                            style={{
                              fontSize: 14,
                              color: "var(--ink-muted)",
                            }}
                          >
                            {product.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: 15,
                          color: "var(--ink-secondary)",
                          lineHeight: 1.75,
                          marginBottom: 28,
                        }}
                      >
                        {product.desc}
                      </p>

                      {/* Highlight stats */}
                      <div
                        style={{
                          display: "flex",
                          gap: 16,
                          marginBottom: 28,
                          flexWrap: "wrap",
                        }}
                      >
                        {product.highlights.map((h) => (
                          <div
                            key={h.label}
                            style={{
                              padding: "12px 18px",
                              borderRadius: 12,
                              background: product.bg,
                              border: `1px solid ${product.color}12`,
                              textAlign: "center",
                              minWidth: 80,
                            }}
                          >
                            <div
                              style={{
                                fontFamily: "var(--serif)",
                                fontSize: 20,
                                fontWeight: 700,
                                color: product.color,
                              }}
                            >
                              {h.value}
                            </div>
                            <div
                              style={{
                                fontSize: 10,
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                color: "var(--ink-muted)",
                                fontWeight: 700,
                                marginTop: 2,
                              }}
                            >
                              {h.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTAs */}
                      <div
                        style={{
                          display: "flex",
                          gap: 12,
                          flexWrap: "wrap",
                        }}
                      >
                        <Link
                          to="/#contactus"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "12px 28px",
                            fontSize: 14,
                            fontWeight: 700,
                            borderRadius: 100,
                            border: "none",
                            cursor: "pointer",
                            background: product.gradient,
                            color: "#fff",
                            textDecoration: "none",
                            transition: "all 0.35s ease",
                            boxShadow: `0 4px 16px ${product.color}20`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-2px)";
                            e.currentTarget.style.boxShadow = `0 8px 28px ${product.color}30`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(0)";
                            e.currentTarget.style.boxShadow = `0 4px 16px ${product.color}20`;
                          }}
                        >
                          Request Demo{" "}
                          <ArrowRight size={14} />
                        </Link>
                        <button
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "12px 24px",
                            fontSize: 14,
                            fontWeight: 600,
                            borderRadius: 100,
                            border: `1.5px solid var(--border)`,
                            background: "transparent",
                            color: "var(--ink-secondary)",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor =
                              product.color;
                            e.currentTarget.style.color =
                              product.color;
                            e.currentTarget.style.transform =
                              "translateY(-2px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor =
                              "var(--border)";
                            e.currentTarget.style.color =
                              "var(--ink-secondary)";
                            e.currentTarget.style.transform =
                              "translateY(0)";
                          }}
                        >
                          Learn More{" "}
                          <ExternalLink size={13} />
                        </button>
                      </div>
                    </div>

                    {/* Features side */}
                    <div
                      style={{
                        order: isEven ? 2 : 1,
                      }}
                    >
                      <div
                        style={{
                          background: product.bg,
                          borderRadius: 20,
                          padding: 32,
                          border: `1px solid ${product.color}10`,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 12,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: product.color,
                            marginBottom: 20,
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <Zap
                            size={14}
                            style={{ color: product.color }}
                          />
                          Key Features
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 14,
                          }}
                        >
                          {product.features.map(
                            (f, fi) => (
                              <motion.div
                                key={f}
                                initial={{
                                  opacity: 0,
                                  x: isEven ? 10 : -10,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: 0.2 + fi * 0.06,
                                  duration: 0.4,
                                }}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 12,
                                  padding: "10px 14px",
                                  borderRadius: 10,
                                  background: "#fff",
                                  border: "1px solid transparent",
                                  transition: "all 0.3s ease",
                                  cursor: "default",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.borderColor = `${product.color}20`;
                                  e.currentTarget.style.transform =
                                    "translateX(4px)";
                                  e.currentTarget.style.boxShadow = `0 4px 12px ${product.color}08`;
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.borderColor =
                                    "transparent";
                                  e.currentTarget.style.transform =
                                    "translateX(0)";
                                  e.currentTarget.style.boxShadow =
                                    "none";
                                }}
                              >
                                <CheckCircle2
                                  size={16}
                                  style={{
                                    color: product.color,
                                    flexShrink: 0,
                                  }}
                                />
                                <span
                                  style={{
                                    fontSize: 14,
                                    color: "var(--ink-secondary)",
                                    fontWeight: 500,
                                  }}
                                >
                                  {f}
                                </span>
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON / TRUST SECTION ═══ */}
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
              <span className="section-tag">
                Why Our Products
              </span>
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
              Built for real businesses, not demos
            </motion.h2>
          </div>

          <div
            className="trust-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {[
              {
                icon: Zap,
                title: "Production Ready",
                desc: "Battle-tested systems handling millions of operations daily. Not prototypes — real products.",
                color: "#D35528",
              },
              {
                icon: Sparkles,
                title: "AI-First Architecture",
                desc: "Every product leverages cutting-edge AI models, fine-tuned for specific industry use cases.",
                color: "#2D6BE4",
              },
              {
                icon: ArrowUpRight,
                title: "Scales With You",
                desc: "From startup to enterprise. Our products grow with your business — no migration needed.",
                color: "#0E8A7D",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.5,
                }}
                className="card-base"
                style={{
                  padding: 32,
                  textAlign: "center",
                  cursor: "default",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: `${item.color}10`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <item.icon
                    size={24}
                    style={{ color: item.color }}
                    strokeWidth={1.6}
                  />
                </div>
                <h4
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 18,
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--ink-secondary)",
                    lineHeight: 1.65,
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
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
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
                left: -60,
                width: 350,
                height: 350,
                borderRadius: "50%",
                background: "rgba(45,107,228,0.12)",
                filter: "blur(80px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -60,
                right: -60,
                width: 280,
                height: 280,
                borderRadius: "50%",
                background: "rgba(211,85,40,0.1)",
                filter: "blur(60px)",
              }}
            />

            <div
              style={{
                position: "relative",
                padding: "64px 32px",
                textAlign: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 18px",
                  borderRadius: 100,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  marginBottom: 28,
                }}
              >
                <Sparkles
                  size={14}
                  style={{ color: "#E8A317" }}
                />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  Start your free trial
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                style={{
                  fontFamily: "var(--serif)",
                  color: "#fff",
                  fontSize: "clamp(2rem, 4.5vw, 2.8rem)",
                  maxWidth: 580,
                  margin: "0 auto 20px",
                }}
              >
                Experience our products first-hand
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.5)",
                  maxWidth: 440,
                  margin: "0 auto 32px",
                }}
              >
                Schedule a personalized demo and see how our AI-powered
                products can transform your operations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 14,
                }}
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
                  Schedule a Demo{" "}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 28px",
                    fontSize: 15,
                    fontWeight: 700,
                    borderRadius: 100,
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "transparent",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.08)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "transparent";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.2)";
                  }}
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ RESPONSIVE STYLES ═══ */}
      <style>{`
        @media (max-width: 900px) {
          .product-card-inner {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding: 28px 24px !important;
          }
          .product-card-inner > div {
            order: unset !important;
          }
        }
        @media (max-width: 768px) {
          .trust-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}