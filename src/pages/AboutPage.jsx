import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Target,
  Eye,
  Rocket,
  Heart,
  Users,
  Globe,
  Award,
  CheckCircle2,
  Linkedin,
  Twitter,
  Github,
  Lightbulb,
  TrendingUp,
  Shield,
  Zap,
  Calendar,
  MapPin,
  Star,
} from "lucide-react";

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const milestones = [
  {
    year: "2019",
    title: "Founded in Pune",
    desc: "Started with a 3-person team passionate about solving real business problems with technology.",
    color: "#D35528",
    icon: Rocket,
  },
  {
    year: "2020",
    title: "First Enterprise Client",
    desc: "Delivered a custom ERP system for a leading logistics company, establishing our enterprise credentials.",
    color: "#2D6BE4",
    icon: Award,
  },
  {
    year: "2021",
    title: "AI Division Launched",
    desc: "Expanded into AI/ML services, building predictive analytics and NLP solutions for fintech clients.",
    color: "#0E8A7D",
    icon: Sparkles,
  },
  {
    year: "2022",
    title: "50+ Clients Milestone",
    desc: "Crossed 50 active enterprise clients across India, Middle East, and Southeast Asia.",
    color: "#7048D6",
    icon: Users,
  },
  {
    year: "2023",
    title: "Product Suite Launch",
    desc: "Launched our own SaaS products — AI Calling System, Digital Marketing Tool, and Document Generator.",
    color: "#CA8A04",
    icon: Zap,
  },
  {
    year: "2024",
    title: "Global Expansion",
    desc: "Expanded operations to serve clients in 8+ countries with a team of 40+ engineers and designers.",
    color: "#DC2626",
    icon: Globe,
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We don't follow trends — we set them. Every solution we build pushes the boundary of what's possible.",
    color: "#D35528",
    bg: "#FEF3ED",
  },
  {
    icon: Heart,
    title: "Client Obsession",
    desc: "Your success is our success. We embed ourselves into your team and treat your goals as our own.",
    color: "#DC2626",
    bg: "#FEF2F2",
  },
  {
    icon: Shield,
    title: "Uncompromising Quality",
    desc: "Every line of code is reviewed, tested, and optimized. We ship production-grade systems, always.",
    color: "#0E8A7D",
    bg: "#F0FDFA",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    desc: "We invest in our people and our craft. Learning is embedded in our culture — we grow together.",
    color: "#2D6BE4",
    bg: "#EFF6FF",
  },
];

const visionPoints = [
  {
    icon: Globe,
    title: "Democratize AI for Businesses",
    desc: "Make enterprise-grade AI accessible to companies of every size — not just tech giants.",
  },
  {
    icon: Rocket,
    title: "Build Products That Last",
    desc: "Create software that scales for decades, not just demos that impress for minutes.",
  },
  {
    icon: Users,
    title: "Empower 10,000 Businesses by 2028",
    desc: "Our mission is to digitally transform 10,000 businesses across emerging markets.",
  },
  {
    icon: Award,
    title: "Set the Standard for Indian Tech",
    desc: "Prove that world-class technology products can be built from India, for the world.",
  },
];

