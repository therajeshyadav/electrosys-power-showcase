import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  MessageSquare,
  PhoneCall,
} from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { Reveal, Stagger, staggerChild } from "@/components/site/Reveal";
import { BrandLogo } from "@/components/site/BrandLogo";
import { AnimatedMetricBar } from "@/components/site/AnimatedMetricBar";
import { getBrand, relatedBrands, brands } from "@/data/brands";
import { productWhatsAppHref, site, telHref } from "@/lib/site";

export const Route = createFileRoute("/products/$brand")({
  loader: ({ params }) => {
    const brand = getBrand(params.brand);
    if (!brand) throw notFound();
    return { brand };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Brand not found — Electrosys" }, { name: "robots", content: "noindex" }],
      };
    }
    const { brand } = loaderData;
    const title = `${brand.name} — ${brand.category} | Electrosys`;
    return {
      meta: [
        { title },
        { name: "description", content: `${brand.tagline}. ${brand.description}`.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: brand.tagline },
        { property: "og:url", content: `/products/${params.brand}` },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: `/products/${params.brand}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Products", item: "/products" },
              {
                "@type": "ListItem",
                position: 3,
                name: brand.name,
                item: `/products/${params.brand}`,
              },
            ],
          }),
        },
      ],
    };
  },
  component: BrandPage,
});

function BrandPage() {
  const { brand } = Route.useLoaderData();
  const [carouselIndex, setCarouselIndex] = useState(0);

  const otherBrands = brands.filter((b) => b.slug !== brand.slug);
  const itemsPerPage = 4;
  const maxIndex = Math.max(0, otherBrands.length - itemsPerPage);

  const handlePrev = () => {
    setCarouselIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top Header Hero */}
      <section className="border-b border-slate-100 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container-x">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs font-semibold text-slate-400">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span className="px-2">/</span>
            <Link to="/products" className="hover:text-primary">
              Products
            </Link>
            <span className="px-2">/</span>
            <span className="text-slate-800">{brand.name}</span>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <Reveal>
                <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  {brand.name.toUpperCase()}.
                </h1>
                <div className="mt-3 h-1 w-20 rounded-full bg-[#00A3E0]" />
              </Reveal>

              <Reveal delay={0.08}>
                <p className="mt-6 text-xl font-semibold text-slate-700 sm:text-2xl">
                  {brand.tagline}
                </p>
              </Reveal>

              <Reveal delay={0.16} className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#00A3E0] px-8 py-4 text-xs font-bold tracking-widest text-white uppercase shadow-md transition-all duration-200 hover:bg-[#008BBF] hover:shadow-lg hover:-translate-y-0.5"
                >
                  Contact Us About {brand.shortName} Products
                </Link>
              </Reveal>
            </div>

            {/* Floating Brand Logo Card */}
            <Reveal delay={0.12} className="flex justify-center lg:justify-end">
              <div className="flex h-44 w-full max-w-sm items-center justify-center rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_12px_40px_rgb(0,0,0,0.08)]">
                <BrandLogo slug={brand.slug} className="scale-125" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Content & Description */}
      <section className="py-16 sm:py-20">
        <div className="container-x max-w-5xl">
          <Reveal>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              {brand.description}
            </p>
          </Reveal>

          {/* Partnership Section */}
          <div className="mt-14 border-t border-slate-100 pt-12">
            <Reveal>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                {brand.partnershipTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {brand.partnershipBody}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-6 space-y-3.5">
                {brand.partnershipPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#00A3E0]" />
                    <span className="text-sm font-medium sm:text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Solutions Category List */}
          <div className="mt-14 border-t border-slate-100 pt-12">
            <Reveal>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Solutions</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {brand.solutions.map((sol) => (
                  <div
                    key={sol}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-4 transition-colors hover:bg-slate-100/80"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-base font-semibold text-slate-800">{sol}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Products Showcase */}
          <div className="mt-20 border-t border-slate-100 pt-16">
            <Reveal>
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Featured Equipment
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {brand.shortName} Products
              </h2>
            </Reveal>

            <div className="mt-12 space-y-16">
              {brand.products.map((product, idx) => (
                <div
                  key={product.name}
                  className="grid items-center gap-10 rounded-3xl border border-slate-100 bg-slate-50/40 p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-12"
                >
                  <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-64 w-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                      {product.name}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {product.description}
                    </p>

                    {product.capacity && (
                      <div className="mt-5 inline-block rounded-lg bg-[#00A3E0]/10 px-4 py-2 text-sm font-bold text-[#008BBF]">
                        {product.capacity}
                      </div>
                    )}

                    {product.specs && product.specs.length > 0 && (
                      <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-200/80 pt-5">
                        {product.specs.map((s) => (
                          <div key={s.label}>
                            <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-slate-400">
                              {s.label}
                            </span>
                            <span className="text-sm font-semibold text-slate-800">{s.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-xs font-bold tracking-wider text-white uppercase transition-all hover:bg-primary"
                      >
                        Enquire About Product
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <a
                        href={productWhatsAppHref(product.name)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-xs font-bold tracking-wider text-slate-700 uppercase transition-colors hover:border-primary hover:text-primary"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust & Competence Section (Progress Bars) */}
          <div className="mt-24 rounded-3xl border border-slate-100 bg-slate-50/70 p-8 shadow-sm lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-base leading-relaxed text-slate-700">
                  Contact us today to learn more about how we can help you with your UPS products.
                  With our ongoing relationships with the leading manufacturers in the standby power
                  industry, we are committed to providing the correct uninterrupted solution,
                  ensuring exceptionally high customer service delivery.
                </p>
                <div className="mt-6">
                  <a
                    href={`mailto:${site.email}?subject=Enquiry%20regarding%20${encodeURIComponent(brand.name)}`}
                    className="inline-flex items-center gap-2 font-bold text-[#00A3E0] hover:underline"
                  >
                    Email our team: {site.email}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <AnimatedMetricBar
                  label="Client Satisfaction"
                  value={100}
                  delay={0}
                />
                <AnimatedMetricBar
                  label="Product Knowledge"
                  value={100}
                  delay={0.18}
                />
                <AnimatedMetricBar
                  label="Expert Support"
                  value={100}
                  delay={0.36}
                />
              </div>
            </div>
          </div>

          {/* Other Brands Carousel / Slider */}
          <div className="mt-24 border-t border-slate-100 pt-16">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-primary">
                  Explore More
                </span>
                <h3 className="mt-1 text-2xl font-bold text-slate-900">Other Partner Brands</h3>
              </div>

              {/* Slider Arrow Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={carouselIndex === 0}
                  aria-label="Previous brands"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition-opacity hover:bg-primary disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={carouselIndex >= maxIndex}
                  aria-label="Next brands"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition-opacity hover:bg-primary disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mt-8 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${carouselIndex * (100 / itemsPerPage)}%)`,
                }}
              >
                {otherBrands.map((b) => (
                  <div key={b.slug} className="w-full shrink-0 px-3 sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <Link
                      to="/products/$brand"
                      params={{ brand: b.slug }}
                      className="group flex h-36 flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_6px_25px_rgb(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <BrandLogo slug={b.slug} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
