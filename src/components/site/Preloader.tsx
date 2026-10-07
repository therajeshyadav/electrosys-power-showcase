import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";

/**
 * Cinematic entry: logo preloader -> dark curtain sliding upward -> page.
 * Runs once per browser session.
 */
export function Preloader() {
  const [phase, setPhase] = useState<"logo" | "curtain" | "done">("logo");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("electrosys-intro") === "seen") {
      setPhase("done");
      return;
    }
    const t1 = window.setTimeout(() => setPhase("curtain"), 1400);
    const t2 = window.setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("electrosys-intro", "seen");
    }, 2300);
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
          key="intro"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-ink"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <AnimatePresence>
            {phase === "logo" && (
              <motion.div
                className="flex flex-col items-center rounded-2xl bg-white/95 px-8 py-5 shadow-2xl backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src="/logo.png"
                  alt="Electrosys"
                  className="h-14 w-auto object-contain sm:h-16"
                />
                <motion.span
                  className="mt-4 block h-0.5 w-24 origin-left bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
