import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, profile } from "../../data/portfolio";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-[1400px] px-6 py-32 md:px-12 md:py-40"
      data-testid="projects-section"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
          <span className="h-px w-10 bg-cyan" /> Selected Work
        </div>
        <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-none tracking-tighter text-white md:text-7xl">
          Impact<span className="text-cyan glow-cyan">,</span> quantified
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((p, i) => {
          const href = typeof p.link === "function" ? p.link(profile) : p.link || profile.github;
          return (
            <motion.a
              key={p.id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-[#0a0a0a]/70 p-8 backdrop-blur-sm transition-all duration-500 hover:border-cyan/50 md:p-10"
              data-testid={`project-${p.id}`}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, rgba(0,240,255,0.22), transparent 70%)" }}
              />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="border border-white/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--txt-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight
                    className="text-[var(--txt-muted)] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan"
                    size={24}
                  />
                </div>

                <div className="mt-10">
                  <div className="font-display text-5xl font-black tracking-tighter text-cyan glow-cyan md:text-6xl">
                    {p.metric}
                  </div>
                  <div className="mt-2 max-w-xs font-mono text-xs uppercase tracking-widest text-[var(--txt-secondary)]">
                    {p.metricLabel}
                  </div>
                </div>

                <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-white md:text-2xl">
                  {p.title}
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 font-mono text-[13px] leading-relaxed text-[var(--txt-secondary)]">
                      <span className="mt-1.5 h-1 w-1 shrink-0 bg-cyan" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};
