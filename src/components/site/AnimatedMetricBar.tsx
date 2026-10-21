import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface AnimatedMetricBarProps {
  label: string;
  value?: number;
  delay?: number;
}

export function AnimatedMetricBar({
  label,
  value = 100,
  delay = 0,
}: AnimatedMetricBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frameId: number;
    const duration = 1800; // ms
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) {
        startTime = now + delay * 1000;
      }

      if (now < startTime) {
        frameId = requestAnimationFrame(tick);
        return;
      }

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // smooth cubic easeOut for natural progress acceleration & deceleration
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(ease * value);

      setDisplayValue(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, delay]);

  return (
    <div ref={ref} className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-800">{label}</span>
        <span className="font-mono text-sm font-extrabold text-[#00A3E0] transition-colors">
          {displayValue}%
        </span>
      </div>
      <div className="relative h-3.5 w-full overflow-hidden rounded-full bg-slate-200/80 p-0.5 shadow-inner">
        <motion.div
          className="relative flex h-full items-center justify-end rounded-full bg-gradient-to-r from-[#00A3E0] via-[#00B4D8] to-[#0077B6] shadow-sm"
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${value}%` } : { width: "0%" }}
          transition={{ duration: 1.8, delay, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle animated light shimmer across the bar */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />

          {/* Glowing tip indicator at the leading edge of progress line */}
          <div className="mr-0.5 h-2 w-2 rounded-full bg-white shadow-xs ring-1 ring-white/70" />
        </motion.div>
      </div>
    </div>
  );
}

