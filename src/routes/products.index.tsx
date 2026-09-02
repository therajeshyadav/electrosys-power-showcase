import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Stagger } from "@/components/site/Reveal";
import { BrandCard } from "@/components/site/BrandCard";
import { ContactCta, PageHero, SectionHeading } from "@/components/site/Sections";
import { brands } from "@/data/brands";
import hero3 from "@/assets/hero-3.jpg";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products & Supplier Partnerships — Electrosys" },
      {
        name: "description",
        content:
          "Browse the UPS systems, industrial batteries and power equipment brands supplied by Electrosys. Select a brand for products, specifications and enquiries.",
      },
      { property: "og:title", content: "Products & Supplier Partnerships — Electrosys" },
      {
        property: "og:description",
        content:
          "UPS systems, industrial batteries and power equipment from established manufacturers.",
      },
      { property: "og:url", content: "/products" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  const categories = Array.from(new Set(brands.map((b) => b.category)));

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Products & Supplier Partnerships."
        intro="A showcase of the manufacturers we work with. Every brand page lists products, specifications and a direct enquiry route — no online ordering."
        image={hero3}
        imageAlt="Modern power distribution facility"
      />

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Brands"
            title="Equipment from manufacturers we trust."
            intro="Select a brand to view its products, specifications and partnership details."
          />

          {categories.map((category, ci) => (
            <div key={category} className="mt-16">
              <Reveal>
                <h3 className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                  {category}
                </h3>
                <span className="mt-4 block h-px w-full bg-border" aria-hidden="true" />
              </Reveal>
              <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {brands
                  .filter((b) => b.category === category)
                  .map((brand) => (
                    <BrandCard key={brand.slug} brand={brand} />
                  ))}
              </Stagger>
              {ci === categories.length - 1 && null}
            </div>
          ))}
        </div>
      </section>

      <ContactCta title="Looking for a product we haven't listed?" />
    </>
  );
}
