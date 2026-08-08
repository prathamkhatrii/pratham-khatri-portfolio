import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Sparkles } from "lucide-react";
import { blogs, interests } from "../../data/portfolio";

export const BlogInterests = () => {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="blog"
      className="relative mx-auto max-w-[1400px] px-6 py-32 md:px-12 md:py-40"
      data-testid="blog-section"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
          <span className="h-px w-10 bg-cyan" /> Writing & Interests
        </div>
        <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-none tracking-tighter text-white md:text-7xl">
          The Journal
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Blog list */}
        <div className="lg:col-span-8">
          <div className="flex flex-col divide-y divide-white/8 border-y border-white/8">
            {blogs.map((b, i) => {
              const isOpen = open === b.n;
              return (
                <motion.div
                  key={b.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group"
                  data-testid={`blog-${b.n}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : b.n)}
                    className="flex w-full items-start gap-5 py-7 text-left md:gap-8"
                    data-testid={`blog-toggle-${b.n}`}
                  >
                    <span className="font-display text-sm font-bold text-cyan/40 transition-colors duration-500 group-hover:text-cyan">
                      {b.n}
                    </span>
                    <div className="flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="border border-cyan/30 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan">
                          {b.category}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--txt-muted)]">
                          {b.read}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-cyan md:text-xl">
                        {b.title}
                      </h3>
                      <p className="mt-3 font-mono text-sm leading-relaxed text-[var(--txt-secondary)]">
                        {b.excerpt}
                      </p>
                    </div>
                    <span className="mt-1 shrink-0 text-cyan">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 pl-9 pr-2 font-mono text-sm leading-relaxed text-[var(--txt-secondary)] md:pl-[3.25rem]">
                          {b.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-widest text-[var(--txt-muted)]">
            Full write-ups coming soon.
          </p>
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4"
        >
          <div className="border border-white/8 bg-[#0a0a0a]/60 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <Sparkles size={16} className="text-cyan" />
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
                Interests
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {interests.map((it, i) => (
                <motion.li
                  key={it}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3 font-mono text-sm text-[var(--txt-secondary)]"
                  data-testid={`interest-${i}`}
                >
                  <span className="h-1.5 w-1.5 shrink-0 bg-cyan" />
                  {it}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
