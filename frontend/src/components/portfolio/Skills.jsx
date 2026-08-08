import { motion } from "framer-motion";
import { skills } from "../../data/portfolio";

const spans = [
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-12",
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-[1400px] px-6 py-32 md:px-12 md:py-40"
      data-testid="skills-section"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
          <span className="h-px w-10 bg-cyan" /> Toolkit
        </div>
        <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-none tracking-tighter text-white md:text-7xl">
          Stack
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        {skills.map((s, i) => (
          <motion.div
            key={s.group}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            className={`group relative overflow-hidden border border-white/8 bg-[#0a0a0a]/60 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-cyan/40 ${spans[i]}`}
            data-testid={`skill-${i}`}
          >
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display text-xs font-bold text-cyan/40">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white md:text-base">
                {s.group}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="border border-white/10 px-3 py-1.5 font-mono text-xs text-[var(--txt-secondary)] transition-colors duration-300 hover:border-cyan/50 hover:text-cyan"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
