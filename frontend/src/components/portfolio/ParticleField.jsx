import { useEffect, useRef } from "react";

// Deep-black canvas backdrop: faint drifting vertical light streaks + slow particle dust.
export const ParticleField = () => {
  const canvasRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let w, h, dpr;
    let scrollY = window.scrollY;
    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const streaks = [];
    const dust = [];
    const planets = [];
    const stars = [];

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      streaks.length = 0;
      const count = Math.max(10, Math.floor(w / 90));
      for (let i = 0; i < count; i++) {
        streaks.push({
          x: Math.random() * w,
          width: 0.6 + Math.random() * 1.6,
          len: h * (0.25 + Math.random() * 0.6),
          y: Math.random() * h,
          speed: 0.06 + Math.random() * 0.22,
          op: 0.02 + Math.random() * 0.06,
          cyan: Math.random() > 0.72,
        });
      }
      dust.length = 0;
      const dcount = Math.max(28, Math.floor((w * h) / 42000));
      for (let i = 0; i < dcount; i++) {
        dust.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.2 + 0.2,
          vy: -(0.05 + Math.random() * 0.18),
          op: Math.random() * 0.4 + 0.05,
          cyan: Math.random() > 0.85,
        });
      }
      // starfield with parallax depth (scrolls with the page)
      stars.length = 0;
      const scount = Math.max(80, Math.floor((w * h) / 9000));
      for (let i = 0; i < scount; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * (h * 2.2),
          r: Math.random() * 1.1 + 0.25,
          par: 0.12 + Math.random() * 0.5,
          base: 0.15 + Math.random() * 0.5,
          tw: Math.random() * Math.PI * 2,
          twV: 0.01 + Math.random() * 0.03,
          cyan: Math.random() > 0.9,
        });
      }
      planets.length = 0;
      const palette = [
        ["0,240,255", "planet"],
        ["0,80,255", "planet"],
        ["120,90,255", "galaxy"],
        ["255,0,85", "planet"],
        ["0,180,220", "galaxy"],
      ];
      const pcount = Math.max(4, Math.floor(w / 520));
      for (let i = 0; i < pcount; i++) {
        const p = palette[i % palette.length];
        planets.push({
          x: Math.random() * w,
          y: Math.random() * h * 0.85,
          r: (p[1] === "galaxy" ? 90 : 34) + Math.random() * 60,
          color: p[0],
          type: p[1],
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.05,
          op: 0.05 + Math.random() * 0.06,
          spin: Math.random() * Math.PI,
          spinV: (Math.random() - 0.5) * 0.0015,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      if (gridRef.current) {
        gridRef.current.style.backgroundPosition = `0px ${-scrollY * 0.35}px`;
      }

      // starfield (behind everything) with scroll parallax
      const spanY = h * 2.2;
      stars.forEach((s) => {
        s.tw += s.twV;
        let sy = (s.y - scrollY * s.par) % spanY;
        if (sy < 0) sy += spanY;
        if (sy > h + 2) return;
        const op = s.base * (0.55 + 0.45 * Math.sin(s.tw));
        ctx.beginPath();
        ctx.arc(s.x, sy, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.cyan
          ? `rgba(120,240,255,${op})`
          : `rgba(230,236,245,${op})`;
        ctx.fill();
      });

      // galaxies & planets (parallax drift with scroll)
      const pShift = scrollY * 0.18;
      planets.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.spin += p.spinV;
        if (p.x < -p.r) p.x = w + p.r;
        if (p.x > w + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = h + p.r;
        if (p.y > h + p.r) p.y = -p.r;

        let py = ((p.y - pShift) % (h + p.r * 2 + 40));
        if (py < -p.r - 40) py += h + p.r * 2 + 40;

        if (p.type === "galaxy") {
          ctx.save();
          ctx.translate(p.x, py);
          ctx.rotate(p.spin);
          for (let a = 0; a < 3; a++) {
            ctx.rotate((Math.PI * 2) / 3);
            const g = ctx.createRadialGradient(0, 0, p.r * 0.1, 0, 0, p.r);
            g.addColorStop(0, `rgba(${p.color},${p.op})`);
            g.addColorStop(1, `rgba(${p.color},0)`);
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.ellipse(p.r * 0.35, 0, p.r, p.r * 0.4, 0, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        } else {
          const g = ctx.createRadialGradient(
            p.x - p.r * 0.3,
            py - p.r * 0.3,
            p.r * 0.1,
            p.x,
            py,
            p.r
          );
          g.addColorStop(0, `rgba(${p.color},${p.op * 2.2})`);
          g.addColorStop(0.6, `rgba(${p.color},${p.op})`);
          g.addColorStop(1, `rgba(${p.color},0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.x, py, p.r, 0, Math.PI * 2);
          ctx.fill();
          if (p.r > 55) {
            ctx.strokeStyle = `rgba(${p.color},${p.op * 1.4})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.ellipse(p.x, py, p.r * 1.35, p.r * 0.42, p.spin, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
      });

      streaks.forEach((s) => {
        s.y += s.speed;
        if (s.y - s.len > h) s.y = -Math.random() * h * 0.3;
        const grad = ctx.createLinearGradient(s.x, s.y - s.len, s.x, s.y);
        const c = s.cyan ? "0,240,255" : "200,210,230";
        grad.addColorStop(0, `rgba(${c},0)`);
        grad.addColorStop(0.5, `rgba(${c},${s.op})`);
        grad.addColorStop(1, `rgba(${c},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(s.x, s.y - s.len, s.width, s.len);
      });

      dust.forEach((d) => {
        d.y += d.vy;
        if (d.y < -4) {
          d.y = h + 4;
          d.x = Math.random() * w;
        }
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.cyan
          ? `rgba(0,240,255,${d.op})`
          : `rgba(210,220,235,${d.op * 0.6})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    build();
    if (reduced) {
      draw();
      cancelAnimationFrame(raf);
    } else {
      draw();
    }
    window.addEventListener("resize", build);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 bg-[#050505]"
      aria-hidden="true"
      data-testid="particle-field"
    >
      <div ref={gridRef} className="absolute inset-0 grid-bg opacity-40" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 70% -10%, rgba(0,51,255,0.12), transparent 60%), radial-gradient(900px 500px at 10% 110%, rgba(0,240,255,0.08), transparent 55%)",
        }}
      />
    </div>
  );
};
