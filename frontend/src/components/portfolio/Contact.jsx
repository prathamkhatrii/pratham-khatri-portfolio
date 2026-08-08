import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { profile } from "../../data/portfolio";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, testid: "contact-email" },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}`, testid: "contact-phone" },
  { icon: Linkedin, label: "LinkedIn", value: "/prathammkhatrii", href: profile.linkedin, testid: "contact-linkedin" },
  { icon: Github, label: "GitHub", value: "/prathamkhatrii", href: profile.github, testid: "contact-github" },
];

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative mt-16 border-t border-cyan/30 bg-[#070708]"
      data-testid="contact-section"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-12 md:py-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
            <span className="h-px w-10 bg-cyan" /> Open to 2026 roles
          </div>
          <h2 className="mt-8 font-display text-6xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-[11vw]">
            LET'S<br />
            <span className="text-cyan glow-cyan">BUILD.</span>
          </h2>
          <p className="mt-8 max-w-lg font-mono text-sm leading-relaxed text-[var(--txt-secondary)]">
            Looking for data, ML or analytics engineering roles. If you've got an ambiguous problem
            and a pile of data, let's talk.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-px border border-white/8 bg-white/8 sm:grid-cols-2">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-center justify-between bg-[#070708] p-8 transition-colors duration-500 hover:bg-[#0d0e12] md:p-10"
              data-testid={c.testid}
            >
              <div className="flex items-center gap-5">
                <c.icon className="text-cyan" size={22} />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--txt-muted)]">
                    {c.label}
                  </div>
                  <div className="mt-1 font-mono text-sm text-white md:text-base">{c.value}</div>
                </div>
              </div>
              <ArrowUpRight
                className="text-[var(--txt-muted)] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan"
                size={20}
              />
            </motion.a>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-8 font-mono text-xs uppercase tracking-widest text-[var(--txt-muted)] md:flex-row md:items-center">
          <span>© 2026 {profile.name}</span>
          <span>Toronto, ON. Designed & built from scratch</span>
        </div>
      </div>
    </section>
  );
};
