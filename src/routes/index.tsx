import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { HomeHero } from "@/components/site/HomeHero";
import { Preloader } from "@/components/site/Preloader";
import { Reveal, RevealImage, Stagger, staggerChild } from "@/components/site/Reveal";
import { ContactCta, SectionHeading } from "@/components/site/Sections";
import { BrandCard } from "@/components/site/BrandCard";
import { brands } from "@/data/brands";
import { services } from "@/data/services";
import { site } from "@/lib/site";
import aboutImage from "@/assets/about-team.jpg";
import hero1 from "@/assets/hero-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Electrosys — Reliable Power Solutions, UPS Systems & Batteries" },
      {
        name: "description",
        content:
          "Electrosys supplies, installs and maintains UPS systems, industrial batteries and power protection for business and industrial sites.",
      },
      {
        property: "og:title",
        content: "Electrosys — Reliable Power Solutions, UPS Systems & Batteries",
      },
      {
        property: "og:description",
        content:
          "UPS installation, maintenance, battery services and technical support from Electrosys.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const whyPoints = [
  {
    title: "Industry Experience",
    body: "Engineering-led delivery across commercial and industrial power installations. Details to be confirmed with the client.",
  },
  {
    title: "Quality Products",
    body: "Equipment selected from established manufacturers rather than the cheapest available option.",
  },
  {
    title: "Trusted Partnerships",
    body: "Supplier relationships that give access to the right products and spares.",
  },
  {
    title: "Reliable Support",
    body: "Direct access to engineers who understand your installation and its history.",
  },
  {
    title: "Professional Service",
    body: "Planned work, clear reporting and a tidy site at handover.",
  },
  {
    title: "Business Solutions",
    body: "Systems sized around your load, autonomy and risk profile.",
  },
];

function Home() {
  return (
    <>
      <Preloader />
      <HomeHero />

      {/* Company introduction */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title={
                <>
                  Power solutions built around
                  <span className="text-primary-deep"> uptime</span>.
                </>
              }
              intro={site.description}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                From specification through to long-term maintenance, Electrosys works with
                businesses that cannot afford unplanned interruptions. Placeholder copy pending
                final company information.
              </p>
              <Link
                to="/about"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-[0.75rem] font-bold tracking-[0.14em] uppercase text-background transition-transform duration-200 hover:-translate-y-0.5"
              >
                About Electrosys
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <RevealImage
            src={aboutImage}
            alt="Electrosys engineers reviewing plans beside a UPS installation"
            className="rounded-3xl"
            imgClassName="h-full w-full object-cover aspect-[4/3]"
            width={1408}
            height={1008}
          />
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="What We Do"
              title="Services that keep power available."
              intro="Installation, maintenance and support for UPS systems and industrial batteries."
            />
            <Reveal delay={0.12}>
              <Link
                to="/services"
                className="rounded-full border border-foreground/15 px-8 py-4 text-[0.75rem] font-bold tracking-[0.14em] uppercase transition-colors duration-200 hover:border-primary hover:text-primary-deep"
              >
                View Services
              </Link>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.article
                key={service.slug}
                variants={staggerChild}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold">{service.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.short}
                  </p>
                </div>
              </motion.article>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why choose Electrosys */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeading
                eyebrow="Why Electrosys"
                title="A steady partner for critical power."
                intro="The reasons clients stay with us. Final wording and any figures to be confirmed."
              />
              <RevealImage
                src={hero1}
                alt="Industrial UPS cabinets installed in a clean power room"
                className="mt-12 rounded-3xl"
                imgClassName="h-full w-full object-cover aspect-[4/3]"
                width={1920}
                height={1080}
              />
            </div>

            <Stagger className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
              {whyPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  variants={staggerChild}
                  className="bg-background p-8 transition-colors duration-300 hover:bg-primary-soft"
                >
                  <span className="font-display text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{point.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Brand showcase */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Products & Brands"
            title="Industry-Leading Brands."
            intro="We work with established manufacturers across UPS systems, industrial batteries and power equipment. Select a brand to see its products."
            align="center"
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <BrandCard key={brand.slug} brand={brand} />
            ))}
          </Stagger>
          <Reveal delay={0.1} className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex rounded-full bg-primary px-8 py-4 text-[0.75rem] font-bold tracking-[0.14em] uppercase text-primary-foreground shadow-green transition-transform duration-200 hover:-translate-y-0.5"
            >
              View All Products
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
