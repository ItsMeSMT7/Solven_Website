import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  Scale,
  Compass,
  Building2,
  Plane,
  Leaf,
  Heart,
  GraduationCap,
  Gem,
  Star,
  Globe,
  Loader2,
  Maximize2,
} from "lucide-react";

import affordabledriveeducation from "../assets/Trustedby/affordabledriveeducation.png";
import bhokarikarlawfirms from "../assets/Trustedby/bhokarikarlawfirms.png";
import discover from "../assets/Trustedby/discover.png";
import enterpriseglobal from "../assets/Trustedby/enterpriseglobal.png";
import journey from "../assets/Trustedby/journey.svg";
import paripoorn from "../assets/Trustedby/paripoorn.png";
import samarth from "../assets/Trustedby/samarth.png";
import Shrisiddhlogo from "../assets/Trustedby/Shrisiddhlogo.png";
import varahivastu from "../assets/Trustedby/varahivastu.png";
import zaratari from "../assets/Trustedby/zaratari.png";

/* ═══ API FLASH CONFIG ═══ */
const API_FLASH_KEY = "e9d0e2f95bb54a8fa33f7c3e00c40fb0"; // <-- Replace with your actual API key

function getScreenshotUrl(websiteUrl, width = 1280, height = 800) {
  return (
    `https://api.apiflash.com/v1/urltoimage` +
    `?access_key=${API_FLASH_KEY}` +
    `&wait_until=page_loaded` +
    `&url=${encodeURIComponent(websiteUrl)}` +
    `&width=${width}` +
    `&height=${height}` +
    `&thumbnail_width=${Math.round(width / 2)}` +
    `&format=jpeg` +
    `&quality=80` +
    `&fresh=true`
  );
}