const teamMembers = [
  {
    name: "NIHAR VISPUTE",
    role: "Founder & CEO",
    desc: "Serial entrepreneur with 12+ years in enterprise technology. Previously led engineering at a Fortune 500 SaaS company. Passionate about using AI to solve real-world business problems.",
    avatar: "RS",
    color: "#D35528",
    gradient: "linear-gradient(135deg, #D35528, #F59E0B)",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
    tags: ["Strategy", "AI/ML", "Product"],
  },
  {
    name: "Paras Deshmane",
    role: "Co-Founder & CTO",
    desc: "Full-stack architect and systems thinker. Ex-Google engineer with expertise in distributed systems, ML infrastructure, and cloud-native architectures. Leads our 25+ person engineering team.",
    avatar: "AP",
    color: "#2D6BE4",
    gradient: "linear-gradient(135deg, #2D6BE4, #60A5FA)",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    tags: ["Architecture", "Cloud", "DevOps"],
  },
  {
    name: "Maithili Sarolkar",
    role: "COO & CMO",
    desc: "Operations expert who scaled three startups from seed to Series B. MBA from IIM Bangalore. Ensures every project is delivered on time, within budget, and exceeding expectations.",
    avatar: "VD",
    color: "#0E8A7D",
    gradient: "linear-gradient(135deg, #0E8A7D, #34D399)",
    socials: {
      linkedin: "#",
    },
    tags: ["Operations", "Growth", "Finance"],
  },
  // {
  //   name: "Priya Krishnan",
  //   role: "Head of AI Research",
  //   desc: "PhD in Machine Learning from IISc Bangalore. Published 15+ papers in top-tier conferences. Leads our AI research division, building cutting-edge models for production use cases.",
  //   avatar: "PK",
  //   color: "#7048D6",
  //   gradient: "linear-gradient(135deg, #7048D6, #A78BFA)",
  //   socials: {
  //     linkedin: "#",
  //     github: "#",
  //   },
  //   tags: ["ML Research", "NLP", "Computer Vision"],
  // },
  // {
  //   name: "Karthik Nair",
  //   role: "VP of Engineering",
  //   desc: "Backend systems expert with a passion for performance. Previously at Amazon Web Services. Architects our infrastructure to handle millions of requests with sub-10ms latency.",
  //   avatar: "KN",
  //   color: "#CA8A04",
  //   gradient: "linear-gradient(135deg, #CA8A04, #FBBF24)",
  //   socials: {
  //     linkedin: "#",
  //     twitter: "#",
  //     github: "#",
  //   },
  //   tags: ["Backend", "Infrastructure", "Performance"],
  // },
  // {
  //   name: "Meera Joshi",
  //   role: "Head of Design",
  //   desc: "Award-winning product designer who believes great design is invisible. 8+ years crafting intuitive interfaces for SaaS products. Champions user research-driven design across all projects.",
  //   avatar: "MJ",
  //   color: "#DC2626",
  //   gradient: "linear-gradient(135deg, #DC2626, #F87171)",
  //   socials: {
  //     linkedin: "#",
  //     twitter: "#",
  //   },
  //   tags: ["UI/UX", "Product Design", "Research"],
  // },
];

const companyStats = [
  { value: "40+", label: "Team Members", sub: "Engineers, designers & strategists" },
  { value: "200+", label: "Projects Delivered", sub: "Across 14 industries" },
  { value: "8+", label: "Countries Served", sub: "India, ME, SEA & beyond" },
  { value: "98%", label: "Client Retention", sub: "They come back, always" },
];

/* ═══════════════════════════════════════════
   ANIMATED COUNTER
   ═══════════════════════════════════════════ */
