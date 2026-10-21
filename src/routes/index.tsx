import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { HomeHero } from "@/components/site/HomeHero";
import { Preloader } from "@/components/site/Preloader";
import { Reveal, RevealImage, Stagger, staggerChild } from "@/components/site/Reveal";
import { ContactCta, SectionHeading } from "@/components/site/Sections";
import { BrandCard } from "@/components/site/BrandCard";
import { EngineeredPackagesSection } from "@/components/site/EngineeredPackagesSection";
import { UpsFaqSection } from "@/components/site/UpsFaqSection";
import { brands } from "@/data/brands";
import { services } from "@/data/services";
import { companyStats, whyTrustPoints } from "@/data/company";
import { site } from "@/lib/site";
import aboutImage from "@/assets/about-team.jpg";
import hero1 from "@/assets/hero-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Electrosys — 30 Years in Electrical Safety & Power Resilience" },
      {
        name: "description",
        content:
          "Electrosys provides 30+ years of engineered UPS systems, battery solutions, and pan-India lifecycle maintenance for mission-critical business environments.",
      },
      {
        property: "og:title",
        content: "Electrosys — 30 Years in Electrical Safety & Power Resilience",
      },
      {
        property: "og:description",
        content:
          "Over 3,000 UPS systems installed across India with tailored power protection and active lifecycle support.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Preloader />
      <HomeHero />

      {/* Stats Counter Bar */}
      <section className="border-b border-border bg-card py-10">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {companyStats.map((stat, i) => (
              <div key={stat.label} className="border-l-2 border-primary/40 pl-5">
                <span className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                  {stat.value}
                </span>
                <p className="mt-1 text-sm font-bold text-foreground">{stat.label}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company introduction */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title={
                <>
                  30 Years of engineering
                  <span className="text-primary-deep"> power resilience</span>.
                </>
              }
              intro={site.description}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                With over three decades of field expertise, Electrosys delivers complete power
                resilience for healthcare, manufacturing, IT data rooms, and commercial
                infrastructure. We design, install, and support systems that guarantee uninterrupted
                continuity when utility power fails.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold text-foreground">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-4 py-2 text-primary-deep">
                  <CheckCircle2 className="h-4 w-4" /> 3,000+ Active Installations
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-4 py-2 text-primary-deep">
                  <CheckCircle2 className="h-4 w-4" /> Pan-India Engineering Network
                </span>
              </div>
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

      {/* Engineered Packages & UPS Benefits */}
      <EngineeredPackagesSection />

      {/* Services preview */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="What We Do"
              title="Services that keep power available."
              intro="Lifecycle engineering, commissioning, preventive maintenance, and battery health management across India."
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
              <motion.div key={service.slug} variants={staggerChild} className="h-full">
                <Link
                  to="/services/$service"
                  params={{ service: service.slug }}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-7">
                      <h3 className="text-lg font-bold transition-colors group-hover:text-primary">
                        {service.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {service.short}
                      </p>
                    </div>
                  </div>
                  <div className="px-7 pb-7">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-primary">
                      View Service Details
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why choose Electrosys / Trust Grid */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeading
                eyebrow="Why Organisations Trust Electrosys"
                title="Proven performance in high-dependency environments."
                intro="Over 30 years of electrical safety leadership and 3,000+ deployed systems backed by nationwide in-house engineering."
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
              {whyTrustPoints.map((point, i) => (
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
            title="Industry-Leading Manufacturer Partnerships."
            intro="We supply and support world-class UPS systems, industrial batteries, and power conditioning equipment. Select a brand to explore product lines."
            align="center"
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {brands.slice(0, 8).map((brand) => (
              <BrandCard key={brand.slug} brand={brand} />
            ))}
          </Stagger>
          <Reveal delay={0.1} className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex rounded-full bg-primary px-8 py-4 text-[0.75rem] font-bold tracking-[0.14em] uppercase text-primary-foreground shadow-green transition-transform duration-200 hover:-translate-y-0.5"
            >
              View All 15 Partner Brands
            </Link>
          </Reveal>
        </div>
      </section>

      {/* UPS Knowledge & FAQ Section */}
      <UpsFaqSection />

      <ContactCta />
    </>
  );
}