/* ═══ CLIENT DATA ═══ */
const clientsData = [
  {
    name: "Affordable Drive Education",
    logo: affordabledriveeducation,
    category: "Education",
    categoryIcon: GraduationCap,
    color: "#2D6BE4",
    gradient: "linear-gradient(135deg, #2D6BE4, #60A5FA)",
    bg: "#EFF6FF",
    tagline: "Revolutionizing driving education with technology",
    description:
      "Built a comprehensive digital platform that streamlined student enrollment, scheduling, progress tracking, and certification management. Replaced manual paper-based processes with an intuitive web application.",
    services: ["Web App", "Student Management", "Booking Platform"],
    results: [
      { label: "Enrollment", value: "+180%" },
      { label: "Process Time", value: "-65%" },
      { label: "Rating", value: "4.8★" },
    ],
    website: "https://affordabledrivereducation.com.au/",
    year: "2023",
    featured: true,
  },
  {
    name: "Bhokarikar Law Firms",
    logo: bhokarikarlawfirms,
    category: "Legal",
    categoryIcon: Scale,
    color: "#7048D6",
    gradient: "linear-gradient(135deg, #7048D6, #A78BFA)",
    bg: "#F5F3FF",
    tagline: "Digital transformation for legal practice",
    description:
      "Designed and developed a professional digital presence including a modern website, case management system, and client portal. Integrated document automation tools that reduced paperwork by 60%.",
    services: ["Website", "Case Management", "Document Automation"],
    results: [
      { label: "Inquiries", value: "+220%" },
      { label: "Paperwork", value: "-60%" },
      { label: "Response", value: "-70%" },
    ],
    website: "https://bhokarikarlawfirms.com",
    year: "2023",
    featured: false,
  },
  {
    name: "Discover",
    logo: discover,
    category: "Travel",
    categoryIcon: Compass,
    color: "#0E8A7D",
    gradient: "linear-gradient(135deg, #0E8A7D, #34D399)",
    bg: "#F0FDFA",
    tagline: "Smart travel experiences powered by AI",
    description:
      "Created an AI-powered travel discovery platform offering personalized trip recommendations, itinerary planning, and real-time booking integration using machine learning.",
    services: ["AI Engine", "Travel Platform", "Mobile App"],
    results: [
      { label: "Engagement", value: "+300%" },
      { label: "Bookings", value: "+145%" },
      { label: "Downloads", value: "50K+" },
    ],
    website: "https://discover.com",
    year: "2024",
    featured: true,
  },
  {
    name: "Enterprise Global",
    logo: enterpriseglobal,
    category: "Enterprise",
    categoryIcon: Building2,
    color: "#D35528",
    gradient: "linear-gradient(135deg, #D35528, #F59E0B)",
    bg: "#FEF3ED",
    tagline: "Enterprise-grade infrastructure modernization",
    description:
      "Complete digital transformation — migrating legacy systems to cloud-native architecture, implementing microservices, and building real-time analytics dashboards across 3 countries.",
    services: ["Cloud Migration", "Microservices", "BI Dashboard"],
    results: [
      { label: "Cost", value: "-45%" },
      { label: "Uptime", value: "99.99%" },
      { label: "Deploys", value: "10x" },
    ],
    website: "https://enterpriseglobal.com",
    year: "2023",
    featured: true,
  },
  {
    name: "Journey",
    logo: journey,
    category: "Travel",
    categoryIcon: Plane,
    color: "#CA8A04",
    gradient: "linear-gradient(135deg, #CA8A04, #FBBF24)",
    bg: "#FEFCE8",
    tagline: "Seamless travel booking reimagined",
    description:
      "Full-stack travel booking platform with real-time inventory, dynamic pricing engine, and multi-currency payment processing handling 10,000+ monthly bookings.",
    services: ["Booking Platform", "Payment Gateway", "Pricing Engine"],
    results: [
      { label: "Bookings", value: "10K+" },
      { label: "Revenue", value: "+85%" },
      { label: "Speed", value: "<1.2s" },
    ],
    website: "https://journeywithus.co/?srsltid=AfmBOoopiizgz0RI2cr2r9Zww1XFXzSoB1U1Y4NZLN1D-cml4O2jj0Ci",
    year: "2024",
    featured: false,
  },
  {
    name: "Paripoorn",
    logo: paripoorn,
    category: "Healthcare",
    categoryIcon: Heart,
    color: "#DC2626",
    gradient: "linear-gradient(135deg, #DC2626, #F87171)",
    bg: "#FEF2F2",
    tagline: "Holistic wellness platform",
    description:
      "Comprehensive wellness management platform connecting users with certified practitioners, enabling online consultations, and providing personalized health tracking.",
    services: ["Telemedicine", "Health Tracking", "Practitioner Dashboard"],
    results: [
      { label: "Users", value: "25K+" },
      { label: "Consults", value: "5K/mo" },
      { label: "Satisfaction", value: "96%" },
    ],
    website: "https://paripoornfoods.com/",
    year: "2023",
    featured: false,
  },
  {
    name: "Samarth",
    logo: samarth,
    category: "Education",
    categoryIcon: GraduationCap,
    color: "#0891B2",
    gradient: "linear-gradient(135deg, #0891B2, #22D3EE)",
    bg: "#ECFEFF",
    tagline: "Empowering education through technology",
    description:
      "Innovative edtech platform with interactive learning modules, student performance analytics, and teacher management tools used by 120+ schools across Maharashtra.",
    services: ["EdTech Platform", "LMS", "Analytics"],
    results: [
      { label: "Schools", value: "120+" },
      { label: "Students", value: "45K+" },
      { label: "Hours", value: "2M+" },
    ],
    website: "https://samarthoffset.com/",
    year: "2024",
    featured: true,
  },
  {
    name: "Shri Siddh",
    logo: Shrisiddhlogo,
    category: "Retail",
    categoryIcon: Gem,
    color: "#059669",
    gradient: "linear-gradient(135deg, #059669, #34D399)",
    bg: "#F0FDF9",
    tagline: "Digital-first retail experience",
    description:
      "Complete retail management ecosystem — POS system, inventory management, e-commerce, and loyalty program handling ₹2Cr+ monthly transactions with zero downtime.",
    services: ["POS System", "E-commerce", "Inventory"],
    results: [
      { label: "GMV", value: "₹2Cr+" },
      { label: "Accuracy", value: "99.8%" },
      { label: "Repeat", value: "+55%" },
    ],
    website: "https://shrisiddh.com",
    year: "2023",
    featured: false,
  },
  {
    name: "Varahi Vastu",
    logo: varahivastu,
    category: "Real Estate",
    categoryIcon: Building2,
    color: "#B45309",
    gradient: "linear-gradient(135deg, #B45309, #F59E0B)",
    bg: "#FFFBEB",
    tagline: "Vastu consultation goes digital",
    description:
      "Digital consultation platform enabling remote Vastu assessments using AI-powered floor plan analysis, video consultations, and personalized recommendation reports serving clients globally.",
    services: ["Consultation Platform", "AI Analysis", "Report Generator"],
    results: [
      { label: "Consults", value: "3K+" },
      { label: "Countries", value: "12" },
      { label: "Retention", value: "92%" },
    ],
    website: "https://varahivastu.com.au/about-varahi/",
    year: "2024",
    featured: false,
  },
  {
    name: "Zaratari",
    logo: zaratari,
    category: "Food & Hospitality",
    categoryIcon: Leaf,
    color: "#8B5CF6",
    gradient: "linear-gradient(135deg, #8B5CF6, #C084FC)",
    bg: "#FAF5FF",
    tagline: "Farm-to-table marketplace",
    description:
      "Farm-to-table marketplace connecting local farmers with restaurants and consumers. Real-time inventory tracking, route-optimized delivery, and quality verification — reducing food waste by 40%.",
    services: ["Marketplace", "Delivery Logistics", "Quality Tracking"],
    results: [
      { label: "Farmers", value: "500+" },
      { label: "Waste Cut", value: "40%" },
      { label: "Orders", value: "8K+" },
    ],
    website: "https://zartari.in/?srsltid=AfmBOoqYFS20Tv_qgBeE9XjlU6PikYOnc21_kLFZn-9mLGXAbdv7wxMK",
    year: "2024",
    featured: true,
  },
];

