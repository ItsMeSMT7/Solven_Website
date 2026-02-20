// src/components/Clients.jsx
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