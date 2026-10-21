import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { staggerChild } from "./Reveal";
import { BrandLogo } from "./BrandLogo";
import type { Brand } from "@/data/brands";

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <motion.div variants={staggerChild} className="h-full">
      <Link
        to="/products/$brand"
        params={{ brand: brand.slug }}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:border-primary/50"
      >
        <div className="flex flex-col items-center text-center">
          <div className="flex h-24 w-full items-center justify-center p-2 transition-transform duration-300 group-hover:scale-105">
            <BrandLogo slug={brand.slug} />
          </div>

          <div className="mt-4 w-full border-t border-slate-100 pt-4">
            <span className="block text-xs font-bold tracking-wider uppercase text-primary">
              {brand.category}
            </span>
            <h3 className="mt-1 text-base font-bold text-slate-800 group-hover:text-primary">
              {brand.name}
            </h3>
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500">
              {brand.tagline}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 transition-colors group-hover:text-primary">
          <span>Explore Products</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}
