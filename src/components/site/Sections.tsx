import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 text-3xl leading-[1.08] font-bold sm:text-4xl lg:text-5xl">{title}</h2>
      {intro && (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
      )}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden bg-ink pt-32 pb-16 sm:min-h-[70vh] sm:pb-24">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/40"
        aria-hidden="true"
      />
      <div className="container-x">
        <Reveal>
          <span className="eyebrow text-primary">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.03] font-bold text-ink-foreground sm:text-5xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/70 sm:text-lg">
            {intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactCta({
  title = "Let's talk about your power requirements.",
  body = "Tell us about your site and load, and our team will come back with the right options.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 sm:px-14 sm:py-20">
          <div
            className="hairline-grid pointer-events-none absolute inset-0 opacity-[0.06]"
            aria-hidden="true"
          />
          <div className="relative max-w-3xl">
            <span className="eyebrow text-primary">Contact Electrosys</span>
            <h2 className="mt-5 text-3xl leading-tight font-bold text-ink-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/70">{body}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-8 py-4 text-[0.75rem] font-bold tracking-[0.14em] uppercase text-primary-foreground shadow-green transition-transform duration-200 hover:-translate-y-0.5"
              >
                Send an Enquiry
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-ink-foreground/25 px-8 py-4 text-[0.75rem] font-bold tracking-[0.14em] uppercase text-ink-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                Our Services
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
