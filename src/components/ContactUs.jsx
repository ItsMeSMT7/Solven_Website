import { useState } from "react";
import { motion } from "framer-motion";

const API_URL = "https://solven.in/api/contact.php";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@solven.in",
    sub: "We reply within 24 hours",
    color: "#D35528",
    bg: "#FEF3ED",
    href: "mailto:hello@solven.in",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 80 4567 8900",
    sub: "Mon – Sat, 9 AM – 6 PM IST",
    color: "#0E8A7D",
    bg: "#F0FDFA",
    href: "tel:+918045678900",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Pune, India",
    sub: "HSR Layout, Sector 2",
    color: "#2D6BE4",
    bg: "#EFF6FF",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sat",
    sub: "9:00 AM – 6:00 PM IST",
    color: "#7048D6",
    bg: "#F5F3FF",
    href: null,
  },
];

const inputBase = {
  width: "100%",
  padding: "14px 18px",
  fontSize: 15,
  fontFamily: "var(--sans)",
  color: "var(--ink)",
  background: "#fff",
  border: "1.5px solid var(--border-light)",
  borderRadius: 14,
  outline: "none",
  transition: "all 0.3s ease",
};

const labelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "var(--ink-secondary)",
  marginBottom: 8,
  letterSpacing: "0.01em",
};

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to send message");
    }

    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  } catch (err) {
    setError(err.message || "Network error");
  } finally {
    setLoading(false);
  }
};

  const getFocusStyle = (field) => ({
    ...inputBase,
    borderColor:
      focused === field ? "var(--accent)" : "var(--border-light)",
    boxShadow:
      focused === field
        ? "0 0 0 3px rgba(211,85,40,0.08)"
        : "0 1px 3px rgba(0,0,0,0.02)",
  });

  return (
    <section
      id="contactus"
      style={{
        padding: "100px 0 120px",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFF9F5 40%, #FFFBF7 100%)",
      }}
    >
      {/* ── Background decorations ── */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(211,85,40,0.05), transparent 70%)",
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
            "radial-gradient(circle, rgba(232,163,23,0.04), transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="container-x" style={{ position: "relative", zIndex: 5 }}>
        {/* ═══ CENTERED Section Header ═══ */}
        <div
          style={{
            maxWidth: 620,
            margin: "0 auto 64px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Contact Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            Let's build something{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--accent), var(--amber))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              great together
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
              maxWidth: 520,
              textAlign: "center",
            }}
          >
            Have a project in mind or want to explore how we can help?
            Drop us a message and our team will get back to you within
            24 hours.
          </motion.p>
        </div>

        {/* ═══ Main Grid: Form + Info ═══ */}
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 400px",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* ── LEFT: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="card-base"
              style={{
                padding: 36,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(211,85,40,0.06), transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    textAlign: "center",
                    padding: "60px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "var(--accent-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CheckCircle2
                      size={32}
                      style={{ color: "var(--accent)" }}
                    />
                  </motion.div>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 24,
                      color: "var(--ink)",
                    }}
                  >
                    Message sent!
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--ink-secondary)",
                      maxWidth: 320,
                    }}
                  >
                    Thank you for reaching out. We'll get back to you
                    within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 22,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {/* Name + Email row */}
                  <div
                    className="form-row"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                    }}
                  >
                    <div>
                      <label style={labelStyle} htmlFor="name">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        required
                        style={getFocusStyle("name")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        required
                        style={getFocusStyle("email")}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={labelStyle} htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help you?"
                      value={form.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused(null)}
                      required
                      style={getFocusStyle("subject")}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle} htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      required
                      style={{
                        ...getFocusStyle("message"),
                        resize: "vertical",
                        minHeight: 130,
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
  type="submit"
  disabled={loading}
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.98 }}
  style={{
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "16px 32px",
    fontSize: 15,
    fontWeight: 700,
    fontFamily: "var(--sans)",
    borderRadius: 14,
    border: "none",
    cursor: loading ? "not-allowed" : "pointer",
    background: "linear-gradient(135deg, var(--accent), #c44a1e)",
    color: "#fff",
    transition: "all 0.35s ease",
    boxShadow: "0 4px 16px rgba(211,85,40,0.2)",
    width: "100%",
    opacity: loading ? 0.7 : 1,
  }}
  onMouseEnter={(e) => {
    if (!loading) {
      e.currentTarget.style.boxShadow =
        "0 8px 32px rgba(211,85,40,0.35)";
    }
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow =
      "0 4px 16px rgba(211,85,40,0.2)";
  }}
>
  {loading ? "Sending..." : "Send Message"}
  {!loading && <Send size={16} />}
</motion.button>

{error && (
  <div style={{ color: "#c0392b", fontSize: 13 }}>
    {error}
  </div>
)}
                </form>
              )}
            </div>
          </motion.div>

          {/* ── RIGHT: Contact Info Cards ── */}
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
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 + i * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={
                      info.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <ContactInfoCard info={info} />
                  </a>
                ) : (
                  <ContactInfoCard info={info} />
                )}
              </motion.div>
            ))}

            {/* Extra: Quick response promise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              style={{
                marginTop: 8,
                padding: "20px 24px",
                borderRadius: 16,
                background:
                  "linear-gradient(135deg, rgba(211,85,40,0.06), rgba(232,163,23,0.04))",
                border: "1px solid rgba(211,85,40,0.1)",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  background:
                    "linear-gradient(135deg, var(--accent), var(--amber))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Send size={18} style={{ color: "#fff" }} />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: 2,
                  }}
                >
                  Quick Response Guarantee
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--ink-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  Our team typically responds within 2–4 business hours
                  during working days.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ═══ Responsive Styles ═══ */}
      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 540px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Reusable Contact Info Card ── */
function ContactInfoCard({ info }) {
  return (
    <div
      className="card-base"
      style={{
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        cursor: info.href ? "pointer" : "default",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow =
          "0 8px 24px rgba(0,0,0,0.06)";
        e.currentTarget.style.borderColor = info.color + "30";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "var(--border-light)";
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: info.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "transform 0.3s ease",
        }}
      >
        <info.icon
          size={22}
          style={{ color: info.color }}
          strokeWidth={1.6}
        />
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--ink-muted)",
            marginBottom: 4,
          }}
        >
          {info.label}
        </div>
        <div
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "var(--ink)",
          }}
        >
          {info.value}
        </div>
        <div
          style={{
            fontSize: 12,
            color: "var(--ink-muted)",
            marginTop: 2,
          }}
        >
          {info.sub}
        </div>
      </div>
      {info.href && (
        <ArrowUpRight
          size={16}
          style={{
            color: "var(--ink-muted)",
            flexShrink: 0,
          }}
        />
      )}
    </div>
  );
}