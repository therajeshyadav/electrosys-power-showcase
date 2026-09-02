import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const slides = [
  {
    image: hero1,
    alt: "Row of industrial UPS cabinets in a modern power room",
    title: ["Reliable Power.", "Built for Business."],
    body: "UPS systems, industrial batteries and power protection supplied, installed and maintained by Electrosys.",
  },
  {
    image: hero2,
    alt: "Engineer inspecting an industrial battery bank",
    title: ["Powering Your Business.", "Protecting What Matters."],
    body: "Battery services, replacement programmes and preventive maintenance that keep critical systems available.",
  },
  {
    image: hero3,
    alt: "Modern electrical switchgear facility illuminated at dusk",
    title: ["Smart Power Solutions.", "Reliable Performance."],
    body: "Consultation, specification and technical support for commercial and industrial power requirements.",
  },
];

export function HomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  const slide = slides[index]!;

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2, ease }, scale: { duration: 7, ease: "linear" } }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
        </motion.div>
      </AnimatePresence>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30"
        aria-hidden="true"
      />

      <div className="container-x w-full pt-32 pb-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <motion.span
              className="eyebrow text-primary"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              Electrosys Power Solutions
            </motion.span>

            <h1 className="mt-6 text-[2.6rem] leading-[1.02] font-bold text-ink-foreground sm:text-6xl lg:text-7xl">
              {slide.title.map((line, i) => (
                <motion.span
                  key={line}
                  className="block overflow-hidden"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.16 + i * 0.1, ease }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="mt-7 max-w-xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease }}
            >
              {slide.body}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease }}
            >
              <Link
                to="/contact"
                className="rounded-full bg-primary px-8 py-4 text-[0.75rem] font-bold tracking-[0.14em] uppercase text-primary-foreground shadow-green transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                Request a Quote
              </Link>
              <Link
                to="/products"
                className="rounded-full border border-ink-foreground/30 px-8 py-4 text-[0.75rem] font-bold tracking-[0.14em] uppercase text-ink-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                Explore Products
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 flex items-center gap-3">
          {slides.map((s, i) => (
            <button
              key={s.alt}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === index}
              className="group h-8 py-3"
            >
              <span
                className={`block h-[3px] rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-14 bg-primary"
                    : "w-8 bg-ink-foreground/30 group-hover:bg-ink-foreground/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