const categories = ["All", ...new Set(clientsData.map((c) => c.category))];

/* ═══ WEBSITE PREVIEW COMPONENT (Screenshot API) ═══ */
function WebsitePreview({ url, color, gradient, name }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const screenshotUrl = getScreenshotUrl(url, 1280, 800);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 200,
        borderRadius: 14,
        overflow: "hidden",
        background: "#f8f8f8",
        border: "1px solid var(--border-light)",
      }}
    >
      {/* Browser chrome bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "8px 12px",
          background: "#fff",
          borderBottom: "1px solid var(--border-light)",
          position: "relative",
          zIndex: 5,
        }}
      >
        <div style={{ display: "flex", gap: 4 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#FF5F57",
            }}
          />
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#FEBC2E",
            }}
          />
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#28C840",
            }}
          />
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <span
            style={{
              fontSize: 9,
              fontFamily: "monospace",
              color: "var(--ink-muted)",
              background: "var(--cream)",
              padding: "2px 10px",
              borderRadius: 4,
              border: "1px solid var(--border-light)",
              maxWidth: 180,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Globe size={8} />
            {url
              .replace("https://", "")
              .replace("http://", "")
              .replace(/\/$/, "")}
          </span>
        </div>
      </div>

      {/* Screenshot container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "calc(100% - 32px)",
          overflow: "hidden",
        }}
      >
        {/* Loading state */}
        {loading && !error && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: "#fff",
              zIndex: 3,
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Loader2 size={20} style={{ color: color }} />
            </motion.div>
            <span
              style={{ fontSize: 11, color: "var(--ink-muted)" }}
            >
              Loading preview...
            </span>
          </div>
        )}

        {/* Error fallback */}
        {error && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              background: `linear-gradient(135deg, ${color}05, ${color}10)`,
              zIndex: 3,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: gradient,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Globe size={22} style={{ color: "#fff" }} />
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "var(--ink-secondary)",
              }}
            >
              {name}
            </span>
            <span
              style={{ fontSize: 10, color: "var(--ink-muted)" }}
            >
              Preview unavailable
            </span>
          </div>
        )}

        {/* Screenshot image */}
        <img
          src={screenshotUrl}
          alt={`${name} website screenshot`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top left",
            display: error ? "none" : "block",
          }}
        />
      </div>
    </div>
  );
}

