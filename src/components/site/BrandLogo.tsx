import { cn } from "@/lib/utils";

export function BrandLogo({
  slug,
  name,
  symbol,
  className,
}: {
  slug?: string;
  name?: string;
  symbol?: string;
  className?: string;
}) {
  const rawKey = slug || name || "";
  const key = rawKey
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  if (key.includes("vertiv")) {
    return (
      <div
        className={cn("flex items-center gap-2.5 font-bold tracking-wider text-black", className)}
      >
        <svg viewBox="0 0 100 100" className="h-8 w-8 shrink-0" fill="currentColor">
          <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z M50 28 L30 42 L38 52 L50 44 L62 52 L70 42 Z M50 62 L35 72 L65 72 Z" />
        </svg>
        <span className="text-xl font-extrabold tracking-[0.18em]">VERTIV</span>
      </div>
    );
  }

  if (key.includes("riello")) {
    return (
      <div className={cn("flex items-center gap-2 font-bold", className)}>
        <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-tr from-[#005BAC] to-[#E30613] p-1 text-white font-extrabold text-sm">
          R
        </div>
        <div className="flex items-baseline">
          <span className="text-2xl font-black italic tracking-tight text-[#003B70]">riello</span>
          <span className="ml-1 text-xs font-bold text-muted-foreground uppercase">ups</span>
        </div>
      </div>
    );
  }

  if (key.includes("apc")) {
    return (
      <div className={cn("flex flex-col items-center leading-none", className)}>
        <span className="text-2xl font-black tracking-tighter text-[#E31B23]">APC</span>
        <span className="mt-0.5 text-[0.55rem] font-bold text-[#009639] tracking-wider">
          by Schneider Electric
        </span>
      </div>
    );
  }

  if (key.includes("ablerex")) {
    return (
      <div className={cn("flex items-center gap-1", className)}>
        <svg viewBox="0 0 40 40" className="h-7 w-7 text-[#005BAC]" fill="currentColor">
          <path d="M10 32 C12 18, 22 10, 26 10 C28 10, 20 22, 24 32 C26 32, 34 16, 30 8 C18 8, 8 22, 10 32 Z" />
        </svg>
        <div className="flex flex-col">
          <span className="text-xl font-black italic tracking-tight text-[#1E2B4D]">Ablerex</span>
          <span className="text-[0.5rem] font-semibold text-muted-foreground italic">
            every moment counts
          </span>
        </div>
      </div>
    );
  }

  if (key.includes("eaton")) {
    return (
      <div className={cn("flex flex-col items-center", className)}>
        <span className="text-2xl font-black tracking-tight text-[#005EB8]">EAT•N</span>
        <span className="text-[0.52rem] font-semibold text-muted-foreground">
          Powering Business Worldwide
        </span>
      </div>
    );
  }

  if (key.includes("eltek")) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#78BE20] text-white font-extrabold text-xs">
          ∞
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-wider text-[#1C1C1C]">ELTEK</span>
          <span className="text-[0.5rem] font-semibold text-muted-foreground">
            A Delta Group Company
          </span>
        </div>
      </div>
    );
  }

  if (key.includes("cet") || key.includes("ce-t")) {
    return (
      <div className={cn("flex flex-col items-center leading-none", className)}>
        <span className="text-2xl font-black tracking-wider text-[#E30613]">CE+T</span>
        <span className="mt-0.5 text-[0.6rem] font-black tracking-[0.25em] text-black">POWER</span>
      </div>
    );
  }

  if (key.includes("socomec")) {
    return (
      <div className={cn("flex flex-col leading-none", className)}>
        <div className="flex items-center gap-1">
          <span className="h-3.5 w-3.5 bg-[#FFBF00] inline-block rounded-xs" />
          <span className="text-xl font-black tracking-tight text-[#004B87]">socomec</span>
        </div>
        <span className="mt-1 text-[0.52rem] font-bold text-muted-foreground">
          Innovative Power Solutions
        </span>
      </div>
    );
  }

  if (key.includes("fiamm")) {
    return (
      <div className={cn("flex flex-col items-center leading-none", className)}>
        <span className="text-2xl font-black tracking-wider text-[#E30613]">FIAMM</span>
        <span className="mt-1 text-[0.52rem] font-bold text-muted-foreground">
          Your World, Our Energy
        </span>
      </div>
    );
  }

  if (key.includes("yuasa")) {
    return (
      <div className={cn("flex flex-col items-center leading-none", className)}>
        <svg viewBox="0 0 50 30" className="h-6 w-10 text-[#E30613]" fill="currentColor">
          <path d="M5 25 L15 5 L20 5 L12 25 Z M18 25 L23 5 L27 5 L32 25 Z M30 25 L38 5 L45 5 L35 25 Z" />
        </svg>
        <span className="mt-1 text-lg font-black tracking-[0.16em] text-black">YUASA</span>
      </div>
    );
  }

  if (key.includes("csb")) {
    return (
      <div className={cn("flex flex-col items-center leading-none", className)}>
        <span className="text-[0.55rem] font-bold tracking-widest text-[#E35205]">BATTERY</span>
        <span className="text-2xl font-black tracking-tight text-[#E35205]">CSB</span>
      </div>
    );
  }

  if (key.includes("enersys")) {
    return (
      <div className={cn("flex flex-col items-center leading-none", className)}>
        <span className="text-2xl font-black italic tracking-tight text-[#231F20]">EnerSys</span>
        <div className="mt-0.5 h-0.5 w-16 bg-[#E30613]" />
        <span className="mt-0.5 text-[0.5rem] italic font-semibold text-muted-foreground">
          Power/Full Solutions
        </span>
      </div>
    );
  }

  if (key.includes("narada")) {
    return (
      <div className={cn("flex items-center gap-1", className)}>
        <span className="text-xl font-black italic text-[#003A70]">MP</span>
        <span className="text-xl font-black italic tracking-wider text-[#E35205]">narada</span>
      </div>
    );
  }

  if (key.includes("rblti") || key.includes("rb-1")) {
    return (
      <div className={cn("flex items-center gap-1.5", className)}>
        <div className="flex items-center border border-[#003B70] px-1.5 py-0.5 text-lg font-black text-[#003B70]">
          RB
        </div>
        <div className="flex flex-col text-left leading-none">
          <span className="text-lg font-black text-[#E35205]">1</span>
          <span className="text-[0.55rem] font-bold text-black">LTI</span>
        </div>
      </div>
    );
  }

  if (key.includes("franklin")) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <div className="flex h-6 w-6 items-center justify-center rounded bg-black text-white font-bold text-xs">
          ⚡
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-black tracking-tight text-black">Franklin Electric</span>
          <span className="text-[0.55rem] font-bold text-[#E35205] tracking-wider uppercase">
            Grid Solutions
          </span>
        </div>
      </div>
    );
  }

  const displayText = name || slug || symbol || "BRAND";
  return (
    <span className={cn("font-display text-lg font-extrabold tracking-wider", className)}>
      {displayText.toUpperCase()}
    </span>
  );
}
