import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, Stagger, staggerChild } from "./Reveal";
import { SectionHeading } from "./Sections";
import { engineeredPackages, mainUpsBenefits } from "@/data/company";

export function EngineeredPackagesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        {/* Main benefits */}
        <div className="rounded-3xl bg-ink p-8 text-ink-foreground sm:p-12 lg:p-16">
          <div className="max-w-2xl">
            <span className="eyebrow text-primary">Core Value Protection</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Main Benefits of Industrial UPS Systems
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-foreground/75 sm:text-base">
              Engineered to safeguard critical infrastructure against every category of utility
              disturbance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mainUpsBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs transition-colors hover:border-primary/50 hover:bg-white/10"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engineered Packages */}
        <div className="mt-28">
          <SectionHeading
            eyebrow="Engineered Packages"
            title="Engineered UPS Packages from Electrosys"
            intro="Beyond standard equipment supply — we deliver specialized power topologies, harsh-environment protections, and smart telemetry tailored for industrial & high-dependency sites."
          />

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {engineeredPackages.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.title}
                  variants={staggerChild}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary-deep transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-xs font-bold text-muted-foreground/60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 text-base font-bold text-foreground sm:text-lg">
                      {pkg.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Engineered Feature</span>
                  </div>
                </motion.div>
              );
            })}
          </Stagger>

          <Reveal delay={0.1} className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[0.75rem] font-bold tracking-[0.14em] uppercase text-primary-foreground shadow-green transition-transform duration-200 hover:-translate-y-0.5"
            >
              Discuss Your System Requirements
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
