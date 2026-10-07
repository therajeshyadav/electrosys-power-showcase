import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img src="/logo.png" alt="Electrosys" className={cn("h-10 w-auto object-contain", className)} />
  );
}

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center transition-transform duration-200 hover:scale-[1.02]",
        tone === "light" && "rounded-xl bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur-xs",
        className,
      )}
    >
      <img
        src="/logo.png"
        alt="Electrosys Power Solutions"
        className={cn(
          "w-auto object-contain",
          tone === "light" ? "h-9 max-w-[180px]" : "h-11 max-w-[210px]",
        )}
      />
    </span>
  );
}
