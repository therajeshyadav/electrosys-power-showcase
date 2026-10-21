import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHeading } from "@/components/site/Sections";
import { ContactForm } from "@/components/site/ContactForm";
import { UpsFaqSection } from "@/components/site/UpsFaqSection";
import { addressLines, mailHref, site, telHref, whatsappHref } from "@/lib/site";
import hero2 from "@/assets/hero-2.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Electrosys Power Solutions" },
      {
        name: "description",
        content:
          "Contact Electrosys for UPS systems, battery solutions, site audits, and maintenance enquiries. Email sales@electrosys.in or call our team.",
      },
      { property: "og:title", content: "Contact Us — Electrosys Power Solutions" },
      {
        property: "og:description",
        content: "Get in touch with the Electrosys team about your power resilience requirements.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const channels = [
    { icon: Phone, label: "Phone", value: site.phone, href: telHref },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Message our team",
      href: whatsappHref(),
      external: true,
    },
    { icon: Mail, label: "Official Sales Email", value: site.email, href: mailHref },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact Electrosys"
        title="Contact Our Engineering Team."
        intro="Tell us about your facility, connected load, and autonomy requirements — our technical team will provide tailored solutions."
        image={hero2}
        imageAlt="Engineer working on an industrial battery installation"
      />

      {/* Get in touch */}
      <section className="py-24 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Talk to the Electrosys team."
              intro="Our engineers provide nationwide consultancy, site surveys, and fast turnaround on commercial quotes."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft">
                    <c.icon className="h-4 w-4 text-primary-deep" aria-hidden="true" />
                  </span>
                  <span className="mt-5 text-[0.68rem] font-bold tracking-[0.16em] uppercase text-muted-foreground">
                    {c.label}
                  </span>
                  <span className="mt-2 font-semibold break-words group-hover:text-primary-deep">
                    {c.value}
                  </span>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.24}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft">
                  <MapPin className="h-4 w-4 text-primary-deep" aria-hidden="true" />
                </span>
                <span className="mt-5 text-[0.68rem] font-bold tracking-[0.16em] uppercase text-muted-foreground">
                  Business Presence
                </span>
                <address className="mt-2 text-sm leading-relaxed font-medium not-italic">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </Reveal>

            <Reveal delay={0.3} className="sm:col-span-2">
              <div className="flex items-center gap-4 rounded-2xl bg-surface p-6">
                <Clock className="h-5 w-5 text-primary-deep" aria-hidden="true" />
                <p className="text-sm font-medium">{site.hours}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="bg-surface py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Location"
            title="Find us."
            intro="Visit our facility or get in touch for site visits and engineering surveys."
          />
          <Reveal
            delay={0.1}
            className="mt-10 overflow-hidden rounded-3xl border border-border shadow-sm"
          >
            <iframe
              title="Electrosys location map"
              src={site.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0 sm:h-[460px]"
            />
          </Reveal>
        </div>
      </section>

      {/* Message us */}
      <section className="py-24 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Direct Enquiry"
              title="Send an enquiry."
              intro="Share your load sizing, runtime requirement, or service request. Our engineering team responds promptly."
            />
          </div>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <UpsFaqSection />
    </>
  );
}
