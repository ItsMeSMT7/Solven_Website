// FILE: src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
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
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <div
          style={{
            padding: scrolled ? "10px 0" : "18px 0",
            background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
            borderBottom: scrolled ? "1px solid var(--border-light)" : "1px solid transparent",
            transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div className="container-x" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {/* Logo */}
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: "linear-gradient(135deg, var(--accent), var(--amber))",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ color: "#fff", fontFamily: "var(--serif)", fontSize: 18, fontWeight: 700 }}>S</span>
              </div>
              <span style={{ fontFamily: "var(--serif)", fontSize: 24, color: "var(--ink)", letterSpacing: "-0.02em" }}>
                Solven
              </span>
            </a>

            {/* Desktop nav */}
            <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden lg:flex">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    padding: "8px 18px",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "var(--ink-secondary)",
                    borderRadius: 8,
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--ink)";
                    e.currentTarget.style.background = "var(--cream)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--ink-secondary)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="hidden lg:flex">
              <a href="#" style={{ fontSize: 15, fontWeight: 500, color: "var(--ink-secondary)", padding: "8px 12px" }}>
                Log in
              </a>
              <button className="btn-fill" style={{ padding: "10px 26px", fontSize: 14 }}>
                Get Started
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden"
              style={{ padding: 8, background: "none", border: "none", cursor: "pointer", color: "var(--ink)" }}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed", inset: 0, zIndex: 90,
              background: "#fff", paddingTop: 100, paddingLeft: 24, paddingRight: 24,
            }}
            className="lg:hidden"
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
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
              style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}
            >
              <button className="btn-fill" style={{ width: "100%", fontSize: 16 }}>Get Started</button>
              <button className="btn-line" style={{ width: "100%", fontSize: 16 }}>Log in</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}