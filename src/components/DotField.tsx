"use client";

import { useEffect, useRef } from "react";

interface DotFieldProps {
  /** px between dots */
  spacing?: number;
  /** px radius of each dot */
  dotRadius?: number;
  /** px radius of cursor influence */
  influenceRadius?: number;
  /** how hard the cursor pushes dots */
  pushStrength?: number;
  /** how fast dots spring back to rest */
  springStrength?: number;
  /** velocity damping per frame (0 = stop, 1 = no damping) */
  damping?: number;
  /** base dot opacity at rest */
  baseAlpha?: number;
  /** dot color override; defaults to CSS var --accent */
  color?: string;
  className?: string;
}

interface Dot {
  x0: number;
  y0: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function DotField({
  spacing = 28,
  dotRadius = 1.25,
  influenceRadius = 130,
  pushStrength = 0.9,
  springStrength = 0.045,
  damping = 0.86,
  baseAlpha = 0.22,
  color,
  className = "",
}: DotFieldProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    // Respect user preferences and skip on touch (no hover input)
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (reduceMotion || isTouch) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let dots: Dot[] = [];
    let mouse = { x: -9999, y: -9999, active: false };
    let visible = true;
    let rafId = 0;

    const resolveColor = () => {
      if (color) return color;
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim();
      return v || "#4c2ee5";
    };

    const layout = () => {
      const rect = wrap.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const next: Dot[] = [];
      const cols = Math.max(2, Math.floor(rect.width / spacing) + 1);
      const rows = Math.max(2, Math.floor(rect.height / spacing) + 1);
      const offsetX = (rect.width - (cols - 1) * spacing) / 2;
      const offsetY = (rect.height - (rows - 1) * spacing) / 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = offsetX + c * spacing;
          const y = offsetY + r * spacing;
          // Carry over velocity from existing dots if same index, otherwise reset
          const prev = dots[next.length];
          next.push({
            x0: x,
            y0: y,
            x: prev?.x ?? x,
            y: prev?.y ?? y,
            vx: prev?.vx ?? 0,
            vy: prev?.vy ?? 0,
          });
        }
      }
      dots = next;
    };

    layout();

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside =
        x >= -influenceRadius &&
        x <= rect.width + influenceRadius &&
        y >= -influenceRadius &&
        y <= rect.height + influenceRadius;
      if (inside) {
        mouse = { x, y, active: true };
      } else if (mouse.active) {
        mouse = { x: -9999, y: -9999, active: false };
      }
    };

    const onLeave = () => {
      mouse = { x: -9999, y: -9999, active: false };
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);

    const ro = new ResizeObserver(() => layout());
    ro.observe(wrap);

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 }
    );
    io.observe(wrap);

    let accent = resolveColor();
    let frameCount = 0;
    const r2 = influenceRadius * influenceRadius;

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      if (!visible) return;

      // Re-read accent color every 6 frames (~10× per second) so the
      // spectrum slider in ColorPicker live-updates the dots without
      // calling getComputedStyle on every frame.
      if (frameCount++ % 6 === 0) {
        accent = resolveColor();
      }

      const rect = wrap.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const mx = mouse.x;
      const my = mouse.y;
      const active = mouse.active;

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        // Cursor push (radial, with eased falloff)
        if (active) {
          const dx = d.x - mx;
          const dy = d.y - my;
          const d2 = dx * dx + dy * dy;
          if (d2 < r2 && d2 > 0.0001) {
            const dist = Math.sqrt(d2);
            const t = 1 - dist / influenceRadius; // 0..1
            const force = t * t; // ease-in
            d.vx += (dx / dist) * force * pushStrength;
            d.vy += (dy / dist) * force * pushStrength;
          }
        }

        // Spring toward rest
        d.vx += (d.x0 - d.x) * springStrength;
        d.vy += (d.y0 - d.y) * springStrength;

        // Damping
        d.vx *= damping;
        d.vy *= damping;

        // Integrate
        d.x += d.vx;
        d.y += d.vy;

        // Alpha brightens near cursor
        let alpha = baseAlpha;
        if (active) {
          const dx = d.x - mx;
          const dy = d.y - my;
          const d2 = dx * dx + dy * dy;
          if (d2 < r2) {
            const t = 1 - Math.sqrt(d2) / influenceRadius;
            alpha = baseAlpha + t * 0.55;
          }
        }

        ctx.globalAlpha = alpha;
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.arc(d.x, d.y, dotRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      ro.disconnect();
      io.disconnect();
    };
  }, [
    spacing,
    dotRadius,
    influenceRadius,
    pushStrength,
    springStrength,
    damping,
    baseAlpha,
    color,
  ]);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className={`absolute inset-0 pointer-events-none ${className}`}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
