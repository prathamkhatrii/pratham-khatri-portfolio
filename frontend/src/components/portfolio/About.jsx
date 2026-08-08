import { motion } from "framer-motion";
import { manifesto } from "../../data/portfolio";

const Section = ({ children }) => children;

export const About = () => {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-[1400px] px-6 py-32 md:px-12 md:py-48"
      data-testid="about-section"
    >
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-4"
        >
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
            <span className="h-px w-10 bg-cyan" /> Manifesto
          </div>
          <h2 className="mt-8 font-display text-4xl font-bold uppercase leading-none tracking-tighter text-white md:text-6xl">
            How I<br />
            <span className="stroke-text-cyan">think.</span>
          </h2>
          <p className="mt-8 font-mono text-sm leading-relaxed text-[var(--txt-secondary)]">
            A fourth-year Computer Science student at York University graduating June 2026 — happiest
            at the seam where data engineering, ML and business strategy collide.
          </p>
        </motion.div>

        <div className="md:col-span-8 md:col-start-5">
          <div className="flex flex-col divide-y divide-white/8">
            {manifesto.map((m, i) => (
              <motion.div
                key={m.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group grid grid-cols-[auto_1fr] gap-6 py-10 md:gap-12"
                data-testid={`manifesto-${m.n}`}
              >
                <span className="font-display text-3xl font-bold text-cyan/30 transition-colors duration-500 group-hover:text-cyan group-hover:glow-cyan md:text-5xl">
                  {m.n}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-white md:text-2xl">
                    {m.title}
                  </h3>
                  <p className="mt-4 max-w-xl font-mono text-sm leading-relaxed text-[var(--txt-secondary)]">
                    {m.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