function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const numericValue = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || isNaN(numericValue)) return;
    let current = 0;
    const step = numericValue / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 25);
    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {isNaN(numericValue) ? value : count + suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════
   ABOUT PAGE COMPONENT
   ═══════════════════════════════════════════ */
export default function AboutPage() {
  const [hoveredTeam, setHoveredTeam] = useState(null);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  return (
    <>
      {/* ═══════════════════════════════════
          SECTION 0 — HERO
          ═══════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          paddingTop: 160,
          paddingBottom: 100,
          overflow: "hidden",
          background:
            "linear-gradient(180deg, #FFF9F5 0%, #FFF5EE 30%, #FFFBF7 60%, #FFFFFF 100%)",
        }}
      >
        {/* Blobs */}
        <div
          style={{
            position: "absolute",
            top: "-8%",
            right: "5%",
            width: 550,
            height: 550,
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
            top: "50%",
            left: "-8%",
            width: 450,
            height: 450,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(45,107,228,0.05), transparent 70%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            right: "30%",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(14,138,125,0.04), transparent 70%)",
            filter: "blur(50px)",
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
              maxWidth: 780,
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
              <span className="section-tag">About Solven</span>
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
                fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              We build technology that{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), var(--amber))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                transforms businesses
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                fontSize: "clamp(1rem, 2vw, 1.18rem)",
                color: "var(--ink-secondary)",
                maxWidth: 600,
                marginBottom: 44,
                lineHeight: 1.8,
              }}
            >
              Solven is a digital technology company headquartered in
              Pune, India. We partner with ambitious businesses to
              design, build, and scale intelligent software solutions that
              create lasting impact.
            </motion.p>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="about-hero-stats"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 2,
                background: "#fff",
                borderRadius: 20,
                border: "1px solid var(--border-light)",
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                width: "100%",
                maxWidth: 700,
              }}
            >
              {companyStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  style={{
                    padding: "28px 16px",
                    textAlign: "center",
                    borderRight:
                      i < 3
                        ? "1px solid var(--border-light)"
                        : "none",
                    cursor: "default",
                    transition: "background 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--cream)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 28,
                      fontWeight: 700,
                      background:
                        "linear-gradient(135deg, var(--accent), var(--amber))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      marginBottom: 6,
                    }}
                  >
                    <AnimatedNumber value={stat.value} />
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--ink)",
                      marginBottom: 2,
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--ink-muted)",
                    }}
                  >
                    {stat.sub}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SECTION 1 — OUR STORY
          ═══════════════════════════════════ */}
      <section style={{ padding: "80px 0 100px" }}>
        <div className="container-x">
          {/* Header */}
          <div
            style={{
              maxWidth: 620,
              margin: "0 auto 64px",
              textAlign: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Our Story</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                marginBottom: 16,
              }}
            >
              From a small idea to a{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), var(--amber))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                growing force
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: 17,
                color: "var(--ink-secondary)",
                lineHeight: 1.75,
                maxWidth: 540,
                margin: "0 auto",
              }}
            >
              Every great company starts with a problem worth solving.
              Here's how our journey unfolded.
            </motion.p>
          </div>

          {/* Story intro — two column */}
          <div
            className="story-intro-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "center",
              marginBottom: 80,
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 24,
                  marginBottom: 18,
                  lineHeight: 1.3,
                }}
              >
                It started with a frustration — and a whiteboard.
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--ink-secondary)",
                  lineHeight: 1.8,
                  marginBottom: 18,
                }}
              >
                In 2019, our founders — Rahul, Ananya, and Vikram — were
                working at different tech companies and kept running into
                the same problem: small and mid-sized businesses were
                being left behind in the digital revolution. Enterprise
                tools were too expensive, too complex, and too slow to
                deploy.
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--ink-secondary)",
                  lineHeight: 1.8,
                  marginBottom: 18,
                }}
              >
                So they quit their jobs, rented a small office in HSR
                Layout, Bangalore, and started building. The first
                project was a custom inventory system for a local
                jeweller. It was messy, scrappy, and imperfect — but it
                worked. And the client's business grew 40% that year.
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--ink-secondary)",
                  lineHeight: 1.8,
                }}
              >
                That moment crystallized our mission:{" "}
                <strong style={{ color: "var(--ink)" }}>
                  make world-class technology accessible to every
                  business, regardless of size.
                </strong>
              </p>
            </motion.div>

            {/* Right: Visual card */}
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
              <div
                className="card-base"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Gradient image placeholder */}
                <div
                  style={{
                    height: 220,
                    background:
                      "linear-gradient(135deg, #FFF5EE, #FEF3ED, #FEFCE8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: 0.08,
                      backgroundImage:
                        "radial-gradient(circle, var(--accent) 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      gap: 16,
                      position: "relative",
                    }}
                  >
                    {["RS", "AP", "VD"].map((initials, idx) => (
                      <motion.div
                        key={initials}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.4 + idx * 0.12,
                          type: "spring",
                          stiffness: 300,
                        }}
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: "50%",
                          background: [
                            "linear-gradient(135deg, #D35528, #F59E0B)",
                            "linear-gradient(135deg, #2D6BE4, #60A5FA)",
                            "linear-gradient(135deg, #0E8A7D, #34D399)",
                          ][idx],
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: 18,
                          fontWeight: 700,
                          fontFamily: "var(--serif)",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                          border: "3px solid #fff",
                        }}
                      >
                        {initials}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div style={{ padding: "24px 28px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 12,
                    }}
                  >
                    <Calendar
                      size={16}
                      style={{ color: "var(--accent)" }}
                    />
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "var(--accent)",
                      }}
                    >
                      Founded 2019
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 12,
                    }}
                  >
                    <MapPin
                      size={16}
                      style={{ color: "var(--ink-muted)" }}
                    />
                    <span
                      style={{
                        fontSize: 13,
                        color: "var(--ink-secondary)",
                      }}
                    >
                      HSR Layout, Bangalore, India
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--ink-muted)",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    "We didn't start with a grand vision. We started
                    with a single client and a promise to deliver
                    something that actually works."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Timeline ── */}
          <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: 24,
                top: 0,
                bottom: 0,
                width: 2,
                background:
                  "linear-gradient(to bottom, var(--border-light), var(--accent), var(--amber), var(--border-light))",
                borderRadius: 2,
              }}
            />

            {milestones.map((ms, i) => (
              <motion.div
                key={ms.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setHoveredMilestone(i)}
                onMouseLeave={() => setHoveredMilestone(null)}
                style={{
                  display: "flex",
                  gap: 28,
                  marginBottom: i < milestones.length - 1 ? 36 : 0,
                  position: "relative",
                  paddingLeft: 56,
                }}
              >
                {/* Dot on timeline */}
                <motion.div
                  animate={
                    hoveredMilestone === i
                      ? { scale: 1.4 }
                      : { scale: 1 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  }}
                  style={{
                    position: "absolute",
                    left: 16,
                    top: 6,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background:
                      hoveredMilestone === i
                        ? ms.color
                        : "#fff",
                    border: `3px solid ${ms.color}`,
                    boxShadow:
                      hoveredMilestone === i
                        ? `0 0 0 6px ${ms.color}15, 0 4px 12px ${ms.color}20`
                        : "0 0 0 4px #fff",
                    transition:
                      "background 0.3s, box-shadow 0.3s",
                    zIndex: 5,
                  }}
                />

                <div
                  className="card-base"
                  style={{
                    flex: 1,
                    padding: "24px 28px",
                    transition: "all 0.35s ease",
                    transform:
                      hoveredMilestone === i
                        ? "translateX(8px)"
                        : "translateX(0)",
                    borderColor:
                      hoveredMilestone === i
                        ? `${ms.color}30`
                        : "var(--border-light)",
                    boxShadow:
                      hoveredMilestone === i
                        ? `0 12px 36px ${ms.color}08`
                        : "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 10,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        color: ms.color,
                        background: `${ms.color}10`,
                        padding: "4px 12px",
                        borderRadius: 100,
                      }}
                    >
                      {ms.year}
                    </span>
                    <ms.icon
                      size={16}
                      style={{ color: ms.color }}
                    />
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 18,
                      marginBottom: 6,
                      color:
                        hoveredMilestone === i
                          ? ms.color
                          : "var(--ink)",
                      transition: "color 0.3s",
                    }}
                  >
                    {ms.title}
                  </h4>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--ink-secondary)",
                      lineHeight: 1.65,
                    }}
                  >
                    {ms.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SECTION 1B — OUR VALUES
          ═══════════════════════════════════ */}
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
              margin: "0 auto 56px",
              textAlign: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Our Values</span>
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
              What drives everything we do
            </motion.h2>
          </div>

          <div
            className="values-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card-base"
                style={{
                  padding: 28,
                  textAlign: "center",
                  cursor: "default",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-6px)";
                  e.currentTarget.style.boxShadow = `0 16px 40px ${v.color}10`;
                  e.currentTarget.style.borderColor = `${v.color}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor =
                    "var(--border-light)";
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: v.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 18px",
                  }}
                >
                  <v.icon
                    size={24}
                    style={{ color: v.color }}
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
                  {v.title}
                </h4>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--ink-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SECTION 2 — OUR VISION
          ═══════════════════════════════════ */}
      <section style={{ padding: "80px 0 100px" }}>
        <div className="container-x">
          <div
            className="vision-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "center",
            }}
          >
            {/* Left: Vision text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="section-tag">Our Vision</span>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  marginBottom: 18,
                  lineHeight: 1.2,
                }}
              >
                Building the future of{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent), var(--amber))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  intelligent business
                </span>
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--ink-secondary)",
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                We envision a world where every business — from a
                local jeweller in Rajkot to a logistics startup in
                Dubai — has access to the same caliber of technology
                that powers Fortune 500 companies.
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--ink-secondary)",
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                Our goal isn't just to write code. It's to be the
                technology partner that ambitious businesses trust to
                build their most critical systems — and to do it with
                the speed, quality, and care that turns first-time
                clients into lifelong partners.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 20px",
                  borderRadius: 14,
                  background: "var(--accent-bg)",
                  border: "1px solid rgba(211,85,40,0.1)",
                  maxWidth: 360,
                }}
              >
                <Target
                  size={20}
                  style={{ color: "var(--accent)", flexShrink: 0 }}
                />
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--accent)",
                  }}
                >
                  Mission: Digitally transform 10,000 businesses by
                  2028
                </span>
              </div>
            </motion.div>

            {/* Right: Vision cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {visionPoints.map((vp, i) => (
                <motion.div
                  key={vp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 0.5,
                  }}
                  className="card-base"
                  style={{
                    padding: 24,
                    cursor: "default",
                    transition: "all 0.35s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 32px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: "var(--accent-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 14,
                    }}
                  >
                    <vp.icon
                      size={20}
                      style={{ color: "var(--accent)" }}
                      strokeWidth={1.6}
                    />
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 15,
                      marginBottom: 6,
                      lineHeight: 1.3,
                    }}
                  >
                    {vp.title}
                  </h4>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--ink-muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    {vp.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SECTION 3 — OUR TEAM
          ═══════════════════════════════════ */}
      <section
        style={{
          padding: "80px 0 100px",
          background: "var(--cream)",
        }}
      >
        <div className="container-x">
          {/* Header */}
          <div
            style={{
              maxWidth: 620,
              margin: "0 auto 60px",
              textAlign: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Our Team</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                marginBottom: 16,
              }}
            >
              The people behind{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), var(--amber))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                the magic
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: 17,
                color: "var(--ink-secondary)",
                lineHeight: 1.7,
                maxWidth: 500,
                margin: "0 auto",
              }}
            >
              Engineers, designers, and strategists united by a
              shared obsession for building exceptional technology.
            </motion.p>
          </div>

          {/* Team grid */}
          <div
            className="team-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {teamMembers.map((member, i) => {
              const isH = hoveredTeam === i;

              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onMouseEnter={() => setHoveredTeam(i)}
                  onMouseLeave={() => setHoveredTeam(null)}
                  className="card-base"
                  style={{
                    overflow: "hidden",
                    cursor: "default",
                    position: "relative",
                    transition:
                      "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                    transform: isH
                      ? "translateY(-8px)"
                      : "translateY(0)",
                    boxShadow: isH
                      ? `0 20px 48px ${member.color}12, 0 8px 20px rgba(0,0,0,0.05)`
                      : "0 1px 4px rgba(0,0,0,0.03)",
                    borderColor: isH
                      ? `${member.color}25`
                      : "var(--border-light)",
                  }}
                >
                  {/* Top gradient bar */}
                  <div
                    style={{
                      height: 3,
                      background: member.gradient,
                      transform: isH
                        ? "scaleX(1)"
                        : "scaleX(0)",
                      transformOrigin: "left",
                      transition:
                        "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  />

                  {/* Glow */}
                  <div
                    style={{
                      position: "absolute",
                      top: -50,
                      right: -50,
                      width: 160,
                      height: 160,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${member.color}06, transparent 70%)`,
                      opacity: isH ? 1 : 0,
                      transition: "opacity 0.4s",
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    style={{
                      padding: "32px 28px",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    {/* Avatar + Info */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        marginBottom: 18,
                      }}
                    >
                      <motion.div
                        // animate={
                        //   isH
                        //     ? { scale: 1.1, rotate: -5 }
                        //     : { scale: 1, rotate: 0 }
                        // }
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: 18,
                          background: member.gradient,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: 20,
                          fontWeight: 700,
                          fontFamily: "var(--serif)",
                          flexShrink: 0,
                          boxShadow: isH
                            ? `0 8px 24px ${member.color}30`
                            : "0 2px 8px rgba(0,0,0,0.06)",
                          transition: "box-shadow 0.3s",
                        }}
                      >
                        {member.avatar}
                      </motion.div>

                      <div>
                        <h4
                          style={{
                            fontFamily: "var(--serif)",
                            fontSize: 18,
                            marginBottom: 2,
                            color: isH
                              ? member.color
                              : "var(--ink)",
                            transition: "color 0.3s",
                          }}
                        >
                          {member.name}
                        </h4>
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: member.color,
                          }}
                        >
                          {member.role}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--ink-secondary)",
                        lineHeight: 1.7,
                        marginBottom: 18,
                      }}
                    >
                      {member.desc}
                    </p>

                    {/* Tags */}
                    <div
                      style={{
                        display: "flex",
                        gap: 6,
                        flexWrap: "wrap",
                        marginBottom: 18,
                      }}
                    >
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            padding: "4px 10px",
                            borderRadius: 100,
                            background: `${member.color}08`,
                            color: member.color,
                            border: `1px solid ${member.color}15`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Social links */}
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        paddingTop: 16,
                        borderTop:
                          "1px solid var(--border-light)",
                      }}
                    >
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          style={{
                            width: 34,
                            height: 34,
                            borderRadius: 10,
                            background: "var(--cream)",
                            border: "1px solid var(--border-light)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--ink-muted)",
                            transition: "all 0.3s ease",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "#0A66C2";
                            e.currentTarget.style.color = "#fff";
                            e.currentTarget.style.borderColor =
                              "#0A66C2";
                            e.currentTarget.style.transform =
                              "translateY(-2px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background =
                              "var(--cream)";
                            e.currentTarget.style.color =
                              "var(--ink-muted)";
                            e.currentTarget.style.borderColor =
                              "var(--border-light)";
                            e.currentTarget.style.transform =
                              "translateY(0)";
                          }}
                        >
                          <Linkedin size={14} />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          style={{
                            width: 34,
                            height: 34,
                            borderRadius: 10,
                            background: "var(--cream)",
                            border: "1px solid var(--border-light)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--ink-muted)",
                            transition: "all 0.3s ease",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "#1DA1F2";
                            e.currentTarget.style.color = "#fff";
                            e.currentTarget.style.borderColor =
                              "#1DA1F2";
                            e.currentTarget.style.transform =
                              "translateY(-2px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background =
                              "var(--cream)";
                            e.currentTarget.style.color =
                              "var(--ink-muted)";
                            e.currentTarget.style.borderColor =
                              "var(--border-light)";
                            e.currentTarget.style.transform =
                              "translateY(0)";
                          }}
                        >
                          <Twitter size={14} />
                        </a>
                      )}
                      {member.socials.github && (
                        <a
                          href={member.socials.github}
                          style={{
                            width: 34,
                            height: 34,
                            borderRadius: 10,
                            background: "var(--cream)",
                            border: "1px solid var(--border-light)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--ink-muted)",
                            transition: "all 0.3s ease",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "#24292F";
                            e.currentTarget.style.color = "#fff";
                            e.currentTarget.style.borderColor =
                              "#24292F";
                            e.currentTarget.style.transform =
                              "translateY(-2px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background =
                              "var(--cream)";
                            e.currentTarget.style.color =
                              "var(--ink-muted)";
                            e.currentTarget.style.borderColor =
                              "var(--border-light)";
                            e.currentTarget.style.transform =
                              "translateY(0)";
                          }}
                        >
                          <Github size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SECTION 4 — CTA
          ═══════════════════════════════════ */}
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
            {/* Dot overlay */}
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
                position: "absolute",
                bottom: -40,
                left: -40,
                width: 250,
                height: 250,
                borderRadius: "50%",
                background: "rgba(45,107,228,0.08)",
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
                  Join our journey
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
                  maxWidth: 600,
                  margin: "0 auto 20px",
                }}
              >
                Want to build the future with us?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.5)",
                  maxWidth: 460,
                  margin: "0 auto 36px",
                  lineHeight: 1.7,
                }}
              >
                Whether you want to partner with us on a project or
                join our team — we'd love to hear from you.
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 28px rgba(255,255,255,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Start a Project{" "}
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="mailto:careers@solven.in"
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
                  <Users size={16} />
                  Join the Team
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ RESPONSIVE STYLES ═══ */}
      <style>{`
        @media (max-width: 1023px) {
          .story-intro-grid,
          .vision-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 900px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .about-hero-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .about-hero-stats > div:nth-child(2) {
            border-right: none !important;
          }
          .about-hero-stats > div:nth-child(1),
          .about-hero-stats > div:nth-child(2) {
            border-bottom: 1px solid var(--border-light);
          }
        }
        @media (max-width: 768px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .team-grid,
          .values-grid {
            grid-template-columns: 1fr !important;
          }
          .about-hero-stats {
            grid-template-columns: 1fr !important;
          }
          .about-hero-stats > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border-light);
          }
          .about-hero-stats > div:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </>
  );
}