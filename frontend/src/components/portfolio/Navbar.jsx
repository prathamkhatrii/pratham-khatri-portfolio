import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Work", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Journal", id: "blog" },
  { label: "Contact", id: "contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <button
          onClick={() => go("hero")}
          className="font-display text-lg font-bold tracking-tight text-white"
          data-testid="nav-logo"
        >
          PK<span className="text-cyan glow-cyan">.</span>
        </button>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="group relative font-mono text-xs uppercase tracking-[0.2em] text-[var(--txt-secondary)] transition-colors duration-300 hover:text-white"
              data-testid={`nav-${l.id}`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <button
          onClick={() => go("contact")}
          className="hidden items-center gap-2 border border-cyan/40 px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan transition-all duration-300 hover:glow-border hover:bg-cyan/5 md:flex"
          data-testid="nav-cta"
        >
          Let's talk
        </button>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/5 bg-[#050505]/95 backdrop-blur-xl md:hidden"
            data-testid="nav-mobile-menu"
          >
            <div className="flex flex-col px-6 py-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="py-3 text-left font-mono text-sm uppercase tracking-[0.2em] text-[var(--txt-secondary)]"
                  data-testid={`nav-mobile-${l.id}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
