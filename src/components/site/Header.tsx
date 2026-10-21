import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "shadow-soft border-b border-border" : "border-b border-transparent",
      )}
    >
      <div className="container-x flex h-20 sm:h-24 md:h-[106px] items-center justify-between gap-6">
        <Link to="/" aria-label="Electrosys home" className="shrink-0 py-1">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.to === "/services" ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
              >
                <Link
                  to={item.to}
                  onClick={(e) => {
                    if (!servicesOpen) {
                      e.preventDefault();
                      setServicesOpen(true);
                    }
                  }}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className={cn(
                    "relative flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.78rem] font-bold tracking-[0.12em] uppercase transition-colors duration-200",
                    isActive(item.to) || servicesOpen
                      ? "bg-primary-soft text-primary-deep"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-300",
                      servicesOpen && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </Link>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      key="services-menu"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full z-50 mt-2 min-w-[240px] rounded-xl border border-border bg-card p-2 shadow-lg"
                    >
                      <ul className="flex flex-col gap-0.5">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              to="/services/$service"
                              params={{ service: service.slug }}
                              onClick={() => {
                                setServicesOpen(false);
                              }}
                              className="block rounded-lg px-3.5 py-2.5 text-[0.85rem] font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[0.78rem] font-bold tracking-[0.12em] uppercase transition-colors duration-200",
                  isActive(item.to)
                    ? "bg-primary-soft text-primary-deep"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-6 py-3 text-[0.75rem] font-bold tracking-[0.14em] uppercase text-primary-foreground shadow-green transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 sm:inline-flex"
          >
            Contact Us
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-border lg:hidden"
          >
            <motion.span
              className="block h-[2px] w-5 rounded bg-foreground"
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block h-[2px] w-5 rounded bg-foreground"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[2px] w-5 rounded bg-foreground"
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <nav aria-label="Mobile" className="container-x flex flex-col py-4">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.3 }}
                >
                  {item.to === "/services" ? (
                    <div className="border-b border-border/70">
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.to}
                          className={cn(
                            "block flex-1 py-4 font-display text-lg font-semibold",
                            isActive(item.to) ? "text-primary-deep" : "text-foreground",
                          )}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          aria-expanded={mobileServicesOpen}
                          aria-label={mobileServicesOpen ? "Collapse services" : "Expand services"}
                          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground"
                        >
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-300",
                              mobileServicesOpen && "rotate-180",
                            )}
                            aria-hidden="true"
                          />
                        </button>
                      </div>

                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.ul
                            key="mobile-services"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="overflow-hidden pl-3 pb-2"
                          >
                            {services.map((service) => (
                              <li key={service.slug}>
                                <Link
                                  to="/services/$service"
                                  params={{ service: service.slug }}
                                  onClick={() => {
                                    setOpen(false);
                                  }}
                                  className="block py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary active:text-primary"
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.to}
                      className={cn(
                        "block border-b border-border/70 py-4 font-display text-lg font-semibold",
                        isActive(item.to) ? "text-primary-deep" : "text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="mt-5 rounded-full bg-primary px-6 py-4 text-center text-[0.75rem] font-bold tracking-[0.14em] uppercase text-primary-foreground"
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
