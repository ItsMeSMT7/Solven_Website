// src/components/Features.jsx
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