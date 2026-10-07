import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { staggerChild } from "./Reveal";
import type { Brand } from "@/data/brands";

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <motion.div variants={staggerChild}>
      <Link
        to="/products/$brand"
        params={{ brand: brand.slug }}
        className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
      >
        <div>
          <span className="block font-display text-2xl font-extrabold tracking-[0.14em] text-foreground transition-colors duration-300 group-hover:text-primary-deep">
            {brand.wordmark}
          </span>
          <span className="mt-2 block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-muted-foreground">
            {brand.category}
          </span>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{brand.tagline}</p>
        </div>
        <span className="mt-8 inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.16em] uppercase text-primary-deep">
          View brand
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </motion.div>
  );
}
