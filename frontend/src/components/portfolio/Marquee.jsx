import { motion } from "framer-motion";

const WORDS = ["DATA DRIVEN", "AI FOCUSED", "PROBLEM SOLVER", "IMPACT FIRST"];

export const Marquee = () => {
  const row = [...WORDS, ...WORDS, ...WORDS];
  return (
    <section className="relative select-none overflow-hidden border-y border-white/8 py-8 md:py-12" data-testid="marquee">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
        aria-hidden="true"
      >
        {row.map((w, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`px-8 font-display text-4xl font-black uppercase tracking-tighter md:text-7xl ${
                i % 2 === 0 ? "stroke-text" : "text-white"
              }`}
            >
              {w}
            </span>
            <span className="text-cyan glow-cyan">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
};
