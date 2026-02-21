// FILE: src/components/Navbar.jsx
// REPLACE YOUR ENTIRE Navbar.jsx WITH THIS
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
            {/* <a
              href="#"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: scrolled ? "rgba(255,255,255,0.7)" : "var(--ink-secondary)",
                padding: "7px 16px",
                borderRadius: 100,
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = scrolled ? "#fff" : "var(--ink)";
                e.currentTarget.style.background = scrolled
                  ? "rgba(255,255,255,0.08)"
                  : "var(--cream)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = scrolled
                  ? "rgba(255,255,255,0.7)"
                  : "var(--ink-secondary)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Log in
            </a> */}
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