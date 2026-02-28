# Project Structure and Component Documentation

This document provides a detailed overview of the project structure, specifically focusing on the React components located in `src/components`. It includes the file path, functionality description, internal logic flow, and the complete source code for each component.

**Purpose:** This file serves as a context provider for AI analysis, allowing for a complete understanding of the UI/UX flow, state management, and styling implementation of the landing page.

## Folder Structure

```text
src/
├── components/
    ├── Navbar.jsx        # Fixed navigation bar with scroll effects and mobile menu
    ├── Hero.jsx          # Hero section with animated text and dashboard mockup
    ├── Clients.jsx       # Logo strip of trusted companies
    ├── Features.jsx      # Grid of platform features with hover effects
    ├── ProductDemo.jsx   # Interactive code block vs text comparison
    ├── Stats.jsx         # Animated numerical counters
    ├── Services.jsx      # Detailed service offering cards
    ├── About.jsx         # Company info with animated orbital diagram
    ├── Testimonials.jsx  # Customer review cards
    ├── CTA.jsx           # Final call-to-action section
    ├── Footer.jsx        # Site footer with links and contact info
    ├── Layout.jsx        # Layout wrapper (Navbar + Footer)
    └── ScrollToTop.jsx   # Scroll restoration utility
├── pages/
    ├── Home.jsx          # Homepage composition
    ├── ServicesPage.jsx  # Services page
    ├── ProductsPage.jsx  # Products page
    └── AboutPage.jsx     # About page
├── App.jsx               # Main application layout
└── main.jsx              # Entry point
```

---

## Component Details

### 1. `src/components/Navbar.jsx`

**Description:**
The `Navbar` is a fixed header that adapts its styling based on the user's scroll position. It handles navigation links and a responsive mobile menu.

**Key Functionality & Flow:**
1.  **State Management**:
    *   `scrolled`: Boolean state tracking if window scroll Y > 20px.
    *   `open`: Boolean state for the mobile menu toggle.
2.  **Effects**:
    *   Adds a `scroll` event listener to update the `scrolled` state.
    *   Toggles `document.body.style.overflow` to "hidden" when the mobile menu is open to prevent background scrolling.
3.  **Visuals**:
    *   **Desktop**: Displays a "pill-shaped" container. When scrolled, it becomes semi-transparent with a blur effect (`backdropFilter`).
    *   **Mobile**: Hides desktop links and shows a hamburger icon. Clicking opens a full-screen `motion.div` overlay.
4.  **Animations**:
    *   Header slides down from `y: -100` on mount.
    *   Mobile menu uses `AnimatePresence` for smooth entry/exit transitions.

**Source Code:**

