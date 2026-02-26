import { useState } from "react";
import { motion } from "framer-motion";
import affordabledriveeducation from "../assets/Trustedby/affordabledriveeducation.png";
import bhokarikarlawfirms from "../assets/Trustedby/bhokarikarlawfirms.png";
import discover from "../assets/Trustedby/discover.png";
import enterpriseglobal from "../assets/Trustedby/enterpriseglobal.png";
// import journey from "../assets/Trustedby/journey.png";
import paripoorn from "../assets/Trustedby/paripoorn.png";
import samarth from "../assets/Trustedby/samarth.png";
import Shrisiddhlogo from "../assets/Trustedby/Shrisiddhlogo.png";
import varahivastu from "../assets/Trustedby/varahivastu.png";
import zaratari from "../assets/Trustedby/zaratari.png";

const clients = [
  { name: "Affordable Drive Education", logo: affordabledriveeducation },
  { name: "Bhokarikar Law Firms", logo: bhokarikarlawfirms },
  { name: "Discover", logo: discover },
  { name: "Enterprise Global", logo: enterpriseglobal },
  // { name: "Journey", logo: journey },
  { name: "Paripoorn", logo: paripoorn },
  { name: "Samarth", logo: samarth },
  { name: "Shri Siddh", logo: Shrisiddhlogo },
  { name: "Varahi Vastu", logo: varahivastu },
  { name: "Zaratari", logo: zaratari },
];

const doubled = [...clients, ...clients];

export default function Clients() {
  const [paused, setPaused] = useState(false);

  return (
    <section style={{ padding: "60px 0 72px", overflow: "hidden" }}>
      <div className="container-x">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "var(--ink-muted)",
            fontWeight: 600,
            marginBottom: 40,
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
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 140,
            background: "linear-gradient(to right, #fff, transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 140,
            background: "linear-gradient(to left, #fff, transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        <div
          className="marquee-track"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 56,
            width: "max-content",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "default",
                userSelect: "none",
                transition: "all 0.4s ease",
                opacity: 0.6,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(-4px) scale(1.12)";
                e.currentTarget.style.filter = "grayscale(0)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.6";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.filter = "grayscale(0.3)";
              }}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                style={{
                  height: 52,
                  width: "auto",
                  maxWidth: 160,
                  objectFit: "contain",
                  display: "block",
                  filter: "grayscale(0.3)",
                  transition: "filter 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(0.3)";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marqueeScroll 25s linear infinite;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}