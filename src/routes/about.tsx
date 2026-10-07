import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Reveal, RevealImage, Stagger, staggerChild } from "@/components/site/Reveal";
import { ContactCta, PageHero, SectionHeading } from "@/components/site/Sections";
import { brands } from "@/data/brands";
import aboutImage from "@/assets/about-team.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Electrosys Power Solutions" },
      {
        name: "description",
        content:
          "Who we are: Electrosys provides UPS systems, industrial batteries, installation and maintenance for business and industrial power requirements.",
      },
      { property: "og:title", content: "About Us — Electrosys Power Solutions" },
      {
        property: "og:description",
        content:
          "Our mission, values and approach to reliable power solutions for business and industry.",
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
    title: "Reliability",
    body: "Work is planned, tested and documented so systems behave predictably.",
  },
  {
    title: "Integrity",
    body: "Honest recommendations, including when replacement is not yet required.",
  },
  {
    title: "Expertise",
    body: "Engineering knowledge applied to specification, installation and support.",
  },
  { title: "Responsiveness", body: "Clear communication and prompt attention when issues arise." },
];

const industries = [
  "Commercial offices",
  "Data & IT rooms",
  "Manufacturing",
  "Healthcare facilities",
  "Telecoms",
  "Retail & hospitality",
  "Education",
  "Utilities & infrastructure",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Engineering dependable power for business."
        intro="Electrosys supplies, installs and maintains power protection systems for organisations that depend on continuous supply."
        image={hero2}
        imageAlt="Engineer inspecting industrial battery racks"
      />

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
              title="A power solutions company, not a box shifter."
              intro="Electrosys works with businesses and industrial sites on uninterruptible power supplies, battery systems and the services that keep them dependable."
            />
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Our work covers specification, supply, installation, maintenance and technical
                support. Company history, team size and experience details are placeholders until
                confirmed by the client.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="rounded-3xl border border-border bg-card p-10">
            <span className="eyebrow">Our Mission</span>
            <h2 className="mt-5 text-2xl leading-snug font-bold sm:text-3xl">
              Keep essential systems running, whatever the supply does.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              We aim to give every client a power installation they can rely on, with service that
              continues long after commissioning. Final mission statement pending client approval.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl bg-ink p-10 text-ink-foreground">
            <span className="eyebrow text-primary">Our Approach</span>
            <h2 className="mt-5 text-2xl leading-snug font-bold sm:text-3xl">
              Assess the load. Specify honestly. Support continuously.
            </h2>
            <p className="mt-6 leading-relaxed text-ink-foreground/70">
              Every site is different. We start with the actual load and risk profile before
              recommending equipment, then stay involved through the life of the installation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Our Values" title="What guides our work." />
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

      <section className="bg-surface py-24 sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Industries & Applications"
              title="Where our systems are at work."
              intro="Typical environments we support. Sector list to be confirmed with the client."
            />
            <Stagger className="mt-10 flex flex-wrap gap-3">
              {industries.map((industry) => (
                <motion.span
                  key={industry}
                  variants={staggerChild}
                  className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium"
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

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Trust & Partnerships"
            title="Working with established manufacturers."
            intro="Our supplier relationships give clients access to proven equipment and the right replacement parts."
            align="center"
          />
          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
            {brands.map((b) => (
              <motion.div
                key={b.slug}
                variants={staggerChild}
                className="flex items-center justify-center bg-background px-6 py-10 font-display text-lg font-extrabold tracking-[0.14em] text-muted-foreground transition-colors duration-300 hover:text-primary-deep"
              >
                {b.wordmark}
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <ContactCta title="Want to know if we're the right fit?" />
    </>
  );
}