```javascriptreact
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Contact us", href: "#contactus" },
  // { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "8px 20px" : "14px 20px",
          transition: "padding 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* ═══ PILL-SHAPED NAVBAR CONTAINER ═══ */}
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            borderRadius: 100,
            padding: "10px 8px 10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: scrolled
              ? "rgba(26, 26, 26, 0.92)"
              : "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: scrolled
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid rgba(0,0,0,0.06)",
            boxShadow: scrolled
              ? "0 4px 24px rgba(0,0,0,0.25)"
              : "0 2px 16px rgba(0,0,0,0.06)",
            transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* ── Logo ── */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                background: "linear-gradient(135deg, var(--accent), var(--amber))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontFamily: "var(--serif)",
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                S
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--serif)",
                fontSize: 22,
                color: scrolled ? "#fff" : "var(--ink)",
                transition: "color 0.4s ease",
                letterSpacing: "-0.02em",
              }}
            >
              Solven
            </span>
          </a>

          {/* ── Desktop Nav Links ── */}
          <nav
            className="hidden lg:flex"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  padding: "7px 16px",
                  fontSize: 14,
                  fontWeight: 500,
                  color: scrolled
                    ? "rgba(255,255,255,0.6)"
                    : "var(--ink-secondary)",
                  borderRadius: 100,
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  if (scrolled) {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  } else {
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.background = "var(--accent-bg)";
                  }
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  if (scrolled) {
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  } else {
                    e.currentTarget.style.color = "var(--ink-secondary)";
                  }
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <div
            className="hidden lg:flex"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexShrink: 0,
            }}
          >
            <button
              style={{
                padding: "9px 24px",
                fontSize: 13,
                fontWeight: 700,
                borderRadius: 100,
                border: "none",
                cursor: "pointer",
                background: scrolled
                  ? "#fff"
                  : "var(--accent)",
                color: scrolled
                  ? "var(--ink)"
                  : "#fff",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                if (scrolled) {
                  e.currentTarget.style.background = "var(--accent)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(211,85,40,0.35)";
                } else {
                  e.currentTarget.style.background = "var(--accent-dark)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(211,85,40,0.3)";
                }
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                if (scrolled) {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = "var(--ink)";
                } else {
                  e.currentTarget.style.background = "var(--accent)";
                }
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Get Started
            </button>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
            style={{
              padding: 8,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: scrolled ? "#fff" : "var(--ink)",
              borderRadius: 10,
              transition: "color 0.3s",
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* ═══ Mobile Fullscreen Menu ═══ */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 90,
              background: "#fff",
              paddingTop: 100,
              paddingLeft: 24,
              paddingRight: 24,
            }}
            className="lg:hidden"
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                marginTop: 16,
              }}
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 28,
                    padding: "14px 0",
                    borderBottom: "1px solid var(--border-light)",
                    color: "var(--ink)",
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              style={{
                marginTop: 32,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <button className="btn-fill" style={{ width: "100%", fontSize: 16 }}>
                Get Started
              </button>
              <button className="btn-line" style={{ width: "100%", fontSize: 16 }}>
                Log in
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

---

### 2. `src/components/Hero.jsx`

**Description:**
The `Hero` component is the landing section. It features a dynamic headline with rotating words, background gradient blobs, and a complex dashboard mockup animation.

**Key Functionality & Flow:**
1.  **Word Rotation**: Uses `setInterval` to cycle through the `words` array, updating the `idx` state every 2.6 seconds.
2.  **Background**: Renders absolute positioned divs with radial gradients and blur filters to create "blobs".
3.  **Text Animation**: The headline uses `AnimatePresence` to animate the rotating word in/out (slide up/down).
4.  **Dashboard Mockup**:
    *   A large container simulating a browser window.
    *   Contains simulated stats (API Calls, Latency, etc.) that fade in sequentially.
    *   Contains a bar chart simulation where bars grow in height using `motion.div`.
    *   Contains an activity feed list that slides in items.

**Source Code:**

```javascriptreact
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
```

---

### 3. `src/components/Clients.jsx`

**Description:**
A simple section displaying a horizontal list of client names/logos to establish social proof.

**Key Functionality & Flow:**
1.  **Data**: `clients` array contains strings of company names.
2.  **Visuals**:
    *   Uses a flex container to center items.
    *   Each client item has a small icon (first letter) and the name.
    *   Includes gradient overlays on the left and right edges to fade the list out.
3.  **Animations**:
    *   Staggered fade-in animation for each client item using `framer-motion`'s `delay`.

**Source Code:**

```javascriptreact
import { motion } from "framer-motion";

const clients = [
  "Accenture",
  "Deloitte",
  "Infosys",
  "Wipro",
  "TCS",
  "HCL Tech",
  "Razorpay",
  "Freshworks",
];

export default function Clients() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[13px] uppercase tracking-[0.2em] text-[var(--text-3)] font-medium mb-12"
        >
          Trusted by leading enterprises
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-void)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg-void)] to-transparent z-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-12 md:gap-16 justify-center flex-wrap"
          >
            {clients.map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className="flex items-center gap-2 text-[var(--text-3)] hover:text-[var(--text-2)] transition-colors duration-300 cursor-default select-none"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[11px] font-bold">
                  {client[0]}
                </div>
                <span className="text-[15px] font-medium tracking-wide whitespace-nowrap">
                  {client}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

---

### 4. `src/components/Features.jsx`

**Description:**
Displays a grid of key platform features using a glassmorphism card style.

**Key Functionality & Flow:**
1.  **Data**: `features` array contains objects with `icon`, `title`, `desc`, and `accent` color.
2.  **Visuals**:
    *   Grid layout responsive to screen size (1 col -> 2 cols -> 3 cols).
    *   Each card has a gradient icon background and hover effects.
3.  **Animations**:
    *   Uses `variants` (`container` and `item`) to stagger the entrance of the cards when they scroll into view.

**Source Code:**

```javascriptreact
import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  Shield,
  GitBranch,
  BarChart3,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Model Orchestration",
    desc: "Deploy and manage any model — open source or proprietary — with unified APIs and auto-scaling infrastructure.",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    icon: Zap,
    title: "Sub-10ms Inference",
    desc: "Edge-optimized runtime with intelligent caching and model quantization for blazing fast response times.",
    accent: "from-amber-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "SOC 2 Type II, HIPAA compliant, with end-to-end encryption, VPC peering, and role-based access controls.",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    icon: GitBranch,
    title: "CI/CD for AI",
    desc: "Version your models, datasets, and prompts. A/B test in production with automated rollback and canary deploys.",
    accent: "from-violet-400 to-purple-500",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    desc: "Monitor model performance, cost, latency, and drift with customizable dashboards and intelligent alerts.",
    accent: "from-rose-400 to-pink-500",
  },
  {
    icon: Globe,
    title: "Multi-region Deploy",
    desc: "Deploy to 40+ global regions with automatic failover and geo-routing for minimal latency worldwide.",
    accent: "from-blue-400 to-indigo-500",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-36">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[13px] uppercase tracking-[0.2em] text-[var(--text-3)] font-medium mb-4"
          >
            Platform
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5"
            style={{ fontFamily: "Bricolage Grotesque" }}
          >
            Everything you need
            <br />
            <span className="gradient-text">to ship AI.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[var(--text-2)] text-lg max-w-[520px] mx-auto font-light"
          >
            A complete toolkit for building, deploying, and scaling intelligent
            applications — from prototype to production.
          </motion.p>
        </div>

        {/* Feature grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="glass-card p-7 md:p-8 group cursor-default"
            >
              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.accent} p-[1px] mb-5`}
              >
                <div className="w-full h-full rounded-[11px] bg-[#0a0930] flex items-center justify-center">
                  <feature.icon size={20} className="text-white/80" />
                </div>
              </div>

              <h3
                className="text-lg font-semibold mb-2.5 tracking-tight group-hover:text-white transition-colors"
                style={{ fontFamily: "Bricolage Grotesque" }}
              >
                {feature.title}
              </h3>
              <p className="text-[var(--text-2)] text-[15px] leading-relaxed font-light">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

