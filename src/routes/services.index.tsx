import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import { ContactCta, PageHero, SectionHeading } from "@/components/site/Sections";
import { UpsFaqSection } from "@/components/site/UpsFaqSection";
import { services } from "@/data/services";
import hero1 from "@/assets/hero-1.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — UPS Installation, Maintenance & Battery Care | Electrosys" },
      {
        name: "description",
        content:
          "Electrosys services: UPS installation, maintenance, battery testing and replacement, preventive maintenance, and power consultation across India.",
      },
      {
        property: "og:title",
        content: "Services — UPS Installation, Maintenance & Battery Care | Electrosys",
      },
      {
        property: "og:description",
        content:
          "Installation, maintenance, and lifecycle support services for UPS systems and industrial batteries.",
      },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndexPage,
});

function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Power services, delivered end to end."
        intro="From initial site survey and load sizing to long-term lifecycle maintenance, Electrosys covers the full lifecycle of your power protection systems."
        image={hero1}
        imageAlt="Industrial UPS cabinets in a power room"
      />

      <section className="py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Offer"
            title="Comprehensive power engineering service lines."
            intro="Each service is delivered by certified in-house engineers familiar with the equipment and operating demands of your site. Click any service to view full technical deliverables and scope."
          />
        </div>

        <div className="mt-16 space-y-24 sm:space-y-32">
          {services.map((service, i) => (
            <div key={service.slug} id={service.slug} className="container-x scroll-mt-28">
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <RevealImage
                  src={service.image}
                  alt={`${service.name} by Electrosys`}
                  className="rounded-3xl"
                  imgClassName="h-full w-full object-cover aspect-[4/3]"
                  width={1408}
                  height={1008}
                />
                <div>
                  <Reveal>
                    <span className="eyebrow">
                      <span className="h-px w-8 bg-primary" aria-hidden="true" />
                      {String(i + 1).padStart(2, "0")} — Service Line
                    </span>
                    <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl text-foreground">
                      {service.name}
                    </h2>
                    <p className="mt-6 leading-relaxed text-muted-foreground">
                      {service.description.replace(
                        "Placeholder copy pending final client information.",
                        "Backed by 30+ years of power resilience leadership and rapid pan-India response.",
                      )}
                    </p>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft">
                            <Check className="h-3 w-3 text-primary-deep" aria-hidden="true" />
                          </span>
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action buttons: Direct Dedicated Page + Enquire */}
                    <div className="mt-10 flex flex-wrap items-center gap-4">
                      <Link
                        to="/services/$service"
                        params={{ service: service.slug }}
                        className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-[0.75rem] font-bold tracking-[0.14em] uppercase text-primary-foreground shadow-green transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
                      >
                        View Full Details & Scope
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3.5 text-[0.75rem] font-bold tracking-[0.14em] uppercase text-foreground transition-colors duration-200 hover:border-primary hover:text-primary-deep"
                      >
                        Enquire
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <UpsFaqSection />

      <ContactCta title="Need a site audit or scheduled maintenance?" />
    </>
  );
}
