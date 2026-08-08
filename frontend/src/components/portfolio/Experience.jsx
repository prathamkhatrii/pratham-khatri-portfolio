import { motion } from "framer-motion";
import { experience } from "../../data/portfolio";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-[1400px] px-6 py-32 md:px-12 md:py-40"
      data-testid="experience-section"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end"
      >
        <div>
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
            <span className="h-px w-10 bg-cyan" /> Trajectory
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-none tracking-tighter text-white md:text-7xl">
            Experience
          </h2>
        </div>
        <p className="max-w-xs font-mono text-xs uppercase tracking-widest text-[var(--txt-muted)]">
          Three roles. One throughline. Shipping data that pays for itself.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-cyan/60 via-cyan/20 to-transparent md:block" />
        <div className="flex flex-col gap-4">
          {experience.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative grid grid-cols-1 gap-6 border border-white/8 bg-[#0a0a0a]/60 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-cyan/40 md:grid-cols-12 md:pl-16"
              data-testid={`exp-${i}`}
            >
              <span className="absolute left-[-5px] top-10 hidden h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_12px_rgba(0,240,255,0.8)] md:block" />
              <div className="md:col-span-4">
                <div className="font-mono text-xs uppercase tracking-widest text-cyan">{e.period}</div>
                <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-white md:text-xl">
                  {e.role}
                </h3>
                <div className="mt-1 font-mono text-sm text-[var(--txt-secondary)]">{e.company}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.stack.map((s) => (
                    <span
                      key={s}
                      className="border border-white/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--txt-muted)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="flex flex-col gap-4 md:col-span-8">
                {e.points.map((p, j) => (
                  <li key={j} className="flex gap-3 font-mono text-sm leading-relaxed text-[var(--txt-secondary)]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 bg-cyan" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
