import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, MessageSquare, PhoneCall } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { ContactCta } from "@/components/site/Sections";
import { UpsFaqSection } from "@/components/site/UpsFaqSection";
import { brands } from "@/data/brands";
import { getService, relatedServices, services } from "@/data/services";
import { serviceWhatsAppHref, site, telHref } from "@/lib/site";

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const service = getService(params.service);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params }) => {
    const service = getService(params.service);
    if (!service) {
      return {
        meta: [{ title: "Service Not Found — Electrosys" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${service.name} — Electrosys Power Engineering`;
    return {
      meta: [
        { title },
        { name: "description", content: `${service.tagline}. ${service.intro}`.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: service.tagline },
        { property: "og:url", content: `/services/${params.service}` },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `/services/${params.service}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
              {
                "@type": "ListItem",
                position: 3,
                name: service.name,
                item: `/services/${params.service}`,
              },
            ],
          }),
        },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useLoaderData();
  const service = getService(slug);
  if (!service) throw notFound();
  const related = relatedServices(service.slug, 3);
  const [brandCarouselIndex, setBrandCarouselIndex] = useState(0);

  const itemsPerPage = 4;
  const maxIndex = Math.max(0, brands.length - itemsPerPage);

  const handlePrevBrand = () => {
    setBrandCarouselIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextBrand = () => {
    setBrandCarouselIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top Breadcrumb & Hero Section */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="container-x">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="text-xs font-semibold text-slate-400">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="px-2">/</span>
            <Link to="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <span className="px-2">/</span>
            <span className="text-slate-800">{service.name}</span>
          </nav>

          {/* Screenshot 1 Layout: Big H1 + Cyan Line + Tagline + Intro Narrative */}
          <div className="mt-8 max-w-5xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
              {service.name}.
            </h1>
            <div className="mt-4 h-1.5 w-20 rounded-full bg-[#00A3E0]" />

            <p className="mt-6 text-sm font-semibold text-slate-700 tracking-wide">
              {service.tagline}
            </p>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">{service.intro}</p>

            <h2 className="mt-8 text-base font-bold text-slate-900">{service.whyMattersTitle}</h2>

            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {service.whyMattersText}
            </p>

            <p className="mt-5 text-base text-slate-600 leading-relaxed">{service.suiteIntro}</p>

            {/* Screenshot 2 Layout: Testing & Scope Suite Bullet Points */}
            <ul className="mt-6 space-y-3 text-base text-slate-700 pl-1">
              {service.suiteItems.map((item) => (
                <li key={item.name} className="flex items-start gap-2.5">
                  <span className="text-slate-900 font-bold select-none">•</span>
                  <div>
                    <strong className="font-bold text-slate-900">{item.name}</strong>
                    {" – "}
                    <span className="text-slate-600">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Screenshot 3 Layout: Split Review Checklist + Pill CTA + Right Image */}
          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-base text-slate-700 leading-relaxed">
                <strong className="font-bold text-slate-900">{service.reviewTitle}</strong>
                {" – "}
                <span className="text-slate-600">{service.reviewSubtitle}</span>
              </p>

              <ul className="mt-6 space-y-2.5 text-base text-slate-700 pl-1">
                {service.reviewChecklist.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="text-slate-900 font-bold">•</span>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Cyan Pill CTA Button */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#00A3E0] hover:bg-[#008ec4] px-8 py-3.5 text-xs font-bold tracking-wider uppercase text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {service.ctaButtonText}
                </Link>

                <a
                  href={serviceWhatsAppHref(service.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-slate-700 transition-colors"
                >
                  <MessageSquare className="h-4 w-4 text-[#25D366]" />
                  WhatsApp Us
                </a>

                <a
                  href={telHref}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-slate-700 transition-colors"
                >
                  <PhoneCall className="h-4 w-4 text-[#00A3E0]" />
                  Call {site.phone}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
              <img
                src={service.image}
                alt={`${service.name} by Electrosys`}
                className="w-full aspect-[16/10] object-cover"
                width={1408}
                height={880}
              />
            </div>
          </div>

          {/* Screenshot 4 Layout: Two-Column Strategic Blocks with Cyan Lines */}
          <div className="mt-20 pt-16 border-t border-slate-200 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                {service.col1Title}
              </h3>
              <div className="mt-2.5 h-0.5 w-12 bg-[#00A3E0]" />
              <p className="mt-5 text-base leading-relaxed text-slate-600">{service.col1Body}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                {service.col2Title}
              </h3>
              <div className="mt-2.5 h-0.5 w-12 bg-[#00A3E0]" />
              <p className="mt-5 text-base leading-relaxed text-slate-600">{service.col2Body}</p>
            </div>
          </div>

          {/* Screenshot 5 Layout: Don't Wait for a UPS Fault + Progress Bars */}
          <div className="mt-20 pt-16 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {service.actionTitle}
            </h2>
            <div className="mt-3 h-0.5 w-16 bg-[#00A3E0]" />

            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-4xl">
              {service.actionIntro}
            </p>

            <div className="mt-10 grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <p className="text-base text-slate-600 leading-relaxed">
                  {service.actionDescription}
                </p>

                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#00A3E0] hover:bg-[#008ec4] px-7 py-3 text-xs font-bold tracking-wider uppercase text-white shadow-md transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Book a Service Inspection
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={telHref}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 px-6 py-3 text-xs font-bold tracking-wider uppercase text-slate-700 transition-colors"
                  >
                    <PhoneCall className="h-4 w-4 text-[#00A3E0]" />
                    Call Engineers
                  </a>
                </div>
              </div>

              {/* Progress Confidence Bars */}
              <div className="space-y-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
                {service.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-slate-800">{metric.label}</span>
                      <span className="text-xs font-extrabold text-[#00A3E0]">
                        {metric.percent}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                      <div
                        className="bg-[#00A3E0] h-4 rounded-full transition-all duration-1000"
                        style={{ width: `${metric.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Screenshot 5 Bottom: Partner Brands Carousel */}
          <div className="mt-24 pt-16 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#00A3E0]">
                  Trusted Equipment Partners
                </span>
                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  OEM Brands We Service & Supply
                </h3>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevBrand}
                  disabled={brandCarouselIndex === 0}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-opacity hover:bg-slate-800"
                  aria-label="Previous brands"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextBrand}
                  disabled={brandCarouselIndex >= maxIndex}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-opacity hover:bg-slate-800"
                  aria-label="Next brands"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Brand Logo Slider */}
            <div className="mt-8 overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${brandCarouselIndex * (100 / itemsPerPage)}%)`,
                }}
              >
                {brands.map((b) => (
                  <div
                    key={b.slug}
                    className="w-full shrink-0 sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
                  >
                    <Link
                      to="/products/$brand"
                      params={{ brand: b.slug }}
                      className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#00A3E0] hover:shadow-card h-32"
                    >
                      <BrandLogo
                        slug={b.slug}
                        name={b.name}
                        symbol={b.symbol}
                        className="h-10 w-auto max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Switch to Other Services */}
          <div className="mt-20 pt-16 border-t border-slate-200">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#00A3E0]">
                  Full Portfolio
                </span>
                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  Explore Other Power Services
                </h3>
              </div>
              <Link
                to="/services"
                className="text-xs font-bold tracking-wider uppercase text-[#00A3E0] hover:underline"
              >
                View All Services Overview &rarr;
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to="/services/$service"
                  params={{ service: rel.slug }}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#00A3E0] hover:shadow-card hover:-translate-y-1"
                >
                  <div>
                    <div className="aspect-[16/9] overflow-hidden rounded-xl bg-slate-100 mb-5">
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#00A3E0] transition-colors">
                      {rel.name}
                    </h4>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600">
                      {rel.short}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#00A3E0]">
                    <span>View Service Details</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UPS FAQs Section */}
      <UpsFaqSection />

      {/* Contact CTA */}
      <ContactCta
        title={`Request a quote for ${service.name}`}
        body="Contact our certified power engineers today for site surveys, load profiling, emergency callouts, or customized annual maintenance contracts."
      />
    </div>
  );
}
