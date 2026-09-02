import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import {
  Reveal,
  RevealImage,
  Stagger,
  staggerChild,
} from "@/components/site/Reveal";
import { ContactCta, SectionHeading } from "@/components/site/Sections";
import { getBrand, relatedBrands } from "@/data/brands";
import { productWhatsAppHref } from "@/lib/site";
import hero1 from "@/assets/hero-1.jpg";

export const Route = createFileRoute("/products/$brand")({
  loader: ({ params }) => {
    const brand = getBrand(params.brand);
    if (!brand) throw notFound();
    return { brand };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Brand not found — Electrosys" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { brand } = loaderData;
    const title = `${brand.name} — ${brand.category} | Electrosys`;
    return {
      meta: [
        { title },
        { name: "description", content: `${brand.tagline} ${brand.description}`.slice(0, 155) },
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
              { "@type": "ListItem", position: 1, name: "Products", item: "/products" },
              {
                "@type": "ListItem",
                position: 2,
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
  const related = relatedBrands(brand.slug);

  return (
    <>
      {/* Brand hero */}
      <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-ink pt-32 pb-16 sm:pb-24">
        <img
          src={hero1}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/85 to-ink/50"
          aria-hidden="true"
        />
        <div className="container-x">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-xs text-ink-foreground/50">
              <Link to="/products" className="hover:text-primary">
                Products
              </Link>
              <span className="px-2">/</span>
              <span className="text-ink-foreground/80">{brand.name}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.06}>
            <span className="mt-8 inline-flex rounded-xl border border-ink-foreground/15 bg-ink-foreground/5 px-6 py-4 font-display text-xl font-extrabold tracking-[0.16em] text-ink-foreground">
              {brand.wordmark}
            </span>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mt-8 max-w-4xl text-4xl leading-[1.04] font-bold text-ink-foreground sm:text-5xl lg:text-6xl">
              {brand.name}
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-2xl text-lg text-primary">{brand.tagline}</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-foreground/70">
              {brand.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="Partnership"
            title={`Electrosys & ${brand.name}`}
          />
          <Reveal delay={0.08}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {brand.partnership}
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-[0.75rem] font-bold tracking-[0.14em] uppercase text-background transition-transform duration-200 hover:-translate-y-0.5"
            >
              Enquire About {brand.name}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Solutions" title="Where this range fits." />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brand.solutions.map((s) => (
              <motion.div
                key={s.title}
                variants={staggerChild}
                className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft">
                  <Check className="h-4 w-4 text-primary-deep" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Products"
            title={brand.products.length > 1 ? "Available products." : "Available product."}
            intro="Specifications shown are indicative. Contact us for full datasheets and sizing."
          />

          <div className="mt-14 space-y-16 sm:space-y-24">
            {brand.products.map((product, i) => (
              <div
                key={product.name}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <RevealImage
                  src={product.image}
                  alt={`${product.name} supplied by Electrosys`}
                  className="rounded-3xl bg-secondary"
                  imgClassName="h-full w-full object-cover aspect-[4/3]"
                  width={1200}
                  height={912}
                />
                <Reveal delay={0.08}>
                  <span className="eyebrow">
                    <span className="h-px w-8 bg-primary" aria-hidden="true" />
                    {brand.wordmark}
                  </span>
                  <h3 className="mt-4 text-2xl leading-tight font-bold sm:text-3xl">
                    {product.name}
                  </h3>
                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="bg-background p-5">
                        <dt className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-muted-foreground">
                          {spec.label}
                        </dt>
                        <dd className="mt-2 text-sm font-semibold">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="rounded-full bg-primary px-7 py-3.5 text-[0.72rem] font-bold tracking-[0.14em] uppercase text-primary-foreground shadow-green transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      Enquire Now
                    </Link>
                    <a
                      href={productWhatsAppHref(`${brand.name} ${product.name}`)}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-foreground/15 px-7 py-3.5 text-[0.72rem] font-bold tracking-[0.14em] uppercase transition-colors duration-200 hover:border-primary hover:text-primary-deep"
                    >
                      WhatsApp Enquiry
                    </a>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related brands */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Related Brands" title="Explore other partners." />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((b) => (
              <motion.div key={b.slug} variants={staggerChild}>
                <Link
                  to="/products/$brand"
                  params={{ brand: b.slug }}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
                >
                  <span className="font-display text-xl font-extrabold tracking-[0.14em] group-hover:text-primary-deep">
                    {b.wordmark}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {b.tagline}
                  </p>
                </Link>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <ContactCta title={`Request pricing or specifications for ${brand.name}.`} />
    </>
  );
}
