// src/components/ProductDemo.jsx
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