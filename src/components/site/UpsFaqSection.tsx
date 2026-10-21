import { ArrowRight, HelpCircle, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal, Stagger, staggerChild } from "./Reveal";
import { SectionHeading } from "./Sections";
import { upsFaqs } from "@/data/company";
import { site } from "@/lib/site";

export function UpsFaqSection() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="UPS Knowledge & Guide"
          title="Understanding Uninterruptible Power Systems"
          intro="Essential guidance on UPS topology, double conversion online technology, and autonomy sizing."
          align="center"
        />

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {upsFaqs.map((faq, i) => (
            <div
              key={faq.question}
              className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
            >
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary-deep">
                  <HelpCircle className="h-5 w-5" />
                </span>
                <span className="mt-6 block font-display text-xs font-bold tracking-[0.2em] uppercase text-primary">
                  0{i + 1} — Knowledge Base
                </span>
                <h3 className="mt-3 text-xl font-bold leading-snug">{faq.question}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </div>

              {i === 2 && (
                <div className="mt-8 rounded-2xl bg-muted/60 p-4">
                  <p className="text-xs font-semibold text-foreground">
                    Need a custom backup calculation?
                  </p>
                  <a
                    href={`mailto:${site.email}?subject=UPS%20Load%20and%20Backup%20Calculation%20Enquiry`}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    {site.email}
                  </a>
                </div>
              )}
            </div>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-full border border-border bg-card px-6 py-3 text-xs sm:text-sm">
            <span className="text-muted-foreground">
              Have specific power sizing questions for your facility?
            </span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline"
            >
              Contact Our Engineers
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
