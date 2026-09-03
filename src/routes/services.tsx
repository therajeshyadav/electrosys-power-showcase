import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, RevealImage } from "@/components/site/Reveal";
import { ContactCta, PageHero, SectionHeading } from "@/components/site/Sections";
import { services } from "@/data/services";
import hero1 from "@/assets/hero-1.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — UPS Installation, Maintenance & Battery Care | Electrosys" },
      {
        name: "description",
        content:
          "Electrosys services: UPS installation, UPS maintenance, battery services and replacement, preventive maintenance, technical support and power consultation.",
      },
      {
        property: "og:title",
        content: "Services — UPS Installation, Maintenance & Battery Care | Electrosys",
      },
      {
        property: "og:description",
        content:
          "Installation, maintenance and support services for UPS systems and industrial batteries.",
      },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Power services, delivered end to end."
        intro="From first site survey to long-term maintenance, Electrosys covers the full lifecycle of your power protection systems."
        image={hero1}
        imageAlt="Industrial UPS cabinets in a power room"
      />

      <section className="py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Offer"
            title="Confirmed service lines."
            intro="Each service is delivered by engineers familiar with the equipment on your site."
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
                      {String(i + 1).padStart(2, "0")} — Service
                    </span>
                    <h2 className="mt-5 text-3xl leading-tight font-bold sm:text-4xl">
                      {service.name}
                    </h2>
                    <p className="mt-6 leading-relaxed text-muted-foreground">
                      {service.description}
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
                    <Link
                      to="/contact"
                      className="group mt-10 inline-flex items-center gap-3 rounded-full border border-foreground/15 px-8 py-4 text-[0.75rem] font-bold tracking-[0.14em] uppercase transition-colors duration-200 hover:border-primary hover:text-primary-deep"
                    >
                      Enquire About This Service
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Reveal>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactCta title="Need a service scheduled?" />
    </>
  );
}
