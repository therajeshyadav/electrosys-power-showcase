import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { brands } from "@/data/brands";
import { addressLines, mailHref, site, telHref, whatsappHref } from "@/lib/site";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:pr-6">
          <Logo tone="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-foreground/65">
            {site.description}
          </p>
        </div>

        <div>
          <h2 className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-primary">
            Quick Links
          </h2>
          <ul className="mt-6 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-ink-foreground/70 transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-primary">
            Brands
          </h2>
          <ul className="mt-6 space-y-3 text-sm">
            {brands.map((b) => (
              <li key={b.slug}>
                <Link
                  to="/products/$brand"
                  params={{ brand: b.slug }}
                  className="text-ink-foreground/70 transition-colors hover:text-primary"
                >
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-primary">
            Get in Touch
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-ink-foreground/70">
            <li>
              <a href={telHref} className="transition-colors hover:text-primary">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-primary"
              >
                WhatsApp: {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={mailHref} className="transition-colors hover:text-primary">
                {site.email}
              </a>
            </li>
            <li className="pt-2">
              <address className="not-italic leading-relaxed">
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>{site.hours}</p>
        </div>
      </div>
    </footer>
  );
}
