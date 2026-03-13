// FILE: src/components/CTA.jsx
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="cta-section" style={{ padding: "100px 0" }}>
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
            /* ── Diagonal: dark bottom-left → bright top-right ── */
            background:
              "linear-gradient(135deg, #00174A 0%, #0B3D91 40%, #2DA7FF 100%)",
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

          {/* ── Blob 1 — electric-blue glow (top-right, brightens corner) ── */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 350,
              height: 350,
              borderRadius: "50%",
              background: "rgba(45, 167, 255, 0.20)",
              filter: "blur(80px)",
            }}
          />

          {/* ── Blob 2 — deep-navy glow (bottom-left, deepens corner) ── */}
          <div
            style={{
              position: "absolute",
              bottom: -60,
              left: -60,
              width: 280,
              height: 280,
              borderRadius: "50%",
              background: "rgba(0, 23, 74, 0.30)",
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
            {/* Badge pill */}
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
                border: "1px solid rgba(255,255,255,0.12)",
                marginBottom: 32,
              }}
            >
              <Zap size={14} style={{ color: "#60A5FA" }} />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                Start building today
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                fontFamily: "var(--serif)",
                color: "#fff",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                maxWidth: 640,
                margin: "0 auto 20px",
              }}
            >
              Ready to transform your business with technology?
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.55)",
                maxWidth: 440,
                margin: "0 auto 36px",
              }}
            >
              Let's discuss your next project. Our team is ready to architect the
              perfect solution.
            </motion.p>

            {/* Buttons */}
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
              {/* Primary — white fill */}
              <button
                className="btn-fill"
                style={{ background: "#00174A", color: "#fff" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(0, 23, 74, 0.35)";
                  e.currentTarget.style.background = "#0B3D91";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.background = "#00174A";
                }}
              >
                Discuss your project <ArrowRight size={16} />
              </button>

              {/* Secondary — ghost outline */}
              <button
                className="btn-line"
                style={{
                  borderColor: "rgba(255,255,255,0.20)",
                  color: "#fff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.20)";
                }}
              >
                View case studies
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-section {
            padding: 60px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}







// FILE: src/components/CTA.jsx
// import { motion } from "framer-motion";
// import { ArrowRight, Zap } from "lucide-react";

// export default function CTA() {
// return (
// <section id="contact" className="cta-section" style={{ padding: "100px 0" }}>
// <div className="container-x">
// <motion.div
// initial={{ opacity: 0, y: 30, scale: 0.98 }}
// whileInView={{ opacity: 1, y: 0, scale: 1 }}
// viewport={{ once: true }}
// transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// style={{
// position: "relative", overflow: "hidden",
// borderRadius: 28, background: "linear-gradient(135deg, #1a0f07, #2d1810, #1a1005)",
// }}
// >
// {/* Dot overlay */}
// <div style={{
// position: "absolute", inset: 0, opacity: 0.06,
// backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
// backgroundSize: "20px 20px",
// }} />



//       {/* Blobs */}
//       <div style={{
//         position: "absolute", top: -60, right: -60,
//         width: 350, height: 350, borderRadius: "50%",
//         background: "rgba(211,85,40,0.12)", filter: "blur(80px)",
//       }} />
//       <div style={{
//         position: "absolute", bottom: -60, left: -60,
//         width: 280, height: 280, borderRadius: "50%",
//         background: "rgba(232,163,23,0.08)", filter: "blur(60px)",
//       }} />

//       <div style={{
//         position: "relative", padding: "64px 32px", textAlign: "center",
//       }}>
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           style={{
//             display: "inline-flex", alignItems: "center", gap: 8,
//             padding: "8px 18px", borderRadius: 100,
//             background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)",
//             marginBottom: 32,
//           }}
//         >
//           <Zap size={14} style={{ color: "#E8A317" }} />
//           <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>
//             Start building today
//           </span>
//         </motion.div>

//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           style={{
//             fontFamily: "var(--serif)", color: "#fff",
//             fontSize: "clamp(2rem, 5vw, 3.2rem)", maxWidth: 640,
//             margin: "0 auto 20px",
//           }}
//         >
//           Ready to transform your business with technology?
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 14 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", maxWidth: 440, margin: "0 auto 36px" }}
//         >
//           Let's discuss your next project. Our team is ready to architect the
//           perfect solution.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//           style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}
//         >
//           <button
//             className="btn-fill"
//             style={{ background: "#fff", color: "var(--ink)" }}
//             onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 28px rgba(255,255,255,0.15)"; }}
//             onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
//           >
//             Schedule a consultation <ArrowRight size={16} />
//           </button>
//           <button
//             className="btn-line"
//             style={{ borderColor: "rgba(255,255,255,0.2)", color: "#fff" }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = "rgba(255,255,255,0.08)";
//               e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = "transparent";
//               e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
//             }}
//           >
//             View case studies
//           </button>
//         </motion.div>
//       </div>
//     </motion.div>
//   </div>

//   <style>{`
//     @media (max-width: 768px) {
//       .cta-section {
//         padding: 60px 0 !important;
//       }
//     }
//   `}</style>
// </section>
// );
// }