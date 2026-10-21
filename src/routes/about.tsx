import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { Reveal, RevealImage, Stagger, staggerChild } from "@/components/site/Reveal";
import { ContactCta, PageHero, SectionHeading } from "@/components/site/Sections";
import { UpsFaqSection } from "@/components/site/UpsFaqSection";
import { brands } from "@/data/brands";
import { companyStats, whyTrustPoints } from "@/data/company";
import aboutImage from "@/assets/about-team.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — 30 Years in Electrical Safety & Power Resilience | Electrosys" },
      {
        name: "description",
        content:
          "Electrosys brings 30+ years of engineering leadership in power resilience, 3,000+ UPS installations, and pan-India lifecycle service support.",
      },
      { property: "og:title", content: "About Us — Electrosys Power Solutions" },
      {
        property: "og:description",
        content:
          "Our mission, values, and engineering approach to mission-critical power resilience across India.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    title: "Engineering Reliability",
    body: "Every system is planned, sized, tested, and documented so protection behaves predictably under load.",
  },
  {
    title: "Honest Specification",
    body: "Objective equipment recommendations tailored to actual site risk, never selling unnecessary capacity.",
  },
  {
    title: "Lifecycle Commitment",
    body: "We stay actively involved through commissioning, routine maintenance, battery health, and upgrades.",
  },
  {
    title: "Pan-India Responsiveness",
    body: "Nationwide in-house engineering and prompt emergency support whenever critical issues arise.",
  },
];

const industries = [
  "Commercial Offices & IT Parks",
  "Data & IT Server Rooms",
  "Industrial & Manufacturing Plants",
  "Healthcare & Hospital Facilities",
  "Telecoms & Broadcast Networks",
  "Elevator & Regenerative Load Sites",
  "Banking & Financial Data Hubs",
  "Utilities & Critical Infrastructure",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Electrosys"
        title="Engineering dependable power for business."
        intro="With 30 years of electrical safety leadership, Electrosys provides engineered UPS systems, battery solutions, and active lifecycle support across India."
        image={hero2}
        imageAlt="Engineer inspecting industrial battery racks"
      />

      {/* Stats Counter Bar */}
      <section className="border-b border-border bg-card py-10">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {companyStats.map((stat) => (
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

      {/* Company story */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <RevealImage
            src={aboutImage}
            alt="Electrosys engineers discussing a UPS installation plan"
            className="rounded-3xl"
            imgClassName="h-full w-full object-cover aspect-[4/3]"
            width={1408}
            height={1008}
          />
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A power solutions engineering partner, not a box shifter."
              intro="Electrosys works directly with facilities and technical leadership to solve complex power quality, backup duration, and resilience challenges."
            />
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Founded on engineering excellence in electrical safety, we have deployed over 3,000
                UPS installations across India. From high-ambient industrial plants to
                mission-critical data centers, our solutions ensure zero unplanned downtime through
                rigorous design, galvanic isolation options, and proactive maintenance.
              </p>
              <div className="mt-6 space-y-2.5 text-sm font-medium text-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>30 Years’ Experience in Electrical Safety & Power Resilience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>3k+ Systems Installed & Under Active Lifecycle Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>In-House Consultancy, Sizing, Commissioning & AMC Support</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="rounded-3xl border border-border bg-card p-10">
            <span className="eyebrow">Our Mission</span>
            <h2 className="mt-5 text-2xl font-bold leading-snug sm:text-3xl">
              Keep essential systems running, whatever the utility supply does.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              We empower organisations with robust power protection that eliminates downtime risks,
              protects capital investments, and maintains business continuity 24 hours a day, 365
              days a year.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl bg-ink p-10 text-ink-foreground">
            <span className="eyebrow text-primary">Our Approach</span>
            <h2 className="mt-5 text-2xl font-bold leading-snug sm:text-3xl">
              Assess the load. Specify honestly. Support continuously.
            </h2>
            <p className="mt-6 leading-relaxed text-ink-foreground/70">
              Every facility has distinct power characteristics. We evaluate load profiles, harmonic
              distortion, and autonomy requirements before recommending equipment — then provide
              long-term partnership through lifecycle maintenance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Organisations Trust Electrosys Grid */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Organisations Trust Electrosys"
            title="Trusted across highly regulated, high-dependency sectors."
            align="center"
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyTrustPoints.map((point) => (
              <motion.div
                key={point.title}
                variants={staggerChild}
                className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
              >
                <h3 className="text-lg font-bold">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Core Values"
            title="Principles that guide our engineering."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={staggerChild}
                className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
              >
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Industries & Applications"
              title="Power resilience where failure is not an option."
              intro="We protect mission-critical facilities across India with tailored UPS topologies and battery autonomy."
            />
            <Stagger className="mt-10 flex flex-wrap gap-3">
              {industries.map((industry) => (
                <motion.span
                  key={industry}
                  variants={staggerChild}
                  className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-xs"
                >
                  {industry}
                </motion.span>
              ))}
            </Stagger>
          </div>
          <RevealImage
            src={hero3}
            alt="Modern switchgear facility at dusk"
            className="rounded-3xl"
            imgClassName="h-full w-full object-cover aspect-[4/3]"
            width={1920}
            height={1080}
          />
        </div>
      </section>

      {/* Brand Partners */}
      <section className="border-t border-border bg-card py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Trust & Partnerships"
            title="Leading Brand Equipment & Spares."
            intro="Our established manufacturer relationships give clients access to genuine equipment, extended warranties, and authentic spares."
            align="center"
          />
          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
            {brands.map((b) => (
              <motion.div key={b.slug} variants={staggerChild} className="bg-background">
                <Link
                  to="/products/$brand"
                  params={{ brand: b.slug }}
                  className="group flex h-full min-h-[100px] items-center justify-center p-6 transition-all duration-200 hover:bg-surface"
                >
                  <BrandLogo
                    slug={b.slug}
                    name={b.shortName}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <UpsFaqSection />

      <ContactCta title="Ready to upgrade or audit your power protection?" />
    </>
  );
}
