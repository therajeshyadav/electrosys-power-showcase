import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Stagger } from "@/components/site/Reveal";
import { BrandCard } from "@/components/site/BrandCard";
import { ContactCta, PageHero, SectionHeading } from "@/components/site/Sections";
import { EngineeredPackagesSection } from "@/components/site/EngineeredPackagesSection";
import { UpsFaqSection } from "@/components/site/UpsFaqSection";
import { brands } from "@/data/brands";
import hero3 from "@/assets/hero-3.jpg";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products & Supplier Partnerships — Electrosys" },
      {
        name: "description",
        content:
          "Browse UPS systems, industrial batteries and engineered power equipment supplied and integrated by Electrosys across India.",
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
  const upsBrands = brands.filter((b) => b.category === "UPS Systems");
  const batteryBrands = brands.filter((b) => b.category === "Industrial Batteries");

  return (
    <>
      <PageHero
        eyebrow="Products & Systems"
        title="Engineered UPS & Power Protection Products."
        intro="Showcasing world-class UPS manufacturers, battery technologies, and power conditioning systems configured to your site's operational needs."
        image={hero3}
        imageAlt="Modern power distribution facility"
      />

      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Brands & Partners"
            title="Equipment from industry-leading manufacturers."
            intro="Select any partner brand to explore technical product specifications, topologies, and direct enquiry options."
          />

          {/* UPS Systems Brands */}
          <div className="mt-16">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#00A3E0]" />
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-800">
                  UPS Systems ({upsBrands.length} Brands)
                </h3>
              </div>
              <span className="mt-4 block h-px w-full bg-slate-200" aria-hidden="true" />
            </Reveal>
            <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {upsBrands.map((brand) => (
                <BrandCard key={brand.slug} brand={brand} />
              ))}
            </Stagger>
          </div>

          {/* Industrial Battery Brands */}
          <div className="mt-20">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-800">
                  Industrial Batteries & Monitoring ({batteryBrands.length} Brands)
                </h3>
              </div>
              <span className="mt-4 block h-px w-full bg-slate-200" aria-hidden="true" />
            </Reveal>
            <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {batteryBrands.map((brand) => (
                <BrandCard key={brand.slug} brand={brand} />
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Engineered UPS Packages Section */}
      <EngineeredPackagesSection />

      {/* UPS Knowledge & FAQs */}
      <UpsFaqSection />

      <ContactCta title="Looking for a specific UPS model or custom battery sizing?" />
    </>
  );
}
