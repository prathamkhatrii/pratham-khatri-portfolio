import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, MapPin } from "lucide-react";
import { profile, heroLines, stats } from "../../data/portfolio";

const lineReveal = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.5 + i * 0.14, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 md:px-12"
      data-testid="hero-section"
    >
      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan"
          data-testid="hero-eyebrow"
        >
          <span className="h-px w-10 bg-cyan" />
          {profile.role}
          <span className="flex items-center gap-1 text-[var(--txt-muted)]">
            <MapPin size={12} /> {profile.location}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-white md:text-base"
          data-testid="hero-greeting"
        >
          Hi, I'm <span className="text-cyan glow-cyan">Pratham Khatri</span>
        </motion.div>

        <h1 className="font-display text-[13vw] font-black uppercase leading-[0.92] tracking-tighter text-white md:text-[8.5vw]">
          {heroLines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                custom={i}
                variants={lineReveal}
                initial="hidden"
                animate="show"
                className={`block ${i === 2 ? "text-cyan glow-cyan" : ""}`}
                data-testid={`hero-line-${i}`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-10 max-w-xl font-mono text-sm leading-relaxed text-[var(--txt-secondary)] md:text-base"
          data-testid="hero-tagline"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8"
          data-testid="hero-stats"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl font-bold text-white md:text-4xl">{s.value}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[var(--txt-muted)] md:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--txt-muted)]"
        data-testid="hero-scroll-cue"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ArrowDown size={14} className="text-cyan" />
        </motion.span>
      </motion.button>
    </section>
  );
};