/* ═══ EXPANDED PREVIEW COMPONENT (Screenshot API) ═══ */
function ExpandedWebsitePreview({ url, color, name }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const screenshotUrl = getScreenshotUrl(url, 1440, 900);

  return (
    <div
      style={{
        width: "100%",
        height: 320,
        overflow: "hidden",
        position: "relative",
        background: "#f8f8f8",
      }}
    >
      {/* Loading state */}
      {loading && !error && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            background: "#fff",
            zIndex: 3,
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Loader2 size={22} style={{ color: color }} />
          </motion.div>
          <span style={{ fontSize: 12, color: "var(--ink-muted)" }}>
            Loading screenshot...
          </span>
        </div>
      )}

      {/* Error fallback */}
      {error && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            background: `linear-gradient(135deg, ${color}05, ${color}10)`,
            zIndex: 3,
          }}
        >
          <Globe size={28} style={{ color: color }} />
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--ink-secondary)",
            }}
          >
            Screenshot unavailable
          </span>
        </div>
      )}

      {/* Screenshot image */}
      <img
        src={screenshotUrl}
        alt={`${name} website screenshot`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top left",
          display: error ? "none" : "block",
        }}
      />
    </div>
  );
}

/* ═══ MAIN COMPONENT ═══ */
export default function ClientsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [expandedIdx, setExpandedIdx] = useState(null);

  const filtered =
    activeCategory === "All"
      ? clientsData
      : clientsData.filter((c) => c.category === activeCategory);

  return (
    <>
      {/* ═══ HERO ═══ */}
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
            top: "-8%",
            right: "8%",
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
            bottom: "5%",
            left: "-5%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(45,107,228,0.05), transparent 70%)",
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
              maxWidth: 740,
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
              <span className="section-tag">Our Clients</span>
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
              Partnerships that{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), var(--amber))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                drive results
              </span>
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
              Every project tells a story of transformation. Explore how
              we've helped businesses build technology that creates lasting
              impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                display: "flex",
                gap: 32,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                { val: "10+", label: "Happy Clients" },
                { val: "98%", label: "Retention" },
                { val: "15+", label: "Industries" },
                { val: "4.9★", label: "Avg Rating" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  style={{ textAlign: "center" }}
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
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--ink-muted)",
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FILTER BAR ═══ */}
      <section
        style={{
          padding: "40px 0 20px",
          position: "sticky",
          top: 72,
          zIndex: 50,
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="filter-scroll"
            style={{
              display: "flex",
              gap: 8,
              justifyContent: "center",
              flexWrap: "wrap",
              padding: "12px 0",
              borderBottom: "1px solid var(--border-light)",
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setExpandedIdx(null);
                  }}
                  style={{
                    padding: "8px 20px",
                    fontSize: 13,
                    fontWeight: isActive ? 700 : 500,
                    fontFamily: "var(--sans)",
                    borderRadius: 100,
                    border: isActive
                      ? "1.5px solid var(--accent)"
                      : "1.5px solid var(--border-light)",
                    background: isActive
                      ? "var(--accent-bg)"
                      : "transparent",
                    color: isActive
                      ? "var(--accent)"
                      : "var(--ink-secondary)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor =
                        "var(--accent)";
                      e.currentTarget.style.color = "var(--accent)";
                      e.currentTarget.style.background =
                        "var(--accent-bg)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor =
                        "var(--border-light)";
                      e.currentTarget.style.color =
                        "var(--ink-secondary)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══ CLIENT CARDS — 3 COLUMN GRID ═══ */}
      <section style={{ padding: "40px 0 100px" }}>
        <div className="container-x">
          <motion.div
            layout
            className="clients-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 22,
            }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((client, i) => {
                const isH = hoveredIdx === i;
                const isExpanded = expandedIdx === i;

                return (
                  <motion.div
                    key={client.name}
                    layout
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: i * 0.05,
                    }}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="card-base"
                    style={{
                      overflow: "hidden",
                      position: "relative",
                      cursor: "pointer",
                      transition:
                        "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                      transform: isH
                        ? "translateY(-6px)"
                        : "translateY(0)",
                      boxShadow: isH
                        ? `0 20px 48px ${client.color}10, 0 8px 20px rgba(0,0,0,0.05)`
                        : "0 1px 4px rgba(0,0,0,0.03)",
                      borderColor: isH
                        ? `${client.color}25`
                        : "var(--border-light)",
                      gridColumn: isExpanded ? "1 / -1" : undefined,
                    }}
                    onClick={() =>
                      setExpandedIdx(isExpanded ? null : i)
                    }
                  >
                    {/* Top accent */}
                    <div
                      style={{
                        height: 3,
                        background: client.gradient,
                        transform:
                          isH || isExpanded
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
                        top: -60,
                        right: -60,
                        width: 180,
                        height: 180,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${client.color}06, transparent 70%)`,
                        opacity: isH ? 1 : 0,
                        transition: "opacity 0.4s",
                        pointerEvents: "none",
                      }}
                    />

                    {/* ── COLLAPSED VIEW ── */}
                    {!isExpanded && (
                      <div
                        style={{
                          padding: "24px 24px 20px",
                          position: "relative",
                          zIndex: 2,
                        }}
                      >
                        {/* Website Screenshot Preview */}
                        <div style={{ marginBottom: 18 }}>
                          <WebsitePreview
                            url={client.website}
                            color={client.color}
                            gradient={client.gradient}
                            name={client.name}
                          />
                        </div>

                        {/* Logo + Name row */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            marginBottom: 12,
                          }}
                        >
                          <motion.div
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 20,
                            }}
                            style={{
                              width: 48,
                              height: 48,
                              borderRadius: 12,
                              background: "#fff",
                              border: `1.5px solid ${isH ? client.color + "30" : "var(--border-light)"}`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              overflow: "hidden",
                              padding: 6,
                              flexShrink: 0,
                              boxShadow: isH
                                ? `0 4px 16px ${client.color}15`
                                : "0 1px 3px rgba(0,0,0,0.04)",
                              transition:
                                "border-color 0.3s, box-shadow 0.3s",
                            }}
                          >
                            <img
                              src={client.logo}
                              alt={`${client.name} logo`}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </motion.div>

                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              }}
                            >
                              <h3
                                style={{
                                  fontFamily: "var(--serif)",
                                  fontSize: 17,
                                  color: isH
                                    ? client.color
                                    : "var(--ink)",
                                  transition: "color 0.3s",
                                  margin: 0,
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {client.name}
                              </h3>
                              {client.featured && (
                                <Star
                                  size={12}
                                  style={{
                                    color: client.color,
                                    flexShrink: 0,
                                  }}
                                  fill={client.color}
                                />
                              )}
                            </div>
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 4,
                                fontSize: 11,
                                fontWeight: 600,
                                color: client.color,
                                marginTop: 2,
                              }}
                            >
                              <client.categoryIcon size={10} />
                              {client.category} · {client.year}
                            </span>
                          </div>

                          {/* Visit button */}
                          <a
                            href={client.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              width: 36,
                              height: 36,
                              borderRadius: 10,
                              background: isH
                                ? client.gradient
                                : "var(--cream)",
                              border: `1px solid ${isH ? "transparent" : "var(--border-light)"}`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: isH
                                ? "#fff"
                                : "var(--ink-muted)",
                              transition: "all 0.3s ease",
                              flexShrink: 0,
                              textDecoration: "none",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform =
                                "scale(1.12)";
                              e.currentTarget.style.boxShadow = `0 4px 16px ${client.color}25`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform =
                                "scale(1)";
                              e.currentTarget.style.boxShadow = "none";
                            }}
                          >
                            <ExternalLink size={14} />
                          </a>
                        </div>

                        {/* Tagline */}
                        <p
                          style={{
                            fontSize: 13,
                            color: "var(--ink-secondary)",
                            marginBottom: 14,
                            lineHeight: 1.5,
                          }}
                        >
                          {client.tagline}
                        </p>

                        {/* Results row */}
                        <div style={{ display: "flex", gap: 8 }}>
                          {client.results.map((r) => (
                            <div
                              key={r.label}
                              style={{
                                flex: 1,
                                padding: "8px 6px",
                                borderRadius: 8,
                                background: client.bg,
                                textAlign: "center",
                                border: `1px solid ${client.color}08`,
                              }}
                            >
                              <div
                                style={{
                                  fontFamily: "var(--serif)",
                                  fontSize: 14,
                                  fontWeight: 700,
                                  color: client.color,
                                }}
                              >
                                {r.value}
                              </div>
                              <div
                                style={{
                                  fontSize: 9,
                                  textTransform: "uppercase",
                                  letterSpacing: "0.05em",
                                  color: "var(--ink-muted)",
                                  fontWeight: 600,
                                  marginTop: 1,
                                }}
                              >
                                {r.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Expand hint */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 12,
                            fontSize: 11,
                            color: "var(--ink-muted)",
                            gap: 4,
                            opacity: 0.5,
                          }}
                        >
                          <Maximize2 size={10} />
                          Click to expand
                        </div>
                      </div>
                    )}

                    {/* ── EXPANDED VIEW (full width) ── */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          padding: "28px 36px",
                          position: "relative",
                          zIndex: 2,
                        }}
                      >
                        <div
                          className="expanded-grid"
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 32,
                            alignItems: "start",
                          }}
                        >
                          {/* Left: Website Screenshot (larger) */}
                          <div>
                            <div
                              style={{
                                borderRadius: 16,
                                overflow: "hidden",
                                border:
                                  "1px solid var(--border-light)",
                                boxShadow:
                                  "0 4px 24px rgba(0,0,0,0.06)",
                              }}
                            >
                              {/* Browser bar */}
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 6,
                                  padding: "10px 14px",
                                  background: "#fff",
                                  borderBottom:
                                    "1px solid var(--border-light)",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    gap: 4,
                                  }}
                                >
                                  <span
                                    style={{
                                      width: 10,
                                      height: 10,
                                      borderRadius: "50%",
                                      background: "#FF5F57",
                                    }}
                                  />
                                  <span
                                    style={{
                                      width: 10,
                                      height: 10,
                                      borderRadius: "50%",
                                      background: "#FEBC2E",
                                    }}
                                  />
                                  <span
                                    style={{
                                      width: 10,
                                      height: 10,
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
                                      fontSize: 10,
                                      fontFamily: "monospace",
                                      color: "var(--ink-muted)",
                                      background: "var(--cream)",
                                      padding: "3px 12px",
                                      borderRadius: 5,
                                      border:
                                        "1px solid var(--border-light)",
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 4,
                                    }}
                                  >
                                    <Globe size={9} />
                                    {client.website
                                      .replace("https://", "")
                                      .replace("http://", "")
                                      .replace(/\/$/, "")}
                                  </span>
                                </div>
                              </div>

                              {/* Large screenshot */}
                              <ExpandedWebsitePreview
                                url={client.website}
                                color={client.color}
                                name={client.name}
                              />
                            </div>

                            {/* Visit button below preview */}
                            <a
                              href={client.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) =>
                                e.stopPropagation()
                              }
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 8,
                                padding: "12px 24px",
                                marginTop: 16,
                                fontSize: 14,
                                fontWeight: 700,
                                borderRadius: 12,
                                background: client.gradient,
                                color: "#fff",
                                textDecoration: "none",
                                transition: "all 0.35s ease",
                                boxShadow: `0 4px 16px ${client.color}20`,
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform =
                                  "translateY(-2px)";
                                e.currentTarget.style.boxShadow = `0 8px 28px ${client.color}30`;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform =
                                  "translateY(0)";
                                e.currentTarget.style.boxShadow = `0 4px 16px ${client.color}20`;
                              }}
                            >
                              Visit Live Website{" "}
                              <ExternalLink size={14} />
                            </a>
                          </div>

                          {/* Right: Details */}
                          <div>
                            {/* Header */}
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 14,
                                marginBottom: 18,
                              }}
                            >
                              <div
                                style={{
                                  width: 56,
                                  height: 56,
                                  borderRadius: 14,
                                  background: "#fff",
                                  border: `1.5px solid ${client.color}20`,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  overflow: "hidden",
                                  padding: 8,
                                  flexShrink: 0,
                                }}
                              >
                                <img
                                  src={client.logo}
                                  alt={client.name}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                              <div>
                                <h3
                                  style={{
                                    fontFamily: "var(--serif)",
                                    fontSize: 22,
                                    color: client.color,
                                    margin: 0,
                                  }}
                                >
                                  {client.name}
                                </h3>
                                <span
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 5,
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: client.color,
                                    marginTop: 2,
                                  }}
                                >
                                  <client.categoryIcon size={11} />
                                  {client.category} ·{" "}
                                  {client.year}
                                </span>
                              </div>
                            </div>

                            {/* Description */}
                            <p
                              style={{
                                fontSize: 15,
                                color: "var(--ink-secondary)",
                                lineHeight: 1.75,
                                marginBottom: 20,
                              }}
                            >
                              {client.description}
                            </p>

                            {/* Services */}
                            <div
                              style={{
                                display: "flex",
                                gap: 8,
                                flexWrap: "wrap",
                                marginBottom: 20,
                              }}
                            >
                              {client.services.map((svc) => (
                                <span
                                  key={svc}
                                  style={{
                                    fontSize: 12,
                                    fontWeight: 600,
                                    padding: "5px 14px",
                                    borderRadius: 100,
                                    background: `${client.color}08`,
                                    color: client.color,
                                    border: `1px solid ${client.color}15`,
                                  }}
                                >
                                  {svc}
                                </span>
                              ))}
                            </div>

                            {/* Results */}
                            <div
                              style={{
                                display: "flex",
                                gap: 12,
                                marginBottom: 24,
                              }}
                            >
                              {client.results.map((r) => (
                                <div
                                  key={r.label}
                                  style={{
                                    flex: 1,
                                    padding: "14px 12px",
                                    borderRadius: 12,
                                    background: client.bg,
                                    textAlign: "center",
                                    border: `1px solid ${client.color}10`,
                                  }}
                                >
                                  <div
                                    style={{
                                      fontFamily:
                                        "var(--serif)",
                                      fontSize: 20,
                                      fontWeight: 700,
                                      color: client.color,
                                    }}
                                  >
                                    {r.value}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: 10,
                                      textTransform:
                                        "uppercase",
                                      letterSpacing:
                                        "0.06em",
                                      color:
                                        "var(--ink-muted)",
                                      fontWeight: 600,
                                      marginTop: 3,
                                    }}
                                  >
                                    {r.label}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* CTA */}
                            <Link
                              to="/#contactus"
                              onClick={(e) =>
                                e.stopPropagation()
                              }
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "12px 28px",
                                fontSize: 14,
                                fontWeight: 600,
                                borderRadius: 100,
                                border:
                                  "1.5px solid var(--border)",
                                background: "transparent",
                                color: "var(--ink-secondary)",
                                textDecoration: "none",
                                transition: "all 0.3s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor =
                                  client.color;
                                e.currentTarget.style.color =
                                  client.color;
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
                              Want something similar?{" "}
                              <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: "center",
                padding: "80px 0",
                color: "var(--ink-muted)",
              }}
            >
              <p style={{ fontSize: 16 }}>
                No clients found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
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
                  Become our next success story
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
                Ready to join our happy clients?
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
                Let's discuss your project and deliver
                transformative results.
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
                  Start Your Project <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ RESPONSIVE ═══ */}
      <style>{`
        @media (max-width: 1100px) {
          .clients-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 700px) {
          .clients-grid {
            grid-template-columns: 1fr !important;
          }
          .expanded-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .filter-scroll {
            justify-content: flex-start !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            padding-bottom: 12px !important;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .filter-scroll::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </>
  );
}