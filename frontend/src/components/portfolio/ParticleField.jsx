import { useEffect, useRef } from "react";

// Deep-black canvas backdrop: faint drifting vertical light streaks + slow particle dust.
export const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let w, h, dpr;

    const streaks = [];
    const dust = [];

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
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

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
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 bg-[#050505]"
      aria-hidden="true"
      data-testid="particle-field"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
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
