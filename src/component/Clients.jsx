import { useState } from "react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Accenture",
    color: "#A100FF",
    logo: (
      <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
        <path d="M8 30L20 10l12 20H28L20 16l-8 14H8z" fill="#A100FF" />
      </svg>
    ),
  },
  {
    name: "Deloitte",
    color: "#86BC25",
    logo: (
      <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
        <circle cx="20" cy="20" r="10" fill="#86BC25" />
        <circle cx="20" cy="20" r="5" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Infosys",
    color: "#007CC3",
    logo: (
      <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
        <rect x="10" y="10" width="20" height="20" rx="4" fill="#007CC3" />
        <path d="M17 25V15l8 5-8 5z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Wipro",
    color: "#3F1D75",
    logo: (
      <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
        <path d="M6 28L14 12h4l-8 16H6zm10 0L24 12h4l-8 16h-4zm10 0L34 12h-4l8 16h-4z" fill="#3F1D75" />
      </svg>
    ),
  },
  {
    name: "TCS",
    color: "#0067B1",
    logo: (
      <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
        <rect x="8" y="12" width="24" height="16" rx="3" fill="#0067B1" />
        <text x="20" y="24" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="sans-serif">TCS</text>
      </svg>
    ),
  },
  {
    name: "HCL Tech",
    color: "#0078D4",
    logo: (
      <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
        <circle cx="20" cy="20" r="13" stroke="#0078D4" strokeWidth="3" fill="none" />
        <text x="20" y="25" textAnchor="middle" fill="#0078D4" fontSize="12" fontWeight="800" fontFamily="sans-serif">H</text>
      </svg>
    ),
  },
  {
    name: "Razorpay",
    color: "#0D2366",
    logo: (
      <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
        <path d="M12 8l6 24h4L16 8h-4zm8 0l6 24h4L24 8h-4z" fill="#0D2366" />
      </svg>
    ),
  },
  {
    name: "Freshworks",
    color: "#05A84B",
    logo: (
      <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
        <path d="M20 6C12 6 8 14 8 20c0 8 6 14 12 14s12-6 12-14c0-6-4-14-12-14z" fill="#05A84B" />
        <circle cx="20" cy="18" r="4" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Zoho",
    color: "#D4382C",
    logo: (
      <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
        <rect x="8" y="12" width="24" height="16" rx="8" fill="#D4382C" />
        <text x="20" y="24" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800" fontFamily="sans-serif">Z</text>
      </svg>
    ),
  },
  {
    name: "Flipkart",
    color: "#2874F0",
    logo: (
      <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
        <rect x="10" y="8" width="20" height="24" rx="3" fill="#2874F0" />
        <path d="M16 18h8M16 23h5" stroke="#FFE500" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const doubled = [...clients, ...clients];

export default function Clients() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="clients-section" style={{ padding: "72px 0 80px", overflow: "hidden" }}>
      <div className="container-x">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center", fontSize: 13, textTransform: "uppercase",
            letterSpacing: "0.2em", color: "var(--ink-muted)", fontWeight: 600,
            marginBottom: 44,
          }}
        >
          Trusted by leading enterprises
        </motion.p>
      </div>

      <div
        style={{ position: "relative", overflow: "hidden" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to right, #fff, transparent)", zIndex: 10, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to left, #fff, transparent)", zIndex: 10, pointerEvents: "none" }} />

        <div
          className="marquee-track"
          style={{
            display: "flex",
            gap: 48,
            width: "max-content",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="marquee-item"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 24px",
                borderRadius: 14,
                border: "1px solid transparent",
                cursor: "default",
                userSelect: "none",
                transition: "all 0.35s ease",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--cream)";
                e.currentTarget.style.borderColor = "var(--border-light)";
                e.currentTarget.style.transform = "translateY(-4px) scale(1.04)";
                e.currentTarget.style.boxShadow = `0 8px 24px ${client.color}15`;
                const logo = e.currentTarget.querySelector(".client-logo");
                if (logo) logo.style.transform = "scale(1.15) rotate(-5deg)";
                const name = e.currentTarget.querySelector(".client-name");
                if (name) name.style.color = client.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
                const logo = e.currentTarget.querySelector(".client-logo");
                if (logo) logo.style.transform = "scale(1) rotate(0deg)";
                const name = e.currentTarget.querySelector(".client-name");
                if (name) name.style.color = "var(--ink-secondary)";
              }}
            >
              <div
                className="client-logo"
                style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `${client.color}08`,
                  border: `1px solid ${client.color}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "transform 0.35s ease",
                  flexShrink: 0,
                }}
              >
                {client.logo}
              </div>
              <span
                className="client-name"
                style={{
                  fontSize: 16, fontWeight: 600, color: "var(--ink-secondary)",
                  whiteSpace: "nowrap", letterSpacing: "-0.01em",
                  transition: "color 0.35s ease",
                }}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marqueeScroll 30s linear infinite;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .clients-section {
            padding: 50px 0 60px !important;
          }
        }
      `}</style>
    </section>
  );
}