---

### 5. `src/components/ProductDemo.jsx`

**Description:**
A split-screen section demonstrating the developer experience. It contrasts marketing copy on the left with a simulated code editor on the right.

**Key Functionality & Flow:**
1.  **Data**: `codeLines` array represents lines of Python code with specific color classes for syntax highlighting.
2.  **Visuals**:
    *   **Left**: Text content with "View documentation" and "Watch demo" buttons.
    *   **Right**: A "glass card" styled as a terminal window.
3.  **Animations**:
    *   The code lines animate in one by one (`delay: 0.5 + i * 0.05`) to simulate typing or loading.
    *   Background glow effect behind the terminal.

**Source Code:**

```javascriptreact
import { motion } from "framer-motion";
import { Play, Terminal, ArrowUpRight } from "lucide-react";

const codeLines = [
  { text: "import solven", color: "text-blue-400" },
  { text: "", color: "" },
  { text: "# Initialize client", color: "text-[var(--text-3)]" },
  { text: 'client = solven.Client(api_key="sk-...")', color: "text-emerald-400" },
  { text: "", color: "" },
  { text: "# Deploy a model in one line", color: "text-[var(--text-3)]" },
  { text: "model = client.deploy(", color: "text-[var(--text-1)]" },
  { text: '    name="llama-3-70b",', color: "text-amber-400" },
  { text: '    region="ap-south-1",', color: "text-amber-400" },
  { text: "    autoscale=True", color: "text-violet-400" },
  { text: ")", color: "text-[var(--text-1)]" },
  { text: "", color: "" },
  { text: "# Run inference", color: "text-[var(--text-3)]" },
  {
    text: 'response = model.generate("Explain quantum computing")',
    color: "text-emerald-400",
  },
  { text: "print(response.text)  # ✨ Done", color: "text-[var(--text-1)]" },
];

export default function ProductDemo() {
  return (
    <section id="product" className="py-24 md:py-36">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[13px] uppercase tracking-[0.2em] text-[var(--text-3)] font-medium mb-4">
              Developer Experience
            </span>
            <h2
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]"
              style={{ fontFamily: "Bricolage Grotesque" }}
            >
              Ship in minutes,
              <br />
              <span className="gradient-text">not months.</span>
            </h2>
            <p className="text-[var(--text-2)] text-lg leading-relaxed font-light mb-8 max-w-[480px]">
              Our SDK abstracts away the infrastructure complexity. Three lines
              of code to deploy. One endpoint to serve. Zero ops headaches.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Unified API across 50+ model providers",
                "Automatic GPU provisioning & optimization",
                "Built-in observability and cost tracking",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-[var(--text-2)] text-[15px]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button className="btn-primary !rounded-xl group">
                <span className="flex items-center gap-2">
                  View documentation
                  <ArrowUpRight
                    size={15}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </span>
              </button>
              <button className="btn-outline !rounded-xl flex items-center gap-2">
                <Play size={14} />
                Watch demo
              </button>
            </div>
          </motion.div>

          {/* Right — code block */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 via-violet-600/5 to-transparent rounded-3xl blur-2xl" />

            <div className="relative glass-card !rounded-2xl overflow-hidden glow-violet">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-[var(--text-3)]" />
                  <span className="text-[12px] text-[var(--text-3)] font-mono">
                    quickstart.py
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
              </div>

              {/* Code */}
              <div className="p-5 md:p-6 font-mono text-[13px] md:text-[14px] leading-7 overflow-x-auto">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + i * 0.05,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className={`${line.color} whitespace-pre`}
                  >
                    {line.text || "\u00A0"}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

---

### 6. `src/components/Stats.jsx`

**Description:**
Displays key metrics (e.g., "200+ Projects Delivered") with an animated counting effect.

**Key Functionality & Flow:**
1.  **`Counter` Component**:
    *   Takes `target` and `suffix` props.
    *   Uses `useInView` to trigger animation only when visible.
    *   Uses `setInterval` to increment a local `count` state from 0 to `target` over time.
2.  **Layout**: Grid layout (4 columns on desktop, 2 on mobile).

**Source Code:**

```javascriptreact
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
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
          #root section:nth-of-type(5) > div > div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
