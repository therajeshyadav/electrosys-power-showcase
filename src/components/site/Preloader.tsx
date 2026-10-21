import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// In-memory tracker so intro plays on page load / refresh, but doesn't disrupt SPA navigation
let hasShownIntro = false;

/**
 * Cinematic entry: prominent logo preloader -> dark curtain sliding upward -> page hero.
 */
export function Preloader() {
  const [phase, setPhase] = useState<"logo" | "curtain" | "done">("logo");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (hasShownIntro) {
      setPhase("done");
      return;
    }

    // Logo stays clearly visible and displays charging animation for ~2.7s
    const t1 = window.setTimeout(() => {
      setPhase("curtain");
    }, 2700);

    // Curtain slides up completely by 3.6s
    const t2 = window.setTimeout(() => {
      setPhase("done");
      hasShownIntro = true;
    }, 3600);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = phase === "done" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="intro-overlay"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-ink overflow-hidden"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle background ambient glow */}
          <div
            className="absolute h-96 w-96 rounded-full bg-primary/15 blur-3xl"
            aria-hidden="true"
          />

          <motion.div
            className="relative z-10 flex flex-col items-center rounded-3xl bg-white/98 px-10 py-8 sm:px-16 sm:py-12 shadow-2xl ring-1 ring-white/30 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.92, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Prominent, large company logo */}
            <img
              src="/logo.png"
              alt="Electrosys Power Solutions"
              className="h-20 sm:h-28 md:h-36 w-auto max-w-[300px] sm:max-w-[460px] md:max-w-[560px] object-contain drop-shadow-sm"
            />

            {/* Elegant energy progress bar */}
            <div className="mt-6 sm:mt-8 h-1 sm:h-1.5 w-44 sm:w-64 overflow-hidden rounded-full bg-slate-100">
              <motion.span
                className="block h-full w-full origin-left rounded-full bg-gradient-to-r from-primary to-primary-deep"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.3, ease: [0.25, 1, 0.5, 1] }}
              />
            </div>

            <p className="mt-3 text-[0.7rem] sm:text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground/75">
              Electrical Safety & Power Resilience
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
