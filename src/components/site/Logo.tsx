import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={cn("h-9 w-9", className)}
      fill="none"
    >
      <rect width="40" height="40" rx="11" fill="currentColor" />
      <path
        d="M22.6 8.5 12.4 21.4h6.1L17 31.5l10.4-13.1h-6.2l1.4-9.9Z"
        fill="var(--color-primary-foreground)"
      />
    </svg>
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
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="text-primary" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-extrabold tracking-[0.16em]",
            tone === "light" ? "text-ink-foreground" : "text-foreground",
          )}
        >
          ELECTROSYS
        </span>
        <span
          className={cn(
            "mt-1 text-[0.55rem] font-semibold tracking-[0.26em]",
            tone === "light" ? "text-ink-foreground/60" : "text-muted-foreground",
          )}
        >
          POWER SOLUTIONS
        </span>
      </span>
    </span>
  );
}