```

---

### 7. `src/components/Services.jsx`

**Description:**
A grid of service cards (e.g., "Custom Software", "AI & ML").

**Key Functionality & Flow:**
1.  **Data**: `services` array defines icons, titles, descriptions, and specific color themes for each card.
2.  **Visuals**:
    *   Cards have a hover effect that scales the icon and rotates it slightly.
    *   "Learn more" link appears/fades in on hover.
3.  **Animations**: Staggered entry for cards.

**Source Code:**

```javascriptreact
import { motion } from "framer-motion";
import { Code2, Brain, Cloud, Smartphone, BarChart3, ShieldCheck } from "lucide-react";

const services = [
  { icon: Code2, title: "Custom Software Development", desc: "End-to-end product engineering — from architecture to deployment. Scalable, maintainable systems tailored for your business.", color: "#2D6BE4", bg: "#EFF6FF" },
  { icon: Brain, title: "AI & Machine Learning", desc: "Transform raw data into actionable intelligence. Computer vision, NLP, predictive analytics, and generative AI.", color: "#D35528", bg: "#FEF3ED" },
  { icon: Cloud, title: "Cloud Infrastructure", desc: "Multi-cloud on AWS, Azure, and GCP. Migration, optimization, and managed infrastructure with 99.9% uptime.", color: "#0E8A7D", bg: "#F0FDFA" },
  { icon: Smartphone, title: "Mobile Applications", desc: "Native and cross-platform mobile experiences. iOS, Android, React Native, and Flutter expertise.", color: "#7048D6", bg: "#F5F3FF" },
  { icon: BarChart3, title: "Data Analytics", desc: "Unlock insights from your data. Warehousing, real-time pipelines, dashboards, and business intelligence.", color: "#CA8A04", bg: "#FEFCE8" },
  { icon: ShieldCheck, title: "Cybersecurity Solutions", desc: "Protect your digital assets. Penetration testing, compliance audits, SOC operations, zero-trust architecture.", color: "#DC2626", bg: "#FEF2F2" },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "100px 0 120px" }}>
      <div className="container-x">
        {/* ═══ CENTERED Header ═══ */}
        <div style={{
          maxWidth: 660,
          margin: "0 auto 64px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">What We Do</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Solutions crafted for every layer of your technology stack
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
              maxWidth: 540,
              textAlign: "center",
            }}
          >
            From intelligent automation to robust infrastructure — enterprise-grade
            solutions that adapt and scale with you.
          </motion.p>
        </div>

        {/* ═══ Card Grid ═══ */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 20,
        }}>
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card-base"
              style={{ padding: 32, cursor: "default" }}
            >
              <div
                style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: svc.bg,
                  display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: 20,
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.15) rotate(-5deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) rotate(0)";
                }}
              >
                <svc.icon size={24} style={{ color: svc.color }} strokeWidth={1.6} />
              </div>

              <h3 style={{
                fontFamily: "var(--serif)",
                fontSize: 20,
                marginBottom: 10,
              }}>
                {svc.title}
              </h3>

              <p style={{
                fontSize: 15,
                color: "var(--ink-secondary)",
                lineHeight: 1.65,
              }}>
                {svc.desc}
              </p>

              <div
                style={{
                  marginTop: 20,
                  display: "flex", alignItems: "center", gap: 6,
                  fontSize: 14, fontWeight: 600, color: svc.color,
                  opacity: 0.6,
                  transition: "opacity 0.3s, gap 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.gap = "10px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.6";
                  e.currentTarget.style.gap = "6px";
                }}
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke={svc.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### 8. `src/components/About.jsx`

**Description:**
The "About Us" section featuring a unique animated orbital diagram.

**Key Functionality & Flow:**
1.  **Orbital Diagram**:
    *   Central logo "S" with pulse effect.
    *   `orbitItems` array defines items (AI/ML, Cloud, etc.) positioned in circles around the center.
    *   Items are positioned using trigonometry (`Math.cos`, `Math.sin`) based on their angle.
    *   Hovering an item (`onMouseEnter`) sets `hovered` state, which highlights the item and draws a connection line to the center.
2.  **Content**: Text description and a list of bullet points (`Check` icons) on the right side.

**Source Code:**

```javascriptreact
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

const orbitItems = [
  { label: "AI/ML", color: "#D35528", angle: 0, ring: 1 },
  { label: "Cloud", color: "#2D6BE4", angle: 60, ring: 1 },
  { label: "DevOps", color: "#0E8A7D", angle: 120, ring: 1 },
  { label: "Security", color: "#7048D6", angle: 180, ring: 1 },
  { label: "Mobile", color: "#E8A317", angle: 240, ring: 1 },
  { label: "Data", color: "#DC2626", angle: 300, ring: 1 },
  { label: "IoT", color: "#059669", angle: 30, ring: 2 },
  { label: "Web3", color: "#8B5CF6", angle: 150, ring: 2 },
  { label: "API", color: "#0891B2", angle: 270, ring: 2 },
];

const points = [
  "Full-cycle product development from ideation to launch",
  "Dedicated engineering teams with domain expertise",
  "Agile methodology with bi-weekly sprint reviews",
  "Post-launch support and continuous optimization",
  "SOC 2, GDPR, and HIPAA compliant workflows",
];

export default function About() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="about" style={{ padding: "100px 0 120px", background: "var(--cream)" }}>
      <div className="container-x">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* ── LEFT: Animated Orbital Diagram ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative", aspectRatio: "1", maxWidth: 520, margin: "0 auto", width: "100%" }}
          >
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute", inset: "4%", borderRadius: "50%",
                border: "1.5px dashed var(--border)", opacity: 0.6,
              }}
            />

            {/* Middle ring */}
            <motion.div
              style={{
                position: "absolute", inset: "18%", borderRadius: "50%",
                border: "1.5px solid var(--border)",
              }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Inner ring */}
            <motion.div
              style={{
                position: "absolute", inset: "32%", borderRadius: "50%",
                border: "1.5px solid var(--border-light)",
                background: "rgba(211,85,40,0.03)",
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Center logo */}
            <motion.div
              style={{
                position: "absolute", inset: "40%", borderRadius: 20,
                background: "linear-gradient(135deg, var(--accent), var(--amber))",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 8px 32px rgba(211,85,40,0.2)",
                zIndex: 10, cursor: "pointer",
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
            >
              <span style={{ color: "#fff", fontFamily: "var(--serif)", fontSize: 32, fontWeight: 700 }}>S</span>
            </motion.div>

            {/* Orbiting items */}
            {orbitItems.map((item, i) => {
              const radius = item.ring === 1 ? 42 : 48;
              const radians = (item.angle * Math.PI) / 180;
              const x = 50 + radius * Math.cos(radians);
              const y = 50 + radius * Math.sin(radians);
              const isHovered = hovered === i;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    position: "absolute",
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                    zIndex: 20,
                    cursor: "pointer",
                  }}
                >
                  <motion.div
                    animate={isHovered ? { scale: 1.25, y: -4 } : { scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    style={{
                      background: "#fff",
                      border: `2px solid ${isHovered ? item.color : "var(--border-light)"}`,
                      borderRadius: 100,
                      padding: "8px 16px",
                      boxShadow: isHovered
                        ? `0 8px 28px ${item.color}25, 0 0 0 4px ${item.color}10`
                        : "0 2px 8px rgba(0,0,0,0.05)",
                      display: "flex", alignItems: "center", gap: 6,
                      whiteSpace: "nowrap",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                  >
                    <span style={{
                      width: 8, height: 8, borderRadius: "50%",
                      background: item.color,
                      boxShadow: isHovered ? `0 0 8px ${item.color}60` : "none",
                      transition: "box-shadow 0.3s",
                    }} />
                    <span style={{
                      fontSize: 12, fontWeight: 700,
                      color: isHovered ? item.color : "var(--ink-secondary)",
                      transition: "color 0.3s",
                    }}>
                      {item.label}
                    </span>
                  </motion.div>

                  {/* Connection line to center */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      exit={{ opacity: 0 }}
                      style={{
                        position: "absolute",
                        top: "50%", left: "50%",
                        width: 1, height: `${radius * 0.6}%`,
                        background: item.color,
                        transformOrigin: "top center",
                        transform: `rotate(${item.angle + 180}deg)`,
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </motion.div>
              );
            })}

            {/* Decorative pulse circles */}
            <motion.div
              style={{
                position: "absolute", inset: "25%", borderRadius: "50%",
                border: "1px solid rgba(211,85,40,0.1)",
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-tag">Why Solven</span>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: 18 }}>
              Your technology partner from first commit to global scale
            </h2>
            <p style={{ fontSize: 17, color: "var(--ink-secondary)", lineHeight: 1.75, marginBottom: 32 }}>
              We don't just write code — we architect solutions. With deep domain
              expertise across fintech, healthcare, logistics, and e-commerce,
              our teams embed into your workflow and deliver outcomes that matter.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              {points.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                >
                  <div style={{
                    marginTop: 3, width: 22, height: 22, borderRadius: "50%",
                    background: "var(--accent-bg)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
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

      {/* Responsive override */}
      <style>{`
        @media (max-width: 1023px) {
          #about > div > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
```

---

### 9. `src/components/Testimonials.jsx`

**Description:**
Displays customer reviews in a grid format.

**Key Functionality & Flow:**
1.  **Data**: `testimonials` array contains quote, author, role, company, and color.
2.  **Visuals**:
    *   Cards display 5 stars (SVG), the quote, and a footer with the author's info and a colored avatar circle.
3.  **Animations**:
    *   Cards slide up and fade in with staggered delays.

**Source Code:**

```javascriptreact
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Solven rebuilt our entire logistics platform in 4 months. The performance gains were immediate — 3x faster load times, 60% cost reduction on cloud spend.",
    author: "Priya Kapoor", role: "CTO", company: "SwiftLogix",
    initials: "PK", color: "#2D6BE4",
  },
  {
    quote: "We needed an AI recommendation engine handling 10M+ daily requests. Solven delivered a production system that exceeded our accuracy targets from day one.",
    author: "Arjun Desai", role: "VP Engineering", company: "FinEdge",
    initials: "AD", color: "#D35528",
  },
  {
    quote: "Migrating from legacy monolith to microservices seemed daunting. Solven made it seamless — zero downtime, phased rollout, full observability.",
    author: "Sarah Lin", role: "Head of Platform", company: "MediTrack",
    initials: "SL", color: "#0E8A7D",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "100px 0 120px", background: "var(--cream)" }}>
      <div className="container-x">

        {/* ═══ CENTERED Header ═══ */}
        <div style={{
          maxWidth: 620,
          margin: "0 auto 60px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              textAlign: "center",
            }}
          >
            Hear from the teams we've partnered with
          </motion.h2>
        </div>

        {/* ═══ Cards ═══ */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 20,
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card-base"
              style={{
                padding: 32,
                display: "flex",
                flexDirection: "column",
                cursor: "default",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} viewBox="0 0 20 20" style={{ width: 18, height: 18, fill: "#E8A317" }}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p style={{
                fontSize: 15,
                color: "var(--ink-secondary)",
                lineHeight: 1.75,
                flex: 1,
                marginBottom: 24,
              }}>
                "{t.quote}"
              </p>

              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                paddingTop: 20,
                borderTop: "1px solid var(--border-light)",
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: "50%",
                  background: t.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontSize: 13, fontWeight: 700,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{t.author}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-muted)" }}>
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### 10. `src/components/CTA.jsx`

**Description:**
The final Call to Action section before the footer.

**Key Functionality & Flow:**
1.  **Visuals**: Dark themed card with a gradient background and decorative blobs.
2.  **Content**: "Start building today" badge, headline, subtext, and two buttons ("Schedule a consultation", "View case studies").
3.  **Animations**:
    *   The entire container scales up and fades in.
    *   Content elements inside stagger in.

**Source Code:**

```javascriptreact
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" style={{ padding: "100px 0" }}>
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "relative", overflow: "hidden",
            borderRadius: 28, background: "linear-gradient(135deg, #1a0f07, #2d1810, #1a1005)",
          }}
        >
          {/* Dot overlay */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.06,
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }} />

          {/* Blobs */}
          <div style={{
            position: "absolute", top: -60, right: -60,
            width: 350, height: 350, borderRadius: "50%",
            background: "rgba(211,85,40,0.12)", filter: "blur(80px)",
          }} />
          <div style={{
            position: "absolute", bottom: -60, left: -60,
            width: 280, height: 280, borderRadius: "50%",
            background: "rgba(232,163,23,0.08)", filter: "blur(60px)",
          }} />

          <div style={{
            position: "relative", padding: "64px 32px", textAlign: "center",
          }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "8px 18px", borderRadius: 100,
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)",
                marginBottom: 32,
              }}
            >
              <Zap size={14} style={{ color: "#E8A317" }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>
                Start building today
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                fontFamily: "var(--serif)", color: "#fff",
                fontSize: "clamp(2rem, 5vw, 3.2rem)", maxWidth: 640,
                margin: "0 auto 20px",
              }}
            >
              Ready to transform your business with technology?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", maxWidth: 440, margin: "0 auto 36px" }}
            >
              Let's discuss your next project. Our team is ready to architect the
              perfect solution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}
            >
              <button
                className="btn-fill"
                style={{ background: "#fff", color: "var(--ink)" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 28px rgba(255,255,255,0.15)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
              >
                Schedule a consultation <ArrowRight size={16} />
              </button>
              <button
                className="btn-line"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "#fff" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                }}
              >
                View case studies
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

---

### 11. `src/components/Footer.jsx`

**Description:**
The site footer containing navigation links, company info, and social links.

**Key Functionality & Flow:**
1.  **Data**: `linkGroups` object defines columns (Services, Company, Resources, Legal).
2.  **Visuals**:
    *   5-column grid layout.
    *   Brand section with logo and description.
    *   Social media links with hover effects.
    *   Bottom bar with copyright and "System operational" status indicator (pulsing green dot).

**Source Code:**

```javascriptreact
import { Mail, MapPin } from "lucide-react";

const linkGroups = {
  Services: ["Custom Software", "AI & Machine Learning", "Cloud Infrastructure", "Mobile Apps", "Data Analytics", "Cybersecurity"],
  Company: ["About Us", "Careers", "Blog", "Case Studies", "Press"],
  Resources: ["Documentation", "API Reference", "Community", "Support", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
};

export default function Footer() {
  return (
    <footer
      className="footer-section"
      style={{ position: "relative", overflow: "hidden", paddingTop: 60 }}
    >
      <div
        className="container-x"
        style={{ paddingTop: 40, paddingBottom: 64, position: "relative", zIndex: 3 }}
      >
        <div
          className="footer-links-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            gap: 32,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{
              display: "flex", alignItems: "center", gap: 10, marginBottom: 20,
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: "linear-gradient(135deg, var(--accent), var(--amber))",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{
                  color: "#fff", fontFamily: "var(--serif)",
                  fontSize: 18, fontWeight: 700,
                }}>
                  S
                </span>
              </div>
              <span style={{
                fontFamily: "var(--serif)", fontSize: 22, color: "#fff",
              }}>
                Solven
              </span>
            </div>

            <p style={{
              fontSize: 14, color: "#888", lineHeight: 1.65,
              maxWidth: 260, marginBottom: 24,
            }}>
              Building tomorrow's technology, today. Enterprise-grade solutions for
              businesses ready to transform.
            </p>

            <div style={{
              display: "flex", flexDirection: "column", gap: 8, marginBottom: 24,
            }}>
              <a
                href="mailto:hello@solven.in"
                style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}
              >
                <Mail size={14} /> hello@solven.in
              </a>
              <span style={{
                display: "flex", alignItems: "center", gap: 8,
                fontSize: 13, color: "#888",
              }}>
                <MapPin size={14} /> Bangalore, India
              </span>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              {["X", "LI", "GH", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "#222", border: "1px solid #333",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontFamily: "monospace", color: "#888",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#333";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#222";
                    e.currentTarget.style.color = "#888";
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(linkGroups).map(([heading, items]) => (
            <div key={heading}>
              <h4 style={{
                fontSize: 11, fontWeight: 700, textTransform: "uppercase",
                letterSpacing: "0.12em", color: "#666", marginBottom: 16,
                fontFamily: "var(--sans)",
              }}>
                {heading}
              </h4>
              <ul style={{
                listStyle: "none",
                display: "flex", flexDirection: "column", gap: 10,
              }}>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" style={{ fontSize: 14 }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #2a2a2a" }}>
        <div
          className="container-x"
          style={{
            padding: "20px 0",
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between", gap: 16,
          }}
        >
          <p style={{ fontSize: 13, color: "#555" }}>
            © {new Date().getFullYear()} Solven Technologies Pvt. Ltd. All rights reserved.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
                <span style={{
                  position: "absolute", inset: 0, borderRadius: "50%",
                  background: "#22C55E",
                  animation: "ping 1.5s infinite",
                  opacity: 0.5,
                }} />
                <span style={{
                  position: "relative", width: 8, height: 8,
                  borderRadius: "50%", background: "#22C55E",
                }} />
              </span>
              <span style={{ fontSize: 12, color: "#555" }}>All systems operational</span>
            </div>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{ fontSize: 12, color: "#555" }}
            >
              ↑ Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

### 12. `src/components/Layout.jsx`

**Description:**
A wrapper component that provides the consistent site structure. It renders the `Navbar`, the page content (via `Outlet`), and the `Footer`. It also includes the `ScrollToTop` utility to ensure navigation resets scroll position.

**Key Functionality:**
1.  **Structure**: Wraps all page content with fixed navigation and footer.
2.  **Routing**: Uses `Outlet` from `react-router-dom` to render the matched child route.

**Source Code:**

```javascriptreact
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
```

---

### 13. `src/components/ScrollToTop.jsx`

**Description:**
A utility component that listens for route changes and scrolls the window to the top. This mimics standard browser navigation behavior in a Single Page Application (SPA).

**Source Code:**

```javascriptreact
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
```

---

## Page Details

### 1. `src/pages/Home.jsx`

**Description:**
The main landing page that composes the primary marketing sections. It serves as the "index" route.

**Composition:**
*   **Hero**: First impression and hook.
*   **Clients**: Social proof.
*   **Features**: Core platform capabilities.
*   **ProductDemo**: Technical deep dive.
*   **Stats**: Quantitative proof.
*   **Services**: High-level service offerings.
*   **About**: Company mission.
*   **Testimonials**: Customer success.
*   **CTA**: Final conversion point.

**Source Code:**

```javascriptreact
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Features from "../components/Features";
import ProductDemo from "../components/ProductDemo";
import Stats from "../components/Stats";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <ProductDemo />
      <Stats />
      <Services />
      <About />
      <Testimonials />
      <CTA />
    </>
  );
}
```

---

### 2. `src/pages/ServicesPage.jsx`

**Description:**
A dedicated page for detailing service offerings. It reuses the `Services` component but adds a specific page header.

**Source Code:**

```javascriptreact
import { motion } from "framer-motion";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 100 }}>
      <div className="container-x" style={{ padding: "80px 0 40px", textAlign: "center" }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: 24 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 18, color: "var(--ink-secondary)", maxWidth: 600, margin: "0 auto" }}
        >
          Comprehensive technology solutions tailored to your business needs.
          From architecture to deployment, we handle it all.
        </motion.p>
      </div>
      <Services />
      <Testimonials />
      <CTA />
    </div>
  );
}
```

---

### 3. `src/pages/ProductsPage.jsx`

**Description:**
A dedicated page for the platform/product aspect. It focuses on the technical features and developer experience.

**Source Code:**

```javascriptreact
import { motion } from "framer-motion";
import Features from "../components/Features";
import ProductDemo from "../components/ProductDemo";
import Stats from "../components/Stats";
import CTA from "../components/CTA";

export default function ProductsPage() {
  return (
    <div style={{ paddingTop: 100 }}>
      <div className="container-x" style={{ padding: "80px 0 40px", textAlign: "center" }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: 24 }}
        >
          The Platform
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 18, color: "var(--ink-secondary)", maxWidth: 600, margin: "0 auto" }}
        >
          Built for scale, security, and developer productivity.
          Explore the tools that power modern enterprises.
        </motion.p>
      </div>
      <ProductDemo />
      <Features />
      <Stats />
      <CTA />
    </div>
  );
}
```

---

### 4. `src/pages/AboutPage.jsx`

**Description:**
A dedicated page for company information.

**Source Code:**

```javascriptreact
import { motion } from "framer-motion";
import About from "../components/About";
import Clients from "../components/Clients";
import Stats from "../components/Stats";
import CTA from "../components/CTA";

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 100 }}>
      <div className="container-x" style={{ padding: "80px 0 40px", textAlign: "center" }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: 24 }}
        >
          About Solven
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 18, color: "var(--ink-secondary)", maxWidth: 600, margin: "0 auto" }}
        >
          We are a team of engineers, designers, and strategists building the future of digital business.
        </motion.p>
      </div>
      <About />
      <Stats />
      <Clients />
      <CTA />
    </div>
  );
}
```
```