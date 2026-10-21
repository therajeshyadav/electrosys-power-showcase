import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img src="/logo.png" alt="Electrosys" className={cn("h-10 w-auto object-contain", className)} />
  );
}

export function Logo({
  className,
  imageClassName,
  tone = "dark",
}: {
  className?: string;
  imageClassName?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center transition-transform duration-200 hover:scale-[1.02]",
        tone === "light" && "rounded-xl bg-white/95 px-3.5 py-2 shadow-sm backdrop-blur-xs",
        className,
      )}
    >
      <img
        src="/logo.png"
        alt="Electrosys Power Solutions"
        className={cn(
          "w-auto object-contain transition-all duration-200",
          tone === "light"
            ? "h-11 sm:h-12 max-w-[220px]"
            : "h-[56px] sm:h-[70px] md:h-[82px] max-w-[280px] sm:max-w-[360px] md:max-w-[420px]",
          imageClassName,
        )}
      />
    </span>
  );
}
